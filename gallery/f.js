!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.JsonFilter = e())
    : (t.JsonFilter = e());
})(this, function () {
  return (function (t) {
    var e = {};
    function r(n) {
      if (e[n]) return e[n].exports;
      var o = (e[n] = { i: n, l: !1, exports: {} });
      return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    return (
      (r.m = t),
      (r.c = e),
      (r.d = function (t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (r.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (r.t = function (t, e) {
        if ((1 & e && (t = r(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var o in t)
            r.d(
              n,
              o,
              function (e) {
                return t[e];
              }.bind(null, o)
            );
        return n;
      }),
      (r.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return r.d(e, "a", e), e;
      }),
      (r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (r.p = ""),
      r((r.s = 0))
    );
  })([
    function (t, e) {
      function r(t) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var n = function (t) {
          var e = {};
          return (
            (e.length = t.length),
            (e.all = function () {
              return t;
            }),
            (e.get = function (e) {
              if (!(e > t.length - 1)) return t[e];
            }),
            (e.first = function () {
              return e.get(0);
            }),
            (e.last = function () {
              return e.get(t.length - 1);
            }),
            e
          );
        },
        o = function t(e, n, o, f) {
          var c = Object.keys(n);
          if (Array.isArray(e))
            e.map(function (e) {
              return t(e, n, o, f);
            });
          else {
            var l = Object.keys(e);
            if (
              c.filter(function (t) {
                return l.indexOf(t) >= 0;
              }).length === c.length
            )
              c.filter(function (t) {
                return "string" == typeof e[t] && n[t] instanceof RegExp
                  ? n[t].test(e[t])
                  : "object" !== r(n[t])
                  ? e[t] === n[t] || "$any" === n[t]
                  : u(n[t], e[t]);
              }).length === c.length && (o ? f.push(i(e, n)) : f.push(e));
            l.forEach(function (i) {
              "object" === r(e[i]) && t(e[i], n, o, f);
            });
          }
          return f;
        },
        i = function t(e, n) {
          if ("object" === r(e)) {
            var o = {};
            for (var i in n) {
              var u = e[i];
              o[i] = "object" === r(e) ? t(e[i], n[i]) : u;
            }
            return o;
          }
          return e;
        },
        u = function t(e, n) {
          for (var o in e) {
            if (e.hasOwnProperty(o) !== n.hasOwnProperty(o)) return !1;
            switch (r(e[o])) {
              case "object":
                if (e[o] instanceof RegExp && "string" == typeof n[o])
                  return e[o].test(n[o]);
                if (!t(e[o], n[o])) return !1;
                break;
              default:
                return "$any" === e[o] || e[o] === n[o];
            }
          }
          return !0;
        };
      t.exports = function (t, e, i) {
        return (function (t, e, i) {
          if (((i = i || !1), "object" !== r(t)))
            throw new Error("invalid JSON");
          if ("object" !== r(e)) throw new Error("invalid JSON filter object");
          if (Array.isArray(e)) throw new Error("invalid JSON filter object");
          var u = [];
          switch (r(t)) {
            case "object":
              u = o(t, e, i, u);
          }
          return n(u);
        })(t, e, i);
      };
    },
  ]);
});
//# sourceMappingURL=index.js.map
