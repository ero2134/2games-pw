! function(e, t) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
	function n(e) {
		var t = e.length,
			n = Q.type(e);
		return "function" !== n && !Q.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
	}

	function i(e, t, n) {
		if (Q.isFunction(t)) return Q.grep(e, function(e, i) {
			return !!t.call(e, i, e) !== n
		});
		if (t.nodeType) return Q.grep(e, function(e) {
			return e === t !== n
		});
		if ("string" == typeof t) {
			if (ae.test(t)) return Q.filter(t, e, n);
			t = Q.filter(t, e)
		}
		return Q.grep(e, function(e) {
			return X.call(t, e) >= 0 !== n
		})
	}

	function s(e, t) {
		for (;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	}

	function r(e) {
		var t = pe[e] = {};
		return Q.each(e.match(he) || [], function(e, n) {
			t[n] = !0
		}), t
	}

	function o() {
		J.removeEventListener("DOMContentLoaded", o, !1), e.removeEventListener("load", o, !1), Q.ready()
	}

	function a() {
		Object.defineProperty(this.cache = {}, 0, {
			get: function() {
				return {}
			}
		}), this.expando = Q.expando + a.uid++
	}

	function l(e, t, n) {
		var i;
		if (void 0 === n && 1 === e.nodeType)
			if (i = "data-" + t.replace(be, "-$1").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
				try {
					n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ye.test(n) ? Q.parseJSON(n) : n)
				} catch (e) {}
				ve.set(e, t, n)
			} else n = void 0;
		return n
	}

	function c() {
		return !0
	}

	function d() {
		return !1
	}

	function u() {
		try {
			return J.activeElement
		} catch (e) {}
	}

	function h(e, t) {
		return Q.nodeName(e, "table") && Q.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function p(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function f(e) {
		var t = Ne.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function m(e, t) {
		for (var n = 0, i = e.length; i > n; n++) ge.set(e[n], "globalEval", !t || ge.get(t[n], "globalEval"))
	}

	function g(e, t) {
		var n, i, s, r, o, a, l, c;
		if (1 === t.nodeType) {
			if (ge.hasData(e) && (r = ge.access(e), o = ge.set(t, r), c = r.events)) {
				delete o.handle, o.events = {};
				for (s in c)
					for (n = 0, i = c[s].length; i > n; n++) Q.event.add(t, s, c[s][n])
			}
			ve.hasData(e) && (a = ve.access(e), l = Q.extend({}, a), ve.set(t, l))
		}
	}

	function v(e, t) {
		var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
		return void 0 === t || t && Q.nodeName(e, t) ? Q.merge([e], n) : n
	}

	function y(e, t) {
		var n = t.nodeName.toLowerCase();
		"input" === n && _e.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
	}

	function b(t, n) {
		var i, s = Q(n.createElement(t)).appendTo(n.body),
			r = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(s[0])) ? i.display : Q.css(s[0], "display");
		return s.detach(), r
	}

	function w(e) {
		var t = J,
			n = Re[e];
		return n || (n = b(e, t), "none" !== n && n || (Pe = (Pe || Q("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Pe[0].contentDocument, t.write(), t.close(), n = b(e, t), Pe.detach()), Re[e] = n), n
	}

	function S(e, t, n) {
		var i, s, r, o, a = e.style;
		return n = n || ze(e), n && (o = n.getPropertyValue(t) || n[t]), n && ("" !== o || Q.contains(e.ownerDocument, e) || (o = Q.style(e, t)), Fe.test(o) && Oe.test(t) && (i = a.width, s = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = s, a.maxWidth = r)), void 0 !== o ? o + "" : o
	}

	function x(e, t) {
		return {
			get: function() {
				return e() ? void delete this.get : (this.get = t).apply(this, arguments)
			}
		}
	}

	function _(e, t) {
		if (t in e) return t;
		for (var n = t[0].toUpperCase() + t.slice(1), i = t, s = Ve.length; s--;)
			if ((t = Ve[s] + n) in e) return t;
		return i
	}

	function C(e, t, n) {
		var i = We.exec(t);
		return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
	}

	function E(e, t, n, i, s) {
		for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > r; r += 2) "margin" === n && (o += Q.css(e, n + Se[r], !0, s)), i ? ("content" === n && (o -= Q.css(e, "padding" + Se[r], !0, s)), "margin" !== n && (o -= Q.css(e, "border" + Se[r] + "Width", !0, s))) : (o += Q.css(e, "padding" + Se[r], !0, s), "padding" !== n && (o += Q.css(e, "border" + Se[r] + "Width", !0, s)));
		return o
	}

	function L(e, t, n) {
		var i = !0,
			s = "width" === t ? e.offsetWidth : e.offsetHeight,
			r = ze(e),
			o = "border-box" === Q.css(e, "boxSizing", !1, r);
		if (0 >= s || null == s) {
			if (s = S(e, t, r), (0 > s || null == s) && (s = e.style[t]), Fe.test(s)) return s;
			i = o && (Y.boxSizingReliable() || s === e.style[t]), s = parseFloat(s) || 0
		}
		return s + E(e, t, n || (o ? "border" : "content"), i, r) + "px"
	}

	function T(e, t) {
		for (var n, i, s, r = [], o = 0, a = e.length; a > o; o++) i = e[o], i.style && (r[o] = ge.get(i, "olddisplay"), n = i.style.display, t ? (r[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && xe(i) && (r[o] = ge.access(i, "olddisplay", w(i.nodeName)))) : (s = xe(i), "none" === n && s || ge.set(i, "olddisplay", s ? n : Q.css(i, "display"))));
		for (o = 0; a > o; o++) i = e[o], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[o] || "" : "none"));
		return e
	}

	function k(e, t, n, i, s) {
		return new k.prototype.init(e, t, n, i, s)
	}

	function A() {
		return setTimeout(function() {
			Ke = void 0
		}), Ke = Q.now()
	}

	function M(e, t) {
		var n, i = 0,
			s = {
				height: e
			};
		for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Se[i], s["margin" + n] = s["padding" + n] = e;
		return t && (s.opacity = s.width = e), s
	}

	function j(e, t, n) {
		for (var i, s = (tt[t] || []).concat(tt["*"]), r = 0, o = s.length; o > r; r++)
			if (i = s[r].call(n, t, e)) return i
	}

	function q(e, t, n) {
		var i, s, r, o, a, l, c, d = this,
			u = {},
			h = e.style,
			p = e.nodeType && xe(e),
			f = ge.get(e, "fxshow");
		n.queue || (a = Q._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
			a.unqueued || l()
		}), a.unqueued++, d.always(function() {
			d.always(function() {
				a.unqueued--, Q.queue(e, "fx").length || a.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = Q.css(e, "display"), "inline" === ("none" === c ? ge.get(e, "olddisplay") || w(e.nodeName) : c) && "none" === Q.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
			h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
		}));
		for (i in t)
			if (s = t[i], Je.exec(s)) {
				if (delete t[i], r = r || "toggle" === s, s === (p ? "hide" : "show")) {
					if ("show" !== s || !f || void 0 === f[i]) continue;
					p = !0
				}
				u[i] = f && f[i] || Q.style(e, i)
			} else c = void 0;
		if (Q.isEmptyObject(u)) "inline" === ("none" === c ? w(e.nodeName) : c) && (h.display = c);
		else {
			f ? "hidden" in f && (p = f.hidden) : f = ge.access(e, "fxshow", {}), r && (f.hidden = !p), p ? Q(e).show() : d.done(function() {
				Q(e).hide()
			}), d.done(function() {
				var t;
				ge.remove(e, "fxshow");
				for (t in u) Q.style(e, t, u[t])
			});
			for (i in u) o = j(p ? f[i] : 0, i, d), i in f || (f[i] = o.start, p && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
		}
	}

	function D(e, t) {
		var n, i, s, r, o;
		for (n in e)
			if (i = Q.camelCase(n), s = t[i], r = e[n], Q.isArray(r) && (s = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (o = Q.cssHooks[i]) && "expand" in o) {
				r = o.expand(r), delete e[i];
				for (n in r) n in e || (e[n] = r[n], t[n] = s)
			} else t[i] = s
	}

	function B(e, t, n) {
		var i, s, r = 0,
			o = et.length,
			a = Q.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (s) return !1;
				for (var t = Ke || A(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, o = 0, l = c.tweens.length; l > o; o++) c.tweens[o].run(r);
				return a.notifyWith(e, [c, r, n]), 1 > r && l ? n : (a.resolveWith(e, [c]), !1)
			},
			c = a.promise({
				elem: e,
				props: Q.extend({}, t),
				opts: Q.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: Ke || A(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var i = Q.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
					return c.tweens.push(i), i
				},
				stop: function(t) {
					var n = 0,
						i = t ? c.tweens.length : 0;
					if (s) return this;
					for (s = !0; i > n; n++) c.tweens[n].run(1);
					return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
				}
			}),
			d = c.props;
		for (D(d, c.opts.specialEasing); o > r; r++)
			if (i = et[r].call(c, e, d, c.opts)) return i;
		return Q.map(d, j, c), Q.isFunction(c.opts.start) && c.opts.start.call(e, c), Q.fx.timer(Q.extend(l, {
			elem: e,
			anim: c,
			queue: c.opts.queue
		})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
	}

	function N(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var i, s = 0,
				r = t.toLowerCase().match(he) || [];
			if (Q.isFunction(n))
				for (; i = r[s++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
		}
	}

	function H(e, t, n, i) {
		function s(a) {
			var l;
			return r[a] = !0, Q.each(e[a] || [], function(e, a) {
				var c = a(t, n, i);
				return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
			}), l
		}
		var r = {},
			o = e === vt;
		return s(t.dataTypes[0]) || !r["*"] && s("*")
	}

	function I(e, t) {
		var n, i, s = Q.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((s[n] ? e : i || (i = {}))[n] = t[n]);
		return i && Q.extend(!0, e, i), e
	}

	function P(e, t, n) {
		for (var i, s, r, o, a = e.contents, l = e.dataTypes;
			"*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
		if (i)
			for (s in a)
				if (a[s] && a[s].test(i)) {
					l.unshift(s);
					break
				}
		if (l[0] in n) r = l[0];
		else {
			for (s in n) {
				if (!l[0] || e.converters[s + " " + l[0]]) {
					r = s;
					break
				}
				o || (o = s)
			}
			r = r || o
		}
		return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
	}

	function R(e, t, n, i) {
		var s, r, o, a, l, c = {},
			d = e.dataTypes.slice();
		if (d[1])
			for (o in e.converters) c[o.toLowerCase()] = e.converters[o];
		for (r = d.shift(); r;)
			if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift())
				if ("*" === r) r = l;
				else if ("*" !== l && l !== r) {
			if (!(o = c[l + " " + r] || c["* " + r]))
				for (s in c)
					if (a = s.split(" "), a[1] === r && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
						!0 === o ? o = c[s] : !0 !== c[s] && (r = a[0], d.unshift(a[1]));
						break
					}
			if (!0 !== o)
				if (o && e.throws) t = o(t);
				else try {
					t = o(t)
				} catch (e) {
					return {
						state: "parsererror",
						error: o ? e : "No conversion from " + l + " to " + r
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}

	function O(e, t, n, i) {
		var s;
		if (Q.isArray(t)) Q.each(t, function(t, s) {
			n || xt.test(e) ? i(e, s) : O(e + "[" + ("object" == typeof s ? t : "") + "]", s, n, i)
		});
		else if (n || "object" !== Q.type(t)) i(e, t);
		else
			for (s in t) O(e + "[" + s + "]", t[s], n, i)
	}

	function F(e) {
		return Q.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
	}
	var z = [],
		$ = z.slice,
		W = z.concat,
		G = z.push,
		X = z.indexOf,
		U = {},
		V = U.toString,
		K = U.hasOwnProperty,
		Y = {},
		J = e.document,
		Z = "2.1.3",
		Q = function(e, t) {
			return new Q.fn.init(e, t)
		},
		ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		te = /^-ms-/,
		ne = /-([\da-z])/gi,
		ie = function(e, t) {
			return t.toUpperCase()
		};
	Q.fn = Q.prototype = {
		jquery: Z,
		constructor: Q,
		selector: "",
		length: 0,
		toArray: function() {
			return $.call(this)
		},
		get: function(e) {
			return null != e ? 0 > e ? this[e + this.length] : this[e] : $.call(this)
		},
		pushStack: function(e) {
			var t = Q.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e, t) {
			return Q.each(this, e, t)
		},
		map: function(e) {
			return this.pushStack(Q.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		slice: function() {
			return this.pushStack($.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: G,
		sort: z.sort,
		splice: z.splice
	}, Q.extend = Q.fn.extend = function() {
		var e, t, n, i, s, r, o = arguments[0] || {},
			a = 1,
			l = arguments.length,
			c = !1;
		for ("boolean" == typeof o && (c = o, o = arguments[a] || {}, a++), "object" == typeof o || Q.isFunction(o) || (o = {}), a === l && (o = this, a--); l > a; a++)
			if (null != (e = arguments[a]))
				for (t in e) n = o[t], i = e[t], o !== i && (c && i && (Q.isPlainObject(i) || (s = Q.isArray(i))) ? (s ? (s = !1, r = n && Q.isArray(n) ? n : []) : r = n && Q.isPlainObject(n) ? n : {}, o[t] = Q.extend(c, r, i)) : void 0 !== i && (o[t] = i));
		return o
	}, Q.extend({
		expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isFunction: function(e) {
			return "function" === Q.type(e)
		},
		isArray: Array.isArray,
		isWindow: function(e) {
			return null != e && e === e.window
		},
		isNumeric: function(e) {
			return !Q.isArray(e) && e - parseFloat(e) + 1 >= 0
		},
		isPlainObject: function(e) {
			return "object" === Q.type(e) && !e.nodeType && !Q.isWindow(e) && !(e.constructor && !K.call(e.constructor.prototype, "isPrototypeOf"))
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? U[V.call(e)] || "object" : typeof e
		},
		globalEval: function(e) {
			var t, n = eval;
			(e = Q.trim(e)) && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
		},
		camelCase: function(e) {
			return e.replace(te, "ms-").replace(ne, ie)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, i) {
			var s = 0,
				r = e.length,
				o = n(e);
			if (i) {
				if (o)
					for (; r > s && !1 !== t.apply(e[s], i); s++);
				else
					for (s in e)
						if (!1 === t.apply(e[s], i)) break
			} else if (o)
				for (; r > s && !1 !== t.call(e[s], s, e[s]); s++);
			else
				for (s in e)
					if (!1 === t.call(e[s], s, e[s])) break;
			return e
		},
		trim: function(e) {
			return null == e ? "" : (e + "").replace(ee, "")
		},
		makeArray: function(e, t) {
			var i = t || [];
			return null != e && (n(Object(e)) ? Q.merge(i, "string" == typeof e ? [e] : e) : G.call(i, e)), i
		},
		inArray: function(e, t, n) {
			return null == t ? -1 : X.call(t, e, n)
		},
		merge: function(e, t) {
			for (var n = +t.length, i = 0, s = e.length; n > i; i++) e[s++] = t[i];
			return e.length = s, e
		},
		grep: function(e, t, n) {
			for (var i = [], s = 0, r = e.length, o = !n; r > s; s++) !t(e[s], s) !== o && i.push(e[s]);
			return i
		},
		map: function(e, t, i) {
			var s, r = 0,
				o = e.length,
				a = n(e),
				l = [];
			if (a)
				for (; o > r; r++) null != (s = t(e[r], r, i)) && l.push(s);
			else
				for (r in e) null != (s = t(e[r], r, i)) && l.push(s);
			return W.apply([], l)
		},
		guid: 1,
		proxy: function(e, t) {
			var n, i, s;
			return "string" == typeof t && (n = e[t], t = e, e = n), Q.isFunction(e) ? (i = $.call(arguments, 2), s = function() {
				return e.apply(t || this, i.concat($.call(arguments)))
			}, s.guid = e.guid = e.guid || Q.guid++, s) : void 0
		},
		now: Date.now,
		support: Y
	}), Q.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
		U["[object " + t + "]"] = t.toLowerCase()
	});
	var se = function(e) {
		function t(e, t, n, i) {
			var s, r, o, a, c, u, h, p, f, m;
			if ((t ? t.ownerDocument || t : P) !== M && A(t), t = t || M, n = n || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return n;
			if (!i && q) {
				if (11 !== a && (s = ge.exec(e)))
					if (o = s[1]) {
						if (9 === a) {
							if (!(r = t.getElementById(o)) || !r.parentNode) return n;
							if (r.id === o) return n.push(r), n
						} else if (t.ownerDocument && (r = t.ownerDocument.getElementById(o)) && H(t, r) && r.id === o) return n.push(r), n
					} else {
						if (s[2]) return Y.apply(n, t.getElementsByTagName(e)), n;
						if ((o = s[3]) && b.getElementsByClassName) return Y.apply(n, t.getElementsByClassName(o)), n
					}
				if (b.qsa && (!D || !D.test(e))) {
					if (p = h = I, f = t, m = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
						for (u = _(e), (h = t.getAttribute("id")) ? p = h.replace(ye, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", c = u.length; c--;) u[c] = p + d(u[c]);
						f = ve.test(e) && l(t.parentNode) || t, m = u.join(",")
					}
					if (m) try {
						return Y.apply(n, f.querySelectorAll(m)), n
					} catch (e) {} finally {
						h || t.removeAttribute("id")
					}
				}
			}
			return E(e.replace(oe, "$1"), t, n, i)
		}

		function n() {
			function e(n, i) {
				return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = i
			}
			var t = [];
			return e
		}

		function i(e) {
			return e[I] = !0, e
		}

		function s(e) {
			var t = M.createElement("div");
			try {
				return !!e(t)
			} catch (e) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function r(e, t) {
			for (var n = e.split("|"), i = e.length; i--;) w.attrHandle[n[i]] = t
		}

		function o(e, t) {
			var n = t && e,
				i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
			if (i) return i;
			if (n)
				for (; n = n.nextSibling;)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function a(e) {
			return i(function(t) {
				return t = +t, i(function(n, i) {
					for (var s, r = e([], n.length, t), o = r.length; o--;) n[s = r[o]] && (n[s] = !(i[s] = n[s]))
				})
			})
		}

		function l(e) {
			return e && void 0 !== e.getElementsByTagName && e
		}

		function c() {}

		function d(e) {
			for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
			return i
		}

		function u(e, t, n) {
			var i = t.dir,
				s = n && "parentNode" === i,
				r = O++;
			return t.first ? function(t, n, r) {
				for (; t = t[i];)
					if (1 === t.nodeType || s) return e(t, n, r)
			} : function(t, n, o) {
				var a, l, c = [R, r];
				if (o) {
					for (; t = t[i];)
						if ((1 === t.nodeType || s) && e(t, n, o)) return !0
				} else
					for (; t = t[i];)
						if (1 === t.nodeType || s) {
							if (l = t[I] || (t[I] = {}), (a = l[i]) && a[0] === R && a[1] === r) return c[2] = a[2];
							if (l[i] = c, c[2] = e(t, n, o)) return !0
						}
			}
		}

		function h(e) {
			return e.length > 1 ? function(t, n, i) {
				for (var s = e.length; s--;)
					if (!e[s](t, n, i)) return !1;
				return !0
			} : e[0]
		}

		function p(e, n, i) {
			for (var s = 0, r = n.length; r > s; s++) t(e, n[s], i);
			return i
		}

		function f(e, t, n, i, s) {
			for (var r, o = [], a = 0, l = e.length, c = null != t; l > a; a++)(r = e[a]) && (!n || n(r, i, s)) && (o.push(r), c && t.push(a));
			return o
		}

		function m(e, t, n, s, r, o) {
			return s && !s[I] && (s = m(s)), r && !r[I] && (r = m(r, o)), i(function(i, o, a, l) {
				var c, d, u, h = [],
					m = [],
					g = o.length,
					v = i || p(t || "*", a.nodeType ? [a] : a, []),
					y = !e || !i && t ? v : f(v, h, e, a, l),
					b = n ? r || (i ? e : g || s) ? [] : o : y;
				if (n && n(y, b, a, l), s)
					for (c = f(b, m), s(c, [], a, l), d = c.length; d--;)(u = c[d]) && (b[m[d]] = !(y[m[d]] = u));
				if (i) {
					if (r || e) {
						if (r) {
							for (c = [], d = b.length; d--;)(u = b[d]) && c.push(y[d] = u);
							r(null, b = [], c, l)
						}
						for (d = b.length; d--;)(u = b[d]) && (c = r ? Z(i, u) : h[d]) > -1 && (i[c] = !(o[c] = u))
					}
				} else b = f(b === o ? b.splice(g, b.length) : b), r ? r(null, o, b, l) : Y.apply(o, b)
			})
		}

		function g(e) {
			for (var t, n, i, s = e.length, r = w.relative[e[0].type], o = r || w.relative[" "], a = r ? 1 : 0, l = u(function(e) {
					return e === t
				}, o, !0), c = u(function(e) {
					return Z(t, e) > -1
				}, o, !0), p = [function(e, n, i) {
					var s = !r && (i || n !== L) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
					return t = null, s
				}]; s > a; a++)
				if (n = w.relative[e[a].type]) p = [u(h(p), n)];
				else {
					if (n = w.filter[e[a].type].apply(null, e[a].matches), n[I]) {
						for (i = ++a; s > i && !w.relative[e[i].type]; i++);
						return m(a > 1 && h(p), a > 1 && d(e.slice(0, a - 1).concat({
							value: " " === e[a - 2].type ? "*" : ""
						})).replace(oe, "$1"), n, i > a && g(e.slice(a, i)), s > i && g(e = e.slice(i)), s > i && d(e))
					}
					p.push(n)
				}
			return h(p)
		}

		function v(e, n) {
			var s = n.length > 0,
				r = e.length > 0,
				o = function(i, o, a, l, c) {
					var d, u, h, p = 0,
						m = "0",
						g = i && [],
						v = [],
						y = L,
						b = i || r && w.find.TAG("*", c),
						S = R += null == y ? 1 : Math.random() || .1,
						x = b.length;
					for (c && (L = o !== M && o); m !== x && null != (d = b[m]); m++) {
						if (r && d) {
							for (u = 0; h = e[u++];)
								if (h(d, o, a)) {
									l.push(d);
									break
								}
							c && (R = S)
						}
						s && ((d = !h && d) && p--, i && g.push(d))
					}
					if (p += m, s && m !== p) {
						for (u = 0; h = n[u++];) h(g, v, o, a);
						if (i) {
							if (p > 0)
								for (; m--;) g[m] || v[m] || (v[m] = V.call(l));
							v = f(v)
						}
						Y.apply(l, v), c && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
					}
					return c && (R = S, L = y), g
				};
			return s ? i(o) : o
		}
		var y, b, w, S, x, _, C, E, L, T, k, A, M, j, q, D, B, N, H, I = "sizzle" + 1 * new Date,
			P = e.document,
			R = 0,
			O = 0,
			F = n(),
			z = n(),
			$ = n(),
			W = function(e, t) {
				return e === t && (k = !0), 0
			},
			G = 1 << 31,
			X = {}.hasOwnProperty,
			U = [],
			V = U.pop,
			K = U.push,
			Y = U.push,
			J = U.slice,
			Z = function(e, t) {
				for (var n = 0, i = e.length; i > n; n++)
					if (e[n] === t) return n;
				return -1
			},
			Q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			ee = "[\\x20\\t\\r\\n\\f]",
			te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			ne = te.replace("w", "w#"),
			ie = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + ee + "*\\]",
			se = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
			re = new RegExp(ee + "+", "g"),
			oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
			ae = new RegExp("^" + ee + "*," + ee + "*"),
			le = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
			ce = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
			de = new RegExp(se),
			ue = new RegExp("^" + ne + "$"),
			he = {
				ID: new RegExp("^#(" + te + ")"),
				CLASS: new RegExp("^\\.(" + te + ")"),
				TAG: new RegExp("^(" + te.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + ie),
				PSEUDO: new RegExp("^" + se),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + Q + ")$", "i"),
				needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
			},
			pe = /^(?:input|select|textarea|button)$/i,
			fe = /^h\d$/i,
			me = /^[^{]+\{\s*\[native \w/,
			ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			ve = /[+~]/,
			ye = /'|\\/g,
			be = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
			we = function(e, t, n) {
				var i = "0x" + t - 65536;
				return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
			},
			Se = function() {
				A()
			};
		try {
			Y.apply(U = J.call(P.childNodes), P.childNodes), U[P.childNodes.length].nodeType
		} catch (e) {
			Y = {
				apply: U.length ? function(e, t) {
					K.apply(e, J.call(t))
				} : function(e, t) {
					for (var n = e.length, i = 0; e[n++] = t[i++];);
					e.length = n - 1
				}
			}
		}
		b = t.support = {}, x = t.isXML = function(e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return !!t && "HTML" !== t.nodeName
		}, A = t.setDocument = function(e) {
			var t, n, i = e ? e.ownerDocument || e : P;
			return i !== M && 9 === i.nodeType && i.documentElement ? (M = i, j = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Se, !1) : n.attachEvent && n.attachEvent("onunload", Se)), q = !x(i), b.attributes = s(function(e) {
				return e.className = "i", !e.getAttribute("className")
			}), b.getElementsByTagName = s(function(e) {
				return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
			}), b.getElementsByClassName = me.test(i.getElementsByClassName), b.getById = s(function(e) {
				return j.appendChild(e).id = I, !i.getElementsByName || !i.getElementsByName(I).length
			}), b.getById ? (w.find.ID = function(e, t) {
				if (void 0 !== t.getElementById && q) {
					var n = t.getElementById(e);
					return n && n.parentNode ? [n] : []
				}
			}, w.filter.ID = function(e) {
				var t = e.replace(be, we);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}) : (delete w.find.ID, w.filter.ID = function(e) {
				var t = e.replace(be, we);
				return function(e) {
					var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
					return n && n.value === t
				}
			}), w.find.TAG = b.getElementsByTagName ? function(e, t) {
				return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
			} : function(e, t) {
				var n, i = [],
					s = 0,
					r = t.getElementsByTagName(e);
				if ("*" === e) {
					for (; n = r[s++];) 1 === n.nodeType && i.push(n);
					return i
				}
				return r
			}, w.find.CLASS = b.getElementsByClassName && function(e, t) {
				return q ? t.getElementsByClassName(e) : void 0
			}, B = [], D = [], (b.qsa = me.test(i.querySelectorAll)) && (s(function(e) {
				j.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && D.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || D.push("\\[" + ee + "*(?:value|" + Q + ")"), e.querySelectorAll("[id~=" + I + "-]").length || D.push("~="), e.querySelectorAll(":checked").length || D.push(":checked"), e.querySelectorAll("a#" + I + "+*").length || D.push(".#.+[+~]")
			}), s(function(e) {
				var t = i.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && D.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), D.push(",.*:")
			})), (b.matchesSelector = me.test(N = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && s(function(e) {
				b.disconnectedMatch = N.call(e, "div"), N.call(e, "[s!='']:x"), B.push("!=", se)
			}), D = D.length && new RegExp(D.join("|")), B = B.length && new RegExp(B.join("|")), t = me.test(j.compareDocumentPosition), H = t || me.test(j.contains) ? function(e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
					i = t && t.parentNode;
				return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
			} : function(e, t) {
				if (t)
					for (; t = t.parentNode;)
						if (t === e) return !0;
				return !1
			}, W = t ? function(e, t) {
				if (e === t) return k = !0, 0;
				var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === P && H(P, e) ? -1 : t === i || t.ownerDocument === P && H(P, t) ? 1 : T ? Z(T, e) - Z(T, t) : 0 : 4 & n ? -1 : 1)
			} : function(e, t) {
				if (e === t) return k = !0, 0;
				var n, s = 0,
					r = e.parentNode,
					a = t.parentNode,
					l = [e],
					c = [t];
				if (!r || !a) return e === i ? -1 : t === i ? 1 : r ? -1 : a ? 1 : T ? Z(T, e) - Z(T, t) : 0;
				if (r === a) return o(e, t);
				for (n = e; n = n.parentNode;) l.unshift(n);
				for (n = t; n = n.parentNode;) c.unshift(n);
				for (; l[s] === c[s];) s++;
				return s ? o(l[s], c[s]) : l[s] === P ? -1 : c[s] === P ? 1 : 0
			}, i) : M
		}, t.matches = function(e, n) {
			return t(e, null, null, n)
		}, t.matchesSelector = function(e, n) {
			if ((e.ownerDocument || e) !== M && A(e), n = n.replace(ce, "='$1']"), !(!b.matchesSelector || !q || B && B.test(n) || D && D.test(n))) try {
				var i = N.call(e, n);
				if (i || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
			} catch (e) {}
			return t(n, M, null, [e]).length > 0
		}, t.contains = function(e, t) {
			return (e.ownerDocument || e) !== M && A(e), H(e, t)
		}, t.attr = function(e, t) {
			(e.ownerDocument || e) !== M && A(e);
			var n = w.attrHandle[t.toLowerCase()],
				i = n && X.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;
			return void 0 !== i ? i : b.attributes || !q ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
		}, t.error = function(e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, t.uniqueSort = function(e) {
			var t, n = [],
				i = 0,
				s = 0;
			if (k = !b.detectDuplicates, T = !b.sortStable && e.slice(0), e.sort(W), k) {
				for (; t = e[s++];) t === e[s] && (i = n.push(s));
				for (; i--;) e.splice(n[i], 1)
			}
			return T = null, e
		}, S = t.getText = function(e) {
			var t, n = "",
				i = 0,
				s = e.nodeType;
			if (s) {
				if (1 === s || 9 === s || 11 === s) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) n += S(e)
				} else if (3 === s || 4 === s) return e.nodeValue
			} else
				for (; t = e[i++];) n += S(t);
			return n
		}, w = t.selectors = {
			cacheLength: 50,
			createPseudo: i,
			match: he,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(e) {
					return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function(e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
				},
				PSEUDO: function(e) {
					var t, n = !e[6] && e[2];
					return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = _(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function(e) {
					var t = e.replace(be, we).toLowerCase();
					return "*" === e ? function() {
						return !0
					} : function(e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function(e) {
					var t = F[e + " "];
					return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && F(e, function(e) {
						return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
					})
				},
				ATTR: function(e, n, i) {
					return function(s) {
						var r = t.attr(s, e);
						return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
					}
				},
				CHILD: function(e, t, n, i, s) {
					var r = "nth" !== e.slice(0, 3),
						o = "last" !== e.slice(-4),
						a = "of-type" === t;
					return 1 === i && 0 === s ? function(e) {
						return !!e.parentNode
					} : function(t, n, l) {
						var c, d, u, h, p, f, m = r !== o ? "nextSibling" : "previousSibling",
							g = t.parentNode,
							v = a && t.nodeName.toLowerCase(),
							y = !l && !a;
						if (g) {
							if (r) {
								for (; m;) {
									for (u = t; u = u[m];)
										if (a ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
									f = m = "only" === e && !f && "nextSibling"
								}
								return !0
							}
							if (f = [o ? g.firstChild : g.lastChild], o && y) {
								for (d = g[I] || (g[I] = {}), c = d[e] || [], p = c[0] === R && c[1], h = c[0] === R && c[2], u = p && g.childNodes[p]; u = ++p && u && u[m] || (h = p = 0) || f.pop();)
									if (1 === u.nodeType && ++h && u === t) {
										d[e] = [R, p, h];
										break
									}
							} else if (y && (c = (t[I] || (t[I] = {}))[e]) && c[0] === R) h = c[1];
							else
								for (;
									(u = ++p && u && u[m] || (h = p = 0) || f.pop()) && ((a ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++h || (y && ((u[I] || (u[I] = {}))[e] = [R, h]), u !== t)););
							return (h -= s) === i || h % i == 0 && h / i >= 0
						}
					}
				},
				PSEUDO: function(e, n) {
					var s, r = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
					return r[I] ? r(n) : r.length > 1 ? (s = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
						for (var i, s = r(e, n), o = s.length; o--;) i = Z(e, s[o]), e[i] = !(t[i] = s[o])
					}) : function(e) {
						return r(e, 0, s)
					}) : r
				}
			},
			pseudos: {
				not: i(function(e) {
					var t = [],
						n = [],
						s = C(e.replace(oe, "$1"));
					return s[I] ? i(function(e, t, n, i) {
						for (var r, o = s(e, null, i, []), a = e.length; a--;)(r = o[a]) && (e[a] = !(t[a] = r))
					}) : function(e, i, r) {
						return t[0] = e, s(t, null, r, n), t[0] = null, !n.pop()
					}
				}),
				has: i(function(e) {
					return function(n) {
						return t(e, n).length > 0
					}
				}),
				contains: i(function(e) {
					return e = e.replace(be, we),
						function(t) {
							return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
						}
				}),
				lang: i(function(e) {
					return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(),
						function(t) {
							var n;
							do {
								if (n = q ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
							} while ((t = t.parentNode) && 1 === t.nodeType);
							return !1
						}
				}),
				target: function(t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function(e) {
					return e === j
				},
				focus: function(e) {
					return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: function(e) {
					return !1 === e.disabled
				},
				disabled: function(e) {
					return !0 === e.disabled
				},
				checked: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},
				selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
				},
				empty: function(e) {
					for (e = e.firstChild; e; e = e.nextSibling)
						if (e.nodeType < 6) return !1;
					return !0
				},
				parent: function(e) {
					return !w.pseudos.empty(e)
				},
				header: function(e) {
					return fe.test(e.nodeName)
				},
				input: function(e) {
					return pe.test(e.nodeName)
				},
				button: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function(e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				},
				first: a(function() {
					return [0]
				}),
				last: a(function(e, t) {
					return [t - 1]
				}),
				eq: a(function(e, t, n) {
					return [0 > n ? n + t : n]
				}),
				even: a(function(e, t) {
					for (var n = 0; t > n; n += 2) e.push(n);
					return e
				}),
				odd: a(function(e, t) {
					for (var n = 1; t > n; n += 2) e.push(n);
					return e
				}),
				lt: a(function(e, t, n) {
					for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
					return e
				}),
				gt: a(function(e, t, n) {
					for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
					return e
				})
			}
		}, w.pseudos.nth = w.pseudos.eq;
		for (y in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) w.pseudos[y] = function(e) {
			return function(t) {
				return "input" === t.nodeName.toLowerCase() && t.type === e
			}
		}(y);
		for (y in {
				submit: !0,
				reset: !0
			}) w.pseudos[y] = function(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}(y);
		return c.prototype = w.filters = w.pseudos, w.setFilters = new c, _ = t.tokenize = function(e, n) {
			var i, s, r, o, a, l, c, d = z[e + " "];
			if (d) return n ? 0 : d.slice(0);
			for (a = e, l = [], c = w.preFilter; a;) {
				(!i || (s = ae.exec(a))) && (s && (a = a.slice(s[0].length) || a), l.push(r = [])), i = !1, (s = le.exec(a)) && (i = s.shift(), r.push({
					value: i,
					type: s[0].replace(oe, " ")
				}), a = a.slice(i.length));
				for (o in w.filter) !(s = he[o].exec(a)) || c[o] && !(s = c[o](s)) || (i = s.shift(), r.push({
					value: i,
					type: o,
					matches: s
				}), a = a.slice(i.length));
				if (!i) break
			}
			return n ? a.length : a ? t.error(e) : z(e, l).slice(0)
		}, C = t.compile = function(e, t) {
			var n, i = [],
				s = [],
				r = $[e + " "];
			if (!r) {
				for (t || (t = _(e)), n = t.length; n--;) r = g(t[n]), r[I] ? i.push(r) : s.push(r);
				r = $(e, v(s, i)), r.selector = e
			}
			return r
		}, E = t.select = function(e, t, n, i) {
			var s, r, o, a, c, u = "function" == typeof e && e,
				h = !i && _(e = u.selector || e);
			if (n = n || [], 1 === h.length) {
				if (r = h[0] = h[0].slice(0), r.length > 2 && "ID" === (o = r[0]).type && b.getById && 9 === t.nodeType && q && w.relative[r[1].type]) {
					if (!(t = (w.find.ID(o.matches[0].replace(be, we), t) || [])[0])) return n;
					u && (t = t.parentNode), e = e.slice(r.shift().value.length)
				}
				for (s = he.needsContext.test(e) ? 0 : r.length; s-- && (o = r[s], !w.relative[a = o.type]);)
					if ((c = w.find[a]) && (i = c(o.matches[0].replace(be, we), ve.test(r[0].type) && l(t.parentNode) || t))) {
						if (r.splice(s, 1), !(e = i.length && d(r))) return Y.apply(n, i), n;
						break
					}
			}
			return (u || C(e, h))(i, t, !q, n, ve.test(e) && l(t.parentNode) || t), n
		}, b.sortStable = I.split("").sort(W).join("") === I, b.detectDuplicates = !!k, A(), b.sortDetached = s(function(e) {
			return 1 & e.compareDocumentPosition(M.createElement("div"))
		}), s(function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || r("type|href|height|width", function(e, t, n) {
			return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), b.attributes && s(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || r("value", function(e, t, n) {
			return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
		}), s(function(e) {
			return null == e.getAttribute("disabled")
		}) || r(Q, function(e, t, n) {
			var i;
			return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
		}), t
	}(e);
	Q.find = se, Q.expr = se.selectors, Q.expr[":"] = Q.expr.pseudos, Q.unique = se.uniqueSort, Q.text = se.getText, Q.isXMLDoc = se.isXML, Q.contains = se.contains;
	var re = Q.expr.match.needsContext,
		oe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		ae = /^.[^:#\[\.,]*$/;
	Q.filter = function(e, t, n) {
		var i = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? Q.find.matchesSelector(i, e) ? [i] : [] : Q.find.matches(e, Q.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, Q.fn.extend({
		find: function(e) {
			var t, n = this.length,
				i = [],
				s = this;
			if ("string" != typeof e) return this.pushStack(Q(e).filter(function() {
				for (t = 0; n > t; t++)
					if (Q.contains(s[t], this)) return !0
			}));
			for (t = 0; n > t; t++) Q.find(e, s[t], i);
			return i = this.pushStack(n > 1 ? Q.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
		},
		filter: function(e) {
			return this.pushStack(i(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(i(this, e || [], !0))
		},
		is: function(e) {
			return !!i(this, "string" == typeof e && re.test(e) ? Q(e) : e || [], !1).length
		}
	});
	var le, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
	(Q.fn.init = function(e, t) {
		var n, i;
		if (!e) return this;
		if ("string" == typeof e) {
			if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ce.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || le).find(e) : this.constructor(t).find(e);
			if (n[1]) {
				if (t = t instanceof Q ? t[0] : t, Q.merge(this, Q.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), oe.test(n[1]) && Q.isPlainObject(t))
					for (n in t) Q.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
				return this
			}
			return i = J.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = J, this.selector = e, this
		}
		return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Q.isFunction(e) ? void 0 !== le.ready ? le.ready(e) : e(Q) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Q.makeArray(e, this))
	}).prototype = Q.fn, le = Q(J);
	var de = /^(?:parents|prev(?:Until|All))/,
		ue = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	Q.extend({
		dir: function(e, t, n) {
			for (var i = [], s = void 0 !== n;
				(e = e[t]) && 9 !== e.nodeType;)
				if (1 === e.nodeType) {
					if (s && Q(e).is(n)) break;
					i.push(e)
				}
			return i
		},
		sibling: function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	}), Q.fn.extend({
		has: function(e) {
			var t = Q(e, this),
				n = t.length;
			return this.filter(function() {
				for (var e = 0; n > e; e++)
					if (Q.contains(this, t[e])) return !0
			})
		},
		closest: function(e, t) {
			for (var n, i = 0, s = this.length, r = [], o = re.test(e) || "string" != typeof e ? Q(e, t || this.context) : 0; s > i; i++)
				for (n = this[i]; n && n !== t; n = n.parentNode)
					if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && Q.find.matchesSelector(n, e))) {
						r.push(n);
						break
					}
			return this.pushStack(r.length > 1 ? Q.unique(r) : r)
		},
		index: function(e) {
			return e ? "string" == typeof e ? X.call(Q(e), this[0]) : X.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(Q.unique(Q.merge(this.get(), Q(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), Q.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return Q.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return Q.dir(e, "parentNode", n)
		},
		next: function(e) {
			return s(e, "nextSibling")
		},
		prev: function(e) {
			return s(e, "previousSibling")
		},
		nextAll: function(e) {
			return Q.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return Q.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return Q.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return Q.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return Q.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return Q.sibling(e.firstChild)
		},
		contents: function(e) {
			return e.contentDocument || Q.merge([], e.childNodes)
		}
	}, function(e, t) {
		Q.fn[e] = function(n, i) {
			var s = Q.map(this, t, n);
			return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (s = Q.filter(i, s)), this.length > 1 && (ue[e] || Q.unique(s), de.test(e) && s.reverse()), this.pushStack(s)
		}
	});
	var he = /\S+/g,
		pe = {};
	Q.Callbacks = function(e) {
		e = "string" == typeof e ? pe[e] || r(e) : Q.extend({}, e);
		var t, n, i, s, o, a, l = [],
			c = !e.once && [],
			d = function(r) {
				for (t = e.memory && r, n = !0, a = s || 0, s = 0, o = l.length, i = !0; l && o > a; a++)
					if (!1 === l[a].apply(r[0], r[1]) && e.stopOnFalse) {
						t = !1;
						break
					}
				i = !1, l && (c ? c.length && d(c.shift()) : t ? l = [] : u.disable())
			},
			u = {
				add: function() {
					if (l) {
						var n = l.length;
						! function t(n) {
							Q.each(n, function(n, i) {
								var s = Q.type(i);
								"function" === s ? e.unique && u.has(i) || l.push(i) : i && i.length && "string" !== s && t(i)
							})
						}(arguments), i ? o = l.length : t && (s = n, d(t))
					}
					return this
				},
				remove: function() {
					return l && Q.each(arguments, function(e, t) {
						for (var n;
							(n = Q.inArray(t, l, n)) > -1;) l.splice(n, 1), i && (o >= n && o--, a >= n && a--)
					}), this
				},
				has: function(e) {
					return e ? Q.inArray(e, l) > -1 : !(!l || !l.length)
				},
				empty: function() {
					return l = [], o = 0, this
				},
				disable: function() {
					return l = c = t = void 0, this
				},
				disabled: function() {
					return !l
				},
				lock: function() {
					return c = void 0, t || u.disable(), this
				},
				locked: function() {
					return !c
				},
				fireWith: function(e, t) {
					return !l || n && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? c.push(t) : d(t)), this
				},
				fire: function() {
					return u.fireWith(this, arguments), this
				},
				fired: function() {
					return !!n
				}
			};
		return u
	}, Q.extend({
		Deferred: function(e) {
			var t = [
					["resolve", "done", Q.Callbacks("once memory"), "resolved"],
					["reject", "fail", Q.Callbacks("once memory"), "rejected"],
					["notify", "progress", Q.Callbacks("memory")]
				],
				n = "pending",
				i = {
					state: function() {
						return n
					},
					always: function() {
						return s.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return Q.Deferred(function(n) {
							Q.each(t, function(t, r) {
								var o = Q.isFunction(e[t]) && e[t];
								s[r[1]](function() {
									var e = o && o.apply(this, arguments);
									e && Q.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, o ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? Q.extend(e, i) : i
					}
				},
				s = {};
			return i.pipe = i.then, Q.each(t, function(e, r) {
				var o = r[2],
					a = r[3];
				i[r[1]] = o.add, a && o.add(function() {
					n = a
				}, t[1 ^ e][2].disable, t[2][2].lock), s[r[0]] = function() {
					return s[r[0] + "With"](this === s ? i : this, arguments), this
				}, s[r[0] + "With"] = o.fireWith
			}), i.promise(s), e && e.call(s, s), s
		},
		when: function(e) {
			var t, n, i, s = 0,
				r = $.call(arguments),
				o = r.length,
				a = 1 !== o || e && Q.isFunction(e.promise) ? o : 0,
				l = 1 === a ? e : Q.Deferred(),
				c = function(e, n, i) {
					return function(s) {
						n[e] = this, i[e] = arguments.length > 1 ? $.call(arguments) : s, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
					}
				};
			if (o > 1)
				for (t = new Array(o), n = new Array(o), i = new Array(o); o > s; s++) r[s] && Q.isFunction(r[s].promise) ? r[s].promise().done(c(s, i, r)).fail(l.reject).progress(c(s, n, t)) : --a;
			return a || l.resolveWith(i, r), l.promise()
		}
	});
	var fe;
	Q.fn.ready = function(e) {
		return Q.ready.promise().done(e), this
	}, Q.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? Q.readyWait++ : Q.ready(!0)
		},
		ready: function(e) {
			(!0 === e ? --Q.readyWait : Q.isReady) || (Q.isReady = !0, !0 !== e && --Q.readyWait > 0 || (fe.resolveWith(J, [Q]), Q.fn.triggerHandler && (Q(J).triggerHandler("ready"), Q(J).off("ready"))))
		}
	}), Q.ready.promise = function(t) {
		return fe || (fe = Q.Deferred(), "complete" === J.readyState ? setTimeout(Q.ready) : (J.addEventListener("DOMContentLoaded", o, !1), e.addEventListener("load", o, !1))), fe.promise(t)
	}, Q.ready.promise();
	var me = Q.access = function(e, t, n, i, s, r, o) {
		var a = 0,
			l = e.length,
			c = null == n;
		if ("object" === Q.type(n)) {
			s = !0;
			for (a in n) Q.access(e, t, a, n[a], !0, r, o)
		} else if (void 0 !== i && (s = !0, Q.isFunction(i) || (o = !0), c && (o ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
				return c.call(Q(e), n)
			})), t))
			for (; l > a; a++) t(e[a], n, o ? i : i.call(e[a], a, t(e[a], n)));
		return s ? e : c ? t.call(e) : l ? t(e[0], n) : r
	};
	Q.acceptData = function(e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	}, a.uid = 1, a.accepts = Q.acceptData, a.prototype = {
		key: function(e) {
			if (!a.accepts(e)) return 0;
			var t = {},
				n = e[this.expando];
			if (!n) {
				n = a.uid++;
				try {
					t[this.expando] = {
						value: n
					}, Object.defineProperties(e, t)
				} catch (i) {
					t[this.expando] = n, Q.extend(e, t)
				}
			}
			return this.cache[n] || (this.cache[n] = {}), n
		},
		set: function(e, t, n) {
			var i, s = this.key(e),
				r = this.cache[s];
			if ("string" == typeof t) r[t] = n;
			else if (Q.isEmptyObject(r)) Q.extend(this.cache[s], t);
			else
				for (i in t) r[i] = t[i];
			return r
		},
		get: function(e, t) {
			var n = this.cache[this.key(e)];
			return void 0 === t ? n : n[t]
		},
		access: function(e, t, n) {
			var i;
			return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, Q.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function(e, t) {
			var n, i, s, r = this.key(e),
				o = this.cache[r];
			if (void 0 === t) this.cache[r] = {};
			else {
				Q.isArray(t) ? i = t.concat(t.map(Q.camelCase)) : (s = Q.camelCase(t), t in o ? i = [t, s] : (i = s, i = i in o ? [i] : i.match(he) || [])), n = i.length;
				for (; n--;) delete o[i[n]]
			}
		},
		hasData: function(e) {
			return !Q.isEmptyObject(this.cache[e[this.expando]] || {})
		},
		discard: function(e) {
			e[this.expando] && delete this.cache[e[this.expando]]
		}
	};
	var ge = new a,
		ve = new a,
		ye = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		be = /([A-Z])/g;
	Q.extend({
		hasData: function(e) {
			return ve.hasData(e) || ge.hasData(e)
		},
		data: function(e, t, n) {
			return ve.access(e, t, n)
		},
		removeData: function(e, t) {
			ve.remove(e, t)
		},
		_data: function(e, t, n) {
			return ge.access(e, t, n)
		},
		_removeData: function(e, t) {
			ge.remove(e, t)
		}
	}), Q.fn.extend({
		data: function(e, t) {
			var n, i, s, r = this[0],
				o = r && r.attributes;
			if (void 0 === e) {
				if (this.length && (s = ve.get(r), 1 === r.nodeType && !ge.get(r, "hasDataAttrs"))) {
					for (n = o.length; n--;) o[n] && (i = o[n].name, 0 === i.indexOf("data-") && (i = Q.camelCase(i.slice(5)), l(r, i, s[i])));
					ge.set(r, "hasDataAttrs", !0)
				}
				return s
			}
			return "object" == typeof e ? this.each(function() {
				ve.set(this, e)
			}) : me(this, function(t) {
				var n, i = Q.camelCase(e);
				if (r && void 0 === t) {
					if (void 0 !== (n = ve.get(r, e))) return n;
					if (void 0 !== (n = ve.get(r, i))) return n;
					if (void 0 !== (n = l(r, i, void 0))) return n
				} else this.each(function() {
					var n = ve.get(this, i);
					ve.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && ve.set(this, e, t)
				})
			}, null, t, arguments.length > 1, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				ve.remove(this, e)
			})
		}
	}), Q.extend({
		queue: function(e, t, n) {
			var i;
			return e ? (t = (t || "fx") + "queue", i = ge.get(e, t), n && (!i || Q.isArray(n) ? i = ge.access(e, t, Q.makeArray(n)) : i.push(n)), i || []) : void 0
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = Q.queue(e, t),
				i = n.length,
				s = n.shift(),
				r = Q._queueHooks(e, t),
				o = function() {
					Q.dequeue(e, t)
				};
			"inprogress" === s && (s = n.shift(), i--), s && ("fx" === t && n.unshift("inprogress"), delete r.stop, s.call(e, o, r)), !i && r && r.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return ge.get(e, n) || ge.access(e, n, {
				empty: Q.Callbacks("once memory").add(function() {
					ge.remove(e, [t + "queue", n])
				})
			})
		}
	}), Q.fn.extend({
		queue: function(e, t) {
			var n = 2;
			return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Q.queue(this[0], e) : void 0 === t ? this : this.each(function() {
				var n = Q.queue(this, e, t);
				Q._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Q.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				Q.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, i = 1,
				s = Q.Deferred(),
				r = this,
				o = this.length,
				a = function() {
					--i || s.resolveWith(r, [r])
				};
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)(n = ge.get(r[o], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
			return a(), s.promise(t)
		}
	});
	var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Se = ["Top", "Right", "Bottom", "Left"],
		xe = function(e, t) {
			return e = t || e, "none" === Q.css(e, "display") || !Q.contains(e.ownerDocument, e)
		},
		_e = /^(?:checkbox|radio)$/i;
	! function() {
		var e = J.createDocumentFragment(),
			t = e.appendChild(J.createElement("div")),
			n = J.createElement("input");
		n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Y.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
	}();
	var Ce = "undefined";
	Y.focusinBubbles = "onfocusin" in e;
	var Ee = /^key/,
		Le = /^(?:mouse|pointer|contextmenu)|click/,
		Te = /^(?:focusinfocus|focusoutblur)$/,
		ke = /^([^.]*)(?:\.(.+)|)$/;
	Q.event = {
		global: {},
		add: function(e, t, n, i, s) {
			var r, o, a, l, c, d, u, h, p, f, m, g = ge.get(e);
			if (g)
				for (n.handler && (r = n, n = r.handler, s = r.selector), n.guid || (n.guid = Q.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function(t) {
						return typeof Q !== Ce && Q.event.triggered !== t.type ? Q.event.dispatch.apply(e, arguments) : void 0
					}), t = (t || "").match(he) || [""], c = t.length; c--;) a = ke.exec(t[c]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p && (u = Q.event.special[p] || {}, p = (s ? u.delegateType : u.bindType) || p, u = Q.event.special[p] || {}, d = Q.extend({
					type: p,
					origType: m,
					data: i,
					handler: n,
					guid: n.guid,
					selector: s,
					needsContext: s && Q.expr.match.needsContext.test(s),
					namespace: f.join(".")
				}, r), (h = l[p]) || (h = l[p] = [], h.delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, f, o) || e.addEventListener && e.addEventListener(p, o, !1)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), s ? h.splice(h.delegateCount++, 0, d) : h.push(d), Q.event.global[p] = !0)
		},
		remove: function(e, t, n, i, s) {
			var r, o, a, l, c, d, u, h, p, f, m, g = ge.hasData(e) && ge.get(e);
			if (g && (l = g.events)) {
				for (t = (t || "").match(he) || [""], c = t.length; c--;)
					if (a = ke.exec(t[c]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
						for (u = Q.event.special[p] || {}, p = (i ? u.delegateType : u.bindType) || p, h = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = r = h.length; r--;) d = h[r], !s && m !== d.origType || n && n.guid !== d.guid || a && !a.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (h.splice(r, 1), d.selector && h.delegateCount--, u.remove && u.remove.call(e, d));
						o && !h.length && (u.teardown && !1 !== u.teardown.call(e, f, g.handle) || Q.removeEvent(e, p, g.handle), delete l[p])
					} else
						for (p in l) Q.event.remove(e, p + t[c], n, i, !0);
				Q.isEmptyObject(l) && (delete g.handle, ge.remove(e, "events"))
			}
		},
		trigger: function(t, n, i, s) {
			var r, o, a, l, c, d, u, h = [i || J],
				p = K.call(t, "type") ? t.type : t,
				f = K.call(t, "namespace") ? t.namespace.split(".") : [];
			if (o = a = i = i || J, 3 !== i.nodeType && 8 !== i.nodeType && !Te.test(p + Q.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), c = p.indexOf(":") < 0 && "on" + p, t = t[Q.expando] ? t : new Q.Event(p, "object" == typeof t && t), t.isTrigger = s ? 2 : 3, t.namespace = f.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : Q.makeArray(n, [t]), u = Q.event.special[p] || {}, s || !u.trigger || !1 !== u.trigger.apply(i, n))) {
				if (!s && !u.noBubble && !Q.isWindow(i)) {
					for (l = u.delegateType || p, Te.test(l + p) || (o = o.parentNode); o; o = o.parentNode) h.push(o), a = o;
					a === (i.ownerDocument || J) && h.push(a.defaultView || a.parentWindow || e)
				}
				for (r = 0;
					(o = h[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : u.bindType || p, d = (ge.get(o, "events") || {})[t.type] && ge.get(o, "handle"), d && d.apply(o, n), (d = c && o[c]) && d.apply && Q.acceptData(o) && (t.result = d.apply(o, n), !1 === t.result && t.preventDefault());
				return t.type = p, s || t.isDefaultPrevented() || u._default && !1 !== u._default.apply(h.pop(), n) || !Q.acceptData(i) || c && Q.isFunction(i[p]) && !Q.isWindow(i) && (a = i[c], a && (i[c] = null), Q.event.triggered = p, i[p](), Q.event.triggered = void 0, a && (i[c] = a)), t.result
			}
		},
		dispatch: function(e) {
			e = Q.event.fix(e);
			var t, n, i, s, r, o = [],
				a = $.call(arguments),
				l = (ge.get(this, "events") || {})[e.type] || [],
				c = Q.event.special[e.type] || {};
			if (a[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
				for (o = Q.event.handlers.call(this, e, l), t = 0;
					(s = o[t++]) && !e.isPropagationStopped();)
					for (e.currentTarget = s.elem, n = 0;
						(r = s.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, void 0 !== (i = ((Q.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, a)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, t) {
			var n, i, s, r, o = [],
				a = t.delegateCount,
				l = e.target;
			if (a && l.nodeType && (!e.button || "click" !== e.type))
				for (; l !== this; l = l.parentNode || this)
					if (!0 !== l.disabled || "click" !== e.type) {
						for (i = [], n = 0; a > n; n++) r = t[n], s = r.selector + " ", void 0 === i[s] && (i[s] = r.needsContext ? Q(s, this).index(l) >= 0 : Q.find(s, this, null, [l]).length), i[s] && i.push(r);
						i.length && o.push({
							elem: l,
							handlers: i
						})
					}
			return a < t.length && o.push({
				elem: this,
				handlers: t.slice(a)
			}), o
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, t) {
				var n, i, s, r = t.button;
				return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, i = n.documentElement, s = n.body, e.pageX = t.clientX + (i && i.scrollLeft || s && s.scrollLeft || 0) - (i && i.clientLeft || s && s.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || s && s.scrollTop || 0) - (i && i.clientTop || s && s.clientTop || 0)), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
			}
		},
		fix: function(e) {
			if (e[Q.expando]) return e;
			var t, n, i, s = e.type,
				r = e,
				o = this.fixHooks[s];
			for (o || (this.fixHooks[s] = o = Le.test(s) ? this.mouseHooks : Ee.test(s) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, e = new Q.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
			return e.target || (e.target = J), 3 === e.target.nodeType && (e.target = e.target.parentNode), o.filter ? o.filter(e, r) : e
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					return this !== u() && this.focus ? (this.focus(), !1) : void 0
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === u() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return "checkbox" === this.type && this.click && Q.nodeName(this, "input") ? (this.click(), !1) : void 0
				},
				_default: function(e) {
					return Q.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, i) {
			var s = Q.extend(new Q.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			i ? Q.event.trigger(s, null, t) : Q.event.dispatch.call(t, s), s.isDefaultPrevented() && n.preventDefault()
		}
	}, Q.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	}, Q.Event = function(e, t) {
		return this instanceof Q.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? c : d) : this.type = e, t && Q.extend(this, t), this.timeStamp = e && e.timeStamp || Q.now(), void(this[Q.expando] = !0)) : new Q.Event(e, t)
	}, Q.Event.prototype = {
		isDefaultPrevented: d,
		isPropagationStopped: d,
		isImmediatePropagationStopped: d,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = c, e && e.preventDefault && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = c, e && e.stopPropagation && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = c, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, Q.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, t) {
		Q.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, i = this,
					s = e.relatedTarget,
					r = e.handleObj;
				return (!s || s !== i && !Q.contains(i, s)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), Y.focusinBubbles || Q.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = function(e) {
			Q.event.simulate(t, e.target, Q.event.fix(e), !0)
		};
		Q.event.special[t] = {
			setup: function() {
				var i = this.ownerDocument || this,
					s = ge.access(i, t);
				s || i.addEventListener(e, n, !0), ge.access(i, t, (s || 0) + 1)
			},
			teardown: function() {
				var i = this.ownerDocument || this,
					s = ge.access(i, t) - 1;
				s ? ge.access(i, t, s) : (i.removeEventListener(e, n, !0), ge.remove(i, t))
			}
		}
	}), Q.fn.extend({
		on: function(e, t, n, i, s) {
			var r, o;
			if ("object" == typeof e) {
				"string" != typeof t && (n = n || t, t = void 0);
				for (o in e) this.on(o, t, n, e[o], s);
				return this
			}
			if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = d;
			else if (!i) return this;
			return 1 === s && (r = i, i = function(e) {
				return Q().off(e), r.apply(this, arguments)
			}, i.guid = r.guid || (r.guid = Q.guid++)), this.each(function() {
				Q.event.add(this, e, i, n, t)
			})
		},
		one: function(e, t, n, i) {
			return this.on(e, t, n, i, 1)
		},
		off: function(e, t, n) {
			var i, s;
			if (e && e.preventDefault && e.handleObj) return i = e.handleObj, Q(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" == typeof e) {
				for (s in e) this.off(s, t, e[s]);
				return this
			}
			return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = d), this.each(function() {
				Q.event.remove(this, e, n, t)
			})
		},
		trigger: function(e, t) {
			return this.each(function() {
				Q.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			return n ? Q.event.trigger(e, t, n, !0) : void 0
		}
	});
	var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		Me = /<([\w:]+)/,
		je = /<|&#?\w+;/,
		qe = /<(?:script|style|link)/i,
		De = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Be = /^$|\/(?:java|ecma)script/i,
		Ne = /^true\/(.*)/,
		He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Ie = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	Ie.optgroup = Ie.option, Ie.tbody = Ie.tfoot = Ie.colgroup = Ie.caption = Ie.thead, Ie.th = Ie.td, Q.extend({
		clone: function(e, t, n) {
			var i, s, r, o, a = e.cloneNode(!0),
				l = Q.contains(e.ownerDocument, e);
			if (!(Y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Q.isXMLDoc(e)))
				for (o = v(a), r = v(e), i = 0, s = r.length; s > i; i++) y(r[i], o[i]);
			if (t)
				if (n)
					for (r = r || v(e), o = o || v(a), i = 0, s = r.length; s > i; i++) g(r[i], o[i]);
				else g(e, a);
			return o = v(a, "script"), o.length > 0 && m(o, !l && v(e, "script")), a
		},
		buildFragment: function(e, t, n, i) {
			for (var s, r, o, a, l, c, d = t.createDocumentFragment(), u = [], h = 0, p = e.length; p > h; h++)
				if ((s = e[h]) || 0 === s)
					if ("object" === Q.type(s)) Q.merge(u, s.nodeType ? [s] : s);
					else if (je.test(s)) {
				for (r = r || d.appendChild(t.createElement("div")), o = (Me.exec(s) || ["", ""])[1].toLowerCase(), a = Ie[o] || Ie._default, r.innerHTML = a[1] + s.replace(Ae, "<$1></$2>") + a[2], c = a[0]; c--;) r = r.lastChild;
				Q.merge(u, r.childNodes), r = d.firstChild, r.textContent = ""
			} else u.push(t.createTextNode(s));
			for (d.textContent = "", h = 0; s = u[h++];)
				if ((!i || -1 === Q.inArray(s, i)) && (l = Q.contains(s.ownerDocument, s), r = v(d.appendChild(s), "script"), l && m(r), n))
					for (c = 0; s = r[c++];) Be.test(s.type || "") && n.push(s);
			return d
		},
		cleanData: function(e) {
			for (var t, n, i, s, r = Q.event.special, o = 0; void 0 !== (n = e[o]); o++) {
				if (Q.acceptData(n) && (s = n[ge.expando]) && (t = ge.cache[s])) {
					if (t.events)
						for (i in t.events) r[i] ? Q.event.remove(n, i) : Q.removeEvent(n, i, t.handle);
					ge.cache[s] && delete ge.cache[s]
				}
				delete ve.cache[n[ve.expando]]
			}
		}
	}), Q.fn.extend({
		text: function(e) {
			return me(this, function(e) {
				return void 0 === e ? Q.text(this) : this.empty().each(function() {
					(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					h(this, e).appendChild(e)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = h(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			for (var n, i = e ? Q.filter(e, this) : this, s = 0; null != (n = i[s]); s++) t || 1 !== n.nodeType || Q.cleanData(v(n)), n.parentNode && (t && Q.contains(n.ownerDocument, n) && m(v(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Q.cleanData(v(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function() {
				return Q.clone(this, e, t)
			})
		},
		html: function(e) {
			return me(this, function(e) {
				var t = this[0] || {},
					n = 0,
					i = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !qe.test(e) && !Ie[(Me.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = e.replace(Ae, "<$1></$2>");
					try {
						for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (Q.cleanData(v(t, !1)), t.innerHTML = e);
						t = 0
					} catch (e) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = arguments[0];
			return this.domManip(arguments, function(t) {
				e = this.parentNode, Q.cleanData(v(this)), e && e.replaceChild(t, this)
			}), e && (e.length || e.nodeType) ? this : this.remove()
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, t) {
			e = W.apply([], e);
			var n, i, s, r, o, a, l = 0,
				c = this.length,
				d = this,
				u = c - 1,
				h = e[0],
				m = Q.isFunction(h);
			if (m || c > 1 && "string" == typeof h && !Y.checkClone && De.test(h)) return this.each(function(n) {
				var i = d.eq(n);
				m && (e[0] = h.call(this, n, i.html())), i.domManip(e, t)
			});
			if (c && (n = Q.buildFragment(e, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
				for (s = Q.map(v(n, "script"), p), r = s.length; c > l; l++) o = n, l !== u && (o = Q.clone(o, !0, !0), r && Q.merge(s, v(o, "script"))), t.call(this[l], o, l);
				if (r)
					for (a = s[s.length - 1].ownerDocument, Q.map(s, f), l = 0; r > l; l++) o = s[l], Be.test(o.type || "") && !ge.access(o, "globalEval") && Q.contains(a, o) && (o.src ? Q._evalUrl && Q._evalUrl(o.src) : Q.globalEval(o.textContent.replace(He, "")))
			}
			return this
		}
	}), Q.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		Q.fn[e] = function(e) {
			for (var n, i = [], s = Q(e), r = s.length - 1, o = 0; r >= o; o++) n = o === r ? this : this.clone(!0), Q(s[o])[t](n), G.apply(i, n.get());
			return this.pushStack(i)
		}
	});
	var Pe, Re = {},
		Oe = /^margin/,
		Fe = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"),
		ze = function(t) {
			return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
		};
	! function() {
		function t() {
			o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o.innerHTML = "", s.appendChild(r);
			var t = e.getComputedStyle(o, null);
			n = "1%" !== t.top, i = "4px" === t.width, s.removeChild(r)
		}
		var n, i, s = J.documentElement,
			r = J.createElement("div"),
			o = J.createElement("div");
		o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === o.style.backgroundClip, r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(o), e.getComputedStyle && Q.extend(Y, {
			pixelPosition: function() {
				return t(), n
			},
			boxSizingReliable: function() {
				return null == i && t(), i
			},
			reliableMarginRight: function() {
				var t, n = o.appendChild(J.createElement("div"));
				return n.style.cssText = o.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", o.style.width = "1px", s.appendChild(r), t = !parseFloat(e.getComputedStyle(n, null).marginRight), s.removeChild(r), o.removeChild(n), t
			}
		}))
	}(), Q.swap = function(e, t, n, i) {
		var s, r, o = {};
		for (r in t) o[r] = e.style[r], e.style[r] = t[r];
		s = n.apply(e, i || []);
		for (r in t) e.style[r] = o[r];
		return s
	};
	var $e = /^(none|table(?!-c[ea]).+)/,
		We = new RegExp("^(" + we + ")(.*)$", "i"),
		Ge = new RegExp("^([+-])=(" + we + ")", "i"),
		Xe = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Ue = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Ve = ["Webkit", "O", "Moz", "ms"];
	Q.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = S(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			float: "cssFloat"
		},
		style: function(e, t, n, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var s, r, o, a = Q.camelCase(t),
					l = e.style;
				return t = Q.cssProps[a] || (Q.cssProps[a] = _(l, a)), o = Q.cssHooks[t] || Q.cssHooks[a], void 0 === n ? o && "get" in o && void 0 !== (s = o.get(e, !1, i)) ? s : l[t] : (r = typeof n, "string" === r && (s = Ge.exec(n)) && (n = (s[1] + 1) * s[2] + parseFloat(Q.css(e, t)), r = "number"), void(null != n && n === n && ("number" !== r || Q.cssNumber[a] || (n += "px"), Y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, i)) || (l[t] = n))))
			}
		},
		css: function(e, t, n, i) {
			var s, r, o, a = Q.camelCase(t);
			return t = Q.cssProps[a] || (Q.cssProps[a] = _(e.style, a)), o = Q.cssHooks[t] || Q.cssHooks[a], o && "get" in o && (s = o.get(e, !0, n)), void 0 === s && (s = S(e, t, i)), "normal" === s && t in Ue && (s = Ue[t]), "" === n || n ? (r = parseFloat(s), !0 === n || Q.isNumeric(r) ? r || 0 : s) : s
		}
	}), Q.each(["height", "width"], function(e, t) {
		Q.cssHooks[t] = {
			get: function(e, n, i) {
				return n ? $e.test(Q.css(e, "display")) && 0 === e.offsetWidth ? Q.swap(e, Xe, function() {
					return L(e, t, i)
				}) : L(e, t, i) : void 0
			},
			set: function(e, n, i) {
				var s = i && ze(e);
				return C(e, n, i ? E(e, t, i, "border-box" === Q.css(e, "boxSizing", !1, s), s) : 0)
			}
		}
	}), Q.cssHooks.marginRight = x(Y.reliableMarginRight, function(e, t) {
		return t ? Q.swap(e, {
			display: "inline-block"
		}, S, [e, "marginRight"]) : void 0
	}), Q.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		Q.cssHooks[e + t] = {
			expand: function(n) {
				for (var i = 0, s = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) s[e + Se[i] + t] = r[i] || r[i - 2] || r[0];
				return s
			}
		}, Oe.test(e) || (Q.cssHooks[e + t].set = C)
	}), Q.fn.extend({
		css: function(e, t) {
			return me(this, function(e, t, n) {
				var i, s, r = {},
					o = 0;
				if (Q.isArray(t)) {
					for (i = ze(e), s = t.length; s > o; o++) r[t[o]] = Q.css(e, t[o], !1, i);
					return r
				}
				return void 0 !== n ? Q.style(e, t, n) : Q.css(e, t)
			}, e, t, arguments.length > 1)
		},
		show: function() {
			return T(this, !0)
		},
		hide: function() {
			return T(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				xe(this) ? Q(this).show() : Q(this).hide()
			})
		}
	}), Q.Tween = k, k.prototype = {
		constructor: k,
		init: function(e, t, n, i, s, r) {
			this.elem = e, this.prop = n, this.easing = s || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (Q.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = k.propHooks[this.prop];
			return e && e.get ? e.get(this) : k.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = k.propHooks[this.prop];
			return this.pos = t = this.options.duration ? Q.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : k.propHooks._default.set(this), this
		}
	}, k.prototype.init.prototype = k.prototype, k.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Q.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function(e) {
				Q.fx.step[e.prop] ? Q.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Q.cssProps[e.prop]] || Q.cssHooks[e.prop]) ? Q.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, k.propHooks.scrollTop = k.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, Q.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, Q.fx = k.prototype.init, Q.fx.step = {};
	var Ke, Ye, Je = /^(?:toggle|show|hide)$/,
		Ze = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"),
		Qe = /queueHooks$/,
		et = [q],
		tt = {
			"*": [function(e, t) {
				var n = this.createTween(e, t),
					i = n.cur(),
					s = Ze.exec(t),
					r = s && s[3] || (Q.cssNumber[e] ? "" : "px"),
					o = (Q.cssNumber[e] || "px" !== r && +i) && Ze.exec(Q.css(n.elem, e)),
					a = 1,
					l = 20;
				if (o && o[3] !== r) {
					r = r || o[3], s = s || [], o = +i || 1;
					do {
						a = a || ".5", o /= a, Q.style(n.elem, e, o + r)
					} while (a !== (a = n.cur() / i) && 1 !== a && --l)
				}
				return s && (o = n.start = +o || +i || 0, n.unit = r, n.end = s[1] ? o + (s[1] + 1) * s[2] : +s[2]), n
			}]
		};
	Q.Animation = Q.extend(B, {
			tweener: function(e, t) {
				Q.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
				for (var n, i = 0, s = e.length; s > i; i++) n = e[i], tt[n] = tt[n] || [], tt[n].unshift(t)
			},
			prefilter: function(e, t) {
				t ? et.unshift(e) : et.push(e)
			}
		}), Q.speed = function(e, t, n) {
			var i = e && "object" == typeof e ? Q.extend({}, e) : {
				complete: n || !n && t || Q.isFunction(e) && e,
				duration: e,
				easing: n && t || t && !Q.isFunction(t) && t
			};
			return i.duration = Q.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in Q.fx.speeds ? Q.fx.speeds[i.duration] : Q.fx.speeds._default, (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
				Q.isFunction(i.old) && i.old.call(this), i.queue && Q.dequeue(this, i.queue)
			}, i
		}, Q.fn.extend({
			fadeTo: function(e, t, n, i) {
				return this.filter(xe).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, i)
			},
			animate: function(e, t, n, i) {
				var s = Q.isEmptyObject(e),
					r = Q.speed(t, n, i),
					o = function() {
						var t = B(this, Q.extend({}, e), r);
						(s || ge.get(this, "finish")) && t.stop(!0)
					};
				return o.finish = o, s || !1 === r.queue ? this.each(o) : this.queue(r.queue, o)
			},
			stop: function(e, t, n) {
				var i = function(e) {
					var t = e.stop;
					delete e.stop, t(n)
				};
				return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
					var t = !0,
						s = null != e && e + "queueHooks",
						r = Q.timers,
						o = ge.get(this);
					if (s) o[s] && o[s].stop && i(o[s]);
					else
						for (s in o) o[s] && o[s].stop && Qe.test(s) && i(o[s]);
					for (s = r.length; s--;) r[s].elem !== this || null != e && r[s].queue !== e || (r[s].anim.stop(n), t = !1, r.splice(s, 1));
					(t || !n) && Q.dequeue(this, e)
				})
			},
			finish: function(e) {
				return !1 !== e && (e = e || "fx"), this.each(function() {
					var t, n = ge.get(this),
						i = n[e + "queue"],
						s = n[e + "queueHooks"],
						r = Q.timers,
						o = i ? i.length : 0;
					for (n.finish = !0, Q.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
					for (t = 0; o > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
					delete n.finish
				})
			}
		}), Q.each(["toggle", "show", "hide"], function(e, t) {
			var n = Q.fn[t];
			Q.fn[t] = function(e, i, s) {
				return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(M(t, !0), e, i, s)
			}
		}), Q.each({
			slideDown: M("show"),
			slideUp: M("hide"),
			slideToggle: M("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(e, t) {
			Q.fn[e] = function(e, n, i) {
				return this.animate(t, e, n, i)
			}
		}), Q.timers = [], Q.fx.tick = function() {
			var e, t = 0,
				n = Q.timers;
			for (Ke = Q.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
			n.length || Q.fx.stop(), Ke = void 0
		}, Q.fx.timer = function(e) {
			Q.timers.push(e), e() ? Q.fx.start() : Q.timers.pop()
		}, Q.fx.interval = 13, Q.fx.start = function() {
			Ye || (Ye = setInterval(Q.fx.tick, Q.fx.interval))
		}, Q.fx.stop = function() {
			clearInterval(Ye), Ye = null
		}, Q.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, Q.fn.delay = function(e, t) {
			return e = Q.fx ? Q.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var i = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(i)
				}
			})
		},
		function() {
			var e = J.createElement("input"),
				t = J.createElement("select"),
				n = t.appendChild(J.createElement("option"));
			e.type = "checkbox", Y.checkOn = "" !== e.value, Y.optSelected = n.selected, t.disabled = !0, Y.optDisabled = !n.disabled, e = J.createElement("input"), e.value = "t", e.type = "radio", Y.radioValue = "t" === e.value
		}();
	var nt, it = Q.expr.attrHandle;
	Q.fn.extend({
		attr: function(e, t) {
			return me(this, Q.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				Q.removeAttr(this, e)
			})
		}
	}), Q.extend({
		attr: function(e, t, n) {
			var i, s, r = e.nodeType;
			if (e && 3 !== r && 8 !== r && 2 !== r) return typeof e.getAttribute === Ce ? Q.prop(e, t, n) : (1 === r && Q.isXMLDoc(e) || (t = t.toLowerCase(), i = Q.attrHooks[t] || (Q.expr.match.bool.test(t) ? nt : void 0)), void 0 === n ? i && "get" in i && null !== (s = i.get(e, t)) ? s : (s = Q.find.attr(e, t), null == s ? void 0 : s) : null !== n ? i && "set" in i && void 0 !== (s = i.set(e, n, t)) ? s : (e.setAttribute(t, n + ""), n) : void Q.removeAttr(e, t))
		},
		removeAttr: function(e, t) {
			var n, i, s = 0,
				r = t && t.match(he);
			if (r && 1 === e.nodeType)
				for (; n = r[s++];) i = Q.propFix[n] || n, Q.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!Y.radioValue && "radio" === t && Q.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		}
	}), nt = {
		set: function(e, t, n) {
			return !1 === t ? Q.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, Q.each(Q.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var n = it[t] || Q.find.attr;
		it[t] = function(e, t, i) {
			var s, r;
			return i || (r = it[t], it[t] = s, s = null != n(e, t, i) ? t.toLowerCase() : null, it[t] = r), s
		}
	});
	var st = /^(?:input|select|textarea|button)$/i;
	Q.fn.extend({
		prop: function(e, t) {
			return me(this, Q.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[Q.propFix[e] || e]
			})
		}
	}), Q.extend({
		propFix: {
			for: "htmlFor",
			class: "className"
		},
		prop: function(e, t, n) {
			var i, s, r, o = e.nodeType;
			if (e && 3 !== o && 8 !== o && 2 !== o) return r = 1 !== o || !Q.isXMLDoc(e), r && (t = Q.propFix[t] || t, s = Q.propHooks[t]), void 0 !== n ? s && "set" in s && void 0 !== (i = s.set(e, n, t)) ? i : e[t] = n : s && "get" in s && null !== (i = s.get(e, t)) ? i : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : -1
				}
			}
		}
	}), Y.optSelected || (Q.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		}
	}), Q.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		Q.propFix[this.toLowerCase()] = this
	});
	var rt = /[\t\r\n\f]/g;
	Q.fn.extend({
		addClass: function(e) {
			var t, n, i, s, r, o, a = "string" == typeof e && e,
				l = 0,
				c = this.length;
			if (Q.isFunction(e)) return this.each(function(t) {
				Q(this).addClass(e.call(this, t, this.className))
			});
			if (a)
				for (t = (e || "").match(he) || []; c > l; l++)
					if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(rt, " ") : " ")) {
						for (r = 0; s = t[r++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
						o = Q.trim(i), n.className !== o && (n.className = o)
					}
			return this
		},
		removeClass: function(e) {
			var t, n, i, s, r, o, a = 0 === arguments.length || "string" == typeof e && e,
				l = 0,
				c = this.length;
			if (Q.isFunction(e)) return this.each(function(t) {
				Q(this).removeClass(e.call(this, t, this.className))
			});
			if (a)
				for (t = (e || "").match(he) || []; c > l; l++)
					if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(rt, " ") : "")) {
						for (r = 0; s = t[r++];)
							for (; i.indexOf(" " + s + " ") >= 0;) i = i.replace(" " + s + " ", " ");
						o = e ? Q.trim(i) : "", n.className !== o && (n.className = o)
					}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Q.isFunction(e) ? function(n) {
				Q(this).toggleClass(e.call(this, n, this.className, t), t)
			} : function() {
				if ("string" === n)
					for (var t, i = 0, s = Q(this), r = e.match(he) || []; t = r[i++];) s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
				else(n === Ce || "boolean" === n) && (this.className && ge.set(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : ge.get(this, "__className__") || "")
			})
		},
		hasClass: function(e) {
			for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
				if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(rt, " ").indexOf(t) >= 0) return !0;
			return !1
		}
	});
	var ot = /\r/g;
	Q.fn.extend({
		val: function(e) {
			var t, n, i, s = this[0];
			return arguments.length ? (i = Q.isFunction(e), this.each(function(n) {
				var s;
				1 === this.nodeType && (s = i ? e.call(this, n, Q(this).val()) : e, null == s ? s = "" : "number" == typeof s ? s += "" : Q.isArray(s) && (s = Q.map(s, function(e) {
					return null == e ? "" : e + ""
				})), (t = Q.valHooks[this.type] || Q.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, s, "value") || (this.value = s))
			})) : s ? (t = Q.valHooks[s.type] || Q.valHooks[s.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(s, "value")) ? n : (n = s.value, "string" == typeof n ? n.replace(ot, "") : null == n ? "" : n)) : void 0
		}
	}), Q.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = Q.find.attr(e, "value");
					return null != t ? t : Q.trim(Q.text(e))
				}
			},
			select: {
				get: function(e) {
					for (var t, n, i = e.options, s = e.selectedIndex, r = "select-one" === e.type || 0 > s, o = r ? null : [], a = r ? s + 1 : i.length, l = 0 > s ? a : r ? s : 0; a > l; l++)
						if (n = i[l], !(!n.selected && l !== s || (Y.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Q.nodeName(n.parentNode, "optgroup"))) {
							if (t = Q(n).val(), r) return t;
							o.push(t)
						}
					return o
				},
				set: function(e, t) {
					for (var n, i, s = e.options, r = Q.makeArray(t), o = s.length; o--;) i = s[o], (i.selected = Q.inArray(i.value, r) >= 0) && (n = !0);
					return n || (e.selectedIndex = -1), r
				}
			}
		}
	}), Q.each(["radio", "checkbox"], function() {
		Q.valHooks[this] = {
			set: function(e, t) {
				return Q.isArray(t) ? e.checked = Q.inArray(Q(e).val(), t) >= 0 : void 0
			}
		}, Y.checkOn || (Q.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	}), Q.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		Q.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), Q.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, i) {
			return this.on(t, e, n, i)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var at = Q.now(),
		lt = /\?/;
	Q.parseJSON = function(e) {
		return JSON.parse(e + "")
	}, Q.parseXML = function(e) {
		var t, n;
		if (!e || "string" != typeof e) return null;
		try {
			n = new DOMParser, t = n.parseFromString(e, "text/xml")
		} catch (e) {
			t = void 0
		}
		return (!t || t.getElementsByTagName("parsererror").length) && Q.error("Invalid XML: " + e), t
	};
	var ct = /#.*$/,
		dt = /([?&])_=[^&]*/,
		ut = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		pt = /^(?:GET|HEAD)$/,
		ft = /^\/\//,
		mt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		gt = {},
		vt = {},
		yt = "*/".concat("*"),
		bt = e.location.href,
		wt = mt.exec(bt.toLowerCase()) || [];
	Q.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: bt,
			type: "GET",
			isLocal: ht.test(wt[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": yt,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": Q.parseJSON,
				"text xml": Q.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? I(I(e, Q.ajaxSettings), t) : I(Q.ajaxSettings, e)
		},
		ajaxPrefilter: N(gt),
		ajaxTransport: N(vt),
		ajax: function(e, t) {
			function n(e, t, n, o) {
				var l, d, v, y, w, x = t;
				2 !== b && (b = 2, a && clearTimeout(a), i = void 0, r = o || "", S.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (y = P(u, S, n)), y = R(u, y, S, l), l ? (u.ifModified && (w = S.getResponseHeader("Last-Modified"), w && (Q.lastModified[s] = w), (w = S.getResponseHeader("etag")) && (Q.etag[s] = w)), 204 === e || "HEAD" === u.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = y.state, d = y.data, v = y.error, l = !v)) : (v = x, (e || !x) && (x = "error", 0 > e && (e = 0))), S.status = e, S.statusText = (t || x) + "", l ? f.resolveWith(h, [d, x, S]) : f.rejectWith(h, [S, x, v]), S.statusCode(g), g = void 0, c && p.trigger(l ? "ajaxSuccess" : "ajaxError", [S, u, l ? d : v]), m.fireWith(h, [S, x]), c && (p.trigger("ajaxComplete", [S, u]), --Q.active || Q.event.trigger("ajaxStop")))
			}
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var i, s, r, o, a, l, c, d, u = Q.ajaxSetup({}, t),
				h = u.context || u,
				p = u.context && (h.nodeType || h.jquery) ? Q(h) : Q.event,
				f = Q.Deferred(),
				m = Q.Callbacks("once memory"),
				g = u.statusCode || {},
				v = {},
				y = {},
				b = 0,
				w = "canceled",
				S = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === b) {
							if (!o)
								for (o = {}; t = ut.exec(r);) o[t[1].toLowerCase()] = t[2];
							t = o[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === b ? r : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return b || (e = y[n] = y[n] || e, v[e] = t), this
					},
					overrideMimeType: function(e) {
						return b || (u.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (2 > b)
								for (t in e) g[t] = [g[t], e[t]];
							else S.always(e[S.status]);
						return this
					},
					abort: function(e) {
						var t = e || w;
						return i && i.abort(t), n(0, t), this
					}
				};
			if (f.promise(S).complete = m.add, S.success = S.done, S.error = S.fail, u.url = ((e || u.url || bt) + "").replace(ct, "").replace(ft, wt[1] + "//"), u.type = t.method || t.type || u.method || u.type, u.dataTypes = Q.trim(u.dataType || "*").toLowerCase().match(he) || [""], null == u.crossDomain && (l = mt.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] === wt[1] && l[2] === wt[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (wt[3] || ("http:" === wt[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = Q.param(u.data, u.traditional)), H(gt, u, t, S), 2 === b) return S;
			c = Q.event && u.global, c && 0 == Q.active++ && Q.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !pt.test(u.type), s = u.url, u.hasContent || (u.data && (s = u.url += (lt.test(s) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (u.url = dt.test(s) ? s.replace(dt, "$1_=" + at++) : s + (lt.test(s) ? "&" : "?") + "_=" + at++)), u.ifModified && (Q.lastModified[s] && S.setRequestHeader("If-Modified-Since", Q.lastModified[s]), Q.etag[s] && S.setRequestHeader("If-None-Match", Q.etag[s])), (u.data && u.hasContent && !1 !== u.contentType || t.contentType) && S.setRequestHeader("Content-Type", u.contentType), S.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + yt + "; q=0.01" : "") : u.accepts["*"]);
			for (d in u.headers) S.setRequestHeader(d, u.headers[d]);
			if (u.beforeSend && (!1 === u.beforeSend.call(h, S, u) || 2 === b)) return S.abort();
			w = "abort";
			for (d in {
					success: 1,
					error: 1,
					complete: 1
				}) S[d](u[d]);
			if (i = H(vt, u, t, S)) {
				S.readyState = 1, c && p.trigger("ajaxSend", [S, u]), u.async && u.timeout > 0 && (a = setTimeout(function() {
					S.abort("timeout")
				}, u.timeout));
				try {
					b = 1, i.send(v, n)
				} catch (e) {
					if (!(2 > b)) throw e;
					n(-1, e)
				}
			} else n(-1, "No Transport");
			return S
		},
		getJSON: function(e, t, n) {
			return Q.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return Q.get(e, void 0, t, "script")
		}
	}), Q.each(["get", "post"], function(e, t) {
		Q[t] = function(e, n, i, s) {
			return Q.isFunction(n) && (s = s || i, i = n, n = void 0), Q.ajax({
				url: e,
				type: t,
				dataType: s,
				data: n,
				success: i
			})
		}
	}), Q._evalUrl = function(e) {
		return Q.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			throws: !0
		})
	}, Q.fn.extend({
		wrapAll: function(e) {
			var t;
			return Q.isFunction(e) ? this.each(function(t) {
				Q(this).wrapAll(e.call(this, t))
			}) : (this[0] && (t = Q(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
				for (var e = this; e.firstElementChild;) e = e.firstElementChild;
				return e
			}).append(this)), this)
		},
		wrapInner: function(e) {
			return this.each(Q.isFunction(e) ? function(t) {
				Q(this).wrapInner(e.call(this, t))
			} : function() {
				var t = Q(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = Q.isFunction(e);
			return this.each(function(n) {
				Q(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				Q.nodeName(this, "body") || Q(this).replaceWith(this.childNodes)
			}).end()
		}
	}), Q.expr.filters.hidden = function(e) {
		return e.offsetWidth <= 0 && e.offsetHeight <= 0
	}, Q.expr.filters.visible = function(e) {
		return !Q.expr.filters.hidden(e)
	};
	var St = /%20/g,
		xt = /\[\]$/,
		_t = /\r?\n/g,
		Ct = /^(?:submit|button|image|reset|file)$/i,
		Et = /^(?:input|select|textarea|keygen)/i;
	Q.param = function(e, t) {
		var n, i = [],
			s = function(e, t) {
				t = Q.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (void 0 === t && (t = Q.ajaxSettings && Q.ajaxSettings.traditional), Q.isArray(e) || e.jquery && !Q.isPlainObject(e)) Q.each(e, function() {
			s(this.name, this.value)
		});
		else
			for (n in e) O(n, e[n], t, s);
		return i.join("&").replace(St, "+")
	}, Q.fn.extend({
		serialize: function() {
			return Q.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = Q.prop(this, "elements");
				return e ? Q.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !Q(this).is(":disabled") && Et.test(this.nodeName) && !Ct.test(e) && (this.checked || !_e.test(e))
			}).map(function(e, t) {
				var n = Q(this).val();
				return null == n ? null : Q.isArray(n) ? Q.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(_t, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(_t, "\r\n")
				}
			}).get()
		}
	}), Q.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest
		} catch (e) {}
	};
	var Lt = 0,
		Tt = {},
		kt = {
			0: 200,
			1223: 204
		},
		At = Q.ajaxSettings.xhr();
	e.attachEvent && e.attachEvent("onunload", function() {
		for (var e in Tt) Tt[e]()
	}), Y.cors = !!At && "withCredentials" in At, Y.ajax = At = !!At, Q.ajaxTransport(function(e) {
		var t;
		return Y.cors || At && !e.crossDomain ? {
			send: function(n, i) {
				var s, r = e.xhr(),
					o = ++Lt;
				if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
					for (s in e.xhrFields) r[s] = e.xhrFields[s];
				e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
				for (s in n) r.setRequestHeader(s, n[s]);
				t = function(e) {
					return function() {
						t && (delete Tt[o], t = r.onload = r.onerror = null, "abort" === e ? r.abort() : "error" === e ? i(r.status, r.statusText) : i(kt[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {
							text: r.responseText
						} : void 0, r.getAllResponseHeaders()))
					}
				}, r.onload = t(), r.onerror = t("error"), t = Tt[o] = t("abort");
				try {
					r.send(e.hasContent && e.data || null)
				} catch (e) {
					if (t) throw e
				}
			},
			abort: function() {
				t && t()
			}
		} : void 0
	}), Q.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return Q.globalEval(e), e
			}
		}
	}), Q.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), Q.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var t, n;
			return {
				send: function(i, s) {
					t = Q("<script>").prop({
						async: !0,
						charset: e.scriptCharset,
						src: e.url
					}).on("load error", n = function(e) {
						t.remove(), n = null, e && s("error" === e.type ? 404 : 200, e.type)
					}), J.head.appendChild(t[0])
				},
				abort: function() {
					n && n()
				}
			}
		}
	});
	var Mt = [],
		jt = /(=)\?(?=&|$)|\?\?/;
	Q.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Mt.pop() || Q.expando + "_" + at++;
			return this[e] = !0, e
		}
	}), Q.ajaxPrefilter("json jsonp", function(t, n, i) {
		var s, r, o, a = !1 !== t.jsonp && (jt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && jt.test(t.data) && "data");
		return a || "jsonp" === t.dataTypes[0] ? (s = t.jsonpCallback = Q.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(jt, "$1" + s) : !1 !== t.jsonp && (t.url += (lt.test(t.url) ? "&" : "?") + t.jsonp + "=" + s), t.converters["script json"] = function() {
			return o || Q.error(s + " was not called"), o[0]
		}, t.dataTypes[0] = "json", r = e[s], e[s] = function() {
			o = arguments
		}, i.always(function() {
			e[s] = r, t[s] && (t.jsonpCallback = n.jsonpCallback, Mt.push(s)), o && Q.isFunction(r) && r(o[0]), o = r = void 0
		}), "script") : void 0
	}), Q.parseHTML = function(e, t, n) {
		if (!e || "string" != typeof e) return null;
		"boolean" == typeof t && (n = t, t = !1), t = t || J;
		var i = oe.exec(e),
			s = !n && [];
		return i ? [t.createElement(i[1])] : (i = Q.buildFragment([e], t, s), s && s.length && Q(s).remove(), Q.merge([], i.childNodes))
	};
	var qt = Q.fn.load;
	Q.fn.load = function(e, t, n) {
		if ("string" != typeof e && qt) return qt.apply(this, arguments);
		var i, s, r, o = this,
			a = e.indexOf(" ");
		return a >= 0 && (i = Q.trim(e.slice(a)), e = e.slice(0, a)), Q.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (s = "POST"), o.length > 0 && Q.ajax({
			url: e,
			type: s,
			dataType: "html",
			data: t
		}).done(function(e) {
			r = arguments, o.html(i ? Q("<div>").append(Q.parseHTML(e)).find(i) : e)
		}).complete(n && function(e, t) {
			o.each(n, r || [e.responseText, t, e])
		}), this
	}, Q.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		Q.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), Q.expr.filters.animated = function(e) {
		return Q.grep(Q.timers, function(t) {
			return e === t.elem
		}).length
	};
	var Dt = e.document.documentElement;
	Q.offset = {
		setOffset: function(e, t, n) {
			var i, s, r, o, a, l, c, d = Q.css(e, "position"),
				u = Q(e),
				h = {};
			"static" === d && (e.style.position = "relative"), a = u.offset(), r = Q.css(e, "top"), l = Q.css(e, "left"), c = ("absolute" === d || "fixed" === d) && (r + l).indexOf("auto") > -1, c ? (i = u.position(), o = i.top, s = i.left) : (o = parseFloat(r) || 0, s = parseFloat(l) || 0), Q.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (h.top = t.top - a.top + o), null != t.left && (h.left = t.left - a.left + s), "using" in t ? t.using.call(e, h) : u.css(h)
		}
	}, Q.fn.extend({
		offset: function(e) {
			if (arguments.length) return void 0 === e ? this : this.each(function(t) {
				Q.offset.setOffset(this, e, t)
			});
			var t, n, i = this[0],
				s = {
					top: 0,
					left: 0
				},
				r = i && i.ownerDocument;
			return r ? (t = r.documentElement, Q.contains(t, i) ? (typeof i.getBoundingClientRect !== Ce && (s = i.getBoundingClientRect()), n = F(r), {
				top: s.top + n.pageYOffset - t.clientTop,
				left: s.left + n.pageXOffset - t.clientLeft
			}) : s) : void 0
		},
		position: function() {
			if (this[0]) {
				var e, t, n = this[0],
					i = {
						top: 0,
						left: 0
					};
				return "fixed" === Q.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Q.nodeName(e[0], "html") || (i = e.offset()), i.top += Q.css(e[0], "borderTopWidth", !0), i.left += Q.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - i.top - Q.css(n, "marginTop", !0),
					left: t.left - i.left - Q.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent || Dt; e && !Q.nodeName(e, "html") && "static" === Q.css(e, "position");) e = e.offsetParent;
				return e || Dt
			})
		}
	}), Q.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(t, n) {
		var i = "pageYOffset" === n;
		Q.fn[t] = function(s) {
			return me(this, function(t, s, r) {
				var o = F(t);
				return void 0 === r ? o ? o[n] : t[s] : void(o ? o.scrollTo(i ? e.pageXOffset : r, i ? r : e.pageYOffset) : t[s] = r)
			}, t, s, arguments.length, null)
		}
	}), Q.each(["top", "left"], function(e, t) {
		Q.cssHooks[t] = x(Y.pixelPosition, function(e, n) {
			return n ? (n = S(e, t), Fe.test(n) ? Q(e).position()[t] + "px" : n) : void 0
		})
	}), Q.each({
		Height: "height",
		Width: "width"
	}, function(e, t) {
		Q.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function(n, i) {
			Q.fn[i] = function(i, s) {
				var r = arguments.length && (n || "boolean" != typeof i),
					o = n || (!0 === i || !0 === s ? "margin" : "border");
				return me(this, function(t, n, i) {
					var s;
					return Q.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === i ? Q.css(t, n, o) : Q.style(t, n, i, o)
				}, t, r ? i : void 0, r, null)
			}
		})
	}), Q.fn.size = function() {
		return this.length
	}, Q.fn.andSelf = Q.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return Q
	});
	var Bt = e.jQuery,
		Nt = e.$;
	return Q.noConflict = function(t) {
		return e.$ === Q && (e.$ = Nt), t && e.jQuery === Q && (e.jQuery = Bt), Q
	}, typeof t === Ce && (e.jQuery = e.$ = Q), Q
}),
function() {
	var e = !1;
	window.JQClass = function() {}, JQClass.classes = {}, JQClass.extend = function t(n) {
		function i() {
			!e && this._init && this._init.apply(this, arguments)
		}
		var s = this.prototype;
		e = !0;
		var r = new this;
		e = !1;
		for (var o in n) r[o] = "function" == typeof n[o] && "function" == typeof s[o] ? function(e, t) {
			return function() {
				var n = this._super;
				this._super = function(t) {
					return s[e].apply(this, t || [])
				};
				var i = t.apply(this, arguments);
				return this._super = n, i
			}
		}(o, n[o]) : n[o];
		return i.prototype = r, i.prototype.constructor = i, i.extend = t, i
	}
}(),
function($) {
	function camelCase(e) {
		return e.replace(/-([a-z])/g, function(e, t) {
			return t.toUpperCase()
		})
	}
	JQClass.classes.JQPlugin = JQClass.extend({
		name: "plugin",
		defaultOptions: {},
		regionalOptions: {},
		_getters: [],
		_getMarker: function() {
			return "is-" + this.name
		},
		_init: function() {
			$.extend(this.defaultOptions, this.regionalOptions && this.regionalOptions[""] || {});
			var e = camelCase(this.name);
			$[e] = this, $.fn[e] = function(t) {
				var n = Array.prototype.slice.call(arguments, 1);
				return $[e]._isNotChained(t, n) ? $[e][t].apply($[e], [this[0]].concat(n)) : this.each(function() {
					if ("string" == typeof t) {
						if ("_" === t[0] || !$[e][t]) throw "Unknown method: " + t;
						$[e][t].apply($[e], [this].concat(n))
					} else $[e]._attach(this, t)
				})
			}
		},
		setDefaults: function(e) {
			$.extend(this.defaultOptions, e || {})
		},
		_isNotChained: function(e, t) {
			return "option" === e && (0 === t.length || 1 === t.length && "string" == typeof t[0]) || $.inArray(e, this._getters) > -1
		},
		_attach: function(e, t) {
			if (e = $(e), !e.hasClass(this._getMarker())) {
				e.addClass(this._getMarker()), t = $.extend({}, this.defaultOptions, this._getMetadata(e), t || {});
				var n = $.extend({
					name: this.name,
					elem: e,
					options: t
				}, this._instSettings(e, t));
				e.data(this.name, n), this._postAttach(e, n), this.option(e, t)
			}
		},
		_instSettings: function(e, t) {
			return {}
		},
		_postAttach: function(e, t) {},
		_getMetadata: function(d) {
			try {
				var f = d.data(this.name.toLowerCase()) || "";
				f = f.replace(/'/g, '"'), f = f.replace(/([a-zA-Z0-9]+):/g, function(e, t, n) {
					var i = f.substring(0, n).match(/"/g);
					return i && i.length % 2 != 0 ? t + ":" : '"' + t + '":'
				}), f = $.parseJSON("{" + f + "}");
				for (var g in f) {
					var h = f[g];
					"string" == typeof h && h.match(/^new Date\((.*)\)$/) && (f[g] = eval(h))
				}
				return f
			} catch (e) {
				return {}
			}
		},
		_getInst: function(e) {
			return $(e).data(this.name) || {}
		},
		option: function(e, t, n) {
			e = $(e);
			var i = e.data(this.name);
			if (!t || "string" == typeof t && null == n) {
				var s = (i || {}).options;
				return s && t ? s[t] : s
			}
			if (e.hasClass(this._getMarker())) {
				var s = t || {};
				"string" == typeof t && (s = {}, s[t] = n), this._optionsChanged(e, i, s), $.extend(i.options, s)
			}
		},
		_optionsChanged: function(e, t, n) {},
		destroy: function(e) {
			e = $(e), e.hasClass(this._getMarker()) && (this._preDestroy(e, this._getInst(e)), e.removeData(this.name).removeClass(this._getMarker()))
		},
		_preDestroy: function(e, t) {}
	}), $.JQPlugin = {
		createPlugin: function(e, t) {
			"object" == typeof e && (t = e, e = "JQPlugin"), e = camelCase(e);
			var n = camelCase(t.name);
			JQClass.classes[n] = JQClass.classes[e].extend(t), new JQClass.classes[n]
		}
	}
}(jQuery),
function(e) {
	"use strict";
	var t = "countdown";
	e.JQPlugin.createPlugin({
		name: t,
		defaultOptions: {
			until: null,
			since: null,
			timezone: null,
			serverSync: null,
			format: "dHMS",
			layout: "",
			compact: !1,
			padZeroes: !1,
			significant: 0,
			description: "",
			expiryUrl: "",
			expiryText: "",
			alwaysExpire: !1,
			onExpiry: null,
			onTick: null,
			tickInterval: 1
		},
		regionalOptions: {
			"": {
				labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
				labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
				compactLabels: ["y", "m", "w", "d"],
				whichLabels: null,
				digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
				timeSeparator: ":",
				isRTL: !1
			}
		},
		_rtlClass: t + "-rtl",
		_sectionClass: t + "-section",
		_amountClass: t + "-amount",
		_periodClass: t + "-period",
		_rowClass: t + "-row",
		_holdingClass: t + "-holding",
		_showClass: t + "-show",
		_descrClass: t + "-descr",
		_timerElems: [],
		_init: function() {
			function t(e) {
				var a = e < 1e12 ? s ? window.performance.now() + window.performance.timing.navigationStart : i() : e || i();
				a - o >= 1e3 && (n._updateElems(), o = a), r(t)
			}
			var n = this;
			this._super(), this._serverSyncs = [];
			var i = "function" == typeof Date.now ? Date.now : function() {
					return (new Date).getTime()
				},
				s = window.performance && "function" == typeof window.performance.now,
				r = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null,
				o = 0;
			!r || e.noRequestAnimationFrame ? (e.noRequestAnimationFrame = null, e.countdown._timer = setInterval(function() {
				n._updateElems()
			}, 1e3)) : (o = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || i(), r(t))
		},
		UTCDate: function(e, t, n, i, s, r, o, a) {
			"object" == typeof t && t instanceof Date && (a = t.getMilliseconds(), o = t.getSeconds(), r = t.getMinutes(), s = t.getHours(), i = t.getDate(), n = t.getMonth(), t = t.getFullYear());
			var l = new Date;
			return l.setUTCFullYear(t), l.setUTCDate(1), l.setUTCMonth(n || 0), l.setUTCDate(i || 1), l.setUTCHours(s || 0), l.setUTCMinutes((r || 0) - (Math.abs(e) < 30 ? 60 * e : e)), l.setUTCSeconds(o || 0), l.setUTCMilliseconds(a || 0), l
		},
		periodsToSeconds: function(e) {
			return 31557600 * e[0] + 2629800 * e[1] + 604800 * e[2] + 86400 * e[3] + 3600 * e[4] + 60 * e[5] + e[6]
		},
		resync: function() {
			var t = this;
			e("." + this._getMarker()).each(function() {
				var n = e.data(this, t.name);
				if (n.options.serverSync) {
					for (var i = null, s = 0; s < t._serverSyncs.length; s++)
						if (t._serverSyncs[s][0] === n.options.serverSync) {
							i = t._serverSyncs[s];
							break
						}
					if (t._eqNull(i[2])) {
						var r = e.isFunction(n.options.serverSync) ? n.options.serverSync.apply(this, []) : null;
						i[2] = (r ? (new Date).getTime() - r.getTime() : 0) - i[1]
					}
					n._since && n._since.setMilliseconds(n._since.getMilliseconds() + i[2]), n._until.setMilliseconds(n._until.getMilliseconds() + i[2])
				}
			});
			for (var n = 0; n < t._serverSyncs.length; n++) t._eqNull(t._serverSyncs[n][2]) || (t._serverSyncs[n][1] += t._serverSyncs[n][2], delete t._serverSyncs[n][2])
		},
		_instSettings: function(e, t) {
			return {
				_periods: [0, 0, 0, 0, 0, 0, 0]
			}
		},
		_addElem: function(e) {
			this._hasElem(e) || this._timerElems.push(e)
		},
		_hasElem: function(t) {
			return e.inArray(t, this._timerElems) > -1
		},
		_removeElem: function(t) {
			this._timerElems = e.map(this._timerElems, function(e) {
				return e === t ? null : e
			})
		},
		_updateElems: function() {
			for (var e = this._timerElems.length - 1; e >= 0; e--) this._updateCountdown(this._timerElems[e])
		},
		_optionsChanged: function(t, n, i) {
			i.layout && (i.layout = i.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")), this._resetExtraLabels(n.options, i);
			var s = n.options.timezone !== i.timezone;
			e.extend(n.options, i), this._adjustSettings(t, n, !this._eqNull(i.until) || !this._eqNull(i.since) || s);
			var r = new Date;
			(n._since && n._since < r || n._until && n._until > r) && this._addElem(t[0]), this._updateCountdown(t, n)
		},
		_updateCountdown: function(t, n) {
			if (t = t.jquery ? t : e(t), n = n || this._getInst(t)) {
				if (t.html(this._generateHTML(n)).toggleClass(this._rtlClass, n.options.isRTL), "pause" !== n._hold && e.isFunction(n.options.onTick)) {
					var i = "lap" !== n._hold ? n._periods : this._calculatePeriods(n, n._show, n.options.significant, new Date);
					1 !== n.options.tickInterval && this.periodsToSeconds(i) % n.options.tickInterval != 0 || n.options.onTick.apply(t[0], [i])
				}
				if ("pause" !== n._hold && (n._since ? n._now.getTime() < n._since.getTime() : n._now.getTime() >= n._until.getTime()) && !n._expiring) {
					if (n._expiring = !0, this._hasElem(t[0]) || n.options.alwaysExpire) {
						if (this._removeElem(t[0]), e.isFunction(n.options.onExpiry) && n.options.onExpiry.apply(t[0], []), n.options.expiryText) {
							var s = n.options.layout;
							n.options.layout = n.options.expiryText, this._updateCountdown(t[0], n), n.options.layout = s
						}
						n.options.expiryUrl && (window.location = n.options.expiryUrl)
					}
					n._expiring = !1
				} else "pause" === n._hold && this._removeElem(t[0])
			}
		},
		_resetExtraLabels: function(e, t) {
			var n = null;
			for (n in t) n.match(/[Ll]abels[02-9]|compactLabels1/) && (e[n] = t[n]);
			for (n in e) n.match(/[Ll]abels[02-9]|compactLabels1/) && void 0 === t[n] && (e[n] = null)
		},
		_eqNull: function(e) {
			return void 0 === e || null === e
		},
		_adjustSettings: function(t, n, i) {
			for (var s = null, r = 0; r < this._serverSyncs.length; r++)
				if (this._serverSyncs[r][0] === n.options.serverSync) {
					s = this._serverSyncs[r][1];
					break
				}
			var o = null,
				a = null;
			if (this._eqNull(s)) {
				var l = e.isFunction(n.options.serverSync) ? n.options.serverSync.apply(t[0], []) : null;
				o = new Date, a = l ? o.getTime() - l.getTime() : 0, this._serverSyncs.push([n.options.serverSync, a])
			} else o = new Date, a = n.options.serverSync ? s : 0;
			var c = n.options.timezone;
			c = this._eqNull(c) ? -o.getTimezoneOffset() : c, (i || !i && this._eqNull(n._until) && this._eqNull(n._since)) && (n._since = n.options.since, this._eqNull(n._since) || (n._since = this.UTCDate(c, this._determineTime(n._since, null)), n._since && a && n._since.setMilliseconds(n._since.getMilliseconds() + a)), n._until = this.UTCDate(c, this._determineTime(n.options.until, o)), a && n._until.setMilliseconds(n._until.getMilliseconds() + a)), n._show = this._determineShow(n)
		},
		_preDestroy: function(e, t) {
			this._removeElem(e[0]), e.empty()
		},
		pause: function(e) {
			this._hold(e, "pause")
		},
		lap: function(e) {
			this._hold(e, "lap")
		},
		resume: function(e) {
			this._hold(e, null)
		},
		toggle: function(t) {
			this[(e.data(t, this.name) || {})._hold ? "resume" : "pause"](t)
		},
		toggleLap: function(t) {
			this[(e.data(t, this.name) || {})._hold ? "resume" : "lap"](t)
		},
		_hold: function(t, n) {
			var i = e.data(t, this.name);
			if (i) {
				if ("pause" === i._hold && !n) {
					i._periods = i._savePeriods;
					var s = i._since ? "-" : "+";
					i[i._since ? "_since" : "_until"] = this._determineTime(s + i._periods[0] + "y" + s + i._periods[1] + "o" + s + i._periods[2] + "w" + s + i._periods[3] + "d" + s + i._periods[4] + "h" + s + i._periods[5] + "m" + s + i._periods[6] + "s"), this._addElem(t)
				}
				i._hold = n, i._savePeriods = "pause" === n ? i._periods : null, e.data(t, this.name, i), this._updateCountdown(t, i)
			}
		},
		getTimes: function(t) {
			var n = e.data(t, this.name);
			return n ? "pause" === n._hold ? n._savePeriods : n._hold ? this._calculatePeriods(n, n._show, n.options.significant, new Date) : n._periods : null
		},
		_determineTime: function(e, t) {
			var n = this,
				i = this._eqNull(e) ? t : "string" == typeof e ? function(e) {
					e = e.toLowerCase();
					for (var t = new Date, i = t.getFullYear(), s = t.getMonth(), r = t.getDate(), o = t.getHours(), a = t.getMinutes(), l = t.getSeconds(), c = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g, d = c.exec(e); d;) {
						switch (d[2] || "s") {
							case "s":
								l += parseInt(d[1], 10);
								break;
							case "m":
								a += parseInt(d[1], 10);
								break;
							case "h":
								o += parseInt(d[1], 10);
								break;
							case "d":
								r += parseInt(d[1], 10);
								break;
							case "w":
								r += 7 * parseInt(d[1], 10);
								break;
							case "o":
								s += parseInt(d[1], 10), r = Math.min(r, n._getDaysInMonth(i, s));
								break;
							case "y":
								i += parseInt(d[1], 10), r = Math.min(r, n._getDaysInMonth(i, s))
						}
						d = c.exec(e)
					}
					return new Date(i, s, r, o, a, l, 0)
				}(e) : "number" == typeof e ? function(e) {
					var t = new Date;
					return t.setTime(t.getTime() + 1e3 * e), t
				}(e) : e;
			return i && i.setMilliseconds(0), i
		},
		_getDaysInMonth: function(e, t) {
			return 32 - new Date(e, t, 32).getDate()
		},
		_normalLabels: function(e) {
			return e
		},
		_generateHTML: function(t) {
			var n = this;
			t._periods = t._hold ? t._periods : this._calculatePeriods(t, t._show, t.options.significant, new Date);
			var i = !1,
				s = 0,
				r = t.options.significant,
				o = e.extend({}, t._show),
				a = null;
			for (a = 0; a <= 6; a++) i = i || "?" === t._show[a] && t._periods[a] > 0, o[a] = "?" !== t._show[a] || i ? t._show[a] : null, s += o[a] ? 1 : 0, r -= t._periods[a] > 0 ? 1 : 0;
			var l = [!1, !1, !1, !1, !1, !1, !1];
			for (a = 6; a >= 0; a--) t._show[a] && (t._periods[a] ? l[a] = !0 : (l[a] = r > 0, r--));
			var c = t.options.compact ? t.options.compactLabels : t.options.labels,
				d = t.options.whichLabels || this._normalLabels,
				u = function(e) {
					var i = t.options["compactLabels" + d(t._periods[e])];
					return o[e] ? n._translateDigits(t, t._periods[e]) + (i ? i[e] : c[e]) + " " : ""
				},
				h = t.options.padZeroes ? 2 : 1,
				p = function(e) {
					var i = t.options["labels" + d(t._periods[e])];
					return !t.options.significant && o[e] || t.options.significant && l[e] ? '<span class="' + n._sectionClass + '"><span class="' + n._amountClass + '">' + n._minDigits(t, t._periods[e], h) + '</span><span class="' + n._periodClass + '">' + (i ? i[e] : c[e]) + "</span></span>" : ""
				};
			return t.options.layout ? this._buildLayout(t, o, t.options.layout, t.options.compact, t.options.significant, l) : (t.options.compact ? '<span class="' + this._rowClass + " " + this._amountClass + (t._hold ? " " + this._holdingClass : "") + '">' + u(0) + u(1) + u(2) + u(3) + (o[4] ? this._minDigits(t, t._periods[4], 2) : "") + (o[5] ? (o[4] ? t.options.timeSeparator : "") + this._minDigits(t, t._periods[5], 2) : "") + (o[6] ? (o[4] || o[5] ? t.options.timeSeparator : "") + this._minDigits(t, t._periods[6], 2) : "") : '<span class="' + this._rowClass + " " + this._showClass + (t.options.significant || s) + (t._hold ? " " + this._holdingClass : "") + '">' + p(0) + p(1) + p(2) + p(3) + p(4) + p(5) + p(6)) + "</span>" + (t.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + '">' + t.options.description + "</span>" : "")
		},
		_buildLayout: function(t, n, i, s, r, o) {
			for (var a = t.options[s ? "compactLabels" : "labels"], l = t.options.whichLabels || this._normalLabels, c = function(e) {
					return (t.options[(s ? "compactLabels" : "labels") + l(t._periods[e])] || a)[e]
				}, d = function(e, n) {
					return t.options.digits[Math.floor(e / n) % 10]
				}, u = {
					desc: t.options.description,
					sep: t.options.timeSeparator,
					yl: c(0),
					yn: this._minDigits(t, t._periods[0], 1),
					ynn: this._minDigits(t, t._periods[0], 2),
					ynnn: this._minDigits(t, t._periods[0], 3),
					y1: d(t._periods[0], 1),
					y10: d(t._periods[0], 10),
					y100: d(t._periods[0], 100),
					y1000: d(t._periods[0], 1e3),
					ol: c(1),
					on: this._minDigits(t, t._periods[1], 1),
					onn: this._minDigits(t, t._periods[1], 2),
					onnn: this._minDigits(t, t._periods[1], 3),
					o1: d(t._periods[1], 1),
					o10: d(t._periods[1], 10),
					o100: d(t._periods[1], 100),
					o1000: d(t._periods[1], 1e3),
					wl: c(2),
					wn: this._minDigits(t, t._periods[2], 1),
					wnn: this._minDigits(t, t._periods[2], 2),
					wnnn: this._minDigits(t, t._periods[2], 3),
					w1: d(t._periods[2], 1),
					w10: d(t._periods[2], 10),
					w100: d(t._periods[2], 100),
					w1000: d(t._periods[2], 1e3),
					dl: c(3),
					dn: this._minDigits(t, t._periods[3], 1),
					dnn: this._minDigits(t, t._periods[3], 2),
					dnnn: this._minDigits(t, t._periods[3], 3),
					d1: d(t._periods[3], 1),
					d10: d(t._periods[3], 10),
					d100: d(t._periods[3], 100),
					d1000: d(t._periods[3], 1e3),
					hl: c(4),
					hn: this._minDigits(t, t._periods[4], 1),
					hnn: this._minDigits(t, t._periods[4], 2),
					hnnn: this._minDigits(t, t._periods[4], 3),
					h1: d(t._periods[4], 1),
					h10: d(t._periods[4], 10),
					h100: d(t._periods[4], 100),
					h1000: d(t._periods[4], 1e3),
					ml: c(5),
					mn: this._minDigits(t, t._periods[5], 1),
					mnn: this._minDigits(t, t._periods[5], 2),
					mnnn: this._minDigits(t, t._periods[5], 3),
					m1: d(t._periods[5], 1),
					m10: d(t._periods[5], 10),
					m100: d(t._periods[5], 100),
					m1000: d(t._periods[5], 1e3),
					sl: c(6),
					sn: this._minDigits(t, t._periods[6], 1),
					snn: this._minDigits(t, t._periods[6], 2),
					snnn: this._minDigits(t, t._periods[6], 3),
					s1: d(t._periods[6], 1),
					s10: d(t._periods[6], 10),
					s100: d(t._periods[6], 100),
					s1000: d(t._periods[6], 1e3)
				}, h = i, p = 0; p <= 6; p++) {
				var f = "yowdhms".charAt(p),
					m = new RegExp("\\{" + f + "<\\}([\\s\\S]*)\\{" + f + ">\\}", "g");
				h = h.replace(m, !r && n[p] || r && o[p] ? "$1" : "")
			}
			return e.each(u, function(e, t) {
				var n = new RegExp("\\{" + e + "\\}", "g");
				h = h.replace(n, t)
			}), h
		},
		_minDigits: function(e, t, n) {
			return t = "" + t, t.length >= n ? this._translateDigits(e, t) : (t = "0000000000" + t, this._translateDigits(e, t.substr(t.length - n)))
		},
		_translateDigits: function(e, t) {
			return ("" + t).replace(/[0-9]/g, function(t) {
				return e.options.digits[t]
			})
		},
		_determineShow: function(e) {
			var t = e.options.format,
				n = [];
			return n[0] = t.match("y") ? "?" : t.match("Y") ? "!" : null, n[1] = t.match("o") ? "?" : t.match("O") ? "!" : null, n[2] = t.match("w") ? "?" : t.match("W") ? "!" : null, n[3] = t.match("d") ? "?" : t.match("D") ? "!" : null, n[4] = t.match("h") ? "?" : t.match("H") ? "!" : null, n[5] = t.match("m") ? "?" : t.match("M") ? "!" : null, n[6] = t.match("s") ? "?" : t.match("S") ? "!" : null, n
		},
		_calculatePeriods: function(e, t, n, i) {
			e._now = i, e._now.setMilliseconds(0);
			var s = new Date(e._now.getTime());
			e._since ? i.getTime() < e._since.getTime() ? e._now = i = s : i = e._since : (s.setTime(e._until.getTime()), i.getTime() > e._until.getTime() && (e._now = i = s));
			var r = [0, 0, 0, 0, 0, 0, 0];
			if (t[0] || t[1]) {
				var o = this._getDaysInMonth(i.getFullYear(), i.getMonth()),
					a = this._getDaysInMonth(s.getFullYear(), s.getMonth()),
					l = s.getDate() === i.getDate() || s.getDate() >= Math.min(o, a) && i.getDate() >= Math.min(o, a),
					c = function(e) {
						return 60 * (60 * e.getHours() + e.getMinutes()) + e.getSeconds()
					},
					d = Math.max(0, 12 * (s.getFullYear() - i.getFullYear()) + s.getMonth() - i.getMonth() + (s.getDate() < i.getDate() && !l || l && c(s) < c(i) ? -1 : 0));
				r[0] = t[0] ? Math.floor(d / 12) : 0, r[1] = t[1] ? d - 12 * r[0] : 0, i = new Date(i.getTime());
				var u = i.getDate() === o,
					h = this._getDaysInMonth(i.getFullYear() + r[0], i.getMonth() + r[1]);
				i.getDate() > h && i.setDate(h), i.setFullYear(i.getFullYear() + r[0]), i.setMonth(i.getMonth() + r[1]), u && i.setDate(h)
			}
			var p = Math.floor((s.getTime() - i.getTime()) / 1e3),
				f = null,
				m = function(e, n) {
					r[e] = t[e] ? Math.floor(p / n) : 0, p -= r[e] * n
				};
			if (m(2, 604800), m(3, 86400), m(4, 3600), m(5, 60), m(6, 1), p > 0 && !e._since) {
				var g = [1, 12, 4.3482, 7, 24, 60, 60],
					v = 6,
					y = 1;
				for (f = 6; f >= 0; f--) t[f] && (r[v] >= y && (r[v] = 0, p = 1), p > 0 && (r[f]++, p = 0, v = f, y = 1)), y *= g[f]
			}
			if (n)
				for (f = 0; f <= 6; f++) n && r[f] ? n-- : n || (r[f] = 0);
			return r
		}
	})
}(jQuery),
function(e) {
	"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	e.extend(e.fn, {
		validate: function(t) {
			if (!this.length) return void(t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
			var n = e.data(this[0], "validator");
			return n || (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", function(t) {
				n.settings.submitHandler && (n.submitButton = t.target), e(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (n.cancelSubmit = !0)
			}), this.on("submit.validate", function(t) {
				function i() {
					var i, s;
					return !n.settings.submitHandler || (n.submitButton && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), s = n.settings.submitHandler.call(n, n.currentForm, t), n.submitButton && i.remove(), void 0 !== s && s)
				}
				return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
			})), n)
		},
		valid: function() {
			var t, n, i;
			return e(this[0]).is("form") ? t = this.validate().form() : (i = [], t = !0, n = e(this[0].form).validate(), this.each(function() {
				(t = n.element(this) && t) || (i = i.concat(n.errorList))
			}), n.errorList = i), t
		},
		rules: function(t, n) {
			if (this.length) {
				var i, s, r, o, a, l, c = this[0];
				if (t) switch (i = e.data(c.form, "validator").settings, s = i.rules, r = e.validator.staticRules(c), t) {
					case "add":
						e.extend(r, e.validator.normalizeRule(n)), delete r.messages, s[c.name] = r, n.messages && (i.messages[c.name] = e.extend(i.messages[c.name], n.messages));
						break;
					case "remove":
						return n ? (l = {}, e.each(n.split(/\s/), function(t, n) {
							l[n] = r[n], delete r[n], "required" === n && e(c).removeAttr("aria-required")
						}), l) : (delete s[c.name], r)
				}
				return o = e.validator.normalizeRules(e.extend({}, e.validator.classRules(c), e.validator.attributeRules(c), e.validator.dataRules(c), e.validator.staticRules(c)), c), o.required && (a = o.required, delete o.required, o = e.extend({
					required: a
				}, o), e(c).attr("aria-required", "true")), o.remote && (a = o.remote, delete o.remote, o = e.extend(o, {
					remote: a
				})), o
			}
		}
	}), e.extend(e.expr[":"], {
		blank: function(t) {
			return !e.trim("" + e(t).val())
		},
		filled: function(t) {
			var n = e(t).val();
			return null !== n && !!e.trim("" + n)
		},
		unchecked: function(t) {
			return !e(t).prop("checked")
		}
	}), e.validator = function(t, n) {
		this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init()
	}, e.validator.format = function(t, n) {
		return 1 === arguments.length ? function() {
			var n = e.makeArray(arguments);
			return n.unshift(t), e.validator.format.apply(this, n)
		} : void 0 === n ? t : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function(e, n) {
			t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function() {
				return n
			})
		}), t)
	}, e.extend(e.validator, {
		defaults: {
			messages: {},
			groups: {},
			rules: {},
			errorClass: "error",
			pendingClass: "pending",
			validClass: "valid",
			errorElement: "label",
			focusCleanup: !1,
			focusInvalid: !0,
			errorContainer: e([]),
			errorLabelContainer: e([]),
			onsubmit: !0,
			ignore: ":hidden",
			ignoreTitle: !1,
			onfocusin: function(e) {
				this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)))
			},
			onfocusout: function(e) {
				this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
			},
			onkeyup: function(t, n) {
				var i = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
				9 === n.which && "" === this.elementValue(t) || -1 !== e.inArray(n.keyCode, i) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
			},
			onclick: function(e) {
				e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
			},
			highlight: function(t, n, i) {
				"radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) : e(t).addClass(n).removeClass(i)
			},
			unhighlight: function(t, n, i) {
				"radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) : e(t).removeClass(n).addClass(i)
			}
		},
		setDefaults: function(t) {
			e.extend(e.validator.defaults, t)
		},
		messages: {
			required: "This field is required.",
			remote: "Please fix this field.",
			email: "Please enter a valid email address.",
			url: "Please enter a valid URL.",
			date: "Please enter a valid date.",
			dateISO: "Please enter a valid date ( ISO ).",
			number: "Please enter a valid number.",
			digits: "Please enter only digits.",
			equalTo: "Please enter the same value again.",
			maxlength: e.validator.format("Please enter no more than {0} characters."),
			minlength: e.validator.format("Please enter at least {0} characters."),
			rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
			range: e.validator.format("Please enter a value between {0} and {1}."),
			max: e.validator.format("Please enter a value less than or equal to {0}."),
			min: e.validator.format("Please enter a value greater than or equal to {0}."),
			step: e.validator.format("Please enter a multiple of {0}.")
		},
		autoCreateRanges: !1,
		prototype: {
			init: function() {
				function t(t) {
					var n = e.data(this.form, "validator"),
						i = "on" + t.type.replace(/^validate/, ""),
						s = n.settings;
					s[i] && !e(this).is(s.ignore) && s[i].call(n, this, t)
				}
				this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
				var n, i = this.groups = {};
				e.each(this.settings.groups, function(t, n) {
					"string" == typeof n && (n = n.split(/\s/)), e.each(n, function(e, n) {
						i[n] = t
					})
				}), n = this.settings.rules, e.each(n, function(t, i) {
					n[t] = e.validator.normalizeRule(i)
				}), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), e(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
			},
			form: function() {
				return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
			},
			checkForm: function() {
				this.prepareForm();
				for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
				return this.valid()
			},
			element: function(t) {
				var n, i, s = this.clean(t),
					r = this.validationTargetFor(s),
					o = this,
					a = !0;
				return void 0 === r ? delete this.invalid[s.name] : (this.prepareElement(r), this.currentElements = e(r), i = this.groups[r.name], i && e.each(this.groups, function(e, t) {
					t === i && e !== r.name && (s = o.validationTargetFor(o.clean(o.findByName(e)))) && s.name in o.invalid && (o.currentElements.push(s), a = a && o.check(s))
				}), n = !1 !== this.check(r), a = a && n, this.invalid[r.name] = !n, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e(t).attr("aria-invalid", !n)), a
			},
			showErrors: function(t) {
				if (t) {
					var n = this;
					e.extend(this.errorMap, t), this.errorList = e.map(this.errorMap, function(e, t) {
						return {
							message: e,
							element: n.findByName(t)[0]
						}
					}), this.successList = e.grep(this.successList, function(e) {
						return !(e.name in t)
					})
				}
				this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
			},
			resetForm: function() {
				e.fn.resetForm && e(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
				var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
				this.resetElements(t)
			},
			resetElements: function(e) {
				var t;
				if (this.settings.unhighlight)
					for (t = 0; e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass);
				else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
			},
			numberOfInvalids: function() {
				return this.objectLength(this.invalid)
			},
			objectLength: function(e) {
				var t, n = 0;
				for (t in e) e[t] && n++;
				return n
			},
			hideErrors: function() {
				this.hideThese(this.toHide)
			},
			hideThese: function(e) {
				e.not(this.containers).text(""), this.addWrapper(e).hide()
			},
			valid: function() {
				return 0 === this.size()
			},
			size: function() {
				return this.errorList.length
			},
			focusInvalid: function() {
				if (this.settings.focusInvalid) try {
					e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
				} catch (e) {}
			},
			findLastActive: function() {
				var t = this.lastActive;
				return t && 1 === e.grep(this.errorList, function(e) {
					return e.element.name === t.name
				}).length && t
			},
			elements: function() {
				var t = this,
					n = {};
				return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
					var i = this.name || e(this).attr("name");
					return !i && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0]), !(i in n || !t.objectLength(e(this).rules())) && (n[i] = !0, !0)
				})
			},
			clean: function(t) {
				return e(t)[0]
			},
			errors: function() {
				var t = this.settings.errorClass.split(" ").join(".");
				return e(this.settings.errorElement + "." + t, this.errorContext)
			},
			resetInternals: function() {
				this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([])
			},
			reset: function() {
				this.resetInternals(), this.currentElements = e([])
			},
			prepareForm: function() {
				this.reset(), this.toHide = this.errors().add(this.containers)
			},
			prepareElement: function(e) {
				this.reset(), this.toHide = this.errorsFor(e)
			},
			elementValue: function(t) {
				var n, i, s = e(t),
					r = t.type;
				return "radio" === r || "checkbox" === r ? this.findByName(t.name).filter(":checked").val() : "number" === r && void 0 !== t.validity ? t.validity.badInput ? "NaN" : s.val() : (n = t.hasAttribute("contenteditable") ? s.text() : s.val(), "file" === r ? "C:\\fakepath\\" === n.substr(0, 12) ? n.substr(12) : (i = n.lastIndexOf("/"), i >= 0 ? n.substr(i + 1) : (i = n.lastIndexOf("\\"), i >= 0 ? n.substr(i + 1) : n)) : "string" == typeof n ? n.replace(/\r/g, "") : n)
			},
			check: function(t) {
				t = this.validationTargetFor(this.clean(t));
				var n, i, s, r = e(t).rules(),
					o = e.map(r, function(e, t) {
						return t
					}).length,
					a = !1,
					l = this.elementValue(t);
				if ("function" == typeof r.normalizer) {
					if ("string" != typeof(l = r.normalizer.call(t, l))) throw new TypeError("The normalizer should return a string value.");
					delete r.normalizer
				}
				for (i in r) {
					s = {
						method: i,
						parameters: r[i]
					};
					try {
						if ("dependency-mismatch" === (n = e.validator.methods[i].call(this, l, t, s.parameters)) && 1 === o) {
							a = !0;
							continue
						}
						if (a = !1, "pending" === n) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
						if (!n) return this.formatAndAdd(t, s), !1
					} catch (e) {
						throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + s.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + s.method + "' method."), e
					}
				}
				if (!a) return this.objectLength(r) && this.successList.push(t), !0
			},
			customDataMessage: function(t, n) {
				return e(t).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || e(t).data("msg")
			},
			customMessage: function(e, t) {
				var n = this.settings.messages[e];
				return n && (n.constructor === String ? n : n[t])
			},
			findDefined: function() {
				for (var e = 0; e < arguments.length; e++)
					if (void 0 !== arguments[e]) return arguments[e]
			},
			defaultMessage: function(t, n) {
				var i = this.findDefined(this.customMessage(t.name, n.method), this.customDataMessage(t, n.method), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
					s = /\$?\{(\d+)\}/g;
				return "function" == typeof i ? i = i.call(this, n.parameters, t) : s.test(i) && (i = e.validator.format(i.replace(s, "{$1}"), n.parameters)), i
			},
			formatAndAdd: function(e, t) {
				var n = this.defaultMessage(e, t);
				this.errorList.push({
					message: n,
					element: e,
					method: t.method
				}), this.errorMap[e.name] = n, this.submitted[e.name] = n
			},
			addWrapper: function(e) {
				return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
			},
			defaultShowErrors: function() {
				var e, t, n;
				for (e = 0; this.errorList[e]; e++) n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
				if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
					for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
				if (this.settings.unhighlight)
					for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
				this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
			},
			validElements: function() {
				return this.currentElements.not(this.invalidElements())
			},
			invalidElements: function() {
				return e(this.errorList).map(function() {
					return this.element
				})
			},
			showLabel: function(t, n) {
				var i, s, r, o, a = this.errorsFor(t),
					l = this.idOrName(t),
					c = e(t).attr("aria-describedby");
				a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(n)) : (a = e("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(n || ""), i = a, this.settings.wrapper && (i = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement(i, e(t)) : i.insertAfter(t), a.is("label") ? a.attr("for", l) : 0 === a.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (r = a.attr("id"), c ? c.match(new RegExp("\\b" + this.escapeCssMeta(r) + "\\b")) || (c += " " + r) : c = r, e(t).attr("aria-describedby", c), (s = this.groups[t.name]) && (o = this, e.each(o.groups, function(t, n) {
					n === s && e("[name='" + o.escapeCssMeta(t) + "']", o.currentForm).attr("aria-describedby", a.attr("id"))
				})))), !n && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, t)), this.toShow = this.toShow.add(a)
			},
			errorsFor: function(t) {
				var n = this.escapeCssMeta(this.idOrName(t)),
					i = e(t).attr("aria-describedby"),
					s = "label[for='" + n + "'], label[for='" + n + "'] *";
				return i && (s = s + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")), this.errors().filter(s)
			},
			escapeCssMeta: function(e) {
				return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
			},
			idOrName: function(e) {
				return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
			},
			validationTargetFor: function(t) {
				return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0]
			},
			checkable: function(e) {
				return /radio|checkbox/i.test(e.type)
			},
			findByName: function(t) {
				return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
			},
			getLength: function(t, n) {
				switch (n.nodeName.toLowerCase()) {
					case "select":
						return e("option:selected", n).length;
					case "input":
						if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
				}
				return t.length
			},
			depend: function(e, t) {
				return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
			},
			dependTypes: {
				boolean: function(e) {
					return e
				},
				string: function(t, n) {
					return !!e(t, n.form).length
				},
				function: function(e, t) {
					return e(t)
				}
			},
			optional: function(t) {
				var n = this.elementValue(t);
				return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch"
			},
			startRequest: function(t) {
				this.pending[t.name] || (this.pendingRequest++, e(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0)
			},
			stopRequest: function(t, n) {
				this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e(t).removeClass(this.settings.pendingClass), n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
			},
			previousValue: function(t, n) {
				return e.data(t, "previousValue") || e.data(t, "previousValue", {
					old: null,
					valid: !0,
					message: this.defaultMessage(t, {
						method: n
					})
				})
			},
			destroy: function() {
				this.resetForm(), e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
			}
		},
		classRuleSettings: {
			required: {
				required: !0
			},
			email: {
				email: !0
			},
			url: {
				url: !0
			},
			date: {
				date: !0
			},
			dateISO: {
				dateISO: !0
			},
			number: {
				number: !0
			},
			digits: {
				digits: !0
			},
			creditcard: {
				creditcard: !0
			}
		},
		addClassRules: function(t, n) {
			t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t)
		},
		classRules: function(t) {
			var n = {},
				i = e(t).attr("class");
			return i && e.each(i.split(" "), function() {
				this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this])
			}), n
		},
		normalizeAttributeRule: function(e, t, n, i) {
			/min|max|step/.test(n) && (null === t || /number|range|text/.test(t)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? e[n] = i : t === n && "range" !== t && (e[n] = !0)
		},
		attributeRules: function(t) {
			var n, i, s = {},
				r = e(t),
				o = t.getAttribute("type");
			for (n in e.validator.methods) "required" === n ? (i = t.getAttribute(n), "" === i && (i = !0), i = !!i) : i = r.attr(n), this.normalizeAttributeRule(s, o, n, i);
			return s.maxlength && /-1|2147483647|524288/.test(s.maxlength) && delete s.maxlength, s
		},
		dataRules: function(t) {
			var n, i, s = {},
				r = e(t),
				o = t.getAttribute("type");
			for (n in e.validator.methods) i = r.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()), this.normalizeAttributeRule(s, o, n, i);
			return s
		},
		staticRules: function(t) {
			var n = {},
				i = e.data(t.form, "validator");
			return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), n
		},
		normalizeRules: function(t, n) {
			return e.each(t, function(i, s) {
				if (!1 === s) return void delete t[i];
				if (s.param || s.depends) {
					var r = !0;
					switch (typeof s.depends) {
						case "string":
							r = !!e(s.depends, n.form).length;
							break;
						case "function":
							r = s.depends.call(n, n)
					}
					r ? t[i] = void 0 === s.param || s.param : (e.data(n.form, "validator").resetElements(e(n)), delete t[i])
				}
			}), e.each(t, function(i, s) {
				t[i] = e.isFunction(s) && "normalizer" !== i ? s(n) : s
			}), e.each(["minlength", "maxlength"], function() {
				t[this] && (t[this] = Number(t[this]))
			}), e.each(["rangelength", "range"], function() {
				var n;
				t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])]))
			}), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
		},
		normalizeRule: function(t) {
			if ("string" == typeof t) {
				var n = {};
				e.each(t.split(/\s/), function() {
					n[this] = !0
				}), t = n
			}
			return t
		},
		addMethod: function(t, n, i) {
			e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== i ? i : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
		},
		methods: {
			required: function(t, n, i) {
				if (!this.depend(i, n)) return "dependency-mismatch";
				if ("select" === n.nodeName.toLowerCase()) {
					var s = e(n).val();
					return s && s.length > 0
				}
				return this.checkable(n) ? this.getLength(t, n) > 0 : t.length > 0
			},
			email: function(e, t) {
				return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
			},
			url: function(e, t) {
				return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e)
			},
			date: function(e, t) {
				return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
			},
			dateISO: function(e, t) {
				return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
			},
			number: function(e, t) {
				return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
			},
			digits: function(e, t) {
				return this.optional(t) || /^\d+$/.test(e)
			},
			minlength: function(t, n, i) {
				var s = e.isArray(t) ? t.length : this.getLength(t, n);
				return this.optional(n) || s >= i
			},
			maxlength: function(t, n, i) {
				var s = e.isArray(t) ? t.length : this.getLength(t, n);
				return this.optional(n) || i >= s
			},
			rangelength: function(t, n, i) {
				var s = e.isArray(t) ? t.length : this.getLength(t, n);
				return this.optional(n) || s >= i[0] && s <= i[1]
			},
			min: function(e, t, n) {
				return this.optional(t) || e >= n
			},
			max: function(e, t, n) {
				return this.optional(t) || n >= e
			},
			range: function(e, t, n) {
				return this.optional(t) || e >= n[0] && e <= n[1]
			},
			step: function(t, n, i) {
				var s = e(n).attr("type"),
					r = "Step attribute on input type " + s + " is not supported.",
					o = ["text", "number", "range"],
					a = new RegExp("\\b" + s + "\\b");
				if (s && !a.test(o.join())) throw new Error(r);
				return this.optional(n) || t % i == 0
			},
			equalTo: function(t, n, i) {
				var s = e(i);
				return this.settings.onfocusout && s.not(".validate-equalTo-blur").length && s.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
					e(n).valid()
				}), t === s.val()
			},
			remote: function(t, n, i, s) {
				if (this.optional(n)) return "dependency-mismatch";
				s = "string" == typeof s && s || "remote";
				var r, o, a, l = this.previousValue(n, s);
				return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[n.name][s], this.settings.messages[n.name][s] = l.message, i = "string" == typeof i && {
					url: i
				} || i, a = e.param(e.extend({
					data: t
				}, i.data)), l.old === a ? l.valid : (l.old = a, r = this, this.startRequest(n), o = {}, o[n.name] = t, e.ajax(e.extend(!0, {
					mode: "abort",
					port: "validate" + n.name,
					dataType: "json",
					data: o,
					context: r.currentForm,
					success: function(e) {
						var i, o, a, c = !0 === e || "true" === e;
						r.settings.messages[n.name][s] = l.originalMessage, c ? (a = r.formSubmitted, r.resetInternals(), r.toHide = r.errorsFor(n), r.formSubmitted = a, r.successList.push(n), r.invalid[n.name] = !1, r.showErrors()) : (i = {}, o = e || r.defaultMessage(n, {
							method: s,
							parameters: t
						}), i[n.name] = l.message = o, r.invalid[n.name] = !0, r.showErrors(i)), l.valid = c, r.stopRequest(n, c)
					}
				}, i)), "pending")
			}
		}
	});
	var t, n = {};
	e.ajaxPrefilter ? e.ajaxPrefilter(function(e, t, i) {
		var s = e.port;
		"abort" === e.mode && (n[s] && n[s].abort(), n[s] = i)
	}) : (t = e.ajax, e.ajax = function(i) {
		var s = ("mode" in i ? i : e.ajaxSettings).mode,
			r = ("port" in i ? i : e.ajaxSettings).port;
		return "abort" === s ? (n[r] && n[r].abort(), n[r] = t.apply(this, arguments), n[r]) : t.apply(this, arguments)
	})
}),
function(e, t, n, i) {
	function s(t, n) {
		this.settings = null, this.options = e.extend({}, s.Defaults, n), this.$element = e(t), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		}, this._states = {
			current: {},
			tags: {
				initializing: ["busy"],
				animating: ["busy"],
				dragging: ["interacting"]
			}
		}, e.each(["onResize", "onThrottledResize"], e.proxy(function(t, n) {
			this._handlers[n] = e.proxy(this[n], this)
		}, this)), e.each(s.Plugins, e.proxy(function(e, t) {
			this._plugins[e.charAt(0).toLowerCase() + e.slice(1)] = new t(this)
		}, this)), e.each(s.Workers, e.proxy(function(t, n) {
			this._pipe.push({
				filter: n.filter,
				run: e.proxy(n.run, this)
			})
		}, this)), this.setup(), this.initialize()
	}
	s.Defaults = {
		items: 3,
		loop: !1,
		center: !1,
		rewind: !1,
		mouseDrag: !0,
		touchDrag: !0,
		pullDrag: !0,
		freeDrag: !1,
		margin: 0,
		stagePadding: 0,
		merge: !1,
		mergeFit: !0,
		autoWidth: !1,
		startPosition: 0,
		rtl: !1,
		smartSpeed: 250,
		fluidSpeed: !1,
		dragEndSpeed: !1,
		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: t,
		fallbackEasing: "swing",
		info: !1,
		nestedItemSelector: !1,
		itemElement: "div",
		stageElement: "div",
		refreshClass: "owl-refresh",
		loadedClass: "owl-loaded",
		loadingClass: "owl-loading",
		rtlClass: "owl-rtl",
		responsiveClass: "owl-responsive",
		dragClass: "owl-drag",
		itemClass: "owl-item",
		stageClass: "owl-stage",
		stageOuterClass: "owl-stage-outer",
		grabClass: "owl-grab"
	}, s.Width = {
		Default: "default",
		Inner: "inner",
		Outer: "outer"
	}, s.Type = {
		Event: "event",
		State: "state"
	}, s.Plugins = {}, s.Workers = [{
		filter: ["width", "settings"],
		run: function() {
			this._width = this.$element.width()
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(e) {
			e.current = this._items && this._items[this.relative(this._current)]
		}
	}, {
		filter: ["items", "settings"],
		run: function() {
			this.$stage.children(".cloned").remove()
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(e) {
			var t = this.settings.margin || "",
				n = !this.settings.autoWidth,
				i = this.settings.rtl,
				s = {
					width: "auto",
					"margin-left": i ? t : "",
					"margin-right": i ? "" : t
				};
			!n && this.$stage.children().css(s), e.css = s
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(e) {
			var t = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				n = null,
				i = this._items.length,
				s = !this.settings.autoWidth,
				r = [];
			for (e.items = {
					merge: !1,
					width: t
				}; i--;) n = this._mergers[i], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, e.items.merge = n > 1 || e.items.merge, r[i] = s ? t * n : this._items[i].width();
			this._widths = r
		}
	}, {
		filter: ["items", "settings"],
		run: function() {
			var t = [],
				n = this._items,
				i = this.settings,
				s = Math.max(2 * i.items, 4),
				r = 2 * Math.ceil(n.length / 2),
				o = i.loop && n.length ? i.rewind ? s : Math.max(s, r) : 0,
				a = "",
				l = "";
			for (o /= 2; o--;) t.push(this.normalize(t.length / 2, !0)), a += n[t[t.length - 1]][0].outerHTML, t.push(this.normalize(n.length - 1 - (t.length - 1) / 2, !0)), l = n[t[t.length - 1]][0].outerHTML + l;
			this._clones = t, e(a).addClass("cloned").appendTo(this.$stage), e(l).addClass("cloned").prependTo(this.$stage)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function() {
			for (var e = this.settings.rtl ? 1 : -1, t = this._clones.length + this._items.length, n = -1, i = 0, s = 0, r = []; ++n < t;) i = r[n - 1] || 0, s = this._widths[this.relative(n)] + this.settings.margin, r.push(i + s * e);
			this._coordinates = r
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function() {
			var e = this.settings.stagePadding,
				t = this._coordinates,
				n = {
					width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * e,
					"padding-left": e || "",
					"padding-right": e || ""
				};
			this.$stage.css(n)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(e) {
			var t = this._coordinates.length,
				n = !this.settings.autoWidth,
				i = this.$stage.children();
			if (n && e.items.merge)
				for (; t--;) e.css.width = this._widths[this.relative(t)], i.eq(t).css(e.css);
			else n && (e.css.width = e.items.width, i.css(e.css))
		}
	}, {
		filter: ["items"],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr("style")
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(e) {
			e.current = e.current ? this.$stage.children().index(e.current) : 0, e.current = Math.max(this.minimum(), Math.min(this.maximum(), e.current)), this.reset(e.current)
		}
	}, {
		filter: ["position"],
		run: function() {
			this.animate(this.coordinates(this._current))
		}
	}, {
		filter: ["width", "position", "items", "settings"],
		run: function() {
			var e, t, n, i, s = this.settings.rtl ? 1 : -1,
				r = 2 * this.settings.stagePadding,
				o = this.coordinates(this.current()) + r,
				a = o + this.width() * s,
				l = [];
			for (n = 0, i = this._coordinates.length; n < i; n++) e = this._coordinates[n - 1] || 0, t = Math.abs(this._coordinates[n]) + r * s, (this.op(e, "<=", o) && this.op(e, ">", a) || this.op(t, "<", o) && this.op(t, ">", a)) && l.push(n);
			this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"),
				this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
		}
	}], s.prototype.initialize = function() {
		if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
			var t, n, s;
			t = this.$element.find("img"), n = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : i, s = this.$element.children(n).width(), t.length && s <= 0 && this.preloadAutoWidthImages(t)
		}
		this.$element.addClass(this.options.loadingClass), this.$stage = e("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
	}, s.prototype.setup = function() {
		var t = this.viewport(),
			n = this.options.responsive,
			i = -1,
			s = null;
		n ? (e.each(n, function(e) {
			e <= t && e > i && (i = Number(e))
		}), s = e.extend({}, this.options, n[i]), "function" == typeof s.stagePadding && (s.stagePadding = s.stagePadding()), delete s.responsive, s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : s = e.extend({}, this.options), this.trigger("change", {
			property: {
				name: "settings",
				value: s
			}
		}), this._breakpoint = i, this.settings = s, this.invalidate("settings"), this.trigger("changed", {
			property: {
				name: "settings",
				value: this.settings
			}
		})
	}, s.prototype.optionsLogic = function() {
		this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
	}, s.prototype.prepare = function(t) {
		var n = this.trigger("prepare", {
			content: t
		});
		return n.data || (n.data = e("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", {
			content: n.data
		}), n.data
	}, s.prototype.update = function() {
		for (var t = 0, n = this._pipe.length, i = e.proxy(function(e) {
				return this[e]
			}, this._invalidated), s = {}; t < n;)(this._invalidated.all || e.grep(this._pipe[t].filter, i).length > 0) && this._pipe[t].run(s), t++;
		this._invalidated = {}, !this.is("valid") && this.enter("valid")
	}, s.prototype.width = function(e) {
		switch (e = e || s.Width.Default) {
			case s.Width.Inner:
			case s.Width.Outer:
				return this._width;
			default:
				return this._width - 2 * this.settings.stagePadding + this.settings.margin
		}
	}, s.prototype.refresh = function() {
		this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
	}, s.prototype.onThrottledResize = function() {
		t.clearTimeout(this.resizeTimer), this.resizeTimer = t.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
	}, s.prototype.onResize = function() {
		return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
	}, s.prototype.registerEventHandlers = function() {
		e.support.transition && this.$stage.on(e.support.transition.end + ".owl.core", e.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(t, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", e.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
			return !1
		})), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", e.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", e.proxy(this.onDragEnd, this)))
	}, s.prototype.onDragStart = function(t) {
		var i = null;
		3 !== t.which && (e.support.transform ? (i = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), i = {
			x: i[16 === i.length ? 12 : 4],
			y: i[16 === i.length ? 13 : 5]
		}) : (i = this.$stage.position(), i = {
			x: this.settings.rtl ? i.left + this.$stage.width() - this.width() + this.settings.margin : i.left,
			y: i.top
		}), this.is("animating") && (e.support.transform ? this.animate(i.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = e(t.target), this._drag.stage.start = i, this._drag.stage.current = i, this._drag.pointer = this.pointer(t), e(n).on("mouseup.owl.core touchend.owl.core", e.proxy(this.onDragEnd, this)), e(n).one("mousemove.owl.core touchmove.owl.core", e.proxy(function(t) {
			var i = this.difference(this._drag.pointer, this.pointer(t));
			e(n).on("mousemove.owl.core touchmove.owl.core", e.proxy(this.onDragMove, this)), Math.abs(i.x) < Math.abs(i.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
		}, this)))
	}, s.prototype.onDragMove = function(e) {
		var t = null,
			n = null,
			i = null,
			s = this.difference(this._drag.pointer, this.pointer(e)),
			r = this.difference(this._drag.stage.start, s);
		this.is("dragging") && (e.preventDefault(), this.settings.loop ? (t = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - t, r.x = ((r.x - t) % n + n) % n + t) : (t = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), i = this.settings.pullDrag ? -1 * s.x / 5 : 0, r.x = Math.max(Math.min(r.x, t + i), n + i)), this._drag.stage.current = r, this.animate(r.x))
	}, s.prototype.onDragEnd = function(t) {
		var i = this.difference(this._drag.pointer, this.pointer(t)),
			s = this._drag.stage.current,
			r = i.x > 0 ^ this.settings.rtl ? "left" : "right";
		e(n).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== i.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(s.x, 0 !== i.x ? r : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = r, (Math.abs(i.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
			return !1
		})), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
	}, s.prototype.closest = function(t, n) {
		var i = -1,
			s = this.width(),
			r = this.coordinates();
		return this.settings.freeDrag || e.each(r, e.proxy(function(e, o) {
			return "left" === n && t > o - 30 && t < o + 30 ? i = e : "right" === n && t > o - s - 30 && t < o - s + 30 ? i = e + 1 : this.op(t, "<", o) && this.op(t, ">", r[e + 1] || o - s) && (i = "left" === n ? e + 1 : e), -1 === i
		}, this)), this.settings.loop || (this.op(t, ">", r[this.minimum()]) ? i = t = this.minimum() : this.op(t, "<", r[this.maximum()]) && (i = t = this.maximum())), i
	}, s.prototype.animate = function(t) {
		var n = this.speed() > 0;
		this.is("animating") && this.onTransitionEnd(), n && (this.enter("animating"), this.trigger("translate")), e.support.transform3d && e.support.transition ? this.$stage.css({
			transform: "translate3d(" + t + "px,0px,0px)",
			transition: this.speed() / 1e3 + "s"
		}) : n ? this.$stage.animate({
			left: t + "px"
		}, this.speed(), this.settings.fallbackEasing, e.proxy(this.onTransitionEnd, this)) : this.$stage.css({
			left: t + "px"
		})
	}, s.prototype.is = function(e) {
		return this._states.current[e] && this._states.current[e] > 0
	}, s.prototype.current = function(e) {
		if (e === i) return this._current;
		if (0 === this._items.length) return i;
		if (e = this.normalize(e), this._current !== e) {
			var t = this.trigger("change", {
				property: {
					name: "position",
					value: e
				}
			});
			t.data !== i && (e = this.normalize(t.data)), this._current = e, this.invalidate("position"), this.trigger("changed", {
				property: {
					name: "position",
					value: this._current
				}
			})
		}
		return this._current
	}, s.prototype.invalidate = function(t) {
		return "string" === e.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), e.map(this._invalidated, function(e, t) {
			return t
		})
	}, s.prototype.reset = function(e) {
		(e = this.normalize(e)) !== i && (this._speed = 0, this._current = e, this.suppress(["translate", "translated"]), this.animate(this.coordinates(e)), this.release(["translate", "translated"]))
	}, s.prototype.normalize = function(e, t) {
		var n = this._items.length,
			s = t ? 0 : this._clones.length;
		return !this.isNumeric(e) || n < 1 ? e = i : (e < 0 || e >= n + s) && (e = ((e - s / 2) % n + n) % n + s / 2), e
	}, s.prototype.relative = function(e) {
		return e -= this._clones.length / 2, this.normalize(e, !0)
	}, s.prototype.maximum = function(e) {
		var t, n, i, s = this.settings,
			r = this._coordinates.length;
		if (s.loop) r = this._clones.length / 2 + this._items.length - 1;
		else if (s.autoWidth || s.merge) {
			for (t = this._items.length, n = this._items[--t].width(), i = this.$element.width(); t-- && !((n += this._items[t].width() + this.settings.margin) > i););
			r = t + 1
		} else r = s.center ? this._items.length - 1 : this._items.length - s.items;
		return e && (r -= this._clones.length / 2), Math.max(r, 0)
	}, s.prototype.minimum = function(e) {
		return e ? 0 : this._clones.length / 2
	}, s.prototype.items = function(e) {
		return e === i ? this._items.slice() : (e = this.normalize(e, !0), this._items[e])
	}, s.prototype.mergers = function(e) {
		return e === i ? this._mergers.slice() : (e = this.normalize(e, !0), this._mergers[e])
	}, s.prototype.clones = function(t) {
		var n = this._clones.length / 2,
			s = n + this._items.length,
			r = function(e) {
				return e % 2 == 0 ? s + e / 2 : n - (e + 1) / 2
			};
		return t === i ? e.map(this._clones, function(e, t) {
			return r(t)
		}) : e.map(this._clones, function(e, n) {
			return e === t ? r(n) : null
		})
	}, s.prototype.speed = function(e) {
		return e !== i && (this._speed = e), this._speed
	}, s.prototype.coordinates = function(t) {
		var n, s = 1,
			r = t - 1;
		return t === i ? e.map(this._coordinates, e.proxy(function(e, t) {
			return this.coordinates(t)
		}, this)) : (this.settings.center ? (this.settings.rtl && (s = -1, r = t + 1), n = this._coordinates[t], n += (this.width() - n + (this._coordinates[r] || 0)) / 2 * s) : n = this._coordinates[r] || 0, n = Math.ceil(n))
	}, s.prototype.duration = function(e, t, n) {
		return 0 === n ? 0 : Math.min(Math.max(Math.abs(t - e), 1), 6) * Math.abs(n || this.settings.smartSpeed)
	}, s.prototype.to = function(e, t) {
		var n = this.current(),
			i = null,
			s = e - this.relative(n),
			r = (s > 0) - (s < 0),
			o = this._items.length,
			a = this.minimum(),
			l = this.maximum();
		this.settings.loop ? (!this.settings.rewind && Math.abs(s) > o / 2 && (s += -1 * r * o), e = n + s, (i = ((e - a) % o + o) % o + a) !== e && i - s <= l && i - s > 0 && (n = i - s, e = i, this.reset(n))) : this.settings.rewind ? (l += 1, e = (e % l + l) % l) : e = Math.max(a, Math.min(l, e)), this.speed(this.duration(n, e, t)), this.current(e), this.$element.is(":visible") && this.update()
	}, s.prototype.next = function(e) {
		e = e || !1, this.to(this.relative(this.current()) + 1, e)
	}, s.prototype.prev = function(e) {
		e = e || !1, this.to(this.relative(this.current()) - 1, e)
	}, s.prototype.onTransitionEnd = function(e) {
		if (e !== i && (e.stopPropagation(), (e.target || e.srcElement || e.originalTarget) !== this.$stage.get(0))) return !1;
		this.leave("animating"), this.trigger("translated")
	}, s.prototype.viewport = function() {
		var i;
		return this.options.responsiveBaseElement !== t ? i = e(this.options.responsiveBaseElement).width() : t.innerWidth ? i = t.innerWidth : n.documentElement && n.documentElement.clientWidth ? i = n.documentElement.clientWidth : console.warn("Can not detect viewport width."), i
	}, s.prototype.replace = function(t) {
		this.$stage.empty(), this._items = [], t && (t = t instanceof jQuery ? t : e(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function() {
			return 1 === this.nodeType
		}).each(e.proxy(function(e, t) {
			t = this.prepare(t), this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
		}, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
	}, s.prototype.add = function(t, n) {
		var s = this.relative(this._current);
		n = n === i ? this._items.length : this.normalize(n, !0), t = t instanceof jQuery ? t : e(t), this.trigger("add", {
			content: t,
			position: n
		}), t = this.prepare(t), 0 === this._items.length || n === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[n - 1].after(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[n].before(t), this._items.splice(n, 0, t), this._mergers.splice(n, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[s] && this.reset(this._items[s].index()), this.invalidate("items"), this.trigger("added", {
			content: t,
			position: n
		})
	}, s.prototype.remove = function(e) {
		(e = this.normalize(e, !0)) !== i && (this.trigger("remove", {
			content: this._items[e],
			position: e
		}), this._items[e].remove(), this._items.splice(e, 1), this._mergers.splice(e, 1), this.invalidate("items"), this.trigger("removed", {
			content: null,
			position: e
		}))
	}, s.prototype.preloadAutoWidthImages = function(t) {
		t.each(e.proxy(function(t, n) {
			this.enter("pre-loading"), n = e(n), e(new Image).one("load", e.proxy(function(e) {
				n.attr("src", e.target.src), n.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
			}, this)).attr("src", n.attr("src") || n.attr("data-src") || n.attr("data-src-retina"))
		}, this))
	}, s.prototype.destroy = function() {
		this.$element.off(".owl.core"), this.$stage.off(".owl.core"), e(n).off(".owl.core"), !1 !== this.settings.responsive && (t.clearTimeout(this.resizeTimer), this.off(t, "resize", this._handlers.onThrottledResize));
		for (var i in this._plugins) this._plugins[i].destroy();
		this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
	}, s.prototype.op = function(e, t, n) {
		var i = this.settings.rtl;
		switch (t) {
			case "<":
				return i ? e > n : e < n;
			case ">":
				return i ? e < n : e > n;
			case ">=":
				return i ? e <= n : e >= n;
			case "<=":
				return i ? e >= n : e <= n
		}
	}, s.prototype.on = function(e, t, n, i) {
		e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n)
	}, s.prototype.off = function(e, t, n, i) {
		e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent && e.detachEvent("on" + t, n)
	}, s.prototype.trigger = function(t, n, i, r, o) {
		var a = {
				item: {
					count: this._items.length,
					index: this.current()
				}
			},
			l = e.camelCase(e.grep(["on", t, i], function(e) {
				return e
			}).join("-").toLowerCase()),
			c = e.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), e.extend({
				relatedTarget: this
			}, a, n));
		return this._supress[t] || (e.each(this._plugins, function(e, t) {
			t.onTrigger && t.onTrigger(c)
		}), this.register({
			type: s.Type.Event,
			name: t
		}), this.$element.trigger(c), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)), c
	}, s.prototype.enter = function(t) {
		e.each([t].concat(this._states.tags[t] || []), e.proxy(function(e, t) {
			this._states.current[t] === i && (this._states.current[t] = 0), this._states.current[t]++
		}, this))
	}, s.prototype.leave = function(t) {
		e.each([t].concat(this._states.tags[t] || []), e.proxy(function(e, t) {
			this._states.current[t]--
		}, this))
	}, s.prototype.register = function(t) {
		if (t.type === s.Type.Event) {
			if (e.event.special[t.name] || (e.event.special[t.name] = {}), !e.event.special[t.name].owl) {
				var n = e.event.special[t.name]._default;
				e.event.special[t.name]._default = function(e) {
					return !n || !n.apply || e.namespace && -1 !== e.namespace.indexOf("owl") ? e.namespace && e.namespace.indexOf("owl") > -1 : n.apply(this, arguments)
				}, e.event.special[t.name].owl = !0
			}
		} else t.type === s.Type.State && (this._states.tags[t.name] ? this._states.tags[t.name] = this._states.tags[t.name].concat(t.tags) : this._states.tags[t.name] = t.tags, this._states.tags[t.name] = e.grep(this._states.tags[t.name], e.proxy(function(n, i) {
			return e.inArray(n, this._states.tags[t.name]) === i
		}, this)))
	}, s.prototype.suppress = function(t) {
		e.each(t, e.proxy(function(e, t) {
			this._supress[t] = !0
		}, this))
	}, s.prototype.release = function(t) {
		e.each(t, e.proxy(function(e, t) {
			delete this._supress[t]
		}, this))
	}, s.prototype.pointer = function(e) {
		var n = {
			x: null,
			y: null
		};
		return e = e.originalEvent || e || t.event, e = e.touches && e.touches.length ? e.touches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e, e.pageX ? (n.x = e.pageX, n.y = e.pageY) : (n.x = e.clientX, n.y = e.clientY), n
	}, s.prototype.isNumeric = function(e) {
		return !isNaN(parseFloat(e))
	}, s.prototype.difference = function(e, t) {
		return {
			x: e.x - t.x,
			y: e.y - t.y
		}
	}, e.fn.owlCarousel = function(t) {
		var n = Array.prototype.slice.call(arguments, 1);
		return this.each(function() {
			var i = e(this),
				r = i.data("owl.carousel");
			r || (r = new s(this, "object" == typeof t && t), i.data("owl.carousel", r), e.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, n) {
				r.register({
					type: s.Type.Event,
					name: n
				}), r.$element.on(n + ".owl.carousel.core", e.proxy(function(e) {
					e.namespace && e.relatedTarget !== this && (this.suppress([n]), r[n].apply(this, [].slice.call(arguments, 1)), this.release([n]))
				}, r))
			})), "string" == typeof t && "_" !== t.charAt(0) && r[t].apply(r, n)
		})
	}, e.fn.owlCarousel.Constructor = s
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
	var s = function(t) {
		this._core = t, this._interval = null, this._visible = null, this._handlers = {
			"initialized.owl.carousel": e.proxy(function(e) {
				e.namespace && this._core.settings.autoRefresh && this.watch()
			}, this)
		}, this._core.options = e.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	s.Defaults = {
		autoRefresh: !0,
		autoRefreshInterval: 500
	}, s.prototype.watch = function() {
		this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = t.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
	}, s.prototype.refresh = function() {
		this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
	}, s.prototype.destroy = function() {
		var e, n;
		t.clearInterval(this._interval);
		for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
		for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
	}, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
	var s = function(t) {
		this._core = t, this._loaded = [], this._handlers = {
			"initialized.owl.carousel change.owl.carousel resized.owl.carousel": e.proxy(function(t) {
				if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type))
					for (var n = this._core.settings, i = n.center && Math.ceil(n.items / 2) || n.items, s = n.center && -1 * i || 0, r = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + s, o = this._core.clones().length, a = e.proxy(function(e, t) {
							this.load(t)
						}, this); s++ < i;) this.load(o / 2 + this._core.relative(r)), o && e.each(this._core.clones(this._core.relative(r)), a), r++
			}, this)
		}, this._core.options = e.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	s.Defaults = {
		lazyLoad: !1
	}, s.prototype.load = function(n) {
		var i = this._core.$stage.children().eq(n),
			s = i && i.find(".owl-lazy");
		!s || e.inArray(i.get(0), this._loaded) > -1 || (s.each(e.proxy(function(n, i) {
			var s, r = e(i),
				o = t.devicePixelRatio > 1 && r.attr("data-src-retina") || r.attr("data-src");
			this._core.trigger("load", {
				element: r,
				url: o
			}, "lazy"), r.is("img") ? r.one("load.owl.lazy", e.proxy(function() {
				r.css("opacity", 1), this._core.trigger("loaded", {
					element: r,
					url: o
				}, "lazy")
			}, this)).attr("src", o) : (s = new Image, s.onload = e.proxy(function() {
				r.css({
					"background-image": 'url("' + o + '")',
					opacity: "1"
				}), this._core.trigger("loaded", {
					element: r,
					url: o
				}, "lazy")
			}, this), s.src = o)
		}, this)), this._loaded.push(i.get(0)))
	}, s.prototype.destroy = function() {
		var e, t;
		for (e in this.handlers) this._core.$element.off(e, this.handlers[e]);
		for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
	}, e.fn.owlCarousel.Constructor.Plugins.Lazy = s
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
	var s = function(t) {
		this._core = t, this._handlers = {
			"initialized.owl.carousel refreshed.owl.carousel": e.proxy(function(e) {
				e.namespace && this._core.settings.autoHeight && this.update()
			}, this),
			"changed.owl.carousel": e.proxy(function(e) {
				e.namespace && this._core.settings.autoHeight && "position" == e.property.name && this.update()
			}, this),
			"loaded.owl.lazy": e.proxy(function(e) {
				e.namespace && this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
			}, this)
		}, this._core.options = e.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	s.Defaults = {
		autoHeight: !1,
		autoHeightClass: "owl-height"
	}, s.prototype.update = function() {
		var t = this._core._current,
			n = t + this._core.settings.items,
			i = this._core.$stage.children().toArray().slice(t, n),
			s = [],
			r = 0;
		e.each(i, function(t, n) {
			s.push(e(n).height())
		}), r = Math.max.apply(null, s), this._core.$stage.parent().height(r).addClass(this._core.settings.autoHeightClass)
	}, s.prototype.destroy = function() {
		var e, t;
		for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
		for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
	}, e.fn.owlCarousel.Constructor.Plugins.AutoHeight = s
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
	var s = function(t) {
		this._core = t, this._videos = {}, this._playing = null, this._handlers = {
			"initialized.owl.carousel": e.proxy(function(e) {
				e.namespace && this._core.register({
					type: "state",
					name: "playing",
					tags: ["interacting"]
				})
			}, this),
			"resize.owl.carousel": e.proxy(function(e) {
				e.namespace && this._core.settings.video && this.isInFullScreen() && e.preventDefault()
			}, this),
			"refreshed.owl.carousel": e.proxy(function(e) {
				e.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
			}, this),
			"changed.owl.carousel": e.proxy(function(e) {
				e.namespace && "position" === e.property.name && this._playing && this.stop()
			}, this),
			"prepared.owl.carousel": e.proxy(function(t) {
				if (t.namespace) {
					var n = e(t.content).find(".owl-video");
					n.length && (n.css("display", "none"), this.fetch(n, e(t.content)))
				}
			}, this)
		}, this._core.options = e.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", e.proxy(function(e) {
			this.play(e)
		}, this))
	};
	s.Defaults = {
		video: !1,
		videoHeight: !1,
		videoWidth: !1
	}, s.prototype.fetch = function(e, t) {
		var n = function() {
				return e.attr("data-vimeo-id") ? "vimeo" : e.attr("data-vzaar-id") ? "vzaar" : "youtube"
			}(),
			i = e.attr("data-vimeo-id") || e.attr("data-youtube-id") || e.attr("data-vzaar-id"),
			s = e.attr("data-width") || this._core.settings.videoWidth,
			r = e.attr("data-height") || this._core.settings.videoHeight,
			o = e.attr("href");
		if (!o) throw new Error("Missing video URL.");
		if (i = o.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), i[3].indexOf("youtu") > -1) n = "youtube";
		else if (i[3].indexOf("vimeo") > -1) n = "vimeo";
		else {
			if (!(i[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
			n = "vzaar"
		}
		i = i[6], this._videos[o] = {
			type: n,
			id: i,
			width: s,
			height: r
		}, t.attr("data-video", o), this.thumbnail(e, this._videos[o])
	}, s.prototype.thumbnail = function(t, n) {
		var i, s, r, o = n.width && n.height ? 'style="width:' + n.width + "px;height:" + n.height + 'px;"' : "",
			a = t.find("img"),
			l = "src",
			c = "",
			d = this._core.settings,
			u = function(e) {
				s = '<div class="owl-video-play-icon"></div>', i = d.lazyLoad ? '<div class="owl-video-tn ' + c + '" ' + l + '="' + e + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + e + ')"></div>', t.after(i), t.after(s)
			};
		if (t.wrap('<div class="owl-video-wrapper"' + o + "></div>"), this._core.settings.lazyLoad && (l = "data-src", c = "owl-lazy"), a.length) return u(a.attr(l)), a.remove(), !1;
		"youtube" === n.type ? (r = "//img.youtube.com/vi/" + n.id + "/hqdefault.jpg", u(r)) : "vimeo" === n.type ? e.ajax({
			type: "GET",
			url: "//vimeo.com/api/v2/video/" + n.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function(e) {
				r = e[0].thumbnail_large, u(r)
			}
		}) : "vzaar" === n.type && e.ajax({
			type: "GET",
			url: "//vzaar.com/api/videos/" + n.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function(e) {
				r = e.framegrab_url, u(r)
			}
		})
	}, s.prototype.stop = function() {
		this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
	}, s.prototype.play = function(t) {
		var n, i = e(t.target),
			s = i.closest("." + this._core.settings.itemClass),
			r = this._videos[s.attr("data-video")],
			o = r.width || "100%",
			a = r.height || this._core.$stage.height();
		this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), s = this._core.items(this._core.relative(s.index())), this._core.reset(s.index()), "youtube" === r.type ? n = '<iframe width="' + o + '" height="' + a + '" src="//www.youtube.com/embed/' + r.id + "?autoplay=1&rel=0&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type ? n = '<iframe src="//player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + o + '" height="' + a + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === r.type && (n = '<iframe frameborder="0"height="' + a + '"width="' + o + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + r.id + '/player?autoplay=true"></iframe>'), e('<div class="owl-video-frame">' + n + "</div>").insertAfter(s.find(".owl-video")), this._playing = s.addClass("owl-video-playing"))
	}, s.prototype.isInFullScreen = function() {
		var t = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement;
		return t && e(t).parent().hasClass("owl-video-frame")
	}, s.prototype.destroy = function() {
		var e, t;
		this._core.$element.off("click.owl.video");
		for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
		for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
	}, e.fn.owlCarousel.Constructor.Plugins.Video = s
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
	var s = function(t) {
		this.core = t, this.core.options = e.extend({}, s.Defaults, this.core.options), this.swapping = !0, this.previous = i, this.next = i, this.handlers = {
			"change.owl.carousel": e.proxy(function(e) {
				e.namespace && "position" == e.property.name && (this.previous = this.core.current(), this.next = e.property.value)
			}, this),
			"drag.owl.carousel dragged.owl.carousel translated.owl.carousel": e.proxy(function(e) {
				e.namespace && (this.swapping = "translated" == e.type)
			}, this),
			"translate.owl.carousel": e.proxy(function(e) {
				e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
			}, this)
		}, this.core.$element.on(this.handlers)
	};
	s.Defaults = {
		animateOut: !1,
		animateIn: !1
	}, s.prototype.swap = function() {
		if (1 === this.core.settings.items && e.support.animation && e.support.transition) {
			this.core.speed(0);
			var t, n = e.proxy(this.clear, this),
				i = this.core.$stage.children().eq(this.previous),
				s = this.core.$stage.children().eq(this.next),
				r = this.core.settings.animateIn,
				o = this.core.settings.animateOut;
			this.core.current() !== this.previous && (o && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(e.support.animation.end, n).css({
				left: t + "px"
			}).addClass("animated owl-animated-out").addClass(o)), r && s.one(e.support.animation.end, n).addClass("animated owl-animated-in").addClass(r))
		}
	}, s.prototype.clear = function(t) {
		e(t.target).css({
			left: ""
		}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
	}, s.prototype.destroy = function() {
		var e, t;
		for (e in this.handlers) this.core.$element.off(e, this.handlers[e]);
		for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
	}, e.fn.owlCarousel.Constructor.Plugins.Animate = s
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
	var s = function(t) {
		this._core = t, this._timeout = null, this._paused = !1, this._handlers = {
			"changed.owl.carousel": e.proxy(function(e) {
				e.namespace && "settings" === e.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : e.namespace && "position" === e.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
			}, this),
			"initialized.owl.carousel": e.proxy(function(e) {
				e.namespace && this._core.settings.autoplay && this.play()
			}, this),
			"play.owl.autoplay": e.proxy(function(e, t, n) {
				e.namespace && this.play(t, n)
			}, this),
			"stop.owl.autoplay": e.proxy(function(e) {
				e.namespace && this.stop()
			}, this),
			"mouseover.owl.autoplay": e.proxy(function() {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}, this),
			"mouseleave.owl.autoplay": e.proxy(function() {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
			}, this),
			"touchstart.owl.core": e.proxy(function() {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}, this),
			"touchend.owl.core": e.proxy(function() {
				this._core.settings.autoplayHoverPause && this.play()
			}, this)
		}, this._core.$element.on(this._handlers), this._core.options = e.extend({}, s.Defaults, this._core.options)
	};
	s.Defaults = {
		autoplay: !1,
		autoplayTimeout: 5e3,
		autoplayHoverPause: !1,
		autoplaySpeed: !1
	}, s.prototype.play = function(e, t) {
		this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
	}, s.prototype._getNextTimeout = function(i, s) {
		return this._timeout && t.clearTimeout(this._timeout), t.setTimeout(e.proxy(function() {
			this._paused || this._core.is("busy") || this._core.is("interacting") || n.hidden || this._core.next(s || this._core.settings.autoplaySpeed)
		}, this), i || this._core.settings.autoplayTimeout)
	}, s.prototype._setAutoPlayInterval = function() {
		this._timeout = this._getNextTimeout()
	}, s.prototype.stop = function() {
		this._core.is("rotating") && (t.clearTimeout(this._timeout), this._core.leave("rotating"))
	}, s.prototype.pause = function() {
		this._core.is("rotating") && (this._paused = !0)
	}, s.prototype.destroy = function() {
		var e, t;
		this.stop();
		for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
		for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
	}, e.fn.owlCarousel.Constructor.Plugins.autoplay = s
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
	"use strict";
	var s = function(t) {
		this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		}, this._handlers = {
			"prepared.owl.carousel": e.proxy(function(t) {
				t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + e(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
			}, this),
			"added.owl.carousel": e.proxy(function(e) {
				e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 0, this._templates.pop())
			}, this),
			"remove.owl.carousel": e.proxy(function(e) {
				e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 1)
			}, this),
			"changed.owl.carousel": e.proxy(function(e) {
				e.namespace && "position" == e.property.name && this.draw()
			}, this),
			"initialized.owl.carousel": e.proxy(function(e) {
				e.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
			}, this),
			"refreshed.owl.carousel": e.proxy(function(e) {
				e.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
			}, this)
		}, this._core.options = e.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers)
	};
	s.Defaults = {
		nav: !1,
		navText: ["prev", "next"],
		navSpeed: !1,
		navElement: "div",
		navContainer: !1,
		navContainerClass: "owl-nav",
		navClass: ["owl-prev", "owl-next"],
		slideBy: 1,
		dotClass: "owl-dot",
		dotsClass: "owl-dots",
		dots: !0,
		dotsEach: !1,
		dotsData: !1,
		dotsSpeed: !1,
		dotsContainer: !1
	}, s.prototype.initialize = function() {
		var t, n = this._core.settings;
		this._controls.$relative = (n.navContainer ? e(n.navContainer) : e("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = e("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", e.proxy(function(e) {
				this.prev(n.navSpeed)
			}, this)), this._controls.$next = e("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", e.proxy(function(e) {
				this.next(n.navSpeed)
			}, this)),
			n.dotsData || (this._templates = [e("<div>").addClass(n.dotClass).append(e("<span>")).prop("outerHTML")]), this._controls.$absolute = (n.dotsContainer ? e(n.dotsContainer) : e("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", e.proxy(function(t) {
				var i = e(t.target).parent().is(this._controls.$absolute) ? e(t.target).index() : e(t.target).parent().index();
				t.preventDefault(), this.to(i, n.dotsSpeed)
			}, this));
		for (t in this._overrides) this._core[t] = e.proxy(this[t], this)
	}, s.prototype.destroy = function() {
		var e, t, n, i;
		for (e in this._handlers) this.$element.off(e, this._handlers[e]);
		for (t in this._controls) this._controls[t].remove();
		for (i in this.overides) this._core[i] = this._overrides[i];
		for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
	}, s.prototype.update = function() {
		var e, t, n, i = this._core.clones().length / 2,
			s = i + this._core.items().length,
			r = this._core.maximum(!0),
			o = this._core.settings,
			a = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
		if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
			for (this._pages = [], e = i, t = 0, n = 0; e < s; e++) {
				if (t >= a || 0 === t) {
					if (this._pages.push({
							start: Math.min(r, e - i),
							end: e - i + a - 1
						}), Math.min(r, e - i) === r) break;
					t = 0, ++n
				}
				t += this._core.mergers(this._core.relative(e))
			}
	}, s.prototype.draw = function() {
		var t, n = this._core.settings,
			i = this._core.items().length <= n.items,
			s = this._core.relative(this._core.current()),
			r = n.loop || n.rewind;
		this._controls.$relative.toggleClass("disabled", !n.nav || i), n.nav && (this._controls.$previous.toggleClass("disabled", !r && s <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !r && s >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !n.dots || i), n.dots && (t = this._pages.length - this._controls.$absolute.children().length, n.dotsData && 0 !== t ? this._controls.$absolute.html(this._templates.join("")) : t > 0 ? this._controls.$absolute.append(new Array(t + 1).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(e.inArray(this.current(), this._pages)).addClass("active"))
	}, s.prototype.onTrigger = function(t) {
		var n = this._core.settings;
		t.page = {
			index: e.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: n && (n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items)
		}
	}, s.prototype.current = function() {
		var t = this._core.relative(this._core.current());
		return e.grep(this._pages, e.proxy(function(e, n) {
			return e.start <= t && e.end >= t
		}, this)).pop()
	}, s.prototype.getPosition = function(t) {
		var n, i, s = this._core.settings;
		return "page" == s.slideBy ? (n = e.inArray(this.current(), this._pages), i = this._pages.length, t ? ++n : --n, n = this._pages[(n % i + i) % i].start) : (n = this._core.relative(this._core.current()), i = this._core.items().length, t ? n += s.slideBy : n -= s.slideBy), n
	}, s.prototype.next = function(t) {
		e.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
	}, s.prototype.prev = function(t) {
		e.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
	}, s.prototype.to = function(t, n, i) {
		var s;
		!i && this._pages.length ? (s = this._pages.length, e.proxy(this._overrides.to, this._core)(this._pages[(t % s + s) % s].start, n)) : e.proxy(this._overrides.to, this._core)(t, n)
	}, e.fn.owlCarousel.Constructor.Plugins.Navigation = s
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
	"use strict";
	var s = function(n) {
		this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
			"initialized.owl.carousel": e.proxy(function(n) {
				n.namespace && "URLHash" === this._core.settings.startPosition && e(t).trigger("hashchange.owl.navigation")
			}, this),
			"prepared.owl.carousel": e.proxy(function(t) {
				if (t.namespace) {
					var n = e(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
					if (!n) return;
					this._hashes[n] = t.content
				}
			}, this),
			"changed.owl.carousel": e.proxy(function(n) {
				if (n.namespace && "position" === n.property.name) {
					var i = this._core.items(this._core.relative(this._core.current())),
						s = e.map(this._hashes, function(e, t) {
							return e === i ? t : null
						}).join();
					if (!s || t.location.hash.slice(1) === s) return;
					t.location.hash = s
				}
			}, this)
		}, this._core.options = e.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers), e(t).on("hashchange.owl.navigation", e.proxy(function(e) {
			var n = t.location.hash.substring(1),
				i = this._core.$stage.children(),
				s = this._hashes[n] && i.index(this._hashes[n]);
			void 0 !== s && s !== this._core.current() && this._core.to(this._core.relative(s), !1, !0)
		}, this))
	};
	s.Defaults = {
		URLhashListener: !1
	}, s.prototype.destroy = function() {
		var n, i;
		e(t).off("hashchange.owl.navigation");
		for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
		for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
	}, e.fn.owlCarousel.Constructor.Plugins.Hash = s
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
	function s(t, n) {
		var s = !1,
			r = t.charAt(0).toUpperCase() + t.slice(1);
		return e.each((t + " " + a.join(r + " ") + r).split(" "), function(e, t) {
			if (o[t] !== i) return s = !n || t, !1
		}), s
	}

	function r(e) {
		return s(e, !0)
	}
	var o = e("<support>").get(0).style,
		a = "Webkit Moz O ms".split(" "),
		l = {
			transition: {
				end: {
					WebkitTransition: "webkitTransitionEnd",
					MozTransition: "transitionend",
					OTransition: "oTransitionEnd",
					transition: "transitionend"
				}
			},
			animation: {
				end: {
					WebkitAnimation: "webkitAnimationEnd",
					MozAnimation: "animationend",
					OAnimation: "oAnimationEnd",
					animation: "animationend"
				}
			}
		},
		c = {
			csstransforms: function() {
				return !!s("transform")
			},
			csstransforms3d: function() {
				return !!s("perspective")
			},
			csstransitions: function() {
				return !!s("transition")
			},
			cssanimations: function() {
				return !!s("animation")
			}
		};
	c.csstransitions() && (e.support.transition = new String(r("transition")), e.support.transition.end = l.transition.end[e.support.transition]), c.cssanimations() && (e.support.animation = new String(r("animation")), e.support.animation.end = l.animation.end[e.support.animation]), c.csstransforms() && (e.support.transform = new String(r("transform")), e.support.transform3d = c.csstransforms3d())
}(window.Zepto || window.jQuery, window, document),
function(e, t) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : e.jcf = t(jQuery)
}(this, function(e) {
	"use strict";
	var t = [],
		n = {
			optionsKey: "jcf",
			dataKey: "jcf-instance",
			rtlClass: "jcf-rtl",
			focusClass: "jcf-focus",
			pressedClass: "jcf-pressed",
			disabledClass: "jcf-disabled",
			hiddenClass: "jcf-hidden",
			resetAppearanceClass: "jcf-reset-appearance",
			unselectableClass: "jcf-unselectable"
		},
		i = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
		s = /Windows Phone/.test(navigator.userAgent);
	n.isMobileDevice = !(!i && !s);
	var r = function() {
		var t = e("<style>").appendTo("head"),
			i = t.prop("sheet") || t.prop("styleSheet"),
			s = function(e, t, n) {
				n = n || 0, i.insertRule ? i.insertRule(e + "{" + t + "}", n) : i.addRule(e, t, n)
			};
		s("." + n.hiddenClass, "position:absolute !important;left:-9999px !important;height:1px !important;width:1px !important;margin:0 !important;border-width:0 !important;-webkit-appearance:none;-moz-appearance:none;appearance:none"), s("." + n.rtlClass + " ." + n.hiddenClass, "right:-9999px !important; left: auto !important"), s("." + n.unselectableClass, "-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -webkit-tap-highlight-color: rgba(0,0,0,0);"), s("." + n.resetAppearanceClass, "background: none; border: none; -webkit-appearance: none; appearance: none; opacity: 0; filter: alpha(opacity=0);");
		var r = e("html"),
			o = e("body");
		"rtl" !== r.css("direction") && "rtl" !== o.css("direction") || r.addClass(n.rtlClass), r.on("reset", function() {
			setTimeout(function() {
				a.refreshAll()
			}, 0)
		}), n.styleSheetCreated = !0
	};
	! function() {
		var t, n = navigator.pointerEnabled || navigator.msPointerEnabled,
			i = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
			s = {};
		t = n ? {
			pointerover: navigator.pointerEnabled ? "pointerover" : "MSPointerOver",
			pointerdown: navigator.pointerEnabled ? "pointerdown" : "MSPointerDown",
			pointermove: navigator.pointerEnabled ? "pointermove" : "MSPointerMove",
			pointerup: navigator.pointerEnabled ? "pointerup" : "MSPointerUp"
		} : {
			pointerover: "mouseover",
			pointerdown: "mousedown" + (i ? " touchstart" : ""),
			pointermove: "mousemove" + (i ? " touchmove" : ""),
			pointerup: "mouseup" + (i ? " touchend" : "")
		}, e.each(t, function(t, n) {
			e.each(n.split(" "), function(e, n) {
				s[n] = t
			})
		}), e.each(t, function(t, n) {
			n = n.split(" "), e.event.special["jcf-" + t] = {
				setup: function() {
					var t = this;
					e.each(n, function(e, n) {
						t.addEventListener ? t.addEventListener(n, a, !1) : t["on" + n] = a
					})
				},
				teardown: function() {
					var t = this;
					e.each(n, function(e, n) {
						t.addEventListener ? t.removeEventListener(n, a, !1) : t["on" + n] = null
					})
				}
			}
		});
		var r = null,
			o = function(e) {
				var t = Math.abs(e.pageX - r.x),
					n = Math.abs(e.pageY - r.y);
				if (t <= 25 && n <= 25) return !0
			},
			a = function(t) {
				var n = t || window.event,
					i = null,
					a = s[n.type];
				if (t = e.event.fix(n), t.type = "jcf-" + a, n.pointerType) switch (n.pointerType) {
					case 2:
						t.pointerType = "touch";
						break;
					case 3:
						t.pointerType = "pen";
						break;
					case 4:
						t.pointerType = "mouse";
						break;
					default:
						t.pointerType = n.pointerType
				} else t.pointerType = n.type.substr(0, 5);
				return t.pageX || t.pageY || (i = n.changedTouches ? n.changedTouches[0] : n, t.pageX = i.pageX, t.pageY = i.pageY), "touchend" === n.type && (r = {
					x: t.pageX,
					y: t.pageY
				}), "mouse" === t.pointerType && r && o(t) ? void 0 : (e.event.dispatch || e.event.handle).call(this, t)
			}
	}(),
	function() {
		var t = ("onwheel" in document || document.documentMode >= 9 ? "wheel" : "mousewheel DOMMouseScroll").split(" ");
		e.event.special["jcf-mousewheel"] = {
			setup: function() {
				var i = this;
				e.each(t, function(e, t) {
					i.addEventListener ? i.addEventListener(t, n, !1) : i["on" + t] = n
				})
			},
			teardown: function() {
				var i = this;
				e.each(t, function(e, t) {
					i.addEventListener ? i.removeEventListener(t, n, !1) : i["on" + t] = null
				})
			}
		};
		var n = function(t) {
			var n = t || window.event;
			if (t = e.event.fix(n), t.type = "jcf-mousewheel", "detail" in n && (t.deltaY = -n.detail), "wheelDelta" in n && (t.deltaY = -n.wheelDelta), "wheelDeltaY" in n && (t.deltaY = -n.wheelDeltaY), "wheelDeltaX" in n && (t.deltaX = -n.wheelDeltaX), "deltaY" in n && (t.deltaY = n.deltaY), "deltaX" in n && (t.deltaX = n.deltaX), t.delta = t.deltaY || t.deltaX, 1 === n.deltaMode) {
				t.delta *= 16, t.deltaY *= 16, t.deltaX *= 16
			}
			return (e.event.dispatch || e.event.handle).call(this, t)
		}
	}();
	var o = {
			fireNativeEvent: function(t, n) {
				e(t).each(function() {
					var e, t = this;
					t.dispatchEvent ? (e = document.createEvent("HTMLEvents"), e.initEvent(n, !0, !0), t.dispatchEvent(e)) : document.createEventObject && (e = document.createEventObject(), e.target = t, t.fireEvent("on" + n, e))
				})
			},
			bindHandlers: function() {
				var t = this;
				e.each(t, function(n, i) {
					0 === n.indexOf("on") && e.isFunction(i) && (t[n] = function() {
						return i.apply(t, arguments)
					})
				})
			}
		},
		a = {
			version: "1.2.3",
			modules: {},
			getOptions: function() {
				return e.extend({}, n)
			},
			setOptions: function(t, i) {
				arguments.length > 1 ? this.modules[t] && e.extend(this.modules[t].prototype.options, i) : e.extend(n, t)
			},
			addModule: function(i) {
				e.isFunction(i) && (i = i(e, window));
				var s = function(i) {
						i.element.data(n.dataKey) || i.element.data(n.dataKey, this), t.push(this), this.options = e.extend({}, n, this.options, r(i.element), i), this.bindHandlers(), this.init.apply(this, arguments)
					},
					r = function(t) {
						var i = t.data(n.optionsKey),
							s = t.attr(n.optionsKey);
						if (i) return i;
						if (s) try {
							return e.parseJSON(s)
						} catch (e) {}
					};
				s.prototype = i, e.extend(i, o), i.plugins && e.each(i.plugins, function(t, n) {
					e.extend(n.prototype, o)
				});
				var a = s.prototype.destroy;
				s.prototype.destroy = function() {
					this.options.element.removeData(this.options.dataKey);
					for (var e = t.length - 1; e >= 0; e--)
						if (t[e] === this) {
							t.splice(e, 1);
							break
						}
					a && a.apply(this, arguments)
				}, this.modules[i.name] = s
			},
			getInstance: function(t) {
				return e(t).data(n.dataKey)
			},
			replace: function(t, i, s) {
				var o, a = this;
				return n.styleSheetCreated || r(), e(t).each(function() {
					var t, r = e(this);
					o = r.data(n.dataKey), o ? o.refresh() : (i || e.each(a.modules, function(e, t) {
						if (t.prototype.matchElement.call(t.prototype, r)) return i = e, !1
					}), i && (t = e.extend({
						element: r
					}, s), o = new a.modules[i](t)))
				}), o
			},
			refresh: function(t) {
				e(t).each(function() {
					var t = e(this).data(n.dataKey);
					t && t.refresh()
				})
			},
			destroy: function(t) {
				e(t).each(function() {
					var t = e(this).data(n.dataKey);
					t && t.destroy()
				})
			},
			replaceAll: function(t) {
				var n = this;
				e.each(this.modules, function(i, s) {
					e(s.prototype.selector, t).each(function() {
						this.className.indexOf("jcf-ignore") < 0 && n.replace(this, i)
					})
				})
			},
			refreshAll: function(i) {
				if (i) e.each(this.modules, function(t, s) {
					e(s.prototype.selector, i).each(function() {
						var t = e(this).data(n.dataKey);
						t && t.refresh()
					})
				});
				else
					for (var s = t.length - 1; s >= 0; s--) t[s].refresh()
			},
			destroyAll: function(i) {
				if (i) e.each(this.modules, function(t, s) {
					e(s.prototype.selector, i).each(function(t, i) {
						var s = e(i).data(n.dataKey);
						s && s.destroy()
					})
				});
				else
					for (; t.length;) t[0].destroy()
			}
		};
	return "function" == typeof define && define.amd && (window.jcf = a), a
}),
function(e) {
	var t = {};
	! function() {
		function n() {}

		function i(e, t, n) {
			return i = e && null != e[t] ? e[t] : d[t], (s = n) ? s(i) : i;
			var i, s
		}

		function s(e) {
			return parseInt(e, 16)
		}

		function r(e) {
			e.width = document.documentElement.clientWidth, e.height = document.documentElement.clientHeight
		}

		function o(e) {
			var t, n, i = e.angle * (Math.PI / 180),
				r = e.spread * (Math.PI / 180);
			return {
				x: e.x,
				y: e.y,
				wobble: 10 * Math.random(),
				velocity: .5 * e.startVelocity + Math.random() * e.startVelocity,
				angle2D: -i + (.5 * r - Math.random() * r),
				tiltAngle: Math.random() * Math.PI,
				color: (t = e.color, n = String(t).replace(/[^0-9a-f]/gi, ""), n.length < 6 && (n = n[0] + n[0] + n[1] + n[1] + n[2] + n[2]), {
					r: s(n.substring(0, 2)),
					g: s(n.substring(2, 4)),
					b: s(n.substring(4, 6))
				}),
				tick: 0,
				totalTicks: e.ticks,
				decay: e.decay,
				random: Math.random() + 5,
				tiltSin: 0,
				tiltCos: 0,
				wobbleX: 0,
				wobbleY: 0
			}
		}

		function a(i, s, o) {
			function a() {
				h = p = null
			}
			var l, d = s.slice(),
				u = i.getContext("2d"),
				h = i.width,
				p = i.height,
				f = (l = function(t) {
						c(function n() {
									h || p || (r(i), h = i.width, p = i.height), u.clearRect(0, 0, h, p), (d = d.filter(function(e) {
													return function(e, t) {
														t.x += Math.cos(t.angle2D) * t.velocity, t.y += Math.sin(t.angle2D) * t.velocity + 3, t.wobble += .1, t.velocity *= t.decay, t.tiltAngle += .1, t.tiltSin = Math.sin(t.tiltAngle), t.tiltCos = Math.cos(t.tiltAngle), t.random = Math.random() + 5, t.wobbleX = t.x + 10 * Math.cos(t.wobble), t.wobbleY = t.y + 10 * Math.sin(t.wobble);
														var n = t.tick++/t.totalTicks,i=t.x+t.random*t.tiltCos,s=t.y+t.random*t.tiltSin,r=t.wobbleX+t.random*t.tiltCos,o=t.wobbleY+t.random*t.tiltSin;return e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-n)+")",e.beginPath(),e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(s)),e.lineTo(Math.floor(r),Math.floor(o)),e.lineTo(Math.floor(i),Math.floor(t.wobbleY)),e.closePath(),e.fill(),t.tick<t.totalTicks}(u,e)})).length?c(n):(e.removeEventListener("resize",a),o(),t())})},t.exports.Promise?new t.exports.Promise(l):(l(n,n),null));return e.addEventListener("resize",a,!1),{addFettis:function(e){return d=d.concat(e),f},canvas:i,promise:f}}var l,c=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t){e.setTimeout(t,1e3/
														60)
												}, d = {
													particleCount: 50,
													angle: 90,
													spread: 45,
													startVelocity: 45,
													decay: .9,
													ticks: 200,
													x: .5,
													y: .5,
													zIndex: 100,
													colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"]
												}; t.exports = function(e) {
													for (var t, n, s, c = i(e, "particleCount", Math.floor), d = i(e, "angle", Number), u = i(e, "spread", Number), h = i(e, "startVelocity", Number), p = i(e, "decay", Number), f = i(e, "colors"), m = i(e, "ticks", Number), g = i(e, "zIndex", Number), v = ((t = i(e, "origin", Object)).x = i(t, "x", Number), t.y = i(t, "y", Number), t), y = c, b = [], w = l ? l.canvas : (n = g, r(s = document.createElement("canvas")), s.style.position = "fixed", s.style.top = "0px", s.style.left = "0px", s.style.pointerEvents = "none", s.style.zIndex = n, s), S = w.width * v.x, x = w.height * v.y; y--;) b.push(o({
														x: S,
														y: x,
														angle: d,
														spread: u,
														startVelocity: h,
														color: f[y % f.length],
														ticks: m,
														decay: p
													}));
													return l ? l.addFettis(b) : (document.body.appendChild(w), (l = a(w, b, function() {
														l = null, document.body.removeChild(w)
													})).promise)
												}, t.exports.Promise = e.Promise || null
											}(), e.confetti = t.exports
										}(window),
										function(e, t, n) {
											"use strict";
											"function" == typeof define && define.amd ? define(n) : "undefined" != typeof module && module.exports ? module.exports = n() : t.exports ? t.exports = n() : t.Fingerprint2 = n()
										}(0, this, function() {
											"use strict";
											Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
												var n;
												if (null == this) throw new TypeError("'this' is null or undefined");
												var i = Object(this),
													s = i.length >>> 0;
												if (0 === s) return -1;
												var r = +t || 0;
												if (Math.abs(r) === 1 / 0 && (r = 0), r >= s) return -1;
												for (n = Math.max(r >= 0 ? r : s - Math.abs(r), 0); n < s;) {
													if (n in i && i[n] === e) return n;
													n++
												}
												return -1
											});
											var e = function(t) {
												if (!(this instanceof e)) return new e(t);
												var n = {
													swfContainerId: "fingerprintjs2",
													swfPath: "flash/compiled/FontList.swf",
													detectScreenOrientation: !0,
													sortPluginsFor: [/palemoon/i],
													userDefinedFonts: []
												};
												this.options = this.extend(t, n), this.nativeForEach = Array.prototype.forEach, this.nativeMap = Array.prototype.map
											};
											return e.prototype = {
												extend: function(e, t) {
													if (null == e) return t;
													for (var n in e) null != e[n] && t[n] !== e[n] && (t[n] = e[n]);
													return t
												},
												log: function(e) {
													window.console && console.log(e)
												},
												get: function(e) {
													var t = [];
													t = this.userAgentKey(t), t = this.languageKey(t), t = this.colorDepthKey(t), t = this.pixelRatioKey(t), t = this.hardwareConcurrencyKey(t), t = this.screenResolutionKey(t), t = this.availableScreenResolutionKey(t), t = this.timezoneOffsetKey(t), t = this.sessionStorageKey(t), t = this.localStorageKey(t), t = this.indexedDbKey(t), t = this.addBehaviorKey(t), t = this.openDatabaseKey(t), t = this.cpuClassKey(t), t = this.platformKey(t), t = this.doNotTrackKey(t), t = this.pluginsKey(t), t = this.canvasKey(t), t = this.webglKey(t), t = this.adBlockKey(t), t = this.hasLiedLanguagesKey(t), t = this.hasLiedResolutionKey(t), t = this.hasLiedOsKey(t), t = this.hasLiedBrowserKey(t), t = this.touchSupportKey(t);
													var n = this;
													this.fontsKey(t, function(t) {
														var i = [];
														n.each(t, function(e) {
															var t = e.value;
															void 0 !== e.value.join && (t = e.value.join(";")), i.push(t)
														});
														var s = n.x64hash128(i.join("~~~"), 31);
														return e(s, t)
													})
												},
												userAgentKey: function(e) {
													return this.options.excludeUserAgent || e.push({
														key: "user_agent",
														value: this.getUserAgent()
													}), e
												},
												getUserAgent: function() {
													return navigator.userAgent
												},
												languageKey: function(e) {
													return this.options.excludeLanguage || e.push({
														key: "language",
														value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || ""
													}), e
												},
												colorDepthKey: function(e) {
													return this.options.excludeColorDepth || e.push({
														key: "color_depth",
														value: screen.colorDepth || -1
													}), e
												},
												pixelRatioKey: function(e) {
													return this.options.excludePixelRatio || e.push({
														key: "pixel_ratio",
														value: this.getPixelRatio()
													}), e
												},
												getPixelRatio: function() {
													return window.devicePixelRatio || ""
												},
												screenResolutionKey: function(e) {
													return this.options.excludeScreenResolution ? e : this.getScreenResolution(e)
												},
												getScreenResolution: function(e) {
													var t;
													return t = this.options.detectScreenOrientation && screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height], void 0 !== t && e.push({
														key: "resolution",
														value: t
													}), e
												},
												availableScreenResolutionKey: function(e) {
													return this.options.excludeAvailableScreenResolution ? e : this.getAvailableScreenResolution(e)
												},
												getAvailableScreenResolution: function(e) {
													var t;
													return screen.availWidth && screen.availHeight && (t = this.options.detectScreenOrientation ? screen.availHeight > screen.availWidth ? [screen.availHeight, screen.availWidth] : [screen.availWidth, screen.availHeight] : [screen.availHeight, screen.availWidth]), void 0 !== t && e.push({
														key: "available_resolution",
														value: t
													}), e
												},
												timezoneOffsetKey: function(e) {
													return this.options.excludeTimezoneOffset || e.push({
														key: "timezone_offset",
														value: (new Date).getTimezoneOffset()
													}), e
												},
												sessionStorageKey: function(e) {
													return !this.options.excludeSessionStorage && this.hasSessionStorage() && e.push({
														key: "session_storage",
														value: 1
													}), e
												},
												localStorageKey: function(e) {
													return !this.options.excludeSessionStorage && this.hasLocalStorage() && e.push({
														key: "local_storage",
														value: 1
													}), e
												},
												indexedDbKey: function(e) {
													return !this.options.excludeIndexedDB && this.hasIndexedDB() && e.push({
														key: "indexed_db",
														value: 1
													}), e
												},
												addBehaviorKey: function(e) {
													return document.body && !this.options.excludeAddBehavior && document.body.addBehavior && e.push({
														key: "add_behavior",
														value: 1
													}), e
												},
												openDatabaseKey: function(e) {
													return !this.options.excludeOpenDatabase && window.openDatabase && e.push({
														key: "open_database",
														value: 1
													}), e
												},
												cpuClassKey: function(e) {
													return this.options.excludeCpuClass || e.push({
														key: "cpu_class",
														value: this.getNavigatorCpuClass()
													}), e
												},
												platformKey: function(e) {
													return this.options.excludePlatform || e.push({
														key: "navigator_platform",
														value: this.getNavigatorPlatform()
													}), e
												},
												doNotTrackKey: function(e) {
													return this.options.excludeDoNotTrack || e.push({
														key: "do_not_track",
														value: this.getDoNotTrack()
													}), e
												},
												canvasKey: function(e) {
													return !this.options.excludeCanvas && this.isCanvasSupported() && e.push({
														key: "canvas",
														value: this.getCanvasFp()
													}), e
												},
												webglKey: function(e) {
													return this.options.excludeWebGL ? e : this.isWebGlSupported() ? (e.push({
														key: "webgl",
														value: this.getWebglFp()
													}), e) : e
												},
												adBlockKey: function(e) {
													return this.options.excludeAdBlock || e.push({
														key: "adblock",
														value: this.getAdBlock()
													}), e
												},
												hasLiedLanguagesKey: function(e) {
													return this.options.excludeHasLiedLanguages || e.push({
														key: "has_lied_languages",
														value: this.getHasLiedLanguages()
													}), e
												},
												hasLiedResolutionKey: function(e) {
													return this.options.excludeHasLiedResolution || e.push({
														key: "has_lied_resolution",
														value: this.getHasLiedResolution()
													}), e
												},
												hasLiedOsKey: function(e) {
													return this.options.excludeHasLiedOs || e.push({
														key: "has_lied_os",
														value: this.getHasLiedOs()
													}), e
												},
												hasLiedBrowserKey: function(e) {
													return this.options.excludeHasLiedBrowser || e.push({
														key: "has_lied_browser",
														value: this.getHasLiedBrowser()
													}), e
												},
												fontsKey: function(e, t) {
													return this.options.excludeJsFonts ? this.flashFontsKey(e, t) : this.jsFontsKey(e, t)
												},
												flashFontsKey: function(e, t) {
													return this.options.excludeFlashFonts ? t(e) : this.hasSwfObjectLoaded() && this.hasMinFlashInstalled() ? void 0 === this.options.swfPath ? t(e) : void this.loadSwfAndDetectFonts(function(n) {
														e.push({
															key: "swf_fonts",
															value: n.join(";")
														}), t(e)
													}) : t(e)
												},
												jsFontsKey: function(e, t) {
													var n = this;
													return setTimeout(function() {
														var i = ["monospace", "sans-serif", "serif"],
															s = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"],
															r = ["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"];
														n.options.extendedJsFonts && (s = s.concat(r)), s = s.concat(n.options.userDefinedFonts);
														var o = document.getElementsByTagName("body")[0],
															a = document.createElement("div"),
															l = document.createElement("div"),
															c = {},
															d = {},
															u = function() {
																var e = document.createElement("span");
																return e.style.position = "absolute", e.style.left = "-9999px", e.style.fontSize = "72px", e.style.lineHeight = "normal", e.innerHTML = "mmmmmmmmmmlli", e
															},
															h = function(e, t) {
																var n = u();
																return n.style.fontFamily = "'" + e + "'," + t, n
															},
															p = function() {
																for (var e = [], t = 0, n = i.length; t < n; t++) {
																	var s = u();
																	s.style.fontFamily = i[t], a.appendChild(s), e.push(s)
																}
																return e
															}();
														o.appendChild(a);
														for (var f = 0, m = i.length; f < m; f++) c[i[f]] = p[f].offsetWidth, d[i[f]] = p[f].offsetHeight;
														var g = function() {
															for (var e = {}, t = 0, n = s.length; t < n; t++) {
																for (var r = [], o = 0, a = i.length; o < a; o++) {
																	var c = h(s[t], i[o]);
																	l.appendChild(c), r.push(c)
																}
																e[s[t]] = r
															}
															return e
														}();
														o.appendChild(l);
														for (var v = [], y = 0, b = s.length; y < b; y++)(function(e) {
															for (var t = !1, n = 0; n < i.length; n++)
																if (t = e[n].offsetWidth !== c[i[n]] || e[n].offsetHeight !== d[i[n]]) return t;
															return t
														})(g[s[y]]) && v.push(s[y]);
														o.removeChild(l), o.removeChild(a), e.push({
															key: "js_fonts",
															value: v
														}), t(e)
													}, 1)
												},
												pluginsKey: function(e) {
													return this.options.excludePlugins || (this.isIE() ? this.options.excludeIEPlugins || e.push({
														key: "ie_plugins",
														value: this.getIEPlugins()
													}) : e.push({
														key: "regular_plugins",
														value: this.getRegularPlugins()
													})), e
												},
												getRegularPlugins: function() {
													for (var e = [], t = 0, n = navigator.plugins.length; t < n; t++) e.push(navigator.plugins[t]);
													return this.pluginsShouldBeSorted() && (e = e.sort(function(e, t) {
														return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
													})), this.map(e, function(e) {
														var t = this.map(e, function(e) {
															return [e.type, e.suffixes].join("~")
														}).join(",");
														return [e.name, e.description, t].join("::")
													}, this)
												},
												getIEPlugins: function() {
													var e = [];
													if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window) {
														var t = ["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"];
														e = this.map(t, function(e) {
															try {
																return new ActiveXObject(e), e
															} catch (e) {
																return null
															}
														})
													}
													return navigator.plugins && (e = e.concat(this.getRegularPlugins())), e
												},
												pluginsShouldBeSorted: function() {
													for (var e = !1, t = 0, n = this.options.sortPluginsFor.length; t < n; t++) {
														var i = this.options.sortPluginsFor[t];
														if (navigator.userAgent.match(i)) {
															e = !0;
															break
														}
													}
													return e
												},
												touchSupportKey: function(e) {
													return this.options.excludeTouchSupport || e.push({
														key: "touch_support",
														value: this.getTouchSupport()
													}), e
												},
												hardwareConcurrencyKey: function(e) {
													return this.options.excludeHardwareConcurrency || e.push({
														key: "hardware_concurrency",
														value: this.getHardwareConcurrency()
													}), e
												},
												hasSessionStorage: function() {
													try {
														return !!window.sessionStorage
													} catch (e) {
														return !0
													}
												},
												hasLocalStorage: function() {
													try {
														return !!window.localStorage
													} catch (e) {
														return !0
													}
												},
												hasIndexedDB: function() {
													try {
														return !!window.indexedDB
													} catch (e) {
														return !0
													}
												},
												getHardwareConcurrency: function() {
													return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : "unknown"
												},
												getNavigatorCpuClass: function() {
													return navigator.cpuClass ? navigator.cpuClass : "unknown"
												},
												getNavigatorPlatform: function() {
													return navigator.platform ? navigator.platform : "unknown"
												},
												getDoNotTrack: function() {
													return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : "unknown"
												},
												getTouchSupport: function() {
													var e = 0,
														t = !1;
													void 0 !== navigator.maxTouchPoints ? e = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (e = navigator.msMaxTouchPoints);
													try {
														document.createEvent("TouchEvent"), t = !0
													} catch (e) {}
													return [e, t, "ontouchstart" in window]
												},
												getCanvasFp: function() {
													var e = [],
														t = document.createElement("canvas");
													t.width = 2e3, t.height = 200, t.style.display = "inline";
													var n = t.getContext("2d");
													return n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6), e.push("canvas winding:" + (!1 === n.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(125, 1, 62, 20), n.fillStyle = "#069", this.options.dontUseFakeFontInCanvas ? n.font = "11pt Arial" : n.font = "11pt no-real-font-123", n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.2)", n.font = "18pt Arial", n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45), n.globalCompositeOperation = "multiply", n.fillStyle = "rgb(255,0,255)", n.beginPath(), n.arc(50, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(0,255,255)", n.beginPath(), n.arc(100, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,255,0)", n.beginPath(), n.arc(75, 100, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,0,255)", n.arc(75, 75, 75, 0, 2 * Math.PI, !0), n.arc(75, 75, 25, 0, 2 * Math.PI, !0), n.fill("evenodd"), e.push("canvas fp:" + t.toDataURL()), e.join("~")
												},
												getWebglFp: function() {
													var e, t = function(t) {
														return e.clearColor(0, 0, 0, 1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), "[" + t[0] + ", " + t[1] + "]"
													};
													if (!(e = this.getWebglCanvas())) return null;
													var n = [],
														i = e.createBuffer();
													e.bindBuffer(e.ARRAY_BUFFER, i);
													var s = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
													e.bufferData(e.ARRAY_BUFFER, s, e.STATIC_DRAW), i.itemSize = 3, i.numItems = 3;
													var r = e.createProgram(),
														o = e.createShader(e.VERTEX_SHADER);
													e.shaderSource(o, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), e.compileShader(o);
													var a = e.createShader(e.FRAGMENT_SHADER);
													e.shaderSource(a, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), e.compileShader(a), e.attachShader(r, o), e.attachShader(r, a), e.linkProgram(r), e.useProgram(r), r.vertexPosAttrib = e.getAttribLocation(r, "attrVertex"), r.offsetUniform = e.getUniformLocation(r, "uniformOffset"), e.enableVertexAttribArray(r.vertexPosArray), e.vertexAttribPointer(r.vertexPosAttrib, i.itemSize, e.FLOAT, !1, 0, 0), e.uniform2f(r.offsetUniform, 1, 1), e.drawArrays(e.TRIANGLE_STRIP, 0, i.numItems), null != e.canvas && n.push(e.canvas.toDataURL()), n.push("extensions:" + e.getSupportedExtensions().join(";")), n.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))), n.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))), n.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)), n.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")), n.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)), n.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)), n.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)), n.push("webgl max anisotropy:" + function(e) {
														var t, n = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
														return n ? (t = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === t && (t = 2), t) : null
													}(e)), n.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), n.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)), n.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)), n.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)), n.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)), n.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)), n.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)), n.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)), n.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), n.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)), n.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))), n.push("webgl red bits:" + e.getParameter(e.RED_BITS)), n.push("webgl renderer:" + e.getParameter(e.RENDERER)), n.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)), n.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)), n.push("webgl vendor:" + e.getParameter(e.VENDOR)), n.push("webgl version:" + e.getParameter(e.VERSION));
													try {
														var l = e.getExtension("WEBGL_debug_renderer_info");
														l && (n.push("webgl unmasked vendor:" + e.getParameter(l.UNMASKED_VENDOR_WEBGL)), n.push("webgl unmasked renderer:" + e.getParameter(l.UNMASKED_RENDERER_WEBGL)))
													} catch (e) {}
													return e.getShaderPrecisionFormat ? (n.push("webgl vertex shader high float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision), n.push("webgl vertex shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMin), n.push("webgl vertex shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMax), n.push("webgl vertex shader medium float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision), n.push("webgl vertex shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMin), n.push("webgl vertex shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMax), n.push("webgl vertex shader low float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).precision), n.push("webgl vertex shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMin), n.push("webgl vertex shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMax), n.push("webgl fragment shader high float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision), n.push("webgl fragment shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMin), n.push("webgl fragment shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMax), n.push("webgl fragment shader medium float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision), n.push("webgl fragment shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMin), n.push("webgl fragment shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMax), n.push("webgl fragment shader low float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).precision), n.push("webgl fragment shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMin), n.push("webgl fragment shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMax), n.push("webgl vertex shader high int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).precision), n.push("webgl vertex shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMin), n.push("webgl vertex shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMax), n.push("webgl vertex shader medium int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).precision), n.push("webgl vertex shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMin), n.push("webgl vertex shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMax), n.push("webgl vertex shader low int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).precision), n.push("webgl vertex shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMin), n.push("webgl vertex shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMax), n.push("webgl fragment shader high int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).precision), n.push("webgl fragment shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMin), n.push("webgl fragment shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMax), n.push("webgl fragment shader medium int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).precision), n.push("webgl fragment shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMin), n.push("webgl fragment shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMax), n.push("webgl fragment shader low int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).precision), n.push("webgl fragment shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMin), n.push("webgl fragment shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMax), n.join("~")) : n.join("~")
												},
												getAdBlock: function() {
													var e = document.createElement("div");
													e.innerHTML = "&nbsp;", e.className = "adsbox";
													var t = !1;
													try {
														document.body.appendChild(e), t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(e)
													} catch (e) {
														t = !1
													}
													return t
												},
												getHasLiedLanguages: function() {
													if (void 0 !== navigator.languages) try {
														if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0
													} catch (e) {
														return !0
													}
													return !1
												},
												getHasLiedResolution: function() {
													return screen.width < screen.availWidth || screen.height < screen.availHeight
												},
												getHasLiedOs: function() {
													var e, t = navigator.userAgent.toLowerCase(),
														n = navigator.oscpu,
														i = navigator.platform.toLowerCase();
													e = t.indexOf("windows phone") >= 0 ? "Windows Phone" : t.indexOf("win") >= 0 ? "Windows" : t.indexOf("android") >= 0 ? "Android" : t.indexOf("linux") >= 0 ? "Linux" : t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0 ? "iOS" : t.indexOf("mac") >= 0 ? "Mac" : "Other";
													if (("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e) return !0;
													if (void 0 !== n) {
														if (n = n.toLowerCase(), n.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e) return !0;
														if (n.indexOf("linux") >= 0 && "Linux" !== e && "Android" !== e) return !0;
														if (n.indexOf("mac") >= 0 && "Mac" !== e && "iOS" !== e) return !0;
														if (0 === n.indexOf("win") && 0 === n.indexOf("linux") && n.indexOf("mac") >= 0 && "other" !== e) return !0
													}
													return i.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e || (i.indexOf("linux") >= 0 || i.indexOf("android") >= 0 || i.indexOf("pike") >= 0) && "Linux" !== e && "Android" !== e || (i.indexOf("mac") >= 0 || i.indexOf("ipad") >= 0 || i.indexOf("ipod") >= 0 || i.indexOf("iphone") >= 0) && "Mac" !== e && "iOS" !== e || 0 === i.indexOf("win") && 0 === i.indexOf("linux") && i.indexOf("mac") >= 0 && "other" !== e || void 0 === navigator.plugins && "Windows" !== e && "Windows Phone" !== e
												},
												getHasLiedBrowser: function() {
													var e, t = navigator.userAgent.toLowerCase(),
														n = navigator.productSub;
													if (("Chrome" === (e = t.indexOf("firefox") >= 0 ? "Firefox" : t.indexOf("opera") >= 0 || t.indexOf("opr") >= 0 ? "Opera" : t.indexOf("chrome") >= 0 ? "Chrome" : t.indexOf("safari") >= 0 ? "Safari" : t.indexOf("trident") >= 0 ? "Internet Explorer" : "Other") || "Safari" === e || "Opera" === e) && "20030107" !== n) return !0;
													var i = eval.toString().length;
													if (37 === i && "Safari" !== e && "Firefox" !== e && "Other" !== e) return !0;
													if (39 === i && "Internet Explorer" !== e && "Other" !== e) return !0;
													if (33 === i && "Chrome" !== e && "Opera" !== e && "Other" !== e) return !0;
													var s;
													try {
														throw "a"
													} catch (e) {
														try {
															e.toSource(), s = !0
														} catch (e) {
															s = !1
														}
													}
													return !(!s || "Firefox" === e || "Other" === e)
												},
												isCanvasSupported: function() {
													var e = document.createElement("canvas");
													return !(!e.getContext || !e.getContext("2d"))
												},
												isWebGlSupported: function() {
													if (!this.isCanvasSupported()) return !1;
													var e, t = document.createElement("canvas");
													try {
														e = t.getContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
													} catch (t) {
														e = !1
													}
													return !!window.WebGLRenderingContext && !!e
												},
												isIE: function() {
													return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
												},
												hasSwfObjectLoaded: function() {
													return void 0 !== window.swfobject
												},
												hasMinFlashInstalled: function() {
													return swfobject.hasFlashPlayerVersion("9.0.0")
												},
												addFlashDivNode: function() {
													var e = document.createElement("div");
													e.setAttribute("id", this.options.swfContainerId), document.body.appendChild(e)
												},
												loadSwfAndDetectFonts: function(e) {
													var t = "___fp_swf_loaded";
													window[t] = function(t) {
														e(t)
													};
													var n = this.options.swfContainerId;
													this.addFlashDivNode();
													var i = {
															onReady: t
														},
														s = {
															allowScriptAccess: "always",
															menu: "false"
														};
													swfobject.embedSWF(this.options.swfPath, n, "1", "1", "9.0.0", !1, i, s, {})
												},
												getWebglCanvas: function() {
													var e = document.createElement("canvas"),
														t = null;
													try {
														t = e.getContext("webgl") || e.getContext("experimental-webgl")
													} catch (e) {}
													return t || (t = null), t
												},
												each: function(e, t, n) {
													if (null !== e)
														if (this.nativeForEach && e.forEach === this.nativeForEach) e.forEach(t, n);
														else if (e.length === +e.length) {
														for (var i = 0, s = e.length; i < s; i++)
															if (t.call(n, e[i], i, e) === {}) return
													} else
														for (var r in e)
															if (e.hasOwnProperty(r) && t.call(n, e[r], r, e) === {}) return
												},
												map: function(e, t, n) {
													var i = [];
													return null == e ? i : this.nativeMap && e.map === this.nativeMap ? e.map(t, n) : (this.each(e, function(e, s, r) {
														i[i.length] = t.call(n, e, s, r)
													}), i)
												},
												x64Add: function(e, t) {
													e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
													var n = [0, 0, 0, 0];
													return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
												},
												x64Multiply: function(e, t) {
													e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
													var n = [0, 0, 0, 0];
													return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
												},
												x64Rotl: function(e, t) {
													return t %= 64, 32 === t ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
												},
												x64LeftShift: function(e, t) {
													return t %= 64, 0 === t ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
												},
												x64Xor: function(e, t) {
													return [e[0] ^ t[0], e[1] ^ t[1]]
												},
												x64Fmix: function(e) {
													return e = this.x64Xor(e, [0, e[0] >>> 1]), e = this.x64Multiply(e, [4283543511, 3981806797]), e = this.x64Xor(e, [0, e[0] >>> 1]), e = this.x64Multiply(e, [3301882366, 444984403]), e = this.x64Xor(e, [0, e[0] >>> 1])
												},
												x64hash128: function(e, t) {
													e = e || "", t = t || 0;
													for (var n = e.length % 16, i = e.length - n, s = [0, t], r = [0, t], o = [0, 0], a = [0, 0], l = [2277735313, 289559509], c = [1291169091, 658871167], d = 0; d < i; d += 16) o = [255 & e.charCodeAt(d + 4) | (255 & e.charCodeAt(d + 5)) << 8 | (255 & e.charCodeAt(d + 6)) << 16 | (255 & e.charCodeAt(d + 7)) << 24, 255 & e.charCodeAt(d) | (255 & e.charCodeAt(d + 1)) << 8 | (255 & e.charCodeAt(d + 2)) << 16 | (255 & e.charCodeAt(d + 3)) << 24], a = [255 & e.charCodeAt(d + 12) | (255 & e.charCodeAt(d + 13)) << 8 | (255 & e.charCodeAt(d + 14)) << 16 | (255 & e.charCodeAt(d + 15)) << 24, 255 & e.charCodeAt(d + 8) | (255 & e.charCodeAt(d + 9)) << 8 | (255 & e.charCodeAt(d + 10)) << 16 | (255 & e.charCodeAt(d + 11)) << 24], o = this.x64Multiply(o, l), o = this.x64Rotl(o, 31), o = this.x64Multiply(o, c), s = this.x64Xor(s, o), s = this.x64Rotl(s, 27), s = this.x64Add(s, r), s = this.x64Add(this.x64Multiply(s, [0, 5]), [0, 1390208809]), a = this.x64Multiply(a, c), a = this.x64Rotl(a, 33), a = this.x64Multiply(a, l), r = this.x64Xor(r, a), r = this.x64Rotl(r, 31), r = this.x64Add(r, s), r = this.x64Add(this.x64Multiply(r, [0, 5]), [0, 944331445]);
													switch (o = [0, 0], a = [0, 0], n) {
														case 15:
															a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(d + 14)], 48));
														case 14:
															a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(d + 13)], 40));
														case 13:
															a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(d + 12)], 32));
														case 12:
															a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(d + 11)], 24));
														case 11:
															a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(d + 10)], 16));
														case 10:
															a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(d + 9)], 8));
														case 9:
															a = this.x64Xor(a, [0, e.charCodeAt(d + 8)]), a = this.x64Multiply(a, c), a = this.x64Rotl(a, 33), a = this.x64Multiply(a, l), r = this.x64Xor(r, a);
														case 8:
															o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(d + 7)], 56));
														case 7:
															o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(d + 6)], 48));
														case 6:
															o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(d + 5)], 40));
														case 5:
															o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(d + 4)], 32));
														case 4:
															o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(d + 3)], 24));
														case 3:
															o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(d + 2)], 16));
														case 2:
															o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(d + 1)], 8));
														case 1:
															o = this.x64Xor(o, [0, e.charCodeAt(d)]), o = this.x64Multiply(o, l), o = this.x64Rotl(o, 31), o = this.x64Multiply(o, c), s = this.x64Xor(s, o)
													}
													return s = this.x64Xor(s, [0, e.length]), r = this.x64Xor(r, [0, e.length]), s = this.x64Add(s, r), r = this.x64Add(r, s), s = this.x64Fmix(s), r = this.x64Fmix(r), s = this.x64Add(s, r), r = this.x64Add(r, s), ("00000000" + (s[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (r[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (r[1] >>> 0).toString(16)).slice(-8)
												}
											}, e.VERSION = "1.5.0", e
										}),
										function(e) {
											e.addModule(function(e) {
												"use strict";
												return {
													name: "Checkbox",
													selector: 'input[type="checkbox"]',
													options: {
														wrapNative: !0,
														checkedClass: "jcf-checked",
														uncheckedClass: "jcf-unchecked",
														labelActiveClass: "jcf-label-active",
														fakeStructure: '<span class="jcf-checkbox"><span></span></span>'
													},
													matchElement: function(e) {
														return e.is(":checkbox")
													},
													init: function() {
														this.initStructure(), this.attachEvents(), this.refresh()
													},
													initStructure: function() {
														this.doc = e(document), this.realElement = e(this.options.element), this.fakeElement = e(this.options.fakeStructure).insertAfter(this.realElement), this.labelElement = this.getLabelFor(), this.options.wrapNative ? this.realElement.appendTo(this.fakeElement).css({
															position: "absolute",
															height: "100%",
															width: "100%",
															opacity: 0,
															margin: 0
														}) : this.realElement.addClass(this.options.hiddenClass)
													},
													attachEvents: function() {
														this.realElement.on({
															focus: this.onFocus,
															click: this.onRealClick
														}), this.fakeElement.on("click", this.onFakeClick), this.fakeElement.on("jcf-pointerdown", this.onPress)
													},
													onRealClick: function(e) {
														var t = this;
														this.savedEventObject = e, setTimeout(function() {
															t.refresh()
														}, 0)
													},
													onFakeClick: function(e) {
														this.options.wrapNative && this.realElement.is(e.target) || this.realElement.is(":disabled") || (delete this.savedEventObject, this.stateChecked = this.realElement.prop("checked"), this.realElement.prop("checked", !this.stateChecked), this.fireNativeEvent(this.realElement, "click"), this.savedEventObject && this.savedEventObject.isDefaultPrevented() ? this.realElement.prop("checked", this.stateChecked) : this.fireNativeEvent(this.realElement, "change"), delete this.savedEventObject)
													},
													onFocus: function() {
														this.pressedFlag && this.focusedFlag || (this.focusedFlag = !0, this.fakeElement.addClass(this.options.focusClass), this.realElement.on("blur", this.onBlur))
													},
													onBlur: function() {
														this.pressedFlag || (this.focusedFlag = !1, this.fakeElement.removeClass(this.options.focusClass), this.realElement.off("blur", this.onBlur))
													},
													onPress: function(e) {
														this.focusedFlag || "mouse" !== e.pointerType || this.realElement.focus(), this.pressedFlag = !0, this.fakeElement.addClass(this.options.pressedClass), this.doc.on("jcf-pointerup", this.onRelease)
													},
													onRelease: function(e) {
														this.focusedFlag && "mouse" === e.pointerType && this.realElement.focus(), this.pressedFlag = !1, this.fakeElement.removeClass(this.options.pressedClass), this.doc.off("jcf-pointerup", this.onRelease)
													},
													getLabelFor: function() {
														var t = this.realElement.closest("label"),
															n = this.realElement.prop("id");
														return !t.length && n && (t = e('label[for="' + n + '"]')), t.length ? t : null
													},
													refresh: function() {
														var e = this.realElement.is(":checked"),
															t = this.realElement.is(":disabled");
														this.fakeElement.toggleClass(this.options.checkedClass, e).toggleClass(this.options.uncheckedClass, !e).toggleClass(this.options.disabledClass, t), this.labelElement && this.labelElement.toggleClass(this.options.labelActiveClass, e)
													},
													destroy: function() {
														this.options.wrapNative ? this.realElement.insertBefore(this.fakeElement).css({
															position: "",
															width: "",
															height: "",
															opacity: "",
															margin: ""
														}) : this.realElement.removeClass(this.options.hiddenClass), this.fakeElement.off("jcf-pointerdown", this.onPress), this.fakeElement.remove(), this.doc.off("jcf-pointerup", this.onRelease), this.realElement.off({
															focus: this.onFocus,
															click: this.onRealClick
														})
													}
												}
											})
										}(jcf),
										function(e) {
											e.addModule(function(e) {
												"use strict";
												return {
													name: "File",
													selector: 'input[type="file"]',
													options: {
														fakeStructure: '<span class="jcf-file"><span class="jcf-fake-input"></span><span class="jcf-upload-button"><span class="jcf-button-content"></span></span></span>',
														buttonText: "Choose file",
														placeholderText: "No file chosen",
														realElementClass: "jcf-real-element",
														extensionPrefixClass: "jcf-extension-",
														selectedFileBlock: ".jcf-fake-input",
														buttonTextBlock: ".jcf-button-content"
													},
													matchElement: function(e) {
														return e.is('input[type="file"]')
													},
													init: function() {
														this.initStructure(), this.attachEvents(), this.refresh()
													},
													initStructure: function() {
														this.doc = e(document), this.realElement = e(this.options.element).addClass(this.options.realElementClass), this.fakeElement = e(this.options.fakeStructure).insertBefore(this.realElement), this.fileNameBlock = this.fakeElement.find(this.options.selectedFileBlock), this.buttonTextBlock = this.fakeElement.find(this.options.buttonTextBlock).text(this.options.buttonText), this.realElement.appendTo(this.fakeElement).css({
															position: "absolute",
															opacity: 0
														})
													},
													attachEvents: function() {
														this.realElement.on({
															"jcf-pointerdown": this.onPress,
															change: this.onChange,
															focus: this.onFocus
														})
													},
													onChange: function() {
														this.refresh()
													},
													onFocus: function() {
														this.fakeElement.addClass(this.options.focusClass), this.realElement.on("blur", this.onBlur)
													},
													onBlur: function() {
														this.fakeElement.removeClass(this.options.focusClass), this.realElement.off("blur", this.onBlur)
													},
													onPress: function() {
														this.fakeElement.addClass(this.options.pressedClass), this.doc.on("jcf-pointerup", this.onRelease)
													},
													onRelease: function() {
														this.fakeElement.removeClass(this.options.pressedClass), this.doc.off("jcf-pointerup", this.onRelease)
													},
													getFileName: function() {
														var t = "",
															n = this.realElement.prop("files");
														return n && n.length ? e.each(n, function(e, n) {
															t += (e > 0 ? ", " : "") + n.name
														}) : t = this.realElement.val().replace(/^[\s\S]*(?:\\|\/)([\s\S^\\\/]*)$/g, "$1"), t
													},
													getFileExtension: function() {
														var e = this.realElement.val();
														return e.lastIndexOf(".") < 0 ? "" : e.substring(e.lastIndexOf(".") + 1).toLowerCase()
													},
													updateExtensionClass: function() {
														var e = this.getFileExtension(),
															t = this.fakeElement.prop("className"),
															n = t.replace(new RegExp("(\\s|^)" + this.options.extensionPrefixClass + "[^ ]+", "gi"), "");
														this.fakeElement.prop("className", n), e && this.fakeElement.addClass(this.options.extensionPrefixClass + e)
													},
													refresh: function() {
														var e = this.getFileName() || this.options.placeholderText;
														this.fakeElement.toggleClass(this.options.disabledClass, this.realElement.is(":disabled")), this.fileNameBlock.text(e), this.updateExtensionClass()
													},
													destroy: function() {
														this.realElement.insertBefore(this.fakeElement).removeClass(this.options.realElementClass).css({
															position: "",
															opacity: ""
														}), this.fakeElement.remove(), this.realElement.off({
															"jcf-pointerdown": this.onPress,
															change: this.onChange,
															focus: this.onFocus,
															blur: this.onBlur
														}), this.doc.off("jcf-pointerup", this.onRelease)
													}
												}
											})
										}(jcf),
										function(e) {
											e.addModule(function(t) {
												"use strict";
												return {
													name: "Radio",
													selector: 'input[type="radio"]',
													options: {
														wrapNative: !0,
														checkedClass: "jcf-checked",
														uncheckedClass: "jcf-unchecked",
														labelActiveClass: "jcf-label-active",
														fakeStructure: '<span class="jcf-radio"><span></span></span>'
													},
													matchElement: function(e) {
														return e.is(":radio")
													},
													init: function() {
														this.initStructure(), this.attachEvents(), this.refresh()
													},
													initStructure: function() {
														this.doc = t(document), this.realElement = t(this.options.element), this.fakeElement = t(this.options.fakeStructure).insertAfter(this.realElement), this.labelElement = this.getLabelFor(), this.options.wrapNative ? this.realElement.prependTo(this.fakeElement).css({
															position: "absolute",
															opacity: 0
														}) : this.realElement.addClass(this.options.hiddenClass)
													},
													attachEvents: function() {
														this.realElement.on({
															focus: this.onFocus,
															click: this.onRealClick
														}), this.fakeElement.on("click", this.onFakeClick), this.fakeElement.on("jcf-pointerdown", this.onPress)
													},
													onRealClick: function(e) {
														var t = this;
														this.savedEventObject = e, setTimeout(function() {
															t.refreshRadioGroup()
														}, 0)
													},
													onFakeClick: function(e) {
														this.options.wrapNative && this.realElement.is(e.target) || this.realElement.is(":disabled") || (delete this.savedEventObject, this.currentActiveRadio = this.getCurrentActiveRadio(), this.stateChecked = this.realElement.prop("checked"), this.realElement.prop("checked", !0), this.fireNativeEvent(this.realElement, "click"), this.savedEventObject && this.savedEventObject.isDefaultPrevented() ? (this.realElement.prop("checked", this.stateChecked), this.currentActiveRadio.prop("checked", !0)) : this.fireNativeEvent(this.realElement, "change"), delete this.savedEventObject)
													},
													onFocus: function() {
														this.pressedFlag && this.focusedFlag || (this.focusedFlag = !0, this.fakeElement.addClass(this.options.focusClass), this.realElement.on("blur", this.onBlur))
													},
													onBlur: function() {
														this.pressedFlag || (this.focusedFlag = !1, this.fakeElement.removeClass(this.options.focusClass), this.realElement.off("blur", this.onBlur))
													},
													onPress: function(e) {
														this.focusedFlag || "mouse" !== e.pointerType || this.realElement.focus(), this.pressedFlag = !0, this.fakeElement.addClass(this.options.pressedClass), this.doc.on("jcf-pointerup", this.onRelease)
													},
													onRelease: function(e) {
														this.focusedFlag && "mouse" === e.pointerType && this.realElement.focus(), this.pressedFlag = !1, this.fakeElement.removeClass(this.options.pressedClass), this.doc.off("jcf-pointerup", this.onRelease)
													},
													getCurrentActiveRadio: function() {
														return this.getRadioGroup(this.realElement).filter(":checked")
													},
													getRadioGroup: function(e) {
														var n = e.attr("name"),
															i = e.parents("form");
														return n ? i.length ? i.find('input[name="' + n + '"]') : t('input[name="' + n + '"]:not(form input)') : e
													},
													getLabelFor: function() {
														var e = this.realElement.closest("label"),
															n = this.realElement.prop("id");
														return !e.length && n && (e = t('label[for="' + n + '"]')), e.length ? e : null
													},
													refreshRadioGroup: function() {
														this.getRadioGroup(this.realElement).each(function() {
															e.refresh(this)
														})
													},
													refresh: function() {
														var e = this.realElement.is(":checked"),
															t = this.realElement.is(":disabled");
														this.fakeElement.toggleClass(this.options.checkedClass, e).toggleClass(this.options.uncheckedClass, !e).toggleClass(this.options.disabledClass, t), this.labelElement && this.labelElement.toggleClass(this.options.labelActiveClass, e)
													},
													destroy: function() {
														this.options.wrapNative ? this.realElement.insertBefore(this.fakeElement).css({
															position: "",
															width: "",
															height: "",
															opacity: "",
															margin: ""
														}) : this.realElement.removeClass(this.options.hiddenClass), this.fakeElement.off("jcf-pointerdown", this.onPress), this.fakeElement.remove(), this.doc.off("jcf-pointerup", this.onRelease), this.realElement.off({
															blur: this.onBlur,
															focus: this.onFocus,
															click: this.onRealClick
														})
													}
												}
											})
										}(jcf),
										function(e) {
											e.addModule(function(e, t) {
												"use strict";

												function n(t) {
													this.options = e.extend({
														holder: null,
														vertical: !0,
														inactiveClass: "jcf-inactive",
														verticalClass: "jcf-scrollbar-vertical",
														horizontalClass: "jcf-scrollbar-horizontal",
														scrollbarStructure: '<div class="jcf-scrollbar"><div class="jcf-scrollbar-dec"></div><div class="jcf-scrollbar-slider"><div class="jcf-scrollbar-handle"></div></div><div class="jcf-scrollbar-inc"></div></div>',
														btnDecSelector: ".jcf-scrollbar-dec",
														btnIncSelector: ".jcf-scrollbar-inc",
														sliderSelector: ".jcf-scrollbar-slider",
														handleSelector: ".jcf-scrollbar-handle",
														scrollInterval: 300,
														scrollStep: 400
													}, t), this.init()
												}
												var i = {
													name: "Scrollable",
													selector: ".jcf-scrollable",
													plugins: {
														ScrollBar: n
													},
													options: {
														mouseWheelStep: 150,
														handleResize: !0,
														alwaysShowScrollbars: !1,
														alwaysPreventMouseWheel: !1,
														scrollAreaStructure: '<div class="jcf-scrollable-wrapper"></div>'
													},
													matchElement: function(e) {
														return e.is(".jcf-scrollable")
													},
													init: function() {
														this.initStructure(), this.attachEvents(), this.rebuildScrollbars()
													},
													initStructure: function() {
														this.doc = e(document), this.win = e(t), this.realElement = e(this.options.element), this.scrollWrapper = e(this.options.scrollAreaStructure).insertAfter(this.realElement), this.scrollWrapper.css("position", "relative"), this.realElement.css("overflow", "hidden"), this.vBarEdge = 0
													},
													attachEvents: function() {
														var e = this;
														this.vBar = new n({
															holder: this.scrollWrapper,
															vertical: !0,
															onScroll: function(t) {
																e.realElement.scrollTop(t)
															}
														}), this.hBar = new n({
															holder: this.scrollWrapper,
															vertical: !1,
															onScroll: function(t) {
																e.realElement.scrollLeft(t)
															}
														}), this.realElement.on("scroll", this.onScroll), this.options.handleResize && this.win.on("resize orientationchange load", this.onResize), this.realElement.on("jcf-mousewheel", this.onMouseWheel), this.realElement.on("jcf-pointerdown", this.onTouchBody)
													},
													onScroll: function() {
														this.redrawScrollbars()
													},
													onResize: function() {
														e(document.activeElement).is(":input") || this.rebuildScrollbars()
													},
													onTouchBody: function(e) {
														"touch" === e.pointerType && (this.touchData = {
															scrollTop: this.realElement.scrollTop(),
															scrollLeft: this.realElement.scrollLeft(),
															left: e.pageX,
															top: e.pageY
														}, this.doc.on({
															"jcf-pointermove": this.onMoveBody,
															"jcf-pointerup": this.onReleaseBody
														}))
													},
													onMoveBody: function(e) {
														var t, n, i = this.verticalScrollActive,
															s = this.horizontalScrollActive;
														"touch" === e.pointerType && (t = this.touchData.scrollTop - e.pageY + this.touchData.top, n = this.touchData.scrollLeft - e.pageX + this.touchData.left, this.verticalScrollActive && (t < 0 || t > this.vBar.maxValue) && (i = !1), this.horizontalScrollActive && (n < 0 || n > this.hBar.maxValue) && (s = !1), this.realElement.scrollTop(t), this.realElement.scrollLeft(n), i || s ? e.preventDefault() : this.onReleaseBody(e))
													},
													onReleaseBody: function(e) {
														"touch" === e.pointerType && (delete this.touchData, this.doc.off({
															"jcf-pointermove": this.onMoveBody,
															"jcf-pointerup": this.onReleaseBody
														}))
													},
													onMouseWheel: function(e) {
														var t, n, i, s = this.realElement.scrollTop(),
															r = this.realElement.scrollLeft(),
															o = this.realElement.prop("scrollHeight") - this.embeddedDimensions.innerHeight,
															a = this.realElement.prop("scrollWidth") - this.embeddedDimensions.innerWidth;
														(this.options.alwaysPreventMouseWheel || (this.verticalScrollActive && e.deltaY && (s <= 0 && e.deltaY < 0 || s >= o && e.deltaY > 0 || (i = !0)), this.horizontalScrollActive && e.deltaX && (r <= 0 && e.deltaX < 0 || r >= a && e.deltaX > 0 || (i = !0)), this.verticalScrollActive || this.horizontalScrollActive)) && (i || this.options.alwaysPreventMouseWheel) && (e.preventDefault(), t = e.deltaX / 100 * this.options.mouseWheelStep, n = e.deltaY / 100 * this.options.mouseWheelStep, this.realElement.scrollTop(s + n), this.realElement.scrollLeft(r + t))
													},
													setScrollBarEdge: function(e) {
														this.vBarEdge = e || 0, this.redrawScrollbars()
													},
													saveElementDimensions: function() {
														return this.savedDimensions = {
															top: this.realElement.width(),
															left: this.realElement.height()
														}, this
													},
													restoreElementDimensions: function() {
														return this.savedDimensions && this.realElement.css({
															width: this.savedDimensions.width,
															height: this.savedDimensions.height
														}), this
													},
													saveScrollOffsets: function() {
														return this.savedOffsets = {
															top: this.realElement.scrollTop(),
															left: this.realElement.scrollLeft()
														}, this
													},
													restoreScrollOffsets: function() {
														return this.savedOffsets && (this.realElement.scrollTop(this.savedOffsets.top), this.realElement.scrollLeft(this.savedOffsets.left)), this
													},
													getContainerDimensions: function() {
														var e, t, n, i;
														return this.isModifiedStyles ? e = {
															width: this.realElement.innerWidth() + this.vBar.getThickness(),
															height: this.realElement.innerHeight() + this.hBar.getThickness()
														} : (this.saveElementDimensions().saveScrollOffsets(), this.realElement.insertAfter(this.scrollWrapper), this.scrollWrapper.detach(), t = this.realElement.prop("style"), i = parseFloat(t.width), n = parseFloat(t.height), this.embeddedDimensions && i && n && (this.isModifiedStyles |= i !== this.embeddedDimensions.width || n !== this.embeddedDimensions.height, this.realElement.css({
															overflow: "",
															width: "",
															height: ""
														})), e = {
															width: this.realElement.outerWidth(),
															height: this.realElement.outerHeight()
														}, this.scrollWrapper.insertAfter(this.realElement), this.realElement.css("overflow", "hidden").prependTo(this.scrollWrapper), this.restoreElementDimensions().restoreScrollOffsets()), e
													},
													getEmbeddedDimensions: function(t) {
														var n, i = this.vBar.getThickness(),
															s = this.hBar.getThickness(),
															r = this.realElement.outerWidth() - this.realElement.width(),
															o = this.realElement.outerHeight() - this.realElement.height();
														return this.options.alwaysShowScrollbars ? (this.verticalScrollActive = !0, this.horizontalScrollActive = !0, n = {
															innerWidth: t.width - i,
															innerHeight: t.height - s
														}) : (this.saveElementDimensions(), this.verticalScrollActive = !1, this.horizontalScrollActive = !1, this.realElement.css({
															width: t.width - r,
															height: t.height - o
														}), this.horizontalScrollActive = this.realElement.prop("scrollWidth") > this.containerDimensions.width, this.verticalScrollActive = this.realElement.prop("scrollHeight") > this.containerDimensions.height, this.restoreElementDimensions(), n = {
															innerWidth: t.width - (this.verticalScrollActive ? i : 0),
															innerHeight: t.height - (this.horizontalScrollActive ? s : 0)
														}), e.extend(n, {
															width: n.innerWidth - r,
															height: n.innerHeight - o
														}), n
													},
													rebuildScrollbars: function() {
														this.containerDimensions = this.getContainerDimensions(), this.embeddedDimensions = this.getEmbeddedDimensions(this.containerDimensions), this.scrollWrapper.css({
															width: this.containerDimensions.width,
															height: this.containerDimensions.height
														}), this.realElement.css({
															overflow: "hidden",
															width: this.embeddedDimensions.width,
															height: this.embeddedDimensions.height
														}), this.redrawScrollbars()
													},
													redrawScrollbars: function() {
														var e, t;
														this.verticalScrollActive ? (e = this.vBarEdge ? this.containerDimensions.height - this.vBarEdge : this.embeddedDimensions.innerHeight, t = Math.max(this.realElement.prop("offsetHeight"), this.realElement.prop("scrollHeight")) - this.vBarEdge, this.vBar.show().setMaxValue(t - e).setRatio(e / t).setSize(e), this.vBar.setValue(this.realElement.scrollTop())) : this.vBar.hide(), this.horizontalScrollActive ? (e = this.embeddedDimensions.innerWidth, t = this.realElement.prop("scrollWidth"), t === e && (this.horizontalScrollActive = !1), this.hBar.show().setMaxValue(t - e).setRatio(e / t).setSize(e), this.hBar.setValue(this.realElement.scrollLeft())) : this.hBar.hide();
														var n = "";
														this.verticalScrollActive && this.horizontalScrollActive ? n = "none" : this.verticalScrollActive ? n = "pan-x" : this.horizontalScrollActive && (n = "pan-y"), this.realElement.css("touchAction", n)
													},
													refresh: function() {
														this.rebuildScrollbars()
													},
													destroy: function() {
														this.win.off("resize orientationchange load", this.onResize), this.realElement.off({
															"jcf-mousewheel": this.onMouseWheel,
															"jcf-pointerdown": this.onTouchBody
														}), this.doc.off({
															"jcf-pointermove": this.onMoveBody,
															"jcf-pointerup": this.onReleaseBody
														}), this.saveScrollOffsets(), this.vBar.destroy(), this.hBar.destroy(), this.realElement.insertAfter(this.scrollWrapper).css({
															touchAction: "",
															overflow: "",
															width: "",
															height: ""
														}), this.scrollWrapper.remove(), this.restoreScrollOffsets()
													}
												};
												return e.extend(n.prototype, {
													init: function() {
														this.initStructure(), this.attachEvents()
													},
													initStructure: function() {
														this.doc = e(document), this.isVertical = !!this.options.vertical, this.sizeProperty = this.isVertical ? "height" : "width", this.fullSizeProperty = this.isVertical ? "outerHeight" : "outerWidth", this.invertedSizeProperty = this.isVertical ? "width" : "height", this.thicknessMeasureMethod = "outer" + this.invertedSizeProperty.charAt(0).toUpperCase() + this.invertedSizeProperty.substr(1), this.offsetProperty = this.isVertical ? "top" : "left", this.offsetEventProperty = this.isVertical ? "pageY" : "pageX", this.value = this.options.value || 0, this.maxValue = this.options.maxValue || 0, this.currentSliderSize = 0, this.handleSize = 0, this.holder = e(this.options.holder), this.scrollbar = e(this.options.scrollbarStructure).appendTo(this.holder), this.btnDec = this.scrollbar.find(this.options.btnDecSelector), this.btnInc = this.scrollbar.find(this.options.btnIncSelector), this.slider = this.scrollbar.find(this.options.sliderSelector), this.handle = this.slider.find(this.options.handleSelector), this.scrollbar.addClass(this.isVertical ? this.options.verticalClass : this.options.horizontalClass).css({
															touchAction: this.isVertical ? "pan-x" : "pan-y",
															position: "absolute"
														}), this.slider.css({
															position: "relative"
														}), this.handle.css({
															touchAction: "none",
															position: "absolute"
														})
													},
													attachEvents: function() {
														this.bindHandlers(), this.handle.on("jcf-pointerdown", this.onHandlePress), this.slider.add(this.btnDec).add(this.btnInc).on("jcf-pointerdown", this.onButtonPress)
													},
													onHandlePress: function(e) {
														"mouse" === e.pointerType && e.button > 1 || (e.preventDefault(), this.handleDragActive = !0, this.sliderOffset = this.slider.offset()[this.offsetProperty], this.innerHandleOffset = e[this.offsetEventProperty] - this.handle.offset()[this.offsetProperty], this.doc.on("jcf-pointermove", this.onHandleDrag), this.doc.on("jcf-pointerup", this.onHandleRelease))
													},
													onHandleDrag: function(e) {
														e.preventDefault(), this.calcOffset = e[this.offsetEventProperty] - this.sliderOffset - this.innerHandleOffset, this.setValue(this.calcOffset / (this.currentSliderSize - this.handleSize) * this.maxValue), this.triggerScrollEvent(this.value)
													},
													onHandleRelease: function() {
														this.handleDragActive = !1, this.doc.off("jcf-pointermove", this.onHandleDrag), this.doc.off("jcf-pointerup", this.onHandleRelease)
													},
													onButtonPress: function(e) {
														var t, n;
														"mouse" === e.pointerType && e.button > 1 || (e.preventDefault(), this.handleDragActive || (this.slider.is(e.currentTarget) ? (t = this.handle.offset()[this.offsetProperty] > e[this.offsetEventProperty] ? -1 : 1, n = e[this.offsetEventProperty] - this.slider.offset()[this.offsetProperty], this.startPageScrolling(t, n)) : (t = this.btnDec.is(e.currentTarget) ? -1 : 1, this.startSmoothScrolling(t)), this.doc.on("jcf-pointerup", this.onButtonRelease)))
													},
													onButtonRelease: function() {
														this.stopPageScrolling(), this.stopSmoothScrolling(), this.doc.off("jcf-pointerup", this.onButtonRelease)
													},
													startPageScrolling: function(e, t) {
														var n = this,
															i = e * n.currentSize,
															s = function() {
																var i = n.value / n.maxValue * (n.currentSliderSize - n.handleSize);
																return e > 0 ? i + n.handleSize >= t : i <= t
															},
															r = function() {
																n.value += i, n.setValue(n.value), n.triggerScrollEvent(n.value), s() && clearInterval(n.pageScrollTimer)
															};
														this.pageScrollTimer = setInterval(r, this.options.scrollInterval), r()
													},
													stopPageScrolling: function() {
														clearInterval(this.pageScrollTimer)
													},
													startSmoothScrolling: function(e) {
														var n, i = this;
														this.stopSmoothScrolling();
														var s = t.requestAnimationFrame || function(e) {
																setTimeout(e, 16)
															},
															r = function() {
																return Date.now ? Date.now() : (new Date).getTime()
															},
															o = function() {
																return e > 0 ? i.value >= i.maxValue : i.value <= 0
															},
															a = function() {
																var t = (r() - n) / 1e3 * i.options.scrollStep;
																i.smoothScrollActive && (i.value += t * e, i.setValue(i.value), i.triggerScrollEvent(i.value), o() || (n = r(), s(a)))
															};
														i.smoothScrollActive = !0, n = r(), s(a)
													},
													stopSmoothScrolling: function() {
														this.smoothScrollActive = !1
													},
													triggerScrollEvent: function(e) {
														this.options.onScroll && this.options.onScroll(e)
													},
													getThickness: function() {
														return this.scrollbar[this.thicknessMeasureMethod]()
													},
													setSize: function(e) {
														var t = this.btnDec[this.fullSizeProperty](),
															n = this.btnInc[this.fullSizeProperty]();
														return this.currentSize = e, this.currentSliderSize = e - t - n, this.scrollbar.css(this.sizeProperty, e), this.slider.css(this.sizeProperty, this.currentSliderSize), this.currentSliderSize = this.slider[this.sizeProperty](), this.handleSize = Math.round(this.currentSliderSize * this.ratio), this.handle.css(this.sizeProperty, this.handleSize), this.handleSize = this.handle[this.fullSizeProperty](), this
													},
													setRatio: function(e) {
														return this.ratio = e, this
													},
													setMaxValue: function(e) {
														return this.maxValue = e, this.setValue(Math.min(this.value, this.maxValue)), this
													},
													setValue: function(e) {
														this.value = e, this.value < 0 ? this.value = 0 : this.value > this.maxValue && (this.value = this.maxValue), this.refresh()
													},
													setPosition: function(e) {
														return this.scrollbar.css(e), this
													},
													hide: function() {
														return this.scrollbar.detach(), this
													},
													show: function() {
														return this.scrollbar.appendTo(this.holder), this
													},
													refresh: function() {
														0 === this.value || 0 === this.maxValue ? this.calcOffset = 0 : this.calcOffset = this.value / this.maxValue * (this.currentSliderSize - this.handleSize), this.handle.css(this.offsetProperty, this.calcOffset), this.btnDec.toggleClass(this.options.inactiveClass, 0 === this.value), this.btnInc.toggleClass(this.options.inactiveClass, this.value === this.maxValue), this.scrollbar.toggleClass(this.options.inactiveClass, 0 === this.maxValue)
													},
													destroy: function() {
														this.btnDec.add(this.btnInc).off("jcf-pointerdown", this.onButtonPress), this.handle.off("jcf-pointerdown", this.onHandlePress), this.doc.off("jcf-pointermove", this.onHandleDrag), this.doc.off("jcf-pointerup", this.onHandleRelease), this.doc.off("jcf-pointerup", this.onButtonRelease), this.stopSmoothScrolling(), this.stopPageScrolling(), this.scrollbar.remove()
													}
												}), i
											})
										}(jcf),
										function(e) {
											e.addModule(function(t, n) {
												"use strict";

												function i(e) {
													this.options = t.extend({
														wrapNative: !0,
														wrapNativeOnMobile: !0,
														fakeDropInBody: !0,
														useCustomScroll: !0,
														flipDropToFit: !0,
														maxVisibleItems: 10,
														fakeAreaStructure: '<span class="jcf-select"><span class="jcf-select-text"></span><span class="jcf-select-opener"></span></span>',
														fakeDropStructure: '<div class="jcf-select-drop"><div class="jcf-select-drop-content"></div></div>',
														optionClassPrefix: "jcf-option-",
														selectClassPrefix: "jcf-select-",
														dropContentSelector: ".jcf-select-drop-content",
														selectTextSelector: ".jcf-select-text",
														dropActiveClass: "jcf-drop-active",
														flipDropClass: "jcf-drop-flipped"
													}, e), this.init()
												}

												function s(e) {
													this.options = t.extend({
														wrapNative: !0,
														useCustomScroll: !0,
														fakeStructure: '<span class="jcf-list-box"><span class="jcf-list-wrapper"></span></span>',
														selectClassPrefix: "jcf-select-",
														listHolder: ".jcf-list-wrapper"
													}, e), this.init()
												}

												function r(e) {
													this.options = t.extend({
														holder: null,
														maxVisibleItems: 10,
														selectOnClick: !0,
														useHoverClass: !1,
														useCustomScroll: !1,
														handleResize: !0,
														multipleSelectWithoutKey: !1,
														alwaysPreventMouseWheel: !1,
														indexAttribute: "data-index",
														cloneClassPrefix: "jcf-option-",
														containerStructure: '<span class="jcf-list"><span class="jcf-list-content"></span></span>',
														containerSelector: ".jcf-list-content",
														captionClass: "jcf-optgroup-caption",
														disabledClass: "jcf-disabled",
														optionClass: "jcf-option",
														groupClass: "jcf-optgroup",
														hoverClass: "jcf-hover",
														selectedClass: "jcf-selected",
														scrollClass: "jcf-scroll-active"
													}, e), this.init()
												}
												var o = {
													name: "Select",
													selector: "select",
													options: {
														element: null,
														multipleCompactStyle: !1
													},
													plugins: {
														ListBox: s,
														ComboBox: i,
														SelectList: r
													},
													matchElement: function(e) {
														return e.is("select")
													},
													init: function() {
														this.element = t(this.options.element), this.createInstance()
													},
													isListBox: function() {
														return this.element.is("[size]:not([jcf-size]), [multiple]")
													},
													createInstance: function() {
														this.instance && this.instance.destroy(), this.isListBox() && !this.options.multipleCompactStyle ? this.instance = new s(this.options) : this.instance = new i(this.options)
													},
													refresh: function() {
														this.isListBox() && this.instance instanceof i || !this.isListBox() && this.instance instanceof s ? this.createInstance() : this.instance.refresh()
													},
													destroy: function() {
														this.instance.destroy()
													}
												};
												t.extend(i.prototype, {
													init: function() {
														this.initStructure(), this.bindHandlers(), this.attachEvents(), this.refresh()
													},
													initStructure: function() {
														this.win = t(n), this.doc = t(document), this.realElement = t(this.options.element), this.fakeElement = t(this.options.fakeAreaStructure).insertAfter(this.realElement), this.selectTextContainer = this.fakeElement.find(this.options.selectTextSelector), this.selectText = t("<span></span>").appendTo(this.selectTextContainer), l(this.fakeElement), this.fakeElement.addClass(a(this.realElement.prop("className"), this.options.selectClassPrefix)), this.realElement.prop("multiple") && this.fakeElement.addClass("jcf-compact-multiple"), this.options.isMobileDevice && this.options.wrapNativeOnMobile && !this.options.wrapNative && (this.options.wrapNative = !0), this.options.wrapNative ? this.realElement.prependTo(this.fakeElement).css({
															position: "absolute",
															height: "100%",
															width: "100%"
														}).addClass(this.options.resetAppearanceClass) : (this.realElement.addClass(this.options.hiddenClass), this.fakeElement.attr("title", this.realElement.attr("title")), this.fakeDropTarget = this.options.fakeDropInBody ? t("body") : this.fakeElement)
													},
													attachEvents: function() {
														var e = this;
														this.delayedRefresh = function() {
															setTimeout(function() {
																e.refresh(), e.list && (e.list.refresh(), e.list.scrollToActiveOption())
															}, 1)
														}, this.options.wrapNative ? this.realElement.on({
															focus: this.onFocus,
															change: this.onChange,
															click: this.onChange,
															keydown: this.delayedRefresh
														}) : (this.realElement.on({
															focus: this.onFocus,
															change: this.onChange,
															keydown: this.onKeyDown
														}), this.fakeElement.on({
															"jcf-pointerdown": this.onSelectAreaPress
														}))
													},
													onKeyDown: function(e) {
														13 === e.which ? this.toggleDropdown() : this.dropActive && this.delayedRefresh()
													},
													onChange: function() {
														this.refresh()
													},
													onFocus: function() {
														this.pressedFlag && this.focusedFlag || (this.fakeElement.addClass(this.options.focusClass), this.realElement.on("blur", this.onBlur), this.toggleListMode(!0), this.focusedFlag = !0)
													},
													onBlur: function() {
														this.pressedFlag || (this.fakeElement.removeClass(this.options.focusClass), this.realElement.off("blur", this.onBlur), this.toggleListMode(!1), this.focusedFlag = !1)
													},
													onResize: function() {
														this.dropActive && this.hideDropdown()
													},
													onSelectDropPress: function() {
														this.pressedFlag = !0
													},
													onSelectDropRelease: function(e, t) {
														this.pressedFlag = !1, "mouse" === t.pointerType && this.realElement.focus()
													},
													onSelectAreaPress: function(e) {
														!this.options.fakeDropInBody && t(e.target).closest(this.dropdown).length || e.button > 1 || this.realElement.is(":disabled") || (this.selectOpenedByEvent = e.pointerType, this.toggleDropdown(), this.focusedFlag || ("mouse" === e.pointerType ? this.realElement.focus() : this.onFocus(e)), this.pressedFlag = !0, this.fakeElement.addClass(this.options.pressedClass), this.doc.on("jcf-pointerup", this.onSelectAreaRelease))
													},
													onSelectAreaRelease: function(e) {
														this.focusedFlag && "mouse" === e.pointerType && this.realElement.focus(), this.pressedFlag = !1, this.fakeElement.removeClass(this.options.pressedClass), this.doc.off("jcf-pointerup", this.onSelectAreaRelease)
													},
													onOutsideClick: function(e) {
														var n = t(e.target);
														n.closest(this.fakeElement).length || n.closest(this.dropdown).length || this.hideDropdown()
													},
													onSelect: function() {
														this.refresh(), this.realElement.prop("multiple") ? this.repositionDropdown() : this.hideDropdown(), this.fireNativeEvent(this.realElement, "change")
													},
													toggleListMode: function(e) {
														this.options.wrapNative || (e ? this.realElement.attr({
															size: 4,
															"jcf-size": ""
														}) : this.options.wrapNative || this.realElement.removeAttr("size jcf-size"))
													},
													createDropdown: function() {
														this.dropdown && (this.list.destroy(), this.dropdown.remove()), this.dropdown = t(this.options.fakeDropStructure).appendTo(this.fakeDropTarget), this.dropdown.addClass(a(this.realElement.prop("className"), this.options.selectClassPrefix)), l(this.dropdown), this.realElement.prop("multiple") && this.dropdown.addClass("jcf-compact-multiple"), this.options.fakeDropInBody && this.dropdown.css({
															position: "absolute",
															top: -9999
														}), this.list = new r({
															useHoverClass: !0,
															handleResize: !1,
															alwaysPreventMouseWheel: !0,
															maxVisibleItems: this.options.maxVisibleItems,
															useCustomScroll: this.options.useCustomScroll,
															holder: this.dropdown.find(this.options.dropContentSelector),
															multipleSelectWithoutKey: this.realElement.prop("multiple"),
															element: this.realElement
														}), t(this.list).on({
															select: this.onSelect,
															press: this.onSelectDropPress,
															release: this.onSelectDropRelease
														})
													},
													repositionDropdown: function() {
														var e, t, n, i = this.fakeElement.offset(),
															s = this.fakeElement[0].getBoundingClientRect(),
															r = s.width || s.right - s.left,
															o = this.fakeElement.outerHeight(),
															a = this.dropdown.css("width", r).outerHeight(),
															l = this.win.scrollTop(),
															c = this.win.height(),
															d = !1;
														i.top + o + a > l + c && i.top - a > l && (d = !0), this.options.fakeDropInBody && (n = "static" !== this.fakeDropTarget.css("position") ? this.fakeDropTarget.offset().top : 0, this.options.flipDropToFit && d ? (t = i.left, e = i.top - a - n) : (t = i.left, e = i.top + o - n), this.dropdown.css({
															width: r,
															left: t,
															top: e
														})), this.dropdown.add(this.fakeElement).toggleClass(this.options.flipDropClass, this.options.flipDropToFit && d)
													},
													showDropdown: function() {
														this.realElement.prop("options").length && (this.dropdown || this.createDropdown(), this.dropActive = !0, this.dropdown.appendTo(this.fakeDropTarget), this.fakeElement.addClass(this.options.dropActiveClass), this.refreshSelectedText(), this.repositionDropdown(), this.list.setScrollTop(this.savedScrollTop), this.list.refresh(), this.win.on("resize", this.onResize), this.doc.on("jcf-pointerdown", this.onOutsideClick))
													},
													hideDropdown: function() {
														this.dropdown && (this.savedScrollTop = this.list.getScrollTop(), this.fakeElement.removeClass(this.options.dropActiveClass + " " + this.options.flipDropClass), this.dropdown.removeClass(this.options.flipDropClass).detach(), this.doc.off("jcf-pointerdown", this.onOutsideClick), this.win.off("resize", this.onResize), this.dropActive = !1, "touch" === this.selectOpenedByEvent && this.onBlur())
													},
													toggleDropdown: function() {
														this.dropActive ? this.hideDropdown() : this.showDropdown()
													},
													refreshSelectedText: function() {
														var e, n = this.realElement.prop("selectedIndex"),
															i = this.realElement.prop("options")[n],
															s = i ? i.getAttribute("data-image") : null,
															r = "",
															o = this;
														this.realElement.prop("multiple") ? (t.each(this.realElement.prop("options"), function(e, t) {
															t.selected && (r += (r ? ", " : "") + t.innerHTML)
														}), r || (r = o.realElement.attr("placeholder") || ""), this.selectText.removeAttr("class").html(r)) : i ? this.currentSelectedText === i.innerHTML && this.currentSelectedImage === s || (e = a(i.className, this.options.optionClassPrefix), this.selectText.attr("class", e).html(i.innerHTML), s ? (this.selectImage || (this.selectImage = t("<img>").prependTo(this.selectTextContainer).hide()), this.selectImage.attr("src", s).show()) : this.selectImage && this.selectImage.hide(), this.currentSelectedText = i.innerHTML, this.currentSelectedImage = s) : (this.selectImage && this.selectImage.hide(), this.selectText.removeAttr("class").empty())
													},
													refresh: function() {
														"none" === this.realElement.prop("style").display ? this.fakeElement.hide() : this.fakeElement.show(), this.refreshSelectedText(), this.fakeElement.toggleClass(this.options.disabledClass, this.realElement.is(":disabled"))
													},
													destroy: function() {
														this.options.wrapNative ? this.realElement.insertBefore(this.fakeElement).css({
															position: "",
															height: "",
															width: ""
														}).removeClass(this.options.resetAppearanceClass) : (this.realElement.removeClass(this.options.hiddenClass), this.realElement.is("[jcf-size]") && this.realElement.removeAttr("size jcf-size")), this.fakeElement.remove(), this.doc.off("jcf-pointerup", this.onSelectAreaRelease), this.realElement.off({
															focus: this.onFocus
														})
													}
												}), t.extend(s.prototype, {
													init: function() {
														this.bindHandlers(), this.initStructure(), this.attachEvents()
													},
													initStructure: function() {
														this.realElement = t(this.options.element), this.fakeElement = t(this.options.fakeStructure).insertAfter(this.realElement), this.listHolder = this.fakeElement.find(this.options.listHolder), l(this.fakeElement), this.fakeElement.addClass(a(this.realElement.prop("className"), this.options.selectClassPrefix)), this.realElement.addClass(this.options.hiddenClass), this.list = new r({
															useCustomScroll: this.options.useCustomScroll,
															holder: this.listHolder,
															selectOnClick: !1,
															element: this.realElement
														})
													},
													attachEvents: function() {
														var e = this;
														this.delayedRefresh = function(t) {
															t && (16 === t.which || t.ctrlKey || t.metaKey || t.altKey) || (clearTimeout(e.refreshTimer), e.refreshTimer = setTimeout(function() {
																e.refresh(), e.list.scrollToActiveOption()
															}, 1))
														}, this.realElement.on({
															focus: this.onFocus,
															click: this.delayedRefresh,
															keydown: this.delayedRefresh
														}), t(this.list).on({
															select: this.onSelect,
															press: this.onFakeOptionsPress,
															release: this.onFakeOptionsRelease
														})
													},
													onFakeOptionsPress: function(e, t) {
														this.pressedFlag = !0, "mouse" === t.pointerType && this.realElement.focus()
													},
													onFakeOptionsRelease: function(e, t) {
														this.pressedFlag = !1, "mouse" === t.pointerType && this.realElement.focus()
													},
													onSelect: function() {
														this.fireNativeEvent(this.realElement, "change"), this.fireNativeEvent(this.realElement, "click")
													},
													onFocus: function() {
														this.pressedFlag && this.focusedFlag || (this.fakeElement.addClass(this.options.focusClass), this.realElement.on("blur", this.onBlur), this.focusedFlag = !0)
													},
													onBlur: function() {
														this.pressedFlag || (this.fakeElement.removeClass(this.options.focusClass), this.realElement.off("blur", this.onBlur), this.focusedFlag = !1)
													},
													refresh: function() {
														this.fakeElement.toggleClass(this.options.disabledClass, this.realElement.is(":disabled")), this.list.refresh()
													},
													destroy: function() {
														this.list.destroy(), this.realElement.insertBefore(this.fakeElement).removeClass(this.options.hiddenClass), this.fakeElement.remove()
													}
												}), t.extend(r.prototype, {
													init: function() {
														this.initStructure(), this.refreshSelectedClass(), this.attachEvents()
													},
													initStructure: function() {
														this.element = t(this.options.element), this.indexSelector = "[" + this.options.indexAttribute + "]", this.container = t(this.options.containerStructure).appendTo(this.options.holder), this.listHolder = this.container.find(this.options.containerSelector), this.lastClickedIndex = this.element.prop("selectedIndex"), this.rebuildList(), this.element.prop("multiple") && (this.previousSelection = this.getSelectedOptionsIndexes())
													},
													attachEvents: function() {
														this.bindHandlers(), this.listHolder.on("jcf-pointerdown", this.indexSelector, this.onItemPress), this.listHolder.on("jcf-pointerdown", this.onPress), this.options.useHoverClass && this.listHolder.on("jcf-pointerover", this.indexSelector, this.onHoverItem)
													},
													onPress: function(e) {
														t(this).trigger("press", e), this.listHolder.on("jcf-pointerup", this.onRelease)
													},
													onRelease: function(e) {
														t(this).trigger("release", e), this.listHolder.off("jcf-pointerup", this.onRelease)
													},
													onHoverItem: function(e) {
														var t = parseFloat(e.currentTarget.getAttribute(this.options.indexAttribute));
														this.fakeOptions.removeClass(this.options.hoverClass).eq(t).addClass(this.options.hoverClass)
													},
													onItemPress: function(e) {
														"touch" === e.pointerType || this.options.selectOnClick ? (this.tmpListOffsetTop = this.list.offset().top, this.listHolder.on("jcf-pointerup", this.indexSelector, this.onItemRelease)) : this.onSelectItem(e)
													},
													onItemRelease: function(e) {
														this.listHolder.off("jcf-pointerup", this.indexSelector, this.onItemRelease), this.tmpListOffsetTop === this.list.offset().top && this.listHolder.on("click", this.indexSelector, {
															savedPointerType: e.pointerType
														}, this.onSelectItem), delete this.tmpListOffsetTop
													},
													onSelectItem: function(e) {
														var n, i = parseFloat(e.currentTarget.getAttribute(this.options.indexAttribute)),
															s = e.data && e.data.savedPointerType || e.pointerType || "mouse";
														this.listHolder.off("click", this.indexSelector, this.onSelectItem), e.button > 1 || this.realOptions[i].disabled || (this.element.prop("multiple") ? e.metaKey || e.ctrlKey || "touch" === s || this.options.multipleSelectWithoutKey ? this.realOptions[i].selected = !this.realOptions[i].selected : e.shiftKey ? (n = [this.lastClickedIndex, i].sort(function(e, t) {
															return e - t
														}), this.realOptions.each(function(e, t) {
															t.selected = e >= n[0] && e <= n[1]
														})) : this.element.prop("selectedIndex", i) : this.element.prop("selectedIndex", i), e.shiftKey || (this.lastClickedIndex = i), this.refreshSelectedClass(), "mouse" === s && this.scrollToActiveOption(), t(this).trigger("select"))
													},
													rebuildList: function() {
														var n = this,
															i = this.element[0];
														this.storedSelectHTML = i.innerHTML, this.optionIndex = 0, this.list = t(this.createOptionsList(i)), this.listHolder.empty().append(this.list), this.realOptions = this.element.find("option"), this.fakeOptions = this.list.find(this.indexSelector), this.fakeListItems = this.list.find("." + this.options.captionClass + "," + this.indexSelector), delete this.optionIndex;
														var s = this.options.maxVisibleItems,
															r = this.element.prop("size");
														r > 1 && !this.element.is("[jcf-size]") && (s = r);
														var o = this.fakeOptions.length > s;
														if (this.container.toggleClass(this.options.scrollClass, o), o && (this.listHolder.css({
																maxHeight: this.getOverflowHeight(s),
																overflow: "auto"
															}), this.options.useCustomScroll && e.modules.Scrollable)) return void e.replace(this.listHolder, "Scrollable", {
															handleResize: this.options.handleResize,
															alwaysPreventMouseWheel: this.options.alwaysPreventMouseWheel
														});
														this.options.alwaysPreventMouseWheel && (this.preventWheelHandler = function(e) {
															var t = n.listHolder.scrollTop(),
																i = n.listHolder.prop("scrollHeight") - n.listHolder.innerHeight();
															(t <= 0 && e.deltaY < 0 || t >= i && e.deltaY > 0) && e.preventDefault()
														}, this.listHolder.on("jcf-mousewheel", this.preventWheelHandler))
													},
													refreshSelectedClass: function() {
														var e, t = this,
															n = this.element.prop("multiple"),
															i = this.element.prop("selectedIndex");
														n ? this.realOptions.each(function(e, n) {
															t.fakeOptions.eq(e).toggleClass(t.options.selectedClass, !!n.selected)
														}) : (this.fakeOptions.removeClass(this.options.selectedClass + " " + this.options.hoverClass), e = this.fakeOptions.eq(i).addClass(this.options.selectedClass), this.options.useHoverClass && e.addClass(this.options.hoverClass))
													},
													scrollToActiveOption: function() {
														var e = this.getActiveOptionOffset();
														"number" == typeof e && this.listHolder.prop("scrollTop", e)
													},
													getSelectedOptionsIndexes: function() {
														var e = [];
														return this.realOptions.each(function(t, n) {
															n.selected && e.push(t)
														}), e
													},
													getChangedSelectedIndex: function() {
														var e = this.element.prop("selectedIndex"),
															n = this,
															i = !1,
															s = null;
														return this.element.prop("multiple") ? (this.currentSelection = this.getSelectedOptionsIndexes(), t.each(this.currentSelection, function(e, t) {
															!i && n.previousSelection.indexOf(t) < 0 && (0 === e && (i = !0), s = t)
														}), this.previousSelection = this.currentSelection, s) : e
													},
													getActiveOptionOffset: function() {
														var e = this.getChangedSelectedIndex();
														if (null !== e) {
															var t = this.listHolder.height(),
																n = this.listHolder.prop("scrollTop"),
																i = this.fakeOptions.eq(e),
																s = i.offset().top - this.list.offset().top,
																r = i.innerHeight();
															return s + r >= n + t ? s - t + r : s < n ? s : void 0
														}
													},
													getOverflowHeight: function(e) {
														var t = this.fakeListItems.eq(e - 1),
															n = this.list.offset().top;
														return t.offset().top + t.innerHeight() - n
													},
													getScrollTop: function() {
														return this.listHolder.scrollTop()
													},
													setScrollTop: function(e) {
														this.listHolder.scrollTop(e)
													},
													createOption: function(e) {
														var t = document.createElement("span");
														t.className = this.options.optionClass, t.innerHTML = e.innerHTML, t.setAttribute(this.options.indexAttribute, this.optionIndex++);
														var n, i = e.getAttribute("data-image");
														return i && (n = document.createElement("img"), n.src = i, t.insertBefore(n, t.childNodes[0])), e.disabled && (t.className += " " + this.options.disabledClass), e.className && (t.className += " " + a(e.className, this.options.cloneClassPrefix)), t
													},
													createOptGroup: function(e) {
														var t, n, i = document.createElement("span"),
															s = e.getAttribute("label");
														return t = document.createElement("span"), t.className = this.options.captionClass, t.innerHTML = s, i.appendChild(t), e.children.length && (n = this.createOptionsList(e), i.appendChild(n)), i.className = this.options.groupClass, i
													},
													createOptionContainer: function() {
														return document.createElement("li")
													},
													createOptionsList: function(e) {
														var n = this,
															i = document.createElement("ul");
														return t.each(e.children, function(e, t) {
															var s, r = n.createOptionContainer(t);
															switch (t.tagName.toLowerCase()) {
																case "option":
																	s = n.createOption(t);
																	break;
																case "optgroup":
																	s = n.createOptGroup(t)
															}
															i.appendChild(r).appendChild(s)
														}), i
													},
													refresh: function() {
														this.storedSelectHTML !== this.element.prop("innerHTML") && this.rebuildList();
														var t = e.getInstance(this.listHolder);
														t && t.refresh(), this.refreshSelectedClass()
													},
													destroy: function() {
														this.listHolder.off("jcf-mousewheel", this.preventWheelHandler), this.listHolder.off("jcf-pointerdown", this.indexSelector, this.onSelectItem), this.listHolder.off("jcf-pointerover", this.indexSelector, this.onHoverItem), this.listHolder.off("jcf-pointerdown", this.onPress)
													}
												});
												var a = function(e, t) {
														return e ? e.replace(/[\s]*([\S]+)+[\s]*/gi, t + "$1 ") : ""
													},
													l = function() {
														function t(e) {
															e.preventDefault()
														}
														var n = e.getOptions().unselectableClass;
														return function(e) {
															e.addClass(n).on("selectstart", t)
														}
													}();
												return o
											})
										}(jcf),
										function(e) {
											var t = !1;
											if ("function" == typeof define && define.amd && (define(e), t = !0), "object" == typeof exports && (module.exports = e(), t = !0), !t) {
												var n = window.Cookies,
													i = window.Cookies = e();
												i.noConflict = function() {
													return window.Cookies = n, i
												}
											}
										}(function() {
											function e() {
												for (var e = 0, t = {}; e < arguments.length; e++) {
													var n = arguments[e];
													for (var i in n) t[i] = n[i]
												}
												return t
											}

											function t(n) {
												function i(t, s, r) {
													var o;
													if ("undefined" != typeof document) {
														if (arguments.length > 1) {
															if (r = e({
																	path: "/"
																}, i.defaults, r), "number" == typeof r.expires) {
																var a = new Date;
																a.setMilliseconds(a.getMilliseconds() + 864e5 * r.expires), r.expires = a
															}
															r.expires = r.expires ? r.expires.toUTCString() : "";
															try {
																o = JSON.stringify(s), /^[\{\[]/.test(o) && (s = o)
															} catch (e) {}
															s = n.write ? n.write(s, t) : encodeURIComponent(String(s)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape);
															var l = "";
															for (var c in r) r[c] && (l += "; " + c, !0 !== r[c] && (l += "=" + r[c]));
															return document.cookie = t + "=" + s + l
														}
														t || (o = {});
														for (var d = document.cookie ? document.cookie.split("; ") : [], u = /(%[0-9A-Z]{2})+/g, h = 0; h < d.length; h++) {
															var p = d[h].split("="),
																f = p.slice(1).join("=");
															'"' === f.charAt(0) && (f = f.slice(1, -1));
															try {
																var m = p[0].replace(u, decodeURIComponent);
																if (f = n.read ? n.read(f, m) : n(f, m) || f.replace(u, decodeURIComponent), this.json) try {
																	f = JSON.parse(f)
																} catch (e) {}
																if (t === m) {
																	o = f;
																	break
																}
																t || (o[m] = f)
															} catch (e) {}
														}
														return o
													}
												}
												return i.set = i, i.get = function(e) {
													return i.call(i, e)
												}, i.getJSON = function() {
													return i.apply({
														json: !0
													}, [].slice.call(arguments))
												}, i.defaults = {}, i.remove = function(t, n) {
													i(t, "", e(n, {
														expires: -1
													}))
												}, i.withConverter = t, i
											}
											return t(function() {})
										}),
										function(e, t) {
											"undefined" != typeof module && module.exports ? module.exports = t() : "function" == typeof define ? define(t) : this.tabs = t()
										}(0, function() {
											function e(e, t) {
												for (var n = e.length - 1; n >= 0; n--) t(n, e[n])
											}

											function t(e, t) {
												return e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
											}

											function n(e, n) {
												t(e, n) || (e.className += " " + n)
											}

											function i(e, n) {
												if (t(e, n)) {
													var i = new RegExp("(\\s|^)" + n + "(\\s|$)");
													e.className = e.className.replace(i, "")
												}
											}
											return function(t) {
												function s(t, s) {
													e(t, function(e, t) {
														e != s ? i(t, "is-active") : n(t, "is-active")
													})
												}
												var r = t.querySelectorAll(".tab"),
													o = t.querySelectorAll(".tab-pane");
												e(r, function(e, t) {
													t.addEventListener("click", function(t) {
														s(r, e), s(o, e)
													})
												})
											}
										}),
										function(e) {
											function t(e) {
												var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
												e = e.replace(t, function(e, t, n, i) {
													return t + t + n + n + i + i
												});
												var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
												return n ? {
													r: parseInt(n[1], 16),
													g: parseInt(n[2], 16),
													b: parseInt(n[3], 16)
												} : null
											}

											function n() {
												var e = document.createElement("canvas");
												return !(!e.getContext || !e.getContext("2d"))
											}

											function i() {
												return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
											}

											function s() {
												return i() + i() + "-" + i() + "-" + i() + "-" + i() + "-" + i() + i() + i()
											}

											function r(e) {
												var t = e.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s[0-9]{1,2}:[0-9]{2}:[0-9]{2}$/);
												if (null !== t && t.length > 0) {
													var n = e.split(" "),
														i = n[0].split("-"),
														s = n[1].split(":");
													return new Date(i[0], i[1] - 1, i[2], s[0], s[1], s[2])
												}
												var r = Date.parse(e);
												return isNaN(r) ? (r = Date.parse(e.replace(/-/g, "/").replace("T", " ")), isNaN(r) ? new Date : r) : r
											}

											function o(e, t, n, i, s) {
												for (var r = {}, o = {}, a = {}, l = {}, c = {}, d = {}, u = null, h = 0; h < i.length; h++) {
													var f, m = i[h];
													f = null === u ? n / p[m] : p[u] / p[m];
													var g = e / p[m],
														v = t / p[m];
													s && (g = g > 0 ? Math.floor(g) : Math.ceil(g), v = v > 0 ? Math.floor(v) : Math.ceil(v)), "Days" !== m && (g %= f, v %= f), r[m] = g, a[m] = Math.abs(g), o[m] = v, d[m] = Math.abs(v), l[m] = Math.abs(g) / f, c[m] = Math.abs(v) / f, u = m
												}
												return {
													raw_time: r,
													raw_old_time: o,
													time: a,
													old_time: d,
													pct: l,
													old_pct: c
												}
											}

											function a() {
												void 0 !== c.TC_Instance_List ? f = c.TC_Instance_List : c.TC_Instance_List = f, l(c)
											}

											function l(e) {
												for (var t = ["webkit", "moz"], n = 0; n < t.length && !e.requestAnimationFrame; ++n) e.requestAnimationFrame = e[t[n] + "RequestAnimationFrame"], e.cancelAnimationFrame = e[t[n] + "CancelAnimationFrame"];
												e.requestAnimationFrame && e.cancelAnimationFrame || (e.requestAnimationFrame = function(t, n, i) {
													void 0 === i && (i = {
														data: {
															last_frame: 0
														}
													});
													var s = (new Date).getTime(),
														r = Math.max(0, 16 - (s - i.data.last_frame)),
														o = e.setTimeout(function() {
															t(s + r)
														}, r);
													return i.data.last_frame = s + r, o
												}, e.cancelAnimationFrame = function(e) {
													clearTimeout(e)
												})
											}
											var c = window;
											Object.keys || (Object.keys = function() {
												"use strict";
												var e = Object.prototype.hasOwnProperty,
													t = !{
														toString: null
													}.propertyIsEnumerable("toString"),
													n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
													i = n.length;
												return function(s) {
													if ("object" != typeof s && ("function" != typeof s || null === s)) throw new TypeError("Object.keys called on non-object");
													var r, o, a = [];
													for (r in s) e.call(s, r) && a.push(r);
													if (t)
														for (o = 0; o < i; o++) e.call(s, n[o]) && a.push(n[o]);
													return a
												}
											}());
											var d = !1,
												u = (location.hash, ["Days", "Hours", "Minutes", "Seconds"]),
												h = {
													Seconds: "Minutes",
													Minutes: "Hours",
													Hours: "Days",
													Days: "Years"
												},
												p = {
													Seconds: 1,
													Minutes: 60,
													Hours: 3600,
													Days: 86400,
													Months: 2678400,
													Years: 31536e3
												};
											Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
												var t = this.length >>> 0,
													n = Number(arguments[1]) || 0;
												for (n = n < 0 ? Math.ceil(n) : Math.floor(n), n < 0 && (n += t); n < t; n++)
													if (n in this && this[n] === e) return n;
												return -1
											});
											var f = {},
												m = function(e, t) {
													this.element = e, this.container, this.listeners = null, this.data = {
														paused: !1,
														last_frame: 0,
														animation_frame: null,
														interval_fallback: null,
														timer: !1,
														total_duration: null,
														prev_time: null,
														drawn_units: [],
														text_elements: {
															Days: null,
															Hours: null,
															Minutes: null,
															Seconds: null
														},
														attributes: {
															canvas: null,
															context: null,
															item_size: null,
															line_width: null,
															radius: null,
															outer_radius: null
														},
														state: {
															fading: {
																Days: !1,
																Hours: !1,
																Minutes: !1,
																Seconds: !1
															}
														}
													}, this.config = null, this.setOptions(t), this.initialize()
												};
											m.prototype.clearListeners = function() {
												this.listeners = {
													all: [],
													visible: []
												}
											}, m.prototype.addTime = function(e) {
												if (this.data.attributes.ref_date instanceof Date) {
													var t = this.data.attributes.ref_date;
													t.setSeconds(t.getSeconds() + e)
												} else isNaN(this.data.attributes.ref_date) || (this.data.attributes.ref_date += 1e3 * e)
											}, m.prototype.initialize = function(t) {
												this.data.drawn_units = [];
												for (var i = 0; i < Object.keys(this.config.time).length; i++) {
													var s = Object.keys(this.config.time)[i];
													this.config.time[s].show && this.data.drawn_units.push(s)
												}
												e(this.element).children("div.time_circles").remove(), void 0 === t && (t = !0), (t || null === this.listeners) && this.clearListeners(), this.container = e("<div>"), this.container.addClass("time_circles"), this.container.appendTo(this.element);
												var r = this.element.offsetHeight,
													o = this.element.offsetWidth;
												0 === r && (r = e(this.element).height()), 0 === o && (o = e(this.element).width()), 0 === r && o > 0 ? r = o / this.data.drawn_units.length : 0 === o && r > 0 && (o = r * this.data.drawn_units.length);
												var a = document.createElement("canvas");
												a.width = o, a.height = r, this.data.attributes.canvas = e(a), this.data.attributes.canvas.appendTo(this.container);
												var l = n();
												l || "undefined" == typeof G_vmlCanvasManager || (G_vmlCanvasManager.initElement(a), d = !0, l = !0), l && (this.data.attributes.context = a.getContext("2d")), this.data.attributes.item_size = Math.min(o / this.data.drawn_units.length, r), this.data.attributes.line_width = this.data.attributes.item_size * this.config.fg_width, this.data.attributes.radius = (.8 * this.data.attributes.item_size - this.data.attributes.line_width) / 2, this.data.attributes.outer_radius = this.data.attributes.radius + .5 * Math.max(this.data.attributes.line_width, this.data.attributes.line_width * this.config.bg_width);
												var i = 0;
												for (var u in this.data.text_elements)
													if (this.config.time[u].show) {
														var h = e("<div>");
														h.addClass("textDiv_" + u), h.css("top", Math.round(.35 * this.data.attributes.item_size)), h.css("left", Math.round(i++ * this.data.attributes.item_size)), h.css("width", this.data.attributes.item_size), h.appendTo(this.container);
														var p = e("<span>");
														p.css("font-size", Math.round(3 * this.config.text_size * this.data.attributes.item_size)), p.css("line-height", Math.round(this.config.text_size * this.data.attributes.item_size) + "px"), p.appendTo(h);
														var f = e("<h4>");
														f.text(this.config.time[u].text), f.css("font-size", Math.round(this.config.text_size * this.data.attributes.item_size)), f.css("line-height", Math.round(this.config.text_size * this.data.attributes.item_size) + "px"), f.appendTo(h), this.data.text_elements[u] = p
													}
												this.start(), this.config.start || (this.data.paused = !0);
												var m = this;
												this.data.interval_fallback = c.setInterval(function() {
													m.update.call(m, !0)
												}, 100)
											}, m.prototype.update = function(e) {
												if (void 0 === e) e = !1;
												else if (e && this.data.paused) return;
												d && this.data.attributes.context.clearRect(0, 0, this.data.attributes.canvas[0].width, this.data.attributes.canvas[0].hright);
												var t, n, i = this.data.prev_time,
													s = new Date;
												if (this.data.prev_time = s, null === i && (i = s), !this.config.count_past_zero && s > this.data.attributes.ref_date) {
													for (var r = 0; r < this.data.drawn_units.length; r++) {
														var a = this.data.drawn_units[r];
														this.data.text_elements[a].text("0");
														var l = r * this.data.attributes.item_size + this.data.attributes.item_size / 2,
															h = this.data.attributes.item_size / 2,
															f = this.config.time[a].color;
														this.drawArc(l, h, f, 0)
													}
													return void this.stop()
												}
												t = (this.data.attributes.ref_date - s) / 1e3, n = (this.data.attributes.ref_date - i) / 1e3;
												var m = "smooth" !== this.config.animation,
													g = o(t, n, this.data.total_duration, this.data.drawn_units, m),
													v = o(t, n, p.Years, u, m),
													r = 0,
													y = 0,
													b = null,
													w = this.data.drawn_units.slice();
												for (var r in u) {
													var a = u[r];
													if (Math.floor(v.raw_time[a]) !== Math.floor(v.raw_old_time[a]) && this.notifyListeners(a, Math.floor(v.time[a]), Math.floor(t), "all"), !(w.indexOf(a) < 0)) {
														if (Math.floor(g.raw_time[a]) !== Math.floor(g.raw_old_time[a]) && this.notifyListeners(a, Math.floor(g.time[a]), Math.floor(t), "visible"), !e) {
															this.data.text_elements[a].text(Math.floor(Math.abs(g.time[a])));
															var l = y * this.data.attributes.item_size + this.data.attributes.item_size / 2,
																h = this.data.attributes.item_size / 2,
																f = this.config.time[a].color;
															"smooth" === this.config.animation ? (null === b || d || (Math.floor(g.time[b]) > Math.floor(g.old_time[b]) ? (this.radialFade(l, h, f, 1, a), this.data.state.fading[a] = !0) : Math.floor(g.time[b]) < Math.floor(g.old_time[b]) && (this.radialFade(l, h, f, 0, a), this.data.state.fading[a] = !0)), this.data.state.fading[a] || this.drawArc(l, h, f, g.pct[a])) : this.animateArc(l, h, f, g.pct[a], g.old_pct[a], (new Date).getTime() + 200)
														}
														b = a, y++
													}
												}
												if (!this.data.paused && !e) {
													var S = this,
														x = function() {
															S.update.call(S)
														};
													if ("smooth" === this.config.animation) this.data.animation_frame = c.requestAnimationFrame(x, S.element, S);
													else {
														var _ = t % 1 * 1e3;
														_ < 0 && (_ = 1e3 + _), _ += 50, S.data.animation_frame = c.setTimeout(function() {
															S.data.animation_frame = c.requestAnimationFrame(x, S.element, S)
														}, _)
													}
												}
											}, m.prototype.animateArc = function(e, t, n, i, s, r) {
												if (null !== this.data.attributes.context) {
													var o = s - i;
													if (Math.abs(o) > .5) 0 === i ? this.radialFade(e, t, n, 1) : this.radialFade(e, t, n, 0);
													else {
														var a = (200 - (r - (new Date).getTime())) / 200;
														a > 1 && (a = 1);
														var l = s * (1 - a) + i * a;
														if (this.drawArc(e, t, n, l), a >= 1) return;
														var d = this;
														c.requestAnimationFrame(function() {
															d.animateArc(e, t, n, i, s, r)
														}, this.element)
													}
												}
											}, m.prototype.drawArc = function(e, t, n, i) {
												if (null !== this.data.attributes.context) {
													var s = Math.max(this.data.attributes.outer_radius, this.data.attributes.item_size / 2);
													d || this.data.attributes.context.clearRect(e - s, t - s, 2 * s, 2 * s), this.config.use_background && (this.data.attributes.context.beginPath(), this.data.attributes.context.arc(e, t, this.data.attributes.radius, 0, 2 * Math.PI, !1), this.data.attributes.context.lineWidth = this.data.attributes.line_width * this.config.bg_width, this.data.attributes.context.strokeStyle = this.config.circle_bg_color, this.data.attributes.context.stroke());
													var r, o, a, l = -.5 * Math.PI,
														c = 2 * Math.PI;
													r = l + this.config.start_angle / 360 * c;
													var u = 2 * i * Math.PI;
													"Both" === this.config.direction ? (a = !1, r -= u / 2, o = r + u) : "Clockwise" === this.config.direction ? (a = !1, o = r + u) : (a = !0, o = r - u), this.data.attributes.context.beginPath(), this.data.attributes.context.arc(e, t, this.data.attributes.radius, r, o, a), this.data.attributes.context.lineWidth = this.data.attributes.line_width, this.data.attributes.context.strokeStyle = n, this.data.attributes.context.stroke()
												}
											}, m.prototype.radialFade = function(e, n, i, s, r) {
												var o, a = t(i),
													l = this,
													d = .2 * (1 === s ? -1 : 1);
												for (o = 0; s <= 1 && s >= 0; o++) ! function() {
													var t = 50 * o,
														i = "rgba(" + a.r + ", " + a.g + ", " + a.b + ", " + Math.round(10 * s) / 10 + ")";
													c.setTimeout(function() {
														l.drawArc(e, n, i, 1)
													}, t)
												}(), s += d;
												void 0 !== typeof r && c.setTimeout(function() {
													l.data.state.fading[r] = !1
												}, 50 * o)
											}, m.prototype.timeLeft = function() {
												if (this.data.paused && "number" == typeof this.data.timer) return this.data.timer;
												var e = new Date;
												return (this.data.attributes.ref_date - e) / 1e3
											}, m.prototype.start = function() {
												c.cancelAnimationFrame(this.data.animation_frame), c.clearTimeout(this.data.animation_frame);
												var t = e(this.element).data("date");
												if (void 0 === t && (t = e(this.element).attr("data-date")), "string" == typeof t) this.data.attributes.ref_date = r(t);
												else if ("number" == typeof this.data.timer) this.data.paused && (this.data.attributes.ref_date = (new Date).getTime() + 1e3 * this.data.timer);
												else {
													var n = e(this.element).data("timer");
													void 0 === n && (n = e(this.element).attr("data-timer")), "string" == typeof n && (n = parseFloat(n)), "number" == typeof n ? (this.data.timer = n, this.data.attributes.ref_date = (new Date).getTime() + 1e3 * n) : this.data.attributes.ref_date = this.config.ref_date
												}
												this.data.paused = !1, this.update.call(this)
											}, m.prototype.restart = function() {
												this.data.timer = !1, this.start()
											}, m.prototype.stop = function() {
												"number" == typeof this.data.timer && (this.data.timer = this.timeLeft(this)), this.data.paused = !0, c.cancelAnimationFrame(this.data.animation_frame)
											}, m.prototype.destroy = function() {
												this.clearListeners(), this.stop(), c.clearInterval(this.data.interval_fallback), this.data.interval_fallback = null, this.container.remove(), e(this.element).removeAttr("data-tc-id"), e(this.element).removeData("tc-id")
											}, m.prototype.setOptions = function(t) {
												if (null === this.config && (this.default_options.ref_date = new Date, this.config = e.extend(!0, {}, this.default_options)), e.extend(!0, this.config, t), c = this.config.use_top_frame ? window.top : window, a(), this.data.total_duration = this.config.total_duration, "string" == typeof this.data.total_duration)
													if (void 0 !== p[this.data.total_duration]) this.data.total_duration = p[this.data.total_duration];
													else if ("Auto" === this.data.total_duration)
													for (var n = 0; n < Object.keys(this.config.time).length; n++) {
														var i = Object.keys(this.config.time)[n];
														if (this.config.time[i].show) {
															this.data.total_duration = p[h[i]];
															break
														}
													} else this.data.total_duration = p.Years, console.error("Valid values for TimeCircles config.total_duration are either numeric, or (string) Years, Months, Days, Hours, Minutes, Auto")
											}, m.prototype.addListener = function(e, t, n) {
												"function" == typeof e && (void 0 === n && (n = "visible"), this.listeners[n].push({
													func: e,
													scope: t
												}))
											}, m.prototype.notifyListeners = function(e, t, n, i) {
												for (var s = 0; s < this.listeners[i].length; s++) {
													var r = this.listeners[i][s];
													r.func.apply(r.scope, [e, t, n])
												}
											}, m.prototype.default_options = {
												ref_date: new Date,
												start: !0,
												animation: "smooth",
												count_past_zero: !0,
												circle_bg_color: "#60686F",
												use_background: !0,
												fg_width: .1,
												bg_width: 1.2,
												text_size: .07,
												total_duration: "Auto",
												direction: "Clockwise",
												use_top_frame: !1,
												start_angle: 0,
												time: {
													Days: {
														show: !0,
														text: "Days",
														color: "#FC6"
													},
													Hours: {
														show: !0,
														text: "Hours",
														color: "#9CF"
													},
													Minutes: {
														show: !0,
														text: "Minutes",
														color: "#BFB"
													},
													Seconds: {
														show: !0,
														text: "Seconds",
														color: "#F99"
													}
												}
											};
											var g = function(e, t) {
												this.elements = e, this.options = t, this.foreach()
											};
											g.prototype.getInstance = function(t) {
												var n, i = e(t).data("tc-id");
												if (void 0 === i && (i = s(), e(t).attr("data-tc-id", i)), void 0 === f[i]) {
													var r = this.options,
														o = e(t).data("options");
													"string" == typeof o && (o = JSON.parse(o)), "object" == typeof o && (r = e.extend(!0, {}, this.options, o)), n = new m(t, r), f[i] = n
												} else n = f[i], void 0 !== this.options && n.setOptions(this.options);
												return n
											}, g.prototype.addTime = function(e) {
												this.foreach(function(t) {
													t.addTime(e)
												})
											}, g.prototype.foreach = function(e) {
												var t = this;
												return this.elements.each(function() {
													var n = t.getInstance(this);
													"function" == typeof e && e(n)
												}), this
											}, g.prototype.start = function() {
												return this.foreach(function(e) {
													e.start()
												}), this
											}, g.prototype.stop = function() {
												return this.foreach(function(e) {
													e.stop()
												}), this
											}, g.prototype.restart = function() {
												return this.foreach(function(e) {
													e.restart()
												}), this
											}, g.prototype.rebuild = function() {
												return this.foreach(function(e) {
													e.initialize(!1)
												}), this
											}, g.prototype.getTime = function() {
												return this.getInstance(this.elements[0]).timeLeft()
											}, g.prototype.addListener = function(e, t) {
												void 0 === t && (t = "visible");
												var n = this;
												return this.foreach(function(i) {
													i.addListener(e, n.elements, t)
												}), this
											}, g.prototype.destroy = function() {
												return this.foreach(function(e) {
													e.destroy()
												}), this
											}, g.prototype.end = function() {
												return this.elements
											}, e.fn.TimeCircles = function(e) {
												return new g(this, e)
											}
										}(jQuery),
										function(e) {
											function t() {
												this.fake = !0, this.boundary = "--------FormData" + Math.random(), this._fields = []
											}
											e.FormData || (t.prototype.append = function(e, t) {
												this._fields.push([e, t])
											}, t.prototype.toString = function() {
												var e = this.boundary,
													t = "";
												return this._fields.forEach(function(n) {
													if (t += "--" + e + "\r\n", n[1].name) {
														var i = n[1];
														t += 'Content-Disposition: form-data; name="' + n[0] + '"; filename="' + i.name + '"\r\n', t += "Content-Type: " + i.type + "\r\n\r\n", t += i.getAsBinary() + "\r\n"
													} else t += 'Content-Disposition: form-data; name="' + n[0] + '";\r\n\r\n', t += n[1] + "\r\n"
												}), t += "--" + e + "--"
											}, e.FormData = t)
										}(window), "insertAdjacentHTML" in document.createElementNS("http://www.w3.org/1999/xhtml", "_") || Object.defineProperty(HTMLElement.prototype, "insertAdjacentHTML", function(e, t) {
											var n = void 0,
												i = n.ownerDocument.createElementNS("http://www.w3.org/1999/xhtml", "_"),
												s = n.parentNode,
												r = void 0,
												o = void 0,
												a = void 0;
											switch (i.innerHTML = t, e.toLowerCase()) {
												case "beforebegin":
													for (; r = i.firstChild;) s.insertBefore(r, n);
													break;
												case "afterbegin":
													for (o = n.firstChild; r = i.lastChild;) o = n.insertBefore(r, o);
													break;
												case "beforeend":
													for (; r = i.firstChild;) n.appendChild(r);
													break;
												case "afterend":
													for (a = n.nextSibling; r = i.lastChild;) a = s.insertBefore(r, a)
											}
										}), Object.assign || Object.defineProperty(Object, "assign", {
											enumerable: !1,
											configurable: !0,
											writable: !0,
											value: function(e, t) {
												"use strict";
												if (void 0 === e || null === e) throw new TypeError("Cannot convert first argument to object");
												for (var n = Object(e), i = 1; i < arguments.length; i++) {
													var s = arguments[i];
													if (void 0 !== s && null !== s)
														for (var r = Object.keys(Object(s)), o = 0, a = r.length; o < a; o++) {
															var l = r[o],
																c = Object.getOwnPropertyDescriptor(s, l);
															void 0 !== c && c.enumerable && (n[l] = s[l])
														}
												}
												return n
											}
										});
									var helpers = {
										matches: function() {
											return document.body.matchesSelector || document.body.webkitMatchesSelector || document.body.mozMatchesSelector || document.body.msMatchesSelector || document.body.webkitMatchesSelector || document.body.matchesSelector
										},
										getParent: function(e, t) {
											for (; e.parentNode && !this.matches().call(e, t);) e = e.parentNode;
											return 9 === e.nodeType ? null : e
										},
										addEvents: function(e, t, n) {
											var e = [].slice.call(e);
											e.forEach(function(e) {
												e.addEventListener(t, n)
											})
										},
										screenSize: function() {
											var e = window,
												t = document,
												n = t.documentElement,
												i = t.getElementsByTagName("body")[0];
											return {
												screenX: e.innerWidth || n.clientWidth || i.clientWidth,
												screenY: e.innerHeight || n.clientHeight || i.clientHeight
											}
										},
										debounce: function(e, t, n) {
											var i;
											return function() {
												var s = this,
													r = arguments,
													o = function() {
														i = null, n || e.apply(s, r)
													},
													a = n && !i;
												clearTimeout(i), i = setTimeout(o, t), a && e.apply(s, r)
											}
										},
										detectScrollBottomByElement: function(e) {
											return (document.body.scrollTop || document.documentElement.scrollTop) >= e.offsetTop + e.offsetHeight - window.innerHeight
										},
										detectScrollOnBottomPage: function() {
											return document.body.scrollHeight <= (document.body.scrollTop || document.documentElement.scrollTop) + window.innerHeight
										},
										addClass: function(e, t) {
											new RegExp("(^|\\s)" + t + "(\\s|$)", "g").test(e.className) || (e.className = (e.className + " " + t).replace(/\s+/g, " ").replace(/(^ | $)/g, ""))
										},
										hasClass: function(e, t) {
											return new RegExp("(^|\\s)" + t + "(\\s|$)", "g").test(e.className)
										},
										removeClass: function(e, t) {
											var n = new RegExp("(^|\\s)" + t + "(\\s|$)", "g");
											e.className = e.className.replace(n, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "")
										},
										dispatchEvent: function(e, t) {
											var n = document.createEvent("HTMLEvents");
											n.initEvent(t, !1, !0), e.dispatchEvent(n)
										},
										dispatchEventWithData: function(e, t, n) {
											var i = document.createEvent("CustomEvent");
											i.initCustomEvent(t, !1, !1, n), e.dispatchEvent(i)
										},
										isFlashAvailable: function() {
											var e = !1;
											try {
												new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (e = !0)
											} catch (t) {
												navigator.mimeTypes && void 0 != navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (e = !0)
											}
											return {
												enabled: e
											}
										},
										isMobile: function() {
											return !!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i))
										}
									};
									! function() {
										var e = Object.create({
												call: function(t, n) {
													var i, s;
													for (i in e) s = $(i), s[0] === t[0] && (e[i][n.result] || function() {})(n, t)
												}
											}),
											t = function(t) {
												$.each($("[data-form]"), function(n, i) {
													i = $(i);
													var s = function(e) {
															e.preventDefault();
															var t = new FormData,
																n = i.attr("method"),
																s = i.attr("action");
															i[0].trigger = "submit", i.valid() && (i.find("input, textarea, select").each(function(e, n) {
																if (n = $(n), n.attr("name")) {
																	if ("radio" === n.attr("type")) return void(n.prop("checked") && t.append(n.attr("name"), n.val()));
																	if ("file" !== n.attr("type")) t.append(n.attr("name"), n.val());
																	else {
																		var i = void 0 === n[0].files[0] ? "" : n[0].files[0];
																		t.append(n.attr("name"), i)
																	}
																}
															}), $.ajax({
																cache: !1,
																contentType: !1,
																data: "post" === n ? t : i.serialize(),
																processData: !1,
																type: n,
																url: s
															}).then(r), i.find("[data-submit]").addClass("btn-preloader disabled")), delete i.trigger
														},
														r = function(t) {
															var n, s, r, o, a = document.querySelector(".recaptcha-form-field");
															if ("error" === t.result) {
																for (n in t.validateErrors) {
																	if (s = i.find('[data-name="' + n + '"]'), r = t.validateErrors[n], o = $.validator.messages[r[0]] || r, !a || "twoFactorTempCode" === n && "twoFactorSmsCode" === n || grecaptcha.reset(), "email" === n) {
																		if (r.length)
																			for (var l in r)
																				if (r.hasOwnProperty(l) && -1 !== r[l].indexOf("email.not.allowed.host")) {
																					o = $.validator.messages[r[l]];
																					break
																				}
																		if (-1 !== o.indexOf("@email@")) {
																			var c = i.find('[data-name="' + n + '"]').val();
																			o = o.replace("@email@", c);
																			var d = i.find('[data-error="' + n + '"]');
																			d.text(o);
																			var u = d.css("height");
																			parseInt(u) > 30 ? d.closest("div.form-line").css("padding", "0 0 " + (parseInt(u) + 12) + "px 0") : d.closest("div.form-line").css("padding", "0 0 35px 0")
																		}
																	}
																	if ("recaptcha" === n && i.find('[data-error="recaptcha"]').text(o), "twoFactorTempCode" === n || "twoFactorSmsCode" === n) {
																		if ("twoFactorTempCode" === n) {
																			var h = new CustomEvent("showFactor2Auth", {
																				detail: "twoFactorTempCode"
																			});
																			document.dispatchEvent(h)
																		}
																		if ("twoFactorSmsCode" === n) {
																			var p = new CustomEvent("showFactor2Auth", {
																				detail: "twoFactorSmsCode"
																			});
																			document.dispatchEvent(p)
																		}
																	}
																	i.find('[data-error="' + s.attr("data-name") + '"]').text(o)
																}
																var f = document.querySelector(".btn-authorization-2-factor");
																f && f.classList.contains("btn-preloader") && f.classList.remove("btn-preloader", "disabled")
															}
															if (i.find("[data-submit]").removeClass("btn-preloader disabled"), t.hasOwnProperty("message") && t.message && "string" == typeof t.message && t.message.indexOf("redirect.") >= 0) {
																var m = t.message.replace("redirect.", "", t.message);
																return window.location.href = "/" + m
															}
															e.call(i, t)
														};
													i.validate(), i.find("[data-submit]").off("click"), i.find("[data-submit]").on("click", s), "auth2factorTrigger" === t && i.find("[data-submit]").trigger("click")
												})
											};
										checkEmailExtendedFunction = function() {
											return function(t, n) {
												return "focusout" !== n.form.trigger || (n = $(n), n.parent().append('<span class="form-elem-preloader"></span>'), $.ajax({
													async: !0,
													cache: !1,
													url: "/check-email/" + t.toLowerCase() + "?_=" + Date.now(),
													dataType: "json",
													success: function(i) {
														var s = $(n[0].form),
															r = n.attr("data-name"),
															o = s.find('[data-error="' + r + '"]');
														if ("error" === i.result) {
															var a = void 0,
																l = void 0;
															$.validator.messages[i.message] ? (a = $.validator.messages[i.message], a = a.replace("@email@", t)) : a = "Invalid field", o.text(a), l = o.css("height"), n.parent().addClass("error-border"), parseInt(l) > 30 ? n.closest("div.form-line").css("padding", "0 0 " + (parseInt(l) + 12) + "px 0") : n.closest("div.form-line").css("padding", "0 0 35px 0")
														} else o.text(""), n.parent().removeClass("error-border"), n.closest("div.form-line").css("padding", "0 0 35px 0");
														n.parent().find(".form-elem-preloader").remove(), e.call(n, i)
													}
												}), !0)
											}
										}, $.validator.setDefaults({
											debug: !1,
											ignore: ".ignore-validation",
											errorContainer: $(".error"),
											focusCleanup: !0,
											focusInvalid: !0,
											onfocusin: function(e) {
												e = $(e);
												var t = e.attr("data-name");
												$(e[0].form).find('[data-error="' + t + '"]').text(""), e.parent().removeClass("error-border")
											},
											onfocusout: function(e) {
												e.form.trigger = "focusout", $(e).valid(), delete e.form.trigger
											},
											onkeyup: !1,
											showErrors: function(e, t) {
												$.each(t, function(e, t) {
													var n = t.element.getAttribute("data-name");
													switch ($('[data-error="' + n + '"]').text(t.message), n) {
														case "t_and_c":
															var i = $('[data-error="' + n + '"]').closest("div.form-line").find("label"),
																s = parseInt(i.css("height")) + 5;
															$('[data-error="' + n + '"]').closest("div").css("top", s + "px")
													}
													$(t.element.parentElement).addClass("error-border")
												})
											}
										}), $.extend($.validator.messages, {
											captcha: "",
											"captcha.blank": "Captcha can not be empty",
											"captcha.wrong": "You must enter 4 digits",
											"captcha.invalid": "Captcha doesn't match",
											checkbox: "You must agree with terms",
											city: "",
											"city.blank": "City can not be empty",
											"city.wrong": "City should contain 1 to 64 symbols",
											code: "",
											"code.blank": "Code can not be empty",
											"code.wrong": "Code should contain 7 digits",
											"code.invalid": "Code doesn't match",
											"code.phone_already_verified": "This phone number is already verified on another account.",
											country: "",
											"country.blank": "Country is not selected",
											"country.wrong": "Country should contain 3 to 32 symbols",
											date: "",
											"date.invalid": "Invalid date",
											email: "",
											"email.blank": "Email can not be empty",
											"email.wrong": "Incorrect Email",
											"email.notvalid": "Incorrect Domain",
											"email.exist": "The indicated e-mail is not registered",
											"email.not.exist": "Email already exists",
											"email-exist": "The indicated e-mail is not registered",
											"email-notexist": "Email already exists",
											login: "",
											"login.blank": "Login can not be empty",
											"login.max": "Login may contain more than 17 alphanumeric symbols",
											"login.min": "Login may contain more than 5 alphanumeric symbols",
											"login.wrong": "Login may contain only alphanumeric symbols",
											"login.exist": "Login already exists",
											"login.not.exist": "Login does not exist",
											"login-exist": "Login already exists",
											"login-notexist": "Login does not exist",
											"login.invalid": "Login or password are incorrect",
											file: "Attach the file",
											firstname: "",
											"firstname.blank": "Firstname can not be empty",
											"firstname.wrong": "Firstname should contain 3 to 32 alphabetical symbols",
											psswrd: "",
											"psswrd.blank": "Password can not be empty",
											"psswrd.repeat": "Password don't match",
											"psswrd.wrong_length": "The password should consist of 8 symbols minimum",
											"password.current": "Current password is invalid",
											"passwordPlain.repeat": "Password don't match",
											phone: "",
											"phone.blank": "Phone can not be empty",
											"phone.wrong": "Phone should contain 5 to 15 digits",
											radio: "Choose your option",
											required: "The field can not be empty",
											select: "Choose your option",
											lastname: "",
											"lastname.blank": "Lastname can not be empty",
											"lastname.wrong": "Lastname should contain 3 to 32 alphabetical symbols"
										}), $.validator.addMethod("captcha", function(e, t) {
											return "" === e ? ($.validator.messages.captcha = $.validator.messages["captcha.blank"], !1) : !!/^[0-9]{4}$/.test(e) || ($.validator.messages.captcha = $.validator.messages["captcha.wrong"], !1)
										}), $.validator.addMethod("checkbox", function(e, t) {
											return "1" === e
										}), $.validator.addMethod("city", function(e, t) {
											return "" === e ? ($.validator.messages.city = $.validator.messages["city.blank"], !1) : !!/^([0-9A-Za-zА-Яа-я\- \.\s]{1,64})?$/.test(e) || ($.validator.messages.city = $.validator.messages["city.wrong"], !1)
										}), $.validator.addMethod("country", function(e, t) {
											return "" === e ? ($.validator.messages.country = $.validator.messages["country.blank"], !1) : !!/^([A-Za-zА-Яа-я\s]{2,64})?$/.test(e) || ($.validator.messages.country = $.validator.messages["country.wrong"], !1)
										}), $.validator.addMethod("email", function(e, t) {
											return "" === e ? ($.validator.messages.email = $.validator.messages["email.blank"], !1) : !!/^[A-Za-z0-9\._-]{1,44}@[A-Za-z0-9\._-]{1,32}\.[A-Za-z0-9\._-]{1,5}$/.test(e) || ($.validator.messages.email = $.validator.messages["email.wrong"], !1)
										}), $.validator.addMethod("file", function(e, t) {
											return "" !== e
										}), $.validator.addMethod("firstname", function(e, t) {
											return "" === e ? ($.validator.messages.firstname = $.validator.messages["firstname.blank"], !1) : !!/^[A-Za-zА-Яа-я\s]{3,32}?$/.test(e) || ($.validator.messages.firstname = $.validator.messages["firstname.wrong"], !1)
										}), $.validator.addMethod("login", function(e, t) {
											return "" === e ? ($.validator.messages.login = $.validator.messages["login.blank"], !1) : e.length < 5 ? ($.validator.messages.login = $.validator.messages["login.min"], !1) : e.length > 17 ? ($.validator.messages.login = $.validator.messages["login.max"], !1) : !!/^[A-Za-z0-9_\-.]*$/.test(e) || ($.validator.messages.login = $.validator.messages["login.wrong"], !1)
										}), $.validator.addMethod("lastname", function(e, t) {
											return "" === e ? ($.validator.messages.lastname = $.validator.messages["lastname.blank"], !1) : !!/^[A-Za-zА-Яа-я\s]{3,32}?$/.test(e) || ($.validator.messages.lastname = $.validator.messages["lastname.wrong"], !1)
										}), $.validator.addMethod("psswrd", function(e, t) {
											if ("password_change[password]" !== t.getAttribute("name")) {
												if ("" === e) return $.validator.messages.psswrd = $.validator.messages["psswrd.blank"], !1;
												if (e.length < 8 || e.length > 32) return $.validator.messages.psswrd = $.validator.messages["psswrd.wrong_length"], !1
											}
											return !0
										}), $.validator.addMethod("psswrd-repeat", function(e, t) {
											var n = "true" !== t.dataset.rulePsswrdRepeat ? '[data-name="' + t.dataset.rulePsswrdRepeat + '"]' : "[data-rule-psswrd]";
											return $.validator.messages["psswrd-repeat"] = $.validator.messages["psswrd.repeat"], e === $("[data-form]").find(n).val()
										}), $.validator.addMethod("phone", function(e, t) {
											return "" === e ? ($.validator.messages.phone = $.validator.messages["phone.blank"], !1) : !!/^(\+?[0-9 \-\(\)]{5,15})?$/.test(e) || ($.validator.messages.phone = $.validator.messages["phone.wrong"], !1)
										}), $.validator.addMethod("code", function(e, t) {
											return "" === e ? ($.validator.messages.code = $.validator.messages["code.blank"], !1) : !!/^[0-9]{7}$/.test(e) || ($.validator.messages.code = $.validator.messages["code.wrong"], !1)
										}), $.validator.addMethod("radio", function(e, t) {
											return void 0 !== e && "" !== e
										}), $.validator.addMethod("select", function(e, t) {
											return "" !== e
										}), $.validator.addCallback = function(t, n, i) {
											return "string" != typeof t ? void console.error("First incoming parameter is required and must be a string") : "string" != typeof n ? void console.error("Second incoming parameter is required and must be a string") : "function" != typeof i ? void console.error("Third incoming parameter is required and must be a function") : (e[t] || (e[t] = {}), void(e[t][n] = i))
										}, $.each($("[data-form]"), t), document.addEventListener("form.refresh", t), document.addEventListener("auth2FactBtnClickEmulation", t.bind(null, "auth2factorTrigger"), !1)
									}(),
									function() {
										var updateCaptcha = function updateCaptcha(form) {
												form.find("[data-rule-captcha]").val(""), eval(form.find(".captcha-reload").attr("onclick"))
											},
											updateGTM = function(e) {
												try {
													dataLayer.push(e)
												} catch (e) {
													console.error(e)
												}
											},
											redirrectTo = function(e) {
												void 0 !== e && null !== e && (location.href = e)
											};
										$.validator.addCallback('[data-form="login"]', "ok", function(e, t) {
											t.find("[data-submit]").addClass("disabled"), updateGTM({
												event: "login-success-gtm"
											}), redirrectTo(e.message.redirect)
										}), $.validator.addCallback('[data-form="login"]', "error", function(e) {
											null === e.validateErrors && "" !== e.message ? (document.querySelector(".close-icon.js-popup") && document.querySelector(".close-icon.js-popup").dispatchEvent(new Event("click")), $.notification({
												result: e.result,
												title: e.message.title,
												message: e.message.reason
											})) : updateCaptcha($('[data-form="login"]'))
										}), $.validator.addCallback('[data-form="registration"]', "ok", function(e) {
											updateGTM({
												event: "registration-success-gtm"
											}), redirrectTo(e.message.redirect)
										}), $.validator.addCallback('[data-form="registration"]', "error", function() {
											updateCaptcha($('[data-form="registration"]'))
										}), $.validator.addCallback('[data-form="password-forgot"]', "ok", function() {
											updateCaptcha($('[data-form="password-forgot"]')), $.notification({
												url: "/message/success/password_forgot"
											})
										}), $.validator.addCallback('[data-form="password-forgot"]', "error", function() {
											updateCaptcha($('[data-form="password-forgot"]'))
										}), $.validator.addCallback('[data-form="password-reset"]', "ok", function() {
											var e = $('[data-form="password-reset"]');
											e[0].reset(), updateCaptcha(e), $.notification({
												url: "/message/success/password_reset"
											})
										}), $.validator.addCallback('[data-form="profile"]', "ok", function() {
											updateGTM({
												event: "profile-info-gtm"
											}), location.reload()
										}), $.validator.addCallback('[data-form="password-change"]', "ok", function() {
											$('[data-form="password-change"]')[0].reset(), $.notification({
												url: "/message/success/password_change"
											})
										}), $.validator.addCallback('[data-form="bonus-code"]', "ok", function(e) {
											dataLayer.push({
												"bonus-code-success": e.message.code
											}), $.notification({
												result: "success",
												title: e.message.title,
												message: e.message.reason
											})
										}), $.validator.addCallback('[data-form="bonus-code"]', "error", function(e) {
											dataLayer.push({
												"bonus-code-error": e.message.code
											}), $.notification({
												result: "error",
												title: e.message.title,
												message: e.message.reason
											})
										}), $.validator.addCallback('[data-form="feedback"]', "ok", function() {
											redirrectTo("/" + app.locale + "/feedback/message")
										}), $.validator.addCallback('[data-form="feedback"]', "error", function() {
											updateCaptcha($('[data-form="feedback"]'))
										}), $.validator.addCallback('[data-form="social-reg-pass"]', "ok", function(e) {
											redirrectTo(e.message.redirect)
										}), $.validator.addCallback('[data-form="social-reg-pass"]', "error", function(e) {
											"exist" === e.message && $(".js-social-login").show()
										}), $.validator.addCallback('[data-form="social-map-pass"]', "ok", function(e) {
											redirrectTo(e.message.redirect)
										})
									}(),
									function() {
										var e = {
												wrapper: function() {
													var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "successful",
														t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
													arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
													return '<div class="notification-box notification-' + e + ' active">\n                    ' + t + "\n                </div>"
												},
												close: function() {
													return '<span class="close-icon"></span>'
												},
												title: function() {
													return '<div class="title">\n                    ' + (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "") + "\n                </div>"
												},
												message: function() {
													var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
														t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
														n = '<div class="text">' + e + "</div>";
													return console.log(t), t.hasOwnProperty("link") && (n += '\n            <div class="btn-box-center">\n                <a href="' + t.link + '" target="_blank" class="btn btn-' + t.color + ' btn-width-auto">\n                    ' + t.text + "\n                </a>\n            </div>"), n += "</div>"
												},
												button: function() {
													var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
														t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
														n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
													if (e) return '<div class="btn-box-center">\n            <a href="' + e + '" target="_blank" class="btn btn-' + n + ' btn-width-auto">\n                ' + t + "\n            </a>\n        </div>"
												}
											},
											t = function(e, t) {
												document.body.appendChild(e), t && t(e)
											},
											n = function(e) {
												var t = e.querySelector(".close-icon"),
													n = function() {
														e.parentNode && e.parentNode.removeChild(e)
													};
												t.addEventListener("click", n)
											},
											i = function(t, n, i) {
												var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
													r = e.close(),
													o = e.title(n),
													a = e.message(i, s),
													l = e.wrapper(t, r + o + a),
													c = document.createElement("div");
												return c.innerHTML = l, c.firstChild
											},
											s = function(e) {
												var t = document.createElement("div");
												return t.innerHTML = e, t.firstChild
											};
										$.notification = function(e) {
											var r = void 0,
												o = void 0;
											e.url ? (r = new XMLHttpRequest, r.open("GET", e.url), r.onload = function(i) {
												var r = i.target,
													a = r.response;
												200 == r.status && (o = s(a), t(o, e.callback), n(o))
											}, r.send()) : (o = i(e.result, e.title, e.message, e.button), t(o, e.callback), n(o))
										}, $.notification.messages = {
											success: "Success",
											error: "Error",
											system: "System",
											flash: "Something wrong with your flash player. Please, reinstall it.",
											"flash.unavailable": 'Please, install flash player from official site: <a href="https://get.adobe.com/en/flashplayer/">adobe.com</a>',
											"flash.disabled": 'Please, enable your flash player, how to enable: <a href="https://helpx.adobe.com/ru/flash-player/kb/enabling-flash-player-chrome.html">adobe.com</a>'
										}
									}(),
									function() {
										var e = function() {
											({
												elem: {
													accSection: document.querySelectorAll(".acc-section"),
													title: document.querySelectorAll(".acc-title")
												},
												clickHandle: function() {
													for (var e = this, t = 0; t < this.elem.title.length; t++) ! function(t) {
														e.elem.title[t].addEventListener("click", function() {
															var n = e.elem.title[t].parentNode.querySelector(".acc-text_inner");
															e.elem.title[t].classList.contains("is-active") ? (e.elem.title[t].classList.remove("is-active"), n.parentNode.style.height = 0) : (e.elem.title[t].classList.add("is-active"), n.parentNode.style.height = "auto")
														})
													}(t)
												},
												init: function() {
													this.elem.accSection && this.clickHandle()
												}
											}).init()
										};
										e(), document.addEventListener("accordionAction", e)
									}(),
									function() {
										var e = function() {
											var e = {
													conf: {
														parentContainer: document.querySelector(".js-lazyload-list"),
														providerSelect: document.querySelector(".js-provider-select"),
														searchField: document.querySelector(".js-search-box"),
														gameListBox: document.querySelector(".game-list-box"),
														moreGameBtn: document.querySelector(".btn-all-game"),
														moreBonusBtn: document.querySelector(".js-btn-bonus-history-show-more"),
														filterStatus: document.querySelector(".js-filter-status"),
														filterType: document.querySelector(".js-filter-type"),
														filterGame: document.querySelector(".js-filter-game"),
														filterBtn: document.querySelector(".js-filter-btn"),
														dashboardTooltip: document.querySelector(".dashboard-info"),
														dashboardContent: document.querySelector(".dashboard-content"),
														wrapp: document.querySelector(".wrapp-scroll"),
														loadUrl: window.location.pathname,
														searchUrl: "/search/game",
														favoriteIconUrl: "/favorites/",
														debounceTime: 1e3
													},
													resetValue: function() {
														this.conf.searchField.value = ""
													},
													preloaderCreate: function() {
														var e = document.createElement("div"),
															t = document.createElement("div");
														return e.setAttribute("class", "preloader-wrapp preloader-wrapp__bottom-page"), t.setAttribute("class", "preloader-box"), e.appendChild(t), e
													},
													preloaderCreateOnButton: function() {
														var e = document.createElement("span");
														e.setAttribute("class", "header-preloader-small"), this.conf.filterBtn.appendChild(e)
													},
													removeElement: function(e) {
														if (null == e) return !1;
														e.parentNode.removeChild(e)
													},
													onSelectChange: function(e) {
														t.setProvider(e.target.value), this.resetValue(), this.ajaxCall(), this.conf.moreGameBtn && (this.conf.moreGameBtn.parentNode.removeChild(this.conf.moreGameBtn), delete this.conf.moreGameBtn)
													},
													filtersConfig: {},
													filters: function(e) {
														e.target.classList.contains("js-filter-status") && (this.filtersConfig.status = e.target.value), e.target.classList.contains("js-filter-type") && (this.filtersConfig.type = e.target.value), e.target.classList.contains("js-filter-game") && (this.filtersConfig.game = e.target.value), (this.conf.filterStatus && "" !== this.conf.filterStatus.value || this.conf.filterType && "" !== this.conf.filterType.value || this.conf.filterGame && "" !== this.conf.filterGame.value) && this.conf.filterBtn.classList.remove("disabled")
													},
													filterAction: function() {
														t.currentPage = 0, t.ajaxIsEmpty = !1, this.conf.filterBtn && (this.preloaderCreateOnButton(), this.conf.filterBtn.classList.add("disabled")), this.ajaxCall(this.filtersConfig)
													},
													validateSearchLength: function(e) {
														var t = parseInt(e.target.getAttribute("data-max-length"));
														t < e.target.value.length && (e.target.value = e.target.value.substring(0, t))
													},
													onSearchChange: function(e) {
														this.validateSearchLength(e), t.setSearchValue(e.target.value), "" == e.target.value && (t.currentPage = 0), e.target.setAttribute("value", e.target.value), this.debounce()
													},
													tournamentGameBox: function() {
														for (var e = document.querySelectorAll(".tour-game-active-item"), t = 0; t < e.length; t++) e[t].addEventListener("mouseover", function() {
															this.classList.add("active")
														}), e[t].addEventListener("mouseout", function() {
															this.classList.remove("active")
														})
													},
													gameListItem: function() {
														for (var e = document.querySelectorAll(".game-item"), t = 0; t < e.length; t++) e[t].addEventListener("mouseover", function() {
															this.classList.add("is-active")
														}), e[t].addEventListener("mouseout", function() {
															this.classList.remove("is-active")
														})
													},
													getFavoriteIcon: function() {
														for (var t = document.querySelectorAll(".js-favorite-icon"), n = 0; n < t.length; n++) void 0 == t[n].dataset.favLoaded && (t[n].dataset.favLoaded = "true", t[n].addEventListener("click", function() {
															var t = this.dataset.id;
															this.classList.toggle("is-active"), e.setFavoriteIconAjaxCall(t)
														}))
													},
													setFavoriteIconAjaxCall: function(e) {
														$.get(this.conf.favoriteIconUrl + e, {})
													},
													vendorDependences: function() {
														var e = document.querySelector(".jcf-scrollable"),
															t = document.querySelector(".tour-game-slider"),
															n = document.querySelector(".tour-game-ended-slider"),
															i = document.querySelectorAll(".game-item"),
															s = document.querySelectorAll(".js-favorite-icon"),
															r = document.querySelector(".js-tournaments-slider"),
															o = document.querySelector(".history-box"),
															a = document.querySelector(".js-lazy-img");
														if (e && jcf.replaceAll(), t && (this.tournamentGameBox(), $(".tour-game-slider").owlCarousel({
																dots: !1,
																loop: !1,
																margin: 10,
																nav: !0,
																autoplay: !1,
																responsive: {
																	0: {
																		items: 1
																	},
																	320: {
																		items: 2
																	},
																	470: {
																		items: 3
																	},
																	600: {
																		items: 4
																	},
																	768: {
																		items: 5
																	},
																	980: {
																		items: 6
																	},
																	1140: {
																		items: 7
																	},
																	1280: {
																		items: 8
																	}
																}
															})), n && (this.tournamentGameBox(), $(".tour-game-ended-slider").owlCarousel({
																dots: !1,
																items: 4,
																loop: !1,
																margin: 10,
																nav: !0,
																autoplay: !1,
																responsive: {
																	0: {
																		items: 1
																	},
																	320: {
																		items: 2
																	},
																	400: {
																		items: 3
																	},
																	550: {
																		items: 4
																	},
																	650: {
																		items: 5
																	},
																	750: {
																		items: 6
																	},
																	850: {
																		items: 7
																	},
																	1e3: {
																		items: 4
																	},
																	1280: {
																		items: 4
																	}
																}
															})), r) {
															var l = new Event("dragAjaxOwlTournamentSlider");
															document.dispatchEvent(l)
														}
														if (o) {
															var c = new Event("paymentCancelBtns");
															document.dispatchEvent(c)
														}
														if (a) {
															var d = new Event("lazyloadImagesContent");
															document.dispatchEvent(d)
														}
														i && this.gameListItem(), null != s && this.getFavoriteIcon()
													},
													moreGameHandle: function() {
														var n = this.conf.parentContainer,
															i = this.conf.moreGameBtn;
														t.incrementPage(), n.appendChild(e.preloaderCreate()), e.ajaxCall();
														var s = i.parentNode;
														s.parentNode.removeChild(s), delete this.conf.moreGameBtn
													},
													moreBonusHandle: function() {
														var n = this.conf.parentContainer,
															i = this.conf.moreBonusBtn;
														t.incrementPage(), n.parentNode.appendChild(e.preloaderCreate()), e.ajaxCall(), i.parentNode.removeChild(i), delete this.conf.moreBonusBtn
													},
													onScrollBottom: function() {
														var n = document.querySelector(".preloader-box"),
															i = this.conf.parentContainer,
															s = document.querySelector(".dashboard-content"),
															r = document.querySelector(".bonus-history-content");
														this.conf.gameListBox && helpers.detectScrollBottomByElement(this.conf.gameListBox) && !this.conf.moreGameBtn && !this.conf.moreBonusBtn && (null != n || t.searchValue || 1 == t.ajaxIsEmpty || (t.incrementPage(), i.appendChild(e.preloaderCreate()), e.ajaxCall())), this.conf.gameListBox || this.conf.moreBonusBtn || s || !helpers.detectScrollBottomByElement(i) || null == n && 1 != t.ajaxIsEmpty && (t.incrementPage(), r ? r.appendChild(e.preloaderCreate()) : i.appendChild(e.preloaderCreate()), e.ajaxCall(this.filtersConfig)), !this.conf.gameListBox && !this.conf.moreBonusBtn && s && i && helpers.detectScrollBottomByElement(s) && null == n && 1 != t.ajaxIsEmpty && (t.incrementPage(), s.appendChild(e.preloaderCreate()), e.ajaxCall(this.filtersConfig))
													},
													tableLastRowCheck: function() {
														var t = document.querySelector(".dashboard-table");
														("false" == t.rows[t.rows.length - 1].getAttribute("data-load") || t.rows.length <= 1) && e.conf.wrapp.classList.remove("make-shadow")
													},
													ajaxCall: function(n) {
														var i = t[n ? "extendGlobalConfig" : "globalConfig"](n),
															s = this.conf.parentContainer,
															r = document.querySelector(".dashboard-content"),
															o = document.querySelector(".preloader-wrapp"),
															a = document.querySelector(".header-preloader-small"),
															l = i.query ? this.conf.searchUrl : this.conf.loadUrl;
														e.vendorDependences(), $.get(l, i, function(n) {
															e.conf.wrapp && !e.conf.wrapp.classList.contains("make-shadow") && e.conf.wrapp.classList.add("make-shadow"), "" == n.trim() && (t.ajaxIsEmpty = !0, e.conf.wrapp && e.conf.wrapp.classList.remove("make-shadow")), "provider" in i && 0 === i.page || "query" in i || "status" in i && 0 === i.page || "type" in i && 0 === i.page || "game" in i && 0 === i.page ? s.innerHTML = n : s.insertAdjacentHTML("beforeend", n)
														}).always(function() {
															if (e.vendorDependences(), e.conf.gameListBox) {
																var t = new Event("dataPopupBtn");
																document.dispatchEvent(t)
															}
															if (e.conf.dashboardTooltip && e.dashboardTooltip(), e.conf.filterBtn && a && (e.removeElement(a), e.conf.filterBtn.classList.remove("disabled")), e.conf.wrapp && e.conf.wrapp.classList.contains("make-shadow") && e.tableLastRowCheck(), o && (s.classList.contains("dashboard-table") ? (r.removeChild(o), e.vendorDependences()) : e.removeElement(o)), document.querySelector(".tournament-item-tour")) {
																var n = new Event("lazyloadScrollDetect");
																document.dispatchEvent(n)
															}
															if (document.querySelector(".js-progressive-load-games")) {
																var i = new Event("progressiveLoadListGame");
																document.dispatchEvent(i)
															}
														})
													},
													dashboardTooltip: function() {
														for (var e = document.querySelectorAll(".dashboard-info__icon"), t = 0; t < e.length; t++) e[t].addEventListener("mouseover", function() {
															var e = this.parentNode.querySelector(".dashboard-info__tooltip");
															this.classList.add("is-active"), e.classList.add("is-active")
														}), e[t].addEventListener("mouseout", function() {
															var e = this.parentNode.querySelector(".dashboard-info__tooltip");
															this.classList.remove("is-active"), e.classList.remove("is-active")
														})
													},
													init: function() {
														this.conf.parentContainer && (null != this.conf.providerSelect && null != this.conf.searchField && (this.conf.providerSelect.addEventListener("change", this.onSelectChange.bind(this)), this.conf.searchField.addEventListener("keyup", this.onSearchChange.bind(this))), this.conf.moreGameBtn && this.conf.gameListBox.querySelectorAll(".game-list__item").length >= 20 ? this.conf.moreGameBtn.addEventListener("click", this.moreGameHandle.bind(this)) : this.removeElement(this.conf.moreGameBtn), this.conf.moreBonusBtn && this.conf.moreBonusBtn.addEventListener("click", this.moreBonusHandle.bind(this)), this.conf.filterBtn && (this.conf.filterStatus && this.conf.filterStatus.addEventListener("change", this.filters.bind(this)), this.conf.filterType && this.conf.filterType.addEventListener("change", this.filters.bind(this)), this.conf.filterGame && this.conf.filterGame.addEventListener("change", this.filters.bind(this)), this.conf.filterBtn.addEventListener("click", this.filterAction.bind(this))), e.conf.wrapp && e.conf.wrapp.classList.contains("make-shadow") && e.tableLastRowCheck(), this.conf.dashboardTooltip && this.dashboardTooltip(), this.getFavoriteIcon(), this.debounce = helpers.debounce(this.ajaxCall.bind(this), this.conf.debounceTime), document.addEventListener("scroll", this.onScrollBottom.bind(this))), document.querySelector(".js-detect-tournament-for-ajax") && this.vendorDependences()
													}
												},
												t = {
													currentPage: 0,
													ajaxIsEmpty: !1,
													incrementPage: function() {
														++this.currentPage
													},
													setProvider: function(e) {
														this.ajaxIsEmpty = !1, this.resetParam(), this.provider = e
													},
													setSearchValue: function(e) {
														this.ajaxIsEmpty = !1, this.searchValue = e
													},
													resetParam: function() {
														this.searchValue = "", this.currentPage = 0
													},
													extendGlobalConfig: function(e) {
														return Object.assign(e, this.globalConfig())
													},
													globalConfig: function() {
														if (document.querySelector(".js-provider-select")) var e = document.querySelector(".js-provider-select").value;
														return this.provider != e && (this.provider = e), this.provider && !this.searchValue ? {
															page: this.currentPage,
															provider: this.provider
														} : this.searchValue ? {
															query: this.searchValue
														} : this.provider || this.searchValue ? void 0 : {
															provider: this.provider,
															page: this.currentPage
														}
													}
												};
											e.init()
										};
										e(), document.addEventListener("lazyloadGlobalEvent", e)
									}();
									var bonusInfo = {
										elem: {
											page1: document.querySelector(".bonus-page-1"),
											page2: document.querySelector(".bonus-page-2"),
											infoIcon: document.querySelector(".bonus-info-icon-box"),
											closeIcon: document.querySelector(".bonus-close-icon-box"),
											bonusItem: document.querySelector(".js-bonus-item")
										},
										showHideInfo: function() {
											var e = this;
											this.elem.infoIcon.addEventListener("click", function() {
												e.elem.infoIcon.classList.remove("active"), e.elem.closeIcon.classList.add("active"), e.elem.page1.classList.add("bonus-is-hide"), e.elem.page2.classList.remove("bonus-is-hide"), e.elem.page1.classList.remove("bonus-is-show"), setTimeout(function() {
													e.elem.page1.style.display = "none", e.elem.page2.style.display = "block"
												}, 300), setTimeout(function() {
													e.elem.page2.classList.add("bonus-is-show")
												}, 400)
											}), this.elem.closeIcon.addEventListener("click", function() {
												e.elem.closeIcon.classList.remove("active"), e.elem.infoIcon.classList.add("active"), e.elem.page1.classList.add("bonus-is-show"), e.elem.page1.classList.remove("bonus-is-hide"), e.elem.page2.classList.add("bonus-is-hide"), e.elem.page2.classList.remove("bonus-is-show"), setTimeout(function() {
													e.elem.page2.style.display = "none", e.elem.page1.style.display = "block"
												}, 300)
											})
										},
										init: function() {
											this.elem.bonusItem && this.showHideInfo()
										}
									};
									bonusInfo.init();
									var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
											return typeof e
										} : function(e) {
											return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
										},
										calendar = {
											elem: {
												calendar: document.querySelector(".calendar"),
												filter: document.querySelector(".js-calendar-filter"),
												eventDot: document.querySelectorAll(".calendar-event__item"),
												dayItem: document.querySelectorAll(".calendar-item"),
												calendarContentWrapp: document.querySelector(".calendar-content"),
												calendarCurrentData: document.querySelector(".calendar-current-date_content"),
												sliderInnerContent: document.querySelector(".calendar-slider-inner-content"),
												sliderItem: document.querySelector(".calendar-content__item")
											},
											filter: function() {
												var e = this;
												this.elem.filter.addEventListener("change", function(t) {
													serviceCalendar.getFilter(t.target.value);
													for (var n = e.elem.filter.options[e.elem.filter.selectedIndex].value, i = 0; i < e.elem.eventDot.length; i++) {
														if (e.elem.eventDot[i].classList.contains("is-active") || e.elem.eventDot[i].classList.add("is-active"), "all" == n) {
															e.elem.eventDot[i].classList.remove("is-active"), e.elem.eventDot[i].classList.add("is-active");
															for (var s = 0; s < e.elem.dayItem.length; s++) e.elem.dayItem[s].classList.contains("is-active") && e.elem.dayItem[s].click()
														}
														if ("tournament" == n && !e.elem.eventDot[i].classList.contains("calendar-event-tournament")) {
															e.elem.eventDot[i].classList.remove("is-active");
															for (var r = 0; r < e.elem.dayItem.length; r++) e.elem.dayItem[r].classList.contains("is-active") && e.elem.dayItem[r].click()
														}
														if ("shares" == n && !e.elem.eventDot[i].classList.contains("calendar-event-shares")) {
															e.elem.eventDot[i].classList.remove("is-active");
															for (var o = 0; o < e.elem.dayItem.length; o++) e.elem.dayItem[o].classList.contains("is-active") && e.elem.dayItem[o].click()
														}
														if ("freespins" == n && !e.elem.eventDot[i].classList.contains("calendar-event-free-spins")) {
															e.elem.eventDot[i].classList.remove("is-active");
															for (var a = 0; a < e.elem.dayItem.length; a++) e.elem.dayItem[a].classList.contains("is-active") && e.elem.dayItem[a].click()
														}
														if ("campaigns" == n && !e.elem.eventDot[i].classList.contains("calendar-event-campaigns")) {
															e.elem.eventDot[i].classList.remove("is-active");
															for (var l = 0; l < e.elem.dayItem.length; l++) e.elem.dayItem[l].classList.contains("is-active") && e.elem.dayItem[l].click()
														}
													}
												})
											},
											removeActiveDaysItem: function() {
												for (var e = 0; e < this.elem.dayItem.length; e++) this.elem.dayItem[e].classList.remove("is-active")
											},
											removeContent: function() {
												for (var e = document.querySelectorAll(".calendar-content__item"), t = 0; t < e.length; t++) e[t].parentNode.removeChild(e[t])
											},
											dateParam: function() {
												for (var e = this, t = this.elem.calendar.dataset.info, n = JSON.parse(t), i = 0; i < this.elem.dayItem.length; i++) ! function(t) {
													e.elem.dayItem[t].addEventListener("click", function() {
														document.querySelector(".calendar-slider-prev"), document.querySelector(".calendar-slider-next");
														e.removeContent(), e.removeActiveDaysItem(), e.elem.dayItem[t].classList.add("is-active");
														var i = e.elem.dayItem[t].dataset.currentDate,
															s = e.elem.dayItem[t].dataset.day;
														e.elem.calendarCurrentData.innerHTML = i, TweenMax.from(".calendar-current-date_content", 1, {
															opacity: 0,
															ease: Elastic.easeOut.config(1, .5),
															y: -50
														});
														var r = {};
														for (var o in n)
															for (var a = 0; a < n[o].length; a++)
																for (var l in n[o][a].data)
																	for (var c in n[o][a].data[l]) {
																		var d = parseInt(n[o][a].data[l][c].start) <= parseInt(s) && parseInt(s) <= parseInt(n[o][a].data[l][c].end);
																		d && (void 0 === r[l] && (r[l] = []), r[l].push(n[o][a].data[l][c]))
																	}
														serviceCalendar.getParam(r), e.showContent()
													})
												}(i)
											},
											hoverHandle: function() {
												for (var e = document.querySelectorAll(".calendar-content__link"), t = document.querySelectorAll(".calendar-item"), n = function(e, n) {
														for (var i = 0; i < t.length; i++) {
															var s = t[i].dataset.day;
															e <= Number(s) && n >= Number(s) && t[i].classList.add("is-selected")
														}
													}, i = function() {
														for (var e = 0; e < t.length; e++) t[e].classList.contains("is-selected") && t[e].classList.remove("is-selected")
													}, s = 0; s < e.length; s++) ! function(t) {
													e[t].addEventListener("mouseover", function() {
														n(Number(e[t].dataset.start), Number(e[t].dataset.end))
													}), e[t].addEventListener("mouseout", function() {
														i()
													})
												}(s)
											},
											createSlider: function(e) {
												var t = document.querySelector(".calendar-slider-prev"),
													n = document.querySelector(".calendar-slider-next"),
													i = (document.querySelector(".calendar-slider"), document.querySelector(".calendar-slider-inner")),
													s = document.querySelector(".calendar-slider-inner-content"),
													r = document.querySelector(".calendar-content__item"),
													o = document.querySelectorAll(".calendar-content__item");
												if (0 == e) return t.style.display = "none", n.style.display = "none", !1;
												var a = 0,
													l = window.getComputedStyle(r).getPropertyValue("margin-bottom"),
													c = 3 * r.offsetHeight + 2 * parseInt(l);
												s.style.top = "0px";
												! function() {
													var e = 3 * r.offsetHeight + 60;
													i.style.height = e + "px", parseInt(i.style.height)
												}();
												! function() {
													var i = document.querySelector(".calendar-content"),
														s = document.querySelector(".calendar-content").dataset.countItems;
													e <= 3 ? (t.style.display = "none", n.style.display = "none") : (t.style.display = "block", n.style.display = "block"), s <= 3 && (t.style.display = "none", n.style.display = "none", i.removeAttribute("data-count-items"))
												}();
												var d = function() {
													for (var e = "", t = 0; t < o.length; t++) e = (o[t].offsetHeight + parseInt(l)) * o.length - parseInt(l);
													return {
														height: e,
														items: o.length
													}
												};
												! function() {
													var e = r.offsetHeight + parseInt(l);
													n.addEventListener("click", function() {
														a += e, a <= d().height && !(Math.abs(a) > d().height - c) ? s.style.top = -a + "px" : (s.style.top = "0px", a = 0)
													})
												}(),
												function() {
													t.addEventListener("click", function() {
														0 == a ? (a = d().height - c, s.style.top = -a + "px") : (a -= r.offsetHeight + parseInt(l), s.style.top = -a + "px")
													})
												}()
											},
											createContent: function(e, t, n, i) {
												var s = document.createElement("div"),
													r = document.createElement("a"),
													o = document.createElement("img");
												s.setAttribute("class", "calendar-content__item"), r.setAttribute("class", "calendar-content__link"), r.setAttribute("href", e), r.setAttribute("data-start", n), r.setAttribute("data-end", i), o.setAttribute("class", "calendar-content__event"), o.setAttribute("src", t), s.appendChild(r), r.appendChild(o), this.elem.sliderInnerContent.appendChild(s)
											},
											showContent: function() {
												var e = this,
													t = serviceCalendar.config(),
													n = [];
												if ("tournament" == t.name && t.tournament && t.tournament.forEach(function(t, i) {
														n.push(i), e.createContent(t.href, t.image, t.start, t.end)
													}), "shares" == t.name && t.shares && t.shares.forEach(function(t, i) {
														n.push(i), e.createContent(t.href, t.image, t.start, t.end)
													}), "freespins" == t.name && t.freespins && t.freespins.forEach(function(t, i) {
														n.push(i), e.createContent(t.href, t.image, t.start, t.end)
													}), "campaigns" == t.name && t.campaigns && t.campaigns.forEach(function(t, i) {
														n.push(i), e.createContent(t.href, t.image, t.start, t.end)
													}), "all" == t.name)
													for (var i in t) "object" == _typeof(t[i]) && t[i].forEach(function(t, i) {
														n.push(i), e.createContent(t.href, t.image, t.start, t.end)
													});
												n = n.length, TweenMax.staggerFrom(".calendar-content__item", 1, {
													opacity: 0,
													ease: Elastic.easeOut.config(1, .5),
													y: 50
												}, .1), this.hoverHandle(), 1 == serviceCalendar.firstLoadDetect ? (serviceCalendar.firstLoadDetect = !1, setTimeout(function() {
													e.createSlider(n)
												}, 100)) : this.createSlider(n)
											},
											init: function() {
												var e = this;
												this.elem.calendarContentWrapp && (TweenMax.from(".calendar-grid", 1, {
													opacity: 0
												}), this.filter(), this.dateParam(), this.hoverHandle(), this.createSlider(), window.onresize = function() {
													e.createSlider()
												})
											}
										},
										serviceCalendar = {
											getParam: function(e) {
												this.param = e
											},
											getFilter: function(e) {
												this.filter = {
													name: e
												}
											},
											firstLoadDetect: !0,
											config: function() {
												return void 0 === this.filter && (this.filter = {
													name: "all"
												}), Object.assign(this.param, this.filter)
											}
										};
									calendar.init();
									var cashBackBtn = document.querySelector(".js-btn-cash-back"),
										cashBox = document.querySelector(".game-cash-box"),
										cashBtn = document.querySelector(".btn-cash-js"),
										cashFrame = document.querySelector(".js-cash-iframe, .game-cash-iframe"),
										columWrapCash = document.querySelector(".colum-wrap-cash"),
										gameBoxWrapp = document.querySelector(".game-box-wrapp"),
										headerNode = document.querySelector(".header"),
										preloaderNode = document.querySelector(".js-cash-preloader"),
										scrollToNode = document.querySelector(".cash-page-padding"),
										onCashBtnClick = function() {
											cashBtn.classList.add("hide"), cashBackBtn.classList.remove("hide"), cashBox.classList.add("game-cash-box-is-active"), updateYScroll()
										},
										onBackBtnClick = function(e) {
											e.preventDefault(), "gateways" === cashFrame.getAttribute("data-cashier-state") ? (cashBtn.classList.remove("hide"), cashBackBtn.classList.add("hide"), cashBox.classList.remove("game-cash-box-is-active"), gameBoxWrapp.style["overflow-y"] = "") : cashFrame.dispatchEvent(new Event("cash.gatewaysShow")), "gateways" !== cashFrame.getAttribute("data-cashier-state") && cashFrame.dispatchEvent(new Event("cash.gatewaysShow"))
										},
										updateYScroll = function() {
											gameBoxWrapp && gameBoxWrapp.querySelector(".game-cash-box-is-active") && cashFrame.parentNode && cashBox.scrollHeight > cashBox.parentNode.parentNode.parentNode.parentNode.offsetHeight && (cashBox.style["overflow-y"] = "scroll")
										},
										onIFrameStateChanged = function(e) {
											var t = e.detail;
											if (scrollToNode && headerNode && (document.body.scrollTop = scrollToNode.offsetTop - headerNode.scrollHeight), cashBackBtn) switch (t) {
												case "gateways":
													helpers.hasClass(cashBackBtn, "js-in-game") && (cashBackBtn.style.visibility = "visible");
													break;
												case "payment":
													cashBackBtn.style.visibility = "visible";
													break;
												default:
													cashBackBtn.style.visibility = "hidden"
											}
											updateYScroll()
										},
										onIFrameStatusChanged = function(e) {
											var t = e.detail;
											preloaderNode && (preloaderNode.style.visibility = "loading" === t ? "visible" : "hidden"), updateYScroll()
										};
									cashFrame && (cashFrame.addEventListener("cash.stateChange", onIFrameStateChanged), cashFrame.addEventListener("cash.statusChange", onIFrameStatusChanged)), cashBtn && cashBtn.addEventListener("click", onCashBtnClick), cashBackBtn && cashBackBtn.addEventListener("click", onBackBtnClick);
									var certificate = {
										elem: {
											imageSmall: document.querySelector(".certificate-small"),
											imageBig: document.querySelector(".certificate-big")
										},
										handleHover: function() {
											var e = this.elem.imageSmall,
												t = this.elem.imageBig;
											e.addEventListener("mouseover", function() {
												t.classList.add("is-active")
											}), t.addEventListener("mouseout", function() {
												this.classList.remove("is-active")
											})
										},
										init: function() {
											null != this.elem.imageSmall && this.handleHover()
										}
									};
									certificate.init();
									var changeBonus = {
										elem: {
											inpt: document.querySelector(".js-inpt-change-bonus"),
											priceBox: document.querySelector(".js-change-points-price"),
											btnSubmit: document.querySelector(".js-btn-change-bonus"),
											confirmBox: document.querySelector(".change-points-confirm-box"),
											confirmPartMessage: document.querySelector(".exchange-part"),
											confirmAllMessage: document.querySelector(".exchange-all"),
											btnConfirmOk: document.querySelector(".js-btn-change-points-ok"),
											btnConfirmCancel: document.querySelector(".js-btn-change-points-cancel"),
											completeBox: document.querySelector(".change-points-complete-box"),
											errorBox: document.querySelector(".change-points-error-box")
										},
										defaultVal: function() {
											var e = this.elem.inpt.dataset.points,
												t = this.elem.inpt.dataset.rate,
												n = this.elem.inpt.dataset.ratio,
												i = this.elem.priceBox.dataset.currency,
												s = this.elem.inpt,
												r = this.elem.priceBox,
												o = void 0;
											return 0 == n && (s.disabled = !0), o = "" != s.value && 0 != n ? (s.value / (s.value == e ? n : 1e3) * t).toFixed(2) + " " + i : "0.00 " + i, r.innerHTML = o
										},
										bounceEffect: function() {
											this.elem.priceBox.classList.add("change-points__effect"), setTimeout(function() {
												changeBonus.elem.priceBox.classList.remove("change-points__effect")
											}, 100)
										},
										activeSubmit: function() {
											var e = this.elem.inpt,
												t = this.elem.btnSubmit,
												n = Number(this.elem.inpt.dataset.points);
											Number(e.value) > n && (e.value = n), "" != e.value && e.value > 999 ? t.classList.remove("disabled") : t.classList.add("disabled")
										},
										actionSubmit: function() {
											var e = this.elem.confirmBox,
												t = this.elem.btnSubmit,
												n = this.elem.confirmAllMessage,
												i = this.elem.confirmPartMessage,
												s = this.elem.inpt,
												r = n.dataset.mockup,
												o = i.dataset.mockup,
												a = s.dataset.points,
												l = s.dataset.rate,
												c = s.dataset.ratio;
											t.addEventListener("click", function(t) {
												t.preventDefault();
												var d = (s.value / (s.value == a ? c : 1e3) * l).toFixed(2);
												s.value == a ? (i.style.display = "none", n.style.display = "block") : (n.style.display = "none", i.style.display = "block"), n.innerHTML = r.replace(/%amount%/g, d).replace(/%points%/g, s.value), i.innerHTML = o.replace(/%amount%/g, d).replace(/%points%/g, s.value), e.classList.add("is-active")
											})
										},
										confirmBox: function() {
											var e = this.elem.btnConfirmCancel,
												t = this.elem.btnConfirmOk,
												n = this.elem.completeBox,
												i = this.elem.confirmBox,
												s = this.elem.errorBox,
												r = this.elem.inpt;
											e.addEventListener("click", function() {
												i.classList.remove("is-active")
											}), t.addEventListener("click", function() {
												$.get("/points/" + r.value, {}, function(e) {
													"ok" == e.result ? (i.classList.remove("is-active"), n.classList.add("is-active"), setTimeout(function() {
														n.classList.remove("is-active")
													}, 3e3), document.location.reload(!0)) : (i.classList.remove("is-active"), s.classList.add("is-active"), setTimeout(function() {
														s.classList.remove("is-active")
													}, 3e3))
												})
											})
										},
										onChange: function() {
											var e = this.elem.inpt.dataset.points,
												t = this.elem.inpt.dataset.ratio,
												n = this.elem.priceBox.dataset.currency,
												i = this.elem.inpt,
												s = this.elem.priceBox,
												r = this.elem.inpt.dataset.rate;
											i.addEventListener("input", function() {
												if (changeBonus.activeSubmit(), "" != this.value) {
													changeBonus.bounceEffect();
													var i = (this.value / (this.value == e ? t : 1e3) * r).toFixed(2);
													return s.innerHTML = i + " " + n
												}
											})
										},
										init: function() {
											this.elem.inpt && (this.defaultVal(), this.activeSubmit(), this.onChange(), this.actionSubmit(), this.confirmBox())
										}
									};
									changeBonus.init(),
										function() {
											var e = document.querySelector(".js-btn-show-change-form"),
												t = document.querySelector(".js-btn-show-delete-form"),
												n = document.querySelectorAll(".btn-change-cancel"),
												i = document.querySelector(".js-change-data"),
												s = document.querySelector(".js-detele-data");
											if (e || t) {
												! function() {
													var r = function(e, t) {
														if (!app.user) return !1;
														e.addEventListener("click", function() {
															e.parentNode.appendChild(t), t.classList.toggle("is-hidden")
														})
													};
													r(e, i), r(t, s);
													! function() {
														for (var e = 0; e < n.length; e++) ! function(e) {
															var t = n[e];
															t.addEventListener("click", function() {
																helpers.getParent(t, ".change-data-block").classList.toggle("is-hidden")
															})
														}(e)
													}()
												}()
											}
										}();
									var demoGame = {
										elem: {
											game16x9: document.querySelector(".js-demo-game-16x9"),
											game4x3: document.querySelector(".js-demo-game-4x3"),
											gameSize: document.querySelector(".demo-game-box"),
											gameSizeWrapp: document.querySelector(".js-demo-game-wrapp"),
											nav: document.querySelector(".nav-general"),
											header: document.querySelector(".header"),
											gridLeftBlock: document.querySelector(".demo-grid__left"),
											gridRightBlock: document.querySelector(".demo-grid__right"),
											gridWrapp: document.querySelector(".demo-grid"),
											demoSidebarContent: document.querySelector(".demo-sidebar-content")
										},
										coefficientGame16x9: 1.775,
										coefficientGame4x3: 1.333,
										gridWidth: function() {
											return {
												width: this.elem.gridLeftBlock.offsetWidth + this.elem.gridRightBlock.offsetWidth
											}
										},
										setGridPosition: function() {
											this.elem.gridWrapp.style.width = this.gridWidth().width + "px", this.elem.gridWrapp.style.margin = "0 auto"
										},
										setRightBlockHeight: function() {
											var e = this;
											window.onload = function() {
												e.elem.demoSidebarContent.style.display = "block", e.elem.gridRightBlock.style.height = e.elem.gridLeftBlock.offsetHeight + "px"
											}, this.elem.gridRightBlock.style.height = this.elem.gridLeftBlock.offsetHeight + "px"
										},
										getWindowSize: function() {
											return {
												width: document.documentElement.clientWidth,
												height: document.documentElement.clientHeight
											}
										},
										getGameSize: function() {
											return {
												width: this.elem.gameSize.offsetWidth,
												height: this.elem.gameSize.offsetHeight
											}
										},
										getElementByClientHeight: function() {
											return {
												heightWithElements: this.elem.nav.offsetHeight + this.elem.header.offsetHeight + this.elem.gameSizeWrapp.offsetHeight,
												heightWithOutElements: this.elem.nav.offsetHeight + this.elem.header.offsetHeight + 40
											}
										},
										sizeHandle: function() {
											var e = (this.getWindowSize().width - this.elem.gridRightBlock.offsetWidth) / this.coefficientGame4x3,
												t = (this.getWindowSize().width - this.elem.gridRightBlock.offsetWidth) / this.coefficientGame16x9;
											this.elem.game4x3 && (this.elem.gameSize.style.width = "1024px", this.elem.gameSize.style.height = "768px", this.elem.gridLeftBlock.style.width = "1024px", this.elem.gridWrapp.style.width = this.elem.gridLeftBlock.offsetWidth + this.elem.gridRightBlock.offsetWidth + "px", this.getWindowSize().width <= this.gridWidth().width && (this.elem.gridLeftBlock.style.width = this.getWindowSize().width - this.elem.gridRightBlock.offsetWidth + "px", this.elem.gameSize.style.width = "100%", this.elem.gameSize.style.height = e + "px"), this.getWindowSize().height <= this.getElementByClientHeight().heightWithElements && (this.elem.gameSize.style.width = parseInt((this.getWindowSize().height - this.getElementByClientHeight().heightWithOutElements) * this.coefficientGame4x3) + "px", this.elem.gameSize.style.height = this.getWindowSize().height - this.getElementByClientHeight().heightWithOutElements + "px", this.elem.gridLeftBlock.style.width = parseInt((this.getWindowSize().height - this.getElementByClientHeight().heightWithOutElements) * this.coefficientGame4x3) + "px")), this.elem.game16x9 && (this.elem.gameSize.style.width = "1024px", this.elem.gameSize.style.height = "576px", this.elem.gridLeftBlock.style.width = "1024px", this.elem.gridWrapp.style.width = this.elem.gridLeftBlock.offsetWidth + this.elem.gridRightBlock.offsetWidth + "px", this.getWindowSize().width <= this.gridWidth().width && (this.elem.gridLeftBlock.style.width = this.getWindowSize().width - this.elem.gridRightBlock.offsetWidth + "px", this.elem.gameSize.style.width = "100%", this.elem.gameSize.style.height = t + "px"), this.getWindowSize().height <= this.getElementByClientHeight().heightWithElements && (this.elem.gameSize.style.width = parseInt((this.getWindowSize().height - this.getElementByClientHeight().heightWithOutElements) * this.coefficientGame16x9) + "px", this.elem.gameSize.style.height = this.getWindowSize().height - this.getElementByClientHeight().heightWithOutElements + "px", this.elem.gridLeftBlock.style.width = parseInt(parseInt((this.getWindowSize().height - this.getElementByClientHeight().heightWithOutElements) * this.coefficientGame16x9)) + "px"))
										},
										demoTabs: function() {
											var e = document.querySelector(".tab-container");
											tabs(e)
										},
										windowResize: function() {
											var e = this;
											window.onresize = function() {
												e.init()
											}
										},
										init: function() {
											(this.elem.game16x9 || this.elem.game4x3) && (this.sizeHandle(), this.setGridPosition(), this.demoTabs(), this.setRightBlockHeight(), this.windowResize())
										}
									};
									demoGame.init();
									var name = "clientFingerprint";
									void 0 === Cookies.get(name) && (new Fingerprint2).get(function(e) {
										return Cookies.set(name, e)
									});
									var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
									if (isMobile) {
										var touchDevice = {
											elem: {
												navCategoryLinks: document.querySelectorAll(".nav-category__link")
											},
											removeBackground: function() {
												for (var e = 0; e < this.elem.navCategoryLinks.length; e++) this.elem.navCategoryLinks[e].getAttribute("style") && this.elem.navCategoryLinks[e].removeAttribute("style")
											},
											touchHandle: function() {
												for (var e = 0; e < this.elem.navCategoryLinks.length; e++) this.elem.navCategoryLinks[e].addEventListener("touchstart", function() {
													touchDevice.removeBackground(), this.style.backgroundColor = "#fdc061"
												})
											},
											init: function() {
												this.elem.navCategoryLink && this.touchHandle()
											}
										};
										touchDevice.init()
									}
									var removeAutoComplete = function() {
											for (var e = document.querySelectorAll(".js-no-auto-complete"), t = 0; t < e.length; t++) {
												var n = e[t];
												n && (n.value = " ")
											}
										},
										updateElement = function(e, t) {
											var n = document.querySelector(".registration-box"),
												i = function() {
													var t = e.value,
														n = e.value.trim().replace(/\s{2,}/g, "");
													t !== n && (e.value = n)
												},
												s = function() {
													t && !n && (helpers.screenSize().screenX <= 768 && " " !== e.value && ("" !== e.value || document.activeElement === e) ? t.style.display = "none" : t.style.display = "block")
												};
											e.focusListener || (e.focusListener = function() {
												e.parentNode.classList.add("active"), i(), s()
											}, e.addEventListener("focus", e.focusListener)), e.changeListener || (e.changeListener = function() {
												s()
											}, e.addEventListener("change", e.changeListener)), e.blurListener || (e.blurListener = function() {
												e.parentNode.classList.remove("active"), i(), s()
											}, e.addEventListener("blur", e.blurListener)), s()
										},
										updateElements = function(e, t) {
											for (var n = 0; n < e.length; n++) {
												var i = e[n],
													s = i.parentNode.querySelector(".label");
												updateElement(i, t ? s : void 0)
											}
										},
										updateAll = function() {
											updateElements(document.querySelectorAll(".inpt-js"), !0), updateElements(document.querySelectorAll(".select-js"), !1), updateElements(document.querySelectorAll(".textarea-js"), !0)
										};
									updateAll(), removeAutoComplete(), window.addEventListener("resize", updateAll), document.addEventListener("form.effect.refresh", function() {
										updateAll(), removeAutoComplete()
									});
									var gameBox = {
										elem: {
											gameItems: document.querySelectorAll(".game-item")
										},
										init: function() {
											for (var e = 0; e < this.elem.gameItems.length; e++) gameBox.elem.gameItems[e].onmouseover = function() {
												this.classList.add("is-active")
											}, gameBox.elem.gameItems[e].onmouseout = function() {
												this.classList.remove("is-active")
											}
										}
									};
									gameBox.init(),
										function() {
											var e = function() {
												var e = document.querySelectorAll(".game-item-default");
												if (e)
													for (var t = 0; t < e.length; t++) ! function(t) {
														e[t].addEventListener("mouseover", function() {
															e[t].classList.add("is-active")
														}), e[t].addEventListener("mouseout", function() {
															e[t].classList.remove("is-active")
														})
													}(t)
											};
											e(), document.addEventListener("gameItemBehavior", e)
										}();
									var tournamentGameBox = {
										elem: {
											item: document.querySelectorAll(".tour-game-active-item")
										},
										init: function() {
											for (var e = 0; e < this.elem.item.length; e++) this.elem.item[e].addEventListener("mouseover", function() {
												this.classList.add("active")
											}), this.elem.item[e].addEventListener("mouseout", function() {
												this.classList.remove("active")
											})
										}
									};
									tournamentGameBox.init();
									var seoTextToggle = {
										elem: {
											toggleTextWrapp: document.querySelector(".content-toggle"),
											btn: document.querySelector(".content-toggle-btn"),
											contentFadeOut: document.querySelector(".content-fade-out")
										},
										checkToggle: function() {
											this.elem.toggleTextWrapp.style.height = "100%", this.elem.btn.parentNode.removeChild(this.elem.btn), this.elem.contentFadeOut.parentNode.removeChild(this.elem.contentFadeOut)
										},
										btnHandle: function() {
											var e = this;
											this.elem.btn.addEventListener("click", function() {
												e.checkToggle()
											})
										},
										init: function() {
											this.elem.toggleTextWrapp && this.btnHandle()
										}
									};
									seoTextToggle.init();
									var targets = void 0,
										getChar = function(e) {
											var t = void 0;
											return window.event ? t = e.keyCode : e.which && (t = e.which), String.fromCharCode(t)
										},
										onTargetKeyPress = function(e) {
											"paste" == e.type && setTimeout(function() {
												e.target.value = e.target.value.replace(/\D/g, function(e, t, n) {
													return "+" == e && 0 == t ? e : ""
												})
											}, 1);
											var t = new RegExp(e.target.getAttribute("data-pattern")),
												n = getChar(e),
												i = e.target.selectionStart,
												s = e.target.value,
												r = "number" == typeof e.which ? e.which : e.keyCode,
												o = [s.slice(0, i), n, s.slice(i)].join("");
											!e.ctrlKey && !e.altKey && r > 31 && n && !t.test(o) && e.preventDefault()
										},
										refresh = function() {
											targets = document.querySelectorAll("[data-pattern]");
											for (var e = 0; e < targets.length; e++) targets[e].addEventListener("keypress", onTargetKeyPress);
											for (var t = 0; t < targets.length; t++) targets[t].addEventListener("paste", onTargetKeyPress)
										};
									refresh(), document.addEventListener("form.refresh", refresh),
										function() {
											var e = {
												elem: {
													langBoxItem: document.querySelector(".lang-box"),
													langList: document.querySelector(".lang-list"),
													body: document.body
												},
												initListeners: function() {
													this.elem.langBoxItem.addEventListener("click", this.toggle), this.elem.body.addEventListener("click", this.delegate)
												},
												toggle: function() {
													e.elem.langBoxItem.classList.toggle("is-active")
												},
												delegate: function(t) {
													e.elem.langBoxItem.classList.contains("is-active") && !helpers.getParent(t.target, ".lang-box") && e.toggle()
												},
												init: function() {
													this.elem.langBoxItem && this.initListeners()
												}
											};
											e.init()
										}();
									var lastGameView = {
										elem: {
											bottomBox: document.querySelector(".bottom-box"),
											bottomBoxTitle: document.querySelector(".game-last-view__title"),
											gameList: document.querySelector(".game-last-list")
										},
										getGameListHeight: function() {
											return this.elem.gameList.offsetHeight
										},
										defaultBottomBoxPosition: function() {
											this.elem.bottomBoxTitle.classList.contains("active") || (this.elem.bottomBox.style.bottom = -this.getGameListHeight() - 2 + "px")
										},
										showHide: function() {
											var e = this.elem.bottomBoxTitle,
												t = this.elem.bottomBox;
											e.addEventListener("click", function() {
												this.classList.contains("active") ? (this.classList.remove("active"), t.style.bottom = -(lastGameView.getGameListHeight() + 2) + "px") : (this.classList.add("active"), t.style.bottom = 0)
											})
										},
										init: function() {
											null != this.elem.bottomBox && (this.defaultBottomBoxPosition(), this.showHide(), window.addEventListener("resize", function() {
												lastGameView.defaultBottomBoxPosition()
											}))
										}
									};
									lastGameView.init(),
										function() {
											var e = function() {
												var e = document.querySelectorAll(".js-lazy-img");
												if (!e) return !1;
												var t = function(e) {
														for (var t = e.offsetTop, n = e.offsetLeft, i = e.offsetWidth, s = e.offsetHeight; e.offsetParent;) e = e.offsetParent, t += e.offsetTop, n += e.offsetLeft;
														return t < window.pageYOffset + window.innerHeight && n < window.pageXOffset + window.innerWidth && t + s > window.pageYOffset && n + i > window.pageXOffset
													},
													n = function() {
														for (var n = 0; n < e.length; n++)
															if (t(e[n]) && void 0 == e[n].dataset.lazyImg) {
																var i = e[n];
																i.dataset.lazyImg = !0, i.setAttribute("src", i.dataset.src), i.removeAttribute("data-src"), i.classList.contains("lazy-blur") && i.classList.add("no-lazy-blur")
															}
													};
												n(), window.addEventListener("scroll", n)
											};
											window.addEventListener("load", e), document.addEventListener("lazyloadImagesContent", e)
										}(),
										function() {
											for (var e = document.querySelectorAll("[data-message-new]"), t = function(e, t) {
													var n = document.querySelectorAll(e);
													if (n.length > 0)
														for (var i = 0; i < n.length; i++) n[i].innerText = t
												}, n = function(e) {
													var n = e.target,
														i = n.response;
													200 === n.status && (i = JSON.parse(i), "ok" === i.result && (t(".js-incoming-adv", i.message.adverts), t(".js-incoming-msg", i.message.answers), t(".nav-sub-dashboard__count.new-messages", i.message.answers), t(".nav-sub-dashboard__count.new-adverts", i.message.adverts)))
												}, i = function(e) {
													var t = e.target.parentNode.parentNode.querySelector(".tbl-number.new"),
														i = e.target.getAttribute("data-message-new"),
														s = new XMLHttpRequest;
													e.preventDefault(), t.className = t.className.replace("new", "readed"), s.onload = n, s.open("GET", i, !0), s.send()
												}, s = 0; s < e.length; s++) e[s].addEventListener("click", i, !1)
										}(),
										function() {
											for (var e = document.querySelectorAll(".js-message"), t = 0; t < e.length; t++) {
												(function(t) {
													var n = e[t],
														i = n.querySelector(".js-delete-container");
													if (!i) return "continue";
													var s = i.getAttribute("data-delete-url"),
														r = i.querySelector(".js-delete-icon"),
														o = i.querySelector(".js-delete-preloader"),
														a = function(e, t) {
															var n = document.querySelectorAll(e);
															if (n.length > 0)
																for (var i = 0; i < n.length; i++) n[i].innerText = t
														},
														l = function(e) {
															var t = e.target,
																n = t.response;
															200 === t.status && (n = JSON.parse(n), "ok" === n.result && (a(".js-incoming-adv", n.message.adverts), a(".js-incoming-msg", n.message.answers), a(".nav-sub-dashboard__count.new-messages", n.message.answers), a(".nav-sub-dashboard__count.new-adverts", n.message.adverts)))
														},
														c = function(e) {
															var t = e.target,
																i = t.response;
															if (200 === t.status && (i = JSON.parse(i), "ok" === i.result)) {
																var s = n.parentNode,
																	r = new XMLHttpRequest;
																r.onload = l;
																do {
																	var o = n;
																	if (n = n.nextElementSibling, o) {
																		var a = o.querySelector("a[data-message-new]");
																		if (a) {
																			var c = a.getAttribute("data-message-new");
																			c && (r.open("GET", c, !0), r.send())
																		}
																	}
																	s.removeChild(o)
																} while (n && !n.querySelector(".js-delete-icon"))
															}
														},
														d = function(e) {
															var t = new XMLHttpRequest;
															e.preventDefault(), r.style.display = "none", o.style.display = "block", t.onload = c, t.open("GET", s, !0), t.send()
														};
													r.addEventListener("click", d, !1)
												})(t)
											}
										}(),
										function() {
											var e = {
												elem: {
													menuIcon: document.querySelector(".nav-mobile-icon"),
													menuBox: document.querySelector(".mobile-sidebar"),
													notification: document.querySelector(".notification-box"),
													body: document.body
												},
												init: function() {
													this.elem.menuIcon && (this.elem.menuIcon.addEventListener("click", function() {
														e.elem.body.classList.toggle("scroll-hide"), this.classList.toggle("close"), e.elem.menuBox.classList.toggle("active"), e.elem.notification && e.elem.notification.classList.toggle("active")
													}), window.addEventListener("resize", function() {
														helpers.screenSize().screenX > 768 && (e.elem.menuIcon.classList.remove("close"), e.elem.body.classList.remove("scroll-hide"), e.elem.menuBox.classList.remove("active"))
													}))
												}
											};
											e.init()
										}();
									var navCat = {
											elem: {
												navCategory: document.querySelector(".nav-category"),
												openBtn: document.querySelector(".nav-category-arrow"),
												navCategoryWrapp: document.querySelector(".nav-category__wrapp"),
												navCategoryScrollBox: document.querySelector(".nav-category__scroll"),
												navCategoryList: document.querySelector(".nav-category-list")
											},
											getWindowSize: function() {
												return {
													width: window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth,
													height: window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight
												}
											},
											getNavHeight: function() {
												return this.elem.navCategoryScrollBox.offsetHeight
											},
											getNavWidth: function() {
												if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
													var e = document.querySelector(".nav-category-list__item").offsetWidth,
														t = this.elem.navCategoryList;
													t.style.width = t.childElementCount * e + "px"
												}
											},
											handleToggle: function() {
												var e = this.elem.navCategory,
													t = this.elem.openBtn;
												this.elem.openBtn.addEventListener("click", function() {
													e.classList.contains("is-active") ? (e.classList.remove("is-active"), t.classList.remove("is-active"), navCat.elem.navCategoryWrapp.style.height = "81px") : (e.classList.add("is-active"), t.classList.add("is-active"), navCat.elem.navCategoryWrapp.style.height = navCat.getNavHeight() + "px")
												})
											},
											screenDependence: function() {
												var e = this.getWindowSize().width,
													t = this.elem.navCategory,
													n = this.elem.openBtn,
													i = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
												i || (e <= 768 ? (t.classList.add("nav-category-desktop-only"), n.classList.add("is-show")) : (t.classList.remove("nav-category-desktop-only"), n.classList.remove("is-show"))), window.addEventListener("resize", function() {
													var e = navCat.getWindowSize().width;
													t.classList.contains("is-active") && (navCat.elem.navCategoryWrapp.style.height = navCat.getNavHeight() + "px"), i || (e <= 768 ? (t.classList.add("nav-category-desktop-only"), n.classList.add("is-show")) : (t.classList.remove("nav-category-desktop-only"), n.classList.remove("is-show")))
												})
											},
											init: function() {
												null != this.elem.navCategory && (this.handleToggle(), this.screenDependence(), this.getNavWidth())
											}
										},
										tourSliderInitial = function() {
											$(".tour-game-slider").owlCarousel({
												dots: !1,
												loop: !1,
												margin: 10,
												nav: !0,
												autoplay: !1,
												responsive: {
													0: {
														items: 1
													},
													320: {
														items: 2
													},
													470: {
														items: 3
													},
													600: {
														items: 4
													},
													768: {
														items: 5
													},
													980: {
														items: 6
													},
													1140: {
														items: 7
													},
													1280: {
														items: 8
													}
												}
											}), $(".tour-game-ended-slider").owlCarousel({
												dots: !1,
												items: 4,
												loop: !1,
												margin: 10,
												nav: !0,
												autoplay: !1,
												responsive: {
													0: {
														items: 1
													},
													320: {
														items: 2
													},
													400: {
														items: 3
													},
													550: {
														items: 4
													},
													650: {
														items: 5
													},
													750: {
														items: 6
													},
													850: {
														items: 7
													},
													1e3: {
														items: 4
													},
													1280: {
														items: 4
													}
												}
											})
										};
									tourSliderInitial(), document.addEventListener("tourSliderInitial", tourSliderInitial),
										function() {
											var e = function() {
												var e = {
														wrapper: function() {
															return '<div class="popup-wrapp">\n                    <div class="popup-box">\n                        ' + (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "") + "\n                    </div>\n                </div>"
														},
														header: function() {
															return '<header class="popup-header">\n                    ' + (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "") + "\n                </header>"
														},
														title: function() {
															return '<h1 class="title center">\n                    ' + (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "") + "\n                </h1>"
														},
														close: function() {
															return '<span class="close-icon js-popup"></span>'
														},
														middle: function() {
															return '<div class="popup-main">\n                    ' + (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "") + "\n                </div>"
														},
														footer: function() {
															return '<footer class="popup-footer">\n                    <div class="btn-box-center">\n                        ' + (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "") + "\n                    </div>\n                </footer>"
														},
														message: function() {
															return "<p>" + (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "") + "</p>"
														},
														messageWrapper: function() {
															return '<div class="popup-main-messages">\n                    ' + (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "") + "\n                </div>"
														}
													},
													t = function(t, n) {
														var i = e.title(t),
															s = e.message(n),
															r = e.messageWrapper(i + s),
															o = e.middle(r),
															a = e.close(),
															l = e.wrapper(a + o),
															c = document.createElement("div");
														return c.innerHTML = l, c.firstChild
													},
													n = function(e) {
														var t = document.createElement("div");
														return t.innerHTML = e, t.firstChild
													},
													i = function(e) {
														var i = void 0,
															s = function(t) {
																document.querySelector(".container").classList.add("popup-effect");
																for (var n = document.querySelectorAll(".popup-wrapp"), i = 0; i < n.length; i++) n[i].parentNode.removeChild(n[i]);
																document.body.appendChild(t), helpers.dispatchEvent(document, "form.refresh"), helpers.dispatchEvent(document, "form.effect.refresh"), r(t), e.callback && e.callback(t)
															},
															o = function(e) {
																var t = e.querySelector(".close-icon.js-popup"),
																	n = e.querySelector(".popup-box"),
																	i = function() {
																		document.querySelector(".container").classList.remove("popup-effect"), e.parentNode.removeChild(e)
																	};
																n.addEventListener("click", function(e) {
																	e.stopPropagation()
																}), e.addEventListener("click", i), t.addEventListener("click", i)
															};
														switch (e.type) {
															case "message":
																var a = t(e.title, e.message);
																s(a), o(a);
																break;
															case "message-mobile":
																var l = t(e.title, e.message);
																helpers.addClass(l, "for-mobile"), s(l), o(l);
																break;
															case "xhr":
																i = new XMLHttpRequest, i.open("GET", e.url), i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.onload = function(e) {
																	var t = e.target,
																		i = t.response,
																		r = t.status,
																		a = n(i),
																		l = a.querySelectorAll("script"),
																		c = 0;
																	if (200 == r)
																		for (s(a), o(a), c; c < l.length; c++) eval.apply(void 0, [l[c].innerText]), l[c].parentNode.removeChild(l[c])
																}, i.send()
														}
													},
													s = function(e) {
														var t = {
															type: e.target.getAttribute("data-popup"),
															title: e.target.getAttribute("data-popup-title"),
															message: e.target.getAttribute("data-popup-message"),
															url: e.target.getAttribute("data-popup-url"),
															callback: function(t) {
																helpers.removeClass(e.target, "disabled"), helpers.removeClass(e.target, "btn-preloader")
															}
														};
														e.preventDefault(), helpers.addClass(e.target, "disabled"), helpers.hasClass(e.target, "btn") && helpers.addClass(e.target, "btn-preloader"), i(t)
													},
													r = function() {
														for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document, t = e.querySelectorAll("[data-popup]"), n = 0; n < t.length; n++) t[n].onPopUpBtnClick || (t[n].onPopUpBtnClick = s, t[n].addEventListener("click", t[n].onPopUpBtnClick))
													};
												r(), $.popUp = i
											};
											e(), document.addEventListener("dataPopupBtn", e)
										}(),
										function() {
											var e = document.querySelector(".js-date-box");
											if (e) {
												var t = e.querySelector(".js-date-day"),
													n = e.querySelector(".js-date-month"),
													i = e.querySelector(".js-date-year"),
													s = e.querySelector('[data-error="day"]'),
													r = function() {
														var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
														return [31, 31, (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) % 4 == 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
													},
													o = function() {
														var e = Number(t.value),
															o = Number(n.value),
															a = Number(i.value),
															l = r(o, a),
															c = $.validator.messages["date.invalid"] || "Invalid field";
														e > l ? (s.innerText = c, helpers.addClass(t.parentNode, "error-border")) : (s.innerText = "", helpers.removeClass(t.parentNode, "error-border"))
													};
												t.addEventListener("change", o), n.addEventListener("change", o), i.addEventListener("change", o)
											}
										}(),
										function() {
											var e = document.body.querySelector("#profile_country"),
												t = document.createElement("span"),
												n = document.body.querySelector("#profile_phone"),
												i = document.createElement("span"),
												s = function(s) {
													var r = s.target.value,
														o = new XMLHttpRequest,
														a = function() {},
														l = function() {},
														c = function() {
															n.value = "+" + JSON.parse(o.responseText).code, helpers.dispatchEvent(n, "change"), e.removeAttribute("disabled"), t.parentNode.removeChild(t), n.removeAttribute("disabled"), i.parentNode.removeChild(i);
															var s = e.parentNode.querySelector(".jcf-disabled");
															s.className = s.className.replace("jcf-disabled", "")
														},
														d = function() {};
													if ("" === r) return void(n.value = "");
													e.setAttribute("disabled", "disabled"), e.insertAdjacentElement("beforebegin", t), n.setAttribute("disabled", "disabled"), n.insertAdjacentElement("beforebegin", i), r = r.toLowerCase(), o.addEventListener("abort", a, !1), o.addEventListener("error", l, !1), o.addEventListener("load", c, !1), o.addEventListener("progress", d, !1), o.open("GET", "/phone/code/" + r, !0), o.send()
												};
											t.className = "form-elem-preloader", i.className = "form-elem-preloader", e && n && e.addEventListener("change", s)
										}(),
										function() {
											var e = document.querySelectorAll(".js-confirm-email"),
												t = function(t) {
													var n = t.target,
														i = n.response,
														s = n.status;
													if (200 === s) {
														i = JSON.parse(i);
														for (var r = 0; r < e.length; r++) e[r].classList.remove("disabled", "btn-preloader");
														if ("ok" === i.result) {
															var o = {
																result: "success",
																title: i.message.title,
																message: i.message.reason
															};
															i.message.button && (o.button = i.message.button), $.notification(o)
														} else "warning" === i.result ? $.notification({
															result: "system",
															title: i.message.title,
															message: i.message.reason
														}) : $.notification({
															result: "error",
															title: i.message.title,
															message: i.message.reason
														})
													} else alert("Request failed.  Returned status of " + s)
												},
												n = function(e) {
													var n = new XMLHttpRequest,
														i = e.target,
														s = $(i).data("source") || "profile",
														r = "/confirm/email/request/" + s,
														o = $(i).data("bonusCampaignId") || null;
													o && (r += "?bonusCampaignId=" + o), i.classList.add("disabled", "btn-preloader"), n.open("GET", r, !0), n.onload = t, n.send()
												};
											if (e)
												for (var i = 0; i < e.length; i++) e[i].addEventListener("click", n)
										}(),
										function() {
											var e = document.querySelector(".js-confirm-phone"),
												t = document.querySelector(".js-confirm-phone-form"),
												n = document.querySelector(".js-confirm-phone-ok"),
												i = new XMLHttpRequest,
												s = void 0,
												r = document.querySelector(".phone-confirmation"),
												o = document.querySelector(".phone-confirmation__count"),
												a = 0,
												l = function(e, n) {
													function i() {
														s > 0 ? (o.innerHTML = Math.ceil(s), t.style.display = "block", r.classList.add("is-show"), s -= 1) : (clearInterval(a), e.classList.remove("disabled"), t.style.display = "none", r.classList.remove("is-show"))
													}
													if (r) {
														var s = void 0;
														s = n ? n / 60 : parseInt(r.dataset.serverTimeout) / 60, i(),
															function() {
																a = setInterval(i, 6e4)
															}()
													}
												},
												c = function(e) {
													if (4 === i.readyState)
														if (200 == i.status) {
															s = JSON.parse(i.responseText);
															var n = s.message.waitSeconds;
															if ("ok" == s.result) t.style.display = "block", e.classList.remove("btn-preloader"), r.classList.add("is-show"), l(e, n);
															else {
																var o = "confirm-phone";
																"type" in s.message && s.message.type && (o = s.message.type, t.style.display = "block", e.classList.remove("btn-preloader"), l(e, n)), $.notification({
																	url: "/message/error/" + o
																})
															}
														} else alert("Request failed.  Returned status of " + i.status)
												},
												d = function(e) {
													e.target.classList.add("disabled", "btn-preloader"), i.open("GET", "/confirm/phone/request", !0), i.onreadystatechange = function() {
														c(e.target)
													}, i.send()
												};
											r && parseInt(r.dataset.serverTimeout) > 0 && l(e), e && e.addEventListener("click", d), $.validator.addCallback('[data-form="confirm-phone"]', "ok", function() {
												clearInterval(a), $.notification({
													url: "/message/success/confirm-phone"
												}), e.style.display = "none", t.style.display = "none", r.classList.remove("is-show"), n.style.display = "block"
											}), $.validator.addCallback('[data-form="confirm-phone"]', "error", function(e, t) {
												var n = e.validateErrors.code,
													i = $.validator.messages[n] || "Invalid field";
												$('[data-error="code"]').text(i)
											})
										}(),
										function() {
											var e = document.querySelectorAll(".js-btn-change-profile-request"),
												t = new XMLHttpRequest,
												n = void 0,
												i = document.querySelectorAll(".change-data__textarea"),
												s = app.locale,
												r = document.querySelectorAll(".preloader-wrapp"),
												o = function() {
													for (var t = 0; t < e.length; t++) e[t].classList.add("disabled")
												},
												a = function() {
													for (var e = 0; e < r.length; e++) r[e].classList.remove("btn-preloader")
												},
												l = function() {
													if (200 === t.status && (n = JSON.parse(t.responseText), "ok" == n.result)) {
														$.notification({
															result: "success",
															title: n.message.title,
															message: n.message.reason
														});
														for (var e = 0; e < i.length; e++) i[e].value = ""
													}
													o(), a()
												},
												c = function(e) {
													e.preventDefault(), o();
													var n = e.target.parentNode,
														i = "";
													n.classList.add("btn-preloader"), helpers.getParent(e.target, ".form-change-data") && (i = new FormData(document.querySelector("[data-form='edit-profile-request']"))), helpers.getParent(e.target, ".form-delete-data") && (i = new FormData(document.querySelector("[data-form='delete-profile-request']"))), t.open("POST", "/" + s + "/player/change-data-request", !0), t.onload = l, t.send(i)
												};
											if (function() {
													for (var e = 0; e < i.length; e++) ! function(e) {
														var t = i[e].parentNode.querySelector(".js-btn-change-profile-request");
														i[e].addEventListener("input", function(e) {
															e.target.value.length > 10 ? t.classList.remove("disabled") : t.classList.add("disabled")
														})
													}(e)
												}(), e)
												for (var d = 0; d < e.length; d++) e[d].addEventListener("click", c)
										}();
									var raceSlider = {
										elem: {
											raceContent: document.querySelector(".race-content"),
											slider: document.querySelector(".race-slider"),
											raceOfDay: document.querySelector(".race-view-day"),
											newCountDown: document.querySelector(".timer-new"),
											newCountDownRaceDay: document.querySelector(".timer-race-day"),
											btnJoinTournament: document.querySelector(".js-join-tournament")
										},
										countRaceCurrent: "",
										countRaceDay: "",
										setWrappHeight: function() {
											for (var e = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth, t = document.querySelectorAll(".race-view-item-wrapper"), n = 0; n < t.length; n++) {
												var i = t[n].offsetWidth;
												t[n].style.height = e > 1300 ? "275px" : i / 4.671 + "px"
											}
										},
										createSlide: function(e, t, n, i, s, r, o, a, l, c, d, u) {
											var h = function(e) {
													return e.length >= 8 ? e.slice(0, -3) : e
												},
												p = '\n            <div class="race-view race-view-current effect-fade-in">\n                <div class="race-view-grid">\n                    <div class="race-view-item-1">\n                        <div class="stat-info">\n                            <div class="stat-info__item">\n                                <span class="stat-info__val">' + e + '</span>\n                                <span class="stat-info__text">' + app.trans["tournaments.min_bet"] + '</span>\n                            </div>\n                            <div class="stat-info__item">\n                                <span class="stat-info__val">' + t + '</span>\n                                <span class="stat-info__text">' + app.trans["tournaments.max_spins"] + '</span>\n                            </div>\n                            <div class="stat-info__item">\n                                <span class="stat-info__val">' + n + '</span>\n                                <span class="stat-info__subtext">' + app.trans["tournaments.minutes"] + '</span>\n                                <span class="stat-info__text">' + app.trans["tournaments.duration"] + '</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="race-view-item-2">\n                        <div class="estimate-box">\n                            <div class="race-slider-time">\n                                <div class="race-slider-time__title">' + app.trans["tournaments.registration"] + '</div>\n                                <div class="race-slider-time-grid">\n                                    <div class="race-slider-time__left">\n                                        <span class="race-slider-time__time">' + function(e) {
													return e.length >= 8 ? e.slice(0, -3) : e
												}(o) + '</span>\n                                        <span class="race-slider-time__date">' + i + '</span>\n                                        <span class="race-slider-time__utc">(UTC)</span>\n                                    </div>\n                                    <div class="race-slider-time-line">\n                                        <div class="race-slider-time__line"></div>\n                                    </div>\n                                    <div class="race-slider-time__right">\n                                        <span class="race-slider-time__time">' + h(r) + '</span>\n                                        <span class="race-slider-time__date">' + i + '</span>\n                                        <span class="race-slider-time__utc">(UTC)</span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="race-slider-btn-box">\n                                <div class="btn btn-green btn-race-slider disabled">' + app.trans["tournaments.tourn_join"] + '</div>\n                            </div>\n                            <div class="race-slider-time race-slider-time_second">\n                                <div class="race-slider-time__title">' + app.trans["tournaments.race"] + '</div>\n                                <div class="race-slider-time-grid">\n                                    <div class="race-slider-time__left">\n                                        <span class="race-slider-time__time">' + h(r) + '</span>\n                                        <span class="race-slider-time__date">' + i + '</span>\n                                        <span class="race-slider-time__utc">(UTC)</span>\n                                    </div>\n                                    <div class="race-slider-time-line">\n                                        <div class="race-slider-time__line"></div>\n                                    </div>\n                                    <div class="race-slider-time__right">\n                                        <span class="race-slider-time__time">' + function(e) {
													return e.length >= 8 ? e.slice(0, -3) : e
												}(s) + '</span>\n                                        <span class="race-slider-time__date">' + i + '</span>\n                                        <span class="race-slider-time__utc">(UTC)</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="race-view-item-3">\n                        <div class="race-view-prize">\n                            <div class="race-view-prize__title">' + function(e) {
													return e.toLocaleLowerCase(), e.replace("%value%", a || "").replace("%prizeType%", d || "").trim()
												}(app.trans["tournaments.win_prize"]) + '</div>\n                            <div class="icon-medals icon-medals_stand"></div>\n                            <div class="stand-lines stand-lines_white">\n                                <div class="stand-lines__1">' + a + '</div>\n                                <div class="stand-lines__2">' + l + '</div>\n                                <div class="stand-lines__3">' + c + '</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <img src="' + u + '" alt="race image" class="race-view__image" />\n            </div>\n        ',
												f = document.querySelector(".race-view-item-wrapper_top");
											f.appendChild(raceSlider.createLoader()), $.get(u, function() {}).always(function() {
												var e = document.querySelector(".preloader-wrapp");
												raceSlider.removeElement(e), f.insertAdjacentHTML("beforeEnd", p)
											})
										},
										sliderCarousel: function() {
											$(".race-slider").owlCarousel({
												loop: !1,
												margin: 50,
												nav: !0,
												mouseDrag: !1,
												touchDrag: !0,
												autoplay: !1,
												dots: !1,
												responsive: {
													0: {
														items: 1
													},
													320: {
														items: 2
													},
													470: {
														items: 3
													},
													600: {
														items: 4
													},
													768: {
														items: 5
													},
													980: {
														items: 6
													},
													1140: {
														items: 7
													},
													1280: {
														items: 7
													}
												}
											})
										},
										sliderAction: function() {
											for (var e = this, t = document.querySelectorAll(".race-slider__item"), n = function() {
													for (var e = 0; e < t.length; e++) t[e].classList.remove("is-active")
												}, i = 0; i < t.length; i++) ! function(i) {
												t[i].addEventListener("click", function() {
													if (document.querySelector(".preloader-wrapp")) return !1;
													if (t[i].classList.contains("race-right-now")) return !1;
													if (t[i].classList.contains("is-active")) return !1;
													n(), t[i].classList.add("is-active");
													var s = JSON.parse(t[i].dataset.raceItem),
														r = t[i].dataset.raceDuration,
														o = t[i].dataset.raceDate,
														a = t[i].dataset.raceMinBet,
														l = document.querySelectorAll(".race-view-current");
													if (t[i].classList.contains("js-race-available")) {
														document.querySelector(".js-race-view-current-available").classList.remove("race-view-current_hide"), document.querySelector(".js-race-view-current-available").classList.add("effect-fade-in");
														for (var c = 0; c < l.length; c++) l[c].classList.contains("js-race-view-current-available") || e.removeElement(l[c])
													} else {
														document.querySelector(".js-race-view-current-available").classList.remove("effect-fade-in"), document.querySelector(".js-race-view-current-available").classList.add("race-view-current_hide");
														for (var d = 0; d < l.length; d++) l[d].classList.contains("js-race-view-current-available") || (e.removeElement(l[d]), document.querySelector(".race-view-item-wrapper_top"));
														raceSlider.createSlide(a, s.numRounds, r, o, s.timeRaceEnd, s.timeRegistrationEnd, s.timeRegistrationStart, s.race.firstPlaceK, s.race.secondPlaceK, s.race.thirdPlaceK, s.race.prizeType, s.race.image)
													}
												})
											}(i)
										},
										sliderArrow: function() {
											$(".race-slider").on("change.owl.carousel", function(e) {
												e.relatedTarget.relative(e.property.value) >= 2 ? document.querySelector(".first-slide").classList.add("is-active") : document.querySelector(".first-slide").classList.remove("is-active")
											}), document.querySelector(".first-slide").addEventListener("click", function() {
												$(".race-slider").trigger("to.owl.carousel", 0)
											})
										},
										createLoader: function() {
											var e = document.createElement("div"),
												t = document.createElement("div");
											return e.setAttribute("class", "preloader-wrapp preloader-wrapp__tournament-race-page"), t.setAttribute("class", "preloader-box"), e.appendChild(t), e
										},
										removeElement: function(e) {
											null != e && e.parentNode.removeChild(e)
										},
										ajaxCall: function() {
											var e = document.querySelector(".preloader-wrapp"),
												t = "/" + app.locale + "/slot-races/list";
											$.get(t, function(t) {
												t && (e && raceSlider.removeElement(e), raceSlider.elem.raceContent.insertAdjacentHTML("beforeend", t))
											}).always(function() {
												var e = document.querySelector(".timer-new"),
													t = document.querySelector(".timer-race-day");
												(e && parseInt(e.dataset.timer) < 0 || t && parseInt(t.dataset.timer) < 0) && setTimeout(function() {
													var e = document.querySelector(".race-content"),
														t = document.querySelector(".js-race-slider-dynamic");
													raceSlider.removeElement(t), e.appendChild(raceSlider.createLoader()), raceSlider.ajaxCall()
												}, 2e3);
												var n = document.querySelector(".preloader-wrapp");
												raceSlider.removeElement(n);
												var i = document.querySelector(".js-race-slider-dynamic");
												setTimeout(function() {
													i.classList.remove("effect-fade-in")
												}, 500), raceSlider.sliderAction(), raceSlider.sliderCarousel(), raceSlider.sliderArrow(), raceSlider.setWrappHeight();
												var s = document.querySelector(".race-view-day"),
													r = document.querySelector(".js-race-slider-dynamic");
												r && (raceSlider.countRaceCurrent.destroy(), raceSlider.counterCircleSlider()), s && r && (raceSlider.countRaceDay.destroy(), raceSlider.counterCircleRaceOfDay()), raceSlider.actionBtnJoinTournament()
											})
										},
										counterCircleSlider: function() {
											function e(e, t, n) {
												if (n <= 0) {
													var i = document.querySelector(".race-content");
													document.querySelector(".js-race-slider-dynamic") && (raceSlider.removeElement(document.querySelector(".js-race-slider-dynamic")), i.appendChild(raceSlider.createLoader()), setTimeout(function() {
														raceSlider.ajaxCall()
													}, 2e3))
												}
											}
											this.countRaceCurrent = $(".timer-new").TimeCircles({
												animation: "smooth",
												bg_width: 1,
												fg_width: .00666666666666667,
												circle_bg_color: "#27512b",
												text_size: .1,
												time: {
													Days: {
														text: app.trans["tournaments.days"],
														color: "#40b549",
														show: !1
													},
													Hours: {
														text: app.trans["tournaments.hours"],
														color: "#40b549",
														show: !0
													},
													Minutes: {
														text: app.trans["tournaments.minutes"],
														color: "#40b549",
														show: !0
													},
													Seconds: {
														text: app.trans["tournaments.seconds"],
														color: "#40b549",
														show: !0
													}
												},
												count_past_zero: !1
											}).addListener(e)
										},
										counterCircleRaceOfDay: function() {
											function e(e, t, n) {
												if (n <= 0) {
													var i = document.querySelector(".race-content");
													document.querySelector(".js-race-slider-dynamic") && (raceSlider.removeElement(document.querySelector(".js-race-slider-dynamic")), i.appendChild(raceSlider.createLoader()), setTimeout(function() {
														raceSlider.ajaxCall()
													}, 2e3))
												}
											}
											this.countRaceDay = $(".timer-race-day").TimeCircles({
												animation: "smooth",
												bg_width: 1,
												fg_width: .00666666666666667,
												circle_bg_color: "#27512b",
												text_size: .1,
												time: {
													Days: {
														text: app.trans["tournaments.days"],
														color: "#40b549",
														show: !1
													},
													Hours: {
														text: app.trans["tournaments.hours"],
														color: "#40b549",
														show: !0
													},
													Minutes: {
														text: app.trans["tournaments.minutes"],
														color: "#40b549",
														show: !0
													},
													Seconds: {
														text: app.trans["tournaments.seconds"],
														color: "#40b549",
														show: !0
													}
												},
												count_past_zero: !1
											}).addListener(e)
										},
										actionBtnJoinTournament: function() {
											var e = document.querySelectorAll(".js-join-tournament");
											if (e)
												for (var t = 0; t < e.length; t++) ! function(t) {
													var n = e[t].dataset.href;
													e[t].addEventListener("click", function(i) {
														e[t].classList.add("disabled"), i.preventDefault(), $.get(n, function(n) {
															if (n) {
																if ("error" == n.result) return e[t].classList.remove("disabled"), !1;
																document.querySelector(".js-race-slider-dynamic") && (raceSlider.removeElement(document.querySelector(".js-race-slider-dynamic")), raceSlider.elem.raceContent.appendChild(raceSlider.createLoader()), raceSlider.ajaxCall())
															}
														})
													})
												}(t)
										},
										init: function() {
											var e = this;
											if (this.elem.slider) {
												this.sliderCarousel(), this.sliderAction(), this.sliderArrow(), this.setWrappHeight(), window.onresize = function() {
													e.setWrappHeight()
												};
												var t = document.querySelector(".timer-new"),
													n = document.querySelector(".timer-race-day");
												(t && parseInt(t.dataset.timer) < 0 || n && parseInt(n.dataset.timer) < 0) && setTimeout(function() {
													var e = document.querySelector(".race-content"),
														t = document.querySelector(".js-race-slider-dynamic");
													raceSlider.removeElement(t), e.appendChild(raceSlider.createLoader()), raceSlider.ajaxCall()
												}, 2e3), this.elem.newCountDown && this.counterCircleSlider(), this.elem.raceOfDay && this.counterCircleRaceOfDay(), this.elem.btnJoinTournament && this.actionBtnJoinTournament()
											}
										}
									};
									raceSlider.init();
									var letterSand = {
										elem: {
											inpt: document.querySelector(".js-input-letters")
										},
										clickHandle: function() {
											var e = this.elem.inpt,
												t = new XMLHttpRequest,
												n = "/profile/set/service_emails_allowed/";
											e.addEventListener("click", function() {
												e.classList.contains("is-active") ? t.open("GET", n + 0, !0) : t.open("GET", n + 1, !0), t.send()
											})
										},
										init: function() {
											this.elem.inpt && this.clickHandle()
										}
									};
									letterSand.init();
									var tournamentSliderAction = function() {
										var e = {
											elem: {
												slider: document.querySelector(".js-tournaments-slider"),
												sliderAll: document.querySelectorAll(".js-tournaments-slider"),
												sliderBtnNext: document.querySelectorAll(".js-tournaments-slider .owl-next"),
												url: "/engine/ajax/tournament.php?games="
											},
											createPreloader: function() {
												var e = document.createElement("div"),
													t = document.createElement("div");
												return e.setAttribute("class", "preloader-box"), t.setAttribute("class", "preloader-box__tournament"), e.appendChild(t), e
											},
											ajaxCall: function(t, n, i) {
												var s = this;
												$.get(e.elem.url + n, {}, function(e) {
													t.insertAdjacentHTML("beforeend", e)
												}).always(function() {
													s.tourSliderInit(t, i)
												})
											},
											remove: function(e) {
												e.parentNode.removeChild(e)
											},
											tourSliderInit: function(e, t) {
												for (var n = document.querySelectorAll(".tour-game-active-item"), i = 0; i < n.length; i++) n[i].addEventListener("mouseover", function() {
													this.classList.add("active")
												}), n[i].addEventListener("mouseout", function() {
													this.classList.remove("active")
												});
												$(e).trigger("destroy.owl.carousel"), e.classList.contains("tour-game-ended-slider") ? $(e).owlCarousel({
													dots: !1,
													items: 4,
													loop: !1,
													margin: 10,
													nav: !0,
													autoplay: !1,
													responsive: {
														0: {
															items: 1
														},
														320: {
															items: 2
														},
														400: {
															items: 3
														},
														550: {
															items: 4
														},
														650: {
															items: 5
														},
														750: {
															items: 6
														},
														850: {
															items: 7
														},
														1e3: {
															items: 4
														},
														1280: {
															items: 4
														}
													}
												}) : $(e).owlCarousel({
													dots: !1,
													startPosition: 1,
													loop: !1,
													margin: 10,
													nav: !0,
													autoplay: !1,
													lazyLoad: !0,
													responsive: {
														0: {
															items: 1
														},
														320: {
															items: 2
														},
														470: {
															items: 3
														},
														600: {
															items: 4
														},
														768: {
															items: 5
														},
														980: {
															items: 6
														},
														1140: {
															items: 7
														},
														1280: {
															items: 8
														}
													}
												});
												var s = helpers.getParent(e, ".tour-game-wrapper");
												this.remove(s.querySelector(".preloader-box"))
											},
											clickHandle: function() {
												for (var t = 0; t < this.elem.sliderBtnNext.length; t++) this.elem.sliderBtnNext[t].addEventListener("click", function() {
													var t = helpers.getParent(this, ".js-tournaments-slider"),
														n = helpers.getParent(this, ".tour-game-list").getAttribute("data-tour-id");
													currentBtnNext = this, t && !t.hasAttribute("data-disabled") && (currentBtnNext.style.display = "none", helpers.getParent(t, ".tour-game-wrapper").appendChild(e.createPreloader()), t.setAttribute("data-disabled", "disabled"), e.ajaxCall(t, n, currentBtnNext))
												})
											},
											swipeHandle: function() {
												for (var t = 0; t < this.elem.sliderAll.length; t++) {
													var n = this.elem.sliderAll[t];
													$(n).on("drag.owl.carousel", function() {
														var t = this,
															n = helpers.getParent(this, ".tour-game-list").getAttribute("data-tour-id");
														currentBtnNext = t.querySelector(".owl-next"), t && !t.hasAttribute("data-disabled") && (currentBtnNext.style.display = "none", helpers.getParent(t, ".tour-game-wrapper").appendChild(e.createPreloader()), t.setAttribute("data-disabled", "disabled"), e.ajaxCall(t, n, currentBtnNext))
													})
												}
											},
											init: function() {
												this.elem.slider && (this.clickHandle(), this.swipeHandle())
											}
										};
										e.init()
									};
									tournamentSliderAction(), document.addEventListener("dragAjaxOwlTournamentSlider", tournamentSliderAction),
										function() {
											var e = document.querySelector(".dashboard"),
												t = document.querySelector(".history-box");
											if (e) {
												var n = e.querySelector(".tooltip");
												if (n) {
													var i = n.querySelector(".tooltip__content"),
														s = function() {
															helpers.screenSize().screenX <= 675 ? (i.classList.remove("tooltip-right"), i.classList.add("tooltip-left")) : t || (i.classList.remove("tooltip-left"), i.classList.add("tooltip-right"))
														};
													s(), window.addEventListener("resize", function() {
														s()
													})
												}
											}
										}(),
										function() {
											var e = function() {
												for (var e = document.querySelectorAll(".js-tooltip"), t = 0; t < e.length; t++) ! function(t) {
													e[t].addEventListener("mouseover", function() {
														e[t].querySelector(".tooltip__content").classList.add("is-active")
													})
												}(t);
												for (var t = 0; t < e.length; t++) ! function(t) {
													e[t].addEventListener("mouseout", function() {
														e[t].querySelector(".tooltip__content").classList.remove("is-active")
													})
												}(t)
											};
											e(), document.addEventListener("initialToolTip", e)
										}(),
										function() {
											var e = function() {
												var e = function(e) {
													var t = void 0,
														n = void 0;
													return "during" == e ? (t = "#efb75f", n = "#5f4e33") : (t = "#40b549", n = "#27512b"), {
														animation: "smooth",
														bg_width: 1,
														fg_width: .00666666666666667,
														circle_bg_color: n,
														text_size: .15,
														time: {
															Days: {
																text: app.trans["tournaments.days"],
																color: t,
																show: !0
															},
															Hours: {
																text: app.trans["tournaments.hours"],
																color: t,
																show: !0
															},
															Minutes: {
																text: app.trans["tournaments.minutes"],
																color: t,
																show: !0
															},
															Seconds: {
																text: app.trans["tournaments.seconds"],
																color: t,
																show: !0
															}
														},
														count_past_zero: !1
													}
												};
												! function() {
													var t = document.querySelectorAll(".timer-new-tournament");
													if (t)
														for (var n = function(t, n, i) {
																i <= 0 && ($(this).TimeCircles().destroy(), $(this).parent().children(".participate-timer__title").text(app.trans["tournaments.before_end"]), $(this).data("timer", $(this).data("timer-duration")).TimeCircles(e("during")))
															}, i = 0; i < t.length; i++) t[i].dataset.timer > 0 ? $(t[i]).TimeCircles(e()).addListener(n) : (t[i].parentNode.querySelector(".participate-timer__title").innerHTML = app.trans["tournaments.before_end"], $(t[i]).data("timer", $(t[i]).data("timer-duration")).TimeCircles(e("during")))
												}()
											};
											e(), document.addEventListener("tournamentListCountdown", e)
										}(),
										function() {
											({
												timeInterval: 1e3,
												checkNodes: function() {
													for (var e = document.querySelectorAll(".js-tournament-loader"), t = void 0, n = void 0, i = void 0, s = 0; s < e.length; s++) t = e[s], n = Number(e[s].dataset.timerCountingWinners), i = e[s].dataset.urlWinnersUpdate, this.countTimer(t, n, i)
												},
												countTimer: function(e, t, n) {
													var i = this;
													! function() {
														var s = setInterval(function() {
															(t -= i.timeInterval) <= 0 && (clearInterval(s), i.ajaxHandler(e, n))
														}, 1e3)
													}()
												},
												removeLoaderNode: function(e) {
													var t = e.querySelector(".tournament-inner-grid__item-rest");
													t && t.parentNode.removeChild(t)
												},
												addContent: function(e, t) {
													e.insertAdjacentHTML("beforeend", t)
												},
												ajaxHandler: function(e, t) {
													var n = this;
													$.get(t, function(t) {
														t && (n.removeLoaderNode(e), n.addContent(e, t))
													}).always(function() {
														document.addEventListener("tournamentWinnersBtnShowEvent", tournamentWinnersShow.init())
													})
												},
												init: function() {
													document.querySelectorAll(".js-tournament-loader") && this.checkNodes()
												}
											}).init()
										}();
									var tournamentWinnersShow = {
										elem: {
											btn: document.querySelectorAll(".js-btn-tournament-winners"),
											url: "/tournaments/winners/"
										},
										setWinnersHeight: function() {
											var e = document.querySelector(".tournament-item-tour"),
												t = document.querySelector(".tournament-winners"),
												n = document.querySelector(".tournament-winners-list__inner"),
												i = e.parentNode,
												s = getComputedStyle(i),
												r = parseInt(s.marginBottom);
											t.style.top = e.clientHeight - 30 + "px", n.style.height = e.offsetHeight + (r - 10) + "px"
										},
										disableBtnTourWinners: function() {
											for (var e = document.querySelectorAll(".js-btn-tournament-winners"), t = 0; t < e.length; t++) e[t].classList.add("disable")
										},
										enableBtnTourWinners: function() {
											for (var e = document.querySelectorAll(".js-btn-tournament-winners"), t = 0; t < e.length; t++) e[t].classList.remove("disable")
										},
										removeActiveBtnTourWinners: function() {
											for (var e = document.querySelectorAll(".js-btn-tournament-winners"), t = 0; t < e.length; t++) e[t].classList.remove("is-active")
										},
										removeTournamentWinnersList: function() {
											for (var e = document.querySelectorAll(".tournament-winners"), t = 0; t < e.length; t++) e[t].parentNode.removeChild(e[t])
										},
										clickHandle: function() {
											for (var e = this, t = document.querySelectorAll(".js-btn-tournament-winners"), n = 0; n < t.length; n++) ! function(n) {
												void 0 === t[n].clickHandleFlagForLazyLoad && (t[n].clickHandleFlagForLazyLoad = function() {
													var i = t[n].dataset.tourId,
														s = helpers.getParent(t[n], ".tournament-item-tour"),
														r = document.querySelector(".tournament-winners");
													tournamentWinnersShow.disableBtnTourWinners(), t[n].classList.contains("is-active") ? r && (t[n].classList.remove("is-active"), r.parentNode.removeChild(r), tournamentWinnersShow.enableBtnTourWinners()) : (e.ajaxCall(i, s), r && (tournamentWinnersShow.removeTournamentWinnersList(), tournamentWinnersShow.removeActiveBtnTourWinners()))
												}, t[n].addEventListener("click", t[n].clickHandleFlagForLazyLoad))
											}(n)
										},
										dependencies: function() {
											document.querySelector(".jcf-scrollable") && jcf.replaceAll()
										},
										ajaxCall: function(e, t) {
											var n = this;
											$.get(this.elem.url + e, function(e) {
												e && (t.insertAdjacentHTML("beforeend", e), t.querySelector(".btn-tournament-all").classList.add("is-active"), t.querySelector(".btn-tournament-all").classList.remove("disable"), n.setWinnersHeight(), n.dependencies())
											}).always(function() {
												tournamentWinnersShow.enableBtnTourWinners()
											})
										},
										init: function() {
											if (this.elem.btn) {
												var e = new Event("tournamentWinnersBtnShowEvent");
												document.dispatchEvent(e), this.clickHandle()
											}
										}
									};
									tournamentWinnersShow.init(), document.addEventListener("lazyloadScrollDetect", tournamentWinnersShow.init.bind(tournamentWinnersShow));
									var tournamentLoadData = {
										elem: {
											tournamentTab: document.querySelector(".js-tournament-load"),
											tournamentTabelBox: document.querySelector(".tournament-tabel-box")
										},
										tournamentLoad: function() {
											var e = this.elem.tournamentTab,
												t = this.elem.tournamentTabelBox,
												n = e.dataset.id,
												i = e.dataset.loadTable;
											e.addEventListener("click", function() {
												"true" == i && $.get("/" + app.locale + "/tournaments/places/" + n, function(e) {
													e && (t.innerHTML = e)
												})
											})
										},
										init: function() {
											this.elem.tournamentTab && this.tournamentLoad()
										}
									};
									tournamentLoadData.init();
									var tournamentBtnfunc = function() {
										var e = document.querySelectorAll(".js-tournament-container, .tournament-item"),
											t = document.querySelector(".race-slider-btn-box"),
											n = document.querySelector(".btn-race-slider-hide"),
											i = document.querySelector(".tournament-box"),
											s = document.querySelector(".race-box"),
											r = document.querySelector(".drift-global-info"),
											o = document.querySelector(".competition-tab-content_races"),
											a = document.querySelector(".drift-box"),
											l = document.querySelector(".my-drift-tbl-wrapper"),
											c = document.querySelector(".js-btn-status-block");
										onLoadFnc = function(e, d) {
											return function(u) {
												var h = u.target,
													p = h.response;
												if (200 === h.status)
													if (p = JSON.parse(p), "ok" === p.result) {
														var f = document.querySelectorAll(".js-tournament-container-origin");
														if (f.length) e.parentNode.removeChild(e);
														else
															for (var m = document.querySelectorAll(".js-tournament-container"), g = 0; g < m.length; g++)
																if (m[g].querySelector(".js-tournament-button")) {
																	m[g].querySelector(".js-tournament-button").remove();
																	var v = helpers.getParent(m[g], ".js-btn-status-block");
																	v && v.querySelector(".drift-round-stat").classList.remove("is-hidden")
																} if (r && o.classList.contains("is-active") && (r.querySelector(".drift-circle-joined-text").style.display = "block"), t && n.classList.remove("btn-race-slider-hide"), d && (d.innerText = p.message), i && "undefined" != typeof Game && !c) {
															var y = e.getAttribute("data-tournament-id");
															Game.loadPlacesView(y)
														} else "undefined" != typeof Game || document.querySelector(".js-btn-status-block") ? "undefined" == typeof Game && document.querySelector(".js-btn-status-block") : window.location.reload();
														if (s) {
															var b = document.querySelectorAll(".race-box__title"),
																w = document.querySelectorAll(".race-btn-box"),
																S = document.querySelector(".race-info"),
																x = function(e) {
																	for (var t = 0; t < e.length; t++) e[t].classList.contains("success") || e[t].parentNode.removeChild(e[t]), e[t].classList.remove("success"), e[t].classList.add("effect-fade-in");
																	S && !S.classList.contains("race-info_padding") && S.classList.add("race-info_padding")
																};
															x(b), x(w)
														}
														a && a.classList.contains("js-tournament-container") && getMyDriftsInfo(e), l && (l.style.display = "block")
													} else e && helpers.removeClass(e, "disabled btn-preloader"), $.notification({
														result: p.result,
														title: p.message.title,
														message: p.message.reason
													})
											}
										}, onClickFnc = function(e, t) {
											return function(n) {
												var i = n.target.getAttribute("data-href"),
													s = new XMLHttpRequest;
												return n.preventDefault(), s.onload = onLoadFnc(e, t), s.open("GET", i, !0), s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), s.send(), helpers.addClass(e, "disabled btn-preloader"), !1
											}
										}, getMyDriftsInfo = function(e) {
											var t = e.getAttribute("data-tournament-ajax-url"),
												n = new XMLHttpRequest;
											return n.onload = onLoadMyDriftsInfo(), n.open("GET", t, !0), n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.send(), !1
										}, onLoadMyDriftsInfo = function() {
											return function(e) {
												var t = e.target,
													n = t.response,
													i = t.status;
												if (a && 200 === i) {
													a.innerHTML = n;
													var s = new Event("drift-timer-table-event"),
														r = new Event("drift-winners-table-event");
													document.dispatchEvent(s), document.dispatchEvent(r)
												}
											}
										};
										for (var d = 0; d < e.length; d++) {
											var u = e[d].querySelector(".js-tournament-button:not([data-popup])"),
												h = e[d].querySelector(".js-tournament-notice");
											u && !u.classList.contains("event-click-add") && (u.addEventListener("click", onClickFnc(u, h), !1), u.classList.add("event-click-add"))
										}
										document.querySelectorAll(".js-tournament-button").length && l && (l.style.display = "none")
									};
									document.addEventListener("initialTournamentBtn", tournamentBtnfunc), document.addEventListener("DOMContentLoaded", tournamentBtnfunc());
									var winnerSlider = {
											elem: {
												conteiner: document.querySelector(".js-winners-slider"),
												winnerList: document.querySelector(".winner-list"),
												timeOut: ""
											},
											dataItems: function(e, t, n, i, s, r, o, a, l, c) {
												var d = document.createElement("li"),
													u = document.createElement("div"),
													h = document.createElement("div"),
													p = document.createElement("div"),
													f = document.createElement("img"),
													m = document.createElement("div"),
													g = document.createElement("div"),
													v = document.createElement("div"),
													y = document.createElement("a"),
													b = document.createElement("span");
												! function() {
													d.setAttribute("class", "winner-list__item winner-list__item-new"), d.setAttribute("data-timestamp", e), d.setAttribute("data-round-id", o), d.setAttribute("data-amount", a), d.setAttribute("data-won-text", l), d.setAttribute("data-currency", c), u.setAttribute("class", "winner-list-box"), h.setAttribute("class", "winner-list-box__left"), f.setAttribute("class", "winner-list-box__image"), f.setAttribute("src", t), p.setAttribute("class", "winner-list-box__right"), m.setAttribute("class", "winner-list-box__user"), g.setAttribute("class", "winner-list-box__win"), v.setAttribute("class", "winner-list-box__game-name"), y.setAttribute("class", "winner-list-box__link"), b.setAttribute("class", "winner-list-box__link"), m.innerHTML = i, g.innerHTML = l + " " + a / 100 + " " + c, app.user ? (y.setAttribute("href", n), y.innerHTML = r) : (b.setAttribute("data-popup", "xhr"), b.setAttribute("data-popup-url", "/login?redirect-url=" + n), b.innerHTML = r)
												}();
												return function() {
													app.user ? v.appendChild(y) : v.appendChild(b), h.appendChild(f), p.appendChild(m), p.appendChild(g), p.appendChild(v), u.appendChild(h), u.appendChild(p), d.appendChild(u)
												}(), d
											},
											randomInteger: function(e, t) {
												var n = 1e3 * (e - .5 + Math.random() * (t - e + 1));
												return n = Math.round(n)
											},
											removeElement: function(e) {
												e.parentNode.removeChild(e)
											},
											ajaxCall: function() {
												var e = [],
													t = "/" + app.locale + "/winners";
												! function() {
													document.querySelector(".winner-list").style.transition = "all 0.1s ease-in-out", $.get(t, function(t) {
														if (t) {
															for (var n = 0; n < t.length; n++) e.push(winnerSlider.dataItems(t[n].timestamp, t[n].game_image, t[n].game_uri, t[n].user, t[n].price, t[n].game_name, t[n].roundId, t[n].amount, t[n].won_text, t[n].currency));
															winnerSliderService.htmlArray(e), winnerSlider.showsContent()
														}
													})
												}()
											},
											showsContent: function() {
												var e = this,
													t = new Event("dataPopupBtn"),
													n = winnerSliderService.config().slidesArray,
													i = function() {
														app.user || document.dispatchEvent(t)
													};
												if (winnerSliderService.firstLoad) ! function() {
													for (var t = n.slice(0, 7).reverse(), i = 0; i < t.length; i++) ! function(n) {
														e.elem.winnerList.appendChild(t[n]), setTimeout(function() {
															t[n].style.filter = "blur(0)"
														}, 100)
													}(i);
													var s = n.slice(6);
													! function() {
														var t = 0;
														! function n() {
															e.elem.timeOut = setTimeout(function() {
																++t <= s.length && (e.elem.winnerList.insertBefore(s[0 + t], e.elem.winnerList.firstChild), document.querySelector(".winner-list").style.transform = "translateY(50px)", setTimeout(function() {
																	document.querySelector(".winner-list").style.transform = "translateY(0)", e.elem.winnerList.firstChild.classList.remove("winner-list__item-new")
																}, 100), n())
															}, e.randomInteger(2, 7))
														}()
													}(), n.length > 0 && (winnerSliderService.firstLoad = !1)
												}(), i();
												else {
													clearTimeout(this.elem.timeOut), this.elem.timeOut = "";
													! function() {
														var t = 0,
															s = n;
														if (s.forEach(function(e) {
																var t = $(e),
																	n = t.filter(".winner-list__item").data("roundId"),
																	i = parseInt(t.filter(".winner-list__item").data("timestamp")),
																	s = $("[data-round-id=" + n + "]");
																if (s.length > 0 && i !== parseInt(s.data("timestamp"))) {
																	if (parseInt(t.data("amount")) <= parseInt(s.data("amount"))) {
																		var r = parseInt(t.data("amount") + parseInt(s.data("amount"))) / 100;
																		t.find(".winner-list-box__win").text(t.data("wonText") + " " + r + " " + t.data("currency"))
																	}
																	t.removeClass("winner-list__item-new"), s.replaceWith(t)
																}
															}), document.querySelectorAll(".winner-list__item")[0]) {
															var r = s.filter(function(e) {
																return $("[data-round-id=" + e.dataset.roundId + "]").length < 1
															});
															! function n() {
																e.elem.timeOut = setTimeout(function() {
																	t < r.length && (e.elem.winnerList.insertBefore(r[0 + t], e.elem.winnerList.firstChild), t++, document.querySelector(".winner-list").style.transform = "translateY(50px)", setTimeout(function() {
																		document.querySelector(".winner-list").style.transform = "translateY(0)", e.elem.winnerList.firstChild.classList.remove("winner-list__item-new")
																	}, 100), n(), i())
																}, e.randomInteger(2, 7))
															}()
														}
													}()
												}
											},
											init: function() {
												var e = this;
												this.elem.conteiner && (winnerSliderService.firstLoad && this.ajaxCall(), setInterval(function() {
													e.ajaxCall()
												}, 6e4))
											}
										},
										winnerSliderService = {
											firstLoad: !0,
											htmlArray: function(e) {
												return this.slidesArray = e
											},
											config: function() {
												return {
													slidesArray: this.slidesArray
												}
											}
										};
									winnerSlider.init(),
										function() {
											var e = function(e) {
												var t = document.querySelector(".auth-popup-step-1"),
													n = document.querySelector(".auth-popup-step-2"),
													i = app.mobile,
													s = "",
													r = {
														auth: app.trans["two_factor_auth.authorize"],
														google: {
															content: app.trans["two_factor_auth.login_mess_on_2fa"]
														},
														sms: {
															content: app.trans["two_factor_auth.login_mess_on_2fa_sms"]
														}
													};
												if ("twoFactorTempCode" == e.detail && (s = r.google.content), "twoFactorSmsCode" == e.detail && (s = r.sms.content), !n) {
													var o = "";
													i && (o = "is-mobile");
													var a = '\n                <div class="auth-popup-step-2">\n                    <div class="auth-2-factor ' + o + '">\n                        <div class="auth-2-factor-inner ' + o + '">\n                            <h1 class="auth-2-factor__title ' + o + '">' + r.auth + '</h1>\n                            <div class="auth-2-factor-content">\n                                <div class="icon-auth-2-factor"></div>\n                                <div class="auth-2-factor-content__text">' + s + '</div>\n                                <input type="text" name="login[' + e.detail + ']" class="inpt inpt-js js-inpt-auth-two-factor inpt-auth-two-factor" data-name="' + e.detail + '" />\n                                <div class="error" data-error="' + e.detail + '"></div> \n                            </div>\n                            <span class="btn btn-green btn-width-auto btn-authorization-2-factor disabled">' + r.auth + "</span>\n                        </div>\n                    </div>\n                </div>\n            ",
														l = function() {
															var e = document.querySelector(".btn-authorization-2-factor"),
																t = document.querySelector(".js-inpt-auth-two-factor");
															e.addEventListener("click", function() {
																e.classList.add("disabled", "btn-preloader");
																var t = new Event("auth2FactBtnClickEmulation");
																document.dispatchEvent(t)
															}), t.addEventListener("keypress", function(t) {
																13 == (t.keyCode ? t.keyCode : t.which) && e.classList.add("disabled", "btn-preloader")
															}), t.addEventListener("input", function(t) {
																"" != t.target.value ? e.classList.remove("disabled") : e.classList.add("disabled")
															})
														};
													! function() {
														i && t.classList.add("is-mobile"), t.classList.add("is-hidden"), t.insertAdjacentHTML("afterend", a), l()
													}()
												}
											};
											document.addEventListener("showFactor2Auth", e)
										}(),
										function() {
											var e = document.querySelectorAll(".js-profile-checkbox-2fact-auth"),
												t = document.querySelector(".container"),
												n = {
													google: {
														activatePopup: "/" + app.locale + "/two_factor_ga_activation_page",
														deactivatePopup: "/" + app.locale + "/two_factor_ga_deactivation_page",
														activateForm: "/" + app.locale + "/player/two_factor/activate",
														deactivateForm: "/" + app.locale + "/player/two_factor/deactivate"
													},
													sms: {
														activatePopup: "/" + app.locale + "/two_factor_sms_activation_page",
														deactivatePopup: "/" + app.locale + "/two_factor_sms_deactivation_page",
														activateForm: "/" + app.locale + "/player/two_factor_sms/activate",
														deactivateForm: "/" + app.locale + "/player/two_factor_sms/deactivate"
													}
												};
											if (!e) return !1;
											! function() {
												for (var t = 0; t < e.length; t++) ! function(t) {
													var i = e[t];
													i.addEventListener("click", function() {
														i.classList.add("is-lock"), i.classList.contains("2fact-auth-google") && (i.classList.contains("is-active") ? s(n.google.deactivatePopup, i) : s(n.google.activatePopup, i)), i.classList.contains("2fact-auth-sms") && (i.classList.contains("is-active") ? s(n.sms.deactivatePopup, i) : s(n.sms.activatePopup, i))
													})
												}(t)
											}();
											var i = function() {
													var e = document.querySelector(".fake-iframe-block"),
														t = document.querySelector(".js-inpt-secret-auth-two-factor");
													t && e.addEventListener("click", function() {
														t.type = "text", t.select(), t.setSelectionRange(0, 99999), document.execCommand("copy"), t.blur(), t.type = "hidden"
													})
												},
												s = function(e, n) {
													var s = new XMLHttpRequest;
													s.open("GET", e, !0), s.send(), s.addEventListener("readystatechange", function() {
														if (4 === s.readyState) {
															var e = s.response;
															200 == s.status && (t.insertAdjacentHTML("afterend", e), a(), i(), n.classList.remove("is-lock"), n.classList.toggle("is-active"), r(n))
														}
													})
												},
												r = function(e) {
													var t = document.querySelector(".js-btn-add-2-fact"),
														i = document.querySelector(".js-btn-cancel-2-factor"),
														s = document.querySelector(".js-inpt-auth-two-factor"),
														r = document.querySelector(".js-inpt-secret-auth-two-factor");
													! function() {
														s.addEventListener("input", function(e) {
															o(), "" != e.target.value ? (t && t.classList.remove("disabled"), i && i.classList.remove("disabled")) : (t && t.classList.add("disabled"), i && i.classList.add("disabled"))
														})
													}();
													var a = function(t, n, i) {
														var a = new XMLHttpRequest,
															d = new FormData;
														e.classList.contains("2fact-auth-google") && ("add" == i && (d.append("twoFactorSecretCode", r.value), d.append("twoFactorTempCode", s.value)), "remove" == i && d.append("twoFactorTempCode", s.value)), e.classList.contains("2fact-auth-sms") && d.append("twoFactorSmsCode", s.value), a.open(t, n, !0), a.addEventListener("readystatechange", function() {
															if (4 == a.readyState) {
																var t = JSON.parse(a.responseText);
																if (200 == a.status && (c(), "ok" === t.status && (e.classList.toggle("is-active"), o(), l(), document.location.reload(!1)), "error" === t.status)) {
																	o();
																	var n = "";
																	t.errors.hasOwnProperty("twoFactorTempCode") && (n = t.errors.twoFactorTempCode[0]), t.errors.hasOwnProperty("twoFactorSmsCode") && (n = t.errors.twoFactorSmsCode[0]), s.insertAdjacentHTML("afterend", '<div class="error error-validation-secret-code js-error-validation-secret-code">' + n + "</div>")
																}
															}
														}), a.send(d)
													};
													e.classList.contains("2fact-auth-google") && (t && t.addEventListener("click", function() {
														c(), a("POST", n.google.activateForm, "add")
													}), i && i.addEventListener("click", function() {
														c(), a("POST", n.google.deactivateForm, "remove")
													})), e.classList.contains("2fact-auth-sms") && (t && t.addEventListener("click", function() {
														c(), a("POST", n.sms.activateForm, "add")
													}), i && i.addEventListener("click", function() {
														c(), a("POST", n.sms.deactivateForm, "remove")
													}))
												},
												o = function() {
													var e = document.querySelector(".js-error-validation-secret-code");
													e && e.parentNode.removeChild(e)
												},
												a = function() {
													var e = document.querySelector(".close-icon"),
														t = document.querySelector(".popup-wrapp"),
														n = document.querySelector(".profile-auth-two-factor-btns__cancel");
													e.addEventListener("click", function() {
														t.parentNode.removeChild(t)
													}), n && n.addEventListener("click", function() {
														t.parentNode.removeChild(t)
													})
												},
												l = function() {
													var e = document.querySelector(".popup-wrapp");
													e.parentNode.removeChild(e)
												},
												c = function() {
													var e = document.querySelector(".btn-profile-auth-two-factor");
													e.classList.toggle("btn-preloader"), e.classList.toggle("disabled")
												}
										}(),
										function() {
											var e = document.querySelectorAll(".cash-bonus-checkbox"),
												t = document.querySelectorAll(".js-bonus-btn"),
												n = app.locale,
												i = "/" + n + "/player/bonus_campaign/activate",
												s = "/" + n + "/player/bonus_campaign/deactivate";
											if (e) {
												var r = {
														bonusCurrency: null,
														cashAmountChange: null,
														cashCurrencyChange: null
													},
													o = {
														item: null
													},
													a = function() {
														for (var e = document.querySelectorAll(".cash-bonus-item"), t = 0; t < e.length; t++) e[t].querySelector(".js-cash-bonus-list-deposite") && e[t].querySelector(".js-cash-bonus-list-deposite").classList.remove("error")
													};
												! function() {
													var e = document.querySelector(".js-cash-container");
													e && e.addEventListener("cash.gatewaysShown", function() {
														r.cashAmountChange = null, r.cashCurrencyChange = null, a()
													})
												}();
												! function() {
													var e = document.querySelector(".js-cash-container");
													e && e.addEventListener("cash.notificationShown", function() {})
												}();
												var l = function() {
													if (r.bonusCurrency)
														for (var e in r)
															for (var t in r[e]) r.cashCurrencyChange == t && (null != r[e][t].max ? r.cashAmountChange >= r[e][t].min && r.cashAmountChange <= r[e][t].max ? o.item.classList.remove("error") : o.item.classList.add("error") : r.cashAmountChange >= r[e][t].min ? o.item.classList.remove("error") : o.item.classList.add("error"));
													else if (!o.item)
														for (var n = document.querySelectorAll(".js-cash-bonus-list-deposite"), i = 0; i < n.length; i++) n[i].classList.contains("error") && n[i].classList.remove("error")
												};
												! function() {
													var e = document.querySelector(".js-cash-container");
													e && (e.addEventListener("cash.amountChange", function(e) {
														r.cashAmountChange = e.detail, l()
													}), e.addEventListener("cash.currencyChange", function(e) {
														r.cashCurrencyChange = e.detail, l()
													}))
												}();
												var c = void 0,
													d = 0;
												! function() {
													window.addEventListener("scroll", function() {
														d = window.pageYOffset || document.documentElement.scrollTop
													})
												}();
												! function() {
													var e = document.querySelector(".cash-bonus");
													e && e.addEventListener("wheel", function(e) {
														c = e.deltaY
													})
												}();
												var u = function(e, t) {
														return $.get(e + "/" + t)
													},
													h = function() {
														var e = document.querySelector(".js-cash-bonus-title-link"),
															t = document.querySelector(".js-close-bonuses"),
															n = document.querySelectorAll(".cash-bonus-item"),
															i = document.querySelector(".cash-bonus"),
															s = document.querySelector(".top-cash-bonus-wrap");
														if (helpers.screenSize().screenX < 768 && i.classList.contains("cash-bonus-mobile-not-open"))
															for (var r = 0; r < n.length; r++) {
																var o = n[r],
																	a = o.querySelector(".cash-bonus-checkbox.is-active");
																a && function() {
																	i.classList.remove("cash-bonus-mobile-not-open"), s.classList.remove("is-hidden"), t.classList.remove("is-hidden"), e.classList.add("is-hidden");
																	for (var r = 0; r < n.length; r++) n[r].classList.add("is-visible")
																}()
															}
													},
													p = function() {
														for (var t = 0; t < e.length; t++) {
															e[t].classList.remove("is-active");
															helpers.getParent(e[t], ".cash-bonus-item").classList.remove("is-current")
														}
														a()
													},
													f = function() {
														for (var e = 0; e < t.length; e++) {
															var n = helpers.getParent(t[e], ".cash-bonus-item"),
																i = n.querySelector(".btn-bonus-activate"),
																s = n.querySelector(".btn-bonus-deactivate");
															n.classList.contains("is-current") || !i && !s || (i.classList.add("is-active"), s.classList.remove("is-active"))
														}
													},
													m = function() {
														for (var t = 0; t < e.length; t++)
															if (e[t].classList.contains("is-active")) {
																var n = helpers.getParent(e[t], ".cash-bonus-item"),
																	i = n.querySelector(".js-cash-bonus-list-deposite");
																h(), r.bonusCurrency = JSON.parse(i.dataset.depositSumCurrencies), o.item = i, l()
															}
													},
													g = function() {
														for (var e = 0; e < t.length; e++) ! function(e) {
															var n = t[e];
															(n.classList.contains("btn-bonus-activate") && n.classList.contains("is-active") || n.classList.contains("btn-bonus-deactivate") && n.classList.contains("is-active")) && (n.classList.add("disabled"), setTimeout(function() {
																n.classList.remove("disabled")
															}, 1e3))
														}(e)
													};
												! function() {
													m();
													for (var e = document.querySelector(".game-cash-box"), n = 0; n < t.length; n++) ! function(n) {
														t[n].addEventListener("click", function() {
															var a = helpers.getParent(t[n], ".cash-bonus-item"),
																m = a.querySelector(".js-cash-bonus-list-deposite"),
																v = a.querySelector(".cash-bonus-checkbox"),
																y = t[n].dataset.bonusId;
															if (t[n].classList.contains("disabled")) return !1;
															if (t[n].classList.contains("btn-bonus-deactivate") && t[n].classList.contains("is-active")) {
																var b = helpers.getParent(t[n], ".bonus-btn-box");
																b.querySelector(".btn-bonus-deactivate").classList.remove("is-active"), b.querySelector(".btn-bonus-activate").classList.add("is-active"), u(s, y), h(), p(), f(), r.bonusCurrency = null, o.item = null, l(), helpers.screenSize().screenX > 768 && !e && d > 100 && window.scroll(0, 0)
															}
															if (t[n].classList.contains("btn-bonus-activate") && t[n].classList.contains("is-active")) {
																var w = helpers.getParent(t[n], ".bonus-btn-box");
																w.querySelector(".btn-bonus-activate").classList.remove("is-active"), w.querySelector(".btn-bonus-deactivate").classList.add("is-active"), u(i, y), p(), v.classList.add("is-active"), a.classList.add("is-current"), f(), r.bonusCurrency = JSON.parse(m.dataset.depositSumCurrencies), o.item = m, l(), void 0 != c && helpers.screenSize().screenX > 768 && !e && (d > 100 && window.scroll(0, 0), jcf.destroy(".jcf-bonus-scroll"), jcf.replace(".jcf-bonus-scroll")), void 0 != c && e && (d > 100 && window.scroll(0, 0), jcf.destroy(".jcf-scrollable-game-page"), jcf.replace(".jcf-scrollable-game-page"))
															}
															g()
														})
													}(n)
												}();
												var v = function() {
													var e = document.querySelector(".js-cash-bonus-title-link"),
														t = document.querySelector(".js-close-bonuses"),
														n = document.querySelectorAll(".cash-bonus-item"),
														i = document.querySelector(".cash-bonus"),
														s = document.querySelector(".top-cash-bonus-wrap"),
														r = document.querySelector(".jcf-bonus-scroll"),
														o = (document.querySelector(".cash-bonus"), function() {
															if (i.classList.contains("cash-bonus-mobile-not-open"))
																for (var e = 0; e < n.length; e++) n[e].classList.contains("is-current") && s.classList.add("is-hidden")
														});
													if (e)
														if (helpers.screenSize().screenX < 768) r && jcf.destroy(".jcf-bonus-scroll"), i.classList.contains("cash-bonus-mobile-not-open") || (t.classList.contains("is-hidden") ? i.classList.add("cash-bonus-mobile-not-open") : i.classList.remove("cash-bonus-mobile-not-open")), o(), e.addEventListener("click", function() {
															t.classList.remove("is-hidden"), e.classList.add("is-hidden"), i.classList.remove("cash-bonus-mobile-not-open");
															for (var s = 0; s < n.length; s++) n[s].classList.add("is-visible");
															o()
														}), t.addEventListener("click", function() {
															t.classList.add("is-hidden"), e.classList.remove("is-hidden"), i.classList.add("cash-bonus-mobile-not-open");
															for (var s = 0; s < n.length; s++) n[s].classList.remove("is-visible");
															o()
														});
														else {
															i.classList.remove("cash-bonus-mobile-not-open"), s.classList.remove("is-hidden");
															for (var a = 0; a < n.length; a++) n[a].classList.remove("is-visible");
															t.classList.contains("is-hidden") || t.classList.add("is-hidden"), e.classList.contains("is-hidden") && e.classList.remove("is-hidden")
														}
												};
												v();
												var y = function() {
													var e = document.querySelector(".cash-bonus-scroll"),
														t = document.querySelector(".js-cash-container"),
														n = document.querySelector(".cash-inner"),
														i = document.querySelector(".jcf-bonus-scroll"),
														s = document.querySelector(".cash-bonus"),
														r = document.querySelector(".cash-bonus_game-page");
													s && !r && (i && helpers.screenSize().screenX > 768 ? (jcf.replaceAll(), e.style.height = n.offsetHeight + "px") : e && (e.style.height = "auto", jcf.replace(".js-cash-checkbox-custome"), jcf.destroy(".jcf-bonus-scroll")), t.addEventListener("cash.renderStopped", function() {
														i && helpers.screenSize().screenX > 768 ? (jcf.replaceAll(), e.style.height = n.offsetHeight + "px") : e && (jcf.replace(".js-cash-checkbox-custome"), jcf.destroy(".jcf-bonus-scroll"), e.style.height = "auto")
													}))
												};
												y(), window.addEventListener("resize", function() {
													y(), v()
												})
											}
										}(),
										function() {
											var e = document.querySelectorAll(".js-bonus-header"),
												t = document.querySelectorAll(".js-icon-circle-close");
											if (e) {
												var n = function() {
														for (var e = document.querySelectorAll(".bonus-dashboard-list-wrapp"), t = 0; t < e.length; t++) {
															var n = getComputedStyle(e[t]).paddingBottom,
																i = e[t].querySelector(".bonus-back"),
																s = i.querySelector(".bonus-content__title");
															i.querySelector(".bonus-text").style.height = e[t].offsetHeight - s.offsetHeight - parseFloat(n) - 25 + "px"
														}
													},
													i = function() {
														for (var e = document.querySelectorAll(".bonus-dashboard-list__item"), t = 0; t < e.length; t++)
															if (helpers.screenSize().screenX < 610)
																if (e[t].querySelector(".dashboard-bonus-note_item")) {
																	var n = e[t].querySelector(".dashboard-bonus-note_item").offsetHeight + 100;
																	e[t].style.margin = "0 auto " + n + "px"
																} else e[t].style.margin = "0 auto 100px";
														else helpers.screenSize().screenX >= 610 && helpers.screenSize().screenX < 940 ? t > 0 && [2, 3].indexOf(t % 4) > -1 ? e[t].style.margin = "50px 0 0 0" : e[t].style.margin = "0 auto 100px" : e[t].style.margin = 0
													},
													s = function(i) {
														for (var s = 0; s < i.length; s++) ! function(s) {
															n(), i[s].addEventListener("click", function() {
																var n = void 0;
																i == e && (n = i[s].parentNode.parentNode), i == t && (n = i[s].parentNode.parentNode.parentNode);
																var r = n.querySelector(".bonus-front"),
																	o = n.querySelector(".bonus-back");
																i == e && (o.style.height = n.offsetHeight - 50 + "px"), i == t && (o.style.height = 0), (r.classList.contains("is-active") || o.classList.contains("is-active")) && (r.classList.toggle("is-active"), o.classList.toggle("is-active"))
															})
														}(s)
													},
													r = function() {
														for (var e = document.querySelectorAll(".bonus-dashboard-list__item"), t = 0; t < e.length; t++) {
															var n = e[t].querySelector(".bonus-front"),
																i = e[t].querySelector(".bonus-back");
															n.classList.contains("is-active") || (n.classList.add("is-active"), i.classList.remove("is-active"), i.style.height = "0")
														}
													},
													o = function(e) {
														for (var t = document.querySelectorAll(".btn-bonus"), n = 0; n < t.length; n++) {
															var i = t[n];
															null == t[n].parentNode.querySelector(".btn-bonus-award") && ("disable" == e && i.classList.add("disabled"), "enable" == e && i.classList.remove("disabled"))
														}
													},
													a = function(e) {
														return document.querySelector("#" + e)
													},
													l = function(e, t) {
														console.log(e);
														var n = a(e);
														null !== n && Object.keys(t).length && Object.values(t).forEach(function(e) {
															if (e.name && 1 == e.require) {
																var t = n.querySelector("." + e.name),
																	i = n.querySelector(".btn-bonus-award");
																null !== t && (console.log(e), !0 === e.done ? (console.log("is done"), t.classList.add("bonus-required-is-done"), null !== i && ("spentFunds" == e.name ? i.classList.remove("disabled", "btn-preloader") : i.classList.remove("btn-preloader"))) : (console.log("no done"), t.classList.remove("bonus-required-is-done")))
															}
														})
													},
													c = function(e, t, n, i, s) {
														$.get(i, function(i) {
															"ok" == i.result && (e.parentNode.removeChild(e), n.parentNode.removeChild(n), t.classList.remove("is-hidden"), o("enable"), s && s.classList.remove("is-hidden")), "error" == i.result && (n.classList.remove("btn-preloader"), o("enable"))
														})
													};
												n(), i(), s(e), s(t),
													function() {
														for (var e = document.querySelectorAll(".bonus-dashboard-list__item"), t = 0; t < e.length; t++) ! function(t) {
															var n = e[t].querySelector(".bonus-front"),
																i = e[t].querySelector(".bonus-back"),
																s = e[t].querySelector(".btn-bonus"),
																r = e[t].querySelector(".btn-bonus.is-hidden"),
																a = e[t].querySelector(".bonus-info-rules"),
																l = e[t].querySelector(".bonus-congratulation-info");
															s.addEventListener("click", function(e) {
																var t = s.getAttribute("href");
																o("disable"), s.classList.add("btn-preloader"), i.classList.contains("is-active") && (i.classList.remove("is-active"), n.classList.add("is-active")), s.classList.contains("js-required-rules-is-done") && (e.preventDefault(), c(a, l, s, t, r))
															})
														}(t)
													}(),
													function() {
														var e = document.querySelectorAll(".js-award-bonus");
														if (!e.length) return !1;
														e.forEach(function(e) {
															e.addEventListener("click", function(t) {
																t.preventDefault();
																var n = e.dataset.url,
																	i = e.parentNode.parentNode.id;
																e.classList.add("disabled"), $.get(n, function(e) {
																	var t = e.result;
																	!1 === t.isAwarded ? l(i, t.rules) : (console.log("return, that is awarded, so show reload page"), location.reload())
																}).always(function() {
																	e.classList.remove("disabled", "btn-preloader"), o("enable")
																})
															})
														})
													}(),
													function() {
														if (null === document.querySelector(".js-should-check-award-rules")) return !1;
														$.get("/en/player/bonus_campaign/check_award_rules", function(e) {
															if (Object.keys(e.result).length && "ok" == e.result.status && Object.keys(e.result.rules).length) {
																var t = e.result.rules;
																for (id in t) l("playerBonusCampaignId-" + id, t[id])
															}
														})
													}(), window.addEventListener("resize", function() {
														r(), n(), i()
													}), window.addEventListener("load", function() {
														n()
													})
											}
										}(),
										function() {
											var e = document.querySelector(".cash-bonus"),
												t = document.querySelector(".js-cash-container"),
												n = document.querySelectorAll(".js-bonus-btn");
											if (e && t) {
												var i = {
														userId: app.user.id,
														bonusId: null,
														domain: app.domain_sse
													},
													s = function() {
														for (var e = document.querySelectorAll(".cash-bonus-item"), t = 0; t < e.length; t++) {
															var n = e[t];
															n.classList.contains("is-current") && function() {
																var e = n.querySelector(".cash-bonus-info"),
																	t = n.querySelector(".bonus-congratulation-info-wrapp"),
																	i = (n.querySelector(".cash-bonus-item-image"), n.querySelector(".cash-bonus-checkbox")),
																	s = n.querySelector(".bonus-btn-box");
																s.parentNode.removeChild(s), e.parentNode.removeChild(e), t.classList.remove("is-hidden"), i.classList.add("is-credited");
																var r = Date.now() + 2e3,
																	o = setInterval(function() {
																		if (Date.now() > r) return clearInterval(o);
																		confetti({
																			startVelocity: 30,
																			spread: 360,
																			ticks: 60,
																			origin: {
																				x: Math.random(),
																				y: Math.random() - .2
																			}
																		})
																	}, 200)
															}()
														}
													},
													r = function() {
														var e = new EventSource(i.domain + "/frontend/bonus/campaigns/sse/" + i.userId + "/" + i.bonusId + "/on_award");
														e.addEventListener("message", function(t) {
															"awarded" == JSON.parse(t.data).status ? (e.close(), s()) : e.close()
														}), e.addEventListener("error", function(t) {
															return e.close()
														})
													};
												! function() {
													for (var e = 0; e < n.length; e++) ! function(e) {
														var t = n[e],
															s = helpers.getParent(n[e], ".cash-bonus-item"),
															r = s.querySelector(".cash-bonus-checkbox");
														t.classList.contains("btn-bonus-activate") && (r.classList.contains("is-active") && (i.bonusId = t.dataset.bonusId), t.addEventListener("click", function() {
															return i.bonusId = t.dataset.bonusId
														})), t.classList.contains("btn-bonus-deactivate") && t.addEventListener("click", function() {
															return i.bonusId = null
														})
													}(e)
												}(), t.addEventListener("cash.notificationShown", function() {
													null != i.bonusId && r()
												})
											}
										}(),
										function() {
											var e = document.querySelectorAll(".js-comp-tabs-link"),
												t = document.querySelectorAll(".competition-tab-content");
											if (e.length > 0) {
												var n = function(e) {
														for (var t = 0; t < e.length; t++) e[t].classList.remove("is-active")
													},
													i = function() {
														for (var t = 0; t < e.length; t++) {
															var n = e[t];
															n.classList.contains("is-active") || n.parentNode.classList.toggle("disabled")
														}
													},
													s = function() {
														for (var e = 0; e < t.length; e++) {
															var n = t[e];
															if (n.classList.contains("competition-tab-content_tournament") && n.classList.contains("is-active")) {
																var i = new Event("tournamentListCountdown");
																document.dispatchEvent(i);
																var s = new Event("tourSliderInitial");
																document.dispatchEvent(s);
																var r = new Event("initialTournamentBtn");
																document.dispatchEvent(r);
																var o = new Event("dataPopupBtn");
																document.dispatchEvent(o);
																var a = new Event("lazyloadGlobalEvent");
																document.dispatchEvent(a);
																var l = new Event("dragAjaxOwlTournamentSlider");
																document.dispatchEvent(l)
															}
															if (n.classList.contains("competition-tab-content_races") && n.classList.contains("is-active")) {
																var c = new Event("driftPieCharts");
																document.dispatchEvent(c);
																var d = new Event("accordionAction");
																document.dispatchEvent(d);
																var u = new Event("initialTournamentBtn");
																document.dispatchEvent(u);
																var h = new Event("driftLoadShowsEffect");
																document.dispatchEvent(h);
																var p = new Event("initialToolTip");
																document.dispatchEvent(p);
																var f = new Event("driftLeaderBoardAction");
																document.dispatchEvent(f);
																var m = new Event("dataPopupBtn");
																document.dispatchEvent(m)
															}
														}
													},
													r = function(e, n, r) {
														o.ajaxFlag && (i(), $.get(e, function(e) {
															if (e) {
																o.preloader && (r.classList.remove("btn-competition-preloader"), o.preloader = !1);
																for (var i = 0; i < t.length; i++) {
																	var s = t[i];
																	s.dataset.tabs == n && (s.insertAdjacentHTML("beforeend", e), o.ajaxFlag = !1)
																}
															}
														}).always(function() {
															i(), s()
														}))
													};
												! function() {
													for (var i = 0; i < e.length; i++) ! function(i) {
														var s = e[i];
														s.addEventListener("click", function(i) {
															i.preventDefault(), o.preloader && s.classList.add("btn-competition-preloader"), n(e), n(t);
															for (var a = 0; a < t.length; a++) {
																var l = t[a];
																l.dataset.tabs === s.dataset.tabs && (s.classList.add("is-active"), l.classList.add("is-active"), window.history.pushState(null, null, s.getAttribute("href")), r(s.dataset.url, s.dataset.tabs, s))
															}
														})
													}(i)
												}();
												var o = {
													ajaxFlag: !0,
													preloader: !0
												}
											}
										}(),
										function() {
											var e = function() {
												var e = document.querySelectorAll(".js-btn-payments-tbl-cancel"),
													t = document.querySelector(".container"),
													n = document.body;
												if (e) {
													var i = function() {
															return '<div class="color-red">' + app.trans["dashboard.history.payments.form.status.cancelled"] + "</div>"
														},
														s = function() {
															var e = document.querySelector(".popup-confirm-history"),
																t = document.querySelector(".btn-history-confirm"),
																n = e.querySelectorAll(".btn");
															t.classList.add("btn-preloader");
															for (var i = 0; i < n.length; i++) n[i].classList.add("disabled")
														},
														r = function() {
															var e = document.querySelector(".popup-wrapp");
															e.parentNode.removeChild(e), t.classList.remove("effect-blur")
														},
														o = function(e, t, n) {
															document.querySelector(".js-popup-confirm-history-confirm").addEventListener("click", function() {
																s(), $.get(e, function(e) {
																	e && (r(), t.innerHTML = "", t.insertAdjacentHTML("beforeend", i()), n.classList.add("selected-fade-effect"), setTimeout(function() {
																		n.classList.remove("selected-fade-effect")
																	}, 1e3))
																})
															})
														},
														a = function() {
															document.querySelector(".js-popup-history-cancel").addEventListener("click", function() {
																r()
															})
														},
														l = function(e, i, s) {
															var r = '\n                <div class="popup-wrapp effect-fade-in">\n                    <div class="popup-box">\n                        <div class="popup-confirm-history">\n                            <h1 class="popup-confirm-history__title">' + app.trans["dashboard.history.payments.cancellation_confirmation.question_text_title"] + '</h1>\n                            <div class="popup-confirm-history-content">\n                                <div class="popup-confirm-history-content__text">\n                                    ' + app.trans["dashboard.history.payments.cancellation_confirmation.question_text"] + '\n                                </div>\n                                \n                                <div class="popup-confirm-history-btn">\n                                    <span class="btn-history-confirm btn btn-green js-popup-confirm-history-confirm">' + app.trans["dashboard.history.payments.cancellation_confirmation.button_yes"] + '</span>\n                                    <span class="btn-history-cancel btn btn-transparent js-popup-history-cancel">' + app.trans["dashboard.history.payments.cancellation_confirmation.button_no"] + "</span>\n                                </div>\n                            </div>                \n                        </div>\n                    </div>\n                </div>            \n            ";
															t.classList.add("effect-blur"), n.insertAdjacentHTML("beforeend", r), o(e, i, s), a()
														};
													! function() {
														for (var t = 0; t < e.length; t++) ! function(t) {
															var n = e[t];
															void 0 == n.dataset.loaded && (n.dataset.loaded = "true", n.addEventListener("click", function() {
																var e = n.dataset.url,
																	t = helpers.getParent(n, ".dashboard-status-block"),
																	i = helpers.getParent(n, ".dashboard-table-row");
																l(e, t, i)
															}))
														}(t)
													}()
												}
											};
											e(), document.addEventListener("paymentCancelBtns", e)
										}(),
										function() {
											var e = document.querySelector(".js-submit-unsubscribe");
											if (e) {
												var t = {
														url: "/player/unsubscribe"
													},
													n = function() {
														e.classList.toggle("btn-preloader"), e.classList.toggle("disabled")
													},
													i = function(e, t, n) {
														var i = document.querySelector(".unsubscribe-title"),
															s = document.querySelector(".unsubscribe-btn-box"),
															r = document.querySelector(".unsubscribe-note");
														i.innerHTML = e, s.innerHTML = '<a href="/' + app.locale + '" class="btn btn-width-auto btn-green">' + t + "</a>", r.innerHTML = n
													},
													s = function(e, t, s, r, o, a, l) {
														var c = new XMLHttpRequest,
															d = new FormData;
														d.append("hash", s), d.append("locale", r), d.append("type", o), d.append("comment", a), d.append("player", l), c.open(e, t, !0), c.addEventListener("readystatechange", function() {
															if (4 == c.readyState) {
																var e = JSON.parse(c.responseText);
																200 == c.status && ("ok" === e.result && i(e.payload.title_text, e.payload.button_text, e.payload.footer_text), "error" === e.result && n())
															}
														}), c.send(d)
													};
												! function() {
													e.addEventListener("click", function() {
														n(), s("POST", t.url, e.dataset.hash, e.dataset.locale, e.dataset.type, e.dataset.comment, e.dataset.player)
													})
												}()
											}
										}(),
										function() {
											var e = document.querySelectorAll(".js-checkbox-subscribe"),
												t = document.querySelector(".js-send-subscribes");
											if (t) {
												var n = {
														url: "/player/change/subscription/process"
													},
													i = function() {
														t.classList.toggle("btn-preloader"), t.classList.toggle("disabled")
													};
												! function() {
													t.addEventListener("click", function() {
														i(), s("POST", n.url)
													})
												}();
												var s = function(t, n) {
													for (var s = new XMLHttpRequest, r = new FormData, o = 0; o < e.length; o++) {
														var a = e[o],
															l = "";
														"true" === a.dataset.checked && (l = 1), "false" === a.dataset.checked && (l = 0), r.append("subscriptions_change[" + a.dataset.checkboxValue + "]", l)
													}
													s.open(t, n, !0), s.addEventListener("readystatechange", function() {
														4 == s.readyState && (200 == s.status && i(), document.location.reload(!0))
													}), s.send(r)
												}
											}
										}(),
										function() {
											var e = document.querySelector(".js-drift-ruls-anchor"),
												t = document.querySelector(".acc-title");
											e && e.addEventListener("click", function() {
												var e = t.parentNode.querySelector(".acc-text_inner");
												if (t.classList.contains("is-active")) return !1;
												t.classList.add("is-active"), e.parentNode.style.height = e.offsetHeight + "px"
											})
										}(),
										function() {
											var e = function() {
													return "\n                <div class='preloader-wrapp preloader-wrapp__bonus-games'>\n                    <div class='preloader-box'></div>\n                </div>\n            "
												},
												t = function() {
													for (var e = document.querySelectorAll(".js-drift-read-more-static"), t = 0; t < e.length; t++) ! function(t) {
														var i = e[t];
														i.addEventListener("click", function() {
															var e = i.dataset.url,
																t = helpers.getParent(i, ".drift-round-game-wrapp");
															n(e, t)
														})
													}(t)
												},
												n = function(t, n) {
													var i = new XMLHttpRequest,
														s = n.querySelector(".drift-game-block");
													i.open("GET", t, !0), i.send(), s.insertAdjacentHTML("beforeend", e()), i.addEventListener("readystatechange", function() {
														4 == i.readyState && (200 == i.status ? (s.classList.add("effect-fade-out"), setTimeout(function() {
															s.parentNode.removeChild(s), n.insertAdjacentHTML("beforeend", i.responseText);
															var e = new Event("initialReadMoreDriftBonusBtn");
															document.dispatchEvent(e);
															var t = new Event("gameItemBehavior");
															document.dispatchEvent(t)
														}, 300)) : console.log(i.status + ": " + i.statusText))
													})
												};
											document.addEventListener("initialReadMoreDriftBonusBtn", t), t()
										}(),
										function() {
											if (document.querySelector(".drift-timer")) var e = function(e, n, i) {
													i <= 0 && (t.destroy(), window.location.reload())
												},
												t = $(".drift-timer").TimeCircles({
													animation: "smooth",
													bg_width: 1,
													fg_width: .00666666666666667,
													circle_bg_color: "#27512b",
													number_size: .1,
													text_size: .14,
													time: {
														Days: {
															text: app.trans["common_tournament.drift-races.subtournament.timer.days"],
															color: "#40b549",
															show: !0
														},
														Hours: {
															text: app.trans["common_tournament.drift-races.subtournament.timer.hour"],
															color: "#40b549",
															show: !0
														},
														Minutes: {
															text: app.trans["common_tournament.drift-races.subtournament.timer.min"],
															color: "#40b549",
															show: !0
														},
														Seconds: {
															text: app.trans["common_tournament.drift-races.subtournament.timer.sec"],
															color: "#40b549",
															show: !1
														}
													}
												}).addListener(e)
										}(),
										function() {
											var e = function() {
												var e = document.querySelectorAll(".drift-load");
												if (document.querySelector(".drift-circle-notice") && e.length > 0) {
													var t = function() {
														for (var t = 0, n = 0; n < e.length; n++) ! function(n) {
															t += 100, setTimeout(function() {
																e[n].classList.add("is-show")
															}, t)
														}(n)
													};
													setTimeout(function() {
														t()
													}, 1e3)
												}
											};
											window.addEventListener("load", function() {
												e(), document.addEventListener("driftLoadShowsEffect", e)
											})
										}(),
										function() {
											var e = function() {
												var e = {
													elem: {
														btnLeaderBoard: document.querySelector(".btn-leaderboard"),
														driftLeaderBoardWrap: document.querySelector(".js-drift-leaderboard-wrapp")
													},
													createLoader: function() {
														return "\n                    <div class='preloader-wrapp preloader-wrapp__drift-leaderboard'>\n                        <div class='preloader-box'></div>\n                    </div>\n                "
													},
													dependencies: function() {
														var e = new Event("initialToolTip");
														document.dispatchEvent(e)
													},
													ajaxHandler: function(t) {
														var n = this,
															i = document.querySelector(".js-drift-leaderboard-reloaded");
														$.get(t, function(e) {
															e && (i.parentNode.removeChild(i), n.elem.driftLeaderBoardWrap.insertAdjacentHTML("beforeend", e))
														}).always(function() {
															e.dependencies(), e.actionHandler()
														})
													},
													actionHandler: function() {
														var e = this,
															t = document.querySelector(".btn-leaderboard"),
															n = document.querySelector(".js-drift-leaderboard-reloaded");
														t.addEventListener("click", function() {
															var i = t.dataset.url;
															t.parentNode.removeChild(t), n.insertAdjacentHTML("beforeend", e.createLoader()), e.ajaxHandler(i)
														})
													},
													init: function() {
														this.elem.btnLeaderBoard && this.actionHandler()
													}
												};
												e.init()
											};
											e(), document.addEventListener("driftLeaderBoardAction", e)
										}(),
										function() {
											! function() {
												var e = document.querySelector(".js-competition-info-mobile-title"),
													t = document.querySelector(".js-icon-plus-competition-info"),
													n = document.querySelector(".js-competition-info-mobile-content"),
													i = function() {
														n.classList.toggle("is-active"), n.classList.contains("is-active") ? (t.classList.remove("icon-plus"), t.classList.add("icon-minus")) : (t.classList.remove("icon-minus"), t.classList.add("icon-plus"))
													};
												e && e.addEventListener("click", i)
											}()
										}(),
										function() {
											var e = function() {
												var e = document.getElementById("drift-pie"),
													t = document.querySelector(".drift-circle");
												if (e) {
													var n = e.dataset.pie,
														i = JSON.parse(n),
														s = function() {
															return 100 / Object.getOwnPropertyNames(i).length
														},
														r = function() {
															var t = new Image(36, 14);
															t.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAOCAIAAADIVSmfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUzMEEwOTI1NDg3QzExRThBMDRGOTU2OENCM0VGOTA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjUzMEEwOTI2NDg3QzExRThBMDRGOTU2OENCM0VGOTA3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTMwQTA5MjM0ODdDMTFFOEEwNEY5NTY4Q0IzRUY5MDciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTMwQTA5MjQ0ODdDMTFFOEEwNEY5NTY4Q0IzRUY5MDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6afbyCAAAAN0lEQVR42mL8//8/AwyICPLD2W/ef6S6OBMDHQFdLWOhddAhiw/fYKSrZYyjSX80n43MfAYQYACjQjaBG8nn4wAAAABJRU5ErkJggg==", t.style.position = "absolute", t.style.top = "50%", t.style.left = "25px", t.style.zIndex = "10", e.parentNode.insertBefore(t, e.nextSibling)
														};
													setTimeout(function() {
														r()
													}, 1e3);
													var o = function() {
															var e = t.querySelector(".circle-round");
															e && e.parentNode.removeChild(e)
														},
														a = function() {
															var e = t.querySelector(".circle-round"),
																n = function(t) {
																	e && !helpers.getParent(t.target, ".drift-circle") && (o(), e = null)
																};
															document.body.addEventListener("click", n)
														},
														l = function(e) {
															o();
															for (var n in i)
																for (var s = 0; s < i[n].length; s++)
																	if (i[n][s].number === e) {
																		var r = "\n                                <div class='circle-round'>\n                                    <div class='circle-round-content'>\n                                        <div class='circle-round-content__title'>\n                                            <span class='circle-round-content__title-round'>" + i[n][s].titleNumber + "</span> " + i[n][s].titleText + "\n                                        </div>\n                                \n                                        <div class='circle-round-info'>\n                                            <div class='circle-round-item'>\n                                                <div class='circle-round-item__value'>" + i[n][s].coefficient.val + "</div>\n                                                <div class='circle-round-item__title'>" + i[n][s].coefficient.title + "</div>\n                                            </div>\n                                            <div class='circle-round-item'>\n                                                <div class='circle-round-item__value'>" + i[n][s].ranges.val + "</div>\n                                                <div class='circle-round-item__title'>" + i[n][s].ranges.title + "</div>\n                                            </div>\n                                        </div>\n                                \n                                        <div class='circle-round-btn-box'>\n                                            <a href='" + i[n][s].url + "' class='btn btn-gold btn-circle-round'>" + i[n][s].readmore + "</a>\n                                        </div>\n                                    </div>\n                                </div>";
																		t.insertAdjacentHTML("beforeend", r)
																	}
															a()
														};
													Highcharts.chart("drift-pie", {
														chart: {
															plotBackgroundColor: null,
															plotBorderWidth: 0,
															plotShadow: !1,
															backgroundColor: "#302d28",
															width: 325,
															height: 325
														},
														title: {
															text: "",
															align: "center",
															verticalAlign: "middle",
															y: 40
														},
														tooltip: {
															enabled: !1
														},
														plotOptions: {
															pie: {
																dataLabels: {
																	enabled: !0,
																	distance: -20,
																	color: "#302d28",
																	style: {
																		fontWeight: "bold",
																		fontSize: "14px",
																		textOutline: "none",
																		fontFamily: "Noto Sans"
																	}
																},
																colors: function() {
																	var e = [];
																	for (var t in i)
																		for (var n = 0; n < i[t].length; n++) e.push(i[t][n].colorPie);
																	return e
																}(),
																borderWidth: "7px",
																borderColor: "#302d28",
																size: "100%",
																startAngle: -90,
																endAngle: 360,
																center: ["50%", "50%"]
															},
															series: {
																states: {
																	hover: {}
																},
																point: {
																	events: {
																		click: function() {
																			l(this.options.name)
																		}
																	}
																}
															}
														},
														series: [{
															type: "pie",
															innerSize: "72%",
															data: function() {
																var e = [];
																for (var t in i)
																	for (var n = 0; n < i[t].length; n++) e.push([i[t][n].number, s()]);
																return e
															}(),
															zIndex: 1
														}],
														credits: {
															enabled: !1
														}
													}), setTimeout(function() {
														r()
													}, 1e3)
												}
											};
											e(), document.addEventListener("driftPieCharts", e)
										}(),
										function() {
											var e = !0,
												t = !1,
												n = 1,
												i = !1,
												s = "",
												r = "";
											if (!document.querySelector(".js-drift-page-step")) return !1;
											var o = function() {
													return "\n                <div class='preloader-wrapp preloader-wrapp__bonus-games'>\n                    <div class='preloader-box'></div>\n                </div>\n            "
												},
												a = function() {
													return "\n                <div class='preloader-wrapp preloader-wrapp__bottom-page'>\n                    <div class='preloader-box'></div>\n                </div>\n            "
												},
												l = function(n, s, r) {
													var l = new XMLHttpRequest,
														c = s.querySelector(".drift-game-block"),
														d = s.querySelector(".drift-involved-game-list"),
														u = (document.querySelector(".js-lazyload-qualifying"), document.querySelector(".drift-involved-game-list")),
														h = null,
														p = null;
													l.open("GET", n, !0), l.send(), e ? (c.insertAdjacentHTML("beforeend", o()), h = document.querySelector(".preloader-wrapp")) : (c.insertAdjacentHTML("beforeend", a()), p = document.querySelector(".preloader-wrapp")), l.addEventListener("readystatechange", function() {
														if (4 == l.readyState)
															if (200 == l.status) {
																e ? (e = !1, h.parentNode.removeChild(h), u.classList.add("lazyload-shadow")) : (p.parentNode.removeChild(p), i = !1, "" === l.responseText && (t = !0, u.classList.remove("lazyload-shadow"))), d.insertAdjacentHTML("beforeend", l.responseText);
																var n = new Event("gameItemBehavior");
																document.dispatchEvent(n)
															} else console.log(l.status + ": " + l.statusText)
													})
												};
											! function() {
												window.addEventListener("scroll", function() {
													if (!e) {
														var o = document.querySelector(".js-lazyload-qualifying");
														if (helpers.detectScrollBottomByElement(o) && !t && !i) {
															n++;
															var a = (s + "?page=" + n).replace(/\s+/g, "");
															l(a, r), i = !0
														}
													}
												})
											}(),
											function() {
												for (var e = document.querySelectorAll(".js-btn-drift-read-more-lazyload"), t = 0; t < e.length; t++) ! function(t) {
													var i = e[t];
													i.addEventListener("click", function() {
														s = i.dataset.url, r = helpers.getParent(i, ".drift-round-game-wrapp"), i.classList.add("is-hidden"), n++, l((s + "?page=" + n).replace(/\s+/g, ""), r, i)
													})
												}(t)
											}();
											! function() {
												var e = document.querySelector(".js-drift-page-step");
												if (e) {
													var t = e.querySelector(".tooltip");
													if (t) {
														var n = t.querySelector(".tooltip__content"),
															i = function() {
																helpers.screenSize().screenX <= 410 ? (n.classList.remove("tooltip-right"), n.classList.add("tooltip-left")) : (n.classList.remove("tooltip-left"), n.classList.add("tooltip-right"))
															};
														i(), window.addEventListener("resize", function() {
															i()
														})
													}
												}
											}()
										}(),
										function() {
											var e = document.querySelector(".js-drift-winners-read-more");
											if (e) {
												var t = document.querySelector(".js-drift-winners-tbl"),
													n = e.dataset.driftsUrl,
													i = t.parentNode.parentNode,
													s = function() {
														return "\n                <div class='preloader-wrapp preloader-wrapp__drift-tbl'>\n                    <div class='preloader-box'></div>\n                </div>\n            "
													};
												! function() {
													e.addEventListener("click", function() {
														i.insertAdjacentHTML("beforeend", s()), e.parentNode.removeChild(e), $.get(n, function(e) {
															e && t.insertAdjacentHTML("beforeend", e)
														}).always(function() {
															var e = document.querySelector(".preloader-wrapp");
															e.parentNode.removeChild(e)
														})
													})
												}()
											}
										}(),
										function() {
											var e = document.querySelector(".drift-table");
											if (e) {
												var t = e.dataset.winnersUrl,
													n = document.querySelector(".drift-list"),
													i = function(e) {
														for (var t = 0; t < e.length; t++) {
															var n = e[t];
															n.parentNode.removeChild(n)
														}
													},
													s = function() {
														$.get(t, function(e) {
															if (e) {
																var t = document.querySelectorAll(".js-drift-list-grid-item");
																i(t), jcf.destroy(".jcf-drift-winners-scroll"), n.insertAdjacentHTML("beforeend", e)
															}
														}).always(function() {
															jcf.replaceAll();
															var t = e.querySelector(".jcf-scrollbar-slider"),
																n = e.querySelector(".drift-list-grid_title");
															t ? n.classList.add("add-scroll") : n.classList.contains("add-scroll") && n.classList.remove("add-scroll")
														})
													};
												setInterval(function() {
													s()
												}, 15e3)
											}
										}(),
										function() {
											var e = function() {
												var e = document.querySelector(".js-progressive-load-games"),
													t = document.querySelectorAll(".game-list__item");
												if (e) {
													var n = function(e) {
															for (var t = e.offsetTop, n = e.offsetLeft, i = e.offsetWidth, s = e.offsetHeight; e.offsetParent;) e = e.offsetParent, t += e.offsetTop, n += e.offsetLeft;
															return t < window.pageYOffset + window.innerHeight && n < window.pageXOffset + window.innerWidth && t + s > window.pageYOffset && n + i > window.pageXOffset
														},
														i = function() {
															for (var e = 0; e < t.length; e++)
																if (n(t[e]) && void 0 == t[e].dataset.prgsLoad) {
																	t[e].dataset.prgsLoad = !0;
																	var i = t[e].querySelector(".game-item__image"),
																		s = t[e].querySelector(".game-item__human");
																	i.setAttribute("src", i.dataset.src), s && s.setAttribute("src", s.dataset.src)
																}
														};
													i(), window.addEventListener("scroll", function() {
														return i()
													})
												}
											};
											window.addEventListener("load", function() {
												setTimeout(function() {
													e()
												}, 1e3)
											}), document.addEventListener("progressiveLoadListGame", e)
										}(),
										function() {
											if (document.body.classList.contains("user-auth")) {
												var e = document.querySelector(".header-tools"),
													t = document.querySelector(".header-user-name"),
													n = document.querySelector(".header-user-general"),
													i = function() {
														helpers.screenSize().screenX < 680 ? window.scrollY > 100 ? (e.classList.add("is-hidden"), t.classList.add("is-hidden"), n.classList.add("without-margin")) : (e.classList.remove("is-hidden"), t.classList.remove("is-hidden"), n.classList.remove("without-margin")) : e.classList.contains("is-hidden") && t.classList.contains("is-hidden") && n.classList.contains("without-margin") && (e.classList.remove("is-hidden"), t.classList.remove("is-hidden"), n.classList.remove("without-margin"))
													};
												window.addEventListener("scroll", function() {
													return i()
												}), window.addEventListener("resize", function() {
													return i()
												})
											}
										}(),
										function() {
											var e = document.querySelector(".header");
											if (e) {
												! function() {
													window.addEventListener("scroll", function() {
														var t = window.pageYOffset || document.documentElement.scrollTop;
														t > 250 && e.classList.add("header-fixed"), t < 1 && e.classList.contains("header-fixed") && e.classList.remove("header-fixed")
													})
												}()
											}
										}(),
										function() {
											var e = document.querySelector(".js-cash-bonus-wrapper"),
												t = document.querySelector(".js-cash-tabs");
											if (e) {
												var n = function() {
													t && helpers.screenSize().screenX > 768 ? e.style.paddingTop = t.offsetHeight + "px" : e.style.paddingTop = 0
												};
												n(), window.addEventListener("resize", function() {
													n()
												})
											}
										}(),
										function() {
											$(".slider-general-mobile").owlCarousel({
												dots: !0,
												video: !0,
												startPosition: 0,
												items: 1,
												loop: !0,
												margin: 10,
												autoplay: !0,
												autoplayTimeout: 5e3,
												autoplayHoverPause: !1,
												nav: !1,
												lazyLoad: !0
											})
										}(),
										function() {
											var e = document.querySelector(".inpt-verification-upload"),
												t = document.querySelector(".verification-upload-first-screen"),
												n = document.querySelector(".verification-status-block"),
												i = document.querySelector(".verification-upload-btn-box"),
												s = document.querySelector(".btn-verification-fake-send"),
												r = document.querySelector(".upload-success"),
												o = document.querySelector(".btn-back-default");
											url = "/verification/upload";
											var a = !0;
											if (e) {
												var l = void 0,
													c = function(e, t) {
														var n = void 0,
															i = void 0;
														return "" !== t ? (n = app.trans["verification.error.exceeded_filesize_limit"], i = "") : (n = "", i = "is-animated"), '\n            <div class="verification-load">\n                <div class="verification-load__title">' + e + '</div>\n                <div class="verification-load-progress">\n                    <div class="verification-load-progress__line ' + i + '"></div>\n                </div>\n                <span class="error">' + n + "</span>\n            </div>\n        "
													},
													d = function() {
														i.classList.add("verification-upload-btn-box_load-more"), s.classList.remove("is-hidden"), a = !1
													},
													u = function() {
														s.addEventListener("click", function() {
															t.classList.add("is-hidden"), r.classList.remove("is-hidden"), n.innerHTML = ""
														})
													},
													h = function() {
														o.addEventListener("click", function() {
															r.classList.add("is-hidden"), t.classList.remove("is-hidden"), s.classList.add("is-hidden"), i.classList.remove("verification-upload-btn-box_load-more"), a = !0
														})
													};
												e.addEventListener("change", function() {
													var t = e.files[0],
														i = t.size / 1024 / 1024;
													if (!1 !== /\.(jpe?g|png|gif|pdf)$/i.test(t.name)) {
														! function() {
															function e() {
																for (var e = JSON.parse(s.responseText), t = 0; t < o.length; t++) {
																	var n = o[t],
																		i = n.querySelector(".verification-load-progress__line");
																	if (void 0 == i.dataset.loaded && (i.dataset.loaded = "true", "ok" != e.result && "error" != e.result || i.classList.remove("is-animated"), "error" == e.result)) {
																		var r = '\n                                <div class="valid-verification-status">\n                                    <svg class="icon-valid-verification-status">\n                                        <use xlink:href="#icon-attention-warning"></use>\n                                    </svg>\n                                    ' + e.payload.error + "\n                                </div>\n                            ";
																		i.classList.add("is-error"), n.insertAdjacentHTML("beforeend", r)
																	}
																}
															}
															if (i > 10) return l = i, void n.insertAdjacentHTML("beforeend", c(t.name, l));
															l = "", n.insertAdjacentHTML("beforeend", c(t.name, l)), u(), h(), 1 == a && d();
															var s = new XMLHttpRequest,
																r = new FormData;
															r.append("file", t), s.addEventListener("load", e);
															var o = document.querySelectorAll(".verification-load");
															s.open("POST", url, !0), s.send(r)
														}()
													}
												})
											}
										}(),
										function() {
											var e = document.querySelector(".verification-info-block"),
												t = document.querySelector(".js-read-more-verification-status"),
												n = document.querySelector(".verification-info-list");
											if (e && t) {
												var i = function() {
													for (var e = n.firstChild; e;) n.removeChild(e), e = n.firstChild
												};
												t.addEventListener("click", function() {
													t.classList.add("is-active", "btn-preloader"), n.style.opacity = "0.3";
													var e = new XMLHttpRequest,
														s = t.dataset.url;
													e.open("GET", s, !0), e.send(), e.onreadystatechange = function() {
														4 == e.readyState && (200 != e.status ? (t.classList.remove("is-active", "btn-preloader"), n.style.opacity = "1") : (t.parentNode.removeChild(t), n.style.opacity = "1", i(), n.insertAdjacentHTML("beforeend", e.responseText)))
													}
												})
											}
										}(),
										function() {
											var e = function() {
												if (document.querySelector(".js-game-drift-counter")) {
													var e = function(e, t, n) {};
													$(".js-game-drift-counter").TimeCircles({
														animation: "smooth",
														bg_width: 1,
														fg_width: .00666666666666667,
														circle_bg_color: "#27512b",
														text_size: .13,
														count_past_zero: !1,
														time: {
															Days: {
																text: app.trans["common_tournament.drift-races.subtournament.timer.days"],
																color: "#40b549",
																show: !0
															},
															Hours: {
																text: app.trans["common_tournament.drift-races.subtournament.timer.hour"],
																color: "#40b549",
																show: !0
															},
															Minutes: {
																text: app.trans["common_tournament.drift-races.subtournament.timer.min"],
																color: "#40b549",
																show: !0
															},
															Seconds: {
																text: app.trans["common_tournament.drift-races.subtournament.timer.sec"],
																color: "#40b549",
																show: !1
															}
														}
													}).addListener(e)
												}
											};
											e(), document.addEventListener("drift-timer-table-event", e)
										}(),
										function() {
											var e = function() {
												var e = document.querySelector(".drift-table");
												if (e) {
													var t = e.dataset.winnersUrl,
														n = document.querySelector(".drift-list"),
														i = function(e) {
															for (var t = 0; t < e.length; t++) {
																var n = e[t];
																n.parentNode.removeChild(n)
															}
														},
														s = function() {
															$.get(t, function(e) {
																if (e) {
																	var t = document.querySelectorAll(".js-drift-list-grid-item");
																	i(t), jcf.destroy(".jcf-drift-winners-scroll"), n.insertAdjacentHTML("beforeend", e)
																}
															}).always(function() {
																jcf.replace(".jcf-drift-winners-scroll");
																var t = e.querySelector(".jcf-scrollbar-slider"),
																	n = e.querySelector(".drift-list-grid_title");
																t ? n.classList.add("add-scroll") : n.classList.contains("add-scroll") && n.classList.remove("add-scroll")
															})
														};
													setInterval(function() {
														s()
													}, 15e3)
												}
											};
											e(), document.addEventListener("drift-winners-table-event", e)
										}(), $(function() {
											var e = document.querySelector(".jcf-bonus-scroll");
											document.addEventListener("form.refresh", function() {
												return jcf.replaceAll()
											}), document.addEventListener("form.effect.refresh", function() {
												return jcf.replaceAll()
											}), e && helpers.screenSize().screenX < 768 ? jcf.destroy(".jcf-bonus-scroll") : jcf.replaceAll()
										}),
										function() {
											var e = document.querySelectorAll(".js-checkbox-slide");
											! function() {
												for (var t = 0; t < e.length; t++) ! function(t) {
													e[t].addEventListener("click", function() {
														var n = e[t];
														n.classList.toggle("is-active"), n.classList.contains("is-active") ? n.dataset.checked = "true" : n.dataset.checked = "false"
													})
												}(t)
											}()
										}();