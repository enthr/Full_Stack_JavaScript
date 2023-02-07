/** Assignment - 1 **/

// Task-1
const ul = document.querySelector('ul');
const link = document.createElement('a');
link.href = '#';
link.textContent = 'Hire Me';
const li = document.createElement('li');
li.appendChild(link);
ul.appendChild(li);

// Task - 2
const input = document.querySelector('.search-field > input');
input.setAttribute('placeholder', 'Search My Project');

// Task - 3
const p = document.querySelector('.hero-left-section > p');
p.children[1].textContent = 'an Employee';
p.lastElementChild.textContent = 'iNeuron Intelligence Pvt Ltd';

// Task - 4
const img = document.querySelector('.hero-right-section > img');
img.setAttribute('src', './avatar1.png');

// Task - 5
const btnContainer = document.querySelector('.hero-right-section-btns');
const btn = document.createElement('button');
btn.textContent = 'Support Me';
btnContainer.appendChild(btn);