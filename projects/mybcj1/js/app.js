//Start Header Section

//start header image
const headertag = document.getElementById("home");
const img = document.getElementById("img");

const imgs = [
    { image: `img/bga.jpg` },
    { image: `img/bgb.jpg` },
    { image: `img/bgc.jpg` },
    { image: `img/bgd.jpg` },
    { image: `img/bge.jpg` },
    { image: `img/bgf.jpg` },
    { image: `img/bgg.jpg` },
    { image: `img/bgn.jpg` },
    { image: `img/bgr.jpg` }
];

let countimage = 0;

function loadimage() {
    const currentimage = imgs[countimage];
    // console.log(currentimage.image);
    img.src = currentimage.image;

}
loadimage();


function changeheaderbg() {
    countimage++;

    if (countimage > imgs.length) {
        countimage = 0;
    }
    loadimage();
}

setInterval(changeheaderbg, 2000);

// start navbar
const navbutton = document.querySelector(".navbuttons");
const lines = document.querySelectorAll(".lines");

navbutton.addEventListener("click", () => {
    navbutton.classList.toggle("active");
});
// end navbar

//for navbar
const navbar = document.querySelector('.navbar');
// const promotext = document.querySelector('.promos');

window.addEventListener('scroll', () => {
    const getscrolly = window.scrollY;

    // console.log(getscrolly);
    if (getscrolly >= 200) {
        navbar.classList.add('navwhite');
        // promotext.style.display = 'block';
    } else {
        navbar.classList.remove('navwhite');
        // promotext.style.display = 'block';
    }
});

// end header image
// End Header Section

// Start Product Section
const gallerylists = document.querySelectorAll('.gallerylists');
const filternecklaces = document.querySelectorAll('.product-boxs.necklace'),
    filterearrings = document.querySelectorAll('.product-boxs.earring'),
    filterbracelets = document.querySelectorAll('.product-boxs.bracelet'),
    filterrings = document.querySelectorAll('.product-boxs.ring');

gallerylists.forEach(gallerylist => {

    gallerylist.addEventListener('click', (e) => {
        let datafilter = gallerylist.getAttribute('data-filter');

        removeactiveitem();
        e.target.classList.add('activeitems');

        if (datafilter === 'all') {

            filternecklaces.forEach(filternecklace => {
                filternecklace.style.display = "inline-block";
            });

            filterearrings.forEach(filterearring => {
                filterearring.style.display = "inline-block";
            });

            filterbracelets.forEach(filterbracelet => {
                filterbracelet.style.display = "inline-block";
            });

            filterrings.forEach(filterring => {
                filterring.style.display = "inline-block";
            });

        } else if (datafilter === 'necklace') {

            filternecklaces.forEach(filternecklace => {
                filternecklace.style.display = "inline-block";
            });

            filterearrings.forEach(filterearring => {
                filterearring.style.display = "none";
            });

            filterbracelets.forEach(filterbracelet => {
                filterbracelet.style.display = "none";
            });

            filterrings.forEach(filterring => {
                filterring.style.display = "none";
            });

        } else if (datafilter === 'earring') {

            filternecklaces.forEach(filternecklace => {
                filternecklace.style.display = "none";
            });

            filterearrings.forEach(filterearring => {
                filterearring.style.display = "inline-block";
            });

            filterbracelets.forEach(filterbracelet => {
                filterbracelet.style.display = "none";
            });

            filterrings.forEach(filterring => {
                filterring.style.display = "none";
            });

        } else if (datafilter === 'bracelet') {

            filternecklaces.forEach(filternecklace => {
                filternecklace.style.display = "none";
            });

            filterearrings.forEach(filterearring => {
                filterearring.style.display = "none";
            });

            filterbracelets.forEach(filterbracelet => {
                filterbracelet.style.display = "inline-block";
            });

            filterrings.forEach(filterring => {
                filterring.style.display = "none";
            });

        } else if (datafilter === 'ring') {

            filternecklaces.forEach(filternecklace => {
                filternecklace.style.display = "none";
            });

            filterearrings.forEach(filterearring => {
                filterearring.style.display = "none";
            });

            filterbracelets.forEach(filterbracelet => {
                filterbracelet.style.display = "none";
            });

            filterrings.forEach(filterring => {
                filterring.style.display = "inline-block";
            });

        }

    })
})


//remove current active items
function removeactiveitem() {
    gallerylists.forEach(gallerylist => {
        gallerylist.classList.remove('activeitems');
    });
}
// End Product Section

// Start Contact Section
const faqbtns = document.querySelectorAll('.faq-toggle');
const faqs = document.querySelectorAll('.faq');

faqbtns.forEach(faqbtn => {
    faqbtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('fas')) {
            e.target.parentElement.parentElement.classList.toggle('fqactive');
        }

    });

});


const inquirys = document.querySelectorAll('.inquirys');
const contacttype = document.getElementById('contacttype');
const cvuploads = document.querySelector('.cvuploads');

contacttype.addEventListener('click', (e) => {

    // console.log(e.target.value);

    if (e.target.value === "job") {
        cvuploads.style.display = "block";
    } else {
        cvuploads.style.display = "none";
    }
})

const starcontainer = document.querySelector('.stars');
const stars = document.querySelectorAll('.sts');

// stars.forEach(star=>{
//     star.addEventListener('click',(e)=>{
//         // // e.target.style.color = 'yellow';
//         // // e.target.previousElementSibling.style.color = 'yellow';
//         // if(e.target.previousElementSibling === false){
//         //     e.target.style.color = 'yellow';
//         // }else if(e.target.previousElementSibling.previousElementSibling === false){
//         //     e.target.previousElementSibling.style.color = 'yellow';

//         // }


//     })
// })
starcontainer.addEventListener('click',(e)=>{
    // stars.forEach((star) => star.classList.remove("checked"));
    
    const i = [stars].indexOf(e.target);
    // console.log(e.target);
    // console.log(e.target.id);
    if(e.target.id === "one"){
        e.target.classList.add("checked"); //1
        e.target.nextElementSibling.classList.remove("checked"); //2
        e.target.nextElementSibling.nextElementSibling.classList.remove("checked"); //3
        e.target.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("checked"); //4
        e.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("checked"); //5

    }else if(e.target.id === "two"){
        e.target.previousElementSibling.classList.add("checked"); //1
        e.target.classList.add("checked"); //2
        e.target.nextElementSibling.classList.remove("checked"); //3
        e.target.nextElementSibling.nextElementSibling.classList.remove("checked"); //4
        e.target.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("checked"); //5

    }else if(e.target.id === "three"){
        e.target.previousElementSibling.previousElementSibling.classList.add("checked"); //1
        e.target.previousElementSibling.classList.add("checked"); //2
        e.target.classList.add("checked"); //3
        e.target.nextElementSibling.classList.remove("checked"); //4
        e.target.nextElementSibling.nextElementSibling.classList.remove("checked"); //5

    }else if(e.target.id === "four"){
        e.target.previousElementSibling.previousElementSibling.previousElementSibling.classList.add("checked"); //1
        e.target.previousElementSibling.previousElementSibling.classList.add("checked"); //2
        e.target.previousElementSibling.classList.add("checked"); //3
        e.target.classList.add("checked"); //4
        e.target.nextElementSibling.classList.remove("checked"); //5
    }else if(e.target.id === "five"){
        e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.add("checked"); //1
        e.target.previousElementSibling.previousElementSibling.previousElementSibling.classList.add("checked"); //2
        e.target.previousElementSibling.previousElementSibling.classList.add("checked"); //3
        e.target.previousElementSibling.classList.add("checked"); //4
        e.target.classList.add("checked"); //5
        
    }
    
});

const feedbackbtn = document.querySelector('.feedbackbtns');
const feedbackmodal = document.querySelector('.feedbackhiddens');
const feedbackresponses = document.querySelector('.feedbackresponses');

feedbackbtn.addEventListener('click',()=>{
    console.log("hey")

    feedbackmodal.style.display = "none";
    feedbackresponses.style.display = 'block';
})



$(document).ready(function () {

    $("#contacttype").on("change", function () {
        $modal = $('#feedbackmodal');
        if ($(this).val() === 'feedback') {
            $modal.modal('show');
        }
    });

});

// End Contact Section

