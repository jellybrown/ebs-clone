(() => {

    //bx_slider 설정
    $(document).ready(function () {
        $('.fun_slide').bxSlider();
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
                    detailList[k].classList.remove("active")
                }
                detailList[i].classList.add("active")
            }
        })


    }





})();