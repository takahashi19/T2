document.getElementById("my-form").onsubmit = function() {
  document.getElementById("box").innerHTML =
  parseFloat(document.getElementById("num1").value) +
  parseFloat(document.getElementById("num2").value);
  return false;
};


/*
document.getElementById("box").innerHTML = "Hello World!";

//HTMLページ　idのボックス要素　(動作させる)中身のHTML　文字列
document.getElementById("box").innerHTML = new Date().toLocaleString();
//時間を表示させるコメまんど
document.getElementById("box").innerHTML = "abc" + "def";
//文字列の合体
document.getElementById("box").innerHTML = 1 + 3;

//足し算
//  document.getElementById("my-button").onclick = function() {
//  document.getElementById("box").innerHTML += "どん！<br>";
//  };//function() { ... }の中身がボタンを押すたび実行される。
  //A += Bという書き方はA = A + Bを省略した書き方で、Aの既存の内容を消さずにBを後ろに追加します。
//  document.getElementById("my-button").onclick = function() {
//  document.getElementById("box").innerHTML = "こんにちは、" +
//  document.getElementById("name").value + "さん！";
//  };
  //入力された名前を取得してこんちは「」さんと返す。
//   document.getElementById("my-button").onclick = function() {
  // 入力値を変数yourNameに保存
//   var yourName = document.getElementById("name").value;

  // 挨拶文を表示
//   document.getElementById("box").innerHTML = "こんにちは、" + yourName + "さん！";
//   };
 //yourNameに代入して表示される一時的に保存される点が上のとは違う
 //二つのボタンを作成する。
//  document.getElementById("button1").onclick = function() {
//  document.getElementById("box").innerHTML += "どん！<br>";
//  };

//  document.getElementById("button2").onclick = function() {
//  document.getElementById("box").innerHTML += "かっ！<br>";
//  };

 //関数とは、処理に名前をつけてまとめたものです。add Textという名前の関数を独立させる。addtextに動作をまとめてコードを減らしてる
// textを受け取って表示する関数
//  function addText(text) {
//  document.getElementById("box").innerHTML += text;
//  }

// document.getElementById("button1").onclick = function() {
  // addText関数を呼び出す
//  addText("どん！<br>");
//  };
// document.getElementById("button2").onclick = function() {
  // addText関数を呼び出す
//  addText("かっ！<br>");
//  };

//4.9処理を遅れせて実行する。1秒後に実行するようにプログラムする
// textを受け取って表示する関数
// function addText(text) {
  // 1000ミリ秒（1秒）後に実行するよう予約
//  setTimeout(function() {
    // setTimeout(function() { 処理 }, 時間)は、指定した時間が経過した後に処理を実行するという命令.この中が1秒後に実行される
//  document.getElementById("box").innerHTML += text;
//  }, 1000);}
// 以降はそのまま
//  document.getElementById("button1").onclick = function() {
  // addText関数を呼び出す
//  addText("どん！<br>");
//  };
// document.getElementById("button2").onclick = function() {
  // addText関数を呼び出す
//  addText("かっ！<br>");
//  };

  //4.10 一定時間ごとに繰り返し実行
   // 1000ミリ秒（1秒）おきに処理を実行するよう予約
//setInterval(function() {
  // setInterval(function() { 処理 }, 実行間隔)は、一定時間ごとに処理を実行する命令この中が1秒おきに実行される
//  document.getElementById("box").innerHTML += "どん！<br>";
//  }, 1000);

 //4.10の２　new Data().toLocalは時計を表示する。それを動かせば時計のように動く
// setInterval(function() {
//  document.getElementById("box").innerHTML = new Date().toLocaleString() + "<br>";
// }, 1000);

  //4.11　ループ処理
//document.getElementById("box").innerHTML = "";

//for (var i = 1; i <=10; i++){
//  document.getElementById("box").innerHTML += i + "<br>";
//}
//for (初回だけ実行する処理; ループ継続条件; 毎ループ後の処理) {
//  毎ループごとに実行する処理
//}

 //4.13 フォームの入力を受け取って足し算しよう
//document.getElementById("my-button").onclick = function() {
//  var num = Math.random();
  
//  document.getElementById("box").innerHTML = num + "<br>";
//    if (num >= 0.5) { // numが0.5以上の場合
//    document.getElementById("box").innerHTML += "当たり！";
//  } else { // numが0.5未満の場合
//    document.getElementById("box").innerHTML += "ハズレ…";
//  }
//};

console.log("Hello Console!");

/* メソッド
プロパティに関数（function）を指定したものはメソッドと呼ばれ、通常の関数と同じように()を付けて呼び出すことができます。
var person = {
  firstName: "Taro",
  lastName: "Yamada",
  greet: function() {
    console.log("こんにちは！");
  }
}
// greetメソッドを呼び出す。greetじゃなくても任意の文字で良い
person.greet();

実行すると「こんにちは！」と表示

*/
/*メソッド２
var person = {
  firstName: "太郎",
  lastName: "山田",
  birthYear: 1970,
  greet: function(name) {
    console.log(name + "さんこんにちは！");
  },
  getAge: function() {
    // 現在の西暦からbirthYearを引いたものを返す。thisはプロパティにアクセスする頭につける
    return new Date().getFullYear() - this.birthYear;
  }
}
person.greet("加藤");
var age = person.getAge()
//personのクラスの中のGETAGEメソッドを導入している。
console.log("年齢: " + age);

実行すると「加藤さんこんにちは！年齢48歳」と表示
*/

/*5.5 配列とループ
// 配列を作成
var numbers = [ 1, 2, 3, 4, 5, 7, 10 ];

// 最初の要素を表示
console.log(numbers[0]);

実行結果は１

// 配列を作成
var numbers = [ 1, 2, 3, 4, 5, 7, 10 ];

// 各要素を表示
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// 配列を作成
var numbers = [ 1, 2, 3, 4, 5, 7, 10 ];

var total = 0;
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log("total: " + total);

*/

 /*文字列
 "..."（ダブルクォーテーション）または'...'（シングルクォーテーション）で囲われたテキストは文字列です。
console.log("Hello World!");
// => Hello World!
*/
 /*条件分岐
if (10 > 3) {
  console.log("yes");
} else {
  console.log("no");
}

var result = 10 > 3;
if (result) { // resultがtrueの場合に実行される
  console.log("yes");
} else { // resultがfalseの場合に実行される
  console.log("no");
}
これだとフォルスになる。
(!result)とすると結果を逆に表示可能

*/

/*ANDとOR
var num = 5;

if (num >= 3) {
  if (num < 7) {
    console.log("ok");
  }
}

これを下記のようにできる（AND）
var num = 5;

if (num >= 3 && num < 7) { // numが3以上かつ7未満の場合
  console.log("ok");
}

＆＆がAかつBのようにANDをあわしている

これは（OR）での記述
var num = 1;

if (num < 3 || num >= 7) { // numが3未満または7以上の場合
  console.log("ok");
}
||をがORを表す。

ANDとORの組み合わせ。
var a = 5;
var b = 20;

if (a == 3 && b < 7 || b >= 15) {
  console.log("yes");
} else {
  console.log("no");
}

5.8 定義済みの定数
null
underfined
nan(NaN（Not a Numberの略で数字でないという意味）)

*/
