<?php

    if(!isset($link)) $link = "../";

    include_once $link."php/conexao.php";

    if( !isset($_GET["usuario"]) OR !isset($_GET["dificuldade"]) OR !isset($_GET["editor"]) OR !isset($_GET["tipo"])){
        echo 0; //ERRO SERÁ TRATADO NO JS, ERRO: FALTA DE PARÂMETRO
    }
    elseif( ($_GET["dificuldade"] != "Fácil") AND ($_GET["dificuldade"] != "Média") AND ($_GET["dificuldade"] != "Difícil") ){
        echo 1; //ERRO SERÁ TRATADO NO JS, ERRO: Dificuldade com dado errado
    }
    elseif(is_string(intval($_GET["editor"]))){
        echo 5; //ERRO SERÁ TRATADO NO JS, ERRO: id último editor inválido
    }
    elseif(($_GET["tipo"] != "rev1") AND ($_GET["tipo"] != "rev2")){
        echo 7; //ERRO SERÁ TRATADO NO JS, ERRO: tipo inválido
    }
    else{
        //DEFINE AS VARIAVEIS
        date_default_timezone_set('America/Recife');
        $data_inicio = date('Y') . "-" . date('m') . "-" . date('d') . " " . date("H") . ":" . date("i") . ":" . date("s");
        $usuario = strval($_GET["usuario"]);
        $editor = strval($_GET["editor"]);
        $limite_servidor = 11;
        $primeira_dificuldade = strval($_GET["dificuldade"]);
        $segunda_dificuldade = "";
        $terceira_dificuldade = "";
        $status_origem = "'3.2'";
        $status_destino = "'3.4'";
        $funcao = "revisor1";
        $inicio = "inicio1rev";

        //SEGUNDA REVISÃO
        if($_GET["tipo"] == "rev2"){
            $status_origem = "'3.32'";
            $status_destino = "'3.64'";
            $funcao = "revisor2";
            $inicio = "inicio2rev";
        }

        //verifica os possíveis niveis apos o nível desejado, no qual foi recebido por parâmetro GET
        switch($primeira_dificuldade){
            case "Fácil":
                $primeira_dificuldade = "Média";
                $segunda_dificuldade = "Difícil";
                $terceira_dificuldade = "Fácil";
                break;
            case "Média":
                $primeira_dificuldade = "Difícil";
                $segunda_dificuldade = "Fácil";
                $terceira_dificuldade = "Média";
                break;
            case "Difícil":
                $primeira_dificuldade = "Fácil";
                $segunda_dificuldade = "Média";
                $terceira_dificuldade = "Difícil";
                break;
        }

        //Faz QUERY pedir carta revisão
        $sql = "
            UPDATE public.cartas SET status = $status_destino, $funcao = '$usuario', $inicio = '$data_inicio' WHERE id =  
                CASE
                    WHEN 
                        --retorna se há cartas reservadas<br>
                        (SELECT id FROM public.cartas WHERE status = $status_origem AND $funcao = '$usuario' AND ($inicio isnull OR length($inicio) < 1) ORDER BY bloco, mi LIMIT 1) > 0
                    THEN
                        (SELECT id FROM public.cartas WHERE status = $status_origem AND $funcao = '$usuario' AND ($inicio isnull OR length($inicio) < 1) ORDER BY bloco, mi LIMIT 1)
                    
                    --retorna se há cartas disponiveis<br>                   
                    WHEN (SELECT id FROM public.cartas WHERE status = $status_origem AND $funcao isnull AND ($inicio isnull OR length($inicio) < 1) AND niveis = '$primeira_dificuldade' AND editor != '$editor' ORDER BY bloco, mi LIMIT 1) > 0 THEN (SELECT id FROM public.cartas WHERE status = $status_origem AND $funcao isnull AND ($inicio isnull OR length($inicio) < 1) AND niveis = '$primeira_dificuldade' AND editor != '$editor' ORDER BY bloco, mi LIMIT 1)
                    WHEN (SELECT id FROM public.cartas WHERE status = $status_origem AND $funcao isnull AND ($inicio isnull OR length($inicio) < 1) AND niveis = '$segunda_dificuldade' AND editor != '$editor' ORDER BY bloco, mi LIMIT 1) > 0 THEN (SELECT id FROM public.cartas WHERE status = $status_origem AND $funcao isnull AND ($inicio isnull OR length($inicio) < 1) AND niveis = '$segunda_dificuldade' AND editor != '$editor' ORDER BY bloco, mi LIMIT 1)
                    WHEN (SELECT id FROM public.cartas WHERE status = $status_origem AND $funcao isnull AND ($inicio isnull OR length($inicio) < 1) AND niveis = '$terceira_dificuldade' AND editor != '$editor' ORDER BY bloco, mi LIMIT 1) > 0 THEN (SELECT id FROM public.cartas WHERE status = $status_origem AND $funcao isnull AND ($inicio isnull OR length($inicio) < 1) AND niveis = '$terceira_dificuldade' AND editor != '$editor' ORDER BY bloco, mi LIMIT 1)
                    WHEN (SELECT id FROM public.cartas WHERE status = $status_origem AND $funcao isnull AND ($inicio isnull OR length($inicio) < 1) AND niveis = '$primeira_dificuldade' ORDER BY bloco, mi LIMIT 1) > 0 THEN (SELECT id FROM public.cartas WHERE status = $status_origem AND $funcao isnull AND ($inicio isnull OR length($inicio) < 1) AND niveis = '$primeira_dificuldade' ORDER BY bloco, mi LIMIT 1)
                    WHEN (SELECT id FROM public.cartas WHERE status = $status_origem AND $funcao isnull AND ($inicio isnull OR length($inicio) < 1) AND niveis = '$segunda_dificuldade' ORDER BY bloco, mi LIMIT 1) > 0 THEN (SELECT id FROM public.cartas WHERE status = $status_origem AND $funcao isnull AND ($inicio isnull OR length($inicio) < 1) AND niveis = '$segunda_dificuldade' ORDER BY bloco, mi LIMIT 1)
                    WHEN (SELECT id FROM public.cartas WHERE status = $status_origem AND $funcao isnull AND ($inicio isnull OR length($inicio) < 1) AND niveis = '$terceira_dificuldade' ORDER BY bloco, mi LIMIT 1) > 0 THEN (SELECT id FROM public.cartas WHERE status = $status_origem AND $funcao isnull AND ($inicio isnull OR length($inicio) < 1) AND niveis = '$terceira_dificuldade' ORDER BY bloco, mi LIMIT 1)

                    ELSE 
                        --Retorna id carta inválido para nada ser atualizado e retornar vazio<br>
                        -1
                END
            --Faz o retorno da linha atualizada pela query<br>
            RETURNING id, $funcao;
        ";
        
        $query = pg_query($conexao,$sql);
        if($query) {

            if(pg_fetch_all($query)){

                $row = pg_fetch_all($query);
                
                if(count($row) > 0){
                    //SUCESSO
                    echo 10;
                }
                else{
                    echo 4;
                }
            }  
            else{
                echo 6;
            }
        }
        else{
            echo 3; //ERRO SERÁ TRATADO NO JS, ERRO ONDE NÃO HOUVE conexão NO banco de dados, 
                    //possívelmente não solicitou carta, se aparecer nas pendentes verificar com adm
        }
    }

?>