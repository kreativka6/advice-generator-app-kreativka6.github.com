// JavaScript Document

const button = document.getElementById('button');
let text = document.getElementById('text');
let title = document.getElementById('title');

button.addEventListener("click", (event) => {
    event.preventDefault;
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
        title.textContent = `Advice # ${data.slip.id}`;
        text.textContent = data.slip.advice;
      });
  });
