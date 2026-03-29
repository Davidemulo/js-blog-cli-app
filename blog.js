// simple blog cli app

const posts = [];


// add post
function addPost(title = "", content = "") {
    if (title === "" || content === "") {
        console.log("Please provide title and content");
        return;
    }

    const post = { title: title, content: content };
    posts.push(post);
    console.log("Post added");
}


// view posts
function viewPosts() {
    if (posts.length === 0) {
        console.log("No posts yet");
        return;
    }

    for (let i = 0; i < posts.length; i++) {
        console.log("Post " + (i + 1));
        console.log("Title: " + posts[i].title);
        console.log("Content: " + posts[i].content);
        console.log("------");
    }
}


// delete post
function deletePost(index) {
    index = Number(index);

    if (index < 1 || index > posts.length) {
        console.log("Invalid post number");
        return;
    }

    posts.splice(index - 1, 1);
    console.log("Post deleted");
}


// CLI logic
const command = process.argv[2];
let arg1 = process.argv[3];
let arg2 = process.argv.slice(4).join(" ");

if (command === "add") {
    addPost(arg1, arg2);
} else if (command === "view") {
    viewPosts();
} else if (command === "delete") {
    deletePost(arg1);
} else {
    console.log("Commands: add, view, delete");
}