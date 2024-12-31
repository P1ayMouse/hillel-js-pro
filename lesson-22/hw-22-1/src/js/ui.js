export const addCardToDom = (card, cardsList) => {
    const cardUl = document.createElement("ul");
    cardUl.classList.add("card");

    const cardTitle = document.createElement("li");
    cardTitle.classList.add("cardTitle");
    cardTitle.textContent = card.title;

    const cardBody = document.createElement("li");
    cardBody.classList.add("cardBody");
    cardBody.textContent = card.body;

    cardUl.appendChild(cardTitle);
    cardUl.appendChild(cardBody);

    const commentBtn = document.createElement("button");
    commentBtn.classList.add("commentBtn");
    commentBtn.textContent = "Завантажити коментарі";
    cardUl.appendChild(commentBtn);

    cardsList.appendChild(cardUl);
    cardUl.dataset.id = card.id;
}

export const addCommentToDom = (card, commentsList) => {
    commentsList.forEach(comment => {
        const commentName = document.createElement("li");
        commentName.classList.add("commentName");
        commentName.textContent = comment.name;

        const commentEmail = document.createElement("li");
        commentEmail.classList.add("commentEmail");
        commentEmail.textContent = comment.email;

        const commentBody = document.createElement("li");
        commentBody.classList.add("commentBody");
        commentBody.textContent = comment.body;

        const hr = document.createElement("hr");

        card.appendChild(hr);
        card.appendChild(commentName);
        card.appendChild(commentEmail);
        card.appendChild(commentBody);
    });
}
