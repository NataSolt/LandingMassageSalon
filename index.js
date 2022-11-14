const popupImgClose = document.querySelector(".popup__close");
const popupImage = document.querySelector(".popup");
//большое фото попап
const bigImg = document.querySelector(".popup__img");

const cardImages = document.querySelectorAll(".about-me__img");

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscUp);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
// открытие попапа картинки
function openImg(event) {
  bigImg.src = event.target.src;
  bigImg.alt = event.target.alt;
  openPopup(popupImage);
}

//функция закрытие попапа картинки
function handlePopupImgCloseClick() {
  closePopup(popupImage);
  document.removeEventListener("keydown", handleEscUp);
}

cardImages.forEach((item) => {
  item.addEventListener("click", openImg);
});

popupImgClose.addEventListener("click", handlePopupImgCloseClick);

// //слушатель закрытие попапов escape
const closePopupEsc = (popup) => {
  document.removeEventListener("keydown", handleEscUp); // удаляем событие keydown
  popup.classList.remove("popup_opened"); // скрываем попап
};
// И дальше внутри коллбэка у нас есть объект event и мы можем узнать в каком месте произошел клик:
const handleEscUp = (evt) => {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".popup_opened");
    closePopupEsc(activePopup);
  }
};

//функция закрытия попап картинки на оверлее
popupImage.addEventListener("click", (evt) => {
  if (
    evt.target.classList.contains("popup") ||
    evt.target.classList.contains("popup__close")
  ) {
    // закрываем только тогда, когда надо, т.е. только при том клике, которые происходит по нужному элементу
    closePopup(popupImage);
  }
});
