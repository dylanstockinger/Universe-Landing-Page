const slideFeatureContainer = document.querySelectorAll(".card-features");
slideFeatureContainer.forEach(function (slideFeatureContainer) {
  window.addEventListener("scroll", () => {
    const { scrollTop, clientHeight } = document.documentElement;

    const topElementToTopViewport =
      slideFeatureContainer.getBoundingClientRect().top;

    if (
      scrollTop >
      (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.5
    ) {
      slideFeatureContainer.classList.add("active");
    }
  });
});




const slideResultsContainer = document.querySelectorAll(".card-result");
slideResultsContainer.forEach(function (slideResultsContainer) {
  window.addEventListener("scroll", () => {
    const { scrollTop, clientHeight } = document.documentElement;

    const topElementToTopViewport =
    slideResultsContainer.getBoundingClientRect().top;

    if (
      scrollTop >
      (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.5
    ) {
      slideResultsContainer.classList.add("active");
    }
  });
});


const slideContent = document.querySelector('.container-call-to-action')

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;



    const topElementToTopViewport = slideContent.getBoundingClientRect().top;



    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.5){
      slideContent.classList.add('active')
    }
})
console.log(slideContent);

const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");

  const openStyle = document.querySelector("body");
  openStyle.classList.toggle("overflow");
});
