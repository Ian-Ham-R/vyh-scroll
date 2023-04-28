gsap.registerPlugin(ScrollTrigger);

function realViewportHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

realViewportHeight();

window.addEventListener('resize', () => {
    realViewportHeight();
});

gsap.to(".main--horizontalContainer", {
    xPercent: -100,
    x: () => innerWidth,
    ease: "none",
    scrollTrigger: {
        trigger: ".main--horizontalContainer",
        start: "top top",
        end: () => innerWidth * 4,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
    }
});

