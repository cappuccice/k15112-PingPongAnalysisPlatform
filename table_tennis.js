

var player1_id = "PlayerA";
var player2_id = "PlayerB";
$("#service").val(player1_id);

var s_style = "";
var s_pos = "0";
var s_racket = "";

var receive ="";
var r_style = "";
var r_pos = "";
var r_racket = "";
var winner = "";
var playerCount = 1;
var modecount = 0;

$("#s_pos").val("0");
$("#r_pos").val("0");
$("#s_racketColor").css("background-color","#FF9900");
$("#s_styleColor").css("background-color","#FF9900");

document.getElementById("PPAP").src = "PPAPS.jpg";
document.getElementById("s_pos").src = "./img/" + $("#s_pos").val() + ".png";
document.getElementById("r_pos").src = "./img/" + $("#r_pos").val() + ".png";

$(function(){
    $('html').keyup(function(e){
        switch(e.which){
            case 13: // Enter
              if(modecount == 0){
                $("#s_racketColor").css("background-color","#006666");
                $("#s_styleColor").css("background-color","#006666");
                $("#s_posColor").css("background-color","#FF9900");
                  modecount++;
              }else if(modecount == 1){
                $("#s_posColor").css("background-color","#006666");
                $("#r_racketColor").css("background-color","#FF9900");
                $("#r_styleColor").css("background-color","#FF9900");
                  modecount++;
              }else if(modecount == 2){
                $("#r_racketColor").css("background-color","#006666");
                $("#r_styleColor").css("background-color","#006666");
                $("#r_posColor").css("background-color","#FF9900");
                  modecount++;
              }else{
                $("#r_posColor").css("background-color","#006666");
                $("#s_racketColor").css("background-color","#FF9900");
                $("#s_styleColor").css("background-color","#FF9900");
                $('#table_body').append(
                  $('<tr>').append(
                    $('<td width="30">').append($("#service").val()),
                    $('<td width="10">').append($("#s_racket").val()),
                    $('<td width="100">').append($("#s_style").val()),
                    $('<td width="50">').append('<img src="./img/' + $("#s_pos").val() + '.png" width="50" height="38">'),
                    //$("#s_pos").clone(true).insertAfter(table_body),
                    $('<td width="10">').append($("#r_racket").val()),
                    $('<td width="100">').append($("#r_style").val()),
                    $('<td width="50">').append('<img src="./img/' + $("#r_pos").val() + '.png" width="50" height="38">'),
                    //$("#r_pos").clone(true).insertAfter(table_body),
                  )
                )
                $("#service").val("");
                $("#s_style").val("");
                $("#s_pos").val("0");
                $("#s_racket").val("");
                $("#r_style").val("");
                $("#r_pos").val("0");
                $("#r_racket").val("");
                modecount = 0;
                if(playerCount == 0){
                  playerCount = 1;
                  $("#service").val(player1_id);
                }else{
                  playerCount = 0;
                  $("#service").val(player2_id);
                }
                document.getElementById("s_pos").src = "./img/0.png";
                document.getElementById("r_pos").src = "./img/0.png";
              }

            break;

            case 49: //1
                if(modecount == 0){
                  $("#s_style").val("横回転");
                }else if(modecount == 1){
                  $("#s_pos").val("1");
                  document.getElementById("s_pos").src = "./img/" + $("#s_pos").val() + ".png";
                }else if(modecount == 2){
                  $("#r_style").val("チキータ");
                }else{
                  $("#r_pos").val("1");
                  document.getElementById("r_pos").src = "./img/" + $("#r_pos").val() + ".png";
                }
            break;
            case 50: //2
              if(modecount == 0){
                $("#s_style").val("縦回転");
              }else if(modecount == 1){
                $("#s_pos").val("2");
                document.getElementById("s_pos").src = "./img/" + $("#s_pos").val() + ".png";
              }else if(modecount == 2){
                $("#r_style").val("フリック");
              }else{
                $("#r_pos").val("2");
                document.getElementById("r_pos").src = "./img/" + $("#r_pos").val() + ".png";
              }
            break;
            case 51: //3
              if(modecount == 0){
                $("#s_style").val("yg");
              }else if(modecount == 1){
                $("#s_pos").val("3");
                document.getElementById("s_pos").src = "./img/" + $("#s_pos").val() + ".png";
              }else if(modecount == 2){
                $("#r_style").val("ストップ");
              }else{
                $("#r_pos").val("3");
                document.getElementById("r_pos").src = "./img/" + $("#r_pos").val() + ".png";
              }
            break;
            case 52: //4
              if(modecount == 0){
                $("#s_style").val("バックハ");
              }else if(modecount == 1){
                $("#s_pos").val("4");
                document.getElementById("s_pos").src = "./img/" + $("#s_pos").val() + ".png";
              }else if(modecount == 2){
                $("#r_style").val("ツッツキ");
              }else{
                $("#r_pos").val("4");
                document.getElementById("r_pos").src = "./img/" + $("#r_pos").val() + ".png";
              }
            break;
            case 53: //5
              if(modecount == 0){
                $("#s_style").val("しゃがみ");
              }else if(modecount == 1){
                $("#s_pos").val("5");
                document.getElementById("s_pos").src = "./img/" + $("#s_pos").val() + ".png";
              }else if(modecount == 2){
                $("#r_style").val("フロウ");
              }else{
                $("#r_pos").val("5");
                document.getElementById("r_pos").src = "./img/" + $("#r_pos").val() + ".png";
              }
            break;
            case 54: //6
              if(modecount == 0){
                $("#s_style").val("");
              }else if(modecount == 1){
                $("#s_pos").val("6");
                document.getElementById("s_pos").src = "./img/" + $("#s_pos").val() + ".png";
              }else if(modecount == 2){
                $("#r_style").val("ドライブ強");
              }else{
                $("#r_pos").val("6");
                document.getElementById("r_pos").src = "./img/" + $("#r_pos").val() + ".png";
              }
            break;
            case 55: //7
              if(modecount == 0){
                $("#s_style").val("");
              }else if(modecount == 1){
                $("#s_pos").val("7");
                document.getElementById("s_pos").src = "./img/" + $("#s_pos").val() + ".png";
              }else if(modecount == 2){
                $("#r_style").val("ドライブ弱");
              }else{
                $("#r_pos").val("7");
                document.getElementById("r_pos").src = "./img/" + $("#r_pos").val() + ".png";
              }
            break;
            case 56: //8
              if(modecount == 0){
                $("#s_style").val("");
              }else if(modecount == 1){
                $("#s_pos").val("8");
                document.getElementById("s_pos").src = "./img/" + $("#s_pos").val() + ".png";
              }else if(modecount == 2){
                $("#r_style").val("カット");
              }else{
                $("#r_pos").val("8");
                document.getElementById("r_pos").src = "./img/" + $("#r_pos").val() + ".png";
              }
            break;
            case 57: //9
              if(modecount == 0){
                $("#s_style").val("");
              }else if(modecount == 1){
                $("#s_pos").val("9");
                document.getElementById("s_pos").src = "./img/" + $("#s_pos").val() + ".png";
              }else if(modecount == 2){
                $("#r_style").val("逆チキ");
              }else{
                $("#r_pos").val("9");
                document.getElementById("r_pos").src = "./img/" + $("#r_pos").val() + ".png";
              }
            break;
            case 48: //0
              if(modecount == 0){
                $("#s_style").val("レット");
              }else if(modecount == 1){
                $("#s_pos").val("0");
                document.getElementById("s_pos").src = "./img/" + $("#s_pos").val() + ".png";
              }else if(modecount == 2){
                $("#r_style").val("レット");
              }else{
                $("#r_pos").val("0");
                document.getElementById("r_pos").src = "./img/" + $("#r_pos").val() + ".png";
              }
            break;

            case 109: //-
              if(modecount == 0 || modecount == 1){
                $("#s_racket").val("表");
              }else{
                $("#r_racket").val("表");
              }
            break;

            case 107: //+
              if(modecount == 0 || modecount == 1){
                $("#s_racket").val("裏");
              }else{
                $("#r_racket").val("裏");
              }
            break;

            case 187: //=
              $("#table_body").clone(true).insertAfter(saveTable);
              $("#table_body").remove();

              var i = 0;
              function addInput(){
                i++;
                $("#table_body").    //#table_bodyを取得
                  clone(true).   //上で取得した中身をコピー
                    find('.score').  //そのコピーした中身のdetailとついている要素を取得
                      attr('id',i).  //上で取得した要素の中のidをiとする
                        appendTo("#roots");  //#rootsに追加
              }
              $("#td").css("margin","2px");
            break;

        }
    });
});

function movieChange(){
  //inputフィールドのテキスト内容を文字列として取得
  var str = document.getElementById("url").value

  //下の関数が起動
  //str ->上の文字列(埋め込みリンク)
  //"\"" ->"で文字列を分割する
  var youtube_url = splitString(str,"\"");

  console.log(youtube_url);

  //埋め込みリンクをidがmovieのsrc(ソース)に適応
  document.getElementById("movie_src").src = youtube_url;
}

//渡された文字列を分割する関数
function splitString (stringToSplit,separator) {
  //splitを使うと、指定した文字で分割できる
  //今回の場合は"
  var arrayOfStrings = stringToSplit.split(separator);

  //分割した文字列は配列に入る
  //それを表示している
  for (var i = 0; i < arrayOfStrings.length; i++) {
    console.log(i + arrayOfStrings[i]);;
  }
  //分割した文字列の配列5番目にurlが入っているのでリターン
  return arrayOfStrings[5];
}
