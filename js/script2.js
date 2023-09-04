$(function () {

  /* 메인 typed */
  $('h1').typed({
    strings: ["안녕하세요." + "<br>" + "{ 경험을 새기는 디자이너 }" + "<br>" + " <span>김시경</span>입니다."],
    typeSpeed: 150,
    /* 타이핑 속도 */
    backDelay: 200,
    /* 지워지는 속도 */
    loop: true /* flase는 한번 , true는 계속 */
  });


  /* 우측 인디케이터,스킬 바 */
  floatDiv();

  function floatDiv() {
    var options = {
      'speed': 0
    }
    var contents = $('section .move');

    $(window).scroll(function () {
      var sct = $(window).scrollTop();
      contents.each(function () {
        var tg = $(this);
        var i = tg.index();

        //스크롤 탑의 위치가 top보다 크거간 같다면 tg를 특정 좌표로 이동
        if (tg.offset().top <= sct) {
          switch (i) {
            case 0:
              skillsProgressbar();
              break;
          }
        }
      });
    });
  };

  /* flotdiv */
  var contents = $('section>div');
  var btn = $('#floatdiv ul li');
  var line = $('.line');

  //메뉴 클릭시 페이지로 이동
  btn.click(function (event) {
    event.preventDefault();
    var tg = $(this);
    var i = tg.index();
    var section = contents.eq(i);
    var tt = section.offset().top; 
    $('html,body').stop().animate({
      scrollTop: tt
    });
  });

  //스크롤 이동시 메뉴와 버튼 활성화
  $(window).scroll(function () {
    var sct = $(window).scrollTop();
    contents.each(function () {
      var tg = $(this);
      var i = tg.index();
      if (tg.offset().top <= sct) {
        line.removeClass('on');
        line.eq(i).addClass('on')
        btn.removeClass('active2');
        btn.eq(i).addClass('active2');
      }
    })
  })

  //마우스 휠 이벤트
  $('div.move').each(function () {
    $(this).on("mousewheel DOMMouseScroll", function (e) {
      e.preventDefault();
      var delta = 0;

      if (!event) {
        event = window.event;
      }

      if (event.wheelDelta) {
        delta = event.wheelDelta / 120;

      } else if (event.detail) {
        delta = -event.detail / 3;
      }

      //마우스 휠을 위에서 아래로
      if (delta < 0) {
        if ($(this).next() != undefined) {
          moveTop = $(this).next().offset() ? $(this).next().offset().top : 4600;
        }
      } else { //마우스 휠을 아래에서 위로
        if ($(this).prev() != undefined) {
          moveTop = $(this).prev().offset().top;
        }
      }
      //화면이동 시간
      $('html,body').stop().animate({
        scrollTop: moveTop + 'px'
      }, {
        duration: 500
      });
    });
  });


  /* skills */
  function skillsProgressbar() {
    var htmlNum = 95;
    var cssNum = 95;
    var javascriptNum = 80;
    var jqueryNum = 85;
    var photoshopNum = 85;
    var illustratorNum = 70;
    var phpNum = 70;
    var reactNum = 80;
    var githubNum = 80;
    var figmaNum = 85;
    var bootstrapNum = 85;
    var firebaseNum = 70;
    var max = 100;
    var duration = 1500;

    //그래프 처음 위치 초기화
    $('.bar').css('right', '100%');

    //html
    $('#html_bar').stop().animate({
      'right': 100 - (htmlNum / max * 100) + '%',
    }, {
      'duration': duration,
      'easing': 'easeInOutQuart',
      'progress': function (animation, progress, msRemaining) {
        $('#html_cnt').text(Math.round(htmlNum * progress)); //반올림
      }
    });

    //css
    $('#css_bar').stop().animate({
      'right': 100 - (cssNum / max * 100) + '%',
    }, {
      'duration': duration,
      'easing': 'easeInOutQuart',
      'progress': function (animation, progress, msRemaining) {
        $('#css_cnt').text(Math.round(cssNum * progress)); //반올림
      }
    });

    //JABA
    $('#javascript_bar').stop().animate({
      'right': 100 - (javascriptNum / max * 100) + '%',
    }, {
      'duration': duration,
      'easing': 'easeInOutQuart',
      'progress': function (animation, progress, msRemaining) {
        $('#javascript_cnt').text(Math.round(javascriptNum * progress)); //반올림
      }
    });

    //jquery
    $('#jquery_bar').stop().animate({
      'right': 100 - (jqueryNum / max * 100) + '%',
    }, {
      'duration': duration,
      'easing': 'easeInOutQuart',
      'progress': function (animation, progress, msRemaining) {
        $('#jquery_cnt').text(Math.round(jqueryNum * progress)); //반올림
      }
    });

    //photoshop
    $('#photoshop_bar').stop().animate({
      'right': 100 - (photoshopNum / max * 100) + '%',
    }, {
      'duration': duration,
      'easing': 'easeInOutQuart',
      'progress': function (animation, progress, msRemaining) {
        $('#photoshop_cnt').text(Math.round(photoshopNum * progress)); //반올림
      }
    });

    //illustrator
    $('#illustrator_bar').stop().animate({
      'right': 100 - (illustratorNum / max * 100) + '%',
    }, {
      'duration': duration,
      'easing': 'easeInOutQuart',
      'progress': function (animation, progress, msRemaining) {
        $('#illustrator_cnt').text(Math.round(illustratorNum * progress)); //반올림
      }
    });

    //php
    $('#php_bar').stop().animate({
      'right': 100 - (phpNum / max * 100) + '%',
    }, {
      'duration': duration,
      'easing': 'easeInOutQuart',
      'progress': function (animation, progress, msRemaining) {
        $('#php_cnt').text(Math.round(phpNum * progress)); //반올림
      }
    });

    //react
    $('#react_bar').stop().animate({
      'right': 100 - (reactNum / max * 100) + '%',
    }, {
      'duration': duration,
      'easing': 'easeInOutQuart',
      'progress': function (animation, progress, msRemaining) {
        $('#react_cnt').text(Math.round(reactNum * progress)); //반올림
      }
    });

    //github
    $('#github_bar').stop().animate({
      'right': 100 - (githubNum / max * 100) + '%',
    }, {
      'duration': duration,
      'easing': 'easeInOutQuart',
      'progress': function (animation, progress, msRemaining) {
        $('#github_cnt').text(Math.round(githubNum * progress)); //반올림
      }
    });

    //figma
    $('#figma_bar').stop().animate({
      'right': 100 - (figmaNum / max * 100) + '%',
    }, {
      'duration': duration,
      'easing': 'easeInOutQuart',
      'progress': function (animation, progress, msRemaining) {
        $('#figma_cnt').text(Math.round(figmaNum * progress)); //반올림
      }
    });

    //bootstrap
    $('#bootstrap_bar').stop().animate({
      'right': 100 - (bootstrapNum / max * 100) + '%',
    }, {
      'duration': duration,
      'easing': 'easeInOutQuart',
      'progress': function (animation, progress, msRemaining) {
        $('#bootstrap_cnt').text(Math.round(bootstrapNum * progress)); //반올림
      }
    });

    //firebase
    $('#firebase_bar').stop().animate({
      'right': 100 - (firebaseNum / max * 100) + '%',
    }, {
      'duration': duration,
      'easing': 'easeInOutQuart',
      'progress': function (animation, progress, msRemaining) {
        $('#firebase_cnt').text(Math.round(firebaseNum * progress)); //반올림
      }
    });
  }

  /* swiper1 */
  const swiper1 = new Swiper('.swiper', {
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  /* license 팝업  */
  $(".folder-btn").click(function () {
    $(".folder-view").show();
  });
  $(".folder-close").click(function () {
    $(".folder-view").hide();
  });


  /* 프로젝트 swiper */
  var swiper2 = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /* 카드 텝메뉴  */


  $(function () {
    let tabBtn = $(".tab_btn > ul > li"); //버튼 설정
    let tabCont = $(".tab_cont > .portfolio_main "); //콘텐츠 설정
    tabCont.hide().eq(0).show(); //첫번째 콘텐츠만 보이게 설정


    tabBtn.click(function () {

      const index = $(this).index(); 

      $(this).addClass("active").siblings().removeClass("active"); 
      tabCont.eq(index).show().siblings().hide(); 


    });


    
    /* 카드 텝 클릭시 이미지 변환 */
    tabBtn.on(function () { 
      var tg = $(this);
      var i = tg.index();

      var img = tg.find('img');
      var src_off = img.attr('src');
      var src_on = src_off.replace('_off', '_on');

      $('<img >').attr('src', src_on);
      

      tg.toggle(function () {
        img.attr('src', src_off);
        tg.eq(i).img.attr('src', src_on);
      }, function () {
        img.attr('src', src_off);
        tg.eq(i).img.attr('src', src_on);
      });


    });
  });




});