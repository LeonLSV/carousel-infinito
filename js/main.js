document.addEventListener("DOMContentLoaded", () => {
  const elementosCarousel = document.querySelectorAll(".carousel");
  M.Carousel.init(elementosCarousel, {
    duration: 150,
    dist: -100,
    shift: 50,
    padding: 5,
    numVisible: 4,
    indicators: true,
    noWrap: false,
  });
});
