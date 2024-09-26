// support_sidemenu 애니메이션
function SideMenu__init() {
    $('.sidemenu_menu_1 > *').click(function () {
        let $this = $(this);

        $this.siblings('.active').removeClass('active');

        if ($this.hasClass('active')) {
            $this.removeClass('active');
        }
        else {
            $this.addClass('active');
        }
    });
};
// $(".sidemenu_menu_1 > li:contains('자주 찾는 질문')").click(function () {
//     $('.support_contents').toggle();
// });


// support_faq_box 애니메이션
function FaqBox__init() {
    $('.support_faq_box > ul > li').click(function () {
        let $this = $(this);

        // $this.siblings('.show').removeClass('show');

        if ($this.hasClass('show')) {
            $this.find(' > .faq_box_answer').slideUp(200); // 추가
            $this.removeClass('show');
        }
        else {
            $this.find(' > .faq_box_answer').slideDown(200); // 추가
            $this.addClass('show');
        }
    });

    $('.faq_box_answer').click(function () {
        return false;
    });
};


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

//  페이지 하단에서 100픽셀 이내에 도달했을 때 하얀 버튼을 표시
$(window).scroll(function () {

    var scrollTop = $(this).scrollTop(); // 현재 스크롤 위치
    var documentHeight = $(document).height(); // 문서 전체 높이
    var windowHeight = $(window).height(); // 창의 높이

    // 페이지 상단에서 현재 스크롤된 거리 + 브라우저 창의 높이 >= 전체 문서의 높이 - 100px
    // if ($(this).scrollTop() + $(window).height() >= $(document).height() - 100) {
    if (scrollTop + windowHeight >= documentHeight - 100) {
        $('.support_top_btn_white').addClass('show');
        $('.support_top_btn').hide();
    } else {
        $('.support_top_btn_white').removeClass('show');
        $('.support_top_btn').show();
    }
});

SideMenu__init();
FaqBox__init();


// m_support_main_menu 메뉴 선택 시 해당 메뉴 이름으로 바뀌는 애니메이션
$(document).ready(function () {
    $('.m_support_main_menu > div').click(function () {
        var ico = $(".m_support_main_menu_top_ico");
        var supportTopbody = $(".m_support_main_menu_body");

        $(window).click()
        if (supportTopbody.hasClass("show")) {
            supportTopbody.removeClass("show");
            ico.removeClass("rotate");
        } else {
            supportTopbody.addClass("show");
            ico.addClass("rotate");
        }
    });

    // 메뉴 항목 클릭 처리
    $('.m_support_main_menu_body li').click(function () {
        // 클릭한 항목의 텍스트를 span 자리에 설정
        $('.m_support_main_menu > div > span').text($(this).text());
    });
});



$(".m_support_main_menu_body > ul > li:contains('자주 찾는 질문')").click(function () {
    $('.m_support_faq_box').removeClass('active');
});
$(".m_support_main_menu_body > ul > li:not(:first-child)").click(function () {
    $('.m_support_faq_box').addClass('active');
});


// $('.mobile_wrap .m_menu_icon').click(function () {

//     if ($('.m_support_top_menu').hasClass('active')) {
//         $('.m_support_top_menu').removeClass('active');
//         $('.m_support_top_menu').fadeOut();
//     }
//     else {
//         $('.m_support_top_menu').addClass('active');
//         $('.m_support_top_menu').fadeIn();
//     }
// });

// 모바일 우측상단 터치 시 .m_support_top_menu 표시
$('.m_menu_icon').click(function () {
    $('.m_support_top_menu').fadeToggle();
});

function CategorySelect__init() {
    // category_1 1차 메뉴 클릭 이벤트
    $(".category_1 li").click(function () {
        $(".category_2 > li").addClass("active");
        $(".category_2 > li").removeClass("bold");
        $(".category_3 > li").removeClass("active");
    });
    $(".category_1 li:contains('전체')").click(function () {
        // $(".category_2 > li").toggleClass("active");
        $(".category_2 > li:nth-child(1) > span").text("전체");
        $(".category_2 > li:nth-child(2) > span").text("디지털 카메라");
        $(".category_2 > li:nth-child(3) > span").text("캠코더 및 비디오 카메라");
        $(".category_2 > li:nth-child(4) > span").text("포토 프린터 및 기타");
        $(".category_2 > li:nth-child(5) > span").text("헤드폰");
        $(".category_2 > li:nth-child(6) > span").text("홈 비디오");
        $(".category_2 > li:nth-child(7) > span").text("사운드바 및 홈 시네마");
        $(".category_2 > li:nth-child(8) > span").text("오디오 컴포넌트");
        $(".category_2 > li:nth-child(9) > span").text("메모리 카드");
        $(".category_2 > li:nth-child(10) > span").text("카메라&캠코더 액세서리");
    });
    $(".category_1 li:contains('카메라')").click(function () {
        $(".category_2 > li").addClass("active");
        $(".category_2 > li:nth-child(1) > span").text("전체");
        $(".category_2 > li:nth-child(2) > span").text("디지털 카메라");
        $(".category_2 > li:nth-child(3) > span").text("캠코더 및 비디오 카메라");
        $(".category_2 > li:nth-child(4) > span").text("포토 프린터 및 기타");
        $(".category_2 > li:nth-child(5) > span").text("");
        $(".category_2 > li:nth-child(6) > span").text("");
        $(".category_2 > li:nth-child(7) > span").text("");
        $(".category_2 > li:nth-child(8) > span").text("");
        $(".category_2 > li:nth-child(9) > span").text("");
        // console.log("카메라");
    });

    $(".category_1 li:contains('오디오&비디오')").click(function () {
        $(".category_2 > li").addClass("active");
        $(".category_2 > li:nth-child(1) > span").text("전체");
        $(".category_2 > li:nth-child(2) > span").text("헤드폰");
        $(".category_2 > li:nth-child(3) > span").text("홈 비디오");
        $(".category_2 > li:nth-child(4) > span").text("사운드바 및 홈 시네마");
        $(".category_2 > li:nth-child(5) > span").text("오디오 컴포넌트");
        $(".category_2 > li:nth-child(6) > span").text("");
        $(".category_2 > li:nth-child(7) > span").text("");
        $(".category_2 > li:nth-child(8) > span").text("");
        $(".category_2 > li:nth-child(9) > span").text("");
        // console.log("오디오&비디오");
    });
    $(".category_1 li:contains('스토리지 및 케이블')").click(function () {
        $(".category_2 > li").addClass("active");
        $(".category_2 > li:nth-child(1) > span").text("전체");
        $(".category_2 > li:nth-child(2) > span").text("메모리 카드");
        $(".category_2 > li:nth-child(3) > span").text("카메라&캠코더 액세서리");
        $(".category_2 > li:nth-child(4) > span").text("오디오&비디오 액세서리");
        $(".category_2 > li:nth-child(5) > span").text("오디오 컴포넌트");
        $(".category_2 > li:nth-child(6) > span").text("");
        $(".category_2 > li:nth-child(7) > span").text("");
        $(".category_2 > li:nth-child(8) > span").text("");
        $(".category_2 > li:nth-child(9) > span").text("");
        $(".category_2 > li:nth-child(9) > span").text("");
        // console.log("스토리지 및 케이블");
    });
    $(".category_1 li:contains('비즈니스')").click(function () {
        $(".category_2 > li").addClass("active");
        $(".category_2 > li:nth-child(1) > span").text("전체");
        $(".category_2 > li:nth-child(2) > span").text("전문가용 카메라");
        $(".category_2 > li:nth-child(3) > span").text("프로젝터");
        $(".category_2 > li:nth-child(4) > span").text("전문가용 오디오");
        $(".category_2 > li:nth-child(5) > span").text("");
        $(".category_2 > li:nth-child(6) > span").text("");
        $(".category_2 > li:nth-child(7) > span").text("");
        $(".category_2 > li:nth-child(8) > span").text("");
        $(".category_2 > li:nth-child(9) > span").text("");
        $(".category_2 > li:nth-child(9) > span").text("");
        // console.log("비즈니스");
    });
    $(".category_1 li:contains('기타')").click(function () {
        $(".category_2 > li").addClass("active");
        $(".category_2 > li:nth-child(1) > span").text("스포츠 엔터테인먼트");
        $(".category_2 > li:nth-child(2) > span").text("Xperia 스마트 장치");
        $(".category_2 > li:nth-child(3) > span").text("");
        $(".category_2 > li:nth-child(4) > span").text("");
        $(".category_2 > li:nth-child(5) > span").text("");
        $(".category_2 > li:nth-child(6) > span").text("");
        $(".category_2 > li:nth-child(7) > span").text("");
        $(".category_2 > li:nth-child(8) > span").text("");
        $(".category_2 > li:nth-child(9) > span").text("");
        $(".category_2 > li:nth-child(9) > span").text("");
        // console.log("기타");
    });

    // category_2 2차메뉴 클릭 이벤트
    $(".category_2 li").click(function () {
        $(".category_3 > li").addClass("active");
        $(".category_3 > li").removeClass("bold"); // 2차메뉴 클릭 시 3차메뉴 볼드 해제

    });
    $(".category_2 li:contains('전체')").click(function () {
        $(".category_3 > li").addClass("active");
        $(".category_3 > li:nth-child(2) > span").text("컴팩트 카메라");
        $(".category_3 > li:nth-child(3) > span").text("렌즈 교환식 카메라");
        $(".category_3 > li:nth-child(4) > span").text("렌즈");
        $(".category_3 > li:nth-child(5) > span").text("렌즈 교환 캠코더");
        $(".category_3 > li:nth-child(6) > span").text("Memory 캠코더");
        // console.log("2차전체");
    });
    $(".category_2 li:contains('디지털 카메라')").click(function () {
        $(".category_3 > li:nth-child(2) > span").text("컴팩트 카메라");
        $(".category_3 > li:nth-child(3) > span").text("렌즈 교환식 카메라");
        $(".category_3 > li:nth-child(4) > span").text("렌즈");
        $(".category_3 > li:nth-child(5) > span").text("");
        $(".category_3 > li:nth-child(6) > span").text("");
        // console.log("2차_디지털 카메라");
    });
    $(".category_2 li:contains('캠코더 및 비디오 카메라')").click(function () {
        $(".category_3 > li").addClass("active");
        $(".category_3 > li:nth-child(2) > span").text("렌즈 교환 캠코더");
        $(".category_3 > li:nth-child(3) > span").text("Memory 캠코더");
        $(".category_3 > li:nth-child(4) > span").text("하드 드라이브 캠코더");
        $(".category_3 > li:nth-child(5) > span").text("DVD 캠코더");
        $(".category_3 > li:nth-child(6) > span").text("");
        // console.log("2차_캠코더 및 비디오 카메라");
    });
    $(".category_2 li:contains('포토 프린터 및 기타')").click(function () {
        $(".category_3 > li").addClass("active");
        $(".category_3 > li:nth-child(2) > span").text("디지털 포토 프레임");
        $(".category_3 > li:nth-child(3) > span").text("디지털 사진 프린터");
        $(".category_3 > li:nth-child(4) > span").text("블루레이 & DVD 라이터");
        $(".category_3 > li:nth-child(5) > span").text("");
        $(".category_3 > li:nth-child(6) > span").text("");
        // console.log("2차_포토 프린터 및 기타");
    });
}
CategorySelect__init();


// support_select 볼드 효과
$('.support_select ul li').click(function () {
    let $this = $(this);

    $this.siblings('.bold').removeClass('bold');

    if ($this.hasClass('bold')) {
        $this.removeClass('bold');
    }
    else {
        $this.addClass('bold');
    }
});


// m_support_faq_box 아코디언 메뉴 애니메이션
$('.m_support_faq_box > ul > li').click(function () {
    let $this = $(this);

    // $this.siblings('.show').removeClass('show');

    if ($this.hasClass('show')) {
        $this.find(' > .m_faq_box_answer').slideUp(200); // 추가
        $this.removeClass('show');
    }
    else {
        $this.find(' > .m_faq_box_answer').slideDown(200); // 추가
        $this.addClass('show');
    }
});

$('.m_faq_box_answer').click(function () {
    return false;
});

$(".search_top").click(function () {
    var productTopbody = $(".product_top_2_body");
    var ico = $(".product_top_ico");

    if (productTopbody.hasClass("show")) {
        productTopbody.removeClass("show");
        ico.removeClass("rotate");
    } else {
        productTopbody.addClass("show");
        ico.addClass("rotate");
    }
    $('.search_top li').click(function () {
        // 클릭한 항목의 텍스트를 span 자리에 설정
        $('.search_top > div > span').text($(this).text());
    });
    // $(window).click()
    //     if (productTopbody.hasClass("show")) {
    //         productTopbody.removeClass("show");
    //         ico.removeClass("rotate");
    //     } else {
    //         productTopbody.addClass("show");
    //         ico.addClass("rotate");
    //     }
});
$(".m_search_top").click(function () {
    var mSearchTopbody = $(".m_search_top_2_body");
    var ico = $(".product_top_ico");

    if (mSearchTopbody.hasClass("show")) {
        mSearchTopbody.removeClass("show");
        ico.removeClass("rotate");
    } else {
        mSearchTopbody.addClass("show");
        ico.addClass("rotate");
    }
    $('.m_search_top li').click(function () {
        // 클릭한 항목의 텍스트를 span 자리에 설정
        $('.m_search_top > div > span').text($(this).text());
    });
});


// 1차 메뉴 mobile_select_1 클릭 시 mobile_select_box 활성화
$('.mobile_select_1').click(function () {
    $('.mobile_select_box_1').fadeIn();
});
$('.mobile_select_box_1').click(function () {
    $('.mobile_select_box_1').fadeOut();
});

// mobile_select_menu 선택 시 2차 메뉴 활성화, 1차메뉴 텍스트 변경
$('.mobile_select_menu_1 > li').click(function () {
    console.log('1차메뉴 선택, 2차메뉴 활성화하기, 3차메뉴 활성화돼있다면 취소')
    $('.mobile_select_2').addClass('active');
    $('.mobile_select_2 div img').attr('src', 'img/arrow_right.png');
    $('.mobile_select_1 span').text($(this).text());
    $('.mobile_select_3').removeClass('active');
    $('.mobile_select_3 div img').attr('src', 'img/arrow_right_gray.png');
    // $('.mobile_select_2 span').text('-- 선택 --');  // 2차 메뉴 기본값으로 초기화
    // $('.mobile_select_3 span').text('-- 선택 --');
});

// mobile_select_menu_1 > li 1차 메뉴 선택에 따라 2차 메뉴 텍스트 달라짐
$(".mobile_select_menu_1 > li:contains('전체')").click(function () {
    $(".mobile_select_menu_2 > li:nth-child(2)").text("디지털 카메라");
    $(".mobile_select_menu_2 > li:nth-child(3)").text("캠코더 및 비디오 카메라");
    $(".mobile_select_menu_2 > li:nth-child(4)").text("포토 프린터 및 기타");
    $(".mobile_select_menu_2 > li:nth-child(5)").text("헤드폰");
    $(".mobile_select_menu_2 > li:nth-child(6)").text("홈 비디오");
});
$(".mobile_select_menu_1 > li:contains('카메라')").click(function () {
    $(".mobile_select_menu_2 > li:nth-child(2)").text("디지털 카메라");
    $(".mobile_select_menu_2 > li:nth-child(3)").text("캠코더 및 비디오 카메라");
    $(".mobile_select_menu_2 > li:nth-child(4)").text("포토 프린터 및 기타");
    $(".mobile_select_menu_2 > li:nth-child(5)").text("");
    $(".mobile_select_menu_2 > li:nth-child(6)").text("");
});
$(".mobile_select_menu_1 > li:contains('오디오&비디오')").click(function () {
    $(".mobile_select_menu_2 > li:nth-child(2)").text("헤드폰");
    $(".mobile_select_menu_2 > li:nth-child(3)").text("홈 비디오");
    $(".mobile_select_menu_2 > li:nth-child(4)").text("사운드바 및 홈 시네마");
    $(".mobile_select_menu_2 > li:nth-child(5)").text("");
    $(".mobile_select_menu_2 > li:nth-child(6)").text("");
});
$(".mobile_select_menu_1 > li:contains('스토리지 및 케이블')").click(function () {
    $(".mobile_select_menu_2 > li:nth-child(2)").text("메모리 카드");
    $(".mobile_select_menu_2 > li:nth-child(3)").text("USB 플래시 드라이브");
    $(".mobile_select_menu_2 > li:nth-child(4)").text("외장 HDD-SSD");
    $(".mobile_select_menu_2 > li:nth-child(5)").text("");
    $(".mobile_select_menu_2 > li:nth-child(6)").text("");
});



// mobile_select_2.active라면 2차 메뉴 나타나기
$(document).on('click', '.mobile_select_2.active', function () {
    console.log('2차 메뉴 나타나기');
    $('.mobile_select_box_2').fadeIn();
    $(".mobile_select_menu_2 > li").click(function () {
    $('.mobile_select_3 span').text('-- 선택 --');
    });

    $(".mobile_select_menu_2 > li:contains('전체')").click(function () {
        $('.mobile_select_3').removeClass('active');
    $('.mobile_select_3 div img').attr('src', 'img/arrow_right_gray.png');
    });
    $(".mobile_select_menu_2 > li:contains('디지털 카메라')").click(function () {
        $(".mobile_select_menu_3 > li:nth-child(2)").text("컴팩트 카메라");
        $(".mobile_select_menu_3 > li:nth-child(3)").text("렌즈 교환식 카메라");
        $(".mobile_select_menu_3 > li:nth-child(4)").text("렌즈");
        $(".mobile_select_menu_3 > li:nth-child(5)").text("");
        $(".mobile_select_menu_3 > li:nth-child(6)").text("");
    });
    $(".mobile_select_menu_2 > li:contains('캠코더 및 비디오 카메라')").click(function () {
        $(".mobile_select_menu_3 > li:nth-child(2)").text("렌즈 교환 캠코더");
        $(".mobile_select_menu_3 > li:nth-child(3)").text("Memory 캠코더");
        $(".mobile_select_menu_3 > li:nth-child(4)").text("DVD 캠코더");
        $(".mobile_select_menu_3 > li:nth-child(5)").text("");
        $(".mobile_select_menu_3 > li:nth-child(6)").text("");
    });
    $(".mobile_select_menu_2 > li:contains('포토 프린터 및 기타')").click(function () {
        $(".mobile_select_menu_3 > li:nth-child(2)").text("디지털 포토 프레임");
        $(".mobile_select_menu_3 > li:nth-child(3)").text("디지털 사진 프린터");
        $(".mobile_select_menu_3 > li:nth-child(4)").text("블루레이 & DVD 라이터");
        $(".mobile_select_menu_3 > li:nth-child(5)").text("");
        $(".mobile_select_menu_3 > li:nth-child(6)").text("");
    });
    $(".mobile_select_menu_2 > li:contains('헤드폰')").click(function () {
        $(".mobile_select_menu_3 > li:nth-child(2)").text("무선 헤드폰");
        $(".mobile_select_menu_3 > li:nth-child(3)").text("유선 헤드폰");
        $(".mobile_select_menu_3 > li:nth-child(4)").text("게이밍 헤드폰");
        $(".mobile_select_menu_3 > li:nth-child(5)").text("");
        $(".mobile_select_menu_3 > li:nth-child(6)").text("");
    });
    $(".mobile_select_menu_2 > li:contains('홈 비디오')").click(function () {
        $(".mobile_select_menu_3 > li:nth-child(2)").text("블루레이 디스크 플레이어-레코더");
        $(".mobile_select_menu_3 > li:nth-child(3)").text("DVD 플레이어-레코더");
        $(".mobile_select_menu_3 > li:nth-child(4)").text("");
        $(".mobile_select_menu_3 > li:nth-child(5)").text("");
        $(".mobile_select_menu_3 > li:nth-child(6)").text("");
    });
    $(".mobile_select_menu_2 > li:contains('사운드바 및 홈 시네마')").click(function () {
        $(".mobile_select_menu_3 > li:nth-child(2)").text('DVD 홈 시네마 시스템');
        $(".mobile_select_menu_3 > li:nth-child(3)").text('');
        $(".mobile_select_menu_3 > li:nth-child(4)").text('');
        $(".mobile_select_menu_3 > li:nth-child(5)").text("");
        $(".mobile_select_menu_3 > li:nth-child(6)").text("");
    });
    $(".mobile_select_menu_2 > li:contains('메모리 카드')").click(function () {
        $(".mobile_select_menu_3 > li:nth-child(2)").text('SD 카드');
        $(".mobile_select_menu_3 > li:nth-child(3)").text('');
        $(".mobile_select_menu_3 > li:nth-child(4)").text('');
    });

});
$('.mobile_select_box_2').click(function () {
    $('.mobile_select_box_2').fadeOut();
});

// mobile_select_menu 선택 시 2차 메뉴 활성화, 2차메뉴 텍스트 변경
$('.mobile_select_menu_2 > li').click(function () {
    // 클릭한 항목의 텍스트를 span 자리에 설정
    $('.mobile_select_2 span').text($(this).text());
    $('.mobile_select_3').addClass('active');
    $('.mobile_select_3 div img').attr('src', 'img/arrow_right.png');
});

// 3차 메뉴 나타나기
$(document).on('click', '.mobile_select_3.active', function () {
    console.log('3차 나타나라 얍');
    $('.mobile_select_box_3').fadeIn();
});

// mobile_select_3.active일 때 mobile_select_menu_2 > li 클릭하면, 텍스트 변경
// $(document).on('click', '.mobile_select_3.active', function () {
//     $('.mobile_select_menu_2 > li').click(function () {
//         // $('.mobile_select_3 span').text('-- 선택 --');
//     });
// });
$('.mobile_select_box_3').click(function () {
    $('.mobile_select_box_3').fadeOut();
});

// 3차 메뉴 mobile_select_menu > li 클릭 시 3차메뉴 텍스트 변경
$('.mobile_select_menu_3 > li').click(function () {
    // 클릭한 항목의 텍스트를 span 자리에 설정
    $('.mobile_select_3 span').text($(this).text());
});