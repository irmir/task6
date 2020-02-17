import './styles/style.css'
import getList from './js/get-list'
import createElement from './js/create-element'
import search from './js/search'
import {createButtonAdd} from './js/create-html'
import {createListOnPage} from './js/create-html'
import showMenu from './js/show-menu'
import {showModalWindow} from './js/modal-window-operations'

(async function () {

    const wrapper = createElement('div', {'className':'wrapper'});

    const buttonAdd = createButtonAdd();
    buttonAdd.addEventListener('click', showModalWindow);

    const list = await getList();

    const ulEl = createListOnPage(list);
    
    ulEl.addEventListener('click', showMenu);

    const input = search(wrapper, ulEl, list);

    wrapper.appendChild(buttonAdd);
    wrapper.appendChild(ulEl);

    document.body.appendChild(wrapper);
}
)();
