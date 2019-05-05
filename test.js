/**
 * selectorに該当するタブを表示する
 */
function showTab(selector) {
    // .tabs-menu lのうちselectorに該当するものにだけactiveクラスを付ける
    $(".tabs-menu li").removeClass("active");
    $(".tabs-menu a[href='" + selector + "']").parent("li").addClass("active");

    // .tabs-content > sectionのうちselectorに該当するものだけを表示
    $(".tabs-content > section").hide();
    $(selector).show();
}

$(document).ready(function() {
    // 初期状態として1番目のタブを表示
    showTab("#tabs-1");

    // タブがクリックされたらコンテンツを表示
    $(".tabs-menu a").click(function() {
        // hrefの値を受け取ってshowTab()関数に渡す
        var selector = $(this).attr("href");
        showTab(selector);

        // hrefにページ遷移しない
        return false;
    });
});