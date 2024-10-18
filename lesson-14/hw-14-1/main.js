let slides = document.querySelectorAll('.slide');
let leftArrow = document.getElementById('arrow-left');
let rightArrow = document.getElementById('arrow-right');
let dotsContainer = document.getElementById('dots-container');

addDots(0);

function addDots(activeDot) {
    dotsContainer.innerHTML = '';

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
    if (slides.length === slide) {
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
            slides[i].classList.add('active');
        }
    }
}

dotsContainer.addEventListener('click', (e) => {
    const targetId = +e.target.dataset.id;
    addDots(targetId);
    leftArrowUsage(targetId);
    rightArrowUsage(targetId+1);
    slideChanger(targetId);
});

rightArrow.addEventListener('click', () => {
    if (rightArrow.classList.contains('active')) {
        for (let slideId in slides)
        {
            if (slides[slideId].classList.contains('active')) {
                slides[slideId].classList.remove('active');
                slides[+slideId+1].classList.add('active');
                leftArrow.classList.add('active');

                addDots(+slideId+1);

                rightArrowUsage(+slideId+2);

                break;
            }
        }
    }
})

leftArrow.addEventListener('click', () => {
    if (leftArrow.classList.contains('active')) {
        for (let slideId in slides)
        {
            if (slides[slideId].classList.contains('active')) {
                slides[slideId].classList.remove('active');
                slides[+slideId-1].classList.add('active');
                rightArrow.classList.add('active');

                addDots(+slideId-1);

                leftArrowUsage(+slideId-1)

                break;
            }
        }
    }
})


