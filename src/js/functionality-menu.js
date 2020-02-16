// import showMenu from "./show-menu";


// export default function doChangeOrSaveOrDelete(event) {
//     // const dots = showMenu(event);
//     // const inputEl = document.createElement('input');

//     if (event.target.className === 'change') {
//         inputEl.value = dots.previousElementSibling.innerText;
//         const coord = dots.previousElementSibling.getBoundingClientRect();
//         inputEl.style.width = `${coord.width}px`;
//         const divEl = target.previousElementSibling.parentNode;
//         divEl.insertBefore(inputEl, target);
//         target.parentNode.firstElementChild.parentNode.removeChild(target.parentNode.firstElementChild);


//         inputEl.focus();
//         ulMenu.lastElementChild.firstElementChild.disabled = false;
//         event.target.disabled = true;
//         event.target.parentNode.nextElementSibling.firstElementChild.disabled = true

//     }
//     if (event.target.className === 'save') {
//         const liEl = document.createElement('li');
//         const spanEl = liEl.appendChild(document.createElement('span'));
//         spanEl.innerText = inputEl.value;
//         liEl.style.width = "auto";

//         const divEl = target.previousElementSibling.parentNode;
//         divEl.insertBefore(liEl, target);
//         target.parentNode.firstElementChild.parentNode.removeChild(target.parentNode.firstElementChild);
//         ulMenu.style.display = "none";
//         event.target.disabled = true;
//         ulMenu.firstElementChild.firstElementChild.disabled = false;
//         ulMenu.firstElementChild.nextElementSibling.firstElementChild.disabled = false;


//     }
//     if (event.target.className === 'delete') {
//         const liEl = target.previousElementSibling;
//         liEl.parentNode.parentNode.removeChild(liEl.parentNode);
//         ulMenu.style.display = "none";
//     }
// }