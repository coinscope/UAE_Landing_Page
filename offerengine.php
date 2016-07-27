<?php

$EmailFrom = "Alwasit Alnnazih Site";
$EmailTo = "alwasitalnnazih@gmail.com";
$Subject = "Location finder request";
$Email = Trim(stripslashes($_POST['email-special'])); 

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";

$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "The customer wants to receive the Location Finder.";


// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page 
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=thankyou.html\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
}
?>