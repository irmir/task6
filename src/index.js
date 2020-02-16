import './styles/style.css'
import getList from './js/get-list'
import createElement from './js/create-element'
import search from './js/search'
import {doButtonAdd} from './js/create-html'
import {doList} from './js/create-html'
import showMenu from './js/show-menu'
import {showModalWindow} from './js/functionality-modal-window'

(async function () {

    const wrapper = createElement('div', {'className':'wrapper'});

    const buttonAdd = doButtonAdd();
    buttonAdd.addEventListener('click', showModalWindow);

    const list = await getList();

    const ulEl = doList(list);
    
    ulEl.addEventListener('click', showMenu);

    const input = search(wrapper, ulEl, list);

    wrapper.appendChild(buttonAdd);
    wrapper.appendChild(ulEl);

    document.body.appendChild(wrapper);
}
)();
