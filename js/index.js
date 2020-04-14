// Your code goes here

//click 
const body = document.querySelector('body');

body.addEventListener('click', () => {
    body.style.backgroundColor='rebeccapurple';
    console.log('body changed');
})

const headers = document.querySelectorAll('h2');

headers[0].addEventListener('click', (event) => {
    headers[0].style.color = 'white';
    console.log('head changed');
    event.stopPropagation();
})

//mouseover
document.querySelectorAll('a').forEach(navi => {
    navi.addEventListener('mouseover', () => {
        navi.style.color='blue'
    })
})

//mouseenter
document.querySelectorAll('.img-content').forEach(pix => {
    pix.addEventListener('mouseenter', () => {
        pix.style.transform = 'scale(1.1)';
        pix.style.transform = 'all 0.3s';
    })
})

//mouseleave
document.querySelectorAll('.img-content').forEach(pix => {
    pix.addEventListener('mouseleave', () => {
        pix.style.transform = 'scale(1)';
        pix.style.transform = 'all 0.3s'
    })
})

//dbl click
const dbl = document.querySelector('h1');

dbl.addEventListener('dblclick', () => {
    dbl.textContent = 'Ryan\'s Fun Bus'
})

//wheel

const text = document.querySelectorAll('p');

text[0].addEventListener('wheel', () => {
    text[0].textContent = 'Lets go on an adventure!';
    text[0].style.color = 'gold';
})

//drag

text[1].addEventListener('drag', () => {
    text[1].textContent = 'Lets be adventurous';
    text[1].style.color = 'gold';
})

//copy 

text[2].addEventListener('copy', () => {
    text[2].textContent = 'Life is an adventure!';
    text[2].style.color = 'gold';
})

//contextmenu

text[9].addEventListener('contextmenu', () => {
    text[9].textContent = "All adventures become great stories";
})

//preventDefault

const stopLink = document.querySelector('.nav-link');

stopLink.addEventListener('click', () => {
    event.preventDefault();
})
