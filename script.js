// ==============================
// HEADER
// ==============================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});


// ==============================
// ANIMAÇÃO DAS SEÇÕES
// ==============================

const reveals = document.querySelectorAll(".reveal");

function revealSection(){

    const windowHeight = window.innerHeight;

    reveals.forEach(section=>{

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < windowHeight - 120){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSection);

revealSection();