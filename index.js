'use strict';

const STORE = [
  {id: cuid(), name: 'apples', checked: false},
  {id: cuid(), name: 'oranges', checked: false},
  {id: cuid(), name: 'milk', checked: true},
  {id: cuid(), name: 'bread', checked: false},
];

function generateItemElement(item){
  return `<li class="js-item-index-element" data-item-id="${item.id}">
  <span class="shopping-item js-shopping-item ${item.checked ? "shopping-item__checked" : ''}">${item.name}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle js-item-toggle">
        <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete js-item-delete">
        <span class="button-label">delete</span>
    </button>
  </div>
</li>`;
}

function  generateShoppingItemsString(shoppingList){
  const items= shoppingList.map((item, index) => generateItemElement(item, index));
  return items.join('');
}

function renderShoppingList() {
  console.log('rendering shopping list');
  const shoppingListString = generateShoppingItemsString(STORE);

  $('.js-shopping-list').html(shoppingListString);

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