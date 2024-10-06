let button = document.getElementById('click-me');
let textElement = document.getElementById('text-block');
let oldColorBool = true;
let oldColor;

button.addEventListener('click', () => {
    if (oldColorBool){
        oldColor = textElement.style.color;
        textElement.style.color = "red";
        oldColorBool = false;
    }
    else {
        textElement.style.color = oldColor;
        oldColorBool = true;
    }
})
