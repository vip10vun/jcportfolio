$(function() {
    console.log("jquery", $);

    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        speed: 800,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      // isometric slide swiper
      var isoSwiper = new Swiper(".isoSwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
      });

      // character slide swiper
      var chaSwiper = new Swiper(".chaSwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
      });

      // logo slide swiper
      var lgSwiper = new Swiper(".lgSwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
      });

      // package slide swiper
      var pkSwiper = new Swiper(".pkSwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
      });

      // leaflet slide swiper
      var pkSwiper = new Swiper(".lflSwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
      });

      // advertisement slide swiper
      var pkSwiper = new Swiper(".advSwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
      });

      // download pdf file click event
      $('#downloadButton').on('click', function() {
        // var fileUrl = "../resouce/Lee.pdf";
        var fileUrl = "../resouce/jc_resume.pdf";
        var fileName = "jc_inf.pdf";
        var element = document.createElement("a");
        element.setAttribute("href", fileUrl);
        element.setAttribute("download", fileName);
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
      });



      

    // modal - about jc modal
    // $('.aboutBtn').on('click', function() {
    //     $('.ui.modal.aboutModal').modal({
    //       blurring: true
    //     }).modal('show');
    //     console.log("clicked");
    // });

    // modal - web portfolio modal
    $('.wc').on('click', function() {
      $('.ui.modal.webPfModal').modal('show');
      
    });

    // modal - video portfolio modal
    $('.vc').on('click', function() {
      $('.ui.modal.videoPfModal').modal('show');
    
    });

    // modal - video portfolio modal
    $('.gc').on('click', function() {
      // $('.ui.modal.graphicPfModal').modal('show');

      // initialize all modals
      $('.coupled.modal')
      .modal({
        allowMultiple: true
        
      });

      // open second modal on first modal buttons
      // 아이소메트릭 카드안에 버튼 눌렀을 때 두번째 모달 attach event
      $('.second.modal.isoModal')
      .modal('attach events', '.first.modal .button.isoBtn');
      
      // 캐릭터 카드안에 버튼 눌렀을 때 두번째 모달 attach event
      $('.second.modal.chaModal')
      .modal('attach events', '.first.modal .button.chaBtn');
      
      // 로고디자인 카드안에 버튼 눌렀을 때 두번째 모달 attach event
      $('.second.modal.lgModal')
      .modal('attach events', '.first.modal .button.lgBtn');
      
      // 패키지디자인 카드안에 버튼 눌렀을 때 두번째 모달 attach event
      $('.second.modal.pkModal')
      .modal('attach events', '.first.modal .button.pkBtn');
      
      // 리플렛디자인 카드안에 버튼 눌렀을 때 두번째 모달 attach event
      $('.second.modal.lflModal')
      .modal('attach events', '.first.modal .button.lflBtn');
      
      // 광고디자인 카드안에 버튼 눌렀을 때 두번째 모달 attach event
      $('.second.modal.advModal')
      .modal('attach events', '.first.modal .button.advBtn');

      // show first immediately
      $('.first.modal')
      .modal('show');
    });


$('.toggleWrap .checkbox')
  .checkbox()
  .first().checkbox({
    onChecked: function() {
      // console.log("체크됨");
      $('.swiper .swiper-wrapper .swiper-slide.main_slide_1').css('background-image', 'url(img/main_wh.png)');
      
      $('.swiper .topNavWrap .logo img').css('filter', 'contrast(0)');
      $('.pfTextMid #logo').css('filter', 'contrast(0)');
      $('.swiper.mySwiper').css('background-color', '#fff');

      $('.swiper .swiper-wrapper .swiper-slide.main_slide_2 .aboutContainer .slideContent .aboutPanelWrap .aboutBotPanel .aBoxWrapMobile').css('filter', 'contrast(0)');
      $('.swiper .swiper-wrapper .swiper-slide.main_slide_2 .aboutContainer .slideContent .aboutPanelWrap .aboutBotPanel h4').css('color', '#808080');
      $('.swiper .swiper-wrapper .swiper-slide.main_slide_2 .aboutContainer .slideContent .aboutPanelWrap .aboutTopPanel .leftAbout .myName').css('color', '#808080');

      
      $('.swiper .swiper-wrapper .swiper-slide.main_slide_2 .aboutContainer .title_group .slideText span::before').css('filter', 'contrast(0)');
      $('.swiper .swiper-wrapper .swiper-slide.main_slide_2 .aboutContainer .title_group .slideText span').css('filter', 'contrast(0)');
      
      $('.swiper .swiper-wrapper .swiper-slide.main_slide_3 .pfContainer .title_group .slideText span').css('filter', 'contrast(0)');
      $('.swiper .swiper-wrapper .swiper-slide.main_slide_3 .pfContainer .title_group .slideText span::before').css('filter', 'contrast(0)');

      $('.swiper .swiper-wrapper .swiper-slide.main_slide_3 .pfContainer .slideContent .ccWrapMobile .pfBoxMobile .circleMobile span').css('border', '1px solid #808080');
      $('.swiper .swiper-wrapper .swiper-slide.main_slide_3 .pfContainer .slideContent .ccWrapMobile .pfBoxMobile .circleMobile .cmContent h3').css('color', '#808080');
      $('.swiper .swiper-wrapper .swiper-slide.main_slide_3 .pfContainer .slideContent .ccWrapMobile .pfBoxMobile .circleMobile .cmContent a').css('color', '#808080');
      
      $('.swiper .swiper-wrapper .swiper-slide.main_slide_4 .contactContainer .title_group .slideText span::before').css('filter', 'contrast(0)');
      $('.swiper .swiper-wrapper .swiper-slide.main_slide_4 .contactContainer .title_group .slideText span').css('filter', 'contrast(0)');

      $('.swiper .swiper-wrapper .swiper-slide.main_slide_4 .contactContainer .slideContent .ccWrap').css('filter', 'contrast(0)');

      
      // PC만
      $('.card .cb').css('background', '#fff');
      $('.card .circle .logo').css('color', '#808080');
      
      $('.card .product_img').css('filter', 'contrast(0)');
      $('.card .circleContent h2').css('color', '#808080');
      $('.card .circleContent p').css('color', '#808080');
      $('.card .circleContent a').css({'background':'#D9D9D9' , 'color': 'white'});

      $('.swiper .swiper-wrapper .swiper-slide.main_slide_2 .aboutContainer .slideContent .aboutPanelWrap .aboutTopPanel .leftAbout .pobu span').css('color', '#808080');
      $('.swiper .swiper-wrapper .swiper-slide.main_slide_2 .aboutContainer .slideContent .aboutPanelWrap .aboutBotPanel').css('filter', 'contrast(0)');

    },
    onUnchecked: function() {
      // console.log("체크 안됨");
      $('.swiper .swiper-wrapper .swiper-slide.main_slide_1').css('background-image', 'url(img/main_bg.png)');
      $('.swiper .topNavWrap .logo img').css('filter', 'contrast(1)');
      $('.pfTextMid #logo').css('filter', 'contrast(1)');
      $('.swiper.mySwiper').css('background-color', '#242121');
      $('.swiper .swiper-wrapper .swiper-slide.main_slide_2 .aboutContainer .slideContent .aboutPanelWrap .aboutBotPanel .aBoxWrapMobile').css('filter', 'contrast(1)');
      $('.swiper .swiper-wrapper .swiper-slide.main_slide_2 .aboutContainer .slideContent .aboutPanelWrap .aboutBotPanel h4').css('color', 'white');
      $('.swiper .swiper-wrapper .swiper-slide.main_slide_2 .aboutContainer .slideContent .aboutPanelWrap .aboutTopPanel .leftAbout .myName').css('color', 'white');

      
      
      $('.swiper .swiper-wrapper .swiper-slide.main_slide_2 .aboutContainer .title_group .slideText span::before').css('filter', 'contrast(1)');
      $('.swiper .swiper-wrapper .swiper-slide.main_slide_2 .aboutContainer .title_group .slideText span').css('filter', 'contrast(1)');
      
      $('.swiper .swiper-wrapper .swiper-slide.main_slide_3 .pfContainer .title_group .slideText span').css('filter', 'contrast(1)');
      $('.swiper .swiper-wrapper .swiper-slide.main_slide_3 .pfContainer .title_group .slideText span::before').css('filter', 'contrast(1)');

      $('.swiper .swiper-wrapper .swiper-slide.main_slide_3 .pfContainer .slideContent .ccWrapMobile .pfBoxMobile .circleMobile span').css('border', '1px solid white');
      $('.swiper .swiper-wrapper .swiper-slide.main_slide_3 .pfContainer .slideContent .ccWrapMobile .pfBoxMobile .circleMobile .cmContent h3').css('color', 'white');
      $('.swiper .swiper-wrapper .swiper-slide.main_slide_3 .pfContainer .slideContent .ccWrapMobile .pfBoxMobile .circleMobile .cmContent a').css('color', 'white');

      $('.swiper .swiper-wrapper .swiper-slide.main_slide_4 .contactContainer .title_group .slideText span::before').css('filter', 'contrast(1)');
      $('.swiper .swiper-wrapper .swiper-slide.main_slide_4 .contactContainer .title_group .slideText span').css('filter', 'contrast(1)');

      $('.swiper .swiper-wrapper .swiper-slide.main_slide_4 .contactContainer .slideContent .ccWrap').css('filter', 'contrast(1)');

      // PC만
      $('.card .cb').css('background', '#242121');
      $('.card .circle .logo').css('color', '#fff');

      $('.card .product_img').css('filter', 'contrast(1)');
      $('.card .circleContent h2').css('color', 'white');
      $('.card .circleContent p').css('color', 'white');
      $('.card .circleContent a').css({'background':'white' , 'color': '#BC2649'});


      $('.swiper .swiper-wrapper .swiper-slide.main_slide_2 .aboutContainer .slideContent .aboutPanelWrap .aboutTopPanel .leftAbout .pobu span').css('color', 'white');
      $('.swiper .swiper-wrapper .swiper-slide.main_slide_2 .aboutContainer .slideContent .aboutPanelWrap .aboutBotPanel').css('filter', 'contrast(1)');
    },
    onChange: function() {
      // console.log("변화됨");
    }
  });

  $('.videoSelectBtns .videoSelectBtn').on('click', function() {
    $('.videoSelectBtns .videoSelectBtn').removeClass('vk');
    // $(this).addClass('active');
    $(this).addClass('vk');

    $('.ui.fullscreen.modal.videoPfModal .content .vpWrap .screenWrap iframe').remove();
    
    // let vList = ['https://www.youtube.com/embed/ZhKRB_wJVg4', 'https://www.youtube.com/embed/KO8jGYBWcUg', 'https://www.youtube.com/embed/ejrH1KoiXBk'];
    let jcIntro = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZhKRB_wJVg4?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen autoplay muted></iframe>`;
    let jackVideo = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/KO8jGYBWcUg?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen autoplay muted></iframe>`;
    let waveonVideo = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ejrH1KoiXBk?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen autoplay muted></iframe>`;
    if($(this).hasClass('jc_introduction_btn')) {
      console.log("자기소개");
      $('.ui.fullscreen.modal.videoPfModal .content .vpWrap .screenWrap').append(jcIntro);
    }
    else if($(this).hasClass('jack_daniel_btn')) {
      console.log("잭다니엘");
      $('.ui.fullscreen.modal.videoPfModal .content .vpWrap .screenWrap').append(jackVideo);
    }
    else if($(this).hasClass('jc_vlog_btn')) {
      console.log("웨이브온");
      $('.ui.fullscreen.modal.videoPfModal .content .vpWrap .screenWrap').append(waveonVideo);
    }

    $('')

  });

/* 
youtube link src
1. 자기소개
https://www.youtube.com/embed/ZhKRB_wJVg4
2. 잭다니엘
https://www.youtube.com/embed/KO8jGYBWcUg
3. 웨이브온
https://www.youtube.com/embed/ejrH1KoiXBk
*/


$('.modal.videoPfModal')
  .modal({
    // onDeny    : function(){
    //   window.alert('Wait not yet!');
    //   return false;
    // },
    // onApprove : function() {
    //   window.alert('Approved!');
    // },
    onShow : function() {
      console.log("on show event");
      let jcIntro = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZhKRB_wJVg4?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen autoplay muted></iframe>`;
      $('.ui.fullscreen.modal.videoPfModal .content .vpWrap .screenWrap').append(jcIntro);
    },
    onHide : function() {
      // window.alert("hide modal");
      $('.ui.fullscreen.modal.videoPfModal .content .vpWrap .screenWrap iframe').remove();
    }
  });

    

});