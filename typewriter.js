"use strict";

let i = 0;
let txt = "This text is written one character at a time";
let typesound = document.querySelector("#typekey1");

function typewriter(){
if (i < txt.length){
    document.querySelector("#typewriter").innerHTML += txt.charAt(i);
    i++;

    setTimeout(typewriter, 200);
}
}
typewriter();