document.addEventListener("DOMContentLoaded", () => {

  // ▼ fade-item（共通）
  const fadeItems = document.querySelectorAll(".js-fade-item");

  const fadeObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-show");
        obs.unobserve(entry.target); // 監視は1回
      }
    });
  }, { threshold: 0.2 }); // 20%見えたら発火

  fadeItems.forEach(item => fadeObserver.observe(item));  //.js-fade-itemがついた要素をまとめて監視


  // ▼ support right画像フェードイン用
  const fadeSingles = document.querySelectorAll(".js-fade-single");

  const singleObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-show");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  fadeSingles.forEach(target => singleObserver.observe(target));


  // ▼ トップボタン
  const pageTopBtn = document.querySelector(".js-pageTop");
  const supportSection = document.querySelector(".support");

  if (pageTopBtn && supportSection) {

    let triggerPos =
      supportSection.offsetTop + supportSection.offsetHeight * 0.2;  //サポートセクション開始位置から20％地点

    window.addEventListener("scroll", () => {
      const triggerPoint = window.scrollY + window.innerHeight / 2;  //画面中央がセクションの20%地点までスクロールしたら

      if (triggerPoint >= triggerPos) {
        pageTopBtn.classList.add("is-show");
      } else {
        pageTopBtn.classList.remove("is-show");
      }
    });

    pageTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});


const hamburger = document.querySelector(".js-hamburger");
const drawer = document.querySelector(".js-drawer");

// ハンバーガー開閉
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-open");
  drawer.classList.toggle("is-open");

});

// メニュー内リンクをクリックしたら閉じる
const drawerLinks = document.querySelectorAll(".js-drawer a");

drawerLinks.forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("is-open");
    drawer.classList.remove("is-open");
  });
});




