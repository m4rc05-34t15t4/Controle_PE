<?php

    if(!isset($link)) $link = "../";

    include_once $link."php/conexao.php";

    include_once $link."php/funcoes.php";

    //exibir pagina como json
    header('Content-Type: application/json');

    $result = [];
    $result["erro"] = "";

    if( !isset($_GET["funcao"]) ) $result["erro"] = 'Erro: Parâmetros em falta: funcao.';
    else{

        $sql = "";

        switch($_GET["funcao"]){
            case 'ACAO':
                $sql = "SELECT * FROM historico_acoes ORDER BY datatime DESC LIMIT 1;";
            break;
            case 'ACAO_USU':
                if(isset($_GET["usu"])) $sql = "SELECT * FROM historico_acoes WHERE usuario = ".$_GET["usu"]." ORDER BY datatime DESC;";
            break;
        }

        if($sql == "") $result = [];
        else{
            $query = pg_query($conexao,$sql);
            if($query) { 
                if(pg_fetch_all($query)){
                    $row = pg_fetch_all($query);
                    if(count($row) > 0) $result = $row;
                    else $result["erro"] = 'Erro: Consulta sem retorno Verificar se foi concluída.';
                }
                else $result["erro"] = 'Erro: Consulta.';
            }
            else $result["erro"] = 'Erro: Sem conexão com o BD.';
        }
    }

    echo json_encode($result);

?>