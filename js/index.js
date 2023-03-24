let hamburger = document.getElementsByClassName('hamburger')[0];
let navLinks = document.getElementsByClassName('nav-links')[0];

hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle('show')
    hamburger.classList.toggle('cross')
})



let sharebtn = document.querySelector(".fa-share-alt");
let title = window.location.title;
let url1 = window.location.href;

sharebtn.addEventListener("click", () => {
    if (navigator.share) {
        navigator.share({
            title: `${title}`,
            url: `${url1}`
        }).then(() => {

        })
            .catch(error=>{
               
            })
    }
})