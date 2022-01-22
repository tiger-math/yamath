//広告
const siteName1 = document.getElementById('siteName-1');
const siteName2 = document.getElementById('siteName-2');
const siteText1 = document.getElementById('siteText-1');
const siteText2 = document.getElementById('siteText-2');
const siteImg1 = document.getElementById('siteImg-1');
const siteImg2 = document.getElementById('siteImg-2');
const siteA1 = document.getElementById('siteA-1');
const siteA2 = document.getElementById('siteA-2');

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
