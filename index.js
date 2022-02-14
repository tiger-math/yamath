//変数宣言
//info.js $doc,$file_name
const $title_tag = $doc.getElementsByTagName('title')[0];
const $title = $doc.getElementsByClassName('title')[0];
const $all_page = $doc.getElementsByClassName('all-page')[0];
const $page = $doc.getElementsByClassName('page');
const $page_tag = $doc.getElementsByClassName('page-tag');
const $page_img = $doc.getElementsByClassName('page-img');
const search = Number(location.search.replace('?',''));
const $tagNo = $doc.getElementById('tagNo');
let tag_num = [];
let $tagNo_tr,$tagNo_td1;

//---------------tagページのときのheader---------------
if ($file_name !== 'index.html') {
  //title
  $title_tag.innerText = '#' + tag[search] + '|YAMATH';
  
  //見出し
  for (i=0; i<2; i++) {create($title,'br');after();}
  create($title,'h1');
  new_element.innerText = '　#' + tag[search];
  after();
}

//------------ページ表示------------
for (i=0; i<tag.length; i++) {
  tag_num.push(0);
}

for (i=0; i<site.length; i++) {
  if ($file_name === 'index.html' || site[i].tag.includes(search)) {
    create($all_page,'br');inB();
	 //pageの枠作成
    create($all_page,'div');
    new_element.className = 'page'
    inB();
    
	 //page-tagの枠作成
    create($page[0],'span');
    new_element.className = 'page-tag';
    apC();
    
	 //page-tag作成
    for (i2=site[i].tag.length-1; i2>=0; i2--) {
	   //page-tagのリンク作成
      create($page_tag[0],'a');
  	   new_element.href = 'tag.html?' + site[i].tag[i2];
	   new_element.innerText = '#' + tag[site[i].tag[i2]];
	   inB();
		tag_num[site[i].tag[i2]] = tag_num[site[i].tag[i2]] + 1; //タグの数を集計
  	   
		//page-tagの空白作成
	   if (i2!==0) {
	     create($page_tag[0],'span');
		  new_element.innerText = '　';
		  inB();
	   }
    }
	 
	 create($page[0],'br');apC();
	 //page-imgの枠作成
	 create($page[0],'span');
	 new_element.className = 'page-img';
	 apC();
	 
	 //page-img作成
	 create($page_img[0],'img');
	 new_element.width = 60;
	 new_element.height = 60;
	 new_element.src = './image/icon/' + img[site[i].icon];
	 apC();
	 
	 //ページへ飛ぶリンク作成
	 create($page[0],'a');
	 new_element.className = 'page-name';
	 new_element.href = './site/' + i + '.html';
	 new_element.innerText = site[i].name;
	 apC();
	 
	 //最終更新日作成
	 create($page[0],'span');
	 new_element.className = 'page-tag';
	 new_element.innerText = '　最終更新日: ' + site[i].date;
	 apC();
  }
}

//タグの数を表示
if ($file_name === 'index.html') {
  //「すべての記事」を表示
  create($all_page,'h1');
  new_element.innerText = 'すべての記事';
  inB();
  
  for (i=0; i<tag.length; i++) {
    //trタグ作成
	 create($tagNo,'tr');
	 new_element.id = 'tagNo_tr' + i;
	 apC();
	 $tagNo_tr = $doc.getElementById('tagNo_tr'+i);
	 
	 //1つ目のtdタグ作成
	 create($tagNo_tr,'td');
	 new_element.id = 'tagNo_td1_' + i;
	 apC();
	 $tagNo_td1 = $doc.getElementById('tagNo_td1_'+i);
	 
	 //タグへ飛ぶリンク作成
	 create($tagNo_td1,'a');
	 new_element.href = 'tag.html?' + i;
	 new_element.innerText = '#' + tag[i];
	 apC();
	 
	 //2つ目のtdタグ作成
	 create($tagNo_tr,'td');
	 new_element.innerText = '　' + tag_num[i];
	 apC();
  }
}
