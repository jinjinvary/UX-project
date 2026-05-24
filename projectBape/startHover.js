import { animate, hover } from 'https://cdn.jsdelivr.net/npm/motion@12.39.0/+esm';

const navItem = document.querySelectorAll(".nav-item");
const firstDecoImg = navItem[0].querySelector("img");
const secondDecoImg = navItem[1].querySelector("img");
const thirdDecoImg = navItem[2].querySelector("img");

hover(navItem[0],() => {
    animate(firstDecoImg, {
        clipPath: "inset(0 0 0% 0%)"
    }, {duration: 0.5, easing: "ease-out"})

    return () => animate(firstDecoImg, {
        clipPath: "inset(0 0 100% 100%)"
    }, {duration: 0.3})
})

hover(navItem[1],() => {
    animate(secondDecoImg, {
        clipPath: "inset(0 0% 0% 0%)"
    }, {duration: 0.5, easing: "ease-out"})

    return () => animate(secondDecoImg, {
        clipPath: "inset(0 100% 0 0)"
    }, {duration: 0.3})
})

hover(navItem[2],() => {
    animate(thirdDecoImg, {
        clipPath: "inset(0 0 0% 0)"
    }, {duration: 0.5, easing: "ease-out"})

    return () => animate(thirdDecoImg, {
        clipPath: "inset(0 0 100% 0)"
    }, {duration: 0.3})
})