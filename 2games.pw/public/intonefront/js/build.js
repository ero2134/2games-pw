! function(e) {
	function t(r) {
		if (n[r]) return n[r].exports;
		var i = n[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
	}
	var n = {};
	t.m = e, t.c = n, t.d = function(e, n, r) {
		t.o(e, n) || Object.defineProperty(e, n, {
			configurable: !1,
			enumerable: !0,
			get: r
		})
	}, t.n = function(e) {
		var n = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return t.d(n, "a", n), n
	}, t.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, t.p = "/dist", t(t.s = 40)
}([function(e, t, n) {
	"use strict";

	function r(e) {
		return "[object Array]" === $.call(e)
	}

	function i(e) {
		return "[object ArrayBuffer]" === $.call(e)
	}

	function o(e) {
		return "undefined" != typeof FormData && e instanceof FormData
	}

	function a(e) {
		return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
	}

	function s(e) {
		return "string" == typeof e
	}

	function c(e) {
		return "number" == typeof e
	}

	function u(e) {
		return void 0 === e
	}

	function l(e) {
		return null !== e && "object" == typeof e
	}

	function f(e) {
		return "[object Date]" === $.call(e)
	}

	function d(e) {
		return "[object File]" === $.call(e)
	}

	function p(e) {
		return "[object Blob]" === $.call(e)
	}

	function v(e) {
		return "[object Function]" === $.call(e)
	}

	function h(e) {
		return l(e) && v(e.pipe)
	}

	function m(e) {
		return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
	}

	function y(e) {
		return e.replace(/^\s*/, "").replace(/\s*$/, "")
	}

	function g() {
		return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
	}

	function _(e, t) {
		if (null !== e && void 0 !== e)
			if ("object" != typeof e && (e = [e]), r(e))
				for (var n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e);
			else
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
	}

	function b() {
		function e(e, n) {
			"object" == typeof t[n] && "object" == typeof e ? t[n] = b(t[n], e) : t[n] = e
		}
		for (var t = {}, n = 0, r = arguments.length; n < r; n++) _(arguments[n], e);
		return t
	}

	function w() {
		function e(e, n) {
			"object" == typeof t[n] && "object" == typeof e ? t[n] = w(t[n], e) : t[n] = "object" == typeof e ? w({}, e) : e
		}
		for (var t = {}, n = 0, r = arguments.length; n < r; n++) _(arguments[n], e);
		return t
	}

	function C(e, t, n) {
		return _(t, function(t, r) {
			e[r] = n && "function" == typeof t ? x(t, n) : t
		}), e
	}
	var x = n(17),
		A = n(48),
		$ = Object.prototype.toString;
	e.exports = {
		isArray: r,
		isArrayBuffer: i,
		isBuffer: A,
		isFormData: o,
		isArrayBufferView: a,
		isString: s,
		isNumber: c,
		isObject: l,
		isUndefined: u,
		isDate: f,
		isFile: d,
		isBlob: p,
		isFunction: v,
		isStream: h,
		isURLSearchParams: m,
		isStandardBrowserEnv: g,
		forEach: _,
		merge: b,
		deepMerge: w,
		extend: C,
		trim: y
	}
}, function(e, t) {
	var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
	"number" == typeof __g && (__g = n)
}, function(e, t, n) {
	e.exports = !n(6)(function() {
		return 7 != Object.defineProperty({}, "a", {
			get: function() {
				return 7
			}
		}).a
	})
}, function(e, t) {
	e.exports = function(e) {
		return "object" == typeof e ? null !== e : "function" == typeof e
	}
}, function(e, t) {
	var n = {}.hasOwnProperty;
	e.exports = function(e, t) {
		return n.call(e, t)
	}
}, function(e, t, n) {
	var r = n(3);
	e.exports = function(e) {
		if (!r(e)) throw TypeError(e + " is not an object!");
		return e
	}
}, function(e, t) {
	e.exports = function(e) {
		try {
			return !!e()
		} catch (e) {
			return !0
		}
	}
}, function(e, t) {
	var n;
	n = function() {
		return this
	}();
	try {
		n = n || Function("return this")() || (0, eval)("this")
	} catch (e) {
		"object" == typeof window && (n = window)
	}
	e.exports = n
}, function(e, t) {
	e.exports = function(e, t, n, r, i, o) {
		var a, s = e = e || {},
			c = typeof e.default;
		"object" !== c && "function" !== c || (a = e, s = e.default);
		var u = "function" == typeof s ? s.options : s;
		t && (u.render = t.render, u.staticRenderFns = t.staticRenderFns, u._compiled = !0), n && (u.functional = !0), i && (u._scopeId = i);
		var l;
		if (o ? (l = function(e) {
				e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), r && r.call(this, e), e && e._registeredComponents && e._registeredComponents.add(o)
			}, u._ssrRegister = l) : r && (l = r), l) {
			var f = u.functional,
				d = f ? u.render : u.beforeCreate;
			f ? (u._injectStyles = l, u.render = function(e, t) {
				return l.call(t), d(e, t)
			}) : u.beforeCreate = d ? [].concat(d, l) : [l]
		}
		return {
			esModule: a,
			exports: s,
			options: u
		}
	}
}, function(e, t, n) {
	var r = n(70),
		i = n(30);
	e.exports = function(e) {
		return r(i(e))
	}
}, function(e, t, n) {
	var r = n(3);
	e.exports = function(e, t) {
		if (!r(e)) return e;
		var n, i;
		if (t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
		if ("function" == typeof(n = e.valueOf) && !r(i = n.call(e))) return i;
		if (!t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
		throw TypeError("Can't convert object to primitive value")
	}
}, function(e, t) {
	var n = e.exports = {
		version: "2.6.10"
	};
	"number" == typeof __e && (__e = n)
}, function(e, t) {
	e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t, n) {
	var r = n(5),
		i = n(31),
		o = n(10),
		a = Object.defineProperty;
	t.f = n(2) ? Object.defineProperty : function(e, t, n) {
		if (r(e), t = o(t, !0), r(n), i) try {
			return a(e, t, n)
		} catch (e) {}
		if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
		return "value" in n && (e[t] = n.value), e
	}
}, function(e, t) {
	function n() {
		throw new Error("setTimeout has not been defined")
	}

	function r() {
		throw new Error("clearTimeout has not been defined")
	}

	function i(e) {
		if (l === setTimeout) return setTimeout(e, 0);
		if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0);
		try {
			return l(e, 0)
		} catch (t) {
			try {
				return l.call(null, e, 0)
			} catch (t) {
				return l.call(this, e, 0)
			}
		}
	}

	function o(e) {
		if (f === clearTimeout) return clearTimeout(e);
		if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(e);
		try {
			return f(e)
		} catch (t) {
			try {
				return f.call(null, e)
			} catch (t) {
				return f.call(this, e)
			}
		}
	}

	function a() {
		h && p && (h = !1, p.length ? v = p.concat(v) : m = -1, v.length && s())
	}

	function s() {
		if (!h) {
			var e = i(a);
			h = !0;
			for (var t = v.length; t;) {
				for (p = v, v = []; ++m < t;) p && p[m].run();
				m = -1, t = v.length
			}
			p = null, h = !1, o(e)
		}
	}

	function c(e, t) {
		this.fun = e, this.array = t
	}

	function u() {}
	var l, f, d = e.exports = {};
	! function() {
		try {
			l = "function" == typeof setTimeout ? setTimeout : n
		} catch (e) {
			l = n
		}
		try {
			f = "function" == typeof clearTimeout ? clearTimeout : r
		} catch (e) {
			f = r
		}
	}();
	var p, v = [],
		h = !1,
		m = -1;
	d.nextTick = function(e) {
		var t = new Array(arguments.length - 1);
		if (arguments.length > 1)
			for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
		v.push(new c(e, t)), 1 !== v.length || h || i(s)
	}, c.prototype.run = function() {
		this.fun.apply(null, this.array)
	}, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = u, d.addListener = u, d.once = u, d.off = u, d.removeListener = u, d.removeAllListeners = u, d.emit = u, d.prependListener = u, d.prependOnceListener = u, d.listeners = function(e) {
		return []
	}, d.binding = function(e) {
		throw new Error("process.binding is not supported")
	}, d.cwd = function() {
		return "/"
	}, d.chdir = function(e) {
		throw new Error("process.chdir is not supported")
	}, d.umask = function() {
		return 0
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = void 0;
	var r = function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(n(45)),
		i = {
			name: "app",
			data: function() {
				return {
					msg: "Welcome to Your Vue.js App"
				}
			},
			components: {
				SliderGeneral: r.default
			}
		};
	t.default = i
}, function(e, t, n) {
	"use strict";

	function r(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = void 0;
	var i = r(n(46)),
		o = r(n(63)),
		a = r(n(64)),
		s = {
			name: "general-slider",
			data: function() {
				return {
					url: url_slidebar,
					locale: "",
					bannersData: [],
					error: [],
					isMobile: "",
					preloader: !0
				}
			},
			created: function() {
				this.checkLocalForDevAndProd()
			},
			methods: {
				checkLocalForDevAndProd: function() {
					"undefined" != typeof app ? this.locale = "?locale=".concat(app.locale) : this.locale = ""
				}
			},
			mounted: function() {
				var e = this;
				! function() {
					i.default.get("".concat(e.url).concat(e.locale)).then(function(t) {
						e.preloader = !1, "ok" === t.data.status && (e.bannersData = t.data.data.banners)
					}).catch(function(t) {
						e.error.push(t)
					})
				}()
			},
			components: {
				PreloaderBox: o.default,
				Slider: a.default
			}
		};
	t.default = s
}, function(e, t, n) {
	"use strict";
	e.exports = function(e, t) {
		return function() {
			for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
			return e.apply(t, n)
		}
	}
}, function(e, t, n) {
	"use strict";

	function r(e) {
		return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
	}
	var i = n(0);
	e.exports = function(e, t, n) {
		if (!t) return e;
		var o;
		if (n) o = n(t);
		else if (i.isURLSearchParams(t)) o = t.toString();
		else {
			var a = [];
			i.forEach(t, function(e, t) {
				null !== e && void 0 !== e && (i.isArray(e) ? t += "[]" : e = [e], i.forEach(e, function(e) {
					i.isDate(e) ? e = e.toISOString() : i.isObject(e) && (e = JSON.stringify(e)), a.push(r(t) + "=" + r(e))
				}))
			}), o = a.join("&")
		}
		if (o) {
			var s = e.indexOf("#"); - 1 !== s && (e = e.slice(0, s)), e += (-1 === e.indexOf("?") ? "?" : "&") + o
		}
		return e
	}
}, function(e, t, n) {
	"use strict";
	e.exports = function(e) {
		return !(!e || !e.__CANCEL__)
	}
}, function(e, t, n) {
	"use strict";
	(function(t) {
		function r(e, t) {
			!i.isUndefined(e) && i.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
		}
		var i = n(0),
			o = n(53),
			a = {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			s = {
				adapter: function() {
					var e;
					return void 0 !== t && "[object process]" === Object.prototype.toString.call(t) ? e = n(21) : "undefined" != typeof XMLHttpRequest && (e = n(21)), e
				}(),
				transformRequest: [function(e, t) {
					return o(t, "Accept"), o(t, "Content-Type"), i.isFormData(e) || i.isArrayBuffer(e) || i.isBuffer(e) || i.isStream(e) || i.isFile(e) || i.isBlob(e) ? e : i.isArrayBufferView(e) ? e.buffer : i.isURLSearchParams(e) ? (r(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : i.isObject(e) ? (r(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
				}],
				transformResponse: [function(e) {
					if ("string" == typeof e) try {
						e = JSON.parse(e)
					} catch (e) {}
					return e
				}],
				timeout: 0,
				xsrfCookieName: "XSRF-TOKEN",
				xsrfHeaderName: "X-XSRF-TOKEN",
				maxContentLength: -1,
				validateStatus: function(e) {
					return e >= 200 && e < 300
				}
			};
		s.headers = {
			common: {
				Accept: "application/json, text/plain, */*"
			}
		}, i.forEach(["delete", "get", "head"], function(e) {
			s.headers[e] = {}
		}), i.forEach(["post", "put", "patch"], function(e) {
			s.headers[e] = i.merge(a)
		}), e.exports = s
	}).call(t, n(14))
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		i = n(54),
		o = n(18),
		a = n(56),
		s = n(57),
		c = n(22);
	e.exports = function(e) {
		return new Promise(function(t, u) {
			var l = e.data,
				f = e.headers;
			r.isFormData(l) && delete f["Content-Type"];
			var d = new XMLHttpRequest;
			if (e.auth) {
				var p = e.auth.username || "",
					v = e.auth.password || "";
				f.Authorization = "Basic " + btoa(p + ":" + v)
			}
			if (d.open(e.method.toUpperCase(), o(e.url, e.params, e.paramsSerializer), !0), d.timeout = e.timeout, d.onreadystatechange = function() {
					if (d && 4 === d.readyState && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
						var n = "getAllResponseHeaders" in d ? a(d.getAllResponseHeaders()) : null,
							r = e.responseType && "text" !== e.responseType ? d.response : d.responseText,
							o = {
								data: r,
								status: d.status,
								statusText: d.statusText,
								headers: n,
								config: e,
								request: d
							};
						i(t, u, o), d = null
					}
				}, d.onabort = function() {
					d && (u(c("Request aborted", e, "ECONNABORTED", d)), d = null)
				}, d.onerror = function() {
					u(c("Network Error", e, null, d)), d = null
				}, d.ontimeout = function() {
					u(c("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", d)), d = null
				}, r.isStandardBrowserEnv()) {
				var h = n(58),
					m = (e.withCredentials || s(e.url)) && e.xsrfCookieName ? h.read(e.xsrfCookieName) : void 0;
				m && (f[e.xsrfHeaderName] = m)
			}
			if ("setRequestHeader" in d && r.forEach(f, function(e, t) {
					void 0 === l && "content-type" === t.toLowerCase() ? delete f[t] : d.setRequestHeader(t, e)
				}), e.withCredentials && (d.withCredentials = !0), e.responseType) try {
				d.responseType = e.responseType
			} catch (t) {
				if ("json" !== e.responseType) throw t
			}
			"function" == typeof e.onDownloadProgress && d.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && d.upload && d.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) {
				d && (d.abort(), u(e), d = null)
			}), void 0 === l && (l = null), d.send(l)
		})
	}
}, function(e, t, n) {
	"use strict";
	var r = n(55);
	e.exports = function(e, t, n, i, o) {
		var a = new Error(e);
		return r(a, t, n, i, o)
	}
}, function(e, t, n) {
	"use strict";
	var r = n(0);
	e.exports = function(e, t) {
		t = t || {};
		var n = {};
		return r.forEach(["url", "method", "params", "data"], function(e) {
			void 0 !== t[e] && (n[e] = t[e])
		}), r.forEach(["headers", "auth", "proxy"], function(i) {
			r.isObject(t[i]) ? n[i] = r.deepMerge(e[i], t[i]) : void 0 !== t[i] ? n[i] = t[i] : r.isObject(e[i]) ? n[i] = r.deepMerge(e[i]) : void 0 !== e[i] && (n[i] = e[i])
		}), r.forEach(["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"], function(r) {
			void 0 !== t[r] ? n[r] = t[r] : void 0 !== e[r] && (n[r] = e[r])
		}), n
	}
}, function(e, t, n) {
	"use strict";

	function r(e) {
		this.message = e
	}
	r.prototype.toString = function() {
		return "Cancel" + (this.message ? ": " + this.message : "")
	}, r.prototype.__CANCEL__ = !0, e.exports = r
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = void 0, n(65);
	var r = {
		name: "slider",
		props: {
			bannersData: {
				type: Array,
				required: !0
			}
		},
		data: function() {
			return {
				previewIndex: 0,
				previewGroupList: [],
				previewIndexList: [],
				sizeGroup: 5,
				nav: !1,
				currentRowPosition: 0,
				currentItem: 0,
				autoInterval: 5e3,
				actionPlayInterval: ""
			}
		},
		created: function() {
			this.getPreviewChanks, this.showNavigation, this.makeItemList
		},
		methods: {
			setProgressAnimation: function() {
				for (var e = document.querySelectorAll(".slider-preview-loadbar"), t = 0; t < e.length; t++) {
					var n = e[t];
					n.classList.contains("is-active") && (n.style.animationDuration = this.autoInterval / 1e3 + "s")
				}
			},
			removeAllActiveRows: function() {
				for (var e = document.querySelectorAll(".slider-preview-row"), t = 0; t < e.length; t++) e[t].classList.remove("is-current")
			},
			removeAllActiveElement: function() {
				for (var e = document.querySelectorAll(".slider__item"), t = document.querySelectorAll(".slider-preview__item"), n = document.querySelectorAll(".slider-preview-loadbar"), r = 0; r < e.length; r++) e[r].classList.remove("is-active");
				for (var i = 0; i < t.length; i++) t[i].classList.remove("is-active");
				for (var o = 0; o < n.length; o++) n[o].classList.remove("is-active")
			},
			arrowNext: function() {
				var e = document.querySelectorAll(".slider-preview-row"),
					t = document.querySelector(".icon-slider-top-right"),
					n = document.querySelector(".icon-slider-top-left");
				if (!t.classList.contains("disabled")) {
					this.currentRowPosition++, this.removeAllActiveRows(), this.currentRowPosition >= 1 && n.classList.remove("disabled"), this.currentRowPosition >= this.previewGroupList.length - 1 && t.classList.add("disabled");
					for (var r = 0; r < e.length; r++) {
						var i = e[r],
							o = Number(i.dataset.row);
						this.currentRowPosition === o && (i.classList.add("is-current"), this.smartLazyloadPrevieItems(i))
					}
				}
			},
			arrowPrev: function() {
				var e = document.querySelectorAll(".slider-preview-row"),
					t = document.querySelector(".icon-slider-top-right"),
					n = document.querySelector(".icon-slider-top-left");
				if (!n.classList.contains("disabled")) {
					this.currentRowPosition--, this.removeAllActiveRows(), t.classList.contains("disabled") && t.classList.remove("disabled"), 0 === this.currentRowPosition && n.classList.add("disabled");
					for (var r = 0; r < e.length; r++) {
						var i = e[r],
							o = Number(i.dataset.row);
						this.currentRowPosition === o && (i.classList.add("is-current"), this.smartLazyloadPrevieItems(i))
					}
				}
			},
			slideItemAction: function(e) {
				var t = e.currentTarget;
				if (t.classList.contains("is-active")) return !1;
				this.removeAllActiveElement(), this.changeSliderAction(t), clearInterval(this.actionPlayInterval), this.autoPlay()
			},
			changeSliderAction: function(e) {
				var t = document.querySelectorAll(".slider__item"),
					n = e.querySelector(".slider-preview-loadbar");
				this.currentItem = parseInt(e.dataset.item), e.classList.add("is-active"), n.classList.add("is-active"), this.setProgressAnimation();
				for (var r = 0; r < t.length; r++) {
					var i = t[r];
					e.dataset.item === i.dataset.item && (this.currentItem = parseInt(e.dataset.item), this.smartLazyloadMainSlideItems(i), i.classList.add("is-active"), e.classList.add("is-active"), n.classList.add("is-active"), this.setProgressAnimation())
				}
			},
			smartLazyloadMainSlideItems: function(e) {
				var t = e.querySelector(".slider__image"),
					n = e.nextSibling,
					r = e.previousSibling;
				if ("" == t.dataset.loaded && (t.dataset.loaded = "true", t.setAttribute("src", t.dataset.src)), null != n && "true" != n.querySelector(".slider__image").dataset.loaded) {
					var i = n.querySelector(".slider__image");
					i.dataset.loaded = "true", i.setAttribute("src", i.dataset.src)
				}
				if (null != r && "true" != r.querySelector(".slider__image").dataset.loaded) {
					var o = r.querySelector(".slider__image");
					o.dataset.loaded = "true", o.setAttribute("src", o.dataset.src)
				}
			},
			smartLazyloadPrevieItems: function(e) {
				if (e.classList.contains("is-current") && "" == e.dataset.loaded) {
					var t = e.querySelectorAll(".slider-preview__image");
					e.dataset.loaded = "true";
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.setAttribute("src", r.dataset.src)
					}
				}
			},
			previewSliderNavAutoDetect: function() {
				var e = (document.querySelectorAll(".slider-preview__item"), document.querySelectorAll(".slider-preview-row")),
					t = document.querySelector(".slider-preview-nav__left"),
					n = document.querySelector(".slider-preview-nav__right"),
					r = t.querySelector(".icon-slider-top-left"),
					i = n.querySelector(".icon-slider-top-right");
				0 === this.currentRowPosition && (r.classList.add("disabled"), i.classList.remove("disabled")), this.currentRowPosition >= 1 && r.classList.remove("disabled"), this.currentRowPosition >= e.length - 1 && i.classList.add("disabled")
			},
			autoPlay: function() {
				var e = this,
					t = document.querySelectorAll(".slider-preview__item"),
					n = function(n) {
						for (var r = document.querySelectorAll(".slider__item"), i = 0; i < t.length; i++) {
							var o = t[i],
								a = o.parentNode;
							if (Number(o.dataset.item) === n) {
								a.classList.contains("is-current") || (e.removeAllActiveRows(), a.classList.add("is-current"), e.currentRowPosition = Number(a.dataset.row), e.smartLazyloadPrevieItems(a));
								var s = o.querySelector(".slider-preview-loadbar");
								e.removeAllActiveElement(), o.classList.add("is-active"), s.classList.add("is-active"), e.setProgressAnimation();
								for (var c = 0; c < r.length; c++) {
									var u = r[c];
									Number(u.dataset.item) === n && (e.smartLazyloadMainSlideItems(u), u.classList.add("is-active"))
								}
							}
						}
					};
				this.actionPlayInterval = setInterval(function() {
					e.currentItem++, e.currentItem < t.length ? n(e.currentItem) : (e.currentItem = 0, n(e.currentItem)), !0 === e.nav && e.previewSliderNavAutoDetect()
				}, this.autoInterval)
			}
		},
		computed: {
			getPreviewChanks: function() {
				if (this.bannersData.length > 1)
					for (var e = 0; e < Math.ceil(this.bannersData.length / this.sizeGroup); e++) this.previewGroupList[e] = this.bannersData.slice(e * this.sizeGroup, e * this.sizeGroup + this.sizeGroup)
			},
			makeItemList: function() {
				for (var e = 0; e < this.bannersData.length; e++) this.previewIndexList.push(e)
			},
			showNavigation: function() {
				this.bannersData.length > 5 && (this.nav = !0)
			}
		},
		mounted: function() {
			var e = this;
			! function() {
				var t = document.querySelector(".slider-preview__item"),
					n = document.querySelector(".slider-preview-loadbar"),
					r = document.querySelector(".slider__item"),
					i = document.querySelector(".slider-preview-row");
				r.classList.add("is-active"), e.smartLazyloadMainSlideItems(r), t && (r.classList.add("is-active"), i.classList.add("is-current"), e.smartLazyloadPrevieItems(i), t.classList.add("is-active"), n.classList.add("is-active"), e.setProgressAnimation())
			}(), this.autoPlay()
		}
	};
	t.default = r
}, function(e, t) {
	var n = {}.toString;
	e.exports = function(e) {
		return n.call(e).slice(8, -1)
	}
}, function(e, t, n) {
	var r = n(68);
	e.exports = function(e, t, n) {
		if (r(e), void 0 === t) return e;
		switch (n) {
			case 1:
				return function(n) {
					return e.call(t, n)
				};
			case 2:
				return function(n, r) {
					return e.call(t, n, r)
				};
			case 3:
				return function(n, r, i) {
					return e.call(t, n, r, i)
				}
		}
		return function() {
			return e.apply(t, arguments)
		}
	}
}, function(e, t, n) {
	var r = n(69),
		i = n(29),
		o = n(9),
		a = n(10),
		s = n(4),
		c = n(31),
		u = Object.getOwnPropertyDescriptor;
	t.f = n(2) ? u : function(e, t) {
		if (e = o(e), t = a(t, !0), c) try {
			return u(e, t)
		} catch (e) {}
		if (s(e, t)) return i(!r.f.call(e, t), e[t])
	}
}, function(e, t) {
	e.exports = function(e, t) {
		return {
			enumerable: !(1 & e),
			configurable: !(2 & e),
			writable: !(4 & e),
			value: t
		}
	}
}, function(e, t) {
	e.exports = function(e) {
		if (void 0 == e) throw TypeError("Can't call method on  " + e);
		return e
	}
}, function(e, t, n) {
	e.exports = !n(2) && !n(6)(function() {
		return 7 != Object.defineProperty(n(32)("div"), "a", {
			get: function() {
				return 7
			}
		}).a
	})
}, function(e, t, n) {
	var r = n(3),
		i = n(1).document,
		o = r(i) && r(i.createElement);
	e.exports = function(e) {
		return o ? i.createElement(e) : {}
	}
}, function(e, t, n) {
	var r = n(4),
		i = n(9),
		o = n(72)(!1),
		a = n(35)("IE_PROTO");
	e.exports = function(e, t) {
		var n, s = i(e),
			c = 0,
			u = [];
		for (n in s) n != a && r(s, n) && u.push(n);
		for (; t.length > c;) r(s, n = t[c++]) && (~o(u, n) || u.push(n));
		return u
	}
}, function(e, t) {
	var n = Math.ceil,
		r = Math.floor;
	e.exports = function(e) {
		return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
	}
}, function(e, t, n) {
	var r = n(36)("keys"),
		i = n(37);
	e.exports = function(e) {
		return r[e] || (r[e] = i(e))
	}
}, function(e, t, n) {
	var r = n(11),
		i = n(1),
		o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
	(e.exports = function(e, t) {
		return o[e] || (o[e] = void 0 !== t ? t : {})
	})("versions", []).push({
		version: r.version,
		mode: n(75) ? "pure" : "global",
		copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
	})
}, function(e, t) {
	var n = 0,
		r = Math.random();
	e.exports = function(e) {
		return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
	}
}, function(e, t, n) {
	var r = n(13),
		i = n(29);
	e.exports = n(2) ? function(e, t, n) {
		return r.f(e, t, i(1, n))
	} : function(e, t, n) {
		return e[t] = n, e
	}
}, function(e, t, n) {
	var r = n(1),
		i = n(38),
		o = n(4),
		a = n(37)("src"),
		s = n(78),
		c = ("" + s).split("toString");
	n(11).inspectSource = function(e) {
		return s.call(e)
	}, (e.exports = function(e, t, n, s) {
		var u = "function" == typeof n;
		u && (o(n, "name") || i(n, "name", t)), e[t] !== n && (u && (o(n, a) || i(n, a, e[t] ? "" + e[t] : c.join(String(t)))), e === r ? e[t] = n : s ? e[t] ? e[t] = n : i(e, t, n) : (delete e[t], i(e, t, n)))
	})(Function.prototype, "toString", function() {
		return "function" == typeof this && this[a] || s.call(this)
	})
}, function(e, t, n) {
	"use strict";

	function r(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var i = r(n(41)),
		o = r(n(44));
	new i.default({
		el: ".main-slider",
		render: function(e) {
			return e(o.default)
		}
	})
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
			value: !0
		}),
		function(e, n) {
			function r(e) {
				return void 0 === e || null === e
			}

			function i(e) {
				return void 0 !== e && null !== e
			}

			function o(e) {
				return !0 === e
			}

			function a(e) {
				return !1 === e
			}

			function s(e) {
				return "string" == typeof e || "number" == typeof e || "symbol" == typeof e || "boolean" == typeof e
			}

			function c(e) {
				return null !== e && "object" == typeof e
			}

			function u(e) {
				return "[object Object]" === $o.call(e)
			}

			function l(e) {
				return "[object RegExp]" === $o.call(e)
			}

			function f(e) {
				var t = parseFloat(String(e));
				return t >= 0 && Math.floor(t) === t && isFinite(e)
			}

			function d(e) {
				return i(e) && "function" == typeof e.then && "function" == typeof e.catch
			}

			function p(e) {
				return null == e ? "" : Array.isArray(e) || u(e) && e.toString === $o ? JSON.stringify(e, null, 2) : String(e)
			}

			function v(e) {
				var t = parseFloat(e);
				return isNaN(t) ? e : t
			}

			function h(e, t) {
				for (var n = Object.create(null), r = e.split(","), i = 0; i < r.length; i++) n[r[i]] = !0;
				return t ? function(e) {
					return n[e.toLowerCase()]
				} : function(e) {
					return n[e]
				}
			}

			function m(e, t) {
				if (e.length) {
					var n = e.indexOf(t);
					if (n > -1) return e.splice(n, 1)
				}
			}

			function y(e, t) {
				return Oo.call(e, t)
			}

			function g(e) {
				var t = Object.create(null);
				return function(n) {
					return t[n] || (t[n] = e(n))
				}
			}

			function _(e, t) {
				function n(n) {
					var r = arguments.length;
					return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
				}
				return n._length = e.length, n
			}

			function b(e, t) {
				return e.bind(t)
			}

			function w(e, t) {
				t = t || 0;
				for (var n = e.length - t, r = new Array(n); n--;) r[n] = e[n + t];
				return r
			}

			function C(e, t) {
				for (var n in t) e[n] = t[n];
				return e
			}

			function x(e) {
				for (var t = {}, n = 0; n < e.length; n++) e[n] && C(t, e[n]);
				return t
			}

			function A(e, t, n) {}

			function $(e, t) {
				if (e === t) return !0;
				var n = c(e),
					r = c(t);
				if (!n || !r) return !n && !r && String(e) === String(t);
				try {
					var i = Array.isArray(e),
						o = Array.isArray(t);
					if (i && o) return e.length === t.length && e.every(function(e, n) {
						return $(e, t[n])
					});
					if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
					if (i || o) return !1;
					var a = Object.keys(e),
						s = Object.keys(t);
					return a.length === s.length && a.every(function(n) {
						return $(e[n], t[n])
					})
				} catch (e) {
					return !1
				}
			}

			function S(e, t) {
				for (var n = 0; n < e.length; n++)
					if ($(e[n], t)) return n;
				return -1
			}

			function k(e) {
				var t = !1;
				return function() {
					t || (t = !0, e.apply(this, arguments))
				}
			}

			function O(e) {
				var t = (e + "").charCodeAt(0);
				return 36 === t || 95 === t
			}

			function T(e, t, n, r) {
				Object.defineProperty(e, t, {
					value: n,
					enumerable: !!r,
					writable: !0,
					configurable: !0
				})
			}

			function E(e) {
				if (!Uo.test(e)) {
					var t = e.split(".");
					return function(e) {
						for (var n = 0; n < t.length; n++) {
							if (!e) return;
							e = e[t[n]]
						}
						return e
					}
				}
			}

			function L(e) {
				return "function" == typeof e && /native code/.test(e.toString())
			}

			function I(e) {
				la.push(e), ua.target = e
			}

			function N() {
				la.pop(), ua.target = la[la.length - 1]
			}

			function j(e) {
				return new fa(void 0, void 0, void 0, String(e))
			}

			function P(e) {
				var t = new fa(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
				return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t
			}

			function M(e) {
				ya = e
			}

			function D(e, t) {
				e.__proto__ = t
			}

			function R(e, t, n) {
				for (var r = 0, i = n.length; r < i; r++) {
					var o = n[r];
					T(e, o, t[o])
				}
			}

			function F(e, t) {
				if (c(e) && !(e instanceof fa)) {
					var n;
					return y(e, "__ob__") && e.__ob__ instanceof ga ? n = e.__ob__ : ya && !ia() && (Array.isArray(e) || u(e)) && Object.isExtensible(e) && !e._isVue && (n = new ga(e)), t && n && n.vmCount++, n
				}
			}

			function q(e, t, n, r, i) {
				var o = new ua,
					a = Object.getOwnPropertyDescriptor(e, t);
				if (!a || !1 !== a.configurable) {
					var s = a && a.get,
						c = a && a.set;
					s && !c || 2 !== arguments.length || (n = e[t]);
					var u = !i && F(n);
					Object.defineProperty(e, t, {
						enumerable: !0,
						configurable: !0,
						get: function() {
							var t = s ? s.call(e) : n;
							return ua.target && (o.depend(), u && (u.dep.depend(), Array.isArray(t) && H(t))), t
						},
						set: function(t) {
							var r = s ? s.call(e) : n;
							t === r || t !== t && r !== r || s && !c || (c ? c.call(e, t) : n = t, u = !i && F(t), o.notify())
						}
					})
				}
			}

			function B(e, t, n) {
				if (Array.isArray(e) && f(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;
				if (t in e && !(t in Object.prototype)) return e[t] = n, n;
				var r = e.__ob__;
				return e._isVue || r && r.vmCount ? n : r ? (q(r.value, t, n), r.dep.notify(), n) : (e[t] = n, n)
			}

			function U(e, t) {
				if (Array.isArray(e) && f(t)) return void e.splice(t, 1);
				var n = e.__ob__;
				e._isVue || n && n.vmCount || y(e, t) && (delete e[t], n && n.dep.notify())
			}

			function H(e) {
				for (var t = void 0, n = 0, r = e.length; n < r; n++) t = e[n], t && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && H(t)
			}

			function z(e, t) {
				if (!t) return e;
				for (var n, r, i, o = aa ? Reflect.ownKeys(t) : Object.keys(t), a = 0; a < o.length; a++) "__ob__" !== (n = o[a]) && (r = e[n], i = t[n], y(e, n) ? r !== i && u(r) && u(i) && z(r, i) : B(e, n, i));
				return e
			}

			function V(e, t, n) {
				return n ? function() {
					var r = "function" == typeof t ? t.call(n, n) : t,
						i = "function" == typeof e ? e.call(n, n) : e;
					return r ? z(r, i) : i
				} : t ? e ? function() {
					return z("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e)
				} : t : e
			}

			function G(e, t) {
				var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
				return n ? K(n) : n
			}

			function K(e) {
				for (var t = [], n = 0; n < e.length; n++) - 1 === t.indexOf(e[n]) && t.push(e[n]);
				return t
			}

			function J(e, t, n, r) {
				var i = Object.create(e || null);
				return t ? C(i, t) : i
			}

			function W(e, t) {
				var n = e.props;
				if (n) {
					var r, i, o, a = {};
					if (Array.isArray(n))
						for (r = n.length; r--;) "string" == typeof(i = n[r]) && (o = Eo(i), a[o] = {
							type: null
						});
					else if (u(n))
						for (var s in n) i = n[s], o = Eo(s), a[o] = u(i) ? i : {
							type: i
						};
					e.props = a
				}
			}

			function X(e, t) {
				var n = e.inject;
				if (n) {
					var r = e.inject = {};
					if (Array.isArray(n))
						for (var i = 0; i < n.length; i++) r[n[i]] = {
							from: n[i]
						};
					else if (u(n))
						for (var o in n) {
							var a = n[o];
							r[o] = u(a) ? C({
								from: o
							}, a) : {
								from: a
							}
						}
				}
			}

			function Z(e) {
				var t = e.directives;
				if (t)
					for (var n in t) {
						var r = t[n];
						"function" == typeof r && (t[n] = {
							bind: r,
							update: r
						})
					}
			}

			function Y(e, t, n) {
				function r(r) {
					var i = _a[r] || wa;
					s[r] = i(e[r], t[r], n, r)
				}
				if ("function" == typeof t && (t = t.options), W(t, n), X(t, n), Z(t), !t._base && (t.extends && (e = Y(e, t.extends, n)), t.mixins))
					for (var i = 0, o = t.mixins.length; i < o; i++) e = Y(e, t.mixins[i], n);
				var a, s = {};
				for (a in e) r(a);
				for (a in t) y(e, a) || r(a);
				return s
			}

			function Q(e, t, n, r) {
				if ("string" == typeof n) {
					var i = e[t];
					if (y(i, n)) return i[n];
					var o = Eo(n);
					if (y(i, o)) return i[o];
					var a = Lo(o);
					if (y(i, a)) return i[a];
					return i[n] || i[o] || i[a]
				}
			}

			function ee(e, t, n, r) {
				var i = t[e],
					o = !y(n, e),
					a = n[e],
					s = ie(Boolean, i.type);
				if (s > -1)
					if (o && !y(i, "default")) a = !1;
					else if ("" === a || a === No(e)) {
					var c = ie(String, i.type);
					(c < 0 || s < c) && (a = !0)
				}
				if (void 0 === a) {
					a = te(r, i, e);
					var u = ya;
					M(!0), F(a), M(u)
				}
				return a
			}

			function te(e, t, n) {
				if (y(t, "default")) {
					var r = t.default;
					return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" == typeof r && "Function" !== ne(t.type) ? r.call(e) : r
				}
			}

			function ne(e) {
				var t = e && e.toString().match(/^\s*function (\w+)/);
				return t ? t[1] : ""
			}

			function re(e, t) {
				return ne(e) === ne(t)
			}

			function ie(e, t) {
				if (!Array.isArray(t)) return re(t, e) ? 0 : -1;
				for (var n = 0, r = t.length; n < r; n++)
					if (re(t[n], e)) return n;
				return -1
			}

			function oe(e, t, n) {
				I();
				try {
					if (t)
						for (var r = t; r = r.$parent;) {
							var i = r.$options.errorCaptured;
							if (i)
								for (var o = 0; o < i.length; o++) try {
									var a = !1 === i[o].call(r, e, t, n);
									if (a) return
								} catch (e) {
									se(e, r, "errorCaptured hook")
								}
						}
					se(e, t, n)
				} finally {
					N()
				}
			}

			function ae(e, t, n, r, i) {
				var o;
				try {
					o = n ? e.apply(t, n) : e.call(t), o && !o._isVue && d(o) && !o._handled && (o.catch(function(e) {
						return oe(e, r, i + " (Promise/async)")
					}), o._handled = !0)
				} catch (e) {
					oe(e, r, i)
				}
				return o
			}

			function se(e, t, n) {
				if (qo.errorHandler) try {
					return qo.errorHandler.call(null, e, t, n)
				} catch (t) {
					t !== e && ce(t, null, "config.errorHandler")
				}
				ce(e, t, n)
			}

			function ce(e, t, n) {
				if (!zo && !Vo || "undefined" == typeof console) throw e;
				//console.error(e)
			}

			function ue() {
				Aa = !1;
				var e = xa.slice(0);
				xa.length = 0;
				for (var t = 0; t < e.length; t++) e[t]()
			}

			function le(e, t) {
				var n;
				if (xa.push(function() {
						if (e) try {
							e.call(t)
						} catch (e) {
							oe(e, t, "nextTick")
						} else n && n(t)
					}), Aa || (Aa = !0, ba()), !e && "undefined" != typeof Promise) return new Promise(function(e) {
					n = e
				})
			}

			function fe(e) {
				de(e, Ta), Ta.clear()
			}

			function de(e, t) {
				var n, r, i = Array.isArray(e);
				if (!(!i && !c(e) || Object.isFrozen(e) || e instanceof fa)) {
					if (e.__ob__) {
						var o = e.__ob__.dep.id;
						if (t.has(o)) return;
						t.add(o)
					}
					if (i)
						for (n = e.length; n--;) de(e[n], t);
					else
						for (r = Object.keys(e), n = r.length; n--;) de(e[r[n]], t)
				}
			}

			function pe(e, t) {
				function n() {
					var e = arguments,
						r = n.fns;
					if (!Array.isArray(r)) return ae(r, null, arguments, t, "v-on handler");
					for (var i = r.slice(), o = 0; o < i.length; o++) ae(i[o], null, e, t, "v-on handler")
				}
				return n.fns = e, n
			}

			function ve(e, t, n, i, a, s) {
				var c, u, l, f;
				for (c in e) u = e[c], l = t[c], f = Ea(c), r(u) || (r(l) ? (r(u.fns) && (u = e[c] = pe(u, s)), o(f.once) && (u = e[c] = a(f.name, u, f.capture)), n(f.name, u, f.capture, f.passive, f.params)) : u !== l && (l.fns = u, e[c] = l));
				for (c in t) r(e[c]) && (f = Ea(c), i(f.name, t[c], f.capture))
			}

			function he(e, t, n) {
				function a() {
					n.apply(this, arguments), m(s.fns, a)
				}
				e instanceof fa && (e = e.data.hook || (e.data.hook = {}));
				var s, c = e[t];
				r(c) ? s = pe([a]) : i(c.fns) && o(c.merged) ? (s = c, s.fns.push(a)) : s = pe([c, a]), s.merged = !0, e[t] = s
			}

			function me(e, t, n) {
				var o = t.options.props;
				if (!r(o)) {
					var a = {},
						s = e.attrs,
						c = e.props;
					if (i(s) || i(c))
						for (var u in o) {
							var l = No(u);
							ye(a, c, u, l, !0) || ye(a, s, u, l, !1)
						}
					return a
				}
			}

			function ye(e, t, n, r, o) {
				if (i(t)) {
					if (y(t, n)) return e[n] = t[n], o || delete t[n], !0;
					if (y(t, r)) return e[n] = t[r], o || delete t[r], !0
				}
				return !1
			}

			function ge(e) {
				for (var t = 0; t < e.length; t++)
					if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
				return e
			}

			function _e(e) {
				return s(e) ? [j(e)] : Array.isArray(e) ? we(e) : void 0
			}

			function be(e) {
				return i(e) && i(e.text) && a(e.isComment)
			}

			function we(e, t) {
				var n, a, c, u, l = [];
				for (n = 0; n < e.length; n++) a = e[n], r(a) || "boolean" == typeof a || (c = l.length - 1, u = l[c], Array.isArray(a) ? a.length > 0 && (a = we(a, (t || "") + "_" + n), be(a[0]) && be(u) && (l[c] = j(u.text + a[0].text), a.shift()), l.push.apply(l, a)) : s(a) ? be(u) ? l[c] = j(u.text + a) : "" !== a && l.push(j(a)) : be(a) && be(u) ? l[c] = j(u.text + a.text) : (o(e._isVList) && i(a.tag) && r(a.key) && i(t) && (a.key = "__vlist" + t + "_" + n + "__"), l.push(a)));
				return l
			}

			function Ce(e) {
				var t = e.$options.provide;
				t && (e._provided = "function" == typeof t ? t.call(e) : t)
			}

			function xe(e) {
				var t = Ae(e.$options.inject, e);
				t && (M(!1), Object.keys(t).forEach(function(n) {
					q(e, n, t[n])
				}), M(!0))
			}

			function Ae(e, t) {
				if (e) {
					for (var n = Object.create(null), r = aa ? Reflect.ownKeys(e) : Object.keys(e), i = 0; i < r.length; i++) {
						var o = r[i];
						if ("__ob__" !== o) {
							for (var a = e[o].from, s = t; s;) {
								if (s._provided && y(s._provided, a)) {
									n[o] = s._provided[a];
									break
								}
								s = s.$parent
							}
							if (!s && "default" in e[o]) {
								var c = e[o].default;
								n[o] = "function" == typeof c ? c.call(t) : c
							}
						}
					}
					return n
				}
			}

			function $e(e, t) {
				if (!e || !e.length) return {};
				for (var n = {}, r = 0, i = e.length; r < i; r++) {
					var o = e[r],
						a = o.data;
					if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, o.context !== t && o.fnContext !== t || !a || null == a.slot)(n.default || (n.default = [])).push(o);
					else {
						var s = a.slot,
							c = n[s] || (n[s] = []);
						"template" === o.tag ? c.push.apply(c, o.children || []) : c.push(o)
					}
				}
				for (var u in n) n[u].every(Se) && delete n[u];
				return n
			}

			function Se(e) {
				return e.isComment && !e.asyncFactory || " " === e.text
			}

			function ke(e, t, n) {
				var r, i = Object.keys(t).length > 0,
					o = e ? !!e.$stable : !i,
					a = e && e.$key;
				if (e) {
					if (e._normalized) return e._normalized;
					if (o && n && n !== Ao && a === n.$key && !i && !n.$hasNormal) return n;
					r = {};
					for (var s in e) e[s] && "$" !== s[0] && (r[s] = Oe(t, s, e[s]))
				} else r = {};
				for (var c in t) c in r || (r[c] = Te(t, c));
				return e && Object.isExtensible(e) && (e._normalized = r), T(r, "$stable", o), T(r, "$key", a), T(r, "$hasNormal", i), r
			}

			function Oe(e, t, n) {
				var r = function() {
					var e = arguments.length ? n.apply(null, arguments) : n({});
					return e = e && "object" == typeof e && !Array.isArray(e) ? [e] : _e(e), e && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e
				};
				return n.proxy && Object.defineProperty(e, t, {
					get: r,
					enumerable: !0,
					configurable: !0
				}), r
			}

			function Te(e, t) {
				return function() {
					return e[t]
				}
			}

			function Ee(e, t) {
				var n, r, o, a, s;
				if (Array.isArray(e) || "string" == typeof e)
					for (n = new Array(e.length), r = 0, o = e.length; r < o; r++) n[r] = t(e[r], r);
				else if ("number" == typeof e)
					for (n = new Array(e), r = 0; r < e; r++) n[r] = t(r + 1, r);
				else if (c(e))
					if (aa && e[Symbol.iterator]) {
						n = [];
						for (var u = e[Symbol.iterator](), l = u.next(); !l.done;) n.push(t(l.value, n.length)), l = u.next()
					} else
						for (a = Object.keys(e), n = new Array(a.length), r = 0, o = a.length; r < o; r++) s = a[r], n[r] = t(e[s], s, r);
				return i(n) || (n = []), n._isVList = !0, n
			}

			function Le(e, t, n, r) {
				var i, o = this.$scopedSlots[e];
				o ? (n = n || {}, r && (n = C(C({}, r), n)), i = o(n) || t) : i = this.$slots[e] || t;
				var a = n && n.slot;
				return a ? this.$createElement("template", {
					slot: a
				}, i) : i
			}

			function Ie(e) {
				return Q(this.$options, "filters", e, !0) || Mo
			}

			function Ne(e, t) {
				return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t
			}

			function je(e, t, n, r, i) {
				var o = qo.keyCodes[t] || n;
				return i && r && !qo.keyCodes[t] ? Ne(i, r) : o ? Ne(o, e) : r ? No(r) !== t : void 0
			}

			function Pe(e, t, n, r, i) {
				if (n)
					if (c(n)) {
						Array.isArray(n) && (n = x(n));
						var o;
						for (var a in n) ! function(a) {
							if ("class" === a || "style" === a || ko(a)) o = e;
							else {
								var s = e.attrs && e.attrs.type;
								o = r || qo.mustUseProp(t, s, a) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
							}
							var c = Eo(a),
								u = No(a);
							if (!(c in o || u in o) && (o[a] = n[a], i)) {
								(e.on || (e.on = {}))["update:" + a] = function(e) {
									n[a] = e
								}
							}
						}(a)
					} else;
				return e
			}

			function Me(e, t) {
				var n = this._staticTrees || (this._staticTrees = []),
					r = n[e];
				return r && !t ? r : (r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), Re(r, "__static__" + e, !1), r)
			}

			function De(e, t, n) {
				return Re(e, "__once__" + t + (n ? "_" + n : ""), !0), e
			}

			function Re(e, t, n) {
				if (Array.isArray(e))
					for (var r = 0; r < e.length; r++) e[r] && "string" != typeof e[r] && Fe(e[r], t + "_" + r, n);
				else Fe(e, t, n)
			}

			function Fe(e, t, n) {
				e.isStatic = !0, e.key = t, e.isOnce = n
			}

			function qe(e, t) {
				if (t)
					if (u(t)) {
						var n = e.on = e.on ? C({}, e.on) : {};
						for (var r in t) {
							var i = n[r],
								o = t[r];
							n[r] = i ? [].concat(i, o) : o
						}
					} else;
				return e
			}

			function Be(e, t, n, r) {
				t = t || {
					$stable: !n
				};
				for (var i = 0; i < e.length; i++) {
					var o = e[i];
					Array.isArray(o) ? Be(o, t, n) : o && (o.proxy && (o.fn.proxy = !0), t[o.key] = o.fn)
				}
				return r && (t.$key = r), t
			}

			function Ue(e, t) {
				for (var n = 0; n < t.length; n += 2) {
					var r = t[n];
					"string" == typeof r && r && (e[t[n]] = t[n + 1])
				}
				return e
			}

			function He(e, t) {
				return "string" == typeof e ? t + e : e
			}

			function ze(e) {
				e._o = De, e._n = v, e._s = p, e._l = Ee, e._t = Le, e._q = $, e._i = S, e._m = Me, e._f = Ie, e._k = je, e._b = Pe, e._v = j, e._e = pa, e._u = Be, e._g = qe, e._d = Ue, e._p = He
			}

			function Ve(e, t, n, r, i) {
				var a, s = this,
					c = i.options;
				y(r, "_uid") ? (a = Object.create(r), a._original = r) : (a = r, r = r._original);
				var u = o(c._compiled),
					l = !u;
				this.data = e, this.props = t, this.children = n, this.parent = r, this.listeners = e.on || Ao, this.injections = Ae(c.inject, r), this.slots = function() {
					return s.$slots || ke(e.scopedSlots, s.$slots = $e(n, r)), s.$slots
				}, Object.defineProperty(this, "scopedSlots", {
					enumerable: !0,
					get: function() {
						return ke(e.scopedSlots, this.slots())
					}
				}), u && (this.$options = c, this.$slots = this.slots(), this.$scopedSlots = ke(e.scopedSlots, this.$slots)), c._scopeId ? this._c = function(e, t, n, i) {
					var o = et(a, e, t, n, i, l);
					return o && !Array.isArray(o) && (o.fnScopeId = c._scopeId, o.fnContext = r), o
				} : this._c = function(e, t, n, r) {
					return et(a, e, t, n, r, l)
				}
			}

			function Ge(e, t, n, r, o) {
				var a = e.options,
					s = {},
					c = a.props;
				if (i(c))
					for (var u in c) s[u] = ee(u, c, t || Ao);
				else i(n.attrs) && Je(s, n.attrs), i(n.props) && Je(s, n.props);
				var l = new Ve(n, s, o, r, e),
					f = a.render.call(null, l._c, l);
				if (f instanceof fa) return Ke(f, n, l.parent, a, l);
				if (Array.isArray(f)) {
					for (var d = _e(f) || [], p = new Array(d.length), v = 0; v < d.length; v++) p[v] = Ke(d[v], n, l.parent, a, l);
					return p
				}
			}

			function Ke(e, t, n, r, i) {
				var o = P(e);
				return o.fnContext = n, o.fnOptions = r, t.slot && ((o.data || (o.data = {})).slot = t.slot), o
			}

			function Je(e, t) {
				for (var n in t) e[Eo(n)] = t[n]
			}

			function We(e, t, n, a, s) {
				if (!r(e)) {
					var u = n.$options._base;
					if (c(e) && (e = u.extend(e)), "function" == typeof e) {
						var l;
						if (r(e.cid) && (l = e, void 0 === (e = st(l, u)))) return at(l, t, n, a, s);
						t = t || {}, Ut(e), i(t.model) && Qe(e.options, t);
						var f = me(t, e, s);
						if (o(e.options.functional)) return Ge(e, f, t, n, a);
						var d = t.on;
						if (t.on = t.nativeOn, o(e.options.abstract)) {
							var p = t.slot;
							t = {}, p && (t.slot = p)
						}
						Ze(t);
						var v = e.options.name || s;
						return new fa("vue-component-" + e.cid + (v ? "-" + v : ""), t, void 0, void 0, void 0, n, {
							Ctor: e,
							propsData: f,
							listeners: d,
							tag: s,
							children: a
						}, l)
					}
				}
			}

			function Xe(e, t) {
				var n = {
						_isComponent: !0,
						_parentVnode: e,
						parent: t
					},
					r = e.data.inlineTemplate;
				return i(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns), new e.componentOptions.Ctor(n)
			}

			function Ze(e) {
				for (var t = e.hook || (e.hook = {}), n = 0; n < Na.length; n++) {
					var r = Na[n],
						i = t[r],
						o = Ia[r];
					i === o || i && i._merged || (t[r] = i ? Ye(o, i) : o)
				}
			}

			function Ye(e, t) {
				var n = function(n, r) {
					e(n, r), t(n, r)
				};
				return n._merged = !0, n
			}

			function Qe(e, t) {
				var n = e.model && e.model.prop || "value",
					r = e.model && e.model.event || "input";
				(t.attrs || (t.attrs = {}))[n] = t.model.value;
				var o = t.on || (t.on = {}),
					a = o[r],
					s = t.model.callback;
				i(a) ? (Array.isArray(a) ? -1 === a.indexOf(s) : a !== s) && (o[r] = [s].concat(a)) : o[r] = s
			}

			function et(e, t, n, r, i, a) {
				return (Array.isArray(n) || s(n)) && (i = r, r = n, n = void 0), o(a) && (i = Pa), tt(e, t, n, r, i)
			}

			function tt(e, t, n, r, o) {
				if (i(n) && i(n.__ob__)) return pa();
				if (i(n) && i(n.is) && (t = n.is), !t) return pa();
				Array.isArray(r) && "function" == typeof r[0] && (n = n || {}, n.scopedSlots = {
					default: r[0]
				}, r.length = 0), o === Pa ? r = _e(r) : o === ja && (r = ge(r));
				var a, s;
				if ("string" == typeof t) {
					var c;
					s = e.$vnode && e.$vnode.ns || qo.getTagNamespace(t), a = qo.isReservedTag(t) ? new fa(qo.parsePlatformTagName(t), n, r, void 0, void 0, e) : n && n.pre || !i(c = Q(e.$options, "components", t)) ? new fa(t, n, r, void 0, void 0, e) : We(c, n, e, r, t)
				} else a = We(t, n, e, r);
				return Array.isArray(a) ? a : i(a) ? (i(s) && nt(a, s), i(n) && rt(n), a) : pa()
			}

			function nt(e, t, n) {
				if (e.ns = t, "foreignObject" === e.tag && (t = void 0, n = !0), i(e.children))
					for (var a = 0, s = e.children.length; a < s; a++) {
						var c = e.children[a];
						i(c.tag) && (r(c.ns) || o(n) && "svg" !== c.tag) && nt(c, t, n)
					}
			}

			function rt(e) {
				c(e.style) && fe(e.style), c(e.class) && fe(e.class)
			}

			function it(e) {
				e._vnode = null, e._staticTrees = null;
				var t = e.$options,
					n = e.$vnode = t._parentVnode,
					r = n && n.context;
				e.$slots = $e(t._renderChildren, r), e.$scopedSlots = Ao, e._c = function(t, n, r, i) {
					return et(e, t, n, r, i, !1)
				}, e.$createElement = function(t, n, r, i) {
					return et(e, t, n, r, i, !0)
				};
				var i = n && n.data;
				q(e, "$attrs", i && i.attrs || Ao, null, !0), q(e, "$listeners", t._parentListeners || Ao, null, !0)
			}

			function ot(e, t) {
				return (e.__esModule || aa && "Module" === e[Symbol.toStringTag]) && (e = e.default), c(e) ? t.extend(e) : e
			}

			function at(e, t, n, r, i) {
				var o = pa();
				return o.asyncFactory = e, o.asyncMeta = {
					data: t,
					context: n,
					children: r,
					tag: i
				}, o
			}

			function st(e, t) {
				if (o(e.error) && i(e.errorComp)) return e.errorComp;
				if (i(e.resolved)) return e.resolved;
				var n = Ma;
				if (n && i(e.owners) && -1 === e.owners.indexOf(n) && e.owners.push(n), o(e.loading) && i(e.loadingComp)) return e.loadingComp;
				if (n && !i(e.owners)) {
					var a = e.owners = [n],
						s = !0,
						u = null,
						l = null;
					n.$on("hook:destroyed", function() {
						return m(a, n)
					});
					var f = function(e) {
							for (var t = 0, n = a.length; t < n; t++) a[t].$forceUpdate();
							e && (a.length = 0, null !== u && (clearTimeout(u), u = null), null !== l && (clearTimeout(l), l = null))
						},
						p = k(function(n) {
							e.resolved = ot(n, t), s ? a.length = 0 : f(!0)
						}),
						v = k(function(t) {
							i(e.errorComp) && (e.error = !0, f(!0))
						}),
						h = e(p, v);
					return c(h) && (d(h) ? r(e.resolved) && h.then(p, v) : d(h.component) && (h.component.then(p, v), i(h.error) && (e.errorComp = ot(h.error, t)), i(h.loading) && (e.loadingComp = ot(h.loading, t), 0 === h.delay ? e.loading = !0 : u = setTimeout(function() {
						u = null, r(e.resolved) && r(e.error) && (e.loading = !0, f(!1))
					}, h.delay || 200)), i(h.timeout) && (l = setTimeout(function() {
						l = null, r(e.resolved) && v(null)
					}, h.timeout)))), s = !1, e.loading ? e.loadingComp : e.resolved
				}
			}

			function ct(e) {
				return e.isComment && e.asyncFactory
			}

			function ut(e) {
				if (Array.isArray(e))
					for (var t = 0; t < e.length; t++) {
						var n = e[t];
						if (i(n) && (i(n.componentOptions) || ct(n))) return n
					}
			}

			function lt(e) {
				e._events = Object.create(null), e._hasHookEvent = !1;
				var t = e.$options._parentListeners;
				t && vt(e, t)
			}

			function ft(e, t) {
				La.$on(e, t)
			}

			function dt(e, t) {
				La.$off(e, t)
			}

			function pt(e, t) {
				var n = La;
				return function r() {
					null !== t.apply(null, arguments) && n.$off(e, r)
				}
			}

			function vt(e, t, n) {
				La = e, ve(t, n || {}, ft, dt, pt, e), La = void 0
			}

			function ht(e) {
				var t = Da;
				return Da = e,
					function() {
						Da = t
					}
			}

			function mt(e) {
				var t = e.$options,
					n = t.parent;
				if (n && !t.abstract) {
					for (; n.$options.abstract && n.$parent;) n = n.$parent;
					n.$children.push(e)
				}
				e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1
			}

			function yt(e, t, n) {
				e.$el = t, e.$options.render || (e.$options.render = pa), Ct(e, "beforeMount");
				var r;
				return r = function() {
					e._update(e._render(), n)
				}, new Ja(e, r, A, {
					before: function() {
						e._isMounted && !e._isDestroyed && Ct(e, "beforeUpdate")
					}
				}, !0), n = !1, null == e.$vnode && (e._isMounted = !0, Ct(e, "mounted")), e
			}

			function gt(e, t, n, r, i) {
				var o = r.data.scopedSlots,
					a = e.$scopedSlots,
					s = !!(o && !o.$stable || a !== Ao && !a.$stable || o && e.$scopedSlots.$key !== o.$key),
					c = !!(i || e.$options._renderChildren || s);
				if (e.$options._parentVnode = r, e.$vnode = r, e._vnode && (e._vnode.parent = r), e.$options._renderChildren = i, e.$attrs = r.data.attrs || Ao, e.$listeners = n || Ao, t && e.$options.props) {
					M(!1);
					for (var u = e._props, l = e.$options._propKeys || [], f = 0; f < l.length; f++) {
						var d = l[f],
							p = e.$options.props;
						u[d] = ee(d, p, t, e)
					}
					M(!0), e.$options.propsData = t
				}
				n = n || Ao;
				var v = e.$options._parentListeners;
				e.$options._parentListeners = n, vt(e, n, v), c && (e.$slots = $e(i, r.context), e.$forceUpdate())
			}

			function _t(e) {
				for (; e && (e = e.$parent);)
					if (e._inactive) return !0;
				return !1
			}

			function bt(e, t) {
				if (t) {
					if (e._directInactive = !1, _t(e)) return
				} else if (e._directInactive) return;
				if (e._inactive || null === e._inactive) {
					e._inactive = !1;
					for (var n = 0; n < e.$children.length; n++) bt(e.$children[n]);
					Ct(e, "activated")
				}
			}

			function wt(e, t) {
				if (!(t && (e._directInactive = !0, _t(e)) || e._inactive)) {
					e._inactive = !0;
					for (var n = 0; n < e.$children.length; n++) wt(e.$children[n]);
					Ct(e, "deactivated")
				}
			}

			function Ct(e, t) {
				I();
				var n = e.$options[t],
					r = t + " hook";
				if (n)
					for (var i = 0, o = n.length; i < o; i++) ae(n[i], e, null, e, r);
				e._hasHookEvent && e.$emit("hook:" + t), N()
			}

			function xt() {
				Ha = Ra.length = Fa.length = 0, qa = {}, Ba = Ua = !1
			}

			function At() {
				za = Va(), Ua = !0;
				var e, t;
				for (Ra.sort(function(e, t) {
						return e.id - t.id
					}), Ha = 0; Ha < Ra.length; Ha++) e = Ra[Ha], e.before && e.before(), t = e.id, qa[t] = null, e.run();
				var n = Fa.slice(),
					r = Ra.slice();
				xt(), kt(n), $t(r), oa && qo.devtools && oa.emit("flush")
			}

			function $t(e) {
				for (var t = e.length; t--;) {
					var n = e[t],
						r = n.vm;
					r._watcher === n && r._isMounted && !r._isDestroyed && Ct(r, "updated")
				}
			}

			function St(e) {
				e._inactive = !1, Fa.push(e)
			}

			function kt(e) {
				for (var t = 0; t < e.length; t++) e[t]._inactive = !0, bt(e[t], !0)
			}

			function Ot(e) {
				var t = e.id;
				if (null == qa[t]) {
					if (qa[t] = !0, Ua) {
						for (var n = Ra.length - 1; n > Ha && Ra[n].id > e.id;) n--;
						Ra.splice(n + 1, 0, e)
					} else Ra.push(e);
					Ba || (Ba = !0, le(At))
				}
			}

			function Tt(e, t, n) {
				Wa.get = function() {
					return this[t][n]
				}, Wa.set = function(e) {
					this[t][n] = e
				}, Object.defineProperty(e, n, Wa)
			}

			function Et(e) {
				e._watchers = [];
				var t = e.$options;
				t.props && Lt(e, t.props), t.methods && Rt(e, t.methods), t.data ? It(e) : F(e._data = {}, !0), t.computed && jt(e, t.computed), t.watch && t.watch !== Qo && Ft(e, t.watch)
			}

			function Lt(e, t) {
				var n = e.$options.propsData || {},
					r = e._props = {},
					i = e.$options._propKeys = [],
					o = !e.$parent;
				o || M(!1);
				for (var a in t) ! function(o) {
					i.push(o);
					var a = ee(o, t, n, e);
					q(r, o, a), o in e || Tt(e, "_props", o)
				}(a);
				M(!0)
			}

			function It(e) {
				var t = e.$options.data;
				t = e._data = "function" == typeof t ? Nt(t, e) : t || {}, u(t) || (t = {});
				for (var n = Object.keys(t), r = e.$options.props, i = (e.$options.methods, n.length); i--;) {
					var o = n[i];
					r && y(r, o) || O(o) || Tt(e, "_data", o)
				}
				F(t, !0)
			}

			function Nt(e, t) {
				I();
				try {
					return e.call(t, t)
				} catch (e) {
					return oe(e, t, "data()"), {}
				} finally {
					N()
				}
			}

			function jt(e, t) {
				var n = e._computedWatchers = Object.create(null),
					r = ia();
				for (var i in t) {
					var o = t[i],
						a = "function" == typeof o ? o : o.get;
					r || (n[i] = new Ja(e, a || A, A, Xa)), i in e || Pt(e, i, o)
				}
			}

			function Pt(e, t, n) {
				var r = !ia();
				"function" == typeof n ? (Wa.get = r ? Mt(t) : Dt(n), Wa.set = A) : (Wa.get = n.get ? r && !1 !== n.cache ? Mt(t) : Dt(n.get) : A, Wa.set = n.set || A), Object.defineProperty(e, t, Wa)
			}

			function Mt(e) {
				return function() {
					var t = this._computedWatchers && this._computedWatchers[e];
					if (t) return t.dirty && t.evaluate(), ua.target && t.depend(), t.value
				}
			}

			function Dt(e) {
				return function() {
					return e.call(this, this)
				}
			}

			function Rt(e, t) {
				e.$options.props;
				for (var n in t) e[n] = "function" != typeof t[n] ? A : jo(t[n], e)
			}

			function Ft(e, t) {
				for (var n in t) {
					var r = t[n];
					if (Array.isArray(r))
						for (var i = 0; i < r.length; i++) qt(e, n, r[i]);
					else qt(e, n, r)
				}
			}

			function qt(e, t, n, r) {
				return u(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r)
			}

			function Bt(e, t) {
				var n = e.$options = Object.create(e.constructor.options),
					r = t._parentVnode;
				n.parent = t.parent, n._parentVnode = r;
				var i = r.componentOptions;
				n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, n._componentTag = i.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns)
			}

			function Ut(e) {
				var t = e.options;
				if (e.super) {
					var n = Ut(e.super);
					if (n !== e.superOptions) {
						e.superOptions = n;
						var r = Ht(e);
						r && C(e.extendOptions, r), t = e.options = Y(n, e.extendOptions), t.name && (t.components[t.name] = e)
					}
				}
				return t
			}

			function Ht(e) {
				var t, n = e.options,
					r = e.sealedOptions;
				for (var i in n) n[i] !== r[i] && (t || (t = {}), t[i] = n[i]);
				return t
			}

			function zt(e) {
				this._init(e)
			}

			function Vt(e) {
				e.use = function(e) {
					var t = this._installedPlugins || (this._installedPlugins = []);
					if (t.indexOf(e) > -1) return this;
					var n = w(arguments, 1);
					return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this
				}
			}

			function Gt(e) {
				e.mixin = function(e) {
					return this.options = Y(this.options, e), this
				}
			}

			function Kt(e) {
				e.cid = 0;
				var t = 1;
				e.extend = function(e) {
					e = e || {};
					var n = this,
						r = n.cid,
						i = e._Ctor || (e._Ctor = {});
					if (i[r]) return i[r];
					var o = e.name || n.options.name,
						a = function(e) {
							this._init(e)
						};
					return a.prototype = Object.create(n.prototype), a.prototype.constructor = a, a.cid = t++, a.options = Y(n.options, e), a.super = n, a.options.props && Jt(a), a.options.computed && Wt(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, Ro.forEach(function(e) {
						a[e] = n[e]
					}), o && (a.options.components[o] = a), a.superOptions = n.options, a.extendOptions = e, a.sealedOptions = C({}, a.options), i[r] = a, a
				}
			}

			function Jt(e) {
				var t = e.options.props;
				for (var n in t) Tt(e.prototype, "_props", n)
			}

			function Wt(e) {
				var t = e.options.computed;
				for (var n in t) Pt(e.prototype, n, t[n])
			}

			function Xt(e) {
				Ro.forEach(function(t) {
					e[t] = function(e, n) {
						return n ? ("component" === t && u(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = {
							bind: n,
							update: n
						}), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e]
					}
				})
			}

			function Zt(e) {
				return e && (e.Ctor.options.name || e.tag)
			}

			function Yt(e, t) {
				return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : !!l(e) && e.test(t)
			}

			function Qt(e, t) {
				var n = e.cache,
					r = e.keys,
					i = e._vnode;
				for (var o in n) {
					var a = n[o];
					if (a) {
						var s = Zt(a.componentOptions);
						s && !t(s) && en(n, o, r, i)
					}
				}
			}

			function en(e, t, n, r) {
				var i = e[t];
				!i || r && i.tag === r.tag || i.componentInstance.$destroy(), e[t] = null, m(n, t)
			}

			function tn(e) {
				for (var t = e.data, n = e, r = e; i(r.componentInstance);)(r = r.componentInstance._vnode) && r.data && (t = nn(r.data, t));
				for (; i(n = n.parent);) n && n.data && (t = nn(t, n.data));
				return rn(t.staticClass, t.class)
			}

			function nn(e, t) {
				return {
					staticClass: on(e.staticClass, t.staticClass),
					class: i(e.class) ? [e.class, t.class] : t.class
				}
			}

			function rn(e, t) {
				return i(e) || i(t) ? on(e, an(t)) : ""
			}

			function on(e, t) {
				return e ? t ? e + " " + t : e : t || ""
			}

			function an(e) {
				return Array.isArray(e) ? sn(e) : c(e) ? cn(e) : "string" == typeof e ? e : ""
			}

			function sn(e) {
				for (var t, n = "", r = 0, o = e.length; r < o; r++) i(t = an(e[r])) && "" !== t && (n && (n += " "), n += t);
				return n
			}

			function cn(e) {
				var t = "";
				for (var n in e) e[n] && (t && (t += " "), t += n);
				return t
			}

			function un(e) {
				return As(e) ? "svg" : "math" === e ? "math" : void 0
			}

			function ln(e) {
				if (!zo) return !0;
				if (Ss(e)) return !1;
				if (e = e.toLowerCase(), null != ks[e]) return ks[e];
				var t = document.createElement(e);
				return e.indexOf("-") > -1 ? ks[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : ks[e] = /HTMLUnknownElement/.test(t.toString())
			}

			function fn(e) {
				if ("string" == typeof e) {
					var t = document.querySelector(e);
					return t || document.createElement("div")
				}
				return e
			}

			function dn(e, t) {
				var n = document.createElement(e);
				return "select" !== e ? n : (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n)
			}

			function pn(e, t) {
				return document.createElementNS(Cs[e], t)
			}

			function vn(e) {
				return document.createTextNode(e)
			}

			function hn(e) {
				return document.createComment(e)
			}

			function mn(e, t, n) {
				e.insertBefore(t, n)
			}

			function yn(e, t) {
				e.removeChild(t)
			}

			function gn(e, t) {
				e.appendChild(t)
			}

			function _n(e) {
				return e.parentNode
			}

			function bn(e) {
				return e.nextSibling
			}

			function wn(e) {
				return e.tagName
			}

			function Cn(e, t) {
				e.textContent = t
			}

			function xn(e, t) {
				e.setAttribute(t, "")
			}

			function An(e, t) {
				var n = e.data.ref;
				if (i(n)) {
					var r = e.context,
						o = e.componentInstance || e.elm,
						a = r.$refs;
					t ? Array.isArray(a[n]) ? m(a[n], o) : a[n] === o && (a[n] = void 0) : e.data.refInFor ? Array.isArray(a[n]) ? a[n].indexOf(o) < 0 && a[n].push(o) : a[n] = [o] : a[n] = o
				}
			}

			function $n(e, t) {
				return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && i(e.data) === i(t.data) && Sn(e, t) || o(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && r(t.asyncFactory.error))
			}

			function Sn(e, t) {
				if ("input" !== e.tag) return !0;
				var n, r = i(n = e.data) && i(n = n.attrs) && n.type,
					o = i(n = t.data) && i(n = n.attrs) && n.type;
				return r === o || Os(r) && Os(o)
			}

			function kn(e, t, n) {
				var r, o, a = {};
				for (r = t; r <= n; ++r) o = e[r].key, i(o) && (a[o] = r);
				return a
			}

			function On(e, t) {
				(e.data.directives || t.data.directives) && Tn(e, t)
			}

			function Tn(e, t) {
				var n, r, i, o = e === Ls,
					a = t === Ls,
					s = En(e.data.directives, e.context),
					c = En(t.data.directives, t.context),
					u = [],
					l = [];
				for (n in c) r = s[n], i = c[n], r ? (i.oldValue = r.value, i.oldArg = r.arg, In(i, "update", t, e), i.def && i.def.componentUpdated && l.push(i)) : (In(i, "bind", t, e), i.def && i.def.inserted && u.push(i));
				if (u.length) {
					var f = function() {
						for (var n = 0; n < u.length; n++) In(u[n], "inserted", t, e)
					};
					o ? he(t, "insert", f) : f()
				}
				if (l.length && he(t, "postpatch", function() {
						for (var n = 0; n < l.length; n++) In(l[n], "componentUpdated", t, e)
					}), !o)
					for (n in s) c[n] || In(s[n], "unbind", e, e, a)
			}

			function En(e, t) {
				var n = Object.create(null);
				if (!e) return n;
				var r, i;
				for (r = 0; r < e.length; r++) i = e[r], i.modifiers || (i.modifiers = js), n[Ln(i)] = i, i.def = Q(t.$options, "directives", i.name, !0);
				return n
			}

			function Ln(e) {
				return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".")
			}

			function In(e, t, n, r, i) {
				var o = e.def && e.def[t];
				if (o) try {
					o(n.elm, e, n, r, i)
				} catch (r) {
					oe(r, n.context, "directive " + e.name + " " + t + " hook")
				}
			}

			function Nn(e, t) {
				var n = t.componentOptions;
				if (!(i(n) && !1 === n.Ctor.options.inheritAttrs || r(e.data.attrs) && r(t.data.attrs))) {
					var o, a, s = t.elm,
						c = e.data.attrs || {},
						u = t.data.attrs || {};
					i(u.__ob__) && (u = t.data.attrs = C({}, u));
					for (o in u) a = u[o], c[o] !== a && jn(s, o, a);
					(Jo || Xo) && u.value !== c.value && jn(s, "value", u.value);
					for (o in c) r(u[o]) && (_s(o) ? s.removeAttributeNS(gs, bs(o)) : vs(o) || s.removeAttribute(o))
				}
			}

			function jn(e, t, n) {
				e.tagName.indexOf("-") > -1 ? Pn(e, t, n) : ys(t) ? ws(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : vs(t) ? e.setAttribute(t, ms(t, n)) : _s(t) ? ws(n) ? e.removeAttributeNS(gs, bs(t)) : e.setAttributeNS(gs, t, n) : Pn(e, t, n)
			}

			function Pn(e, t, n) {
				if (ws(n)) e.removeAttribute(t);
				else {
					if (Jo && !Wo && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
						var r = function(t) {
							t.stopImmediatePropagation(), e.removeEventListener("input", r)
						};
						e.addEventListener("input", r), e.__ieph = !0
					}
					e.setAttribute(t, n)
				}
			}

			function Mn(e, t) {
				var n = t.elm,
					o = t.data,
					a = e.data;
				if (!(r(o.staticClass) && r(o.class) && (r(a) || r(a.staticClass) && r(a.class)))) {
					var s = tn(t),
						c = n._transitionClasses;
					i(c) && (s = on(s, an(c))), s !== n._prevClass && (n.setAttribute("class", s), n._prevClass = s)
				}
			}

			function Dn(e) {
				function t() {
					(a || (a = [])).push(e.slice(v, i).trim()), v = i + 1
				}
				var n, r, i, o, a, s = !1,
					c = !1,
					u = !1,
					l = !1,
					f = 0,
					d = 0,
					p = 0,
					v = 0;
				for (i = 0; i < e.length; i++)
					if (r = n, n = e.charCodeAt(i), s) 39 === n && 92 !== r && (s = !1);
					else if (c) 34 === n && 92 !== r && (c = !1);
				else if (u) 96 === n && 92 !== r && (u = !1);
				else if (l) 47 === n && 92 !== r && (l = !1);
				else if (124 !== n || 124 === e.charCodeAt(i + 1) || 124 === e.charCodeAt(i - 1) || f || d || p) {
					switch (n) {
						case 34:
							c = !0;
							break;
						case 39:
							s = !0;
							break;
						case 96:
							u = !0;
							break;
						case 40:
							p++;
							break;
						case 41:
							p--;
							break;
						case 91:
							d++;
							break;
						case 93:
							d--;
							break;
						case 123:
							f++;
							break;
						case 125:
							f--
					}
					if (47 === n) {
						for (var h = i - 1, m = void 0; h >= 0 && " " === (m = e.charAt(h)); h--);
						m && Rs.test(m) || (l = !0)
					}
				} else void 0 === o ? (v = i + 1, o = e.slice(0, i).trim()) : t();
				if (void 0 === o ? o = e.slice(0, i).trim() : 0 !== v && t(), a)
					for (i = 0; i < a.length; i++) o = Rn(o, a[i]);
				return o
			}

			function Rn(e, t) {
				var n = t.indexOf("(");
				if (n < 0) return '_f("' + t + '")(' + e + ")";
				var r = t.slice(0, n),
					i = t.slice(n + 1);
				return '_f("' + r + '")(' + e + (")" !== i ? "," + i : i)
			}

			function Fn(e, t) {
				console.error("[Vue compiler]: " + e)
			}

			function qn(e, t) {
				return e ? e.map(function(e) {
					return e[t]
				}).filter(function(e) {
					return e
				}) : []
			}

			function Bn(e, t, n, r, i) {
				(e.props || (e.props = [])).push(Zn({
					name: t,
					value: n,
					dynamic: i
				}, r)), e.plain = !1
			}

			function Un(e, t, n, r, i) {
				(i ? e.dynamicAttrs || (e.dynamicAttrs = []) : e.attrs || (e.attrs = [])).push(Zn({
					name: t,
					value: n,
					dynamic: i
				}, r)), e.plain = !1
			}

			function Hn(e, t, n, r) {
				e.attrsMap[t] = n, e.attrsList.push(Zn({
					name: t,
					value: n
				}, r))
			}

			function zn(e, t, n, r, i, o, a, s) {
				(e.directives || (e.directives = [])).push(Zn({
					name: t,
					rawName: n,
					value: r,
					arg: i,
					isDynamicArg: o,
					modifiers: a
				}, s)), e.plain = !1
			}

			function Vn(e, t, n) {
				return n ? "_p(" + t + ',"' + e + '")' : e + t
			}

			function Gn(e, t, n, r, i, o, a, s) {
				r = r || Ao, r.right ? s ? t = "(" + t + ")==='click'?'contextmenu':(" + t + ")" : "click" === t && (t = "contextmenu", delete r.right) : r.middle && (s ? t = "(" + t + ")==='click'?'mouseup':(" + t + ")" : "click" === t && (t = "mouseup")), r.capture && (delete r.capture, t = Vn("!", t, s)), r.once && (delete r.once, t = Vn("~", t, s)), r.passive && (delete r.passive, t = Vn("&", t, s));
				var c;
				r.native ? (delete r.native, c = e.nativeEvents || (e.nativeEvents = {})) : c = e.events || (e.events = {});
				var u = Zn({
					value: n.trim(),
					dynamic: s
				}, a);
				r !== Ao && (u.modifiers = r);
				var l = c[t];
				Array.isArray(l) ? i ? l.unshift(u) : l.push(u) : c[t] = l ? i ? [u, l] : [l, u] : u, e.plain = !1
			}

			function Kn(e, t) {
				return e.rawAttrsMap[":" + t] || e.rawAttrsMap["v-bind:" + t] || e.rawAttrsMap[t]
			}

			function Jn(e, t, n) {
				var r = Wn(e, ":" + t) || Wn(e, "v-bind:" + t);
				if (null != r) return Dn(r);
				if (!1 !== n) {
					var i = Wn(e, t);
					if (null != i) return JSON.stringify(i)
				}
			}

			function Wn(e, t, n) {
				var r;
				if (null != (r = e.attrsMap[t]))
					for (var i = e.attrsList, o = 0, a = i.length; o < a; o++)
						if (i[o].name === t) {
							i.splice(o, 1);
							break
						}
				return n && delete e.attrsMap[t], r
			}

			function Xn(e, t) {
				for (var n = e.attrsList, r = 0, i = n.length; r < i; r++) {
					var o = n[r];
					if (t.test(o.name)) return n.splice(r, 1), o
				}
			}

			function Zn(e, t) {
				return t && (null != t.start && (e.start = t.start), null != t.end && (e.end = t.end)), e
			}

			function Yn(e, t, n) {
				var r = n || {},
					i = r.number,
					o = r.trim,
					a = "$$v";
				o && (a = "(typeof $$v === 'string'? $$v.trim(): $$v)"), i && (a = "_n(" + a + ")");
				var s = Qn(t, a);
				e.model = {
					value: "(" + t + ")",
					expression: JSON.stringify(t),
					callback: "function ($$v) {" + s + "}"
				}
			}

			function Qn(e, t) {
				var n = er(e);
				return null === n.key ? e + "=" + t : "$set(" + n.exp + ", " + n.key + ", " + t + ")"
			}

			function er(e) {
				if (e = e.trim(), ts = e.length, e.indexOf("[") < 0 || e.lastIndexOf("]") < ts - 1) return is = e.lastIndexOf("."), is > -1 ? {
					exp: e.slice(0, is),
					key: '"' + e.slice(is + 1) + '"'
				} : {
					exp: e,
					key: null
				};
				for (ns = e, is = os = as = 0; !nr();) rs = tr(), rr(rs) ? or(rs) : 91 === rs && ir(rs);
				return {
					exp: e.slice(0, os),
					key: e.slice(os + 1, as)
				}
			}

			function tr() {
				return ns.charCodeAt(++is)
			}

			function nr() {
				return is >= ts
			}

			function rr(e) {
				return 34 === e || 39 === e
			}

			function ir(e) {
				var t = 1;
				for (os = is; !nr();)
					if (e = tr(), rr(e)) or(e);
					else if (91 === e && t++, 93 === e && t--, 0 === t) {
					as = is;
					break
				}
			}

			function or(e) {
				for (var t = e; !nr() && (e = tr()) !== t;);
			}

			function ar(e, t, n) {
				ss = n;
				var r = t.value,
					i = t.modifiers,
					o = e.tag,
					a = e.attrsMap.type;
				if (e.component) return Yn(e, r, i), !1;
				if ("select" === o) ur(e, r, i);
				else if ("input" === o && "checkbox" === a) sr(e, r, i);
				else if ("input" === o && "radio" === a) cr(e, r, i);
				else if ("input" === o || "textarea" === o) lr(e, r, i);
				else if (!qo.isReservedTag(o)) return Yn(e, r, i), !1;
				return !0
			}

			function sr(e, t, n) {
				var r = n && n.number,
					i = Jn(e, "value") || "null",
					o = Jn(e, "true-value") || "true",
					a = Jn(e, "false-value") || "false";
				Bn(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + i + ")>-1" + ("true" === o ? ":(" + t + ")" : ":_q(" + t + "," + o + ")")), Gn(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + o + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + Qn(t, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + Qn(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + Qn(t, "$$c") + "}", null, !0)
			}

			function cr(e, t, n) {
				var r = n && n.number,
					i = Jn(e, "value") || "null";
				i = r ? "_n(" + i + ")" : i, Bn(e, "checked", "_q(" + t + "," + i + ")"), Gn(e, "change", Qn(t, i), null, !0)
			}

			function ur(e, t, n) {
				var r = n && n.number,
					i = 'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (r ? "_n(val)" : "val") + "})",
					o = "var $$selectedVal = " + i + ";";
				o = o + " " + Qn(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), Gn(e, "change", o, null, !0)
			}

			function lr(e, t, n) {
				var r = e.attrsMap.type,
					i = n || {},
					o = i.lazy,
					a = i.number,
					s = i.trim,
					c = !o && "range" !== r,
					u = o ? "change" : "range" === r ? Fs : "input",
					l = "$event.target.value";
				s && (l = "$event.target.value.trim()"), a && (l = "_n(" + l + ")");
				var f = Qn(t, l);
				c && (f = "if($event.target.composing)return;" + f), Bn(e, "value", "(" + t + ")"), Gn(e, u, f, null, !0), (s || a) && Gn(e, "blur", "$forceUpdate()")
			}

			function fr(e) {
				if (i(e[Fs])) {
					var t = Jo ? "change" : "input";
					e[t] = [].concat(e[Fs], e[t] || []), delete e[Fs]
				}
				i(e[qs]) && (e.change = [].concat(e[qs], e.change || []), delete e[qs])
			}

			function dr(e, t, n) {
				var r = cs;
				return function i() {
					null !== t.apply(null, arguments) && vr(e, i, n, r)
				}
			}

			function pr(e, t, n, r) {
				if (Bs) {
					var i = za,
						o = t;
					t = o._wrapper = function(e) {
						if (e.target === e.currentTarget || e.timeStamp >= i || e.timeStamp <= 0 || e.target.ownerDocument !== document) return o.apply(this, arguments)
					}
				}
				cs.addEventListener(e, t, ea ? {
					capture: n,
					passive: r
				} : n)
			}

			function vr(e, t, n, r) {
				(r || cs).removeEventListener(e, t._wrapper || t, n)
			}

			function hr(e, t) {
				if (!r(e.data.on) || !r(t.data.on)) {
					var n = t.data.on || {},
						i = e.data.on || {};
					cs = t.elm, fr(n), ve(n, i, pr, vr, dr, t.context), cs = void 0
				}
			}

			function mr(e, t) {
				if (!r(e.data.domProps) || !r(t.data.domProps)) {
					var n, o, a = t.elm,
						s = e.data.domProps || {},
						c = t.data.domProps || {};
					i(c.__ob__) && (c = t.data.domProps = C({}, c));
					for (n in s) n in c || (a[n] = "");
					for (n in c) {
						if (o = c[n], "textContent" === n || "innerHTML" === n) {
							if (t.children && (t.children.length = 0), o === s[n]) continue;
							1 === a.childNodes.length && a.removeChild(a.childNodes[0])
						}
						if ("value" === n && "PROGRESS" !== a.tagName) {
							a._value = o;
							var u = r(o) ? "" : String(o);
							yr(a, u) && (a.value = u)
						} else if ("innerHTML" === n && As(a.tagName) && r(a.innerHTML)) {
							us = us || document.createElement("div"), us.innerHTML = "<svg>" + o + "</svg>";
							for (var l = us.firstChild; a.firstChild;) a.removeChild(a.firstChild);
							for (; l.firstChild;) a.appendChild(l.firstChild)
						} else if (o !== s[n]) try {
							a[n] = o
						} catch (e) {}
					}
				}
			}

			function yr(e, t) {
				return !e.composing && ("OPTION" === e.tagName || gr(e, t) || _r(e, t))
			}

			function gr(e, t) {
				var n = !0;
				try {
					n = document.activeElement !== e
				} catch (e) {}
				return n && e.value !== t
			}

			function _r(e, t) {
				var n = e.value,
					r = e._vModifiers;
				if (i(r)) {
					if (r.number) return v(n) !== v(t);
					if (r.trim) return n.trim() !== t.trim()
				}
				return n !== t
			}

			function br(e) {
				var t = wr(e.style);
				return e.staticStyle ? C(e.staticStyle, t) : t
			}

			function wr(e) {
				return Array.isArray(e) ? x(e) : "string" == typeof e ? zs(e) : e
			}

			function Cr(e, t) {
				var n, r = {};
				if (t)
					for (var i = e; i.componentInstance;)(i = i.componentInstance._vnode) && i.data && (n = br(i.data)) && C(r, n);
				(n = br(e.data)) && C(r, n);
				for (var o = e; o = o.parent;) o.data && (n = br(o.data)) && C(r, n);
				return r
			}

			function xr(e, t) {
				var n = t.data,
					o = e.data;
				if (!(r(n.staticStyle) && r(n.style) && r(o.staticStyle) && r(o.style))) {
					var a, s, c = t.elm,
						u = o.staticStyle,
						l = o.normalizedStyle || o.style || {},
						f = u || l,
						d = wr(t.data.style) || {};
					t.data.normalizedStyle = i(d.__ob__) ? C({}, d) : d;
					var p = Cr(t, !0);
					for (s in f) r(p[s]) && Ks(c, s, "");
					for (s in p)(a = p[s]) !== f[s] && Ks(c, s, null == a ? "" : a)
				}
			}

			function Ar(e, t) {
				if (t && (t = t.trim()))
					if (e.classList) t.indexOf(" ") > -1 ? t.split(Zs).forEach(function(t) {
						return e.classList.add(t)
					}) : e.classList.add(t);
					else {
						var n = " " + (e.getAttribute("class") || "") + " ";
						n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
					}
			}

			function $r(e, t) {
				if (t && (t = t.trim()))
					if (e.classList) t.indexOf(" ") > -1 ? t.split(Zs).forEach(function(t) {
						return e.classList.remove(t)
					}) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");
					else {
						for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0;) n = n.replace(r, " ");
						n = n.trim(), n ? e.setAttribute("class", n) : e.removeAttribute("class")
					}
			}

			function Sr(e) {
				if (e) {
					if ("object" == typeof e) {
						var t = {};
						return !1 !== e.css && C(t, Ys(e.name || "v")), C(t, e), t
					}
					return "string" == typeof e ? Ys(e) : void 0
				}
			}

			function kr(e) {
				ac(function() {
					ac(e)
				})
			}

			function Or(e, t) {
				var n = e._transitionClasses || (e._transitionClasses = []);
				n.indexOf(t) < 0 && (n.push(t), Ar(e, t))
			}

			function Tr(e, t) {
				e._transitionClasses && m(e._transitionClasses, t), $r(e, t)
			}

			function Er(e, t, n) {
				var r = Lr(e, t),
					i = r.type,
					o = r.timeout,
					a = r.propCount;
				if (!i) return n();
				var s = i === ec ? rc : oc,
					c = 0,
					u = function() {
						e.removeEventListener(s, l), n()
					},
					l = function(t) {
						t.target === e && ++c >= a && u()
					};
				setTimeout(function() {
					c < a && u()
				}, o + 1), e.addEventListener(s, l)
			}

			function Lr(e, t) {
				var n, r = window.getComputedStyle(e),
					i = (r[nc + "Delay"] || "").split(", "),
					o = (r[nc + "Duration"] || "").split(", "),
					a = Ir(i, o),
					s = (r[ic + "Delay"] || "").split(", "),
					c = (r[ic + "Duration"] || "").split(", "),
					u = Ir(s, c),
					l = 0,
					f = 0;
				return t === ec ? a > 0 && (n = ec, l = a, f = o.length) : t === tc ? u > 0 && (n = tc, l = u, f = c.length) : (l = Math.max(a, u), n = l > 0 ? a > u ? ec : tc : null, f = n ? n === ec ? o.length : c.length : 0), {
					type: n,
					timeout: l,
					propCount: f,
					hasTransform: n === ec && sc.test(r[nc + "Property"])
				}
			}

			function Ir(e, t) {
				for (; e.length < t.length;) e = e.concat(e);
				return Math.max.apply(null, t.map(function(t, n) {
					return Nr(t) + Nr(e[n])
				}))
			}

			function Nr(e) {
				return 1e3 * Number(e.slice(0, -1).replace(",", "."))
			}

			function jr(e, t) {
				var n = e.elm;
				i(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
				var o = Sr(e.data.transition);
				if (!r(o) && !i(n._enterCb) && 1 === n.nodeType) {
					for (var a = o.css, s = o.type, u = o.enterClass, l = o.enterToClass, f = o.enterActiveClass, d = o.appearClass, p = o.appearToClass, h = o.appearActiveClass, m = o.beforeEnter, y = o.enter, g = o.afterEnter, _ = o.enterCancelled, b = o.beforeAppear, w = o.appear, C = o.afterAppear, x = o.appearCancelled, A = o.duration, $ = Da, S = Da.$vnode; S && S.parent;) $ = S.context, S = S.parent;
					var O = !$._isMounted || !e.isRootInsert;
					if (!O || w || "" === w) {
						var T = O && d ? d : u,
							E = O && h ? h : f,
							L = O && p ? p : l,
							I = O ? b || m : m,
							N = O && "function" == typeof w ? w : y,
							j = O ? C || g : g,
							P = O ? x || _ : _,
							M = v(c(A) ? A.enter : A),
							D = !1 !== a && !Wo,
							R = Dr(N),
							F = n._enterCb = k(function() {
								D && (Tr(n, L), Tr(n, E)), F.cancelled ? (D && Tr(n, T), P && P(n)) : j && j(n), n._enterCb = null
							});
						e.data.show || he(e, "insert", function() {
							var t = n.parentNode,
								r = t && t._pending && t._pending[e.key];
							r && r.tag === e.tag && r.elm._leaveCb && r.elm._leaveCb(), N && N(n, F)
						}), I && I(n), D && (Or(n, T), Or(n, E), kr(function() {
							Tr(n, T), F.cancelled || (Or(n, L), R || (Mr(M) ? setTimeout(F, M) : Er(n, s, F)))
						})), e.data.show && (t && t(), N && N(n, F)), D || R || F()
					}
				}
			}

			function Pr(e, t) {
				function n() {
					x.cancelled || (!e.data.show && o.parentNode && ((o.parentNode._pending || (o.parentNode._pending = {}))[e.key] = e), p && p(o), b && (Or(o, l), Or(o, d), kr(function() {
						Tr(o, l), x.cancelled || (Or(o, f), w || (Mr(C) ? setTimeout(x, C) : Er(o, u, x)))
					})), h && h(o, x), b || w || x())
				}
				var o = e.elm;
				i(o._enterCb) && (o._enterCb.cancelled = !0, o._enterCb());
				var a = Sr(e.data.transition);
				if (r(a) || 1 !== o.nodeType) return t();
				if (!i(o._leaveCb)) {
					var s = a.css,
						u = a.type,
						l = a.leaveClass,
						f = a.leaveToClass,
						d = a.leaveActiveClass,
						p = a.beforeLeave,
						h = a.leave,
						m = a.afterLeave,
						y = a.leaveCancelled,
						g = a.delayLeave,
						_ = a.duration,
						b = !1 !== s && !Wo,
						w = Dr(h),
						C = v(c(_) ? _.leave : _),
						x = o._leaveCb = k(function() {
							o.parentNode && o.parentNode._pending && (o.parentNode._pending[e.key] = null), b && (Tr(o, f), Tr(o, d)), x.cancelled ? (b && Tr(o, l), y && y(o)) : (t(), m && m(o)), o._leaveCb = null
						});
					g ? g(n) : n()
				}
			}

			function Mr(e) {
				return "number" == typeof e && !isNaN(e)
			}

			function Dr(e) {
				if (r(e)) return !1;
				var t = e.fns;
				return i(t) ? Dr(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1
			}

			function Rr(e, t) {
				!0 !== t.data.show && jr(t)
			}

			function Fr(e, t, n) {
				qr(e, t, n), (Jo || Xo) && setTimeout(function() {
					qr(e, t, n)
				}, 0)
			}

			function qr(e, t, n) {
				var r = t.value,
					i = e.multiple;
				if (!i || Array.isArray(r)) {
					for (var o, a, s = 0, c = e.options.length; s < c; s++)
						if (a = e.options[s], i) o = S(r, Ur(a)) > -1, a.selected !== o && (a.selected = o);
						else if ($(Ur(a), r)) return void(e.selectedIndex !== s && (e.selectedIndex = s));
					i || (e.selectedIndex = -1)
				}
			}

			function Br(e, t) {
				return t.every(function(t) {
					return !$(t, e)
				})
			}

			function Ur(e) {
				return "_value" in e ? e._value : e.value
			}

			function Hr(e) {
				e.target.composing = !0
			}

			function zr(e) {
				e.target.composing && (e.target.composing = !1, Vr(e.target, "input"))
			}

			function Vr(e, t) {
				var n = document.createEvent("HTMLEvents");
				n.initEvent(t, !0, !0), e.dispatchEvent(n)
			}

			function Gr(e) {
				return !e.componentInstance || e.data && e.data.transition ? e : Gr(e.componentInstance._vnode)
			}

			function Kr(e) {
				var t = e && e.componentOptions;
				return t && t.Ctor.options.abstract ? Kr(ut(t.children)) : e
			}

			function Jr(e) {
				var t = {},
					n = e.$options;
				for (var r in n.propsData) t[r] = e[r];
				var i = n._parentListeners;
				for (var o in i) t[Eo(o)] = i[o];
				return t
			}

			function Wr(e, t) {
				if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {
					props: t.componentOptions.propsData
				})
			}

			function Xr(e) {
				for (; e = e.parent;)
					if (e.data.transition) return !0
			}

			function Zr(e, t) {
				return t.key === e.key && t.tag === e.tag
			}

			function Yr(e) {
				e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb()
			}

			function Qr(e) {
				e.data.newPos = e.elm.getBoundingClientRect()
			}

			function ei(e) {
				var t = e.data.pos,
					n = e.data.newPos,
					r = t.left - n.left,
					i = t.top - n.top;
				if (r || i) {
					e.data.moved = !0;
					var o = e.elm.style;
					o.transform = o.WebkitTransform = "translate(" + r + "px," + i + "px)", o.transitionDuration = "0s"
				}
			}

			function ti(e, t) {
				var n = t ? Dc(t) : Pc;
				if (n.test(e)) {
					for (var r, i, o, a = [], s = [], c = n.lastIndex = 0; r = n.exec(e);) {
						i = r.index, i > c && (s.push(o = e.slice(c, i)), a.push(JSON.stringify(o)));
						var u = Dn(r[1].trim());
						a.push("_s(" + u + ")"), s.push({
							"@binding": u
						}), c = i + r[0].length
					}
					return c < e.length && (s.push(o = e.slice(c)), a.push(JSON.stringify(o))), {
						expression: a.join("+"),
						tokens: s
					}
				}
			}

			function ni(e, t) {
				var n = (t.warn, Wn(e, "class"));
				n && (e.staticClass = JSON.stringify(n));
				var r = Jn(e, "class", !1);
				r && (e.classBinding = r)
			}

			function ri(e) {
				var t = "";
				return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t
			}

			function ii(e, t) {
				var n = (t.warn, Wn(e, "style"));
				if (n) {
					e.staticStyle = JSON.stringify(zs(n))
				}
				var r = Jn(e, "style", !1);
				r && (e.styleBinding = r)
			}

			function oi(e) {
				var t = "";
				return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t
			}

			function ai(e, t) {
				var n = t ? iu : ru;
				return e.replace(n, function(e) {
					return nu[e]
				})
			}

			function si(e, t) {
				function n(t) {
					l += t, e = e.substring(t)
				}

				function r(e, n, r) {
					var i, s;
					if (null == n && (n = l), null == r && (r = l), e)
						for (s = e.toLowerCase(), i = a.length - 1; i >= 0 && a[i].lowerCasedTag !== s; i--);
					else i = 0;
					if (i >= 0) {
						for (var c = a.length - 1; c >= i; c--) t.end && t.end(a[c].tag, n, r);
						a.length = i, o = i && a[i - 1].tag
					} else "br" === s ? t.start && t.start(e, [], !0, n, r) : "p" === s && (t.start && t.start(e, [], !1, n, r), t.end && t.end(e, n, r))
				}
				for (var i, o, a = [], s = t.expectHTML, c = t.isUnaryTag || Po, u = t.canBeLeftOpenTag || Po, l = 0; e;) {
					if (i = e, o && eu(o)) {
						var f = 0,
							d = o.toLowerCase(),
							p = tu[d] || (tu[d] = new RegExp("([\\s\\S]*?)(</" + d + "[^>]*>)", "i")),
							v = e.replace(p, function(e, n, r) {
								return f = r.length, eu(d) || "noscript" === d || (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), au(d, n) && (n = n.slice(1)), t.chars && t.chars(n), ""
							});
						l += e.length - v.length, e = v, r(d, l - f, l)
					} else {
						var h = e.indexOf("<");
						if (0 === h) {
							if (Yc.test(e)) {
								var m = e.indexOf("--\x3e");
								if (m >= 0) {
									t.shouldKeepComment && t.comment(e.substring(4, m), l, l + m + 3), n(m + 3);
									continue
								}
							}
							if (Qc.test(e)) {
								var y = e.indexOf("]>");
								if (y >= 0) {
									n(y + 2);
									continue
								}
							}
							var g = e.match(Zc);
							if (g) {
								n(g[0].length);
								continue
							}
							var _ = e.match(Xc);
							if (_) {
								var b = l;
								n(_[0].length), r(_[1], b, l);
								continue
							}
							var w = function() {
								var t = e.match(Jc);
								if (t) {
									var r = {
										tagName: t[1],
										attrs: [],
										start: l
									};
									n(t[0].length);
									for (var i, o; !(i = e.match(Wc)) && (o = e.match(Vc) || e.match(zc));) o.start = l, n(o[0].length), o.end = l, r.attrs.push(o);
									if (i) return r.unarySlash = i[1], n(i[0].length), r.end = l, r
								}
							}();
							if (w) {
								! function(e) {
									var n = e.tagName,
										i = e.unarySlash;
									s && ("p" === o && Hc(n) && r(o), u(n) && o === n && r(n));
									for (var l = c(n) || !!i, f = e.attrs.length, d = new Array(f), p = 0; p < f; p++) {
										var v = e.attrs[p],
											h = v[3] || v[4] || v[5] || "",
											m = "a" === n && "href" === v[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
										d[p] = {
											name: v[1],
											value: ai(h, m)
										}
									}
									l || (a.push({
										tag: n,
										lowerCasedTag: n.toLowerCase(),
										attrs: d,
										start: e.start,
										end: e.end
									}), o = n), t.start && t.start(n, d, l, e.start, e.end)
								}(w), au(w.tagName, e) && n(1);
								continue
							}
						}
						var C = void 0,
							x = void 0,
							A = void 0;
						if (h >= 0) {
							for (x = e.slice(h); !(Xc.test(x) || Jc.test(x) || Yc.test(x) || Qc.test(x) || (A = x.indexOf("<", 1)) < 0);) h += A, x = e.slice(h);
							C = e.substring(0, h)
						}
						h < 0 && (C = e), C && n(C.length), t.chars && C && t.chars(C, l - C.length, l)
					}
					if (e === i) {
						t.chars && t.chars(e);
						break
					}
				}
				r()
			}

			function ci(e, t, n) {
				return {
					type: 1,
					tag: e,
					attrsList: t,
					attrsMap: Ti(t),
					rawAttrsMap: {},
					parent: n,
					children: []
				}
			}

			function ui(e, t) {
				function n(e) {
					if (r(e), l || e.processed || (e = di(e, t)), s.length || e === o || o.if && (e.elseif || e.else) && bi(o, {
							exp: e.elseif,
							block: e
						}), a && !e.forbidden)
						if (e.elseif || e.else) gi(e, a);
						else {
							if (e.slotScope) {
								var n = e.slotTarget || '"default"';
								(a.scopedSlots || (a.scopedSlots = {}))[n] = e
							}
							a.children.push(e), e.parent = a
						}
					e.children = e.children.filter(function(e) {
						return !e.slotScope
					}), r(e), e.pre && (l = !1), Oc(e.tag) && (f = !1);
					for (var i = 0; i < kc.length; i++) kc[i](e, t)
				}

				function r(e) {
					if (!f)
						for (var t;
							(t = e.children[e.children.length - 1]) && 3 === t.type && " " === t.text;) e.children.pop()
				}
				xc = t.warn || Fn, Oc = t.isPreTag || Po, Tc = t.mustUseProp || Po, Ec = t.getTagNamespace || Po;
				var i = t.isReservedTag || Po;
				Lc = function(e) {
					return !!e.component || !i(e.tag)
				}, $c = qn(t.modules, "transformNode"), Sc = qn(t.modules, "preTransformNode"), kc = qn(t.modules, "postTransformNode"), Ac = t.delimiters;
				var o, a, s = [],
					c = !1 !== t.preserveWhitespace,
					u = t.whitespace,
					l = !1,
					f = !1;
				return si(e, {
					warn: xc,
					expectHTML: t.expectHTML,
					isUnaryTag: t.isUnaryTag,
					canBeLeftOpenTag: t.canBeLeftOpenTag,
					shouldDecodeNewlines: t.shouldDecodeNewlines,
					shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
					shouldKeepComment: t.comments,
					outputSourceRange: t.outputSourceRange,
					start: function(e, r, i, c, u) {
						var d = a && a.ns || Ec(e);
						Jo && "svg" === d && (r = Ii(r));
						var p = ci(e, r, a);
						d && (p.ns = d), Li(p) && !ia() && (p.forbidden = !0);
						for (var v = 0; v < Sc.length; v++) p = Sc[v](p, t) || p;
						l || (li(p), p.pre && (l = !0)), Oc(p.tag) && (f = !0), l ? fi(p) : p.processed || (hi(p), yi(p), wi(p)), o || (o = p), i ? n(p) : (a = p, s.push(p))
					},
					end: function(e, t, r) {
						var i = s[s.length - 1];
						s.length -= 1, a = s[s.length - 1], n(i)
					},
					chars: function(e, t, n) {
						if (a && (!Jo || "textarea" !== a.tag || a.attrsMap.placeholder !== e)) {
							var r = a.children;
							if (e = f || e.trim() ? Ei(a) ? e : _u(e) : r.length ? u ? "condense" === u && yu.test(e) ? "" : " " : c ? " " : "" : "") {
								f || "condense" !== u || (e = e.replace(gu, " "));
								var i, o;
								!l && " " !== e && (i = ti(e, Ac)) ? o = {
									type: 2,
									expression: i.expression,
									tokens: i.tokens,
									text: e
								} : " " === e && r.length && " " === r[r.length - 1].text || (o = {
									type: 3,
									text: e
								}), o && r.push(o)
							}
						}
					},
					comment: function(e, t, n) {
						if (a) {
							var r = {
								type: 3,
								text: e,
								isComment: !0
							};
							a.children.push(r)
						}
					}
				}), o
			}

			function li(e) {
				null != Wn(e, "v-pre") && (e.pre = !0)
			}

			function fi(e) {
				var t = e.attrsList,
					n = t.length;
				if (n)
					for (var r = e.attrs = new Array(n), i = 0; i < n; i++) r[i] = {
						name: t[i].name,
						value: JSON.stringify(t[i].value)
					}, null != t[i].start && (r[i].start = t[i].start, r[i].end = t[i].end);
				else e.pre || (e.plain = !0)
			}

			function di(e, t) {
				pi(e), e.plain = !e.key && !e.scopedSlots && !e.attrsList.length, vi(e), Ci(e), Ai(e), $i(e);
				for (var n = 0; n < $c.length; n++) e = $c[n](e, t) || e;
				return Si(e), e
			}

			function pi(e) {
				var t = Jn(e, "key");
				if (t) {
					e.key = t
				}
			}

			function vi(e) {
				var t = Jn(e, "ref");
				t && (e.ref = t, e.refInFor = ki(e))
			}

			function hi(e) {
				var t;
				if (t = Wn(e, "v-for")) {
					var n = mi(t);
					n && C(e, n)
				}
			}

			function mi(e) {
				var t = e.match(uu);
				if (t) {
					var n = {};
					n.for = t[2].trim();
					var r = t[1].trim().replace(fu, ""),
						i = r.match(lu);
					return i ? (n.alias = r.replace(lu, "").trim(), n.iterator1 = i[1].trim(), i[2] && (n.iterator2 = i[2].trim())) : n.alias = r, n
				}
			}

			function yi(e) {
				var t = Wn(e, "v-if");
				if (t) e.if = t, bi(e, {
					exp: t,
					block: e
				});
				else {
					null != Wn(e, "v-else") && (e.else = !0);
					var n = Wn(e, "v-else-if");
					n && (e.elseif = n)
				}
			}

			function gi(e, t) {
				var n = _i(t.children);
				n && n.if && bi(n, {
					exp: e.elseif,
					block: e
				})
			}

			function _i(e) {
				for (var t = e.length; t--;) {
					if (1 === e[t].type) return e[t];
					e.pop()
				}
			}

			function bi(e, t) {
				e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t)
			}

			function wi(e) {
				null != Wn(e, "v-once") && (e.once = !0)
			}

			function Ci(e) {
				var t;
				"template" === e.tag ? (t = Wn(e, "scope"), e.slotScope = t || Wn(e, "slot-scope")) : (t = Wn(e, "slot-scope")) && (e.slotScope = t);
				var n = Jn(e, "slot");
				if (n && (e.slotTarget = '""' === n ? '"default"' : n, e.slotTargetDynamic = !(!e.attrsMap[":slot"] && !e.attrsMap["v-bind:slot"]), "template" === e.tag || e.slotScope || Un(e, "slot", n, Kn(e, "slot"))), "template" === e.tag) {
					var r = Xn(e, mu);
					if (r) {
						var i = xi(r),
							o = i.name,
							a = i.dynamic;
						e.slotTarget = o, e.slotTargetDynamic = a, e.slotScope = r.value || bu
					}
				} else {
					var s = Xn(e, mu);
					if (s) {
						var c = e.scopedSlots || (e.scopedSlots = {}),
							u = xi(s),
							l = u.name,
							f = u.dynamic,
							d = c[l] = ci("template", [], e);
						d.slotTarget = l, d.slotTargetDynamic = f, d.children = e.children.filter(function(e) {
							if (!e.slotScope) return e.parent = d, !0
						}), d.slotScope = s.value || bu, e.children = [], e.plain = !1
					}
				}
			}

			function xi(e) {
				var t = e.name.replace(mu, "");
				return t || "#" !== e.name[0] && (t = "default"), du.test(t) ? {
					name: t.slice(1, -1),
					dynamic: !0
				} : {
					name: '"' + t + '"',
					dynamic: !1
				}
			}

			function Ai(e) {
				"slot" === e.tag && (e.slotName = Jn(e, "name"))
			}

			function $i(e) {
				var t;
				(t = Jn(e, "is")) && (e.component = t), null != Wn(e, "inline-template") && (e.inlineTemplate = !0)
			}

			function Si(e) {
				var t, n, r, i, o, a, s, c, u = e.attrsList;
				for (t = 0, n = u.length; t < n; t++)
					if (r = i = u[t].name, o = u[t].value, cu.test(r))
						if (e.hasBindings = !0, a = Oi(r.replace(cu, "")), a && (r = r.replace(hu, "")), vu.test(r)) r = r.replace(vu, ""), o = Dn(o), c = du.test(r), c && (r = r.slice(1, -1)), a && (a.prop && !c && "innerHtml" === (r = Eo(r)) && (r = "innerHTML"), a.camel && !c && (r = Eo(r)), a.sync && (s = Qn(o, "$event"), c ? Gn(e, '"update:"+(' + r + ")", s, null, !1, xc, u[t], !0) : (Gn(e, "update:" + Eo(r), s, null, !1, xc, u[t]), No(r) !== Eo(r) && Gn(e, "update:" + No(r), s, null, !1, xc, u[t])))), a && a.prop || !e.component && Tc(e.tag, e.attrsMap.type, r) ? Bn(e, r, o, u[t], c) : Un(e, r, o, u[t], c);
						else if (su.test(r)) r = r.replace(su, ""), c = du.test(r), c && (r = r.slice(1, -1)), Gn(e, r, o, a, !1, xc, u[t], c);
				else {
					r = r.replace(cu, "");
					var l = r.match(pu),
						f = l && l[1];
					c = !1, f && (r = r.slice(0, -(f.length + 1)), du.test(f) && (f = f.slice(1, -1), c = !0)), zn(e, r, i, o, f, c, a, u[t])
				} else {
					Un(e, r, JSON.stringify(o), u[t]), !e.component && "muted" === r && Tc(e.tag, e.attrsMap.type, r) && Bn(e, r, "true", u[t])
				}
			}

			function ki(e) {
				for (var t = e; t;) {
					if (void 0 !== t.for) return !0;
					t = t.parent
				}
				return !1
			}

			function Oi(e) {
				var t = e.match(hu);
				if (t) {
					var n = {};
					return t.forEach(function(e) {
						n[e.slice(1)] = !0
					}), n
				}
			}

			function Ti(e) {
				for (var t = {}, n = 0, r = e.length; n < r; n++) t[e[n].name] = e[n].value;
				return t
			}

			function Ei(e) {
				return "script" === e.tag || "style" === e.tag
			}

			function Li(e) {
				return "style" === e.tag || "script" === e.tag && (!e.attrsMap.type || "text/javascript" === e.attrsMap.type)
			}

			function Ii(e) {
				for (var t = [], n = 0; n < e.length; n++) {
					var r = e[n];
					wu.test(r.name) || (r.name = r.name.replace(Cu, ""), t.push(r))
				}
				return t
			}

			function Ni(e, t) {
				if ("input" === e.tag) {
					var n = e.attrsMap;
					if (!n["v-model"]) return;
					var r;
					if ((n[":type"] || n["v-bind:type"]) && (r = Jn(e, "type")), n.type || r || !n["v-bind"] || (r = "(" + n["v-bind"] + ").type"), r) {
						var i = Wn(e, "v-if", !0),
							o = i ? "&&(" + i + ")" : "",
							a = null != Wn(e, "v-else", !0),
							s = Wn(e, "v-else-if", !0),
							c = ji(e);
						hi(c), Hn(c, "type", "checkbox"), di(c, t), c.processed = !0, c.if = "(" + r + ")==='checkbox'" + o, bi(c, {
							exp: c.if,
							block: c
						});
						var u = ji(e);
						Wn(u, "v-for", !0), Hn(u, "type", "radio"), di(u, t), bi(c, {
							exp: "(" + r + ")==='radio'" + o,
							block: u
						});
						var l = ji(e);
						return Wn(l, "v-for", !0), Hn(l, ":type", r), di(l, t), bi(c, {
							exp: i,
							block: l
						}), a ? c.else = !0 : s && (c.elseif = s), c
					}
				}
			}

			function ji(e) {
				return ci(e.tag, e.attrsList.slice(), e.parent)
			}

			function Pi(e, t) {
				t.value && Bn(e, "textContent", "_s(" + t.value + ")", t)
			}

			function Mi(e, t) {
				t.value && Bn(e, "innerHTML", "_s(" + t.value + ")", t)
			}

			function Di(e, t) {
				e && (Ic = ku(t.staticKeys || ""), Nc = t.isReservedTag || Po, Fi(e), qi(e, !1))
			}

			function Ri(e) {
				return h("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (e ? "," + e : ""))
			}

			function Fi(e) {
				if (e.static = Bi(e), 1 === e.type) {
					if (!Nc(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"]) return;
					for (var t = 0, n = e.children.length; t < n; t++) {
						var r = e.children[t];
						Fi(r), r.static || (e.static = !1)
					}
					if (e.ifConditions)
						for (var i = 1, o = e.ifConditions.length; i < o; i++) {
							var a = e.ifConditions[i].block;
							Fi(a), a.static || (e.static = !1)
						}
				}
			}

			function qi(e, t) {
				if (1 === e.type) {
					if ((e.static || e.once) && (e.staticInFor = t), e.static && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type)) return void(e.staticRoot = !0);
					if (e.staticRoot = !1, e.children)
						for (var n = 0, r = e.children.length; n < r; n++) qi(e.children[n], t || !!e.for);
					if (e.ifConditions)
						for (var i = 1, o = e.ifConditions.length; i < o; i++) qi(e.ifConditions[i].block, t)
				}
			}

			function Bi(e) {
				return 2 !== e.type && (3 === e.type || !(!e.pre && (e.hasBindings || e.if || e.for || So(e.tag) || !Nc(e.tag) || Ui(e) || !Object.keys(e).every(Ic))))
			}

			function Ui(e) {
				for (; e.parent;) {
					if (e = e.parent, "template" !== e.tag) return !1;
					if (e.for) return !0
				}
				return !1
			}

			function Hi(e, t) {
				var n = t ? "nativeOn:" : "on:",
					r = "",
					i = "";
				for (var o in e) {
					var a = zi(e[o]);
					e[o] && e[o].dynamic ? i += o + "," + a + "," : r += '"' + o + '":' + a + ","
				}
				return r = "{" + r.slice(0, -1) + "}", i ? n + "_d(" + r + ",[" + i.slice(0, -1) + "])" : n + r
			}

			function zi(e) {
				if (!e) return "function(){}";
				if (Array.isArray(e)) return "[" + e.map(function(e) {
					return zi(e)
				}).join(",") + "]";
				var t = Eu.test(e.value),
					n = Ou.test(e.value),
					r = Eu.test(e.value.replace(Tu, ""));
				if (e.modifiers) {
					var i = "",
						o = "",
						a = [];
					for (var s in e.modifiers)
						if (ju[s]) o += ju[s], Lu[s] && a.push(s);
						else if ("exact" === s) {
						var c = e.modifiers;
						o += Nu(["ctrl", "shift", "alt", "meta"].filter(function(e) {
							return !c[e]
						}).map(function(e) {
							return "$event." + e + "Key"
						}).join("||"))
					} else a.push(s);
					a.length && (i += Vi(a)), o && (i += o);
					return "function($event){" + i + (t ? "return " + e.value + "($event)" : n ? "return (" + e.value + ")($event)" : r ? "return " + e.value : e.value) + "}"
				}
				return t || n ? e.value : "function($event){" + (r ? "return " + e.value : e.value) + "}"
			}

			function Vi(e) {
				return "if(!$event.type.indexOf('key')&&" + e.map(Gi).join("&&") + ")return null;"
			}

			function Gi(e) {
				var t = parseInt(e, 10);
				if (t) return "$event.keyCode!==" + t;
				var n = Lu[e],
					r = Iu[e];
				return "_k($event.keyCode," + JSON.stringify(e) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(r) + ")"
			}

			function Ki(e, t) {
				e.wrapListeners = function(e) {
					return "_g(" + e + "," + t.value + ")"
				}
			}

			function Ji(e, t) {
				e.wrapData = function(n) {
					return "_b(" + n + ",'" + e.tag + "'," + t.value + "," + (t.modifiers && t.modifiers.prop ? "true" : "false") + (t.modifiers && t.modifiers.sync ? ",true" : "") + ")"
				}
			}

			function Wi(e, t) {
				var n = new Mu(t);
				return {
					render: "with(this){return " + (e ? Xi(e, n) : '_c("div")') + "}",
					staticRenderFns: n.staticRenderFns
				}
			}

			function Xi(e, t) {
				if (e.parent && (e.pre = e.pre || e.parent.pre), e.staticRoot && !e.staticProcessed) return Zi(e, t);
				if (e.once && !e.onceProcessed) return Yi(e, t);
				if (e.for && !e.forProcessed) return to(e, t);
				if (e.if && !e.ifProcessed) return Qi(e, t);
				if ("template" !== e.tag || e.slotTarget || t.pre) {
					if ("slot" === e.tag) return mo(e, t);
					var n;
					if (e.component) n = yo(e.component, e, t);
					else {
						var r;
						(!e.plain || e.pre && t.maybeComponent(e)) && (r = no(e, t));
						var i = e.inlineTemplate ? null : uo(e, t, !0);
						n = "_c('" + e.tag + "'" + (r ? "," + r : "") + (i ? "," + i : "") + ")"
					}
					for (var o = 0; o < t.transforms.length; o++) n = t.transforms[o](e, n);
					return n
				}
				return uo(e, t) || "void 0"
			}

			function Zi(e, t) {
				e.staticProcessed = !0;
				var n = t.pre;
				return e.pre && (t.pre = e.pre), t.staticRenderFns.push("with(this){return " + Xi(e, t) + "}"), t.pre = n, "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")"
			}

			function Yi(e, t) {
				if (e.onceProcessed = !0, e.if && !e.ifProcessed) return Qi(e, t);
				if (e.staticInFor) {
					for (var n = "", r = e.parent; r;) {
						if (r.for) {
							n = r.key;
							break
						}
						r = r.parent
					}
					return n ? "_o(" + Xi(e, t) + "," + t.onceId++ + "," + n + ")" : Xi(e, t)
				}
				return Zi(e, t)
			}

			function Qi(e, t, n, r) {
				return e.ifProcessed = !0, eo(e.ifConditions.slice(), t, n, r)
			}

			function eo(e, t, n, r) {
				function i(e) {
					return n ? n(e, t) : e.once ? Yi(e, t) : Xi(e, t)
				}
				if (!e.length) return r || "_e()";
				var o = e.shift();
				return o.exp ? "(" + o.exp + ")?" + i(o.block) + ":" + eo(e, t, n, r) : "" + i(o.block)
			}

			function to(e, t, n, r) {
				var i = e.for,
					o = e.alias,
					a = e.iterator1 ? "," + e.iterator1 : "",
					s = e.iterator2 ? "," + e.iterator2 : "";
				return e.forProcessed = !0, (r || "_l") + "((" + i + "),function(" + o + a + s + "){return " + (n || Xi)(e, t) + "})"
			}

			function no(e, t) {
				var n = "{",
					r = ro(e, t);
				r && (n += r + ","), e.key && (n += "key:" + e.key + ","), e.ref && (n += "ref:" + e.ref + ","), e.refInFor && (n += "refInFor:true,"), e.pre && (n += "pre:true,"), e.component && (n += 'tag:"' + e.tag + '",');
				for (var i = 0; i < t.dataGenFns.length; i++) n += t.dataGenFns[i](e);
				if (e.attrs && (n += "attrs:" + go(e.attrs) + ","), e.props && (n += "domProps:" + go(e.props) + ","), e.events && (n += Hi(e.events, !1) + ","), e.nativeEvents && (n += Hi(e.nativeEvents, !0) + ","), e.slotTarget && !e.slotScope && (n += "slot:" + e.slotTarget + ","), e.scopedSlots && (n += oo(e, e.scopedSlots, t) + ","), e.model && (n += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), e.inlineTemplate) {
					var o = io(e, t);
					o && (n += o + ",")
				}
				return n = n.replace(/,$/, "") + "}", e.dynamicAttrs && (n = "_b(" + n + ',"' + e.tag + '",' + go(e.dynamicAttrs) + ")"), e.wrapData && (n = e.wrapData(n)), e.wrapListeners && (n = e.wrapListeners(n)), n
			}

			function ro(e, t) {
				var n = e.directives;
				if (n) {
					var r, i, o, a, s = "directives:[",
						c = !1;
					for (r = 0, i = n.length; r < i; r++) {
						o = n[r], a = !0;
						var u = t.directives[o.name];
						u && (a = !!u(e, o, t.warn)), a && (c = !0, s += '{name:"' + o.name + '",rawName:"' + o.rawName + '"' + (o.value ? ",value:(" + o.value + "),expression:" + JSON.stringify(o.value) : "") + (o.arg ? ",arg:" + (o.isDynamicArg ? o.arg : '"' + o.arg + '"') : "") + (o.modifiers ? ",modifiers:" + JSON.stringify(o.modifiers) : "") + "},")
					}
					return c ? s.slice(0, -1) + "]" : void 0
				}
			}

			function io(e, t) {
				var n = e.children[0];
				if (n && 1 === n.type) {
					var r = Wi(n, t.options);
					return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map(function(e) {
						return "function(){" + e + "}"
					}).join(",") + "]}"
				}
			}

			function oo(e, t, n) {
				var r = e.for || Object.keys(t).some(function(e) {
						var n = t[e];
						return n.slotTargetDynamic || n.if || n.for || so(n)
					}),
					i = !!e.if;
				if (!r)
					for (var o = e.parent; o;) {
						if (o.slotScope && o.slotScope !== bu || o.for) {
							r = !0;
							break
						}
						o.if && (i = !0), o = o.parent
					}
				var a = Object.keys(t).map(function(e) {
					return co(t[e], n)
				}).join(",");
				return "scopedSlots:_u([" + a + "]" + (r ? ",null,true" : "") + (!r && i ? ",null,false," + ao(a) : "") + ")"
			}

			function ao(e) {
				for (var t = 5381, n = e.length; n;) t = 33 * t ^ e.charCodeAt(--n);
				return t >>> 0
			}

			function so(e) {
				return 1 === e.type && ("slot" === e.tag || e.children.some(so))
			}

			function co(e, t) {
				var n = e.attrsMap["slot-scope"];
				if (e.if && !e.ifProcessed && !n) return Qi(e, t, co, "null");
				if (e.for && !e.forProcessed) return to(e, t, co);
				var r = e.slotScope === bu ? "" : String(e.slotScope),
					i = "function(" + r + "){return " + ("template" === e.tag ? e.if && n ? "(" + e.if+")?" + (uo(e, t) || "undefined") + ":undefined" : uo(e, t) || "undefined" : Xi(e, t)) + "}",
					o = r ? "" : ",proxy:true";
				return "{key:" + (e.slotTarget || '"default"') + ",fn:" + i + o + "}"
			}

			function uo(e, t, n, r, i) {
				var o = e.children;
				if (o.length) {
					var a = o[0];
					if (1 === o.length && a.for && "template" !== a.tag && "slot" !== a.tag) {
						var s = n ? t.maybeComponent(a) ? ",1" : ",0" : "";
						return "" + (r || Xi)(a, t) + s
					}
					var c = n ? lo(o, t.maybeComponent) : 0,
						u = i || po;
					return "[" + o.map(function(e) {
						return u(e, t)
					}).join(",") + "]" + (c ? "," + c : "")
				}
			}

			function lo(e, t) {
				for (var n = 0, r = 0; r < e.length; r++) {
					var i = e[r];
					if (1 === i.type) {
						if (fo(i) || i.ifConditions && i.ifConditions.some(function(e) {
								return fo(e.block)
							})) {
							n = 2;
							break
						}(t(i) || i.ifConditions && i.ifConditions.some(function(e) {
							return t(e.block)
						})) && (n = 1)
					}
				}
				return n
			}

			function fo(e) {
				return void 0 !== e.for || "template" === e.tag || "slot" === e.tag
			}

			function po(e, t) {
				return 1 === e.type ? Xi(e, t) : 3 === e.type && e.isComment ? ho(e) : vo(e)
			}

			function vo(e) {
				return "_v(" + (2 === e.type ? e.expression : _o(JSON.stringify(e.text))) + ")"
			}

			function ho(e) {
				return "_e(" + JSON.stringify(e.text) + ")"
			}

			function mo(e, t) {
				var n = e.slotName || '"default"',
					r = uo(e, t),
					i = "_t(" + n + (r ? "," + r : ""),
					o = e.attrs || e.dynamicAttrs ? go((e.attrs || []).concat(e.dynamicAttrs || []).map(function(e) {
						return {
							name: Eo(e.name),
							value: e.value,
							dynamic: e.dynamic
						}
					})) : null,
					a = e.attrsMap["v-bind"];
				return !o && !a || r || (i += ",null"), o && (i += "," + o), a && (i += (o ? "" : ",null") + "," + a), i + ")"
			}

			function yo(e, t, n) {
				var r = t.inlineTemplate ? null : uo(t, n, !0);
				return "_c(" + e + "," + no(t, n) + (r ? "," + r : "") + ")"
			}

			function go(e) {
				for (var t = "", n = "", r = 0; r < e.length; r++) {
					var i = e[r],
						o = _o(i.value);
					i.dynamic ? n += i.name + "," + o + "," : t += '"' + i.name + '":' + o + ","
				}
				return t = "{" + t.slice(0, -1) + "}", n ? "_d(" + t + ",[" + n.slice(0, -1) + "])" : t
			}

			function _o(e) {
				return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
			}

			function bo(e, t) {
				try {
					return new Function(e)
				} catch (n) {
					return t.push({
						err: n,
						code: e
					}), A
				}
			}

			function wo(e) {
				var t = Object.create(null);
				return function(n, r, i) {
					r = C({}, r);
					r.warn;
					delete r.warn;
					var o = r.delimiters ? String(r.delimiters) + n : n;
					if (t[o]) return t[o];
					var a = e(n, r),
						s = {},
						c = [];
					return s.render = bo(a.render, c), s.staticRenderFns = a.staticRenderFns.map(function(e) {
						return bo(e, c)
					}), t[o] = s
				}
			}

			function Co(e) {
				return jc = jc || document.createElement("div"), jc.innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>', jc.innerHTML.indexOf("&#10;") > 0
			}

			function xo(e) {
				if (e.outerHTML) return e.outerHTML;
				var t = document.createElement("div");
				return t.appendChild(e.cloneNode(!0)), t.innerHTML
			}
			/*!
			 * Vue.js v2.6.10
			 * (c) 2014-2019 Evan You
			 * Released under the MIT License.
			 */
			var Ao = Object.freeze({}),
				$o = Object.prototype.toString,
				So = h("slot,component", !0),
				ko = h("key,ref,slot,slot-scope,is"),
				Oo = Object.prototype.hasOwnProperty,
				To = /-(\w)/g,
				Eo = g(function(e) {
					return e.replace(To, function(e, t) {
						return t ? t.toUpperCase() : ""
					})
				}),
				Lo = g(function(e) {
					return e.charAt(0).toUpperCase() + e.slice(1)
				}),
				Io = /\B([A-Z])/g,
				No = g(function(e) {
					return e.replace(Io, "-$1").toLowerCase()
				}),
				jo = Function.prototype.bind ? b : _,
				Po = function(e, t, n) {
					return !1
				},
				Mo = function(e) {
					return e
				},
				Do = "data-server-rendered",
				Ro = ["component", "directive", "filter"],
				Fo = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
				qo = {
					optionMergeStrategies: Object.create(null),
					silent: !1,
					productionTip: !1,
					devtools: !1,
					performance: !1,
					errorHandler: null,
					warnHandler: null,
					ignoredElements: [],
					keyCodes: Object.create(null),
					isReservedTag: Po,
					isReservedAttr: Po,
					isUnknownElement: Po,
					getTagNamespace: A,
					parsePlatformTagName: Mo,
					mustUseProp: Po,
					async: !0,
					_lifecycleHooks: Fo
				},
				Bo = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/,
				Uo = new RegExp("[^" + Bo.source + ".$_\\d]"),
				Ho = "__proto__" in {},
				zo = "undefined" != typeof window,
				Vo = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
				Go = Vo && WXEnvironment.platform.toLowerCase(),
				Ko = zo && window.navigator.userAgent.toLowerCase(),
				Jo = Ko && /msie|trident/.test(Ko),
				Wo = Ko && Ko.indexOf("msie 9.0") > 0,
				Xo = Ko && Ko.indexOf("edge/") > 0,
				Zo = (Ko && Ko.indexOf("android"), Ko && /iphone|ipad|ipod|ios/.test(Ko) || "ios" === Go),
				Yo = (Ko && /chrome\/\d+/.test(Ko), Ko && /phantomjs/.test(Ko), Ko && Ko.match(/firefox\/(\d+)/)),
				Qo = {}.watch,
				ea = !1;
			if (zo) try {
				var ta = {};
				Object.defineProperty(ta, "passive", {
					get: function() {
						ea = !0
					}
				}), window.addEventListener("test-passive", null, ta)
			} catch (e) {}
			var na, ra, ia = function() {
					return void 0 === na && (na = !zo && !Vo && void 0 !== e && (e.process && "server" === e.process.env.VUE_ENV)), na
				},
				oa = zo && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
				aa = "undefined" != typeof Symbol && L(Symbol) && "undefined" != typeof Reflect && L(Reflect.ownKeys);
			ra = "undefined" != typeof Set && L(Set) ? Set : function() {
				function e() {
					this.set = Object.create(null)
				}
				return e.prototype.has = function(e) {
					return !0 === this.set[e]
				}, e.prototype.add = function(e) {
					this.set[e] = !0
				}, e.prototype.clear = function() {
					this.set = Object.create(null)
				}, e
			}();
			var sa = A,
				ca = 0,
				ua = function() {
					this.id = ca++, this.subs = []
				};
			ua.prototype.addSub = function(e) {
				this.subs.push(e)
			}, ua.prototype.removeSub = function(e) {
				m(this.subs, e)
			}, ua.prototype.depend = function() {
				ua.target && ua.target.addDep(this)
			}, ua.prototype.notify = function() {
				for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) e[t].update()
			}, ua.target = null;
			var la = [],
				fa = function(e, t, n, r, i, o, a, s) {
					this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = o, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
				},
				da = {
					child: {
						configurable: !0
					}
				};
			da.child.get = function() {
				return this.componentInstance
			}, Object.defineProperties(fa.prototype, da);
			var pa = function(e) {
					void 0 === e && (e = "");
					var t = new fa;
					return t.text = e, t.isComment = !0, t
				},
				va = Array.prototype,
				ha = Object.create(va);
			["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(e) {
				var t = va[e];
				T(ha, e, function() {
					for (var n = [], r = arguments.length; r--;) n[r] = arguments[r];
					var i, o = t.apply(this, n),
						a = this.__ob__;
					switch (e) {
						case "push":
						case "unshift":
							i = n;
							break;
						case "splice":
							i = n.slice(2)
					}
					return i && a.observeArray(i), a.dep.notify(), o
				})
			});
			var ma = Object.getOwnPropertyNames(ha),
				ya = !0,
				ga = function(e) {
					this.value = e, this.dep = new ua, this.vmCount = 0, T(e, "__ob__", this), Array.isArray(e) ? (Ho ? D(e, ha) : R(e, ha, ma), this.observeArray(e)) : this.walk(e)
				};
			ga.prototype.walk = function(e) {
				for (var t = Object.keys(e), n = 0; n < t.length; n++) q(e, t[n])
			}, ga.prototype.observeArray = function(e) {
				for (var t = 0, n = e.length; t < n; t++) F(e[t])
			};
			var _a = qo.optionMergeStrategies;
			_a.data = function(e, t, n) {
				return n ? V(e, t, n) : t && "function" != typeof t ? e : V(e, t)
			}, Fo.forEach(function(e) {
				_a[e] = G
			}), Ro.forEach(function(e) {
				_a[e + "s"] = J
			}), _a.watch = function(e, t, n, r) {
				if (e === Qo && (e = void 0), t === Qo && (t = void 0), !t) return Object.create(e || null);
				if (!e) return t;
				var i = {};
				C(i, e);
				for (var o in t) {
					var a = i[o],
						s = t[o];
					a && !Array.isArray(a) && (a = [a]), i[o] = a ? a.concat(s) : Array.isArray(s) ? s : [s]
				}
				return i
			}, _a.props = _a.methods = _a.inject = _a.computed = function(e, t, n, r) {
				if (!e) return t;
				var i = Object.create(null);
				return C(i, e), t && C(i, t), i
			}, _a.provide = V;
			var ba, wa = function(e, t) {
					return void 0 === t ? e : t
				},
				Ca = !1,
				xa = [],
				Aa = !1;
			if ("undefined" != typeof Promise && L(Promise)) {
				var $a = Promise.resolve();
				ba = function() {
					$a.then(ue), Zo && setTimeout(A)
				}, Ca = !0
			} else if (Jo || "undefined" == typeof MutationObserver || !L(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) ba = void 0 !== n && L(n) ? function() {
				n(ue)
			} : function() {
				setTimeout(ue, 0)
			};
			else {
				var Sa = 1,
					ka = new MutationObserver(ue),
					Oa = document.createTextNode(String(Sa));
				ka.observe(Oa, {
					characterData: !0
				}), ba = function() {
					Sa = (Sa + 1) % 2, Oa.data = String(Sa)
				}, Ca = !0
			}
			var Ta = new ra,
				Ea = g(function(e) {
					var t = "&" === e.charAt(0);
					e = t ? e.slice(1) : e;
					var n = "~" === e.charAt(0);
					e = n ? e.slice(1) : e;
					var r = "!" === e.charAt(0);
					return e = r ? e.slice(1) : e, {
						name: e,
						once: n,
						capture: r,
						passive: t
					}
				});
			ze(Ve.prototype);
			var La, Ia = {
					init: function(e, t) {
						if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
							var n = e;
							Ia.prepatch(n, n)
						} else {
							(e.componentInstance = Xe(e, Da)).$mount(t ? e.elm : void 0, t)
						}
					},
					prepatch: function(e, t) {
						var n = t.componentOptions;
						gt(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children)
					},
					insert: function(e) {
						var t = e.context,
							n = e.componentInstance;
						n._isMounted || (n._isMounted = !0, Ct(n, "mounted")), e.data.keepAlive && (t._isMounted ? St(n) : bt(n, !0))
					},
					destroy: function(e) {
						var t = e.componentInstance;
						t._isDestroyed || (e.data.keepAlive ? wt(t, !0) : t.$destroy())
					}
				},
				Na = Object.keys(Ia),
				ja = 1,
				Pa = 2,
				Ma = null,
				Da = null,
				Ra = [],
				Fa = [],
				qa = {},
				Ba = !1,
				Ua = !1,
				Ha = 0,
				za = 0,
				Va = Date.now;
			if (zo && !Jo) {
				var Ga = window.performance;
				Ga && "function" == typeof Ga.now && Va() > document.createEvent("Event").timeStamp && (Va = function() {
					return Ga.now()
				})
			}
			var Ka = 0,
				Ja = function(e, t, n, r, i) {
					this.vm = e, i && (e._watcher = this), e._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++Ka, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ra, this.newDepIds = new ra, this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = E(t), this.getter || (this.getter = A)), this.value = this.lazy ? void 0 : this.get()
				};
			Ja.prototype.get = function() {
				I(this);
				var e, t = this.vm;
				try {
					e = this.getter.call(t, t)
				} catch (e) {
					if (!this.user) throw e;
					oe(e, t, 'getter for watcher "' + this.expression + '"')
				} finally {
					this.deep && fe(e), N(), this.cleanupDeps()
				}
				return e
			}, Ja.prototype.addDep = function(e) {
				var t = e.id;
				this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this))
			}, Ja.prototype.cleanupDeps = function() {
				for (var e = this.deps.length; e--;) {
					var t = this.deps[e];
					this.newDepIds.has(t.id) || t.removeSub(this)
				}
				var n = this.depIds;
				this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0
			}, Ja.prototype.update = function() {
				this.lazy ? this.dirty = !0 : this.sync ? this.run() : Ot(this)
			}, Ja.prototype.run = function() {
				if (this.active) {
					var e = this.get();
					if (e !== this.value || c(e) || this.deep) {
						var t = this.value;
						if (this.value = e, this.user) try {
							this.cb.call(this.vm, e, t)
						} catch (e) {
							oe(e, this.vm, 'callback for watcher "' + this.expression + '"')
						} else this.cb.call(this.vm, e, t)
					}
				}
			}, Ja.prototype.evaluate = function() {
				this.value = this.get(), this.dirty = !1
			}, Ja.prototype.depend = function() {
				for (var e = this.deps.length; e--;) this.deps[e].depend()
			}, Ja.prototype.teardown = function() {
				if (this.active) {
					this.vm._isBeingDestroyed || m(this.vm._watchers, this);
					for (var e = this.deps.length; e--;) this.deps[e].removeSub(this);
					this.active = !1
				}
			};
			var Wa = {
					enumerable: !0,
					configurable: !0,
					get: A,
					set: A
				},
				Xa = {
					lazy: !0
				},
				Za = 0;
			! function(e) {
				e.prototype._init = function(e) {
					var t = this;
					t._uid = Za++, t._isVue = !0, e && e._isComponent ? Bt(t, e) : t.$options = Y(Ut(t.constructor), e || {}, t), t._renderProxy = t, t._self = t, mt(t), lt(t), it(t), Ct(t, "beforeCreate"), xe(t), Et(t), Ce(t), Ct(t, "created"), t.$options.el && t.$mount(t.$options.el)
				}
			}(zt),
			function(e) {
				var t = {};
				t.get = function() {
					return this._data
				};
				var n = {};
				n.get = function() {
					return this._props
				}, Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = B, e.prototype.$delete = U, e.prototype.$watch = function(e, t, n) {
					var r = this;
					if (u(t)) return qt(r, e, t, n);
					n = n || {}, n.user = !0;
					var i = new Ja(r, e, t, n);
					if (n.immediate) try {
						t.call(r, i.value)
					} catch (e) {
						oe(e, r, 'callback for immediate watcher "' + i.expression + '"')
					}
					return function() {
						i.teardown()
					}
				}
			}(zt),
			function(e) {
				var t = /^hook:/;
				e.prototype.$on = function(e, n) {
					var r = this;
					if (Array.isArray(e))
						for (var i = 0, o = e.length; i < o; i++) r.$on(e[i], n);
					else(r._events[e] || (r._events[e] = [])).push(n), t.test(e) && (r._hasHookEvent = !0);
					return r
				}, e.prototype.$once = function(e, t) {
					function n() {
						r.$off(e, n), t.apply(r, arguments)
					}
					var r = this;
					return n.fn = t, r.$on(e, n), r
				}, e.prototype.$off = function(e, t) {
					var n = this;
					if (!arguments.length) return n._events = Object.create(null), n;
					if (Array.isArray(e)) {
						for (var r = 0, i = e.length; r < i; r++) n.$off(e[r], t);
						return n
					}
					var o = n._events[e];
					if (!o) return n;
					if (!t) return n._events[e] = null, n;
					for (var a, s = o.length; s--;)
						if ((a = o[s]) === t || a.fn === t) {
							o.splice(s, 1);
							break
						}
					return n
				}, e.prototype.$emit = function(e) {
					var t = this,
						n = t._events[e];
					if (n) {
						n = n.length > 1 ? w(n) : n;
						for (var r = w(arguments, 1), i = 'event handler for "' + e + '"', o = 0, a = n.length; o < a; o++) ae(n[o], t, r, t, i)
					}
					return t
				}
			}(zt),
			function(e) {
				e.prototype._update = function(e, t) {
					var n = this,
						r = n.$el,
						i = n._vnode,
						o = ht(n);
					n._vnode = e, n.$el = i ? n.__patch__(i, e) : n.__patch__(n.$el, e, t, !1), o(), r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
				}, e.prototype.$forceUpdate = function() {
					var e = this;
					e._watcher && e._watcher.update()
				}, e.prototype.$destroy = function() {
					var e = this;
					if (!e._isBeingDestroyed) {
						Ct(e, "beforeDestroy"), e._isBeingDestroyed = !0;
						var t = e.$parent;
						!t || t._isBeingDestroyed || e.$options.abstract || m(t.$children, e), e._watcher && e._watcher.teardown();
						for (var n = e._watchers.length; n--;) e._watchers[n].teardown();
						e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), Ct(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null)
					}
				}
			}(zt),
			function(e) {
				ze(e.prototype), e.prototype.$nextTick = function(e) {
					return le(e, this)
				}, e.prototype._render = function() {
					var e = this,
						t = e.$options,
						n = t.render,
						r = t._parentVnode;
					r && (e.$scopedSlots = ke(r.data.scopedSlots, e.$slots, e.$scopedSlots)), e.$vnode = r;
					var i;
					try {
						Ma = e, i = n.call(e._renderProxy, e.$createElement)
					} catch (t) {
						oe(t, e, "render"), i = e._vnode
					} finally {
						Ma = null
					}
					return Array.isArray(i) && 1 === i.length && (i = i[0]), i instanceof fa || (i = pa()), i.parent = r, i
				}
			}(zt);
			var Ya = [String, RegExp, Array],
				Qa = {
					name: "keep-alive",
					abstract: !0,
					props: {
						include: Ya,
						exclude: Ya,
						max: [String, Number]
					},
					created: function() {
						this.cache = Object.create(null), this.keys = []
					},
					destroyed: function() {
						for (var e in this.cache) en(this.cache, e, this.keys)
					},
					mounted: function() {
						var e = this;
						this.$watch("include", function(t) {
							Qt(e, function(e) {
								return Yt(t, e)
							})
						}), this.$watch("exclude", function(t) {
							Qt(e, function(e) {
								return !Yt(t, e)
							})
						})
					},
					render: function() {
						var e = this.$slots.default,
							t = ut(e),
							n = t && t.componentOptions;
						if (n) {
							var r = Zt(n),
								i = this,
								o = i.include,
								a = i.exclude;
							if (o && (!r || !Yt(o, r)) || a && r && Yt(a, r)) return t;
							var s = this,
								c = s.cache,
								u = s.keys,
								l = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
							c[l] ? (t.componentInstance = c[l].componentInstance, m(u, l), u.push(l)) : (c[l] = t, u.push(l), this.max && u.length > parseInt(this.max) && en(c, u[0], u, this._vnode)), t.data.keepAlive = !0
						}
						return t || e && e[0]
					}
				},
				es = {
					KeepAlive: Qa
				};
			! function(e) {
				var t = {};
				t.get = function() {
					return qo
				}, Object.defineProperty(e, "config", t), e.util = {
					warn: sa,
					extend: C,
					mergeOptions: Y,
					defineReactive: q
				}, e.set = B, e.delete = U, e.nextTick = le, e.observable = function(e) {
					return F(e), e
				}, e.options = Object.create(null), Ro.forEach(function(t) {
					e.options[t + "s"] = Object.create(null)
				}), e.options._base = e, C(e.options.components, es), Vt(e), Gt(e), Kt(e), Xt(e)
			}(zt), Object.defineProperty(zt.prototype, "$isServer", {
				get: ia
			}), Object.defineProperty(zt.prototype, "$ssrContext", {
				get: function() {
					return this.$vnode && this.$vnode.ssrContext
				}
			}), Object.defineProperty(zt, "FunctionalRenderContext", {
				value: Ve
			}), zt.version = "2.6.10";
			var ts, ns, rs, is, os, as, ss, cs, us, ls, fs = h("style,class"),
				ds = h("input,textarea,option,select,progress"),
				ps = function(e, t, n) {
					return "value" === n && ds(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e
				},
				vs = h("contenteditable,draggable,spellcheck"),
				hs = h("events,caret,typing,plaintext-only"),
				ms = function(e, t) {
					return ws(t) || "false" === t ? "false" : "contenteditable" === e && hs(t) ? t : "true"
				},
				ys = h("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
				gs = "http://www.w3.org/1999/xlink",
				_s = function(e) {
					return ":" === e.charAt(5) && "xlink" === e.slice(0, 5)
				},
				bs = function(e) {
					return _s(e) ? e.slice(6, e.length) : ""
				},
				ws = function(e) {
					return null == e || !1 === e
				},
				Cs = {
					svg: "http://www.w3.org/2000/svg",
					math: "http://www.w3.org/1998/Math/MathML"
				},
				xs = h("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
				As = h("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
				$s = function(e) {
					return "pre" === e
				},
				Ss = function(e) {
					return xs(e) || As(e)
				},
				ks = Object.create(null),
				Os = h("text,number,password,search,email,tel,url"),
				Ts = Object.freeze({
					createElement: dn,
					createElementNS: pn,
					createTextNode: vn,
					createComment: hn,
					insertBefore: mn,
					removeChild: yn,
					appendChild: gn,
					parentNode: _n,
					nextSibling: bn,
					tagName: wn,
					setTextContent: Cn,
					setStyleScope: xn
				}),
				Es = {
					create: function(e, t) {
						An(t)
					},
					update: function(e, t) {
						e.data.ref !== t.data.ref && (An(e, !0), An(t))
					},
					destroy: function(e) {
						An(e, !0)
					}
				},
				Ls = new fa("", {}, []),
				Is = ["create", "activate", "update", "remove", "destroy"],
				Ns = {
					create: On,
					update: On,
					destroy: function(e) {
						On(e, Ls)
					}
				},
				js = Object.create(null),
				Ps = [Es, Ns],
				Ms = {
					create: Nn,
					update: Nn
				},
				Ds = {
					create: Mn,
					update: Mn
				},
				Rs = /[\w).+\-_$\]]/,
				Fs = "__r",
				qs = "__c",
				Bs = Ca && !(Yo && Number(Yo[1]) <= 53),
				Us = {
					create: hr,
					update: hr
				},
				Hs = {
					create: mr,
					update: mr
				},
				zs = g(function(e) {
					var t = {},
						n = /;(?![^(]*\))/g,
						r = /:(.+)/;
					return e.split(n).forEach(function(e) {
						if (e) {
							var n = e.split(r);
							n.length > 1 && (t[n[0].trim()] = n[1].trim())
						}
					}), t
				}),
				Vs = /^--/,
				Gs = /\s*!important$/,
				Ks = function(e, t, n) {
					if (Vs.test(t)) e.style.setProperty(t, n);
					else if (Gs.test(n)) e.style.setProperty(No(t), n.replace(Gs, ""), "important");
					else {
						var r = Ws(t);
						if (Array.isArray(n))
							for (var i = 0, o = n.length; i < o; i++) e.style[r] = n[i];
						else e.style[r] = n
					}
				},
				Js = ["Webkit", "Moz", "ms"],
				Ws = g(function(e) {
					if (ls = ls || document.createElement("div").style, "filter" !== (e = Eo(e)) && e in ls) return e;
					for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < Js.length; n++) {
						var r = Js[n] + t;
						if (r in ls) return r
					}
				}),
				Xs = {
					create: xr,
					update: xr
				},
				Zs = /\s+/,
				Ys = g(function(e) {
					return {
						enterClass: e + "-enter",
						enterToClass: e + "-enter-to",
						enterActiveClass: e + "-enter-active",
						leaveClass: e + "-leave",
						leaveToClass: e + "-leave-to",
						leaveActiveClass: e + "-leave-active"
					}
				}),
				Qs = zo && !Wo,
				ec = "transition",
				tc = "animation",
				nc = "transition",
				rc = "transitionend",
				ic = "animation",
				oc = "animationend";
			Qs && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (nc = "WebkitTransition", rc = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (ic = "WebkitAnimation", oc = "webkitAnimationEnd"));
			var ac = zo ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(e) {
					return e()
				},
				sc = /\b(transform|all)(,|$)/,
				cc = zo ? {
					create: Rr,
					activate: Rr,
					remove: function(e, t) {
						!0 !== e.data.show ? Pr(e, t) : t()
					}
				} : {},
				uc = [Ms, Ds, Us, Hs, Xs, cc],
				lc = uc.concat(Ps),
				fc = function(e) {
					function t(e) {
						return new fa(L.tagName(e).toLowerCase(), {}, [], void 0, e)
					}

					function n(e, t) {
						function n() {
							0 == --n.listeners && a(e)
						}
						return n.listeners = t, n
					}

					function a(e) {
						var t = L.parentNode(e);
						i(t) && L.removeChild(t, e)
					}

					function c(e, t, n, r, a, s, c) {
						if (i(e.elm) && i(s) && (e = s[c] = P(e)), e.isRootInsert = !a, !u(e, t, n, r)) {
							var l = e.data,
								f = e.children,
								v = e.tag;
							i(v) ? (e.elm = e.ns ? L.createElementNS(e.ns, v) : L.createElement(v, e), y(e), p(e, f, t), i(l) && m(e, t), d(n, e.elm, r)) : o(e.isComment) ? (e.elm = L.createComment(e.text), d(n, e.elm, r)) : (e.elm = L.createTextNode(e.text), d(n, e.elm, r))
						}
					}

					function u(e, t, n, r) {
						var a = e.data;
						if (i(a)) {
							var s = i(e.componentInstance) && a.keepAlive;
							if (i(a = a.hook) && i(a = a.init) && a(e, !1), i(e.componentInstance)) return l(e, t), d(n, e.elm, r), o(s) && f(e, t, n, r), !0
						}
					}

					function l(e, t) {
						i(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, v(e) ? (m(e, t), y(e)) : (An(e), t.push(e))
					}

					function f(e, t, n, r) {
						for (var o, a = e; a.componentInstance;)
							if (a = a.componentInstance._vnode, i(o = a.data) && i(o = o.transition)) {
								for (o = 0; o < T.activate.length; ++o) T.activate[o](Ls, a);
								t.push(a);
								break
							}
						d(n, e.elm, r)
					}

					function d(e, t, n) {
						i(e) && (i(n) ? L.parentNode(n) === e && L.insertBefore(e, t, n) : L.appendChild(e, t))
					}

					function p(e, t, n) {
						if (Array.isArray(t))
							for (var r = 0; r < t.length; ++r) c(t[r], n, e.elm, null, !0, t, r);
						else s(e.text) && L.appendChild(e.elm, L.createTextNode(String(e.text)))
					}

					function v(e) {
						for (; e.componentInstance;) e = e.componentInstance._vnode;
						return i(e.tag)
					}

					function m(e, t) {
						for (var n = 0; n < T.create.length; ++n) T.create[n](Ls, e);
						k = e.data.hook, i(k) && (i(k.create) && k.create(Ls, e), i(k.insert) && t.push(e))
					}

					function y(e) {
						var t;
						if (i(t = e.fnScopeId)) L.setStyleScope(e.elm, t);
						else
							for (var n = e; n;) i(t = n.context) && i(t = t.$options._scopeId) && L.setStyleScope(e.elm, t), n = n.parent;
						i(t = Da) && t !== e.context && t !== e.fnContext && i(t = t.$options._scopeId) && L.setStyleScope(e.elm, t)
					}

					function g(e, t, n, r, i, o) {
						for (; r <= i; ++r) c(n[r], o, e, t, !1, n, r)
					}

					function _(e) {
						var t, n, r = e.data;
						if (i(r))
							for (i(t = r.hook) && i(t = t.destroy) && t(e), t = 0; t < T.destroy.length; ++t) T.destroy[t](e);
						if (i(t = e.children))
							for (n = 0; n < e.children.length; ++n) _(e.children[n])
					}

					function b(e, t, n, r) {
						for (; n <= r; ++n) {
							var o = t[n];
							i(o) && (i(o.tag) ? (w(o), _(o)) : a(o.elm))
						}
					}

					function w(e, t) {
						if (i(t) || i(e.data)) {
							var r, o = T.remove.length + 1;
							for (i(t) ? t.listeners += o : t = n(e.elm, o), i(r = e.componentInstance) && i(r = r._vnode) && i(r.data) && w(r, t), r = 0; r < T.remove.length; ++r) T.remove[r](e, t);
							i(r = e.data.hook) && i(r = r.remove) ? r(e, t) : t()
						} else a(e.elm)
					}

					function C(e, t, n, o, a) {
						for (var s, u, l, f, d = 0, p = 0, v = t.length - 1, h = t[0], m = t[v], y = n.length - 1, _ = n[0], w = n[y], C = !a; d <= v && p <= y;) r(h) ? h = t[++d] : r(m) ? m = t[--v] : $n(h, _) ? (A(h, _, o, n, p), h = t[++d], _ = n[++p]) : $n(m, w) ? (A(m, w, o, n, y), m = t[--v], w = n[--y]) : $n(h, w) ? (A(h, w, o, n, y), C && L.insertBefore(e, h.elm, L.nextSibling(m.elm)), h = t[++d], w = n[--y]) : $n(m, _) ? (A(m, _, o, n, p), C && L.insertBefore(e, m.elm, h.elm), m = t[--v], _ = n[++p]) : (r(s) && (s = kn(t, d, v)), u = i(_.key) ? s[_.key] : x(_, t, d, v), r(u) ? c(_, o, e, h.elm, !1, n, p) : (l = t[u], $n(l, _) ? (A(l, _, o, n, p), t[u] = void 0, C && L.insertBefore(e, l.elm, h.elm)) : c(_, o, e, h.elm, !1, n, p)), _ = n[++p]);
						d > v ? (f = r(n[y + 1]) ? null : n[y + 1].elm, g(e, f, n, p, y, o)) : p > y && b(e, t, d, v)
					}

					function x(e, t, n, r) {
						for (var o = n; o < r; o++) {
							var a = t[o];
							if (i(a) && $n(e, a)) return o
						}
					}

					function A(e, t, n, a, s, c) {
						if (e !== t) {
							i(t.elm) && i(a) && (t = a[s] = P(t));
							var u = t.elm = e.elm;
							if (o(e.isAsyncPlaceholder)) return void(i(t.asyncFactory.resolved) ? S(e.elm, t, n) : t.isAsyncPlaceholder = !0);
							if (o(t.isStatic) && o(e.isStatic) && t.key === e.key && (o(t.isCloned) || o(t.isOnce))) return void(t.componentInstance = e.componentInstance);
							var l, f = t.data;
							i(f) && i(l = f.hook) && i(l = l.prepatch) && l(e, t);
							var d = e.children,
								p = t.children;
							if (i(f) && v(t)) {
								for (l = 0; l < T.update.length; ++l) T.update[l](e, t);
								i(l = f.hook) && i(l = l.update) && l(e, t)
							}
							r(t.text) ? i(d) && i(p) ? d !== p && C(u, d, p, n, c) : i(p) ? (i(e.text) && L.setTextContent(u, ""), g(u, null, p, 0, p.length - 1, n)) : i(d) ? b(u, d, 0, d.length - 1) : i(e.text) && L.setTextContent(u, "") : e.text !== t.text && L.setTextContent(u, t.text), i(f) && i(l = f.hook) && i(l = l.postpatch) && l(e, t)
						}
					}

					function $(e, t, n) {
						if (o(n) && i(e.parent)) e.parent.data.pendingInsert = t;
						else
							for (var r = 0; r < t.length; ++r) t[r].data.hook.insert(t[r])
					}

					function S(e, t, n, r) {
						var a, s = t.tag,
							c = t.data,
							u = t.children;
						if (r = r || c && c.pre, t.elm = e, o(t.isComment) && i(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
						if (i(c) && (i(a = c.hook) && i(a = a.init) && a(t, !0), i(a = t.componentInstance))) return l(t, n), !0;
						if (i(s)) {
							if (i(u))
								if (e.hasChildNodes())
									if (i(a = c) && i(a = a.domProps) && i(a = a.innerHTML)) {
										if (a !== e.innerHTML) return !1
									} else {
										for (var f = !0, d = e.firstChild, v = 0; v < u.length; v++) {
											if (!d || !S(d, u[v], n, r)) {
												f = !1;
												break
											}
											d = d.nextSibling
										}
										if (!f || d) return !1
									}
							else p(t, u, n);
							if (i(c)) {
								var h = !1;
								for (var y in c)
									if (!I(y)) {
										h = !0, m(t, n);
										break
									}!h && c.class && fe(c.class)
							}
						} else e.data !== t.text && (e.data = t.text);
						return !0
					}
					var k, O, T = {},
						E = e.modules,
						L = e.nodeOps;
					for (k = 0; k < Is.length; ++k)
						for (T[Is[k]] = [], O = 0; O < E.length; ++O) i(E[O][Is[k]]) && T[Is[k]].push(E[O][Is[k]]);
					var I = h("attrs,class,staticClass,staticStyle,key");
					return function(e, n, a, s) {
						if (r(n)) return void(i(e) && _(e));
						var u = !1,
							l = [];
						if (r(e)) u = !0, c(n, l);
						else {
							var f = i(e.nodeType);
							if (!f && $n(e, n)) A(e, n, l, null, null, s);
							else {
								if (f) {
									if (1 === e.nodeType && e.hasAttribute(Do) && (e.removeAttribute(Do), a = !0), o(a) && S(e, n, l)) return $(n, l, !0), e;
									e = t(e)
								}
								var d = e.elm,
									p = L.parentNode(d);
								if (c(n, l, d._leaveCb ? null : p, L.nextSibling(d)), i(n.parent))
									for (var h = n.parent, m = v(n); h;) {
										for (var y = 0; y < T.destroy.length; ++y) T.destroy[y](h);
										if (h.elm = n.elm, m) {
											for (var g = 0; g < T.create.length; ++g) T.create[g](Ls, h);
											var w = h.data.hook.insert;
											if (w.merged)
												for (var C = 1; C < w.fns.length; C++) w.fns[C]()
										} else An(h);
										h = h.parent
									}
								i(p) ? b(p, [e], 0, 0) : i(e.tag) && _(e)
							}
						}
						return $(n, l, u), n.elm
					}
				}({
					nodeOps: Ts,
					modules: lc
				});
			Wo && document.addEventListener("selectionchange", function() {
				var e = document.activeElement;
				e && e.vmodel && Vr(e, "input")
			});
			var dc = {
					inserted: function(e, t, n, r) {
						"select" === n.tag ? (r.elm && !r.elm._vOptions ? he(n, "postpatch", function() {
							dc.componentUpdated(e, t, n)
						}) : Fr(e, t, n.context), e._vOptions = [].map.call(e.options, Ur)) : ("textarea" === n.tag || Os(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", Hr), e.addEventListener("compositionend", zr), e.addEventListener("change", zr), Wo && (e.vmodel = !0)))
					},
					componentUpdated: function(e, t, n) {
						if ("select" === n.tag) {
							Fr(e, t, n.context);
							var r = e._vOptions,
								i = e._vOptions = [].map.call(e.options, Ur);
							if (i.some(function(e, t) {
									return !$(e, r[t])
								})) {
								(e.multiple ? t.value.some(function(e) {
									return Br(e, i)
								}) : t.value !== t.oldValue && Br(t.value, i)) && Vr(e, "change")
							}
						}
					}
				},
				pc = {
					bind: function(e, t, n) {
						var r = t.value;
						n = Gr(n);
						var i = n.data && n.data.transition,
							o = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
						r && i ? (n.data.show = !0, jr(n, function() {
							e.style.display = o
						})) : e.style.display = r ? o : "none"
					},
					update: function(e, t, n) {
						var r = t.value;
						!r != !t.oldValue && (n = Gr(n), n.data && n.data.transition ? (n.data.show = !0, r ? jr(n, function() {
							e.style.display = e.__vOriginalDisplay
						}) : Pr(n, function() {
							e.style.display = "none"
						})) : e.style.display = r ? e.__vOriginalDisplay : "none")
					},
					unbind: function(e, t, n, r, i) {
						i || (e.style.display = e.__vOriginalDisplay)
					}
				},
				vc = {
					model: dc,
					show: pc
				},
				hc = {
					name: String,
					appear: Boolean,
					css: Boolean,
					mode: String,
					type: String,
					enterClass: String,
					leaveClass: String,
					enterToClass: String,
					leaveToClass: String,
					enterActiveClass: String,
					leaveActiveClass: String,
					appearClass: String,
					appearActiveClass: String,
					appearToClass: String,
					duration: [Number, String, Object]
				},
				mc = function(e) {
					return e.tag || ct(e)
				},
				yc = function(e) {
					return "show" === e.name
				},
				gc = {
					name: "transition",
					props: hc,
					abstract: !0,
					render: function(e) {
						var t = this,
							n = this.$slots.default;
						if (n && (n = n.filter(mc), n.length)) {
							var r = this.mode,
								i = n[0];
							if (Xr(this.$vnode)) return i;
							var o = Kr(i);
							if (!o) return i;
							if (this._leaving) return Wr(e, i);
							var a = "__transition-" + this._uid + "-";
							o.key = null == o.key ? o.isComment ? a + "comment" : a + o.tag : s(o.key) ? 0 === String(o.key).indexOf(a) ? o.key : a + o.key : o.key;
							var c = (o.data || (o.data = {})).transition = Jr(this),
								u = this._vnode,
								l = Kr(u);
							if (o.data.directives && o.data.directives.some(yc) && (o.data.show = !0), l && l.data && !Zr(o, l) && !ct(l) && (!l.componentInstance || !l.componentInstance._vnode.isComment)) {
								var f = l.data.transition = C({}, c);
								if ("out-in" === r) return this._leaving = !0, he(f, "afterLeave", function() {
									t._leaving = !1, t.$forceUpdate()
								}), Wr(e, i);
								if ("in-out" === r) {
									if (ct(o)) return u;
									var d, p = function() {
										d()
									};
									he(c, "afterEnter", p), he(c, "enterCancelled", p), he(f, "delayLeave", function(e) {
										d = e
									})
								}
							}
							return i
						}
					}
				},
				_c = C({
					tag: String,
					moveClass: String
				}, hc);
			delete _c.mode;
			var bc = {
					props: _c,
					beforeMount: function() {
						var e = this,
							t = this._update;
						this._update = function(n, r) {
							var i = ht(e);
							e.__patch__(e._vnode, e.kept, !1, !0), e._vnode = e.kept, i(), t.call(e, n, r)
						}
					},
					render: function(e) {
						for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], o = this.children = [], a = Jr(this), s = 0; s < i.length; s++) {
							var c = i[s];
							if (c.tag)
								if (null != c.key && 0 !== String(c.key).indexOf("__vlist")) o.push(c), n[c.key] = c, (c.data || (c.data = {})).transition = a;
								else;
						}
						if (r) {
							for (var u = [], l = [], f = 0; f < r.length; f++) {
								var d = r[f];
								d.data.transition = a, d.data.pos = d.elm.getBoundingClientRect(), n[d.key] ? u.push(d) : l.push(d)
							}
							this.kept = e(t, null, u), this.removed = l
						}
						return e(t, null, o)
					},
					updated: function() {
						var e = this.prevChildren,
							t = this.moveClass || (this.name || "v") + "-move";
						e.length && this.hasMove(e[0].elm, t) && (e.forEach(Yr), e.forEach(Qr), e.forEach(ei), this._reflow = document.body.offsetHeight, e.forEach(function(e) {
							if (e.data.moved) {
								var n = e.elm,
									r = n.style;
								Or(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(rc, n._moveCb = function e(r) {
									r && r.target !== n || r && !/transform$/.test(r.propertyName) || (n.removeEventListener(rc, e), n._moveCb = null, Tr(n, t))
								})
							}
						}))
					},
					methods: {
						hasMove: function(e, t) {
							if (!Qs) return !1;
							if (this._hasMove) return this._hasMove;
							var n = e.cloneNode();
							e._transitionClasses && e._transitionClasses.forEach(function(e) {
								$r(n, e)
							}), Ar(n, t), n.style.display = "none", this.$el.appendChild(n);
							var r = Lr(n);
							return this.$el.removeChild(n), this._hasMove = r.hasTransform
						}
					}
				},
				wc = {
					Transition: gc,
					TransitionGroup: bc
				};
			zt.config.mustUseProp = ps, zt.config.isReservedTag = Ss, zt.config.isReservedAttr = fs, zt.config.getTagNamespace = un, zt.config.isUnknownElement = ln, C(zt.options.directives, vc), C(zt.options.components, wc), zt.prototype.__patch__ = zo ? fc : A, zt.prototype.$mount = function(e, t) {
				return e = e && zo ? fn(e) : void 0, yt(this, e, t)
			}, zo && setTimeout(function() {
				qo.devtools && oa && oa.emit("init", zt)
			}, 0);
			var Cc, xc, Ac, $c, Sc, kc, Oc, Tc, Ec, Lc, Ic, Nc, jc, Pc = /\{\{((?:.|\r?\n)+?)\}\}/g,
				Mc = /[-.*+?^${}()|[\]\/\\]/g,
				Dc = g(function(e) {
					var t = e[0].replace(Mc, "\\$&"),
						n = e[1].replace(Mc, "\\$&");
					return new RegExp(t + "((?:.|\\n)+?)" + n, "g")
				}),
				Rc = {
					staticKeys: ["staticClass"],
					transformNode: ni,
					genData: ri
				},
				Fc = {
					staticKeys: ["staticStyle"],
					transformNode: ii,
					genData: oi
				},
				qc = {
					decode: function(e) {
						return Cc = Cc || document.createElement("div"), Cc.innerHTML = e, Cc.textContent
					}
				},
				Bc = h("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
				Uc = h("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
				Hc = h("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
				zc = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
				Vc = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
				Gc = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + Bo.source + "]*",
				Kc = "((?:" + Gc + "\\:)?" + Gc + ")",
				Jc = new RegExp("^<" + Kc),
				Wc = /^\s*(\/?)>/,
				Xc = new RegExp("^<\\/" + Kc + "[^>]*>"),
				Zc = /^<!DOCTYPE [^>]+>/i,
				Yc = /^<!\--/,
				Qc = /^<!\[/,
				eu = h("script,style,textarea", !0),
				tu = {},
				nu = {
					"&lt;": "<",
					"&gt;": ">",
					"&quot;": '"',
					"&amp;": "&",
					"&#10;": "\n",
					"&#9;": "\t",
					"&#39;": "'"
				},
				ru = /&(?:lt|gt|quot|amp|#39);/g,
				iu = /&(?:lt|gt|quot|amp|#39|#10|#9);/g,
				ou = h("pre,textarea", !0),
				au = function(e, t) {
					return e && ou(e) && "\n" === t[0]
				},
				su = /^@|^v-on:/,
				cu = /^v-|^@|^:/,
				uu = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
				lu = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
				fu = /^\(|\)$/g,
				du = /^\[.*\]$/,
				pu = /:(.*)$/,
				vu = /^:|^\.|^v-bind:/,
				hu = /\.[^.\]]+(?=[^\]]*$)/g,
				mu = /^v-slot(:|$)|^#/,
				yu = /[\r\n]/,
				gu = /\s+/g,
				_u = g(qc.decode),
				bu = "_empty_",
				wu = /^xmlns:NS\d+/,
				Cu = /^NS\d+:/,
				xu = {
					preTransformNode: Ni
				},
				Au = [Rc, Fc, xu],
				$u = {
					model: ar,
					text: Pi,
					html: Mi
				},
				Su = {
					expectHTML: !0,
					modules: Au,
					directives: $u,
					isPreTag: $s,
					isUnaryTag: Bc,
					mustUseProp: ps,
					canBeLeftOpenTag: Uc,
					isReservedTag: Ss,
					getTagNamespace: un,
					staticKeys: function(e) {
						return e.reduce(function(e, t) {
							return e.concat(t.staticKeys || [])
						}, []).join(",")
					}(Au)
				},
				ku = g(Ri),
				Ou = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*(?:[\w$]+)?\s*\(/,
				Tu = /\([^)]*?\);*$/,
				Eu = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
				Lu = {
					esc: 27,
					tab: 9,
					enter: 13,
					space: 32,
					up: 38,
					left: 37,
					right: 39,
					down: 40,
					delete: [8, 46]
				},
				Iu = {
					esc: ["Esc", "Escape"],
					tab: "Tab",
					enter: "Enter",
					space: [" ", "Spacebar"],
					up: ["Up", "ArrowUp"],
					left: ["Left", "ArrowLeft"],
					right: ["Right", "ArrowRight"],
					down: ["Down", "ArrowDown"],
					delete: ["Backspace", "Delete", "Del"]
				},
				Nu = function(e) {
					return "if(" + e + ")return null;"
				},
				ju = {
					stop: "$event.stopPropagation();",
					prevent: "$event.preventDefault();",
					self: Nu("$event.target !== $event.currentTarget"),
					ctrl: Nu("!$event.ctrlKey"),
					shift: Nu("!$event.shiftKey"),
					alt: Nu("!$event.altKey"),
					meta: Nu("!$event.metaKey"),
					left: Nu("'button' in $event && $event.button !== 0"),
					middle: Nu("'button' in $event && $event.button !== 1"),
					right: Nu("'button' in $event && $event.button !== 2")
				},
				Pu = {
					on: Ki,
					bind: Ji,
					cloak: A
				},
				Mu = function(e) {
					this.options = e, this.warn = e.warn || Fn, this.transforms = qn(e.modules, "transformCode"), this.dataGenFns = qn(e.modules, "genData"), this.directives = C(C({}, Pu), e.directives);
					var t = e.isReservedTag || Po;
					this.maybeComponent = function(e) {
						return !!e.component || !t(e.tag)
					}, this.onceId = 0, this.staticRenderFns = [], this.pre = !1
				},
				Du = (new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)"), function(e) {
					return function(t) {
						function n(n, r) {
							var i = Object.create(t),
								o = [],
								a = [],
								s = function(e, t, n) {
									(n ? a : o).push(e)
								};
							if (r) {
								r.modules && (i.modules = (t.modules || []).concat(r.modules)), r.directives && (i.directives = C(Object.create(t.directives || null), r.directives));
								for (var c in r) "modules" !== c && "directives" !== c && (i[c] = r[c])
							}
							i.warn = s;
							var u = e(n.trim(), i);
							return u.errors = o, u.tips = a, u
						}
						return {
							compile: n,
							compileToFunctions: wo(n)
						}
					}
				}(function(e, t) {
					var n = ui(e.trim(), t);
					!1 !== t.optimize && Di(n, t);
					var r = Wi(n, t);
					return {
						ast: n,
						render: r.render,
						staticRenderFns: r.staticRenderFns
					}
				})),
				Ru = Du(Su),
				Fu = (Ru.compile, Ru.compileToFunctions),
				qu = !!zo && Co(!1),
				Bu = !!zo && Co(!0),
				Uu = g(function(e) {
					var t = fn(e);
					return t && t.innerHTML
				}),
				Hu = zt.prototype.$mount;
			zt.prototype.$mount = function(e, t) {
				if ((e = e && fn(e)) === document.body || e === document.documentElement) return this;
				var n = this.$options;
				if (!n.render) {
					var r = n.template;
					if (r)
						if ("string" == typeof r) "#" === r.charAt(0) && (r = Uu(r));
						else {
							if (!r.nodeType) return this;
							r = r.innerHTML
						}
					else e && (r = xo(e));
					if (r) {
						var i = Fu(r, {
								outputSourceRange: !1,
								shouldDecodeNewlines: qu,
								shouldDecodeNewlinesForHref: Bu,
								delimiters: n.delimiters,
								comments: n.comments
							}, this),
							o = i.render,
							a = i.staticRenderFns;
						n.render = o, n.staticRenderFns = a
					}
				}
				return Hu.call(this, e, t)
			}, zt.compile = Fu, t.default = zt
		}.call(t, n(7), n(42).setImmediate)
}, function(e, t, n) {
	(function(e) {
		function r(e, t) {
			this._id = e, this._clearFn = t
		}
		var i = void 0 !== e && e || "undefined" != typeof self && self || window,
			o = Function.prototype.apply;
		t.setTimeout = function() {
			return new r(o.call(setTimeout, i, arguments), clearTimeout)
		}, t.setInterval = function() {
			return new r(o.call(setInterval, i, arguments), clearInterval)
		}, t.clearTimeout = t.clearInterval = function(e) {
			e && e.close()
		}, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
			this._clearFn.call(i, this._id)
		}, t.enroll = function(e, t) {
			clearTimeout(e._idleTimeoutId), e._idleTimeout = t
		}, t.unenroll = function(e) {
			clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
		}, t._unrefActive = t.active = function(e) {
			clearTimeout(e._idleTimeoutId);
			var t = e._idleTimeout;
			t >= 0 && (e._idleTimeoutId = setTimeout(function() {
				e._onTimeout && e._onTimeout()
			}, t))
		}, n(43), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
	}).call(t, n(7))
}, function(e, t, n) {
	(function(e, t) {
		! function(e, n) {
			"use strict";

			function r(e) {
				"function" != typeof e && (e = new Function("" + e));
				for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
				var r = {
					callback: e,
					args: t
				};
				return u[c] = r, s(c), c++
			}

			function i(e) {
				delete u[e]
			}

			function o(e) {
				var t = e.callback,
					r = e.args;
				switch (r.length) {
					case 0:
						t();
						break;
					case 1:
						t(r[0]);
						break;
					case 2:
						t(r[0], r[1]);
						break;
					case 3:
						t(r[0], r[1], r[2]);
						break;
					default:
						t.apply(n, r)
				}
			}

			function a(e) {
				if (l) setTimeout(a, 0, e);
				else {
					var t = u[e];
					if (t) {
						l = !0;
						try {
							o(t)
						} finally {
							i(e), l = !1
						}
					}
				}
			}
			if (!e.setImmediate) {
				var s, c = 1,
					u = {},
					l = !1,
					f = e.document,
					d = Object.getPrototypeOf && Object.getPrototypeOf(e);
				d = d && d.setTimeout ? d : e, "[object process]" === {}.toString.call(e.process) ? function() {
					s = function(e) {
						t.nextTick(function() {
							a(e)
						})
					}
				}() : function() {
					if (e.postMessage && !e.importScripts) {
						var t = !0,
							n = e.onmessage;
						return e.onmessage = function() {
							t = !1
						}, e.postMessage("", "*"), e.onmessage = n, t
					}
				}() ? function() {
					var t = "setImmediate$" + Math.random() + "$",
						n = function(n) {
							n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && a(+n.data.slice(t.length))
						};
					e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), s = function(n) {
						e.postMessage(t + n, "*")
					}
				}() : e.MessageChannel ? function() {
					var e = new MessageChannel;
					e.port1.onmessage = function(e) {
						a(e.data)
					}, s = function(t) {
						e.port2.postMessage(t)
					}
				}() : f && "onreadystatechange" in f.createElement("script") ? function() {
					var e = f.documentElement;
					s = function(t) {
						var n = f.createElement("script");
						n.onreadystatechange = function() {
							a(t), n.onreadystatechange = null, e.removeChild(n), n = null
						}, e.appendChild(n)
					}
				}() : function() {
					s = function(e) {
						setTimeout(a, 0, e)
					}
				}(), d.setImmediate = r, d.clearImmediate = i
			}
		}("undefined" == typeof self ? void 0 === e ? this : e : self)
	}).call(t, n(7), n(14))
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = n(15),
		i = n.n(r);
	for (var o in r) "default" !== o && function(e) {
		n.d(t, e, function() {
			return r[e]
		})
	}(o);
	var a = n(86),
		s = n(8),
		c = s(i.a, a.a, !1, null, null, null);
	t.default = c.exports
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = n(16),
		i = n.n(r);
	for (var o in r) "default" !== o && function(e) {
		n.d(t, e, function() {
			return r[e]
		})
	}(o);
	var a = n(85),
		s = n(8),
		c = s(i.a, a.a, !1, null, null, null);
	t.default = c.exports
}, function(e, t, n) {
	e.exports = n(47)
}, function(e, t, n) {
	"use strict";

	function r(e) {
		var t = new a(e),
			n = o(a.prototype.request, t);
		return i.extend(n, a.prototype, t), i.extend(n, t), n
	}
	var i = n(0),
		o = n(17),
		a = n(49),
		s = n(23),
		c = n(20),
		u = r(c);
	u.Axios = a, u.create = function(e) {
		return r(s(u.defaults, e))
	}, u.Cancel = n(24), u.CancelToken = n(61), u.isCancel = n(19), u.all = function(e) {
		return Promise.all(e)
	}, u.spread = n(62), e.exports = u, e.exports.default = u
}, function(e, t) {
	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <https://feross.org>
	 * @license  MIT
	 */
	e.exports = function(e) {
		return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
	}
}, function(e, t, n) {
	"use strict";

	function r(e) {
		this.defaults = e, this.interceptors = {
			request: new a,
			response: new a
		}
	}
	var i = n(0),
		o = n(18),
		a = n(50),
		s = n(51),
		c = n(23);
	r.prototype.request = function(e) {
		"string" == typeof e ? (e = arguments[1] || {}, e.url = arguments[0]) : e = e || {}, e = c(this.defaults, e), e.method = e.method ? e.method.toLowerCase() : "get";
		var t = [s, void 0],
			n = Promise.resolve(e);
		for (this.interceptors.request.forEach(function(e) {
				t.unshift(e.fulfilled, e.rejected)
			}), this.interceptors.response.forEach(function(e) {
				t.push(e.fulfilled, e.rejected)
			}); t.length;) n = n.then(t.shift(), t.shift());
		return n
	}, r.prototype.getUri = function(e) {
		return e = c(this.defaults, e), o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
	}, i.forEach(["delete", "get", "head", "options"], function(e) {
		r.prototype[e] = function(t, n) {
			return this.request(i.merge(n || {}, {
				method: e,
				url: t
			}))
		}
	}), i.forEach(["post", "put", "patch"], function(e) {
		r.prototype[e] = function(t, n, r) {
			return this.request(i.merge(r || {}, {
				method: e,
				url: t,
				data: n
			}))
		}
	}), e.exports = r
}, function(e, t, n) {
	"use strict";

	function r() {
		this.handlers = []
	}
	var i = n(0);
	r.prototype.use = function(e, t) {
		return this.handlers.push({
			fulfilled: e,
			rejected: t
		}), this.handlers.length - 1
	}, r.prototype.eject = function(e) {
		this.handlers[e] && (this.handlers[e] = null)
	}, r.prototype.forEach = function(e) {
		i.forEach(this.handlers, function(t) {
			null !== t && e(t)
		})
	}, e.exports = r
}, function(e, t, n) {
	"use strict";

	function r(e) {
		e.cancelToken && e.cancelToken.throwIfRequested()
	}
	var i = n(0),
		o = n(52),
		a = n(19),
		s = n(20),
		c = n(59),
		u = n(60);
	e.exports = function(e) {
		return r(e), e.baseURL && !c(e.url) && (e.url = u(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = i.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
			delete e.headers[t]
		}), (e.adapter || s.adapter)(e).then(function(t) {
			return r(e), t.data = o(t.data, t.headers, e.transformResponse), t
		}, function(t) {
			return a(t) || (r(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
		})
	}
}, function(e, t, n) {
	"use strict";
	var r = n(0);
	e.exports = function(e, t, n) {
		return r.forEach(n, function(n) {
			e = n(e, t)
		}), e
	}
}, function(e, t, n) {
	"use strict";
	var r = n(0);
	e.exports = function(e, t) {
		r.forEach(e, function(n, r) {
			r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
		})
	}
}, function(e, t, n) {
	"use strict";
	var r = n(22);
	e.exports = function(e, t, n) {
		var i = n.config.validateStatus;
		!i || i(n.status) ? e(n) : t(r("Request failed with status code " + n.status, n.config, null, n.request, n))
	}
}, function(e, t, n) {
	"use strict";
	e.exports = function(e, t, n, r, i) {
		return e.config = t, n && (e.code = n), e.request = r, e.response = i, e.isAxiosError = !0, e.toJSON = function() {
			return {
				message: this.message,
				name: this.name,
				description: this.description,
				number: this.number,
				fileName: this.fileName,
				lineNumber: this.lineNumber,
				columnNumber: this.columnNumber,
				stack: this.stack,
				config: this.config,
				code: this.code
			}
		}, e
	}
}, function(e, t, n) {
	"use strict";
	var r = n(0),
		i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
	e.exports = function(e) {
		var t, n, o, a = {};
		return e ? (r.forEach(e.split("\n"), function(e) {
			if (o = e.indexOf(":"), t = r.trim(e.substr(0, o)).toLowerCase(), n = r.trim(e.substr(o + 1)), t) {
				if (a[t] && i.indexOf(t) >= 0) return;
				a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n
			}
		}), a) : a
	}
}, function(e, t, n) {
	"use strict";
	var r = n(0);
	e.exports = r.isStandardBrowserEnv() ? function() {
		function e(e) {
			var t = e;
			return n && (i.setAttribute("href", t), t = i.href), i.setAttribute("href", t), {
				href: i.href,
				protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
				host: i.host,
				search: i.search ? i.search.replace(/^\?/, "") : "",
				hash: i.hash ? i.hash.replace(/^#/, "") : "",
				hostname: i.hostname,
				port: i.port,
				pathname: "/" === i.pathname.charAt(0) ? i.pathname : "/" + i.pathname
			}
		}
		var t, n = /(msie|trident)/i.test(navigator.userAgent),
			i = document.createElement("a");
		return t = e(window.location.href),
			function(n) {
				var i = r.isString(n) ? e(n) : n;
				return i.protocol === t.protocol && i.host === t.host
			}
	}() : function() {
		return function() {
			return !0
		}
	}()
}, function(e, t, n) {
	"use strict";
	var r = n(0);
	e.exports = r.isStandardBrowserEnv() ? function() {
		return {
			write: function(e, t, n, i, o, a) {
				var s = [];
				s.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), r.isString(i) && s.push("path=" + i), r.isString(o) && s.push("domain=" + o), !0 === a && s.push("secure"), document.cookie = s.join("; ")
			},
			read: function(e) {
				var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
				return t ? decodeURIComponent(t[3]) : null
			},
			remove: function(e) {
				this.write(e, "", Date.now() - 864e5)
			}
		}
	}() : function() {
		return {
			write: function() {},
			read: function() {
				return null
			},
			remove: function() {}
		}
	}()
}, function(e, t, n) {
	"use strict";
	e.exports = function(e) {
		return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
	}
}, function(e, t, n) {
	"use strict";
	e.exports = function(e, t) {
		return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
	}
}, function(e, t, n) {
	"use strict";

	function r(e) {
		if ("function" != typeof e) throw new TypeError("executor must be a function.");
		var t;
		this.promise = new Promise(function(e) {
			t = e
		});
		var n = this;
		e(function(e) {
			n.reason || (n.reason = new i(e), t(n.reason))
		})
	}
	var i = n(24);
	r.prototype.throwIfRequested = function() {
		if (this.reason) throw this.reason
	}, r.source = function() {
		var e;
		return {
			token: new r(function(t) {
				e = t
			}),
			cancel: e
		}
	}, e.exports = r
}, function(e, t, n) {
	"use strict";
	e.exports = function(e) {
		return function(t) {
			return e.apply(null, t)
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = void 0;
	var r = {
		template: '<div class="slider-preloader-box">\n        <svg width="71" height="52" class="icon-slider-preloader effect-puls" viewBox="0 0 71 52" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M6.02444 32.4365V20.5635C6.02444 10.0397 6.02444 8.15079 5.88595 5.99206C5.74745 3.69841 5.19348 2.61905 2.90835 2.14683C2.35438 2.0119 1.17719 1.94444 0.553971 1.94444C0.276986 1.94444 0 1.80952 0 1.53968C0 1.13492 0.346232 1 1.10794 1C4.22403 1 8.37882 1.20238 8.93279 1.20238C10.4562 1.20238 14.4725 1 17.6578 1C26.3136 1 29.4297 3.83333 30.5377 4.84524C32.0611 6.2619 34 9.29762 34 13.6825C34 22.4524 26.7984 28.9286 16.9654 28.9286C16.6191 28.9286 15.8574 28.9286 15.5112 28.8611C15.165 28.8611 14.7495 28.7262 14.7495 28.3889C14.7495 27.8492 15.165 27.7817 16.6191 27.7817C23.336 27.7817 28.5988 23.3294 28.5988 16.246C28.5988 14.5595 28.391 10.0397 24.721 6.39683C21.0509 2.75397 16.8269 3.02381 15.2342 3.02381C14.057 3.02381 12.8798 3.15873 12.2566 3.42857C11.8411 3.56349 11.7026 4.03571 11.7026 4.71032V32.4365C11.7026 38.9127 11.7026 44.2421 12.0489 47.0754C12.2566 49.0317 12.6721 50.5159 14.7495 50.7857C15.7189 50.9206 17.2424 51.0556 17.8656 51.0556C18.2811 51.0556 18.4196 51.2579 18.4196 51.4603C18.4196 51.7976 18.0733 52 17.3116 52C13.5031 52 9.14053 51.7976 8.7943 51.7976C8.58656 51.7976 4.22403 52 2.14664 52C1.38493 52 1.0387 51.8651 1.0387 51.4603C1.0387 51.2579 1.17719 51.0556 1.59267 51.0556C2.21589 51.0556 3.04684 50.9206 3.67006 50.7857C5.05499 50.5159 5.40122 49.0317 5.67821 47.0754C6.02444 44.2421 6.02444 38.9127 6.02444 32.4365Z" fill="#F9B242"/>\n            <path d="M46.9453 32.2618V20.2827C46.9453 9.66492 46.9453 7.75916 46.8087 5.58115C46.672 3.26702 46.1253 2.17801 43.8702 1.70157C43.4601 1.63351 42.7768 1.63351 42.1617 1.56544C41.5467 1.49738 41 1.42932 41 1.08901C41 0.680628 41.3417 0.544503 42.0934 0.544503C44.7585 0.544503 47.3554 0.748691 49.8155 0.748691C51.1822 0.748691 65.0547 0.748691 66.6264 0.680628C68.1982 0.612565 69.4282 0.612565 69.9749 0.272251C70.18 0.136126 70.4533 0 70.59 0C70.8633 0 71 0.272251 71 0.612565C71 0.95288 70.7267 1.90576 70.59 2.72251C70.3166 4.69633 70.3166 5.78534 70.18 7.6911C70.18 8.50785 69.8383 9.05236 69.5649 9.05236C69.2232 9.05236 69.1549 8.7801 69.0866 8.16754C69.0182 7.21466 68.7449 5.58115 67.7882 4.7644C66.9681 4.08377 65.738 3.53927 63.7563 3.4712L53.3007 3.26702C52.8907 3.26702 52.6856 3.4712 52.6856 4.01571V22.801C52.6856 23.2094 52.754 23.4136 53.164 23.4136C55.9658 23.4136 59.861 23.4136 62.6629 23.3455C66.2847 23.2775 67.1731 23.2094 68.1298 22.0524C68.4715 21.644 68.6082 21.3717 68.8815 21.3717C69.1549 21.3717 69.2232 21.5759 69.2232 21.9162C69.2232 22.3246 68.8815 23.4817 68.6765 25.7277C68.4715 27.7696 68.4715 29.4031 68.4032 30.4241C68.3349 31.1728 68.2665 31.5812 67.9248 31.5812C67.5148 31.5812 67.4465 31.1047 67.3781 30.4241C67.2415 28.9267 67.0364 26.5445 63.4829 26.0681C61.7745 25.8639 54.3257 25.8639 53.164 25.8639C52.8223 25.8639 52.6856 26 52.6856 26.4764V32.2618C52.6856 38.0471 52.6856 42.8796 52.8907 46.0105C53.0957 49.0733 53.8474 50.5707 55.6925 50.7749C56.5809 50.911 57.7426 50.9791 58.4943 51.0471C59.1093 51.1152 59.3144 51.2513 59.3144 51.5236C59.3144 51.8639 58.9727 52 58.221 52C54.3941 52 50.1572 51.7958 49.8155 51.7958H49.2005C47.8337 51.8639 44.7585 52 43.1185 52C42.3667 52 42.0251 51.8639 42.0251 51.4555C42.0251 51.2513 42.1617 51.1152 42.7768 51.0471C43.4601 50.9791 44.0752 50.911 44.5535 50.7749C45.9886 50.3665 46.467 49.3456 46.672 46.3508C46.877 43.4241 46.9453 38.6597 46.9453 32.2618Z" fill="#F9B242"/>\n        </svg>\n    </div>'
	};
	t.default = r
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = n(25),
		i = n.n(r);
	for (var o in r) "default" !== o && function(e) {
		n.d(t, e, function() {
			return r[e]
		})
	}(o);
	var a = n(84),
		s = n(8),
		c = s(i.a, a.a, !1, null, null, null);
	t.default = c.exports
}, function(e, t, n) {
	"use strict";
	var r = n(1),
		i = n(4),
		o = n(26),
		a = n(66),
		s = n(10),
		c = n(6),
		u = n(71).f,
		l = n(28).f,
		f = n(13).f,
		d = n(76).trim,
		p = r.Number,
		v = p,
		h = p.prototype,
		m = "Number" == o(n(80)(h)),
		y = "trim" in String.prototype,
		g = function(e) {
			var t = s(e, !1);
			if ("string" == typeof t && t.length > 2) {
				t = y ? t.trim() : d(t, 3);
				var n, r, i, o = t.charCodeAt(0);
				if (43 === o || 45 === o) {
					if (88 === (n = t.charCodeAt(2)) || 120 === n) return NaN
				} else if (48 === o) {
					switch (t.charCodeAt(1)) {
						case 66:
						case 98:
							r = 2, i = 49;
							break;
						case 79:
						case 111:
							r = 8, i = 55;
							break;
						default:
							return +t
					}
					for (var a, c = t.slice(2), u = 0, l = c.length; u < l; u++)
						if ((a = c.charCodeAt(u)) < 48 || a > i) return NaN;
					return parseInt(c, r)
				}
			}
			return +t
		};
	if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
		p = function(e) {
			var t = arguments.length < 1 ? 0 : e,
				n = this;
			return n instanceof p && (m ? c(function() {
				h.valueOf.call(n)
			}) : "Number" != o(n)) ? a(new v(g(t)), n, p) : g(t)
		};
		for (var _, b = n(2) ? u(v) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), w = 0; b.length > w; w++) i(v, _ = b[w]) && !i(p, _) && f(p, _, l(v, _));
		p.prototype = h, h.constructor = p, n(39)(r, "Number", p)
	}
}, function(e, t, n) {
	var r = n(3),
		i = n(67).set;
	e.exports = function(e, t, n) {
		var o, a = t.constructor;
		return a !== n && "function" == typeof a && (o = a.prototype) !== n.prototype && r(o) && i && i(e, o), e
	}
}, function(e, t, n) {
	var r = n(3),
		i = n(5),
		o = function(e, t) {
			if (i(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
		};
	e.exports = {
		set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, r) {
			try {
				r = n(27)(Function.call, n(28).f(Object.prototype, "__proto__").set, 2), r(e, []), t = !(e instanceof Array)
			} catch (e) {
				t = !0
			}
			return function(e, n) {
				return o(e, n), t ? e.__proto__ = n : r(e, n), e
			}
		}({}, !1) : void 0),
		check: o
	}
}, function(e, t) {
	e.exports = function(e) {
		if ("function" != typeof e) throw TypeError(e + " is not a function!");
		return e
	}
}, function(e, t) {
	t.f = {}.propertyIsEnumerable
}, function(e, t, n) {
	var r = n(26);
	e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
		return "String" == r(e) ? e.split("") : Object(e)
	}
}, function(e, t, n) {
	var r = n(33),
		i = n(12).concat("length", "prototype");
	t.f = Object.getOwnPropertyNames || function(e) {
		return r(e, i)
	}
}, function(e, t, n) {
	var r = n(9),
		i = n(73),
		o = n(74);
	e.exports = function(e) {
		return function(t, n, a) {
			var s, c = r(t),
				u = i(c.length),
				l = o(a, u);
			if (e && n != n) {
				for (; u > l;)
					if ((s = c[l++]) != s) return !0
			} else
				for (; u > l; l++)
					if ((e || l in c) && c[l] === n) return e || l || 0;
			return !e && -1
		}
	}
}, function(e, t, n) {
	var r = n(34),
		i = Math.min;
	e.exports = function(e) {
		return e > 0 ? i(r(e), 9007199254740991) : 0
	}
}, function(e, t, n) {
	var r = n(34),
		i = Math.max,
		o = Math.min;
	e.exports = function(e, t) {
		return e = r(e), e < 0 ? i(e + t, 0) : o(e, t)
	}
}, function(e, t) {
	e.exports = !1
}, function(e, t, n) {
	var r = n(77),
		i = n(30),
		o = n(6),
		a = n(79),
		s = "[" + a + "]",
		c = "​",
		u = RegExp("^" + s + s + "*"),
		l = RegExp(s + s + "*$"),
		f = function(e, t, n) {
			var i = {},
				s = o(function() {
					return !!a[e]() || c[e]() != c
				}),
				u = i[e] = s ? t(d) : a[e];
			n && (i[n] = u), r(r.P + r.F * s, "String", i)
		},
		d = f.trim = function(e, t) {
			return e = String(i(e)), 1 & t && (e = e.replace(u, "")), 2 & t && (e = e.replace(l, "")), e
		};
	e.exports = f
}, function(e, t, n) {
	var r = n(1),
		i = n(11),
		o = n(38),
		a = n(39),
		s = n(27),
		c = function(e, t, n) {
			var u, l, f, d, p = e & c.F,
				v = e & c.G,
				h = e & c.S,
				m = e & c.P,
				y = e & c.B,
				g = v ? r : h ? r[t] || (r[t] = {}) : (r[t] || {}).prototype,
				_ = v ? i : i[t] || (i[t] = {}),
				b = _.prototype || (_.prototype = {});
			v && (n = t);
			for (u in n) l = !p && g && void 0 !== g[u], f = (l ? g : n)[u], d = y && l ? s(f, r) : m && "function" == typeof f ? s(Function.call, f) : f, g && a(g, u, f, e & c.U), _[u] != f && o(_, u, d), m && b[u] != f && (b[u] = f)
		};
	r.core = i, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c
}, function(e, t, n) {
	e.exports = n(36)("native-function-to-string", Function.toString)
}, function(e, t) {
	e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}, function(e, t, n) {
	var r = n(5),
		i = n(81),
		o = n(12),
		a = n(35)("IE_PROTO"),
		s = function() {},
		c = function() {
			var e, t = n(32)("iframe"),
				r = o.length;
			for (t.style.display = "none", n(83).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object<\/script>"), e.close(), c = e.F; r--;) delete c.prototype[o[r]];
			return c()
		};
	e.exports = Object.create || function(e, t) {
		var n;
		return null !== e ? (s.prototype = r(e), n = new s, s.prototype = null, n[a] = e) : n = c(), void 0 === t ? n : i(n, t)
	}
}, function(e, t, n) {
	var r = n(13),
		i = n(5),
		o = n(82);
	e.exports = n(2) ? Object.defineProperties : function(e, t) {
		i(e);
		for (var n, a = o(t), s = a.length, c = 0; s > c;) r.f(e, n = a[c++], t[n]);
		return e
	}
}, function(e, t, n) {
	var r = n(33),
		i = n(12);
	e.exports = Object.keys || function(e) {
		return r(e, i)
	}
}, function(e, t, n) {
	var r = n(1).document;
	e.exports = r && r.documentElement
}, function(e, t, n) {
	"use strict";
	var r = function() {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "slider-container"
			}, [n("div", {
				staticClass: "slider slider-fadein"
			}, e._l(e.bannersData, function(e, t) {
				return n("div", {
					key: t,
					staticClass: "slider__item",
					attrs: {
						"data-item": t
					}
				}, [null === e.link ? [n("img", {
					staticClass: "slider__image",
					attrs: {
						src: "/",
						"data-src": e.img,
						"data-loaded": "",
						alt: ""
					}
				})] : [n("a", {
					staticClass: "slider__link",
					attrs: {
						href: e.link
					}
				}, [n("img", {
					staticClass: "slider__image",
					attrs: {
						src: "/",
						"data-src": e.img,
						"data-loaded": "",
						alt: ""
					}
				})])]], 2)
			}), 0), e._v(" "), n("div", {
				staticClass: "slider-preview-wrapp"
			}, [e.nav ? n("div", {
				staticClass: "slider-preview-nav",
				class: {
					"is-active": e.nav
				}
			}, [n("div", {
				staticClass: "slider-preview-nav__left",
				on: {
					click: e.arrowPrev
				}
			}, [n("svg", {
				staticClass: "icon-slider-top-left disabled",
				attrs: {
					width: "47",
					height: "48",
					viewBox: "0 0 47 48",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}
			}, [n("mask", {
				attrs: {
					id: "mask0",
					maskUnits: "userSpaceOnUse",
					x: "0",
					y: "0",
					width: "47",
					height: "48"
				}
			}, [n("path", {
				attrs: {
					d: "M47 0H0V48H47V0Z",
					fill: "white"
				}
			})]), e._v(" "), n("g", {
				attrs: {
					mask: "url(#mask0)"
				}
			}, [n("path", {
				staticClass: "svg-elem-slider-arrow-bg",
				attrs: {
					d: "M24 47.5H47.5V0.5H24C11.0213 0.5 0.5 11.0213 0.5 24C0.5 36.9787 11.0213 47.5 24 47.5Z",
					fill: "#12100E",
					"fill-opacity": "0.496",
					stroke: "#3DAA45"
				}
			}), e._v(" "), n("path", {
				staticClass: "svg-elem-slider-arrow",
				attrs: {
					d: "M29.0001 14L20.6022 23.331C20.2599 23.7113 20.2599 24.2887 20.6022 24.669L29.0001 34",
					stroke: "#3DAA45",
					"stroke-width": "4",
					"stroke-linecap": "round"
				}
			})])])]), e._v(" "), n("div", {
				staticClass: "slider-preview-nav__right",
				on: {
					click: e.arrowNext
				}
			}, [n("svg", {
				staticClass: "icon-slider-top-right",
				attrs: {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 48 48"
				}
			}, [n("g", {
				attrs: {
					fill: "none",
					stroke: "#3DAA45"
				}
			}, [n("path", {
				staticClass: "svg-elem-slider-arrow-bg",
				attrs: {
					"fill-opacity": ".496",
					d: "M0.5,0.5 L0.5,47.5 L24,47.5 C36.9786916,47.5 47.5,36.9786916 47.5,24 C47.5,11.0213084 36.9786916,0.5 24,0.5 L0.5,0.5 Z"
				}
			}), e._v(" "), n("path", {
				staticClass: "svg-elem-slider-arrow",
				attrs: {
					"stroke-linecap": "round",
					"stroke-width": "4",
					d: "M28,13 L19.5578212,22.8492086 C19.23683,23.2236984 19.23683,23.7763016 19.5578212,24.1507914 L28,34",
					transform: "matrix(-1 0 0 1 47 0)"
				}
			})])])])]) : e._e(), e._v(" "), n("div", {
				staticClass: "slider-preview"
			}, e._l(e.previewGroupList, function(t, r) {
				return n("div", {
					key: r,
					staticClass: "slider-preview-row",
					attrs: {
						"data-row": r,
						"data-loaded": ""
					}
				}, e._l(t, function(t, i) {
					return n("div", {
						key: i,
						staticClass: "slider-preview__item",
						attrs: {
							"data-item": r * e.sizeGroup + i
						},
						on: {
							click: function(t) {
								return e.slideItemAction(t)
							}
						}
					}, [n("div", {
						staticClass: "item-gereral-thumbs-wrapp"
					}, [n("div", {
						staticClass: "item-gereral-thumbs"
					}, [n("div", {
						staticClass: "slider-preview-loadbar"
					}), e._v(" "), n("img", {
						staticClass: "slider-preview__image",
						attrs: {
							src: "/",
							"data-src": t.previewImg,
							alt: ""
						}
					})])])])
				}), 0)
			}), 0)])])
		},
		i = [],
		o = {
			render: r,
			staticRenderFns: i
		};
	t.a = o
}, function(e, t, n) {
	"use strict";
	var r = function() {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "slider-main"
			}, [e.preloader ? n("PreloaderBox") : e._e(), e._v(" "), !e.preloader && e.bannersData.length > 0 ? n("Slider", {
				attrs: {
					bannersData: e.bannersData
				}
			}) : e._e()], 1)
		},
		i = [],
		o = {
			render: r,
			staticRenderFns: i
		};
	t.a = o
}, function(e, t, n) {
	"use strict";
	var r = function() {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", [n("SliderGeneral")], 1)
		},
		i = [],
		o = {
			render: r,
			staticRenderFns: i
		};
	t.a = o
}]);

var preloader="<div class='loading'><div class='loader'></div></div>";
window.vulcanNamespace = {};
var xhr='';

$(function(){
  // piwik test
    var array = $('[data-piwik-event]');
    array.each(function(index){
        var item =  $(this)
            ,eventName = item.attr('data-piwik-event').split(',');

        item.bind('click', function(){
            _paq.push(['trackEvent', eventName[0], eventName[1], eventName[2]]);
            console.log("Group: " + eventName[0] + ", " + "Event Name: " + eventName[2] + ", " + "Event Action: " + eventName[1]);
        });
    });
//piwik

  $('.levels-table__item').on('touchend click', function(e) {
    $('.levels-table__item').removeClass('levels-table__item_active');
    $(this).addClass('levels-table__item_active');
    $('.levels-table__arrow').removeClass('levels-table__arrow_active');
    $(this).find('.levels-table__arrow').addClass('levels-table__arrow_active');
  });

  $(".js-close-popup, [data-toggle='tab']").on('click', function(e) {
    $('.payment__tooltip').removeClass("payment__tooltip_open");
    //$(this).next('.payment__tooltip').toggleClass("payment__tooltip_open");
  });
$(document).on('click','.payitem',function(e){
    var $index=$(this).index(),
        content = $('.payment__tooltip_open .pay-tooltip');


    $('.js-input__inner').val('');
    $('.pay-tooltip__note').hide();
    $('.l_num').click().val('500');
    $('.input_summ_val').val('500');
    $('.input_summ_val').on('change, input', function () {
      var volume_value = $(this).val();
	  
      $(this).parent().parent().find('.l_num').val(volume_value).click();
    });
	$('.payment__item').on('click',function( i ) {
		var volume_value = $(this).attr('url_img');
		$('.class_images_pay').html('<img src="'+volume_value+'" alt="" width="" height="40" class="">');
    });
    $('.payment__tooltip').removeClass("payment__tooltip_open");
    $(this).parent().parent().next('.payment__tooltip').toggleClass("payment__tooltip_open");
    
 
    if($(this).find('input').val() === "qiwi_rub" || $(this).find('input').val() === "beeline_rub" || $(this).find('input').val() === "mts_rub" || $(this).find('input').val() === "megafon_rub" || $(this).find('input').val() === "tele2_rub") {
      $('.pay-tooltip__phone').show();
      $('.pay-tooltip').addClass('pay-tooltip_withphone');
      //$('.pay-tooltip__phone_inner').mask("99999999999");
      $('.pay-tooltip__phone_inner').attr('required', true);
    } 
    else {
      $('.pay-tooltip__summ').show();
      $('.pay-tooltip__phone').hide();
      $('.pay-tooltip').removeClass('pay-tooltip_withphone');
      $('.pay-tooltip__phone_inner').attr('required', false);
    }


    $(this).find('.l_num').click();



    $('.js-input__inner').on("keyup, input", function(e) {
      //if (e.keyCode != 37) {
        if (this.value.match(/[^0-9]/g)) {
          this.value = this.value.replace(/[^0-9]/g, '');
        }
     // }
    });



  });

window.getTimeRemaining = function(endtime) {
    var today=(new Date()).toUTCString();
    endtime = (new Date(endtime*1000)).toUTCString();
    var t = Date.parse(endtime) - Date.parse(today);
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };

  function initializeClock(id, endtime){
    var clock = document.getElementById(id);
    var timeinterval = setInterval(function(){
      var t = getTimeRemaining(endtime);
      if(t.days<0){t.days=0}
      if(t.hours<0){t.hours=0}
      if(t.minutes<0){t.minutes=0}
      if(t.seconds<0){t.seconds=0}

      if(t.hours<10 && t.hours>=0){t.hours='0'+t.hours}
      if(t.minutes<10 && t.minutes>=0){t.minutes='0'+t.minutes}
      if(t.seconds<10 && t.seconds>=0){t.seconds='0'+t.seconds}

      clock.innerHTML = ' <div class="timer__cell">' + t.days + '</div> ' +
          '<div class="timer__cell timer__cell_empty"></div> ' +
          '<div class="timer__cell">'+ t.hours + '</div>' +
          ' <div class="timer__cell">:</div> ' +
          '<div class="timer__cell">' + t.minutes + '</div> ' +
          '<div class="timer__cell">:</div> ' +
          '<div class="timer__cell">' + t.seconds + '</div> ';
      if(t.total<=0){
        clearInterval(timeinterval);
      }
    },1000);
  }
  function initializeJackpot(id, jackpot){
    
    var jack = document.getElementById(id);
    var numbers = (jackpot+ '').split('',-4);
    var $j=numbers.reverse();
    var timeinterval = setInterval(function(){
      $j[0]=parseInt($j[0])+randomInteger(0,5);
      if($j[0]>=10){
        $j[0]=parseInt($j[0])-10;
        $j[1]=parseInt($j[1])+1;
        if($j[1]>=10){
          $j[1]=10-$j[1];
          $j[2]=parseInt($j[2])+1;
          if($j[2]>=10){
            $j[2]=10-$j[2];
            $j[3]=parseInt($j[3])+1
          }
        }
      }
      if($j[0]<0){
        $j[0]=0;
        $j[1]=parseInt($j[1])-1;
        if($j[1]<0){
          $j[1]=0;
          $j[2]=parseInt($j[2])-1;
          if($j[2]<0){
            $j[2]=0;
            $j[3]=parseInt($j[3])-1;
          }
        }
      }
      $(jack).find('.js-countdown__item:last').html($j[0]);
      //console.log($(jack).find('.js-countdown__item').length);
      $(jack).find('.js-countdown__item').eq(parseInt($(jack).find('.js-countdown__item').length)-2).html($j[1]);
      $(jack).find('.js-countdown__item').eq(parseInt($(jack).find('.js-countdown__item').length)-3).html($j[2]);
      $(jack).find('.js-countdown__item').eq(parseInt($(jack).find('.js-countdown__item').length)-4).html($j[3]);


    },3000);
  }
  function randomInteger(min, max) {
    var rand = min + Math.random() * (max - min)
    rand = Math.round(rand);
    return rand;
  }
  $(function () {

    function randomInteger(min, max) {
      var rand = min + Math.random() * (max - min)
      rand = Math.round(rand);
      return rand;
    }


    $('.js-close-popup').on('click', function (e) {
      e.preventDefault();
      var popup = $(this).parents('.popup');
      if (popup.length != 0)  {
        var Class = popup.attr('class').split(' ');
        var ClassName = Class[1];

      } else {
        var ClassName = 'modal';
      }
      $("." + ClassName).hide();

      $('.modal').hide();
      //$('.overflow').hide();
      $('html').removeClass('modal_open');
    });
    $('.alert-panel__icon .icon_cross').on('click', function (e) {
      e.preventDefault();
      $('.alert-panel').hide();
    });
    $('.notify-panel__icon .icon_cross').on('click', function (e) {
      e.preventDefault();
      $('.notify-panel').hide();
    });
    $.each($('[data-toggle="timer"]'),function(){
      initializeClock($(this).attr("id"), $(this).data('time'))
    });

    $.each($('[data-toggle="jackpot"]'),function(){
      initializeJackpot($(this).attr("id"), $(this).data('jack'))
    });
  });

  function showRegistrationPopup(){
    $('.modal,.popup').hide();

    $('#registration-confirm').show();
    $('html').addClass('modal_open');
    if ($(window).width() < 768) {
      $('.modal_open .popup').not('.ps-container').perfectScrollbar({
        theme: 'hidden'
      });
    }
      $('#registration-confirm #bonus').val($('#registration-modal [name="bonus"]:checked').val());
      $('#registration-confirm .registration__image img').attr('src',$('#registration-modal [name="bonus"]:checked').prev('label').find('img').attr('src'));
  }
  
  if(!$('#registration-modal [name="bonus"]').data("binding"))
  $('#registration-modal [name="bonus"]').on('change',function(e){
    
    e.preventDefault();
    showRegistrationPopup();
    $('html').addClass('modal_open');
  });
  

  $(document).on('submit','form[data-type="ajax"]',function(e){
    e.preventDefault();
    var $type=$(this).attr('method');
    var $action=$(this).attr('action');
    var $data=$(this).serialize();
    var $answer=$(this).data('answer');
    var $form=$(this);
    $.ajax({
      type:$type,
      url:$action,
      data:$data,
      dataType:'json',
      beforeSend:function(){
        $form.find('.modal__error').hide();
        $form.find('.pay-tooltip__note').hide();
        $form.closest('.modal,.popup').append(preloader);
      },
      success:function(data){
        $('.loading').remove();
        if(!data.success){
          $('[type="password"]').val('');
          if($.type(data.error)=='object'){
            $form.find('.modal__error .modal__note_important,.pay-tooltip__note .error__info').html('');
            $.each(data.error,function($key,$value){
              $form.find('.modal__error .modal__note_important,.pay-tooltip__note .error__info').append($value + "<br/>");
            });
          } else {
            $form.find('.modal__error .modal__note_important,.pay-tooltip__note .error__info').html(data.error);
          }
          $form.find('.modal__error').show();
          $form.find('.pay-tooltip__note').show();
        } else {
          if(data.uid!=undefined && _ggcounter!=undefined){
            _ggcounter.push({
              event: "login",
              uid: data.uid,
              callback: function(){
              }
            });
          }
          if(data.form!=undefined){
            $('body').append(data.form);
            $('#'+data.form_id).submit();
          } else {
            if($answer!=undefined){
              $('.modal,.popup').hide();
              $($answer).show();
            } else {
              window.location.reload();
            }

          }
        }
      }
    });

  });

  $(document).on('submit','form.payment-form',function(e){
    e.preventDefault();
    var $type=$(this).attr('method');
    var $action=$(this).attr('action');
    var $data=$(this).serialize();
    var $answer=$(this).data('answer');
    var $form=$(this);
    $.ajax({
      type:$type,
      url:$action,
      data:$data,
      dataType:'json',
      beforeSend:function(){
        $form.find('.pay-tooltip__note').hide();
        $form.closest('.modal,.popup').append(preloader);
      },
      success:function(data){
        $('.loading').remove();

        if (data.isFreekassa) {
          if (data.status) {
              window.location.href = data.freekassaUrl;
          } else {
              $(this).submit();
          }

          return;
        }

        if(data.result!='ok'){
          if($.type(data.message)=='object'){
            $form.find('.pay-tooltip__note .error__info').html('');
            $.each(data.message,function($key,$value){
				 if(value != ''){
					$form.find('.pay-tooltip__note .error__info').append($value + "11<br/>");
				}else{
					 window.location.reload();
				}
            });
          } else {
			  if(data.message){
					$form.find('.pay-tooltip__note .error__info').html(data.message);
			  }else{
				   window.location.reload();
			  }
          }
          $form.find('.pay-tooltip__note').show();
        } else {

          if(data.form!=undefined){
            $('body').append(data.form);
            $('#'+data.form_id).submit();
          } else {
            if ($answer != undefined) {
              $('.modal,.popup').hide();
              $($answer).show();
            } else {
              window.location.reload();
            }
          }
        }
      },error: function (data) {
		   $form.find('.pay-tooltip__note').show();
  $form.find('.pay-tooltip__note .error__info').html('');  
    var errors = $.parseJSON(data.responseText);
        $.each(errors, function (key, value) {
			if(value != ''){
           $form.find('.pay-tooltip__note .error__info').append(value + "2<br/>");
			}else{
				 window.location.reload();
			}
        });
	  }
    })
  });
  $(function () {
    $(".activate-bonus").on('click', function (e) {
      e.preventDefault();
      if(xhr!=''){
        xhr.abort();
      }
      var id= $(this).data('id');
      xhr = $.post('/engine/ajax/activate_bonus.php', {'id': id}, function (data) {
        xhr='';
        if (data.status && data.is_deposit) {
			location="/profile?balance=true&payment&activate_bonus="+id
        } else {
          if(!data.status){
			alersing(data.error);
          } else {
            window.location.reload();
          }
        }
        $(window).scrollTop(0);
      }, 'json')
    });
  });

  $(document).on('click','button[data-type="ajax"]',function(e){
    e.preventDefault();
    var $success=$(this).data('success');
    var $fail=$(this).data('fail');
    console.log ($(this).data('target'));
    $.post($(this).data('target'),{},function(data){
      if(data.success){
        $($success).show();
      } else {
        $($fail).show();
      }
    },'json')
  });
  (function () {
    $('.popup_favoritesAdded .js-close-popup').on('click', function(){
      $('button[data-success =".popup_favoritesAdded"]').hide()
    })
  })();
  $(document).on('submit','#search-form',function(e){
    e.preventDefault();
    $.ajax({
      type:"GET",
      data:{'page':$("#page").val(),'group':$("#gamegroup").val(),'type':'html','q':$("#search-form input").val()},
      url:'/engine/ajax/game_list.php',
      success:function(data){
        if($("#search-form input").val()!=''){
          history.pushState({q: $("#search-form input").val()}, '', window.location.pathname+'/?q='+$("#search-form input").val());
        } else {
          history.pushState({}, '', window.location.pathname);
        }

        $('.main_gallery').html(data);
      }
    })
  });

  $(document).on('keyup','#search-form input',function(e){
    e.preventDefault();
    if(xhr!=''){
      xhr.abort();
    }
    xhr =$.ajax({
      type:"GET",
      data:{'page':$("#page").val(),'group':$("#gamegroup").val(),'type':'html','q':$("#search-form input").val()},
      url:'/engine/ajax/game_list.php',
      success:function(data){
        xhr='';
        if($("#search-form input").val()!=''){
          history.pushState({q: $("#search-form input").val()}, '', window.location.pathname.replace(new RegExp("[/]+$", "g"), "")+'/?q='+$("#search-form input").val());
        } else {
          history.pushState({}, '', window.location.pathname);
        }

        $('.main_gallery').html(data);
      }
    });
  });
  (function ($) {
    $.each(['show', 'hide'], function (i, ev) {
      var el = $.fn[ev];
      $.fn[ev] = function () {
        this.trigger(ev);
        return el.apply(this, arguments);
      };
    });
  })(jQuery);

  $('#registration-modal').on('show', function(){
    $('[name="bonus"]').prop('checked',false);
  });
  $('#soc_registration-modal').on('show', function(){
    $('[name="bonus"]').prop('checked',false);
  });
  $('.modal,.popup').on('show', function(){
    $('.modal__error').hide();
    $('.pay-tooltip__note').hide();
    if ($('.tab-profile__form').length >= 1) {
      $('.tab-profile__form')[0].reset();
      $('.js-input__inner_tel').on('change keyup input click',function(){
        if (this.value.match(/[^0-9]/g)) {
          this.value = this.value.replace(/[^0-9]/g, '');
        }

      });
    }

  });

  $(document).on('click','[data-verification]',function(e){
    e.preventDefault();
    var $type=$(this).data('verification');
    if(xhr!=''){
      xhr.abort();
    }
    xhr =$.ajax({
      type:"POST",
      data:{'val':$("#profileform-"+$type).val(),'type':$type},
      url:'/engine/ajax/activate.php',
      dataType:'json',
      success:function(data){
        xhr='';
        $('.loading').remove();
        if(!data.success){
          $("#profile").find('.modal__error .modal__note_important').html(data.error);
          $("#profile").find('.modal__error').show();
        } else {
          if ($type == 'phone') {
            var timeinterval = setInterval(function() {
              var $time = getTimeRemaining(data.time);

              if ($time.seconds <= 0 && $time.minutes <= 0) {
                $('.clock-timer__counter').text('0:00');
                clearInterval(timeinterval);
              } else {
                $('.clock-timer__counter').text($time.minutes + ':' + $time.seconds);
              }
            }, 100);
            $('.popup_phoneVerification').show();
          }
          if($type=='email'){
            $('.popup_emailVerification').show();
          }
         }
      }
    })
  });

  $(document).on('click','.disabled',function(e){
    e.preventDefault();
    if($(this).data('target')!=undefined){
      $('.modal,.popup').hide();
      $($(this).data('target')).show();
    }
    $(this).removeClass('disabled');
  });
});
$(function () {
  $('.vipclub__row .vipclub__item').on('click', function () {
    var infoBlock = $($(this).data('target'));
    var padding_for = infoBlock.height() + 76;
    $('.vipclub__row').not(infoBlock.parent()).css('padding-bottom', '0');
    $('.vipclub__info').not(infoBlock).removeClass('vipclub__info_open');

    if(infoBlock.hasClass('vipclub__info_open')) {

      infoBlock.removeClass('vipclub__info_open');
      infoBlock.parent().css('padding-bottom', 0);

    } else  {

      infoBlock.addClass('vipclub__info_open');
      infoBlock.parent().css('padding-bottom', padding_for);

      if ($(this).is(':first-child')) {
        infoBlock.find('.vipclub__arrow').removeClass('vipclub__arrow_right');
        infoBlock.find('.vipclub__arrow').addClass('vipclub__arrow_left');
      } else if ($(this).is(':nth-last-child(2)')) {
        infoBlock.find('.vipclub__arrow').removeClass('vipclub__arrow_left');
        infoBlock.find('.vipclub__arrow').addClass('vipclub__arrow_right');
      } else {
        infoBlock.find('.vipclub__arrow').removeClass('vipclub__arrow_left vipclub__arrow_right');
      }
    }
  });
});

$(function(){
  $('[data-toggle="tab"]').on('click tap swipe', function(e) {
    e.preventDefault();
    var $id = $(this).attr('href'),
        $viewport = $('html, body');
    if ($id == undefined) {
      $id = $(this).data('target');
    }


    if ($(this).hasClass('levels-table__item') && $(window).width() > 768) {

      $viewport.stop().animate({ scrollTop: $(".levels-table").offset().top}, 'slow', function(){
        $viewport.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
      });
      $viewport.bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(e){
        if ( e.which > 0 || e.type === "mousedown" || e.type === "mousewheel"){
          $viewport.stop().unbind('scroll mousedown DOMMouseScroll mousewheel keyup'); // This identifies the scroll as a user action, stops the animation, then unbinds the event straight after (optional)
        }
      });

    }

    $($id).parent().find('>div').removeClass('active');
    $($id).addClass('active');
    //hide error message from server
    $('.modal__error').hide();

    if($(this).data('remote')!=undefined && $(this).data('remote')!=''){
      var $content=$(this).data('content');
      $.post($(this).data('remote'),{},function(data){
        var $response=$(data).find($content);
        var $html=$response.html();
        $($id).html($html);
      });
    }
    if (!$(this).hasClass('levels-table__item')) {
      if($(this).hasClass('lottery__tabitem')){
        $(this).parent().find('.lottery__tabitem').removeClass('lottery__tabitem_active');
        $(this).addClass('lottery__tabitem_active');
      } else {
        $(this).parent().find('.tab__item').removeClass('tab__item_active');
        $(this).addClass('tab__item_active');
      }
    }
  });
  /*$('.levels-table__item[data-toggle="tab"]').on('swipe', function(e) {
   e.preventDefault();
   $(this).click();

   $(this).parent().find('>div').removeClass('active');
   $(this).addClass('active');
   if($(this).data('remote')!=undefined && $(this).data('remote')!=''){
   var $content=$(this).data('content');
   $.post($(this).data('remote'),{},function(data){
   var $response=$(data).find($content);
   var $html=$response.html();
   $($id).html($html);
   });
   }
   });*/
});


$(function () {
  // window.vulcanNamespace.resetStarHandlers =  function() {
  $(document).off('click','[data-toggle]');
  $(document).on('click','[data-toggle]',function(e){
    e.preventDefault();

    var $el = $(this);
    if ($el.attr('data-toggle') == 'add-fav') {
      $.get('/engine/ajax/add_to_favorites.php',{'id':$(this).data('id')},function(data){
        if(data.success){
          //$('.popup_favoritesAdded').css('position', 'fixed').show();
          //$('.overflow').show();
          $el.addClass('in_favorites');
          $el.attr('data-toggle','remove-fav');
          $el.attr('title','Удалить из избранного');
        } else {
          $('.popup_favoritesAddedFail').css('position', 'fixed').show();
          $('html').addClass('modal_open');
          $el.removeClass('in_favorites');
        }
      },'json')
    } else if ($el.attr('data-toggle') == 'remove-fav') {
      $.get('/engine/ajax/remove_favorites.php',{'id':$el.data('id')},function(data){
        $el.removeClass('in_favorites');
        $el.attr('data-toggle','add-fav');
        $el.attr('title','Добавить в избранное');
      },'json')
    }
  });


  // };
  //window.vulcanNamespace.resetStarHandlers();
});
function user_ajax(form,action){

  data=$(form).serialize();
  $(form).closest('.modal,.popup').append(preloader);
  error_box= $(form).find('.modal__error .modal__note_important').empty();
  $.post('/engine/ajax/user.php',data+'&action='+action,function(res){
    $('.loading').remove();
    if(res.success==true)
    {
      if(res.txt){
        $(form).find('.modal__error .modal__note_important').html('');
        //$(form).find('.modal__error .modal__note_accent').html(res.txt);
        $(form).find('.modal__error').show();
      }
      //setTimeout (function(){ window.location.reload()}, 3000);
      window.location.reload();
    }
    else
    {
      if(res.error){
        error_box.html(res.error);
        $(form).find('.modal__error').show();
      }
    }
  },'json');
  return false;
}
function decimalAdjust(type, value, exp) {
  // Если степень не определена, либо равна нулю...
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  // Если значение не является числом, либо степень не является целым числом...
  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }
  // Сдвиг разрядов
  value = value.toString().split('e');
  value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
  // Обратный сдвиг
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}

// Десятичное округление к ближайшему
if (!Math.round10) {
  Math.round10 = function(value, exp) {
    return decimalAdjust('round', value, exp);
  };
}
$(document).on('change keyup input click','#exchange-input',function(){
  if (this.value.match(/[^0-9]/g)) {
    this.value = this.value.replace(/[^0-9]/g, '');
  }
  var $value=$(this).val()*$(this).data('cours');
  $('#exchange-output').val(Math.round10($value,-2));
  $('#exchange-input').val($(this).val()*1);

});
$(document).on('change keyup input click','#exchange-output',function(){

    this.value = this.value.replace(/[^\d\.]/g, '');

  var $value=$(this).val()/$(this).data('cours');
  $('#exchange-input').val(Math.round10($value,-2));
  $('#exchange-output').val($(this).val()*1);
});

// script fro scroll to top button

$(document).ready(function(){
  var calculateSize = function($el) {
  
    var width = $el.width();
    var height = $el.height();
    var maxWidth = $el.parent().parent().width();
    var maxHeight = $el.parent().parent().height();
    var proportions = 3 / 4;

    if (maxHeight / maxWidth < proportions) {
      height = Math.floor(maxHeight);
      width = Math.floor(height / proportions);
    } else {
      width = Math.floor(maxWidth);
      height = Math.floor(width * proportions);
    }

    $el.css({
      width: width + 'px',
      height: height + 'px',
      display: 'block'
    })
    return {
      width: width,
      height: height
    };
  }
  setTimeout(function(){
    calculateSize($('.gameplay__canvas_inner object'));
  }, 100);

  // validation
  $('form button.validate').click(function(e){
    e.preventDefault();
    var $form = $(this).closest('form');
    // $form.find('.modal__note_important');
    var hasErrors = false;
    $form.find('.modal__error').hide();
    $form.find('.modal__note_important').html('');
    $(this).closest('form').find('[required][type="checkbox"]').each(function(index, el) {
      if (!$(el)[0].checked) {
        hasErrors = true;
        $form.find('.modal__error').show();
        $form.find('.modal__note_important').append($(el).attr('data-error-message'));
      }
    });
    if (!hasErrors) {
      $form.submit();
    }
  });

  $(window).resize(function() {
    calculateSize($('.gameplay__canvas_inner object'));
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.scroller').fadeIn();
    }
    else {
      $('.scroller').fadeOut();
    }
  });
  $('.popup_tournamentGames').scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.scroller').fadeIn();
    }
    else {
      $('.scroller').fadeOut();
    }
  });
  $('.scroller').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    if ($('.popup_tournamentGames').css('display') == 'block') {
      $('.popup_tournamentGames').animate({
        scrollTop: 0
      }, 400);
    }
    return false;
  });
  

});
function searchGame(text){
  if(text==''){
    $('.popup__gallery .main__item.preview').show();
    return true;
  }
  var search=text.toLowerCase();
  $.each($('.popup__gallery .main__item.preview'),function(){
    var $title=$(this).find('.preview__title').html().toLowerCase();
    $('.popup__gallery').perfectScrollbar('update');
    if($title.indexOf(search)<0){
      $(this).hide();
    } else {
      $(this).show();
    }
  })
}

// Script for xs header

$(function(){
  $('.js-userpanel-button').on('click', function(){
    $(this).toggleClass('user-toppanel__button_close');
    $(this).toggleClass('js-userpanel-button-close');
    $('.header__panel').toggleClass('open');
    $('.header').toggleClass('header_panel-open');
    $('.header__wrap').toggleClass('header__wrap_scroll');
    $('.header__wrap_scroll').not('.ps-container').perfectScrollbar({
      theme: 'hidden',
      suppressScrollY: true,
      scrollXMarginOffset: 5
      // maxScrollbarLength: 213
    });
    $('.header__toppanel').toggleClass('open');
    $('body, html').toggleClass('hidden');
  });
});

$(function(){
  $('.js-toppanel-button').on('click', function(){
    $(this).toggleClass('toppanel__button_close');
    $(this).toggleClass('js-toppanel-button-close');
    $('.js-mobilenav-dropdown').toggleClass('open');
    $('.header__toppanel').toggleClass('open');
    $('body, html').toggleClass('hidden');
  });
});


// Promo details script for xSmall screen
function alersing(text){
	$('#redireftion').html('<div class="notification-box notification-system"><span class="close-icon" onclick="this.parentNode.parentNode.removeChild(this.parentNode)"></span><div class="title" id="title_notification">Внимание</div><div class="text" id="text_notification"></div></div>');
	$('.notification-box').addClass('notification-box notification-system active');
	$('#text_notification').text(text);
}

$(function(){
  $('.js-promo-details-button').on('click', function(){
    $('.promo-details__dropdown').slideToggle('fast').toggleClass('active');
  });
});
//$(function() {
  //if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    //$('html').addClass('Sa');
  //}
//});

// Popup_gameplayGallery Close button positioning on mobile devices

//$(function() {
// $('.popup_gameplayGallery')
//     .find('.popup__close')
//     .css('top', $('.popup_gameplayGallery').find('.popup__content').height() + 80);
//});

$(function(){
  if($('.finecountdown').length>0)
    {
    $('.finecountdown').each(function(){
  var suma=$(this).data('sum').toString();
  var i=k=0;
  
  $(this).empty();
  for(i=suma.length-1; i>=0; --i)
    {
    if($(this).hasClass('countdown')==true)
      {
      $(this).prepend('<span class="countdown__item js-countdown__item">'+suma[i]+'</span>');
      if(++k%3==0 && k>0 && k<=suma.length-1)
        $(this).prepend('<span class="countdown__divider"></span>');
      }
    else
      {
      $(this).prepend('<span class="js-countdown__item">'+suma[i]+'</span>');
      if(++k%3==0 && k>0 && k<=suma.length-1)
        $(this).prepend(' , ');
      }
    
    
    }
  });
  }
});

function get_cookie ( cookie_name )
{
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
 
  if ( results )
    return ( unescape ( results[2] ) );
  else
    return null;
}

function delete_cookie ( cookie_name )
{
  var cookie_date = new Date ( );  // Текущая дата и время
  cookie_date.setTime ( cookie_date.getTime() - 1 );
  document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
}
   $('.langs').on('click', function(){	
	console.log( $(this).attr('data-val') );
  	set_cookie('lang', $(this).attr('data-val'), Math.round(new Date().getTime() / 1000) + 604800, '/');
  location = location.href;
});
  
function set_cookie ( name, value, exp_y, exp_m, exp_d, path, domain, secure )
{
  var cookie_string = name + "=" + escape ( value );
 
  if ( exp_y )
  {
    var expires = new Date ( exp_y, exp_m, exp_d );
    cookie_string += "; expires=" + expires.toGMTString();
  }
 
  if ( path )
        cookie_string += "; path=" + escape ( path );
 
  if ( domain )
        cookie_string += "; domain=" + escape ( domain );
  
  if ( secure )
        cookie_string += "; secure";
  
  document.cookie = cookie_string;
}var classesToLaunchReg = ['button-hero', 'button-reg', 'games__offer__text', 'button-register', 'game__box', 'jackpot__container', 'games__offer__text', 'more_info_dialog'];
var classesToLaunchLog = ['button-login'];
var offerClass = document.querySelector('.games__offer__text');
var colElement = '';
var gameElements = document.getElementsByClassName('game-list');
var preloader = "<div class='loading'><div class='loader'></div></div>";
window.vulcanNamespace = {};
var xhr = '';
//angular
//lazy load all images within game-list
window.addEventListener('load', function() {});

	$(document).on('submit', 'form.for_submt', function(e) {
		var $action = $(this).attr('action');
		jQuery.ajax({
			'type': 'POST',
			'url': $action,
			'cache': false,
			'data': jQuery(this).parents("form").serialize(),
			'success': function(html) {
				$('.info_error').html(html);
			}
		});
		return false;
	});
//Adds the login/register classes that launches dialogs
var attachTriggers = function(params, params2) {
	for (var i = 0; i < params.length; i++) {
		var item = document.getElementsByClassName(params[i]);
		for (var j = 0; j < item.length; j++) {
			item[j].classList.add(params2);
			item[j].style = "cursor:pointer;";
		}
	}
}
attachTriggers(classesToLaunchReg, "sign__up");
attachTriggers(classesToLaunchLog, "sign__in");
//Helper object
var LPConfig = function() {
	this.heroOptions = function(paramOfferPosition, params) {
		if (document.querySelector('.games__offer__text h1') == undefined) {} else {
			document.querySelector('.games__offer__text h1').style = "color:" + params[0];
		}
		if (document.querySelector('.games__offer__text h2') == undefined) {} else {
			document.querySelector('.games__offer__text h2').style = "color:" + params[1];
		}
		switch (paramOfferPosition) {
			case 'left':
				colElement.classList.add("hero-text-left");
				colElement.classList.add("col-1");
				break;
			case 'center':
				colElement.classList.add("hero-text-center");
				colElement.classList.add("col-1");
				break;
			case 'right':
				colElement.classList.add("hero-text-left");
				colElement.classList.add("col-2-3");
				colElement.classList.add("col-offset-1-3");
				break;
			case 'full-right':
				colElement.classList.add("hero-text-right");
				colElement.classList.add("col-1");
		}
		$('.games__offer__text').fadeIn(350);
	}
	this.gameOptions = function(paramGameType, isNetEnt) {
		paramGameType = paramGameType || "slots";
		for (var i = 0; i < gameElements.length; i++) {
			if (gameElements[i].getAttribute("data-game-type") === paramGameType) {
				console.log("Game list changed to " + paramGameType);
				gameElements[i].classList.remove("hide");
				gameElements[i].classList.add("show");
			} else {
				gameElements[i].classList.remove("show");
				gameElements[i].classList.add("hide");
			}
		}
	}
}
//jQuery event handlers
$('.tc').on('click tap', function(e) {
	e.preventDefault();
	$('.overlay').fadeIn(150);
	$('.pop-container').fadeIn(250);
	$('body').addClass("no-scroll");
	$('html, body').animate({
		scrollTop: 0
	}, 350);
});
$('.close-pop, .close-icon, .overlay').on('click tap', function() {
	$('.pop-container').hide();
	$('.overlay').fadeOut(250);
	$('body').removeClass("no-scroll");
});
$('.more-info-button').on('click tap', function() {
	$('.overlay-more-info').fadeIn(150);
	$('.more_info_dialog').show();
});
$('.reg-close, .reg__close, .close-icon').on('click tap', function() {
	$('.more_info_dialog').hide();
	$('.overlay-more-info').fadeOut(250);
});
$('.bonus-button').on('click tap', function() {
	$('.more_info_dialog').hide();
	$('.overlay-more-info').fadeOut(250);
});
var $category = $('.game__category');
$category.on('click tap', function(e) {
	$category.removeClass('game-cat-active');
	var $this = $(this);
	$this.addClass('game-cat-active');
	location.replace($this.data('href'));
});
$('#language-select').on('click', 'i', function() {
	var langCode = $(this).data('lang-code');
	if (langCode) {
		document.cookie = 'language=' + langCode + ';path=/';
		location.reload();
	}
});

$(document).on('click', '.payitem', function() {
	var $index = $(this).index(),
		content = $('.payment__tooltip_open .pay-tooltip');
	$('.pay-tooltip__summ input[type="radio"]').on('click', function(i) {
		var volume_value = $(this).val();
		$(this).parent().parent().find('.l_num').val(volume_value);
		$(this).parent().parent().find('.input_summ_val').val(volume_value).focus();
	});
	$('.js-input__inner').val('');
	$('.pay-tooltip__note').hide();
	$('.l_num').click().val('10');
	$('.input_summ_val').val('10');
	$('.input_summ_val').on('change, input', function() {
		var volume_value = $(this).val();
		$(this).parent().parent().find('.l_num').val(volume_value).click();
	});
	$('.payment__tooltip').removeClass("payment__tooltip_open");
	$(this).parent().parent().next('.payment__tooltip').toggleClass("payment__tooltip_open");
	if ($(this).find('input').val() === "qiwi_rub") {
		$('.pay-tooltip__phone').show();
		$('.pay-tooltip').addClass('pay-tooltip_withphone');
		$('.pay-tooltip__phone_inner').attr('required', true);
	} else {
		$('.pay-tooltip__summ').show();
		$('.pay-tooltip__phone').hide();
		$('.pay-tooltip').removeClass('pay-tooltip_withphone');
		$('.pay-tooltip__phone_inner').attr('required', false);
	}
	if ($(this).find('input').val() === "pay" && $(this).find('input').hasClass('payout')) {
		$('.pay-tooltip__number').removeClass('pay-tooltip__number_withr');
		$('.pay-tooltip__number').addClass('pay-tooltip__number_withplus');
		$('.pay-tooltip__number_inner').removeClass('pay-tooltip__number_inner-noprefix');
		$('.pay-tooltip__number_inner').attr({
			required: true,
			name: "account",
			placeholder: "XXXXXXXX@XXXX.XX",
			maxlength: "50"
		});
	} else {
		$('.pay-tooltip__summ').show();
		$('.pay-tooltip__number').removeClass('pay-tooltip__number_withplus');
		$('.pay-tooltip__number').removeClass('pay-tooltip__number_withr');
		$('.pay-tooltip__number_inner').addClass('pay-tooltip__number_inner-noprefix');
		$('.pay-tooltip__number_inner').attr({
			required: true,
			name: "account",
			placeholder: "0000000000000",
			maxlength: "20"
		});
	}
	$(this).find('.l_num').click();
	$('.js-input__inner').on("keyup, input", function(e) {
		if (this.value.match(/[^0-9]/g)) {
			this.value = this.value.replace(/[^0-9]/g, '');
		}
	});
	if ($index == 0) {
		content.addClass('left').removeClass('right');
	} else if ($index == 1) {
		content.removeClass('left').removeClass('right');
	} else if ($index == 2) {
		content.removeClass('left').addClass('right');
	}
});

$('.levels-table__item').on('touchend click', function(e) {
	var $this = $(this);
	$('.levels-table__item').removeClass('levels-table__item_active');
	$this.addClass('levels-table__item_active');
	$('.levels-table__arrow').removeClass('levels-table__arrow_active');
	$this.find('.levels-table__arrow').addClass('levels-table__arrow_active');
	$('.levels-table__info').removeClass('active');
	$($this.data('target')).addClass('active');
});
window.getTimeRemaining = function(endtime) {
	var today = (new Date()).toUTCString();
	endtime = (new Date(endtime * 1000)).toUTCString();
	var t = Date.parse(endtime) - Date.parse(today);
	var seconds = Math.floor((t / 1000) % 60);
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
};
$(document).on('click', 'button[data-type="ajax"]', function(e) {
	e.preventDefault();
	var $success = $(this).data('success');
	var $fail = $(this).data('fail');
	console.log($(this).data('target'));
	$.post($(this).data('target'), {}, function(data) {
		if (data.success) {
			$($success).show();
		} else {
			$($fail).show();
		}
	}, 'json')
});
(function() {
	$('.popup_favoritesAdded .js-close-popup').on('click', function() {
		$('button[data-success =".popup_favoritesAdded"]').hide()
	})
})();
$(document).on('submit', '#search-form', function(e) {
	e.preventDefault();
	$.ajax({
		type: "GET",
		data: {
			'page': $("#page").val(),
			'group': $("#gamegroup").val(),
			'type': 'html',
			'q': $("#search-form input").val()
		},
		url: '/engine/ajax/game_list.php',
		success: function(data) {
			if ($("#search-form input").val() != '') {
				history.pushState({
					q: $("#search-form input").val()
				}, '', window.location.pathname + '/?q=' + $("#search-form input").val());
			} else {
				history.pushState({}, '', window.location.pathname);
			}
			$('.main_gallery').html(data);
		}
	})
});
$(document).on('keyup', '#search-form', function(e) {
	e.preventDefault();
	if (xhr != '') {
		xhr.abort();
	}
	xhr = $.ajax({
		type: "GET",
		data: {
			'page': $("#page").val(),
			'group': $("#gamegroup").val(),
			'type': 'html',
			'q': $("#search-form input").val()
		},
		url: '/engine/ajax/game_list.php',
		success: function(data) {
			xhr = '';
			if ($("#search-form input").val() != '') {
				history.pushState({
					q: $("#search-form input").val()
				}, '', window.location.pathname.replace(new RegExp("[/]+$", "g"), "") + '/?q=' + $("#search-form input").val());
			} else {
				history.pushState({}, '', window.location.pathname);
			}
			$('.main_gallery').html(data);
		}
	});
});
(function($) {
	$.each(['show', 'hide'], function(i, ev) {
		var el = $.fn[ev];
		$.fn[ev] = function() {
			this.trigger(ev);
			return el.apply(this, arguments);
		};
	});
})(jQuery);

function initializeClock(id, endtime) {
	var clock = document.getElementById(id);
	var timeinterval = setInterval(function() {
		var t = getTimeRemaining(endtime);
		if (t.days < 0) {
			t.days = 0
		}
		if (t.hours < 0) {
			t.hours = 0
		}
		if (t.minutes < 0) {
			t.minutes = 0
		}
		if (t.seconds < 0) {
			t.seconds = 0
		}
		if (t.hours < 10 && t.hours >= 0) {
			t.hours = '0' + t.hours
		}
		if (t.minutes < 10 && t.minutes >= 0) {
			t.minutes = '0' + t.minutes
		}
		if (t.seconds < 10 && t.seconds >= 0) {
			t.seconds = '0' + t.seconds
		}
		clock.innerHTML = ' <div class="timer__cell">' + t.days + '</div> ' + '<div class="timer__cell timer__cell_empty"></div> ' + '<div class="timer__cell">' + t.hours + '</div>' + ' <div class="timer__cell">:</div> ' + '<div class="timer__cell">' + t.minutes + '</div> ' + '<div class="timer__cell">:</div> ' + '<div class="timer__cell">' + t.seconds + '</div> ';
		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}, 1000);
}

function initializeJackpot(id, jackpot) {
	var jack = document.getElementById(id);
	var numbers = (jackpot + '').split('', -4);
	var $j = numbers.reverse();
	var timeinterval = setInterval(function() {
		$j[0] = parseInt($j[0]) + randomInteger(0, 5);
		if ($j[0] >= 10) {
			$j[0] = parseInt($j[0]) - 10;
			$j[1] = parseInt($j[1]) + 1;
			if ($j[1] >= 10) {
				$j[1] = 10 - $j[1];
				$j[2] = parseInt($j[2]) + 1;
				if ($j[2] >= 10) {
					$j[2] = 10 - $j[2];
					$j[3] = parseInt($j[3]) + 1
				}
			}
		}
		if ($j[0] < 0) {
			$j[0] = 0;
			$j[1] = parseInt($j[1]) - 1;
			if ($j[1] < 0) {
				$j[1] = 0;
				$j[2] = parseInt($j[2]) - 1;
				if ($j[2] < 0) {
					$j[2] = 0;
					$j[3] = parseInt($j[3]) - 1;
				}
			}
		}
		$(jack).find('.js-countdown__item:last').html($j[0]);
		//console.log($(jack).find('.js-countdown__item').length);
		$(jack).find('.js-countdown__item').eq(parseInt($(jack).find('.js-countdown__item').length) - 2).html($j[1]);
		$(jack).find('.js-countdown__item').eq(parseInt($(jack).find('.js-countdown__item').length) - 3).html($j[2]);
		$(jack).find('.js-countdown__item').eq(parseInt($(jack).find('.js-countdown__item').length) - 4).html($j[3]);
	}, 3000);
}

function reg_activate_bonus(users, hash, id) {
	$.get("/result_bonus.php?set_gift=true&users=" + users + "&hash=" + hash + "&gift=" + id, function(data) {
		bonus();
		//sleep(1000);
		activate_bonus(users, hash, id);
	}, 'json');
}
$(document).on('click', '.clossssssss_bonus', function() {
	$('#bonus_giting-changed').hide();
});
$(document).on('click', '.client_bar', function() {
		var el = $(this);
		var url = el.attr('data_url');
	location.replace(url);
});

function activate_bonus(users, hash, id) {
	if (xhr != '') {
		xhr.abort();
	}
	xhr = $.post('/result_bonus.php?reg_bonus=true', {
		'id': id,
		'users': users,
		'hash': hash
	}, function(data) {
		xhr = '';
		if (data.status && data.is_deposit) {
			location="/profile?balance=true&payment&activate_bonus="+id
		} else {
			if (data.status == false) {
				alersing_stup(data.error);
			} else {
				window.location.reload();
			}
		}
		$(window).scrollTop(0);
	}, 'json')
}

function decimalAdjust(type, value, exp) {
	// Если степень не определена, либо равна нулю...
	if (typeof exp === 'undefined' || +exp === 0) {
		return Math[type](value);
	}
	value = +value;
	exp = +exp;
	// Если значение не является числом, либо степень не является целым числом...
	if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
		return NaN;
	}
	// Сдвиг разрядов
	value = value.toString().split('e');
	value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
	// Обратный сдвиг
	value = value.toString().split('e');
	return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}
if (!Math.round10) {
	Math.round10 = function(value, exp) {
		return decimalAdjust('round', value, exp);
	};
}
$(document).on('change keyup input click', '#exchange-input', function() {
	if (this.value.match(/[^0-9]/g)) {
		this.value = this.value.replace(/[^0-9]/g, '');
	}
	var $value = $(this).val() * $(this).data('cours');
	$('#exchange-output').val(Math.round10($value, -2));
	$('#exchange-input').val($(this).val() * 1);
});
$(document).on('change keyup input click', '#exchange-output', function() {
	this.value = this.value.replace(/[^\d\.]/g, '');
	var $value = $(this).val() / $(this).data('cours');
	$('#exchange-input').val(Math.round10($value, -2));
	$('#exchange-output').val($(this).val() * 1);
});
$(function() {
	function randomInteger(min, max) {
		var rand = min + Math.random() * (max - min)
		rand = Math.round(rand);
		return rand;
	}
	$('.js-close-popup').on('click', function(e) {
		e.preventDefault();
		var popup = $(this).parents('.popup');
		if (popup.length != 0) {
			var Class = popup.attr('class').split(' ');
			var ClassName = Class[1];
		} else {
			var ClassName = 'modal';
		}
		$("." + ClassName).hide();
		$('.modal').hide();
		//$('.overflow').hide();
		$('html').removeClass('modal_open');
	});
	$('.alert-panel__icon .icon_cross').on('click', function(e) {
		e.preventDefault();
		$('.alert-panel').hide();
	});
	$('.notify-panel__icon .icon_cross').on('click', function(e) {
		e.preventDefault();
		$('.notify-panel').hide();
	});
	$.each($('[data-toggle="timer"]'), function() {
		initializeClock($(this).attr("id"), $(this).data('time'))
	});
	$.each($('[data-toggle="jackpot"]'), function() {
		initializeJackpot($(this).attr("id"), $(this).data('jack'))
	});
});

function sleep(milliseconds) {
	const date = Date.now();
	let currentDate = null;
	do {
		currentDate = Date.now();
	} while (currentDate - date < milliseconds);
}
(function() {
	$('.popup_favoritesAdded .js-close-popup').on('click', function() {
		$('button[data-success =".popup_favoritesAdded"]').hide()
	})
})();
window.getTimeRemaining = function(endtime) {
	var today = (new Date()).toUTCString();
	endtime = (new Date(endtime * 1000)).toUTCString();
	var t = Date.parse(endtime) - Date.parse(today);
	var seconds = Math.floor((t / 1000) % 60);
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
};


function initializeJackpot(id, jackpot) {
	var jack = document.getElementById(id);
	var numbers = (jackpot + '').split('', -4);
	var $j = numbers.reverse();
	var timeinterval = setInterval(function() {
		$j[0] = parseInt($j[0]) + randomInteger(0, 5);
		if ($j[0] >= 10) {
			$j[0] = parseInt($j[0]) - 10;
			$j[1] = parseInt($j[1]) + 1;
			if ($j[1] >= 10) {
				$j[1] = 10 - $j[1];
				$j[2] = parseInt($j[2]) + 1;
				if ($j[2] >= 10) {
					$j[2] = 10 - $j[2];
					$j[3] = parseInt($j[3]) + 1
				}
			}
		}
		if ($j[0] < 0) {
			$j[0] = 0;
			$j[1] = parseInt($j[1]) - 1;
			if ($j[1] < 0) {
				$j[1] = 0;
				$j[2] = parseInt($j[2]) - 1;
				if ($j[2] < 0) {
					$j[2] = 0;
					$j[3] = parseInt($j[3]) - 1;
				}
			}
		}
		$(jack).find('.js-countdown__item:last').html($j[0]);
		//console.log($(jack).find('.js-countdown__item').length);
		$(jack).find('.js-countdown__item').eq(parseInt($(jack).find('.js-countdown__item').length) - 2).html($j[1]);
		$(jack).find('.js-countdown__item').eq(parseInt($(jack).find('.js-countdown__item').length) - 3).html($j[2]);
		$(jack).find('.js-countdown__item').eq(parseInt($(jack).find('.js-countdown__item').length) - 4).html($j[3]);
	}, 3000);
}

function randomInteger(min, max) {
	var rand = min + Math.random() * (max - min)
	rand = Math.round(rand);
	return rand;
}
function initializeClock(id, endtime) {
	var clock = document.getElementById(id);
	var timeinterval = setInterval(function() {
		var t = getTimeRemaining(endtime);
		if (t.days < 0) {
			t.days = 0
		}
		if (t.hours < 0) {
			t.hours = 0
		}
		if (t.minutes < 0) {
			t.minutes = 0
		}
		if (t.seconds < 0) {
			t.seconds = 0
		}
		if (t.hours < 10 && t.hours >= 0) {
			t.hours = '0' + t.hours
		}
		if (t.minutes < 10 && t.minutes >= 0) {
			t.minutes = '0' + t.minutes
		}
		if (t.seconds < 10 && t.seconds >= 0) {
			t.seconds = '0' + t.seconds
		}
		clock.innerHTML = ' <div class="timer__cell">' + t.days + '</div> ' + '<div class="timer__cell timer__cell_empty"></div> ' + '<div class="timer__cell">' + t.hours + '</div>' + ' <div class="timer__cell">:</div> ' + '<div class="timer__cell">' + t.minutes + '</div> ' + '<div class="timer__cell">:</div> ' + '<div class="timer__cell">' + t.seconds + '</div> ';
		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}, 1000);
}

function initializeJackpot(id, jackpot) {
	var jack = document.getElementById(id);
	var numbers = (jackpot + '').split('', -4);
	var $j = numbers.reverse();
	var timeinterval = setInterval(function() {
		$j[0] = parseInt($j[0]) + randomInteger(0, 5);
		if ($j[0] >= 10) {
			$j[0] = parseInt($j[0]) - 10;
			$j[1] = parseInt($j[1]) + 1;
			if ($j[1] >= 10) {
				$j[1] = 10 - $j[1];
				$j[2] = parseInt($j[2]) + 1;
				if ($j[2] >= 10) {
					$j[2] = 10 - $j[2];
					$j[3] = parseInt($j[3]) + 1
				}
			}
		}
		if ($j[0] < 0) {
			$j[0] = 0;
			$j[1] = parseInt($j[1]) - 1;
			if ($j[1] < 0) {
				$j[1] = 0;
				$j[2] = parseInt($j[2]) - 1;
				if ($j[2] < 0) {
					$j[2] = 0;
					$j[3] = parseInt($j[3]) - 1;
				}
			}
		}
		$(jack).find('.js-countdown__item:last').html($j[0]);
		//console.log($(jack).find('.js-countdown__item').length);
		$(jack).find('.js-countdown__item').eq(parseInt($(jack).find('.js-countdown__item').length) - 2).html($j[1]);
		$(jack).find('.js-countdown__item').eq(parseInt($(jack).find('.js-countdown__item').length) - 3).html($j[2]);
		$(jack).find('.js-countdown__item').eq(parseInt($(jack).find('.js-countdown__item').length) - 4).html($j[3]);
	}, 3000);
}

function showRegistrationPopup() {
	$('.modal,.popup').hide();
	$('#registration-confirm').show();
	$('html').addClass('modal_open');
	if ($(window).width() < 768) {
		$('.modal_open .popup').not('.ps-container').perfectScrollbar({
			theme: 'hidden'
		});
	}
	$('#registration-confirm #bonus').val($('#registration-modal [name="bonus"]:checked').val());
	$('#registration-confirm .registration__image img').attr('src', $('#registration-modal [name="bonus"]:checked').prev('label').find('img').attr('src'));
}
