<?php

if(!isset($link)) $link = "../";

include_once $link."php/conexao.php";

include_once $link."php/funcoes.php";

function Recupera_Nome_Id($funcao_nome){
    global $row;
    global $conexao;
    $id = "id_" . $funcao_nome;
    //recupera nome Editor usuarios
    $row[0][$id] = "";
    if(!E_null($row[0][$funcao_nome])){

        $sql = "SELECT \"nome\" FROM \"public\".\"usuarios\" WHERE \"codigo\" = " . $row[0][$funcao_nome];
        $query = pg_query($conexao,$sql);
        if(!$query) {
            echo "Um erro ocorreu na consulta do " . $funcao_nome . "!";
        }
        else{
            $row_aux = pg_fetch_all($query);
            $row[0][$id] = $row[0][$funcao_nome];
            $row[0][$funcao_nome] = $row_aux[0]["nome"];
        }
    }
}

//Faz a busca na tabela
$sql = "SELECT * FROM \"public\".\"cartas\" WHERE \"mi\" = '" . $_GET["mi"] . "'";
$query = pg_query($conexao,$sql);
if(!$query) {
    //Retorna Numero de erro de conexão com o bd
    echo 0; 
}
else if(!pg_fetch_all($query)){
    echo 1;
}
else{
    
    //retorna linhas da consulta
    $row = pg_fetch_all($query);

    //consulta Mi de ligação do mi central
    $row[0]["mi_ligacao_o"] = ligacao_mi($row[0]["mi"], "o", $conexao);
    $row[0]["mi_ligacao_s"] = ligacao_mi($row[0]["mi"], "s", $conexao);
    $row[0]["mi_ligacao_se"] = ligacao_mi($row[0]["mi"], "se", $conexao);
    $row[0]["mi_ligacao_so"] = ligacao_mi($row[0]["mi"], "so", $conexao);
    $row[0]["mi_ligacao_l"] = ligacao_mi($row[0]["mi"], "l", $conexao);
    $row[0]["mi_ligacao_n"] = ligacao_mi($row[0]["mi"], "n", $conexao);
    $row[0]["mi_ligacao_no"] = ligacao_mi($row[0]["mi"], "no", $conexao);
    $row[0]["mi_ligacao_ne"] = ligacao_mi($row[0]["mi"], "ne", $conexao);

    //recupera o codigo da fase (status)
    $row[0]["status_c"] = $row[0]["status"];
    $row[0]["status_o"] = mi_status_code($row[0]["mi_ligacao_o"], "status", $conexao);
    $row[0]["status_s"] = mi_status_code($row[0]["mi_ligacao_s"], "status", $conexao);
    $row[0]["status_se"] = mi_status_code($row[0]["mi_ligacao_se"], "status", $conexao);
    $row[0]["status_so"] = mi_status_code($row[0]["mi_ligacao_so"], "status", $conexao);
    $row[0]["status_l"] = mi_status_code($row[0]["mi_ligacao_l"], "status", $conexao);
    $row[0]["status_n"] = mi_status_code($row[0]["mi_ligacao_n"], "status", $conexao);
    $row[0]["status_no"] = mi_status_code($row[0]["mi_ligacao_no"], "status", $conexao);
    $row[0]["status_ne"] = mi_status_code($row[0]["mi_ligacao_ne"], "status", $conexao);

    //recupera o nome da Fase (status)
    if($row[0]["status"][0] >= 4) $row[0]["status"] = status_desc($row[0]["status"][0], $conexao);
    else $row[0]["status"] = status_desc($row[0]["status"], $conexao);

    //recupera nome e ids dos usuarios
    Recupera_Nome_Id("AqHid");
    Recupera_Nome_Id("RevHid");
    Recupera_Nome_Id("AdVet");
    Recupera_Nome_Id("CQ1");
    Recupera_Nome_Id("editor");
    Recupera_Nome_Id("revisor1");
    #Recupera_Nome_Id("corretor1");
    Recupera_Nome_Id("revisor2");
    #Recupera_Nome_Id("corretor2");
    #Recupera_Nome_Id("CQ2");
    
    //exibir pagina como json
    header('Content-Type: application/json');
    
    //cria json
    $result = array(
        'id' => $row[0]["id"],
        'mi' => $row[0]["mi"],
        'bloco' => $row[0]["bloco"],
        'inom' => $row[0]["inom"],
        'nome_carta' => $row[0]["nome_carta"],
        'status' => $row[0]["status"],
        'servidor' => $row[0]["servidor"],
        'niveis' => $row[0]["niveis"],
        'densidade' => $row[0]["densidade"],
        'AqHid' => $row[0]["AqHid"],
        'id_AqHid' => $row[0]["id_AqHid"],
        'inicioAqHid' => $row[0]["inicioAqHid"],
        'terminoAqHid' => $row[0]["terminoAqHid"],
        'RevHid' => $row[0]["RevHid"],
        'id_RevHid' => $row[0]["id_RevHid"],
        'inicioRevHid' => $row[0]["inicioRevHid"],
        'terminoRevHid' => $row[0]["terminoRevHid"],
        'AdVet' => $row[0]["AdVet"],
        'id_AdVet' => $row[0]["id_AdVet"],
        'inicioAdVet' => $row[0]["inicioAdVet"],
        'terminoAdVet' => $row[0]["terminoAdVet"],
        'CQ1' => $row[0]["CQ1"],
        'id_CQ1' => $row[0]["id_CQ1"],
        'inicioCQ1' => $row[0]["inicioCQ1"],
        'terminoCQ1' => $row[0]["terminoCQ1"],
        'editor' => $row[0]["editor"],
        'id_editor' => $row[0]["id_editor"],
        'inicioEdicao' => $row[0]["inicioedicao"],
        'terminoEdicao' => $row[0]["terminoedicao"],
        'revisor1' => $row[0]["revisor1"],
        'id_revisor1' => $row[0]["id_revisor1"],
        'inicio1rev' => $row[0]["inicio1rev"],
        'termino1rev' => $row[0]["termino1rev"],
        'revisor2' => $row[0]["revisor2"],
        'id_revisor2' => $row[0]["id_revisor2"],
        'inicio2rev' => $row[0]["inicio2rev"],
        'termino2rev' => $row[0]["termino2rev"],
        /*
        'corretor1' => $row[0]["corretor1"],
        'id_corretor1' => $row[0]["id_corretor1"],
        'inicioCorrecao1' => $row[0]["iniciocorrecao1"],
        'terminoCorrecao1' => $row[0]["terminocorrecao1"],
        'corretor2' => $row[0]["corretor2"],
        'id_corretor2' => $row[0]["id_corretor2"],
        'inicioCorrecao2' => $row[0]["iniciocorrecao2"],
        'terminoCorrecao2' => $row[0]["terminocorrecao2"],
        'CQ2' => $row[0]["CQ2"],
        'id_CQ2' => $row[0]["id_CQ2"],
        'inicioCQ2' => $row[0]["inicioCQ2"],
        'terminoCQ2' => $row[0]["terminoCQ2"],
        */
        'impressa' => $row[0]["impressa"],
        'ligacao' => $row[0]["ligacao"],
        'ligacao_o' => $row[0]["mi_ligacao_o"],
        'ligacao_s' => $row[0]["mi_ligacao_s"],
        'ligacao_se' => $row[0]["mi_ligacao_se"],
        'ligacao_so' => $row[0]["mi_ligacao_so"],
        'ligacao_l' => $row[0]["mi_ligacao_l"],
        'ligacao_n' => $row[0]["mi_ligacao_n"],
        'ligacao_no' => $row[0]["mi_ligacao_no"],
        'ligacao_ne' => $row[0]["mi_ligacao_ne"],
        'status_c' => $row[0]["status_c"],
        'status_o' => $row[0]["status_o"],
        'status_s' => $row[0]["status_s"],
        'status_se' => $row[0]["status_se"],
        'status_so' => $row[0]["status_so"],
        'status_l' => $row[0]["status_l"],
        'status_n' => $row[0]["status_n"],
        'status_no' => $row[0]["status_no"],
        'status_ne' => $row[0]["status_ne"]
    );

    //exibe
    echo json_encode($result);
    //var_dump($result);

}

?>