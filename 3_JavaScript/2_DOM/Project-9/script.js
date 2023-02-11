// Change Color & Font
const h1 = document.querySelector('.caption > .title');
h1.style.color = '#e01b3d';
h1.style.fontFamily = 'Times New Roman';

// Button Color Change on Hover
const addToCart = document.querySelector('.add-to-cart');
const styleSheet = document.styleSheets[0];
styleSheet.insertRule('.add-to-cart:hover { background-color: #e01b3d }', styleSheet.cssRules.length);
console.log(styleSheet);