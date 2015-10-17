<?php
	header('Content-type: application/json');
	$barbecue = '{"data": {"ishetvandaagbarbecueweer": "ja"}}';
	
	$barbecueJson = json_decode($barbecue);
	//var_dump($barbecueJson);
	//print $barbecue;
	$callback = $_GET[callback];
	echo $callback . '(' . json_encode($barbecueJson) . ')';
?>