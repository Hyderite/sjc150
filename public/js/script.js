var lastScrollTop = 0;

window.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        document.querySelector("#navbar").style.transition = "margin-top .5s";
        document.querySelector("#navbar").style.marginTop = "-80px";
    } else if (st < lastScrollTop) {
        document.querySelector("#navbar").style.transition = "margin-top .5s";
        document.querySelector("#navbar").style.marginTop = "0";
    };
    lastScrollTop = st <= 0 ? 0 : st;
}, false);

// navbar item on hover change color of other items, darker color
