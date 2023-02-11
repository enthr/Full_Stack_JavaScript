# DOM Project - 7

---

## Solution
```javascript
// List Manipulation
setTimeout(() => {
    const languageList = document.querySelectorAll('.main__languages > a');
    
    languageList.forEach((currentValue, currentIndex) => {
        if(currentValue.textContent.includes('2.0')) {
            languageList[currentIndex].hidden = true;
        }
    });
}, 5000);

// Form Submit
const form = document.querySelector('.main__form > form');
const formInput = document.querySelector('.main__form-input');

formInput.value = 'iNeuron';
form.addEventListener('submit', (e) => {
    e.preventDefault();
    languageList.forEach((currentValue, currentIndex) => {
        if(currentValue.textContent.includes('2.0')) {
            languageList[currentIndex].hidden = false;
        }
    });
});

setTimeout(() => form.submit(), 10000);
```