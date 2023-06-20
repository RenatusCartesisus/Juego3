const toggleMenu = document.querySelector('.dropMenu');
const button = document.querySelector('.toggle_btn')
const icon = document.querySelector('.toggle_btn i');


button.addEventListener("click", function(){
    toggleMenu.classList.toggle('open');
    // isOpen = toggleMenu.classList.contains('.open');

    icon.classList = toggleMenu.classList.contains('open')  ? "fa-solid fa-xmark" : "fa-solid fa-bars";
 
});

window.addEventListener("resize", function(){
    
    if(window.innerWidth>=992 && toggleMenu.classList.contains("open")){
        toggleMenu.classList.remove("open");
        icon.classList = "fa-solid fa-bars";
    }
    
    console.log(window.innerWidth);


});