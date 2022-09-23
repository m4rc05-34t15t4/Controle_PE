$(document).ready(function(){
    
    $link = "../";

    $OPC_SELECT_TIPOS = `
        <option value="START">Iniciar Trabalho</option>
        <option value="SERVIÇO">Serviço</option>
        <option value="ALMOÇO">Almoço</option>
        <option value="FÉRIAS">Férias</option>
        <option value="MISSÃO">Missão</option>
        <option value="OUTROS">Outros</option>
        <option value="TFM">TFM</option>
        <option value="ADM">ADM</option>
        <option value="FINISH" selected>Finalizar Trabalho</option>`;

    $id = Get_url_variaveis();
    
    if( $id == -1) alert("A página precisa de um valor de ID, com o id específico do usuário, add no final da url ex: ?id=1");
    else $id = $id.get("id");

    lista_usuarios($id);
    
    Insere_dados_acoes_usuario($id);
    
    //EVENTOS

    //CHANGE

    $("#acoes-usuarios-select").change(function() {
        window.location.assign("Todas_acoes.php?id="+$(this).val().split("_")[0]);
    });

    //CLICK

    $("#bt-add-acoes-historico").click(function(){
        $msg = `
            <h5>Criar histórico ação</h5>
            <hr>
            <div id="div-criar-historico-acao">
                <input type="text" id="date_cadastrar_acao" value="${agora()}" maxlength="19">
                <select id="tipo_cadastrar_acao" class="">
                    ${$OPC_SELECT_TIPOS}
                </select>
                <input type="text" id="desc_cadastrar_acao" placeholder="Descrição">
            </div>`;
        $("#box-confirmacao_botoes_confirmar").attr("tipo", "add-acao-historico");
        $(".box-confirmacao_mensagem").html($msg);
        $(".box-confirmacao_botoes, .box-confirmacao_content, .box-confirmacao-fundo").fadeIn();
        $tp = 'FINISH';
        $desc = 'NULL';
        $usu = $("#usuario-perfil").attr("codigo");
        $func = $("#usuario-perfil").attr("funcao");
        $id_row = "";
    });

    //FUNÇÕES

    //Faz consulta SQL na tabela historico_acoes
    function Insere_dados_acoes_usuario(id){

        $.getJSON($link+'php/conexao_funcoes.php',{
            funcao: 'ACAO_USU',
            usu: id
            }, function(result) {

                console.log('ACAO_USU:', result, id);

                if(result["erro"]) alert("Erro ao consultar dados no servidor, Recarregue a página ou tente novamente mais tarde.");
                else if(result.length > 0){

                    $datatime_ant = "";
                    $tipo_ant = "";
                    $tipos_dados = {};
                    $now = new Date();
                    $nr_semana = getYearlyWeekNumber($now.getFullYear()+"-"+($now.getMonth()+1)+"-"+$now.getDate())["weekInYear"];
                    $mes = $now.getFullYear()+"-"+(($now.getMonth()+1) <= 9 ? "0" : "") + ($now.getMonth()+1);
                    result.reverse().forEach(function(v){
                        //console.log(v);
                        $d_time = "-";
                        if($datatime_ant != "") {
                            $d_time = diff($datatime_ant, v["datatime"]);
                            if($tipos_dados[$tipo_ant] == undefined) $tipos_dados[$tipo_ant] = {"time_total" : "0 00:00:00", "time_mes" : "0 00:00:00", "time_semana" : "0 00:00:00"};
                            $tipos_dados[$tipo_ant]["time_total"] = calc_time($tipos_dados[$tipo_ant]["time_total"], $d_time);
                            if(v["datatime"].slice(0,7) == $mes) $tipos_dados[$tipo_ant]["time_mes"] = calc_time($tipos_dados[$tipo_ant]["time_mes"], $d_time);
                            if(getYearlyWeekNumber(v["datatime"])["weekInYear"] == $nr_semana) $tipos_dados[$tipo_ant]["time_semana"] = calc_time($tipos_dados[$tipo_ant]["time_semana"], $d_time);
                        }
                        $datatime_ant = v["datatime"];
                        $tipo_ant = v["tipo"];
                        $descricao = v["descricao"] != null ? v["descricao"] : '-';
                        $item = `
                            <tr id="item-acao-id_${v["id"]}" class="item-acao-id">
                                <td class="item-lista-acao-data">${v["datatime"]}</td>
                                <td class="item-lista-acao-tipo">${v["tipo"]}</td>
                                <td class="item-lista-acao-dtime">${$d_time}</td>
                                <td class="item-lista-acao-desc">${$descricao}</td>
                            </tr>
                        `;
                        $("#acoes-conteudo-lista").prepend($item);
                    });
                    $("#acoes-conteudo-lista").prepend(`
                        <tr id="head-acao-id_0" class="item-acao-id">
                            <td class="head-lista-acao-data">Data</td>
                            <td class="head-lista-acao-tipo">Tipo</td>
                            <td class="head-lista-acao-dtime">Time</td>
                            <td class="head-lista-acao-descricao">Descição</td>
                        </tr>`
                    );

                    //grupos acoes
                    //console.log($tipos_dados);
                    $(".dados-acoes-grupos-time").html('<b>S:</b> 0 00:00:00<br><b>M:</b> 0 00:00:00<br><b>T:</b> 0 00:00:00');
                    $expediente = {"time_total" : "0 00:00:00", "time_mes" : "0 00:00:00", "time_semana" : "0 00:00:00"}
                    Object.keys($tipos_dados).forEach(function(g) {
                        $("#acoes-tipo-grupos-"+g.toLowerCase()+" .dados-acoes-grupos-time").html(
                            '<b>S:</b> '+$tipos_dados[g]["time_semana"]+'<br><b>M:</b> '+$tipos_dados[g]["time_mes"]+'<br><b>T:</b> '+$tipos_dados[g]["time_total"]
                        );
                        if(g.toLowerCase() != "finish") {
                            $expediente["time_total"] = calc_time($expediente["time_total"], $tipos_dados[g]["time_total"]);
                            $expediente["time_mes"] = calc_time($expediente["time_mes"], $tipos_dados[g]["time_mes"]);
                            $expediente["time_semana"] = calc_time($expediente["time_semana"], $tipos_dados[g]["time_semana"]);
                        }
                    });
                    $("#acoes-tipo-grupos-expediente .dados-acoes-grupos-time").html(
                        '<b>S:</b> '+$expediente["time_semana"]+'<br><b>M:</b> '+$expediente["time_mes"]+'<br><b>T:</b> '+$expediente["time_total"]
                    );

                    //HOVER 
                    $("#acoes-conteudo-esquerdo #acoes-conteudo-lista .item-acao-id").hover(function(){
                        $("#mini-menu-config-acoes").attr("attr_id", $(this).attr("id").split("_")[1]);
                        $p = $(this).offset();
                        $left = +$(this).css("width").split(".")[0] + +String($p["left"]).split(".")[0] - 50;
                        $("#mini-menu-config-acoes").css("display", "flex");
                        $("#mini-menu-config-acoes").css("top", $p["top"]);
                        $("#mini-menu-config-acoes").css("left", $left+"px");
                        $("#mini-menu-config-acoes").fadeIn();
                    });

                    $("#acoes-conteudo-direito, .cabecalho, .menu-lateral, .botao-menu-lateral").hover(function(){
                        $("#mini-menu-config-acoes").attr("attr_id", "");
                        $("#mini-menu-config-acoes").fadeOut();
                    });

                    //CLICK
                    $("#bt-editar").click(function(){
                        $id_tr_pai = $(this)[0]["parentNode"]["attributes"]["attr_id"]["nodeValue"];
                        $dados_td = {
                            "data": $("#item-acao-id_"+$id_tr_pai+" .item-lista-acao-data").html(),
                            "dtime": $("#item-acao-id_"+$id_tr_pai+" .item-lista-acao-dtime").html(),
                            "tipo": $("#item-acao-id_"+$id_tr_pai+" .item-lista-acao-tipo").html(),
                            "desc": $("#item-acao-id_"+$id_tr_pai+" .item-lista-acao-desc").html(),
                        };

                        if($dados_td["desc"] == '-') $dados_td["desc"] = '';

                        $msg = `
                            <h5>Editar item-id (${$id_tr_pai}) ?</h5>
                            <hr>
                            <div id="div-criar-historico-acao">
                                <input type="text" id="date_cadastrar_acao" value="${$dados_td["data"]}" maxlength="19">
                                <select id="tipo_cadastrar_acao" class="">
                                    ${$OPC_SELECT_TIPOS.replace(" selected", "").replace($dados_td["tipo"]+'"', $dados_td["tipo"]+'" selected')}
                                </select>
                                <input type="text" id="desc_cadastrar_acao" placeholder="Descrição" value="${$dados_td["desc"]}">
                            </div>`;
                        $("#box-confirmacao_botoes_confirmar").attr("tipo", "editar-acao-historico");
                        $(".box-confirmacao_mensagem").html($msg);
                        $(".box-confirmacao_botoes, .box-confirmacao_content, .box-confirmacao-fundo").fadeIn();
                        $tp = $dados_td["tipo"];
                        $desc = $dados_td["desc"];
                        $usu = $("#usuario-perfil").attr("codigo");
                        $func = $("#usuario-perfil").attr("funcao");
                        $id_row = $id_tr_pai;
                    });

                    $("#bt-excluir").click(function(){
                        $id_tr_pai = $(this)[0]["parentNode"]["attributes"]["attr_id"]["nodeValue"];
                        $dados_td = {
                            "data": $("#item-acao-id_"+$id_tr_pai+" .item-lista-acao-data").html(),
                            "dtime": $("#item-acao-id_"+$id_tr_pai+" .item-lista-acao-dtime").html(),
                            "tipo": $("#item-acao-id_"+$id_tr_pai+" .item-lista-acao-tipo").html(),
                            "desc": $("#item-acao-id_"+$id_tr_pai+" .item-lista-acao-desc").html(),
                        };

                        if($dados_td["desc"] == '-') $dados_td["desc"] = '';

                        $msg = `
                            <h5>Excluir item-id (${$id_tr_pai}) ?</h5>
                            <hr>
                            <table id="msg-confirmacao-table-excluir">
                                <tr>
                                    <td>Data</td>
                                    <td>Tipo</td>
                                    <td>Descrição</td>
                                </tr>
                                <tr>
                                    <td>${$dados_td["data"]}</td>
                                    <td>${$dados_td["tipo"]}</td>
                                    <td>${$dados_td["desc"]}</td>
                                </tr>
                            </table>`;
                        $("#box-confirmacao_botoes_confirmar").attr("tipo", "excluir-acao-historico");
                        $(".box-confirmacao_mensagem").html($msg);
                        $(".box-confirmacao_botoes, .box-confirmacao_content, .box-confirmacao-fundo").fadeIn();
                        $tp = 'START';
                        $desc = 'NULL';
                        $usu = $("#usuario-perfil").attr("codigo");
                        $func = $("#usuario-perfil").attr("funcao");
                        $id_row = $id_tr_pai;
                    });
                }
            }
        );
    }

    function lista_usuarios(id){
        $.get($link+'php/conexao_todos_usuarios.php', {
            funcao: "all",
            ordenar: "nome"
            }, 
            function(usuarios){
                console.log("Usuários: ", usuarios);
                if(usuarios == 0) alert("Erro ao consultar usuários!");
                else if(usuarios == 1) alert("Função não existe neste projeto!");
                else{
                    $usuarios = usuarios["usuarios"];
                    $post_grad = Array_to_dicionario_post_grad(usuarios["descricao_posto_graduacao"]);
                    $opc = "";
                    $usuarios.forEach(function(v){
                        $selected = "";
                        if(id == v["codigo"]) $selected = " selected";
                        $opc += `<option value="${v["codigo"]+"_"+v["funcao"]}"${$selected}>${v["nome"]} - ${$post_grad[v["posto_graduacao"]]["abrev"]}</option>`;
                    });
                    $("#acoes-usuarios-select").html($opc);
                }
            }
        );
    }
});