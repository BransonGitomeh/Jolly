/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// try to import mithril
	var m = __webpack_require__(2)
	var render = __webpack_require__(4)

	var myApp = {
		view:function(){
			return m("div","i am being rendered here")
		}
	}

	console.log(render(myApp))

	m.route.mode = "hash";

	m.route(document.body,"/",{
		"/":__webpack_require__(28),
		"/AboutUs":__webpack_require__(30),
		"/ministries/Children":__webpack_require__(5),
		"/ministries/youth":__webpack_require__(10),
		"/ministries/men":__webpack_require__(11),
		"/ministries/wemen":__webpack_require__(12),
		"/onlineChurch":__webpack_require__(13),
		"/contactus":__webpack_require__(14),
		"/ministries":__webpack_require__(16),

		// online church
		"/onlineChurch/felowship":__webpack_require__(17),
		"/onlineChurch/service":__webpack_require__(18),
		"/onlineChurch/ministries":__webpack_require__(19),

		// giving
		"/onlineChurch/giving":__webpack_require__(20),
			"/onlineChurch/giving/offering":__webpack_require__(21),
			"/onlineChurch/giving/thanksgiving":__webpack_require__(22),
			"/onlineChurch/giving/tithe":__webpack_require__(23),
			"/onlineChurch/giving/loveoffering":__webpack_require__(24),
			"/onlineChurch/giving/firstfruits":__webpack_require__(25),
			"/onlineChurch/giving/development":__webpack_require__(26)
	})


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {var m = (function app(window, undefined) {
		var OBJECT = "[object Object]", ARRAY = "[object Array]", STRING = "[object String]", FUNCTION = "function";
		var type = {}.toString;
		var parser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[.+?\])/g, attrParser = /\[(.+?)(?:=("|'|)(.*?)\2)?\]/;
		var voidElements = /^(AREA|BASE|BR|COL|COMMAND|EMBED|HR|IMG|INPUT|KEYGEN|LINK|META|PARAM|SOURCE|TRACK|WBR)$/;
		var noop = function() {}

		// caching commonly used variables
		var $document, $location, $requestAnimationFrame, $cancelAnimationFrame;

		// self invoking function needed because of the way mocks work
		function initialize(window){
			$document = window.document;
			$location = window.location;
			$cancelAnimationFrame = window.cancelAnimationFrame || window.clearTimeout;
			$requestAnimationFrame = window.requestAnimationFrame || window.setTimeout;
		}

		initialize(window);


		/**
		 * @typedef {String} Tag
		 * A string that looks like -> div.classname#id[param=one][param2=two]
		 * Which describes a DOM node
		 */

		/**
		 *
		 * @param {Tag} The DOM node tag
		 * @param {Object=[]} optional key-value pairs to be mapped to DOM attrs
		 * @param {...mNode=[]} Zero or more Mithril child nodes. Can be an array, or splat (optional)
		 *
		 */
		function m() {
			var args = [].slice.call(arguments);
			var hasAttrs = args[1] != null && type.call(args[1]) === OBJECT && !("tag" in args[1] || "view" in args[1]) && !("subtree" in args[1]);
			var attrs = hasAttrs ? args[1] : {};
			var classAttrName = "class" in attrs ? "class" : "className";
			var cell = {tag: "div", attrs: {}};
			var match, classes = [];
			if (type.call(args[0]) != STRING) throw new Error("selector in m(selector, attrs, children) should be a string")
			while (match = parser.exec(args[0])) {
				if (match[1] === "" && match[2]) cell.tag = match[2];
				else if (match[1] === "#") cell.attrs.id = match[2];
				else if (match[1] === ".") classes.push(match[2]);
				else if (match[3][0] === "[") {
					var pair = attrParser.exec(match[3]);
					cell.attrs[pair[1]] = pair[3] || (pair[2] ? "" :true)
				}
			}

			var children = hasAttrs ? args.slice(2) : args.slice(1);
			if (children.length === 1 && type.call(children[0]) === ARRAY) {
				cell.children = children[0]
			}
			else {
				cell.children = children
			}
			
			for (var attrName in attrs) {
				if (attrs.hasOwnProperty(attrName)) {
					if (attrName === classAttrName && attrs[attrName] != null && attrs[attrName] !== "") {
						classes.push(attrs[attrName])
						cell.attrs[attrName] = "" //create key in correct iteration order
					}
					else cell.attrs[attrName] = attrs[attrName]
				}
			}
			if (classes.length > 0) cell.attrs[classAttrName] = classes.join(" ");
			
			return cell
		}
		function build(parentElement, parentTag, parentCache, parentIndex, data, cached, shouldReattach, index, editable, namespace, configs) {
			//`build` is a recursive function that manages creation/diffing/removal of DOM elements based on comparison between `data` and `cached`
			//the diff algorithm can be summarized as this:
			//1 - compare `data` and `cached`
			//2 - if they are different, copy `data` to `cached` and update the DOM based on what the difference is
			//3 - recursively apply this algorithm for every array and for the children of every virtual element

			//the `cached` data structure is essentially the same as the previous redraw's `data` data structure, with a few additions:
			//- `cached` always has a property called `nodes`, which is a list of DOM elements that correspond to the data represented by the respective virtual element
			//- in order to support attaching `nodes` as a property of `cached`, `cached` is *always* a non-primitive object, i.e. if the data was a string, then cached is a String instance. If data was `null` or `undefined`, cached is `new String("")`
			//- `cached also has a `configContext` property, which is the state storage object exposed by config(element, isInitialized, context)
			//- when `cached` is an Object, it represents a virtual element; when it's an Array, it represents a list of elements; when it's a String, Number or Boolean, it represents a text node

			//`parentElement` is a DOM element used for W3C DOM API calls
			//`parentTag` is only used for handling a corner case for textarea values
			//`parentCache` is used to remove nodes in some multi-node cases
			//`parentIndex` and `index` are used to figure out the offset of nodes. They're artifacts from before arrays started being flattened and are likely refactorable
			//`data` and `cached` are, respectively, the new and old nodes being diffed
			//`shouldReattach` is a flag indicating whether a parent node was recreated (if so, and if this node is reused, then this node must reattach itself to the new parent)
			//`editable` is a flag that indicates whether an ancestor is contenteditable
			//`namespace` indicates the closest HTML namespace as it cascades down from an ancestor
			//`configs` is a list of config functions to run after the topmost `build` call finishes running

			//there's logic that relies on the assumption that null and undefined data are equivalent to empty strings
			//- this prevents lifecycle surprises from procedural helpers that mix implicit and explicit return statements (e.g. function foo() {if (cond) return m("div")}
			//- it simplifies diffing code
			//data.toString() might throw or return null if data is the return value of Console.log in Firefox (behavior depends on version)
			try {if (data == null || data.toString() == null) data = "";} catch (e) {data = ""}
			if (data.subtree === "retain") return cached;
			var cachedType = type.call(cached), dataType = type.call(data);
			if (cached == null || cachedType !== dataType) {
				if (cached != null) {
					if (parentCache && parentCache.nodes) {
						var offset = index - parentIndex;
						var end = offset + (dataType === ARRAY ? data : cached.nodes).length;
						clear(parentCache.nodes.slice(offset, end), parentCache.slice(offset, end))
					}
					else if (cached.nodes) clear(cached.nodes, cached)
				}
				cached = new data.constructor;
				if (cached.tag) cached = {}; //if constructor creates a virtual dom element, use a blank object as the base cached node instead of copying the virtual el (#277)
				cached.nodes = []
			}

			if (dataType === ARRAY) {
				//recursively flatten array
				for (var i = 0, len = data.length; i < len; i++) {
					if (type.call(data[i]) === ARRAY) {
						data = data.concat.apply([], data);
						i-- //check current index again and flatten until there are no more nested arrays at that index
						len = data.length
					}
				}
				
				var nodes = [], intact = cached.length === data.length, subArrayCount = 0;

				//keys algorithm: sort elements without recreating them if keys are present
				//1) create a map of all existing keys, and mark all for deletion
				//2) add new keys to map and mark them for addition
				//3) if key exists in new list, change action from deletion to a move
				//4) for each key, handle its corresponding action as marked in previous steps
				var DELETION = 1, INSERTION = 2 , MOVE = 3;
				var existing = {}, shouldMaintainIdentities = false;
				for (var i = 0; i < cached.length; i++) {
					if (cached[i] && cached[i].attrs && cached[i].attrs.key != null) {
						shouldMaintainIdentities = true;
						existing[cached[i].attrs.key] = {action: DELETION, index: i}
					}
				}
				
				var guid = 0
				for (var i = 0, len = data.length; i < len; i++) {
					if (data[i] && data[i].attrs && data[i].attrs.key != null) {
						for (var j = 0, len = data.length; j < len; j++) {
							if (data[j] && data[j].attrs && data[j].attrs.key == null) data[j].attrs.key = "__mithril__" + guid++
						}
						break
					}
				}
				
				if (shouldMaintainIdentities) {
					var keysDiffer = false
					if (data.length != cached.length) keysDiffer = true
					else for (var i = 0, cachedCell, dataCell; cachedCell = cached[i], dataCell = data[i]; i++) {
						if (cachedCell.attrs && dataCell.attrs && cachedCell.attrs.key != dataCell.attrs.key) {
							keysDiffer = true
							break
						}
					}
					
					if (keysDiffer) {
						for (var i = 0, len = data.length; i < len; i++) {
							if (data[i] && data[i].attrs) {
								if (data[i].attrs.key != null) {
									var key = data[i].attrs.key;
									if (!existing[key]) existing[key] = {action: INSERTION, index: i};
									else existing[key] = {
										action: MOVE,
										index: i,
										from: existing[key].index,
										element: cached.nodes[existing[key].index] || $document.createElement("div")
									}
								}
							}
						}
						var actions = []
						for (var prop in existing) actions.push(existing[prop])
						var changes = actions.sort(sortChanges);
						var newCached = new Array(cached.length)
						newCached.nodes = cached.nodes.slice()

						for (var i = 0, change; change = changes[i]; i++) {
							if (change.action === DELETION) {
								clear(cached[change.index].nodes, cached[change.index]);
								newCached.splice(change.index, 1)
							}
							if (change.action === INSERTION) {
								var dummy = $document.createElement("div");
								dummy.key = data[change.index].attrs.key;
								parentElement.insertBefore(dummy, parentElement.childNodes[change.index] || null);
								newCached.splice(change.index, 0, {attrs: {key: data[change.index].attrs.key}, nodes: [dummy]})
								newCached.nodes[change.index] = dummy
							}

							if (change.action === MOVE) {
								if (parentElement.childNodes[change.index] !== change.element && change.element !== null) {
									parentElement.insertBefore(change.element, parentElement.childNodes[change.index] || null)
								}
								newCached[change.index] = cached[change.from]
								newCached.nodes[change.index] = change.element
							}
						}
						cached = newCached;
					}
				}
				//end key algorithm

				for (var i = 0, cacheCount = 0, len = data.length; i < len; i++) {
					//diff each item in the array
					var item = build(parentElement, parentTag, cached, index, data[i], cached[cacheCount], shouldReattach, index + subArrayCount || subArrayCount, editable, namespace, configs);
					if (item === undefined) continue;
					if (!item.nodes.intact) intact = false;
					if (item.$trusted) {
						//fix offset of next element if item was a trusted string w/ more than one html element
						//the first clause in the regexp matches elements
						//the second clause (after the pipe) matches text nodes
						subArrayCount += (item.match(/<[^\/]|\>\s*[^<]/g) || [0]).length
					}
					else subArrayCount += type.call(item) === ARRAY ? item.length : 1;
					cached[cacheCount++] = item
				}
				if (!intact) {
					//diff the array itself
					
					//update the list of DOM nodes by collecting the nodes from each item
					for (var i = 0, len = data.length; i < len; i++) {
						if (cached[i] != null) nodes.push.apply(nodes, cached[i].nodes)
					}
					//remove items from the end of the array if the new array is shorter than the old one
					//if errors ever happen here, the issue is most likely a bug in the construction of the `cached` data structure somewhere earlier in the program
					for (var i = 0, node; node = cached.nodes[i]; i++) {
						if (node.parentNode != null && nodes.indexOf(node) < 0) clear([node], [cached[i]])
					}
					if (data.length < cached.length) cached.length = data.length;
					cached.nodes = nodes
				}
			}
			else if (data != null && dataType === OBJECT) {
				var views = [], controllers = []
				while (data.view) {
					var view = data.view.$original || data.view
					var controllerIndex = m.redraw.strategy() == "diff" && cached.views ? cached.views.indexOf(view) : -1
					var controller = controllerIndex > -1 ? cached.controllers[controllerIndex] : new (data.controller || noop)
					var key = data && data.attrs && data.attrs.key
					data = pendingRequests == 0 || (cached && cached.controllers && cached.controllers.indexOf(controller) > -1) ? data.view(controller) : {tag: "placeholder"}
					if (data.subtree === "retain") return cached;
					if (key) {
						if (!data.attrs) data.attrs = {}
						data.attrs.key = key
					}
					if (controller.onunload) unloaders.push({controller: controller, handler: controller.onunload})
					views.push(view)
					controllers.push(controller)
				}
				if (!data.tag && controllers.length) throw new Error("Component template must return a virtual element, not an array, string, etc.")
				if (!data.attrs) data.attrs = {};
				if (!cached.attrs) cached.attrs = {};

				var dataAttrKeys = Object.keys(data.attrs)
				var hasKeys = dataAttrKeys.length > ("key" in data.attrs ? 1 : 0)
				//if an element is different enough from the one in cache, recreate it
				if (data.tag != cached.tag || dataAttrKeys.sort().join() != Object.keys(cached.attrs).sort().join() || data.attrs.id != cached.attrs.id || data.attrs.key != cached.attrs.key || (m.redraw.strategy() == "all" && (!cached.configContext || cached.configContext.retain !== true)) || (m.redraw.strategy() == "diff" && cached.configContext && cached.configContext.retain === false)) {
					if (cached.nodes.length) clear(cached.nodes);
					if (cached.configContext && typeof cached.configContext.onunload === FUNCTION) cached.configContext.onunload()
					if (cached.controllers) {
						for (var i = 0, controller; controller = cached.controllers[i]; i++) {
							if (typeof controller.onunload === FUNCTION) controller.onunload({preventDefault: noop})
						}
					}
				}
				if (type.call(data.tag) != STRING) return;

				var node, isNew = cached.nodes.length === 0;
				if (data.attrs.xmlns) namespace = data.attrs.xmlns;
				else if (data.tag === "svg") namespace = "http://www.w3.org/2000/svg";
				else if (data.tag === "math") namespace = "http://www.w3.org/1998/Math/MathML";
				
				if (isNew) {
					if (data.attrs.is) node = namespace === undefined ? $document.createElement(data.tag, data.attrs.is) : $document.createElementNS(namespace, data.tag, data.attrs.is);
					else node = namespace === undefined ? $document.createElement(data.tag) : $document.createElementNS(namespace, data.tag);
					cached = {
						tag: data.tag,
						//set attributes first, then create children
						attrs: hasKeys ? setAttributes(node, data.tag, data.attrs, {}, namespace) : data.attrs,
						children: data.children != null && data.children.length > 0 ?
							build(node, data.tag, undefined, undefined, data.children, cached.children, true, 0, data.attrs.contenteditable ? node : editable, namespace, configs) :
							data.children,
						nodes: [node]
					};
					if (controllers.length) {
						cached.views = views
						cached.controllers = controllers
						for (var i = 0, controller; controller = controllers[i]; i++) {
							if (controller.onunload && controller.onunload.$old) controller.onunload = controller.onunload.$old
							if (pendingRequests && controller.onunload) {
								var onunload = controller.onunload
								controller.onunload = noop
								controller.onunload.$old = onunload
							}
						}
					}
					
					if (cached.children && !cached.children.nodes) cached.children.nodes = [];
					//edge case: setting value on <select> doesn't work before children exist, so set it again after children have been created
					if (data.tag === "select" && "value" in data.attrs) setAttributes(node, data.tag, {value: data.attrs.value}, {}, namespace);
					parentElement.insertBefore(node, parentElement.childNodes[index] || null)
				}
				else {
					node = cached.nodes[0];
					if (hasKeys) setAttributes(node, data.tag, data.attrs, cached.attrs, namespace);
					cached.children = build(node, data.tag, undefined, undefined, data.children, cached.children, false, 0, data.attrs.contenteditable ? node : editable, namespace, configs);
					cached.nodes.intact = true;
					if (controllers.length) {
						cached.views = views
						cached.controllers = controllers
					}
					if (shouldReattach === true && node != null) parentElement.insertBefore(node, parentElement.childNodes[index] || null)
				}
				//schedule configs to be called. They are called after `build` finishes running
				if (typeof data.attrs["config"] === FUNCTION) {
					var context = cached.configContext = cached.configContext || {};

					// bind
					var callback = function(data, args) {
						return function() {
							return data.attrs["config"].apply(data, args)
						}
					};
					configs.push(callback(data, [node, !isNew, context, cached]))
				}
			}
			else if (typeof data != FUNCTION) {
				//handle text nodes
				var nodes;
				if (cached.nodes.length === 0) {
					if (data.$trusted) {
						nodes = injectHTML(parentElement, index, data)
					}
					else {
						nodes = [$document.createTextNode(data)];
						if (!parentElement.nodeName.match(voidElements)) parentElement.insertBefore(nodes[0], parentElement.childNodes[index] || null)
					}
					cached = "string number boolean".indexOf(typeof data) > -1 ? new data.constructor(data) : data;
					cached.nodes = nodes
				}
				else if (cached.valueOf() !== data.valueOf() || shouldReattach === true) {
					nodes = cached.nodes;
					if (!editable || editable !== $document.activeElement) {
						if (data.$trusted) {
							clear(nodes, cached);
							nodes = injectHTML(parentElement, index, data)
						}
						else {
							//corner case: replacing the nodeValue of a text node that is a child of a textarea/contenteditable doesn't work
							//we need to update the value property of the parent textarea or the innerHTML of the contenteditable element instead
							if (parentTag === "textarea") parentElement.value = data;
							else if (editable) editable.innerHTML = data;
							else {
								if (nodes[0].nodeType === 1 || nodes.length > 1) { //was a trusted string
									clear(cached.nodes, cached);
									nodes = [$document.createTextNode(data)]
								}
								parentElement.insertBefore(nodes[0], parentElement.childNodes[index] || null);
								nodes[0].nodeValue = data
							}
						}
					}
					cached = new data.constructor(data);
					cached.nodes = nodes
				}
				else cached.nodes.intact = true
			}

			return cached
		}
		function sortChanges(a, b) {return a.action - b.action || a.index - b.index}
		function setAttributes(node, tag, dataAttrs, cachedAttrs, namespace) {
			for (var attrName in dataAttrs) {
				var dataAttr = dataAttrs[attrName];
				var cachedAttr = cachedAttrs[attrName];
				if (!(attrName in cachedAttrs) || (cachedAttr !== dataAttr)) {
					cachedAttrs[attrName] = dataAttr;
					try {
						//`config` isn't a real attributes, so ignore it
						if (attrName === "config" || attrName == "key") continue;
						//hook event handlers to the auto-redrawing system
						else if (typeof dataAttr === FUNCTION && attrName.indexOf("on") === 0) {
							node[attrName] = autoredraw(dataAttr, node)
						}
						//handle `style: {...}`
						else if (attrName === "style" && dataAttr != null && type.call(dataAttr) === OBJECT) {
							for (var rule in dataAttr) {
								if (cachedAttr == null || cachedAttr[rule] !== dataAttr[rule]) node.style[rule] = dataAttr[rule]
							}
							for (var rule in cachedAttr) {
								if (!(rule in dataAttr)) node.style[rule] = ""
							}
						}
						//handle SVG
						else if (namespace != null) {
							if (attrName === "href") node.setAttributeNS("http://www.w3.org/1999/xlink", "href", dataAttr);
							else if (attrName === "className") node.setAttribute("class", dataAttr);
							else node.setAttribute(attrName, dataAttr)
						}
						//handle cases that are properties (but ignore cases where we should use setAttribute instead)
						//- list and form are typically used as strings, but are DOM element references in js
						//- when using CSS selectors (e.g. `m("[style='']")`), style is used as a string, but it's an object in js
						else if (attrName in node && !(attrName === "list" || attrName === "style" || attrName === "form" || attrName === "type" || attrName === "width" || attrName === "height")) {
							//#348 don't set the value if not needed otherwise cursor placement breaks in Chrome
							if (tag !== "input" || node[attrName] !== dataAttr) node[attrName] = dataAttr
						}
						else node.setAttribute(attrName, dataAttr)
					}
					catch (e) {
						//swallow IE's invalid argument errors to mimic HTML's fallback-to-doing-nothing-on-invalid-attributes behavior
						if (e.message.indexOf("Invalid argument") < 0) throw e
					}
				}
				//#348 dataAttr may not be a string, so use loose comparison (double equal) instead of strict (triple equal)
				else if (attrName === "value" && tag === "input" && node.value != dataAttr) {
					node.value = dataAttr
				}
			}
			return cachedAttrs
		}
		function clear(nodes, cached) {
			for (var i = nodes.length - 1; i > -1; i--) {
				if (nodes[i] && nodes[i].parentNode) {
					try {nodes[i].parentNode.removeChild(nodes[i])}
					catch (e) {} //ignore if this fails due to order of events (see http://stackoverflow.com/questions/21926083/failed-to-execute-removechild-on-node)
					cached = [].concat(cached);
					if (cached[i]) unload(cached[i])
				}
			}
			if (nodes.length != 0) nodes.length = 0
		}
		function unload(cached) {
			if (cached.configContext && typeof cached.configContext.onunload === FUNCTION) {
				cached.configContext.onunload();
				cached.configContext.onunload = null
			}
			if (cached.controllers) {
				for (var i = 0, controller; controller = cached.controllers[i]; i++) {
					if (typeof controller.onunload === FUNCTION) controller.onunload({preventDefault: noop});
				}
			}
			if (cached.children) {
				if (type.call(cached.children) === ARRAY) {
					for (var i = 0, child; child = cached.children[i]; i++) unload(child)
				}
				else if (cached.children.tag) unload(cached.children)
			}
		}
		function injectHTML(parentElement, index, data) {
			var nextSibling = parentElement.childNodes[index];
			if (nextSibling) {
				var isElement = nextSibling.nodeType != 1;
				var placeholder = $document.createElement("span");
				if (isElement) {
					parentElement.insertBefore(placeholder, nextSibling || null);
					placeholder.insertAdjacentHTML("beforebegin", data);
					parentElement.removeChild(placeholder)
				}
				else nextSibling.insertAdjacentHTML("beforebegin", data)
			}
			else parentElement.insertAdjacentHTML("beforeend", data);
			var nodes = [];
			while (parentElement.childNodes[index] !== nextSibling) {
				nodes.push(parentElement.childNodes[index]);
				index++
			}
			return nodes
		}
		function autoredraw(callback, object) {
			return function(e) {
				e = e || event;
				m.redraw.strategy("diff");
				m.startComputation();
				try {return callback.call(object, e)}
				finally {
					endFirstComputation()
				}
			}
		}

		var html;
		var documentNode = {
			appendChild: function(node) {
				if (html === undefined) html = $document.createElement("html");
				if ($document.documentElement && $document.documentElement !== node) {
					$document.replaceChild(node, $document.documentElement)
				}
				else $document.appendChild(node);
				this.childNodes = $document.childNodes
			},
			insertBefore: function(node) {
				this.appendChild(node)
			},
			childNodes: []
		};
		var nodeCache = [], cellCache = {};
		m.render = function(root, cell, forceRecreation) {
			var configs = [];
			if (!root) throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");
			var id = getCellCacheKey(root);
			var isDocumentRoot = root === $document;
			var node = isDocumentRoot || root === $document.documentElement ? documentNode : root;
			if (isDocumentRoot && cell.tag != "html") cell = {tag: "html", attrs: {}, children: cell};
			if (cellCache[id] === undefined) clear(node.childNodes);
			if (forceRecreation === true) reset(root);
			cellCache[id] = build(node, null, undefined, undefined, cell, cellCache[id], false, 0, null, undefined, configs);
			for (var i = 0, len = configs.length; i < len; i++) configs[i]()
		};
		function getCellCacheKey(element) {
			var index = nodeCache.indexOf(element);
			return index < 0 ? nodeCache.push(element) - 1 : index
		}

		m.trust = function(value) {
			value = new String(value);
			value.$trusted = true;
			return value
		};

		function gettersetter(store) {
			var prop = function() {
				if (arguments.length) store = arguments[0];
				return store
			};

			prop.toJSON = function() {
				return store
			};

			return prop
		}

		m.prop = function (store) {
			//note: using non-strict equality check here because we're checking if store is null OR undefined
			if (((store != null && type.call(store) === OBJECT) || typeof store === FUNCTION) && typeof store.then === FUNCTION) {
				return propify(store)
			}

			return gettersetter(store)
		};

		var roots = [], components = [], controllers = [], lastRedrawId = null, lastRedrawCallTime = 0, computePreRedrawHook = null, computePostRedrawHook = null, prevented = false, topComponent, unloaders = [];
		var FRAME_BUDGET = 16; //60 frames per second = 1 call per 16 ms
		function parameterize(component, args) {
			var controller = function() {
				return (component.controller || noop).apply(this, args) || this
			}
			var view = function(ctrl) {
				if (arguments.length > 1) args = args.concat([].slice.call(arguments, 1))
				return component.view.apply(component, args ? [ctrl].concat(args) : [ctrl])
			}
			view.$original = component.view
			var output = {controller: controller, view: view}
			if (args[0] && args[0].key != null) output.attrs = {key: args[0].key}
			return output
		}
		m.component = function(component) {
			return parameterize(component, [].slice.call(arguments, 1))
		}
		m.mount = m.module = function(root, component) {
			if (!root) throw new Error("Please ensure the DOM element exists before rendering a template into it.");
			var index = roots.indexOf(root);
			if (index < 0) index = roots.length;
			
			var isPrevented = false;
			var event = {preventDefault: function() {
				isPrevented = true;
				computePreRedrawHook = computePostRedrawHook = null;
			}};
			for (var i = 0, unloader; unloader = unloaders[i]; i++) {
				unloader.handler.call(unloader.controller, event)
				unloader.controller.onunload = null
			}
			if (isPrevented) {
				for (var i = 0, unloader; unloader = unloaders[i]; i++) unloader.controller.onunload = unloader.handler
			}
			else unloaders = []
			
			if (controllers[index] && typeof controllers[index].onunload === FUNCTION) {
				controllers[index].onunload(event)
			}
			
			if (!isPrevented) {
				m.redraw.strategy("all");
				m.startComputation();
				roots[index] = root;
				if (arguments.length > 2) component = subcomponent(component, [].slice.call(arguments, 2))
				var currentComponent = topComponent = component = component || {controller: function() {}};
				var constructor = component.controller || noop
				var controller = new constructor;
				//controllers may call m.mount recursively (via m.route redirects, for example)
				//this conditional ensures only the last recursive m.mount call is applied
				if (currentComponent === topComponent) {
					controllers[index] = controller;
					components[index] = component
				}
				endFirstComputation();
				return controllers[index]
			}
		};
		var redrawing = false
		m.redraw = function(force) {
			if (redrawing) return
			redrawing = true
			//lastRedrawId is a positive number if a second redraw is requested before the next animation frame
			//lastRedrawID is null if it's the first redraw and not an event handler
			if (lastRedrawId && force !== true) {
				//when setTimeout: only reschedule redraw if time between now and previous redraw is bigger than a frame, otherwise keep currently scheduled timeout
				//when rAF: always reschedule redraw
				if ($requestAnimationFrame === window.requestAnimationFrame || new Date - lastRedrawCallTime > FRAME_BUDGET) {
					if (lastRedrawId > 0) $cancelAnimationFrame(lastRedrawId);
					lastRedrawId = $requestAnimationFrame(redraw, FRAME_BUDGET)
				}
			}
			else {
				redraw();
				lastRedrawId = $requestAnimationFrame(function() {lastRedrawId = null}, FRAME_BUDGET)
			}
			redrawing = false
		};
		m.redraw.strategy = m.prop();
		function redraw() {
			if (computePreRedrawHook) {
				computePreRedrawHook()
				computePreRedrawHook = null
			}
			for (var i = 0, root; root = roots[i]; i++) {
				if (controllers[i]) {
					var args = components[i].controller && components[i].controller.$$args ? [controllers[i]].concat(components[i].controller.$$args) : [controllers[i]]
					m.render(root, components[i].view ? components[i].view(controllers[i], args) : "")
				}
			}
			//after rendering within a routed context, we need to scroll back to the top, and fetch the document title for history.pushState
			if (computePostRedrawHook) {
				computePostRedrawHook();
				computePostRedrawHook = null
			}
			lastRedrawId = null;
			lastRedrawCallTime = new Date;
			m.redraw.strategy("diff")
		}

		var pendingRequests = 0;
		m.startComputation = function() {pendingRequests++};
		m.endComputation = function() {
			pendingRequests = Math.max(pendingRequests - 1, 0);
			if (pendingRequests === 0) m.redraw()
		};
		var endFirstComputation = function() {
			if (m.redraw.strategy() == "none") {
				pendingRequests--
				m.redraw.strategy("diff")
			}
			else m.endComputation();
		}

		m.withAttr = function(prop, withAttrCallback) {
			return function(e) {
				e = e || event;
				var currentTarget = e.currentTarget || this;
				withAttrCallback(prop in currentTarget ? currentTarget[prop] : currentTarget.getAttribute(prop))
			}
		};

		//routing
		var modes = {pathname: "", hash: "#", search: "?"};
		var redirect = noop, routeParams, currentRoute, isDefaultRoute = false;
		m.route = function() {
			//m.route()
			if (arguments.length === 0) return currentRoute;
			//m.route(el, defaultRoute, routes)
			else if (arguments.length === 3 && type.call(arguments[1]) === STRING) {
				var root = arguments[0], defaultRoute = arguments[1], router = arguments[2];
				redirect = function(source) {
					var path = currentRoute = normalizeRoute(source);
					if (!routeByValue(root, router, path)) {
						if (isDefaultRoute) throw new Error("Ensure the default route matches one of the routes defined in m.route")
						isDefaultRoute = true
						m.route(defaultRoute, true)
						isDefaultRoute = false
					}
				};
				var listener = m.route.mode === "hash" ? "onhashchange" : "onpopstate";
				window[listener] = function() {
					var path = $location[m.route.mode]
					if (m.route.mode === "pathname") path += $location.search
					if (currentRoute != normalizeRoute(path)) {
						redirect(path)
					}
				};
				computePreRedrawHook = setScroll;
				window[listener]()
			}
			//config: m.route
			else if (arguments[0].addEventListener || arguments[0].attachEvent) {
				var element = arguments[0];
				var isInitialized = arguments[1];
				var context = arguments[2];
				var vdom = arguments[3];
				element.href = (m.route.mode !== 'pathname' ? $location.pathname : '') + modes[m.route.mode] + vdom.attrs.href;
				if (element.addEventListener) {
					element.removeEventListener("click", routeUnobtrusive);
					element.addEventListener("click", routeUnobtrusive)
				}
				else {
					element.detachEvent("onclick", routeUnobtrusive);
					element.attachEvent("onclick", routeUnobtrusive)
				}
			}
			//m.route(route, params, shouldReplaceHistoryEntry)
			else if (type.call(arguments[0]) === STRING) {
				var oldRoute = currentRoute;
				currentRoute = arguments[0];
				var args = arguments[1] || {}
				var queryIndex = currentRoute.indexOf("?")
				var params = queryIndex > -1 ? parseQueryString(currentRoute.slice(queryIndex + 1)) : {}
				for (var i in args) params[i] = args[i]
				var querystring = buildQueryString(params)
				var currentPath = queryIndex > -1 ? currentRoute.slice(0, queryIndex) : currentRoute
				if (querystring) currentRoute = currentPath + (currentPath.indexOf("?") === -1 ? "?" : "&") + querystring;

				var shouldReplaceHistoryEntry = (arguments.length === 3 ? arguments[2] : arguments[1]) === true || oldRoute === arguments[0];

				if (window.history.pushState) {
					computePreRedrawHook = setScroll
					computePostRedrawHook = function() {
						window.history[shouldReplaceHistoryEntry ? "replaceState" : "pushState"](null, $document.title, modes[m.route.mode] + currentRoute);
					};
					redirect(modes[m.route.mode] + currentRoute)
				}
				else {
					$location[m.route.mode] = currentRoute
					redirect(modes[m.route.mode] + currentRoute)
				}
			}
		};
		m.route.param = function(key) {
			if (!routeParams) throw new Error("You must call m.route(element, defaultRoute, routes) before calling m.route.param()")
			return routeParams[key]
		};
		m.route.mode = "search";
		function normalizeRoute(route) {
			return route.slice(modes[m.route.mode].length)
		}
		function routeByValue(root, router, path) {
			routeParams = {};

			var queryStart = path.indexOf("?");
			if (queryStart !== -1) {
				routeParams = parseQueryString(path.substr(queryStart + 1, path.length));
				path = path.substr(0, queryStart)
			}

			// Get all routes and check if there's
			// an exact match for the current path
			var keys = Object.keys(router);
			var index = keys.indexOf(path);
			if(index !== -1){
				m.mount(root, router[keys [index]]);
				return true;
			}

			for (var route in router) {
				if (route === path) {
					m.mount(root, router[route]);
					return true
				}

				var matcher = new RegExp("^" + route.replace(/:[^\/]+?\.{3}/g, "(.*?)").replace(/:[^\/]+/g, "([^\\/]+)") + "\/?$");

				if (matcher.test(path)) {
					path.replace(matcher, function() {
						var keys = route.match(/:[^\/]+/g) || [];
						var values = [].slice.call(arguments, 1, -2);
						for (var i = 0, len = keys.length; i < len; i++) routeParams[keys[i].replace(/:|\./g, "")] = decodeURIComponent(values[i])
						m.mount(root, router[route])
					});
					return true
				}
			}
		}
		function routeUnobtrusive(e) {
			e = e || event;
			if (e.ctrlKey || e.metaKey || e.which === 2) return;
			if (e.preventDefault) e.preventDefault();
			else e.returnValue = false;
			var currentTarget = e.currentTarget || e.srcElement;
			var args = m.route.mode === "pathname" && currentTarget.search ? parseQueryString(currentTarget.search.slice(1)) : {};
			while (currentTarget && currentTarget.nodeName.toUpperCase() != "A") currentTarget = currentTarget.parentNode
			m.route(currentTarget[m.route.mode].slice(modes[m.route.mode].length), args)
		}
		function setScroll() {
			if (m.route.mode != "hash" && $location.hash) $location.hash = $location.hash;
			else window.scrollTo(0, 0)
		}
		function buildQueryString(object, prefix) {
			var duplicates = {}
			var str = []
			for (var prop in object) {
				var key = prefix ? prefix + "[" + prop + "]" : prop
				var value = object[prop]
				var valueType = type.call(value)
				var pair = (value === null) ? encodeURIComponent(key) :
					valueType === OBJECT ? buildQueryString(value, key) :
					valueType === ARRAY ? value.reduce(function(memo, item) {
						if (!duplicates[key]) duplicates[key] = {}
						if (!duplicates[key][item]) {
							duplicates[key][item] = true
							return memo.concat(encodeURIComponent(key) + "=" + encodeURIComponent(item))
						}
						return memo
					}, []).join("&") :
					encodeURIComponent(key) + "=" + encodeURIComponent(value)
				if (value !== undefined) str.push(pair)
			}
			return str.join("&")
		}
		function parseQueryString(str) {
			if (str.charAt(0) === "?") str = str.substring(1);
			
			var pairs = str.split("&"), params = {};
			for (var i = 0, len = pairs.length; i < len; i++) {
				var pair = pairs[i].split("=");
				var key = decodeURIComponent(pair[0])
				var value = pair.length == 2 ? decodeURIComponent(pair[1]) : null
				if (params[key] != null) {
					if (type.call(params[key]) !== ARRAY) params[key] = [params[key]]
					params[key].push(value)
				}
				else params[key] = value
			}
			return params
		}
		m.route.buildQueryString = buildQueryString
		m.route.parseQueryString = parseQueryString
		
		function reset(root) {
			var cacheKey = getCellCacheKey(root);
			clear(root.childNodes, cellCache[cacheKey]);
			cellCache[cacheKey] = undefined
		}

		m.deferred = function () {
			var deferred = new Deferred();
			deferred.promise = propify(deferred.promise);
			return deferred
		};
		function propify(promise, initialValue) {
			var prop = m.prop(initialValue);
			promise.then(prop);
			prop.then = function(resolve, reject) {
				return propify(promise.then(resolve, reject), initialValue)
			};
			return prop
		}
		//Promiz.mithril.js | Zolmeister | MIT
		//a modified version of Promiz.js, which does not conform to Promises/A+ for two reasons:
		//1) `then` callbacks are called synchronously (because setTimeout is too slow, and the setImmediate polyfill is too big
		//2) throwing subclasses of Error cause the error to be bubbled up instead of triggering rejection (because the spec does not account for the important use case of default browser error handling, i.e. message w/ line number)
		function Deferred(successCallback, failureCallback) {
			var RESOLVING = 1, REJECTING = 2, RESOLVED = 3, REJECTED = 4;
			var self = this, state = 0, promiseValue = 0, next = [];

			self["promise"] = {};

			self["resolve"] = function(value) {
				if (!state) {
					promiseValue = value;
					state = RESOLVING;

					fire()
				}
				return this
			};

			self["reject"] = function(value) {
				if (!state) {
					promiseValue = value;
					state = REJECTING;

					fire()
				}
				return this
			};

			self.promise["then"] = function(successCallback, failureCallback) {
				var deferred = new Deferred(successCallback, failureCallback);
				if (state === RESOLVED) {
					deferred.resolve(promiseValue)
				}
				else if (state === REJECTED) {
					deferred.reject(promiseValue)
				}
				else {
					next.push(deferred)
				}
				return deferred.promise
			};

			function finish(type) {
				state = type || REJECTED;
				next.map(function(deferred) {
					state === RESOLVED && deferred.resolve(promiseValue) || deferred.reject(promiseValue)
				})
			}

			function thennable(then, successCallback, failureCallback, notThennableCallback) {
				if (((promiseValue != null && type.call(promiseValue) === OBJECT) || typeof promiseValue === FUNCTION) && typeof then === FUNCTION) {
					try {
						// count protects against abuse calls from spec checker
						var count = 0;
						then.call(promiseValue, function(value) {
							if (count++) return;
							promiseValue = value;
							successCallback()
						}, function (value) {
							if (count++) return;
							promiseValue = value;
							failureCallback()
						})
					}
					catch (e) {
						m.deferred.onerror(e);
						promiseValue = e;
						failureCallback()
					}
				} else {
					notThennableCallback()
				}
			}

			function fire() {
				// check if it's a thenable
				var then;
				try {
					then = promiseValue && promiseValue.then
				}
				catch (e) {
					m.deferred.onerror(e);
					promiseValue = e;
					state = REJECTING;
					return fire()
				}
				thennable(then, function() {
					state = RESOLVING;
					fire()
				}, function() {
					state = REJECTING;
					fire()
				}, function() {
					try {
						if (state === RESOLVING && typeof successCallback === FUNCTION) {
							promiseValue = successCallback(promiseValue)
						}
						else if (state === REJECTING && typeof failureCallback === "function") {
							promiseValue = failureCallback(promiseValue);
							state = RESOLVING
						}
					}
					catch (e) {
						m.deferred.onerror(e);
						promiseValue = e;
						return finish()
					}

					if (promiseValue === self) {
						promiseValue = TypeError();
						finish()
					}
					else {
						thennable(then, function () {
							finish(RESOLVED)
						}, finish, function () {
							finish(state === RESOLVING && RESOLVED)
						})
					}
				})
			}
		}
		m.deferred.onerror = function(e) {
			if (type.call(e) === "[object Error]" && !e.constructor.toString().match(/ Error/)) throw e
		};

		m.sync = function(args) {
			var method = "resolve";
			function synchronizer(pos, resolved) {
				return function(value) {
					results[pos] = value;
					if (!resolved) method = "reject";
					if (--outstanding === 0) {
						deferred.promise(results);
						deferred[method](results)
					}
					return value
				}
			}

			var deferred = m.deferred();
			var outstanding = args.length;
			var results = new Array(outstanding);
			if (args.length > 0) {
				for (var i = 0; i < args.length; i++) {
					args[i].then(synchronizer(i, true), synchronizer(i, false))
				}
			}
			else deferred.resolve([]);

			return deferred.promise
		};
		function identity(value) {return value}

		function ajax(options) {
			if (options.dataType && options.dataType.toLowerCase() === "jsonp") {
				var callbackKey = "mithril_callback_" + new Date().getTime() + "_" + (Math.round(Math.random() * 1e16)).toString(36);
				var script = $document.createElement("script");

				window[callbackKey] = function(resp) {
					script.parentNode.removeChild(script);
					options.onload({
						type: "load",
						target: {
							responseText: resp
						}
					});
					window[callbackKey] = undefined
				};

				script.onerror = function(e) {
					script.parentNode.removeChild(script);

					options.onerror({
						type: "error",
						target: {
							status: 500,
							responseText: JSON.stringify({error: "Error making jsonp request"})
						}
					});
					window[callbackKey] = undefined;

					return false
				};

				script.onload = function(e) {
					return false
				};

				script.src = options.url
					+ (options.url.indexOf("?") > 0 ? "&" : "?")
					+ (options.callbackKey ? options.callbackKey : "callback")
					+ "=" + callbackKey
					+ "&" + buildQueryString(options.data || {});
				$document.body.appendChild(script)
			}
			else {
				var xhr = new window.XMLHttpRequest;
				xhr.open(options.method, options.url, true, options.user, options.password);
				xhr.onreadystatechange = function() {
					if (xhr.readyState === 4) {
						if (xhr.status >= 200 && xhr.status < 300) options.onload({type: "load", target: xhr});
						else options.onerror({type: "error", target: xhr})
					}
				};
				if (options.serialize === JSON.stringify && options.data && options.method !== "GET") {
					xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")
				}
				if (options.deserialize === JSON.parse) {
					xhr.setRequestHeader("Accept", "application/json, text/*");
				}
				if (typeof options.config === FUNCTION) {
					var maybeXhr = options.config(xhr, options);
					if (maybeXhr != null) xhr = maybeXhr
				}

				var data = options.method === "GET" || !options.data ? "" : options.data
				if (data && (type.call(data) != STRING && data.constructor != window.FormData)) {
					throw "Request data should be either be a string or FormData. Check the `serialize` option in `m.request`";
				}
				xhr.send(data);
				return xhr
			}
		}
		function bindData(xhrOptions, data, serialize) {
			if (xhrOptions.method === "GET" && xhrOptions.dataType != "jsonp") {
				var prefix = xhrOptions.url.indexOf("?") < 0 ? "?" : "&";
				var querystring = buildQueryString(data);
				xhrOptions.url = xhrOptions.url + (querystring ? prefix + querystring : "")
			}
			else xhrOptions.data = serialize(data);
			return xhrOptions
		}
		function parameterizeUrl(url, data) {
			var tokens = url.match(/:[a-z]\w+/gi);
			if (tokens && data) {
				for (var i = 0; i < tokens.length; i++) {
					var key = tokens[i].slice(1);
					url = url.replace(tokens[i], data[key]);
					delete data[key]
				}
			}
			return url
		}

		m.request = function(xhrOptions) {
			if (xhrOptions.background !== true) m.startComputation();
			var deferred = new Deferred();
			var isJSONP = xhrOptions.dataType && xhrOptions.dataType.toLowerCase() === "jsonp";
			var serialize = xhrOptions.serialize = isJSONP ? identity : xhrOptions.serialize || JSON.stringify;
			var deserialize = xhrOptions.deserialize = isJSONP ? identity : xhrOptions.deserialize || JSON.parse;
			var extract = isJSONP ? function(jsonp) {return jsonp.responseText} : xhrOptions.extract || function(xhr) {
				return xhr.responseText.length === 0 && deserialize === JSON.parse ? null : xhr.responseText
			};
			xhrOptions.method = (xhrOptions.method || 'GET').toUpperCase();
			xhrOptions.url = parameterizeUrl(xhrOptions.url, xhrOptions.data);
			xhrOptions = bindData(xhrOptions, xhrOptions.data, serialize);
			xhrOptions.onload = xhrOptions.onerror = function(e) {
				try {
					e = e || event;
					var unwrap = (e.type === "load" ? xhrOptions.unwrapSuccess : xhrOptions.unwrapError) || identity;
					var response = unwrap(deserialize(extract(e.target, xhrOptions)), e.target);
					if (e.type === "load") {
						if (type.call(response) === ARRAY && xhrOptions.type) {
							for (var i = 0; i < response.length; i++) response[i] = new xhrOptions.type(response[i])
						}
						else if (xhrOptions.type) response = new xhrOptions.type(response)
					}
					deferred[e.type === "load" ? "resolve" : "reject"](response)
				}
				catch (e) {
					m.deferred.onerror(e);
					deferred.reject(e)
				}
				if (xhrOptions.background !== true) m.endComputation()
			};
			ajax(xhrOptions);
			deferred.promise = propify(deferred.promise, xhrOptions.initialValue);
			return deferred.promise
		};

		//testing API
		m.deps = function(mock) {
			initialize(window = mock || window);
			return window;
		};
		//for internal testing only, do not use `m.deps.factory`
		m.deps.factory = app;

		return m
	})(typeof window != "undefined" ? window : {});

	if (typeof module != "undefined" && module !== null && module.exports) module.exports = m;
	else if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {return m}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	var VOID_TAGS = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr',
	    'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track',
	    'wbr', '!doctype'];

	function isArray(thing) {
	  return Object.prototype.toString.call(thing) === '[object Array]';
	}

	function camelToDash(str) {
	  return str.replace(/\W+/g, '-')
	            .replace(/([a-z\d])([A-Z])/g, '$1-$2');
	}

	function removeEmpties(n) {
	  return n != '';
	}

	// shameless stolen from https://github.com/punkave/sanitize-html
	function escapeHtml(s, replaceDoubleQuote) {
	  if (s === 'undefined') {
	    s = '';
	  }
	  if (typeof(s) !== 'string') {
	    s = s + '';
	  }
	  s =  s.replace(/\&/g, '&amp;').replace(/</g, '&lt;').replace(/\>/g, '&gt;');
	  if (replaceDoubleQuote) {
	    return s.replace(/\"/g, '&quot;');
	  }
	  return s;
	}

	function createAttrString(attrs, escapeAttributeValue) {
	  if (!attrs || !Object.keys(attrs).length) {
	    return '';
	  }

	  return Object.keys(attrs).map(function(name) {
	    var value = attrs[name];
	    if (typeof value === 'undefined' || value === null || typeof value === 'function') {
	      return;
	    }
	    if (typeof value === 'boolean') {
	      return value ? ' ' + name : '';
	    }
	    if (name === 'style') {
	      if (!value) {
	        return;
	      }
	      var styles = attrs.style;
	      if (typeof styles === 'object') {
	        styles = Object.keys(styles).map(function(property) {
	          return styles[property] != '' ? [camelToDash(property).toLowerCase(), styles[property]].join(':') : '';
	        }).filter(removeEmpties).join(';');
	      }
	      return styles != '' ? ' style="' + escapeAttributeValue(styles, true) + '"' : '';
	    }
	    return ' ' + (name === 'className' ? 'class' : name) + '="' + escapeAttributeValue(value, true) + '"';
	  }).join('');
	}

	function createChildrenContent(view) {
	  if(isArray(view.children) && !view.children.length) {
	    return '';
	  }

	  return render(view.children);
	}

	function render(view, options) {
	  options = options || {};

	  var defaultOptions = {
	    escapeAttributeValue: escapeHtml,
	    escapeString: escapeHtml
	  };

	  Object.keys(defaultOptions).forEach(function(key) {
	    if (!options.hasOwnProperty(key)) options[key] = defaultOptions[key];
	  });

	  var type = typeof view;

	  if (type === 'string') {
	    return options.escapeString(view);
	  }

	  if (type === 'number' || type === 'boolean') {
	    return view;
	  }

	  if (!view) {
	    return '';
	  }

	  if (isArray(view)) {
	    return view.map(function(view) { return render(view, options) }).join('');
	  }

	  //compontent
	  if (view.view) {
	    var scope = view.controller ? new view.controller : {};
	    var result = render(view.view(scope), options);
	    if (scope.onunload) {
	      scope.onunload();
	    }
	    return result;
	  }

	  if (view.$trusted) {
	    return '' + view;
	  }
	  var children = createChildrenContent(view);
	  if (!children && VOID_TAGS.indexOf(view.tag.toLowerCase()) >= 0) {
	    return '<' + view.tag + createAttrString(view.attrs, options.escapeAttributeValue) + '>';
	  }
	  return [
	    '<', view.tag, createAttrString(view.attrs, options.escapeAttributeValue), '>',
	    children,
	    '</', view.tag, '>',
	  ].join('');
	}

	render.escapeHtml = escapeHtml;

	module.exports = render;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(6)
	var topbar = __webpack_require__(7)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[
	                  // m("h1","about us")
	                  m(".col l5",[
	                    m("div","ministry exapmple pics for each ministry category *pandora-like grid*")

	                  ]),

	                  m(".col l7",[
	                    m(".card-panelx",[
	                      m("h3","Children Ministry Article"),
	                      // m(".black-text","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.")
	                    ])
	                  ])
	                ]),
	                // custom component with unique content per page
	                m(footer)
	            ]
	        }
	    }

	    // m.mount(document.body,homapage)


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports={
	        view:function(){
	            return m("footer",{class:"page-footer " + primaryColor},[
	                m(".containerx",[
	                    m(".row center",[

	                        m(".col l5 s12 white-text",[
	                            m("h5",{class:"center"},"Help The Gathering Church Grow"),

	                            m("p","We hope you have enjoyed Our Church Services! If you feel The Gathering Church has helped you out and want to support Our team, send us over a donation! Any amount would help support and continue development on this Church and is greatly appreciated."),

	                            // m("button",{class:"center btn waves-effect waves-light red " + primaryColor},"Donate Now")
	                        ]),

	                        m(".col l4 s12 white-text",[
	                            m("h5",{class:"center"},"Join Our Discussion"),

	                            m("p","At the gathering church we love hearing the voices of our congregation, please join us and tell us what you feel, or what you want for the church"),

	                            m("button",{class:"btn waves-effect waves-light red " + color},"Chat")

	                        ]),

	                        m(".col l3 s12 white-text",[
	                            m("h5",{class:"center"},"Connect"),

	                            m("button",{class:"btn waves-effect waves-light red " + color},"Facebook"),

	                            m("button",{class:"btn waves-effect waves-light red " + color},"Twitter"),

	                            m("button",{class:"btn waves-effect waves-light red " + color},"Google+"),

	                            m("button",{class:"btn waves-effect waves-light red " + color},"InstaGram")


	                        ]),

	                    ])
	                ]),

	                m(".footer-copyright container",[
	                        "Copyright © " + config.settings.installationYear + "-" + config.settings.currentYear + ", All rights reserved." + config.profile.churchName,[
	                            m("span",{class:"right"}," < app version: 0.0.1 />")
	                        ]
	                ])
	            ])
	        }
	    }


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(8);

	module.exports={
	        view:function(){
	            return  m("header",[
	              m("div",{id:"index-banner",class:"section no-pad-bot " + color + " hide-on-med-and-down"},[
	                    m(".container row center-on-small-only ",[
	                      // logo area
	                      m(".col l3 s12 white-text center-align",[
	                        m("img",{
	                          class:"materialboxed",
	                          "data-caption":"Our Sanctuary",
	                          width:"250",
	                          src:"/app/images/gathering_logo.png",
	                          config:function(){
	                            $('.materialboxed').materialbox();
	                          }
	                        }),
	                      ]),

	                      // services
	                      m(".col l3 s12 white-text",[
	                          m("h5","Sunday services"),
	                          m(".divider"),
	                          m("p","Sunday morning worship",[
	                            m("b",": 8.00am"),
	                            m("span"," to "),
	                            m("b","8.00pm "),
	                          ]),
	                          m("p","Sunday evening worship",[
	                            m("b",": 6.00pm")
	                          ])
	                      ]),

	                      // location
	                      m(".col l3 s12 white-text",[
	                          m("h5","Location"),
	                          m(".divider"),
	                          m("p","78024 joska")
	                      ]),

	                      // Contact
	                      m(".col l3 s12 white-text",[
	                          m("h5","Contact"),
	                          m(".divider"),
	                          m("p","Pastor: 0711122523")
	                      ]),
	                    ])
	                  ]),
	                  m(navbar),
	            ])


	        }
	    }


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var navItem = __webpack_require__(9)

	module.exports = {
	        view:function(){
	            return m("div",[
	                m("nav",{
	                    class:color
	                },[
	                    m(".containerx",[
	                        m(".nav-wrapper",[


	                            m("ul",{
	                              class:"hide-on-med-and-down",
	                              config:function(){
	                                $('.dropdown-button').dropdown({
	                                   inDuration: 300,
	                                   outDuration: 225,
	                                   constrain_width: false, // Does not change width of dropdown to that of the activator
	                                   alignment: 'left',
	                                   hover: true, // Activate on hover
	                                   gutter: 0, // Spacing from edge
	                                   belowOrigin: true // Displays dropdown below the button
	                                 });
	                              },
	                            },[
	                                m(navItem,{ name:"Login",direction:"right",url:"/contactus",dropId:"portals" }),
	                                m(navItem,{ name:"Contact Us",direction:"right",url:"/contactus" }),
	                                m(navItem,{ name:"Online Church",direction:"right",url:"/onlineChurch",dropId:"onlineChurch"}),

	                                m(navItem,{ name:"Home", direction:"left",url:"/" }),
	                                m(navItem,{ name:"About Us",direction:"left",url:'/AboutUs' }),
	                                m(navItem,{ name:"Ministries",direction:"left",url:"/ministries", dropId:"ministries" }),


	                                m("ul",{ //dropdown list
	                                  class:"dropdown-content",
	                                  id:"portals"
	                                },[

	                                  m(navItem,{ name:"Church Members Portal"}),
	                                  m(navItem,{ name:"Pastorial Portal"})
	                                ]),

	                                m("ul",{ //dropdown list
	                                  class:"dropdown-content",
	                                  id:"ministries"
	                                },[

	                                  m(navItem,{ name:"Children Ministry",url:"/ministries/Children"}),
	                                  m(navItem,{ name:"Youth Ministry",url:"/ministries/youth"}),
	                                  m(navItem,{ name:"Mens Ministry",url:"/ministries/men"}),
	                                  m(navItem,{ name:"Women Ministry",url:"/ministries/wemen"}),
	                                ]),

	                                m("ul",{ //dropdown list
	                                  class:"dropdown-content",
	                                  id:"onlineChurch"
	                                },[

	                                  m(navItem,{ name:"Fellowship",url:"/onlineChurch/felowship"}),
	                                  m(navItem,{ name:"Service",url:"/onlineChurch/service"}),
	                                  m(navItem,{ name:"Ministries",url:"/onlineChurch/ministries"}),
	                                  m(navItem,{ name:"Giving",url:"/onlineChurch/giving"}),
	                                ])
	                            ]),

	                            m("ul",{class:"side-nav", id:"side-nav"},[
	                              m(navItem,{ name:"Home",url:"/" }),
	                              m(navItem,{ name:"About Us",url:'/AboutUs' }),
	                              m(navItem,{ name:"Online Church",url:'/onlineChurch'}),

	                              m(navItem,{ name:"Children Ministry",url:"/ministries/Children"}),
	                              m(navItem,{ name:"Youth Ministry",url:"/ministries/youth"}),
	                              m(navItem,{ name:"Mens Ministry",url:"/ministries/men"}),
	                              m(navItem,{ name:"Women Ministry",url:"/ministries/wemen"}),

	                              m(navItem,{ name:"Online Church",url:"/onlineChurch"}),

	                              m(navItem,{ name:"Contact Us",url:"/contactus" }),
	                            ]),

	                            m("a",{
	                                class:"button-collapse",
	                                "data-activates":"side-nav",
	                                config:function(){
	                                    $(".button-collapse").sideNav({
	                                      edge: 'left', // Choose the horizontal origin
	                                      closeOnClick: true
	                                    });
	                                }
	                            },[
	                                m("i",{class:"mdi-navigation-menu"})
	                            ])
	                        ])
	                    ])
	                ])
	            ])
	        }
	    };


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(6)
	var navbar = __webpack_require__(8)

	module.exports = {
	        view:function(ctrl,args){
	            return m("li",{
	              class:args.direction + " dropdown-button " + (m.route() === args.url ? "active" : ""),
	              "data-activates":args.dropId
	          },[
	                m("a",{
	                  href:args.url,
	                  config:m.route
	                },args.name,[
	                  (args.dropId ? m("i",{class:"mdi-navigation-arrow-drop-down right"})  : m("span"))
	                ])
	            ])
	        }
	    }


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(6)
	var topbar = __webpack_require__(7)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[
	                  // m("h1","about us")
	                  m(".col l5",[
	                    m("div","ministry exapmple pics for each ministry category *pandora-like grid*")

	                  ]),

	                  m(".col l7",[
	                    m(".card-panelx",[
	                      m("h3","Youth Article"),
	                      // m(".black-text","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.")
	                    ])
	                  ])
	                ]),
	                // custom component with unique content per page
	                m(footer)
	            ]
	        }
	    }

	    // m.mount(document.body,homapage)


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(6)
	var topbar = __webpack_require__(7)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[
	                  // m("h1","about us")
	                  m(".col l5",[
	                    m("div","ministry exapmple pics for each ministry category *pandora-like grid*")

	                  ]),

	                  m(".col l7",[
	                    m(".card-panelx",[
	                      m("h3","Mens Article"),
	                      // m(".black-text","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.")
	                    ])
	                  ])
	                ]),
	                // custom component with unique content per page
	                m(footer)
	            ]
	        }
	    }

	    // m.mount(document.body,homapage)


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(6)
	var topbar = __webpack_require__(7)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[
	                  // m("h1","about us")
	                  m(".col l5",[
	                    m("div","ministry exapmple pics for each ministry category *pandora-like grid*")

	                  ]),

	                  m(".col l7",[
	                    m(".card-panelx",[
	                      m("h3","Women Ministry Article"),
	                      // m(".black-text","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.")
	                    ])
	                  ])
	                ]),
	                // custom component with unique content per page
	                m(footer)
	            ]
	        }
	    }

	    // m.mount(document.body,homapage)


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(6)
	var topbar = __webpack_require__(7)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".card-panel",[
	                  m("h1","online church")
	                ]),
	                // custom component with unique content per page
	                m(footer)
	            ]
	        }
	    }

	    // m.mount(document.body,homapage)


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(6)
	var topbar = __webpack_require__(7)
	var contactForm = __webpack_require__(15)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[
	                  // m("h1","about us")
	                  m(".col s12 l5",[
	                    m("div","good welcoming picture to show we will respond")

	                  ]),

	                  m(".col s12 l7",[
	                    m(".card-panel",[
	                      m("h5","Leave us a message"),
	                      m(contactForm)
	                    ])
	                  ])
	                ]),
	                // custom component with unique content per page
	                m(footer)
	            ]
	        }
	    }

	    // m.mount(document.body,homapage)


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = {
	        view:function(){
	            return m("span",[
	                  // m("h1","about us")
	                  m("div","form inputs to send a message")
	                ])
	                // custom component with unique content per page

	        }
	    }


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(6)
	var topbar = __webpack_require__(7)

	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[
	                  // m("h1","about us")
	                  m(".col l5",[
	                    m("div","ministry exapmple pics for each ministry category *pandora-like grid*")

	                  ]),

	                  m(".col l7",[
	                    m(".card-panelx",[
	                      m("h3","Our ministries Article"),
	                      m(".black-text","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.")
	                    ])
	                  ])
	                ]),
	                // custom component with unique content per page
	                m(footer)
	            ]
	        }
	    }

	    // m.mount(document.body,homapage)


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(6)
	var topbar = __webpack_require__(7)
	var infocard = __webpack_require__(27)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[

	                  m(".col s12 l12",[
	                    m(".col s12 l12",[
	                      m("h3","Fellowship")
	                    ]),

	                    m(".col s12 l3",[
	                      m(infocard,{
	                         text:"Children Fellowship",
	                         url:"http://graceinbuckeye.com/wp-content/uploads/childrens-ministry.jpg"
	                        })
	                    ]),
	                    m(".col s12 l3",[
	                      m(infocard,{
	                        text:"Youth Fellowship",
	                        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSok6mZbuzGCUwnzJF9H-pLDYameDi6CRGuLbyBnFzCqXRbvT6K"
	                       })
	                    ]),
	                    m(".col s12 l3",[
	                      m(infocard,{
	                        text:"Mens Fellowship",
	                        url:"http://www.rccgcityofjoy.org/images/men.jpg"
	                       })
	                    ]),
	                    m(".col s12 l3",[
	                      m(infocard,{
	                        text:"Ladies Fellowship",
	                        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8LbluqFescxCvH-RE8gUXQFFiIAztAyfIsB41IlU8cNsYRI8"
	                       })
	                    ])
	                  ])
	                ]),
	                m(footer)

	            ]
	        }
	    }


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(6)
	var topbar = __webpack_require__(7)
	var infocard = __webpack_require__(27)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[

	                  m(".col s12 l12",[
	                    m(".col s12 l12",[
	                      m("h3","Service")
	                    ]),

	                    m(".col s12 l3",[
	                      m(infocard,{
	                         text:"Praise and Worship",
	                         url:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR4s1FsktwABCO4xGOFlFN7TGJTQotlTyqFhnl97opHLJnH6ETUcg"
	                        })
	                    ]),
	                    m(".col s12 l3",[
	                      m(infocard,{
	                        text:"Prayers",
	                        url:"http://cdn.modernghana.com/images/content/hlco26ree8_praying_hands.jpg"
	                       })
	                    ]),
	                    m(".col s12 l3",[
	                      m(infocard,{
	                        text:"Sermon",
	                        url:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQEKCBPpU3kLdEjLFrAJvuPSaDC6U822TUN04oBnMeF-8gYhOs9"
	                       })
	                    ]),
	                    m(".col s12 l3",[
	                      m(infocard,{
	                        text:"Online Giving",
	                        url:"https://goaim1.org/cms/wp-content/uploads/2014/01/giving.png"
	                       })
	                    ])
	                  ])
	                ]),
	                // custom component with unique content per page
	                m(footer)

	            ]
	        }
	    }

	    // m.mount(document.body,homapage)


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(6)
	var topbar = __webpack_require__(7)
	var infocard = __webpack_require__(27)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[

	                  m(".col s12 l12",[
	                    m(".col s12 l12",[
	                      m("h3","Ministries")
	                    ]),

	                    m(".col s12 l3",[
	                      m(infocard,{
	                         text:"Children Ministry",
	                         url:"http://graceinbuckeye.com/wp-content/uploads/childrens-ministry.jpg"
	                        })
	                    ]),
	                    m(".col s12 l3",[
	                      m(infocard,{
	                        text:"Youth Ministry",
	                        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSok6mZbuzGCUwnzJF9H-pLDYameDi6CRGuLbyBnFzCqXRbvT6K"
	                       })
	                    ]),
	                    m(".col s12 l3",[
	                      m(infocard,{
	                        text:"Mens Ministry",
	                        url:"http://www.rccgcityofjoy.org/images/men.jpg"
	                       })
	                    ]),
	                    m(".col s12 l3",[
	                      m(infocard,{
	                        text:"Ladies Ministry",
	                        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8LbluqFescxCvH-RE8gUXQFFiIAztAyfIsB41IlU8cNsYRI8"
	                       })
	                    ])
	                  ])
	                ]),
	                // custom component with unique content per page
	                m(footer)

	            ]
	        }
	    }

	    // m.mount(document.body,homapage)


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(6)
	var topbar = __webpack_require__(7)
	var infocard = __webpack_require__(27)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[

	                  m(".col s12 l12",[
	                    m(".col s12 l12",[
	                      m("h3","Giving")
	                    ]),

	                    m(".col s12 l2",[
	                      m(infocard,{
	                         text:"Offering",
	                         url:"http://c.asstatic.com/images/1502925_634804997052043750-1.jpg",
	                         cardLink:"/onlineChurch/giving/offering"
	                        })
	                    ]),
	                    m(".col s12 l2",[
	                      m(infocard,{
	                        text:"Tithe",
	                        url:"http://teachersofgod.org/wp-content/uploads/2013/08/tithing.gif",
	                        cardLink:"/onlineChurch/giving/tithe"
	                       })
	                    ]),
	                    m(".col s12 l2",[
	                      m(infocard,{
	                        text:"First Fruits",
	                        url:"http://www.catholic.org/files/images/ins_news/2013033858.jpg",
	                        cardLink:"/onlineChurch/giving/firstfruits"
	                       })
	                    ]),
	                    m(".col s12 l2",[
	                      m(infocard,{
	                        text:"Love Offering",
	                        cardLink:"/onlineChurch/giving/loveoffering"
	                       })
	                    ]),
	                    m(".col s12 l2",[
	                      m(infocard,{
	                        text:"Thanksgiving",
	                        url:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTn3HsXafqJ1BC0JzDqSCStCpcekV7-5Hieg-xuPLm5msKyj_jXSA",
	                        cardLink:"/onlineChurch/giving/thanksgiving"
	                       })
	                    ]),
	                    m(".col s12 l2",[
	                      m(infocard,{
	                        text:"Church Development",
	                        url:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRyfNwan0o0gupyaC08HsxePk-17VbrR0d-COfaRKfj_fnfBZOA",
	                        cardLink:"/onlineChurch/giving/development"
	                       })
	                    ])
	                  ])
	                ]),
	                // custom component with unique content per page
	                m(footer)

	            ]
	        }
	    }

	    // m.mount(document.body,homapage)


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(6)
	var topbar = __webpack_require__(7)
	var infocard = __webpack_require__(27)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[

	                  m(".col s12 l12",[
	                    m(".col s12 l12",[
	                      m("h3","Offering")
	                    ])
	                  ])
	                ]),
	                m(footer)

	            ]
	        }
	    }


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(6)
	var topbar = __webpack_require__(7)
	var infocard = __webpack_require__(27)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[

	                  m(".col s12 l12",[
	                    m(".col s12 l12",[
	                      m("h3","thanksgiving")
	                    ])
	                  ])
	                ]),
	                m(footer)

	            ]
	        }
	    }


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(6)
	var topbar = __webpack_require__(7)
	var infocard = __webpack_require__(27)


	var queryMeta = {}

	function root(tokens) {
	    queryMeta.type = tokens[0].split(":")[0].split("(")[0];

	    // check if its a single value or a range being asked by the query
	    if(tokens[0].split(":")[0].split("(")[1] === "range"){
	      queryMeta.rangeStart=tokens[0].split(":")[1].split(")")[0].split("-")[0];
	      queryMeta.rangeEnd=tokens[0].split(":")[1].split(")")[0].split("-")[1];
	    }else{
	      queryMeta.param = tokens[0].split(":")[0].split("(")[1];
	      queryMeta.paramValue = tokens[0].split(":")[1].split(")")[0];
	    }

	    queryMeta.fields = fields(tokens, {index:2})

	    return queryMeta;
	}

	function fields(tokens, state) {
	    var res = []
	    console.log(tokens)
	    console.log(state)
	    //look for relation
	    //look for other route thats not a while loop

	    while (tokens[state.index] !== '}') {
	            var index = state.index++
	            if (tokens[state.index + 1] === '{') {
	                console.log("relation detected")
	                res.push(relation(tokens, state))
	            } else {
	                res.push({
	                  type: 'field',
	                  value: tokens[index],
	                  params:tokens[index]
	                })
	            }
	    }
	        state.index++
	        return res
	}

	function relation(tokens, state) {
	    return {
	        type:'relation',
	        name: tokens[(state.index++)],
	        fields: (state.index++ && fields(tokens, state))
	    }
	}

	var re = /\{|\}|[^{}\s]+/g

	function tokenize(query) {
	    var res = [], match
	    while (match = re.exec(query)) res.push(match[0])
	    return res
	}

	var queryString = `user(name:branson){
	                            name
	                            age
	                            avatar(size:50px,shape:roundedEdges)
	                            students{
	                              name
	                              payments{
	                                ammount
	                              }
	                            }
	                  }`


	var MultiqueryString = `student(range:20-30) {
	                            name
	                            age
	                            students{
	                              name
	                              payments{
	                                ammount
	                              }
	                            }
	                        }`


	// var splitable =  "  The quick brown fox jumps over the lazy dog. "




	module.exports = {
	        view:function(){


	            return [
	                // console.log(tokenize(queryString)),
	                console.log(root(tokenize(queryString))),
	                // console.log(queryString.match(/\S+/g)),
	                // console.log("i am parrrrsring"),
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[

	                  m(".col s12 l12",[
	                    m(".col s12 l12",[
	                      m("h3","tithe")
	                    ])
	                  ])
	                ]),
	                m(footer)

	            ]
	        }
	      }


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(6)
	var topbar = __webpack_require__(7)
	var infocard = __webpack_require__(27)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[

	                  m(".col s12 l12",[
	                    m(".col s12 l12",[
	                      m("h3","loveoffering")
	                    ])
	                  ])
	                ]),
	                m(footer)

	            ]
	        }
	    }


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(6)
	var topbar = __webpack_require__(7)
	var infocard = __webpack_require__(27)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[

	                  m(".col s12 l12",[
	                    m(".col s12 l12",[
	                      m("h3","firstfruits")
	                    ])
	                  ])
	                ]),
	                m(footer)

	            ]
	        }
	    }


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(6)
	var topbar = __webpack_require__(7)
	var infocard = __webpack_require__(27)


	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row center card-panel",[

	                  m(".col s12 l12",[
	                    m(".col s12 l12",[
	                      m("h3","development")
	                    ])
	                  ])
	                ]),
	                m(footer)

	            ]
	        }
	    }


/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = {
	  view:function(ctrl,args){
	    return m(".card hoverable",[
	      m("a",{
	        href:args.cardLink,
	        config:m.route
	      },[
	          m(".card-image waves-effect waves-block waves-light",[
	            m("img",{
	              class:"activator",
	              src:args.url
	            })
	          ]),

	          m(".card-content",[
	            m("span",{class:"card-title activator grey-text text-darken-4"},args.text)
	          ])
	      ]),



	    ])
	  }
	}


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var navbar = __webpack_require__(8);
	var hero = __webpack_require__(29);
	var fancypics = __webpack_require__(31);
	var footer = __webpack_require__(6);
	var topbar = __webpack_require__(7)




	module.exports = {
	  view:function(){
	      return [
	          m(topbar),

	          // m(hero),
	          // custom component with unique content per page
	          m(".row",[

	            m(".col l9",[
	              m("br"),
	              m("br"),
	            // slider here
	                m("div",{
	                  id:"slider",
	                  config:function(){
	                    var slider = new IdealImageSlider.Slider('#slider');
	                  	slider.start();
	                  }
	                },[
	                  m("img",{src:"/build/assets/img/1.jpg",alt:"slide 1"}),
	                  m("img",{src:"/build/assets/img/2.png",alt:"slide 1"}),
	                  m("img",{src:"/build/assets/img/3.png",alt:"slide 1"}),
	                  // m("img",{src:"img/4.jpg",alt:"slide 1"}),
	                  // m("img",{src:"img/5.jpg",alt:"slide 1"})
	                ]),

	                // <ul class="table-of-contents">
	                //   <li><a href="#download" class="active">Download</a></li>
	                //   <li><a href="#setup">Setup</a></li>
	                //   <li><a href="#templates">Templates</a></li>
	                //   <li><a href="#third-party-options">Third-party Options</a></li>
	                //   <li><a href="#sass">Sass</a></li>
	                // </ul>



	            ]),

	            m(".col l3 ",[
	              m("br"),
	              m("br"),
	              m(".card-panel",[
	                m("h5",{class:"center"},"Events"),
	                m("ul",{class:"table-of-contents"},[
	                  m("li",[
	                    m("a",{class:"active"},"Event happening on 20th of may, Please avail yourselves!")
	                  ])
	                ])
	              ])
	            ]),

	            m(".col l12 s12",[
	              // <div class="parallax-container valign-wrapper">
	              //   <div class="section no-pad-bot">
	              //     <div class="container">
	              //       <div class="row center">
	              //         <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
	              //       </div>
	              //     </div>
	              //   </div>
	              //   <div class="parallax"><img src="background3.jpg" alt="Unsplashed background img 3" style="display: block; transform: translate3d(-50%, 210px, 0px);"></div>
	              // </div>

	              // m(".parallax-container",[
	              //   m(".parallax",{
	              //     config:function(){
	              //       $('.parallax').parallax();
	              //     }
	              //   },[
	              //     m("img",{src:"/app/images/organogram.png"})
	              //   ])
	              // ]),


	              // m(fancypics)
	            ]),
	            //
	            m(".col l6 s12",[
	               m("div",[
	                //  m("h4",[
	                //    m("u","Church Services")
	                //  ]),
	                //  m("table",{class:"striped"},[
	                //    m("thead",[
	                //      m("th","service"),
	                //      m("th","start"),
	                //      m("th","end")
	                //    ]),
	                //    m("tbody",[
	                //      m("tr",[
	                //        m("td","service 1"),
	                //        m("td","1 am"),
	                //        m("td","4 am"),
	                //      ]),
	                 //
	                //      m("tr",[
	                //        m("td","service 1"),
	                //        m("td","1 am"),
	                //        m("td","4 am"),
	                //      ])
	                //    ])
	                //  ]),
	                //  m("h5","we are located in xxxxx , feel free to join us at any time")
	               ]),
	               //
	              //  m(require("./map"),{
	              //    location:"https://maps.google.com/maps?hl=en&q=Joska, Nairobi City, Kenya&ie=UTF8&t=roadmap&z=14&iwloc=B&output=embed",
	              //    height:"440",
	              //    width:"650"
	              //  })
	            ])

	          ]),

	          m(footer)
	      ]
	  }
	}


/***/ },
/* 29 */
/***/ function(module, exports) {

	function initHero(){

	    $('.button-collapse').sideNav();
		  $('.scrollspy').scrollSpy();

	    /*** Animate word ***/

	    //set animation timing
		var animationDelay = 2500,
			//loading bar effect
			barAnimationDelay = 3800,
			barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
			//letters effect
			lettersDelay = 50,
			//type effect
			typeLettersDelay = 150,
			selectionDuration = 500,
			typeAnimationDelay = selectionDuration + 800,
			//clip effect
			revealDuration = 600,
			revealAnimationDelay = 1500;

		initHeadline();


		function initHeadline() {
			singleLetters($('.cd-headline.letters').find('b'));
			animateHeadline($('.cd-headline'));
		}

		function singleLetters($words) {
			$words.each(function(){
				var word = $(this),
					letters = word.text().split(''),
					selected = word.hasClass('is-visible');
				for (i in letters) {
					if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
					letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
				}
			    var newLetters = letters.join('');
			    word.html(newLetters).css('opacity', 1);
			});
		}

		function animateHeadline($headlines) {
			var duration = animationDelay;
			$headlines.each(function(){
				var headline = $(this);

				if(headline.hasClass('loading-bar')) {
					duration = barAnimationDelay;
					setTimeout(function(){ headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
				} else if (headline.hasClass('clip')){
					var spanWrapper = headline.find('.cd-words-wrapper'),
						newWidth = spanWrapper.width() + 10
					spanWrapper.css('width', newWidth);
				} else if (!headline.hasClass('type') ) {
					//assign to .cd-words-wrapper the width of its longest word
					var words = headline.find('.cd-words-wrapper b'),
						width = 0;
					words.each(function(){
						var wordWidth = $(this).width();
					    if (wordWidth > width) width = wordWidth;
					});
					headline.find('.cd-words-wrapper').css('width', width);
				};

				//trigger animation
				setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
			});
		}

		function hideWord($word) {
			var nextWord = takeNext($word);

			if($word.parents('.cd-headline').hasClass('type')) {
				var parentSpan = $word.parent('.cd-words-wrapper');
				parentSpan.addClass('selected').removeClass('waiting');
				setTimeout(function(){
					parentSpan.removeClass('selected');
					$word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
				}, selectionDuration);
				setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);

			} else if($word.parents('.cd-headline').hasClass('letters')) {
				var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
				hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
				showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

			}  else if($word.parents('.cd-headline').hasClass('clip')) {
				$word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
					switchWord($word, nextWord);
					showWord(nextWord);
				});

			} else if ($word.parents('.cd-headline').hasClass('loading-bar')){
				$word.parents('.cd-words-wrapper').removeClass('is-loading');
				switchWord($word, nextWord);
				setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
				setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);

			} else {
				switchWord($word, nextWord);
				setTimeout(function(){ hideWord(nextWord) }, animationDelay);
			}
		}

		function showWord($word, $duration) {
			if($word.parents('.cd-headline').hasClass('type')) {
				showLetter($word.find('i').eq(0), $word, false, $duration);
				$word.addClass('is-visible').removeClass('is-hidden');

			}  else if($word.parents('.cd-headline').hasClass('clip')) {
				$word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){
					setTimeout(function(){ hideWord($word) }, revealAnimationDelay);
				});
			}
		}

		function hideLetter($letter, $word, $bool, $duration) {
			$letter.removeClass('in').addClass('out');

			if(!$letter.is(':last-child')) {
			 	setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);
			} else if($bool) {
			 	setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
			}

			if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
				var nextWord = takeNext($word);
				switchWord($word, nextWord);
			}
		}

		function showLetter($letter, $word, $bool, $duration) {
			$letter.addClass('in').removeClass('out');

			if(!$letter.is(':last-child')) {
				setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration);
			} else {
				if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
				if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
			}
		}

		function takeNext($word) {
			return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
		}

		function takePrev($word) {
			return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
		}

		function switchWord($oldWord, $newWord) {
			$oldWord.removeClass('is-visible').addClass('is-hidden');
			$newWord.removeClass('is-hidden').addClass('is-visible');
		}

		$('.button-collapse').sideNav({
			menuWidth: 240, // Default is 240
			closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
		});

		$('.parallax').parallax();

		var card  = document.querySelectorAll('.card-work');
	  	var transEndEventNames = {
		      'WebkitTransition' : 'webkitTransitionEnd',
		      'MozTransition'    : 'transitionend',
		      'transition'       : 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

		function addDashes(name) {
			return name.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); });
		}

		function getPopup(id) {
			return document.querySelector('.popup[data-popup="' + id + '"]');
		}

		function getDimensions(el) {
		   return el.getBoundingClientRect();
		}

		function getDifference(card, popup) {
			var cardDimensions = getDimensions(card),
		    	popupDimensions = getDimensions(popup);

			return {
			  	height: popupDimensions.height / cardDimensions.height,
			  	width: popupDimensions.width / cardDimensions.width,
			  	left: popupDimensions.left - cardDimensions.left,
			  	top: popupDimensions.top - cardDimensions.top
			}
		}

		function transformCard(card, size) {
			return card.style[Modernizr.prefixed('transform')] = 'translate(' + size.left + 'px,' + size.top + 'px)' + ' scale(' + size.width + ',' + size.height + ')';
		}

		function hasClass(elem, cls) {
		    var str = " " + elem.className + " ";
		    var testCls = " " + cls + " ";
		    return(str.indexOf(testCls) != -1) ;
		}

		function closest(e) {
		   var el = e.target || e.srcElement;
		    if (el = el.parentNode) do { //its an inverse loop
		        var cls = el.className;
		        if (cls) {
		            cls = cls.split(" ");
		            if (-1 !== cls.indexOf("card-work")) {
		                return el;
		                break;
		            }
		        }
		    } while (el = el.parentNode);
		}

		function scaleCard(e) {
			var el = closest(e);
			var target = el,
			    id     = target.getAttribute('data-popup-id'),
			    popup  = getPopup(id);

			var size = getDifference(target, popup);

		   	target.style[Modernizr.prefixed('transitionDuration')] = '0.5s';
		   	target.style[Modernizr.prefixed('transitionTimingFunction')] = 'cubic-bezier(0.4, 0, 0.2, 1)';
		   	target.style[Modernizr.prefixed('transitionProperty')] = addDashes(Modernizr.prefixed('transform'));
		   	target.style['borderRadius'] = 0;

		  	transformCard(target, size);
		  	onAnimated(target, popup);
		  	onPopupClick(target, popup);
		}

		function onAnimated(card, popup) {
		 	card.addEventListener(transEndEventName, function transitionEnded() {
		   		card.style['opacity'] = 0;
		   		popup.style['visibility'] = 'visible';
		   		popup.style['zIndex'] = 9999;
		   		card.removeEventListener(transEndEventName, transitionEnded);
		 	});
		}

		function onPopupClick(card, popup) {
			popup.addEventListener('click', function toggleVisibility(e) {
			  	var size = getDifference(popup, card);

			  	card.style['opacity'] = 1;
			  	card.style['borderRadius'] = '6px';
			  	hidePopup(e);
			  	transformCard(card, size);
			}, false);
		}


		function hidePopup(e) {
			e.target.style['visibility'] = 'hidden';
			e.target.style['zIndex'] = 2;
		}

		// [].forEach.call(card, function(card) {
		// 	card.addEventListener('click', scaleCard, false);
		// });

		}; // end of document ready
	 // end of jQuery name space


	module.exports = {
	        view:function(){
	            return m("div",{
	              class:"section no-pad-bot " + color,
	              id:"index-banner",
	              config:function(){
	                //initialize the hero code, since there is no onDocumentReady
	                initHero();
	              }
	            },[
	                m(".container",[
	                    m("h2",{class:"text_h center header cd-headline letters type"},[
	                        // m("span","We love "),
	                        m("span",{class:"cd-words-wrapper waiting"},[
	                            m("b",{class:"is-visible"},config.profile.churchName),
	                            config.profile.slogans.map(function(slogan){
	                				return m("b",slogan)
	            				})
	                        ])

	                    ]),

	                    m(".row center",[
	                      m("a",{
	                        class:"btn-large waves-effect waves-light " + "orange",
	                        href:"/getStarted"
	                      },"Join Us Now!")
	                    ])

	                ])
	            ])
	        }
	    }


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var footer = __webpack_require__(6)
	var navbar = __webpack_require__(8)
	var topbar = __webpack_require__(7)

	module.exports = {
	        view:function(){
	            return [
	                m(topbar),
	                // m(hero),
	                m(".row card-panel",[
	                  m("h1","about us"),

	                  // image of the church

	                  m(".col l3",[
	                    m(".tabs-wrapper .row",{
	                    },[
	                      m("img",{
	                        class:"materialboxed",
	                        "data-caption":"Our Sanctuary",
	                        width:"250",
	                        src:"http://jiarelief.org/wp-content/uploads/2013/05/Murrell-Ewing-Childrens-Home-11x17.jpg",
	                        config:function(){
	                          $('.materialboxed').materialbox();
	                        }
	                      }),

	                      m("blockquote",{class:"card-panel flow-text"},"We are closely affiliated with the",[
	                        m(".blue-text","Jordan international Aid"),
	                        m("div","and above is a model of the dream church that we are building at Joska")
	                      ])
	                    ]),


	                     m(__webpack_require__(33),{
	                       location:"https://maps.google.com/maps?hl=en&q=Joska, Nairobi City, Kenya&ie=UTF8&t=roadmap&z=14&iwloc=B&output=embed",
	                       height:"440",
	                       width:"650"
	                     })

	                  ]),

	                  m(".col l9",[
	                    m(".card-panel",[
	                      m("h3",{class:"center"},"About Us"),
	                      m(".row",[

	                        // the core values
	                        m(".col l6",[
	                          m("h5",{class:"center"},"Our Core Values"),

	                            m("ol",[

	                              m("li",[
	                                m("b","BUILDING RELATIONSHIPS - "),
	                                m("i","We live life with people")
	                              ]),

	                              m("br"),

	                              m("li",[
	                                m("b","RESTORING LIVES  - "),
	                                m("i","It is ever too late to be what God has designed us to be")
	                              ]),

	                               m("br"),

	                              m("li",[
	                                m("b","SHARING CHRIST  - "),
	                                m("i","It is ever too late to be what God has designed us to be")
	                              ]),

	                               m("br"),

	                              m("li",[
	                                m("b","LIVING CHRIST CENTERED  - "),
	                                m("i","It is ever too late to be what God has designed us to be")
	                              ])
	                            ])

	                        ]),

	                        // the Mission Statement

	                        m(".col l6",[
	                          m("h5",{class:"center"},"Our Mission statement"),

	                          m("p","We exist to lead people to become fully committed Disciples of Christ"),

	                          m("h6","OUR CORE FOUR"),

	                          m("ol",[

	                            m("li",[
	                                m("b","Building"),
	                            ]),
	                            m("li",[
	                                m("b","Unity"),
	                            ]),
	                            m("li",[
	                                m("b","Teaching"),
	                            ]),
	                            m("li",[
	                                m("b","Favor"),
	                            ])
	                          ])

	                        ]),

	                        m(".col l12",[
	                            m("h4",{class:"center"},"Our Goals and  Objectives"),

	                            m("h5",{class:"center"},"1. Scale up growth in gathering church"),

	                            // objective 1
	                            m("u","Objective 1 - To increase Gathering  Church membership from the current figure of 50 to 200 in 2016"),

	                            // table with arranged content
	                            m("table",{class:"bordered striped highlight hoverable"},[
	                              m("thead",[
	                                m("th","Expected Outcome "),
	                                m("th","Specific Objectives: ")
	                              ]),
	                              m("tbody",[
	                                m("td","A broad church membership"),
	                                m("td",[
	                                  m("ol",[
	                                    m("li",[
	                                      m("span","To train the Leaders and co-workers on "),m("br"),
	                                      m("span","Church management skills")
	                                    ]),
	                                    m("li","To start training the pastoral team.")
	                                  ])
	                                ])
	                              ])
	                            ]),

	                            // objective 2
	                            m("u","Objective 2 - To groom and nurture the younger generation"),

	                            // table with arranged content
	                            m("table",{class:"bordered striped highlight hoverable"},[
	                              m("thead",[
	                                m("th","Expected Outcome "),
	                                m("th","Specific Objectives: ")
	                              ]),
	                              m("tbody",[
	                                m("td",[
	                                  m("span","A Godly younger generation in all societal institutions,"),m("br"),
	                                  m("b","(education, government and other sectors of economy.)")
	                                ]),

	                                m("td",[
	                                  m("ol",[
	                                    m("li","To develop dynamic, attractive and friendly programs"),
	                                    m("li","to train children workers."),
	                                    m("li","Rites of passage – develop a church programme to provide this important service")
	                                  ])
	                                ])
	                              ])
	                            ]),

	                          // objective 3
	                           m("u","Objective 3 - To increase attendance and participation of youths in Gathering Church"),

	                            // table with arranged content
	                            m("table",{class:"bordered striped highlight hoverable"},[
	                              m("thead",[
	                                m("th","Expected Outcome "),
	                                m("th","Specific Objectives: ")
	                              ]),
	                              m("tbody",[
	                                m("td",[
	                                  m("span","A Godly younger generation in Gathering Church,"), //m("br"),
	                                  // m("b","(education, government and other sectors of economy.)")
	                                ]),

	                                m("td",[
	                                  m("ol",[
	                                    m("li","To intensify our outreach to schools (Primary and secondary), colleges and universities in Joska Town"),
	                                    m("li","To establish sport evangelism "),
	                                    m("li","To reach the touts and motorcycle riders"),
	                                    m("li","To start/ initiate  entertainment and media programmes"),
	                                    m("li","To initiate youth services in Gathering Church "),

	                                  ])
	                                ])
	                              ])
	                            ]),

	                          // objective 4
	                           m("u","Objective 4 - To have an effective evangelism and outreach ministry at all departments"),

	                            // table with arranged content
	                            m("table",{class:"bordered striped highlight hoverable"},[
	                              m("thead",[
	                                m("th","Expected Outcome "),
	                                m("th","Specific Objectives: ")
	                              ]),
	                              m("tbody",[
	                                m("td",[
	                                  m("span","Establish a fully equipped evangelistic team for evangelism"), //m("br"),
	                                  // m("b","(education, government and other sectors of economy.)")
	                                ]),

	                                m("td",[
	                                  m("ol",[
	                                    m("li","To Train all members on evangelism and discipleship"),
	                                    m("li","To establish sport evangelism "),
	                                    m("li","To have a very strong discipleship department"),
	                                    m("li","To train all members on how to use the four spiritual laws")
	                                  ])
	                                ])
	                              ])
	                            ]),

	// objective 4
	                           m("u","Objective 5 -  To establish 10 cells  in 2016 within the church"),

	                            // table with arranged content
	                            m("table",{class:"bordered striped highlight hoverable"},[
	                              m("thead",[
	                                m("th","Expected Outcome "),
	                                m("th","Specific Objectives: ")
	                              ]),
	                              m("tbody",[
	                                m("td",[
	                                  m("span","Cell group ministry Members identify with a cell group"), //m("br"),
	                                  // m("b","(education, government and other sectors of economy.)")
	                                ]),

	                                m("td",[
	                                  m("ol",[
	                                    m("li","To Train all members on evangelism and discipleship"),
	                                    m("li","To Train all members on small group dynamics Church leadership to continuously give cell group topical study"),
	                                    m("li","To train members on the use of life studies materials")
	                                  ])
	                                ])
	                              ])
	                            ]),

	                            m("img",{
	                            class:"materialboxed",
	                            "data-caption":"Our Sanctuary",
	                            width:"250",
	                            src:"/app/images/organogram.png",
	                            config:function(){
	                              $('.materialboxed').materialbox();
	                            }
	                          }),

	                            m(".divider"),

	                            m("div",[
	                              m("span",[
	                                m("span","more goals can be downloaded from here"),

	                              ])
	                            ])







	                        ])
	                      ])
	                    ])
	                  ])
	                ]),
	                // custom component with unique content per page
	                m(footer)

	            ]
	        }
	    }

	    // m.mount(document.body,homapage)


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var pics = [
	  {tagline:"Pic1",subTagline:"Pastor and wife",url:"http://lorempixel.com/580/250/nature/1"},
	  {tagline:"Pic2",subTagline:"All Pastors in that church",url:"http://lorempixel.com/580/250/nature/1"},
	  {tagline:"Pic3",subTagline:"Congregation on last service",url:"http://lorempixel.com/580/250/nature/1"}
	]

	module.exports = {
	        view:function(ctrl,args){
	            return m(".slider",{
	              config:function(){
	                $('.slider').slider({
	                  Transition:"500",
	                  Interval:"20"
	                })
	              }
	            },[
	              m("ul",{class:"slides"},[
	                pics.map(function(pic){
	                  return m(__webpack_require__(32),{
	                    tagline:pic.tagline,
	                    subTagline:pic.subTagline,
	                    url:pic.url
	                  })
	                })
	              ])
	            ])
	        }
	}


/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = {
	  view:function(ctrl,args){
	    return m("li",[
	      m("img",{src:args.url}),
	      m(".caption center-align",[
	        m("h3",args.tagline),
	        m("h5",{class:"light grey-text text-lighten-3"},args.subTagline)
	      ])
	    ])
	  }
	}









	// m("div",[
	//   m("div",{id:"thumbnail-slider"},[
	//     m("div",{class:"inner"},[
	//       m("ul",[
	//         m("li",[
	//           m("a",{class:"thumb",href:"img/4.jpg"})
	//         ]),
	//         m("li",[
	//           m("a",{class:"thumb",href:"img/1.jpg"})
	//         ]),
	//         m("li",[
	//           m("a",{class:"thumb",href:"img/3.jpg"})
	//         ]),
	//         m("li",[
	//           m("a",{class:"thumb",href:"img/4.jpg"})
	//         ]),
	//         m("li",[
	//           m("a",{class:"thumb",href:"img/5.jpg"})
	//         ]),
	//         m("li",[
	//           m("a",{class:"thumb",href:"img/6.jpg"})
	//         ])
	//       ])
	//     ])
	//   ])
	// ]),


/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = {
	  view:function(ctrl,args){
	    return m("iframe",{
	      frameborder:"0",
	      scrolling:"no",
	      marginheight:"0",
	      marginwidth:"0",
	      width: "100%",
	      height: "100%",
	      src: args.location
	    })
	  }
	}


/***/ }
/******/ ]);