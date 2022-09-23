<?php

    if(!isset($link)) $link = "../";

    include_once $link."php/conexao.php";

    include_once $link."php/funcoes.php";

    if( !isset($_GET["usuario"]) OR !isset($_GET["funcao"]) OR !isset($_GET["tipo"]) ) echo 'Erro: Parâmetros em falta: usuário, função ou tipo.';
    else{
        
        //DEFINE AS VARIAVEIS
        date_default_timezone_set('America/Recife');
        $data_inicio = date('Y') . "-" . date('m') . "-" . date('d') . " " . date("H") . ":" . date("i") . ":" . date("s");
        $usuario = strval($_GET["usuario"]);
        $funcao = strval($_GET["funcao"]);
        $tipo = strval($_GET["tipo"]);
        $time = strval($_GET["time"]);
        $id_row = strval($_GET["id_row"]);
        $acao = strval($_GET["acao"]);
        $mi = 'NULL';
        $desc = 'NULL';
        if(strval($_GET["time"]) != 'NULL') $data_inicio = strval($_GET["time"]);

        if(isset($_GET["mi"])) {
            if($_GET["mi"] != null && $_GET["mi"] != 'NULL') Checar_valor($mi, "'".$_GET["mi"]."'", "");
        }
        if(isset($_GET["descricao"])){
            if($_GET["descricao"] != null && $_GET["descricao"] != 'NULL') Checar_valor($desc, "'".$_GET["descricao"]."'", "");
        }

        $sql = "
            INSERT INTO HISTORICO_ACOES (USUARIO, FUNCAO, TIPO, MI, DESCRICAO, DATATIME, DATA_CADASTRO) 
            VALUES ($usuario, $funcao, '$tipo', $mi, $desc, '$data_inicio', split_part(NOW()::text, '.', 1)::timestamp)
            RETURNING id;
        ";

        switch($acao){
            case "UPDATE":
                $sql = "UPDATE HISTORICO_ACOES SET TIPO = '$tipo', DESCRICAO = $desc, DATATIME = '$data_inicio' WHERE ID = $id_row RETURNING id;";
                break;
            case "DELETE":
                $sql = "DELETE FROM HISTORICO_ACOES WHERE ID = $id_row RETURNING id;";
                break;
        }

        $query = pg_query($conexao,$sql);
        if($query) { 
            if(pg_fetch_all($query)){
                $row = pg_fetch_all($query);
                if(count($row) > 0) echo 'Sucesso!';
                else echo 'Erro: '.$acao.' sem retorno Verificar se foi concluída.';
            }
            else echo 'Erro: '.$acao.'.';
        }
        else echo 'Erro: Sem conexão com o BD.';
    }

?>