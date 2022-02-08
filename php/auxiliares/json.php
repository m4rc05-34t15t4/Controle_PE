<?php

include_once "../conexao.php";

$sql = "SELECT * FROM fases order by codigo";
$query = pg_query($conexao,$sql);
if($query) {
    $row = pg_fetch_all($query);
    $json = [];
    for($i = 0; $i < count($row); $i++){
        $json[$row[$i]["codigo"]] = $row[$i]["descricao"];
    }
    header('Content-Type: application/json');
    echo json_encode($json);
}
else{
    echo "Erro: tente novamente"; 
}
?>