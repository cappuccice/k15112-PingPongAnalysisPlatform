//仮
document.getElementById("PPAP").src = "PPAPS.jpg";

var player1_id = "";
var player2_id = "";
//var let = "";
var service = "";
var s_style = "";
var s_pos = "";
var s_racket = "";

var receive ="";
var r_style = "";
var r_pos = "";
var r_racket = "";
var winner = "";
var playerCount = 1;
var modecount = 0;

$(function(){
    $('html').keyup(function(e){
        switch(e.which){
            case 13: // Enter
              // if(serviceChange == 0 || serviceChange == 1){
              //   player = "選手A" + AService;
              //   AService++;
              //   serviceChange++;
              //   changeCount = 0;
              // }else{
              //   player = "選手B" + BService;
              //   BService++;
              //   changeCount++;
              //   if(changeCount == 2){
              //     serviceChange = 0;
              //   }
              // }

              if(modecount == 0){
                  modecount++;
                  console.log("1");
              }else if(modecount == 1){
                  modecount++;
                  console.log("2");
              }else if(modecount == 2){
                  modecount++;
                  console.log("3");
              }else{
                  console.log("4");

                $("#player").val(player);
                $('#table_body').append(
                  $('<tr>').append(
                    $('<td>').append(player),
                    $('<td>').append(s_style),
                    $('<td>').append(service),
                    $('<td>').append(s_pos),
                    $('<td>').append(s_racket),
                    $('<td>').append(receive),
                    $('<td>').append(r_style),
                    $('<td>').append(r_pos),
                    $('<td>').append(r_racket),
                    $('<td>').append(winner)
                  )
                )
                $("#service").val("");
                $("#s_style").val("");
                $("#s_pos").val("");
                $("#s_racket").val("");
                $("#receive").val("");
                $("#r_style").val("");
                $("#r_pos").val("");
                $("#r_racket").val("");
                $("#winner").val("");
                modecount = 0;
              }
            break;

            // case 9: // Tab
            //   larryCount = larryCount + 1;
            //   $('tr:last').append(
            //       $('<td>').append(receive),
            //       $('<td>').append(side),
            //       $('<td>').append(rform),
            //       $('<td>').append(rcourse),
            //   )
            //   if(headCount < larryCount){
            //     headCount = larryCount;
            //     var li = "<th>" + headCount + "打球目</th>"
            //     //$('oppai5').text(li);               )
            //     $('#oppai').append(
            //       $('<th colspan="4">').append(li)
            //     )
            //     $('#oppai2').append(
            //       $('<th>').append("<th>打球位置</th>"),
            //       $('<th>').append("<th>ラケット面</th>"),
            //       $('<th>').append("<th>打法</th>"),
            //       $('<th>').append("<th>コース</th>"),
            //     )
            //     /*$('#oppai3').append(
            //       $('<th>').append("<th><input type="text" size="8" maxlength="8" name="receive" value=""></th>"),
            //       $('<th>').append("<th><input type="text" size="10" maxlength="10" name="side" value=""></th>"),
            //       $('<th>').append("<th><input type="text" size="3" maxlength="3" name="form" value=""></th>"),
            //       $('<th>').append("<th><input type="text" size="6" maxlength="6" name="course" value=""></th>"),
            //     )*/
            //   }
            // break;
            //キー入力の実装
            case 49: //1
                if(modecount == 0){
                  $("#s_style").val("0");
                }else if(modecount == 1){
                  $("#s_pos").val("0");
                }else if(modecount == 2){
                  $("#r_style").val("0");
                }else{
                  $("#r_pos").val("0");
                }
            break;
            case 50: //2
              if(modecount == 0){
                $("#s_style").val("1");
              }else if(modecount == 1){
                $("#s_pos").val("1");
              }else if(modecount == 2){
                $("#r_style").val("1");
              }else{
                $("#r_pos").val("1");
              }
            break;
            case 51: //3
              if(modecount == 0){
                $("#s_style").val("2");
              }else if(modecount == 1){
                $("#s_pos").val("2");
              }else if(modecount == 2){
                $("#r_style").val("2");
              }else{
                $("#r_pos").val("2");
              }
            break;
            case 52: //4
              if(modecount == 0){
                $("#s_style").val("3");
              }else if(modecount == 1){
                $("#s_pos").val("3");
              }else if(modecount == 2){
                $("#r_style").val("3");
              }else{
                $("#r_pos").val("3");
              }
            break;
            case 53: //5
              if(modecount == 0){
                $("#s_style").val("4");
              }else if(modecount == 1){
                $("#s_pos").val("4");
              }else if(modecount == 2){
                $("#r_style").val("4");
              }else{
                $("#r_pos").val("4");
              }
            break;
            case 54: //6
              if(modecount == 0){
                $("#s_style").val("5");
              }else if(modecount == 1){
                $("#s_pos").val("5");
              }else if(modecount == 2){
                $("#r_style").val("5");
              }else{
                $("#r_pos").val("5");
              }
            break;
            case 55: //7
              if(modecount == 0){
                $("#s_style").val("6");
              }else if(modecount == 1){
                $("#s_pos").val("6");
              }else if(modecount == 2){
                $("#r_style").val("6");
              }else{
                $("#r_pos").val("6");
              }
            break;
            case 56: //8
              if(modecount == 0){
                $("#s_style").val("7");
              }else if(modecount == 1){
                $("#s_pos").val("7");
              }else if(modecount == 2){
                $("#r_style").val("7");
              }else{
                $("#r_pos").val("7");
              }
            break;
            case 57: //9
              if(modecount == 0){
                $("#s_style").val("8");
              }else if(modecount == 1){
                $("#s_pos").val("8");
              }else if(modecount == 2){
                $("#r_style").val("8");
              }else{
                $("#r_pos").val("8");
              }
            break;
            case 48: //0
              if(modecount == 0){
                $("#s_style").val("-1");
              }else if(modecount == 1){
                $("#s_pos").val("-1");
              }else if(modecount == 2){
                $("#r_style").val("-1");
              }else{
                $("#r_pos").val("-1");
              }
            break;

            // //トス高さ
            // case 69: //W
            //     $("#s_toss").val("0");
            // break;
            // case 68: //S
            //     $("#s_toss").val("1");
            // break;
            // case 67: //X
            //     $("#s_toss").val("2");
            // break;
            // //コース
            // case 83: //E
            //     $("#s_pos").val("0");
            // break;
            // case 87: //D
            //     $("#s_pos").val("3");
            // break;
            // case 88: //C
            //     $("#s_pos").val("6");
            // break;
            // case 83: //R
            //     $("#s_pos").val("1");
            // break;
            // case 87: //F
            //     $("#s_pos").val("4");
            // break;
            // case 88: //V
            //     $("#s_pos").val("7");
            // break;
            // case 83: //T
            //     $("#s_pos").val("2");
            // break;
            // case 87: //G
            //     $("#s_pos").val("5");
            // break;
            // case 88: //B
            //     $("#s_pos").val("8");
            // break;
            // //レシーブ
            // case 55: //7
            //     $("#r_style").val("0");
            // break;
            // case 56: //8
            //     $("#r_style").val("1");
            // break;
            // case 57: //9
            //     $("#r_style").val("2");
            // break;
            // case 48: //0
            //     $("#r_style").val("3");
            // break;
            // case 189: //-
            //     $("#r_style").val("4");
            // break;
            // case 89: //Y
            //     $("#r_style").val("5");
            // break;
            // case 85: //U
            //     $("#r_style").val("6");
            // break;
            // case 72: //H
            //     $("#r_style").val("7");
            // break;
            // case 78: //N
            //     $("#r_style").val("8");
            // break;
            // case 74: //J
            //     $("#r_racket").val("0");
            // break;
            // case 77: //M
            //     $("#r_racket").val("1");
            // break;
            // //コース
            // case 73: //I
            //     $("#r_pos").val("0");
            // break;
            // case 75: //K
            //     $("#r_pos").val("3");
            // break;
            // case 188: //<
            //     $("#r_pos").val("6");
            // break;
            // case 79: //O
            //     $("#r_pos").val("1");
            // break;
            // case 76: //L
            //     $("#r_pos").val("4");
            // break;
            // case 190: //>
            //     $("#r_pos").val("7");
            // break;
            // case 80: //P
            //     $("#r_pos").val("2");
            // break;
            // case 186: //;
            //     $("#r_pos").val("5");
            // break;
            // case 191: //?
            //     $("#r_pos").val("8");
            // break;
            // case 191: //alt
            //     $("#r_pos").val("-2");
            //     $("#r_style").val("-2");
            // break;
            // case 49: //1
            //     if($("#player").val() == "player2_id"){
            //       $("#player").val("player1_id");
            //     }else {
            //       $("#player").val("player2_id");
            //       playerCount = 1;
            //     }
            // break;

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

// 作成するテーブルの定義
 var r_end = 5;  // 行数
 var c_end = 4;  // 列数

/*------------------------------------------------
 jQuery で動的にテーブルを作成する
--------------------------------------------------*/
