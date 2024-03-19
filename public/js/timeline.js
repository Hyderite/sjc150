document.querySelector("#sjc-img").style.animation = "enlarge .75s forwards";
setTimeout(function () {
    document.querySelector("#sjc-img").style.animation = "move-up .75s forwards";
}, 1250);

document.addEventListener("visibilitychange", () => {
    if (window.scrollY == 0) {
        if (document.visibilityState === "visible") {
            document.querySelector("#sjc-img").style.animation = "enlarge .75s forwards";
            setTimeout(function () {
                document.querySelector("#sjc-img").style.animation = "move-up .75s forwards";
            }, 1250);
        } else {
            document.querySelector("#sjc-img").style.animation = "none";
        };
    };
});
