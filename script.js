const nav = document.querySelector('.Navbar')

window.addEventListener('scroll', function(){
    if(window.scrollY >100){
        nav.classList.add('sticky');
    }
    else{
        nav.classList.remove('sticky');
    }
})
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("consultantBtn");
    const dropdown = document.getElementById("dropdown");
    const selectedOption = document.getElementById("selectedOption");
    const radioButtons = document.querySelectorAll(".dropdown input[type='radio']");

    // Toggle dropdown
    button.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents immediate closure
        dropdown.classList.toggle("show");
    });

    // Click outside to close dropdown
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target) && !button.contains(event.target)) {
            dropdown.classList.remove("show");
        }
    });

    // Update button text on selection
    radioButtons.forEach((radio) => {
        radio.addEventListener("change", function () {
            selectedOption.textContent = this.value; // Update button text
            dropdown.classList.remove("show"); // Close dropdown after selection
        });
    });
});

//testimonial
let index = 0;
function moveSlide(step) {
    const slides = document.querySelectorAll(".slide");
    index = (index + step + slides.length) % slides.length;
    document.querySelector(".carousel").style.transform = `translateX(${-index * 100}%)`;
}

//sidebar

// let Sidebar = document.querySelector('.sidebar');
// let show_Menu = document.getElementById('toggle');
// let showMenu = document.getAnimations('close-menu')

// show_Menu.addEventListener('click',function(){
//     Sidebar.classList.add('show_sidebar');
// })

// closeMenu.addEventListener('click',function(){
//     Sidebar.classList.remove('show_sidebar');
// })


