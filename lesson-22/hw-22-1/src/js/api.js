const apiUrl = "https://jsonplaceholder.typicode.com";

export const getComments = (postId) => {
    return fetch(apiUrl + `/posts/${postId}/comments?_limit=2`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .catch(error => console.log(error));
};

export const getPosts = () => {
    return fetch(apiUrl + '/posts?_limit=10', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .catch(error => console.log(error));
};

export const createPost = (title, body) => {
     return fetch(apiUrl + '/posts', {
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
        .then((response) => response.json())
        .catch(error => console.log(error));
};