const kura_tm_preloader = () => {
  let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
    navigator.userAgent
  )
    ? true
    : false;
  let preloader = document.getElementById("preloader");

  if (preloader) {
    if (!isMobile) {
      setTimeout(function () {
        preloader.classList.add("preloaded");
      }, 800);
      setTimeout(function () {
        preloader.remove();
      }, 2000);
    } else {
      preloader.remove();
    }
  }
};

export const wowJsAnimation = () => {
  if (typeof window !== "undefined") {
    window.WOW = require("wowjs");
  }
  new WOW.WOW().init();
};

export const customCursor = () => {
  var myCursor = document.querySelectorAll(".mouse-cursor"),
    hamburger = document.querySelector(".hamburger"),
    kura_tm_topbar = document.querySelector(".kura_tm_topbar "),
    pointer = document.querySelector(".cursor-pointer"),
    e = document.querySelector(".cursor-inner"),
    t = document.querySelector(".cursor-outer");

  function mouseEvent(element) {
    element.addEventListener("mouseenter", function () {
      e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
    });
    element.addEventListener("mouseleave", function () {
      e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover");
    });
  }
  if (myCursor.length) {
    if (document.body) {
      let n,
        i = 0,
        o = !1;
      (window.onmousemove = function (s) {
        // console.log(document.querySelector(this));
        o ||
          (t.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
          (e.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
          (n = s.clientY),
          (i = s.clientX);
      }),
        document.body.addEventListener(
          "mouseenter",
          // "a,.kura_tm_topbar .trigger, .cursor-pointer",
          function () {
            let a = document.querySelectorAll("a");
            e.classList.add("cursor-inner"), t.classList.add("cursor-outer");

            for (let i = 0; i < a.length; i++) {
              const element = a[i];
              mouseEvent(element);
            }

            hamburger && mouseEvent(hamburger);
            kura_tm_topbar && mouseEvent(kura_tm_topbar);
            pointer && mouseEvent(pointer);
          }
        ),
        (e.style.visibility = "visible"),
        (t.style.visibility = "visible");
    }
  }
};

export const kura_tm_my_load = () => {
  kura_tm_preloader();
  setTimeout(() => {
    document.querySelector("body").classList.add("opened");
  }, 1500);
};

// Header
export const stickyNav = () => {
  let offset = window.scrollY;
  const stickys = document.querySelectorAll(".kura_tm_topbar");
  stickys.forEach((sticky) => {
    if (sticky) {
      if (offset > 100) {
        sticky.classList.add("animate");
      } else {
        sticky.classList.remove("animate");
      }
    }
  });
};

export const openNav = (toggle) => {
  const navItems = document.querySelectorAll("#anchor_nav> li");
  if (navItems) {
    navItems.forEach((nav) => {
      toggle ? nav.classList.add("opened") : nav.classList.remove("opened");
    });
  }
};

export const activeSkillProgress = () => {
  const boxes = document.querySelectorAll(".bar");
  const triggerBottom = (window.innerHeight / 5) * 5;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("open");
    } else {
      box.classList.remove("open");
    }
  });
};

// active
export const activeMenuBySection = (id) => {
  const boxes = document.querySelectorAll(`#${id ? id : "home"}`);
  window.addEventListener("scroll", checkBoxes);
  checkBoxes();
  function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 5;
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        activeMenu(id ? id : "home");
      } else {
        activeMenu("");
      }
    });
  }
};

const activeMenu = (active) => {
  const navItems = document.querySelectorAll("#anchor_nav> li");
  if (navItems) {
    navItems.forEach((nav) => {
      if (nav.classList.contains(active)) {
        nav.classList.add("current");
      } else {
        nav.classList.remove("current");
      }
    });
  }
};
export const aTagClick = () => {
  const aTag = document.querySelectorAll("[href='#']");
  for (let i = 0; i < aTag.length; i++) {
    const a = aTag[i];
    a.addEventListener("click", (e) => {
      e.preventDefault();
    });
  }
};

export const scroll_ = () => {
  const sections = document.querySelectorAll(".kura_tm_section");
  const navLi = document.querySelectorAll(".anchor_nav li");
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });
  navLi.forEach((li) => {
    li.classList.remove("current");
    if (li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`) {
      li.classList.add("current");
    }
  });
};
