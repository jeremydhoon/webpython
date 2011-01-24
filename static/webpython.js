var WebPython = (function() {

    var editor = null;
    var sSessionId = null;
    var jSubmissionList = null;
    var sLastSubmission = null;
    var dictLastSubmissionResult = null;
    var ixId = 0;
    var jUserBox = null;
    
    function buildTextEditor(j, sSessionIdInit) {
	var nodeEd = j.get(0);
	var ed = CodeMirror.fromTextArea(nodeEd, {
	    parserfile: ["../contrib/python/js/parsepython.js"],
	    path: "/static/codemirror/js/",
	    stylesheet: ("/static/codemirror/contrib/python/css"
			 + "/pythoncolors.css"),
	    parserConfig: {'pythonVersion': 2, 'strictErrors': true},
	    saveFunction: compile,
	    indentUnit: 4
	});

	jUserBox = $("#userbox");
	jUserBox.keypress(function(event) {
	    if (getName()) {
		$("a#run").show();
	    } else {
		$("a#run").hide();
	    }
	});
	$("a#run").hide();
	editor = ed;
	sSessionId = sSessionIdInit
    }

    function getName() {
	return jUserBox.val().trim();
    }

    function addCodeFragment(d) {
	if (ixId === null || d.id > ixId) {
	    ixId = d.id;
	}
	var jCf = $("<div class='codefragment'/>");
	var jUser = $("<div class='codefragment_user'/>");
	var jCode = $("<pre class='codefragment_code'/>");
	var sPythonCode = unescape(d.sPythonCode);
	jUser.text(unescape(d.sUser));
	jCode.text(sPythonCode);
	jCf.append(jUser);
	jCf.append(jCode);
	jCf.click(function(event) {
	    editor.setCode(sPythonCode);
	});
	var sSelector = "div.codefragment";
	while (jSubmissionList.children(sSelector).size() >= 15) {
	    jSubmissionList.children(sSelector).last().remove();
	}
	jSubmissionList.prepend(jCf);
    }

    function buildSubmissionList(listD) {
	jSubmissionList = $("#submission_list");
	listD.reverse();
	$.each(listD, function(_,d) {
	    addCodeFragment(d);
	});
	setInterval(getSubmissions, 2000);
    }

    function compile() {
	if (!getName()) {
	    alert("Fill in your name to enable compilation");
	    return;
	}
	var sPythonCode = editor.getCode();
	if (sPythonCode == sLastSubmission) {
	    runCompiled(dictLastSubmissionResult);
	    return;
	}
	sLastSubmission = sPythonCode;
	var sUrl = "/" + sSessionId + "/compile/"
	$.post(sUrl,
	       {sPythonCode: sPythonCode, sUser: getName()},
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
	if (!json) {
	    return;
	}
	dictLastSubmissionResult = json;
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
	getSubmissions();
    }

    function addAllSubmissions(json) {
	$.each(json, function(_,d) {
	    addCodeFragment(d);
	});
    }

    function getSubmissions() {
	if (ixId !== null) {
	    $.post("/" + sSessionId + "/submissions",
		  {ixLast: ixId}, 
		  addAllSubmissions,
		  "json");
	}
    }

    function print(s) {
	var jConsole = $("#console");
	var sText = jConsole.text();
	jConsole.text(sText + s + "\n");
	var cScroll = jConsole.scrollTop() + 100;
	jConsole.scrollTop(2000*cScroll);
    }
    
    return {buildTextEditor: buildTextEditor,
	    compile: compile,
	    print: print,
	    buildSubmissionList: buildSubmissionList,
	    addCodeFragment: addCodeFragment};

})();

$(document).ready(function() {
    var sSessionId = unescape(dictWebPythonProperties.sSessionId);
    var listCf = dictWebPythonProperties.listCfProperties;
    WebPython.buildTextEditor($("#editor"), sSessionId);
    WebPython.buildSubmissionList(listCf);
});
$(document).ready(function() {
    $("#run").click(function(event) {
	event.preventDefault();
	WebPython.compile();
    })
});