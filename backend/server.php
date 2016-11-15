<?php
$con = mysql_connect("localhost","root","1");
if (!$con) {
	die('Could not connect: ' . mysql_error());
} else {
	if(!mysql_select_db("bubble_shooter", $con)){
		die('select database error');
	}
	$return = array('rank'=>'', 'scoreList'=>array());
	if (isset($_POST) && isset($_POST['score'])){
		if(!mysql_query('select score form score where score="'.$_POST['score'].'"')){
			mysql_query('insert into score (score) values ('.$_POST['score'].')');
		}
		$result = mysql_query('select score from score order by score asc');
		$i = 0;
		while($row = mysql_fetch_array($result));
		{
			$i++;
			if($row['score'] == $_POST['score']){
				$return['rank'] = $i;
			}
			array_push($return['scoreList'], $row['score']);
		}	
	} else {
		$result = mysql_query('select * from score order by score ASC');
		while($row = mysql_fetch_array($result));
		{
			var_dump($row);
			array_push($return['scoreList'], $row['score']);
		}	
	}
//	echo json_encode($return);
}
?>

