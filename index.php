<?php
	header('Content-Type:application/json; charset=utf-8');
	include('./simple_html_dom.php');
	$html = file_get_html('http://www.gavo.t.u-tokyo.ac.jp/ojad/search/index/sortprefix:accent/narabi1:kata_asc/narabi2:accent_asc/narabi3:mola_asc/yure:visible/curve:invisible/details:invisible/limit:20/word:'. $_GET['keyword']);
	$id = $html->find('#word_table', 0)->find('tr', 2)->id;
	$id = explode("word_",$id)[1];
    $wordArr = array();
	foreach($html->find('tr#word_' .$id) as $e) {
		foreach($e->find('.accented_word') as $w)
			array_push($wordArr, $w->plaintext);

	}
	
	echo json_encode(array("words"=>$wordArr, "index"=> $id));
   
?>
