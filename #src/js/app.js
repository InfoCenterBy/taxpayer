
gsap.registerPlugin(Flip);
// document.querySelectorAll('.adv-card-1').forEach((el) => {
//      let personaPic = el.getElementsByClassName('advantages-card__pic');
//      let text = el.getElementsByClassName('advantages-card__text');

//      const tween = gsap.timeline({ repeat: 0, repeatDelay: 1, reversed: true });
//      // let hover = 
//      // tween.to(
//      //      el,
//      //      {
//      //           duration: 0.5, 
//      //           ease: 'expo.inOut',
//      //           flexDirection: 'column',
//      //      }
//      // )
//      // tween.to(
//      //      personaPic,
//      //      {
//      //           duration: 0.5, 
//      //           xPercent: -110,
//      //           yPercent: 20,
//      //           ease: 'expo.inOut',
//      //      },
//      // )
//      // tween.to(
//      //      text,
//      //      {
//      //           duration: 0.5, 
//      //           xPercent: 100,
//      //           ease: 'expo.Out',
//      //           // width: '211px',
//      //           onStart: () => {
//      //                tween.to(
//      //                     text[0],
//      //                     {
//      //                          duration: 0.3,
//      //                          ease: 'expo.Out',
//      //                          opacity: 0,
//      //                     },
//      //                     '-=.7'
//      //                )
//      //           },
//      //           onComplete: () => {
//      //                text[0].textContent = 
//      //                ' Министерство по налогам и сборам Республики Беларусь привлекает членов Ассоциации к разработке актов налогового законодательства и включает в рабочие группы для их обсуждения.';
//      //                tween.to(
//      //                     text[0],
//      //                     {
//      //                          duration: 0.3,
//      //                          ease: 'expo.in',
//      //                          opacity: 1,
//      //                     },
//      //                     // '-=.6'
//      //                )
//      //           },
//      //           onReverseComplete: () => {
//      //                text[0].textContent = 'Получайте всю налоговую информацию самыми первыми';
//      //           },
//      //      },
//      //      '-=.5'
//      // )
     
//      $(el).hover(makeHover, makeHover);

//      function makeHover() {
//           // if (window.innerWidth > 620) {
//           //      hover.reversed() ? hover.play() : hover.reverse();
//           // }
//           const state = Flip.getState(".adv-card-1, .box");
//           console.log(state);
     
//           el.classList.toggle("reorder");
     
//      Flip.from(state, {
//           absolute: true,
//           duration: 0.5, 
//           stagger: 0.1,
//           ease: "power1.inOut"
//      });
//      }
// });
const tween = gsap.timeline({ repeat: 0, repeatDelay: 1, reversed: true });
const group = document.querySelector(".adv-card-1");

$('.adv-card-1').hover(() => {
     const state = Flip.getState(".adv-card-1, .box");
     // console.log(state);
     group.classList.toggle("reorder");
     const text = document.querySelector(".adv-card-1 .advantages-card__text")
     if($('.adv-card-1').hasClass('reorder')){
          text.textContent = 'Министерство по налогам и сборам Республики Беларусь привлекает членов Ассоциации к разработке актов налогового законодательства и включает в рабочие группы для их обсуждения.'
     }
     else{
          text.textContent = 'Получайте всю налоговую информацию самыми первыми'
     }
     Flip.from(state, {
          absolute: true, 
          duration: 0.5, 
          stagger: 0.1,
          ease: "power1.inOut",
          
     });
});


document.querySelectorAll('.adv-card-2').forEach((el) => {
     let personaPic = el.getElementsByClassName('advantages-card__pic');
     let text = el.getElementsByClassName('advantages-card__text');

     const tween = gsap.timeline({ repeat: 0, repeatDelay: 1, reversed: true });

     let hover = 
     tween.to(
          personaPic,
          {
               duration: 0.5, 
               // xPercent: -110,
               yPercent: 15,
               ease: 'expo.inOut',
          },
     )
     tween.to(
          text,
          {
               duration: 0.5, 
               ease: 'expo.Out',
               onStart: () => {
                    tween.to(
                         text[0],
                         {
                              duration: 0.3,
                              ease: 'expo.Out',
                              opacity: 0,
                         },
                         '-=.7'
                    )
               },
               onComplete: () => {
                    text[0].textContent = 
                    'Министерство по налогам и сборам Республики Беларусь привлекает членов Ассоциации к разработке актов налогового законодательства и включает в рабочие группы для их обсуждения.';
                    tween.to(
                         text[0],
                         {
                              duration: 0.3,
                              ease: 'expo.in',
                              opacity: 1,
                         },
                         // '-=.6'
                    )
               },
               onReverseComplete: () => {
                    text[0].textContent = 'Участвуйте в принятии решений об изменениях законодательства';
               },
          },
          '-=.5'
     )

     $(el).hover(makeHover, makeHover);

     function makeHover() {
          if (window.innerWidth > 620) {
               hover.reversed() ? hover.play() : hover.reverse();
          }
     }
});

document.querySelectorAll('.adv-card-3').forEach((el) => {
     let personaPic = el.getElementsByClassName('advantages-card__pic');
     let text = el.getElementsByClassName('advantages-card__text');

     const tween = gsap.timeline({ repeat: 0, repeatDelay: 1, reversed: true });

     let hover = 
     tween.to(
          personaPic,
          {
               duration: 0.5, 
               xPercent: -90,
               yPercent: 10,
               ease: 'expo.inOut',
          },
     )
     tween.to(
          text,
          {
               duration: 0.5, 
               xPercent: 100,
               ease: 'expo.Out',
               onStart: () => {
                    tween.to(
                         text[0],
                         {
                              duration: 0.3,
                              ease: 'expo.Out',
                              opacity: 0,
                         },
                         '-=.7'
                    )
               },
               onComplete: () => {
                    text[0].textContent = 
                    'Ассоциация налогоплательщиков является членом общественно- консультативных комитетов при ряде государственных органов и может представлять интересы плательщиков по различным вопросам деятельности.';
                    tween.to(
                         text[0],
                         {
                              duration: 0.3,
                              ease: 'expo.in',
                              opacity: 1,
                         },
                         // '-=.6'
                    )
               },
               onReverseComplete: () => {
                    text[0].textContent = 'Взаимодействуйте с государственными органами';
               },
          },
          '-=.5'
     )

     $(el).hover(makeHover, makeHover);

     function makeHover() {
          if (window.innerWidth > 620) {
               hover.reversed() ? hover.play() : hover.reverse();
          }
     }
});

document.querySelectorAll('.adv-card-4').forEach((el) => {
     let personaPic = el.getElementsByClassName('advantages-card__pic');
     let text = el.getElementsByClassName('advantages-card__text');

     const tween = gsap.timeline({ repeat: 0, repeatDelay: 1, reversed: true });

     let hover = 
     tween.to(
          personaPic,
          {
               duration: 0.5, 
               xPercent: 0,
               yPercent: 20,
               ease: 'expo.inOut',
          },
     )
     tween.to(
          text,
          {
               duration: 0.5, 
               xPercent: 0,
               ease: 'expo.Out',
               width: '211px',
               onStart: () => {
                    tween.to(
                         text[0],
                         {
                              duration: 0.3,
                              ease: 'expo.Out',
                              opacity: 0,
                         },
                         '-=.7'
                    )
               },
               onComplete: () => {
                    text[0].textContent = 
                    'Ассоциация рассматривает на экспертном совете, возникающие в правоприменительной практике  вопросы налогообложения, а при невозможности разрешения - запрос направляется в Министерство по налогам и сборам Республики Беларусь для рассмотрения позиции Ассоциации в данном вопросе.';
                    tween.to(
                         text[0],
                         {
                              duration: 0.3,
                              ease: 'expo.in',
                              opacity: 1,
                         },
                         // '-=.6'
                    )
               },
               onReverseComplete: () => {
                    text[0].textContent = 'Обретайте экспертную поддержку';
               },
          },
          '-=.5'
     )

     $(el).hover(makeHover, makeHover);

     function makeHover() {
          if (window.innerWidth > 620) {
               hover.reversed() ? hover.play() : hover.reverse();
          }
     }
});

document.querySelectorAll('.adv-card-5').forEach((el) => {
     let personaPic = el.getElementsByClassName('advantages-card__pic');
     let text = el.getElementsByClassName('advantages-card__text');

     const tween = gsap.timeline({ repeat: 0, repeatDelay: 1, reversed: true });

     let hover = 
     
     tween.to(
          text,
          {
               duration: 0.5, 
               xPercent: 0,
               ease: 'expo.Out',
               onStart: () => {
                    tween.to(
                         text[0],
                         {
                              duration: 0.3,
                              ease: 'expo.Out',
                              opacity: 0,
                         },
                         '-=.7'
                    )
               },
               onComplete: () => {
                    text[0].textContent = 
                    'Министерство по налогам и сборам Республики Беларусь привлекает членов Ассоциации к разработке актов налогового законодательства и включает в рабочие группы для их обсуждения.';
                    tween.to(
                         text[0],
                         {
                              duration: 0.3,
                              ease: 'expo.in',
                              opacity: 1,
                         },
                         // '-=.6'
                    )
               },
               onReverseComplete: () => {
                    text[0].textContent = 'Участвуйте в принятии решений об изменениях законодательства';
               },
          },
          '-=.5'
     )
     

     $(el).hover(makeHover, makeHover);

     function makeHover() {
          if (window.innerWidth > 620) {
               hover.reversed() ? hover.play() : hover.reverse();
          }
     }
});



$('.burger, .overlay').click(function(){
     $('.burger').toggleClass('show')
     $('.overlay').toggleClass('show')
     $('nav').toggleClass('show')
});


document.querySelectorAll("collapsed").forEach(el=> {
     el.addEventListener('click', ()=>{
          console.log(el, "clickied")
     })
})

const swiperNews = new Swiper('.swiper-news', {
     // Optional parameters
     direction: 'horizontal',
     loop: true,
     cssMode: true,
     // Pagination
     pagination: {
          el: '.swiper-news .swiper-pagination',
          clickable: true,
     },
     autoplay: {
          delay: 3000,
     },
});

const swiperEvent = new Swiper('.swiper-event', {
     // Optional parameters
     direction: 'horizontal',
     loop: true,
     cssMode: true,
     slidesPerView: 3,
     spaceBetween: 18,
     // Navigation arrows
     navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
     },
     watchOverflow: true,
     breakpoints: {
          // when window width is >= 320px
          320: {
               slidesPerView: 1,
               spaceBetween: 0
          },
          // when window width is >= 480px
          480: {
               slidesPerView: 1,
               spaceBetween: 0
          },
          // when window width is >= 640px
          640: {
               slidesPerView: 3,
               spaceBetween: 18
          }
     },
     autoplay: {
          delay: 3000,
     },
});

const sortBtn = document.querySelector("#sort-btn")
if(sortBtn){
     sortBtn.addEventListener("click", function(){
          let sortIcon = document.querySelector("#sort-btn .bi")
          sortIcon.classList.toggle("bi-sort-numeric-down-alt")
          sortIcon.classList.toggle("bi-sort-numeric-up-alt")
     })
}

const swiperNewsContent = new Swiper('.swiper-news-content', {
     // Optional parameters
     direction: 'horizontal',
     // loop: true,
     cssMode: true,
     slidesPerView: 1,
     // Navigation arrows
     navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
     },
     watchOverflow: true,
});

const swiperMarqueee = new Swiper('.swiper-marquee', {
     // Optional parameters
     direction: 'horizontal',
     // loop: true,
     // cssMode: true,
     slidesPerView: 7,
     // Navigation arrows
     // watchOverflow: true,
     speed: 1500,
     autoplay: {
          delay: 0,
          pauseOnMouseEnter: true,
     },
     loop: true,
     breakpoints: {
          // when window width is >= 320px
          300: {
               slidesPerView: 2,
          },
          320: {
               slidesPerView: 2,
          },
          // when window width is >= 480px
          480: {
               slidesPerView: 2,
          },
          // when window width is >= 640px
          640: {
               slidesPerView: 3,
          },
          800: {
               slidesPerView: 4,
          },
          1000: {
               slidesPerView: 5,
          },
          1200: {
               slidesPerView: 6,
          },
     },
});

// $('.swiper-marquee').on('mouseenter', function(e){
//      swiperMarqueee.stopAutoplay();
// })
// $('.swiper-marqueer').on('mouseleave', function(e){
//      swiperMarqueee.startAutoplay();
// })

let phoneMask = IMask(
     document.getElementById('tel'), {
          mask: '+{375}(00)000 00 00'
});
