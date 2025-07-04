<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Composer autoloader
require 'vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

header('Content-Type: application/json');

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = $_ENV['SMTP_HOST'];
    $mail->SMTPAuth = true;
    $mail->Username = $_ENV['SMTP_USER'];
    $mail->Password = $_ENV['SMTP_PASS'];
    $mail->SMTPSecure = $_ENV['SMTP_SECURE'];
    $mail->Port = $_ENV['SMTP_PORT'];

    // Sender
    $mail->setFrom($_ENV['SMTP_FROM_ADDRESS'], $_ENV['SMTP_FROM_NAME']);

    // Recipients
    $mail->addAddress($_ENV['SMTP_TO_1'], $_ENV['SMTP_TO_1_NAME']);
    $mail->addAddress($_ENV['SMTP_TO_2'], $_ENV['SMTP_TO_2_NAME']);

    // BCC
    $mail->addBCC($_ENV['SMTP_BCC_1'], $_ENV['SMTP_BCC_1_NAME']);


    // Collect form data safely
    $name = htmlspecialchars($_POST['from_name'] ?? '');
    $email = htmlspecialchars($_POST['reply_to'] ?? '');
    $subject = htmlspecialchars($_POST['subject'] ?? '');
    $contact = htmlspecialchars($_POST['contact'] ?? '');
    $message = htmlspecialchars($_POST['message'] ?? '');

    if (!empty($email)) {
        $mail->addReplyTo($email, $name);
    }

    $mail->isHTML(true);
    $mail->Subject = "New Contact Form Submission: $subject";
    $mail->Body = "
        <h2>New Message from Website</h2>
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