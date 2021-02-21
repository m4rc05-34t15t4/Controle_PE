<?php

    if(!isset($link)) $link = "../";

    include_once $link."php/conexao.php";

    if( !isset($_GET["usuario"]) OR !isset($_GET["mi"]) OR !isset($_GET["tipo"]) ){
        echo 0; //ERRO SERÁ TRATADO NO JS, ERRO: FALTA DE PARÂMETRO
    }
    elseif( !strpos($_GET["mi"], "-") > 0){
        echo 1; //ERRO SERÁ TRATADO NO JS, ERRO: mi com dado errado
    }
    elseif(($_GET["tipo"] != "edicao") AND ($_GET["tipo"] != "1rev") AND ($_GET["tipo"] != "correcao1") AND ($_GET["tipo"] != "2rev")  AND ($_GET["tipo"] != "correcao2") AND $_GET["tipo"] != "AdLoc" AND $_GET["tipo"] != "AdTra" AND $_GET["tipo"] != "AdHid" ){
        echo 3; //ERRO SERÁ TRATADO NO JS, ERRO: campo tipo especificado errado.
    }
    else{
        //DEFINE AS VARIAVEIS
        date_default_timezone_set('America/Recife');
        $data_final = date('Y') . "-" . date('m') . "-" . date('d') . " " . date("H") . ":" . date("i") . ":" . date("s");
        $usuario = strval($_GET["usuario"]);
        $mi = strval($_GET["mi"]);
        $tipo = strval($_GET["tipo"]);

        $status = "";
        $funcao = "";
        $termino = "termino" . $tipo;

        switch($tipo){
            case "AdLoc":
                $status = "CONCAT('2.',(cast(SPLIT_PART(status, '.', 2) as integer) + 2))";
                $funcao = "\"".$tipo."\"";
                $termino = "\"termino".$tipo."\"";
                break;
            case "AdTra":
                $status = "CONCAT('2.',(cast(SPLIT_PART(status, '.', 2) as integer) + 8))";
                $funcao = "\"".$tipo."\"";
                $termino = "\"termino".$tipo."\"";
                break;
            case "AdHid":
                $status = "CONCAT('2.',(cast(SPLIT_PART(status, '.', 2) as integer) + 32))";
                $funcao = "\"".$tipo."\"";
                $termino = "\"termino".$tipo."\"";
                break;
            case "CQ1":
                $status = "'3'";
                $funcao = $tipo;
                break;
            case "edicao":
                $status = "'3.2'";
                $funcao = "editor";
                break;
            case "1rev":
                $status = "'3.8'";
                $funcao = "revisor1";
                break;
            case "correcao1":
                $status = "'3.32'";
                $funcao = "corretor1";
                $termino = "terminocor1";
                break;
            case "2rev":
                $status = "'3.128'";
                $funcao = "revisor2";
                break;
            case "correcao2":
                $status = "'3.512'";
                $funcao = "corretor2";
                $termino = "terminocor2";
                break;  
        }

        //Faz a SQL na tabela cartas - finaliozar cartas edição
        $sql = "UPDATE public.cartas SET status = $status, " . $termino . " = '$data_final' WHERE mi = '$mi' AND " . $funcao . " = '$usuario';";
        $query = pg_query($conexao,$sql);
        if($query) {
            //codigo de sucesso
            echo 10;
        }
        else{
            echo 2; //ERRO SERÁ TRATADO NO JS, ERRO ONDE NÃO HOUVE conexão NO banco de dados, 
                    //possívelmente não solicitou carta, se aparecer nas pendentes verificar com adm
        }
    }

?>