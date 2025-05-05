console.log("Connected");


let drawer = document.getElementById("MoreOptions");
let drawerCloseBtn = document.getElementById("Back");
let DrawOpenBtn = document.getElementById("Open");

let NavElements = document.getElementsByClassName("NavEl");
let HoverAudio = new Audio("NavBarEle.mp3");

Array.from(NavElements).forEach(el => {
    el.addEventListener('mouseenter', () => {
        HoverAudio.currentTime = 0;
        HoverAudio.play();
    })
})

DrawOpenBtn.addEventListener('mouseenter', () => {
    drawer.style.right = "0%";
})

drawerCloseBtn.addEventListener('click', () => {
    drawer.style.right = "-25%";
})

drawer.addEventListener('mouseleave', () => {
    drawer.style.right = "-25%";
})


// // Slide

let Box = document.querySelectorAll("#Trending div");

let Container = document.getElementById("Trending");
let Container_P = document.getElementsByClassName("Name");
let Container_Des = document.getElementsByClassName("Description");

let SlideAudio = new Audio("Slide.mp3");

function ChangeStyle_1(n) {
    Container_P[n].style.width = '100%';
    Container_P[n].style.background = 'red';
}

function ChangeStyle_2(n) {
    Container_P[n].style.width = '100%';
    Container_P[n].style.background = 'red';
    Container_P[n].style.justifyContent = 'flex-end';
}

function BackStyle_Mid(n) {
    Container_P[n].style.width = '40%%';
    Container_P[n].style.background = 'transparent';
    Container_P[n].style.justifyContent = 'flex-start';
}

function Hide_Descrip(n){
    Container_Des[n].style.opacity = '0';
}

function Show_Descrip(n){
    Container_Des[n].style.opacity = '1';
}


// Default Appearance: 
{
    Show_Descrip(0);

    Box[0].style.cssText = `width: 50%; 
                            background-color: transparent; 
                            z-index: 2; 
                            transform: scale(1.2);
                            left: 25%`

    Box[2].style.cssText = `width: 33%;
                            left: 1%;
                            z-index: 1;`

    ChangeStyle_1(2);

    Box[1].style.cssText = `width: 33%;
                            left: 66%;
                            z-index: 0`

    ChangeStyle_2(1);
}


Box[0].addEventListener('click', () => {
    SlideAudio.currentTime = 0;
    SlideAudio.play();

    BackStyle_Mid(0);
    Show_Descrip(0);

    Box[0].style.cssText = `width: 50%; 
                            background-color: transparent; 
                            z-index: 2; 
                            transform: scale(1.2);
                            left: 25%`



    Box[2].style.cssText = `width: 33%;
                            left: 1%;
                            z-index: 1;`

    ChangeStyle_1(2);
    Hide_Descrip(2);

    Box[1].style.cssText = `width: 33%;
                            left: 66%;
                            z-index: 0`

    ChangeStyle_2(1);
    Hide_Descrip(1);
})

Box[1].addEventListener('click', () => {
    SlideAudio.currentTime = 0;
    SlideAudio.play();
    BackStyle_Mid(1);
    Show_Descrip(1);

    Box[1].style.cssText = `width: 50%; 
                            background-color: transparent; 
                            z-index: 2; 
                            transform: scale(1.2);
                            left: 25%`

    Box[0].style.cssText = `width: 33%;
                            left: 1%;
                            z-index: 1`

    ChangeStyle_1(0);
    Hide_Descrip(0);

    Box[2].style.cssText = `width: 33%;
                            left: 66%;
                            z-index: 0`

    ChangeStyle_2(2);
    Hide_Descrip(2);
})

Box[2].addEventListener('click', () => {
    SlideAudio.currentTime = 0;
    SlideAudio.play();
    BackStyle_Mid(2);
    Show_Descrip(2);

    Box[2].style.cssText = `width: 50%; 
                            background-color: transparent; 
                            z-index: 2; 
                            transform: scale(1.2); 
                            transform: scale(1.2);
                            left: 25%`

    Box[1].style.cssText = `width: 33%;
                            left: 1%;
                            z-index: 1`

    ChangeStyle_1(1);
    Hide_Descrip(1);

    Box[0].style.cssText = `width: 33%;
                            left: 66%;
                            z-index: 0`

    ChangeStyle_2(0);
    Hide_Descrip(0);
})
