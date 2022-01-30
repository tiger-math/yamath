//---------広告-----------------------
text_box = document.getElementById('ad');
var new_element = document.createElement('div');
new_element.id = 'ad1';
text_box.appendChild(new_element);

var new_element = document.createElement('div');
new_element.id = 'ad2';
text_box.appendChild(new_element);

var text_box = document.getElementById('ad1');
var new_element = document.createElement('a');
new_element.id = 'siteA1';
text_box.appendChild(new_element);

var text_box = document.getElementById('siteA1')
var new_element = document.createElement('img');
new_element.id = 'siteImg1';
text_box.appendChild(new_element);

var new_element = document.createElement('br');
text_box.appendChild(new_element);

var new_element = document.createElement('strong');
new_element.id = 'siteName1';
text_box.appendChild(new_element);

var new_element = document.createElement('br');
text_box.appendChild(new_element);

var new_element = document.createElement('span');
new_element.id = 'siteText1';
text_box.appendChild(new_element);

var text_box = document.getElementById('ad2');
var new_element = document.createElement('a');
new_element.id = 'siteA2';
text_box.appendChild(new_element);

var text_box = document.getElementById('siteA2')
var new_element = document.createElement('img');
new_element.id = 'siteImg2';
text_box.appendChild(new_element);

var new_element = document.createElement('br');
text_box.appendChild(new_element);

var new_element = document.createElement('strong');
new_element.id = 'siteName2';
text_box.appendChild(new_element);

var new_element = document.createElement('br');
text_box.appendChild(new_element);

var new_element = document.createElement('span');
new_element.id = 'siteText2';
text_box.appendChild(new_element);


const siteName1 = document.getElementById('siteName1');
const siteName2 = document.getElementById('siteName2');
const siteText1 = document.getElementById('siteText1');
const siteText2 = document.getElementById('siteText2');
const siteImg1 = document.getElementById('siteImg1');
const siteImg2 = document.getElementById('siteImg2');
const siteA1 = document.getElementById('siteA1');
const siteA2 = document.getElementById('siteA2');

siteName1.innerText = "html入門"; //1つ目の広告の見出し
siteText1.innerText = "どうもこんにちは。今回はhtml入門というのをやっ..."; //1つ目の広告の説明
siteImg1.src = "html.png";　　　　//1つ目の広告の画像のリンク
siteA1.href = "html入門.html";　　　　 //1つ目の広告のサイトのリンク
siteA1.title = "html入門";　　　　//1つ目の広告のtitle

siteName2.innerText = "MathJaxについて"; //2つ目の広告の見出し
siteText2.innerText = "どうもこんにちは。今回は~~のようにhtmlで数式を..."; //2つ目の広告の説明
siteImg2.src = "プログラミング.png";　　　　//2つ目の広告の画像のリンク
siteA2.href = "MathJaxについて.html";　　　　 //2つ目の広告のサイトのリンク
siteA2.title = "MathJaxについて";　　　　//2つ目の広告のtitle

//広告共通の設定
siteA1.target = '_blank'; siteA2.target = '_blank';
