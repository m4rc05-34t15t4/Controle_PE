<?php

    #ADEQUAÇÃO == AQUISICAO

    if(!isset($link)) $link = "../";

    include_once $link."php/conexao.php";

    if( !isset($_GET["usuario"]) OR !isset($_GET["dificuldade"]) OR !isset($_GET["tipo"]) ){
        echo 0; //ERRO SERÁ TRATADO NO JS, ERRO: FALTA DE PARÂMETRO
    }
    elseif( $_GET["dificuldade"] != "Fácil" AND $_GET["dificuldade"] != "Média" AND $_GET["dificuldade"] != "Difícil" ){
        echo 1; //ERRO SERÁ TRATADO NO JS, ERRO: Dificuldade com dado errado
    }
    elseif( $_GET["tipo"] != "HID" AND $_GET["tipo"] != "PLAN" AND $_GET["tipo"] != "ALL" ){
        echo 7; //ERRO SERÁ TRATADO NO JS, ERRO: Tipo de aquisitor com dado errado
    }
    else{
        
        //DEFINE AS VARIAVEIS
        date_default_timezone_set('America/Recife');
        $data_inicio = date('Y') . "-" . date('m') . "-" . date('d') . " " . date("H") . ":" . date("i") . ":" . date("s");
        $usuario = strval($_GET["usuario"]);
        $limite_servidor = -1;
        $primeira_dificuldade = strval($_GET["dificuldade"]);
        $segunda_dificuldade = "";
        $terceira_dificuldade = "";
        
        //Status
        $status_origem = 2; // >= 2 and < 2.63
        $status_destino = "'2.3'";
        $funcao = "AdVet";

        switch($_GET["tipo"]){
            case "HID":
                $status_origem = "2::numeric(6,3) or status::numeric(6,3) = 2.2::numeric(6,3) or status::numeric(6,3) = 2.8::numeric(6,3)";
                $status_destino = "(status::numeric(6,3)+0.1)::TEXT";
                $funcao = "AqHid";
                break;
            case "PLAN":
                $status_origem = "2::numeric(6,3) or status::numeric(6,3) = 2.1::numeric(6,3) or status::numeric(6,3) = 2.4::numeric(6,3)";
                $status_destino = "(status::numeric(6,3)+0.2)::TEXT";
                $funcao = "AqPlan";
                break;
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

        //QUERY para Pedir carta 
        $sql = "
            UPDATE public.cartas SET status = $status_destino, \"$funcao\" = '$usuario', \"inicio$funcao\" = '$data_inicio' WHERE id =  
                CASE
                    WHEN 
                        --retorna se há cartas reservadas<br>
                        (SELECT id FROM public.cartas WHERE (status::numeric(6,3) = $status_origem) AND \"$funcao\" = $usuario AND (\"inicio$funcao\" isnull OR length(\"inicio$funcao\") < 1) ORDER BY prioridade DESC, bloco, mi LIMIT 1) > 0
                    THEN
                        (SELECT id FROM public.cartas WHERE (status::numeric(6,3) = $status_origem) AND \"$funcao\" = $usuario AND (\"inicio$funcao\" isnull OR length(\"inicio$funcao\") < 1) ORDER BY prioridade DESC, bloco, mi LIMIT 1)
                    
                    --retorna se há cartas disponiveis<br>
                    WHEN (SELECT id FROM public.cartas WHERE (status::numeric(6,3) = $status_origem) AND \"$funcao\" isnull AND (\"inicio$funcao\" isnull OR length(\"inicio$funcao\") < 1) AND niveis = '$primeira_dificuldade' ORDER BY bloco, mi LIMIT 1) > 0 THEN (SELECT id FROM public.cartas WHERE (status::numeric(6,3) = $status_origem) AND \"$funcao\" isnull AND (\"inicio$funcao\" isnull OR length(\"inicio$funcao\") < 1) AND niveis = '$primeira_dificuldade' ORDER BY prioridade DESC, bloco, mi LIMIT 1) --<br>
                    WHEN (SELECT id FROM public.cartas WHERE (status::numeric(6,3) = $status_origem) AND \"$funcao\" isnull AND (\"inicio$funcao\" isnull OR length(\"inicio$funcao\") < 1) AND niveis = '$segunda_dificuldade' ORDER BY bloco, mi LIMIT 1) > 0 THEN (SELECT id FROM public.cartas WHERE (status::numeric(6,3) = $status_origem) AND \"$funcao\" isnull AND (\"inicio$funcao\" isnull OR length(\"inicio$funcao\") < 1) AND niveis = '$segunda_dificuldade' ORDER BY prioridade DESC, bloco, mi LIMIT 1) --<br>
                    WHEN (SELECT id FROM public.cartas WHERE (status::numeric(6,3) = $status_origem) AND \"$funcao\" isnull AND (\"inicio$funcao\" isnull OR length(\"inicio$funcao\") < 1) AND niveis = '$terceira_dificuldade' ORDER BY bloco, mi LIMIT 1) > 0 THEN (SELECT id FROM public.cartas WHERE (status::numeric(6,3) = $status_origem) AND \"$funcao\" isnull AND (\"inicio$funcao\" isnull OR length(\"inicio$funcao\") < 1) AND niveis = '$terceira_dificuldade' ORDER BY prioridade DESC, bloco, mi LIMIT 1) --<br>
                    
                    ELSE 
                        --Retorna id carta inválido para nada ser atualizado e retornar vazio<br>
                        -1
                END
            --Faz o retorno da linha atualizada pela query<br>
            RETURNING id, \"$funcao\";
        ";
        //echo $sql;
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
                echo 6;//Limite usuário no servidor ou não há cartas disponíveis
            }
        }
        else{
            echo 3; //ERRO SERÁ TRATADO NO JS, ERRO ONDE NÃO HOUVE conexão NO banco de dados, 
                    //possívelmente não solicitou carta, se aparecer nas pendentes verificar com adm
        }
    }

?>