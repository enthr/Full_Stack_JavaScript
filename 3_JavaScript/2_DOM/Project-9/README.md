# DOM Project - 9

---

## Task - 1

### Before
![Before_1](./ass9.1-before.png)

### Output
![Output_1](./ass9.1-after.png)

### Solution
```javascript
// Change Color & Font
const h1 = document.querySelector('.caption > .title');
h1.style.color = '#e01b3d';
h1.style.fontFamily = 'Times New Roman';
```

## Task - 2

### Before
![Before_2](./ass9.2-before.png)

### Output
![Output_2](./ass9.2-after.png)

### Solution
```javascript
// Button Color Change on Hover
const addToCart = document.querySelector('.add-to-cart');
const styleSheet = document.styleSheets[0];
styleSheet.insertRule('.add-to-cart:hover { background-color: #e01b3d }', styleSheet.cssRules.length);
console.log(styleSheet);
```