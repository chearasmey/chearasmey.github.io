function useState(initialValue) {
  let state = initialValue;

  const stateHandler = {
    get(target, property) {
      if (property === "value") {
        return target.value;
      }
      return undefined;
    },
    set(target, property, value) {
      if (property === "value") {
        target.value = value;
        return true;
      }
      return false;
    },
  };

  const stateProxy = new Proxy({ value: state }, stateHandler);

  function setState(newValue) {
    stateProxy.value = newValue;
  }

  return [stateProxy, setState];
}

const pageTurnBtn = document.querySelectorAll(".nextprev-btn");
pageTurnBtn.forEach((element, index) => {
  element.addEventListener("click", (event) => {
    const pageTurnId = element.dataset.page;
    const pageTurn = document.getElementById(pageTurnId);
    if (pageTurn.classList.contains("turn")) {
      pageTurn.classList.remove("turn");
      setTimeout(() => {
        pageTurn.style.zIndex = 20 - index;
      }, 500);
    } else {
      pageTurn.classList.add("turn");
      setTimeout(() => {
        pageTurn.style.zIndex = 20 + index;
      }, 500);
    }
  });
});

const pages = document.querySelectorAll(".book-page.page-right");
let totalPages = pages.length;
let pageNumber = 0;
const contactMeBtn = document.querySelector(".btn.contact-me");
contactMeBtn.onclick = () => {
  pages.forEach((page, index) => {
    setTimeout(() => {
      page.classList.add("turn");
      setTimeout(() => {
        page.style.zIndex = 20 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
};
const coverRight = document.querySelector(".cover.cover-right");
setTimeout(() => {
  coverRight.classList.add("turn");
}, 2100);
setTimeout(() => {
  coverRight.style.zIndex = -1;
}, 2800);

function reverseIndex() {
  pageNumber--;
  if (pageNumber < 0) {
    pageNumber = totalPages - 1;
  }
}

function removePageTurn(ms) {
  pages.forEach((_, index) => {
    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].classList.remove("turn");
      setTimeout(() => {
        reverseIndex();
        pages[pageNumber].style.zIndex = 10 + index;
      }, 500);
    }, (index + 1) * 200 + ms);
  });
}

removePageTurn(2100);

const profileBack = document.querySelector(".profile-back");
profileBack.onclick = () => {
  removePageTurn(100);
};

const mobilePage = document.querySelectorAll(".mobile-page");
let currentIndex = 0;
const totalMobilePages = mobilePage.length;

let startX = 0;

document.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  handleSwipe(startX, endX);
});

function handleSwipe(startX, endX) {
  const carousel = document.querySelector(".mobile-page");
  if (startX - endX > 50) {
    // Swipe left
    carousel.scrollBy({ left: carousel.clientWidth, behavior: "smooth" });
  } else if (endX - startX > 50) {
    // Swipe right
    carousel.scrollBy({ left: -carousel.clientWidth, behavior: "smooth" });
  }
}
