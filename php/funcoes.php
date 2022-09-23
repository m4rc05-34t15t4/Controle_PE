<?php

date_default_timezone_set('America/Recife');

//Verifica se é permitido usuário permanecer na paghina
function Valida_usu_permissao_pagina($pagina){
    $id = $_SESSION['codigo'];
    if(isset($_GET["id"])) $id = $_GET["id"];
    $permissao = intval($_SESSION['funcao']);
    if($permissao >= 32768) $permissao -= 32768;//AQ PLAN
    if($permissao >= 16384) $permissao -= 16384;//AQ HID
    if($permissao >= 8192) $permissao -= 8192;//CONTROLADOR DE QUALIDADE
    if($permissao >= 4096) $permissao -= 4096;//OUTROS
    if($permissao >= 2048) $permissao -= 2048;//CARREGADOR BDGEX
    if($permissao >= 1024) $permissao -= 1024;//CORRETOR
    if($permissao >= 512) $permissao -= 512;//REVISOR
    if($permissao >= 256) $permissao -= 256;//EDITOR
    if($permissao >= 128) $permissao -= 128;//AD HID
    if($permissao >= 64) $permissao -= 64;//AD TRA
    if($permissao >= 32) $permissao -= 32;//AD LOC
    if($permissao >= 16) $permissao -= 16;//PREPARADOR
    if(!isset($id) OR ((strval($_SESSION['codigo']) != strval($id)) && ($permissao == 0)) ){
        $p = explode("?", $pagina);
        header('location:'.$p[0].'?id='.$_SESSION['codigo']);
    }
}

//Verifica se Existwe || se nulo || se vazio
function validar_variavel_miss($variavel){
    if(isset($variavel)){
        if((!is_null($variavel)) AND (!empty($variavel))){
            return true;
        }
    }
    return false;
}

//Retornar Descrição Status pelo codigo
function status_desc($status, $conexao){
    if(!is_null($status)){
        $sql = "SELECT descricao FROM public.fases WHERE codigo::numeric(4,3) = '" . $status . "'::numeric(4,3);";
        $query = pg_query($conexao,$sql);
        if($query) {
            $row_aux = pg_fetch_all($query);
            if($row_aux) return $row_aux[0]["descricao"];
            else return 'Status Pendente ' . strval($status);
        }
    }
    return $status;
}

//Retornar MI de ligação com a carta passada
function ligacao_mi($mi, $posicao, $conexao){
    if(!is_null($mi)){
        $sql = "SELECT " . $posicao . " FROM \"public\".\"cartas\" WHERE \"mi\" = '" . $mi . "'";
        $query = pg_query($conexao,$sql);
        if($query) {
            $row_aux = pg_fetch_all($query);
            return $row_aux[0][$posicao];
        }
    }
    return $posicao;
}

//Faz busca na Tabela edicao
function mi_status_code($mi, $campo, $conexao){
    if(!is_null($mi)){
        $sql = "SELECT " . $campo . " FROM \"public\".\"cartas\" WHERE \"mi\" = '" . $mi . "'";
        $query = pg_query($conexao,$sql);
        if($query) {
            $row_aux = pg_fetch_row($query);
            if(is_array($row_aux)){
                return $row_aux[0];
            }
        }
    }
    return "0";
}

//Faz busca na Tabela funcoes
function get_funcao($funcao, $campo, $conexao, $reverse = false){
    if(!is_null($funcao)){
        $desc = "";
        if($reverse == true){
            $desc = " ORDER BY codigo DESC";
        }
        $where = " WHERE \"codigo\" = '" . $funcao . "'";
        if(($funcao == "all") OR ($funcao == 0) OR (empty($funcao))){
            $where = "";
        }
        $sql = "SELECT " . $campo . " FROM \"public\".\"funcoes\"" . $where . $desc;
        $query = pg_query($conexao,$sql);
        if($query) {
            $row_aux = pg_fetch_all($query);
            if(pg_fetch_all($query)){
                return $row_aux;
            }
        }
    }
    return "0";
}

//Verifica se é nulo
function E_null($valor){
    if(!is_null($valor) AND (strtolower($valor) != "null") AND ($valor != "")){
        return false;
    }
    return true;
}

//faz consulta sql
function Consulta_sql($sql){

    global $conexao;

    $query = pg_query($conexao,$sql);
    if($query) {
        if(pg_fetch_all($query)){
            return pg_fetch_all($query);
        }
    }
    return 0; 
}

//Verifica string SQL
function Checar_valor(&$variavel, $valor, $valores = ['true', 'false'], $default = ""){
    $find = ["update", "select", "insert", "delete"];
    for($i=0; $i < count($find); $i++ ){
        if(strpos(strtolower($valor), $find[$i])){
            return false;
        }
    }
    if($valores == ""){
        $variavel = $valor;
        return true;
    }
    else{
        $variavel = $default;
        for($i=0; $i < count($valores); $i++ ){
            if($valor == $valores[$i]){
                $variavel = $valores[$i];
                return true;
            }
        }
    }
    return false;
}

?>