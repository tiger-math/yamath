const Scenes = {
  prepare: 'prepare',
  playing: 'playing',
  end: 'end'
}
const music = [
  new Audio('question.mp3'),
  new Audio('correct.mp3'),
  new Audio('wrong.mp3')
]
const $doc = document;
const $question = $doc.getElementById('question');
const $div_btn = $doc.getElementsByClassName('btn')[0];
const $btn = $doc.getElementsByTagName('button');
const $start_btn = $doc.getElementById('start_btn');
const $sound_btn = $doc.getElementById('sound_btn');
const $p = $doc.getElementsByTagName('p');
const $whaQ = $doc.getElementById('whaQ');
const $explanation = $doc.getElementById('explanation');
const $img = $doc.getElementsByTagName('img');
const $input = $doc.getElementsByTagName('input');
const hash = location.hash.replace('#','');
let checked;
let scene = Scenes.prepare;
let quizNo, quizType, whaQ;//quizType 0:ランダム 1:順番通り
let TNQ = 0; //TNQ = 問題数
let TNCA = 0; //TNCA = 正解数
let explanation = false;
let mute, array_btn, btnNo, question, isArray;

//---------------giveQuestion---------------
function giveQuestion() {
  quizNo = nextQN();
  question = quiz[whaQ][quizNo];
  isArray = Array.isArray(question.answer);
  $question.innerHTML = question.question;
  play_music(0);
  clear_btn();
  if (isArray) {
	 //選択式
    create_btn(question.answer.length); //ボタン作るぜ
	 
	 for (i=0; i<question.answer.length; i++) {
	   $btn[i].innerHTML = question.answer[i];
	 }
  } else {
	 //記述式
    if (question.answer == 0) {
		//text
		$div_btn.innerHTML = '<input type="text">'
    } else {
		//number
		$div_btn.innerHTML = '<input type="number">'
    }
  }
}

//---------------nextQN---------------
function nextQN() {
  if (quizType == 0) {
    return Math.floor(Math.random() * quiz[whaQ].length) //random
  } else {
    if (quizNo == undefined)
	 {quizNo = -1;}
	 
    if (quizNo == quiz[whaQ].length - 1)
	 {return undefined;} else
	 {return quizNo + 1;}
  }
}

//---------------btn---------------
function btn() {
  btnNo = array_btn.indexOf(event.target);
  if (checked != undefined) {
    $btn[checked].className = '';
  }
  if ($start_btn.innerText != 'next' && $start_btn.innerText != 'again') {
    //checked
    checked = btnNo;
    $btn[btnNo].className = 'checked';
  }
  
  if (scene == Scenes.prepare) {
    //準備
	 quizType = btnNo;
  }
}

//---------------start_btn---------------
function start_btn() {
  if (scene == Scenes.prepare) {
    //準備
	 if (checked == undefined) {
	   alert('クイズ形式を決めてください');
	 } else {
	   //クイズ形式を決めてたら
		scene = Scenes.playing;
		$start_btn.innerText = 'answer';
		giveQuestion();
		
	 }
  } else {if (scene == Scenes.playing) {
    if (quizNo != undefined) {
      question = quiz[whaQ][quizNo];
      isArray = Array.isArray(question.answer);
	 }
    //プレイ中
	 if ($start_btn.innerText == 'answer') {
	   if ((checked == undefined && isArray) || $input[0].value == '') {
		  if (isArray) {
	       alert('解答を選択してください');
		  } else {
		    alert('解答を入力してください');
		  }
	   } else {
	     //answer
	     TNQ++;
        $start_btn.innerText = 'next';
        $explanation.innerHTML = '<span class="heading">答えと解説</span><br>';
	     //正誤判定
	     if (isArray) {
	       //選択なら
          if (checked == question.correct) {
	         //正解なら
	         TNCA++;
	         $explanation.innerHTML += '正解<br>'
		      play_music(1);
	       } else {
	         //不正解なら
	         $explanation.innerHTML += '不正解<br>';
		      play_music(2);
	         }
		    } else {
		      //記述式なら
		      if ($input[0].value == question.correct || (Array.isArray(question.correct) && question.correct.includes($input[0].value))) {
		        //正解なら
	           TNCA++;
	           $explanation.innerHTML += '正解<br>'
			     play_music(1)
	         } else {
	           //不正解なら
	           $explanation.innerHTML += '不正解<br>';
			 play_music(2)
	           }
		      }
	       
	       //$explanationのあなたの解答
	       if (isArray) {
	         //選択なら
		      $explanation.innerHTML += 'あなたの解答: ' + question.answer[checked];
	       } else {
	         //記述なら
		      $explanation.innerHTML += 'あなたの解答: ' + $input[0].value;
	       }
	       
	       //$explanationの模範解答
	       if (isArray) {
			   //選択なら
	         $explanation.innerHTML += '<br>　模範解答　: ' + question.answer[question.correct];
	       } else {
			   //記述なら
	         $explanation.innerHTML += '<br>　模範解答　: ' + question.correct;
	       }
	       
	       //$explanationの解説
	       $explanation.innerHTML += '<br><br>' + question.explanation;
	       
	       $explanation.style.display = 'block';
		    $start_btn.innerText = 'next';
		}
	 } else {
	   //next
		$explanation.style.display = 'none';
		if (quizType == 1 && quizNo == quiz[whaQ].length-1) {
		  //end
		  scene = Scenes.end;
		  create_btn(2);
		  $question.innerText = 'お疲れ様でした。';
		  $btn[0].innerText = 'あなたのスコアは';
		  $btn[1].innerText = TNCA + '/' + quiz[whaQ].length + '点です。'
		  $start_btn.innerText = 'again';
		} else {
		  //次へ
		  $start_btn.innerText = 'answer';
		  giveQuestion();
		}
	 }
  } else {if (scene == Scenes.end) {
    //終わり
	 scene = Scenes.prepare;
	 //初期化
	 prepare();
  }}}
}

//---------------prepare---------------
function prepare() {
  create_btn(2);
  $question.innerText = 'クイズ形式を決めてください';
  $btn[0].innerHTML = 'ランダム';
  $btn[1].innerHTML = '順番通り';
  $start_btn.innerText = 'start';
  TNQ = 0;
  TNCA = 0;
  quizNo = undefined;
}

$img[0].addEventListener('click', function(){
  mute = !mute //mute反転
})

//---------------play_music---------------
function play_music(No) {
  music[No].currentTime = 0;
  music[No].play();
}

//---------------create_btn---------------
function create_btn(No) {
  $div_btn.innerHTML = '';
  for (i=0; i<No; i++) {
    $div_btn.innerHTML += '<button onclick="btn()"></button>'
  }
}

//---------------clear_btn---------------
function clear_btn() {
  if (checked != undefined) {
    $btn[checked].className = '';
    checked = undefined;
  }
}

//---------------onload---------------
window.onload = function() {
  $whaQ.max = quiz.length;
  //urlパラメータから消音にすべきか判断
  if (location.search == '?soundless') {
    mute = true;
	 $sound_btn.innerHTML = '<a href="./index.html#'+hash+'">音ありver.</a>'
  } else {
    mute = false;
	 $sound_btn.innerHTML = '<a href="./index.html?soundless#'+hash+'">音無しver.</a>'
  }
  if (hash != '' && Number(hash) <= quiz.length && Number(hash) > 0) {
    $whaQ.value = hash;
  }
  prepare();
}

//---------------loop 60FPS---------------
setInterval(function() {
  array_btn = [].slice.call($btn);
  whaQ = Number($whaQ.value) - 1;
  //muteにするなら
  if (mute) {
    //画像をmute
    $img[0].src = 'mute.png';
	 //音楽をmute
	 music[0].muted = true;
	 music[1].muted = true;
	 music[2].muted = true;
  } else {
    //画像をunmute
    $img[0].src = 'unmute.png';
	 //音楽をunmute
	 music[0].muted = false;
	 music[1].muted = false;
	 music[2].muted = false;
  }
  if (scene == Scenes.prepare) {
    $whaQ.disabled = false;
  } else {
    $whaQ.disabled = true;
  }
  //TNCAなど
  $p[0].innerText = '問題数: ' + TNQ + '問';
  $p[1].innerText = '正解数: ' + TNCA + '問';
  if (TNQ == 0) {
    $p[2].innerText = '正解率: 0%';} else {
	 $p[2].innerText = '正解率: ' + Math.round(TNCA / TNQ * 100) + '%';}
},16)