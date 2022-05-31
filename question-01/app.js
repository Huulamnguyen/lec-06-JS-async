function fetchUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => renderUsers(data))
        .catch(err => console.log(err))
}

function renderUsers(users) {
    const usersLi = document.querySelector("ul");
    users.forEach(user => {
        const userLi = document.createElement("li");
        userLi.innerHTML = user.name;
        usersLi.appendChild(userLi);
    })
}

document.addEventListener('DOMContentLoaded', function() {
    fetchUsers();
})