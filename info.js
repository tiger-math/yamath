const tag = [
  'プログラミング',
  '数学',
  'html',
  'YAMATH',
  'アップデート',
  '入門',
  'css'
]

const site = [
  {
	 name: 'MathJaxについて',
    tag: [0,1,2],
    date: '2021.12.18',
    icon: 'math.png',
	 text: '今回は~~のように数式をでhtmlで表示する方法を紹...'
  },
  {
	 name: '2022年大型アップデート',
    tag: [3,4],
    date: '2022.01.02',
    icon: 'logo2.png'
  },
  {
    name: 'html入門',
    tag: [0,2,5],
    date: '2022.01.05',
    icon: 'html.png',
	 text: '今回はhtml入門というのをやっていきたいと思いま...'
  },
  {
    name: 'css入門',
    tag: [0,6,5],
    date: '2022.01.10',
    icon: 'css.jpg'
  }
];

const ad = [2,0]

const $doc = document;
const $file_name = window.location.href.split('/').pop();
let text_box,new_element;
let rect,position;
function create(textBox,element) {
  text_box = textBox;
  new_element = $doc.createElement(element);
}
function apC() {text_box.appendChild(new_element);}
function inB() {text_box.insertBefore(new_element,text_box.firstChild);}
function before() {text_box.before(new_element);}
function after() {text_box.after(new_element);}
