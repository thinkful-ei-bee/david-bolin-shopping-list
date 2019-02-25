'use strict';

const STORE = [
  {name: 'apples', checked: false},
  {name: 'oranges', checked: false},
  {name: 'milk', checked: true},
  {name: 'bread', checked: false},
];

function generateItemElement(item, itemIndex, template){
  return `<li>${item.name}</li>`;
}

function  generateShoppingItemsString(shoppingList){
    const items= shoppingList.map((item, index) => generateItemElement(item, index));
    console.log(items.join());
    return items.join('');
}

function renderShoppingList() {
  console.log('rendering shopping list');
  const shoppingListString = generateShoppingItemsString(STORE);

  $(".js-shopping-list").html(shoppingListString);

}

function handleNewItemSubmit() {
  console.log('handling new items');
}

function handleItemCheckClicked() {
  console.log('handling checked items');
}

function handleDeleteItemClicked() {
  console.log('handling deleted items');
}

function main() {
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();
}

$(main);