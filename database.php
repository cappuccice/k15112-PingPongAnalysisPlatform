<?php

//データベースの設定
//DSN,username,password,database_name
$mysqli = new mysqli('localhost', 'root', 'root', 'Database_db');

if( $mysqli->connect_errno ) {
	echo $mysqli->connect_errno . ' : ' . $mysqli->connect_error;
}

$mysqli->set_charset('utf8');


//SQL文のテンプレートテンプレート
//
//$sql = 'SQL文';
//$res = $mysqli->query($sql);
//
//
//動作してるかチェックしたいときは
//
//sql = 'SQL文';
//if ($mysqli->query($sql)){
// 	echo "テーブルの作成成功<br>";
// } else {
// 	echo "テーブルの作成失敗<br>";
// }


//テーブルの作成
//もしテーブルがなかったら作成
// $sql = "CREATE TABLE IF NOT EXISTS test_serve (
// 	id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
// 	name VARCHAR(20),
// 	tech INT(11)
// ) engine=innodb default charset=utf8";
// $res = $mysqli->query($sql);
//
// $sql = "CREATE TABLE IF NOT EXISTS test_receive (
// 	id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
// 	name VARCHAR(20),
// 	tech INT(11)
// ) engine=innodb default charset=utf8";
// $res = $mysqli->query($sql);
//
// $sql = "CREATE TABLE IF NOT EXISTS test_fuck (
// 	id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
// 	name VARCHAR(20),
// 	tech INT(11)
// ) engine=innodb default charset=utf8";
//
// if ($mysqli->query($sql)){
// 	echo "テーブルの作成成功<br>";
// } else {
// 	echo "テーブルの作成失敗<br>";
// }
//
//
// //データの入力
// //テーブル内にデータがあるときは一番最後に追加されるよ
// $sql = "INSERT INTO test_fuck
// (name , tech ) VALUES ('test_name' , 1)";
// if ($mysqli->query($sql)){
// 	echo "データの入力成功<br>";
// } else {
// 	echo "データの入力失敗<br>";
// }
//
// $sql = "INSERT INTO test_fuck
//  (name , tech ) VALUES ('test_name1' , 2)";
// if ($mysqli->query($sql)){
// 	echo "データの入力成功<br>";
// } else {
// 	echo "データの入力失敗<br>";
// }
//
// //データの更新
// $sql = "UPDATE test_fuck SET
// 	name = 'tinko',
// 	tech = 5000
// WHERE id = 1";
// if ($mysqli->query($sql)){
// 	echo "データの更新成功<br>";
// } else {
// 	echo "データの更新失敗<br>";
// }
//
// //テーブルを表示
// $sql = "SELECT * FROM test_fuck";
// if ($res = $mysqli->query($sql)){
// 	while ($row = $res->fetch_assoc()) {
// 			echo $row[id]. $row[name]. $row[tech]. "<br>";
// 	}
// } else {
// 	echo "データの表示失敗<br>";
// }
//
// //一番最後に入ったデータを削除
// $sql = "DELETE FROM test_fuck ORDER BY id DESC LIMIT 1";
// if ($mysqli->query($sql)){
// 	echo "データの削除成功<br>";
// } else {
// 	echo "データの削除失敗<br>";
// }

$sql = "SELECT * FROM pp";
if ($res = $mysqli->query($sql)){
	while ($row = $res->fetch_assoc()) {
			echo $row[id]. $row[name]. $row[tech]. "<br>";
	}
} else {
}

//データベースを閉じる
$mysqli->close();

//javaからの値の引渡しはこうやればできるよ
//php側
// $let = isset($_POST['let']) ? $_POST['let'] : null;
// $fuck = isset($_POST['fuck']) ? $_POST['fuck'] : null;
// $manko = isset($_POST['manko']) ? $_POST['manko'] : null;
// $tinko = isset($_POST['tinko']) ? $_POST['tinko'] : null;
// print "javaからの値: ". $let. " ". $fuck. " ". $manko. " ". $tinko;
//
// ?>


<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title></title>
        <script>
						//ここの値がpostされるよ
            var let = 30;
						var fuck = 1;
						var manko = 2;
						var tinko = 3;

            function get_javascript_variable(){
                document.forms['input_form'].elements['let'].value = let;
								document.forms['input_form'].elements['fuck'].value = fuck;
								document.forms['input_form'].elements['manko'].value = manko;
								document.forms['input_form'].elements['tinko'].value = tinko;
            }

        </script>
    </head>
    <body>
        <form name ="input_form" action="index.php" method="post" onsubmit="get_javascript_variable()">
            <p>
                <input type="submit" value="javaの値の表示" />
                <input type="hidden" name="let" value="" />
								<input type="hidden" name="fuck" value="" />
								<input type="hidden" name="manko" value="" />
								<input type="hidden" name="tinko" value="" />
            </p>
        </form>


    </body>
</html>
