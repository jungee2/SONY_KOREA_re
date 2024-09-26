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

    
    
    // all_product 클릭시 목표 위치로 스크롤 -------------------------------------------
    $(".ap_body > ul > li").click(function() {
        $('html, body').animate({
            scrollTop: $(".product").offset().top - 64 // 목표 위치에서 메뉴바(64픽셀) 높이 만큼 뺌
        }, 400);
    });
    


    // product_menu 왼쪽 메뉴 menu_list 슬라이드 ---------------------------------------
    $('.menu_list').click(function() {
        $(this).find('.product_sub_menu').slideToggle(300); 
    });



    // product_menu 왼쪽 메뉴 클릭시 해당 메뉴 활성화 -----------------------------------
    $('.product_menu > ul > li').click(function () {
        let $this = $(this);
        
        if ($this.hasClass('active')) {
        $this.removeClass('active');
        }
        else {
        $this.addClass('active');
        }
    });



    // product_list 오른쪽 상단 메뉴 클릭시 해당 메뉴 활성화 ---------------------------
    $('.product_list > span').click(function () {
        let $this = $(this);

        $this.siblings('.active').removeClass('active');

        if ($this.hasClass('active')) {
            return;
        }
        else {
        $this.addClass('active');
        }
    });

    

    // product_top 드롭다운 메뉴---------------------------------------------------------
    $(".product_top_2").click(function() {
        var productTopbody = $(".product_top_2_body");
        var ico = $(".product_top_ico");

        if (productTopbody.hasClass("show")) {
            productTopbody.removeClass("show");
            ico.removeClass("rotate");
        } else {
            productTopbody.addClass("show");
            ico.addClass("rotate");
        }
    });

    // 드롭다운 메뉴 항목 클릭 처리
    $('.product_top_2_body > ul > li').click(function () {
        // 클릭한 항목의 텍스트를 span 자리에 설정
        $('.product_top_2 > div > span').text($(this).text());
    });



    // 첫 번째 menu list 활성화 -----------------------------------
    $('.product_list > span:first-child').addClass('active');
    $('#TrylyWireless').show();

    // 및 해당 내용 표시
    $(".product_list > span").click(function () {
        $(".content").hide();
    
        var target = $(this).data("target");
    
        $("#" + $(this).data("target")).show();
    });



    // 제품 이미지 변경 슬라이드 애니메이션 --------------------------------------------
    $('.product_color').click(function() {
        var $this = $(this); // 클릭된 컬러 박스
        var $product = $this.closest('.buy_product_text').prev('.buy_product_img'); // 이미지 컨테이너 찾기
        var newImage = $this.data('image');
        var $image = $product.find('#buy_product_img');
    
        // 이미 활성화된 상태인지 확인
        if ($this.hasClass('active')) {
            return; // 이미 활성화된 상태라면 아무 작업도 하지 않음
        }

        // 클릭된 컬러 박스의 인덱스 (순서) 가져오기
        var colorIndex = $this.index();
    
        // 기존에 활성화된 컬러 박스의 인덱스 가져오기
        var activeIndex = $product.next('.buy_product_text').find('.product_color.active').index();
    
        // 슬라이드 방향 결정 (왼쪽으로 슬라이드할지 오른쪽으로 슬라이드할지)
        var direction = colorIndex > activeIndex ? 'left' : 'right';
    
        // 이미지 슬라이드 애니메이션: 현재 이미지의 위치를 기준으로 슬라이드
        $image.css({
            'transform': direction === 'left' ? 'translateX(100%)' : 'translateX(-100%)' // 방향에 따라 이동
        });
    
        // 애니메이션 완료 후 이미지 변경
        setTimeout(function() {
            $image.attr('src', newImage); // 이미지 소스 변경
            $image.css({
                'transform': 'translateX(0%)' // 이미지가 원래 위치로 돌아오도록 설정
            });
        }, 150); // 애니메이션 시간과 맞추기
    
        // 클릭된 컬러 박스를 활성화 상태로 설정
        $this.addClass('active').siblings().removeClass('active');
    });
    

  



    // 모바일 시작 -------------------------------------------------------------------------
    // 모바일 우측상단 터치 시 .m_support_top_menu 표시
    $('.m_menu_icon').click(function () {
        $('.m_support_top_menu').fadeToggle();
    });
    
    
    
    // 1차 메뉴 product_mobile_select_1 클릭 시 product_mobile_select_box 활성화
    $('.product_mobile_select_1').click(function () {
    $('.product_mobile_select_box_1').fadeIn();
    });
    $('.product_mobile_select_box_1').click(function () {
    $('.product_mobile_select_box_1').fadeOut();
    });
    
    // product_mobile_select_menu 선택 시 2차 메뉴 활성화, 1차메뉴 텍스트 변경
    $('.product_mobile_select_menu_1 > li').click(function () {
    // console.log('1차메뉴 선택, 2차메뉴 활성화하기, 3차메뉴 활성화돼있다면 취소')
    $('.product_mobile_select_2').addClass('active');
    $('.product_mobile_select_2 div img').attr('src', 'img/arrow_right.png');
    $('.product_mobile_select_1 span').text($(this).text());
    $('.product_mobile_select_3').removeClass('active');
    $('.product_mobile_select_3 div img').attr('src', 'img/arrow_right_gray.png');
    });
    
    // product_mobile_select_menu_1 > li 1차 메뉴 선택에 따라 2차 메뉴 텍스트 달라짐
    $(".product_mobile_select_menu_1 > li:contains('오디오')").click(function () {
    $('.product_mobile_select_2 span').text('헤드폰');
    $(".product_mobile_select_menu_2 > li:nth-child(1)").text("헤드폰");
    $(".product_mobile_select_menu_2 > li:nth-child(2)").text("휴대용 오디오 플레이어");
    $(".product_mobile_select_menu_2 > li:nth-child(3)").text("하이 레졸루션 오디오");
    $(".product_mobile_select_menu_2 > li:nth-child(4)").text("무선 스피커");
    $(".product_mobile_select_menu_2 > li:nth-child(5)").text("360 Reality Audio");
    $(".product_mobile_select_menu_2 > li:nth-child(6)").text("오디오 시스템");
    $(".product_mobile_select_menu_2 > li:nth-child(7)").text("오디오 컴포넌트");
    $(".product_mobile_select_menu_2 > li:nth-child(8)").text("디지털 보이스 레코더");
    $(".product_mobile_select_menu_2 > li:nth-child(9)").text("붐박스, 라디오, 휴대용 CD 플레이어");
    $(".product_mobile_select_menu_2 > li:nth-child(10)").text("마이크");
    });
    $(".product_mobile_select_menu_1 > li:contains('게임용 기어')").click(function () {
    $('.product_mobile_select_2 span').text('게임용 기어');
    $(".product_mobile_select_menu_2 > li:nth-child(1)").text("게임용 기어");
    });
    $(".product_mobile_select_menu_1 > li:contains('카메라')").click(function () {
    $('.product_mobile_select_2 span').text('렌즈 교환식 카메라');
    $(".product_mobile_select_menu_2 > li:nth-child(1)").text("렌즈 교환식 카메라");
    $(".product_mobile_select_menu_2 > li:nth-child(2)").text("렌즈");
    $(".product_mobile_select_menu_2 > li:nth-child(3)").text("컴팩트 카메라");
    $(".product_mobile_select_menu_2 > li:nth-child(4)").text("브이로그 카메라");
    $(".product_mobile_select_menu_2 > li:nth-child(5)").text("Handycam® 캠코더");
    $(".product_mobile_select_menu_2 > li:nth-child(6)").text("액션캠");
    $(".product_mobile_select_menu_2 > li:nth-child(7)").text("시네마 라인");
    $(".product_mobile_select_menu_2 > li:nth-child(8)").text("카메라 액세서리");
    });
    $(".product_mobile_select_menu_1 > li:contains('이미징 플랫폼')").click(function () {
    $('.product_mobile_select_2 span').text('클라우드 서비스');
    $(".product_mobile_select_menu_2 > li:nth-child(1)").text("클라우드 서비스");
    $(".product_mobile_select_menu_2 > li:nth-child(2)").text("Camera Remote SDK");
    });
    $(".product_mobile_select_menu_1 > li:contains('카오디오')").click(function () {
    $('.product_mobile_select_2 span').text('카오디오');
    $(".product_mobile_select_menu_2 > li:nth-child(1)").text("카오디오");
    $(".product_mobile_select_menu_2 > li:nth-child(2)").text("");
    $(".product_mobile_select_menu_2 > li:nth-child(3)").text("");
    $(".product_mobile_select_menu_2 > li:nth-child(4)").text("");
    $(".product_mobile_select_menu_2 > li:nth-child(5)").text("");
    $(".product_mobile_select_menu_2 > li:nth-child(6)").text("");
    $(".product_mobile_select_menu_2 > li:nth-child(7)").text("");
    $(".product_mobile_select_menu_2 > li:nth-child(8)").text("");
    $(".product_mobile_select_menu_2 > li:nth-child(9)").text("");
    $(".product_mobile_select_menu_2 > li:nth-child(10)").text("");
    });
    $(".product_mobile_select_menu_1 > li:contains('미디어, 스토리지, 케이블')").click(function () {
    $('.product_mobile_select_2 span').text('카오디오');
    $(".product_mobile_select_menu_2 > li:nth-child(1)").text("메모리 카드, 스토리지, 케이블");
    $(".product_mobile_select_menu_2 > li:nth-child(2)").text("");
    $(".product_mobile_select_menu_2 > li:nth-child(3)").text("");
    $(".product_mobile_select_menu_2 > li:nth-child(4)").text("");
    $(".product_mobile_select_menu_2 > li:nth-child(5)").text("");
    $(".product_mobile_select_menu_2 > li:nth-child(6)").text("");
    $(".product_mobile_select_menu_2 > li:nth-child(7)").text("");
    $(".product_mobile_select_menu_2 > li:nth-child(8)").text("");
    $(".product_mobile_select_menu_2 > li:nth-child(9)").text("");
    $(".product_mobile_select_menu_2 > li:nth-child(10)").text("");
    });
    
    
    // product_mobile_select_2.active라면 2차 메뉴 나타나기
    $(document).on('click', '.product_mobile_select_2.active', function () {
    // console.log('2차 메뉴 확인용 텍스트');
    $('.product_mobile_select_box_2').fadeIn();
    $(".product_mobile_select_menu_2 > li").click(function () {
    });
    $(".product_mobile_select_menu_2 > li:contains('헤드폰')").click(function () {
        $('.product_mobile_select_3 span').text('Truly Wireless');
        $(".product_mobile_select_menu_3 > li:nth-child(1)").text("Truly Wireless");
        $(".product_mobile_select_menu_3 > li:nth-child(2)").text("헤드밴드");
        $(".product_mobile_select_menu_3 > li:nth-child(3)").text("인이어");
        $(".product_mobile_select_menu_3 > li:nth-child(4)").text("오프이어");
        $(".product_mobile_select_menu_3 > li:nth-child(5)").text("게임");
        $(".product_mobile_select_menu_3 > li:nth-child(6)").text("Pro");
        $(".product_mobile_select_menu_3 > li:nth-child(7)").text("노이즈 캔슬링");
        $(".product_mobile_select_menu_3 > li:nth-child(8)").text("무선");
        $(".product_mobile_select_menu_3 > li:nth-child(9)").text("생활방수");
        $(".product_mobile_select_menu_3 > li:nth-child(10)").text("가정용 무선");
        $(".product_mobile_select_menu_3 > li:nth-child(11)").text("헤드폰 앰프");
        $(".product_mobile_select_menu_3 > li:nth-child(12)").text("액세서리");
    });
    $(".product_mobile_select_menu_2 > li:contains('휴대용 오디오 플레이어')").click(function () {
        $('.product_mobile_select_3 span').text('프리미엄');
        $(".product_mobile_select_menu_3 > li:nth-child(1)").text("프리미엄");
        $(".product_mobile_select_menu_3 > li:nth-child(2)").text("음악 스트리밍");
        $(".product_mobile_select_menu_3 > li:nth-child(3)").text("스포츠 및 활동");
        $(".product_mobile_select_menu_3 > li:nth-child(4)").text("액세서리");
        $(".product_mobile_select_menu_3 > li:nth-child(5)").text("케이스");
    });
    $(".product_mobile_select_menu_2 > li:contains('하이 레졸루션 오디오')").click(function () {
        $('.product_mobile_select_3 span').text('헤드폰');
        $(".product_mobile_select_menu_3 > li:nth-child(1)").text("헤드폰");
        $(".product_mobile_select_menu_3 > li:nth-child(2)").text("헤드폰 앰프");
        $(".product_mobile_select_menu_3 > li:nth-child(3)").text("무선 스피커");
        $(".product_mobile_select_menu_3 > li:nth-child(4)").text("Walkman®");
        $(".product_mobile_select_menu_3 > li:nth-child(5)").text("PCM 레코더");
        $(".product_mobile_select_menu_3 > li:nth-child(6)").text("스피커");
        $(".product_mobile_select_menu_3 > li:nth-child(7)").text("오디오 컴포넌트");
        $(".product_mobile_select_menu_3 > li:nth-child(8)").text("카오디오");
    });
    $(".product_mobile_select_menu_2 > li:contains('무선 스피커')").click(function () {
        $('.product_mobile_select_3 span').text('휴대용 스피커');
        $(".product_mobile_select_menu_3 > li:nth-child(1)").text("휴대용 스피커");
        $(".product_mobile_select_menu_3 > li:nth-child(2)").text("홈 스피커");
        $(".product_mobile_select_menu_3 > li:nth-child(3)").text("Wi-Fi 스피커");
        $(".product_mobile_select_menu_3 > li:nth-child(4)").text("글래스 사운드 스피커");
    });
    $(".product_mobile_select_menu_2 > li:contains('게임용 기어')").click(function () {
        $('.product_mobile_select_3 span').text('INZONE Buds');
        $(".product_mobile_select_menu_3 > li:nth-child(1)").text("INZONE Buds");
        $(".product_mobile_select_menu_3 > li:nth-child(2)").text("INZONE H9");
        $(".product_mobile_select_menu_3 > li:nth-child(3)").text("INZONE H7");
        $(".product_mobile_select_menu_3 > li:nth-child(4)").text("INZONE H5");
    });
    });
    $('.product_mobile_select_box_2').click(function () {
    $('.product_mobile_select_box_2').fadeOut();
    });
    
    // product_mobile_select_menu 선택 시 2차 메뉴 활성화, 2차메뉴 텍스트 변경
    $('.product_mobile_select_menu_2 > li').click(function () {
    // 클릭한 항목의 텍스트를 span 자리에 설정
    $('.product_mobile_select_2 span').text($(this).text());
    $('.product_mobile_select_3').addClass('active');
    $('.product_mobile_select_3 div img').attr('src', 'img/arrow_right.png');
    });
    
    // 3차 메뉴 나타나기
    $(document).on('click', '.product_mobile_select_3.active', function () {
    // console.log('3차 메뉴 확인용 텍스트');
    $('.product_mobile_select_box_3').fadeIn();
    });
    
    
    $('.product_mobile_select_box_3').click(function () {
    $('.product_mobile_select_box_3').fadeOut();
    });
    
    // 3차 메뉴 product_mobile_select_menu > li 클릭 시 3차메뉴 텍스트 변경
    $('.product_mobile_select_menu_3 > li').click(function () {
    // 클릭한 항목의 텍스트를 span 자리에 설정
    $('.product_mobile_select_3 span').text($(this).text());
    });
    
    
    
    // product_top 드롭다운 메뉴---------------------------------------------------------
    $(".m_product_top_2").click(function() {
    var productTopbody = $(".m_product_top_2_body");
    var ico = $(".m_product_top_ico");
    
    if (productTopbody.hasClass("show")) {
        productTopbody.removeClass("show");
        ico.removeClass("rotate");
    } else {
        productTopbody.addClass("show");
        ico.addClass("rotate");
    }
    });
    
    // 드롭다운 메뉴 항목 클릭 처리
    $('.m_product_top_2_body > ul > li').click(function () {
    // 클릭한 항목의 텍스트를 span 자리에 설정
    $('.m_product_top_2 > div > span').text($(this).text());
    });
    
    
    
    // 제품 이미지 변경 슬라이드 애니메이션 --------------------------------------------
    $('.m_product_color').click(function() {
    var $this = $(this); // 클릭된 컬러 박스
    var $product = $this.closest('.m_buy_product_text').prev('.m_buy_product_img'); // 이미지 컨테이너 찾기
    var newImage = $this.data('image');
    var $image = $product.find('#m_buy_product_img');
    
    // 이미 활성화된 상태인지 확인
    if ($this.hasClass('active')) {
        return; // 이미 활성화된 상태라면 아무 작업도 하지 않음
    }
    
    // 클릭된 컬러 박스의 인덱스 (순서) 가져오기
    var colorIndex = $this.index();
    
    // 기존에 활성화된 컬러 박스의 인덱스 가져오기
    var activeIndex = $product.next('.m_buy_product_text').find('.m_product_color.active').index();
    
    // 슬라이드 방향 결정 (왼쪽으로 슬라이드할지 오른쪽으로 슬라이드할지)
    var direction = colorIndex > activeIndex ? 'left' : 'right';
    
    // 이미지 슬라이드 애니메이션: 현재 이미지의 위치를 기준으로 슬라이드
    $image.css({
        'transform': direction === 'left' ? 'translateX(100%)' : 'translateX(-100%)' // 방향에 따라 이동
    });
    
    // 애니메이션 완료 후 이미지 변경
    setTimeout(function() {
        $image.attr('src', newImage); // 이미지 소스 변경
        $image.css({
            'transform': 'translateX(0%)' // 이미지가 원래 위치로 돌아오도록 설정
        });
    }, 150); // 애니메이션 시간과 맞추기
    
    // 클릭된 컬러 박스를 활성화 상태로 설정
    $this.addClass('active').siblings().removeClass('active');
    });
      
});