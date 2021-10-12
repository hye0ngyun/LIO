{
  let login_modal = `<form action="" method="POST">
    <div class="login-modal" id="open-login-modal">
      <div class="login-modal__content modal-content">
        <a href="#">
          <img
            class="modal-content__close"
            src="../img/close_white_24dp.svg"
            alt="modal-close"
          />
        </a>
        <input
          type="email"
          placeholder="이메일"
          class="modal-content__input"
        />
        <input
          type="password"
          placeholder="비밀번호"
          class="modal-content__input"
        />
        <div class="modal-content_ly1">
          <a
            href="#login-modal-find"
            class="modal-content__box modal-content__box_small"
            >비밀번호 찾기</a
          >
          <a
            href="#login-modal-signup"
            class="modal-content__box modal-content__box_small"
            >회원가입</a
          >
        </div>
        <input
          type="submit"
          class="modal-content__box modal-content__box_big"
          value="로그인"
        />
        <a href="" class="modal-content__box modal-content__box_big modal-content__google"
          >구글로 로그인</a
        >
        <a href="" class="modal-content__box modal-content__box_big modal-content__naver"
          >네이버로 로그인</a
        >
      </div>
    </div>
  </form>
  <form action="" method="POST">
    <div class="login-modal" id="login-modal-find">
      <div class="login-modal__content modal-content">
        <a href="#open-login-modal">
          <img
            class="modal-content__prev"
            src="../img/keyboard_arrow_left_white_24dp.svg"
            alt="modal-prev"
          />
        </a>
        <a href="#">
          <img
            class="modal-content__close"
            src="../img/close_white_24dp.svg"
            alt="modal-close"
          />
        </a>
        <input
          type="email"
          placeholder="이메일"
          class="modal-content__input"
        />
        <input
          type="submit"
          class="modal-content__box modal-content__box_big"
          value="비밀번호 초기화"
        />
      </div>
    </div>
  </form>
  <form action="" method="POST">
    <div class="login-modal" id="login-modal-signup">
      <div class="login-modal__content modal-content">
        <a href="#open-login-modal">
          <img
            class="modal-content__prev"
            src="../img/keyboard_arrow_left_white_24dp.svg"
            alt="modal-prev"
          />
        </a>
        <a href="#">
          <img
            class="modal-content__close"
            src="../img/close_white_24dp.svg"
            alt="modal-close"
          />
        </a>
        <input
          type="email"
          placeholder="이메일"
          class="modal-content__input"
        />
        <input
          type="password"
          placeholder="비밀번호"
          class="modal-content__input"
        />
        <input
          type="text"
          placeholder="이름"
          class="modal-content__input"
        />
        <input
          type="text"
          placeholder="닉네임"
          class="modal-content__input"
        />
        <input
          type="submit"
          class="modal-content__box modal-content__box_big"
          value="회원가입"
        />
      </div>
    </div>
  </form>
</form>`
document.write(login_modal);
}
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