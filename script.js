const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

var tl = gsap.timeline();

tl.to(".loader .yellow", {
  top: "-100%",
  delay: 0.3,
  duration: 0.5,
  ease: "expo.out",
});

tl.to(
  ".loader .video",
  {
    top: "-100%",
    delay: 1,
    duration: 0.8,
    ease: "expo.out",
  },
  "anim"
);
tl.to(
  ".video video",
  {
    opacity: 0,
  },
  "anim"
);
tl.to(
  ".loader",
  {
    top: "-100%",
    duration: 0.8,
    ease: "expo.out",
  },
  "anim"
);

const close = document.querySelector(".nav-tabs img");
close.addEventListener("click", () => {
  gsap.from(".nav-tabs h4", {
    x: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
  });
});

// const imgs = [
//   {
//     name: "Minerals",
//     url: "assets/images/MIN-1_240208_000417_c85caf2b214c8bd6e09dc9b9f86188d7.jpg",
//   },
//   {
//     name: "Erthos",
//     url: "assets/images/MIN-1_240208_000417_c85caf2b214c8bd6e09dc9b9f86188d7.jpg",
//   },
//   {
//     name: "Converse",
//     url: "assets/images/MIN-1_240208_000417_c85caf2b214c8bd6e09dc9b9f86188d7.jpg",
//   },
//   {
//     name: "Skky",
//     url: "assets/images/MIN-1_240208_000417_c85caf2b214c8bd6e09dc9b9f86188d7.jpg",
//   },
//   {
//     name: "Boldly",
//     url: "assets/images/MIN-1_240208_000417_c85caf2b214c8bd6e09dc9b9f86188d7.jpg",
//   },
// ];

// const elems = document.querySelectorAll(".elem");
// const page2 = document.getElementById("page2");

// elems.forEach((elem) => {
//   elem.addEventListener("mouseenter", (e) => {
//     const index = e.target.getAttribute("data-index");
//     page2.style.backgroundImage = `url("${imgs[index].url}")`;
//   });
// });

const elems = document.querySelectorAll(".elem");
const page2 = document.getElementById("page2");
elems.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    const bgImg = elem.getAttribute("data-img");
    console.log(bgImg);
    page2.style.backgroundImage = `url(${bgImg})`;
  });
});

document.querySelector(".page1 .footer img").addEventListener("click", () => {
  scroll.scrollTo(".page2");
});
document.querySelector("footer .white img").addEventListener("click", () => {
  scroll.scrollTo(0);
});
document.querySelector("footer .white h2").addEventListener("click", () => {
  scroll.scrollTo(0);
});
