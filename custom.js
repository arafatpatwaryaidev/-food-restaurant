// search form 
let searchForm = document.querySelector('.search-form-container');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');

};

// shopping-cart-container toggle

let cart = document.querySelector('.shopping-cart-container');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');

};


// login form container 

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    navBar.classList.remove('active');

};


// menu bar 
let navBar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navBar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
   
};

window.scroll = () =>{
    navBar.classList.remove('active');
};


document.querySelector('.home').onmousemove = (e) =>{

    let x = (window.innerWidth - e.pageX * 2) /90;
    let y = (window.innerHeight - e.pageY * 2) /90;

    document.querySelector('.home .home-parallax').style.transform = `translateX(${y}px)
    translateY(${x}px)`;
    
};

document.querySelector('.home').onmouseleave = (e) =>{

    document.querySelector('.home .home-parallax').style.transform = `translateX(0px)
    translateY(0px)`;
    
}