// 'use strict';

// const box = document.getElementById('box');
// console.log(box);

// const btns = document.getElementsByTagName('button')[1];
// console.log(btns);

// const btns2 = document.getElementsByTagName('button');
// console.log(btns2[1]);

// const circles = document.getElementsByClassName('circle');
// console.log(circles);

// const hearts = document.querySelectorAll('.heart');
// console.log(hearts);
// hearts.forEach(item => {
//     console.log(item);
// });

// const oneheart = document.querySelector('.heart');
// console.log(oneheart);

// const div = document.querySelector('div');
// console.log(div);

// Упражнение 43 (по-новому)

'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneheart = document.querySelector('.heart');
console.dir(box);

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i <= hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'yellow';
});

const div = document.createElement('div');
const text1 = document.createTextNode('Здесь был я');
const text2 = document.createTextNode('Однако! \n');
div.append(text1);
div.prepend(text2);
div.classList.add('black');
document.body.append(div);