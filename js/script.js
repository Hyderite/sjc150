var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        document.querySelector("#navbar").style.marginTop = "-80px";
    } else if (st < lastScrollTop) {
        document.querySelector("#navbar").style.marginTop = "0";
    };
    lastScrollTop = st <= 0 ? 0 : st;
}, false);
