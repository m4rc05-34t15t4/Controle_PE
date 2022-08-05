$(document).ready(function(){
    
    $link = "../";

    $lista_edicao = new Map();
    $lista_usuarios = new Map();
    $lista_fases_edicao = new Map();

    Recarregar_pagina_resize();
    
    Configuracoes_iniciais();

    Insere_dados_variaveis_auxiliares();
    
    //EVENTOS

    //hover

    $(".blocos table tr td").hover(function(e) {
        $bloco = $(this).attr('bloco');
        $("#bloco_"+$bloco).fadeOut(100);
        $(".blocos-nome").not("#bloco_"+$bloco).fadeIn(500);
        
        //Insere valores na DIV descricao_mi
        Insere_dados_mi_descricao($(this).attr('mi'), e);

    });

    $(".blocos table tr .fora-proj, #todos-mi-legenda-status").hover(function() {
        $bloco = $(this).attr('bloco');
        $("#descricao_mi").fadeOut(500);
    });

    $(".blocos-nome").hover(function() {
        $(this).fadeOut(100);
        $(".blocos-nome").not(this).fadeIn(500);
    });

    //click

    //redirecionamento de pagina MI_informações
    $(document).keydown(function(event){
        if(event.which=="17")
            $cntrlIsPressed = true;
    });
    $(document).keyup(function(){
        if(event.which=="17")
            $cntrlIsPressed = false;
    });
    $cntrlIsPressed = false;
    $(".blocos table tr td[mi]").click(function() {
        if($cntrlIsPressed){
            $cntrlIsPressed = false;
            window.open("Mi_informacoes.php?mi="+$(this).attr("mi"));    
        }
        else{
            window.location.href = "Mi_informacoes.php?mi="+$(this).attr("mi");
        }           
    });

    

    //FUNÇÕES

    //Insere_dados_no_mi_descricao
    function Insere_dados_mi_descricao(mi, e){
        //Insere valores na DIV descricao_mi
        if(mi){

            $(".blocos table").css("cursor", "pointer");

            $("#descricao_mi").fadeIn(300);

            //dificuldade
            $dificuldade = "Não classificado";
            if($lista_edicao.get(mi)["niveis"] && $lista_edicao.get(mi)){
                $dificuldade = $lista_edicao.get(mi)["niveis"];
            }
            
            //operador
            $operador = Seleciona_ultimo_operador_mi(mi);
            
            //conteudo da div
            $conteudo_div_descricao_mi = "<div class=\"fase_"+Retorna_Code_fase($lista_edicao.get(mi)["status"])+"\"><b>"+$dificuldade+"</b><br>"+mi+"<br><b>"+$operador+"</b><br>"+$lista_edicao.get(mi)["status"]+"</div>";
            $("#descricao_mi").text("");
            $("#descricao_mi").append($conteudo_div_descricao_mi);
            
            //posicao da div descricao_mi
            $largura_mi = Converte_px_pt($(".blocos table tr td[mi=\""+mi+"\"]").css("height")) * 0.8;
            if($largura_mi < 10){
                $largura_mi = $largura_mi * 2;
            }
            $posicao_x = Converte_px_pt(e.clientX);
            $posicao_y = Converte_px_pt(e.clientY);
            $left = "calc( "+$posicao_x+"pt - ( var(--largura-div-descricao-mi) / 2 ))";
            $top = "calc( "+$posicao_y+"pt - var(--largura-div-descricao-mi) - "+$largura_mi+"pt )";
            $largura_tela = Converte_px_pt(window.innerWidth);
            if($posicao_y < 200){
                $top = "calc( "+$posicao_y+"pt + "+$largura_mi+"pt )";
            }
            if($posicao_x < 150){
                $left = "calc( "+$posicao_x+"pt)";
            }
            else if($posicao_x > ($largura_tela - 100)){
                $left = "calc( "+$posicao_x+"pt  - var(--largura-div-descricao-mi))";
            }
            $("#descricao_mi").css("left", $left);
            $("#descricao_mi").css("top", $top);
        }
        else{

            $(".blocos table").css("cursor", "default");
            
        }
    }

    //Seleciona qual ultimo operador da carta
    function Seleciona_ultimo_operador_mi($mi){
        //console.log($lista_edicao.get($mi));
        $operador = -1;
        $status_mi = parseFloat(String($lista_edicao.get($mi)["status"]));
        if($status_mi == 1.64 || $status_mi == 1.128) $operador = $lista_edicao.get($mi)["AqHid"];
        else if($status_mi == 1.256 || $status_mi == 2.0) $operador = $lista_edicao.get($mi)["RevHid"];
        else if($status_mi == 2.1 || $status_mi == 2.2) $operador = $lista_edicao.get($mi)["AdVet"];
        else if($status_mi == 2.4 || $status_mi == 3.0) $operador = $lista_edicao.get($mi)["CQ1"];
        else if($status_mi == 3.1 || $status_mi == 3.2) $operador = $lista_edicao.get($mi)["editor"];
        else if($status_mi == 3.4 || $status_mi == 3.8) $operador = $lista_edicao.get($mi)["revisor1"];
        else if($status_mi >= 3.16 && $status_mi <= 5.0) $operador = $lista_edicao.get($mi)["revisor2"];

        if(($operador < 0) || ($operador == null)){
            return "Sem Operador";   
        }
        return $lista_usuarios.get($operador)["nome"];
    }

    //Faz consulta SQL na tabela edicao usuarios e fases_edicao ($lista_edicao.get("1436-4-NE")["mi"])
    function Insere_dados_variaveis_auxiliares(){
        $.getJSON($link+'php/conexao_todos_mi.php', function(listas) {
            if(listas != 0){
                //console.log(listas);
                $lista_edicao = Formatar_variaveis_auxiliares(listas[0], "mi");
                $lista_usuarios = Formatar_variaveis_auxiliares(listas[1], "codigo");
                $lista_fases_edicao = Formatar_variaveis_auxiliares(listas[2], "codigo");

                Insere_backgroud_status_mi($lista_edicao);
            }
            else{
                alert("Erro ao consudar dados no servidor, Recarregue a página ou tente novamente mais tarde.");
            }
        });
    }

    //Retorna codigo fase
    function Retorna_Code_fase(status){
        if(parseFloat(status) == 1.32 || parseFloat(status) == 1.64 || parseFloat(status) == 1.128 || parseFloat(status) == 1.256){
            return "1_5";
        }
        return String(status)[0];
    }

    //Insere cores de fundo com base no status dos mi
    function Insere_backgroud_status_mi(lista_edicao){
        lista_edicao.forEach(function(valor, chave) {
            $(".blocos table tr td[mi=\""+chave+"\"]").addClass("fase_"+Retorna_Code_fase(valor["status"]));
            sub_status = 0
            if(valor["status"].split(".")[1] != undefined) sub_status = valor["status"].split(".")[1];
            $(".blocos table tr td[mi=\""+chave+"\"]").html("<br>"+sub_status);
        });
    }

    //Formata variaveis auxiliares
    function Formatar_variaveis_auxiliares($array, $key){
        $map = new Map();
        for($i=0; $i < $array.length; $i++){
            $map.set($array[$i][$key], $array[$i]);
        }
        //console.log($map);
        return $map;
    }

    //Setar posicao nome DIV bloco
    function Configuracoes_iniciais(){

        //Insere a altura das td MI com base em sua largura
        //$(".blocos table tr td").css('height', $(".blocos table tr td").css('width'));
        $(".blocos table tr td").css('height', '1px');
        
        //Defina a posicao nas DIV nomes Bloco
        $qtd_colunas = parseInt($(".blocos table").attr('colunas'));
        $qtd_linhas = parseInt($(".blocos table").attr('linhas'));
        $largura_blocos_table = Converte_px_pt($(".blocos table").css('width'));
        $altura_blocos_table = Converte_px_pt($(".blocos table").css('height'));
        $largura_td_mi = $largura_blocos_table / $qtd_colunas;
        $altura_td_mi = $altura_blocos_table / $qtd_linhas;
        $blocos = ["A", "B", "C", "D", "E"];
        $blocos = [];
        for($i=0; $i < $blocos.length; $i++){
            $div = $("#bloco_"+$blocos[$i]);
            $mi_central = $div.attr('mi-central').split("x");
            $left = $mi_central[1] * $largura_td_mi;
            $top = ($mi_central[0] * $altura_td_mi);
            $div.css("left", "calc( var(--padding) - (var(--largura-div-nome-bloco) / 2) + "+$left+"pt)");
            $div.css("top", "calc( var(--padding) - (var(--largura-div-nome-bloco) / 2) + "+$top+"pt)");
        }
        
        /*
        //legenda
        $legenda_top = $altura_td_mi * 23;
        $altura_legenda = $altura_td_mi * 24;
        $legenda = $("#todos-mi-legenda-status");
        $legenda.css("top", $legenda_top+"pt");
        $legenda.css("height", $altura_legenda+"pt");
        $largura_tela = Converte_px_pt(window.innerWidth);
        $e_menor = ($largura_tela / 3) < (Converte_px_pt($legenda.css("width")));
        if($e_menor){
            $legenda.css("font-size", "15pt");
        }
        */

    }

});