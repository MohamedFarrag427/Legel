// click menu bat
let clickBar = document.querySelector('.header-bar'),
    navBar = document.querySelector('.header-nav');


clickBar.addEventListener("click" , () => {
    navBar.classList.toggle('open');
})


//==========================================================================
// Scroll / Active color on nav list
let headerMain = document.querySelector('.header-main'),
    headerLogo = document.querySelector('.header-logo img'),
    navList = document.querySelectorAll('.header-nav a'),
    navArray = Array.from(navList),
    spanItem = document.querySelectorAll('.header-nav span'),
    spanArray = Array.from(spanItem);
    

navArray.forEach((item) => {
    item.onclick = (e) => {
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:'smooth',
        });
    };

});

window.onscroll = function () {
    // change header when scroll
    if(window.scrollY >= 10){
        //add background
        headerMain.style.backgroundColor = "white";
        headerMain.style.position = "fixed";

        //change logo
        headerLogo.src = "images/logo-dark.png";

        // chang color (nav list + span)
        navArray.forEach((item) => {
            item.classList.add('color-span');
            item.onclick = (e) => {
                spanArray.forEach((span) => {
                    span.classList.remove('color-action');
                });
                document.querySelector(e.currentTarget.dataset.line).classList.add('color-action');

                document.querySelector(e.target.dataset.section).scrollIntoView({
                    behavior:'smooth',
                });

            };
        });

        //change color span when hover
        spanArray.forEach((s) => {
            s.classList.add('color-scroll');
        });

        

    }else{
        headerMain.style.backgroundColor = "transparent";
        headerLogo.src = "images/logo-light.png";

        navArray.forEach((item) => {
            item.classList.remove('color-span');
        });

        spanArray.forEach((s) => {
            s.classList.remove('color-scroll');
            s.classList.remove('color-action');
        });

        
    };

    //counter
    let skillSection = document.querySelector('.section-skill'),
        counters = document.querySelectorAll('.skill-text h2'),
        aboutHeight = skillSection.offsetHeight;
        windowHeight = this.innerHeight;

    if(window.scrollY >= skillSection.offsetTop+aboutHeight-windowHeight){
        counters.forEach((counter) => {
            let updateCounter = () => {
                let target = counter.dataset.target;
                let c =+counter.innerText;
                let increment = target/200;
                
                if(c < target){
                    counter.innerText = Math.ceil(c+increment);
                    setTimeout(updateCounter , 2);
                }else{
                    counter.innerText = target;
                }
            }
            updateCounter();
        });
    }




    

};


//=====================================================================================================
//on loaded of page (Animaton text)
let homeTitle = document.querySelector('.home-text h1'),
    homeText = document.querySelector('.home-text p'),
    homeLink = document.querySelector('.home-text a');
    


window.onload = () => {
    //Animaton text
    homeTitle.classList.add('top1');
    homeTitle.classList.remove('displaying');
    homeText.classList.add('top2');
    homeText.classList.remove('displaying');
    homeLink.classList.add('top1');
    homeLink.classList.remove('hidden');
}

//===============================================================================
//Hide / show placeholder

let inputName = document.getElementById('user'),
    inputEmail = document.getElementById('email'),
    textArea = document.getElementById('box-area'),
    sendRequest = document.getElementById('send-request');

const inputArray = [inputName , inputEmail , textArea , sendRequest];

inputArray.forEach((i) => {
    i.onfocus = () => {
        i.placeholder = "";
    }

    i.onblur = () => {
        i.placeholder = i.dataset.input;
    }
})




