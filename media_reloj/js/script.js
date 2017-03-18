if (!window.console)
    console = {log: function () {}};

if (window.oc == undefined)
{
    window.oc = {};
}
//var oc = window.oc;
if (window.oc.remainingTimeAtStartTime === undefined)
{
    window.oc.remainingTimeAtStartTime = 17694762;
}
// http://jquip.ubixar.com/
window.$ = window.jquip = function () {
    function U(a, b) {
        var c;
        for (var e = 0, g = V.length; e < g; e++)
            if (V[e].apply(this, arguments))
                return this;
        return a ? bD(a) ? (h ? a() : f.push(a), this) : bE(a) ? this.make(a) : a.nodeType || bG(a) ? this.make([a]) : a == "body" && !b && d.body ? (this.context = a.context, this[0] = d.body, this.length = 1, this.selector = a, this) : a.selector !== undefined ? (this.context = a.context, this.selector = a.selector, this.make(a)) : (a = bB(a) && a.charAt(0) === "<" ? (c = s.exec(a)) ? (a = [d.createElement(c[1])]) && bI(b) ? _.fn.attr.call(a, b) && a : a : bM(a).childNodes : bi(a, b), this.make(a)) : this
    }
    function _(a, b) {
        return new U(a, b)
    }
    function ba(a) {
        return!a || !a.parentNode || a.parentNode.nodeType == 11
    }
    function bb(a, b, c) {
        b = b || 0;
        if (bD(b))
            return bv(a, function (a, d) {
                return!!b.call(a, d, a) === c
            });
        if (b.nodeType)
            return bv(a, function (a) {
                return a === b === c
            });
        if (bB(b)) {
            var d = b.charAt(0) == ":" && _.Expr[b.substring(1)];
            return bv(a, function (a) {
                return d ? d(a) : a.parentNode && bq(bi(b, a.parentNode), a) >= 0
            })
        }
        return bv(a, function (a) {
            return bq(b, a) >= 0 === c
        })
    }
    function bc(a, b, c) {
        var d = _.data(a, "_J");
        return typeof c == "undefined" ? d && Y[d] && Y[d][b] : (d || _.data(a, "_J", d = ++Y.id), (Y[d] || (Y[d] = {}))[b] = c)
    }
    function bd(a) {
        if (!Z[a]) {
            var b = _("<" + a + ">").appendTo(d.body), c = _.css && _.css(b[0], "display") || b[0].style.display;
            b.remove(), Z[a] = c
        }
        return Z[a]
    }
    function be(a, b) {
        a.length = b && b.length || 0;
        if (a.length == 0)
            return a;
        for (var c = 0, d = b.length; c < d; c++)
            a[c] = b[c];
        return a
    }
    function bf(a, b) {
        var b = " " + b + " ";
        for (var c = 0, d = a.length; c < d; c++)
            if (bg(a[c], b))
                return!0;
        return!1
    }
    function bg(a, b) {
        return a.nodeType === 1 && (" " + a.className + " ").replace(n, " ").indexOf(b) > -1
    }
    function bh(a, b, c) {
        b = b || d, c = c || [], b.nodeType == 1 && a(b) && c.push(b);
        var e = b.childNodes;
        for (var f = 0, g = e.length; f < g; f++) {
            var h = e[f];
            h.nodeType == 1 && bh(a, h, c)
        }
        return c
    }
    function bi(a, b, c) {
        if (a && bB(a)) {
            b instanceof _ && (b = b[0]), b = b || d, c = c || _.query;
            var e = a.charAt(0), f = a.substring(1), g = I.test(f), h;
            try {
                return g ? O.call(c(a, b)) : g ? O.call(c(a, b)) : e == "#" ? (h = d.getElementById(f)) ? [h] : J : bL(e == "." ? b.getElementsByClassName ? b.getElementsByClassName(f) : c(a, b) : b.getElementsByTagName(a))
            } catch (i) {
                bl(i)
            }
        }
        return a.nodeType == 1 || a.nodeType == 9 ? [a] : J
    }
    function bk(a, b, c) {
        var f = d.head || d.getElementsByTagName("head")[0] || e, g = d.createElement("script"), h;
        c && (g.async = "async"), g.onreadystatechange = function () {
            if (!(h = g.readyState) || h == "loaded" || h == "complete")
                g.onload = g.onreadystatechange = null, f && g.parentNode && f.removeChild(g), g = undefined, b && b()
        }, g.onload = b, g.src = a, f.insertBefore(g, f.firstChild)
    }
    function bl(b) {
        a.console && a.console.warn(arguments)
    }
    function bm(a, b, c) {
        if (a == null)
            return;
        if (R && a.forEach === R)
            a.forEach(b, c);
        else if (a.length === +a.length) {
            for (var d = 0, e = a.length; d < e; d++)
                if (d in a && b.call(c, a[d], d, a) === K)
                    return
        } else
            for (var f in a)
                if (N.call(a, f) && b.call(c, a[f], f, a) === K)
                    return
    }
    function bn(a, b) {
        return a && a.nodeName === "INPUT" && a.type === "text" && b === "value" ? a.value : a ? a.getAttribute(b) || (b in a ? a[b] : undefined) : null
    }
    function bp(a, b) {
        var c = [], d, e, f, g, h;
        for (d = 0, f = bo.length; d < f; d++)
            if (h = bo[d].exec(a))
                break;
        if (d < bo.length)
            for (e = 0; g = b[e]; e++)
                (d == 0 && h[1] == g.id || d == 1 && bz(h[1], g.tagName) || d == 2 && bg(g, h[1]) || d == 3 && h[2] == bn(g, h[1])) && c.push(g);
        else
            bl(a + " not supported");
        return c
    }
    function bq(a, b) {
        if (a == null)
            return-1;
        var c, d;
        if (T && a.indexOf === T)
            return a.indexOf(b);
        for (c = 0, d = a.length; c < d; c++)
            if (a[c] === b)
                return c;
        return-1
    }
    function br(a, b, c) {
        var d = [];
        return a == null ? d : S && a.filter === S ? a.filter(b, c) : (bm(a, function (a, e, f) {
            b.call(c, a, e, f) && (d[d.length] = a)
        }), d)
    }
    function bs(a, b, c) {
        var d = [], e = a[b];
        while (e && e.nodeType !== 9 && (c === undefined || e.nodeType !== 1 || !_(e).is(c)))
            e.nodeType === 1 && d.push(e), e = e[b];
        return d
    }
    function bt(a, b, c) {
        b = b || 1;
        var d = 0;
        for (; a; a = a[c])
            if (a.nodeType === 1 && ++d === b)
                break;
        return a
    }
    function bu(a, b) {
        var c = [];
        for (; a; a = a.nextSibling)
            a.nodeType === 1 && a !== b && c.push(a);
        return c
    }
    function bv(a, b, c) {
        var d = [], e;
        c = !!c;
        for (var f = 0, g = a.length; f < g; f++)
            e = !!b(a[f], f), c !== e && d.push(a[f]);
        return d
    }
    function bw(a, b, c) {
        var d, e, f = [], g = 0, h = a.length, i = a instanceof _ || typeof h == "number" && (h > 0 && a[0] && a[h - 1] || h === 0 || bE(a));
        if (i)
            for (; g < h; g++)
                d = b(a[g], g, c), d != null && (f[f.length] = d);
        else
            for (e in a)
                d = b(a[e], e, c), d != null && (f[f.length] = d);
        return f.concat.apply([], f)
    }
    function bx(a, b, c) {
        if (!a)
            return{};
        if (b && c)
            return a.setAttribute(b, c), null;
        var d = {};
        return bm(by(a), function (a, b) {
            if (b.indexOf("data-") !== 0 || !a)
                return;
            d[b.substr("data-".length)] = a
        }), bB(b) ? d[b] : d
    }
    function by(a) {
        var b = {};
        for (var c = 0, d = a.attributes, e = d.length; c < e; c++)
            b[d.item(c).nodeName] = d.item(c).nodeValue;
        return b
    }
    function bz(a, b) {
        return!a || !b ? a == b : a.toLowerCase() === b.toLowerCase()
    }
    function bA(a) {
        return a == null ? String(a) : E[D.call(a)] || "object"
    }
    function bB(a) {
        return typeof a == "string"
    }
    function bC(a) {
        return typeof a == "object"
    }
    function bD(a) {
        return typeof a == "function" || bA(a) === "function"
    }
    function bE(a) {
        return bA(a) === "array"
    }
    function bF(a) {
        return!bB(a) && typeof a.length == "number"
    }
    function bG(a) {
        return a && typeof a == "object" && "setInterval"in a
    }
    function bH(a) {
        return a == null || !p.test(a) || isNaN(a)
    }
    function bI(a) {
        if (!a || bA(a) !== "object" || a.nodeType || bG(a))
            return!1;
        try {
            if (a.constructor && !N.call(a, "constructor") && !N.call(a.constructor.prototype, "isPrototypeOf"))
                return!1
        } catch (b) {
            return!1
        }
        var c;
        for (c in a)
            ;
        return c === undefined || N.call(a, c)
    }
    function bJ(a, b) {
        var c = a.length, d = 0;
        if (typeof b.length == "number")
            for (var e = b.length; d < e; d++)
                a[c++] = b[d];
        else
            while (b[d] !== undefined)
                a[c++] = b[d++];
        return a.length = c, a
    }
    function bK() {
        var a, b, c, d, e, f, g = arguments, h = g[0] || {}, i = 1, j = g.length, k = !1;
        typeof h == "boolean" && (k = h, h = g[1] || {}, i = 2), typeof h != "object" && !bD(h) && (h = {}), j === i && (h = this, --i);
        for (; i < j; i++)
            if ((a = g[i]) != null)
                for (b in a) {
                    c = h[b], d = a[b];
                    if (h === d)
                        continue;
                    k && d && (bI(d) || (e = bE(d))) ? (e ? (e = !1, f = c && bE(c) ? c : []) : f = c && bI(c) ? c : {}, h[b] = bK(k, f, d)) : d !== undefined && (h[b] = d)
                }
        return h
    }
    function bL(a, b) {
        var c = b || [];
        if (a != null) {
            var d = bA(a);
            a.length == null || d == "string" || d == "function" || d === "regexp" || bG(a) ? P.call(c, a) : bJ(c, a)
        }
        return c
    }
    function bM(a, b, c) {
        b = b || d || b.ownerDocument || b[0] && b[0].ownerDocument || d, c = c || b.createDocumentFragment();
        if (bF(a))
            return bO(a, b, c) && c;
        var e = bN(a);
        while (e.firstChild)
            c.appendChild(e.firstChild);
        return c
    }
    function bN(a, b) {
        var c = (b || d).createElement("div"), e = (m.exec(a) || ["", ""])[1].toLowerCase(), f = H[e] || H._default, g = f[0];
        c.innerHTML = f[1] + a + f[2];
        while (g--)
            c = c.lastChild;
        return c
    }
    function bO(a, b, c) {
        var d = [], e, f;
        for (e = 0; (f = a[e]) != null; e++)
            bB(f) && (f = bN(f, b)), f.nodeType ? d.push(f) : d = bJ(d, f);
        if (c)
            for (e = 0; e < d.length; e++)
                d[e].nodeType && c.appendChild(d[e]);
        return d
    }
    function bQ(a) {
        if (B) {
            F = G, a.sort(B);
            if (F)
                for (var b = 1; b < a.length; b++)
                    a[b] === a[b - 1] && a.splice(b--, 1)
        }
        return a
    }
    function bR() {
        if (!d.body)
            return null;
        var a = d.createElement("div");
        d.body.appendChild(a), a.style.width = "20px", a.style.padding = "10px";
        var b = a.offsetWidth;
        return d.body.removeChild(a), b == 40
    }
    function bS(a, b) {
        g.push({url: a, cb: b})
    }
    function bT() {
        bm(f, function (a) {
            a()
        }), h = !0
    }
    var a = window, b = "https://cdnjs.cloudflare.com/ajax/libs/sizzle/1.4.4/sizzle.min.js", c = function () {
        return a.Sizzle || a.qwery
    }, d = document, e = d.documentElement, f = [], g = [], h, i = /Until$/, j = /,/, k = /^(?:parents|prevUntil|prevAll)/, m = /<([\w:]+)/, n = /[\n\t\r]/g, o = /\s+/, p = /\d/, q = /\S/, r = /\r\n/g, s = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, t = /\r?\n/g, u = /^(?:select|textarea)/i, v = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, w = String.prototype.trim, x, y = /^\s+/, z = /\s+$/, A, B, C = {children: !0, contents: !0, next: !0, prev: !0}, D = Object.prototype.toString, E = {}, F = !1, G = !0, H = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""]}, I = /[,\s.#\[>+]/, J = [], K = {}, L = Array.prototype, M = Object.prototype, N = M.hasOwnProperty, O = L.slice, P = L.push, Q = L.indexOf, R = L.forEach, S = L.filter, T = L.indexOf;
    q.test(" ") && (y = /^[\s\xA0]+/, z = /[\s\xA0]+$/);
    var V = [], W = {}, X = 0, Y = {_id: 0}, Z = {}, $;
    $ = U.prototype = _.prototype = _.fn = {constructor: _, selector: "", length: 0, dm: function (a, b, c) {
            var d = a[0], e, f, g, h, i;
            if (d && this[0]) {
                if (!(f = d.nodeType === 3 && d)) {
                    e = d && d.parentNode, f = e && e.nodeType === 11 && e.childNodes.length === this.length ? e : bM(d), g = f.firstChild, f.childNodes.length === 1 && (f = g);
                    if (!g)
                        return this
                }
                for (i = 0, h = this.length; i < h; i++)
                    c.call(this[i], f)
            }
            return this
        }, ps: function (a, b, c) {
            var d = this.constructor();
            return bE(a) ? P.apply(d, a) : bJ(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
        }}, $.make = function (a) {
        return be(this, a), this
    }, $.toArray = function () {
        return O.call(this, 0)
    }, $.get = function (a) {
        return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
    }, $.add = function (a, b) {
        var c = typeof a == "string" ? _(a, b) : bL(a && a.nodeType ? [a] : a), d = bJ(this.get(), c);
        return this.ps(ba(c[0]) || ba(d[0]) ? d : bQ(d))
    }, $.each = function (a) {
        if (!bD(a))
            return this;
        for (var b = 0, c = this.length; b < c; b++)
            a.call(this[b], b, this[b]);
        return this
    }, $.attr = function (a, b) {
        var c = this[0];
        return bB(a) && b === undefined ? bn(c, a) : this.each(function (c) {
            var d = this.nodeType;
            if (d !== 3 && d !== 8 && d !== 2)
                if (bC(a))
                    for (var e in a)
                        b === null ? this.removeAttribute(a) : this.setAttribute(e, a[e]);
                else
                    this.setAttribute(a, bD(b) ? b.call(this, c, this.getAttribute(a)) : b)
        })
    }, $.removeAttr = function (a) {
        return this.each(function () {
            this.removeAttribute(a)
        })
    }, $.data = function (a, b) {
        return bx(this[0], a, b)
    }, $.append = function () {
        return this.dm(arguments, !0, function (a) {
            this.nodeType === 1 && this.appendChild(a)
        })
    }, $.prepend = function () {
        return this.dm(arguments, !0, function (a) {
            this.nodeType === 1 && this.insertBefore(a, this.firstChild)
        })
    }, $.before = function () {
        return this.dm(arguments, !1, function (a) {
            this.parentNode.insertBefore(a, this)
        })
    }, $.after = function () {
        return this[0] && this[0].parentNode ? this.dm(arguments, !1, function (a) {
            this.parentNode.insertBefore(a, this.nextSibling)
        }) : this
    }, $.hide = function () {
        return this.each(function () {
            bc(this, "display", this.style.display), this.style.display = "none"
        })
    }, $.show = function () {
        return this.each(function () {
            this.style.display = bc(this, "display") || bd(this.tagName)
        })
    }, $.toggle = function () {
        return this.each(function () {
            this.style.display = _.Expr.hidden(this) ? bc(this, "display") || bd(this.tagName) : (bc(this, "display", this.style.display), "none")
        })
    }, $.eq = function (a) {
        return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
    }, $.first = function () {
        return this.eq(0)
    }, $.last = function () {
        return this.eq(-1)
    }, $.slice = function () {
        return this.ps(O.apply(this, arguments), "slice", O.call(arguments).join(","))
    }, $.map = function (a) {
        return this.ps(bw(this, function (b, c) {
            return a.call(b, c, b)
        }))
    }, $.find = function (a) {
        var b = this, c, d;
        if (!bB(a))
            return _(a).filter(function () {
                for (c = 0, d = b.length; c < d; c++)
                    if (A(b[c], this))
                        return!0
            });
        var e = this.ps("", "find", a), f, g, h;
        for (c = 0, d = this.length; c < d; c++) {
            f = e.length, bJ(e, _(a, this[c]));
            if (c == 0)
                for (g = f; g < e.length; g++)
                    for (h = 0; h < f; h++)
                        if (e[h] === e[g]) {
                            e.splice(g--, 1);
                            break
                        }
        }
        return e
    }, $.not = function (a) {
        return this.ps(bb(this, a, !1), "not", a)
    }, $.filter = function (a) {
        return this.ps(bb(this, a, !0), "filter", a)
    }, $.indexOf = function (a) {
        return bq(this, a)
    }, $.is = function (a) {
        return this.length > 0 && _(this[0]).filter(a).length > 0
    }, $.remove = function () {
        for (var a = 0, b; (b = this[a]) != null; a++)
            b.parentNode && b.parentNode.removeChild(b);
        return this
    }, $.closest = function (a, b) {
        var c = [], d;
        for (d = 0, l = this.length; d < l; d++) {
            cur = this[d];
            while (cur) {
                if (bp(a, [cur]).length > 0) {
                    c.push(cur);
                    break
                }
                cur = cur.parentNode;
                if (!cur || !cur.ownerDocument || cur === b || cur.nodeType === 11)
                    break
            }
        }
        return c = c.length > 1 ? bQ(c) : c, this.ps(c, "closest", a)
    }, $.val = function (a) {
        return a == null ? this[0] && this[0].value || "" : this.each(function () {
            this.value = a
        })
    }, $.html = function (a) {
        return a == null ? this[0] && this[0].innerHTML || "" : this.each(function () {
            this.innerHTML = a
        })
    }, $.text = function (a) {
        var b = this[0], c;
        return typeof a == "undefined" ? b && (c = b.nodeType) ? c === 1 || c === 9 ? typeof b.textContent == "string" ? b.textContent : b.innerText.replace(r, "") : c === 3 || c === 4 ? b.nodeValue : null : null : this.empty().append((b && b.ownerDocument || d).createTextNode(a))
    }, $.empty = function () {
        for (var a = 0, b; (b = this[a]) != null; a++)
            while (b.firstChild)
                b.removeChild(b.firstChild);
        return this
    }, $.addClass = function (a) {
        var b, c, d, e, f, g, h;
        if (bD(a))
            return this.each(function (b) {
                _(this).addClass(a.call(this, b, this.className))
            });
        if (a && bB(a)) {
            b = a.split(o);
            for (c = 0, d = this.length; c < d; c++) {
                e = this[c];
                if (e && e.nodeType === 1)
                    if (!e.className && b.length === 1)
                        e.className = a;
                    else {
                        f = " " + e.className + " ";
                        for (g = 0, h = b.length; g < h; g++)
                            ~f.indexOf(" " + b[g] + " ") || (f += b[g] + " ");
                        e.className = x(f)
                    }
            }
        }
        return this
    }, $.removeClass = function (a) {
        var b, c, d, e, f, g, h;
        if (bD(a))
            return this.each(function (b) {
                _(this).removeClass(a.call(this, b, this.className))
            });
        if (a && bB(a) || a === undefined) {
            b = (a || "").split(o);
            for (c = 0, d = this.length; c < d; c++) {
                e = this[c];
                if (e.nodeType === 1 && e.className)
                    if (a) {
                        f = (" " + e.className + " ").replace(n, " ");
                        for (g = 0, h = b.length; g < h; g++)
                            f = f.replace(" " + b[g] + " ", " ");
                        e.className = x(f)
                    } else
                        e.className = ""
            }
        }
        return this
    }, $.hasClass = function (a) {
        return bf(this, a)
    }, $.fadeIn = function () {
        this.each(function () {
            _(this).show()
        })
    }, $.fadeOut = function () {
        this.each(function () {
            _(this).hide()
        })
    }, $.serializeArray = function () {
        return this.map(function () {
            return this.elements ? bL(this.elements) : this
        }).filter(function () {
            return this.name && !this.disabled && (this.checked || u.test(this.nodeName) || v.test(this.type))
        }).map(function (a, b) {
            var c = _(this).val();
            return c == null || bE(c) ? bw(c, function (a) {
                return{name: b.name, value: a.replace(t, "\r\n")}
            }) : {name: b.name, value: c.replace(t, "\r\n")}
        }).get()
    }, _.Expr = {hidden: function (a) {
            return a.offsetWidth === 0 || a.offsetHeight == 0 || (_.css && _.css(a, "display") || a.style.display) === "none"
        }, visible: function (a) {
            return!_.Expr.hidden(a)
        }}, _.hasClass = bf, _.walk = bh, _.$$ = bi, _.setQuery = function (a) {
        _.query = function (b, c) {
            return bi(b, c, a || function (a, b) {
                return b.querySelectorAll(a)
            })
        }
    };
    var bj = c();
    _.setQuery(bj || function (a, b) {
        return d.querySelectorAll ? bL((b || d).querySelectorAll(a)) : []
    }), _.loadScript = bk, _.each = function (a, b, c) {
        var d, e = 0, f = a.length, g = f === undefined || bD(a);
        if (c) {
            if (g) {
                for (d in a)
                    if (b.apply(a[d], c) === !1)
                        break
            } else
                for (; e < f; )
                    if (b.apply(a[e++], c) === !1)
                        break
        } else if (g) {
            for (d in a)
                if (b.call(a[d], d, a[d]) === !1)
                    break
        } else
            for (; e < f; )
                if (b.call(a[e], e, a[e++]) === !1)
                    break;
        return a
    }, _._each = bm;
    var bo = [/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/];
    _.filter = bp, _._indexOf = bq, _._defaults = function (a) {
        return bm(O.call(arguments, 1), function (b) {
            for (var c in b)
                a[c] == null && (a[c] = b[c])
        }), a
    }, _._filter = br, _.proxy = function (a, b) {
        if (typeof b == "string") {
            var c = a[b];
            b = a, a = c
        }
        if (bD(a)) {
            var d = O.call(arguments, 2), e = function () {
                return a.apply(b, d.concat(O.call(arguments)))
            };
            return e.guid = a.guid = a.guid || e.guid || X++, e
        }
    }, _.dir = bs, _.nth = bt, _.sibling = bu, _.grep = bv, _.map = bw, _.data = bx, _.attrs = by, _.eqSI = bz, _.trim = x = w ? function (a) {
        return a == null ? "" : w.call(a)
    } : function (a) {
        return a == null ? "" : a.toString().replace(y, "").replace(z, "")
    }, _.indexOf = _.inArray = function (a, b) {
        if (!b)
            return-1;
        if (Q)
            return Q.call(b, a);
        for (var c = 0, d = b.length; c < d; c++)
            if (b[c] === a)
                return c;
        return-1
    }, bm("Boolean Number String Function Array Date RegExp Object".split(" "), function (a) {
        return E["[object " + a + "]"] = a.toLowerCase(), this
    }), _.type = bA, _.isFunction = bD, _.isArray = Array.isArray || bE, _.isWindow = bG, _.isNaN = bH, _.merge = bJ, _.extend = _.fn.extend = bK, _.makeArray = bL, _.htmlFrag = bM;
    var bP = function (a, b, c) {
        if (a === b)
            return c;
        var d = a.nextSibling;
        while (d) {
            if (d === b)
                return-1;
            d = d.nextSibling
        }
        return 1
    };
    return A = _.contains = e.contains ? function (a, b) {
        return a !== b && (a.contains ? a.contains(b) : !0)
    } : function () {
        return!1
    }, B = e.compareDocumentPosition ? (A = function (a, b) {
        return!!(a.compareDocumentPosition(b) & 16)
    }) && function (a, b) {
        return a === b ? (F = !0, 0) : !a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(b) & 4 ? -1 : 1
    } : function (a, b) {
        if (a === b)
            return F = !0, 0;
        if (a.sourceIndex && b.sourceIndex)
            return a.sourceIndex - b.sourceIndex;
        var c, d, e = [], f = [], g = a.parentNode, h = b.parentNode, i = g;
        if (g === h)
            return bP(a, b);
        if (!g)
            return-1;
        if (!h)
            return 1;
        while (i)
            e.unshift(i), i = i.parentNode;
        i = h;
        while (i)
            f.unshift(i), i = i.parentNode;
        c = e.length, d = f.length;
        for (var j = 0; j < c && j < d; j++)
            if (e[j] !== f[j])
                return bP(e[j], f[j]);
        return j === c ? bP(a, f[j], -1) : bP(e[j], b, 1)
    }, _.unique = bQ, bm({parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        }, parents: function (a) {
            return bs(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return bs(a, "parentNode", c)
        }, next: function (a) {
            return bt(a, 2, "nextSibling")
        }, prev: function (a) {
            return bt(a, 2, "previousSibling")
        }, nextAll: function (a) {
            return bs(a, "nextSibling")
        }, prevAll: function (a) {
            return bs(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return bs(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return bs(a, "previousSibling", c)
        }, siblings: function (a) {
            return bu(a.parentNode.firstChild, a)
        }, children: function (a) {
            return bu(a.firstChild)
        }, contents: function (a) {
            return a.nodeName === "iframe" ? a.contentDocument || a.contentWindow["document "] : bL(a.childNodes)
        }}, function (a, b) {
        _.fn[b] = function (c, d) {
            var e = bw(this, a, c), f = O.call(arguments);
            return i.test(b) || (d = c), typeof d == "string" && (e = bp(d, e)), e = this.length > 1 && !C[b] ? bQ(e) : e, (this.length > 1 || j.test(d)) && k.test(b) && (e = e.reverse()), this.ps(e, b, f.join(","))
        }
    }), bm({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after"}, function (a, b) {
        _.fn[b] = function (c) {
            var d = [], e = _(c), f, g, h, i = this.length === 1 && this[0].parentNode;
            if (i && i.nodeType === 11 && i.childNodes.length === 1 && e.length === 1)
                return e[a](this[0]), this;
            for (f = 0, h = e.length; f < h; f++)
                g = (f > 0 ? this.clone(!0) : this).get(), _(e[f])[a](g), d = d.concat(g);
            return this.ps(d, b, e.selector)
        }
    }), function () {
        var a = document.createElement("div");
        a.style.display = "none", a.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        var b = a.getElementsByTagName("a")[0];
        _.support = {boxModel: null, opacity: /^0.55$/.test(b.style.opacity), cssFloat: !!b.style.cssFloat};
        var c = /(webkit)[ \/]([\w.]+)/, d = /(opera)(?:.*version)?[ \/]([\w.]+)/, e = /(msie) ([\w.]+)/, f = /(mozilla)(?:.*? rv:([\w.]+))?/, g = navigator.userAgent.toLowerCase(), h = c.exec(g) || d.exec(g) || e.exec(g) || g.indexOf("compatible") < 0 && f.exec(g) || [], i;
        i = _.browser = {version: h[2] || "0"}, i[h[1] || ""] = !0
    }(), _.scriptsLoaded = function (a) {
        bD(a) && f.push(a)
    }, _.loadAsync = bS, !bj && !d.querySelectorAll && bS(b, function () {
        _.setQuery(c())
    }), _.init = !1, _.onload = function () {
        if (!_.init)
            try {
                _.support.boxModel = bR();
                var a = 0;
                bm(g, function (b) {
                    a++, bk(b.url, function () {
                        try {
                            b.cb && b.cb()
                        } catch (c) {
                        }
                        --a || bT()
                    })
                }), _.init = !0, a || bT()
            } catch (b) {
                bl(b)
            }
    }, d.body && !_.init && setTimeout(_.onload, 1), _.hook = function (a) {
        V.push(a)
    }, _.plug = function (a, b) {
        var c = bB(a) ? a : a.name;
        b = bD(a) ? a : b;
        if (!bD(b))
            throw"Plugin fn required";
        c && b && (W[c] = b), b(_)
    }, _
}();
$.plug("css", function (a) {
    function r(b, c, d) {
        var e = c === "width" ? b.offsetWidth : b.offsetHeight, f = c === "width" ? l : m;
        return e > 0 ? (d !== "border" && a.each(f, function () {
            d || (e -= parseFloat(t(b, "padding" + this)) || 0), d === "margin" ? e += parseFloat(t(b, d + this)) || 0 : e -= parseFloat(t(b, "border" + this + "Width")) || 0
        }), e + "px") : ""
    }
    function s(b, c, d, e) {
        if (!b || b.nodeType === 3 || b.nodeType === 8 || !b.style)
            return;
        var f, g = v(c), h = b.style, i = a.cssHooks[g];
        c = a.cssProps[g] || g;
        if (d === undefined)
            return i && "get"in i && (f = i.get(b, !1, e)) !== undefined ? f : h[c];
        if (typeof d == "number" && isNaN(d) || d == null)
            return;
        typeof d == "number" && !a.cssNumber[g] && (d += "px");
        if (!i || !("set"in i) || (d = i.set(b, d)) !== undefined)
            try {
                h[c] = d
            } catch (j) {
            }
    }
    function t(b, c, d) {
        var e, f = v(c), g = a.cssHooks[f];
        c = a.cssProps[f] || f;
        if (g && "get"in g && (e = g.get(b, !0, d)) !== undefined)
            return e;
        if (n)
            return n(b, c, f)
    }
    function u(a, b, c) {
        var d = {}, e;
        for (var e in b)
            d[e] = a.style[e], a.style[e] = b[e];
        c.call(a);
        for (e in b)
            a.style[e] = d[e]
    }
    function v(a) {
        return a.replace(f, q)
    }
    function w(b, c, d, e, f, g) {
        var h = b.length;
        if (typeof c == "object") {
            for (var i in c)
                w(b, i, c[i], e, f, d);
            return b
        }
        if (d !== undefined) {
            e = !g && e && a.isFunction(d);
            for (var j = 0; j < h; j++)
                f(b[j], c, e ? d.call(b[j], j, f(b[j], c)) : d, g);
            return b
        }
        return h ? f(b[0], c) : undefined
    }
    function F(b) {
        return a.isWindow(b) ? b : b.nodeType === 9 ? b.defaultView || b.parentWindow : !1
    }
    var b = document, c = b.documentElement, d = /alpha\([^)]*\)/i, e = /opacity=([^)]*)/, f = /-([a-z])/ig, g = /([A-Z])/g, h = /^-?\d+(?:px)?$/i, i = /^-?\d/, j = /^(?:body|html)$/i, k = {position: "absolute", visibility: "hidden", display: "block"}, l = ["Left", "Right"], m = ["Top", "Bottom"], n, o, p, q = function (a, b) {
        return b.toUpperCase()
    };
    a.cssHooks = {opacity: {get: function (a, b) {
                if (!b)
                    return a.style.opacity;
                var c = n(a, "opacity", "opacity");
                return c === "" ? "1" : c
            }}}, a._each(["height", "width"], function (b) {
        a.cssHooks[b] = {get: function (a, c, d) {
                var e;
                if (c)
                    return a.offsetWidth !== 0 ? r(a, b, d) : (u(a, k, function () {
                        e = r(a, b, d)
                    }), e)
            }, set: function (a, b) {
                if (!h.test(b))
                    return b;
                b = parseFloat(b);
                if (b >= 0)
                    return b + "px"
            }}
    }), a.support.opacity || (a.support.opacity = {get: function (a, b) {
            return e.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        }, set: function (b, c) {
            var e = b.style;
            e.zoom = 1;
            var f = a.isNaN(c) ? "" : "alpha(opacity=" + c * 100 + ")", g = e.filter || "";
            e.filter = d.test(g) ? g.replace(d, f) : e.filter + " " + f
        }}), b.defaultView && b.defaultView.getComputedStyle && (o = function (b, c, d) {
        var e, f, h;
        d = d.replace(g, "-$1").toLowerCase();
        if (!(f = b.ownerDocument.defaultView))
            return undefined;
        if (h = f.getComputedStyle(b, null))
            e = h.getPropertyValue(d), e === "" && !a.contains(b.ownerDocument.documentElement, b) && (e = a.style(b, d));
        return e
    }), b.documentElement.currentStyle && (p = function (a, b) {
        var c, d = a.currentStyle && a.currentStyle[b], e = a.runtimeStyle && a.runtimeStyle[b], f = a.style;
        return!h.test(d) && i.test(d) && (c = f.left, e && (a.runtimeStyle.left = a.currentStyle.left), f.left = b === "fontSize" ? "1em" : d || 0, d = f.pixelLeft + "px", f.left = c, e && (a.runtimeStyle.left = e)), d === "" ? "auto" : d
    }), n = o || p, a.fn.css = function (a, b) {
        return arguments.length === 2 && b === undefined ? this : w(this, a, b, !0, function (a, b, c) {
            return c !== undefined ? s(a, b, c) : t(a, b)
        })
    }, a.cssNumber = {zIndex: !0, fontWeight: !0, opacity: !0, zoom: !0, lineHeight: !0}, a.cssProps = {"float": a.support.cssFloat ? "cssFloat" : "styleFloat"}, a.style = s, a.css = t, a.swap = u, a.camelCase = v;
    var x, y, z, A, B, C, D = function () {
        if (x)
            return;
        var c = b.body, d = b.createElement("div"), e, f, g, h, i = parseFloat(t(c, "marginTop")) || 0, j = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
        a.extend(d.style, {position: "absolute", top: 0, left: 0, margin: 0, border: 0, width: "1px", height: "1px", visibility: "hidden"}), d.innerHTML = j, c.insertBefore(d, c.firstChild), e = d.firstChild, f = e.firstChild, h = e.nextSibling.firstChild.firstChild, B = f.offsetTop !== 5, C = h.offsetTop === 5, f.style.position = "fixed", f.style.top = "20px", A = f.offsetTop === 20 || f.offsetTop === 15, f.style.position = f.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", z = f.offsetTop === -5, y = c.offsetTop !== i, c.removeChild(d), x = !0
    }, E = function (a) {
        var b = a.offsetTop, c = a.offsetLeft;
        return D(), y && (b += parseFloat(t(a, "marginTop")) || 0, c += parseFloat(t(a, "marginLeft")) || 0), {top: b, left: c}
    };
    a.fn.offset = function () {
        var d = this[0], e;
        if (!d || !d.ownerDocument)
            return null;
        if (d === d.ownerDocument.body)
            return E(d);
        try {
            e = d.getBoundingClientRect()
        } catch (f) {
        }
        if (!e || !a.contains(c, d))
            return e ? {top: e.top, left: e.left} : {top: 0, left: 0};
        var g = b.body, h = F(b), i = c.clientTop || g.clientTop || 0, j = c.clientLeft || g.clientLeft || 0, k = h.pageYOffset || a.support.boxModel && c.scrollTop || g.scrollTop, l = h.pageXOffset || a.support.boxModel && c.scrollLeft || g.scrollLeft, m = e.top + k - i, n = e.left + l - j;
        return{top: m, left: n}
    }, a.fn.position = function () {
        if (!this[0])
            return null;
        var a = this[0], b = this.offsetParent(), c = this.offset(), d = j.test(b[0].nodeName) ? {top: 0, left: 0} : b.offset();
        return c.top -= parseFloat(t(a, "marginTop")) || 0, c.left -= parseFloat(t(a, "marginLeft")) || 0, d.top += parseFloat(t(b[0], "borderTopWidth")) || 0, d.left += parseFloat(t(b[0], "borderLeftWidth")) || 0, {top: c.top - d.top, left: c.left - d.left}
    }, a.fn.offsetParent = function () {
        return this.map(function () {
            var a = this.offsetParent || b.body;
            while (a && !j.test(a.nodeName) && t(a, "position") === "static")
                a = a.offsetParent;
            return a
        })
    }, a._each(["Height", "Width"], function (b, c) {
        var d = b.toLowerCase();
        a.fn["inner" + b] = function () {
            var a = this[0];
            return a && a.style ? parseFloat(t(a, d, "padding")) : null
        }, a.fn["outer" + b] = function (a) {
            var b = this[0];
            return b && b.style ? parseFloat(t(b, d, a ? "margin" : "border")) : null
        }, a.fn[d] = function (c) {
            var e = this[0];
            if (!e)
                return c == null ? null : this;
            if (a.isFunction(c))
                return this.each(function (b) {
                    var e = a(this);
                    e[d](c.call(this, b, e[d]()))
                });
            if (a.isWindow(e)) {
                var f = e.document.documentElement["client" + b], g = e.document.body;
                return e.document.compatMode === "CSS1Compat" && f || g && g["client" + b] || f
            }
            if (e.nodeType === 9)
                return Math.max(e.documentElement["client" + b], e.body["scroll" + b], e.documentElement["scroll" + b], e.body["offset" + b], e.documentElement["offset" + b]);
            if (c === undefined) {
                var h = t(e, d), i = parseFloat(h);
                return a.isNaN(i) ? h : i
            }
            return this.css(d, typeof c == "string" ? c : c + "px")
        }
    }), a._each(["Left", "Top"], function (b, c) {
        var d = "scroll" + b;
        a.fn[d] = function (b) {
            var e, f;
            return b === undefined ? (e = this[0], e ? (f = F(e), f ? "pageXOffset"in f ? f[c ? "pageYOffset" : "pageXOffset"] : a.support.boxModel && f.document.documentElement[d] || f.document.body[d] : e[d]) : null) : this.each(function () {
                f = F(this), f ? f.scrollTo(c ? a(f).scrollLeft() : b, c ? b : a(f).scrollTop()) : this[d] = b
            })
        }
    })
});

!function () {

    window.oc.startTime = new Date().getTime() / 1000;
    window.oc.countDirection = 1;
    window.oc.scale = 1.248;
    window.oc.repeatMode = 0;
    window.oc.showMilliseconds = true;
    window.oc.countdownExpired = function ()
    {
        if (window.oc.repeatMode > 0)
        {
            if (window.oc.editor)
            {
                window.oc.editor.countdownExpired();
            } else
            {
                if (oc.timerRef)
                    clearInterval(oc.timerRef);
                location.reload();
            }
        }
    }

    var $__container_oc, __scope_oc, pad, periods, update;
    __scope_oc = window.oc, $__container_oc = $("#cdt"), periods = {d: 86400, h: 3600, m: 60}, pad = function (e) {
        for (; e.toString().length < 2; )
            e = "0" + e;
        return e
    }, update = function () {
        var e, o, t, _, c, i, n, r, d, a, s, p, u, m, l;
        for (a = (new Date).getTime() / 1e3, o = a - __scope_oc.startTime, o *= __scope_oc.countDirection, u = Math.max(0, Math.round(__scope_oc.remainingTimeAtStartTime - o)), 0 === u && __scope_oc.countdownExpired(), e = u - u % periods.d, c = u - e - u % periods.h, d = u - e - c - u % periods.m, m = u - e - c - d, r = [e / periods.d, pad(c / periods.h), pad(d / periods.m), pad(m)].join("x"), n = $__container_oc.find(".counter-item"), i = n.length, s = i - r.length; i--; )
            t = n[i], $(t).removeClass(), $(t).addClass("counter-item"), i - s >= 0 && $(t).addClass("spr digit item-0 digit-" + r.charAt(i - s));
        return p = Math.round(($__container_oc.find(".days").innerWidth() - 60 * __scope_oc.scale) / 2), $__container_oc.find(".days .unit-label").css("left", p + "px"), _ = 30 * s * __scope_oc.scale, l = Math.round(_ / 6), $__container_oc.find(".digit-x").css("margin-left", l + "px"), $__container_oc.find(".digit-x").css("margin-right", l + "px")
    }, update(), __scope_oc.timerRef && clearInterval(__scope_oc.timerRef), __scope_oc.timerRef = setInterval(update, 100), __scope_oc.updateCountdownClock = update;
}.call(this);
        