var WebPython = (function() {

    var editor = null;
    var sSessionId = null;
    
    function buildTextEditor(j, sSessionIdInit) {
	var nodeEd = j.get(0);
	var ed = CodeMirror.fromTextArea(nodeEd, {
	    parserfile: ["../contrib/python/js/parsepython.js"],
	    path: "/static/codemirror/js/",
	    stylesheet: "/static/codemirror/contrib/python/css/pythoncolors.css",
	    lineNumbers: true,
	    parserConfig: {'pythonVersion': 2, 'strictErrors': true},
	    indentUnit: 4
	});
	editor = ed;
	sSessionId = sSessionIdInit
    }

    function compile() {
	var sPythonCode = editor.getCode();
	var sUrl = "/" + sSessionId + "/compile/"
	$.post(sUrl,
	       {sPythonCode: sPythonCode},
	       runCompiled,
	       "json");
    }

    function formatError(listStack) {
	listS = []
	$.each(listStack, function(_,stack) {
	    listS.push("in module " + stack.module +
		       " at line " + stack.lineno);
	});
	return "Exception...\n" + listS.join("\n");
    }

    function runCompiled(json) {
	if (json.fCompileSuccess) {
	    eval(json.sJsCode);
	    try {
		var m = $pyjs.loaded_modules.webpython();
	    } catch (exn) {
		print(formatError($pyjs.trackstack));
		print(exn.__class__.__name__ + ": " + $p.str(exn));
	    }
	} else {
	    alert("oops.");
	    print(json.sTb);
	}
    }

    function print(s) {
	var jConsole = $("#console");
	var sText = jConsole.text();
	jConsole.text(sText + s + "\n");
    }
    
    return {buildTextEditor: buildTextEditor,
	    compile: compile,
	    print: print};

})();

$(document).ready(function() {
    var sSessionId = dictWebPythonProperties.sSessionId;
    WebPython.buildTextEditor($("#editor"), sSessionId);
});
$(document).ready(function() {
    $("#run").click(function(event) {
	event.preventDefault();
	WebPython.compile();
    })
});