//UI
const logo = document.querySelector(".logo");

//corner click
const corners = document.querySelectorAll('.corner');

corners.forEach(corner => {
    corner.addEventListener('click', (e) => {
        if (e.target.classList.contains("corner")) {
            e.target.classList.toggle('active');
            if (e.target.classList.contains("login-corner") && e.target.classList.contains("active")) {
                registersection.style.display = "none";
                forgotsection.style.display = "none";
                loginsection.style.display = "flex";
                
                logo.style.display = "none";

            } else if (e.target.classList.contains("register-corner") && e.target.classList.contains("active")) {
                registersection.style.display = "flex";
                forgotsection.style.display = "none";
                loginsection.style.display = "none";

                logo.style.display = "none";

            } else if (e.target.classList.contains("forgot-corner") && e.target.classList.contains("active")) {
                registersection.style.display = "none";
                forgotsection.style.display = "flex";
                loginsection.style.display = "none";

                logo.style.display = "none";

            } else {
                registersection.style.display = "none";
                forgotsection.style.display = "none";
                loginsection.style.display = "none";

                logo.style.display = "flex";
            }
            


        } else {
            e.target.parentElement.classList.toggle('active');
            if (e.target.parentElement.classList.contains("login-corner") && e.target.parentElement.classList.contains("active")) {
                registersection.style.display = "none";
                forgotsection.style.display = "none";
                loginsection.style.display = "flex";
            } else if (e.target.parentElement.classList.contains("register-corner") && e.target.parentElement.classList.contains("active")) {
                registersection.style.display = "flex";
                forgotsection.style.display = "none";
                loginsection.style.display = "none";

            } else if (e.target.parentElement.classList.contains("forgot-corner") && e.target.parentElement.classList.contains("active")) {
                registersection.style.display = "none";
                forgotsection.style.display = "flex";
                loginsection.style.display = "none";


            } else {
                registersection.style.display = "none";
                forgotsection.style.display = "none";
                loginsection.style.display = "none";
            }
        }

    });


});


//link in form
const loginsection = document.querySelector('.login'),
    registersection = document.querySelector('.register'),
    forgotsection = document.querySelector('.forgot');

const loginlink = document.querySelector('.login-link'),
    registerlink = document.querySelector('.register-link'),
    forgotlink = document.querySelector('.forgot-link');

const closebtn = document.querySelector('.close');

const logincorner = document.querySelector(".login-corner"),
    registercorner = document.querySelector(".register-corner"),
    forgotcorner = document.querySelector(".forgot-corner");


registerlink.addEventListener('click', () => {
    loginsection.style.display = "none";
    registersection.style.display = "flex";

    logincorner.classList.remove("active");
    registercorner.classList.add("active");
    forgotcorner.classList.remove("active");
});


loginlink.addEventListener('click', () => {
    registersection.style.display = "none";
    loginsection.style.display = "flex";

    logincorner.classList.add("active");
    registercorner.classList.remove("active");
    forgotcorner.classList.remove("active");
});

forgotlink.addEventListener('click', () => {
    loginsection.style.display = "none";
    forgotsection.style.display = "flex";

    logincorner.classList.remove("active");
    registercorner.classList.remove("active");
    forgotcorner.classList.add("active");
});

closebtn.addEventListener('click', () => {
    forgotsection.style.display = "none";
    loginsection.style.display = "flex";

    logincorner.classList.add("active");
    registercorner.classList.remove("active");
    forgotcorner.classList.remove("active");
})


//combo control
const itemcontainer = document.querySelector('.item-container');

itemcontainer.addEventListener('click', (e) => {
    // console.log(e.target.parentElement.nextElementSibling);
    e.target.parentElement.nextElementSibling.classList.toggle("active");
});
