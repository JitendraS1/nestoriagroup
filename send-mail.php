<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Composer autoloader
require 'vendor/autoload.php';

$mail = new PHPMailer(true);

// Tell the browser to expect JSON
header('Content-Type: application/json');

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';       // Gmail SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'jitendrabhadoriya.nestoria@gmail.com'; // Your Gmail
    $mail->Password = 'nbjm gjut ygrr buqe';              // Your Gmail App Password
    $mail->SMTPSecure = 'tls';                 // TLS encryption
    $mail->Port = 587;                   // TLS port

    $mail->setFrom('jitendrabhadoriya.nestoria@gmail.com', 'Nestoria Group Website');
    $mail->addAddress('info@nestoriagroup.com', 'Nestoria Group Admin');

    // Collect form data safely
    $name    = htmlspecialchars($_POST['from_name'] ?? '');
    $email   = htmlspecialchars($_POST['reply_to'] ?? '');
    $subject = htmlspecialchars($_POST['subject'] ?? '');
    $contact = htmlspecialchars($_POST['contact'] ?? '');
    $message = htmlspecialchars($_POST['message'] ?? '');

    if (!empty($email)) {
        $mail->addReplyTo($email, $name);
    }

    $mail->isHTML(true);
    $mail->Subject = "New Contact Form Submission: $subject";
    $mail->Body    = "
        <h2>New Message from nestoriagroup.com</h2>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Contact:</strong> {$contact}</p>
        <p><strong>Subject:</strong> {$subject}</p>
        <p><strong>Message:</strong><br>{$message}</p>
    ";
    $mail->AltBody = "Name: $name\nEmail: $email\nContact: $contact\nSubject: $subject\nMessage:\n$message";

    $mail->send();

    // Respond with success JSON
    echo json_encode(["success" => true]);

} catch (Exception $e) {
    // Respond with error JSON
    echo json_encode([
        "success" => false,
        "error" => "Mailer Error: {$mail->ErrorInfo}"
    ]);
}
?>
