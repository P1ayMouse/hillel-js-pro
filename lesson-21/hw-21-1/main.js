import {createPost, getComments, getPosts} from "./api.js";
import {addCommentToDom, addCardToDom} from "./ui.js";

const cardsList = document.getElementById("cardsList");
const cardTitleForm = document.getElementById("card-title");
const cardBodyForm = document.getElementById("card-body");
const postForm = document.getElementById("postForm");

cardsList.addEventListener("click", async (event) => {
    if (event.target.classList.contains("commentBtn")) {
        const card = event.target.parentElement;
        const postId = card.dataset.id;

        console.log(`Button clicked for post ID: ${postId}`);

        const commentsList = await getComments(postId);

        addCommentToDom(card, commentsList);

        event.target.disabled = true;
        event.target.textContent = "Коментарі завантажено";
    }
});

postForm.addEventListener("submit",  (e) => {
    e.preventDefault();

    const title = cardTitleForm.value.trim();
    const body = cardBodyForm.value.trim();

    if (title && body) {
        createPost(title, body);
    }
})

getPosts().then((posts) => {
    posts.forEach((post) => addCardToDom(post, cardsList))
});
