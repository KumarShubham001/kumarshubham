<?php

/* First mail to Me about the query */
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "kr.shubham997@gmail.com";
$subject = $name . " wants to say something!";
$message = `<p>Message sent on kumarshubham.in:</p></br><p><b>` . $message . `</b></p>`;

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: <' . $email . '>' . "\r\n";

mail($to, $subject, $message, $headers);

/* Then reback the message to the sender about the sent mail */
$message = "
<center><h1>Thank you for your valuable message!</h1>
<h3>Our dedicated team is on the way to reach out to you as soon as possible.<br>Thanks for reaching out to us.</h3>
<p>Please donot replay back to this mail. This is an auto-generated email.</p>
";

$to = $email;
$subject = "Regarding your message";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: <kr.shubham997@gmail.com>' . "\r\n";

mail($to, $subject, $message, $headers);