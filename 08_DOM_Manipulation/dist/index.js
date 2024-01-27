"use strict";
// Type assertion in ts means telling ts that we know what is the type of the element that we are trying to access and saving the ts's efforts to itself find the type of the element.
// Way 01: const button = <HTMLElement> document.getElementById("button");
// Way 02: const button = document.getElementById("button") as HTMLElement;
// Way 03: const button = document.getElementById("button")!; // ! telling that it can be anything except null.
const button = document.getElementById("button");
const image = document.querySelector('img');
const form = document.getElementById("myForm");
const input = document.querySelector("#myForm > input");
const submitButton = document.querySelector('#myForm > button');
button.onclick = () => {
    console.log("I told don't click and still you clicked......");
};
image.src = "https://coursify-frontend.vercel.app/assets/logo-52101de9.png";
form.onsubmit = (event) => {
    event.preventDefault();
    const value = Number(input.value);
    const h2 = document.createElement('h2');
    h2.textContent = String(value + 20);
    document.querySelector('body').appendChild(h2);
};
