const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientList = document.querySelector('#ingredients');
[...ingredients].forEach ((ingredient) => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add('item') 
  ingredientList.appendChild(ingredientItem)
})
console.log(ingredientList);
