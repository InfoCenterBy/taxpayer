
document.querySelectorAll('.advantages-card').forEach((el) => {
     let personaPic = el.getElementsByClassName('advantages-card__pic');
     let persona = el.getElementsByClassName('advantages-card__img');
     let text = el.getElementsByClassName('advantages-card__text');
     let subText = el.getElementsByClassName('advantages-card__sub-text');

     const tween = gsap.timeline({ repeat: 0, repeatDelay: 1, reversed: true });
     // const tweenClick = gsap.timeline({repeat: 0, repeatDelay: 1, reversed: true})

     let hover = tween.to(
          persona,
          {
               left: '-65%',
               top: '12%',
               ease: 'expo.inOut',
               duration: 0.8,
          },
          '-=1'
     );

     // tween.to(personaPic, {
     //      // backgroundPosition: '-45px 28px',
     //      ease: 'expo.inOut',
     //      duration: 1
     // }, '-=.9')

     tween.to(
          text,
          {
               opacity: '0',
               duration: 0.2,
          },
          '-=1.2'
     );

     tween.to(
          subText,
          {
               display: 'block',
               position: 'absolute',
               opacity: '1',
               duration: 0.5,
               left: '35%',
          },
          '-=.4'
     );

     $(el).hover(makeHover, makeHover);

     function makeHover() {
          if (window.innerWidth > 620) {
               hover.reversed() ? hover.play() : hover.reverse();
          }
     }
});

// const menu = document.querySelector('.menu');
// const btn = menu.querySelector('.nav-tgl');
// btn.addEventListener('click', (evt) => {
//      menu.classList.toggle('active');
// });

// document.addEventListener(
//      "DOMContentLoaded", () => {
//           const menu = new Mmenu( "#menu", {
//                slidingSubmenus: false,
//                language: null,
//           }, {
//                classNames: {
//                     selected: "selected",
//                },
//                offCanvas: {
//                          position: "right-front",
//                          page: {
//                                    selector: "#page"
//                               },
//                     }
//           });
//      }
// );



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
});

const swiperEvent = new Swiper('.swiper-event', {
     // Optional parameters
     direction: 'horizontal',
     // loop: true,
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
     }
});


