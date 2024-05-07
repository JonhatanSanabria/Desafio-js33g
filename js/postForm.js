import {createPostCard} from "../modules/postsApi.js"

let createPostBtn = document.getElementById("save-comment")
createPostBtn.addEventListener("click", async () => {
    let fields = document.querySelectorAll("#create-post-form input")
    let postObject = {}
    fields.forEach((field) => {
        let type = field.type
        let property = field.name
        let value = field.value
        if (type === "text") {
            postObject[property] = value
        } else if (type === "number") {
            postObject[property] = Number(value)
        }
    })
    console.log(postObject)
    let savedPost = await createPostCard(postObject)
    console.log(savedPost)
})

