//変数宣言
const $meta = $doc.getElementsByTagName('meta')[0];
const $siteNo = $file_name.replace('.html','');
const $body = $doc.getElementsByTagName('body')[0];
const $heading = $doc.getElementsByClassName('heading');
const $Sheading = $doc.getElementsByClassName('Sheading');
let $site_title,$site_titleA,$page_title,$page_tag,$page_contents,$contents,SheadingId;
const $link = $doc.getElementsByClassName('link');
const $article = $doc.getElementsByClassName('article');
let $articleNo,$articleA;
const $ad = $doc.getElementById('ad');
let $ad_i;
const $code = $doc.getElementsByClassName('code');
let $code_text,$code_tag;

//---------------header---------------
//titleタグ作成
create($meta,'title');
new_element.innerText = site[$siteNo].name + '|YAMATH';
before();

//css読み込み
create($meta,'link');
new_element.rel = 'stylesheet';
new_element.href = '../css/page.css';
before();

//ファビコン読み込み
create($meta,'link');
new_element.rel = 'shortcut icon';
new_element.href = '../image/icon/logo2.png';
before();

//MathJax読み込み
create($meta,'script');
new_element.id = 'MathJax-script';
new_element.async = true;
new_element.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
before();

//site-titleの枠作成
create($body,'div');
new_element.className = 'site-title';
inB();
$site_title = $doc.getElementsByClassName('site-title')[0]

//ホームへ飛ぶリンク作成
create($site_title,'a');
new_element.href = '../index.html';
new_element.className = 'logo';
apC();
$site_titleA = $doc.getElementsByClassName('logo')[0];

//ロゴ作成
create($site_titleA,'img');
new_element.src = '../image/icon/logo1.svg';
new_element.height = 71.43;
new_element.align = 'left';
apC();

//「YAMATH」作成
create($site_titleA,'span');
new_element.innerText = 'YAMATH';
new_element.className = 'serif';
after();

//page-title作成
create($site_title,'span');
new_element.className = 'page-title';
new_element.innerText = site[$siteNo].name;
after();
$page_title = $doc.getElementsByClassName('page-title')[0];

create($site_title,'br');after();

//最終更新日作成
create($page_title,'span');
new_element.className = 'page-tag';
new_element.innerText = '　最終更新日: ' + site[$siteNo].date;
after();
$page_tag = $doc.getElementsByClassName('page-tag')[0];


//タグ作成
for (i=0; i<site[$siteNo].tag.length; i++) {
  create($page_tag,'span');
  new_element.innerText = '　';
  apC();
  
  create($page_tag,'a');
  new_element.innerText = '#' + tag[site[$siteNo].tag[i]];
  new_element.href = '../tag.html?' + site[$siteNo].tag[i];
  apC();
}

//---------------目次---------------
//目次の枠作成
create($page_tag,'div');
new_element.className = 'page-contents';
after();
$page_contents = $doc.getElementsByClassName('page-contents')[0];

for (i=0; i<2; i++) {create($page_tag,'br');after();}
create($page_contents,'br');after();

//目次の文字作成
create($page_contents,'h2');
new_element.innerText = '目次';
apC();

//目次のhrタグ作成
create($page_contents,'hr');
new_element.className = 'contents-hr';
apC();

for (i=0; i<$heading.length; i++) {
  //見出し番号作成
  create($page_contents,'span');
  new_element.innerText = '　' + (i+1) + '. ';
  apC();
  
  //見出しへ飛ぶリンク作成
  create($page_contents,'a');
  new_element.href = '#' + (i+1);
  new_element.innerText = $heading[i].innerText;
  apC();
  
  create($page_contents,'br');new_element.className = 'contents';apC();
}

for (i=$Sheading.length-1; i>=0; i--) {
  $contents = $doc.getElementsByClassName('contents')
  //idを小数点で分割
  SheadingId = $Sheading[i].id.toString().split('.');
  
  create($contents[SheadingId[0]-1],'br');after();
  
  //小見出しへ飛ぶリンク作成
  create($contents[SheadingId[0]-1],'a');
  new_element.href = '#' + $Sheading[i].id;
  new_element.innerText = $Sheading[i].innerText;
  after();
  
  //小見出し番号作成
  create($contents[SheadingId[0]-1],'span');
  new_element.innerText = '　　' + $Sheading[i].id + ' ';
  after();
}

//---------------見出し・小見出し---------------
for (i=0; i<$heading.length; i++) {
  //heading-box作成
  create($heading[i],'span');
  new_element.className = 'heading-box';
  new_element.innerHTML = '&ensp;';
  before();
  
  create($heading[i],'br');after();
  
  //heading-hr作成
  create($heading[i],'hr');
  new_element.className = 'heading-hr';
  after();
}

for (i=0; i<$Sheading.length; i++) {
  //空白作成
  create($Sheading[i],'span');
  new_element.innerText = '　　';
  before();
  
  //Sheading-box作成
  create($Sheading[i],'span');
  new_element.className = 'Sheading-box';
  new_element.innerHTML = '&ensp;';
  before();
    
  for (i2=0;i2<2;i2++) {create($Sheading[i],'br');after();}
}

//---------------link---------------
for (i=0; i<$link.length; i++) {
  $link[i].classList.add('a');
  $link[i].innerText = $link[i].href;
}

//---------------article---------------
for (i=0; i<$article.length; i++) {
  articleNo = $article[i].classList[1];
  
  //リンク作成
  create($article[i],'a');
  new_element.href = articleNo + '.html';
  new_element.title = site[articleNo].name;
  new_element.id = 'articleA' + i;
  apC();
  $articleA = $doc.getElementById('articleA'+i);
  
  //アイコン作成
  create($articleA,'img');
  new_element.src = '../image/icon/' + img[site[articleNo].icon];
  new_element.width = 150;
  apC();
  
  create($articleA,'br');apC();
  
  //サイト名作成
  create($articleA,'strong');
  new_element.innerText = site[articleNo].name;
  apC();
  
  create($articleA,'br');apC();
  
  //サイトの説明作成
  create($articleA,'span');
  new_element.className = 'article-text';
  new_element.innerText = site[articleNo].text;
  apC();
}

//---------------ad---------------
for (i=0; i<2; i++) {
  //枠作成
  create($ad,'div');
  new_element.className = 'article';
  new_element.id = 'ad' + i;
  apC()
  $ad_i = $doc.getElementById('ad'+i);
  
  //リンク作成
  create($ad_i,'a');
  new_element.href = ad[i] + '.html';
  new_element.title = site[ad[i]].name;
  new_element.id = 'adA' + i;
  apC();
  $articleA = $doc.getElementById('adA'+i);
  
  //アイコン作成
  create($articleA,'img');
  new_element.src = '../image/icon/' + img[site[ad[i]].icon];
  new_element.width = 150;
  apC();
  
  create($articleA,'br');apC();
  
  //サイト名作成
  create($articleA,'strong');
  new_element.innerText = site[ad[i]].name;
  apC();
  
  create($articleA,'br');apC();
  
  //サイトの説明作成
  create($articleA,'span');
  new_element.className = 'article-text';
  new_element.innerText = site[ad[i]].text;
  apC();
}

//---------------code---------------
for (i=0; i<$code.length; i++) {
  //中身消去
  $code_text = $code[i].innerHTML;
  $code[i].innerHTML = '';
  
  //codeタグ作成
  create($code[i],'code');
  new_element.innerHTML = $code_text;
  apC();
}
