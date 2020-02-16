import createList from './create-list'
import { createModalWindow } from './create-html';

function showModalWindow() {
    const modalWindow = createModalWindow();
    modalWindow.style.display = 'block';
}

function addText(event) {
    const text = event.target.parentNode.previousElementSibling.value;
    if (text.length === 0) {
       return alert('Please fill in the field');
    }
    const array = [];
    const obj = {};
    obj.title = text;
    array.push(obj);

    const ulEl = document.getElementById('ul-elem');
    ulEl.appendChild(createList(array));

    closeWindow(event);
}

function closeWindow(event) {
    if (event.target.className === 'background') {
        return event.target.parentNode.removeChild(event.target);
    }
    if (event.target === event.currentTarget) {
        const window = event.target.parentNode.parentNode;
        window.parentNode.parentNode.removeChild(window.parentNode);
    }
    return;

}

export { showModalWindow }
export { addText }
export { closeWindow }