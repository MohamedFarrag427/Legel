// click menu bat
let clickBar = document.querySelector('.header-bar'),
    navBar = document.querySelector('.header-nav');


clickBar.addEventListener("click" , () => {
    navBar.classList.toggle('open');
})

//===========================================================
// Scroll header
let headerMain = document.querySelector('.header-main'),
    headerLogo = document.querySelector('.header-logo img'),
    navList = document.querySelectorAll('.header-nav a'),
    navArray = Array.from(navList),
    spanItem = document.querySelectorAll('.header-nav span'),
    spanArray = Array.from(spanItem);


window.onscroll = () => {
    if(window.pageYOffset >= 50){
        //add background
        headerMain.style.backgroundColor = "white";
        headerMain.style.position = "fixed";
        headerMain.style.boxShadow = "1px 1px 20px black";

        //change logo
        headerLogo.src = "images/logo-dark.png";

        // chang color (nav list + span)
        navArray.forEach((item) => {
            item.classList.add('color-span');
        });

        //change color span when hover
        spanArray.forEach((s) => {
            s.classList.add('color-scroll');
        });

        //active frist span
        spanArray[1].classList.add('color-action');

    }else{
        headerMain.style.backgroundColor = "transparent";
        headerMain.style.boxShadow = "none";
        headerLogo.src = "images/logo-light.png";

        navArray.forEach((item) => {
            item.classList.remove('color-span');
        });

        spanArray.forEach((s) => {
            s.classList.remove('color-scroll');
        });

        spanArray[1].classList.remove('color-action');
    };
};


