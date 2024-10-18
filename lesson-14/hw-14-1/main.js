let slides = document.querySelectorAll('.slide');
let leftArrow = document.getElementById('arrow-left');
let rightArrow = document.getElementById('arrow-right');
let dotsContainer = document.getElementById('dots-container');
let actualSlide = 0;

dotsRender(actualSlide);
rightArrowUsage(actualSlide);
leftArrowUsage(actualSlide);

function dotsRender(activeDot) {
    dotsContainer.innerHTML = '';
    if (slides.length <= 1){
        return
    }

    for (let i = 0; i < slides.length; i++) {
        let span = document.createElement("span")
        span.classList.add('dot');
        span.dataset.id = i;
        if (activeDot === i) {
            span.classList.add('active');
        }
        dotsContainer.appendChild(span);
    }
}

function leftArrowUsage(slide) {
    if (slide === 0) {
        leftArrow.classList.remove('active');
    }
    else {
        leftArrow.classList.add('active');
    }
}

function rightArrowUsage(slide) {
    if (slides.length - 1 === slide) {
        rightArrow.classList.remove('active');
    }
    else {
        rightArrow.classList.add('active');
    }
}

function slideChanger(slide) {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('active')) {
            slides[i].classList.remove('active');
        }

        if (i === slide) {
            actualSlide = i;
            slides[i].classList.add('active');
        }
    }
}

dotsContainer.addEventListener('click', (e) => {
    const targetId = +e.target.dataset.id;
    dotsRender(targetId);
    leftArrowUsage(targetId);
    rightArrowUsage(targetId);
    slideChanger(targetId);
    actualSlide = targetId;
});

rightArrow.addEventListener('click', () => {
    if (rightArrow.classList.contains('active')) {
        leftArrow.classList.add('active');
        actualSlide += 1;
        slideChanger(actualSlide)
        dotsRender(actualSlide);
        rightArrowUsage(actualSlide);
    }
})

leftArrow.addEventListener('click', () => {
    if (leftArrow.classList.contains('active')) {
        rightArrow.classList.add('active');
        actualSlide -= 1;
        slideChanger(actualSlide)
        dotsRender(actualSlide);
        leftArrowUsage(actualSlide);
    }
})


