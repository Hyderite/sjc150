function animation() {
    document.querySelector("#sjc-img").style.animation = "enlarge .75s forwards";
    setTimeout(function () {
        document.querySelector("#sjc-img").style.animation = "move-up .75s forwards";
    }, 1400);
};

animation();
document.querySelector("#timeline").style.transform = "translateY(calc(100% - " + document.querySelector("#sjc-img").offsetHeight + "px + 150px + " + document.querySelector(".item").offsetHeight + "px))";

document.addEventListener("visibilitychange", () => {
    if (window.scrollY == 0) {
        if (document.visibilityState === "visible") {
            animation();
        } else {
            document.querySelector("#sjc-img").style.animation = "none";
        };
    };
});

// parallax scrolling

document.body.addEventListener("scroll", function () {
    document.body.backgroundPosition = "0 " + (document.body.scrollTop * -0.3) + "px";
});
