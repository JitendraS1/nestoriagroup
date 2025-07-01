<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader (if using Composer)
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

// Create a new PHPMailer instance
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com'; // SMTP server
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@nestoriagroup.com';      // SMTP username
    $mail->Password   = '';       // SMTP password
    $mail->SMTPSecure = 'tls';                 // or 'ssl'
    $mail->Port       = 587;                   // 465 for ssl, 587 for tls

    // Recipients
    $mail->setFrom('your@email.com', 'Nestoria Group Website');
    $mail->addAddress('receiver@email.com', 'Admin'); // Where the form info should go

    // Form data
    $name    = $_POST['from_name'] ?? '';
    $email   = $_POST['reply_to'] ?? '';
    $subject = $_POST['subject'] ?? '';
    $contact = $_POST['contact'] ?? '';
    $message = $_POST['message'] ?? '';

    // Email content
    $mail->isHTML(true);
    $mail->Subject = "New Contact Form Submission: $subject";
    $mail->Body    = "
        <h2>New Message from Website Contact Form</h2>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Contact:</strong> {$contact}</p>
        <p><strong>Subject:</strong> {$subject}</p>
        <p><strong>Message:</strong><br>{$message}</p>
    ";
    $mail->AltBody = "Name: $name\nEmail: $email\nContact: $contact\nSubject: $subject\nMessage:\n$message";

    $mail->send();
    echo "Message has been sent successfully!";
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
