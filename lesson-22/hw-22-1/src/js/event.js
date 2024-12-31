import {createPost, getComments} from "./api.js";
import {addCardToDom, addCommentToDom} from "./ui.js";

const cardTitleForm = document.getElementById("card-title");
const cardBodyForm = document.getElementById("card-body");
const cardsList = document.getElementById("cardsList");

export const handlePostCreate = (e) => {
    e.preventDefault();

    const title = cardTitleForm.value.trim();
    const body = cardBodyForm.value.trim();

    if (title && body) {
        createPost(title, body).then(data => {
            addCardToDom(data, cardsList);
        });
    }
}

export const handleCommentCreate = async (e) => {
    if (e.target.classList.contains("commentBtn")) {
        const card = e.target.parentElement;
        const postId = card.dataset.id;

        console.log(`Button clicked for post ID: ${postId}`);

        const commentsList = await getComments(postId);

        addCommentToDom(card, commentsList);

        e.target.disabled = true;
        e.target.textContent = "Коментарі завантажено";
    }
}