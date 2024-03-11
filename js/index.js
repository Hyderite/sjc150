document.querySelector("#box-1").style.animation = "enlarge .75s forwards";
document.querySelector("#box-1-text-container-th").style.animation = "1s white-to-green .75s forwards";

document.addEventListener("visibilitychange", () => {
    if (window.scrollY == 0) {
        if (document.visibilityState === "visible") {
            document.querySelector("#box-1").style.animation = "enlarge .75s forwards";
            document.querySelector("#box-1-text-container-th").style.animation = "1s white-to-green .75s forwards";
        } else {
            document.querySelector("#box-1").style.animation = "none";
            document.querySelector("#box-1-text-container-th").style.animation = "none";
        };
    };
});

const main2Title = document.querySelector("#main-2-title"), main2Text = document.querySelector("#main-2-text"), verticalRect = document.querySelector("#vertical-rect"), horizontalRect = document.querySelector("#horizontal-rect"), main2Image = document.querySelector("#main-2-image")
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
    verticalRect.style.setProperty("--vertical-rect-animation", "expand-vertical-rect .5s");
    verticalRect.style.setProperty("--rect-animation-fill-mode", "forwards");
    verticalRect.style.setProperty("--vertical-rect-animation-delay", ".65s");
    horizontalRect.style.setProperty("--horizontal-rect-animation", "expand-horizontal-rect .5s");
    horizontalRect.style.setProperty("--rect-animation-fill-mode", "forwards");
    horizontalRect.style.setProperty("--horizontal-rect-animation-delay", ".95s");
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