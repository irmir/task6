// import createElement from './create-element'

// export default function createMenu() {
//     const ulMenu = createElement('ul', {'className':'menu'});
//     ulMenu.style.display = 'none';

//     const options = [];
//     const optionNames = ['change', 'delete', 'save'];
//     optionNames.forEach(item => {
//         const option = createElement('li');
//         const innerButt = createElement('button', {'className':item, 'innerText':item});
//         option.appendChild(innerButt);

//         if (innerButt.className === 'save') {
//             innerButt.disabled = true;
//         }
//         options.push(option);
//     })

//     ulMenu.append(...options);

//     return ulMenu;
// }
