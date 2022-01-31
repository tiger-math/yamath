//変数定義
var click = 0;
var point = 0;
var last_point = 0;
var acceleration = 1;
var next_goal = 10;
const $text_click = document.getElementById('text_click');
const $button_click = document.getElementById('button_click');
const $btn = document.getElementsByClassName('btn');
var btn1_num = 0;
var btn2_num = 0;

//関数定義
const write_point = (new_point) => {
 point = new_point;
 $text_click.textContent = 'クリック回数: '+click+'回　ポイント: '+new_point+'ポイント';
}

const progressCheck = function(number) {
 if (last_point < number && number <= point) {
  return 1;
 } else {
  return 0;
 }
}

function progress(number) {
 var $progress = document.getElementById('progress');
 var new_li = document.createElement('li');
 new_li.textContent = number+'ポイント　突破！';
 document.getElementById('progress_text').after(new_li);
 alert(new_li.textContent);
 acceleration++;
}

function click_button() {
 var $li = document.getElementsByTagName('li');
 var next_goal = 10 ** ($li.length + 1);
 last_point = point;
 click++;
 write_point(point + acceleration);
 
 if (progressCheck(next_goal) === 1){progress(next_goal);}
}

//関数ーボタン定義
const btn0 = () => {
if(point >= 1000){
  write_point(point-1000);
  acceleration++;
 } else {alert('ポイントが足りません！')}
}

const btn1 = () => {
if(point >= 1000){
  write_point(point-1000);
  btn1_num++;
 } else {alert('ポイントが足りません！')}
}

const btn2 = () => {
if(point >= 1500){
  write_point(point-1500);
  btn2_num++;
 } else {alert('ポイントが足りません！')}
}

const btn3 = () => {
if(point >= 100000){
  write_point(point-100000);
  acceleration = acceleration * 2;
 } else {alert('ポイントが足りません！')}
}

//ボタンクリック
$button_click.addEventListener('click', (e) => {
 click_button();
});

$btn[0].addEventListener('click', (e) => {btn0();});
$btn[1].addEventListener('click', (e) => {btn1();});
$btn[2].addEventListener('click', (e) => {btn2();});
$btn[3].addEventListener('click', (e) => {btn3();});

setInterval(function(){
for (let i = 0; i < btn1_num ; i++) {
  click_button();
}
},1000)

setInterval(function(){
for (let i = 0; i < btn2_num ; i++) {
  click_button();
}
},500)
