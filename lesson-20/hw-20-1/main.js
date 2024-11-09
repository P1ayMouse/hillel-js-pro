const apiUrl = "https://jsonplaceholder.typicode.com";
const cardsList = document.getElementById("cardsList");
const cardTitleForm = document.getElementById("card-title");
const cardBodyForm = document.getElementById("card-body");
const postForm = document.getElementById("postForm");

const cards = () => {
    fetch(apiUrl + '/posts?_limit=10', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => {
            cardsList.innerHTML = "";
            data.forEach(card => addCardsToDom(card));
        })
        .catch(error => console.log(error));
};

const comments = (postId) => {
    return fetch(apiUrl + `/posts/${postId}/comments?_limit=2`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .catch(error => console.log(error));
};

const addCardsToDom = (card) => {
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
};

cardsList.addEventListener("click", async (event) => {
    if (event.target.classList.contains("commentBtn")) {
        const card = event.target.parentElement;
        const postId = card.dataset.id;

        console.log(`Button clicked for post ID: ${postId}`);

        const commentsList = await comments(postId);

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

        event.target.disabled = true;
        event.target.textContent = "Коментарі завантажено";
    }
});

postForm.addEventListener("submit",  (e) => {
    e.preventDefault();

    const title = cardTitleForm.value.trim();
    const body = cardBodyForm.value.trim();

    if (title && body) {
        fetch(apiUrl + '/posts', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1
            })
        })
            .then((response) => {
                return response.json();
            }).then(data => {
                addCardsToDom(data);
                console.log(data);
            })
            .catch(error => console.log(error));

    }
})

cards();
