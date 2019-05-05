/*global $*/
//window.onload = function() {
//    $("#box").html("Hello jQuery!");
//}
//window.onloadとはonloadにセットした関数(function)内は、すべてのDOM要素が準備できた後で実行されます。
/*$(document).ready(function() {
    // ready()を使うと、画像の読み込みを待たずに、DOMの読み込みが完了したタイミングで処理を実行できます。DOMの読み込みが完了したらここが実行される
    $("#box").html("Hello jQuery!");
});
*/


    //5　DOM操作
//5.1セレクタで操作
//$(セレクタ).操作1().操作2();
//$(".item").html("Hello");
//これでitemはすべてハローが代入される

//5.2 DOM要素からjQueryオブジェクトを作る
//var box = document.getElementById("box");
//$(box).html("Hello World");
//　→こいつでidボックスにヘローワールドが入る。ボックスに変数を作ってる

//5.3CSSを変更する。
//　　JSからCSSを書くこともできる
//id=box（HTML） について
//$("#box").css({
//    color: "#ffffff",
//    "background-color": "#000000",
//});

//これで背景が黒くなる。

//5.4 選択対象を変更する

//セレクタで選択した要素から、その親や子へと選択対象を変えていくことができます。たとえば以下のコードは、id=”box”の親要素の背景色をskyblueに変更します。

//$("#box").parent().css({ "background-color": "skyblue" });

