const botonAbrir = document.querySelector(".boton")
const popUp = document.querySelector(".pop-up")
const botonCerrar =document.querySelector(".overlay__cerrar");

botonAbrir.addEventListener("click",()=>{
    popUp.classList.add("active");
})

botonCerrar.addEventListener("click",()=>{
    popUp.classList.remove("active");
})