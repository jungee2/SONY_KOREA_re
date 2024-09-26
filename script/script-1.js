$(document).ready(function(){
    
    // support_top 버튼 ---------------------------------------------------------------
    // 스크롤 위치에 따라 탑버튼 표시
    $(window).scroll(function () {

    if ($(this).scrollTop() > 400) {
        $('.support_top_btn').addClass('show');
    } else {
    $('.support_top_btn').removeClass('show');
    }
    });
    
    // 위로 올라가는 애니메이션
    $('.support_top_btn, .support_top_btn_white').click(function () {
        $("html, body").animate({
        scrollTop: 0
        }, 200)
    });
    
    // 페이지 하단에서 100픽셀 이내에 도달했을 때 하얀 버튼 표시
    $(window).scroll(function () {

    if ($(this).scrollTop() + $(window).height() >= $(document).height() - 100) {
        $('.support_top_btn_white').addClass('show');
        $('.support_top_btn').hide();
        } else {
        $('.support_top_btn_white').removeClass('show');
        $('.support_top_btn').show();
        }
    });



    // banner 이미지 스와이퍼 슬라이드 --------------------------------------------------------
    var swiper = new Swiper(".main_banner", {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".banner_next",
            prevEl: ".banner_prev"
        }
    });
    


    // news 공지 스와이퍼 슬라이드 -------------------------------------------------------
    function swiperSlide__init() {
        var swiper = new Swiper(".news_con", {
            spaceBetween: 100,
            centeredSlides: true,
    
            // pagination: {
            //     el: ".swiper-pagination",
            //     clickable: true
            // },

            navigation: {
                nextEl: ".nw_next",
                prevEl: ".nw_prev"
            }
        });
    }
    swiperSlide__init();
});



// .m_main_top_menu 표시 -----------------------------------------------------------------
$('.m_menu_icon').click(function () {
    $('.m_main_top_menu').fadeToggle();
});


// swiper_1_innit(); 반응형 스와이퍼 ------------------------------------------------------
// function m_swiper_1_innit() {
//     var swiper = new Swiper(".m_main_img_swiper_1", {
//         slidesPerView: 2,
//         freeMode: true
//     });
// };
// m_swiper_1_innit();