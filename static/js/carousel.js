document.querySelectorAll(".carousel-wrapper").forEach(function (wrapper) {
    var track = wrapper.querySelector(".carousel__track");
    var slides = wrapper.querySelectorAll(".carousel__slide");
    var prevButton = wrapper.querySelector(".carousel__arrow--left");
    var nextButton = wrapper.querySelector(".carousel__arrow--right");
    var index = 0;

    function update() {
        track.style.transform = "translateX(-" + index * 100 + "%)";
    }

    prevButton.addEventListener("click", function () {
        index = (index - 1 + slides.length) % slides.length;
        update();
    });

    nextButton.addEventListener("click", function () {
        index = (index + 1) % slides.length;
        update();
    });
});
