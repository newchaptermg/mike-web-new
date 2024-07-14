/*! Bootstrap v3.3.7 (http://getbootstrap.com) */
!function (a) { "use strict"; a.fn.emulateTransitionEnd = function (b) { var c = !1, d = this; a(this).one("bsTransitionEnd", function () { c = !0 }); var e = function () { c || a(d).trigger(a.support.transition.end) }; return setTimeout(e, b), this }, a(function () { a.support.transition = transitionEnd() }) }(jQuery);
