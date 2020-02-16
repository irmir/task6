// import {addText} from './functionality-modal-window'
// import {closeWindow} from './functionality-modal-window'
// import createElement from './create-element'

// export default function createModalWindow() {
//     const background = createElement('div', {'className':'background'});

//     const window = createElement('div', {'className': 'window'}, {'id':'window'});
//     background.appendChild(window);
//     background.addEventListener('click', closeWindow);

//     const input = createElement('input');
//     window.appendChild(input);

//     const buttonBlock = createElement('div', {'className': 'button-block'});
//     window.appendChild(buttonBlock);

//     const buttonAdd = createElement('button', {'className':'add', 'innerText':'add'})
//     buttonAdd.addEventListener('click', addText);
//     buttonBlock.appendChild(buttonAdd);

//     const buttonCancel = createElement('button', {'className':'cancel', 'innerText':'cancel'})
//     buttonCancel.addEventListener('click', closeWindow);
//     buttonBlock.appendChild(buttonCancel);

//     document.body.appendChild(background);
//     // return window;
// }