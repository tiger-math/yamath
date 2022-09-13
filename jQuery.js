var $doc = document;

function $(dom) {
    if (dom.startsWith('#')) {
        return $doc.getElementById(dom.replace('#',''));
    } else {
        if (dom.startsWith('.')) {
            return $doc.getElementsByClassName(dom.replace('.',''));
        } else {
            return $doc.getElementsByTagName(dom);
        }
    }
}

var new_elm, text_box;
function create(tag) {
    new_elm = $doc.createElement(tag);
}

function apC() {
    text_box.appendChild(new_elm);
}

function inB() {
    text_box.insertBefore(new_elm,text_box.firstChild);
}

function addEL(dom, type, func) {
    dom.addEventListener(type, func)
}