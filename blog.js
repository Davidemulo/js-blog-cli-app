// simple blog cli app

const fs = require("fs") // built-in module


let posts = [] // array to store blog posts


// load posts from file if it exists
if (fs.existsSync("posts.json")) {
    const data = fs.readFileSync("posts.json") 
    posts = JSON.parse(data) 
}


// function to save posts to file
function savePosts() {
    fs.writeFileSync("posts.json", JSON.stringify(posts))
}


// function to add a new post
function addPost(title = "", content = "") {
    // check if inputs are empty
    if (title === "" || content === "") {
        console.log("Please provide title and content")
        return
    }

    const post = { title: title, content: content } // create post object
    posts.push(post) // add to array
    savePosts() // save to file
    console.log("Post added")
}


// function to view all posts
function viewPosts() {
    if (posts.length === 0) {
        console.log("No posts yet")
        return
    }

    // loop through posts and display them
    for (let i = 0; i < posts.length; i++) {
        console.log("Post " + (i + 1))
        console.log("Title: " + posts[i].title)
        console.log("Content: " + posts[i].content)
        console.log("------")
    }
}


// function to delete a post
function deletePost(index) {
    index = Number(index) // convert to number

    // check if index is valid
    if (index < 1 || index > posts.length) {
        console.log("Invalid post number")
        return
    }

    posts.splice(index - 1, 1) // remove post
    savePosts() // update file
    console.log("Post deleted")
}


// get command from terminal
const command = process.argv[2]
let arg1 = process.argv[3] // title or index
let arg2 = process.argv.slice(4).join(" ") // content


// check command and run function
if (command === "add") {
    addPost(arg1, arg2)
} else if (command === "view") {
    viewPosts()
} else if (command === "delete") {
    deletePost(arg1)
} else {
    console.log("Commands: add, view, delete")
}