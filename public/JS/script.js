{
  let modal_login = document.querySelector("#open-login-modal");
  let modal_find = document.querySelector("#login-modal-find");
  let modal_signup = document.querySelector("#login-modal-signup");
  // let modal_close = document.querySelector(".modal-content__close");
  // modal_close.addEventListener("click", () => {
  //   modal.style.visiblity = "0";
  // });
  window.onclick = function (event) {
    if (event.target === modal_login) {
      // modal.style.visiblity = "0";
      window.location.href = "#";
    }
    else if (event.target === modal_find) {
      window.location.href = "#";
    }
    else if (event.target === modal_signup) {
      window.location.href = "#";
    }
  };
  // let elem = document.querySelector(".nav__link_login");
  // elem.addEventListener("click", () => {
  //   modal.style.visiblity = "1";
  // });
}