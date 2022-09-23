$(document).ready(function(){
    
    //$CONTROLE = "Controle-Pernambuco";

    $link = "../";
    
    Centralizar_cabecalho();

    Por_imagem_usuario_cabecalho();

    Desabilitar_botao_menu_lateral_pagina_atual();

    Definir_bt_acoes();
    
    //EVENTOS

    //hover
    $(".botao-menu-lateral").hover(function(){
        if($(this).css("opacity") != "0.5"){
            $(this).css("background-color", "#09F");
        }
    });

    $("#bt_play_pause").hover(function(){
        $("#acao_time").html(diff($("#bt_play_pause").attr("datatime")));
        $("#acao_time").fadeIn();
    });

    //mouseout
    $(".botao-menu-lateral").mouseout(function(){
        if($(this).attr("paginaatual") != "ok"){
            $(this).css("background", "none");
        }
    });

    $("#bt_play_pause").mouseout(function(){
        $("#acao_time").fadeOut();
    });
    
    //click
    $("#status-login-usuario, #usuario-perfil, #formulario-login-cancelar").click(function(){
        if($("#status-login-usuario").text().indexOf("Sair") < 0){
            $(".formularios").toggle(500);
        }
    });

    $("#usuario-perfil").click(function(){
        $codigo = $(this).attr("codigo");
        if($codigo != ""){
            window.location.href = "Usuario_informacoes.php?id="+$codigo;
        }
    });

    $(".botao-menu-lateral").click(function(){
        if($(this).css("opacity") != "0.5"){
            window.location.href = $(this).attr("link");
        }
    });

    $("#bt_play_pause").click(function(){
        $tipo = $(this).html();
        $(".box-confirmacao_mensagem").html($tipo+"?");
        if($tipo == "Finalizar Trabalho"){
            $msg = `${$tipo}?
                <hr>
                <div id="div-criar-historico-acao">
                    <select id="tipo_cadastrar_acao" class="">
                        <option value="SERVIÇO">Serviço</option>
                        <option value="ALMOÇO">Almoço</option>
                        <option value="FÉRIAS">FÉRIAS</option>
                        <option value="MISSÃO">Missão</option>
                        <option value="OUTROS">Outros</option>
                        <option value="TFM">TFM</option>
                        <option value="ADM">ADM</option>
                        <option value="FINISH" selected>Finalizar Trabalho</option>
                    </select>
                    <input type="text" id="desc_cadastrar_acao" placeholder="Descrição">
                </div>`;
            $(".box-confirmacao_mensagem").html($msg);
            $("#box-confirmacao_botoes_confirmar").attr("tipo", "acao-cabecalho-finish");
        }
        else $("#box-confirmacao_botoes_confirmar").attr("tipo", "acao-cabecalho-start");
        $(".box-confirmacao_botoes, .box-confirmacao_content, .box-confirmacao-fundo").fadeIn();

        $tp = 'START';
        $desc = 'NULL';
        $usu = $("#usuario-perfil").attr("codigo");
        $func = $("#usuario-perfil").attr("funcao");
        $id_row = "";

    });

    //confirmado
    $("#box-confirmacao_botoes_confirmar").click(function() {
        $(".box-confirmacao_botoes, .box-confirmacao_content, .box-confirmacao-fundo").fadeOut();
        switch($("#box-confirmacao_botoes_confirmar").attr("tipo")){
            case "acao-cabecalho-finish": 
                $desc = $("#desc_cadastrar_acao").val();
                $tp = $("#tipo_cadastrar_acao").val();
            case "acao-cabecalho-start":
                cadastrar_editar_apagar_acao($usu, $func, $tp, $desc);
                break;
            case "add-acao-historico":
                $desc = $("#desc_cadastrar_acao").val();
                $tp = $("#tipo_cadastrar_acao").val();
                $time = $("#date_cadastrar_acao").val();
                cadastrar_editar_apagar_acao($usu, $func, $tp, $desc, $time);
                break;
            case "editar-acao-historico":
                $desc = $("#desc_cadastrar_acao").val();
                $tp = $("#tipo_cadastrar_acao").val();
                $time = $("#date_cadastrar_acao").val();
                $id_row = $(".box-confirmacao_mensagem h5").html().split("(")[1].split(")")[0]; 
                cadastrar_editar_apagar_acao($usu, $func, $tp, $desc, $time, $id_row, "UPDATE");
                break;
            case "excluir-acao-historico":
                $id_row = $(".box-confirmacao_mensagem h5").html().split("(")[1].split(")")[0]; 
                cadastrar_editar_apagar_acao($usu, $func, $tp, $desc, 'NULL', $id_row, "DELETE");
                break;
        }
        $(".box-confirmacao_mensagem").html("");
        
    });
    //cancelado
    $(".box-confirmacao-fundo, #box-confirmacao_botoes_cancelar").click(function() {
        $(".box-confirmacao_botoes, .box-confirmacao_content, .box-confirmacao-fundo").fadeOut();
        $("#box-confirmacao_botoes_confirmar").attr("tipo", "");
        $(".box-confirmacao_mensagem").html("");
    });

    //FUNÇÕES

    //Denidir botão Ações
    function Definir_bt_acoes() {
        $.get($link+'php/conexao_funcoes.php',{
            funcao: 'ACAO'
            }, function(ACOES) {
                console.log('ACAO', ACOES);
                if(ACOES[0]["tipo"] == 'START') $("#bt_play_pause").html("Finalizar Trabalho");
                else $("#bt_play_pause").html("Iniciar Trabalho");
                $("#bt_play_pause").attr("datatime", ACOES[0]["datatime"]);
                $("#bt_play_pause").attr("data_cadastro", ACOES[0]["data_cadastro"]);
                $("#bt_play_pause").attr("usuario", ACOES[0]["usuario"]);
                $("#bt_play_pause").attr("funcao", ACOES[0]["funcao"]);
                $("#bt_play_pause").attr("desc", ACOES[0]["descricao"]);
                $("#bt_play_pause").attr("mi", ACOES[0]["mi"]);
                $("#bt_play_pause").attr("tipo", ACOES[0]["tipo"]);
                $("#bt_play_pause").attr("id_acao", ACOES[0]["id"]);
            }
        );
    }

    //cadastrar ação
    function cadastrar_editar_apagar_acao(usu, func, tip, desc = 'NULL', t = 'NULL', id_r = 'NULL', ac = 'INSERT', m = 'NULL'){
        $(".box-confirmacao-fundo").fadeIn();
        $("#spinner").fadeIn();
        $.get($link+'php/conexao_cadastrar_acao.php',{
            usuario: usu,
            funcao: func,
            tipo: tip,
            mi: m,
            descricao: desc,
            time: t,
            id_row: id_r,
            acao: ac
            }, function(result) {
                console.log('result', result);
                if(result.indexOf("Erro: ") >= 0) alert("Erro ao cadastrar ação de trabalho, fale como Administrador!");
                setTimeout(() => {  
                    $("#spinner").fadeOut();
                    $(".box-confirmacao-fundo").fadeOut();
                    location.reload(); 
                }, 2000);
                
            }
        );
    }

    function Desabilitar_botao_menu_lateral_pagina_atual(){
        $arr_url = String(location).split("/php/");
        $attr_link = $arr_url[1];
        if($arr_url[1].indexOf("?") > 0){
            $arr_url = $arr_url[1].split("?");
            $attr_link = $arr_url[0];
        }
        $(".botao-menu-lateral[link^='"+$attr_link+"']").css("opacity","50%").css("cursor","initial").css("background-color","blanchedalmond");
        $(".botao-menu-lateral[link^='"+$attr_link+"']").attr('paginaatual', 'ok');
    }

    function Centralizar_cabecalho(){
        $largura_nome_usuario = Converte_px_pt($("#nome-usuario").css("width"));
        $(".cabecalho").css("padding-left","calc( (var(--largura-pagina) - var(--largura-usuario-perfil) - " + $largura_nome_usuario + "pt - 700pt) / 2 )");
    }

    function Por_imagem_usuario_cabecalho(){
        $codigo = $("#usuario-perfil").attr("codigo");
        if($codigo != ""){
            $backgroud_imagem = "../img/usuario.png";
            $url = "../img/usuarios/"+$codigo+"/avatar";
            if(Existe($url+".jpg")) {
                $backgroud_imagem = $url+".jpg";
            }
            else if(Existe($url+".png")){
                $backgroud_imagem = $url+".png";
            }
            $("#usuario-perfil").css("background-image", "url('"+$backgroud_imagem+"')");
        }
        else{
            //Seção não iniciada
            $(".botao-menu-lateral:not('#botao-todos-mi')").css("opacity","50%").css("cursor","initial");
        }
    }

});