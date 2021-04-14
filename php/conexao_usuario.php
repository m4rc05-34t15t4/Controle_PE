<?php

    if(!isset($link)) $link = "../";

    include_once $link."php/conexao.php";

    include_once $link."php/funcoes.php";

    //Faz a busca na tabela cartas - cartas editadas
    $sql = "SELECT mi, status, niveis, 'edicao' as tipo, inicioedicao, terminoedicao, termino1rev, termino2rev FROM public.cartas WHERE \"editor\" = '" . $_GET["id"] . "' 
        ORDER BY terminoedicao DESC, inicioedicao DESC, mi DESC;";
    $lista_cartas_editadas = Consulta_sql($sql);
    if($lista_cartas_editadas != 0){
        foreach ($lista_cartas_editadas as &$value) {
            $value["dias"] = "";
            $value["tempo"] = "";
            if($value["inicioedicao"] != null){
                
                //Define data de referência para calcular qtd dias que a carta estava disponivel
                $data_referencia = $value["inicioedicao"];
                $st = $value["status"];
                if(floatval($st) >= 4 AND floatval($st) <= 5){
                    $st = "rev2";
                }
                switch($st){
                    case "3.8":
                        $data_referencia = $value["termino1rev"];
                        break;
                    case "rev2":
                        $data_referencia = $value["termino2rev"];
                        break;
                }

                if($data_referencia != null){
                    $tempo = explode(" ", $data_referencia);
                    $data = explode("-", $tempo[0]);
                    $value["tempo"] = Calcular_tempo($tempo[1]);
                    $value["dias"] = GregorianToJD(date("m"),date("d"),date("Y")) - GregorianToJD($data[1],$data[2],$data[0]);
                }
            }
        }
    }

    //Faz a busca na tabela cartas - cartas revisadas
    $sql = "SELECT * , 'revisao' as tipo FROM (
        SELECT mi, status, niveis, revisor1 AS revisor, inicio1rev AS inicio, termino1rev AS termino, editor as operador, 'rev1' as rev FROM public.cartas WHERE revisor1 = '" . $_GET["id"] . "'
        UNION
        SELECT mi, status, niveis, revisor2 AS revisor, inicio2rev AS inicio, termino2rev AS termino, editor as operador, 'rev2' as rev FROM public.cartas WHERE revisor2 = '" . $_GET["id"] . "'
        UNION
        SELECT mi, status, niveis, CAST(\"RevHid\" as TEXT) AS revisor, \"inicioRevHid\" AS inicio, \"terminoRevHid\" AS termino, CAST(\"AqHid\" as TEXT) as operador, 'hid' as rev FROM public.cartas WHERE \"RevHid\" = " . $_GET["id"] . "
        ) AS lista_cartas_revisadas ORDER BY termino DESC, inicio DESC, mi DESC;";
    $lista_cartas_revisadas = Consulta_sql($sql);
    Faz_busca_cartas_finalizadas_usuario($sql, $lista_cartas_revisadas);

    //Faz a busca na tabela cartas - cartas Adequadas
    $sql = "SELECT mi, status, niveis, 'adequacao' as tipo, \"AdVet\" AS Adequador, \"inicioAdVet\" AS inicio, \"terminoAdVet\" AS termino, 'vet' as Adequacao FROM public.cartas WHERE \"AdVet\" = '" . $_GET["id"] . "' ORDER BY termino DESC, inicio DESC, mi DESC;";
    $lista_cartas_adequadas = Consulta_sql($sql);
    Faz_busca_cartas_finalizadas_usuario($sql, $lista_cartas_adequadas);

    //Faz a busca na tabela cartas - cartas Adquiridas
    $sql = "SELECT mi, status, niveis, 'aquisicao' as tipo,  \"AqHid\" AS Aquisitor, \"inicioAqHid\" AS inicio, \"terminoAqHid\" AS termino, 'hid' as Aquisicao FROM public.cartas WHERE \"AqHid\" = '" . $_GET["id"] . "' ORDER BY termino DESC, inicio DESC, mi DESC;";
    $lista_cartas_adquiridas = Consulta_sql($sql);
    Faz_busca_cartas_finalizadas_usuario($sql, $lista_cartas_adquiridas);

    //Faz a busca na tabela funcoes - nomes das funcoes
    $sql = "SELECT * FROM public.funcoes ORDER BY codigo DESC;";
    $row_funcoes = Consulta_sql($sql);
    $funcoes = array();
    if($row_funcoes != 0){
        $funcoes = $row_funcoes;
    }

    //Faz a busca na tabela Fases - nome status
    $sql = "SELECT * FROM public.\"fases\" ORDER BY codigo;";
    $row_status = Consulta_sql($sql);
    $status = array();
    if($row_status != 0){
        for($i=0;$i < count($row_status); $i++){
            $status[$row_status[$i]["codigo"]] = $row_status[$i]["descricao"];
        }
    }

    //Faz a busca na tabela usuarios - nome do usuario
    //$sql = "SELECT nome, funcao, situacao, posto_graduacao, FROM public.usuarios WHERE codigo = '" . $_GET["id"] . "';";
    $sql = "
        SELECT nome, funcao, nome_situacao, srv_local, abrev as posto_graduacao FROM (SELECT * FROM
        (SELECT * FROM public.usuarios WHERE codigo = '" . $_GET["id"] . "')
        AS usuarios_tab JOIN
        (SELECT codigo as id_situacao, descricao as nome_situacao FROM public.situacao)
        AS situacao_tab ON usuarios_tab.situacao = situacao_tab.id_situacao) AS usuarios_tab_all JOIN
        (SELECT abrev, codigo as id_postos_graduacoes FROM public.postos_graduacoes)
        AS postos_graduacoes_tab ON usuarios_tab_all.posto_graduacao = postos_graduacoes_tab.id_postos_graduacoes";
    $row_usuario = Consulta_sql($sql);
    $usuario = array();
    if($row_usuario != 0){
        $usuario = array(
            'nome' => $row_usuario[0]["nome"],
            'funcao' => $row_usuario[0]["funcao"],
            'situacao' => $row_usuario[0]["nome_situacao"],
            'srv_local' => $row_usuario[0]["srv_local"],
            'posto_graduacao' => $row_usuario[0]["posto_graduacao"]
        );
    }

    if( ($row_funcoes == 0) || ($row_status == 0) || ($row_usuario == 0) ){
        return 0;
    }
    else{
        //exibir pagina como json
        header('Content-Type: application/json');

        //cria json
        $resultado = array(
            'lista_cartas_adquiridas' => $lista_cartas_adquiridas,
            'lista_cartas_adequadas' => $lista_cartas_adequadas,
            'lista_cartas_editadas' => $lista_cartas_editadas,
            'lista_cartas_revisadas' => $lista_cartas_revisadas,
            'funcoes' => $funcoes,
            'status' => $status,
            'usuario' => $usuario
        );

        //exibe
        echo json_encode($resultado);
        //echo $resultado;
        //var_dump($resultado);
    }

    //Faz busca noo banco de dados por cartas feitas pelo usuario
    function Faz_busca_cartas_finalizadas_usuario($sql, &$lista_cartas){
        if($lista_cartas != 0){
            foreach ($lista_cartas as &$value) {
                $data = "";
                $tempo = "";
                $value["dias"] = "";
                if($value["inicio"] != null){
                    $tempo = explode(" ", $value["inicio"]);
                    $data = explode("-", $tempo[0]);
                }

                if($data != ""){
                    $time = explode(":", $tempo[1]);
                    $value["tempo"] = Calcular_tempo($tempo[1]);
                    $value["dias"] = GregorianToJD(date("m"),date("d"),date("Y")) - GregorianToJD($data[1],$data[2],$data[0]);
                }
            }
        }
    }

    //Calcula tempo
    function Calcular_tempo($time_hms){
        try {

            $tempo = "00h00";

            if(strpos( $time_hms, ":" ) > 0){
            
                $time = explode(":", $time_hms);
                $min_carta = (intval($time[0]) * 60) + intval($time[1]);

                date_default_timezone_set('America/Recife');
                $min_atual = (intval(date('H')) * 60) + intval(date('i'));

                $intervalo = $min_atual - $min_carta;
                $horas = intdiv($intervalo, 60);
                $min = $intervalo % 60;

                if($horas < 0){
                    $horas = 0;
                }
                if($min < 0){
                    $min = 0;
                }
                if($horas < 10){
                    $horas = "0" . $horas;
                }
                if($min < 10){
                    $min = "0" . $min;
                }

                $tempo = $horas."h".$min;
            }

            return $tempo;
        }
        catch (Throwable $e) {
            return "00h00";
        }
    }

?>