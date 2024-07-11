let sessionStorageCheck = sessionStorage.getItem("newTab");

if (sessionStorageCheck != undefined) {
    noAnimation();
} else if (sessionStorageCheck == undefined) {
    sessionStorage.setItem("newTab", "1");
    runAnimation();
} else if (sessionStorageCheck == "0") {
    sessionStorage.clear();
};

function runAnimation() {
    let navbar = document.querySelector("#navbar");

    navbar.style.transform = "translateY(-160px)";
    document.querySelector("#navbar-bg").style.transform = "translateY(-160px)";
    document.querySelector(".main-1").style.marginTop = "0";

    document.querySelector("#sjc-150-logo-loading").style.opacity = "1";
    document.querySelector("#sjc-150-logo-loading").style.marginTop = "0";
    setTimeout(function () {
        document.querySelector("#loading-cross").style.opacity = "1";
        document.querySelector("#loading-cross").style.marginTop = "0";
        setTimeout(function () {
            document.querySelector("#loading-cross").style.transform = "rotate(1000deg)"; // loading-cross rotation speed
            setTimeout(function () {
                document.querySelector("#loading").style.opacity = "0";
                setTimeout(function () {
                    document.querySelector("#loading").style.display = "none";
                }, 350);
            }, 1500); // loading animation duration
        }, 225); // loading-cross rotation speed
    }, 500);

    setTimeout(function () {
        document.querySelector("#filter").style.opacity = "0";
        navbar.style.transition = "transform .5s";
        navbar.style.transform = "translateY(-80px)";
        document.querySelector("#navbar-bg").style.transform = "translateY(-80px)";
        document.querySelector(".main-1").style.transition = "margin-top .5s, height .5s";
        document.querySelector(".main-1").style.marginTop = "80px";
        document.body.style.position = "static";
        document.querySelector(".main-1").style.height = "calc(100vh - 80px)";
        setTimeout(function () {
            document.querySelector(".main-2").style.opacity = "1";
            document.querySelector("#filter").style.display = "none";
        }, 100);
        setTimeout(function () {
            document.querySelector("#main-1-content").style.transform = "translateX(0)";
            document.querySelector("#main-1-content").style.opacity = "1";
            setTimeout(function () {
                document.querySelector("#main-1-content #p1").style.transform = "translateY(0)";
                document.querySelector("#main-1-content #p1").style.opacity = "1";
                setTimeout(function () {
                    document.querySelector("#main-1-content #p2").style.transform = "translateY(0)";
                    document.querySelector("#main-1-content #p2").style.opacity = "1";
                    setTimeout(function () {
                        document.querySelector("#box-1-text-container-th").style.animation = "black-to-green .35s forwards";
                        document.querySelector("#scroll-down-btn").style.opacity = "1";
                    }, 350);
                }, 350);
            }, 350);
        }, 350);
    }, 2550); // navbar and main-1 delay
    sessionStorage.setItem("newTab", "0");
};

function noAnimation() {
    document.querySelector("#filter").style.display = "none";
    document.querySelector("#loading").style.display = "none";
    navbar.style.transition = "transform .5s";
    navbar.style.transform = "translateY(-80px)";
    document.querySelector("#navbar-bg").style.transform = "translateY(-80px)";
    document.querySelector(".main-1").style.marginTop = "80px";
    document.body.style.position = "static";
    document.querySelector(".main-1").style.height = "calc(100vh - 80px)";
    setTimeout(function () {
        document.querySelector(".main-2").style.opacity = "1";
        document.querySelector("#filter").style.display = "none";
    }, 100);
    setTimeout(function () {
        document.querySelector("#main-1-content").style.transform = "translateX(0)";
        document.querySelector("#main-1-content").style.opacity = "1";
        setTimeout(function () {
            document.querySelector("#main-1-content #p1").style.transform = "translateY(0)";
            document.querySelector("#main-1-content #p1").style.opacity = "1";
            setTimeout(function () {
                document.querySelector("#main-1-content #p2").style.transform = "translateY(0)";
                document.querySelector("#main-1-content #p2").style.opacity = "1";
                setTimeout(function () {
                    document.querySelector("#box-1-text-container-th").style.animation = "black-to-green .35s forwards";
                    document.querySelector("#scroll-down-btn").style.opacity = "1";
                }, 350);
            }, 350);
        }, 350);
    }, 350);
};

// rmb to copy the piece of code above
document.addEventListener("visibilitychange", () => {
    if (window.scrollY == 0) {
        if (document.visibilityState === "visible") {
            document.querySelector("#main-1-content").style.transition = "transform .5s, opacity .5s";
            document.querySelector("#scroll-down-btn").style.transition = "opacity .35s, background-color .35s";
            setTimeout(function () {
                document.querySelector(".main-2").style.opacity = "1";
                document.querySelector("#filter").style.display = "none";
            }, 100);
            setTimeout(function () {
                document.querySelector("#main-1-content").style.transform = "translateX(0)";
                document.querySelector("#main-1-content").style.opacity = "1";
                setTimeout(function () {
                    document.querySelector("#main-1-content #p1").style.transform = "translateY(0)";
                    document.querySelector("#main-1-content #p1").style.opacity = "1";
                    setTimeout(function () {
                        document.querySelector("#main-1-content #p2").style.transform = "translateY(0)";
                        document.querySelector("#main-1-content #p2").style.opacity = "1";
                        setTimeout(function () {
                            document.querySelector("#box-1-text-container-th").style.animation = "black-to-green .35s forwards";
                            document.querySelector("#scroll-down-btn").style.opacity = "1";
                        }, 350);
                    }, 350);
                }, 350);
            }, 350);
        } else {
            document.querySelector("#main-1-content").style.transition = "none";
            document.querySelector("#scroll-down-btn").style.transition = "none";
            document.querySelector("#main-1-content").style.opacity = "0";
            document.querySelector("#main-1-content").style.transform = "translateX(-50px)";
            document.querySelector("#main-1-content #p1").style.opacity = "0";
            document.querySelector("#main-1-content #p1").style.transform = "translateY(30px)";
            document.querySelector("#main-1-content #p2").style.opacity = "0";
            document.querySelector("#main-1-content #p2").style.transform = "translateY(30px)";
            document.querySelector("#scroll-down-btn").style.opacity = "0";
            document.querySelector("#box-1-text-container-th").style.animation = "none";
        };
    };
});

const main2Title = document.querySelector("#main-2-title"), main2Text = document.querySelector("#main-2-text"), main2VerticalRect = document.querySelector("#main-2-left #vertical-rect"), main2HorizontalRect = document.querySelector("#main-2-left #horizontal-rect"), main2Image = document.querySelector("#main-2-image")
var scrollOffset = 100;

const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
};

const displayScrollElement = () => {
    main2Title.classList.add("main-2-scrolled");
    main2Text.classList.add("main-2-scrolled");
    main2VerticalRect.style.setProperty("--vertical-rect-animation", "expand-vertical-rect .5s");
    main2VerticalRect.style.setProperty("--rect-animation-fill-mode", "forwards");
    main2VerticalRect.style.setProperty("--vertical-rect-animation-delay", ".65s");
    main2HorizontalRect.style.setProperty("--horizontal-rect-animation", "expand-horizontal-rect .5s");
    main2HorizontalRect.style.setProperty("--rect-animation-fill-mode", "forwards");
    main2HorizontalRect.style.setProperty("--horizontal-rect-animation-delay", ".95s");
    main2Image.classList.add("main-2-scrolled");
};

const handleScrollAnimation = () => {
    if (elementInView(main2Title, scrollOffset)) {
        displayScrollElement();
    };
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

const main3Title = document.querySelector("#main-3-title"), main3Text = document.querySelector("#main-3-text"), main3VerticalRect = document.querySelector("#main-3-right #vertical-rect"), main3HorizontalRect = document.querySelector("#main-3-right #horizontal-rect"), main3Image = document.querySelector("#main-3-image")
var scrollOffset = 100;

const elementInView2 = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
};

const displayScrollElement2 = () => {
    main3Title.classList.add("main-3-scrolled");
    main3Text.classList.add("main-3-scrolled");
    main3VerticalRect.style.setProperty("--vertical-rect-animation", "expand-vertical-rect .5s");
    main3VerticalRect.style.setProperty("--rect-animation-fill-mode", "forwards");
    main3VerticalRect.style.setProperty("--vertical-rect-animation-delay", ".65s");
    main3HorizontalRect.style.setProperty("--horizontal-rect-animation-inverted", "expand-horizontal-rect-inverted .5s");
    main3HorizontalRect.style.setProperty("--rect-animation-fill-mode", "forwards");
    main3HorizontalRect.style.setProperty("--horizontal-rect-animation-delay", ".95s");
    main3Image.classList.add("main-3-scrolled");
};

const handleScrollAnimation2 = () => {
    if (elementInView2(main3Title, scrollOffset)) {
        displayScrollElement2();
    };
};

window.addEventListener('scroll', () => {
    handleScrollAnimation2();
});
