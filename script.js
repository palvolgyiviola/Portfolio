
console.log('Hello world')
console.log(1);console.log(2)


let a =1;
const c =3;
console.log(1=='1');
console.log(1==='1');



function greetings(name) {
    console.log(`Hello, ${name}!`);
}

greetings('John');


const cim = document.querySelector('h1')
const input=document.querySelector('input#nev')
const button=document.querySelector('button')
console.log(cim, input, button)

button.addEventListener('click', OnClick)
function OnClick(){
    cim.innerHTML = `Hello, ${input.value}!`;
}