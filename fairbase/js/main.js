/* jshint curly:true, debug:true */
/* globals $, firebase, location */

// 初期値を設定
var num = 0;

// ログインユーザのUID
var currentUID = null;

// イベントハンドラの登録など
// jQueryの操作が必要な処理をココに入れる
$(document).ready(function() {

  // ログイン処理
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("状態：ログイン中");
      currentUID = user.uid;
      
      $(".visible-on-login").removeClass("hidden-block");
      $(".visible-on-login").addClass("visible-block");
      $(".visible-on-logout").removeClass("visible-block");
      $(".visible-on-logout").addClass("hidden-block");
  
      // 現在のmykeyの値を取得
      firebase.database().ref("mykey").on("value", function(snapshot) {
  
        // データの取得が完了すると実行される
        if(snapshot.val() != null && !isNaN(snapshot.val())) {  // 取得した値が数値かを判定
          num = snapshot.val();
        }
  
        console.log("got value: " + num);
      });
    } else {
      console.log("状態：ログアウト");
      currentUID = null;
      
      $(".visible-on-login").removeClass("visible-block");
      $(".visible-on-login").addClass("hidden-block");
      $(".visible-on-logout").removeClass("hidden-block");
      $(".visible-on-logout").addClass("visible-block");
    }
  });

  // id="my-button"をクリックしたらmykeyの値を+1
  $("#my-button").click(function() {
    num++;
    console.log("set: " + num);

    // Firebase上のmykeyの値を更新
    firebase.database().ref("mykey").set(num);
  });

  // id="login-button"をクリックしたらログイン処理
  $("#login-button").click(function() {
    var mail = $("#user-mail").val();
    var pass = $("#user-pass").val();

    firebase.auth().signInWithEmailAndPassword(mail, pass)  // ログイン実行
    .then(function(user) {    // ログインに成功したときの処理
      console.log("ログインしました", user);
    })
    .catch(function(error) {  // ログインに失敗したときの処理
      console.error("ログインエラー", error);
    });
  });

  // id="logout-button"をクリックしたらログアウト処理
  $("#logout-button").click(function() {
    firebase.auth().signOut()   // ログアウト実行
    .then(function() {          // ログアウトに成功したときの処理
      console.log("ログアウトしました");
    })
    .catch(function(error) {    // ログアウトに失敗したときの処理
      console.error("ログインエラー", error);
    });
  });
 // id="upload-image"でファイルが選択されたらStorageにアップロード
  $("#upload-image").change(function() {
    if ($(this)[0].files.length === 0) { // ファイルが選択されていないなら何もしない
      return;
    }

    var file = $(this)[0].files[0];
    var filename = "sample/test";
    firebase.storage().ref(filename).put(file)  // ファイルアップロードを実行
    .then(function(snapshot) {  // アップロード処理に成功したときの処理
    
      firebase.storage().ref(filename).getDownloadURL() // 画像のURLを取得
      .then(function(url) {     // URLの取得に成功したときの処理
        $("#upload-image-preview").attr("src", url); // ページ上に画像を表示
      })
      .catch(function(error) {  // URLの取得に失敗したときの処理
        console.error("URL取得エラー", error);
      });
    })
    .catch(function(error) {    // アップロード処理に失敗したときの処理
      console.error("ファイルアップロードエラー", error);
    });
  });
});