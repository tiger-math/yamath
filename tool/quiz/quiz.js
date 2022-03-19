/*
{
      question: '',
	   answer: [],
	   correct: 0,
		explanation: ''
    },
	 answer 0: text, 1: number, array: 選択*/
//---------------変数定義---------------
const quiz = [
  [
    {
      question: '犬を英語で言うと？',
	   answer: ['cat','dog','pig'],
	   correct: 1,
		explanation: '当然。'
    },
	 {
      question: '英語で"dog"と呼ばれる生き物は何？',
	   answer: ['イヌ','ヘラクレスオオカブト'],
	   correct: 0,
		explanation: '当然。'
    },
	 {
      question: '歴代内閣総理大臣の名前に使われている回数が多いのはどっち？',
	   answer: ['藤','山'],
	   correct: 1,
		explanation: '"藤"は5名、"山"は7名<br>藤: 伊藤博文、加藤友三郎、加藤高明、斉藤実、佐藤栄作<br>山: 山縣有朋、山本権兵衛、片山哲、鳩山一郎、石橋湛山、村山富市、鳩山由紀夫<br>ちなみにのべでも"山"のほうが多い'
    },
	 {
      question: '1 + 1 = ?',
	   answer: 1,
	   correct: '2',
		explanation: 'まぁ、できて当然ですよね??'
    },
	 {
      question: '「あいうえお」と答えて',
	   answer: 0,
	   correct: 'あいうえお',
		explanation: 'だって言ったじゃん！'
    },
	 {
      question: '「かきくけこ」と答えて',
	   answer: 0,
	   correct: 'かきくけこ',
		explanation: 'だって言ったじゃん！'
    },
	 {
      question: '「あいうえお」か「かきくけこ」と答えて',
	   answer: 0,
	   correct: ['あいうえお','かきくけこ'],
		explanation: 'だって言ったじゃん'
    },
  ],
  [
    {
      question: '薬学者の田原良純が命名した、ヒョウモンダコやふぐの仲間が持つ猛毒は何？',
	   answer: 0,
	   correct: 'テトロドトキシン',
		explanation: ''
    },
	 {
      question: '1908年、1948年、2012年に夏季オリンピックが開催された、ヨーロッパの国、イギリスの首都はどこ？',
	   answer: 0,
	   correct: 'ロンドン',
		explanation: ''
    },
	 {
      question: 'とぎ洗いの必要がなく、水を加えるだけで炊飯できる状態に加工された米を「何米」という？',
	   answer: 0,
	   correct: ['無洗米','無洗'],
		explanation: ''
    },
	 {
      question: '地中海と大西洋を結んでいる、イベリア半島とアフリカ大陸の間にある海峡は「何海峡」？',
	   answer: 0,
	   correct: ['ジブラルタル海峡','ジブラルタル'],
		explanation: ''
    },
	 {
      question: 'コナン・ドイルの「シャーロック・ホームズ」シリーズで、ホームズの助手であり、事件の語り部となる医者は誰？',
	   answer: 0,
	   correct: ['ジョン・ワタソン','ワタソン','ワトスン','ジョン・H・ワタソン','ジョン・H・ワトスン'],
		explanation: ''
    },
	 {
      question: '慣用句で、強いものが持つ唯一の弱点のことを、ある歴史上の人物の名前から「何の泣き所」という？',
	   answer: 0,
	   correct: ['弁慶の泣き所','弁慶'],
		explanation: ''
    },
	 {
      question: '教育には環境が大切であるという意味の四字熟語を、孟子(もうし)の母が教育のために引っ越した故事から何という？',
	   answer: 0,
	   correct: '孟母三遷',
		explanation: ''
    },
	 {
      question: 'ロシア、アゼルバイジャン、イラン、トルクメニスタン、カザフスタンに囲まれている、世界最大の湖は何？',
	   answer: 0,
	   correct: 'カスピ海',
		explanation: ''
    },
	 {
      question: '宮沢賢治の童話『銀河鉄道の夜』で、カムパネルラとともに宇宙を旅する主人公の少年の名前は何？',
	   answer: 0,
	   correct: 'ジョバンニ',
		explanation: ''
    },
	 {
      question: '釧路空港の愛称にその名が用いられている、ツル科の鳥は何？',
	   answer: 0,
	   correct: ['タンチョウ','たんちょう'],
		explanation: ''
    },
	 {
      question: '1984年に北米のデナリで消息を絶った、国民栄誉賞も受賞している探検家は誰？',
	   answer: 0,
	   correct: '植村直己',
		explanation: ''
    },
	 {
      question: 'アメリカのアップル社を創業したウォズニアックとジョブスに共通するファーストネームは何？',
	   answer: 0,
	   correct: 'スティーブ',
		explanation: ''
    },
	 {
      question: '人間のふくらはぎにある、魚の名前がついた筋肉は「何筋」？',
	   answer: 0,
	   correct: ['ヒラメ筋','ヒラメ'],
		explanation: ''
    },
	 {
      question: '「身をかわす」という意味の英単語から名付けられた、2チームに分かれてコート内でボールを投げ合うスポーツは何？',
	   answer: 0,
	   correct: 'ドッジボール',
		explanation: ''
    },
	 {
      question: '東京都世田谷区桜新町に記念館がある、『いじわるばあさん』『サザエさん』などの作品で知られる漫画家は誰？',
	   answer: 0,
	   correct: '長谷川町子',
		explanation: ''
    },
	 {
      question: '卵黄の位置を安定させる役割を持つ、鳥類の卵白の中にあるヒモ状のものを何という？',
	   answer: 0,
	   correct: 'カラザ',
		explanation: ''
    },
	 {
      question: '現在は室伏広治が長官を務める、文部科学省の外局である行政機関は「何庁」？',
	   answer: 0,
	   correct: ['スポーツ庁','スポーツ'],
		explanation: ''
    },
	 {
      question: '12個を1とする、鉛筆を数える際などに使われる単位は何でしょう？',
	   answer: 0,
	   correct: 'ダース',
		explanation: ''
    },
	 {
      question: '1956年に「トランジスタの効果発見」で、1972年に「超伝導現象の理論的解明」でそれぞれノーベル物理学賞を受賞したアメリカの物理学者は誰でしょう',
	   answer: 0,
	   correct: 'ジョン・バーディーン',
		explanation: ''
    },
	 {
      question: 'グラスの縁に塩や砂糖を付着させる、カクテルのデコレーション技法を何というでしょう？',
	   answer: 0,
	   correct: 'スノースタイル',
		explanation: ''
    },
	 {
      question: '1927年に『懺悔の刃』で監督デビューを果たした、代表作に『東京物語』や『秋刀魚の味』等がある日本の映画監督は誰でしょう？',
	   answer: 0,
	   correct: '小津安二郎',
		explanation: ''
    },
	 {
      question: '舞台上に突然現れ、紛糾(ふんきゅう)した事態を円満に解決する存在のことを、「機械仕掛けの神様」という意味のラテン語で何というでしょう？',
	   answer: 0,
	   correct: 'デウス・エクス・マキナ',
		explanation: ''
    },
	 {
      question: '『旧約聖書』の一節から、英語では「rose of Sharon」といわれる、韓国の国の花に指定されているアオイ科の植物は何でしょう？',
	   answer: 0,
	   correct: 'ムクゲ',
		explanation: ''
    },
	 {
      question: 'トラベリングやダブルドリブルなど、バスケットボールにおいて、ファウル以外の違反行為を総称して何というでしょう？',
	   answer: 0,
	   correct: 'バイオレーション',
		explanation: ''
    },
	 {
      question: '本来は「志願兵」という意味であったが、現在では「自発的に社会への奉仕活動を行う人、またはその活動」を意味する言葉は何でしょう？',
	   answer: 0,
	   correct: 'ボランティア',
		explanation: ''
    },
	 {
      question: '「カエサル」を語源とする、ロシアにおける皇帝の称号は何でしょう？',
	   answer: 0,
	   correct: 'ツァーリ',
		explanation: ''
    },
	 {
      question: '熱伝導に優れた金属で作られる、熱燗(あつかん)を作るとき、日本酒を入れてお湯につける容器を何というでしょう？',
	   answer: 0,
	   correct: 'ちろり',
		explanation: ''
    },
	 {
      question: 'ペタンクにおいて、目標となる木でできた球を何というでしょう？',
	   answer: 0,
	   correct: 'ビュット',
		explanation: ''
    },
	 {
      question: 'ヒロインの「おきん」を高峰秀子が演じた、日本初のカラー映画と言われる木下恵介監督の映画は何でしょう？',
	   answer: 0,
	   correct: 'カルメン故郷に帰る',
		explanation: ''
    },
	 {
      question: '卓球のラケットを、その持ち方から大きく2つに分けると、シェイクハンドと何でしょう？',
	   answer: 0,
	   correct: 'ペンホルダー',
		explanation: ''
    },
	 {
      question: '商店が同じ屋号の店を出すことを「のれん分け」といいますが、家系が分家することを「何分け」というでしょう？',
	   answer: 0,
	   correct: ['かまど分け','かまど'],
		explanation: ''
    },
	 {
      question: '襟と袖の部分だけが白くそれ以外がストライプや色物となっているシャツのことを、「聖職者」を意味する言葉を用いて何というでしょう？',
	   answer: 0,
	   correct: 'クレリックシャツ',
		explanation: ''
    },
	 {
      question: 'オリーブの生産や、壺井栄(つぼいさかえ)の小説『二十四の瞳』の舞台となっていることで有名な、瀬戸内海に浮かぶ香川県の島はどこでしょう？',
	   answer: 0,
	   correct: '小豆島',
		explanation: ''
    },
	 {
      question: 'レーザーアブレーション法、アーク法などの手法で作成される、科学者・飯島澄男によって発見された、炭素が管状に結合した物質を何というでしょう？',
	   answer: 0,
	   correct: 'カーボンナノチューブ',
		explanation: ''
    },
	 {
      question: '島崎藤村の小説『破戒』で、被差別部落出身ということを打ち明けてしまう主人公の名前は何でしょう？',
	   answer: 0,
	   correct: '瀬川丑松',
		explanation: ''
    },
	 {
      question: '朝鮮の男性がチョゴリとセットで着用する、袴(はかま)のような民族衣装を何というでしょう？',
	   answer: 0,
	   correct: 'パジ',
		explanation: ''
    },
	 {
      question: '『万葉集』に最も多く読み込まれた植物である、秋の七草にも数えられるはなは何でしょう？',
	   answer: 0,
	   correct: '萩',
		explanation: ''
    },
	 {
      question: '法律上は「方向指示器」と言われる、自動車の曲がる方向を示すために点滅させる装置のことを、「瞬きするもの」という意味の英語で何というでしょう？',
	   answer: 0,
	   correct: 'ウィンカー',
		explanation: ''
    },
	 {
      question: 'アイルランドの作曲家ジョン・フィールドが創始した、日本語では「夜想曲」と言われる音楽の形式は何でしょう？',
	   answer: 0,
	   correct: 'ノクターン',
		explanation: ''
    },
	 {
      question: '動物のアイガモは、カモと何を交雑させた動物でしょう？',
	   answer: 0,
	   correct: 'アヒル',
		explanation: ''
    },
	 {
      question: 'つま先の細い靴を履く人に発症しやすい、足の親指が小指の方へ曲がってしまう症状のことを何というでしょう？',
	   answer: 0,
	   correct: '外反母趾',
		explanation: ''
    },
  ],
];
