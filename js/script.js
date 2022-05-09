'use strict';

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button')[1];
console.log(btns);

const btns2 = document.getElementsByTagName('button');
console.log(btns2[1]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');
console.log(hearts);
hearts.forEach(item => {
    console.log(item);
});