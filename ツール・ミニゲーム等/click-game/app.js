//変数定義
var click = 0;
var point = 0;
var last_point = 0;
var acceleration = 1;
var next_goal = 10;
const $text_click = document.getElementById('text_click');
const $button_click = document.getElementById('button_click');
const $btn = document.getElementsByClassName('btn');
var btn0_num = 0;
var btn1_num = 0;
var btn2_num = 0;
var btn3_num = 0;
var btn0_point = 1000;
var btn1_point = 1000;
var btn2_point = 1500;
var btn3_point = 10000;

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
if(point >= btn0_point){
  write_point(point-btn0_point);
  acceleration++;
  btn0_num++;
  btn0_point = btn0_point + 100;
  $btn[0].innerText = '加速度を上げる(-'+btn0_point+'point)';
 } else {alert('ポイントが足りません！')}
}

const btn1 = () => {
if(point >= btn1_point){
  write_point(point-btn1_point);
  btn1_num++;
  btn1_point = btn1_point + 100;
  $btn[1].innerText = '1秒に1回クリック(-'+btn1_point+'point)';
 } else {alert('ポイントが足りません！')}
}

const btn2 = () => {
if(point >= btn2_point){
  write_point(point-btn2_point);
  btn2_num++;
  btn2_point = btn2_point + 100;
  $btn[2].innerText = '1秒に2回クリック(-'+btn2_point+'point)';
 } else {alert('ポイントが足りません！')}
}

const btn3 = () => {
if(point >= btn3_point){
  write_point(point-btn3_point);
  acceleration = acceleration * 2;
  btn3_num++;
  btn3_point = btn3_point * 2;
  $btn[3].innerText = '加速度を2倍にする(-'+btn3_point+'point)';
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
