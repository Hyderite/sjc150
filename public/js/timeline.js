function animation() {
    document.querySelector("#sjc-img").style.animation = "enlarge .5s forwards";
    setTimeout(function () {
        document.querySelector("#sjc-img").style.animation = "move-up .4s forwards";
    }, 100);
};

animation();

document.querySelector("#main").style.transform = "translateY(" + window.pageYOffset + document.querySelector("#sjc-img").getBoundingClientRect().top + "px)";

document.addEventListener("visibilitychange", () => {
    if (window.scrollY == 0) {
        if (document.visibilityState === "visible") {
            animation();
        } else {
            document.querySelector("#sjc-img").style.animation = "none";
        };
    };
});
