let addButton1 = document.getElementById("addButton1");
let addButton2 = document.getElementById("addButton2");
let url;

addButton1.addEventListener("click", () => {
    url = prompt("Введіть посилання.");
})

addButton2.addEventListener("click", () => {
    if (url){
        location.href = url;
    }
})