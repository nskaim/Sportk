const menu=document.getElementById('hamburger');
const list=document.getElementById('list');

menu.addEventListener("click" , () => {
    list.classList.toggle('navlist-active');

})