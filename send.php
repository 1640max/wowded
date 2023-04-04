<?php

function TelegramSend($message)
{
  $GETURL = 'https://api.telegram.org/bot000000000:password/sendMessage?chat_id=00000&parse_mode=HTML&text=';
	
	$message = 'Заявка Вау, дед!%0AIP: '.$_SERVER['REMOTE_ADDR'].'%0A———%0A'.$message;

	fopen($GETURL.$message, "r");
}




$message = '<b>Тип:</b> '.$_POST['order-type'].'%0A<b>Актёров:</b> '.count($_POST['characters']).'%0A'.$_POST['date'].'%0A<b>Цена:</b> '.$_POST['price'];



$tel = $_POST['lead-input-tel'];

$pattern = '/[^0-9 ()+-]/';
$replacement = '';
$filteredTel = preg_replace($pattern, $replacement, $tel);

if ($filteredTel == $tel and $filteredTel != "") {
  $message .= '%0A———%0A'.$filteredTel;
	TelegramSend($message);
}
else 
{
	/* Если не равны, значит кто-то хакерит */
	http_response_code(400);
}

?>