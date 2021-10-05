{
  let header = `<header class="header">
  <a href="index.html" class="header__logo"
    ><img src="../img/LIO_Link_In_One.svg" alt="LIO_logo"
  /></a>
  <input type="checkbox" name="chk" id="nav-toggle" />
  <label for="nav-toggle" class="open-menu-btn">
    <img src="../img/menu_black_24dp.svg" alt="" />
  </label>
  <ul class="nav">
    <li class="nav__item">
      <a href="" class="nav__item-title">서비스소개</a>
    </li>
    <li class="nav__item" id="study">
      <a href="#study" class="nav__item-title">스터디</a>
      <ul class="nav-sub">
        <li class="nav-sub__item">
          <a href="../HTML/study-find.html" class="nav__link"
            >스터디 찾기</a
          >
        </li>
        <li class="nav-sub__item">
          <a href="../HTML/study-recruit.html" class="nav__link"
            >스터디 모집</a
          >
        </li>
      </ul>
    </li>
    <li class="nav__item" id="project">
      <a href="#project" class="nav__item-title">프로젝트</a>
      <ul class="nav-sub">
        <li class="nav-sub__item">
          <a href="../HTML/project-find.html" class="nav__link"
            >프로젝트 찾기</a
          >
        </li>
        <li class="nav-sub__item">
          <a href="../HTML/project-recruit.html" class="nav__link"
            >프로젝트 모집</a
          >
        </li>
      </ul>
    </li>
    <li class="nav__item" id="board">
      <a href="#board" class="nav__item-title">게시판</a>
      <ul class="nav-sub">
        <li class="nav-sub__item">
          <a href="../HTML/board-free.html" class="nav__link"
            >자유 게시판</a
          >
        </li>
        <li class="nav-sub__item">
          <a href="../HTML/board-question.html" class="nav__link"
            >질문 게시판</a
          >
        </li>
        <li class="nav-sub__item">
          <a href="../HTML/board-notice.html" class="nav__link">공지 사항</a>
        </li>
      </ul>
    </li>
    <li class="nav__item">
      <a href="" class="nav__item-title">최근트렌드</a>
    </li>
    <li class="nav__item">
      <a href="" class="nav__item-title nav__link_login"
        >로그인 / 회원가입</a
      >
    </li>
  </ul>
  <label for="nav-toggle" class="close-menu-btn">
    <img src="../img/close_black_24dp.svg" alt="" />
  </label>
</header>`
document.write(header);
}