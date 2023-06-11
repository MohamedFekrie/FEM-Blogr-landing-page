/////// Global Variables ///////
const iconImg = document.querySelector('header .container > img');
const lisArrowImg = [...document.querySelectorAll('nav > ul img.arrow')];
///////  Global Functions //////
// Change imgs in medium screens
const smallMediaQuery = window.matchMedia('(max-width: 767px)');

function targetSmallMediaQuery(event) {
    if (event.matches) {
        console.log('small')
        // set the Icon image source In Small Devices
        iconImg.setAttribute('src', "./images/icon-hamburger.svg");
        // Set THe Landing Image Source In Small Devices
        document.querySelector('header .bg').setAttribute('src', "./images/bg-pattern-intro-mobile.svg")
        // set the Li's arrow image source In Small Devices
        lisArrowImg.forEach(img => {
            img.setAttribute('src', './images/icon-arrow-dark.svg')
        });
    } else {
        // set the Icon image source In Small Devices
        iconImg.src = "";
        // Set THe Landing Image Source In Small Devices
        document.querySelector('header .bg').setAttribute('src', "./images/bg-pattern-intro-desktop.svg")
        // set the Li's arrow image source In Small Devices
        lisArrowImg.forEach(img => {
            img.setAttribute('src', './images/icon-arrow-light.svg')
        });
    }
}
smallMediaQuery.addListener(targetSmallMediaQuery);
targetSmallMediaQuery(smallMediaQuery)
// Change imgs in medium screens
const mediumMediaQuery = window.matchMedia('(max-width: 991px)');

function targetmediumMediaQuery(event) {
    if (event.matches) {
        document.querySelector('.future img').setAttribute('src', './images/illustration-editor-mobile.svg');
        document.querySelector('.lap img').setAttribute('src', './images/illustration-laptop-mobile.svg')
    } else {
        document.querySelector('.future img').setAttribute('src', './images/illustration-editor-desktop.svg');
        document.querySelector('.lap img').setAttribute('src', './images/illustration-laptop-desktop.svg')
    }
}
mediumMediaQuery.addListener(targetmediumMediaQuery);
targetmediumMediaQuery(mediumMediaQuery)
/*----------------------- Start Header -----------------------*/
/*----- Start Dropdown Menu*/
// Select Elements
const parentLis = [...document.querySelectorAll('header nav > ul > li')];
// Dropdown Functionality
function dropdown(li) {
    parentLis.forEach(el => {
        if (el != li) {
            el.children[1].classList.remove('open')
            el.children[0].lastChild.style.transform = "rotate(-1deg)";
        }
    });
    li.children[0].lastChild.style.transform = li.children[1].classList.contains('open') ? "rotate(-1deg)" : "rotate(-180deg)";
    li.children[1].classList.toggle('open')
}
/*----- End Dropdown Menu*/
// listen for the begerImg's click event
iconImg.addEventListener('click', function () {
    const bergerSrc = "./images/icon-hamburger.svg";
    const closeSrc = "./images/icon-close.svg";
    // Open & Close Navbar
    document.querySelector('header nav').classList.toggle('open')
    // Change The Icon bettwen Open & Close
    this.setAttribute('src', (this.getAttribute('src') == bergerSrc ? closeSrc : bergerSrc))
});
/*----------------------- End Header -----------------------*/
