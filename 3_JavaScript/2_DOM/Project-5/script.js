// Navbar
const navCenter = document.querySelector('.nav-center')
const btn = document.createElement('a');

btn.textContent = 'Pro Subscription';
btn.classList.add('btn');
navCenter.lastElementChild.appendChild(btn);

// Recipe Tags
const tagsContainer = document.querySelector('.tags-container');
const chineseTag = document.createElement('a');

chineseTag.textContent = 'Chinese (7)';
chineseTag.href = '#';
tagsContainer.lastElementChild.appendChild(chineseTag);

// Recipe Gallery
const recipeGallery = document.querySelector('.recipe-gallery');

const recipeCard = document.createElement('div');
recipeCard.classList.add('card');

const recipeAnchor = document.createElement('a');
recipeAnchor.classList.add('recipe-text');
recipeAnchor.href = '#';

const recipeImg = document.createElement('img');
recipeImg.src = './img/recipe-6.jpg';
recipeImg.classList.add('recipe-img');

const recipeH5 = document.createElement('h5');
recipeH5.textContent = 'Pizza';
recipeH5.classList.add('recipe-name');

const recipeDesc = document.createElement('p');
recipeDesc.textContent = 'Prep : 60min | Cook : 60min';
recipeDesc.classList.add('recipe-disp');

recipeAnchor.appendChild(recipeImg);
recipeAnchor.appendChild(recipeH5);
recipeAnchor.appendChild(recipeDesc);
recipeCard.appendChild(recipeAnchor);
recipeGallery.appendChild(recipeCard);

// Footer
const footerName = document.querySelector('.page-footer > p > a');
footerName.textContent = 'Jaimin Prajapati'