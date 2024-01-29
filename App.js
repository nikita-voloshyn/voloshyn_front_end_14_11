//получение поста
function fetchPost(postId) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

//получения комента
function fetchComments(postId) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

// отображение про пост
function displayPost(post) {
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = `
        <h2>Post Information</h2>
        <p><strong>Title:</strong> ${post.title}</p>
        <p><strong>Body:</strong> ${post.body}</p>
        <button onclick="fetchAndDisplayComments(${post.id})">Get Comments</button>
    `;
}

//отображение коментов
function displayComments(comments) {
    const postContainer = document.getElementById('post-container');
    const commentsList = document.createElement('ul');

    comments.forEach(comment => {
        const commentItem = document.createElement('li');
        commentItem.textContent = `${comment.name}: ${comment.body}`;
        commentsList.appendChild(commentItem);
    });

    postContainer.appendChild(commentsList);
}

//тоже отображение
function fetchAndDisplayComments(postId) {
    fetchComments(postId)
        .then(comments => displayComments(comments))
        .catch(error => console.error(error));
}

//поиск поста
function searchPost() {
    const postIdInput = document.getElementById('postId');
    const postId = postIdInput.value;

    fetchPost(postId)
        .then(post => displayPost(post))
        .catch(error => console.error(error));
}
