<?php

// Define some constants
define( "RECIPIENT_NAME", "John Doe" );
define( "RECIPIENT_EMAIL", "ashik.mdashikurrahman@gmail.com" );

// Read the form values
$success = false;
$name = isset( $_POST['name'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['name'] ) : "";
$fname = isset( $_POST['fname'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['fname'] ) : "";
$lname = isset( $_POST['lname'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['lname'] ) : "";
$senderEmail = isset( $_POST['email'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['email'] ) : "";
$phone = isset( $_POST['phone'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['phone'] ) : "";
$zip = isset( $_POST['zip'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['zip'] ) : "";
$role = isset( $_POST['role'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['role'] ) : "";
$client_code = isset( $_POST['client_code'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['client_code'] ) : "";
$company_name = isset( $_POST['company_name'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['company_name'] ) : "";
$services = isset( $_POST['services'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['services'] ) : "";
$discussion = isset( $_POST['discussion'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['discussion'] ) : "";
$subject = isset( $_POST['subject'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['subject'] ) : "";
$website = isset( $_POST['website'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['website'] ) : "";
$message = isset( $_POST['message'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['message'] ) : "";

if ($name) {
	$name = $name;
}else {
	$name = $fname . ' ' . $lname;
}

$mail_subject = 'A contact request send by ' . $name;

$body = 'Name: '. $name . "\r\n";
$body .= 'Email: '. $senderEmail . "\r\n";


if ($phone) {$body .= 'Phone: '. $phone . "\r\n"; }
if ($services) {$body .= 'services: '. $services . "\r\n"; }
if ($subject) {$body .= 'Subject: '. $subject . "\r\n"; }
if ($website) {$body .= 'Website: '. $website . "\r\n"; }
if ($zip) {$body .= 'zip: '. $zip . "\r\n"; }
if ($role) {$body .= 'role: '. $role . "\r\n"; }
if ($client_code) {$body .= 'Client Code: '. $client_code . "\r\n"; }
if ($company_name) {$body .= 'Company Name: '. $company_name . "\r\n"; }
if ($discussion) {$body .= 'Discussion: '. $discussion . "\r\n"; }

$body .= 'message: ' . "\r\n" . $message;



// If all values exist, send the email
if ( $name && $senderEmail && $message ) {
  $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
  $headers = "From: " . $name . " <" . $senderEmail . ">";  
  $success = mail( $recipient, $mail_subject, $body, $headers );
  echo "<div class='inner success'><p class='success'>Thanks for contacting us. We will contact you ASAP!</p></div><!-- /.inner -->";
}else {
	echo "<div class='inner error'><p class='error'>Something went wrong. Please try again.</p></div><!-- /.inner -->";
}

?>