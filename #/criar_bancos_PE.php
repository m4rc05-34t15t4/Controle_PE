<?php

//Cria a conexão com o bd
$con_string = "host=10.46.136.22 port=5432 user=postgres password=admin";//dbname=Controle_PE
$conexao = pg_connect($con_string);
if(!$conexao){
    echo "Erro ao acessar banco de dados!";
    exit;
}
else{

   $lista = ["PE-1444-1-NE",
"PE-1444-1-NO",
"PE-1444-1-SE",
"PE-1444-1-SO",
"PE-1444-2-NE",
"PE-1444-2-NO",
"PE-1444-2-SE",
"PE-1444-2-SO",
"PE-1444-3-NE",
"PE-1444-3-NO",
"PE-1444-3-SE",
"PE-1444-3-SO",
"PE-1444-4-NE",
"PE-1444-4-NO",
"PE-1444-4-SE",
"PE-1444-4-SO",
"PE-1445-2-NO",
"PE-1448-4-NE",
"PE-1449-1-NE",
"PE-1449-1-NO",
"PE-1449-1-SE",
"PE-1449-1-SO",
"PE-1449-2-NE",
"PE-1449-2-NO",
"PE-1449-2-SE",
"PE-1449-2-SO",
"PE-1449-3-NE",
"PE-1449-3-NO",
"PE-1449-3-SE",
"PE-1449-4-NE",
"PE-1449-4-NO",
"PE-1449-4-SO",
"PE-1449-A-1-NO",
"PE-1520-1-NE",
"PE-1520-1-NO",
"PE-1520-1-SE",
"PE-1520-2-NE",
"PE-1520-2-NO",
"PE-1520-2-SE",
"PE-1520-2-SO",
"PE-1520-3-NE",
"PE-1520-4-NO",
"PE-1521-1-NE",
"PE-1521-1-NO",
"PE-1521-1-SO",
"PE-1521-2-NE",
"PE-1521-2-NO"];

    for($i=0; $i < count($lista); $i++){
        //$sql = 'CREATE DATABASE "'.$lista[$i].'";';
        $sql = 'DROP DATABASE "'.$lista[$i].'";';
        $query = pg_query($conexao,$sql);
        if($query) echo $query." ".$lista[$i];
        else echo "Erro ".$lista[$i];
    }
}

?>