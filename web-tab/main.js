/**
 * $(セレクタ).操作1().操作2();
 * （何を）（どうするか（））
 * $(".item").html("Hello");
 */
function showTab(selector) {
    // .tabs-menu liのうちselectorに該当するものにだけactiveクラスを付ける
    $(".active").removeClass("active");//タブが選択してる状態を排除（解除）
    $("#" + selector).addClass("active");//CSSを追加する

    // .tabs-content > sectionのうちselectorに該当するものだけを表示
    $(".tabs-content > div").hide();
    $("#"+selector+"-content").show();
}

$(document).ready(function() {
    // 初期状態として1番目のタブを表示
    showTab("tab-menu-a");//実際にメニューが選択されたらタブの色を変えて動作も変える（どのタブに対して変更されるか）

    // タブがクリックされたらコンテンツを表示
    $(".tabs-menu div").click(function() {
        // clickされたらhrefの値を受け取ってshowTab()関数に渡す
        var selector = $(this).attr("id");//$(this)はイベントの中で、そのイベントが起こった要素を取得することができます
        showTab(selector);//attr()」は、HTML要素の属性を取得したり設定することができるメソッドになります。attr("id")はid="samu"であれば内容をsamuに変更してだす

        // hrefにページ遷移しない
        return false;
    });
});


