import { fetchAllPosts } from "../modules/postsApi.js"

document.getElementById("create-post-form").addEventListener("click", () => {
  window.open("../views/postForm.html")
})

const createPostCard = (postObject) => {
    let {title, content, tags, author, date, picture, reactions} = postObject
    let cardHTML = 
    `<div class="card mb-3"><!--Container-->
    <img src="${picture}" class="card-img-top" alt="imagen del post" ><!--Image-->
    <div class="card-body"><!--Form-->
    <div class="d-flex flex-row"><!--Body-->
    <img class="rounded-circle icon__image" width="40px" height="40px" src="https://xsgames.co/randomusers/avatar.php?g=male" alt="icon"><!--User image-->
    <div class="text ms-2"><!--User Body-->
    <h6 class="m-0">${author}</h6><!--Author-->
    <span class="date">${date}</span><!--Date-->
    </div>
    </div>
    <h5 class="card-title mt-2">${title}</h5><!--title-->
    <div class="d-flex flex-row justify-content-between"><!--Tags Body--> 
    <div class="d-flex flex-row"><!--Tags Wrapper-->
    <p class="card-text">${tags}</p><!--Tags-->
    <div class="d-block">${reactions}<!--Reactions-->
    <h6 class="content-box">${content}</h6><!--Content-->
    </div>
    </div>
    </div>        
    </div>
    
    </div>
    `
    return cardHTML;
  }
  
  const printProducts = (productsArray, wrapperId) => {
    let wrapper = document.getElementById(wrapperId)
    wrapper.innerHTML = ""
    productsArray.forEach((product) => {
      let currentContent = wrapper.innerHTML
      wrapper.innerHTML = currentContent + createPostCard(product)        
    });
  }
  
  const printAllProducts = async () => {
    let productsArray = await fetchAllPosts()
    printProducts(productsArray, "products-wrapper")    
  }
  
  printAllProducts()
  
/*    Otro modelo de posteo */

/*
  <div class="col">
   <a style="text-decoration: none" href="../views/detalle.html?productKey=${key}">
      <div class="card-body">
          <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-3">
                <img src="${picture}" 
                  style="
                  width: 100%;
                  height: 100%;
                  object-fit: cover" 
                  class="img-fluid rounded" 
                  alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5>${description}</h5>
                    <ul class="list-group">
                      <li class="list-group-item">Articulo: ${article}</li>
                      <li class="list-group-item">Marca: ${brand}</li>
                      <li class="list-group-item">Categoria: ${category}</li>
                      <li class="list-group-item">Contenido Neto: ${content} L</li>
                      <li class="list-group-item">Precio: $${price}</li>
                      <li class="list-group-item">Stock: ${stock}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </a>
  </div>
*/