import { animate, hover } from 'https://cdn.jsdelivr.net/npm/motion@12.39.0/+esm';

const navItem = document.querySelectorAll(".nav-item");
const firstDecoImg = navItem[0].querySelector("img");
const secondDecoImg = navItem[1].querySelector("img");
const thirdDecoImg = navItem[2].querySelector("img");

hover(navItem[0],() => {
    animate(firstDecoImg, {
        opacity: 1,
    }, {duration: 0.5, easing: "ease-out"})

    return () => animate(firstDecoImg, {
        opacity: 0,
    }, {duration: 0.1})
})

hover(navItem[1],() => {
    animate(secondDecoImg, {
        opacity: 1,
    }, {duration: 0.5, easing: "ease-out"})

    return () => animate(secondDecoImg, {
        opacity: 0,
    }, {duration: 0.1})
})

hover(navItem[2],() => {
    animate(thirdDecoImg, {
        opacity: 1,
    }, {duration: 0.5, easing: "ease-out"})

    return () => animate(thirdDecoImg, {
        opacity: 0,
    }, {duration: 0.1})
})
