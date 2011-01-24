#!/usr/bin/env python

from os import path
import StringIO
import sys

PYJAMAS_PATH = path.abspath(path.join(path.dirname(__file__), "../pyjamas"))
sys.path.insert(0, path.join(PYJAMAS_PATH, "pyjs","src"))
sys.path.append(path.join(PYJAMAS_PATH, "pgen"))

import pyjs.translator
pyjs.pyjspth = PYJAMAS_PATH
pyjs.path.append(path.join(PYJAMAS_PATH, "library"))

compiler = pyjs.translator.import_compiler(None)

def run_pyjamas(sCode):
    tree = compiler.parse(sCode)
    outfile = StringIO.StringIO()
    t = pyjs.translator.Translator(compiler, "webpython", "doesnotexist.py",
                                   sCode, tree, outfile)
    sCompiled = outfile.getvalue()
    outfile.close()
    return sCompiled
