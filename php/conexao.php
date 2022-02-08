<?php

//Cria a conexão com o bd
$con_string = "host=localhost port=5432 dbname=Controle_PE user=postgres password=admin";
$conexao = pg_connect($con_string);
if(!$conexao){
    echo "Erro ao acessar banco de dados!";
    exit;
}

?>