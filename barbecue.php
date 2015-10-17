<?php
	header('Content-type: application/json');
	$barbecue = '{"data": {"ishetvandaagbarbecueweer": "ja"}}';
	
	$barbecueJson = json_decode($barbecue);
	//var_dump($barbecueJson);
	//print $barbecue;
	print json_encode($barbecueJson);
?>