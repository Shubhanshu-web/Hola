const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#contact",
        start: "top center",
        toggleActions: 'play pause resume reverse'
    }
});

tl2.from('#cbox p', {
    stagger: .3,
    opacity: 0,
    delay: .1,
    duration: 1,
    ease: 'Expo.easeInOut'
})
.from('#cbox h1', {
    stagger: .1,
    opacity: 0,
    duration: 1.5,
    ease: 'Expo.easeInOut'
});
