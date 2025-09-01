// 1. Function Declaration
function greetDeclaration(name) {
  return `Hello, ${name}! (from declaration)`;
}

// 2. Function Expression (Function Definition)
const greetExpression = function(name) {
  return `Hello, ${name}! (from expression)`;
};

// 3. Arrow Function
const greetArrow = (name) => `Hello, ${name}! (from arrow function)`;

// Get output element
const output = document.getElementById('output');

// Button event listeners
document.getElementById('btnDeclaration').addEventListener('click', () => {
  output.textContent = greetDeclaration('Alice');
});

document.getElementById('btnExpression').addEventListener('click', () => {
  output.textContent = greetExpression('Bob');
});

document.getElementById('btnArrow').addEventListener('click', () => {
  output.textContent = greetArrow('Charlie');
});
