{
  let modal = document.querySelector(".login-modal");
  let modal_close = document.querySelector(".modal-content__close");
  modal_close.addEventListener("click", () => {
    modal.style.display = "none";
  });
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  let elem = document.querySelector(".nav__link_login");
  elem.addEventListener("click", () => {
    modal.style.display = "flex";
  });
}