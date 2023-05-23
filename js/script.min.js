
// const adv1 = document.querySelector(".adv-card-1");
// const adv2 = document.querySelector(".adv-card-2");
// const adv3 = document.querySelector(".adv-card-3");
// const adv4 = document.querySelector(".adv-card-4");
// const adv5 = document.querySelector(".adv-card-5");


// $(advCard).hover(() => {
//      console.log(advCard);
//      switch(advCard.classList){
//           case 'adv-card-1':
//                console.log('yes')
//                break;
//      }
//      group.classList.toggle("reorder");
//      console.log(this)
//      const text = document.querySelector(".adv-card-1 .advantages-card__text")
//      if($('.adv-card-1').hasClass('reorder')){
//           text.textContent = 'Министерство по налогам и сборам Республики Беларусь привлекает членов Ассоциации к разработке актов налогового законодательства и включает в рабочие группы для их обсуждения.'
//      }
//      else{
//           text.textContent = 'Получайте всю налоговую информацию самыми первыми'
//      }
// });


const advCard = document.querySelectorAll('.advantages-card')


advCard.forEach((el)=>{
     let innerText = el.getElementsByClassName('advantages-card__text')[0]
     // console.log('innerTest', innerText[0].textContent)
     function changeText () {
          switch(true){
               case el.classList.contains('adv-card-1'):
                    el.classList.toggle("reorder")
                    if(el.classList.contains('reorder')){
                         innerText.textContent = 'Министерство по налогам и сборам Республики Беларусь привлекает членов Ассоциации к разработке актов налогового законодательства и включает в рабочие группы для их обсуждения.'
                    }
                    else{
                         innerText.textContent = 'Получайте всю налоговую информацию самыми первыми'
                    }
               break;
               case el.classList.contains('adv-card-2'):
                    el.classList.toggle("reorder")
                    if(el.classList.contains('reorder')){
                         innerText.textContent = 'Министерство по налогам и сборам Республики Беларусь привлекает членов Ассоциации к разработке актов налогового законодательства и включает в рабочие группы для их обсуждения.'
                    }
                    else{
                         innerText.textContent = 'Участвуйте в принятии решений об изменениях законодательства'
                    }
               break;
               case el.classList.contains('adv-card-3'):
                    el.classList.toggle("reorder")
                    if(el.classList.contains('reorder')){
                         innerText.textContent = 'Ассоциация налогоплательщиков является членом общественно- консультативных комитетов при ряде государственных органов и может представлять интересы плательщиков по различным вопросам деятельности.'
                    }
                    else{
                         innerText.textContent = 'Взаимодействуйте с государственными органами'
                    }
               break;
               case el.classList.contains('adv-card-4'):
                    el.classList.toggle("reorder")
                    if(el.classList.contains('reorder')){
                         innerText.textContent = 'Ассоциация рассматривает на экспертном совете, возникающие в правоприменительной практике  вопросы налогообложения, а при невозможности разрешения - запрос направляется в Министерство по налогам и сборам Республики Беларусь для рассмотрения позиции Ассоциации в данном вопросе.'
                    }
                    else{
                         innerText.textContent = 'Обретайте экспертную поддержку'
                    }
               break;
               case el.classList.contains('adv-card-5'):
                    el.classList.toggle("reorder")
                    if(el.classList.contains('reorder')){
                         innerText.textContent = 'Ассоциация в целях недискриминации и защиты интересов налогоплательщиков при обнаружении неправомерных решений подчиненных инспекций МНС вправе обратиться в Министерство для пересмотра Министерством подчиненных инспекций МНС по существу.'
                    }
                    else{
                         innerText.textContent = 'Обеспечьте защиту своих прав и интересов'
                    }
               break;
          }
     }
     if ($(window).width() > 620) {
          $(el).hover(changeText)
     }
     else{
          $(el).on( "click", changeText)
     }
})



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
