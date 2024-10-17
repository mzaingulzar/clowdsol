<?php
$post = file_get_contents('php://input');
$post_decoded = json_decode($post);
$to = "Info@clowdsol.com";
$subject = "Contact Form of ClowdSol";
$txt = "Clinet Name: ".$post_decoded->name.'     ';
$txt .= "Clinet Email: ".$post_decoded->email.'     ';
if(!empty($post_decoded->phone)){
	$txt .= "Clinet Phone: ".$post_decoded->phone.'     ';
}
$txt .= "Clinet Message: ".$post_decoded->message.'     ';
$headers = "From: webmaster@clowdsol.com" . "\r\n" .
"CC: zain@clowdsol.com";
mail($to,$subject,$txt,$headers);
echo 'success';
?>