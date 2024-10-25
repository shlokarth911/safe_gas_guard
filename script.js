const navOpenButton = document.querySelector("nav .top button i");
const nav = document.querySelector("nav");
const OpenerDiv = document.querySelector(".nav-main");
let flag = 0;

const navOpen = () => {
  navOpenButton.addEventListener("click", () => {
    if (flag === 0) {
      gsap.to(nav, {
        width: "80vw",
        height: "auto",
        duration: 0.75,
        ease: "back.out(1)",
      });

      gsap.to(navOpenButton, {
        attr: { class: "ri-close-line" },
      });

      flag = 1;
    } else if (flag === 1) {
      gsap.to(navOpenButton, {
        attr: { class: "ri-menu-4-line" },
      });

      gsap.to(nav, {
        width: "30vw",
        height: "3vw",
        duration: 0.7,
        ease: "back.out(1)",
      });

      flag = 0;
    } else {
      console.error("flag inavailabe");
    }
  });

  document.addEventListener("click", (event) => {
    if (
      flag === 1 &&
      !nav.contains(event.target) &&
      !navOpenButton.contains(event.target)
    ) {
      gsap.to(navOpenButton, {
        attr: { class: "ri-menu-4-line" },
      });

      gsap.to(nav, {
        width: "30vw",
        height: "3vw",
        duration: 0.7,
        ease: "back.out(1)",
      });

      flag = 0;
    }
  });
};
navOpen();

const navDropAnimation = () => {
  const nav = document.querySelector("nav");
  document.addEventListener("DOMContentLoaded", () => {
    gsap.from(nav, {
      top: "-20%",
      width: "0vw",
      duration: 1.75,
      ease: "back.out(1)",
    });
  });
};

navDropAnimation();

const stringAnimation = () => {
  var string = document.querySelector(".string");
  var path = string.querySelector("path");

  string.addEventListener("mousemove", (dets) => {
    let rect = string.getBoundingClientRect();
    let pathValue = `M 10 200 Q ${dets.x - rect.x} ${dets.y - rect.y} 1430 200`;

    gsap.to(path, {
      attr: { d: pathValue },
      duration: 0.5,
      ease: "power3.out",
    });
  });

  string.addEventListener("mouseleave", () => {
    gsap.to(path, {
      attr: { d: "M 10 200 Q 500 200 1430 200" },
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });
  });
};
stringAnimation();

function sloganAnimation() {
  const heroH1 = document.querySelector(".slogan h1");
  heroH1.innerHTML = heroH1.textContent
    .split("")
    .map((letter) => `<span class="letter">${letter}</span>`)
    .join("");
  const letters = document.querySelectorAll(".letter");

  gsap.from(letters, {
    textShadow: "0 0 5px rgb(175, 175, 175)",
    duration: 1,
    stagger: 0.05,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".slogan",
      start: "top 80%",
      end: "top 0%",
      toggleActions: "restart pause reset",
    },
  });
}
sloganAnimation();

letterAnimation = () => {
  const heroH1 = document.querySelector(".hero h2");
  heroH1.innerHTML = heroH1.textContent
    .split("")
    .map((letter) => `<span class="letter">${letter}</span>`)
    .join("");
  const letters = document.querySelectorAll(".letter");

  const tl = gsap.timeline();

  tl.to(letters, {
    textShadow: "0 0 50px #00ff48",
    color: "#ff",
    duration: 0.5,
    stagger: 0.05,
    scrollTrigger: {
      trigger: ".hero h2",
      start: "top 100%",
      end: "top 0%",
    },
  });

  tl.to(letters, {
    textShadow: "0 0 15px #00ff48",
    delay: 0.5,
    color: "#00ff48",
    stagger: 0.05,
    scrollTrigger: {
      trigger: ".hero h2",
      start: "top 80%",
      end: "top 0%",
    },
  });

  gsap.to(".hero h2 span", {
    color: "#fff",
    textShadow: "0 0 0px #fff",
    delay: 4,
  });
};
// letterAnimation();

const cardAnimation = () => {
  document
    .querySelectorAll(".text-drop-line .drop-line")
    .forEach((line, index) => {
      gsap.from(line, {
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: line,
          start: "top 85%",
          end: "top 0%",
          // toggleActions: "restart pause reset", //enable to rest animation on every scroll
        },
      });
    });

  const namer = document.querySelectorAll(".text-drop-line p");
  namer.forEach((cont) => {
    gsap.from(cont, {
      opacity: 0,
      transform: "translateX(-10%)",
      duration: 2,
      ease: "expo.out",
      ease: "elastic.out(1,0.5)",
      scrollTrigger: {
        trigger: cont,
        start: "top 85%",
        end: "top 0%",
        // toggleActions: "restart pause reset", //enable to rest animation on every scroll
      },
    });
  });

  const nameSpan = document.querySelectorAll(".text-drop-line p span");
  nameSpan.forEach((cont) => {
    gsap.from(cont, {
      color: "#fff",
      textShadow: "0 0 0px #fff",
      delay: 0.35,
      duration: 2,
      ease: "circ.out",
      scrollTrigger: {
        trigger: cont,
        start: "top 85%",
        end: "top 0%",
        // toggleActions: "restart pause reset", //enable to rest animation on every scroll
      },
    });
  });
};
cardAnimation();
