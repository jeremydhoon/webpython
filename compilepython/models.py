#!/usr/bin/env python

from django.db import models

class Session(models.Model):
    sHash = models.CharField(max_length=160)
    dtCreated = models.DateTimeField(auto_now_add=True)

class PythonCodeFragment(models.Model):
    sPythonCode = models.TextField()
    sJsCode = models.TextField()
    sUser = models.CharField(max_length=200)
    dtCreated = models.DateTimeField(auto_now_add=True)
    fCompiled = models.BooleanField(default=False)
    sess = models.ForeignKey(Session)
    

