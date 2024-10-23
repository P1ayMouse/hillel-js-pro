let div = document.getElementById("parent");
div.addEventListener("click", (e) => {
    alert(`Клікнуто на кнопці: ${e.target.innerText}`)
});
