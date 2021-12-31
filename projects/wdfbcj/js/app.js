// Start Header Section

//start navbar

//for navbutton
const navbuttons = document.querySelector('.navbuttons');

navbuttons.addEventListener('click', () => {
    navbuttons.classList.toggle('changes');
    
});

//for navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    const getscrolly = window.scrollY;

    console.log(getscrolly);
    if(getscrolly >=180){
        navbar.classList.add('navmenus');
    }else if(getscrolly < 180){
        navbar.classList.remove('navmenus');
    }
})
//end navbar

//start banner
const bgs = document.querySelectorAll('.bgs');
const header = document.getElementById('home');

bgs.forEach((bg) => {
    bg.addEventListener('click', () => {

        if (bg.classList.contains('cappuccinos')) {
            header.classList.add('cap');
            header.classList.remove('esp');
            header.classList.remove('moc');

        } else if (bg.classList.contains('espressos')) {
            header.classList.add('esp');
            header.classList.remove('cap');
            header.classList.remove('moc');

        } else if (bg.classList.contains('mochas')) {
            header.classList.add('moc');
            header.classList.remove('esp');
            header.classList.remove('cap');

        }

    });
});
//end banner

// End Header Section