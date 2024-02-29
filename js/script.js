

console.log('I can');



const hemburger = document.getElementById('hemburger')
const close = document.getElementById('close')
const nav_list = document.querySelector('.nav-list')

hemburger.addEventListener("click",()=>{
    hemburger.style.display = "none"
    close.style.display = "flex"
    console.log('hembuger');
    nav_list.style.display = "flex"
    


})
close.addEventListener("click",()=>{
    hemburger.style.display = "flex"
    close.style.display = "none"
    console.log('close');
    nav_list.style.display = "none"




})
