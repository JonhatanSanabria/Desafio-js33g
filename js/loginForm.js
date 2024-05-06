/*  Para verificar token en cada pagina

let token = localStorage.getItem("token");
console.log(token);

token && window.open("index.html", "_self");

*/

let logInBtn = document.getElementById("login-button")
logInBtn.addEventListener("click", () => {
    let fields = document.querySelectorAll("#login-form input")
    let userObject = {}
    fields.forEach((field) => {
        let property = field.name
        let value = field.value
        userObject[property] = value
    });
})
