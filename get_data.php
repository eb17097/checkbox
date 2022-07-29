<?php
// $novadi=$_REQUEST['novadi'];
// $meklet=$_REQUEST['meklet'];
// echo $novadi;
// echo $meklet;

$data = $_POST['data'];
// $data = json_encode($data);
echo $data;

file_put_contents('text.json', ','.$data, FILE_APPEND);


?>