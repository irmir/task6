export default function createElement(tagName, propertyes, attributes) {
    const elem = document.createElement(tagName);

    for (let item in propertyes) {
        elem[item] = propertyes[item]
    }

    for (let item in attributes) {
        elem.setAttribute(item, attributes[item]);
    }

    return elem;
}