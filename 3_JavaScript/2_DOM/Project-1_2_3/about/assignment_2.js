/** Assignement - 2 **/

// Task - 1
const paras = document.querySelectorAll('p');
const titles = document.querySelectorAll('h3');

paras[2].style.display = 'block';
paras[3].style.display = 'block';

titles[2].style.backgroundColor = '#DADAF8';
titles[3].style.backgroundColor = '#DADAF8';

// Task - 2
const accordianWrapper = document.querySelector('.accordian-wrapper');
const accordianDiv = document.createElement('div');
accordianDiv.classList.add('accordian');

const h3 = document.createElement('h3');
h3.textContent = 'Skills';
h3.style.backgroundColor = '#DADAF8';

const p = document.createElement('p');
p.textContent = 'I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github.';
p.style.display = 'block';

accordianDiv.appendChild(h3);
accordianDiv.appendChild(p);

accordianWrapper.appendChild(accordianDiv);