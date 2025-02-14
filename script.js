const nav = document.querySelector('.Navbar')

window.addEventListener('scroll', function(){
    if(window.scrollY >100){
        nav.classList.add('sticky');
    }
    else{
        nav.classList.remove('sticky');
    }
})