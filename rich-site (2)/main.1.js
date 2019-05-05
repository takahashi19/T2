//https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1fb83b019aab5b8b5f8c72baee646aeb&text=cat&sort=interestingness-desc&per_page=12&license=4&extras=owner_name%2Clicense&format=json&nojsoncallback=1


// Flickr API key
var apiKey = "1fb83b019aab5b8b5f8c72baee646aeb";

// photoオブジェクトから画像のURLを作成して返す
function getFlickrImageURL(photo, size) {
  var url = "https://farm" + photo.farm + ".staticflickr.com/"
    + photo.server + "/" + photo.id + "_" + photo.secret;
  if (size) { // サイズ指定ありの場合
    url += "_" + size;
  }
  url += ".jpg";
  return url;
}

// photoオブジェクトからページのURLを作成して返す
function getFlickrPageURL(photo) {
  return "https://www.flickr.com/photos/" + photo.owner + "/" + photo.id;
}

// photoオブジェクトからaltテキストを生成して返す
function getFlickrText(photo) {
  var text = '"' + photo.title + '" by ' + photo.ownername;
  if (photo.license == "4") {
    // Creative Commons Attribution（CC BY）ライセンス
    text += ' / CC BY';
  }
  return text;
}

$(function() {
  var parameters =  $.param({
    method: "flickr.photos.search",
    api_key: apiKey,
    text: "cat", // 検索テキスト
    sort: "interestingness-desc", // 興味深さ順
    per_page: 5, // 取得件数
    license: "4", // Creative Commons Attributionのみ
    extras: "owner_name,license", // 追加で取得する情報
    format: "json", // レスポンスをJSON形式に
    nojsoncallback: 1, // レスポンスの先頭に関数呼び出しを含めない
  });
   var pars =  $.param({
    method: "flickr.photos.search",
    api_key: apiKey,
    text: "dog", // 検索テキスト
    sort: "interestingness-desc", // 興味深さ順
    per_page: 5, // 取得件数
    license: "4", // Creative Commons Attributionのみ
    extras: "owner_name,license", // 追加で取得する情報
    format: "json", // レスポンスをJSON形式に
    nojsoncallback: 1, // レスポンスの先頭に関数呼び出しを含めない
  });
  var flickr_url = "https://api.flickr.com/services/rest/?" + parameters;
  var flickr_url2 = "https://api.flickr.com/services/rest/?" + pars;
  
  console.log(flickr_url);
  console.log(flickr_url2);
  // 猫の画像を検索して表示
  //var flickr_url = "https://api.flickr.com/services/rest/?" + pars;
  //console.log(flickr_url);
  $.getJSON(flickr_url, function(data){
    console.log(data);
    if (data.stat == "ok") {
      // 空の<div>を作る
      var $div = $("<div>");

      // ヒット件数
      $div.append("<div>" + data.photos.total + " photos in total</div>");

      for (var i = 0; i < data.photos.photo.length; i++) {
        var photo = data.photos.photo[i];
        var photoText = getFlickrText(photo);

        // $divに <a href="..." ...><img src="..." ...></a> を追加する
        $div.append(
          $("<a>", {
            href: getFlickrPageURL(photo),
            "class": "flickr-link",
            "target": "_blank",     // リンクを新規タブで開く
            "data-toggle": "tooltip",
            "data-placement": "bottom",
            title: photoText,
          }).append($("<img>", {
            src: getFlickrImageURL(photo, "q"),
            width: 150,
            height: 150,
            alt: photoText,
          }))
        );
      }
      // $divを#mainに追加する
      $div.appendTo("#main");

      // BootstrapのTooltipを適用
      $("[data-toggle='tooltip']").tooltip();
    }
  });
   $.getJSON(flickr_url2, function(data){
    console.log(data);
    if (data.stat == "ok") {
      // 空の<div>を作る
      var $div = $("<div>");

      // ヒット件数
      $div.append();

      for (var i = 0; i < data.photos.photo.length; i++) {
        var photo = data.photos.photo[i];
        var photoText = getFlickrText(photo);

        // $divに <a href="..." ...><img src="..." ...></a> を追加する
        $div.append(
          $("<a>", {
            href: getFlickrPageURL(photo),
            "class": "flickr-link",
            "target": "_blank",     // リンクを新規タブで開く
            "data-toggle": "tooltip",
            "data-placement": "bottom",
            title: photoText,
          }).append($("<img>", {
            src: getFlickrImageURL(photo, "q"),
            width: 150,
            height: 150,
            alt: photoText,
          }))
        );
      }
      // $divを#mainに追加する
      $div.appendTo("#main");

      // BootstrapのTooltipを適用
      $("[data-toggle='tooltip']").tooltip();
    }
  });
});
