const MENU = document.getElementById("menu");

MENU.addEventListener("click", (event) => {
  MENU.querySelectorAll("a").forEach((el) => el.classList.remove("active"));
  event.target.classList.add("active");
});

/*Slider */

let items = document.querySelectorAll(".carusel .item-wrapper");
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener("animationend", function() {
    this.classList.remove("visible", direction);
  });
}

function showItem(direction) {
  items[currentItem].classList.add("next", direction);
  items[currentItem].addEventListener("animationend", function() {
    this.classList.remove("next", direction);
    this.classList.add("visible");
    isEnabled = true;
  });
}

function nextItem(n) {
  hideItem("to-left");
  changeCurrentItem(n + 1);
  showItem("from-right");
}

function previousItem(n) {
  hideItem("to-right");
  changeCurrentItem(n - 1);
  showItem("from-left");
}

document.querySelector(".control.left").addEventListener("click", function() {
  if (isEnabled) {
    previousItem(currentItem);
  }
});

document.querySelector(".control.right").addEventListener("click", function() {
  if (isEnabled) {
    nextItem(currentItem);
  }
});

const toggleScreenHandler = document.querySelector(".item-wrapper");

toggleScreenHandler.addEventListener("click", (e) => {
  if (e.target.classList.contains("black")) {
    e.target
      .querySelectorAll("img")
      .forEach((el) => el.classList.remove("invisible"));
    e.target.classList.remove("black");
  } else {
    e.target.classList.add("invisible");

    e.target.parentElement.classList.add("black");
  }
});

/*Portfolio tags*/

const TAGS = document.getElementById("tags");

TAGS.addEventListener("click", (event) => {
  TAGS.querySelectorAll("div").forEach((el) =>
    el.classList.remove("tag_selected")
  );
  event.target.classList.add("tag_selected");
  shuffleImages();
});

const shuffleImages = () => {
  let listElements = document.getElementById("images");

  for (let i = listElements.children.length; i >= 0; i--) {
    listElements.appendChild(listElements.children[(Math.random() * i) | 0]);
  }
};
