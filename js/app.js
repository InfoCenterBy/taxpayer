
document.querySelectorAll('.advantages-card').forEach((el) => {
     let personaPic = el.getElementsByClassName('advantages-card__pic');
     let persona = el.getElementsByClassName('advantages-card__img');
     let text = el.getElementsByClassName('advantages-card__text');
     let subText = el.getElementsByClassName('advantages-card__sub-text');

     const tween = gsap.timeline({ repeat: 0, repeatDelay: 1, reversed: true });
     // const tweenClick = gsap.timeline({repeat: 0, repeatDelay: 1, reversed: true})

     let hover = 
     tween.to(
          personaPic,
          {
               duration: 0.5, 
               xPercent: -110,
               yPercent: 20,
               ease: 'expo.inOut',
          },
     )
     tween.to(
          text,
          {
               duration: 0.5, 
               xPercent: 100,
               ease: 'expo.Out',
               width: '211px',
               onStart: () => {
                    // text[0].textContent = 'Получайте всю налоговую информацию самыми первыми';
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
                    ' Министерство по налогам и сборам Республики Беларусь привлекает членов Ассоциации к разработке актов налогового законодательства и включает в рабочие группы для их обсуждения.';
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
                    text[0].textContent = 'Получайте всю налоговую информацию самыми первыми';
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
