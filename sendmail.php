<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\PHPMailer;

require 'phpmailer/src/Exeption.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->Charset = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language');
$mail->IsHTML(true);

//От кого
$mail->setFrom('shturval222@gmail.com', 'проверка');
//Кому отправить
$mail->addAdress('shturval222@gmail.com','demon@332@gmail.com');
//Тема письма
$mail->=Subject = 'Проверка'

//Тело письма
$body = '<h1>Письмо с сайта cool dog</h1>';
if(trim(empty($_POST['name']))){
$body.='<p><strong>Имя:</strong> ' .$_POST['name'].'</p>';
}
if(trim(empty($_POST['phone']))){
$body.='<p><strong>Телефон:</strong> ' .$_POST['phone'].'</p>';
}
if(trim(empty($_POST['email']))){
$body.='<p><strong>E-mail:</strong> ' .$_POST['email'].'</p>';
}



$mail->body = $body;

//Отправка
if(!$mail=>send()){
$message = 'Ошибка'
} else{
$messsage = 'Данные отправленны!'
}
$rsponse= ['message' => $message] ;

header('Content-type: application/json');
echo json_encode($response);
?>