const navOpenButton = document.querySelector("nav .top button i");
const nav = document.querySelector("nav");
const OpenerDiv = document.querySelector(".nav-main");
flag = 0;

const navOpen = () => {
  navOpenButton.addEventListener("click", () => {
    if (flag == 0) {
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
    } else if (flag == 1) {
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
};
navOpen();

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
