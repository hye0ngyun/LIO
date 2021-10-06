{
  let login_modal = `<form action="" method="POST">
  <div class="login-modal">
    <div class="login-modal__content modal-content">
      <img
        class="modal-content__close"
        src="../img/close_white_24dp.svg"
        alt="modal-close"
      />
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
        <a href="" class="modal-content__box modal-content__box_small"
          >비밀번호 찾기</a
        >
        <a href="" class="modal-content__box modal-content__box_small"
          >회원가입</a
        >
      </div>
      <input
        type="submit"
        class="modal-content__box modal-content__box_big"
        value="로그인"
      />
      <a href="" class="modal-content__box modal-content__box_big"
        >구글로 로그인</a
      >
      <a href="" class="modal-content__box modal-content__box_big"
        >네이버로 로그인</a
      >
    </div>
  </div>
</form>`
document.write(login_modal);
}