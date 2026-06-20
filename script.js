// ==============================
// HEADER
// ==============================

const header = document.getElementById("header");

// ==============================
// WHATSAPP (número centralizado)
// ==============================

const WHATSAPP_NUMERO = "5515998174641";

document.querySelectorAll(".wpp-link").forEach(link => {

    link.href = `https://wa.me/${WHATSAPP_NUMERO}`;

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

// ==============================
// SCROLL (header + reveal)
// ==============================

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

    revealSection();

});

revealSection();