function loadUser() {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((res) => res.json())
    .then((json) => displayUsers(json));
}
function displayUsers(users) {
  const ul = document.getElementById("user-list");
  for (const user of users) {
    const li = document.createElement("li");
    li.innerHTML = `${user.name} have this email - ${user.email} <br> </br>`;
    ul.appendChild(li);
  }
}

function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPosts(data));
}
function displayPosts(posts) {
  const postContainer = document.getElementById("posts-container");
  for (const post of posts) {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = ` 
    <h4 class="id"> ${post.userId} </h4>
    <h5>${post.title}</h5>
    <p>${post.body}</p>
`;
    postContainer.appendChild(div);
  }
}

