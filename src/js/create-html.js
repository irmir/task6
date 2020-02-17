import createList from './create-list'
import createElement from './create-element'
import { addText } from './modal-window-operations'
import { closeWindow } from './modal-window-operations'

function createButtonAdd() {
    const buttonAdd = createElement('button', { 'className': 'add', 'innerText': 'add' }, { 'id': 'butt-elem' });
    return buttonAdd;
}

function createListOnPage(arrList) {
    const ulEl = createElement('ul', null, { 'id': 'ul-elem' });
    ulEl.appendChild(createList(arrList));
    return ulEl;
}

function createMenu() {
    const ulMenu = createElement('ul', {'className':'menu'});
    ulMenu.style.display = 'none';

    const options = [];
    const optionNames = ['change', 'delete', 'save'];
    optionNames.forEach(item => {
        const option = createElement('li');
        const innerButt = createElement('button', {'className':item, 'innerText':item});
        option.appendChild(innerButt);

        if (innerButt.className === 'save') {
            innerButt.disabled = true;
        }
        options.push(option);
    })

    ulMenu.append(...options);
    document.body.appendChild(ulMenu);

    return ulMenu;
}

function createModalWindow() {
    const background = createElement('div', { 'className': 'background' }, {'id':'background'});
    background.style.display = 'none';

    const window = createElement('div', { 'className': 'window' }, { 'id': 'window' });
    background.appendChild(window);
    background.addEventListener('click', closeWindow);

    const input = createElement('input');
    window.appendChild(input);

    const buttonBlock = createElement('div', { 'className': 'button-block' });
    window.appendChild(buttonBlock);

    const buttonAdd = createElement('button', { 'className': 'add', 'innerText': 'add' })
    buttonAdd.addEventListener('click', addText);
    buttonBlock.appendChild(buttonAdd);

    const buttonCancel = createElement('button', { 'className': 'cancel', 'innerText': 'cancel' })
    buttonCancel.addEventListener('click', closeWindow);
    buttonBlock.appendChild(buttonCancel);

    document.body.appendChild(background);
    
    return background;
}

export { createButtonAdd }
export { createListOnPage }
export { createMenu }
export { createModalWindow }

