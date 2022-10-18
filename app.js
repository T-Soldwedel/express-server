import express from "express"
import { posts } from "./data/posts.js"
import { users } from "./data/users.js"
import { images } from "./data/images.js"
import { todos } from "./data/todos.js"

//create express server
const app = express()
const PORT = 1234;

//RESTfull API (resource sharing)              (API = Application Programming Interface)
// create all endpoints/routes
// /posts => 100 posts
// /users => 10 users
// /products => 30 products
// /albums => 100 albums

// endpoint "/"
app.get("/", (req,res)=>{
    res.send("<h1>Welcome to our RestFul-API</h1>");
    })

// endpoint "/posts"
app.get("/posts", (req,res)=>{
    res.json(posts)
})

// endpoint "/users"
app.get("/users", (req,res)=>{
    res.json(users)
})

// endpoint "/images"
app.get("/images", (req,res)=>{
    res.json(images)
})

// endpoint "/todos"
app.get("/todos", (req,res) => {
    res.json(todos)
})

// listening any request on port : 1234
app.listen(PORT, () => console.log("Server is running on port:", PORT))