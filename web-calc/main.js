function getNum1(num1) {
  var i = parseFloat(document.getElementById("num1").value)
  return i// num1の数値を戻り値(出力)としてreturnする処理を書いてください
}

function getNum2(num2) {
  var j = parseFloat(document.getElementById("num2").value)
  return j// num2の数値を戻り値(出力)としてreturnする処理を書いてください
}

function showResult(num) {
  document.getElementById("box").innerHTML = num;// <div id="box">にnumを表示する処理を書いてください
}

document.getElementById("add-button").onclick = function() {
  var result = getNum1() + getNum2();
  showResult(result);
};



document.getElementById("sub-button").onclick = function() {
  var result = getNum1() - getNum2();
  showResult(result);
};

document.getElementById("mul-button").onclick = function() {
  var result = getNum1() * getNum2();
  showResult(result);
};

document.getElementById("div-button").onclick = function() {
  var result = getNum1() / getNum2();
  showResult(result);
};
