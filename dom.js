// DOM (document object model)
// get single element from document

// get objects via ID
const form = document.getElementById('my-form')
console.log(form)

// get objects via class name, tag, etc. (h1)
const querySelector = document.querySelector('label')
const querySelector2 = document.querySelector('.container')
console.log(querySelector)
console.log(querySelector2)

// get multiple elements
const querySelectorAll = document.querySelectorAll('.item')
console.log(querySelectorAll)
document.getElementsByClassName('item')
document.getElementsByTagName('li')


// Changing DOM
const ul = document.querySelector('.items')
//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'hi';
ul.children[1].innerHTML = '<h1>Hello!!!!</h1>'

const btn = document.querySelector('.btn');
btn.style.background = 'blue';

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e)
    
    if(btn.style.background == 'blue') btn.style.background = 'black'
    else btn.style.background = 'blue'

    document.querySelector('header').classList.add('bg-dark')
})

btn.addEventListener('mouseover', (e) => {
    document.querySelector('#my-form').style.background = '#333';
})