const catElement = document.getElementById('cat');
const h2Element = document.createElement('h2'); // creates the h2 element
h2Element.innerText = 'Cats are awesome :)'; // updates the content of the element

const pElement = document.createElement('p');
pElement.innerText = 'Dogs are more loyal :)';

const el = document.querySelector(".mouse");
const mouseElements = document.getElementsByClassName('mouse'); // retrieved all the HTML elements that have a class named 'mouse'
const mouseArray = [...mouseElements]; // used the spread operator to convert HTMLCollection into an array of objects

const allDivs = document.querySelectorAll('.mouse, .hello');
const divsArray = [...allDivs]
// mouseArray.forEach(mouse => console.log(mouse))
mouseArray.map(mouseElement => mouseElement.setAttribute('style', 'width:100px; height:40px;background-color:blue;margin-top:2px;')) // updating each mouseElement with a style attribute
// const h1Element = document.querySelector('h1');
// console.log('el', el)
// console.log('h1Element', h1Element);
// console.log('mouseElements', mouseElements)
divsArray.map(div => {
    if(div.className === 'hello'){
        div.style.width = '100px';
        div.style.height = '40px';
        div.style.backgroundColor = 'orange';
        div.style.color = 'cyan';
        // div.textContent = 'Cats are cuter :)'
        const paragraphElement = document.createElement('p');
        paragraphElement.style.color = 'purple';
        paragraphElement.innerText = 'Cats are cuter ;)';
        paragraphElement.id = 'cats-nature'
        div.appendChild(paragraphElement);
        // div.innerHTML = '<p style="color:purple;"> <span style="font-size: 16px;">Cats</span> are cuter </p>'
        // div.setAttribute('style', 'width:100px;height:40px;background-color:violet;')
    }
    else {
        div.setAttribute('style', 'margin-top:10px; font-size:14px; color:beige; background-color:red; width:100px; height:40px;')
    }
})
catElement.appendChild(h2Element);
// catElement.innerHTML = ` <h2>Hey there</h2>`;
el.appendChild(pElement);
console.log('textContent', divsArray[1].textContent)
console.log('innerText', divsArray[1].innerText)

function updateHello(){
    const parentElement = document.querySelector('.hello');
    // console.log('parentElement', parentElement)
    const childElement = document.getElementById('cats-nature');
    // console.log('childElement', childElement)
    parentElement.removeChild(childElement);
}

function updateCat(){
    const catsUrl = 'http://127.0.0.1:5500/module1/lesson-12/dom-intro/images';
    const imgElement = document.querySelector('img');

    if(imgElement.src === 'http://127.0.0.1:5500/module1/lesson-12/dom-intro/images/cozyCat.avif'){
//    if(imgElement.getAttribute('src') === './images/cozyCat.avif'){
        imgElement.setAttribute('src', `${catsUrl}/cats.avif`)
   }
    else {
    imgElement.setAttribute('src', `${catsUrl}/cozyCat.avif`)
    }

}
console.log(window)
// const testDiv = document.getElementById('test');
// console.log(testDiv.textContent)
window.addEventListener("load", (event) => {
    console.log(event)
    // console.log("page is fully loaded");
});

document.getElementById('update-hello').addEventListener('click', (event) => {
    updateHello()
})