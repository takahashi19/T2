$(document).ready(function() {
  // animatedクラスの付いた要素にwaypointを登録。readyはすぐ表示する意味
 $(".animated").waypoint({
    handler: function(direction) {
      // 要素が画面中央に来るとここが実行される
      if (direction === "down") { // 下方向のスクロール
        // イベント発生元の要素にfadeInUpクラスを付けることで
        // アニメーションを開始
        $(this.element).removeClass("fadeOutUp");
        $(this.element).addClass("fadeInUp");
          //this.destroy();
      }else if (direction === "up") { 
        $(this.element).removeClass("fadeInUp");
        $(this.element).addClass("fadeOutUp");
      }
    },
    // 要素が画面中央に来たらhandlerを実行
   offset: "50%"
  });
});