(() => {
  //bx_slider 설정
  $(document).ready(function () {
    $(".fun_slide").bxSlider();
  });

  //main_footer notice 탭 기능
  const noticeTit = document.querySelectorAll(".notice_tit");
  const detailList = document.querySelectorAll(".detail_list");

  for (let i = 0; i < noticeTit.length; i++) {
    noticeTit[i].addEventListener("click", function (e) {
      e.preventDefault();
      console.log("click");

      for (let j = 0; j < noticeTit.length; j++) {
        noticeTit[j].classList.remove("active");
      }
      e.target.classList.add("active");

      if (noticeTit[i].classList.contains("active")) {
        for (let k = 0; k < noticeTit.length; k++) {
          detailList[k].classList.remove("active");
        }
        detailList[i].classList.add("active");
      }
    });
  }

  const sildeF = document.querySelector(".slide1 img");
  const sildeS = document.querySelector(".slide2 img");
  window.addEventListener("resize", function () {
    const container = document.querySelectorAll(".container");

    if (container[0].clientWidth == 980) {
    }

    /*  window창이 500일때 이미지가 바뀜
        if (container[0].clientWidth == 980) {
            sildeF.setAttribute('src', 'images/slide_mini_01.jpg')
            sildeS.setAttribute('src', 'images/slide_mini_02.png')
        }

        if (container[0].clientWidth == 1280) {
            sildeF.setAttribute('src', 'images/slide_img_01.jpg')
            sildeS.setAttribute('src', 'images/slide_img_02.png')
        }
*/
  });
})();
