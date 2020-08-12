
const btn =
document.querySelector('button');

const txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if(btn.textContent === 'Start Machine') {
    btn.textContent = 'Stop Machine';
    txt.textContent = 'The machine has started!';
  } else {
    btn.textContent = 'Start Machine';
    txt.textContent = 'The machine has stopped';
  }
}












/*
x = 3;
return 3
x += 4;
return 7
x;
return 7
x -= 4;
return 3
x *= 2;
return 6;
x /= 2;
3
*/

/*
let num1 = 10;
let num2 = 50;

9 * num1
return 90

num1**3
return 1000

num2 / num1
return 5

5 + 10 * 3
return 35

num2%9• num1;
return 50

num2 + num1 / 8 + 2;
return 53.25

(num2 + num1) / (8 + 2);
return 6

3++;
return Syntax Error: invalid increment/ decrement operand

let num1 = 4;
num1++
return 4
num1;
return 5

let num2 = 6;
num2--;
return 6
num2;
return 5
*/

/*
let myInt = 5;
let myFloat = 5.5;
myInt;
myFloat;
*/

/*
typeof myInt;
typeof myFloat;
*/

/*
5-3
return 2

3*5
return 15

49/7
return 7

7%2
return 1

5**5
return 3125
*/
