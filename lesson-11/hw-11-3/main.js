let button = document.getElementById("click-button");
let poster = document.getElementById("game-poster");

button.addEventListener("click", () => {
    let imageNumber = Math.floor(Math.random() * 9) + 1;
    poster.src = "./images/" + imageNumber + ".jpg";
})
