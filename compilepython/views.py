#!/usr/bin/env python

import functools
import json
import random
import traceback
import urllib

from django import http
from django.core import urlresolvers
from django import shortcuts

import models
import runpyjamas

CHARS = "".join(chr(i + ord('a')) for i in xrange(26))
CHARS += CHARS.upper()

def generate_session_id(cLen=5):
    return "".join(random.choice(CHARS) for _ in xrange(cLen))

def loads_session(fn):
    @functools.wraps(fn)
    def wrapper(req, *args, **kwargs):
        sSessionId = kwargs.pop("sSessionId",None)
        mgr = models.Session.objects
        (sess,f) = mgr.get_or_create(sHash=sSessionId)
        if f:
            sess.save()
        kwargs["sess"] = sess
        return fn(req, **kwargs)
    return wrapper

def get_serialized_pcfs(sess, **kwargs):
    mgr = models.PythonCodeFragment.objects
    listCf = mgr.filter(sess=sess, **kwargs).order_by('-dtCreated')[:15]
    listCfProperties = [{"sPythonCode": urllib.quote(str(cf.sPythonCode)),
                         "sUser": urllib.quote(str(cf.sUser)),
                         "id": cf.id} for cf in listCf]
    return listCfProperties

def redirect_to_session(req):
    sSessionId = generate_session_id()
    print sSessionId
    sUrl = urlresolvers.reverse(session, args=(sSessionId,))
    return http.HttpResponsePermanentRedirect(sSessionId)

@loads_session
def session(req, sess):
    listCf = get_serialized_pcfs(sess)
    # this is horrendously insecure
    dictProperties = json.dumps({"sSessionId": str(sess.sHash),
                                 "listCfProperties": listCf})
    # build you a context...
    return shortcuts.render_to_response("sitebase.html", locals())

@loads_session
def compile_python(req, sess):
    if req.method != "POST":
        return http.HttpResponseNotFound()
    sPythonCode = req.POST.get("sPythonCode")
    fCompileSuccess = True
    sJsCode = None
    sTb = None
    try:
        sJsCode = runpyjamas.run_pyjamas(sPythonCode)
    except:
        sTb = traceback.format_exc()
        fCompileSuccess = False
    dictResult = {"sJsCode": sJsCode, "sTb":sTb, "fCompileSuccess":
                  fCompileSuccess}
    pcf = models.PythonCodeFragment.objects.create(
        sess=sess, sPythonCode=sPythonCode, sJsCode=sJsCode,
        sUser=req.POST.get("sUser",""), fCompiled=fCompileSuccess)
    pcf.save()
                                                   
    return http.HttpResponse(json.dumps(dictResult),
                             mimetype="application/json")

@loads_session
def get_pcfs(req,sess):
    ixLast = int(req.POST.get("ixLast",0))
    listCf = get_serialized_pcfs(sess, id__gt=ixLast)
    return http.HttpResponse(json.dumps(listCf), mimetype="application/json")
                                         
