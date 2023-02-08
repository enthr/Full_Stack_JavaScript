# DOM Project - 4

## Output:

---

![Output](./Output/DOM_P1_SS.png)

## Solution:

---

```javascript
const barbarian = document.querySelector('.barbarian');
const archer = document.querySelector('.archer');
const giant = document.querySelector('.giant');
const goblin = document.querySelector('.goblin');
const wizard = document.querySelector('.wizard');

archer.children[2].textContent = 'The Archer';
goblin.children[2].textContent = 'The Goblin';

barbarian.lastElementChild.style.backgroundColor = '#EC9B3B';
barbarian.lastElementChild.style.color = '#FFFFFF';
barbarian.lastElementChild.lastElementChild.style.color = '#FFFFFF';

archer.lastElementChild.style.backgroundColor = '#EE5487';
archer.lastElementChild.style.color = '#FFFFFF';
archer.lastElementChild.lastElementChild.style.color = '#FFFFFF';

giant.lastElementChild.style.backgroundColor = '#F6901A';
giant.lastElementChild.style.color = '#FFFFFF';
giant.lastElementChild.lastElementChild.style.color = '#FFFFFF';

goblin.lastElementChild.style.backgroundColor = '#82BB30';
goblin.lastElementChild.style.color = '#FFFFFF';
goblin.lastElementChild.lastElementChild.style.color = '#FFFFFF';

wizard.lastElementChild.style.backgroundColor = '#4FACFF';
wizard.lastElementChild.style.color = '#FFFFFF';
wizard.lastElementChild.lastElementChild.style.color = '#FFFFFF';
```