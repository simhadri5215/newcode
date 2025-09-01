// 1. Click event listener
const button = document.getElementById('clickButton');
button.addEventListener('click', function () {
  alert('Button was clicked!');
});

// 2. Input event listener
const input = document.getElementById('textInput');
input.addEventListener('input', function () {
  console.log('Current input value:', input.value);
});

// 3. Mouseover and mouseout event listeners
const hoverBox = document.getElementById('hoverBox');

hoverBox.addEventListener('mouseover', function () {
  hoverBox.style.backgroundColor = 'orange';
  hoverBox.textContent = 'Mouse is over me!';
});

hoverBox.addEventListener('mouseout', function () {
  hoverBox.style.backgroundColor = 'lightblue';
  hoverBox.textContent = 'Hover Over Me';
});
