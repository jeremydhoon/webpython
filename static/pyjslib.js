/* start module: dynamic */
var dynamic;
$pyjs.loaded_modules['dynamic'] = function (__mod_name__) {
	if($pyjs.loaded_modules['dynamic'].__was_initialized__) return $pyjs.loaded_modules['dynamic'];
	var $module = dynamic = $pyjs.loaded_modules["dynamic"];
	dynamic.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'dynamic';
	var __name__ = dynamic.__name__ = __mod_name__;

	var attrib_remap = ['apply', 'break', 'call', 'case', 'catch', 'class', 'comment', 'const', 'constructor', 'continue', 'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally', 'for', 'function', 'if', 'import', 'in', 'label', 'name', 'new', 'prototype', 'replace', 'return', 'split', 'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with'];
	$module['DOM'] = pyjslib['___import___']('pyjamas.DOM', null, null, false);
	$module['sys'] = pyjslib['___import___']('sys', null);
	;
	$module['AjaxError'] = (function(){
		var $cls_instance = $pyjs__class_instance('AjaxError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '04ad40744ca8684e351eb194d932c023';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['RuntimeError']));
	})();
	$module['createHttpRequest'] = function() {
		var res,$pyjs_try_err,err;
		if (pyjslib['bool'](typeof $wnd.XMLHttpRequest != 'undefined')) {
			return new XMLHttpRequest();
		}
		try {
			res = new ActiveXObject("Msxml2.XMLHTTP");
			return res;
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: dynamic, try_lineno: 22};
			if (true) {
				$pyjs.__last_exception__.except_lineno = 26;
				err = $pyjs_try_err;
			}
		}
		return null;
	};
	$module['createHttpRequest'].__name__ = 'createHttpRequest';

	$module['createHttpRequest'].__bind_type__ = 0;
	$module['createHttpRequest'].__args__ = [null,null];
	$module['load'] = function(url, onreadystatechange, on_load_fn, async) {
		if (typeof onreadystatechange == 'undefined') onreadystatechange=arguments.callee.__args__[3][1];
		if (typeof on_load_fn == 'undefined') on_load_fn=arguments.callee.__args__[4][1];
		if (typeof async == 'undefined') async=arguments.callee.__args__[5][1];
		var $or5,$attr20,req,$pyjs_try_err,$attr9,$or4,$or6,$or3,$and3,$and4,$attr19,$attr18,$attr15,$attr14,$attr17,$attr16,$attr11,$attr10,$attr13,$attr12,err,$add2,$add1;
		;
		$wnd.status = (typeof ($add1=String('Loading '))==typeof ($add2=url) && (typeof $add1=='number'||typeof $add1=='string')?
			$add1+$add2:
			pyjslib['op_add']($add1,$add2));
		req = $module['createHttpRequest']();
		if (pyjslib['bool']((onreadystatechange === null))) {
			onreadystatechange = function(evnt) {
				var $attr8,$or1,$add4,$or2,$attr1,$and1,$and2,$attr2,$attr5,$attr4,$attr7,$attr6,$add3,str,$attr3;
				if (pyjslib['bool']((pyjslib['bool']($and1=pyjslib['op_eq'](((($attr1=req['readyState']) !== null & ($attr2=req).__is_instance__) && typeof $attr1 == 'function'?
							pyjslib['getattr']($attr2, 'readyState'):
							req['readyState']), 4))?(pyjslib['bool']($or1=pyjslib['op_eq'](((($attr3=req['status']) !== null & ($attr4=req).__is_instance__) && typeof $attr3 == 'function'?
							pyjslib['getattr']($attr4, 'status'):
							req['status']), 200))?$or1:pyjslib['op_eq'](((($attr5=req['status']) !== null & ($attr6=req).__is_instance__) && typeof $attr5 == 'function'?
							pyjslib['getattr']($attr6, 'status'):
							req['status']), 0)):$and1))) {
					str = ((($attr7=req['responseText']) !== null & ($attr8=req).__is_instance__) && typeof $attr7 == 'function'?
								pyjslib['getattr']($attr8, 'responseText'):
								req['responseText']);
					$wnd.status = (typeof ($add3=String('Loaded '))==typeof ($add4=url) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						pyjslib['op_add']($add3,$add4));
					if (pyjslib['bool'](!pyjslib['bool']((on_load_fn === null)))) {
						on_load_fn(evnt, req);
					}
				}
				return null;
			};
			onreadystatechange.__name__ = 'onreadystatechange';

			onreadystatechange.__bind_type__ = 0;
			onreadystatechange.__args__ = [null,null,['evnt']];
		}
req.onreadystatechange = onreadystatechange;
		req['open'](String('GET'), url, async);
		try {
			req['send'](null);
			if (pyjslib['bool'](async)) {
				return null;
			}
			while (pyjslib['bool'](true)) {
				if (pyjslib['bool']((pyjslib['bool']($or3=pyjslib['op_eq'](((($attr9=req['status']) !== null & ($attr10=req).__is_instance__) && typeof $attr9 == 'function'?
							pyjslib['getattr']($attr10, 'status'):
							req['status']), 200))?$or3:(pyjslib['bool']($and3=pyjslib['op_eq'](((($attr11=req['status']) !== null & ($attr12=req).__is_instance__) && typeof $attr11 == 'function'?
							pyjslib['getattr']($attr12, 'status'):
							req['status']), 0))?((($attr13=req['responseText']) !== null & ($attr14=req).__is_instance__) && typeof $attr13 == 'function'?
							pyjslib['getattr']($attr14, 'responseText'):
							req['responseText']):$and3)))) {
					if (pyjslib['bool'](!pyjslib['bool']((on_load_fn === null)))) {
						on_load_fn(null, req);
					}
					return req;
				}
				if (pyjslib['bool']((pyjslib['bool']($or5=!pyjslib['op_eq'](((($attr15=req['status']) !== null & ($attr16=req).__is_instance__) && typeof $attr15 == 'function'?
							pyjslib['getattr']($attr16, 'status'):
							req['status']), 0))?$or5:!pyjslib['op_eq'](((($attr17=req['responseText']) !== null & ($attr18=req).__is_instance__) && typeof $attr17 == 'function'?
							pyjslib['getattr']($attr18, 'responseText'):
							req['responseText']), String(''))))) {
					break;
				}
			}
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: dynamic, try_lineno: 55};
			if (true) {
				$pyjs.__last_exception__.except_lineno = 69;
				err = $pyjs_try_err;
			}
		}
		throw ($module['AjaxError'](String('Synchronous error'), ((($attr19=req['status']) !== null & ($attr20=req).__is_instance__) && typeof $attr19 == 'function'?
					pyjslib['getattr']($attr20, 'status'):
					req['status'])));
		return null;
	};
	$module['load'].__name__ = 'load';

	$module['load'].__bind_type__ = 0;
	$module['load'].__args__ = [null,null,['url'],['onreadystatechange', null],['on_load_fn', null],['async', false]];
	$module['inject'] = function(values, namespace, names) {
		if (typeof namespace == 'undefined') namespace=arguments.callee.__args__[3][1];
		if (typeof names == 'undefined') names=arguments.callee.__args__[4][1];
		var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$iter1_idx,k,$iter1_iter,$iter2_idx,v,$iter2_type,$iter2_array,$iter1_array;
		if (pyjslib['bool']((namespace === null))) {
			namespace = $pyjs.global_namespace;
		}
		values = pyjslib['dict'](values);
		if (pyjslib['bool']((names === null))) {
			$iter1_iter = values;
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				k = $iter1_nextval;
				v = values.__getitem__(k);
namespace[k] = v;
			}
		}
		else {
			$iter2_iter = names;
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):pyjslib['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				k = $iter2_nextval;
				v = values.__getitem__(k);
namespace[k] = v;
			}
		}
		return null;
	};
	$module['inject'].__name__ = 'inject';

	$module['inject'].__bind_type__ = 0;
	$module['inject'].__args__ = [null,null,['values'],['namespace', null],['names', null]];
	$module['activate_css'] = function(targetnode) {
		var $iter3_idx,LC,$iter3_type,$attr21,$iter3_nextval,scriptnodes,$attr22,$attr23,$attr24,$iter3_iter,$iter3_array,fileref,sn;
		scriptnodes = pyjslib['list'](targetnode['getElementsByTagName'](String('link')));
		$iter3_iter = pyjslib['range'](pyjslib['len'](scriptnodes));
		if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
			$iter3_type = 0;
		} else {
			$iter3_iter = $iter3_iter.__iter__();
			$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter3_idx = 0;
		while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):pyjslib['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
			LC = $iter3_nextval;
			sn = scriptnodes.__getitem__(LC);
			sn['parentNode']['removeChild'](sn);
			fileref = $module['DOM']['createElement'](String('link'));
			if (pyjslib['bool']($module.hassattr(sn, String('href')))) {
				fileref.href = ((($attr21=sn['href']) !== null & ($attr22=sn).__is_instance__) && typeof $attr21 == 'function'?
							pyjslib['getattr']($attr22, 'href'):
							sn['href']);
			}
			else {
				fileref.text = ((($attr23=sn['text']) !== null & ($attr24=sn).__is_instance__) && typeof $attr23 == 'function'?
							pyjslib['getattr']($attr24, 'text'):
							sn['text']);
			}
			fileref.rel = String('stylesheet');
			fileref.type = String('text/css');
			$doc['getElementsByTagName'](String('head'))['item'](0)['appendChild'](fileref);
		}
		return null;
	};
	$module['activate_css'].__name__ = 'activate_css';

	$module['activate_css'].__bind_type__ = 0;
	$module['activate_css'].__args__ = [null,null,['targetnode']];
	$module['activate_javascript'] = function(txt) {
		var fileref;
		fileref = $module['DOM']['createElement'](String('script'));
		fileref.text = txt;
		fileref.type = String('text/javascript');
		fileref.language = String('javascript');
		fileref = fileref['cloneNode'](true);
		$doc['getElementsByTagName'](String('head'))['item'](0)['appendChild'](fileref);
		return null;
	};
	$module['activate_javascript'].__name__ = 'activate_javascript';

	$module['activate_javascript'].__bind_type__ = 0;
	$module['activate_javascript'].__args__ = [null,null,['txt']];
	$module['eval'] = function(str) {

		return eval(str);
	};
	$module['eval'].__name__ = 'eval';

	$module['eval'].__bind_type__ = 0;
	$module['eval'].__args__ = [null,null,['str']];
	$module['ajax_eval'] = function(url, on_load_fn, async) {
		var onready;
		;
		onready = function(evnt, req) {
			var str,$attr25,$attr26;
			str = ((($attr25=req['responseText']) !== null & ($attr26=req).__is_instance__) && typeof $attr25 == 'function'?
						pyjslib['getattr']($attr26, 'responseText'):
						req['responseText']);
			$module['activate_javascript'](str);
			if (pyjslib['bool'](!pyjslib['bool']((on_load_fn === null)))) {
				on_load_fn();
			}
			return null;
		};
		onready.__name__ = 'onready';

		onready.__bind_type__ = 0;
		onready.__args__ = [null,null,['evnt'],['req']];
		$module['load'](url, null, onready, async);
		return null;
	};
	$module['ajax_eval'].__name__ = 'ajax_eval';

	$module['ajax_eval'].__bind_type__ = 0;
	$module['ajax_eval'].__args__ = [null,null,['url'],['on_load_fn'],['async']];
	$module['__imported__'] = pyjslib['dict']([]);
	$module['ajax_import'] = function(url, namespace, names) {
		if (typeof namespace == 'undefined') namespace=arguments.callee.__args__[3][1];
		if (typeof names == 'undefined') names=arguments.callee.__args__[4][1];
		var e,name,err,script,$iter4_nextval,req,module,$iter4_idx,$attr28,name_getter,$pyjs_try_err,$iter4_type,$attr27,$iter4_array,$attr29,$attr30,$iter4_iter;
		;
		if (pyjslib['bool']($module['__imported__']['has_key'](url))) {
			module = $module['__imported__'].__getitem__(url);
		}
		else {
			req = $module['load'](url, null, null, false);
			module = null;
			name_getter = pyjslib['list']([]);
			if (pyjslib['bool']((names === null))) {
				names = pyjslib['list']([]);
			}
			$iter4_iter = names;
			if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter.__iter__();
				$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):pyjslib['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				name = $iter4_nextval;
				name_getter['append'](pyjslib['sprintf'](String('$pyjs$moduleObject[\x27%s\x27] = %s\x3B'), pyjslib['tuple']([name, name])));
			}
			script = pyjslib['sprintf'](String('(function ( ) {\x0A$pyjs$moduleObject={}\x3B\x0A%s\x3B\x0A%s\x0Areturn $pyjs$moduleObject\x3B\x0A})()\x3B'), pyjslib['tuple']([((($attr27=req['responseText']) !== null & ($attr28=req).__is_instance__) && typeof $attr27 == 'function'?
						pyjslib['getattr']($attr28, 'responseText'):
						req['responseText']), String('\x0A')['join'](name_getter)]));
			try {
				module = $module['eval'](script);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: dynamic, try_lineno: 177};
				if (true) {
					$pyjs.__last_exception__.except_lineno = 180;
					err = $pyjs_try_err;
					e = $module['sys']['exc_info']();
					throw ($module['AjaxError'](pyjslib['sprintf'](String('Error in %s: %s'), pyjslib['tuple']([url, ((($attr29=e['message']) !== null & ($attr30=e).__is_instance__) && typeof $attr29 == 'function'?
								pyjslib['getattr']($attr30, 'message'):
								e['message'])]))));
				}
			}
			$module['__imported__'].__setitem__(url, module);
		}
		$module['inject'](module, namespace, names);
		return null;
	};
	$module['ajax_import'].__name__ = 'ajax_import';

	$module['ajax_import'].__bind_type__ = 0;
	$module['ajax_import'].__args__ = [null,null,['url'],['namespace', null],['names', null]];
	$module['load_script'] = function(url, onload, async) {
		var e,onload_fn,$add6,$add5;
		$wnd.status = (typeof ($add5=String('Loading '))==typeof ($add6=url) && (typeof $add5=='number'||typeof $add5=='string')?
			$add5+$add6:
			pyjslib['op_add']($add5,$add6));
		onload_fn = function() {
			var $add8,$add7;
			wnd.status = (typeof ($add7=String('Loaded '))==typeof ($add8=url) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				pyjslib['op_add']($add7,$add8));
			if (pyjslib['bool'](!pyjslib['bool']((onload === null)))) {
				$module['eval'](onload);
			}
			return true;
		};
		onload_fn.__name__ = 'onload_fn';

		onload_fn.__bind_type__ = 0;
		onload_fn.__args__ = [null,null];
		e = $module['DOM']['createElement'](String('script'));
		e.src = url;
		e.type = String('text/javascript');
		e.language = String('javascript');
		e.defer = async;
		e.onload = onload_fn;
		$doc['getElementsByTagName'](String('head')).__getitem__(0)['appendChild'](e);
		return null;
	};
	$module['load_script'].__name__ = 'load_script';

	$module['load_script'].__bind_type__ = 0;
	$module['load_script'].__args__ = [null,null,['url'],['onload'],['async']];
	$module['running_timeout'] = 0;
	$module['timeout_idname'] = null;
	$module['timeout_url'] = null;
	$module['timeout_on_load_fn'] = null;
	$module['redo_timeout'] = null;
	$module['timeout_id'] = null;
	$module['ajax_dlink_refresh'] = function(idname, url, on_load_fn, timeout) {

		$module['timeout_idname'] = idname;
		$module['timeout_url'] = url;
		$module['timeout_on_load_fn'] = on_load_fn;
		$module['redo_timeout'] = timeout;
		if (pyjslib['bool']((pyjslib['cmp']($module['running_timeout'], 0) == 1))) {
			return null;
		}
		$module['timeout_id'] = setTimeout($module.do_ajax_dlink_refresh, timeout);
		$module['running_timeout'] = 1;
		return null;
	};
	$module['ajax_dlink_refresh'].__name__ = 'ajax_dlink_refresh';

	$module['ajax_dlink_refresh'].__bind_type__ = 0;
	$module['ajax_dlink_refresh'].__args__ = [null,null,['idname'],['url'],['on_load_fn'],['timeout']];
	$module['do_ajax_dlink_refresh'] = function() {

		if (pyjslib['bool'](pyjslib['op_eq']($module.ajax_dlink($module['timeout_idname'], $module['timeout_url'], $module['timeout_on_load_fn']), 0))) {
			$module['timeout_id'] = null;
			$module['running_timeout'] = 0;
			return null;
		}
		$module['timeout_id'] = null;
		$module['running_timeout'] = 0;
		$module['ajax_dlink_refresh']($module['timeout_idname'], $module['timeout_url'], $module['timeout_on_load_fn'], $module['redo_timeout']);
		return null;
	};
	$module['do_ajax_dlink_refresh'].__name__ = 'do_ajax_dlink_refresh';

	$module['do_ajax_dlink_refresh'].__bind_type__ = 0;
	$module['do_ajax_dlink_refresh'].__args__ = [null,null];
	$module['ajax_dlink'] = function(idname, url, on_load_fn) {
		var body,$attr32,$attr31,xhtoj,onreadystatechange;
		body = ((($attr31=$doc['body']) !== null & ($attr32=$doc).__is_instance__) && typeof $attr31 == 'function'?
					pyjslib['getattr']($attr32, 'body'):
					$doc['body']);
		if (pyjslib['bool']($module['timeout_id'])) {
			clearTimeout($module['timeout_id']);
		}
		onreadystatechange = function() {
			var txt,$attr40,jsnode,$attr33,$attr37,$attr36,$attr35,$attr34,$attr39,$attr38;
			if (pyjslib['bool'](pyjslib['op_eq'](((($attr33=$module.xhtoj['readyState']) !== null & ($attr34=$module.xhtoj).__is_instance__) && typeof $attr33 == 'function'?
						pyjslib['getattr']($attr34, 'readyState'):
						$module.xhtoj['readyState']), 4))) {
				jsnode = 0;
				if (pyjslib['bool'](pyjslib['op_eq'](((($attr35=$module.xhtoj['status']) !== null & ($attr36=$module.xhtoj).__is_instance__) && typeof $attr35 == 'function'?
							pyjslib['getattr']($attr36, 'status'):
							$module.xhtoj['status']), 200))) {
					txt = ((($attr37=$module.xhtoj['responseText']) !== null & ($attr38=$module.xhtoj).__is_instance__) && typeof $attr37 == 'function'?
								pyjslib['getattr']($attr38, 'responseText'):
								$module.xhtoj['responseText']);
					jsnode = null;
					if (pyjslib['bool'](idname)) {
						jsnode = $module['DOM']['getElementById'](idname);
					}
					if (pyjslib['bool']((jsnode === null))) {
						jsnode = $module['DOM']['createElement'](String('script'));
					}
					$module['activate_javascript'](txt);
					if (pyjslib['bool'](!pyjslib['bool']((on_load_fn === null)))) {
						$wnd['alert'](on_load_fn);
						$module.test_fn();
					}
					return 1;
				}
				else {
					jsnode = $module['DOM']['getElementById'](idname);
					if (pyjslib['bool'](!pyjslib['bool']((jsnode === null)))) {
						jsnode.innerHTML = ((($attr39=$module.xhtoj['status']) !== null & ($attr40=$module.xhtoj).__is_instance__) && typeof $attr39 == 'function'?
									pyjslib['getattr']($attr40, 'status'):
									$module.xhtoj['status']);
					}
				}
			}
			return null;
		};
		onreadystatechange.__name__ = 'onreadystatechange';

		onreadystatechange.__bind_type__ = 0;
		onreadystatechange.__args__ = [null,null];
		xhtoj = $module['createHttpRequest']();
		xhtoj.onreadystatechange = onreadystatechange;
		xhtoj['open'](String('GET'), url, true);
		xhtoj['send'](String(''));
		return 0;
	};
	$module['ajax_dlink'].__name__ = 'ajax_dlink';

	$module['ajax_dlink'].__bind_type__ = 0;
	$module['ajax_dlink'].__args__ = [null,null,['idname'],['url'],['on_load_fn']];
	return this;
}; /* end dynamic */


/* end module: dynamic */

/* start module: sys */
var sys;
$pyjs.loaded_modules['sys'] = function (__mod_name__) {
	if($pyjs.loaded_modules['sys'].__was_initialized__) return $pyjs.loaded_modules['sys'];
	var $module = sys = $pyjs.loaded_modules["sys"];
	sys.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'sys';
	var __name__ = sys.__name__ = __mod_name__;

	var attrib_remap = ['apply', 'break', 'call', 'case', 'catch', 'class', 'comment', 'const', 'constructor', 'continue', 'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally', 'for', 'function', 'if', 'import', 'in', 'label', 'name', 'new', 'prototype', 'replace', 'return', 'split', 'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with'];
	$module['overrides'] = null;
	$module['loadpath'] = null;
	$module['stacktrace'] = null;
	$module['appname'] = null;
	$module['setloadpath'] = function(lp) {

		$module['loadpath'] = lp;
		return null;
	};
	$module['setloadpath'].__name__ = 'setloadpath';

	$module['setloadpath'].__bind_type__ = 0;
	$module['setloadpath'].__args__ = [null,null,['lp']];
	$module['setappname'] = function(an) {

		$module['appname'] = an;
		return null;
	};
	$module['setappname'].__name__ = 'setappname';

	$module['setappname'].__bind_type__ = 0;
	$module['setappname'].__args__ = [null,null,['an']];
	$module['getloadpath'] = function() {

		return $module['loadpath'];
	};
	$module['getloadpath'].__name__ = 'getloadpath';

	$module['getloadpath'].__bind_type__ = 0;
	$module['getloadpath'].__args__ = [null,null];
	$module['addoverride'] = function(module_name, path) {

		$module['overrides'].__setitem__(module_name, path);
		return null;
	};
	$module['addoverride'].__name__ = 'addoverride';

	$module['addoverride'].__bind_type__ = 0;
	$module['addoverride'].__args__ = [null,null,['module_name'],['path']];
	$module['exc_info'] = function() {
		var le,$attr1,$attr3,$attr2,$attr5,$attr4,$attr6,cls;
		le = $pyjs.__last_exception__;
		if (pyjslib['bool'](!pyjslib['bool'](le))) {
			return pyjslib['tuple']([null, null, null]);
		}
		if (pyjslib['bool'](!pyjslib['bool'](pyjslib['hasattr'](((($attr1=le['error']) !== null & ($attr2=le).__is_instance__) && typeof $attr1 == 'function'?
					pyjslib['getattr']($attr2, 'error'):
					le['error']), String('__class__'))))) {
			cls = null;
		}
		else {
			cls = ((($attr3=le['error']['__class__']) !== null & ($attr4=le['error']).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, '__class__'):
						le['error']['__class__']);
		}
		return pyjslib['tuple']([cls, ((($attr5=le['error']) !== null & ($attr6=le).__is_instance__) && typeof $attr5 == 'function'?
					pyjslib['getattr']($attr6, 'error'):
					le['error']), null]);
	};
	$module['exc_info'].__name__ = 'exc_info';

	$module['exc_info'].__bind_type__ = 0;
	$module['exc_info'].__args__ = [null,null];
	$module['exc_clear'] = function() {

$pyjs.__last_exception__ = null;
	};
	$module['exc_clear'].__name__ = 'exc_clear';

	$module['exc_clear'].__bind_type__ = 0;
	$module['exc_clear'].__args__ = [null,null];
sys.save_exception_stack = function () {
    var save_stack = [];
    for (var needle in $pyjs.trackstack) {
        var t = new Object();
        for (var p in $pyjs.trackstack[needle]) {
            t[p] = $pyjs.trackstack[needle][p];
        }
        save_stack.push(t);
        $pyjs.__last_exception_stack__ = save_stack;
    }
return null;
};
	$module['trackstackstr'] = function(stack) {
		if (typeof stack == 'undefined') stack=arguments.callee.__args__[2][1];
		var $attr7,$attr8,$iter1_nextval,$iter1_type,$attr10,stackstrings,$iter1_iter,s,$iter1_array,msg,$attr9,$iter1_idx;
		if (pyjslib['bool']((stack === null))) {
			stack = $pyjs.__last_exception_stack__;
		}
		if (pyjslib['bool'](!pyjslib['bool'](stack))) {
			return String('');
		}
		stackstrings = pyjslib['list']([]);
		msg = String('');
		$iter1_iter = pyjslib['list'](stack);
		if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter.__iter__();
			$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			s = $iter1_nextval;
msg = eval(s.module + '.__track_lines__[' + s.lineno + ']');
			if (pyjslib['bool'](msg)) {
				stackstrings['append'](msg);
			}
			else {
				stackstrings['append'](pyjslib['sprintf'](String('%s.py, line %d'), pyjslib['tuple']([((($attr7=s['module']) !== null & ($attr8=s).__is_instance__) && typeof $attr7 == 'function'?
							pyjslib['getattr']($attr8, 'module'):
							s['module']), ((($attr9=s['lineno']) !== null & ($attr10=s).__is_instance__) && typeof $attr9 == 'function'?
							pyjslib['getattr']($attr10, 'lineno'):
							s['lineno'])])));
			}
		}
		return String('\x0A')['join'](stackstrings);
	};
	$module['trackstackstr'].__name__ = 'trackstackstr';

	$module['trackstackstr'].__bind_type__ = 0;
	$module['trackstackstr'].__args__ = [null,null,['stack', null]];
	$module['platform'] = $pyjs.platform;
	$module['byteorder'] = String('little');
	$module['maxint'] = 2147483647;
	return this;
}; /* end sys */


/* end module: sys */

/* start module: pyjslib */
var pyjslib;
$pyjs.loaded_modules['pyjslib'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjslib'].__was_initialized__) return $pyjs.loaded_modules['pyjslib'];
	var $module = pyjslib = $pyjs.loaded_modules["pyjslib"];
	pyjslib.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjslib';
	var __name__ = pyjslib.__name__ = __mod_name__;
	var $add3,$add1,$add2,$add6,$add5,$add4;
	;
	$module['platform'] = $pyjs.platform;
	$module['sys'] = null;
	$module['dynamic'] = null;

var $max_float_int = 1;
for (var i = 0; i < 1000; i++) {
    $max_float_int *= 2;
    if ($max_float_int + 1 == $max_float_int) {
        break;
    }
}
$max_int = 0x7fffffff;
$min_int = -0x80000000;

	$module['object'] = (function(){
		var $cls_instance = $pyjs__class_instance('object');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '5894e02da72b4636ea36739050a62d2d';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array());
	})();
	$module['op_is'] = function(a, b) {


    if (a === b) return true;
    if (a !== null && b !== null) {
        switch ((a.__number__ << 8) | b.__number__) {
            case 0x0101:
                return a == b;
            case 0x0202:
                return a.__v == b.__v;
            case 0x0404:
                return a.__cmp__(b) == 0;
        }
    }
    return false;

	};
	$module['op_is'].__name__ = 'op_is';

	$module['op_is'].__bind_type__ = 0;
	$module['op_is'].__args__ = [null,null,['a'],['b']];
	$module['op_eq'] = function(a, b) {


    if (a === null) {
        if (b === null) return true;
        return false;
    }
    if (b === null) {
        return false;
    }
    switch ((a.__number__ << 8) | b.__number__) {
        case 0x0101:
        case 0x0401:
            return a == b;
        case 0x0102:
            return a == b.__v;
        case 0x0201:
            return a.__v == b;
        case 0x0202:
            return a.__v == b.__v;
        case 0x0104:
        case 0x0204:
            a = new pyjslib['long'](a.valueOf());
        case 0x0404:
            return a.__cmp__(b) == 0;
        case 0x0402:
            return a.__cmp__(new pyjslib['long'](b.valueOf())) == 0;
    }
    if ((typeof a == 'object' || typeof a == 'function') && typeof a.__cmp__ == 'function') {
        if (typeof b.__cmp__ != 'function') {
            return false;
        }
        if (a.__cmp__ === b.__cmp__) {
            return a.__cmp__(b) == 0;
        }
        if (pyjslib['_isinstance'](a, b)) {
            return a.__cmp__(b) == 0;
        }
        return false;
    } else if ((typeof b == 'object' || typeof b == 'function') && typeof b.__cmp__ == 'function') {
        // typeof b.__cmp__ != 'function'
        // a.__cmp__ !== b.__cmp__
        if (pyjslib['_isinstance'](a, b)) {
            return b.__cmp__(a) == 0;
        }
        return false;
    }
    return a == b;
    
	};
	$module['op_eq'].__name__ = 'op_eq';

	$module['op_eq'].__bind_type__ = 0;
	$module['op_eq'].__args__ = [null,null,['a'],['b']];
	$module['op_uadd'] = function(v) {


    switch (v.__number__) {
        case 0x01:
        case 0x02:
        case 0x04:
            return v;
    }
    if (v !== null) {
        if (typeof v['__pos__'] == 'function') return v.__pos__();
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('bad operand type for unary +: \x27%r\x27'), v)));
		return null;
	};
	$module['op_uadd'].__name__ = 'op_uadd';

	$module['op_uadd'].__bind_type__ = 0;
	$module['op_uadd'].__args__ = [null,null,['v']];
	$module['op_usub'] = function(v) {


    switch (v.__number__) {
        case 0x01:
            return -v;
        case 0x02:
            return new pyjslib['int'](-v);
    }
    if (v !== null) {
        if (typeof v['__neg__'] == 'function') return v.__neg__();
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('bad operand type for unary -: \x27%r\x27'), v)));
		return null;
	};
	$module['op_usub'].__name__ = 'op_usub';

	$module['op_usub'].__bind_type__ = 0;
	$module['op_usub'].__args__ = [null,null,['v']];
	$module['op_add'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                return x + y;
            case 0x0102:
                return x + y.__v;
            case 0x0201:
                return x.__v + y;
            case 0x0202:
                return new pyjslib['int'](x.__v + y.__v);
            case 0x0204:
                return (new pyjslib['long'](x.__v)).__add(y);
            case 0x0402:
                return x.__add(new pyjslib['long'](y.__v));
            case 0x0404:
                return x.__add(y);
        }
        if (!x.__number__) {
            if (typeof x == 'string' && typeof y == 'string') return x + y;
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && pyjslib['isinstance'](x, y)
                && typeof x['__add__'] == 'function')
                return y.__add__(x);
            if (typeof x['__add__'] == 'function') return x.__add__(y);
        }
        if (!y.__number__ && typeof y['__radd__'] == 'function') return y.__radd__(x);
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('unsupported operand type(s) for +: \x27%r\x27, \x27%r\x27'), pyjslib['tuple']([x, y]))));
		return null;
	};
	$module['op_add'].__name__ = 'op_add';

	$module['op_add'].__bind_type__ = 0;
	$module['op_add'].__args__ = [null,null,['x'],['y']];
	$module['op_sub'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                return x - y;
            case 0x0102:
                return x - y.__v;
            case 0x0201:
                return x.__v - y;
            case 0x0202:
                return new pyjslib['int'](x.__v - y.__v);
            case 0x0204:
                return (new pyjslib['long'](x.__v)).__sub(y);
            case 0x0402:
                return x.__sub(new pyjslib['long'](y.__v));
            case 0x0404:
                return x.__sub(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && pyjslib['isinstance'](x, y)
                && typeof x['__sub__'] == 'function')
                return y.__sub__(x);
            if (typeof x['__sub__'] == 'function') return x.__sub__(y);
        }
        if (!y.__number__ && typeof y['__rsub__'] == 'function') return y.__rsub__(x);
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('unsupported operand type(s) for -: \x27%r\x27, \x27%r\x27'), pyjslib['tuple']([x, y]))));
		return null;
	};
	$module['op_sub'].__name__ = 'op_sub';

	$module['op_sub'].__bind_type__ = 0;
	$module['op_sub'].__args__ = [null,null,['x'],['y']];
	$module['op_floordiv'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                return Math.floor(x / y);
            case 0x0102:
                if (y.__v == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                return Math.floor(x / y.__v);
            case 0x0201:
                if (y == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                return Math.floor(x.__v / y);
            case 0x0202:
                if (y.__v == 0) throw pyjslib['ZeroDivisionError']('integer division or modulo by zero');
                return new pyjslib['int'](Math.floor(x.__v / y.__v));
            case 0x0204:
                return (new pyjslib['long'](x.__v)).__floordiv(y);
            case 0x0402:
                return x.__floordiv(new pyjslib['long'](y.__v));
            case 0x0404:
                return x.__floordiv(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && pyjslib['isinstance'](x, y)
                && typeof x['__floordiv__'] == 'function')
                return y.__floordiv__(x);
            if (typeof x['__floordiv__'] == 'function') return x.__floordiv__(y);
        }
        if (!y.__number__ && typeof y['__rfloordiv__'] == 'function') return y.__rfloordiv__(x);
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('unsupported operand type(s) for //: \x27%r\x27, \x27%r\x27'), pyjslib['tuple']([x, y]))));
		return null;
	};
	$module['op_floordiv'].__name__ = 'op_floordiv';

	$module['op_floordiv'].__bind_type__ = 0;
	$module['op_floordiv'].__args__ = [null,null,['x'],['y']];
	$module['op_div'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                return x / y;
            case 0x0102:
                if (y.__v == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                return x / y.__v;
            case 0x0201:
                if (y == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                return x.__v / y;
            case 0x0202:
                if (y.__v == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                return new pyjslib['int'](x.__v / y.__v);
            case 0x0204:
                return (new pyjslib['long'](x.__v)).__div(y);
            case 0x0402:
                return x.__div(new pyjslib['long'](y.__v));
            case 0x0404:
                return x.__div(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && pyjslib['isinstance'](x, y)
                && typeof x['__div__'] == 'function')
                return y.__div__(x);
            if (typeof x['__div__'] == 'function') return x.__div__(y);
        }
        if (!y.__number__ && typeof y['__rdiv__'] == 'function') return y.__rdiv__(x);
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('unsupported operand type(s) for /: \x27%r\x27, \x27%r\x27'), pyjslib['tuple']([x, y]))));
		return null;
	};
	$module['op_div'].__name__ = 'op_div';

	$module['op_div'].__bind_type__ = 0;
	$module['op_div'].__args__ = [null,null,['x'],['y']];
	$module['op_mul'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                return x * y;
            case 0x0102:
                return x * y.__v;
            case 0x0201:
                return x.__v * y;
            case 0x0202:
                return new pyjslib['int'](x.__v * y.__v);
            case 0x0204:
                return (new pyjslib['long'](x.__v)).__mul(y);
            case 0x0402:
                return x.__mul(new pyjslib['long'](y.__v));
            case 0x0404:
                return x.__mul(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && pyjslib['isinstance'](x, y)
                && typeof x['__mul__'] == 'function')
                return y.__mul__(x);
            if (typeof x['__mul__'] == 'function') return x.__mul__(y);
        }
        if (!y.__number__ && typeof y['__rmul__'] == 'function') return y.__rmul__(x);
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('unsupported operand type(s) for *: \x27%r\x27, \x27%r\x27'), pyjslib['tuple']([x, y]))));
		return null;
	};
	$module['op_mul'].__name__ = 'op_mul';

	$module['op_mul'].__bind_type__ = 0;
	$module['op_mul'].__args__ = [null,null,['x'],['y']];
	$module['op_mod'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                return x % y;
            case 0x0102:
                if (y.__v == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                return x % y.__v;
            case 0x0201:
                if (y == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                return x.__v % y;
            case 0x0202:
                if (y.__v == 0) throw pyjslib['ZeroDivisionError']('integer division or modulo by zero');
                return new pyjslib['int'](x.__v % y.__v);
            case 0x0204:
                return (new pyjslib['long'](x.__v)).__mod(y);
            case 0x0402:
                return x.__mod(new pyjslib['long'](y.__v));
            case 0x0404:
                return x.__mod(y);
        }
        if (typeof x == 'string') {
            return pyjslib.sprintf(x, y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && pyjslib['isinstance'](x, y)
                && typeof x['__mod__'] == 'function')
                return y.__mod__(x);
            if (typeof x['__mod__'] == 'function') return x.__mod__(y);
        }
        if (!y.__number__ && typeof y['__rmod__'] == 'function') return y.__rmod__(x);
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('unsupported operand type(s) for %: \x27%r\x27, \x27%r\x27'), pyjslib['tuple']([x, y]))));
		return null;
	};
	$module['op_mod'].__name__ = 'op_mod';

	$module['op_mod'].__bind_type__ = 0;
	$module['op_mod'].__args__ = [null,null,['x'],['y']];
	$module['op_pow'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                return Math.pow(x, y);
            case 0x0102:
                if (y.__v == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                return Math.pow(x,y.__v);
            case 0x0201:
                if (y == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                return Math.pow(x.__v,y);
            case 0x0202:
                return x.__pow__(y);
            case 0x0204:
                return (new pyjslib['long'](x.__v)).__pow(y);
            case 0x0402:
                return x.__pow(new pyjslib['long'](y.__v));
            case 0x0404:
                return x.__pow(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && pyjslib['isinstance'](x, y)
                && typeof x['__pow__'] == 'function')
                return y.__pow__(x);
            if (typeof x['__pow__'] == 'function') return x.__pow__(y);
        }
        if (!y.__number__ && typeof y['__rpow__'] == 'function') return y.__rpow__(x);
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('unsupported operand type(s) for %: \x27%r\x27, \x27%r\x27'), pyjslib['tuple']([x, y]))));
		return null;
	};
	$module['op_pow'].__name__ = 'op_pow';

	$module['op_pow'].__bind_type__ = 0;
	$module['op_pow'].__args__ = [null,null,['x'],['y']];
	$module['op_invert'] = function(v) {


    if (v !== null) {
        if (typeof v['__invert__'] == 'function') return v.__invert__();
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('bad operand type for unary -: \x27%r\x27'), v)));
		return null;
	};
	$module['op_invert'].__name__ = 'op_invert';

	$module['op_invert'].__bind_type__ = 0;
	$module['op_invert'].__args__ = [null,null,['v']];
	$module['op_bitshiftleft'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__lshift__(y);
            case 0x0204:
                return y.__rlshift__(x);
            case 0x0402:
                return x.__lshift(y.__v);
            case 0x0404:
                return x.__lshift(y.valueOf());
        }
        if (typeof x['__lshift__'] == 'function') {
            var v = x.__lshift__(y);
            if (v !== pyjslib['NotImplemented']) return v;
        }
        if (typeof y['__rlshift__'] != 'undefined') return y.__rlshift__(x);
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('unsupported operand type(s) for \x3C\x3C: \x27%r\x27, \x27%r\x27'), pyjslib['tuple']([x, y]))));
		return null;
	};
	$module['op_bitshiftleft'].__name__ = 'op_bitshiftleft';

	$module['op_bitshiftleft'].__bind_type__ = 0;
	$module['op_bitshiftleft'].__args__ = [null,null,['x'],['y']];
	$module['op_bitshiftright'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__rshift__(y);
            case 0x0204:
                return y.__rrshift__(x);
            case 0x0402:
                return x.__rshift(y.__v);
            case 0x0404:
                return x.__rshift(y.valueOf());
        }
        if (typeof x['__rshift__'] == 'function') {
            var v = x.__rshift__(y);
            if (v !== pyjslib['NotImplemented']) return v;
        }
        if (typeof y['__rrshift__'] != 'undefined') return y.__rrshift__(x);
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('unsupported operand type(s) for \x3E\x3E: \x27%r\x27, \x27%r\x27'), pyjslib['tuple']([x, y]))));
		return null;
	};
	$module['op_bitshiftright'].__name__ = 'op_bitshiftright';

	$module['op_bitshiftright'].__bind_type__ = 0;
	$module['op_bitshiftright'].__args__ = [null,null,['x'],['y']];
	$module['op_bitand2'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__and__(y);
            case 0x0204:
                return y.__and(new pyjslib['long'](x));
            case 0x0402:
                return x.__and(new pyjslib['long'](y.__v));
            case 0x0404:
                return x.__and(y);
        }
        if (typeof x['__and__'] == 'function') {
            var v = x.__and__(y);
            if (v !== pyjslib['NotImplemented']) return v;
        }
        if (typeof y['__rand__'] != 'undefined') return y.__rand__(x);
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('unsupported operand type(s) for \x26: \x27%r\x27, \x27%r\x27'), pyjslib['tuple']([x, y]))));
		return null;
	};
	$module['op_bitand2'].__name__ = 'op_bitand2';

	$module['op_bitand2'].__bind_type__ = 0;
	$module['op_bitand2'].__args__ = [null,null,['x'],['y']];
	$module['op_bitand'] = function (args) {
    var a;
    if (args[0] !== null && args[1] !== null && args.length > 1) {
        var res, r;
        res = args[0];
        for (i = 1; i < args.length; i++) {
            if (typeof res['__and__'] == 'function') {
                r = res;
                res = res.__and__(args[i]);
                if (res === pyjslib['NotImplemented'] && typeof args[i]['__rand__'] == 'function') {
                    res = args[i].__rand__(r);
                }
            } else if (typeof args[i]['__rand__'] == 'function') {
                res = args[i].__rand__(res);
            } else {
                res = null;
                break;
            }
            if (res === pyjslib['NotImplemented']) {
                res = null;
                break;
            }
        }
        if (res !== null) {
            return res;
        }
    }
;
	throw (pyjslib['TypeError']((typeof ($add1=String('unsupported operand type(s) for \x26: '))==typeof ($add2=String(', ')['join'](function(){
var $listcomp1 = pyjslib['list']();
	$iter1_iter = pyjslib['list']($module.args);
	if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
		$iter1_type = 0;
	} else {
		$iter1_iter = $iter1_iter.__iter__();
		$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
	}
	$iter1_idx = 0;
	while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
		a = $iter1_nextval;
		$listcomp1['append'](pyjslib['repr'](a));
	}
return $listcomp1;}())) && (typeof $add1=='number'||typeof $add1=='string')?
		$add1+$add2:
		pyjslib['op_add']($add1,$add2))));

};

	$module['op_bitxor2'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__xor__(y);
            case 0x0204:
                return y.__xor(new pyjslib['long'](x));
            case 0x0402:
                return x.__xor(new pyjslib['long'](y.__v));
            case 0x0404:
                return x.__xor(y);
        }
        if (typeof x['__xor__'] == 'function') {
            var v = x.__xor__(y);
            if (v !== pyjslib['NotImplemented']) return v;
        }
        if (typeof y['__rxor__'] != 'undefined') return y.__rxor__(x);
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('unsupported operand type(s) for \x26: \x27%r\x27, \x27%r\x27'), pyjslib['tuple']([x, y]))));
		return null;
	};
	$module['op_bitxor2'].__name__ = 'op_bitxor2';

	$module['op_bitxor2'].__bind_type__ = 0;
	$module['op_bitxor2'].__args__ = [null,null,['x'],['y']];
	$module['op_bitxor'] = function (args) {
    var a;
    if (args[0] !== null && args[1] !== null && args.length > 1) {
        var res, r;
        res = args[0];
        for (i = 1; i < args.length; i++) {
            if (typeof res['__xor__'] == 'function') {
                r = res;
                res = res.__xor__(args[i]);
                if (res === pyjslib['NotImplemented'] && typeof args[i]['__rxor__'] == 'function') {
                    res = args[i].__rxor__(r);
                }
            } else if (typeof args[i]['__rxor__'] == 'function') {
                res = args[i].__rxor__(res);
            } else {
                res = null;
                break;
            }
            if (res === pyjslib['NotImplemented']) {
                res = null;
                break;
            }
        }
        if (res !== null) {
            return res;
        }
    }
;
	throw (pyjslib['TypeError']((typeof ($add3=String('unsupported operand type(s) for ^: '))==typeof ($add4=String(', ')['join'](function(){
var $listcomp2 = pyjslib['list']();
	$iter2_iter = $module.args;
	if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
		$iter2_type = 0;
	} else {
		$iter2_iter = $iter2_iter.__iter__();
		$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
	}
	$iter2_idx = 0;
	while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):pyjslib['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
		a = $iter2_nextval;
		$listcomp2['append'](pyjslib['repr'](a));
	}
return $listcomp2;}())) && (typeof $add3=='number'||typeof $add3=='string')?
		$add3+$add4:
		pyjslib['op_add']($add3,$add4))));

};

	$module['op_bitor2'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__or__(y);
            case 0x0204:
                return y.__or(new pyjslib['long'](x));
            case 0x0402:
                return x.__or(new pyjslib['long'](y.__v));
            case 0x0404:
                return x.__or(y);
        }
        if (typeof x['__or__'] == 'function') {
            var v = x.__or__(y);
            if (v !== pyjslib['NotImplemented']) return v;
        }
        if (typeof y['__ror__'] != 'undefined') return y.__ror__(x);
    }

		throw (pyjslib['TypeError'](pyjslib['sprintf'](String('unsupported operand type(s) for \x26: \x27%r\x27, \x27%r\x27'), pyjslib['tuple']([x, y]))));
		return null;
	};
	$module['op_bitor2'].__name__ = 'op_bitor2';

	$module['op_bitor2'].__bind_type__ = 0;
	$module['op_bitor2'].__args__ = [null,null,['x'],['y']];
	$module['op_bitor'] = function (args) {
    var a;
    if (args[0] !== null && args[1] !== null && args.length > 1) {
        var res, r;
        res = args[0];
        for (i = 1; i < args.length; i++) {
            if (typeof res['__or__'] == 'function') {
                r = res;
                res = res.__or__(args[i]);
                if (res === pyjslib['NotImplemented'] && typeof args[i]['__ror__'] == 'function') {
                    res = args[i].__ror__(r);
                }
            } else if (typeof args[i]['__ror__'] == 'function') {
                res = args[i].__ror__(res);
            } else {
                res = null;
                break;
            }
            if (res === pyjslib['NotImplemented']) {
                res = null;
                break;
            }
        }
        if (res !== null) {
            return res;
        }
    }
;
	throw (pyjslib['TypeError']((typeof ($add5=String('unsupported operand type(s) for |: '))==typeof ($add6=String(', ')['join'](function(){
var $listcomp3 = pyjslib['list']();
	$iter3_iter = $module.args;
	if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
		$iter3_type = 0;
	} else {
		$iter3_iter = $iter3_iter.__iter__();
		$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
	}
	$iter3_idx = 0;
	while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):pyjslib['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
		a = $iter3_nextval;
		$listcomp3['append'](pyjslib['repr'](a));
	}
return $listcomp3;}())) && (typeof $add5=='number'||typeof $add5=='string')?
		$add5+$add6:
		pyjslib['op_add']($add5,$add6))));

};

	$module['___import___'] = function(path, context, module_name, get_base) {
		if (typeof module_name == 'undefined') module_name=arguments.callee.__args__[4][1];
		if (typeof get_base == 'undefined') get_base=arguments.callee.__args__[5][1];
		var $and8,$and5,$and9,parentName,module,$attr20,$attr21,$attr14,$attr23,$attr24,is_module_object,$attr18,in_context,$and11,$attr16,$attr11,$and6,$attr7,$attr22,objName,$sub2,$sub1,$and2,$attr9,$attr8,$and3,contextTopName,$attr1,$and1,$attr3,$attr2,$attr5,$attr4,inContextTopName,$attr6,sys,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$attr15,$attr17,$and7,$add18,$attr10,$attr13,$attr12,importName,$add14,$and12,path_parts,topName,$and10,$and4,depth,inContextImportName,inContextParentName,$add7,$add8,$add9,$attr19,save_track_module;
		save_track_module = $pyjs.track.module;
		sys = $pyjs.loaded_modules['sys'];
		if (pyjslib['bool'](sys.__was_initialized__ != true)) {
			module = $pyjs.loaded_modules[path];
			module();
$pyjs.track.module = save_track_module;
			if (pyjslib['bool'](pyjslib['op_eq'](path, String('sys')))) {
				module.modules = pyjslib['dict'](pyjslib['dict']([[String('pyjslib'), $module.pyjslib], [String('sys'), module]]));
			}
			return module;
		}
		importName = path;
		is_module_object = false;
		path_parts = path['__split'](String('.'));
		depth = path_parts['length'];
		topName = path_parts[0];
		objName = path_parts[path_parts.length-1];
		parentName = path_parts['slice'](0, (typeof ($sub1=path_parts['length'])==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
			$sub1-$sub2:
			pyjslib['op_sub']($sub1,$sub2)))['join'](String('.'));
		if (pyjslib['bool']((context === null))) {
			in_context = false;
		}
		else {
			in_context = true;
			inContextImportName = (typeof ($add9=(typeof ($add7=context)==typeof ($add8=String('.')) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				pyjslib['op_add']($add7,$add8)))==typeof ($add10=importName) && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				pyjslib['op_add']($add9,$add10));
			if (pyjslib['bool'](!pyjslib['bool'](parentName))) {
				inContextParentName = context;
			}
			else {
				inContextParentName = (typeof ($add13=(typeof ($add11=context)==typeof ($add12=String('.')) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					pyjslib['op_add']($add11,$add12)))==typeof ($add14=parentName) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					pyjslib['op_add']($add13,$add14));
			}
			inContextTopName = (typeof ($add17=(typeof ($add15=context)==typeof ($add16=String('.')) && (typeof $add15=='number'||typeof $add15=='string')?
				$add15+$add16:
				pyjslib['op_add']($add15,$add16)))==typeof ($add18=topName) && (typeof $add17=='number'||typeof $add17=='string')?
				$add17+$add18:
				pyjslib['op_add']($add17,$add18));
			contextTopName = context.__split('.')[0];
			if (pyjslib['bool']((pyjslib['bool']($and1=(pyjslib['cmp'](depth, 1) == 1))?sys['modules']['has_key'](inContextParentName):$and1))) {
				module = sys['modules'].__getitem__(inContextParentName);
				if (pyjslib['bool'](typeof module[objName] != 'undefined')) {
					if (pyjslib['bool'](get_base)) {
						return $pyjs.loaded_modules[inContextTopName];
					}
					return module[objName];
				}
			}
			else if (pyjslib['bool'](sys['modules']['has_key'](inContextImportName))) {
				if (pyjslib['bool'](get_base)) {
					return $pyjs.loaded_modules[inContextTopName];
				}
				return sys['modules'].__getitem__(inContextImportName);
			}
			else if (pyjslib['bool']((pyjslib['bool']($and3=(pyjslib['cmp'](depth, 1) == 1))?typeof (module = $pyjs.loaded_modules[inContextParentName]) != 'undefined':$and3))) {
				sys['modules'].__setitem__(inContextParentName, module);
module.__was_initialized__ = false;
				module(null);
$pyjs.track.module = save_track_module;
				if (pyjslib['bool'](typeof module[objName] != 'undefined')) {
					if (pyjslib['bool'](get_base)) {
						return $pyjs.loaded_modules[inContextTopName];
					}
					return module[objName];
				}
			}
			if (pyjslib['bool'](sys['modules']['has_key'](inContextImportName))) {
				if (pyjslib['bool'](get_base)) {
					return $pyjs.loaded_modules[inContextTopName];
				}
				return sys['modules'].__getitem__(inContextImportName);
			}
			if (pyjslib['bool'](typeof (module = $pyjs.loaded_modules[inContextImportName]) != 'undefined')) {
				sys['modules'].__setitem__(inContextImportName, module);
module.__was_initialized__ = false;
				module(module_name);
$pyjs.track.module = save_track_module;
				if (pyjslib['bool'](get_base)) {
					return $pyjs.loaded_modules[inContextTopName];
				}
				return module;
			}
			if (pyjslib['bool'](!pyjslib['bool'](sys['modules']['has_key'](inContextTopName)))) {
				if (pyjslib['bool'](typeof (module = $pyjs.loaded_modules[inContextTopName]) != 'function')) {
					in_context = false;
					if (pyjslib['bool']($pyjs.options.dynamic_loading)) {
						module = $module.__dynamic_load__(inContextTopName);
						if (pyjslib['bool'](typeof module == 'function')) {
							in_context = true;
							if (pyjslib['bool'](pyjslib['op_eq'](depth, 1))) {
								module(module_name);
$pyjs.track.module = save_track_module;
								return module;
							}
							else {
								module(null);
								if (pyjslib['bool']((pyjslib['bool']($and5=pyjslib['op_eq'](depth, 2))?typeof module[objName] != 'undefined':$and5))) {
									if (pyjslib['bool'](get_base)) {
										return $pyjs.loaded_modules[inContextTopName];
									}
									return module[objName];
								}
							}
						}
					}
				}
			}
			if (pyjslib['bool'](in_context)) {
				importName = inContextImportName;
				parentName = inContextParentName;
				topName = inContextTopName;
			}
		}
		if (pyjslib['bool'](!pyjslib['bool'](in_context))) {
			if (pyjslib['bool']((pyjslib['bool']($and7=parentName)?sys['modules']['has_key'](parentName):$and7))) {
				module = sys['modules'].__getitem__(parentName);
				if (pyjslib['bool'](typeof module[objName] != 'undefined')) {
					if (pyjslib['bool'](get_base)) {
						return $pyjs.loaded_modules[topName];
					}
					return module[objName];
				}
			}
			else if (pyjslib['bool'](sys['modules']['has_key'](importName))) {
				if (pyjslib['bool'](get_base)) {
					return $pyjs.loaded_modules[topName];
				}
				return sys['modules'].__getitem__(importName);
			}
			else if (pyjslib['bool']((pyjslib['bool']($and9=parentName)?typeof (module = $pyjs.loaded_modules[parentName]) != 'undefined':$and9))) {
				sys['modules'].__setitem__(parentName, module);
module.__was_initialized__ = false;
				module(null);
$pyjs.track.module = save_track_module;
				if (pyjslib['bool'](typeof module[objName] != 'undefined')) {
					if (pyjslib['bool'](get_base)) {
						return $pyjs.loaded_modules[topName];
					}
					return module[objName];
				}
			}
			if (pyjslib['bool'](sys['modules']['has_key'](importName))) {
				if (pyjslib['bool'](get_base)) {
					return $pyjs.loaded_modules[topName];
				}
				return sys['modules'].__getitem__(importName);
			}
			if (pyjslib['bool'](typeof (module = $pyjs.loaded_modules[importName]) != 'undefined')) {
				sys['modules'].__setitem__(importName, module);
				if (pyjslib['bool']((pyjslib['bool']($and11=!pyjslib['op_eq'](importName, String('pyjslib')))?!pyjslib['op_eq'](importName, String('sys')):$and11))) {
module.__was_initialized__ = false;
				}
				module(module_name);
$pyjs.track.module = save_track_module;
				if (pyjslib['bool'](get_base)) {
					return $pyjs.loaded_modules[topName];
				}
				return module;
			}
		}
		if (pyjslib['bool']($pyjs.options.dynamic_loading)) {
			module = $module.__dynamic_load__(importName);
			if (pyjslib['bool'](typeof module == 'function')) {
				module(module_name);
$pyjs.track.module = save_track_module;
				if (pyjslib['bool'](get_base)) {
					return $pyjs.loaded_modules[topName];
				}
				return module;
			}
		}
		throw (pyjslib['ImportError'](pyjslib['sprintf'](String('No module named %s, %s in context %s'), pyjslib['tuple']([importName, path, context]))));
		return null;
	};
	$module['___import___'].__name__ = '___import___';

	$module['___import___'].__bind_type__ = 0;
	$module['___import___'].__args__ = [null,null,['path'],['context'],['module_name', null],['get_base', true]];
	$module['__dynamic_load__'] = function(importName) {
		var $add28,$add30,$or1,err,$or3,$or2,$add21,$add20,$add23,$add22,$add25,$add24,module,$add26,$add29,$pyjs_try_err,$add27,$add19;
		;
		module = $pyjs.loaded_modules[importName];
		if (pyjslib['bool']((pyjslib['bool']($or1=($module['sys'] === null))?$or1:(pyjslib['bool']($or2=($module['dynamic'] === null))?$or2:$module['__nondynamic_modules__']['has_key'](importName))))) {
			return module;
		}
		if (pyjslib['bool'](typeof module == 'undefined')) {
			try {
				$module['dynamic']['ajax_import']((typeof ($add25=(typeof ($add23=(typeof ($add21=(typeof ($add19=String('lib/'))==typeof ($add20=importName) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					pyjslib['op_add']($add19,$add20)))==typeof ($add22=String('.__')) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					pyjslib['op_add']($add21,$add22)))==typeof ($add24=$module['platform']) && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					pyjslib['op_add']($add23,$add24)))==typeof ($add26=String('__.js')) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					pyjslib['op_add']($add25,$add26)));
				module = $pyjs.loaded_modules[importName];
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjslib, try_lineno: 758};
				if (true) {
					$pyjs.__last_exception__.except_lineno = 762;
					err = $pyjs_try_err;
				}
			}
		}
		if (pyjslib['bool'](typeof module == 'undefined')) {
			try {
				$module['dynamic']['ajax_import']((typeof ($add29=(typeof ($add27=String('lib/'))==typeof ($add28=importName) && (typeof $add27=='number'||typeof $add27=='string')?
					$add27+$add28:
					pyjslib['op_add']($add27,$add28)))==typeof ($add30=String('.js')) && (typeof $add29=='number'||typeof $add29=='string')?
					$add29+$add30:
					pyjslib['op_add']($add29,$add30)));
				module = $pyjs.loaded_modules[importName];
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjslib, try_lineno: 764};
				if (true) {
					$pyjs.__last_exception__.except_lineno = 768;
					err = $pyjs_try_err;
				}
			}
			if (pyjslib['bool'](typeof module == 'undefined')) {
				$module['__nondynamic_modules__'].__setitem__(importName, 1.0);
			}
		}
		return module;
	};
	$module['__dynamic_load__'].__name__ = '__dynamic_load__';

	$module['__dynamic_load__'].__bind_type__ = 0;
	$module['__dynamic_load__'].__args__ = [null,null,['importName']];
	$module['BaseException'] = (function(){
		var $cls_instance = $pyjs__class_instance('BaseException');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'e9f033dba16af03083cce6f369497c33';
		$method = $pyjs__bind_method($cls_instance, '__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = pyjslib['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

			} else {
				var self = arguments[0];
				var args = pyjslib['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

			}

			self.args = args;
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__getitem__', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return self['args']['__getitem__'](index);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'toString', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__str__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__str__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr32,$attr31,$attr30,$attr25,$attr26,$attr27,$attr28,$attr29;
			if (pyjslib['bool']((pyjslib['len'](self['args']) === 0))) {
				return String('');
			}
			else if (pyjslib['bool']((pyjslib['len'](self['args']) === 1))) {
				return pyjslib['str'](self['args'].__getitem__(0));
			}
			return pyjslib['repr'](self['args']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add32,$add31,$attr33,$attr37,$attr36,$attr35,$attr34,$attr38;
			if (pyjslib['bool'](pyjslib['callable'](self))) {
				return pyjslib['sprintf'](String('\x3Ctype \x27%s\x27\x3E'), self['__name__']);
			}
			return (typeof ($add31=self['__name__'])==typeof ($add32=pyjslib['repr'](self['args'])) && (typeof $add31=='number'||typeof $add31=='string')?
				$add31+$add32:
				pyjslib['op_add']($add31,$add32));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	$module['Exception'] = (function(){
		var $cls_instance = $pyjs__class_instance('Exception');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '4f6b04f01004169f9c8307c3f82e9539';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array($module['BaseException']));
	})();
	$module['StandardError'] = (function(){
		var $cls_instance = $pyjs__class_instance('StandardError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '444bb240e2025a4515260f4688b403ef';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array($module['Exception']));
	})();
	$module['AssertionError'] = (function(){
		var $cls_instance = $pyjs__class_instance('AssertionError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '4d5d04892333bb84c58c1672fd50121d';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array($module['Exception']));
	})();
	$module['GeneratorExit'] = (function(){
		var $cls_instance = $pyjs__class_instance('GeneratorExit');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'c3aee94f9575406ccdc6cf2cad49e36f';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array($module['Exception']));
	})();
	$module['TypeError'] = (function(){
		var $cls_instance = $pyjs__class_instance('TypeError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '38f768f6271cb4018905a97e573fd117';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array($module['StandardError']));
	})();
	$module['AttributeError'] = (function(){
		var $cls_instance = $pyjs__class_instance('AttributeError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '58e123dc18d115cd8a1b1a823fb41a7b';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array($module['StandardError']));
	})();
	$module['NameError'] = (function(){
		var $cls_instance = $pyjs__class_instance('NameError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '73f8cfa06e0056d1847c4f08c2b926d5';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array($module['StandardError']));
	})();
	$module['ValueError'] = (function(){
		var $cls_instance = $pyjs__class_instance('ValueError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '8170cc3b064cc2d0b6e8d009e2027e5a';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array($module['StandardError']));
	})();
	$module['ImportError'] = (function(){
		var $cls_instance = $pyjs__class_instance('ImportError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '587084ad0b6966c69d35d89e0ac546a3';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array($module['StandardError']));
	})();
	$module['LookupError'] = (function(){
		var $cls_instance = $pyjs__class_instance('LookupError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '530f61a8a37dfc034065f29bb800ac79';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array($module['StandardError']));
	})();
	$module['RuntimeError'] = (function(){
		var $cls_instance = $pyjs__class_instance('RuntimeError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '9270c7dba279767f19e05e873306966b';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array($module['StandardError']));
	})();
	$module['ArithmeticError'] = (function(){
		var $cls_instance = $pyjs__class_instance('ArithmeticError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '176b0e05e2f2fb9aba8f2c982cbc4007';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array($module['StandardError']));
	})();
	$module['KeyError'] = (function(){
		var $cls_instance = $pyjs__class_instance('KeyError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'b6bff9de64100a520423390c70a320d0';
		$method = $pyjs__bind_method($cls_instance, '__str__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr46,$attr44,$attr45,$attr42,$attr43,$attr40,$attr41,$attr39;
			if (pyjslib['bool']((pyjslib['len'](self['args']) === 0))) {
				return String('');
			}
			else if (pyjslib['bool']((pyjslib['len'](self['args']) === 1))) {
				return pyjslib['repr'](self['args'].__getitem__(0));
			}
			return pyjslib['repr'](self['args']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array($module['LookupError']));
	})();
	$module['IndexError'] = (function(){
		var $cls_instance = $pyjs__class_instance('IndexError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '39bfc962a035c57d003d244f76c122c0';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array($module['LookupError']));
	})();
	$module['NotImplementedError'] = (function(){
		var $cls_instance = $pyjs__class_instance('NotImplementedError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '4a35e2239dfdf40abcea5f73f388f82d';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array($module['RuntimeError']));
	})();
	$module['ZeroDivisionError'] = (function(){
		var $cls_instance = $pyjs__class_instance('ZeroDivisionError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '0e9d2950d71d002757b74172021d7e4d';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array($module['ArithmeticError']));
	})();
	$module['OverflowError'] = (function(){
		var $cls_instance = $pyjs__class_instance('OverflowError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '8ad995996e1db0a53ace97dc0fd9900a';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array($module['ArithmeticError']));
	})();
	$module['UndefinedValueError'] = (function(){
		var $cls_instance = $pyjs__class_instance('UndefinedValueError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '0e887cf22d9df62b46eac06e46b13666';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array($module['ValueError']));
	})();
	$module['init'] = function() {


pyjslib._errorMapping = function(err) {
    if (err instanceof(ReferenceError) || err instanceof(TypeError)) {
        var message = '';
        try {
            message = err.message;
        } catch ( e) {
        }
        return pyjslib.AttributeError(message);
    }
    return err;
};


pyjslib.TryElse = function () { };
pyjslib.TryElse.prototype = new Error();
pyjslib.TryElse.__name__ = 'TryElse';


pyjslib.StopIteration = function () { };
pyjslib.StopIteration.prototype = new Error();
pyjslib.StopIteration.__name__ = 'StopIteration';


String.prototype.rfind = function(sub, start, end) {
    var pos;
    if (typeof start != 'undefined') {
        /* *sigh* - python rfind goes *RIGHT*, NOT left */
        pos = this.substring(start).lastIndexOf(sub);
        if (pos == -1) {
            return -1;
        }
        pos += start;
    }
    else {
        pos=this.lastIndexOf(sub, start);
    }
    if (typeof end == 'undefined') return pos;

    if (pos + sub.length>end) return -1;
    return pos;
};

String.prototype.find = function(sub, start, end) {
    var pos=this.indexOf(sub, start);
    if (typeof end == 'undefined') return pos;

    if (pos + sub.length>end) return -1;
    return pos;
};

String.prototype.join = function(data) {
    var text="";

    if (data.constructor === Array) {
        return data.join(this);
    } else if (typeof data.__iter__ == 'function') {
        if (typeof data.__array == 'object') {
            return data.__array.join(this);
        }
        var iter=data.__iter__();
        if (typeof iter.__array == 'object') {
            return iter.__array.join(this);
        }
        data = [];
        var item, i = 0;
        if (typeof iter.$genfunc == 'function') {
            while (typeof (item=iter.next(true)) != 'undefined') {
                data[i++] = item;
            }
        } else {
            try {
                while (true) {
                    data[i++] = iter.next();
                }
            }
            catch (e) {
                if (e.__name__ != 'StopIteration') throw e;
            }
        }
        return data.join(this);
    }

    return text;
};

String.prototype.isdigit = function() {
    return (this.match(/^\d+$/g) !== null);
};

String.prototype.isalnum = function() {
    return (this.match(/^[a-zA-Z\d]+$/g) !== null);
};

String.prototype.isalpha = function() {
    return (this.match(/^[a-zA-Z]+$/g) !== null);
};

String.prototype.isupper = function() {
    return (this.match(/[a-z]/g) === null);
};

String.prototype.__replace=String.prototype.replace;

String.prototype.$$replace = function(old, replace, count) {
    var do_max=false;
    var start=0;
    var new_str="";
    var pos=0;

    if (typeof old != 'string') return this.__replace(old, replace);
    if (typeof count != 'undefined') do_max=true;

    while (start<this.length) {
        if (do_max && !count--) break;

        pos=this.indexOf(old, start);
        if (pos<0) break;

        new_str+=this.substring(start, pos) + replace;
        start=pos+old.length;
    }
    if (start<this.length) new_str+=this.substring(start);

    return new_str;
};

String.prototype.__contains__ = function(s){
    return this.indexOf(s)>=0;
};

String.prototype.__split = String.prototype.split;

String.prototype.$$split = function(sep, maxsplit) {
    var items=pyjslib.list();
    var do_max=false;
    var subject=this;
    var start=0;
    var pos=0;

    if (sep === null || typeof sep == 'undefined') {
        sep=" ";
        if (subject.length == 0) {
            return items;
        }
        subject=subject.strip();
        subject=subject.$$replace(/\s+/g, sep);
    }
    else if (typeof maxsplit != 'undefined') do_max=true;

    if (subject.length == 0) {
        items.__array.push('');
        return items;
    }

    while (start<subject.length) {
        if (do_max && !maxsplit--) break;

        pos=subject.indexOf(sep, start);
        if (pos<0) break;

        items.__array.push(subject.substring(start, pos));
        start=pos+sep.length;
    }
    if (start<=subject.length) items.__array.push(subject.substring(start));

    return items;
};

if (typeof "a"[0] == 'undefined' ) {
    // IE: cannot do "abc"[idx]
    String.prototype.__iter__ = function() {
        var i = 0;
        var s = this;
        return {
            'next': function(noStop) {
                if (i >= s.length) {
                    if (noStop === true) {
                        return;
                    }
                    throw pyjslib.StopIteration;
                }
                return s.charAt(i++);
            },
            '__iter__': function() {
                return this;
            }
        };
    };
} else {
    String.prototype.__iter__ = function() {
        var i = 0;
        var s = this;
        return {
            '__array': this,
            'next': function(noStop) {
                if (i >= s.length) {
                    if (noStop === true) {
                        return;
                    }
                    throw pyjslib.StopIteration;
                }
                return s.charAt(i++);
            },
            '__iter__': function() {
                return this;
            }
        };
    };
}

String.prototype.strip = function(chars) {
    return this.lstrip(chars).rstrip(chars);
};

String.prototype.lstrip = function(chars) {
    if (typeof chars == 'undefined') return this.$$replace(/^\s+/, "");
    if (chars.length == 0) return this;
    return this.$$replace(new RegExp("^[" + chars + "]+"), "");
};

String.prototype.rstrip = function(chars) {
    if (typeof chars == 'undefined') return this.$$replace(/\s+$/, "");
    if (chars.length == 0) return this;
    return this.$$replace(new RegExp("[" + chars + "]+$"), "");
};

String.prototype.startswith = function(prefix, start, end) {
    // FIXME: accept tuples as suffix (since 2.5)
    if (typeof start == 'undefined') start = 0;
    if (typeof end == 'undefined') end = this.length;

    if ((end - start) < prefix.length) return false;
    if (this.substr(start, prefix.length) == prefix) return true;
    return false;
};

String.prototype.endswith = function(suffix, start, end) {
    // FIXME: accept tuples as suffix (since 2.5)
    if (typeof start == 'undefined') start = 0;
    if (typeof end == 'undefined') end = this.length;

    if ((end - start) < suffix.length) return false;
    if (this.substr(end - suffix.length, suffix.length) == suffix) return true;
    return false;
};

String.prototype.ljust = function(width, fillchar) {
    switch (width.__number__) {
        case 0x02:
        case 0x04:
            width = width.valueOf();
            break;
        case 0x01:
            if (Math.floor(width) == width) break;
        default:
            throw pyjslib.TypeError("an integer is required (got '" + width + "')");
    }
    if (typeof fillchar == 'undefined') fillchar = ' ';
    if (typeof(fillchar) != 'string' ||
        fillchar.length != 1) {
        throw pyjslib.TypeError("ljust() argument 2 must be char, not " + typeof(fillchar));
    }
    if (this.length >= width) return this;
    return this + new Array(width+1 - this.length).join(fillchar);
};

String.prototype.rjust = function(width, fillchar) {
    switch (width.__number__) {
        case 0x02:
        case 0x04:
            width = width.valueOf();
            break;
        case 0x01:
            if (Math.floor(width) == width) break;
        default:
            throw pyjslib.TypeError("an integer is required (got '" + width + "')");
    }
    if (typeof fillchar == 'undefined') fillchar = ' ';
    if (typeof(fillchar) != 'string' ||
        fillchar.length != 1) {
        throw pyjslib.TypeError("rjust() argument 2 must be char, not " + typeof(fillchar));
    }
    if (this.length >= width) return this;
    return new Array(width + 1 - this.length).join(fillchar) + this;
};

String.prototype.center = function(width, fillchar) {
    switch (width.__number__) {
        case 0x02:
        case 0x04:
            width = width.valueOf();
            break;
        case 0x01:
            if (Math.floor(width) == width) break;
        default:
            throw pyjslib.TypeError("an integer is required (got '" + width + "')");
    }
    if (typeof fillchar == 'undefined') fillchar = ' ';
    if (typeof(fillchar) != 'string' ||
        fillchar.length != 1) {
        throw pyjslib.TypeError("center() argument 2 must be char, not " + typeof(fillchar));
    }
    if (this.length >= width) return this;
    padlen = width - this.length;
    right = Math.ceil(padlen / 2);
    left = padlen - right;
    return new Array(left+1).join(fillchar) + this + new Array(right+1).join(fillchar);
};

String.prototype.__getslice__ = function(lower, upper) {
    if (lower === null) {
        lower = 0;
    } else if (lower < 0) {
        lower = this.length + lower;
    }
    if (upper === null) {
        upper=this.length;
    } else if (upper < 0) {
       upper = this.length + upper;
    }
    return this.substring(lower, upper);
};

String.prototype.__getitem__ = function(idx) {
    if (idx < 0) idx += this.length;
    if (idx < 0 || idx > this.length) {
        throw pyjslib.IndexError("string index out of range");
    }
    return this.charAt(idx);
};

String.prototype.__setitem__ = function(idx, val) {
    throw pyjslib.TypeError("'str' object does not support item assignment");
};

String.prototype.upper = String.prototype.toUpperCase;
String.prototype.lower = String.prototype.toLowerCase;

String.prototype.zfill = function(width) {
    return this.rjust(width, '0');
};

String.prototype.__add__ = function(y) {
    if (typeof y != "string") {
        throw pyjslib.TypeError("cannot concatenate 'str' and non-str objects");
    }
    return this + y;
};

String.prototype.__mul__ = function(y) {
    switch (y.__number__) {
        case 0x02:
        case 0x04:
            y = y.valueOf();
            break;
        case 0x01:
            if (Math.floor(y) == y) break;
        default:
            throw pyjslib.TypeError("can't multiply sequence by non-int of type 'str'");
    }
    var s = '';
    while (y-- > 0) {
        s += this;
    }
    return s;
};
String.prototype.__rmul__ = String.prototype.__mul__;
String.prototype.__number__ = null;
String.prototype.__name__ = 'str';
String.prototype.__class__ = String.prototype;
String.prototype.__is_instance__ = null;
String.prototype.__str__ = function () {
    if (typeof this == 'string') return this.toString();
    return "<type 'str'>";
};
String.prototype.__repr__ = function () {
    if (typeof this == 'string') return "'" + this.toString() + "'";
    return "<type 'str'>";
};



Boolean.prototype.__number__ = 0x01;
Boolean.prototype.__name__ = 'bool';
Boolean.prototype.__class__ = Boolean.prototype;
Boolean.prototype.__is_instance__ = null;
Boolean.prototype.__str__= function () {
    if (typeof this == 'string') {
     	if (this === true) return "True";
    	return "False";
    }
    return "<type 'bool'>";
};
Boolean.prototype.__repr__ = Boolean.prototype.__str__;
Boolean.prototype.__and__ = function (y) {
    return this & y.valueOf();
}
Boolean.prototype.__or__ = function (y) {
    return this | y.valueOf();
}
Boolean.prototype.__xor__ = function (y) {
    return this ^ y.valueOf();
}



if (typeof Array.prototype.indexOf != 'function') {
    Array.prototype.indexOf = function(elt /*, from*/) {
        var len = this.length >>> 0;

        var from = Number(arguments[1]) || 0;
        from = (from < 0)
                ? Math.ceil(from)
                : Math.floor(from);
        if (from < 0)
            from += len;

        for (; from < len; from++) {
            if (from in this &&
                this[from] === elt)
                return from;
        }
        return -1;
    };
};


RegExp.prototype.Exec = function(pat) {
    var m = this.exec(pat);
    if (m !== null) {
        var len = m.length >>> 0;
        for (var i = 0; i < len; i++) {
            if (typeof(m[i]) == 'undefined')
                m[i] = null;
        }
    }
    return m;
};


pyjslib.abs = Math.abs;

	};
	$module['init'].__name__ = 'init';

	$module['init'].__bind_type__ = 0;
	$module['init'].__args__ = [null,null];
	$module['Class'] = (function(){
		var $cls_instance = $pyjs__class_instance('Class');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '05f081832a778532760aeae00ebb06ab';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}

			self.$$name = name;
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__str___', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr47,$attr48;
			return self['$$name'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str___'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	$module['open'] = function(fname, mode) {
		if (typeof mode == 'undefined') mode=arguments.callee.__args__[3][1];

		throw ($module['NotImplementedError'](String('open is not implemented in browsers')));
		return null;
	};
	$module['open'].__name__ = 'open';

	$module['open'].__bind_type__ = 0;
	$module['open'].__args__ = [null,null,['fname'],['mode', String('r')]];
	$module['cmp'] = function(a, b) {


    if (typeof a == typeof b) {
        switch (typeof a) {
            case 'number':
            case 'string':
            case 'boolean':
                return a == b ? 0 : (a < b ? -1 : 1);
        }
        if (a === b) return 0;
    }
    if (a === null) {
        if (b === null) return 0;
        return -1;
    }
    if (b === null) {
        return 1;
    }

    switch ((a.__number__ << 8)|b.__number__) {
        case 0x0202:
            a = a.__v;
            b = b.__v;
        case 0x0101:
            return a == b ? 0 : (a < b ? -1 : 1);
        case 0x0100:
        case 0x0200:
        case 0x0400:
            if (typeof b.__cmp__ == 'function') {
                return -b.__cmp__(a);
            }
            return -1;
        case 0x0001:
        case 0x0002:
        case 0x0004:
            if (typeof a.__cmp__ == 'function') {
                return a.__cmp__(b);
            }
            return 1;
        case 0x0102:
            return -b.__cmp__(new pyjslib['int'](a));
        case 0x0104:
            return -b.__cmp__(new pyjslib['long'](a));
        case 0x0201:
            return a.__cmp__(new pyjslib['int'](b));
        case 0x0401:
            return a.__cmp__(new pyjslib['long'](b));
        case 0x0204:
            return -b.__cmp__(new pyjslib['long'](a));
        case 0x0402:
            return a.__cmp__(new pyjslib['long'](b));
        case 0x0404:
            return a.__cmp__(b);
    }

    if (typeof a.__class__ == typeof b.__class__ && typeof a.__class__ == 'function') {
        if (a.__class__.__name__ < b.__class__.__name__) {
            return -1;
        }
        if (a.__class__.__name__ > b.__class__.__name__) {
            return 1;
        }
    }

    if ((typeof a == 'object' || typeof a == 'function') && typeof a.__cmp__ == 'function') {
        return a.__cmp__(b);
    } else if ((typeof b == 'object' || typeof b == 'function') && typeof b.__cmp__ == 'function') {
        return -b.__cmp__(a);
    }
    if (a == b) return 0;
    if (a > b) return 1;
    return -1;
    
	};
	$module['cmp'].__name__ = 'cmp';

	$module['cmp'].__bind_type__ = 0;
	$module['cmp'].__args__ = [null,null,['a'],['b']];
	$module['__cmp'] = $module['cmp'];
	$module['bool'] = function(v) {


    switch (v) {
        case null:
        case false:
        case 0:
        case '':
            return false;
    }
    if (typeof v == 'object') {
        if (typeof v.__nonzero__ == 'function'){
            return v.__nonzero__();
        } else if (typeof v.__len__ == 'function'){
            return v.__len__() > 0;
        }
    }
    return true;
    
	};
	$module['bool'].__name__ = 'bool';

	$module['bool'].__bind_type__ = 0;
	$module['bool'].__args__ = [null,null,['v']];
	$module['float'] = (function(){
		var $cls_instance = $pyjs__class_instance('float');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '4bc64589635e0f42c78212beae1f834c';
		$cls_definition['__number__'] = 0x01;
		$method = $pyjs__bind_method($cls_instance, '__new__', function(self, args) {


        var v = Number(args[0]);
        if (isNaN(v)) {
            throw pyjslib.ValueError("invalid literal for float(): " + args[0]);
        }
        return v;

		}
	, 0, [null,null,['self'],['args']]);
		$cls_definition['__new__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();

Number.prototype.__number__ = 0x01;
Number.prototype.__name__ = 'float';
Number.prototype.__init__ = function (value, radix) {
    return null;
};

Number.prototype.__str__ = function () {
    if (typeof this == 'number') return this.toString();
    return "<type 'float'>";
};

Number.prototype.__repr__ = function () {
    if (typeof this == 'number') return this.toString();
    return "<type 'float'>";
};

Number.prototype.__nonzero__ = function () {
    return this != 0;
};

Number.prototype.__cmp__ = function (y) {
    return this < y? -1 : (this == y ? 0 : 1);
};

Number.prototype.__hash__ = function () {
    return this;
};

Number.prototype.__oct__ = function () {
    return '0'+this.toString(8);
};

Number.prototype.__hex__ = function () {
    return '0x'+this.toString(16);
};

Number.prototype.__pos__ = function () {
    return this;
};

Number.prototype.__neg__ = function () {
    return -this;
};

Number.prototype.__abs__ = function () {
    if (this >= 0) return this;
    return -this;
};

Number.prototype.__add__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return pyjslib['NotImplemented'];
    return this + y;
};

Number.prototype.__radd__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return pyjslib['NotImplemented'];
    return y + this;
};

Number.prototype.__sub__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return pyjslib['NotImplemented'];
    return this - y;
};

Number.prototype.__rsub__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return pyjslib['NotImplemented'];
    return y - this;
};

Number.prototype.__floordiv__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return pyjslib['NotImplemented'];
    if (y == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
    return Math.floor(this / y);
};

Number.prototype.__rfloordiv__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return pyjslib['NotImplemented'];
    if (this == 0) throw pyjslib['ZeroDivisionError']('float divmod');
    return Math.floor(y / this);
};

Number.prototype.__div__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return pyjslib['NotImplemented'];
    if (y == 0) throw pyjslib['ZeroDivisionError']('float division');
    return this / y;
};

Number.prototype.__rdiv__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return pyjslib['NotImplemented'];
    if (this == 0) throw pyjslib['ZeroDivisionError']('float division');
    return y / this;
};

Number.prototype.__mul__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return pyjslib['NotImplemented'];
    return this * y;
};

Number.prototype.__rmul__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return pyjslib['NotImplemented'];
    return y * this;
};

Number.prototype.__mod__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return pyjslib['NotImplemented'];
    if (y == 0) throw pyjslib['ZeroDivisionError']('float modulo');
    return this % y;
};

Number.prototype.__rmod__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return pyjslib['NotImplemented'];
    if (this == 0) throw pyjslib['ZeroDivisionError']('float modulo');
    return y % this;
};

Number.prototype.__pow__ = function (y, z) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return pyjslib['NotImplemented'];
    if (typeof z == 'undefined' || z == null) {
        return Math.pow(this, y);
    }
    if (!z.__number__ || isNaN(z = z.valueOf())) return pyjslib['NotImplemented'];
    return Math.pow(this, y) % z;
};


	$module['float_int'] = function(value, radix) {
		if (typeof radix == 'undefined') radix=arguments.callee.__args__[3][1];


    var v;
    if (value.__number__) {
        if (radix !== null) {
            throw pyjslib.TypeError("int() can't convert non-string with explicit base");
        }
        v = value.valueOf();
        if (v > 0) {
            v = Math.floor(v);
        } else {
            v = Math.ceil(v);
        }
    } else if (typeof value == 'string') {
        if (radix === null) {
            radix = 10;
        }
        switch (value[value.length-1]) {
            case 'l':
            case 'L':
                v = value.slice(0, value.length-2);
                break;
            default:
                v = value;
        }
        v = parseInt(v, radix);
    } else {
        throw pyjslib.TypeError("TypeError: int() argument must be a string or a number");
    }
    if (isNaN(v) || !isFinite(v)) {
        throw pyjslib.ValueError("invalid literal for int() with base " + radix + ": '" + value + "'");
    }
    return v;

	};
	$module['float_int'].__name__ = 'float_int';

	$module['float_int'].__bind_type__ = 0;
	$module['float_int'].__args__ = [null,null,['value'],['radix', null]];

(function(){
    var $int = pyjslib['int'] = function (value, radix) {
        var v, i;
        if (typeof radix == 'undefined' || radix === null) {
            if (typeof value == 'undefined') {
                throw pyjslib.TypeError("int() takes at least 1 argument");
            }
            switch (value.__number__) {
                case 0x01:
                    value = value > 0 ? Math.floor(value) : Math.ceil(value);
                    break;
                case 0x02:
                    return value;
                case 0x04:
                    v = value.valueOf();
                    if (!($min_int <= v && v <= $max_int))
                        return value;
            }
            radix = null;
        }
        if (typeof this != 'object' || this.__number__ != 0x02) return new $int(value, radix);
        if (value.__number__) {
            if (radix !== null) throw pyjslib.TypeError("int() can't convert non-string with explicit base");
            v = value.valueOf();
        } else if (typeof value == 'string') {
            if (radix === null) {
                radix = 10;
            }
            v = parseInt(value, radix);
        } else {
            throw pyjslib.TypeError("TypeError: int() argument must be a string or a number");
        }
        if (isNaN(v) || !isFinite(v)) {
            throw pyjslib.ValueError("invalid literal for int() with base " + radix + ": '" + value + "'");
        }
        if ($min_int <= v && v <= $max_int) {
            this.__v = v;
            return this;
        }
        return new pyjslib['long'](v);
    };
    $int.__init__ = function () {};
    $int.__number__ = 0x02;
    $int.__v = 0;
    $int.__name__ = 'int';
    $int.prototype = $int;
    $int.__class__ = $int;

    $int.toExponential = function (fractionDigits) {
        return (typeof fractionDigits == 'undefined' || fractionDigits === null) ? this.__v.toExponential() : this.__v.toExponential(fractionDigits);
    };

    $int.toFixed = function (digits) {
        return (typeof digits == 'undefined' || digits === null) ? this.__v.toFixed() : this.__v.toFixed(digits);
    };

    $int.toLocaleString = function () {
        return this.__v.toLocaleString();
    };

    $int.toPrecision = function (precision) {
        return (typeof precision == 'undefined' || precision === null) ? this.__v.toPrecision() : this.__v.toPrecision(precision);
    };

    $int.toString = function (radix) {
        return (typeof radix == 'undefined' || radix === null) ? this.__v.toString() : this.__v.toString(radix);
    };

    $int.valueOf = function () {
        return this.__v.valueOf();
    };

    $int.__str__ = function () {
        if (typeof this == 'object' && this.__number__ == 0x02) return this.__v.toString();
        return "<type 'int'>";
    };

    $int.__repr__ = function () {
        if (typeof this == 'object' && this.__number__ == 0x02) return this.__v.toString();
        return "<type 'int'>";
    };

    $int.__nonzero__ = function () {
        return this.__v != 0;
    };

    $int.__cmp__ = function (y) {
        return this.__v < y? -1 : (this.__v == y ? 0 : 1);
    };

    $int.__hash__ = function () {
        return this.__v;
    };

    $int.__invert__ = function () {
        return new $int(~this.__v);
    };

    $int.__lshift__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        if (y < 32) {
            var v = this.__v << y;
            if (v > this.__v) {
                return new $int(v);
            }
        }
        return new pyjslib['long'](this.__v).__lshift__(y);
    };

    $int.__rlshift__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        if (this.__v < 32) {
            var v = y << this.__v;
            if (v > this.__v) {
                return new $int(v);
            }
        }
        return new pyjslib['long'](y).__lshift__(this.__v);
    };

    $int.__rshift__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        return new $int(this.__v >> y);
    };

    $int.__rrshift__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        return new $int(y >> this.__v);
    };

    $int.__and__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        return new $int(this.__v & y);
    };

    $int.__rand__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        return new $int(y & this.__v);
    };

    $int.__xor__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        return new $int(this.__v ^ y);
    };

    $int.__rxor__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        return new $int(y ^ this.__v);
    };

    $int.__or__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        return new $int(this.__v | y);
    };

    $int.__ror__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        return new $int(y | this.__v);
    };

    $int.__oct__ = function () {
        return '0x'+this.__v.toString(8);
    };

    $int.__hex__ = function () {
        return '0x'+this.__v.toString(16);
    };

    $int.__pos__ = function () {
        return this;
    };

    $int.__neg__ = function () {
        return new $int(-this.__v);
    };

    $int.__abs__ = function () {
        if (this.__v >= 0) return this;
        return new $int(-this.__v);
    };

    $int.__add__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        var v = this.__v + y;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new pyjslib['long'](v);
        }
        return new pyjslib['long'](this.__v).__add__(new pyjslib['long'](y));
    };

    $int.__radd__ = $int.__add__;

    $int.__sub__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        var v = this.__v - y;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new pyjslib['long'](v);
        }
        return new pyjslib['long'](this.__v).__sub__(new pyjslib['long'](y));
    };

    $int.__rsub__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        var v = y -this.__v;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new pyjslib['long'](v);
        }
        return new pyjslib['long'](y).__sub__(new pyjslib['long'](this.__v));
    };

    $int.__floordiv__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        if (y == 0) throw pyjslib['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(Math.floor(this.__v / y));
    };

    $int.__rfloordiv__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        if (this.__v == 0) throw pyjslib['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(Math.floor(y / this.__v));
    };

    $int.__div__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        if (y == 0) throw pyjslib['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(this.__v / y);
    };

    $int.__rdiv__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        if (this.__v == 0) throw pyjslib['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(y / this.__v);
    };

    $int.__mul__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        var v = this.__v * y;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new pyjslib['long'](v);
        }
        return new pyjslib['long'](this.__v).__mul__(new pyjslib['long'](y));
    };

    $int.__rmul__ = $int.__mul__;

    $int.__mod__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        if (y == 0) throw pyjslib['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(this.__v % y);
    };

    $int.__rmod__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        if (this.__v == 0) throw pyjslib['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(y % this.__v);
    };

    $int.__pow__ = function (y) {
        if (y.__number__ != 0x02) return pyjslib['NotImplemented'];
        y = y.__v;
        var v = Math.pow(this.__v, y);
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new pyjslib['long'](v);
        }
        return new pyjslib['long'](this.__v).__pow__(new pyjslib['long'](y));
    };
})();


(function(){

    var $log2 = Math.log(2);
    var $DigitValue = [
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            0,  1,  2,  3,  4,  5,  6,  7,  8,  9,  37, 37, 37, 37, 37, 37,
            37, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
            25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 37, 37, 37, 37,
            37, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
            25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37
    ];
    var $log_base_PyLong_BASE = new Array();
    var $convwidth_base = new Array();
    var $convmultmax_base = new Array();
    for (var i = 0; i < 37; i++) {
        $log_base_PyLong_BASE[i] = $convwidth_base[i] = $convmultmax_base[i] = 0;
    }
    var $cdigit = '0123456789abcdefghijklmnopqrstuvwxyz';


    var PyLong_SHIFT = 15;
    var PyLong_MASK = 0x7fff;
    var PyLong_BASE = 0x8000;

    var KARATSUBA_CUTOFF = 70;
    var KARATSUBA_SQUARE_CUTOFF = (2 * KARATSUBA_CUTOFF);

    var FIVEARY_CUTOFF = 8;

    function array_eq(a, b, n) {
        for (var i = 0 ; i < n; i++) {
            if (a[i] != b[i])
                return false;
        }
        return true;
    }

    function long_normalize(v) {
        var j = v.ob_size < 0 ? -v.ob_size:v.ob_size;
        var i = j;
        while (i > 0 && v.ob_digit[i-1] == 0) {
            i--;
        }
        if (i != j) {
            v.ob_size = v.ob_size < 0 ? -i:i;
        }
        return v;
    }

    function AsScaledDouble(vv) {
        var multiplier = PyLong_BASE; // 1L << PyLong_SHIFT == 1 << 15
        var neg, i, x, nbitsneeded;

        if (vv.ob_size < 0) {
            i = -vv.ob_size;
            neg = true;
        } else if (vv.ob_size > 0) {
            i = vv.ob_size;
            neg = false;
        } else {
            return [0.0, 0];
        }
        --i;
        x = vv.ob_digit[i];
        nbitsneeded = 56;
        while (i > 0 && nbitsneeded > 0) {
            --i;
            x = x * multiplier + vv.ob_digit[i];
            nbitsneeded -= PyLong_SHIFT;
        }
        if (neg) {
            return [-x, i];
        }
        return [x, i];
    }

    function v_iadd(x, m, y, n) {
        var i, carry = 0;
        for (i = 0; i < n; ++i) {
                carry += x[i] + y[i];
                x[i] = carry & PyLong_MASK;
                carry >>= PyLong_SHIFT;
        }
        for (; carry && i < m; ++i) {
                carry += x[i];
                x[i] = carry & PyLong_MASK;
                carry >>= PyLong_SHIFT;
        }
        return carry;
    }

    function v_isub(x, m, y, n) {
        var i, borrow = 0;
        for (i = 0; i < n; ++i) {
                borrow = x[i] - y[i] - borrow;
                x[i] = borrow & PyLong_MASK;
                borrow >>= PyLong_SHIFT;
                borrow &= 1;
        }
        for (; borrow && i < m; ++i) {
                borrow = x[i] - borrow;
                x[i] = borrow & PyLong_MASK;
                borrow >>= PyLong_SHIFT;
                borrow &= 1;
        }
        return borrow;
    }

    //function mul1(a, n) {
    //    return muladd1(a, n, 0);
    //}

    function muladd1(z, a, n, extra) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var carry = extra, i;

        for (i = 0; i < size_a; ++i) {
                carry += a.ob_digit[i] * n;
                z.ob_digit[i] = carry & PyLong_MASK;
                carry >>= PyLong_SHIFT;
        }
        z.ob_digit[i] = carry;
        z.ob_size = i + 1;
        return long_normalize(z);
    }

    function inplace_divrem1(pout, pin, pout_idx, pin_idx, size, n) {
        var rem = 0, hi = 0;
        pin_idx += size;
        pout_idx += size;
        while (pin_idx > pin.length) {
            --size;
            --pin_idx;
            pout[--pout_idx] = 0;
        }
        while (--size >= 0) {
            rem = (rem << PyLong_SHIFT) + pin[--pin_idx];
            pout[--pout_idx] = hi = Math.floor(rem / n);
            rem -= hi * n;
        }
        return [rem, pout_idx, pin_idx];
    }

    function divrem1(a, n, prem) {
        var size = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var z = new $long(0);

        prem[0] = inplace_divrem1(z.ob_digit, a.ob_digit, 0, 0, size, n)[0];
        z.ob_size = size;
        return long_normalize(z);
    }

    function Format(aa, base, addL, newstyle, noBase) {
        var text, str, p, i, bits, sz, rem, sign = '';
        var c_0 = "0".charCodeAt(0);
        var c_a = "a".charCodeAt(0);
        base = base.valueOf();

        if (aa.ob_size == 0) {
            if (addL) {
                text = "0L";
            } else {
                text = "0";
            }
        } else {
            if (aa.ob_size < 0) {
                sign = '-';
                size_a = -aa.ob_size;
            } else {
                size_a = aa.ob_size;
            }
            i = base;
            bits = 0;
            while (i > 1) {
                ++bits;
                i >>>= 1;
            }
            i = addL ? 6 : 5;
            j = size_a * PyLong_SHIFT + bits - 1;
            sz = Math.floor(i + j / bits);
            if (j / PyLong_SHIFT < size_a || sz < i) {
                throw pyjslib['OverflowError']("long is too large to format");
            }
            str = new Array();
            p = sz;
            if (addL) str[--p] = 'L';
            if ((base & (base - 1)) == 0) {
                var accum = 0, accumbits = 0, basebits = 1;
                i = base;
                while ((i >>>= 1) > 1) ++basebits;
                for (i = 0; i < size_a; ++i) {
                    accum |= aa.ob_digit[i] << accumbits;
                    accumbits += PyLong_SHIFT;
                    for (;;) {
                        var cdigit = accum & (base - 1);
                        str[--p] = $cdigit.charAt(cdigit);
                        accumbits -= basebits;
                        accum >>>= basebits;
                        if (i < size_a-1) {
                            if (accumbits < basebits) break;
                        } else if (accum <= 0) break;
                    }
                }
                text = str.join("");
            } else {
                // Not 0, and base not a power of 2.
                var scratch, pin, scratch_idx, pin_idx;
                var powbase = base, power = 1, size = size_a;
               
                for (;;) {
                    var newpow = powbase * base;
                    if (newpow >>> PyLong_SHIFT)  /* doesn't fit in a digit */
                        break;
                    powbase = newpow;
                    ++power;
                }
                scratch = aa.ob_digit.slice(0);
                pin = aa.ob_digit;
                scratch_idx = pin_idx = 0;
                do {
                        var ntostore = power;
                        rem = inplace_divrem1(scratch, pin, scratch_idx, pin_idx, size, powbase);
                        scratch_idx = rem[1];
                        rem = rem[0];
                        pin = scratch;
                        pin_idx = 0;
                        if (pin[size - 1] == 0) {
                            --size;
                        }
                        do {
                            var nextrem = Math.floor(rem / base);
                            str[--p] = $cdigit.charAt(rem - nextrem * base);
                            rem = nextrem;
                            --ntostore;
                        } while (ntostore && (size || rem));
                } while (size !=0);
                text = str.slice(p).join("");
            }
            text = text.lstrip('0');
            if (text == "" || text == "L") text = "0" + text;
        }
        if (noBase !== false) {
            switch (base) {
                case 10:
                    break;
                case 2:
                    text = '0b' + text;
                    break;
                case 8:
                    text = (newstyle ? '0o':(aa.ob_size ? '0': '')) + text;
                    break;
                case 16:
                    text = '0x' + text;
                    break;
                default:
                    text = base + '#' + text;
                    break;
            }
        }
        return sign + text;
    }

    function long_divrem(a, b, pdiv, prem) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var size_b = b.ob_size < 0 ? -b.ob_size : b.ob_size;
        var z = null;

        if (size_b == 0) {
            throw pyjslib['ZeroDivisionError']("long division or modulo by zero");
        }
        if (size_a < size_b ||
            (size_a == size_b &&
             a.ob_digit[size_a-1] < b.ob_digit[size_b-1])) {
                // |a| < |b|
                pdiv.ob_size = 0;
                prem.ob_digit = a.ob_digit.slice(0);
                prem.ob_size = a.ob_size;
                return 0;
        }
        if (size_b == 1) {
                rem = [0];
                prem.ob_digit = [0];
                prem.ob_size = 1;
                z = divrem1(a, b.ob_digit[0], prem.ob_digit);
                prem = long_normalize(prem);
        }
        else {
                z = x_divrem(a, b, prem);
        }
        if (z === null) {
            pdiv.ob_size = 0;
        } else {
            pdiv.ob_digit = z.ob_digit.slice(0);
            pdiv.ob_size = z.ob_size;
        }
        if ((a.ob_size < 0) != (b.ob_size < 0))
                pdiv.ob_size = -(pdiv.ob_size);
        if (a.ob_size < 0 && prem.ob_size != 0)
                prem.ob_size = -prem.ob_size;
        return 0;
    }

    function x_divrem(v1, w1, prem) {
        var size_w = w1.ob_size < 0 ? -w1.ob_size : w1.ob_size;
        var d = Math.floor(PyLong_BASE / (w1.ob_digit[size_w-1] + 1));
        var v = muladd1($x_divrem_v, v1, d, 0);
        var w = muladd1($x_divrem_w, w1, d, 0);
        var a, j, k;
        var size_v = v.ob_size < 0 ? -v.ob_size : v.ob_size;
        k = size_v - size_w;
        a = new $long(0);
        a.ob_size = k + 1;

        for (j = size_v; k >= 0; --j, --k) {
            var vj = (j >= size_v) ? 0 : v.ob_digit[j];
            var carry = 0;
            var q, i;

            if (vj == w.ob_digit[size_w-1])
                q = PyLong_MASK;
            else
                q = Math.floor(((vj << PyLong_SHIFT) + v.ob_digit[j-1]) /
                        w.ob_digit[size_w-1]);

            while (w.ob_digit[size_w-2]*q >
                    ((
                        (vj << PyLong_SHIFT)
                        + v.ob_digit[j-1]
                        - q*w.ob_digit[size_w-1]
                                                ) << PyLong_SHIFT)
                    + v.ob_digit[j-2])
                --q;

            for (i = 0; i < size_w && i+k < size_v; ++i) {
                var z = w.ob_digit[i] * q;
                var zz = z >>> PyLong_SHIFT;
                carry += v.ob_digit[i+k] - z
                        + (zz << PyLong_SHIFT);
                v.ob_digit[i+k] = carry & PyLong_MASK;
                // carry = Py_ARITHMETIC_RIGHT_SHIFT(BASE_TWODIGITS_TYPE, carry, PyLong_SHIFT);
                carry >>= PyLong_SHIFT;
                carry -= zz;
            }

            if (i+k < size_v) {
                carry += v.ob_digit[i+k];
                v.ob_digit[i+k] = 0;
            }

            if (carry == 0)
                a.ob_digit[k] = q;
            else {
                a.ob_digit[k] = q-1;
                carry = 0;
                for (i = 0; i < size_w && i+k < size_v; ++i) {
                    carry += v.ob_digit[i+k] + w.ob_digit[i];
                    v.ob_digit[i+k] = carry & PyLong_MASK;
                    // carry = Py_ARITHMETIC_RIGHT_SHIFT( BASE_TWODIGITS_TYPE, carry, PyLong_SHIFT);
                    carry >>= PyLong_SHIFT;
                }
            }
        } /* for j, k */

        i = divrem1(v, d, prem);
        prem.ob_digit = i.ob_digit.slice(0);
        prem.ob_size = i.ob_size;
        return long_normalize(a);
    }

    function x_add(a, b) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var size_b = b.ob_size < 0 ? -b.ob_size : b.ob_size;
        var z = new $long(0);
        var i;
        var carry = 0;

        if (size_a < size_b) {
            var temp = a;
            a = b;
            b = temp;
            temp = size_a;
            size_a = size_b;
            size_b = temp;
        }
        for (i = 0; i < size_b; ++i) {
                carry += a.ob_digit[i] + b.ob_digit[i];
                z.ob_digit[i] = carry & PyLong_MASK;
                carry >>>= PyLong_SHIFT;
        }
        for (; i < size_a; ++i) {
                carry += a.ob_digit[i];
                z.ob_digit[i] = carry & PyLong_MASK;
                carry >>>= PyLong_SHIFT;
        }
        z.ob_digit[i] = carry;
        z.ob_size = i+1;
        return long_normalize(z);
    }

    function x_sub(a, b) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var size_b = b.ob_size < 0 ? -b.ob_size : b.ob_size;
        var z = new $long(0);
        var i;
        var borrow = 0;
        var sign = 1;

        if (size_a < size_b) {
            var temp = a;
            a = b;
            b = temp;
            temp = size_a;
            size_a = size_b;
            size_b = temp;
            sign = -1;
        } else if (size_a == size_b) {
            i = size_a;
            while (--i >= 0 && a.ob_digit[i] == b.ob_digit[i])
                ;
            if (i < 0)
                return z;
            if (a.ob_digit[i] < b.ob_digit[i]) {
                var temp = a;
                a = b;
                b = temp;
                temp = size_a;
                size_a = size_b;
                size_b = temp;
                sign = -1;
            }
            size_a = size_b = i+1;
        }
        for (i = 0; i < size_b; ++i) {
                borrow = a.ob_digit[i] - b.ob_digit[i] - borrow;
                z.ob_digit[i] = borrow & PyLong_MASK;
                borrow >>>= PyLong_SHIFT;
                borrow &= 1;
        }
        for (; i < size_a; ++i) {
                borrow = a.ob_digit[i] - borrow;
                z.ob_digit[i] = borrow & PyLong_MASK;
                borrow >>>= PyLong_SHIFT;
                borrow &= 1;
        }
        z.ob_size = i;
        if (sign < 0)
            z.ob_size = -(z.ob_size);
        return long_normalize(z);
    }

    function x_mul(a, b) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var size_b = b.ob_size < 0 ? -b.ob_size : b.ob_size;
        var z = new $long(0);
        var i, s;

        z.ob_size = size_a + size_b;
        for (i = 0; i < z.ob_size; i++) {
            z.ob_digit[i] = 0;
        }
        if (size_a == size_b && array_eq(a.ob_digit, b.ob_digit, size_a)) {
            // Efficient squaring per HAC, Algorithm 14.16:
            for (i = 0; i < size_a; ++i) {
                var carry;
                var f = a.ob_digit[i];
                var pz = (i << 1);
                var pa = i + 1;
                var paend = size_a;

                carry = z.ob_digit[pz] + f * f;
                z.ob_digit[pz++] = carry & PyLong_MASK;
                carry >>>= PyLong_SHIFT;

                f <<= 1;
                while (pa < paend) {
                    carry += z.ob_digit[pz] + a.ob_digit[pa++] * f;
                    z.ob_digit[pz++] = carry & PyLong_MASK;
                    carry >>>= PyLong_SHIFT;
                }
                if (carry) {
                    carry += z.ob_digit[pz];
                    z.ob_digit[pz++] = carry & PyLong_MASK;
                    carry >>>= PyLong_SHIFT;
                }
                if (carry) {
                    z.ob_digit[pz] += carry & PyLong_MASK;
                }
            }
        }
        else {  // a is not the same as b -- gradeschool long mult
            for (i = 0; i < size_a; ++i) {
                var carry = 0;
                var f = a.ob_digit[i];
                var pz = i;
                var pb = 0;
                var pbend = size_b;

                while (pb < pbend) {
                    carry += z.ob_digit[pz] + b.ob_digit[pb++] * f;
                    z.ob_digit[pz++] = carry & PyLong_MASK;
                    carry >>>= PyLong_SHIFT;
                }
                if (carry) {
                    z.ob_digit[pz] += carry & PyLong_MASK;
                }
            }
        }
        z.ob_size = z.ob_digit.length;
        return long_normalize(z);
    }

    function l_divmod(v, w, pdiv, pmod) {
        var div = $l_divmod_div, 
            mod = $l_divmod_mod; 

        if (long_divrem(v, w, div, mod) < 0)
                return -1;
        if (pdiv == null && pmod == null) return 0;

        if ((mod.ob_size < 0 && w.ob_size > 0) ||
            (mod.ob_size > 0 && w.ob_size < 0)) {
                mod = mod.__add__(w);
                div = div.__sub__($const_long_1);
        }
        if (pdiv !== null) {
            pdiv.ob_digit = div.ob_digit.slice(0);
            pdiv.ob_size = div.ob_size;
        }
        if (pmod !== null) {
            pmod.ob_digit = mod.ob_digit.slice(0);
            pmod.ob_size = mod.ob_size;
        }
        return 0;
    }




    var $long = pyjslib['long'] = function(value, radix) {
        var v, i;
        if (!radix || radix.valueOf() == 0) {
            if (typeof value == 'undefined') {
                throw pyjslib.TypeError("long() takes at least 1 argument");
            }
            switch (value.__number__) {
                case 0x01:
                    value = value > 0 ? Math.floor(value) : Math.ceil(value);
                    break;
                case 0x02:
                    break;
                case 0x04:
                    return value;
            }
            radix = null;
        }
        if (typeof this != 'object' || this.__number__ != 0x04) return new $long(value, radix);

        v = value;
        this.ob_size = 0;
        this.ob_digit = new Array();
        if (v.__number__) {
            if (radix) {
                throw pyjslib.TypeError("long() can't convert non-string with explicit base");
            }
            if (v.__number__ == 0x04) {
                var size = v.ob_size < 0 ? -v.ob_size:v.ob_size;
                for (var i = 0; i < size; i++) {
                    this.ob_digit[i] = v.ob_digit[i];
                }
                this.ob_size = v.ob_size;
                return this;
            }
            if (v.__number__ == 0x02) {
                var neg = false;
                var ndig = 0;
                v = v.valueOf();

                if (v < 0) {
                    v = -v;
                    neg = true;
                }
                // Count the number of Python digits.
                t = v;
                while (t) {
                    this.ob_digit[ndig] = t & PyLong_MASK;
                    t >>>= PyLong_SHIFT;
                    ++ndig;
                }
                this.ob_size = neg ? -ndig : ndig;
                return this;
            }
            if (v.__number__ == 0x01) {
                var ndig, frac, expo, bits;
                var neg = false;

                if (isNaN(v)) {
                    throw pyjslib['ValueError']('cannot convert float NaN to integer');
                }
                if (!isFinite(v)) {
                    throw pyjslib['OverflowError']('cannot convert float infinity to integer');
                }
                if (v == 0) {
                    this.ob_digit[0] = 0;
                    this.ob_size = 0;
                    return this;
                }
                if (v < 0) {
                    v = -v;
                    neg = true;
                }
                // frac = frexp(dval, &expo); // dval = frac*2**expo; 0.0 <= frac < 1.0
                if (v == 0) {
                    frac = 0;
                    expo = 0;
                } else {
                    expo = Math.log(v)/$log2;
                    expo = (expo < 0 ? Math.ceil(expo):Math.floor(expo)) + 1;
                    frac = v / Math.pow(2.0, expo);
                }
                if (expo <= 0) {
                    return this;
                }
                ndig = Math.floor((expo-1) / PyLong_SHIFT) + 1;
                // ldexp(a,b) == a * (2**b)
                frac = frac * Math.pow(2.0, ((expo-1) % PyLong_SHIFT) + 1);
                for (var i = ndig; --i >= 0;) {
                    bits = Math.floor(frac);
                    this.ob_digit[i] = bits;
                    frac -= bits;
                    frac = frac * Math.pow(2.0, PyLong_SHIFT);
                }
                this.ob_size = neg ? -ndig : ndig;
                return this;
            }
            throw pyjslib['ValueError']('cannot convert ' + pyjslib['repr'](value) + 'to integer');
        } else if (typeof v == 'string') {
            var nchars;
            var text = value.lstrip();
            var i = 0;
            var neg = false;

            switch (text.charAt(0)) {
                case '-':
                    neg = true;
                case '+':
                    text = text.slice(1).lstrip();
            }

            if (!radix) {
                if (text == '0' || text.charAt(0) != '0') {
                    radix = 10;
                } else {
                    switch (text.charAt(1)) {
                        case 'x':
                        case 'X':
                            radix = 16;
                            break;
                        case 'o':
                        case 'O':
                            radix = 8;
                            break;
                        case 'b':
                        case 'B':
                            radix = 2;
                            break;
                        default:
                            radix = 8;
                            break;
                    }
                }
            } else if (radix < 1 || radix > 36) {
                throw pyjslib['ValueError']("long() arg 2 must be >= 2 and <= 36");
            }
            if (text.charAt(0) == '0' && text.length > 1) {
                switch (text.charAt(1)) {
                    case 'x':
                    case 'X':
                        if (radix == 16) text = text.slice(2);
                        break;
                    case 'o':
                    case 'O':
                        if (radix == 8) text = text.slice(2);
                        break;
                    case 'b':
                    case 'B':
                        if (radix == 2) text = text.slice(2);
                        break;

                }
            }
            if ((radix & (radix - 1)) == 0) {
                // binary base: 2, 4, 8, ...
                var n, bits_per_char, accum, bits_in_accum, k, pdigit;
                var p = 0;

                n = radix;
                for (bits_per_char = -1; n; ++bits_per_char) {
                    n >>>= 1;
                }
                n = 0;
                while ($DigitValue[text.charCodeAt(p)] < radix) {
                    p++;
                }
                nchars = p;
                n = p * bits_per_char + PyLong_SHIFT-1; //14 = PyLong_SHIFT - 1
                if (n / bits_per_char < p) {
                    throw pyjslib['ValueError']("long string too large to convert");
                }
                this.ob_size = n = Math.floor(n/PyLong_SHIFT);
                for (var i = 0; i < n; i++) {
                    this.ob_digit[i] = 0;
                }
                // Read string from right, and fill in long from left
                accum = 0;
                bits_in_accum = 0;
                pdigit = 0;
                while (--p >= 0) {
                    k = $DigitValue[text.charCodeAt(p)];
                    accum |= k << bits_in_accum;
                    bits_in_accum += bits_per_char;
                    if (bits_in_accum >= PyLong_SHIFT) {
                        this.ob_digit[pdigit] = accum & PyLong_MASK;
                        pdigit++;
                        accum >>>= PyLong_SHIFT;
                        bits_in_accum -= PyLong_SHIFT;
                    }
                }
                if (bits_in_accum) {
                    this.ob_digit[pdigit++] = accum;
                }
                while (pdigit < n) {
                    this.ob_digit[pdigit++] = 0;
                }
                long_normalize(this);
            } else {
                // Non-binary bases (such as radix == 10)
                var c, i, convwidth, convmultmax, convmult, pz, pzstop, scan, size_z;

                if ($log_base_PyLong_BASE[radix] == 0.0) {
                    var i = 1;
                    convmax = radix;
                    $log_base_PyLong_BASE[radix] = Math.log(radix) / Math.log(PyLong_BASE);
                    for (;;) {
                        var next = convmax * radix;
                        if (next > PyLong_BASE) break;
                        convmax = next;
                        ++i;
                    }
                    $convmultmax_base[radix] = convmax;
                    $convwidth_base[radix] = i;
                }
                scan = 0;
                while ($DigitValue[text.charCodeAt(scan)] < radix)
                    ++scan;
                nchars = scan;
                size_z = scan * $log_base_PyLong_BASE[radix] + 1;
                for (var i = 0; i < size_z; i ++) {
                    this.ob_digit[i] = 0;
                }
                this.ob_size = 0;
                convwidth = $convwidth_base[radix];
                convmultmax = $convmultmax_base[radix];
                for (var str = 0; str < scan;) {
                    c = $DigitValue[text.charCodeAt(str++)];
                    for (i = 1; i < convwidth && str != scan; ++i, ++str) {
                        c = c * radix + $DigitValue[text.charCodeAt(str)];
                    }
                    convmult = convmultmax;
                    if (i != convwidth) {
                        convmult = radix;
                        for ( ; i > 1; --i) convmult *= radix;
                    }
                    pz = 0;
                    pzstop = this.ob_size;
                    for (; pz < pzstop; ++pz) {
                        c += this.ob_digit[pz] * convmult;
                        this.ob_digit[pz] = c & PyLong_MASK;
                        c >>>= PyLong_SHIFT;
                    }
                    if (c) {
                        if (this.ob_size < size_z) {
                            this.ob_digit[pz] = c;
                            this.ob_size++;
                        } else {
                            this.ob_digit[this.ob_size] = c;
                        }
                    }
                }
            }
            text = text.slice(nchars);
            if (neg) this.ob_size = -this.ob_size;
            if (text.charAt(0) == 'l' || text.charAt(0) == 'L') text = text.slice(1);
            text = text.lstrip();
            if (text.length === 0) {
                return this;
            }
            throw pyjslib.ValueError("invalid literal for long() with base " +
                                     radix + ": " + value);
        } else {
            throw pyjslib.TypeError("TypeError: long() argument must be a string or a number");
        }
        if (isNaN(v) || !isFinite(v)) {
            throw pyjslib.ValueError("invalid literal for long() with base " + radix + ": '" + v + "'");
        }
        return this;
    };
    $long.__init__ = function () {};
    $long.__number__ = 0x04;
    $long.__name__ = 'long';
    $long.prototype = $long;
    $long.__class__ = $long;
    $long.ob_size = 0;

    $long.toExponential = function (fractionDigits) {
        return (typeof fractionDigits == 'undefined' || fractionDigits === null) ? this.__v.toExponential() : this.__v.toExponential(fractionDigits);
    };

    $long.toFixed = function (digits) {
        return (typeof digits == 'undefined' || digits === null) ? this.__v.toFixed() : this.__v.toFixed(digits);
    };

    $long.toLocaleString = function () {
        return this.__v.toLocaleString();
    };

    $long.toPrecision = function (precision) {
        return (typeof precision == 'undefined' || precision === null) ? this.__v.toPrecision() : this.__v.toPrecision(precision);
    };

    $long.toString = function (radix) {
        return (typeof radix == 'undefined' || radix === null) ? Format(this, 10, false, false) : Format(this, radix, false, false, false);
    };

    $long.valueOf = function() {
        var x, v;
        x = AsScaledDouble(this);
        // ldexp(a,b) == a * (2**b)
        v = x[0] * Math.pow(2.0, x[1] * PyLong_SHIFT);
        if (!isFinite(v)) {
            throw pyjslib['OverflowError']('long int too large to convert to float');
        }
        return v;
    };

    $long.__str__ = function () {
        return Format(this, 10, false, false);
    };

    $long.__repr__ = function () {
        return Format(this, 10, true, false);
    };

    $long.__nonzero__ = function () {
        return this.ob_size != 0;
    };

    $long.__cmp__ = function (b) {
        var sign;
 
        if (this.ob_size != b.ob_size) {
            if (this.ob_size < b.ob_size) return -1;
            return 1;
        }
        var i = this.ob_size < 0 ? - this.ob_size : this.ob_size;
        while (--i >= 0 && this.ob_digit[i] == b.ob_digit[i])
            ;
        if (i < 0) return 0;
        if (this.ob_digit[i] < b.ob_digit[i]) {
            if (this.ob_size < 0) return 1;
            return -1;
        }
        if (this.ob_size < 0) return -1;
        return 1;
    };

    $long.__hash__ = function () {
        var s = this.__str__();
        var v = this.valueOf();
        if (v.toString() == s) {
            return v;
        }
        return s;
    };

    $long.__invert__ = function () {
        var x = this.__add__($const_long_1);
        x.ob_size = -x.ob_size;
        return x;
    };

    $long.__neg__ = function () {
        var x = new $long(0);
        x.ob_digit = this.ob_digit.slice(0);
        x.ob_size = -this.ob_size;
        return x;
    };

    $long.__abs__ = function () {
        if (this.ob_size >= 0) return this;
        var x = new $long(0);
        x.ob_digit = this.ob_digit.slice(0);
        x.ob_size = -x.ob_size;
        return x;
    };

    $long.__lshift = function (y) {
        var a, z, wordshift, remshift, oldsize, newsize, 
            accum, i, j;
        if (y < 0) {
            throw pyjslib['ValueError']('negative shift count');
        }
        if (y >= $max_float_int) {
            throw pyjslib['ValueError']('outrageous left shift count');
        }
        a = this;

        wordshift = Math.floor(y / PyLong_SHIFT);
        remshift  = y - wordshift * PyLong_SHIFT;

        oldsize = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        newsize = oldsize + wordshift;
        if (remshift) ++newsize;
        z = new $long(0);
        z.ob_size = a.ob_size < 0 ? -newsize : newsize;
        for (i = 0; i < wordshift; i++) {
            z.ob_digit[i] = 0;
        }
        accum = 0;
        for (i = wordshift, j = 0; j < oldsize; i++, j++) {
            accum |= a.ob_digit[j] << remshift;
            z.ob_digit[i] = accum & PyLong_MASK;
            accum >>>= PyLong_SHIFT;
        }
        if (remshift) {
            z.ob_digit[newsize-1] = accum;
        }
        z = long_normalize(z);
        return z;
    };

    $long.__lshift__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__lshift(y);
                break;
            case 0x02:
                return this.__lshift(y.__v);
            case 0x04:
                y = y.valueOf();
                return this.__lshift(y);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__rlshift__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__lshift(this.valueOf());
            case 0x04:
                return y.__lshift(this.valueOf());
        }
        return pyjslib['NotImplemented'];
    };

    $long.__rshift = function (y) {
        var a, z, size, wordshift, newsize, loshift, hishift,
            lomask, himask, i, j;
        if (y.__number__ != 0x01) {
            y = y.valueOf();
        } else {
            if (y != Math.floor(y)) {
                throw pyjslib['TypeError']("unsupported operand type(s) for >>: 'long' and 'float'");
            }
        }
        if (y < 0) {
            throw pyjslib['ValueError']('negative shift count');
        }
        if (y >= $max_float_int) {
            throw pyjslib['ValueError']('shift count too big');
        }
        a = this;
        size = this.ob_size;
        if (this.ob_size < 0) {
            size = -size;
            a = this.__add__($const_long_1);
            a.ob_size = -a.ob_size;
        }

        wordshift = Math.floor(y / PyLong_SHIFT);
        newsize = size - wordshift;
        if (newsize <= 0) {
            z = $const_long_0;
        } else {
            loshift = y % PyLong_SHIFT;
            hishift = PyLong_SHIFT - loshift;
            lomask = (1 << hishift) - 1;
            himask = PyLong_MASK ^ lomask;
            z = new $long(0);
            z.ob_size = a.ob_size < 0 ? -newsize : newsize;
            for (i = 0, j = wordshift; i < newsize; i++, j++) {
                z.ob_digit[i] = (a.ob_digit[j] >>> loshift) & lomask;
                if (i+1 < newsize) {
                    z.ob_digit[i] |=
                      (a.ob_digit[j+1] << hishift) & himask;
                }
            }
            z = long_normalize(z);
        }

        if (this.ob_size < 0) {
            z = z.__add__($const_long_1);
            z.ob_size = -z.ob_size;
        }
        return z;
    };

    $long.__rshift__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__rshift(y);
                break;
            case 0x02:
                return this.__rshift(y.__v);
            case 0x04:
                y = y.valueOf();
                return this.__rshift(y);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__rrshift__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__rshift(this.valueOf());
            case 0x04:
                return y.__rshift(this.valueOf());
        }
        return pyjslib['NotImplemented'];
    };

    $long.__and = function (b) {
        var a, maska, maskb, negz, size_a, size_b, size_z,
            i, z, diga, digb, v, op;

        a = this;

        if (a.ob_size < 0) {
            a = a.__invert__();
            maska = PyLong_MASK;
        } else {
            maska = 0;
        }
        if (b.ob_size < 0) {
            b = b.__invert__();
            maskb = PyLong_MASK;
        } else {
            maskb = 0;
        }
        negz = 0;


            op = '&';
            if (maska && maskb) {
                op = '|';
                maska ^= PyLong_MASK;
                maskb ^= PyLong_MASK;
                negz = -1;
            }


        size_a = a.ob_size;
        size_b = b.ob_size;
        size_z = op == '&'
                    ? (maska
                        ? size_b
                        : (maskb ? size_a : (size_a < size_b ? size_a : size_b)))
                    : (size_a > size_b ? size_a : size_b);
        z = new $long(0);
        z.ob_size = size_z;

        switch (op) {
            case '&':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga & digb;
                }
                break;
            case '|':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga | digb;
                }
                break;
            case '^':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga ^ digb;
                }
                break;
        }
        z = long_normalize(z);
        if (negz == 0) {
            return z;
        }
        return z.__invert__();
    };

    $long.__and__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__and(new $long(y));
                break;
            case 0x02:
                return this.__and(new $long(y.__v));
            case 0x04:
                return this.__and(y);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__rand__ = $long.__and__;

    $long.__xor = function (b) {
        var a,maska, maskb, negz, size_a, size_b, size_z,
            i, z, diga, digb, v, op;

        a = this;

        if (a.ob_size < 0) {
            a = a.__invert__();
            maska = PyLong_MASK;
        } else {
            maska = 0;
        }
        if (b.ob_size < 0) {
            b = b.__invert__();
            maskb = PyLong_MASK;
        } else {
            maskb = 0;
        }
        negz = 0;


            op = '^';
            if (maska != maskb) {
                maska ^= PyLong_MASK;
                negz = -1;
            }


        size_a = a.ob_size;
        size_b = b.ob_size;
        size_z = op == '&'
                    ? (maska
                        ? size_b
                        : (maskb ? size_a : (size_a < size_b ? size_a : size_b)))
                    : (size_a > size_b ? size_a : size_b);
        z = new $long(0);
        z.ob_size = size_z;

        switch (op) {
            case '&':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga & digb;
                }
                break;
            case '|':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga | digb;
                }
                break;
            case '^':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga ^ digb;
                }
                break;
        }
        z = long_normalize(z);
        if (negz == 0) {
            return z;
        }
        return z.__invert__();
    };

    $long.__xor__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__xor(new $long(y));
                break;
            case 0x02:
                return this.__xor(new $long(y.__v));
            case 0x04:
                return this.__xor(y);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__rxor__ = $long.__xor__;

    $long.__or = function (b) {
        var a, maska, maskb, negz, size_a, size_b, size_z,
            i, z, diga, digb, v, op;

        a = this;

        if (a.ob_size < 0) {
            a = a.__invert__();
            maska = PyLong_MASK;
        } else {
            maska = 0;
        }
        if (b.ob_size < 0) {
            b = b.__invert__();
            maskb = PyLong_MASK;
        } else {
            maskb = 0;
        }
        negz = 0;


            op = '|';
            if (maska || maskb) {
                op = '&';
                maska ^= PyLong_MASK;
                maskb ^= PyLong_MASK;
                negz = -1;
            }


        size_a = a.ob_size;
        size_b = b.ob_size;
        size_z = op == '&'
                    ? (maska
                        ? size_b
                        : (maskb ? size_a : (size_a < size_b ? size_a : size_b)))
                    : (size_a > size_b ? size_a : size_b);
        z = new $long(0);
        z.ob_size = size_z;

        switch (op) {
            case '&':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga & digb;
                }
                break;
            case '|':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga | digb;
                }
                break;
            case '^':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga ^ digb;
                }
                break;
        }
        z = long_normalize(z);
        if (negz == 0) {
            return z;
        }
        return z.__invert__();
    };

    $long.__or__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__or(new $long(y));
                break;
            case 0x02:
                return this.__or(new $long(y.__v));
            case 0x04:
                return this.__or(y);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__ror__ = $long.__or__;

    $long.__oct__ = function () {
        return Format(this, 8, true, false);
    };

    $long.__hex__ = function () {
        return Format(this, 16, true, false);
    };

    $long.__add = function (b) {
        var a = this, z;
        if (a.ob_size < 0) {
            if (b.ob_size < 0) {
                z = x_add(a, b);
                z.ob_size = -(z.ob_size);
            }
            else {
                z = x_sub(b, a);
            }
        }
        else {
            z = b.ob_size < 0 ? x_sub(a, b) : x_add(a, b);
        }
        return z;
    };

    $long.__add__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__add(new $long(y.__v));
            case 0x04:
                return this.__add(y);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__radd__ = $long.__add__;

    $long.__sub = function (b) {
        var a = this, z;
        if (a.ob_size < 0) {
            z = b.ob_size < 0 ? x_sub(a, b) : x_add(a, b);
            z.ob_size = -(z.ob_size);
        }
        else {
            z = b.ob_size < 0 ?  x_add(a, b) : x_sub(a, b);
        }
        return z;
    };

    $long.__sub__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__sub(new $long(y.__v));
            case 0x04:
                return this.__sub(y);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__rsub__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__sub(this);
            case 0x04:
                return y.__sub(this);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__mul = function (b) {
        //var z = k_mul(a, b);
        var z = x_mul(this, b);
        if ((this.ob_size ^ b.ob_size) < 0)
            z.ob_size = -(z.ob_size);
        return z;
    };

    $long.__mul__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__mul(new $long(y.__v));
            case 0x04:
                return this.__mul(y);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__rmul__ = $long.__mul__;

    $long.__div = function (b) {
        var div = new $long(0);
        l_divmod(this, b, div, null);
        return div;
    };

    $long.__div__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__sub(new $long(y.__v));
            case 0x04:
                return this.__sub(y);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__rdiv__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__div(this);
            case 0x04:
                return y.__div(this);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__mod = function (b) {
        var mod = new $long(0);
        l_divmod(this, b, null, mod);
        return mod;
    };

    $long.__mod__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__mod(new $long(y.__v));
            case 0x04:
                return this.__mod(y);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__rmod__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__mod(this);
            case 0x04:
                return y.__mod(this);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__divmod = function (b) {
        var div = new $long(0);
        var mod = new $long(0);
        l_divmod(this, b, div, mod);
        return pyjslib['tuple']([div, mod]);
    };

    $long.__divmod__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__divmod(new $long(y.__v));
            case 0x04:
                return this.__divmod(y);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__rdivmod__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__divmod(this);
            case 0x04:
                return y.__divmod(this);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__floordiv = function (b) {
        var div = new $long(0);
        l_divmod(this, b, div, null);
        return div;
    };

    $long.__floordiv__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__floordiv(new $long(y.__v));
            case 0x04:
                return this.__floordiv(y);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__rfloordiv__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__floordiv(this);
            case 0x04:
                return y.__floordiv(this);
        }
        return pyjslib['NotImplemented'];
    };

    $long.__pow = function (w, x) {
        var v = this;
        var a, b, c, negativeOutput = 0, z, i, j, k, temp, bi;
        var table = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                     0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        a = this;
        b = w.__number__ == 0x04 ? w : new $long(w);
        if (x === null || typeof x == 'undefined') {
            c = null;
        } else {
            c = x.__number__ == 0x04 ? x : new $long(x);
        }

        if (b.ob_size < 0) {
            if (c !== null) {
                throw pyjslib['TypeError']("pow() 2nd argument cannot be negative when 3rd argument specified");
            }
            return Math.pow(v.valueOf(), w.valueOf());
        }

        if (c !== null) {
            if (c.ob_size == 0) {
                throw pyjslib['ValueError']("pow() 3rd argument cannot be 0");
            }
            if (c.ob_size < 0) {
                negativeOutput = 1;
                temp = $pow_temp_c;
                temp.ob_digit = c.ob_digit.slice(0);
                temp.ob_size = -c.ob_size;
                c = temp;
            }
            if (c.ob_size == 1 && c.ob_digit[0] == 1) {
                return $const_long_0;
            }
            if (a.ob_size < 0) {
                temp = $pow_temp_a;
                l_divmod(a, c, null, temp);
                a = temp;
            }
        }
        z = new $long(1);
        temp = $pow_temp_z;
        if (b.ob_size <= FIVEARY_CUTOFF) {
            for (i = b.ob_size - 1; i >= 0; --i) {
                bi = b.ob_digit[i];
                for (j = 1 << (PyLong_SHIFT-1); j != 0; j >>>= 1) {
                    z = z.__mul(z);
                    if (c !== null) {
                        l_divmod(z, c, null, temp);
                        z.ob_digit = temp.ob_digit.slice(0);
                        z.ob_size = temp.ob_size;
                    }
                    if (bi & j) {
                        z = z.__mul(a);
                        if (c !== null) {
                            l_divmod(z, c, null, temp);
                            z.ob_digit = temp.ob_digit.slice(0);
                            z.ob_size = temp.ob_size;
                        }
                    }
                }
            }
        } else {
            table[0] = z;
            for (i = 1; i < 32; ++i) {
                table[i] = table[i-1].__mul(a);
                if (c !== null) {
                    l_divmod(table[i], c, null, temp);
                    table[i].ob_digit = temp.ob_digit.slice(0);
                    table[i].ob_size = temp.ob_size;
                }
            }
            for (i = b.ob_size - 1; i >= 0; --i) {
                bi = b.ob_digit[i];
                for (j = PyLong_SHIFT - 5; j >= 0; j -= 5) {
                    var index = (bi >>> j) & 0x1f;
                    for (k = 0; k < 5; ++k) {
                        z = z.__mul(z);
                        if (c !== null) {
                            l_divmod(z, c, null, temp);
                            z.ob_digit = temp.ob_digit.slice(0);
                            z.ob_size = temp.ob_size;
                        }
                    }
                    if (index) {
                        z = z.__mul(table[index]);
                        if (c !== null) {
                            l_divmod(z, c, null, temp);
                            z.ob_digit = temp.ob_digit.slice(0);
                            z.ob_size = temp.ob_size;
                        }
                    }
                }
            }
        }

        if ((c !== null) && negativeOutput && 
            (z.ob_size != 0) && (c.ob_size != 0)) {
            z = z.__sub__(c);
        }
        return z;
    };

    $long.__pow__ = function (y, z) {
        switch (y.__number__) {
            case 0x02:
                if (typeof z == 'undefined')
                    return this.__pow(new $long(y.__v), null);
                switch (z.__number) {
                    case 0x02:
                        return this.__pow(new $long(y.__v), new $long(z));
                    case 0x04:
                        return this.__pow(new $long(y.__v), z);
                }
                break;
            case 0x04:
                if (typeof z == 'undefined')
                    return this.__pow(y, null);
                switch (z.__number) {
                    case 0x02:
                        return this.__pow(y, new $long(z));
                    case 0x04:
                        return this.__pow(y, z);
                }
                break;
        }
        return pyjslib['NotImplemented'];
    };


    var $const_long_0 = new $long(0),
        $const_long_1 = new $long(1);
    // Since javascript is single threaded:
    var $l_divmod_div = new $long(0),
        $l_divmod_mod = new $long(0),
        $x_divrem_v = new $long(0),
        $x_divrem_w = new $long(0),
        $pow_temp_a = new $long(0),
        $pow_temp_c = new $long(0),
        $pow_temp_z = new $long(0);
})();


	var attrib_remap = ['apply', 'break', 'call', 'case', 'catch', 'class', 'comment', 'const', 'constructor', 'continue', 'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally', 'for', 'function', 'if', 'import', 'in', 'label', 'name', 'new', 'prototype', 'replace', 'return', 'split', 'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with'];
	$module['NotImplementedType'] = (function(){
		var $cls_instance = $pyjs__class_instance('NotImplementedType');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '3bef5288be3e9ddd786738b24c176c21';
		$method = $pyjs__bind_method($cls_instance, '__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return String('\x3Ctype \x27NotImplementedType\x27\x3E');
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__str__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['__repr__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'toString', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['__repr__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array($module['object']));
	})();
	$module['NotImplemented'] = $module['NotImplementedType']();

var $iter_array = function (l) {
    this.__array = l;
    this.i = -1;
};
$iter_array.prototype.next = function (noStop) {
    if (++this.i == this.__array.length) {
        if (noStop === true) {
            return;
        }
        throw pyjslib.StopIteration;
    }
    return this.__array[this.i];
};
$iter_array.prototype.__iter__ = function ( ) {
    return this;
};
var $reversed_iter_array = function (l) {
    this.___array = l;
    this.i = l.length;
};
$reversed_iter_array.prototype.next = function (noStop) {
    if (--this.i == -1) {
        if (noStop === true) {
            return;
        }
        throw pyjslib.StopIteration;
    }
    return this.___array[this.i];
};
$reversed_iter_array.prototype.__iter__ = function ( ) {
    return this;
};
//$reversed_iter_array.prototype.$genfunc = $reversed_iter_array.prototype.next;
var $enumerate_array = function (l) {
    this.array = l;
    this.i = -1;
    this.tuple = 
	pyjslib['tuple'](pyjslib['list']([0, String('')]));

    this.tl = this.tuple.__array;
};
$enumerate_array.prototype.next = function (noStop, reuseTuple) {
    if (++this.i == this.array.length) {
        if (noStop === true) {
            return;
        }
        throw pyjslib.StopIteration;
    }
    this.tl[1] = this.array[this.i];
    if (this.tl[0].__number__ == 0x01) {
        this.tl[0] = this.i;
    } else {
        this.tl[0] = new pyjslib['int'](this.i);
    }
    return reuseTuple === true ? this.tuple : pyjslib.tuple(this.tl);
};
$enumerate_array.prototype.__iter__ = function ( ) {
    return this;
};
$enumerate_array.prototype.$genfunc = $enumerate_array.prototype.next;

	$module['list'] = (function(){
		var $cls_instance = $pyjs__class_instance('list');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '41f5717c11ce20baf70717e71d8f2fae';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			if (typeof data == 'undefined') data=arguments.callee.__args__[3][1];


        if (data === null) {
            throw pyjslib['TypeError']("'NoneType' is not iterable");
        }
        if (data.constructor === Array) {
            self.__array = data.slice();
            return null;
        }
        if (typeof data.__iter__ == 'function') {
            if (typeof data.__array == 'object') {
                self.__array = data.__array.slice();
                return null;
            }
            var iter = data.__iter__();
            if (typeof iter.__array == 'object') {
                self.__array = iter.__array.slice();
                return null;
            }
            data = [];
            var item, i = 0;
            if (typeof iter.$genfunc == 'function') {
                while (typeof (item=iter.next(true)) != 'undefined') {
                    data[i++] = item;
                }
            } else {
                try {
                    while (true) {
                        data[i++] = iter.next();
                    }
                }
                catch (e) {
                    if (e.__name__ != 'StopIteration') throw e;
                }
            }
            self.__array = data;
            return null;
        }
        throw pyjslib['TypeError']("'" + pyjslib['repr'](data) + "' is not iterable");
        
		}
	, 1, [null,null,['self'],['data', []]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($module['TypeError'](String('list objects are unhashable')));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'append', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}

self.__array[self.__array.length] = item;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['append'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'extend', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}


        if (data === null) {
            throw pyjslib['TypeError']("'NoneType' is not iterable");
        }
        if (data.constructor === Array) {
        } else if (typeof data.__iter__ == 'function') {
            if (typeof data.__array == 'object') {
                data = data.__array;
            } else {
                var iter = data.__iter__();
                if (typeof iter.__array == 'object') {
                    data = iter.__array;
                }
                data = [];
                var item, i = 0;
                if (typeof iter.$genfunc == 'function') {
                    while (typeof (item=iter.next(true)) != 'undefined') {
                        data[i++] = item;
                    }
                } else {
                    try {
                        while (true) {
                            data[i++] = iter.next();
                        }
                    }
                    catch (e) {
                        if (e.__name__ != 'StopIteration') throw e;
                    }
                }
            }
        } else {
            throw pyjslib['TypeError']("'" + pyjslib['repr'](data) + "' is not iterable");
        }
        var l = self.__array;
        var j = self.__array.length;
        var n = data.length, i = 0;
        while (i < n) {
            l[j++] = data[i++];
        }
        
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['extend'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'remove', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}


        var index=self.index(value);
        if (index<0) {
            throw pyjslib.ValueError("list.remove(x): x not in list");
        }
        self.__array.splice(index, 1);
        return true;
        
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'index', function(value, start) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
				start = arguments[2];
			}
			if (typeof start == 'undefined') start=arguments.callee.__args__[4][1];


        start = start.valueOf();
        if (typeof value == 'number' || typeof value == 'string') {
            start = self.__array.indexOf(value, start);
            if (start >= 0)
                return start;
        } else {
            var len = self.__array.length >>> 0;

            start = (start < 0)
                    ? Math.ceil(start)
                    : Math.floor(start);
            if (start < 0)
                start += len;

            for (; start < len; start++) {
                if (start in self.__array &&
                    pyjslib.cmp(self.__array[start], value) == 0)
                    return start;
            }
        }
        
			throw ($module['ValueError'](String('list.index(x): x not in list')));
			return null;
		}
	, 1, [null,null,['self'],['value'],['start', 0]]);
		$cls_definition['index'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'insert', function(index, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}

    var a = self.__array; self.__array=a.slice(0, index).concat(value, a.slice(index));
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['insert'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'pop', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			if (typeof index == 'undefined') index=arguments.callee.__args__[3][1];


        index = index.valueOf();
        if (index<0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            if (self.__array.length == 0) {
                throw pyjslib.IndexError("pop from empty list");
            }
            throw pyjslib.IndexError("pop index out of range");
        }
        var a = self.__array[index];
        self.__array.splice(index, 1);
        return a;
        
		}
	, 1, [null,null,['self'],['index', (typeof ($usub2=1)=='number'?
			-$usub2:
			pyjslib['op_usub']($usub2))]]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__cmp__', function(l) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				l = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool'](pyjslib['isinstance'](l, $module['list'])))) {
				return (typeof ($usub3=1)=='number'?
					-$usub3:
					pyjslib['op_usub']($usub3));
			}

        var n1 = self.__array.length,
            n2 = l.__array.length,
            a1 = self.__array,
            a2 = l.__array,
            n, c;
        n = (n1 < n2 ? n1 : n2);
        for (var i = 0; i < n; i++) {
            c = pyjslib.cmp(a1[i], a2[i]);
            if (c) return c;
        }
        if (n1 < n2) return -1;
        if (n1 > n2) return 1;
        return 0;
		}
	, 1, [null,null,['self'],['l']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__getslice__', function(lower, upper) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
			}


        if (upper==null) return pyjslib.list(self.__array.slice(lower));
        return pyjslib.list(self.__array.slice(lower, upper));
        
		}
	, 1, [null,null,['self'],['lower'],['upper']]);
		$cls_definition['__getslice__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__delslice__', function(lower, upper) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
			}


        var n = upper - lower;
        if (upper==null) {
            n =  self.__array.length;
        }
        if (!lower) lower = 0;
        if (n > 0) self.__array.splice(lower, n);
        
			return null;
		}
	, 1, [null,null,['self'],['lower'],['upper']]);
		$cls_definition['__delslice__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__setslice__', function(lower, upper, data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
				data = arguments[3];
			}
			var tail;
			self['__delslice__'](lower, upper);
			tail = self['__getslice__'](lower, null);
			self['__delslice__'](lower, null);
			self['extend'](data);
			self['extend'](tail);
			return null;
		}
	, 1, [null,null,['self'],['lower'],['upper'],['data']]);
		$cls_definition['__setslice__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__getitem__', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}


        index = index.valueOf();
        if (index < 0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            throw pyjslib.IndexError("list index out of range");
        }
        return self.__array[index];
        
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__setitem__', function(index, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}


        index = index.valueOf();
        if (index < 0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            throw pyjslib.IndexError("list assignment index out of range");
        }
        self.__array[index]=value;
        
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__delitem__', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}


        index = index.valueOf();
        if (index < 0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            throw pyjslib.IndexError("list assignment index out of range");
        }
        self.__array.splice(index, 1);
        
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__delitem__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self.__array.length;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__contains__', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var $pyjs_try_err,err;
			try {
				self['index'](value);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjslib, try_lineno: 3855};
				if (($pyjs_try_err_name == $module['ValueError'].__name__)||pyjslib['_isinstance']($pyjs_try_err,$module['ValueError'])) {
					$pyjs.__last_exception__.except_lineno = 3857;
					err = $pyjs_try_err;
					return false;
				} else { throw $pyjs_try_err; }
			}
			return true;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $iter_array(self.__array);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__reversed__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $reversed_iter_array(self.__array);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__reversed__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__enumerate__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $enumerate_array(self.__array);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__enumerate__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'reverse', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

    self.__array.reverse();
		}
	, 1, [null,null,['self']]);
		$cls_definition['reverse'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'sort', function(cmp, key, reverse) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cmp = arguments[1];
				key = arguments[2];
				reverse = arguments[3];
			}
			if (typeof cmp == 'undefined') cmp=arguments.callee.__args__[3][1];
			if (typeof key == 'undefined') key=arguments.callee.__args__[4][1];
			if (typeof reverse == 'undefined') reverse=arguments.callee.__args__[5][1];
			var thisSort1,thisSort2,$and13,$and14,thisSort3;
			if (pyjslib['bool']((cmp === null))) {
				cmp = $module['__cmp'];
			}
			if (pyjslib['bool']((pyjslib['bool']($and13=key)?reverse:$and13))) {
				thisSort1 = function(a, b) {

					return (typeof ($usub4=cmp(key(a), key(b)))=='number'?
						-$usub4:
						pyjslib['op_usub']($usub4));
				};
				thisSort1.__name__ = 'thisSort1';

				thisSort1.__bind_type__ = 0;
				thisSort1.__args__ = [null,null,['a'],['b']];
				self['__array']['sort'](thisSort1);
			}
			else if (pyjslib['bool'](key)) {
				thisSort2 = function(a, b) {

					return cmp(key(a), key(b));
				};
				thisSort2.__name__ = 'thisSort2';

				thisSort2.__bind_type__ = 0;
				thisSort2.__args__ = [null,null,['a'],['b']];
				self['__array']['sort'](thisSort2);
			}
			else if (pyjslib['bool'](reverse)) {
				thisSort3 = function(a, b) {

					return (typeof ($usub5=cmp(a, b))=='number'?
						-$usub5:
						pyjslib['op_usub']($usub5));
				};
				thisSort3.__name__ = 'thisSort3';

				thisSort3.__bind_type__ = 0;
				thisSort3.__args__ = [null,null,['a'],['b']];
				self['__array']['sort'](thisSort3);
			}
			else {
				self['__array']['sort'](cmp);
			}
			return null;
		}
	, 1, [null,null,['self'],['cmp', null],['key', null],['reverse', false]]);
		$cls_definition['sort'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getArray', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr50,$attr49;
			return self['__array'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getArray'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr51,$attr52;
			if (pyjslib['bool'](pyjslib['callable'](self))) {
				return pyjslib['sprintf'](String('\x3Ctype \x27%s\x27\x3E'), self['__name__']);
			}

        var s = "[";
        for (var i=0; i < self.__array.length; i++) {
            s += pyjslib.repr(self.__array[i]);
            if (i < self.__array.length - 1)
                s += ", ";
        }
        s += "]";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__add__', function(y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				y = arguments[1];
			}
			var $attr53,$attr54;
			if (pyjslib['bool'](!pyjslib['bool'](pyjslib['isinstance'](y, self)))) {
				throw ($module['TypeError'](String('can only concatenate list to list')));
			}
			return $module['list'](self['__array']['concat'](y['__array']));
		}
	, 1, [null,null,['self'],['y']]);
		$cls_definition['__add__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__mul__', function(n) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}
			var a,$attr55,$sub3,$attr56,$sub4;
			if (pyjslib['bool'](!pyjslib['bool'](n !== null && n.__number__ && (n.__number__ != 0x01 || isFinite(n))))) {
				throw ($module['TypeError'](String('can\x27t multiply sequence by non-int')));
			}
			a = pyjslib['list']([]);
			while (pyjslib['bool'](n)) {
				n = (typeof ($sub3=n)==typeof ($sub4=1) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					pyjslib['op_sub']($sub3,$sub4));
				a['extend'](self['__array']);
			}
			return a;
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__mul__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__rmul__', function(n) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}

			return self['__mul__'](n);
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__rmul__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
pyjslib.list.__str__ = pyjslib.list.__repr__;
pyjslib.list.toString = pyjslib.list.__str__;
	$module['tuple'] = (function(){
		var $cls_instance = $pyjs__class_instance('tuple');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '55a7a11a39993abb150167908c87596b';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			if (typeof data == 'undefined') data=arguments.callee.__args__[3][1];


        if (data === null) {
            throw pyjslib['TypeError']("'NoneType' is not iterable");
        }
        if (data.constructor === Array) {
            self.__array = data.slice();
            return null;
        }
        if (typeof data.__iter__ == 'function') {
            if (typeof data.__array == 'object') {
                self.__array = data.__array.slice();
                return null;
            }
            var iter = data.__iter__();
            if (typeof iter.__array == 'object') {
                self.__array = iter.__array.slice();
                return null;
            }
            data = [];
            var item, i = 0;
            if (typeof iter.$genfunc == 'function') {
                while (typeof (item=iter.next(true)) != 'undefined') {
                    data[i++] = item;
                }
            } else {
                try {
                    while (true) {
                        data[i++] = iter.next();
                    }
                }
                catch (e) {
                    if (e.__name__ != 'StopIteration') throw e;
                }
            }
            self.__array = data;
            return null;
        }
        throw pyjslib['TypeError']("'" + pyjslib['repr'](data) + "' is not iterable");
        
		}
	, 1, [null,null,['self'],['data', []]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr58,$add34,$attr57,$add33;
			return (typeof ($add33=String('$tuple$'))==typeof ($add34=pyjslib['str'](self['__array'])) && (typeof $add33=='number'||typeof $add33=='string')?
				$add33+$add34:
				pyjslib['op_add']($add33,$add34));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__cmp__', function(l) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				l = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool'](pyjslib['isinstance'](l, $module['tuple'])))) {
				return 1;
			}

        var n1 = self.__array.length,
            n2 = l.__array.length,
            a1 = self.__array,
            a2 = l.__array,
            n, c;
        n = (n1 < n2 ? n1 : n2);
        for (var i = 0; i < n; i++) {
            c = pyjslib.cmp(a1[i], a2[i]);
            if (c) return c;
        }
        if (n1 < n2) return -1;
        if (n1 > n2) return 1;
        return 0;
		}
	, 1, [null,null,['self'],['l']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__getslice__', function(lower, upper) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
			}


        if (upper==null) return pyjslib.tuple(self.__array.slice(lower));
        return pyjslib.tuple(self.__array.slice(lower, upper));
        
		}
	, 1, [null,null,['self'],['lower'],['upper']]);
		$cls_definition['__getslice__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__getitem__', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}


        index = index.valueOf();
        if (index < 0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            throw pyjslib.IndexError("tuple index out of range");
        }
        return self.__array[index];
        
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self.__array.length;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__contains__', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			return self.__array.indexOf(value)>=0;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $iter_array(self.__array);

        var i = 0;
        var l = self.__array;
        return {
            'next': function() {
                if (i >= l.length) {
                    throw pyjslib.StopIteration;
                }
                return l[i++];
            },
            '__iter__': function() {
                return this;
            }
        };
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__enumerate__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $enumerate_array(self.__array);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__enumerate__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getArray', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr59,$attr60;
			return self['__array'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getArray'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr61,$attr62;
			if (pyjslib['bool'](pyjslib['callable'](self))) {
				return pyjslib['sprintf'](String('\x3Ctype \x27%s\x27\x3E'), self['__name__']);
			}

        var s = "(";
        for (var i=0; i < self.__array.length; i++) {
            s += pyjslib.repr(self.__array[i]);
            if (i < self.__array.length - 1)
                s += ", ";
        }
        if (self.__array.length == 1)
            s += ",";
        s += ")";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__add__', function(y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				y = arguments[1];
			}
			var $attr64,$attr63;
			if (pyjslib['bool'](!pyjslib['bool'](pyjslib['isinstance'](y, self)))) {
				throw ($module['TypeError'](String('can only concatenate tuple to tuple')));
			}
			return $module['tuple'](self['__array']['concat'](y['__array']));
		}
	, 1, [null,null,['self'],['y']]);
		$cls_definition['__add__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__mul__', function(n) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}
			var a,$attr65,$attr66,$sub6,$sub5;
			if (pyjslib['bool'](!pyjslib['bool'](n !== null && n.__number__ && (n.__number__ != 0x01 || isFinite(n))))) {
				throw ($module['TypeError'](String('can\x27t multiply sequence by non-int')));
			}
			a = pyjslib['list']([]);
			while (pyjslib['bool'](n)) {
				n = (typeof ($sub5=n)==typeof ($sub6=1) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					pyjslib['op_sub']($sub5,$sub6));
				a['extend'](self['__array']);
			}
			return a;
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__mul__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__rmul__', function(n) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}

			return self['__mul__'](n);
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__rmul__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
pyjslib.tuple.__str__ = pyjslib.tuple.__repr__;
pyjslib.tuple.toString = pyjslib.tuple.__str__;
	$module['dict'] = (function(){
		var $cls_instance = $pyjs__class_instance('dict');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'fd4cbd0e0f3c83856a1e8fb972454ed0';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(seq) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				seq = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = pyjslib['__empty_dict']();
				if (typeof seq != 'undefined') {
					if (seq !== null && typeof seq['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = seq;
						seq = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof seq == 'undefined') seq=arguments.callee.__args__[3][1];
			var init;
			self.__object = {};
			init = function(data) {


        var item, i, n, sKey;
        //self.__object = {};

        if (data === null) {
            throw pyjslib['TypeError']("'NoneType' is not iterable");
        }
        if (data.constructor === Array) {
        } else if (typeof data.__object == 'object') {
            data = data.__object;
            for (sKey in data) {
                self.__object[sKey] = data[sKey].slice();
            }
            return null;
        } else if (typeof data.__iter__ == 'function') {
            if (typeof data.__array == 'object') {
                data = data.__array;
            } else {
                var iter = data.__iter__();
                if (typeof iter.__array == 'object') {
                    data = iter.__array;
                }
                data = [];
                var item, i = 0;
                if (typeof iter.$genfunc == 'function') {
                    while (typeof (item=iter.next(true)) != 'undefined') {
                        data[i++] = item;
                    }
                } else {
                    try {
                        while (true) {
                            data[i++] = iter.next();
                        }
                    }
                    catch (e) {
                        if (e.__name__ != 'StopIteration') throw e;
                    }
                }
            }
        } else if (typeof data == 'object' || typeof data == 'function') {
            for (var key in data) {
                self.__object['$'+key] = [key, data[key]];
            }
            return null;
        } else {
            throw pyjslib['TypeError']("'" + pyjslib['repr'](data) + "' is not iterable");
        }
        // Assume uniform array content...
        if ((n = data.length) == 0) {
            return null;
        }
        i = 0;
        if (data[0].constructor === Array) {
            while (i < n) {
                item = data[i++];
                key = item[0]
                sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:pyjslib.__hash(key))));
                self.__object[sKey] = [key, item[1]];
            }
            return null;
        }
        if (typeof data[0].__array != 'undefined') {
            while (i < n) {
                item = data[i++].__array;
                key = item[0]
                sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:pyjslib.__hash(key))));
                self.__object[sKey] = [key, item[1]];
            }
            return null;
        }
        i = -1;
        var key;
        while (++i < n) {
            key = data[i].__getitem__(0);
            sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:pyjslib.__hash(key))));
            self.__object[sKey] = [key, data[i].__getitem__(1)];
        }
        return null;
        
			};
			init.__name__ = 'init';

			init.__bind_type__ = 0;
			init.__args__ = [null,null,['data']];
			init(seq);
			if (pyjslib['bool'](kwargs)) {
				init(kwargs);
			}
			return null;
		}
	, 1, [null,['kwargs'],['self'],['seq', []]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($module['TypeError'](String('dict objects are unhashable')));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__setitem__', function(key, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				value = arguments[2];
			}


        if (typeof value == 'undefined') {
            throw pyjslib['ValueError']("Value for key '" + key + "' is undefined");
        }
        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:pyjslib.__hash(key))));
        self.__object[sKey] = [key, value];
        
		}
	, 1, [null,null,['self'],['key'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__getitem__', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}


        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:pyjslib.__hash(key))));
        var value=self.__object[sKey];
        if (typeof value == 'undefined'){
            throw pyjslib.KeyError(key);
        }
        return value[1];
        
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($module['TypeError'](String('dict objects are unhashable')));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__nonzero__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        for (var i in self.__object){
            return true;
        }
        return false;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__nonzero__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__cmp__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool'](pyjslib['isinstance'](other, $module['dict'])))) {
				throw ($module['TypeError'](String('dict.__cmp__(x,y) requires y to be a \x27dict\x27')));
			}

        var self_sKeys = new Array(),
            other_sKeys = new Array(),
            selfLen = 0,
            otherLen = 0,
            selfObj = self.__object;
            otherObj = other.__object;
        for (sKey in selfObj) {
           self_sKeys[selfLen++] = sKey;
        }
        for (sKey in otherObj) {
           other_sKeys[otherLen++] = sKey;
        }
        if (selfLen < otherLen) {
            return -1;
        }
        if (selfLen > otherLen) {
            return 1;
        }
        self_sKeys.sort();
        other_sKeys.sort();
        var c, sKey;
        for (var idx = 0; idx < selfLen; idx++) {
            c = pyjslib.cmp(selfObj[sKey = self_sKeys[idx]][0], otherObj[other_sKeys[idx]][0]);
            if (c != 0) {
                return c;
            }
            c = pyjslib.cmp(selfObj[sKey][1], otherObj[sKey][1]);
            if (c != 0) {
                return c;
            }
        }
        return 0;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var size;
			size = 0;

        for (var i in self.__object) size++;
        
			return size;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__delitem__', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}


        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:pyjslib.__hash(key))));
        delete self.__object[sKey];
        
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__delitem__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__contains__', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}


        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:pyjslib.__hash(key))));
        return typeof self.__object[sKey] == 'undefined' ? false : true;
        
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'keys', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var keys=pyjslib.list(),
            selfObj = self.__object,
            __array = keys.__array,
            i = 0;
        for (var sKey in self.__object) {
            __array[i++] = selfObj[sKey][0];
        }
        return keys;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['keys'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'fromkeys', function(iterable, v) {
			if (typeof v == 'undefined') v=arguments.callee.__args__[3][1];
			var d,i,$iter4_nextval,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter;
			d = pyjslib['dict']([]);
			$iter4_iter = iterable;
			if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter.__iter__();
				$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):pyjslib['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				i = $iter4_nextval;
				d.__setitem__(i, v);
			}
			return d;
		}
	, 0, [null,null,['iterable'],['v', null]]);
		$cls_definition['fromkeys'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'values', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var values=pyjslib.list();
        var i = 0;
        for (var key in self.__object) {
            values.__array[i++] = self.__object[key][1];
        }
        return values;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['values'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'items', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var items = pyjslib.list();
        var i = 0;
        for (var key in self.__object) {
          var kv = self.__object[key];
          items.__array[i++] = pyjslib.list(kv);
          }
          return items;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['items'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var keys = new Array();
        var i = 0;
        for (var key in self.__object) {
            keys[i++] = self.__object[key][0];
        }
        return new $iter_array(keys);

		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__enumerate__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var keys = new Array();
        var i = 0;
        for (var key in self.__object) {
            keys[i++] = self.__object[key][0];
        }
        return new $enumerate_array(keys);

		}
	, 1, [null,null,['self']]);
		$cls_definition['__enumerate__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'itervalues', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['values']()['__iter__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['itervalues'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'iteritems', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['items']()['__iter__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['iteritems'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setdefault', function(key, default_value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				default_value = arguments[2];
			}


        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:pyjslib.__hash(key))));
        return typeof self.__object[sKey] == 'undefined' ? (self.__object[sKey]=[key, default_value])[1] : self.__object[sKey][1];

		}
	, 1, [null,null,['self'],['key'],['default_value']]);
		$cls_definition['setdefault'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'get', function(key, default_value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				default_value = arguments[2];
			}
			if (typeof default_value == 'undefined') default_value=arguments.callee.__args__[4][1];


        var empty = true;
        for (var sKey in self.__object) {
            empty = false;
            break;
        }
        if (empty) return default_value;
        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:pyjslib.__hash(key))));
        return typeof self.__object[sKey] == 'undefined' ? default_value : self.__object[sKey][1];

		}
	, 1, [null,null,['self'],['key'],['default_value', null]]);
		$cls_definition['get'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'update', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = pyjslib['tuple']($pyjs_array_slice.call(arguments,0,arguments.length-1));

				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = pyjslib['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = pyjslib['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var $iter5_nextval,v,$iter5_idx,$iter6_idx,$iter6_type,$iter5_array,$iter6_array,$iter5_iter,$iter5_type,$iter6_iter,k,$iter6_nextval;
			if (pyjslib['bool'](args)) {
				if (pyjslib['bool']((pyjslib['cmp'](pyjslib['len'](args), 1) == 1))) {
					throw ($module['TypeError'](pyjslib['sprintf'](String('update expected at most 1 arguments, got %d'), pyjslib['len'](args))));
				}
				$iter5_iter = args.__getitem__(0)['iteritems']();
				if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter.__iter__();
					$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,true):pyjslib['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					k = $iter5_nextval.__array[0];
					v = $iter5_nextval.__array[1];
					self.__setitem__(k, v);
				}
			}
			if (pyjslib['bool'](kwargs)) {
				$iter6_iter = kwargs['iteritems']();
				if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
					$iter6_type = 0;
				} else {
					$iter6_iter = $iter6_iter.__iter__();
					$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter6_idx = 0;
				while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,true):pyjslib['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
					k = $iter6_nextval.__array[0];
					v = $iter6_nextval.__array[1];
					self.__setitem__(k, v);
				}
			}
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['update'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'pop', function(k) {
			if (this.__is_instance__ === true) {
				var self = this;
				var d = pyjslib['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

			} else {
				var self = arguments[0];
				k = arguments[1];
				var d = pyjslib['tuple']($pyjs_array_slice.call(arguments,2,arguments.length));

			}
			var err,res,$add36,$add35,$pyjs_try_err;
			if (pyjslib['bool']((pyjslib['cmp'](pyjslib['len'](d), 1) == 1))) {
				throw ($module['TypeError'](pyjslib['sprintf'](String('pop expected at most 2 arguments, got %s'), (typeof ($add35=1)==typeof ($add36=pyjslib['len'](d)) && (typeof $add35=='number'||typeof $add35=='string')?
					$add35+$add36:
					pyjslib['op_add']($add35,$add36)))));
			}
			try {
				res = self.__getitem__(k);
				self.__delitem__(k);
				return res;
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjslib, try_lineno: 4371};
				if (($pyjs_try_err_name == $module['KeyError'].__name__)||pyjslib['_isinstance']($pyjs_try_err,$module['KeyError'])) {
					$pyjs.__last_exception__.except_lineno = 4375;
					err = $pyjs_try_err;
					if (pyjslib['bool'](d)) {
						return d.__getitem__(0);
					}
					else {
						throw ($pyjs.__last_exception__?
							$pyjs.__last_exception__.error:
							pyjslib['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, ['d',null,['self'],['k']]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'popitem', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var v,$iter7_nextval,$iter7_iter,$iter7_array,$iter7_idx,$iter7_type,k;
			$iter7_iter = self['iteritems']();
			if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
				$iter7_type = 0;
			} else {
				$iter7_iter = $iter7_iter.__iter__();
				$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter7_idx = 0;
			while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,true):pyjslib['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
				k = $iter7_nextval.__array[0];
				v = $iter7_nextval.__array[1];
				return pyjslib['tuple']([k, v]);
			}
			throw ($module['KeyError'](String('popitem(): dictionary is empty')));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['popitem'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getObject', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr67,$attr68;
			return self['__object'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getObject'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'copy', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $module['dict'](self['items']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.__object = {};
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr69,$attr70;
			if (pyjslib['bool'](pyjslib['callable'](self))) {
				return pyjslib['sprintf'](String('\x3Ctype \x27%s\x27\x3E'), self['__name__']);
			}

        var keys = new Array();
        for (var key in self.__object)
            keys.push(key);

        var s = "{";
        for (var i=0; i<keys.length; i++) {
            var v = self.__object[keys[i]];
            s += pyjslib.repr(v[0]) + ": " + pyjslib.repr(v[1]);
            if (i < keys.length-1)
                s += ", ";
        }
        s += "}";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'toString', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__repr__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
pyjslib.dict.has_key = pyjslib.dict.__contains__;
pyjslib.dict.iterkeys = pyjslib.dict.__iter__;
pyjslib.dict.__str__ = pyjslib.dict.__repr__;
	$module['__empty_dict'] = function() {


    var dict__init__ = pyjslib.dict.__init__;
    var d;
    pyjslib.dict.__init__ = function() {
        this.__object = {};
    }
    d = pyjslib.dict();
    d.__init__ = pyjslib.dict.__init__ = dict__init__;
    return d;

	};
	$module['__empty_dict'].__name__ = '__empty_dict';

	$module['__empty_dict'].__bind_type__ = 0;
	$module['__empty_dict'].__args__ = [null,null];
	$module['set'] = (function(){
		var $cls_instance = $pyjs__class_instance('set');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '56e522708fa4194f0da97c84625aed56';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			if (typeof data == 'undefined') data=arguments.callee.__args__[3][1];

			if (pyjslib['bool']($module.isSet(data))) {

            self.__object = {};
            var selfObj = self.__object,
                dataObj = data.__object;
            for (var sVal in dataObj) {
                selfObj[sVal] = dataObj[sVal];
            }
            return null;
			}

        var item, i, n;
        var selfObj = self.__object = {};

        if (data === null) {
            throw pyjslib['TypeError']("'NoneType' is not iterable");
        }
        if (data.constructor === Array) {
        } else if (typeof data.__object == 'object') {
            data = data.__object;
            for (var sKey in data) {
                selfObj[sKey] = data[sKey][0];
            }
            return null;
        } else if (typeof data.__iter__ == 'function') {
            if (typeof data.__array == 'object') {
                data = data.__array;
            } else {
                var iter = data.__iter__();
                if (typeof iter.__array == 'object') {
                    data = iter.__array;
                }
                data = [];
                var item, i = 0;
                if (typeof iter.$genfunc == 'function') {
                    while (typeof (item=iter.next(true)) != 'undefined') {
                        data[i++] = item;
                    }
                } else {
                    try {
                        while (true) {
                            data[i++] = iter.next();
                        }
                    }
                    catch (e) {
                        if (e.__name__ != 'StopIteration') throw e;
                    }
                }
            }
        } else if (typeof data == 'object' || typeof data == 'function') {
            for (var key in data) {
                selfObj[pyjslib.hash(key)] = key;
            }
            return null;
        } else {
            throw pyjslib['TypeError']("'" + pyjslib['repr'](data) + "' is not iterable");
        }
        // Assume uniform array content...
        if ((n = data.length) == 0) {
            return null;
        }
        i = 0;
        while (i < n) {
            item = data[i++];
            selfObj[pyjslib.hash(item)] = item;
        }
        return null;
        
		}
	, 1, [null,null,['self'],['data', []]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__cmp__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool']($module.isSet(other)))) {
				return 2;
			}

        var selfLen = 0,
            otherLen = 0,
            selfObj = self.__object,
            otherObj = other.__object,
            selfMismatch = false,
            otherMismatch = false;
        for (var sVal in selfObj) {
            if (!selfMismatch && typeof otherObj[sVal] == 'undefined') {
                selfMismatch = true;
            }
            selfLen++;
        }
        for (var sVal in otherObj) {
            if (!otherMismatch && typeof selfObj[sVal] == 'undefined') {
                otherMismatch = true;
            }
            otherLen++;
        }
        if (selfMismatch && otherMismatch) return 2;
        if (selfMismatch) return 1;
        if (otherMismatch) return -1;
        return 0;

		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__contains__', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			if (pyjslib['bool'](pyjslib['op_eq']($module.isSet(value), 1))) {

            var hashes = new Array(), obj = self.__object, i = 0;
            for (var v in obj) {
                hashes[i++] = v;
            }
            hashes.sort()
            var h = hashes.join("|");
            return typeof self.__object[h] != 'undefined';

			}
return typeof self.__object[pyjslib.hash(value)] != 'undefined';
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($module['TypeError'](String('set objects are unhashable')));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var items = new Array();
        var i = 0;
        for (var key in self.__object) {
            items[i++] = self.__object[key];
        }
        return new $iter_array(items);
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var size;
			size = 0.0;

        for (var i in self.__object) size++;
        
			return size;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr72,$attr71;
			if (pyjslib['bool'](pyjslib['callable'](self))) {
				return pyjslib['sprintf'](String('\x3Ctype \x27%s\x27\x3E'), self['__name__']);
			}

        var values = new Array();
        var i = 0,
            obj = self.__object,
            s = self.__name__ + "([";
        for (var sVal in obj) {
            values[i++] = pyjslib.repr(obj[sVal]);
        }
        s += values.join(", ");
        s += "])";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__and__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool']($module.isSet(other)))) {
				return $module['NotImplemented'];
			}
			return self['intersection'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__and__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__or__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool']($module.isSet(other)))) {
				return $module['NotImplemented'];
			}
			return self['union'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__or__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__xor__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool']($module.isSet(other)))) {
				return $module['NotImplemented'];
			}
			return self['symmetric_difference'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__xor__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__sub__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool']($module.isSet(other)))) {
				return $module['NotImplemented'];
			}
			return self['difference'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__sub__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'add', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

self.__object[pyjslib.hash(value)] = value;
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

self.__object = {};
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'copy', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var new_set;
			new_set = $module['set']();

        var obj = new_set.__object,
            selfObj = self.__object;
        for (var sVal in selfObj) {
            obj[sVal] = selfObj[sVal];
        }

			return new_set;
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'difference', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set;
			if (pyjslib['bool'](!pyjslib['bool']($module.isSet(other)))) {
				other = pyjslib['frozenset'](other);
			}
			new_set = $module['set']();

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] == 'undefined') {
                obj[sVal] = selfObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['difference'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'difference_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool']($module.isSet(other)))) {
				other = pyjslib['frozenset'](other);
			}

        var selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] != 'undefined') {
                delete selfObj[sVal];
            }
        }

			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['difference_update'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'discard', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			if (pyjslib['bool'](pyjslib['op_eq']($module.isSet(value), 1))) {
				value = pyjslib['frozenset'](value);
			}
delete self.__object[pyjslib.hash(value)];
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['discard'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'intersection', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set;
			if (pyjslib['bool'](!pyjslib['bool']($module.isSet(other)))) {
				other = pyjslib['frozenset'](other);
			}
			new_set = $module['set']();

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] != 'undefined') {
                obj[sVal] = selfObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['intersection'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'intersection_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool']($module.isSet(other)))) {
				other = pyjslib['frozenset'](other);
			}

        var selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] == 'undefined') {
                delete selfObj[sVal];
            }
        }

			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['intersection_update'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'isdisjoint', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool']($module.isSet(other)))) {
				other = pyjslib['frozenset'](other);
			}

        var selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] != 'undefined') {
                return false;
            }
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] != 'undefined') {
                return false;
            }
        }

			return true;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['isdisjoint'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'issubset', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool']($module.isSet(other)))) {
				other = pyjslib['frozenset'](other);
			}
			return self.__cmp__(other) < 0;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['issubset'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'issuperset', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool']($module.isSet(other)))) {
				other = pyjslib['frozenset'](other);
			}
			return (self.__cmp__(other)|1) == 1;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['issuperset'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'pop', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        for (var sVal in self.__object) {
            var value = self.__object[sVal];
            delete self.__object[sVal];
            return value;
        }
        
			throw ($module['KeyError'](String('pop from an empty set')));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'remove', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var val;
			if (pyjslib['bool'](pyjslib['op_eq']($module.isSet(value), 1))) {
				val = pyjslib['frozenset'](value);
			}
			else {
				val = value;
			}

        var h;
        if (typeof self.__object[(h = pyjslib.hash(val))] == 'undefined') {
            throw pyjslib['KeyError'](value);
        }
        delete self.__object[pyjslib.hash(val)];
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'symmetric_difference', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set;
			if (pyjslib['bool'](!pyjslib['bool']($module.isSet(other)))) {
				other = pyjslib['frozenset'](other);
			}
			new_set = $module['set']();

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] == 'undefined') {
                obj[sVal] = selfObj[sVal];
            }
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] == 'undefined') {
                obj[sVal] = otherObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['symmetric_difference'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'symmetric_difference_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool']($module.isSet(other)))) {
				other = pyjslib['frozenset'](other);
			}

        var obj = new Object(),
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] == 'undefined') {
                obj[sVal] = selfObj[sVal];
            }
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] == 'undefined') {
                obj[sVal] = otherObj[sVal];
            }
        }
        self.__object = obj;

			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['symmetric_difference_update'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'union', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set;
			new_set = $module['set']();
			if (pyjslib['bool'](!pyjslib['bool']($module.isSet(other)))) {
				other = pyjslib['frozenset'](other);
			}

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            obj[sVal] = selfObj[sVal];
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] == 'undefined') {
                obj[sVal] = otherObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['union'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'update', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool']($module.isSet(data)))) {
				data = pyjslib['frozenset'](data);
			}

        var selfObj = self.__object,
            dataObj = data.__object;
        for (var sVal in dataObj) {
            if (typeof selfObj[sVal] == 'undefined') {
                selfObj[sVal] = dataObj[sVal];
            }
        }
        
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['update'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array($module['object']));
	})();
pyjslib['set']['__str__'] = pyjslib['set']['__repr__'];
pyjslib['set']['toString'] = pyjslib['set']['__repr__'];
	$module['frozenset'] = (function(){
		var $cls_instance = $pyjs__class_instance('frozenset');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '0d4b40d55ffe83d9b821a89c8b3a3c95';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			if (typeof data == 'undefined') data=arguments.callee.__args__[3][1];

			if (pyjslib['bool'](typeof self.__object != 'undefined')) {
				return null;
			}
			if (pyjslib['bool']($module.isSet(data))) {

            self.__object = {};
            var selfObj = self.__object,
                dataObj = data.__object;
            for (var sVal in dataObj) {
                selfObj[sVal] = dataObj[sVal];
            }
            return null;
			}

        var item, i, n;
        var selfObj = self.__object = {};

        if (data === null) {
            throw pyjslib['TypeError']("'NoneType' is not iterable");
        }
        if (data.constructor === Array) {
        } else if (typeof data.__object == 'object') {
            data = data.__object;
            for (var sKey in data) {
                selfObj[sKey] = data[sKey][0];
            }
            return null;
        } else if (typeof data.__iter__ == 'function') {
            if (typeof data.__array == 'object') {
                data = data.__array;
            } else {
                var iter = data.__iter__();
                if (typeof iter.__array == 'object') {
                    data = iter.__array;
                }
                data = [];
                var item, i = 0;
                if (typeof iter.$genfunc == 'function') {
                    while (typeof (item=iter.next(true)) != 'undefined') {
                        data[i++] = item;
                    }
                } else {
                    try {
                        while (true) {
                            data[i++] = iter.next();
                        }
                    }
                    catch (e) {
                        if (e.__name__ != 'StopIteration') throw e;
                    }
                }
            }
        } else if (typeof data == 'object' || typeof data == 'function') {
            for (var key in data) {
                selfObj[pyjslib.hash(key)] = key;
            }
            return null;
        } else {
            throw pyjslib['TypeError']("'" + pyjslib['repr'](data) + "' is not iterable");
        }
        // Assume uniform array content...
        if ((n = data.length) == 0) {
            return null;
        }
        i = 0;
        while (i < n) {
            item = data[i++];
            selfObj[pyjslib.hash(item)] = item;
        }
        return null;
        
		}
	, 1, [null,null,['self'],['data', []]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__cmp__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool']($module.isSet(other)))) {
				return 2;
			}

        var selfLen = 0,
            otherLen = 0,
            selfObj = self.__object,
            otherObj = other.__object,
            selfMismatch = false,
            otherMismatch = false;
        for (var sVal in selfObj) {
            if (!selfMismatch && typeof otherObj[sVal] == 'undefined') {
                selfMismatch = true;
            }
            selfLen++;
        }
        for (var sVal in otherObj) {
            if (!otherMismatch && typeof selfObj[sVal] == 'undefined') {
                otherMismatch = true;
            }
            otherLen++;
        }
        if (selfMismatch && otherMismatch) return 2;
        if (selfMismatch) return 1;
        if (otherMismatch) return -1;
        return 0;

		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__contains__', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			if (pyjslib['bool'](pyjslib['op_eq']($module.isSet(value), 1))) {

            var hashes = new Array(), obj = self.__object, i = 0;
            for (var v in obj) {
                hashes[i++] = v;
            }
            hashes.sort()
            var h = hashes.join("|");
            return typeof self.__object[h] != 'undefined';

			}
return typeof self.__object[pyjslib.hash(value)] != 'undefined';
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var hashes = new Array(), obj = self.__object, i = 0;
        for (var v in obj) {
            hashes[i++] = v;
        }
        hashes.sort()
        return (self.$H = hashes.join("|"));

		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var items = new Array();
        var i = 0;
        for (var key in self.__object) {
            items[i++] = self.__object[key];
        }
        return new $iter_array(items);
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var size;
			size = 0.0;

        for (var i in self.__object) size++;
        
			return size;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr74,$attr73;
			if (pyjslib['bool'](pyjslib['callable'](self))) {
				return pyjslib['sprintf'](String('\x3Ctype \x27%s\x27\x3E'), self['__name__']);
			}

        var values = new Array();
        var i = 0,
            obj = self.__object,
            s = self.__name__ + "([";
        for (var sVal in obj) {
            values[i++] = pyjslib.repr(obj[sVal]);
        }
        s += values.join(", ");
        s += "])";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__and__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool']($module.isSet(other)))) {
				return $module['NotImplemented'];
			}
			return self['intersection'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__and__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__or__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool']($module.isSet(other)))) {
				return $module['NotImplemented'];
			}
			return self['union'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__or__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__xor__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool']($module.isSet(other)))) {
				return $module['NotImplemented'];
			}
			return self['symmetric_difference'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__xor__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__sub__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool']($module.isSet(other)))) {
				return $module['NotImplemented'];
			}
			return self['difference'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__sub__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

self.__object = {};
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'copy', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var new_set;
			new_set = $module['set']();

        var obj = new_set.__object,
            selfObj = self.__object;
        for (var sVal in selfObj) {
            obj[sVal] = selfObj[sVal];
        }

			return new_set;
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'difference', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set;
			if (pyjslib['bool'](!pyjslib['bool']($module.isSet(other)))) {
				other = $module['frozenset'](other);
			}
			new_set = $module['set']();

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] == 'undefined') {
                obj[sVal] = selfObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['difference'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'intersection', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set;
			if (pyjslib['bool'](!pyjslib['bool']($module.isSet(other)))) {
				other = $module['frozenset'](other);
			}
			new_set = $module['set']();

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] != 'undefined') {
                obj[sVal] = selfObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['intersection'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'isdisjoint', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool']($module.isSet(other)))) {
				other = $module['frozenset'](other);
			}

        var selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] != 'undefined') {
                return false;
            }
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] != 'undefined') {
                return false;
            }
        }

			return true;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['isdisjoint'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'issubset', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool']($module.isSet(other)))) {
				other = $module['frozenset'](other);
			}
			return self.__cmp__(other) < 0;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['issubset'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'issuperset', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['bool']($module.isSet(other)))) {
				other = $module['frozenset'](other);
			}
			return (self.__cmp__(other)|1) == 1;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['issuperset'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'pop', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        for (var sVal in self.__object) {
            var value = self.__object[sVal];
            delete self.__object[sVal];
            return value;
        }
        
			throw ($module['KeyError'](String('pop from an empty set')));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'symmetric_difference', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set;
			if (pyjslib['bool'](!pyjslib['bool']($module.isSet(other)))) {
				other = $module['frozenset'](other);
			}
			new_set = $module['set']();

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] == 'undefined') {
                obj[sVal] = selfObj[sVal];
            }
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] == 'undefined') {
                obj[sVal] = otherObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['symmetric_difference'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'union', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set;
			new_set = $module['set']();
			if (pyjslib['bool'](!pyjslib['bool']($module.isSet(other)))) {
				other = $module['frozenset'](other);
			}

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            obj[sVal] = selfObj[sVal];
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] == 'undefined') {
                obj[sVal] = otherObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['union'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array($module['object']));
	})();
pyjslib['frozenset']['__str__'] = pyjslib['frozenset']['__repr__'];
pyjslib['frozenset']['toString'] = pyjslib['frozenset']['__repr__'];
	$module['property'] = (function(){
		var $cls_instance = $pyjs__class_instance('property');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '371671a596e7227dde35df1401bfb2dd';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(fget, fset, fdel, doc) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fget = arguments[1];
				fset = arguments[2];
				fdel = arguments[3];
				doc = arguments[4];
			}
			if (typeof fget == 'undefined') fget=arguments.callee.__args__[3][1];
			if (typeof fset == 'undefined') fset=arguments.callee.__args__[4][1];
			if (typeof fdel == 'undefined') fdel=arguments.callee.__args__[5][1];
			if (typeof doc == 'undefined') doc=arguments.callee.__args__[6][1];
			var $or5,$or4,$attr75,$attr76;
			self.fget = fget;
			self.fset = fset;
			self.fdel = fdel;
			if (pyjslib['bool']((pyjslib['bool']($or4=!pyjslib['bool']((doc === null)))?$or4:!pyjslib['bool'](pyjslib['hasattr'](fget, String('__doc__')))))) {
				self.__doc__ = doc;
			}
			else {
				self.__doc__ = fget['__doc__'];
			}
			return null;
		}
	, 1, [null,null,['self'],['fget', null],['fset', null],['fdel', null],['doc', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__get__', function(obj, objtype) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
				objtype = arguments[2];
			}
			if (typeof objtype == 'undefined') objtype=arguments.callee.__args__[4][1];
			var $attr77,$attr78;
			if (pyjslib['bool']((obj === null))) {
				return self;
			}
			if (pyjslib['bool']((self['fget'] === null))) {

				var $pyjs__raise_expr1 = $module['AttributeError'];
				var $pyjs__raise_expr2 = String('unreadable attribute');
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw pyjslib['TypeError']('instance exception may not have a separate value');
				}
				if (pyjslib['isinstance']($pyjs__raise_expr2, pyjslib['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			return self['fget'](obj);
		}
	, 1, [null,null,['self'],['obj'],['objtype', null]]);
		$cls_definition['__get__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__set__', function(obj, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
				value = arguments[2];
			}
			var $attr80,$attr79;
			if (pyjslib['bool']((self['fset'] === null))) {

				var $pyjs__raise_expr1 = $module['AttributeError'];
				var $pyjs__raise_expr2 = String('can\x27t set attribute');
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw pyjslib['TypeError']('instance exception may not have a separate value');
				}
				if (pyjslib['isinstance']($pyjs__raise_expr2, pyjslib['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			self['fset'](obj, value);
			return null;
		}
	, 1, [null,null,['self'],['obj'],['value']]);
		$cls_definition['__set__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__delete__', function(obj) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
			}
			var $attr82,$attr81;
			if (pyjslib['bool']((self['fdel'] === null))) {

				var $pyjs__raise_expr1 = $module['AttributeError'];
				var $pyjs__raise_expr2 = String('can\x27t delete attribute');
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw pyjslib['TypeError']('instance exception may not have a separate value');
				}
				if (pyjslib['isinstance']($pyjs__raise_expr2, pyjslib['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			self['fdel'](obj);
			return null;
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['__delete__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setter', function(fset) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fset = arguments[1];
			}

			self.fset = fset;
			return self;
		}
	, 1, [null,null,['self'],['fset']]);
		$cls_definition['setter'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'deleter', function(fdel) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fdel = arguments[1];
			}

			self.fdel = fdel;
			return self;
		}
	, 1, [null,null,['self'],['fdel']]);
		$cls_definition['deleter'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array($module['object']));
	})();
	$module['staticmethod'] = function(func) {


    var fnwrap = function() {
        return func.apply(null,$pyjs_array_slice.call(arguments));
    };
    fnwrap.__name__ = func.__name__;
    fnwrap.__args__ = func.__args__;
    fnwrap.__bind_type__ = 0;
    return fnwrap;
    
	};
	$module['staticmethod'].__name__ = 'staticmethod';

	$module['staticmethod'].__bind_type__ = 0;
	$module['staticmethod'].__args__ = [null,null,['func']];
	$module['$$super'] = function(type_, object_or_type) {
		if (typeof object_or_type == 'undefined') object_or_type=arguments.callee.__args__[3][1];
		var i;
		if (pyjslib['bool'](!pyjslib['bool']($module._issubtype(object_or_type, type_)))) {
			i = $module._issubtype(object_or_type, type_);
			throw ($module['TypeError'](String('super(type, obj): obj must be an instance or subtype of type')));
		}

    if (typeof type_.__mro__ == 'undefined') {
        type_ = type_.__class__;
    }
    var fn = $pyjs_type('super', type_.__mro__.slice(1), {});
    fn.__new__ = fn.__mro__[1].__new__;
    fn.__init__ = fn.__mro__[1].__init__;
    if (object_or_type.__is_instance__ === false) {
        return fn;
    }
    var obj = new Object();
    function wrapper(obj, name) {
        var fnwrap = function() {
            return obj[name].apply(object_or_type,$pyjs_array_slice.call(arguments));
        };
        fnwrap.__name__ = name;
        fnwrap.__args__ = obj[name].__args__;
        fnwrap.__bind_type__ = obj[name].__bind_type__;
        return fnwrap;
    }
    for (var m in fn) {
        if (typeof fn[m] == 'function') {
            obj[m] = wrapper(fn, m);
        }
    }
    obj.__is_instance__ = object_or_type.__is_instance__;
    return obj;
    
	};
	$module['$$super'].__name__ = 'super';

	$module['$$super'].__bind_type__ = 0;
	$module['$$super'].__args__ = [null,null,['type_'],['object_or_type', null]];
	$module['xrange'] = function(start, stop, step) {
		if (typeof stop == 'undefined') stop=arguments.callee.__args__[3][1];
		if (typeof step == 'undefined') step=arguments.callee.__args__[4][1];
		var $attr83,$attr86,$attr87,$attr84,$attr85,$attr88,rval,$assign1,nval;
		if (pyjslib['bool']((stop === null))) {
			stop = start;
			start = 0;
		}
		if (pyjslib['bool'](!pyjslib['bool'](start !== null && start.__number__ && (start.__number__ != 0x01 || isFinite(start))))) {
			throw ($module['TypeError'](pyjslib['sprintf'](String('xrange() integer start argument expected, got %s'), start['__class__']['__name__'])));
		}
		if (pyjslib['bool'](!pyjslib['bool'](stop !== null && stop.__number__ && (stop.__number__ != 0x01 || isFinite(stop))))) {
			throw ($module['TypeError'](pyjslib['sprintf'](String('xrange() integer end argument expected, got %s'), stop['__class__']['__name__'])));
		}
		if (pyjslib['bool'](!pyjslib['bool'](step !== null && step.__number__ && (step.__number__ != 0x01 || isFinite(step))))) {
			throw ($module['TypeError'](pyjslib['sprintf'](String('xrange() integer step argument expected, got %s'), step['__class__']['__name__'])));
		}
		$assign1 = start;
		rval = $assign1;
		nval = $assign1;

    var nstep = (stop-start)/step;
    nstep = nstep < 0 ? Math.ceil(nstep) : Math.floor(nstep);
    if ((stop-start) % step) {
        nstep++;
    }
    stop = start + nstep * step;
    if (nstep <= 0) nval = stop;
    var x = {
        'next': function(noStop) {
            if (nval == stop) {
                if (noStop === true) {
                    return;
                }
                throw pyjslib.StopIteration;
            }
            rval = nval;
            nval += step;

		return rval;

        },
        '$genfunc': function() {
            return this.next(true);
        },
        '__iter__': function() {
            return this;
        },
        '__reversed__': function() {
            return pyjslib['xrange'](stop-step, start-step, -step);
        },
        'toString': function() {
            var s = "xrange(";
            if (start != 0) {
                s += start + ", ";
            }
            s += stop;
            if (step != 1) {
                s += ", " + step;
            }
            return s + ")";
        },
        '__repr__': function() {
            return "'" + this.toString() + "'";
        }
    };
    x['__str__'] = x.toString;
    return x;
    
	};
	$module['xrange'].__name__ = 'xrange';

	$module['xrange'].__bind_type__ = 0;
	$module['xrange'].__args__ = [null,null,['start'],['stop', null],['step', 1]];
	$module['range'] = function(start, stop, step) {
		if (typeof stop == 'undefined') stop=arguments.callee.__args__[3][1];
		if (typeof step == 'undefined') step=arguments.callee.__args__[4][1];
		var $attr94,$attr91,$attr90,$attr93,$attr92,i,items,$attr89;
		if (pyjslib['bool']((stop === null))) {
			stop = start;
			start = 0;
		}
		i = start;
		if (pyjslib['bool'](!pyjslib['bool'](start !== null && start.__number__ && (start.__number__ != 0x01 || isFinite(start))))) {
			throw ($module['TypeError'](pyjslib['sprintf'](String('xrange() integer start argument expected, got %s'), start['__class__']['__name__'])));
		}
		if (pyjslib['bool'](!pyjslib['bool'](stop !== null && stop.__number__ && (stop.__number__ != 0x01 || isFinite(stop))))) {
			throw ($module['TypeError'](pyjslib['sprintf'](String('xrange() integer end argument expected, got %s'), stop['__class__']['__name__'])));
		}
		if (pyjslib['bool'](!pyjslib['bool'](step !== null && step.__number__ && (step.__number__ != 0x01 || isFinite(step))))) {
			throw ($module['TypeError'](pyjslib['sprintf'](String('xrange() integer step argument expected, got %s'), step['__class__']['__name__'])));
		}
		items = new Array();

    var nstep = (stop-start)/step;
    nstep = nstep < 0 ? Math.ceil(nstep) : Math.floor(nstep);
    if ((stop-start) % step) {
        nstep++;
    }
    stop = start + nstep * step;
    if (nstep <= 0) i = stop;
    for (; i != stop; i += step)

		items['push'](i);
		return $module['list'](items);
	};
	$module['range'].__name__ = 'range';

	$module['range'].__bind_type__ = 0;
	$module['range'].__args__ = [null,null,['start'],['stop', null],['step', 1]];
	$module['slice'] = function(object, lower, upper) {


    if (object === null) {
        return null;
    }
    if (typeof object.__getslice__ == 'function') {
        return object.__getslice__(lower, upper);
    }
    if (object.slice == 'function')
        return object.slice(lower, upper);

    return null;
    
	};
	$module['slice'].__name__ = 'slice';

	$module['slice'].__bind_type__ = 0;
	$module['slice'].__args__ = [null,null,['object'],['lower'],['upper']];
	$module['__delslice'] = function(object, lower, upper) {


    if (typeof object.__delslice__ == 'function') {
        return object.__delslice__(lower, upper);
    }
    if (object.__getslice__ == 'function' && object.__delitem__ == 'function') {
        if (upper == null) {
            upper = pyjslib.len(object);
        }
        for (var i = lower; i < upper; i++) {
            object.__delitem__(i);
        }
        return null;
    }
    throw pyjslib.TypeError('object does not support item deletion');
    return null;
    
	};
	$module['__delslice'].__name__ = '__delslice';

	$module['__delslice'].__bind_type__ = 0;
	$module['__delslice'].__args__ = [null,null,['object'],['lower'],['upper']];
	$module['__setslice'] = function(object, lower, upper, value) {


    if (typeof object.__setslice__ == 'function') {
        return object.__setslice__(lower, upper, value);
    }
    throw pyjslib.TypeError('object does not support __setslice__');
    return null;
    
	};
	$module['__setslice'].__name__ = '__setslice';

	$module['__setslice'].__bind_type__ = 0;
	$module['__setslice'].__args__ = [null,null,['object'],['lower'],['upper'],['value']];
	$module['str'] = function(text) {


    if (text === null) {
        return "None";
    }
    if (typeof text == 'boolean') {
        if (text) return "True";
        return "False";
    }
    if (pyjslib.hasattr(text,"__str__")) {
        return text.__str__();
    }
    return String(text);
    
	};
	$module['str'].__name__ = 'str';

	$module['str'].__bind_type__ = 0;
	$module['str'].__args__ = [null,null,['text']];
	$module['ord'] = function(x) {
		var $and16,$and15;
		if (pyjslib['bool']((pyjslib['bool']($and15=typeof x == 'string')?(pyjslib['len'](x) === 1):$and15))) {
			return x['charCodeAt'](0);
		}
		else {
throw pyjslib.TypeError("ord() expected string of length 1");
		}
		return null;
	};
	$module['ord'].__name__ = 'ord';

	$module['ord'].__bind_type__ = 0;
	$module['ord'].__args__ = [null,null,['x']];
	$module['chr'] = function(x) {


        return String.fromCharCode(x);
    
	};
	$module['chr'].__name__ = 'chr';

	$module['chr'].__bind_type__ = 0;
	$module['chr'].__args__ = [null,null,['x']];
	$module['is_basetype'] = function(x) {


       var t = typeof(x);
       return t == 'boolean' ||
       t == 'function' ||
       t == 'number' ||
       t == 'string' ||
       t == 'undefined';
    
	};
	$module['is_basetype'].__name__ = 'is_basetype';

	$module['is_basetype'].__bind_type__ = 0;
	$module['is_basetype'].__args__ = [null,null,['x']];
	$module['get_pyjs_classtype'] = function(x) {


        if (x !== null && typeof x.__is_instance__ == 'boolean') {
            var src = x.__name__;
            return src;
        }
        return null;
    
	};
	$module['get_pyjs_classtype'].__name__ = 'get_pyjs_classtype';

	$module['get_pyjs_classtype'].__bind_type__ = 0;
	$module['get_pyjs_classtype'].__args__ = [null,null,['x']];
	$module['repr'] = function(x) {

		if (pyjslib['bool'](pyjslib['hasattr'](x, String('__repr__')))) {
			if (pyjslib['bool'](pyjslib['callable'](x))) {
				return x['__repr__'](x);
			}
			return x['__repr__']();
		}

       if (x === null)
           return "None";

       if (x === undefined)
           return "undefined";

       var t = typeof(x);

        //alert("repr typeof " + t + " : " + x);

       if (t == "boolean") {
           if (x) return "True";
           return "False";
       }
       if (t == "function")
           return "<function " + x.toString() + ">";

       if (t == "number")
           return x.toString();

       if (t == "string") {
           if (x.indexOf("'") == -1)
               return "'" + x + "'";
           if (x.indexOf('"') == -1)
               return '"' + x + '"';
           var s = x.$$replace(new RegExp('"', "g"), '\\"');
           return '"' + s + '"';
       }

       if (t == "undefined")
           return "undefined";

       // If we get here, x is an object.  See if it's a Pyjamas class.

       if (!pyjslib.hasattr(x, "__init__"))
           return "<" + x.toString() + ">";

       // Handle the common Pyjamas data types.

       var constructor = "UNKNOWN";

       constructor = pyjslib.get_pyjs_classtype(x);

        //alert("repr constructor: " + constructor);

       // If we get here, the class isn't one we know -> return the class name.
       // Note that we replace underscores with dots so that the name will
       // (hopefully!) look like the original Python name.

       //var s = constructor.$$replace(new RegExp('_', "g"), '.');
       return "<" + constructor + " object>";
    
	};
	$module['repr'].__name__ = 'repr';

	$module['repr'].__bind_type__ = 0;
	$module['repr'].__args__ = [null,null,['x']];
	$module['len'] = function(object) {
		var v;
		v = 0;

    if (typeof object == 'undefined') {
        throw pyjslib['UndefinedValueError']("obj");
    }
    if (object === null) return v;
    else if (typeof object.__array != 'undefined') v = object.__array.length;
    else if (typeof object.__len__ == 'function') v = object.__len__();
    else if (typeof object.length != 'undefined') v = object.length;
    else throw pyjslib.TypeError("object has no len()");
    if (v.__number__ & 0x06) return v;
    
		return v;
	};
	$module['len'].__name__ = 'len';

	$module['len'].__bind_type__ = 0;
	$module['len'].__args__ = [null,null,['object']];
	$module['isinstance'] = function(object_, classinfo) {
		var ci,$iter8_idx,$iter8_type,$iter8_array,$iter8_iter,$iter8_nextval;

    if (typeof object_ == 'undefined') {
        return false;
    }
    if (object_ == null) {
        if (classinfo == null) {
            return true;
        }
        return false;
    }
    switch (classinfo.__name__) {
        case 'float':
            return typeof object_ == 'number' && object_.__number__ == 0x01 && isFinite(object_);
        case 'int':
        case 'float_int':
            return object_ !== null && object_.__number__ && (object_.__number__ != 0x01 || isFinite(object_));/* XXX TODO: check rounded? */
        case 'str':
            return typeof object_ == 'string';
        case 'bool':
            return typeof object_ == 'boolean';
        case 'long':
            return object_.__number__ == 0x04;
    }
    if (typeof object_ != 'object' && typeof object_ != 'function') {
        return false;
    }

		if (pyjslib['bool']($module._isinstance(classinfo, $module['tuple']))) {
			if (pyjslib['bool']($module._isinstance(object_, $module['tuple']))) {
				return true;
			}
			$iter8_iter = classinfo;
			if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
				$iter8_type = 0;
			} else {
				$iter8_iter = $iter8_iter.__iter__();
				$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter8_idx = 0;
			while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):pyjslib['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
				ci = $iter8_nextval;
				if (pyjslib['bool']($module['isinstance'](object_, ci))) {
					return true;
				}
			}
			return false;
		}
		else {
			return $module._isinstance(object_, classinfo);
		}
		return null;
	};
	$module['isinstance'].__name__ = 'isinstance';

	$module['isinstance'].__bind_type__ = 0;
	$module['isinstance'].__args__ = [null,null,['object_'],['classinfo']];
	$module['_isinstance'] = function(object_, classinfo) {


    if (   object_.__is_instance__ !== true 
        || classinfo.__is_instance__ === null) {
        return false;
    }
    var __mro__ = object_.__mro__;
    var n = __mro__.length;
    if (classinfo.__is_instance__ === false) {
        while (--n >= 0) {
            if (object_.__mro__[n] === classinfo.prototype) return true;
        }
        return false;
    }
    while (--n >= 0) {
        if (object_.__mro__[n] === classinfo.__class__) return true;
    }
    return false;
    
	};
	$module['_isinstance'].__name__ = '_isinstance';

	$module['_isinstance'].__bind_type__ = 0;
	$module['_isinstance'].__args__ = [null,null,['object_'],['classinfo']];
	$module['issubclass'] = function(class_, classinfo) {
		var ci,$iter9_iter,$iter9_nextval,$iter9_idx,$iter9_array,$iter9_type;
		if (pyjslib['bool']( typeof class_ == 'undefined' || class_ === null || class_.__is_instance__ !== false )) {
			throw ($module['TypeError'](String('arg 1 must be a class')));
		}
		if (pyjslib['bool']($module['isinstance'](classinfo, $module['tuple']))) {
			$iter9_iter = classinfo;
			if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
				$iter9_type = 0;
			} else {
				$iter9_iter = $iter9_iter.__iter__();
				$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter9_idx = 0;
			while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):pyjslib['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
				ci = $iter9_nextval;
				if (pyjslib['bool']($module['issubclass'](class_, ci))) {
					return true;
				}
			}
			return false;
		}
		else {
			if (pyjslib['bool']( typeof classinfo == 'undefined' || classinfo.__is_instance__ !== false )) {
				throw ($module['TypeError'](String('arg 2 must be a class or tuple of classes')));
			}
			return $module._issubtype(class_, classinfo);
		}
		return null;
	};
	$module['issubclass'].__name__ = 'issubclass';

	$module['issubclass'].__bind_type__ = 0;
	$module['issubclass'].__args__ = [null,null,['class_'],['classinfo']];
	$module['_issubtype'] = function(object_, classinfo) {


    if (   object_.__is_instance__ === null 
        || classinfo.__is_instance__ === null) {
        return false;
    }
    var __mro__ = object_.__mro__;
    var n = __mro__.length;
    if (classinfo.__is_instance__ === false) {
        while (--n >= 0) {
            if (object_.__mro__[n] === classinfo.prototype) return true;
        }
        return false;
    }
    while (--n >= 0) {
        if (object_.__mro__[n] === classinfo.__class__) return true;
    }
    return false;
    
	};
	$module['_issubtype'].__name__ = '_issubtype';

	$module['_issubtype'].__bind_type__ = 0;
	$module['_issubtype'].__args__ = [null,null,['object_'],['classinfo']];
	$module['getattr'] = function(obj, name, default_value) {
		if (typeof default_value == 'undefined') default_value=arguments.callee.__args__[4][1];


    if (obj === null || typeof obj == 'undefined') {
        if (arguments.length != 3 || typeof obj == 'undefined') {
            throw pyjslib.AttributeError("'" + pyjslib.repr(obj) + "' has no attribute '" + name + "'");
        }
        return default_value;
    }
    var mapped_name = name;
    if (typeof obj[name] == 'undefined') {
        mapped_name = '$$' + name;
        if (typeof obj[mapped_name] == 'undefined' || attrib_remap.indexOf(name) < 0) {
            if (arguments.length != 3) {
                throw pyjslib.AttributeError("'" + pyjslib.repr(obj) + "' has no attribute '" + name + "'");
            }
            return default_value;
        }
    }
    var method = obj[mapped_name];
    if (method === null) return method;

    if (typeof method.__get__ == 'function') {
        if (obj.__is_instance__) {
            return method.__get__(obj, obj.__class__);
        }
        return method.__get__(null, obj.__class__);
    }
    if (   typeof method != 'function'
        || obj.__is_instance__ !== true) {
        return obj[mapped_name];
    }

    var fnwrap = function() {
        return method.apply(obj,$pyjs_array_slice.call(arguments));
    };
    fnwrap.__name__ = name;
    fnwrap.__args__ = obj[mapped_name].__args__;
    fnwrap.__class__ = obj.__class__;
    fnwrap.__bind_type__ = obj[mapped_name].__bind_type__;
    return fnwrap;
    
	};
	$module['getattr'].__name__ = 'getattr';

	$module['getattr'].__bind_type__ = 0;
	$module['getattr'].__args__ = [null,null,['obj'],['name'],['default_value', null]];
	$module['_del'] = function(obj) {


    if (typeof obj.__delete__ == 'function') {
        obj.__delete__(obj);
    } else {
        delete obj;
    }
    
	};
	$module['_del'].__name__ = '_del';

	$module['_del'].__bind_type__ = 0;
	$module['_del'].__args__ = [null,null,['obj']];
	$module['delattr'] = function(obj, name) {


    if (typeof obj == 'undefined') {
        throw pyjslib['UndefinedValueError']("obj");
    }
    var mapped_name = attrib_remap.indexOf(name) < 0 ? name : '$$'+name;
    if (   obj !== null
        && (typeof obj == 'object' || typeof obj == 'function')
        && (typeof(obj[mapped_name]) != "undefined")&&(typeof(obj[mapped_name]) != "function") ){
        if (typeof obj[mapped_name].__delete__ == 'function') {
            obj[mapped_name].__delete__(obj);
        } else {
            delete obj[mapped_name];
        }
        return;
    }
    if (obj === null) {
        throw pyjslib.AttributeError("'NoneType' object has no attribute '"+name+"'");
    }
    if (typeof obj != 'object' && typeof obj == 'function') {
       throw pyjslib.AttributeError("'"+typeof(obj)+"' object has no attribute '"+name+"'");
    }
    throw pyjslib.AttributeError(obj.__name__+" instance has no attribute '"+ name+"'");
    
	};
	$module['delattr'].__name__ = 'delattr';

	$module['delattr'].__bind_type__ = 0;
	$module['delattr'].__args__ = [null,null,['obj'],['name']];
	$module['setattr'] = function(obj, name, value) {


    if (typeof obj == 'undefined') {
        throw pyjslib['UndefinedValueError']("obj");
    }
    if (typeof name != 'string') {
        throw pyjslib['TypeError']("attribute name must be string");
    }
    if (attrib_remap.indexOf(name) >= 0) {
        name = '$$' + name;
    }
    if (   typeof obj[name] != 'undefined'
        && obj[name] !== null
        && typeof obj[name].__set__ == 'function') {
        obj[name].__set__(obj, value);
    } else {
        obj[name] = value;
    }
    
	};
	$module['setattr'].__name__ = 'setattr';

	$module['setattr'].__bind_type__ = 0;
	$module['setattr'].__args__ = [null,null,['obj'],['name'],['value']];
	$module['hasattr'] = function(obj, name) {


    if (typeof obj == 'undefined') {
        throw pyjslib['UndefinedValueError']("obj");
    }
    if (typeof name != 'string') {
        throw pyjslib['TypeError']("attribute name must be string");
    }
    if (obj === null) return false;
    if (typeof obj[name] == 'undefined' && (
            typeof obj['$$'+name] == 'undefined' ||
            attrib_remap.indexOf(name) < 0)
      ) {
        return false;
    }
    if (typeof obj != 'object' && typeof obj != 'function') return false;

    return true;
    
	};
	$module['hasattr'].__name__ = 'hasattr';

	$module['hasattr'].__bind_type__ = 0;
	$module['hasattr'].__args__ = [null,null,['obj'],['name']];
	$module['dir'] = function(obj) {


    if (typeof obj == 'undefined') {
        throw pyjslib['UndefinedValueError']("obj");
    }
    var properties=pyjslib.list();
    for (property in obj) properties.append(property);
    return properties;
    
	};
	$module['dir'].__name__ = 'dir';

	$module['dir'].__bind_type__ = 0;
	$module['dir'].__args__ = [null,null,['obj']];
	$module['filter'] = function(obj, method, sequence) {
		if (typeof sequence == 'undefined') sequence=arguments.callee.__args__[4][1];
		var $iter11_nextval,$iter10_nextval,items,$iter10_idx,$iter11_type,$iter10_array,$iter11_array,item,$iter11_iter,$iter10_type,$iter10_iter,$iter11_idx;
		items = pyjslib['list']([]);
		if (pyjslib['bool']((sequence === null))) {
			sequence = method;
			method = obj;
			$iter10_iter = sequence;
			if (typeof ($iter10_array = $iter10_iter.__array) != 'undefined') {
				$iter10_type = 0;
			} else {
				$iter10_iter = $iter10_iter.__iter__();
				$iter10_type = typeof ($iter10_array = $iter10_iter.__array) != 'undefined'? 0 : (typeof $iter10_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter10_idx = 0;
			while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):pyjslib['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
				item = $iter10_nextval;
				if (pyjslib['bool'](method(item))) {
					items['append'](item);
				}
			}
		}
		else {
			$iter11_iter = sequence;
			if (typeof ($iter11_array = $iter11_iter.__array) != 'undefined') {
				$iter11_type = 0;
			} else {
				$iter11_iter = $iter11_iter.__iter__();
				$iter11_type = typeof ($iter11_array = $iter11_iter.__array) != 'undefined'? 0 : (typeof $iter11_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter11_idx = 0;
			while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):pyjslib['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
				item = $iter11_nextval;
				if (pyjslib['bool'](method['$$call'](obj, item))) {
					items['append'](item);
				}
			}
		}
		return items;
	};
	$module['filter'].__name__ = 'filter';

	$module['filter'].__bind_type__ = 0;
	$module['filter'].__args__ = [null,null,['obj'],['method'],['sequence', null]];
	$module['map'] = function(obj, method, sequence) {
		if (typeof sequence == 'undefined') sequence=arguments.callee.__args__[4][1];
		var $iter13_type,items,$iter12_type,$iter13_iter,$iter12_array,$iter12_iter,item,$iter13_array,$iter13_nextval,$iter12_idx,$iter12_nextval,$iter13_idx;
		items = pyjslib['list']([]);
		if (pyjslib['bool']((sequence === null))) {
			sequence = method;
			method = obj;
			$iter12_iter = sequence;
			if (typeof ($iter12_array = $iter12_iter.__array) != 'undefined') {
				$iter12_type = 0;
			} else {
				$iter12_iter = $iter12_iter.__iter__();
				$iter12_type = typeof ($iter12_array = $iter12_iter.__array) != 'undefined'? 0 : (typeof $iter12_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter12_idx = 0;
			while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):pyjslib['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
				item = $iter12_nextval;
				items['append'](method(item));
			}
		}
		else {
			$iter13_iter = sequence;
			if (typeof ($iter13_array = $iter13_iter.__array) != 'undefined') {
				$iter13_type = 0;
			} else {
				$iter13_iter = $iter13_iter.__iter__();
				$iter13_type = typeof ($iter13_array = $iter13_iter.__array) != 'undefined'? 0 : (typeof $iter13_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter13_idx = 0;
			while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):pyjslib['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
				item = $iter13_nextval;
				items['append'](method['$$call'](obj, item));
			}
		}
		return items;
	};
	$module['map'].__name__ = 'map';

	$module['map'].__bind_type__ = 0;
	$module['map'].__args__ = [null,null,['obj'],['method'],['sequence', null]];
	$module['reduce'] = function(func, iterable, initializer) {
		if (typeof initializer == 'undefined') initializer=arguments.callee.__args__[4][1];
		var value,$iter14_array,$iter14_type,$iter14_iter,err,emtpy,$pyjs_try_err,$iter14_idx,$iter14_nextval;
		try {
			iterable = pyjslib['iter'](iterable);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjslib, try_lineno: 5776};
			if (true) {
				$pyjs.__last_exception__.except_lineno = 5779;
				err = $pyjs_try_err;

				var $pyjs__raise_expr1 = $module['TypeError'];
				var $pyjs__raise_expr2 = String('reduce() arg 2 must support iteration');
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw pyjslib['TypeError']('instance exception may not have a separate value');
				}
				if (pyjslib['isinstance']($pyjs__raise_expr2, pyjslib['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
		}
		emtpy = true;
		$iter14_iter = iterable;
		if (typeof ($iter14_array = $iter14_iter.__array) != 'undefined') {
			$iter14_type = 0;
		} else {
			$iter14_iter = $iter14_iter.__iter__();
			$iter14_type = typeof ($iter14_array = $iter14_iter.__array) != 'undefined'? 0 : (typeof $iter14_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter14_idx = 0;
		while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):pyjslib['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
			value = $iter14_nextval;
			emtpy = false;
			if (pyjslib['bool'](typeof initializer == 'undefined')) {
				initializer = value;
			}
			else {
				initializer = func(initializer, value);
			}
		}
		if (pyjslib['bool']($module.empty)) {
			if (pyjslib['bool'](typeof initializer == 'undefined')) {

				var $pyjs__raise_expr1 = $module['TypeError'];
				var $pyjs__raise_expr2 = String('reduce() of empty sequence with no initial value');
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw pyjslib['TypeError']('instance exception may not have a separate value');
				}
				if (pyjslib['isinstance']($pyjs__raise_expr2, pyjslib['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			return initializer;
		}
		return initializer;
	};
	$module['reduce'].__name__ = 'reduce';

	$module['reduce'].__bind_type__ = 0;
	$module['reduce'].__args__ = [null,null,['func'],['iterable'],['initializer', (function(){return;})()]];
	$module['zip'] = function() {
		var iterables = pyjslib['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

		var $add38,err,i,$add37,n,lst,$pyjs_try_err,t;
		n = $module['len'](iterables);
		if (pyjslib['bool'](pyjslib['op_eq'](n, 0))) {
			return pyjslib['list']([]);
		}
		lst = pyjslib['list']([]);
		iterables = function(){
var $listcomp4 = pyjslib['list']();
		$iter15_iter = iterables;
		if (typeof ($iter15_array = $iter15_iter.__array) != 'undefined') {
			$iter15_type = 0;
		} else {
			$iter15_iter = $iter15_iter.__iter__();
			$iter15_type = typeof ($iter15_array = $iter15_iter.__array) != 'undefined'? 0 : (typeof $iter15_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter15_idx = 0;
		while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):pyjslib['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
			i = $iter15_nextval;
			$listcomp4['append'](pyjslib['iter'](i));
		}
return $listcomp4;}();
		try {
			while (pyjslib['bool'](true)) {
				t = pyjslib['list']([]);
				i = 0;
				while (pyjslib['bool']((pyjslib['cmp'](i, n) == -1))) {
					t['append'](iterables.__getitem__(i)['next']());
					i = (typeof ($add37=i)==typeof ($add38=1) && (typeof $add37=='number'||typeof $add37=='string')?
						$add37+$add38:
						pyjslib['op_add']($add37,$add38));
				}
				lst['append']($module['tuple'](t));
			}
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjslib, try_lineno: 5800};
			if (($pyjs_try_err_name == pyjslib['StopIteration'].__name__)||pyjslib['_isinstance']($pyjs_try_err,pyjslib['StopIteration'])) {
				$pyjs.__last_exception__.except_lineno = 5808;
				err = $pyjs_try_err;
			} else { throw $pyjs_try_err; }
		}
		return lst;
	};
	$module['zip'].__name__ = 'zip';

	$module['zip'].__bind_type__ = 0;
	$module['zip'].__args__ = ['iterables',null];
	$module['sorted'] = function(iterable, cmp, key, reverse) {
		if (typeof cmp == 'undefined') cmp=arguments.callee.__args__[3][1];
		if (typeof key == 'undefined') key=arguments.callee.__args__[4][1];
		if (typeof reverse == 'undefined') reverse=arguments.callee.__args__[5][1];
		var lst;
		lst = $module['list'](iterable);
		lst['sort'](cmp, key, reverse);
		return lst;
	};
	$module['sorted'].__name__ = 'sorted';

	$module['sorted'].__bind_type__ = 0;
	$module['sorted'].__args__ = [null,null,['iterable'],['cmp', null],['key', null],['reverse', false]];
	$module['reversed'] = function(iterable) {
		var err,l,$pyjs_try_err,$and17,v,$and18;
		if (pyjslib['bool']($module['hasattr'](iterable, String('__reversed__')))) {
			return iterable['__reversed__']();
		}
		if (pyjslib['bool']((pyjslib['bool']($and17=$module['hasattr'](iterable, String('__len__')))?$module['hasattr'](iterable, String('__getitem__')):$and17))) {
			if (pyjslib['bool'](pyjslib['op_eq']($module['len'](iterable), 0))) {
				l = pyjslib['list']([]);
				return l['__iter__']();
			}
			try {
				v = iterable.__getitem__(0);
				return $module._reversed(iterable);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjslib, try_lineno: 5826};
				if (true) {
					$pyjs.__last_exception__.except_lineno = 5830;
					err = $pyjs_try_err;
				}
			}
		}
		throw ($module['TypeError'](String('argument to reversed() must be a sequence')));
		return null;
	};
	$module['reversed'].__name__ = 'reversed';

	$module['reversed'].__bind_type__ = 0;
	$module['reversed'].__args__ = [null,null,['iterable']];
	$module['_reversed'] = function(iterable) {
		var i,$sub10,$sub9,$sub8,$sub7;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw pyjslib.StopIteration;
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && e === pyjslib['StopIteration']) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw pyjslib.StopIteration;
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=pyjslib['GeneratorExit'];
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw pyjslib.RuntimeError('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw pyjslib.ValueError('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				i = $module['len'](iterable);
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state.splice(1, $generator_state.length-1);
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0)||(pyjslib['bool']((pyjslib['cmp'](i, 0) == 1)));$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
						i = (typeof ($sub9=i)==typeof ($sub10=1) && (typeof $sub9=='number'||typeof $sub9=='string')?
							$sub9-$sub10:
							pyjslib['op_sub']($sub9,$sub10));
						$yield_value = iterable.__getitem__(i);
						$yielding = true;
						$generator_state[1] = 1;
						return $yield_value;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[1] = -1;
							throw $exc;
						}
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
					}
				}
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
			}

			return;
		};
		return $generator;
	};
	$module['_reversed'].__name__ = '_reversed';

	$module['_reversed'].__bind_type__ = 0;
	$module['_reversed'].__args__ = [null,null,['iterable']];
	$module['enumerate'] = function(sequence) {


    if (typeof sequence.__enumerate__ == 'function') {
        return sequence.__enumerate__();
    }

		return $module._enumerate(sequence);
	};
	$module['enumerate'].__name__ = 'enumerate';

	$module['enumerate'].__bind_type__ = 0;
	$module['enumerate'].__args__ = [null,null,['sequence']];
	$module['_enumerate'] = function(sequence) {
		var $iter16_array,$iter17_nextval,$iter17_array,$add39,$iter16_type,$add42,$add41,$add40,$iter16_idx,item,$iter17_iter,nextIndex,$iter17_type,$iter16_nextval,$iter16_iter,$iter17_idx;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw pyjslib.StopIteration;
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && e === pyjslib['StopIteration']) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw pyjslib.StopIteration;
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=pyjslib['GeneratorExit'];
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw pyjslib.RuntimeError('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw pyjslib.ValueError('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				nextIndex = 0;
				$iter17_iter = sequence;
				if (typeof ($iter17_array = $iter17_iter.__array) != 'undefined') {
					$iter17_type = 0;
				} else {
					$iter17_iter = $iter17_iter.__iter__();
					$iter17_type = typeof ($iter17_array = $iter17_iter.__array) != 'undefined'? 0 : (typeof $iter17_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter17_idx = 0;
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state[1] = 0;
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0 || typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,false):pyjslib['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined');$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
						item = $iter17_nextval;
						$yield_value = pyjslib['tuple']([nextIndex, item]);
						$yielding = true;
						$generator_state[1] = 1;
						return $yield_value;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[1] = -1;
							throw $exc;
						}
						nextIndex = (typeof ($add41=nextIndex)==typeof ($add42=1) && (typeof $add41=='number'||typeof $add41=='string')?
							$add41+$add42:
							pyjslib['op_add']($add41,$add42));
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
					}
				}
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
			}

			return;
		};
		return $generator;
	};
	$module['_enumerate'].__name__ = '_enumerate';

	$module['_enumerate'].__bind_type__ = 0;
	$module['_enumerate'].__args__ = [null,null,['sequence']];
	$module['iter'] = function(iterable, sentinel) {
		if (typeof sentinel == 'undefined') sentinel=arguments.callee.__args__[3][1];

		if (pyjslib['bool']((sentinel === null))) {
			if (pyjslib['bool']($module.isIteratable(iterable))) {
				return iterable['__iter__']();
			}
			if (pyjslib['bool']($module['hasattr'](iterable, String('__getitem__')))) {
				return $module._iter_getitem(iterable);
			}
			throw ($module['TypeError'](String('object is not iterable')));
		}
		if (pyjslib['bool']($module.isFunction(iterable))) {
			return $module._iter_callable(iterable, sentinel);
		}
		throw ($module['TypeError'](String('iter(v, w): v must be callable')));
		return null;
	};
	$module['iter'].__name__ = 'iter';

	$module['iter'].__bind_type__ = 0;
	$module['iter'].__args__ = [null,null,['iterable'],['sentinel', null]];
	$module['_iter_getitem'] = function(object) {
		var err,i,$add46,$add45,$add44,$add43,$pyjs_try_err;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw pyjslib.StopIteration;
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && e === pyjslib['StopIteration']) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw pyjslib.StopIteration;
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=pyjslib['GeneratorExit'];
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw pyjslib.RuntimeError('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw pyjslib.ValueError('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				i = 0;
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				try {
					if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
						$generator_exc[0] = null;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
						$generator_state.splice(2, $generator_state.length-2);
						$generator_state[1]=3;
					}
					if ($generator_state[1] == 3) {
						for (;($generator_state[2] > 0)||(pyjslib['bool'](true));$generator_state[2] = 0) {
							if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
								for (var $i = 2 ; $i < ($generator_state.length<4?4:$generator_state.length); $i++) $generator_state[$i]=0;
								$yield_value = object.__getitem__(i);
								$yielding = true;
								$generator_state[2] = 1;
								return $yield_value;
								$generator_state[2]=1;
							}
							if ($generator_state[2] == 1) {
								if (typeof $exc != 'undefined' && $exc !== null) {
									$yielding = null;
									$generator_state[2] = -1;
									throw $exc;
								}
								i = (typeof ($add45=i)==typeof ($add46=1) && (typeof $add45=='number'||typeof $add45=='string')?
									$add45+$add46:
									pyjslib['op_add']($add45,$add46));
								$generator_state[2]=2;
							}
							if ($generator_state[2] == 2) {
							}
						}
						$generator_state[1]=4;
					}
					if ($generator_state[1] == 4) {
						$generator_state[1]=5;
					}
					if ($generator_state[1] == 5) {
						$generator_state[1]=6;
					}
					if ($generator_state[1] == 6) {
					}
				} catch($pyjs_try_err) {
					$generator_exc[0] = $pyjs_try_err;
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjslib, try_lineno: 5866};
					if (($pyjs_try_err_name == $module['IndexError'].__name__)||pyjslib['_isinstance']($pyjs_try_err,$module['IndexError'])) {
						$pyjs.__last_exception__.except_lineno = 5870;
						err = $pyjs_try_err;
						if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
							for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
							$generator_state[3]=1;
						}
						if ($generator_state[3] == 1) {
						}
					} else { throw $pyjs_try_err; }
				}
				$generator_exc[0] = null;
				for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
			}

			return;
		};
		return $generator;
	};
	$module['_iter_getitem'].__name__ = '_iter_getitem';

	$module['_iter_getitem'].__bind_type__ = 0;
	$module['_iter_getitem'].__args__ = [null,null,['object']];
	$module['_iter_callable'] = function(callable, sentinel) {
		var nextval;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw pyjslib.StopIteration;
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && e === pyjslib['StopIteration']) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw pyjslib.StopIteration;
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=pyjslib['GeneratorExit'];
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw pyjslib.RuntimeError('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw pyjslib.ValueError('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state.splice(1, $generator_state.length-1);
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0)||(pyjslib['bool'](true));$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
						nextval = callable();
						if (pyjslib['bool'](pyjslib['op_eq'](nextval, sentinel))) {
							break;
						}
						$yield_value = nextval;
						$yielding = true;
						$generator_state[1] = 1;
						return $yield_value;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[1] = -1;
							throw $exc;
						}
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
					}
				}
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
			}

			return;
		};
		return $generator;
	};
	$module['_iter_callable'].__name__ = '_iter_callable';

	$module['_iter_callable'].__bind_type__ = 0;
	$module['_iter_callable'].__args__ = [null,null,['callable'],['sentinel']];
	$module['min'] = function() {
		var sequence = pyjslib['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

		var $iter18_type,$iter18_iter,$iter18_array,minValue,item,$iter18_idx,$iter18_nextval;
		if (pyjslib['bool'](pyjslib['op_eq']($module['len'](sequence), 1))) {
			sequence = sequence.__getitem__(0);
		}
		minValue = null;
		$iter18_iter = sequence;
		if (typeof ($iter18_array = $iter18_iter.__array) != 'undefined') {
			$iter18_type = 0;
		} else {
			$iter18_iter = $iter18_iter.__iter__();
			$iter18_type = typeof ($iter18_array = $iter18_iter.__array) != 'undefined'? 0 : (typeof $iter18_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter18_idx = 0;
		while (typeof ($iter18_nextval=($iter18_type?($iter18_type > 0?$iter18_iter.next(true,false):pyjslib['wrapped_next']($iter18_iter)):$iter18_array[$iter18_idx++])) != 'undefined') {
			item = $iter18_nextval;
			if (pyjslib['bool']((minValue === null))) {
				minValue = item;
			}
			else if (pyjslib['bool'](pyjslib['op_eq']($module['cmp'](item, minValue), (typeof ($usub6=1)=='number'?
				-$usub6:
				pyjslib['op_usub']($usub6))))) {
				minValue = item;
			}
		}
		return minValue;
	};
	$module['min'].__name__ = 'min';

	$module['min'].__bind_type__ = 0;
	$module['min'].__args__ = ['sequence',null];
	$module['max'] = function() {
		var sequence = pyjslib['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

		var $iter19_idx,maxValue,$iter19_array,$iter19_iter,$iter19_nextval,$iter19_type,item;
		if (pyjslib['bool'](pyjslib['op_eq']($module['len'](sequence), 1))) {
			sequence = sequence.__getitem__(0);
		}
		maxValue = null;
		$iter19_iter = sequence;
		if (typeof ($iter19_array = $iter19_iter.__array) != 'undefined') {
			$iter19_type = 0;
		} else {
			$iter19_iter = $iter19_iter.__iter__();
			$iter19_type = typeof ($iter19_array = $iter19_iter.__array) != 'undefined'? 0 : (typeof $iter19_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter19_idx = 0;
		while (typeof ($iter19_nextval=($iter19_type?($iter19_type > 0?$iter19_iter.next(true,false):pyjslib['wrapped_next']($iter19_iter)):$iter19_array[$iter19_idx++])) != 'undefined') {
			item = $iter19_nextval;
			if (pyjslib['bool']((maxValue === null))) {
				maxValue = item;
			}
			else if (pyjslib['bool'](pyjslib['op_eq']($module['cmp'](item, maxValue), 1))) {
				maxValue = item;
			}
		}
		return maxValue;
	};
	$module['max'].__name__ = 'max';

	$module['max'].__bind_type__ = 0;
	$module['max'].__args__ = ['sequence',null];
	$module['sum'] = function(iterable, start) {
		if (typeof start == 'undefined') start=arguments.callee.__args__[3][1];
		var $iter20_iter,$iter20_nextval,$iter20_type,$add48,i,$add47,$iter20_idx,$iter20_array;
		if (pyjslib['bool']((start === null))) {
			start = 0;
		}
		$iter20_iter = iterable;
		if (typeof ($iter20_array = $iter20_iter.__array) != 'undefined') {
			$iter20_type = 0;
		} else {
			$iter20_iter = $iter20_iter.__iter__();
			$iter20_type = typeof ($iter20_array = $iter20_iter.__array) != 'undefined'? 0 : (typeof $iter20_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter20_idx = 0;
		while (typeof ($iter20_nextval=($iter20_type?($iter20_type > 0?$iter20_iter.next(true,false):pyjslib['wrapped_next']($iter20_iter)):$iter20_array[$iter20_idx++])) != 'undefined') {
			i = $iter20_nextval;
			start = (typeof ($add47=start)==typeof ($add48=i) && (typeof $add47=='number'||typeof $add47=='string')?
				$add47+$add48:
				pyjslib['op_add']($add47,$add48));
		}
		return start;
	};
	$module['sum'].__name__ = 'sum';

	$module['sum'].__bind_type__ = 0;
	$module['sum'].__args__ = [null,null,['iterable'],['start', null]];
	$module['next_hash_id'] = 0;
	if (pyjslib['bool'](typeof 'a'[0] == 'undefined')) {
pyjslib.__hash = function(obj) {
        switch (obj.constructor) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj.__hash__ == 'function') return obj.__hash__();
        if (typeof obj.nodeType != 'number') {
            try {
            obj.$H = ++pyjslib.next_hash_id;
            } catch (e) {
                return obj;
            }
            return pyjslib.next_hash_id;
            return obj.$H = ++pyjslib.next_hash_id;
        }
        if (typeof obj.setAttribute == 'undefined') {
            return obj;
        }
        var $H;
        if ($H = obj.getAttribute('$H')) {
            return $H;
        }
        obj.setAttribute('$H', ++pyjslib.next_hash_id);
        return pyjslib.next_hash_id;
    }
        
pyjslib.hash = function(obj) {
        if (obj === null) return null;

        if (typeof obj.$H != 'undefined') return obj.$H;
        if (typeof obj == 'string' || obj.__number__) return '$'+obj;
        switch (obj.constructor) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj.__hash__ == 'function') return obj.__hash__();
        if (typeof obj.nodeType != 'number') {
            try {
            obj.$H = ++pyjslib.next_hash_id;
            } catch (e) {
                return obj;
            }
            return pyjslib.next_hash_id;
            return obj.$H = ++pyjslib.next_hash_id;
        }
        if (typeof obj.setAttribute == 'undefined') {
            return obj;
        }
        var $H;
        if ($H = obj.getAttribute('$H')) {
            return $H;
        }
        obj.setAttribute('$H', ++pyjslib.next_hash_id);
        return pyjslib.next_hash_id;
    }
        
	}
	else {
pyjslib.__hash = function(obj) {
        switch (obj.constructor) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj.__hash__ == 'function') return obj.__hash__();
        obj.$H = ++pyjslib.next_hash_id;
        return obj.$H;
    }
        
pyjslib.hash = function(obj) {
        if (obj === null) return null;

        if (typeof obj.$H != 'undefined') return obj.$H;
        if (typeof obj == 'string' || obj.__number__) return '$'+obj;
        switch (obj.constructor) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj.__hash__ == 'function') return obj.__hash__();
        obj.$H = ++pyjslib.next_hash_id;
        return obj.$H;
    }
        
	}
	$module['isObject'] = function(a) {


    return (a !== null && (typeof a == 'object')) || typeof a == 'function';
    
	};
	$module['isObject'].__name__ = 'isObject';

	$module['isObject'].__bind_type__ = 0;
	$module['isObject'].__args__ = [null,null,['a']];
	$module['isFunction'] = function(a) {


    return typeof a == 'function';
    
	};
	$module['isFunction'].__name__ = 'isFunction';

	$module['isFunction'].__bind_type__ = 0;
	$module['isFunction'].__args__ = [null,null,['a']];
	$module['callable'] = $module['isFunction'];
	$module['isString'] = function(a) {


    return typeof a == 'string';
    
	};
	$module['isString'].__name__ = 'isString';

	$module['isString'].__bind_type__ = 0;
	$module['isString'].__args__ = [null,null,['a']];
	$module['isNull'] = function(a) {


    return typeof a == 'object' && !a;
    
	};
	$module['isNull'].__name__ = 'isNull';

	$module['isNull'].__bind_type__ = 0;
	$module['isNull'].__args__ = [null,null,['a']];
	$module['isArray'] = function(a) {


    return pyjslib.isObject(a) && a.constructor === Array;
    
	};
	$module['isArray'].__name__ = 'isArray';

	$module['isArray'].__bind_type__ = 0;
	$module['isArray'].__args__ = [null,null,['a']];
	$module['isUndefined'] = function(a) {


    return typeof a == 'undefined';
    
	};
	$module['isUndefined'].__name__ = 'isUndefined';

	$module['isUndefined'].__bind_type__ = 0;
	$module['isUndefined'].__args__ = [null,null,['a']];
	$module['isIteratable'] = function(a) {


    if (a === null) return false;
    return typeof a.__iter__ == 'function';
    
	};
	$module['isIteratable'].__name__ = 'isIteratable';

	$module['isIteratable'].__bind_type__ = 0;
	$module['isIteratable'].__args__ = [null,null,['a']];
	$module['isNumber'] = function(a) {


    return a !== null && a.__number__ && (a.__number__ != 0x01 || isFinite(a));
    
	};
	$module['isNumber'].__name__ = 'isNumber';

	$module['isNumber'].__bind_type__ = 0;
	$module['isNumber'].__args__ = [null,null,['a']];
	$module['isInteger'] = function(a) {


    switch (a.__number__) {
        case 0x01:
            if (a != Math.floor(a)) break;
        case 0x02:
        case 0x04:
            return true;
    }
    return false;

	};
	$module['isInteger'].__name__ = 'isInteger';

	$module['isInteger'].__bind_type__ = 0;
	$module['isInteger'].__args__ = [null,null,['a']];
	$module['isSet'] = function(a) {


    if (a === null) return false;
    if (typeof a.__object == 'undefined') return false;
    switch (a.__mro__[a.__mro__.length-2].__md5__) {
        case pyjslib['set'].__md5__:
            return 1;
        case pyjslib['frozenset'].__md5__:
            return 2;
    }
    return false;

	};
	$module['isSet'].__name__ = 'isSet';

	$module['isSet'].__bind_type__ = 0;
	$module['isSet'].__args__ = [null,null,['a']];
	$module['toJSObjects'] = function(x) {
		var $attr95,$attr97,$attr96,$attr98;
		if (pyjslib['bool']($module['isArray'](x))) {

        var result = [];
        for(var k=0; k < x.length; k++) {
           var v = x[k];
           var tv = pyjslib.toJSObjects(v);
           result.push(tv);
        }
        return result;
        
		}
		if (pyjslib['bool']($module['isObject'](x))) {
			if (pyjslib['bool'](x['__number__'])) {
				return x['valueOf']();
			}
			else if (pyjslib['bool']($module['isinstance'](x, $module['dict']))) {

            var o = x.getObject();
            var result = {};
            for (var i in o) {
               result[o[i][0].toString()] = pyjslib.toJSObjects(o[i][1]);
            }
            return result;
            
			}
			else if (pyjslib['bool']($module['isinstance'](x, $module['list']))) {
				return $module['toJSObjects'](x['__array']);
			}
			else if (pyjslib['bool']($module['hasattr'](x, String('__class__')))) {
				return x;
			}
		}
		if (pyjslib['bool']($module['isObject'](x))) {

        var result = {};
        for(var k in x) {
            var v = x[k];
            var tv = pyjslib.toJSObjects(v);
            result[k] = tv;
            }
            return result;
         
		}
		if (pyjslib['bool']($module['isString'](x))) {
			return $module['str'](x);
		}
		return x;
	};
	$module['toJSObjects'].__name__ = 'toJSObjects';

	$module['toJSObjects'].__bind_type__ = 0;
	$module['toJSObjects'].__args__ = [null,null,['x']];
	$module['sprintf'] = function(strng, args) {


    var re_dict = /([^%]*)%[(]([^)]+)[)]([#0\x20\x2B-]*)(\d+)?(\.\d+)?[hlL]?(.)((.|\n)*)/;
    var re_list = /([^%]*)%([#0\x20\x2B-]*)(\*|(\d+))?(\.\d+)?[hlL]?(.)((.|\n)*)/;
    var re_exp = /(.*)([+-])(.*)/;

    var argidx = 0;
    var nargs = 0;
    var result = [];
    var remainder = strng;

    function formatarg(flags, minlen, precision, conversion, param) {
        var subst = '';
        var numeric = true;
        var left_padding = 1;
        var padchar = ' ';
        if (minlen === null || minlen == 0 || !minlen) {
            minlen=0;
        } else {
            minlen = parseInt(minlen);
        }
        if (!precision) {
            precision = null;
        } else {
            precision = parseInt(precision.substr(1));
        }
        if (flags.indexOf('-') >= 0) {
            left_padding = 0;
        }
        switch (conversion) {
            case '%':
                numeric = false;
                subst = '%';
                break;
            case 'c':
                numeric = false;
                subst = String.fromCharCode(parseInt(param));
                break;
            case 'd':
            case 'i':
            case 'u':
                subst = '' + parseInt(param);
                break;
            case 'e':
                if (precision === null) {
                    precision = 6;
                }
                subst = re_exp.exec(String(param.toExponential(precision)));
                if (subst[3].length == 1) {
                    subst = subst[1] + subst[2] + '0' + subst[3];
                } else {
                    subst = subst[1] + subst[2] + subst[3];
                }
                break;
            case 'E':
                if (precision === null) {
                    precision = 6;
                }
                subst = re_exp.exec(String(param.toExponential(precision)).toUpperCase());
                if (subst[3].length == 1) {
                    subst = subst[1] + subst[2] + '0' + subst[3];
                } else {
                    subst = subst[1] + subst[2] + subst[3];
                }
                break;
            case 'f':
                if (precision === null) {
                    precision = 6;
                }
                subst = String(parseFloat(param).toFixed(precision));
                break;
            case 'F':
                if (precision === null) {
                    precision = 6;
                }
                subst = String(parseFloat(param).toFixed(precision)).toUpperCase();
                break;
            case 'g':
                if (precision === null && flags.indexOf('#') >= 0) {
                    precision = 6;
                }
                if (param >= 1E6 || param < 1E-5) {
                    subst = String(precision == null ? param.toExponential() : param.toExponential().toPrecision(precision));
                } else {
                    subst = String(precision == null ? parseFloat(param) : parseFloat(param).toPrecision(precision));
                }
                break;
            case 'G':
                if (precision === null && flags.indexOf('#') >= 0) {
                    precision = 6;
                }
                if (param >= 1E6 || param < 1E-5) {
                    subst = String(precision == null ? param.toExponential() : param.toExponential().toPrecision(precision)).toUpperCase();
                } else {
                    subst = String(precision == null ? parseFloat(param) : parseFloat(param).toPrecision(precision)).toUpperCase().toUpperCase();
                }
                break;
            case 'r':
                numeric = false;
                subst = pyjslib['repr'](param);
                break;
            case 's':
                numeric = false;
                subst = pyjslib['str'](param);
                break;
            case 'o':
                param = pyjslib['int'](param);
                subst = param.toString(8);
                if (subst != '0' && flags.indexOf('#') >= 0) {
                    subst = '0' + subst;
                }
                break;
            case 'x':
                param = pyjslib['int'](param);
                subst = param.toString(16);
                if (flags.indexOf('#') >= 0) {
                    if (left_padding) {
                        subst = subst.rjust(minlen - 2, '0');
                    }
                    subst = '0x' + subst;
                }
                break;
            case 'X':
                param = pyjslib['int'](param);
                subst = param.toString(16).toUpperCase();
                if (flags.indexOf('#') >= 0) {
                    if (left_padding) {
                        subst = subst.rjust(minlen - 2, '0');
                    }
                    subst = '0x' + subst;
                }
                break;
            default:
                throw pyjslib['ValueError']("unsupported format character '" + conversion + "' ("+pyjslib['hex'](conversion.charCodeAt(0))+") at index " + (strng.length - remainder.length - 1));
        }
        if (minlen && subst.length < minlen) {
            if (numeric && left_padding && flags.indexOf('0') >= 0) {
                padchar = '0';
            }
            subst = left_padding ? subst.rjust(minlen, padchar) : subst.ljust(minlen, padchar);
        }
        return subst;
    }

    function sprintf_list(strng, args) {
        var a, left, flags, precision, conversion, minlen, param,
            __array = result;
        while (remainder) {
            a = re_list.exec(remainder);
            if (a === null) {
                __array[__array.length] = remainder;
                break;
            }
            left = a[1]; flags = a[2];
            minlen = a[3]; precision = a[5]; conversion = a[6];
            remainder = a[7];
            if (typeof minlen == 'undefined') minlen = null;
            if (typeof precision == 'undefined') precision = null;
            if (typeof conversion == 'undefined') conversion = null;
            __array[__array.length] = left;
            if (minlen == '*') {
                if (argidx == nargs) {
                    throw pyjslib['TypeError']("not enough arguments for format string");
                }
                minlen = args.__getitem__(argidx++);
                switch (minlen.__number__) {
                    case 0x02:
                    case 0x04:
                        break;
                    case 0x01:
                        if (minlen == Math.floor(minlen)) {
                            break;
                        }
                    default:
                        throw pyjslib['TypeError']('* wants int');
                }
            }
            if (conversion != '%') {
                if (argidx == nargs) {
                    throw pyjslib['TypeError']("not enough arguments for format string");
                }
                param = args.__getitem__(argidx++);
            }
            __array[__array.length] = formatarg(flags, minlen, precision, conversion, param);
        }
    }

    function sprintf_dict(strng, args) {
        var a = null,
            left = null,
            flags = null,
            precision = null,
            conversion = null,
            minlen = null,
            minlen_type = null,
            key = null,
            arg = args,
            param,
            __array = result;

        argidx++;
        while (remainder) {
            a = re_dict.exec(remainder);
            if (a === null) {
                __array[__array.length] = remainder;
                break;
            }
            left = a[1]; key = a[2]; flags = a[3];
            minlen = a[4]; precision = a[5]; conversion = a[6];
            remainder = a[7];
            if (typeof minlen == 'undefined') minlen = null;
            if (typeof precision == 'undefined') precision = null;
            if (typeof conversion == 'undefined') conversion = null;
            __array[__array.length] = left;
            param = arg.__getitem__(key);
            __array[__array.length] = formatarg(flags, minlen, precision, conversion, param);
        }
    }

    var constructor = args === null ? 'NoneType' : (args.__md5__ == pyjslib.tuple.__md5__ ? 'tuple': (args.__md5__ == pyjslib.dict.__md5__ ? 'dict': 'Other'));
    if (strng.indexOf("%(") >= 0) {
        if (re_dict.exec(strng) !== null) {
            if (constructor != "dict") {
                throw pyjslib['TypeError']("format requires a mapping");
            }
            sprintf_dict(strng, args);
            return result.join("");
        }
    }
    if (constructor != "tuple") {
        args = pyjslib['tuple']([args]);
    }
    nargs = args.__array.length;
    sprintf_list(strng, args);
    if (argidx != nargs) {
        throw pyjslib['TypeError']('not all arguments converted during string formatting');
    }
    return result.join("");

	};
	$module['sprintf'].__name__ = 'sprintf';

	$module['sprintf'].__bind_type__ = 0;
	$module['sprintf'].__args__ = [null,null,['strng'],['args']];
	$module['debugReport'] = function(msg) {


    alert(msg);
    
	};
	$module['debugReport'].__name__ = 'debugReport';

	$module['debugReport'].__bind_type__ = 0;
	$module['debugReport'].__args__ = [null,null,['msg']];

var $printFunc = null;
if (   typeof $wnd.console != 'undefined'
    && typeof $wnd.console.debug == 'function') {
    $printFunc = function(s) {
        $wnd.console.debug(s);
    }
} else if (   typeof $wnd.opera != 'undefined'
           && typeof $wnd.opera.postError == 'function') {
    $printFunc = function(s) {
        $wnd.opera.postError(s);
    }
}

	$module['printFunc'] = function(objs, newline) {


    if ($printFunc === null) return null;
    var s = "";
    for(var i=0; i < objs.length; i++) {
        if(s != "") s += " ";
        s += objs[i];
    }
    $printFunc(s);
    
	};
	$module['printFunc'].__name__ = 'printFunc';

	$module['printFunc'].__bind_type__ = 0;
	$module['printFunc'].__args__ = [null,null,['objs'],['newline']];
	$module['type'] = function(clsname, bases, methods) {
		if (typeof bases == 'undefined') bases=arguments.callee.__args__[3][1];
		if (typeof methods == 'undefined') methods=arguments.callee.__args__[4][1];
		var $and19,k,$iter21_nextval,$iter21_idx,$iter21_type,$iter21_iter,$iter21_array,$and20,mth;
		if (pyjslib['bool']((pyjslib['bool']($and19=(bases === null))?(methods === null):$and19))) {
			throw ($module['NotImplementedError'](String('type() with single argument is not supported (use isinstance())')));
		}
 var mths = {}; 
		if (pyjslib['bool'](methods)) {
			$iter21_iter = methods['keys']();
			if (typeof ($iter21_array = $iter21_iter.__array) != 'undefined') {
				$iter21_type = 0;
			} else {
				$iter21_iter = $iter21_iter.__iter__();
				$iter21_type = typeof ($iter21_array = $iter21_iter.__array) != 'undefined'? 0 : (typeof $iter21_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter21_idx = 0;
			while (typeof ($iter21_nextval=($iter21_type?($iter21_type > 0?$iter21_iter.next(true,false):pyjslib['wrapped_next']($iter21_iter)):$iter21_array[$iter21_idx++])) != 'undefined') {
				k = $iter21_nextval;
				mth = methods.__getitem__(k);
 mths[k] = mth; 
			}
		}
 var bss = null; 
		if (pyjslib['bool'](bases)) {
bss = bases.__array;
		}
 return $pyjs_type(clsname, bss, mths); 
	};
	$module['type'].__name__ = 'type';

	$module['type'].__bind_type__ = 0;
	$module['type'].__args__ = [null,null,['clsname'],['bases', null],['methods', null]];
	$module['pow'] = function(x, y, z) {
		if (typeof z == 'undefined') z=arguments.callee.__args__[4][1];
		var p,$mod1,$mod2;
		p = null;
p = Math.pow(x, y);
		if (pyjslib['bool']((z === null))) {
			return $module['float'](p);
		}
		return $module['float']((typeof ($mod1=p)==typeof ($mod2=z) && typeof $mod1=='number'?
			$mod1%$mod2:
			pyjslib['op_mod']($mod1,$mod2)));
	};
	$module['pow'].__name__ = 'pow';

	$module['pow'].__bind_type__ = 0;
	$module['pow'].__args__ = [null,null,['x'],['y'],['z', null]];
	$module['hex'] = function(x) {


    if (typeof x == 'number') {
        if (Math.floor(x) == x) {
            return '0x' + x.toString(16);
        }
    } else {
        switch (x.__number__) {
            case 0x02:
                return '0x' + x.__v.toString(16);
            case 0x04:
                return x.__hex__();
        }
    }

		throw ($module['TypeError'](String('hex() argument can\x27t be converted to hex')));
		return null;
	};
	$module['hex'].__name__ = 'hex';

	$module['hex'].__bind_type__ = 0;
	$module['hex'].__args__ = [null,null,['x']];
	$module['oct'] = function(x) {


    if (typeof x == 'number') {
        if (Math.floor(x) == x) {
            return x == 0 ? '0': '0' + x.toString(8);
        }
    } else {
        switch (x.__number__) {
            case 0x02:
                return x.__v == 0 ? '0': '0' + x.__v.toString(8);
            case 0x04:
                return x.__oct__();
        }
    }

		throw ($module['TypeError'](String('oct() argument can\x27t be converted to oct')));
		return null;
	};
	$module['oct'].__name__ = 'oct';

	$module['oct'].__bind_type__ = 0;
	$module['oct'].__args__ = [null,null,['x']];
	$module['round'] = function(x, n) {
		if (typeof n == 'undefined') n=arguments.callee.__args__[3][1];
		var r;
		n = $module['pow'](10, n);
		r = null;
r = Math.round(n*x)/n;
		return $module['float'](r);
	};
	$module['round'].__name__ = 'round';

	$module['round'].__bind_type__ = 0;
	$module['round'].__args__ = [null,null,['x'],['n', 0]];
	$module['divmod'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                var f = Math.floor(x / y);
                return pyjslib['tuple']([f, x - f * y]);
            case 0x0102:
                if (y.__v == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                var f = Math.floor(x / y.__v);
                return pyjslib['tuple']([f, x - f * y.__v]);
            case 0x0201:
                if (y == 0) throw pyjslib['ZeroDivisionError']('float divmod()');
                var f = Math.floor(x.__v / y);
                return pyjslib['tuple']([f, x.__v - f * y]);
            case 0x0202:
                if (y.__v == 0) throw pyjslib['ZeroDivisionError']('integer division or modulo by zero');
                var f = Math.floor(x.__v / y.__v);
                return pyjslib['tuple']([new pyjslib['int'](f), new pyjslib['int'](x.__v - f * y.__v)]);
            case 0x0204:
                return y.__rdivmod__(new pyjslib['long'](x.__v));
            case 0x0402:
                return x.__divmod__(new pyjslib['long'](y.__v));
            case 0x0404:
                return x.__divmod__(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && pyjslib['isinstance'](x, y)
                && typeof x['__divmod__'] == 'function')
                return y.__divmod__(x);
            if (typeof x['__divmod__'] == 'function') return x.__divmod__(y);
        }
        if (!y.__number__ && typeof y['__rdivmod__'] == 'function') return y.__rdivmod__(x);
    }

		throw ($module['TypeError'](pyjslib['sprintf'](String('unsupported operand type(s) for divmod(): \x27%r\x27, \x27%r\x27'), pyjslib['tuple']([x, y]))));
		return null;
	};
	$module['divmod'].__name__ = 'divmod';

	$module['divmod'].__bind_type__ = 0;
	$module['divmod'].__args__ = [null,null,['x'],['y']];
	$module['all'] = function(iterable) {
		var $iter22_array,$iter22_nextval,$iter22_idx,element,$iter22_type,$iter22_iter;
		$iter22_iter = iterable;
		if (typeof ($iter22_array = $iter22_iter.__array) != 'undefined') {
			$iter22_type = 0;
		} else {
			$iter22_iter = $iter22_iter.__iter__();
			$iter22_type = typeof ($iter22_array = $iter22_iter.__array) != 'undefined'? 0 : (typeof $iter22_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter22_idx = 0;
		while (typeof ($iter22_nextval=($iter22_type?($iter22_type > 0?$iter22_iter.next(true,false):pyjslib['wrapped_next']($iter22_iter)):$iter22_array[$iter22_idx++])) != 'undefined') {
			element = $iter22_nextval;
			if (pyjslib['bool'](!pyjslib['bool'](element))) {
				return false;
			}
		}
		return true;
	};
	$module['all'].__name__ = 'all';

	$module['all'].__bind_type__ = 0;
	$module['all'].__args__ = [null,null,['iterable']];
	$module['any'] = function(iterable) {
		var $iter23_type,$iter23_nextval,$iter23_iter,element,$iter23_idx,$iter23_array;
		$iter23_iter = iterable;
		if (typeof ($iter23_array = $iter23_iter.__array) != 'undefined') {
			$iter23_type = 0;
		} else {
			$iter23_iter = $iter23_iter.__iter__();
			$iter23_type = typeof ($iter23_array = $iter23_iter.__array) != 'undefined'? 0 : (typeof $iter23_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter23_idx = 0;
		while (typeof ($iter23_nextval=($iter23_type?($iter23_type > 0?$iter23_iter.next(true,false):pyjslib['wrapped_next']($iter23_iter)):$iter23_array[$iter23_idx++])) != 'undefined') {
			element = $iter23_nextval;
			if (pyjslib['bool'](element)) {
				return true;
			}
		}
		return false;
	};
	$module['any'].__name__ = 'any';

	$module['any'].__bind_type__ = 0;
	$module['any'].__args__ = [null,null,['iterable']];
	$module['wrapped_next'] = function (iter) {
    try {
        var res = iter.next();
    } catch (e) {
        if (e === pyjslib['StopIteration']) {
            return;
        }
        throw e;
    }
    return res;
};
	$module['init']();
	$module['__nondynamic_modules__'] = pyjslib['dict']([]);
	$module['__import__'] = function(name, globals, locals, fromlist, level) {
		if (typeof globals == 'undefined') globals=arguments.callee.__args__[3][1];
		if (typeof locals == 'undefined') locals=arguments.callee.__args__[4][1];
		if (typeof fromlist == 'undefined') fromlist=arguments.callee.__args__[5][1];
		if (typeof level == 'undefined') level=arguments.callee.__args__[6][1];
		var $add50,$add49,module,$and22,$and21;
		module = $module['___import___'](name, null);
		if (pyjslib['bool']((pyjslib['bool']($and21=!pyjslib['bool']((module === null)))?$module['hasattr'](module, String('__was_initialized__')):$and21))) {
			return module;
		}
		throw ($module['ImportError']((typeof ($add49=String('No module named '))==typeof ($add50=name) && (typeof $add49=='number'||typeof $add49=='string')?
			$add49+$add50:
			pyjslib['op_add']($add49,$add50))));
		return null;
	};
	$module['__import__'].__name__ = '__import__';

	$module['__import__'].__bind_type__ = 0;
	$module['__import__'].__args__ = [null,null,['name'],['globals', pyjslib['dict']([])],['locals', pyjslib['dict']([])],['fromlist', pyjslib['list']([])],['level', (typeof ($usub8=1)=='number'?
		-$usub8:
		pyjslib['op_usub']($usub8))]];
	$module['sys'] = pyjslib['___import___']('sys', null);
	$module['dynamic'] = pyjslib['___import___']('dynamic', null);
	return this;
}; /* end pyjslib */


/* end module: pyjslib */

/* start module: pyjamas.DOM */
$pyjs.loaded_modules['pyjamas.DOM'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.DOM'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.DOM'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) pyjslib['___import___']('pyjamas', null);
	var $module = pyjamas['DOM'] = $pyjs.loaded_modules["pyjamas.DOM"];
	pyjamas['DOM'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.DOM';
	var __name__ = pyjamas['DOM'].__name__ = __mod_name__;
	var DOM = pyjamas['DOM'];
	var $attr72,$attr71,$attr2,$attr1;
	var attrib_remap = ['apply', 'break', 'call', 'case', 'catch', 'class', 'comment', 'const', 'constructor', 'continue', 'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally', 'for', 'function', 'if', 'import', 'in', 'label', 'name', 'new', 'prototype', 'replace', 'return', 'split', 'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with'];
	$module['sys'] = pyjslib['___import___']('sys', 'pyjamas');
	if (pyjslib['bool'](!pyjslib['list']([String('mozilla'), String('ie6'), String('opera'), String('oldmoz'), String('safari')]).__contains__(((($attr1=$module['sys']['platform']) !== null & ($attr2=$module['sys']).__is_instance__) && typeof $attr1 == 'function'?
				pyjslib['getattr']($attr2, 'platform'):
				$module['sys']['platform'])))) {
		$module['onResize'] = pyjslib['___import___']('pyjamas.Window.onResize', 'pyjamas', null, false);
		$module['onClosing'] = pyjslib['___import___']('pyjamas.Window.onClosing', 'pyjamas', null, false);
		$module['onClosed'] = pyjslib['___import___']('pyjamas.Window.onClosed', 'pyjamas', null, false);
		$module['currentEvent'] = null;
	}
	$module['sCaptureElem'] = null;
	$module['sEventPreviewStack'] = pyjslib['list']([]);
	$module['listeners'] = pyjslib['dict']([]);
/*	$module['ONBLUR'] = pyjslib['___import___']('pyjamas.ui.Event.ONBLUR', 'pyjamas', null, false);
	$module['ONCHANGE'] = pyjslib['___import___']('pyjamas.ui.Event.ONCHANGE', 'pyjamas', null, false);
	$module['ONCLICK'] = pyjslib['___import___']('pyjamas.ui.Event.ONCLICK', 'pyjamas', null, false);
	$module['ONCONTEXTMENU'] = pyjslib['___import___']('pyjamas.ui.Event.ONCONTEXTMENU', 'pyjamas', null, false);
	$module['ONDBLCLICK'] = pyjslib['___import___']('pyjamas.ui.Event.ONDBLCLICK', 'pyjamas', null, false);
	$module['ONERROR'] = pyjslib['___import___']('pyjamas.ui.Event.ONERROR', 'pyjamas', null, false);
	$module['ONFOCUS'] = pyjslib['___import___']('pyjamas.ui.Event.ONFOCUS', 'pyjamas', null, false);
	$module['ONKEYDOWN'] = pyjslib['___import___']('pyjamas.ui.Event.ONKEYDOWN', 'pyjamas', null, false);
	$module['ONKEYPRESS'] = pyjslib['___import___']('pyjamas.ui.Event.ONKEYPRESS', 'pyjamas', null, false);
	$module['ONKEYUP'] = pyjslib['___import___']('pyjamas.ui.Event.ONKEYUP', 'pyjamas', null, false);
	$module['ONLOAD'] = pyjslib['___import___']('pyjamas.ui.Event.ONLOAD', 'pyjamas', null, false);
	$module['ONLOSECAPTURE'] = pyjslib['___import___']('pyjamas.ui.Event.ONLOSECAPTURE', 'pyjamas', null, false);
	$module['ONMOUSEDOWN'] = pyjslib['___import___']('pyjamas.ui.Event.ONMOUSEDOWN', 'pyjamas', null, false);
	$module['ONMOUSEMOVE'] = pyjslib['___import___']('pyjamas.ui.Event.ONMOUSEMOVE', 'pyjamas', null, false);
	$module['ONMOUSEOUT'] = pyjslib['___import___']('pyjamas.ui.Event.ONMOUSEOUT', 'pyjamas', null, false);
	$module['ONMOUSEOVER'] = pyjslib['___import___']('pyjamas.ui.Event.ONMOUSEOVER', 'pyjamas', null, false);
	$module['ONMOUSEUP'] = pyjslib['___import___']('pyjamas.ui.Event.ONMOUSEUP', 'pyjamas', null, false);
	$module['ONSCROLL'] = pyjslib['___import___']('pyjamas.ui.Event.ONSCROLL', 'pyjamas', null, false);*/
	$module['get_listener'] = function(item) {
		var $attr3,$attr4,ret;
		if (pyjslib['bool']((item === null))) {
			return null;
		}
		if (pyjslib['bool'](pyjslib['hasattr'](item, String('__instance__')))) {
			ret = $module['listeners']['get'](((($attr3=item['__instance__']) !== null & ($attr4=item).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, '__instance__'):
						item['__instance__']));
		}
		else {
			ret = $module['listeners']['get'](pyjslib['hash'](item));
		}
		return ret;
	};
	$module['get_listener'].__name__ = 'get_listener';

	$module['get_listener'].__bind_type__ = 0;
	$module['get_listener'].__args__ = [null,null,['item']];
	$module['set_listener'] = function(item, listener) {
		var $attr5,$attr6;
		if (pyjslib['bool'](pyjslib['hasattr'](item, String('__instance__')))) {
			$module['listeners'].__setitem__(((($attr5=item['__instance__']) !== null & ($attr6=item).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, '__instance__'):
						item['__instance__']), listener);
		}
		else {
			$module['listeners'].__setitem__(pyjslib['hash'](item), listener);
		}
		return null;
	};
	$module['set_listener'].__name__ = 'set_listener';

	$module['set_listener'].__bind_type__ = 0;
	$module['set_listener'].__args__ = [null,null,['item'],['listener']];
	$module['hack_timer_workaround_bug_button'] = null;
	$module['init'] = function() {


    // Set up capture event dispatchers.
    $wnd.__dispatchCapturedMouseEvent = function(evt) {
        if ($wnd.__dispatchCapturedEvent(evt)) {
            var cap = DOM.getCaptureElement();
            if (cap && cap.__listener) {
                DOM.dispatchEvent(evt, cap, cap.__listener);
                evt.stopPropagation();
            }
        }
    };

    $wnd.__dispatchCapturedEvent = function(evt) {
        if (!DOM.previewEvent(evt)) {
            evt.stopPropagation();
            evt.preventDefault();
            return false;
        }

        return true;
        };

    $wnd.addEventListener(
        'mouseout',
        function(evt){
            var cap = DOM.getCaptureElement();
            if (cap) {
                if (!evt.relatedTarget) {
                    // When the mouse leaves the window during capture, release capture
                    // and synthesize an 'onlosecapture' event.
                    DOM.sCaptureElem = null;
                    if (cap.__listener) {
                        var lcEvent = $doc.createEvent('UIEvent');
                        lcEvent.initUIEvent('losecapture', false, false, $wnd, 0);
                        DOM.dispatchEvent(lcEvent, cap, cap.__listener);
                    }
                }
            }
        },
        true
    );


    $wnd.addEventListener('click', $wnd.__dispatchCapturedMouseEvent, true);
    $wnd.addEventListener('dblclick', $wnd.__dispatchCapturedMouseEvent, true);
    $wnd.addEventListener('mousedown', $wnd.__dispatchCapturedMouseEvent, true);
    $wnd.addEventListener('mouseup', $wnd.__dispatchCapturedMouseEvent, true);
    $wnd.addEventListener('mousemove', $wnd.__dispatchCapturedMouseEvent, true);
    $wnd.addEventListener('keydown', $wnd.__dispatchCapturedEvent, true);
    $wnd.addEventListener('keyup', $wnd.__dispatchCapturedEvent, true);
    $wnd.addEventListener('keypress', $wnd.__dispatchCapturedEvent, true);
    
    $wnd.__dispatchEvent = function(evt) {
    
        var listener, curElem = this;
        
        while (curElem && !(listener = curElem.__listener)) {
            curElem = curElem.parentNode;
        }
        if (curElem && curElem.nodeType != 1) {
            curElem = null;
        }
    
        if (listener) {
            DOM.dispatchEvent(evt, curElem, listener);
        }
    };
    
	};
	$module['init'].__name__ = 'init';

	$module['init'].__bind_type__ = 0;
	$module['init'].__args__ = [null,null];
	$module['_dispatchWindowEvent'] = function(sender, evt, useCap) {

 		return null;
	};
	$module['_dispatchWindowEvent'].__name__ = '_dispatchWindowEvent';

	$module['_dispatchWindowEvent'].__bind_type__ = 0;
	$module['_dispatchWindowEvent'].__args__ = [null,null,['sender'],['evt'],['useCap']];
	$module['_dispatchEvent'] = function(sender, evt, useCap) {
		var $attr8,$and3,err,$and1,$and2,cap,curElem,$and4,$attr7,$and5,listener,$pyjs_try_err,$and6;
		if (pyjslib['bool']((evt === null))) {
			evt = ((($attr7=$wnd['event']) !== null & ($attr8=$wnd).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'event'):
						$wnd['event']);
		}
		else {
			try {
				sender = $module.get_main_frame()['gobject_wrap'](sender);
				evt = $module.get_main_frame()['gobject_wrap'](evt);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjamas.DOM, try_lineno: 96};
				if (true) {
					$pyjs.__last_exception__.except_lineno = 100;
					err = $pyjs_try_err;
				}
			}
		}
		listener = null;
		curElem = sender;
		cap = $module.getCaptureElement();
		listener = $module['get_listener'](cap);
		if (pyjslib['bool']((pyjslib['bool']($and1=cap)?listener:$and1))) {
			$module.dispatchEvent(evt, cap, listener);
			evt['stopPropagation']();
			return null;
		}
		while (pyjslib['bool']((pyjslib['bool']($and3=curElem)?!pyjslib['bool']($module['get_listener'](curElem)):$and3))) {
			curElem = $module.getParent(curElem);
		}
		if (pyjslib['bool']((pyjslib['bool']($and5=curElem)?!pyjslib['op_eq']($module.getNodeType(curElem), 1):$and5))) {
			curElem = null;
		}
		listener = $module['get_listener'](curElem);
		if (pyjslib['bool'](listener)) {
			$module.dispatchEvent(evt, curElem, listener);
		}
		return null;
	};
	$module['_dispatchEvent'].__name__ = '_dispatchEvent';

	$module['_dispatchEvent'].__bind_type__ = 0;
	$module['_dispatchEvent'].__args__ = [null,null,['sender'],['evt'],['useCap']];
	$module['_dispatchCapturedMouseEvent'] = function(evt) {
		var listener,$and8,cap,$and7;
		if (pyjslib['bool']($module._dispatchCapturedEvent(evt))) {
			cap = $module.getCaptureElement();
			listener = $module['get_listener'](cap);
			if (pyjslib['bool']((pyjslib['bool']($and7=cap)?listener:$and7))) {
				$module.dispatchEvent(evt, cap, listener);
				evt['stopPropagation']();
			}
		}
		return null;
	};
	$module['_dispatchCapturedMouseEvent'].__name__ = '_dispatchCapturedMouseEvent';

	$module['_dispatchCapturedMouseEvent'].__bind_type__ = 0;
	$module['_dispatchCapturedMouseEvent'].__args__ = [null,null,['evt']];
	$module['_dispatchCapturedMouseoutEvent'] = function(evt) {
		var listener,lcEvent,cap;
		cap = $module.getCaptureElement();
		if (pyjslib['bool'](cap)) {
			if (pyjslib['bool'](!pyjslib['bool']($module.eventGetToElement(evt)))) {
				$module.setCapture(null);
				listener = $module['get_listener'](cap);
				if (pyjslib['bool'](listener)) {
					lcEvent = $doc['createEvent'](String('UIEvent'));
					lcEvent['initUIEvent'](String('losecapture'), false, false, $wnd, 0);
					$module.dispatchEvent(lcEvent, cap, listener);
				}
			}
		}
		return null;
	};
	$module['_dispatchCapturedMouseoutEvent'].__name__ = '_dispatchCapturedMouseoutEvent';

	$module['_dispatchCapturedMouseoutEvent'].__bind_type__ = 0;
	$module['_dispatchCapturedMouseoutEvent'].__args__ = [null,null,['evt']];
	$module['browser_event_cb'] = function(view, event, from_window) {
		var $or4,$or1,$or3,err,$or2,$pyjs_try_err,et;
		try {
			event = $module.get_main_frame()['gobject_wrap'](event);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjamas.DOM, try_lineno: 154};
			if (true) {
				$pyjs.__last_exception__.except_lineno = 157;
				err = $pyjs_try_err;
			}
		}
		et = $module.eventGetType(event);
		if (pyjslib['bool'](pyjslib['op_eq'](et, String('resize')))) {
			$module['onResize']();
			return null;
		}
		else if (pyjslib['bool'](pyjslib['op_eq'](et, String('mouseout')))) {
			return $module['_dispatchCapturedMouseoutEvent'](event);
		}
		else if (pyjslib['bool']((pyjslib['bool']($or1=pyjslib['op_eq'](et, String('keyup')))?$or1:(pyjslib['bool']($or2=pyjslib['op_eq'](et, String('keydown')))?$or2:(pyjslib['bool']($or3=pyjslib['op_eq'](et, String('keypress')))?$or3:pyjslib['op_eq'](et, String('change'))))))) {
			return $module._dispatchCapturedEvent(event);
		}
		else {
			return $module['_dispatchCapturedMouseEvent'](event);
		}
		return null;
	};
	$module['browser_event_cb'].__name__ = 'browser_event_cb';

	$module['browser_event_cb'].__bind_type__ = 0;
	$module['browser_event_cb'].__args__ = [null,null,['view'],['event'],['from_window']];
	$module['_dispatchCapturedEvent'] = function(event) {

		if (pyjslib['bool'](!pyjslib['bool']($module.previewEvent(event)))) {
			event['stopPropagation']();
			$module.eventPreventDefault(event);
			return false;
		}
		return true;
	};
	$module['_dispatchCapturedEvent'].__name__ = '_dispatchCapturedEvent';

	$module['_dispatchCapturedEvent'].__bind_type__ = 0;
	$module['_dispatchCapturedEvent'].__args__ = [null,null,['event']];
	$module['addEventPreview'] = function(preview) {

		$module['sEventPreviewStack']['append'](preview);
		return null;
	};
	$module['addEventPreview'].__name__ = 'addEventPreview';

	$module['addEventPreview'].__bind_type__ = 0;
	$module['addEventPreview'].__args__ = [null,null,['preview']];
	$module['appendChild'] = function(parent, child) {

		parent['appendChild'](child);
		return null;
	};
	$module['appendChild'].__name__ = 'appendChild';

	$module['appendChild'].__bind_type__ = 0;
	$module['appendChild'].__args__ = [null,null,['parent'],['child']];
	$module['buttonClick'] = function(elem) {


        var evt = $doc.createEvent('MouseEvents');
        evt.initMouseEvent('click', true, true, null, 1, 0,
                    0, 0, 0, false, false, false, false, 0, null);

        elem.dispatchEvent(evt);
    
	};
	$module['buttonClick'].__name__ = 'buttonClick';

	$module['buttonClick'].__bind_type__ = 0;
	$module['buttonClick'].__args__ = [null,null,['elem']];
	$module['compare'] = function(elem1, elem2) {


    return (elem1 == elem2);
    
	};
	$module['compare'].__name__ = 'compare';

	$module['compare'].__bind_type__ = 0;
	$module['compare'].__args__ = [null,null,['elem1'],['elem2']];
	$module['createAnchor'] = function() {

		return $module.createElement(String('A'));
	};
	$module['createAnchor'].__name__ = 'createAnchor';

	$module['createAnchor'].__bind_type__ = 0;
	$module['createAnchor'].__args__ = [null,null];
	$module['createButton'] = function() {

		return $module.createElement(String('button'));
	};
	$module['createButton'].__name__ = 'createButton';

	$module['createButton'].__bind_type__ = 0;
	$module['createButton'].__args__ = [null,null];
	$module['createCol'] = function() {

		return $module.createElement(String('col'));
	};
	$module['createCol'].__name__ = 'createCol';

	$module['createCol'].__bind_type__ = 0;
	$module['createCol'].__args__ = [null,null];
	$module['createDiv'] = function() {

		return $module.createElement(String('div'));
	};
	$module['createDiv'].__name__ = 'createDiv';

	$module['createDiv'].__bind_type__ = 0;
	$module['createDiv'].__args__ = [null,null];
	$module['createElement'] = function(tag) {


    return $doc.createElement(tag);
    
	};
	$module['createElement'].__name__ = 'createElement';

	$module['createElement'].__bind_type__ = 0;
	$module['createElement'].__args__ = [null,null,['tag']];
	$module['createFieldSet'] = function() {

		return $module['createElement'](String('fieldset'));
	};
	$module['createFieldSet'].__name__ = 'createFieldSet';

	$module['createFieldSet'].__bind_type__ = 0;
	$module['createFieldSet'].__args__ = [null,null];
	$module['createForm'] = function() {

		return $module['createElement'](String('form'));
	};
	$module['createForm'].__name__ = 'createForm';

	$module['createForm'].__bind_type__ = 0;
	$module['createForm'].__args__ = [null,null];
	$module['createIFrame'] = function() {

		return $module['createElement'](String('iframe'));
	};
	$module['createIFrame'].__name__ = 'createIFrame';

	$module['createIFrame'].__bind_type__ = 0;
	$module['createIFrame'].__args__ = [null,null];
	$module['createImg'] = function() {

		return $module['createElement'](String('img'));
	};
	$module['createImg'].__name__ = 'createImg';

	$module['createImg'].__bind_type__ = 0;
	$module['createImg'].__args__ = [null,null];
	$module['createInputCheck'] = function() {

		return $module.createInputElement(String('checkbox'));
	};
	$module['createInputCheck'].__name__ = 'createInputCheck';

	$module['createInputCheck'].__bind_type__ = 0;
	$module['createInputCheck'].__args__ = [null,null];
	$module['createInputElement'] = function(elementType) {


    var e = $doc.createElement("INPUT");
    e.type = elementType;
    return e;
    
	};
	$module['createInputElement'].__name__ = 'createInputElement';

	$module['createInputElement'].__bind_type__ = 0;
	$module['createInputElement'].__args__ = [null,null,['elementType']];
	$module['createInputPassword'] = function() {

		return $module['createInputElement'](String('password'));
	};
	$module['createInputPassword'].__name__ = 'createInputPassword';

	$module['createInputPassword'].__bind_type__ = 0;
	$module['createInputPassword'].__args__ = [null,null];
	$module['createInputRadio'] = function(group) {


    var elem = $doc.createElement("INPUT");
    elem.type = 'radio';
    elem.name = group;
    return elem;
    
	};
	$module['createInputRadio'].__name__ = 'createInputRadio';

	$module['createInputRadio'].__bind_type__ = 0;
	$module['createInputRadio'].__args__ = [null,null,['group']];
	$module['createInputText'] = function() {

		return $module['createInputElement'](String('text'));
	};
	$module['createInputText'].__name__ = 'createInputText';

	$module['createInputText'].__bind_type__ = 0;
	$module['createInputText'].__args__ = [null,null];
	$module['createLabel'] = function() {

		return $module['createElement'](String('label'));
	};
	$module['createLabel'].__name__ = 'createLabel';

	$module['createLabel'].__bind_type__ = 0;
	$module['createLabel'].__args__ = [null,null];
	$module['createLegend'] = function() {

		return $module['createElement'](String('legend'));
	};
	$module['createLegend'].__name__ = 'createLegend';

	$module['createLegend'].__bind_type__ = 0;
	$module['createLegend'].__args__ = [null,null];
	$module['createOptions'] = function() {

		return $module['createElement'](String('options'));
	};
	$module['createOptions'].__name__ = 'createOptions';

	$module['createOptions'].__bind_type__ = 0;
	$module['createOptions'].__args__ = [null,null];
	$module['createSelect'] = function() {

		return $module['createElement'](String('select'));
	};
	$module['createSelect'].__name__ = 'createSelect';

	$module['createSelect'].__bind_type__ = 0;
	$module['createSelect'].__args__ = [null,null];
	$module['createSpan'] = function() {

		return $module['createElement'](String('span'));
	};
	$module['createSpan'].__name__ = 'createSpan';

	$module['createSpan'].__bind_type__ = 0;
	$module['createSpan'].__args__ = [null,null];
	$module['createTable'] = function() {

		return $module['createElement'](String('table'));
	};
	$module['createTable'].__name__ = 'createTable';

	$module['createTable'].__bind_type__ = 0;
	$module['createTable'].__args__ = [null,null];
	$module['createTBody'] = function() {

		return $module['createElement'](String('tbody'));
	};
	$module['createTBody'].__name__ = 'createTBody';

	$module['createTBody'].__bind_type__ = 0;
	$module['createTBody'].__args__ = [null,null];
	$module['createTD'] = function() {

		return $module['createElement'](String('td'));
	};
	$module['createTD'].__name__ = 'createTD';

	$module['createTD'].__bind_type__ = 0;
	$module['createTD'].__args__ = [null,null];
	$module['createTextArea'] = function() {

		return $module['createElement'](String('textarea'));
	};
	$module['createTextArea'].__name__ = 'createTextArea';

	$module['createTextArea'].__bind_type__ = 0;
	$module['createTextArea'].__args__ = [null,null];
	$module['createTH'] = function() {

		return $module['createElement'](String('th'));
	};
	$module['createTH'].__name__ = 'createTH';

	$module['createTH'].__bind_type__ = 0;
	$module['createTH'].__args__ = [null,null];
	$module['createTR'] = function() {

		return $module['createElement'](String('tr'));
	};
	$module['createTR'].__name__ = 'createTR';

	$module['createTR'].__bind_type__ = 0;
	$module['createTR'].__args__ = [null,null];
	$module['eventStopPropagation'] = function(evt) {

		evt['stopPropagation']();
		return null;
	};
	$module['eventStopPropagation'].__name__ = 'eventStopPropagation';

	$module['eventStopPropagation'].__bind_type__ = 0;
	$module['eventStopPropagation'].__args__ = [null,null,['evt']];
	$module['eventCancelBubble'] = function(evt, cancel) {

		evt.cancelBubble = cancel;
		return null;
	};
	$module['eventCancelBubble'].__name__ = 'eventCancelBubble';

	$module['eventCancelBubble'].__bind_type__ = 0;
	$module['eventCancelBubble'].__args__ = [null,null,['evt'],['cancel']];
	$module['eventGetAltKey'] = function(evt) {
		var $attr9,$attr10;
		return ((($attr9=evt['altKey']) !== null & ($attr10=evt).__is_instance__) && typeof $attr9 == 'function'?
					pyjslib['getattr']($attr10, 'altKey'):
					evt['altKey']);
	};
	$module['eventGetAltKey'].__name__ = 'eventGetAltKey';

	$module['eventGetAltKey'].__bind_type__ = 0;
	$module['eventGetAltKey'].__args__ = [null,null,['evt']];
	$module['eventGetButton'] = function(evt) {


    var button = evt.which;
    if(button == 2) {
        return 4;
    } else if (button == 3) {
        return 2;
    } else {
        return button || 0;
    }
    
	};
	$module['eventGetButton'].__name__ = 'eventGetButton';

	$module['eventGetButton'].__bind_type__ = 0;
	$module['eventGetButton'].__args__ = [null,null,['evt']];
	$module['eventGetClientX'] = function(evt) {
		var $attr11,$attr12;
		return ((($attr11=evt['clientX']) !== null & ($attr12=evt).__is_instance__) && typeof $attr11 == 'function'?
					pyjslib['getattr']($attr12, 'clientX'):
					evt['clientX']);
	};
	$module['eventGetClientX'].__name__ = 'eventGetClientX';

	$module['eventGetClientX'].__bind_type__ = 0;
	$module['eventGetClientX'].__args__ = [null,null,['evt']];
	$module['eventGetClientY'] = function(evt) {
		var $attr14,$attr13;
		return ((($attr13=evt['clientY']) !== null & ($attr14=evt).__is_instance__) && typeof $attr13 == 'function'?
					pyjslib['getattr']($attr14, 'clientY'):
					evt['clientY']);
	};
	$module['eventGetClientY'].__name__ = 'eventGetClientY';

	$module['eventGetClientY'].__bind_type__ = 0;
	$module['eventGetClientY'].__args__ = [null,null,['evt']];
	$module['eventGetCtrlKey'] = function(evt) {
		var $attr15,$attr16;
		return ((($attr15=evt['ctrlKey']) !== null & ($attr16=evt).__is_instance__) && typeof $attr15 == 'function'?
					pyjslib['getattr']($attr16, 'ctrlKey'):
					evt['ctrlKey']);
	};
	$module['eventGetCtrlKey'].__name__ = 'eventGetCtrlKey';

	$module['eventGetCtrlKey'].__bind_type__ = 0;
	$module['eventGetCtrlKey'].__args__ = [null,null,['evt']];
	$module['eventGetFromElement'] = function(evt) {


    return evt.fromElement ? evt.fromElement : null;
    
	};
	$module['eventGetFromElement'].__name__ = 'eventGetFromElement';

	$module['eventGetFromElement'].__bind_type__ = 0;
	$module['eventGetFromElement'].__args__ = [null,null,['evt']];
	$module['eventGetKeyCode'] = function(evt) {


    return evt.which ? evt.which : (evt.keyCode ? evt.keyCode : 0);
    
	};
	$module['eventGetKeyCode'].__name__ = 'eventGetKeyCode';

	$module['eventGetKeyCode'].__bind_type__ = 0;
	$module['eventGetKeyCode'].__args__ = [null,null,['evt']];
	$module['eventGetRepeat'] = function(evt) {
		var $attr17,$attr18;
		return ((($attr17=evt['repeat']) !== null & ($attr18=evt).__is_instance__) && typeof $attr17 == 'function'?
					pyjslib['getattr']($attr18, 'repeat'):
					evt['repeat']);
	};
	$module['eventGetRepeat'].__name__ = 'eventGetRepeat';

	$module['eventGetRepeat'].__bind_type__ = 0;
	$module['eventGetRepeat'].__args__ = [null,null,['evt']];
	$module['eventGetScreenX'] = function(evt) {
		var $attr20,$attr19;
		return ((($attr19=evt['screenX']) !== null & ($attr20=evt).__is_instance__) && typeof $attr19 == 'function'?
					pyjslib['getattr']($attr20, 'screenX'):
					evt['screenX']);
	};
	$module['eventGetScreenX'].__name__ = 'eventGetScreenX';

	$module['eventGetScreenX'].__bind_type__ = 0;
	$module['eventGetScreenX'].__args__ = [null,null,['evt']];
	$module['eventGetScreenY'] = function(evt) {
		var $attr21,$attr22;
		return ((($attr21=evt['screenY']) !== null & ($attr22=evt).__is_instance__) && typeof $attr21 == 'function'?
					pyjslib['getattr']($attr22, 'screenY'):
					evt['screenY']);
	};
	$module['eventGetScreenY'].__name__ = 'eventGetScreenY';

	$module['eventGetScreenY'].__bind_type__ = 0;
	$module['eventGetScreenY'].__args__ = [null,null,['evt']];
	$module['eventGetShiftKey'] = function(evt) {
		var $attr24,$attr23;
		return ((($attr23=evt['shiftKey']) !== null & ($attr24=evt).__is_instance__) && typeof $attr23 == 'function'?
					pyjslib['getattr']($attr24, 'shiftKey'):
					evt['shiftKey']);
	};
	$module['eventGetShiftKey'].__name__ = 'eventGetShiftKey';

	$module['eventGetShiftKey'].__bind_type__ = 0;
	$module['eventGetShiftKey'].__args__ = [null,null,['evt']];
	$module['eventGetCurrentTarget'] = function(event) {
		var $attr26,$attr25;
		return ((($attr25=event['currentTarget']) !== null & ($attr26=event).__is_instance__) && typeof $attr25 == 'function'?
					pyjslib['getattr']($attr26, 'currentTarget'):
					event['currentTarget']);
	};
	$module['eventGetCurrentTarget'].__name__ = 'eventGetCurrentTarget';

	$module['eventGetCurrentTarget'].__bind_type__ = 0;
	$module['eventGetCurrentTarget'].__args__ = [null,null,['event']];
	$module['eventGetTarget'] = function(event) {


    return event.target ? event.target : null;
    
	};
	$module['eventGetTarget'].__name__ = 'eventGetTarget';

	$module['eventGetTarget'].__bind_type__ = 0;
	$module['eventGetTarget'].__args__ = [null,null,['event']];
	$module['eventGetToElement'] = function(evt) {


    return evt.relatedTarget ? evt.relatedTarget : null;
    
	};
	$module['eventGetToElement'].__name__ = 'eventGetToElement';

	$module['eventGetToElement'].__bind_type__ = 0;
	$module['eventGetToElement'].__args__ = [null,null,['evt']];
	$module['eventGetType'] = function(event) {
		var $attr28,$attr27;
		return ((($attr27=event['type']) !== null & ($attr28=event).__is_instance__) && typeof $attr27 == 'function'?
					pyjslib['getattr']($attr28, 'type'):
					event['type']);
	};
	$module['eventGetType'].__name__ = 'eventGetType';

	$module['eventGetType'].__bind_type__ = 0;
	$module['eventGetType'].__args__ = [null,null,['event']];
	$module['eventmap'] = pyjslib['dict']([[String('blur'), 4096], [String('change'), 1024], [String('click'), 1], [String('dblclick'), 2], [String('focus'), 2048], [String('keydown'), 128], [String('keypress'), 256], [String('keyup'), 512], [String('load'), 32768], [String('losecapture'), 8192], [String('mousedown'), 4], [String('mousemove'), 64], [String('mouseout'), 32], [String('mouseover'), 16], [String('mouseup'), 8], [String('scroll'), 16384], [String('error'), 65536], [String('contextmenu'), 131072]]);
	$module['eventGetTypeInt'] = function(event) {


    switch (event.type) {
      case "blur": return 0x01000;
      case "change": return 0x00400;
      case "click": return 0x00001;
      case "dblclick": return 0x00002;
      case "focus": return 0x00800;
      case "keydown": return 0x00080;
      case "keypress": return 0x00100;
      case "keyup": return 0x00200;
      case "load": return 0x08000;
      case "losecapture": return 0x02000;
      case "mousedown": return 0x00004;
      case "mousemove": return 0x00040;
      case "mouseout": return 0x00020;
      case "mouseover": return 0x00010;
      case "mouseup": return 0x00008;
      case "scroll": return 0x04000;
      case "error": return 0x10000;
      case "contextmenu": return 0x20000;
    }
    
	};
	$module['eventGetTypeInt'].__name__ = 'eventGetTypeInt';

	$module['eventGetTypeInt'].__bind_type__ = 0;
	$module['eventGetTypeInt'].__args__ = [null,null,['event']];
	$module['eventGetTypeString'] = function(event) {

		return $module['eventGetType'](event);
	};
	$module['eventGetTypeString'].__name__ = 'eventGetTypeString';

	$module['eventGetTypeString'].__bind_type__ = 0;
	$module['eventGetTypeString'].__args__ = [null,null,['event']];
	$module['eventPreventDefault'] = function(evt) {

		evt['preventDefault']();
		return null;
	};
	$module['eventPreventDefault'].__name__ = 'eventPreventDefault';

	$module['eventPreventDefault'].__bind_type__ = 0;
	$module['eventPreventDefault'].__args__ = [null,null,['evt']];
	$module['eventSetKeyCode'] = function(evt, key) {

		evt.keyCode = key;
		return null;
	};
	$module['eventSetKeyCode'].__name__ = 'eventSetKeyCode';

	$module['eventSetKeyCode'].__bind_type__ = 0;
	$module['eventSetKeyCode'].__args__ = [null,null,['evt'],['key']];
	$module['eventToString'] = function(evt) {


    return evt.toString();
    
	};
	$module['eventToString'].__name__ = 'eventToString';

	$module['eventToString'].__bind_type__ = 0;
	$module['eventToString'].__args__ = [null,null,['evt']];
	$module['iframeGetSrc'] = function(elem) {
		var $attr29,$attr30;
		return ((($attr29=elem['src']) !== null & ($attr30=elem).__is_instance__) && typeof $attr29 == 'function'?
					pyjslib['getattr']($attr30, 'src'):
					elem['src']);
	};
	$module['iframeGetSrc'].__name__ = 'iframeGetSrc';

	$module['iframeGetSrc'].__bind_type__ = 0;
	$module['iframeGetSrc'].__args__ = [null,null,['elem']];
	$module['getAbsoluteLeft'] = function(elem) {


    // Unattached elements and elements (or their ancestors) with style
    // 'display: none' have no offsetLeft.
    if (elem.offsetLeft == null) {
      return 0;
    }

    var left = 0;
    var curr = elem.parentNode;
    if (curr) {
      // This intentionally excludes body which has a null offsetParent.
      while (curr.offsetParent) {
        left -= curr.scrollLeft;
        curr = curr.parentNode;
      }
    }
    
    while (elem) {
      left += elem.offsetLeft;

      // Safari bug: a top-level absolutely positioned element includes the
      // body's offset position already.
      var parent = elem.offsetParent;
      if (parent && (parent.tagName == 'BODY') &&
          (elem.style.position == 'absolute')) {
        break;
      }

      elem = parent;
    }
    return left;
    
	};
	$module['getAbsoluteLeft'].__name__ = 'getAbsoluteLeft';

	$module['getAbsoluteLeft'].__bind_type__ = 0;
	$module['getAbsoluteLeft'].__args__ = [null,null,['elem']];
	$module['getAbsoluteTop'] = function(elem) {


    // Unattached elements and elements (or their ancestors) with style
    // 'display: none' have no offsetTop.
    if (elem.offsetTop == null) {
      return 0;
    }

    var top = 0;
    var curr = elem.parentNode;
    if (curr) {
      // This intentionally excludes body which has a null offsetParent.
      while (curr.offsetParent) {
        top -= curr.scrollTop;
        curr = curr.parentNode;
      }
    }
    
    while (elem) {
      top += elem.offsetTop;

      // Safari bug: a top-level absolutely positioned element includes the
      // body's offset position already.
      var parent = elem.offsetParent;
      if (parent && (parent.tagName == 'BODY') &&
          (elem.style.position == 'absolute')) {
        break;
      }

      elem = parent;
    }
    return top;
    
	};
	$module['getAbsoluteTop'].__name__ = 'getAbsoluteTop';

	$module['getAbsoluteTop'].__bind_type__ = 0;
	$module['getAbsoluteTop'].__args__ = [null,null,['elem']];
	$module['getAttribute'] = function(elem, attr) {


    var ret = elem[attr];
    return (ret == null) ? null : String(ret);
    
	};
	$module['getAttribute'].__name__ = 'getAttribute';

	$module['getAttribute'].__bind_type__ = 0;
	$module['getAttribute'].__args__ = [null,null,['elem'],['attr']];
	$module['getElemAttribute'] = function(elem, attr) {

		return elem['getAttribute'](attr);
	};
	$module['getElemAttribute'].__name__ = 'getElemAttribute';

	$module['getElemAttribute'].__bind_type__ = 0;
	$module['getElemAttribute'].__args__ = [null,null,['elem'],['attr']];
	$module['getBooleanAttribute'] = function(elem, attr) {


    return !!elem[attr];
    
	};
	$module['getBooleanAttribute'].__name__ = 'getBooleanAttribute';

	$module['getBooleanAttribute'].__bind_type__ = 0;
	$module['getBooleanAttribute'].__args__ = [null,null,['elem'],['attr']];
	$module['getBooleanElemAttribute'] = function(elem, attr) {

		if (pyjslib['bool'](!pyjslib['bool'](elem['hasAttribute'](attr)))) {
			return null;
		}
		return pyjslib['bool'](elem['getAttribute'](attr));
	};
	$module['getBooleanElemAttribute'].__name__ = 'getBooleanElemAttribute';

	$module['getBooleanElemAttribute'].__bind_type__ = 0;
	$module['getBooleanElemAttribute'].__args__ = [null,null,['elem'],['attr']];
	$module['getCaptureElement'] = function() {

		return $module['sCaptureElem'];
	};
	$module['getCaptureElement'].__name__ = 'getCaptureElement';

	$module['getCaptureElement'].__bind_type__ = 0;
	$module['getCaptureElement'].__args__ = [null,null];
	$module['getChild'] = function(elem, index) {


    var count = 0, child = elem.firstChild;
    while (child) {
      var next = child.nextSibling;
      if (child.nodeType == 1) {
        if (index == count)
          return child;
        ++count;
      }
      child = next;
    }

    return null;
    
	};
	$module['getChild'].__name__ = 'getChild';

	$module['getChild'].__bind_type__ = 0;
	$module['getChild'].__args__ = [null,null,['elem'],['index']];
	$module['getChildCount'] = function(elem) {


    var count = 0, child = elem.firstChild;
    while (child) {
      if (child.nodeType == 1)
      ++count;
      child = child.nextSibling;
    }
    return count;
    
	};
	$module['getChildCount'].__name__ = 'getChildCount';

	$module['getChildCount'].__bind_type__ = 0;
	$module['getChildCount'].__args__ = [null,null,['elem']];
	$module['getChildIndex'] = function(parent, toFind) {


    var count = 0, child = parent.firstChild;
    while (child) {
        if (child == toFind)
            return count;
        if (child.nodeType == 1)
            ++count;
        child = child.nextSibling;
    }

    return -1;
    
	};
	$module['getChildIndex'].__name__ = 'getChildIndex';

	$module['getChildIndex'].__bind_type__ = 0;
	$module['getChildIndex'].__args__ = [null,null,['parent'],['toFind']];
	$module['getElementById'] = function(id) {


    var elem = $doc.getElementById(id);
    return elem ? elem : null;
    
	};
	$module['getElementById'].__name__ = 'getElementById';

	$module['getElementById'].__bind_type__ = 0;
	$module['getElementById'].__args__ = [null,null,['id']];
	$module['getEventListener'] = function(element) {


    return element.__listener;
    
	};
	$module['getEventListener'].__name__ = 'getEventListener';

	$module['getEventListener'].__bind_type__ = 0;
	$module['getEventListener'].__args__ = [null,null,['element']];
	$module['eventbitsmap'] = pyjslib['dict']([]);
	$module['getEventsSunk'] = function(element) {

		return element.__eventBits ? element.__eventBits : 0;
	};
	$module['getEventsSunk'].__name__ = 'getEventsSunk';

	$module['getEventsSunk'].__bind_type__ = 0;
	$module['getEventsSunk'].__args__ = [null,null,['element']];
	$module['getFirstChild'] = function(elem) {


    var child = elem.firstChild;
    while (child && child.nodeType != 1)
      child = child.nextSibling;
    return child ? child : null;
    
	};
	$module['getFirstChild'].__name__ = 'getFirstChild';

	$module['getFirstChild'].__bind_type__ = 0;
	$module['getFirstChild'].__args__ = [null,null,['elem']];
	$module['getInnerHTML'] = function(element) {


    var ret = element.innerHTML;
    return (ret == null) ? null : ret;
    
	};
	$module['getInnerHTML'].__name__ = 'getInnerHTML';

	$module['getInnerHTML'].__bind_type__ = 0;
	$module['getInnerHTML'].__args__ = [null,null,['element']];
	$module['getInnerText'] = function(element) {


    // To mimic IE's 'innerText' property in the W3C DOM, we need to recursively
    // concatenate all child text nodes (depth first).
    var text = '', child = element.firstChild;
    while (child) {
      if (child.nodeType == 1){ // 1 == Element node
        text += DOM.getInnerText(child);
      } else if (child.nodeValue) {
        text += child.nodeValue;
      }
      child = child.nextSibling;
    }
    return text;
    
	};
	$module['getInnerText'].__name__ = 'getInnerText';

	$module['getInnerText'].__bind_type__ = 0;
	$module['getInnerText'].__args__ = [null,null,['element']];
	$module['getIntAttribute'] = function(elem, attr) {


    var i = parseInt(elem[attr]);
    if (!i) {
        return 0;
    }
    return i;
    
	};
	$module['getIntAttribute'].__name__ = 'getIntAttribute';

	$module['getIntAttribute'].__bind_type__ = 0;
	$module['getIntAttribute'].__args__ = [null,null,['elem'],['attr']];
	$module['getIntElemAttribute'] = function(elem, attr) {

		if (pyjslib['bool'](!pyjslib['bool'](elem['hasAttribute'](attr)))) {
			return null;
		}
		return pyjslib['float_int'](elem['getAttribute'](attr));
	};
	$module['getIntElemAttribute'].__name__ = 'getIntElemAttribute';

	$module['getIntElemAttribute'].__bind_type__ = 0;
	$module['getIntElemAttribute'].__args__ = [null,null,['elem'],['attr']];
	$module['getIntStyleAttribute'] = function(elem, attr) {


    var i = parseInt(elem.style[attr]);
    if (!i) {
        return 0;
    }
    return i;
    
	};
	$module['getIntStyleAttribute'].__name__ = 'getIntStyleAttribute';

	$module['getIntStyleAttribute'].__bind_type__ = 0;
	$module['getIntStyleAttribute'].__args__ = [null,null,['elem'],['attr']];
	$module['getNextSibling'] = function(elem) {


    var sib = elem.nextSibling;
    while (sib && sib.nodeType != 1)
      sib = sib.nextSibling;
    return sib ? sib : null;
    
	};
	$module['getNextSibling'].__name__ = 'getNextSibling';

	$module['getNextSibling'].__bind_type__ = 0;
	$module['getNextSibling'].__args__ = [null,null,['elem']];
	$module['getNodeType'] = function(elem) {
		var $attr32,$attr31;
		return ((($attr31=elem['nodeType']) !== null & ($attr32=elem).__is_instance__) && typeof $attr31 == 'function'?
					pyjslib['getattr']($attr32, 'nodeType'):
					elem['nodeType']);
	};
	$module['getNodeType'].__name__ = 'getNodeType';

	$module['getNodeType'].__bind_type__ = 0;
	$module['getNodeType'].__args__ = [null,null,['elem']];
	$module['getParent'] = function(elem) {


    var parent = elem.parentNode;
    if(parent == null) {
        return null;
    }
    if (parent.nodeType != 1)
        parent = null;
    return parent ? parent : null;
    
	};
	$module['getParent'].__name__ = 'getParent';

	$module['getParent'].__bind_type__ = 0;
	$module['getParent'].__args__ = [null,null,['elem']];
	$module['getStyleAttribute'] = function(elem, attr) {


    var ret = elem.style[attr];
    return (ret == null) ? null : ret;
    
	};
	$module['getStyleAttribute'].__name__ = 'getStyleAttribute';

	$module['getStyleAttribute'].__bind_type__ = 0;
	$module['getStyleAttribute'].__args__ = [null,null,['elem'],['attr']];
	$module['insertChild'] = function(parent, toAdd, index) {


    var count = 0, child = parent.firstChild, before = null;
    while (child) {
      if (child.nodeType == 1) {
        if (count == index) {
          before = child;
          break;
        }
        ++count;
      }
      child = child.nextSibling;
    }

    parent.insertBefore(toAdd, before);
    
	};
	$module['insertChild'].__name__ = 'insertChild';

	$module['insertChild'].__bind_type__ = 0;
	$module['insertChild'].__args__ = [null,null,['parent'],['toAdd'],['index']];
	$module['IterChildrenClass'] = (function(){
		var $cls_instance = $pyjs__class_instance('IterChildrenClass');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '1a7622dfa5bbb421092788b66eeab47c';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(elem) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
			}
			var $attr33,$attr34;
			self.parent = elem;
			self.child = ((($attr33=elem['firstChild']) !== null & ($attr34=elem).__is_instance__) && typeof $attr33 == 'function'?
						pyjslib['getattr']($attr34, 'firstChild'):
						elem['firstChild']);
			self.lastChild = null;
			return null;
		}
	, 1, [null,null,['self'],['elem']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'next', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr40,$attr37,$attr36,$attr35,$attr41,$attr42,$attr39,$attr38;
			if (pyjslib['bool'](!pyjslib['bool'](((($attr35=self['child']) !== null & ($attr36=self).__is_instance__) && typeof $attr35 == 'function'?
						pyjslib['getattr']($attr36, 'child'):
						self['child'])))) {
				throw (pyjslib['StopIteration']);
			}
			self.lastChild = ((($attr37=self['child']) !== null & ($attr38=self).__is_instance__) && typeof $attr37 == 'function'?
						pyjslib['getattr']($attr38, 'child'):
						self['child']);
			self.child = $module['getNextSibling'](((($attr39=self['child']) !== null & ($attr40=self).__is_instance__) && typeof $attr39 == 'function'?
						pyjslib['getattr']($attr40, 'child'):
						self['child']));
			return ((($attr41=self['lastChild']) !== null & ($attr42=self).__is_instance__) && typeof $attr41 == 'function'?
						pyjslib['getattr']($attr42, 'lastChild'):
						self['lastChild']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['next'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'remove', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr43,$attr44;
			self['parent']['removeChild'](((($attr43=self['lastChild']) !== null & ($attr44=self).__is_instance__) && typeof $attr43 == 'function'?
						pyjslib['getattr']($attr44, 'lastChild'):
						self['lastChild']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	$module['iterChildren'] = function(elem) {


    var parent = elem;
    var child = elem.firstChild;
    var lastChild = null;
    return {
        'next': function() {
            if (child == null) {
                throw pyjslib.StopIteration;
            }
            lastChild = child;
            child = DOM.getNextSibling(child);
            return lastChild;
        },
        'remove': function() {        
            parent.removeChild(lastChild);
        },
        __iter__: function() {
            return this;
        }
    };
    
	};
	$module['iterChildren'].__name__ = 'iterChildren';

	$module['iterChildren'].__bind_type__ = 0;
	$module['iterChildren'].__args__ = [null,null,['elem']];
	$module['IterWalkChildren'] = (function(){
		var $cls_instance = $pyjs__class_instance('IterWalkChildren');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '9c64e70df347b44a5e9aaea408d2144b';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(elem) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
			}

			self.parent = elem;
			self.child = $module['getFirstChild'](elem);
			self.lastChild = null;
			self.stack = pyjslib['list']([]);
			return null;
		}
	, 1, [null,null,['self'],['elem']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'next', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr59,$attr58,$attr55,$attr60,$attr51,$attr50,$attr52,nextSibling,$attr54,firstChild,$attr56,$attr46,$attr47,$attr45,$attr57,$attr53,$attr48,$attr49;
			if (pyjslib['bool'](!pyjslib['bool'](((($attr45=self['child']) !== null & ($attr46=self).__is_instance__) && typeof $attr45 == 'function'?
						pyjslib['getattr']($attr46, 'child'):
						self['child'])))) {
				throw (pyjslib['StopIteration']);
			}
			self.lastChild = ((($attr47=self['child']) !== null & ($attr48=self).__is_instance__) && typeof $attr47 == 'function'?
						pyjslib['getattr']($attr48, 'child'):
						self['child']);
			firstChild = $module['getFirstChild'](((($attr49=self['child']) !== null & ($attr50=self).__is_instance__) && typeof $attr49 == 'function'?
						pyjslib['getattr']($attr50, 'child'):
						self['child']));
			nextSibling = $module['getNextSibling'](((($attr51=self['child']) !== null & ($attr52=self).__is_instance__) && typeof $attr51 == 'function'?
						pyjslib['getattr']($attr52, 'child'):
						self['child']));
			if (pyjslib['bool']((firstChild !== null))) {
				if (pyjslib['bool']((nextSibling !== null))) {
					self['stack']['append'](pyjslib['tuple']([nextSibling, ((($attr53=self['parent']) !== null & ($attr54=self).__is_instance__) && typeof $attr53 == 'function'?
								pyjslib['getattr']($attr54, 'parent'):
								self['parent'])]));
				}
				self.parent = ((($attr55=self['child']) !== null & ($attr56=self).__is_instance__) && typeof $attr55 == 'function'?
							pyjslib['getattr']($attr56, 'child'):
							self['child']);
				self.child = firstChild;
			}
			else if (pyjslib['bool']((nextSibling !== null))) {
				self.child = nextSibling;
			}
			else if (pyjslib['bool']((pyjslib['cmp'](pyjslib['len'](((($attr57=self['stack']) !== null & ($attr58=self).__is_instance__) && typeof $attr57 == 'function'?
						pyjslib['getattr']($attr58, 'stack'):
						self['stack'])), 0) == 1))) {
				var $tupleassign1 = self['stack']['pop']();
				self.child = $tupleassign1.__getitem__(0);
				self.parent = $tupleassign1.__getitem__(1);
			}
			else {
				self.child = null;
			}
			return ((($attr59=self['lastChild']) !== null & ($attr60=self).__is_instance__) && typeof $attr59 == 'function'?
						pyjslib['getattr']($attr60, 'lastChild'):
						self['lastChild']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['next'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'remove', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr61,$attr62;
			self['parent']['removeChild'](((($attr61=self['lastChild']) !== null & ($attr62=self).__is_instance__) && typeof $attr61 == 'function'?
						pyjslib['getattr']($attr62, 'lastChild'):
						self['lastChild']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	$module['walkChildren'] = function(elem) {


    var parent = elem;
    var child = DOM.getFirstChild(elem);
    var lastChild = null;
    var stack = [];
    var parentStack = [];
    return {
        'next': function() {
            if (child == null) {
                throw pyjslib.StopIteration;
            }
            lastChild = child;
            var firstChild = DOM.getFirstChild(child);
            var nextSibling = DOM.getNextSibling(child);
            if(firstChild != null) {
               if(nextSibling != null) {
                   stack.push(nextSibling);
                   parentStack.push(parent);
                }
                parent = child;
                child = firstChild;
            } else if(nextSibling != null) {
                child = nextSibling;
            } else if(stack.length > 0) {
                child = stack.pop();
                parent = parentStack.pop();
            } else {
                child = null;
            }
            return lastChild;
        },
        'remove': function() {        
            parent.removeChild(lastChild);
        },
        __iter__: function() {
            return this;
        }
    };
    
	};
	$module['walkChildren'].__name__ = 'walkChildren';

	$module['walkChildren'].__bind_type__ = 0;
	$module['walkChildren'].__args__ = [null,null,['elem']];
	$module['isOrHasChild'] = function(parent, child) {
		var $attr64,$attr65,$attr66,$attr63;
		while (pyjslib['bool'](child)) {
			if (pyjslib['bool']($module['compare'](parent, child))) {
				return true;
			}
			child = ((($attr63=child['parentNode']) !== null & ($attr64=child).__is_instance__) && typeof $attr63 == 'function'?
						pyjslib['getattr']($attr64, 'parentNode'):
						child['parentNode']);
			if (pyjslib['bool'](!pyjslib['bool'](child))) {
				return false;
			}
			if (pyjslib['bool'](!pyjslib['op_eq'](((($attr65=child['nodeType']) !== null & ($attr66=child).__is_instance__) && typeof $attr65 == 'function'?
						pyjslib['getattr']($attr66, 'nodeType'):
						child['nodeType']), 1))) {
				child = null;
			}
		}
		return false;
	};
	$module['isOrHasChild'].__name__ = 'isOrHasChild';

	$module['isOrHasChild'].__bind_type__ = 0;
	$module['isOrHasChild'].__args__ = [null,null,['parent'],['child']];
	$module['releaseCapture'] = function(elem) {


    if ((DOM.sCaptureElem != null) && DOM.compare(elem, DOM.sCaptureElem))
        DOM.sCaptureElem = null;
    
	};
	$module['releaseCapture'].__name__ = 'releaseCapture';

	$module['releaseCapture'].__bind_type__ = 0;
	$module['releaseCapture'].__args__ = [null,null,['elem']];
	$module['removeChild'] = function(parent, child) {

		parent['removeChild'](child);
		return null;
	};
	$module['removeChild'].__name__ = 'removeChild';

	$module['removeChild'].__bind_type__ = 0;
	$module['removeChild'].__args__ = [null,null,['parent'],['child']];
	$module['replaceChild'] = function(parent, newChild, oldChild) {

		parent['replaceChild'](newChild, oldChild);
		return null;
	};
	$module['replaceChild'].__name__ = 'replaceChild';

	$module['replaceChild'].__bind_type__ = 0;
	$module['replaceChild'].__args__ = [null,null,['parent'],['newChild'],['oldChild']];
	$module['removeEventPreview'] = function(preview) {

		$module['sEventPreviewStack']['remove'](preview);
		return null;
	};
	$module['removeEventPreview'].__name__ = 'removeEventPreview';

	$module['removeEventPreview'].__bind_type__ = 0;
	$module['removeEventPreview'].__args__ = [null,null,['preview']];
	$module['getOffsetHeight'] = function(elem) {
		var $attr67,$attr68;
		return ((($attr67=elem['offsetHeight']) !== null & ($attr68=elem).__is_instance__) && typeof $attr67 == 'function'?
					pyjslib['getattr']($attr68, 'offsetHeight'):
					elem['offsetHeight']);
	};
	$module['getOffsetHeight'].__name__ = 'getOffsetHeight';

	$module['getOffsetHeight'].__bind_type__ = 0;
	$module['getOffsetHeight'].__args__ = [null,null,['elem']];
	$module['getOffsetWidth'] = function(elem) {
		var $attr70,$attr69;
		return ((($attr69=elem['offsetWidth']) !== null & ($attr70=elem).__is_instance__) && typeof $attr69 == 'function'?
					pyjslib['getattr']($attr70, 'offsetWidth'):
					elem['offsetWidth']);
	};
	$module['getOffsetWidth'].__name__ = 'getOffsetWidth';

	$module['getOffsetWidth'].__bind_type__ = 0;
	$module['getOffsetWidth'].__args__ = [null,null,['elem']];
	$module['scrollIntoView'] = function(elem) {


    var left = elem.offsetLeft, top = elem.offsetTop;
    var width = elem.offsetWidth, height = elem.offsetHeight;
    
    if (elem.parentNode != elem.offsetParent) {
        left -= elem.parentNode.offsetLeft;
        top -= elem.parentNode.offsetTop;
    }

    var cur = elem.parentNode;
    while (cur && (cur.nodeType == 1)) {
        if ((cur.style.overflow == 'auto') || (cur.style.overflow == 'scroll')) {
            if (left < cur.scrollLeft) {
                cur.scrollLeft = left;
            }
            if (left + width > cur.scrollLeft + cur.clientWidth) {
                cur.scrollLeft = (left + width) - cur.clientWidth;
            }
            if (top < cur.scrollTop) {
                cur.scrollTop = top;
            }
            if (top + height > cur.scrollTop + cur.clientHeight) {
                cur.scrollTop = (top + height) - cur.clientHeight;
            }
        }

        var offsetLeft = cur.offsetLeft, offsetTop = cur.offsetTop;
        if (cur.parentNode != cur.offsetParent) {
            offsetLeft -= cur.parentNode.offsetLeft;
            offsetTop -= cur.parentNode.offsetTop;
        }

        left += offsetLeft - cur.scrollLeft;
        top += offsetTop - cur.scrollTop;
        cur = cur.parentNode;
    }
    
	};
	$module['scrollIntoView'].__name__ = 'scrollIntoView';

	$module['scrollIntoView'].__bind_type__ = 0;
	$module['scrollIntoView'].__args__ = [null,null,['elem']];
	$module['mash_name_for_glib'] = function(name, joiner) {
		if (typeof joiner == 'undefined') joiner=arguments.callee.__args__[3][1];
		var c,$iter1_nextval,$iter1_idx,res,$iter1_iter,$add2,$add3,$add1,$add6,$iter1_array,$add4,$add5,$iter1_type;
		res = String('');
		$iter1_iter = name;
		if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter.__iter__();
			$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			c = $iter1_nextval;
			if (pyjslib['bool'](c['isupper']())) {
				res = (typeof ($add3=res)==typeof ($add4=(typeof ($add1=joiner)==typeof ($add2=c['lower']()) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					pyjslib['op_add']($add1,$add2))) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					pyjslib['op_add']($add3,$add4));
			}
			else {
				res = (typeof ($add5=res)==typeof ($add6=c) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					pyjslib['op_add']($add5,$add6));
			}
		}
		return res;
	};
	$module['mash_name_for_glib'].__name__ = 'mash_name_for_glib';

	$module['mash_name_for_glib'].__bind_type__ = 0;
	$module['mash_name_for_glib'].__args__ = [null,null,['name'],['joiner', String('-')]];
	$module['removeAttribute'] = function(element, attribute) {


    delete element[attribute];
    
	};
	$module['removeAttribute'].__name__ = 'removeAttribute';

	$module['removeAttribute'].__bind_type__ = 0;
	$module['removeAttribute'].__args__ = [null,null,['element'],['attribute']];
	$module['setAttribute'] = function(element, attribute, value) {


    element[attribute] = value;
    
	};
	$module['setAttribute'].__name__ = 'setAttribute';

	$module['setAttribute'].__bind_type__ = 0;
	$module['setAttribute'].__args__ = [null,null,['element'],['attribute'],['value']];
	$module['setElemAttribute'] = function(element, attribute, value) {

		element['setAttribute'](attribute, value);
		return null;
	};
	$module['setElemAttribute'].__name__ = 'setElemAttribute';

	$module['setElemAttribute'].__bind_type__ = 0;
	$module['setElemAttribute'].__args__ = [null,null,['element'],['attribute'],['value']];
	$module['setBooleanAttribute'] = function(elem, attr, value) {


    elem[attr] = value;
    
	};
	$module['setBooleanAttribute'].__name__ = 'setBooleanAttribute';

	$module['setBooleanAttribute'].__bind_type__ = 0;
	$module['setBooleanAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	$module['setCapture'] = function(elem) {


    DOM.sCaptureElem = elem;
    
	};
	$module['setCapture'].__name__ = 'setCapture';

	$module['setCapture'].__bind_type__ = 0;
	$module['setCapture'].__args__ = [null,null,['elem']];
	$module['setEventListener'] = function(element, listener) {


    element.__listener = listener;
    
	};
	$module['setEventListener'].__name__ = 'setEventListener';

	$module['setEventListener'].__bind_type__ = 0;
	$module['setEventListener'].__args__ = [null,null,['element'],['listener']];
	$module['setInnerHTML'] = function(element, html) {

element.innerHTML = html || "";
	};
	$module['setInnerHTML'].__name__ = 'setInnerHTML';

	$module['setInnerHTML'].__bind_type__ = 0;
	$module['setInnerHTML'].__args__ = [null,null,['element'],['html']];
	$module['setInnerText'] = function(elem, text) {


    // Remove all children first.
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
    // Add a new text node.
    elem.appendChild($doc.createTextNode(text));
    
	};
	$module['setInnerText'].__name__ = 'setInnerText';

	$module['setInnerText'].__bind_type__ = 0;
	$module['setInnerText'].__args__ = [null,null,['elem'],['text']];
	$module['setIntElemAttribute'] = function(elem, attr, value) {

		elem['setAttribute'](attr, pyjslib['str'](value));
		return null;
	};
	$module['setIntElemAttribute'].__name__ = 'setIntElemAttribute';

	$module['setIntElemAttribute'].__bind_type__ = 0;
	$module['setIntElemAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	$module['setIntAttribute'] = function(elem, attr, value) {


    elem[attr] = value;
    
	};
	$module['setIntAttribute'].__name__ = 'setIntAttribute';

	$module['setIntAttribute'].__bind_type__ = 0;
	$module['setIntAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	$module['setIntStyleAttribute'] = function(elem, attr, value) {


    elem.style[attr] = value;
    
	};
	$module['setIntStyleAttribute'].__name__ = 'setIntStyleAttribute';

	$module['setIntStyleAttribute'].__bind_type__ = 0;
	$module['setIntStyleAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	$module['setOptionText'] = function(select, text, index) {
		var option;
		option = select['options']['item'](index);
		option.text = text;
		return null;
	};
	$module['setOptionText'].__name__ = 'setOptionText';

	$module['setOptionText'].__bind_type__ = 0;
	$module['setOptionText'].__args__ = [null,null,['select'],['text'],['index']];
	$module['setStyleAttribute'] = function(element, attr, value) {


    element.style[attr] = value;
    
	};
	$module['setStyleAttribute'].__name__ = 'setStyleAttribute';

	$module['setStyleAttribute'].__bind_type__ = 0;
	$module['setStyleAttribute'].__args__ = [null,null,['element'],['attr'],['value']];
	$module['sinkEvents'] = function(element, bits) {


    element.__eventBits = bits;
    
    element.onclick    = (bits & 0x00001) ? $wnd.__dispatchEvent : null;
    element.ondblclick  = (bits & 0x00002) ? $wnd.__dispatchEvent : null;
    element.onmousedown   = (bits & 0x00004) ? $wnd.__dispatchEvent : null;
    element.onmouseup    = (bits & 0x00008) ? $wnd.__dispatchEvent : null;
    element.onmouseover   = (bits & 0x00010) ? $wnd.__dispatchEvent : null;
    element.onmouseout  = (bits & 0x00020) ? $wnd.__dispatchEvent : null;
    element.onmousemove   = (bits & 0x00040) ? $wnd.__dispatchEvent : null;
    element.onkeydown    = (bits & 0x00080) ? $wnd.__dispatchEvent : null;
    element.onkeypress  = (bits & 0x00100) ? $wnd.__dispatchEvent : null;
    element.onkeyup    = (bits & 0x00200) ? $wnd.__dispatchEvent : null;
    element.onchange      = (bits & 0x00400) ? $wnd.__dispatchEvent : null;
    element.onfocus    = (bits & 0x00800) ? $wnd.__dispatchEvent : null;
    element.onblur      = (bits & 0x01000) ? $wnd.__dispatchEvent : null;
    element.onlosecapture = (bits & 0x02000) ? $wnd.__dispatchEvent : null;
    element.onscroll      = (bits & 0x04000) ? $wnd.__dispatchEvent : null;
    element.onload      = (bits & 0x08000) ? $wnd.__dispatchEvent : null;
    element.onerror    = (bits & 0x10000) ? $wnd.__dispatchEvent : null;
    element.oncontextmenu = (bits & 0x20000) ? $wnd.__dispatchEvent : null;
    
	};
	$module['sinkEvents'].__name__ = 'sinkEvents';

	$module['sinkEvents'].__bind_type__ = 0;
	$module['sinkEvents'].__args__ = [null,null,['element'],['bits']];
	$module['toString'] = function(elem) {


    var temp = elem.cloneNode(true);
    var tempDiv = $doc.createElement("DIV");
    tempDiv.appendChild(temp);
    outer = tempDiv.innerHTML;
    //temp.innerHTML = " ";
    return outer;
    
	};
	$module['toString'].__name__ = 'toString';

	$module['toString'].__bind_type__ = 0;
	$module['toString'].__args__ = [null,null,['elem']];
	$module['dispatchEvent'] = function(event, element, listener) {

		$module.dispatchEventImpl(event, element, listener);
		return null;
	};
	$module['dispatchEvent'].__name__ = 'dispatchEvent';

	$module['dispatchEvent'].__bind_type__ = 0;
	$module['dispatchEvent'].__args__ = [null,null,['event'],['element'],['listener']];
	$module['previewEvent'] = function(evt) {
		var $sub2,$sub1,preview,ret;
		ret = true;
		if (pyjslib['bool']((pyjslib['cmp'](pyjslib['len']($module['sEventPreviewStack']), 0) == 1))) {
			preview = $module['sEventPreviewStack'].__getitem__((typeof ($sub1=pyjslib['len']($module['sEventPreviewStack']))==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				pyjslib['op_sub']($sub1,$sub2)));
			ret = preview['onEventPreview'](evt);
			if (pyjslib['bool'](!pyjslib['bool'](ret))) {
				$module['eventCancelBubble'](evt, true);
				$module['eventPreventDefault'](evt);
			}
		}
		return ret;
	};
	$module['previewEvent'].__name__ = 'previewEvent';

	$module['previewEvent'].__bind_type__ = 0;
	$module['previewEvent'].__args__ = [null,null,['evt']];
	$module['dispatchEventAndCatch'] = function(evt, elem, listener, handler) {

 		return null;
	};
	$module['dispatchEventAndCatch'].__name__ = 'dispatchEventAndCatch';

	$module['dispatchEventAndCatch'].__bind_type__ = 0;
	$module['dispatchEventAndCatch'].__args__ = [null,null,['evt'],['elem'],['listener'],['handler']];
	$module['currentEvent'] = null;
	$module['dispatchEventImpl'] = function(event, element, listener) {
		var prevCurrentEvent;
		if (pyjslib['bool'](pyjslib['op_eq'](element, $module['sCaptureElem']))) {
			if (pyjslib['bool'](pyjslib['op_eq']($module['eventGetType'](event), String('losecapture')))) {
				$module['sCaptureElem'] = null;
			}
		}
		prevCurrentEvent = $module['currentEvent'];
		$module['currentEvent'] = event;
		listener['onBrowserEvent'](event);
		$module['currentEvent'] = prevCurrentEvent;
		return null;
	};
	$module['dispatchEventImpl'].__name__ = 'dispatchEventImpl';

	$module['dispatchEventImpl'].__bind_type__ = 0;
	$module['dispatchEventImpl'].__args__ = [null,null,['event'],['element'],['listener']];
	$module['eventGetCurrentEvent'] = function() {

		return $module['currentEvent'];
	};
	$module['eventGetCurrentEvent'].__name__ = 'eventGetCurrentEvent';

	$module['eventGetCurrentEvent'].__bind_type__ = 0;
	$module['eventGetCurrentEvent'].__args__ = [null,null];
	$module['insertListItem'] = function(select, item, value, index) {
		var option;
		option = $module['createElement'](String('OPTION'));
		$module['setInnerText'](option, item);
		if (pyjslib['bool']((value !== null))) {
			$module['setAttribute'](option, String('value'), value);
		}
		if (pyjslib['bool'](pyjslib['op_eq'](index, (typeof ($usub1=1)=='number'?
			-$usub1:
			pyjslib['op_usub']($usub1))))) {
			$module['appendChild'](select, option);
		}
		else {
			$module['insertChild'](select, option, index);
		}
		return null;
	};
	$module['insertListItem'].__name__ = 'insertListItem';

	$module['insertListItem'].__bind_type__ = 0;
	$module['insertListItem'].__args__ = [null,null,['select'],['item'],['value'],['index']];
	$module['getBodyOffsetTop'] = function() {

		return 0;
	};
	$module['getBodyOffsetTop'].__name__ = 'getBodyOffsetTop';

	$module['getBodyOffsetTop'].__bind_type__ = 0;
	$module['getBodyOffsetTop'].__args__ = [null,null];
	$module['getBodyOffsetLeft'] = function() {

		return 0;
	};
	$module['getBodyOffsetLeft'].__name__ = 'getBodyOffsetLeft';

	$module['getBodyOffsetLeft'].__bind_type__ = 0;
	$module['getBodyOffsetLeft'].__args__ = [null,null];
	if (pyjslib['bool'](pyjslib['list']([String('mozilla'), String('ie6'), String('opera'), String('oldmoz'), String('safari')]).__contains__(((($attr71=$module['sys']['platform']) !== null & ($attr72=$module['sys']).__is_instance__) && typeof $attr71 == 'function'?
				pyjslib['getattr']($attr72, 'platform'):
				$module['sys']['platform'])))) {
		$module['init']();
	}
	return this;
}; /* end pyjamas.DOM */


/* end module: pyjamas.DOM */

/* start module: pyjamas */
var pyjamas;
$pyjs.loaded_modules['pyjamas'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas'].__was_initialized__) return $pyjs.loaded_modules['pyjamas'];
	var $module = pyjamas = $pyjs.loaded_modules["pyjamas"];
	pyjamas.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas';
	var __name__ = pyjamas.__name__ = __mod_name__;

	var attrib_remap = ['apply', 'break', 'call', 'case', 'catch', 'class', 'comment', 'const', 'constructor', 'continue', 'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally', 'for', 'function', 'if', 'import', 'in', 'label', 'name', 'new', 'prototype', 'replace', 'return', 'split', 'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with'];
 	return this;
}; /* end pyjamas */


/* end module: pyjamas */