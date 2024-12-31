import {getPosts} from "./api.js";
import {addCardToDom} from "./ui.js";
import {handleCommentCreate, handlePostCreate} from "./event.js";

const cardsList = document.getElementById("cardsList");
const postForm = document.getElementById("postForm");

// Завантаження коментарів при натисканні на кнопку під постом
cardsList.addEventListener("click", handleCommentCreate);

// Створення поста через форму
postForm.addEventListener("submit", handlePostCreate);

// Отримання усіх постів та їх висвітлення на сторінці
getPosts().then((posts) => {
    posts.forEach((post) => addCardToDom(post, cardsList))
});
