<?php

/* First mail to Me about the query */
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "kr.shubham997@gmail.com";
$subject = "Photogallary | Message from " . $name;
$message =
    "Message details: <br>
Name: <b>" . $name . " </b><br>
EMail: <b>" . $email . " </b><br>
Mesaage:<br><p>" . $message . "</p>";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: <' . $email . '>' . "\r\n";

mail($to, $subject, $message, $headers);

/* Then reback the message to the sender about the sent mail */
$to = $_POST['from_email'];
$subject = "My Photo Gallary | Thanks for connecting with us";

$message = "
<center><h1>Thanks for connecting with us!</h1>
<h3>Our dedicated team is on the way to reach out to you as soon as possible.<br>I hope you liked my little photo gallary. Again thanks for reaching out to us.</h3>
<p>Please donot replay back to this mail. This is an auto-generated email.</p>
";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: <kr.shubham997@gmail.com>' . "\r\n";

mail($to, $subject, $message, $headers);

echo 1;
?>