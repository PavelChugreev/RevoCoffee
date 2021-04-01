export default function slider() {

    const slider = document.querySelectorAll(".slider");

    slider.forEach((item, i) => {
        const sliderWrapper = item.querySelector(".slider__wrapper");
        const slide = item.querySelector(".slide");
        const slidesCount = item.querySelectorAll(".slide").length;

        const width = parseInt(window.getComputedStyle(slide).width);
        const marginRight = parseInt(window.getComputedStyle(slide).marginRight);

        const nextBtn = item.querySelector(".next-btn");
        const prevBtn = item.querySelector(".prev-btn");

        const fullWidth = () => i===0 ? width + marginRight + 3 : width + marginRight;
        let offset = 0;

        nextBtn.addEventListener("click", () => {
            offset += fullWidth();
            sliderWrapper.style.transform = `translateX(-${offset}px)`;
            checkNextBtn(nextBtn, offset, fullWidth(), slidesCount);
            checkPrevBtn(prevBtn, offset);
    
        });

        prevBtn.addEventListener("click", () => {
            offset -= fullWidth();
            sliderWrapper.style.transform = `translateX(-${offset}px)`;
            checkNextBtn(nextBtn, offset, fullWidth(), slidesCount);
            checkPrevBtn(prevBtn, offset);
        });

        checkPrevBtn(prevBtn, offset);
    });

    function checkNextBtn(nextBtn, offset, fullWidth, slidesCount) {
        if (offset === fullWidth * (slidesCount - 2)) {
            nextBtn.style.display = "none";
        } else if (offset < fullWidth * (slidesCount - 2)) {
            nextBtn.style.display = "block";
        }
    }
    function checkPrevBtn(prevBtn, offset) {
        if (offset === 0) {
            prevBtn.style.display = "none";
        } else if (offset > 0) {
            prevBtn.style.display = "block";
        }
    }
}