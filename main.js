import { urlImages, sizes, icons } from "./config.js";

// Thêm icon
const listIcons = icons.map((icon) => {
  return `
  <img src="${icon}"/>
  `;
}).join('');
const htmlListIcons = document.querySelector(".icon");
htmlListIcons.innerHTML = listIcons;

// Thêm danh sách ảnh
const listItems = urlImages
  .map((url) => {
    return `<img src="${url}" class='image'/>`;
  })
  .join("");

const htmlListItem = document.querySelector(".list-item");
htmlListItem.innerHTML = listItems;

// Thêm ảnh vào giữa trang
const images = document.querySelectorAll(".image");
const htmlIem = document.querySelector(".item");
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    document.querySelector(".image.clicked")?.classList.remove("clicked");
    image.classList.add('clicked')
    const clickedImage = e.target;
    htmlIem.innerHTML = `<img src="${clickedImage.src}" class="image"/>`;
  });
});

//Thêm button size
const htmlButtonSize = document.querySelector(".list-size");
const buttonSize = sizes
  .map((size) => {
    return `<button class='button'>${size}</button>`;
  })
  .join("");
htmlButtonSize.innerHTML = buttonSize;

// Thay đổi trạng thái button
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector(".button.size")?.classList.remove("size");
    button.classList.add("size");
  })  
});


