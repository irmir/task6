import createElement from './create-element'

export default function createList(arrList) {
    const fragment = new DocumentFragment();

    for (let i = 0; i < arrList.length; i++) {
        const spanEl = createElement('span');
        spanEl.innerText = arrList[i].title;
        const liEl = createElement('li', null, {'data-id':i});
        liEl.appendChild(spanEl);

        const buttonList = createElement('button', {'className':'dots'}, {'data-id':i});
        buttonList.innerText = '...';

        const stringWrapper = createElement('div', {'className':'string-wrapper'});
        stringWrapper.appendChild(liEl);
        stringWrapper.appendChild(buttonList);

        fragment.appendChild(stringWrapper);
    }

    return fragment;
}