
<?php
$data = $_POST['data'];
$rig        = $data['rig'];
$name       = $data['name'];
$from       = $data['email'];
$phone      = $data['phone'];
$address    = $data['address'];
$subject    = "Order: " . $name . " - Booked: " . $rig;
$message    = "RIG: " . $rig . "\nName: " . $name . "\nEmail: " . $from . "\nPhone: " . $phone . "\nAddress: " . $address;
$to         = 'shubhamtatvamasi@gmail.com';
$headers = "MIME-Version: 1.0";
$headers .= "Content-type: text/plain; charset=iso-8859-1";
$headers .= "From: {$name} <{$from}>";
$headers .= "Reply-To: <{$from}>";
$headers .= "Subject: {$subject}";
$headers .= "X-Mailer: PHP/".phpversion();

$subject2    = "Your StudioMining.com Booking Confirmation!";
$message2    = "Hi " . $name . "\n\nThank you for your Booking!\n\n We have successfully booked your " . $rig . "\n\nWe will contact you soon." ;


if(mail($to, $subject, $message, $headers) && mail($from, $subject2, $message2, $headers)){
    echo 1;
}
else{
    echo 0;
}