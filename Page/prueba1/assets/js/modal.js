let icono = document.querySelector(".popup-img span");
let contenedor = document.querySelector(".popup-img");

let imagenes = document.querySelectorAll("img");

console.log(icono);

imagenes.forEach((imagen)=>{

    imagen.addEventListener("click", function(){
        console.log("Imagen presionada!");
        // console.log(contenedor);
        contenedor.children[1].src=imagen.src;
        console.log(contenedor.children[1]);
        contenedor.style.display="initial";
    });

});

icono.addEventListener("click", function(){
    contenedor.style.display="none";
});