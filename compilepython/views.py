#!/usr/bin/env python

import functools
import json
import random
import traceback

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
        (sess,f) = models.Session.objects.get_or_create(sHash=sSessionId)
        if f:
            sess.save()
        kwargs["sess"] = sess
        return fn(req, **kwargs)
    return wrapper

def redirect_to_session(req):
    sSessionId = generate_session_id()
    print sSessionId
    sUrl = urlresolvers.reverse(session, args=(sSessionId,))
    return http.HttpResponsePermanentRedirect(sSessionId)

@loads_session
def session(req, sess):
    listCf = models.PythonCodeFragment.objects.filter(sess=sess)
    dictProperties = json.dumps({"sSessionId": str(sess.sHash)})
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
    return http.HttpResponse(json.dumps(dictResult),
                             mimetype="application/json")
                                         
