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


});