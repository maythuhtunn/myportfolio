const navbuttons = document.querySelector('.navbuttons');

//START NAVBAR

navbuttons.addEventListener('click',()=>navbuttons.classList.toggle('changes'));

//for navbar
const navbar = document.querySelector('.navbar');
const navbarcollapse = document.querySelector('.navbar-collapse');

console.log(window.innerWidth);
window.addEventListener('scroll',()=>{
    const getscrolly = window.scrollY;

    // console.log(getscrolly);
    if(getscrolly >= 150){
        navbar.classList.add('navmenus');
    }else if( getscrolly < 150 ){
        navbar.classList.remove('navmenus');
    }

});

//End Navbar

// START BANNERS
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
//END BANNERS

// START ABOUT SECTION
const progressanis = document.querySelectorAll('.progressanis');

progressanis.forEach(progressani =>{
    // console.log(progressani.getAttribute("aria-valuenow"))

    window.addEventListener('scroll',()=>{
        const getaniscrolly = window.scrollY;

        if(getaniscrolly >= 1500){
            progressani.style.width = progressani.getAttribute("aria-valuenow") + "%";
        }else{
            progressani.style.width = "0%";
        }
    })
})

// start 4 blocks section
const aboutblocks = document.querySelectorAll('.abouts'); 

const skillblock = document.querySelector('.skillblocks')
const educationblock = document.querySelector('.educationblocks');
const expblocks = document.querySelector('.experienceblocks');

aboutblocks.forEach(aboutblock =>{
    aboutblock.addEventListener('click',(e)=>{
        let datafilter = aboutblock.getAttribute('data-filter');
    // console.log(datafilter);

    if(datafilter === 'edu'){
        skillblock.style.display = "none";
        educationblock.style.display = "block";
        expblocks.style.display = "none";
    }else if(datafilter === 'skill'){
        skillblock.style.display = "block";
        educationblock.style.display = "none";
        expblocks.style.display = "none";
    }else if(datafilter === 'exp'){
        skillblock.style.display = "none";
        educationblock.style.display = "none";
        expblocks.style.display = "block";
    }
    })

});

const faqbtns = document.querySelectorAll('.faq-toggle');
const faqs = document.querySelectorAll('.faq');

faqbtns.forEach(faqbtn => {
    faqbtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('fas')) {
            e.target.parentElement.parentElement.classList.toggle('fqactive');
        }

    });

});

//end 4 blocks section

// END ABOUT SECTION

// START FOOTER
const getyear = document.getElementById('getyear');
const getfullyear = new Date().getFullYear();
getyear.textContent = getfullyear;

//END FOOTER

