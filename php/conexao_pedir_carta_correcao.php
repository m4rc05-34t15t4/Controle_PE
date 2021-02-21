<?php

    if(!isset($link)) $link = "../";

    include_once $link."php/conexao.php";

    if( (!isset($_GET["usuario"]) OR !isset($_GET["tipo"]) ) && ( intval($_GET["tipo"]) == 1 OR intval($_GET["tipo"]) == 2 ) ){
        echo 0; //ERRO SERÁ TRATADO NO JS, ERRO: FALTA DE PARÂMETRO
    }
    else{
        //DEFINE AS VARIAVEIS
        date_default_timezone_set('America/Recife');
        $data_inicio = date('Y') . "-" . date('m') . "-" . date('d') . " " . date("H") . ":" . date("i") . ":" . date("s");
        $usuario = strval($_GET["usuario"]);
        $tipo = intval($_GET["tipo"]);
        $status_origem = "'3.8'";
        $status_destino = "'3.16'";
        $funcao = "corretor1";
        $inicio = "iniciocor1";
        if($tipo == 2){
            $status_origem = "'3.128'";
            $status_destino = "'3.256'";
            $funcao = "corretor2";
            $inicio = "iniciocor2";
        }

        //QUERY para Pedir carta 
        $sql = "
            UPDATE public.cartas SET status = $status_destino, $funcao = $usuario, $inicio = '$data_inicio' WHERE id =  
                CASE
                    WHEN 
                        --retorna se há cartas reservadas<br>
                        (SELECT id FROM public.cartas WHERE status = $status_origem AND ($funcao = '$usuario' OR editor = '$usuario') AND ($inicio isnull OR length($inicio) < 1) ORDER BY bloco, mi LIMIT 1) > 0
                    THEN
                        (SELECT id FROM public.cartas WHERE status = $status_origem AND ($funcao = '$usuario' OR editor = '$usuario') AND ($inicio isnull OR length($inicio) < 1) ORDER BY bloco, mi LIMIT 1)
                                       
                    WHEN
                        --retorna se há cartas disponiveis<br> 
                        (SELECT id FROM public.cartas WHERE status = $status_origem AND $funcao isnull AND ($inicio isnull OR length($inicio) < 1) ORDER BY bloco, mi LIMIT 1) > 0 
                    THEN 
                        (SELECT id FROM public.cartas WHERE status = $status_origem AND $funcao isnull AND ($inicio isnull OR length($inicio) < 1) ORDER BY bloco, mi LIMIT 1)
                    
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
                echo 6;//Limite usuário no servidor ou não há cartas disponíveis
            }
        }
        else{
            echo 3; //ERRO SERÁ TRATADO NO JS, ERRO ONDE NÃO HOUVE conexão NO banco de dados, 
                    //possívelmente não solicitou carta, se aparecer nas pendentes verificar com adm
        }
    }

?>