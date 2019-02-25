'use strict';

const STORE = [
  {name: 'apples', checked: false},
  {name: 'oranges', checked: false},
  {name: 'milk', checked: true},
  {name: 'bread', checked: false},
];


function renderShoppingList() {
  console.log('rendering shopping list');
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