const inputName = document.querySelector('.userName');
const inputEmail = document.querySelector('.userEmail');
const inputMessage = document.querySelector('.userMessage');
const submit = document.querySelector("button[type='submit']");

const outputName = document.querySelector('.enterName');
const outputEmail = document.querySelector('.enterMail');
const outputMessage = document.querySelector('.enterMessage');
const reset = document.querySelector("button[type='reset']");

submit.addEventListener('click', (e) => {
    e.preventDefault();
    outputName.value = inputName.value;
    outputEmail.value = inputEmail.value;
    outputMessage.value = inputMessage.value;
})

reset.addEventListener('click', (e) => {
    e.preventDefault();
    outputName.value = '';
    outputEmail.value = '';
    outputMessage.value = '';
});