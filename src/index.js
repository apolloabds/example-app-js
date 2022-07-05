import './index.css';
import { defineCustomElements } from '@abds/components/dist/loader/index.js';
defineCustomElements();

document.addEventListener('DOMContentLoaded', () => {
  const addItemButton = document.querySelector('#add-item');
  const counterBadge = document.querySelector('#counter-badge');
  const shoppingList = document.querySelector('.shoppingList');
  const subtractItemButton = document.querySelector('#subtract-item');
  const toggleModalButton = document.querySelector('#toggle-modal');
  const toggleThemeButton = document.querySelector('#toggle-theme');

  let itemCount = 0;

  const addItem = () => {
    const item = document.createElement('li');

    item.innerHTML = `
      <abds-checkbox></abds-checkbox>
      <input placeholder="enter text here"/>
    `;

    shoppingList.appendChild(item);
    itemCount += 1;
    counterBadge.innerHTML = `Item count: ${itemCount}`;
  };

  const subtractItem = () => {
    let checkboxes = shoppingList.querySelectorAll('abds-checkbox[checked]');

    if (checkboxes.length) {
      itemCount -= checkboxes.length;

      for (let item of checkboxes) {
        item.parentElement.remove();
      }

      counterBadge.innerHTML = `Item count: ${itemCount}`;
    }
  };

  const toggleModal = () => {
    const modal = document.querySelector('#modal-1');

    modal?.setAttribute('open', !modal?.open);
  };

  const toggleTheme = () => {
    const bodyContent = document.querySelector('body');

    bodyContent.classList.toggle('bg-black');
    bodyContent.classList.toggle('text-white');
  };

  addItemButton.addEventListener('click', addItem);
  subtractItemButton.addEventListener('click', subtractItem);
  toggleModalButton.addEventListener('click', toggleModal);
  toggleThemeButton.addEventListener('click', toggleTheme);
});
