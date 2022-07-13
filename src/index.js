import './index.css';
import { defineCustomElements } from '@abds/components/dist/loader/index.js';

defineCustomElements();

const initializers = {
  modal: () => {
    const toggleModalButton = document.querySelector('#toggle-modal');
    const toggleModal = () => {
      const modal = document.querySelector('#modal-1');

      modal?.setAttribute('open', !modal?.open);
    };

    toggleModalButton.addEventListener('click', toggleModal);
  },
  shoppingList: () => {
    const addItemButton = document.querySelector('#add-item');
    const counterBadge = document.querySelector('#counter-badge');
    const shoppingList = document.querySelector('.shoppingList');
    const subtractItemButton = document.querySelector('#subtract-item');

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

    addItemButton.addEventListener('click', addItem);
    subtractItemButton.addEventListener('click', subtractItem);
  },
  statesSelect: () => {
    const fetchAuthorizationToken = async () =>
      await fetch('https://www.universal-tutorial.com/api/getaccesstoken', {
        headers: new Headers({
          'api-token': 'aJC50l2lisn1j0sD7nfyZsu0npkhf6JW2YA3FcQ1244YPtONQwiiIeU0H-6kdd6kbgY',
          'user-email': 'abc.121009.210823@gmail.com',
        }),
        method: 'GET',
        redirect: 'follow',
      })
        .then((response) => response.json())
        .then(({ auth_token }) => auth_token)
        .catch((error) => console.error(error));

    const fetchStates = async () => {
      const authorizationToken = await fetchAuthorizationToken();

      await fetch('https://www.universal-tutorial.com/api/states/United States', {
        headers: new Headers({
          Accept: 'application/json',
          Authorization: `Bearer ${authorizationToken}`,
          'api-token': 'aJC50l2lisn1j0sD7nfyZsu0npkhf6JW2YA3FcQ1244YPtONQwiiIeU0H-6kdd6kbgY',
          'user-email': 'abc.121009.210823@gmail.com',
        }),
        method: 'GET',
        redirect: 'follow',
      })
        .then((response) => response.json())
        .then((states) => {
          const abdsSelect = document.querySelector('abds-select#states');

          const hiddenSelect = abdsSelect?.querySelector('select');
          const hiddenSelectOptions = hiddenSelect?.querySelectorAll('option');
          const hiddenSelectPlaceholder = Array.from(hiddenSelectOptions).filter((option) =>
            option.classList.contains('placeholder')
          )[0];

          if (abdsSelect) abdsSelect.innerHTML = '';

          abdsSelect?.appendChild(hiddenSelect);

          if (hiddenSelect) hiddenSelect.innerHTML = '';

          hiddenSelect?.appendChild(hiddenSelectPlaceholder);

          states.forEach(({ state_name: state }) => {
            const option = document.createElement('option');
            const abdsOption = document.createElement('abds-select-option');

            abdsOption.innerText = state;
            abdsOption.setAttribute('value', state);

            option.innerText = state;
            option.setAttribute('value', state);

            abdsSelect?.appendChild(abdsOption);
            hiddenSelect?.appendChild(option);
          });
        })
        .catch((error) => console.error('error', error));
    };

    fetchStates();
  },
  toggleTheme: () => {
    const toggleThemeButton = document.querySelector('#toggle-theme');

    const toggleTheme = () => {
      const bodyContent = document.querySelector('body');

      bodyContent.classList.toggle('bg-black');
      bodyContent.classList.toggle('text-white');
    };

    toggleThemeButton.addEventListener('click', toggleTheme);
  },
};

for (const initializer in initializers) {
  document.addEventListener('DOMContentLoaded', initializers[initializer]);
}
