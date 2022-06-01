const form = document.getElementById("userForm")
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const userInput = parseInt(document.getElementById("userInput").value)
    // console.log(typeof userInput)
    fetchUsers(userInput)
})

const fetchUsers = async(inputNum) => {
    try {
        const res = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/users/${inputNum}`),
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${inputNum}`),
            fetch(`https://jsonplaceholder.typicode.com/todos?userId=${inputNum}`)
        ]);

        const data = await Promise.all(res.map(r => r.json()))

        if(Object.keys(data[0]).length === 0) {
            alert("Please enter correct user id. Available user id from 1 to 10")
            return;
        }
        renderUsers(data);

    } catch {
        alert(`Error has occurred!`);
    }
    
}

function renderUsers(data){
    const userDiv = document.getElementById("userInformation")
    const p = document.createElement("p")
    p.innerHTML = data[0].name
    userDiv.appendChild(p)

    //* Posts
    const posts = document.createElement("p")
    posts.innerHTML = "<p>Posts:</p>"
    userDiv.appendChild(posts)

    const ulPost = document.createElement("ul")
    data[1].forEach(post => {
        const postLi = document.createElement("li")
        postLi.innerHTML = post.title
        ulPost.appendChild(postLi)
    })
    userDiv.appendChild(ulPost)

    //* Todos:
    const todo = document.createElement("p")
    todo.innerHTML = "<p>Todo List:</p>"
    userDiv.appendChild(todo)
    
    const ulTodo = document.createElement("ul")
    data[2].forEach(task => {
        const taskLi = document.createElement("li")
        taskLi.innerHTML = task.title
        ulTodo.appendChild(taskLi)
        // console.log(task)
    })
    userDiv.appendChild(ulTodo)

    document.getElementById("userInput").value = '';
}
