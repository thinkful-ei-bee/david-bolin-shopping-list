'use strict';

/* global cuid */

const STORE = {
  items: [
    {id: cuid(), name: 'apples', checked: false},
    {id: cuid(), name: 'oranges', checked: false},
    {id: cuid(), name: 'milk', checked: true},
    {id: cuid(), name: 'bread', checked: false}],
  hideChecked: false,
};

function generateItemElement(item){
  return `<li class="js-item-index-element" data-item-id="${item.id}">
  <span class="shopping-item js-shopping-item ${item.checked ? 'shopping-item__checked' : ''}">${item.name}</span>
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
  let filteredItems = STORE.items;
  if (STORE.hideChecked) {
    filteredItems = filteredItems.filter(item => !item.checked);
  }
  const shoppingListString = generateShoppingItemsString(filteredItems);
  $('.js-shopping-list').html(shoppingListString);

}

function addItemToShoppingList(itemName){
  console.log(`Adding "${itemName} to shopping list"`);
  if (itemName !== '') {
    STORE.items.push({id: cuid(), name: itemName, checked: false});
  }
}

function handleNewItemSubmit() {
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    const newItemName= $('.js-shopping-list-entry').val();
    console.log('handling new items');
    $('.js-shopping-list-entry').val('');
    addItemToShoppingList(newItemName);
    renderShoppingList();
  });
  
}
function toggleCheckedForListItem(itemId) {
  console.log(`Toggling checked property for item with with id ${itemId}.`);
  const item = STORE.items.find(item => item.id === itemId);
  item.checked = !item.checked;
}

function getItemIdFromElement(item) {
  return $(item).closest('li').data('item-id');
}

function deleteItem(itemId) {
  const index = STORE.items.findIndex(item => item.id === itemId);
  STORE.items.splice(index, 1);
}
function handleItemCheckClicked() {
  console.log('handling checked items');
  $('.js-shopping-list').on('click', '.js-item-toggle', event => {
    console.log('item clicked');
    const itemId = getItemIdFromElement(event.currentTarget);
    console.log(itemId);
    toggleCheckedForListItem(itemId);
    renderShoppingList();
  });
}

function handleDeleteItemClicked() {
  console.log('handling deleted items');
  $('.js-shopping-list').on('click', '.js-item-delete', event => {
    console.log('deleting item');
    const itemId = getItemIdFromElement(event.currentTarget);
    deleteItem(itemId);
    renderShoppingList();
  });

}

function handleCheckBoxClicked() {
  $('#hide-checked').on('click', () => {
    STORE.hideChecked = !STORE.hideChecked;
    renderShoppingList();
    console.log('check box clicked');
  });
}

function main() {
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();
  handleCheckBoxClicked();
}

$(main);