let select = (trigger) => {
   const selectHeader = document.querySelector(`${trigger} > .select__header`),
      selectItems = document.querySelectorAll(`${trigger} .select__option`);
   selectHeader.addEventListener("click", function () {
      this.closest(trigger).classList.toggle("is-active");
   });
   for (let i = 0; i < selectItems.length; i++) {
      selectItems[i].addEventListener("click", function () {
         this.closest(trigger).classList.remove("is-active");
         selectHeader.innerText = this.innerText;
      });
   }
};
const experienceSlider = new Swiper(".experience__slider", {
   slidesPerView: 1,
   navigation: {
      prevEl: ".experience__btn-prev",
      nextEl: ".experience__btn-next",
   },
});
const photoSlider = new Swiper(".creo__slider-one", {
   loop: true,
   navigation: {
      prevEl: ".creo__btn-prev-one",
      nextEl: ".creo__btn-next-one",
   },
   slidesPerView: 1,
   spaceBetween: 30,
   grabCursor: true,
   breakpoints: {
      350: {
         slidesPerView: 2,
      },
      600: {
         slidesPerView: 3,
      },
      700: {
         slidesPerView: 4,
      },
      900: {
         slidesPerView: 5,
      },
   },
});
const videoSlider = new Swiper(".creo__slider-two", {
   loop: true,
   navigation: {
      prevEl: ".creo__btn-prev-two",
      nextEl: ".creo__btn-next-two",
   },
   slidesPerView: 1,
   spaceBetween: 30,
   grabCursor: true,
   breakpoints: {
      350: {
         slidesPerView: 2,
      },
      600: {
         slidesPerView: 3,
      },
      700: {
         slidesPerView: 4,
      },
      900: {
         slidesPerView: 5,
      },
   },
});
const blogSlider = new Swiper(".blog__slider", {
   navigation: {
      prevEl: ".blog__btn-prev",
      nextEl: ".blog__btn-next",
   },
   pagination: {
      el: ".blog__pagination",
      clickable: true,
   },
   slidesPerView: 1,
   spaceBetween: 27,
   grabCursor: true,
   slidesPerGroup: 1,
   breakpoints: {
      350: {
         slidesPerView: 1,
         slidesPerGroup: 1,
      },
      600: {
         slidesPerView: 2,
         slidesPerGroup: 2,
      },
      750: {
         slidesPerView: 3,
         slidesPerGroup: 3,
         spaceBetween: 0,
      },
      900: {
         slidesPerView: 4,
         slidesPerGroup: 4,
      },
   },
});
const reviewsSlider = new Swiper(".reviews__slider", {
   speed: 500,
   effect: "fade",
   fadeEffect: {
      crossFade: true,
   },
   navigation: {
      prevEl: ".reviews__slider-btn-prev",
      nextEl: ".reviews__slider-btn-next",
   },
   pagination: {
      type: "fraction",
      el: ".reviews__slider-pagination",
   },
});
const reviewsMiniSlider = new Swiper(".reviews__mini-slider", {
   speed: 500,
   slidesPerView: 1,
   breakpoints: {
      600: {
         slidesPerView: 2,
      },
   },
   navigation: {
      prevEl: ".reviews__mini-slider-btn-prev",
      nextEl: ".reviews__mini-slider-btn-next",
   },
   pagination: {
      type: "fraction",
      el: ".reviews__mini-slider-pagination",
   },
});
select(".services__select");

const burger = document.querySelector(".burger");
const header = document.querySelector(".header");
const headerContent = document.querySelector(".header__top-content");
const burgerOverlay = document.querySelector(".burger-overlay");
burger.addEventListener("click", function () {
   this.classList.toggle("--active");
   header.classList.toggle("--active");
   burgerOverlay.classList.toggle("--active");
   document.body.classList.toggle("--lock");
});
