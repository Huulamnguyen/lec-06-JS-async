// fetch()
// function fetchUsers() {
//     return fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => renderUsers(data))
//         .catch(err => console.log(err))
// }

// function renderUsers(users) {
//     const usersLi = document.querySelector("ul");
//     users.forEach(user => {
//         const userLi = document.createElement("li");
//         userLi.innerHTML = user.name;
//         usersLi.appendChild(userLi);
//     })
// }

// document.addEventListener('DOMContentLoaded', function() {
//     fetchUsers();
// })

// XHR
const sendHttpRequest = (method, url, data) => {
    const promise = new Promise( (resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url)

        xhr.responseType = 'json';

        if(data){
            xhr.setRequestHeader('Content-Type', 'application/json');
        }

        xhr.onload = () => {
            if(xhr.status >= 400){
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        };

        xhr.onerror = () => {
            reject('Something went wrong!')
        };
        xhr.send(JSON.stringify(data));

    });
    return promise;
};

const getData = () => {
    sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/users')
        .then(responseData => renderUsers(responseData));
};

function renderUsers(users) {
    const usersLi = document.querySelector("ul");
    users.forEach(user => {
        const userLi = document.createElement("li");
        userLi.innerHTML = user.name;
        usersLi.appendChild(userLi);
    })
}

document.addEventListener('DOMContentLoaded', function() {
    getData();
})