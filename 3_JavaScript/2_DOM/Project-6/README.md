# DOM Project - 6

---

## Output
![Output](./Output/DOM_P3_SS-1.png)
![Output](./Output/DOM_P3_SS-2.png)

## Solution

```javascript
// Logo
const logo = document.querySelector('header > img');
logo.src = './assets/ineuron-logo.png';

// Pricing
const price = document.querySelector('.app_price > span');
price.textContent = '$10';

// Footer Links
const footerLinks = document.querySelector('.footer_social');
const linkedinContainer = document.createElement('div');
const linkedinLogo = document.createElement('i');

linkedinContainer.classList.add('footer_social_ico');
linkedinLogo.classList.add('fa-brands');
linkedinLogo.classList.add('fa-linkedin');

linkedinContainer.appendChild(linkedinLogo);
footerLinks.appendChild(linkedinContainer);
```