import { createMenu } from './create-html'

export default function showMenu(event) {

    const ulMenu = createMenu();
    const target = event.target;

    if (event.target.className === 'dots') {
        if (ulMenu.style.display === 'none') {
            const coord = target.getBoundingClientRect();
            ulMenu.style.cssText = `display: block!important; top: ${coord.bottom}px; left: ${coord.left}px`;

        } else {
            ulMenu.style.cssText = `display:none`;
        }

        const inputEl = document.createElement('input');

        ulMenu.onclick = function (event) {
            if (event.target.className === 'change') {
                const liEl = target.previousElementSibling
                inputEl.value = liEl.innerText;
                const coord = liEl.getBoundingClientRect();
                inputEl.style.width = `${coord.width}px`;
                const divEl = liEl.parentNode;
                divEl.insertBefore(inputEl, target);

                liEl.parentNode.removeChild(liEl);

                inputEl.focus();
                ulMenu.lastElementChild.firstElementChild.disabled = false;
                event.target.disabled = true;
                event.target.parentNode.nextElementSibling.firstElementChild.disabled = true
            }

            if (event.target.className === 'save') {
                const newLi = document.createElement('li');
                const spanEl = document.createElement('span');
                spanEl.innerText = inputEl.value;
                newLi.style.width = "auto";
                newLi.append(spanEl);

                const divEl = target.previousElementSibling.parentNode;
                divEl.insertBefore(newLi, target);

                const existingInput = target.parentNode.firstElementChild;
                existingInput.parentNode.removeChild(existingInput);

                ulMenu.style.display = "none";
                event.target.disabled = true;
                const firstLi = ulMenu.firstElementChild
                firstLi.firstElementChild.disabled = false;
                firstLi.nextElementSibling.firstElementChild.disabled = false;
            }

            if (event.target.className === 'delete') {
                const liEl = target.previousElementSibling;
                liEl.parentNode.parentNode.removeChild(liEl.parentNode);
                ulMenu.style.display = "none";
            }
        }
    }
}
