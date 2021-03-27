export default function slider() {

    const sliderWrapper = document.querySelector(".slider__wrapper");
    const slide = document.querySelector(".slide");
    const slidesCount = document.querySelectorAll(".slide").length;
    
    const width = parseInt(window.getComputedStyle(slide).width);
    const marginRight = parseInt(window.getComputedStyle(slide).marginRight);
 
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    
    
    let fullWidth = width + marginRight + 4;
    let offset = 0;

    nextBtn.addEventListener("click", () => {
        offset += fullWidth;
        sliderWrapper.style.transform = `translateX(-${offset}px)`;
        checkNextBtn();
        checkPrevBtn();

    });
    prevBtn.addEventListener("click", () => {
        offset -= fullWidth
        sliderWrapper.style.transform = `translateX(-${offset}px)`;
        checkNextBtn();
        checkPrevBtn();

    });

    function checkNextBtn() {
        if (offset === fullWidth * (slidesCount - 2)) {
            nextBtn.style.display = "none";
        } else if (offset < fullWidth * (slidesCount - 2)) {
            nextBtn.style.display = "block";
        }
    }
    function checkPrevBtn() {
        if (offset === 0) {
            prevBtn.style.display = "none";
        } else if (offset > 0) {
            prevBtn.style.display = "block";
        }
    }

    checkPrevBtn();
}