 $(function(){
 var swiper = new Swiper('.slide ', {
    speed: 1500,//버튼을 슬라이드가 넘어가는 시간
      loop: true,//슬라이드 무한반복
      navigation: {//화살표 버튼
        nextEl: '.slide .swiper-button-next',
        prevEl: '.slide .swiper-button-prev',
      },
	   
    });

    var swiper = new Swiper('.slide2 ', {
      speed: 2000,//버튼을 슬라이드가 넘어가는 시간
        loop: true,//슬라이드 무한반복
        navigation: {//화살표 버튼
          nextEl: '.slide2 .swiper-button-next',
          prevEl: '.slide2 .swiper-button-prev',
        },
        pagination: {//블릿 버튼
          el: '.slide2 .swiper-pagination',
          clickable: true,
        },
      });
});