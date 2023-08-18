let form =document.querySelector('form');
let name=document.querySelector('#name');
let email=document.querySelector('#email');
let pss=document.querySelector('#pss');
let num=document.querySelector('#num');
let div = document.querySelector('.last');
let h1 =document.querySelector('h1');
let card=document.querySelector('.card');

const savedata=((e)=>{
    e.preventDefault();
    card.style.display='none'

    let box =document.createElement('div')
    box.innerHTML=`<div class="card p-2">
    <img src="./OIP.jpg" width="50px"  style="margin-top:-30px; margin-left:150px; ">
    <h3 class="p-1">Your Logged in Details are:</h3>
    <p class="fs-5">Name:${name.value}</p>
    <p class="fs-5">Email:${email.value}</p>
    <p class="fs-5">Password:${pss.value}</p>
    <p class="fs-5">Number:${num.value}</p></div>`
    div.appendChild(box);
})

form.addEventListener('submit', savedata);