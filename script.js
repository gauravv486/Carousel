let slides = document.querySelectorAll('.slides');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

let paginationbtn = document.querySelectorAll('.pagination-item');

let currentSlide = 0;

function setslides() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`
    })

    paginationbtn.forEach((btn, index) => {
        btn.style.width = index === currentSlide ? "30px" : "10px";
    });

}

function prevslide() {
    currentSlide = ((currentSlide - 1) + slides.length) % slides.length;
    setslides();
}

function nextslide() {
    currentSlide = (currentSlide + 1) % slides.length;
    setslides();
}


prev.addEventListener("click", prevslide);
next.addEventListener("click", nextslide);

paginationbtn.forEach((btn , index)=>{
    btn.addEventListener("click",()=>{
        currentSlide = index;
        setslides();
    })
})

setslides();