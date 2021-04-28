$(document).ready(function(){
    
    $link = "../";

    //Fases Edição Inseridos no Banco de Dados Controle na Tabela Fases_Edicao
    let AQUISICAO = "Aq. Hidro";
    let ADEQUACAO = "Adequação";
    let CQ1 = "C. Qualidade";
    let EDICAO = "Edição";
    let REV1 = "1ª Rev.";
    let CORR1 = "1ª Correção";
    let REV2 = "2ª Rev.";
    let REVHID = "Rev. Hidro";
    let CORR2 = "2ª Correção";
    
    Recarregar_pagina_resize();

    $lista_cartas_em_aquisicao = [];
    $lista_cartas_em_adequacao = [];
    $lista_cartas_em_edicao = [];
    $lista_cartas_em_revisao = [];
    $lista_cartas_em_correcao1 = [];
    $lista_cartas_em_correcao2 = [];
    $lista_cartas_pendentes = [];
    $lista_cartas_reservadas_adequacao = [];
    $lista_cartas_reservadas_aquisicao = [];
    $lista_cartas_reservadas_edicao = [];
    $lista_cartas_reservadas_revisao = [];
    $lista_cartas_reservadas_correcao1 = [];
    $lista_cartas_reservadas_correcao2 = [];
    $carta_atual_em_trabalho = []
    $dificuldade_ultima_carta_adquirida = "";
    $dificuldade_ultima_carta_adequada = "";
    $dificuldade_ultima_carta_editada = "";
    $editor_ultima_carta_revisada = "";
    $dificuldade_ultima_carta_revisada = "";
    $descricao_funcoes = "";

    $id = Get_url_variaveis();
    if( $id == -1){
        alert("A página precisa de um valor de ID, com o id específico do usuário, add no final da url ex: ?id=1");
    }
    else{

        $id = $id.get("id");
        
        Insere_dados_variaveis_auxiliares_usuario($id);
        
    }
    
    //EVENTOS

    $(".usuario-botao-iniciar-finalizar").click(function() {
        $texto = $(this).text();
        $(".box-confirmacao_mensagem").html($texto+"?");
        $(".box-confirmacao_botoes, .box-confirmacao_content, .box-confirmacao-fundo").fadeIn();
        
        //confirmado
        $("#box-confirmacao_botoes_confirmar").click(function() {
            $(".box-confirmacao_botoes, .box-confirmacao_content, .box-confirmacao-fundo").fadeOut();
            switch($texto){
                case "Iniciar "+AQUISICAO:
                    Pedir_carta("php/conexao_pedir_carta_aquisicao.php", $dificuldade_ultima_carta_adquirida, null, "AqHid");
                    break;
                case "Finalizar "+AQUISICAO:
                    Finalizar_carta("AqHid");
                    break;
                case "Iniciar "+REVHID:
                    Pedir_carta("php/conexao_pedir_carta_revisao.php", $dificuldade_ultima_carta_revisada, $editor_ultima_carta_revisada, "hid");
                    break;
                case "Finalizar "+REVHID:
                    Finalizar_carta("RevHid");
                    break;
                case "Iniciar "+ADEQUACAO:
                    Pedir_carta("php/conexao_pedir_carta_adequacao.php", $dificuldade_ultima_carta_adequada, null, "AdVet");
                    break;
                case "Finalizar "+ADEQUACAO:
                    Finalizar_carta("AdVet");
                    break;
                case "Iniciar "+CQ1:
                    Pedir_carta("php/conexao_pedir_carta_revisao.php", $dificuldade_ultima_carta_revisada, $editor_ultima_carta_revisada, "cq1");
                    break;
                case "Finalizar "+CQ1:
                    Finalizar_carta("CQ1");
                    break;
                case "Iniciar Edição":
                    Pedir_carta("php/conexao_pedir_carta_edicao.php", $dificuldade_ultima_carta_editada, "edicao");
                    break;
                case "Finalizar "+EDICAO:
                    Finalizar_carta("edicao");
                    break;
                case "Iniciar "+REV1:
                    Pedir_carta("php/conexao_pedir_carta_revisao.php", $dificuldade_ultima_carta_revisada, $editor_ultima_carta_revisada, "rev1");
                    break;
                case "Finalizar "+REV1:
                    Finalizar_carta("1rev");
                    break;
                case "Iniciar "+CORR1:
                    Pedir_carta("php/conexao_pedir_carta_correcao.php", null, null, "1");
                    break;
                case "Finalizar "+CORR1:
                    Finalizar_carta("correcao1");
                    break;
                case "Iniciar "+REV2:
                    Pedir_carta("php/conexao_pedir_carta_revisao.php", $dificuldade_ultima_carta_revisada, $editor_ultima_carta_revisada, "rev2");
                    break;
                case "Finalizar "+REV2:
                    Finalizar_carta("2rev");
                    break;
                case "Iniciar "+CORR2:
                    Pedir_carta("php/conexao_pedir_carta_correcao.php", null, null, "2");
                    break;
                case "Finalizar "+CORR2:
                    Finalizar_carta("correcao2");
                    break;
            }
        });
        //cancelado
        $(".box-confirmacao-fundo, #box-confirmacao_botoes_cancelar").click(function() {
            $(".box-confirmacao_botoes, .box-confirmacao_content, .box-confirmacao-fundo").fadeOut();
        });
    });

    //FUNÇÕES

    //Pedir carta
    function Pedir_carta(url, dificuldade_ultima_carta, editor_ultima_carta, tipo_fase, carta = null){
        console.log($id, url, dificuldade_ultima_carta, editor_ultima_carta, tipo_fase, carta);
        $.get($link+url,{
            usuario: $id,
            dificuldade: dificuldade_ultima_carta,
            editor: editor_ultima_carta,
            tipo: tipo_fase,
            mi: carta
            }, function(pedido) {
                console.log(pedido);
                switch(parseInt(pedido)){
                    case 0:
                        alert("Requisição faltando parâmetros");
                        break;
                    case 1:
                        alert("Valor da próxima dificuldade errada");
                        break;
                    case 2:
                        alert("Usuário que solicitou o pedido, não foi o atualizado para carta no banco, necessário entrar em contato com o Adm do Banco para ajustar as pendências no controle.");
                        break;
                    case 3:
                        alert("Não houve conexão com o banco de dados, possívelmente não solicitou carta. Se a carta aparecer na lista de pendentes, verifique com adm!");
                        break;
                    case 4: 
                        alert("Não existe carta disponível, verifique com adm!");
                        break;
                    case 5: 
                        alert("Id do editor da sua última revisão, está inválido, verifique com adm!");
                        break;
                    case 6: 
                        alert("Sem cartas disponíveis, fale com adm!");
                        break;
                    case 7: 
                        alert("Tipo_Fase inválido!");
                        break;
                    case 10: 
                        //alert("Carta Solicitada com Sucesso!");
                        recarregarPagina();
                        break;
                    default:
                        alert("Houve algum erro. Verifique com o Adm do banco!");
                        break;
                }
            }
        );
    }

    //Finalizar carta
    function Finalizar_carta(tipo_fase){
        //pega o mi que irá ser finalizado
        $mi = $(".usuario-trabalho-informacoes").text();
        if($mi.indexOf("(") > 5){
            $arr = $mi.split(" ");
            $mi = $arr[0];

            $.get($link+"php/conexao_finalizar_carta.php",{
                usuario: $id,
                mi: $mi,
                tipo: tipo_fase
                }, function(finalizacao) {
                    switch(parseInt(finalizacao)){
                        case 0:
                            alert("Requisição faltando parâmetros");
                            break;
                        case 1:
                            alert("Valor do MI errado");
                            break;
                        case 2:
                            alert("Não houve conexão com o banco de dados, possívelmente não solicitou carta. Se a carta aparecer na lista de pendentes, verifique com adm!");
                            break;
                        case 3:
                            alert("Tipo da fase definido com valor errado!");
                            break;
                        case 10:
                            //alert("Carta: "+$mi+" Terminada com sucesso!");
                            recarregarPagina();
                            break;
                        default:
                            alert("Houve algum erro. Verifique com o Adm do banco!");
                            break;
                    }
                }
            );
        }
    }

    //Faz consulta SQL na tabela edicao usuarios e fases_edicao ($lista_edicao.get("1436-4-NE")["mi"])
    function Insere_dados_variaveis_auxiliares_usuario(id){
        
        $.getJSON($link+'php/conexao_usuario.php',{
            id: id
            }, function(listas) {

            console.log(listas);

            if(listas != 0){

                Insere_historico_cartas_adquiridas(listas["lista_cartas_adquiridas"]);

                Insere_historico_cartas_adequadas(listas["lista_cartas_adequadas"]);
                
                Insere_historico_cartas_editadas(listas["lista_cartas_editadas"]);

                Insere_historico_cartas_revisadas(listas["lista_cartas_revisadas"]);

                Configura_conteudo_central(id);
                
                Inserir_nome_e_funcoes(listas["usuario"], listas["funcoes"]);

                Inserir_trabalho_atual_e_pendentes(listas["status"]);

            }
            else{
                alert("Erro ao consudar dados no servidor, Recarregue a página ou tente novamente mais tarde.");
            }
        });
    }

    //Insere carta em trabalho e lista de pendentes ///VERIFICAR
    function Inserir_trabalho_atual_e_pendentes(lista_status){
        $elemento_em_trabalho = [];
        
        if($lista_cartas_em_correcao2.length > 0){
            $elemento_em_trabalho.push($lista_cartas_em_correcao2.shift());
        }
        else if($lista_cartas_em_correcao1.length > 0){
            $elemento_em_trabalho.push($lista_cartas_em_correcao1.shift());
        }
        else if( $lista_cartas_em_edicao.length > 0 || $lista_cartas_em_revisao.length > 0 || $lista_cartas_em_adequacao.length > 0 || $lista_cartas_em_aquisicao.length > 0){

            $array = [];
            $array = $array.concat($lista_cartas_em_aquisicao).concat($lista_cartas_em_adequacao).concat($lista_cartas_em_edicao).concat($lista_cartas_em_revisao);
            $array.sort(function(a,b){ Comparacao_data_string(a,b) });

            switch($array[0]["tipo"]){
                case "aquisicao":
                    $elemento_em_trabalho.push($lista_cartas_em_aquisicao.pop());
                    break;
                case "adequacao":
                    $elemento_em_trabalho.push($lista_cartas_em_adequacao.pop());
                    break;
                case "edicao":
                    $elemento_em_trabalho.push($lista_cartas_em_edicao.pop());
                    break;
                case "revisao":
                    $elemento_em_trabalho.push($lista_cartas_em_revisao.pop());
                    break;
            }
            
        }

        //Add a lista de cartas pendentes
        $lista_cartas_reservadas_aquisicao = $lista_cartas_em_aquisicao.concat($lista_cartas_reservadas_aquisicao);
        $lista_cartas_reservadas_adequacao = $lista_cartas_em_adequacao.concat($lista_cartas_reservadas_adequacao);
        $lista_cartas_reservadas_edicao = $lista_cartas_em_edicao.concat($lista_cartas_reservadas_edicao);
        $lista_cartas_reservadas_revisao = $lista_cartas_em_revisao.concat($lista_cartas_reservadas_revisao);
        $lista_cartas_reservadas_correcao1 = $lista_cartas_em_correcao1.concat($lista_cartas_reservadas_correcao1);
        $lista_cartas_reservadas_correcao2 = $lista_cartas_em_correcao2.concat($lista_cartas_reservadas_correcao2);

        $lista_cartas_em_aquisicao = [];
        $lista_cartas_em_adequacao = [];
        $lista_cartas_em_revisao = [];
        $lista_cartas_em_edicao = [];
        $lista_cartas_em_correcao1 = [];
        $lista_cartas_em_correcao2 = [];

        $status_tb = 0;
        if($elemento_em_trabalho.length > 0) $status_tb = parseFloat($elemento_em_trabalho[0]["status"]);
        if($elemento_em_trabalho.length > 0 && ($status_tb == 1.256 || $status_tb == 1.64 || $status_tb == 2.1 || $status_tb == 2.4 || $status_tb == 3.1 || $status_tb == 3.4 || $status_tb == 3.16 ) ){

                //retira o primeiro elemento que é o trabalho atual e mostra no layout
                $carta_atual_em_trabalho = $elemento_em_trabalho.shift();
                
                //dias
                $dias = " há "+$carta_atual_em_trabalho["dias"]+" dia";
                if(parseInt($carta_atual_em_trabalho["dias"]) == 0){
                    
                    $dias = " há "+$carta_atual_em_trabalho["tempo"];
                    if($carta_atual_em_trabalho["tempo"] == "00h00"){
                        $dias = " a partir de agora";
                    }

                }else if($carta_atual_em_trabalho["dias"] > 1){
                    $dias += "s";
                }
                
                //insere no html
                $status = Status_texto_em_trabalho($carta_atual_em_trabalho["status"]);
                if($status == ""){
                    alert("Erro ao verificar carta em trabalho fale com Adm!");
                }

                $(".usuario-trabalho-informacoes").html("<a href=\"Mi_informacoes.php?mi="+$carta_atual_em_trabalho["mi"]+"\">"+$carta_atual_em_trabalho["mi"]+
                    "</a> <span class=\"descricao-funcoes-descricao\">( "+$status+$dias+" ) </span>");
                Mostrar_botao_iniciar_finalizar("Finalizar");

        }
        else if($elemento_em_trabalho.length > 0){
            
            //Add para cartas pendentes, pois, esta carta não está com status necessáriom está finalizada em alguma fase
            $lista_cartas_pendentes = $elemento_em_trabalho.concat($lista_cartas_pendentes);
            
            //alerta ao usuario que ha cartas pendentes
            alert("Verifique as cartas pendentes!");
           
            Pedir_outra_carta();
        }
        else{
            Pedir_outra_carta();
        }

        Insere_Descricao_Funcoes_SE_Fora_Producao($carta_atual_em_trabalho);
        
        Inserir_Reservadas_e_Pendentes();

    }

    //Retorna o texto adequado para carta status em trabalho
    function Status_texto_em_trabalho(valor){
        $status = "";
        switch(valor){
            case "1.64":
                $status = AQUISICAO;
                break;
            case "1.256":
                $status = REVHID;
                break;
            case "2.1":
                $status = ADEQUACAO;
                break;
            case "2.4":
                $status = CQ1;
                break;
            case "3.1":
                $status = EDICAO;
                break;
            case "3.4":
                $status = REV1;
                break;
            case "3.16":
                $status = REV2;
                break;
        }
        return $status
    }

    function Comparacao_data_string(a,b, data = "inicio"){
        if(a[data] !== undefined && b[data] !== undefined) return b[data] > a[data];
    }

    //Inserir cartas reservadas
    function Inserir_Reservadas_e_Pendentes(){
        /*
        $lista_cartas_reservadas_correcao2.reverse();
        Popula_reservadas_e_pendentes($lista_cartas_reservadas_correcao2, CORR2, true);
        $lista_cartas_reservadas_correcao1.reverse();
        Popula_reservadas_e_pendentes($lista_cartas_reservadas_correcao1, "1ª Correção", true);
        */
        Popula_reservadas_e_pendentes($lista_cartas_reservadas_aquisicao, "Reservadas Aquisição", true);
        Popula_reservadas_e_pendentes($lista_cartas_reservadas_adequacao, "Reservadas Adequação", true);
        Popula_reservadas_e_pendentes($lista_cartas_reservadas_edicao, "Reservadas Edição", true);
        Popula_reservadas_e_pendentes($lista_cartas_reservadas_revisao, "Reservadas Revisão", true);
        Popula_reservadas_e_pendentes($lista_cartas_pendentes, "Pendentes");
    }
    
    //Inserir cartas pendentes
    function Popula_reservadas_e_pendentes(lista_cartas, titulo, dias){
        if(lista_cartas.length > 0){
            $(".usuario-trabalho-pendentes").append("<p>"+titulo+": ("+lista_cartas.length+")</p>");
            $(".usuario-trabalho-pendentes").append("<br>");
            lista_cartas.forEach(function(valor){
                //console.log(valor);
                $dias = "";
                if(valor["dias"]){
                    if((dias == true) && (parseInt(valor["dias"]) > 0)){
                        $dias = "<b> - "+valor["dias"]+" dias</b>";
                    }
                    else if((dias == true) && (parseInt(valor["dias"]) == 0)){
                        $dias = "<b> - de hoje</b>";
                    }
                    $(".usuario-trabalho-pendentes").append("<a href=\"Mi_informacoes.php?mi="+valor["mi"]+"\">"+valor["mi"]+$dias+"</a><br>");
                }
            })
        }
    }

    //processos para pedir outra carta
    function Pedir_outra_carta(){
        $(".usuario-trabalho-informacoes").html("Peça outra carta!");
        $(".usuario-trabalho-informacoes").css("cursor", "inherit");
        Mostrar_botao_iniciar_finalizar("Iniciar");
    }

    //Apresentar Botão iniciar-finalizar
    function Mostrar_botao_iniciar_finalizar(texto){

        if(texto == "Finalizar"){
            
            $texto_botao_iniciar_finalizar = $(".usuario-trabalho-informacoes").text();
            $texto_botao = texto+" ";

            if($texto_botao_iniciar_finalizar.indexOf(AQUISICAO) > 0) $texto_botao += AQUISICAO;
            else if($texto_botao_iniciar_finalizar.indexOf(CQ1) > 0) $texto_botao += CQ1;
            else if($texto_botao_iniciar_finalizar.indexOf(ADEQUACAO) > 0) $texto_botao += ADEQUACAO;
            else if($texto_botao_iniciar_finalizar.indexOf(REVHID) > 0) $texto_botao += REVHID;
            else if($texto_botao_iniciar_finalizar.indexOf(EDICAO) > 0) $texto_botao += EDICAO;
            else if($texto_botao_iniciar_finalizar.indexOf(REV1) > 0) $texto_botao += REV1;
            else if($texto_botao_iniciar_finalizar.indexOf(CORR1) > 0) $texto_botao += CORR1;
            else if($texto_botao_iniciar_finalizar.indexOf(REV2) > 0) $texto_botao += REV2;
            else if($texto_botao_iniciar_finalizar.indexOf(CORR2) > 0) $texto_botao += CORR2;

            Inserir_Texto_Botao_Iniciar_Finalizar_Carta($texto_botao);

        }
        else{

            $texto_botao_iniciar_finalizar = String($(".usuario-funcao").text());
            
             //BOTÃO INICIAR AQUISICAO
             if($texto_botao_iniciar_finalizar.indexOf("Aquisitor") >= 0){
                Inserir_Texto_Botao_Iniciar_Finalizar_Carta(texto+" "+AQUISICAO);
            }
            
            //BOTÃO INICIAR ADEQUACAO
            if($texto_botao_iniciar_finalizar.indexOf("Adequador") >= 0){
                Inserir_Texto_Botao_Iniciar_Finalizar_Carta(texto+" "+ADEQUACAO);
            }
            
            //BOTÃO INICIAR EDIÇÃO
            if($texto_botao_iniciar_finalizar.indexOf("Editor") >= 0){
                Inserir_Texto_Botao_Iniciar_Finalizar_Carta(texto+" "+EDICAO);
            }

            //BOTÃO INICIAR REVISÃO SE O REVISOR, se POSSUI AS DUAS FUNÇÕES mostrará apenas a segunda revisão, pois, é prioridade
            if($texto_botao_iniciar_finalizar.indexOf("2º Revisor") >= 0){
                Inserir_Texto_Botao_Iniciar_Finalizar_Carta(texto+" "+REV2);
            }
            else if($texto_botao_iniciar_finalizar.indexOf("1º Revisor") >= 0){
                Inserir_Texto_Botao_Iniciar_Finalizar_Carta(texto+" "+REV1);
            }
            else if($texto_botao_iniciar_finalizar.indexOf("Revisor Hidro") >= 0){
                Inserir_Texto_Botao_Iniciar_Finalizar_Carta(texto+" "+REVHID);
            }
            else if($texto_botao_iniciar_finalizar.indexOf("Controlador de Qualidade") >= 0){
                Inserir_Texto_Botao_Iniciar_Finalizar_Carta(texto+" "+CQ1);
            }
        }
    }

    //Insere Cartas em Pausa
    function Insere_Descricao_Funcoes_SE_Fora_Producao(carta_em_trabalho){
        if( String($(".usuario-funcao").text()).indexOf("Editor") < 0 && String($(".usuario-funcao").text()).indexOf("Revisor") < 0  && 
            String($(".usuario-funcao").text()).indexOf("Adequador") < 0 && String($(".usuario-funcao").text()).indexOf("Aquisitor") < 0 && 
            String($(".usuario-funcao").text()).indexOf("Controlador") < 0){
            //Add Descrição funções
            Esconder_Botao_Finalizar_Iniciar();
            $(".usuario-trabalho-informacoes").html($descricao_funcoes);

            //ADD CARTAS EM PAUSA
            Popula_reservadas_e_pendentes(carta_em_trabalho, "EM Pausa", true);
        }
    }

    //Insere Texto mo Botão de finalizar e pedir carta
    function Inserir_Texto_Botao_Iniciar_Finalizar_Carta(texto_botao){
        
        //Define qual botão utilizar
        $tipo_texto = "edicao";
        if((texto_botao.indexOf(REV2) > 0) || (texto_botao.indexOf(REV1) > 0) || (texto_botao.indexOf(REVHID) > 0) || (texto_botao.indexOf(CQ1) > 0)){
            $tipo_texto = "revisao";
        }
        else if(texto_botao.indexOf(ADEQUACAO) > 0){
            $tipo_texto = "adequacao";
        }
        else if(texto_botao.indexOf(AQUISICAO) > 0){
            $tipo_texto = "aquisicao";
        }

        //Verifica se há cartas para corrigir e mostra o Botão referente
        if((texto_botao.indexOf("Finalizar") < 0) && ( ($lista_cartas_reservadas_correcao1.length > 0) || ($lista_cartas_reservadas_correcao2.length > 0) )){
            $tipo_texto = "edicao";
            
            if($lista_cartas_reservadas_correcao2.length > 0){
                texto_botao = "Iniciar "+CORR2;
            }
            else{
                texto_botao = "Iniciar "+CORR1;
            }
            Insere_Cor_botao($tipo_texto, "#CD6600", "#FF7F00", "#FFA500");
        }
        else if(texto_botao.indexOf("Finalizar") >= 0){
            //Setagem de cor finalizar
            Esconder_Botao_Finalizar_Iniciar();
            Insere_Cor_botao($tipo_texto, "#F00", "#F33", "#F66");
        }

        $("#botao_finalizar_iniciar_"+$tipo_texto+" div").html(texto_botao);
        $("#botao_finalizar_iniciar_"+$tipo_texto).css("display", "flex");

    }

    //Esconder Botão Finalizar e Iniciar Carta
    function Esconder_Botao_Finalizar_Iniciar(){
        $("#botao_finalizar_iniciar_revisao, #botao_finalizar_iniciar_edicao, #botao_finalizar_iniciar_adequacao, #botao_finalizar_iniciar_aquisicao").css("display", "none");
    }

    //Setagem de cor do botao de finalizar e pedir carta
    function Insere_Cor_botao(tipo_texto_b, borda, fundo, hover){
        $("#botao_finalizar_iniciar_"+tipo_texto_b).css("border", "1pt solid "+borda);
        $("#botao_finalizar_iniciar_"+tipo_texto_b).css("background-color", fundo);
        $("#botao_finalizar_iniciar_"+tipo_texto_b+" div").hover(function(){
            $("#botao_finalizar_iniciar_"+tipo_texto_b).css("background-color", hover);
        })
        $("#botao_finalizar_iniciar_"+tipo_texto_b+" div").mouseout(function(){
            $("#botao_finalizar_iniciar_"+tipo_texto_b).css("background-color", fundo);
        })
    }

    //Insere histórico de cartas adequadas
    function Insere_historico_cartas_adequadas(lista_cartas_adequadas){
        $historico_cartas_adequadas = "";
        $contador = 0;
        //se = 0, não há cartas adequadas ou em adequação para este usuario
        if(lista_cartas_adequadas != 0){
            
            //add dificuldade de ultima carta editada ou em edicao
            $dificuldade_ultima_carta_adequada = lista_cartas_adequadas[0]["niveis"];

            //distribui as finalizadas e as em andamento
            lista_cartas_adequadas.forEach(function(valor, key){

                //Pendentes referente a data e tempo cartas
                if( ( (valor["dias"] == "") && (valor["dias"] != 0) ) || (valor["tempo"] == "") ){
                    Add_lista_cartas_pendentes(valor);
                }
                
                //Historico cartas adequadas
                if( (String(valor["termino"]).indexOf("-") > 0) && (String(valor["inicio"]).indexOf("-") > 0) ){

                    $historico_cartas_adequadas += "<a href=\"Mi_informacoes.php?mi=" + valor["mi"] + "\"><div>" + valor["mi"] + "<p>" +
                        RetirarTime(valor["termino"]) + " "+valor["adequacao"].toUpperCase()+"</p><br></div></a>";
                    
                    $contador++;

                    //verifica se o status ta correto para uma carta ja adequada
                    if(parseFloat(valor["status"]) <= 2.0){
                        Add_lista_cartas_pendentes(valor);
                    }
                }
                else if((String(valor["inicio"]).indexOf("-") > 0) && (String(valor["termino"]).indexOf("-") < 0) && parseFloat(valor["status"]) > 2.0 && 
                    parseFloat(valor["status"]) == 2.1 ){
                    $lista_cartas_em_adequacao.push(valor);
                }
                else if( String(valor["inicio"]).indexOf("-") < 0 && String(valor["termino"]).indexOf("-") < 0 && 
                    parseFloat(valor["status"]) < 2.4 ){
                    $lista_cartas_reservadas_adequacao.push(valor);
                }
                else{
                    Add_lista_cartas_pendentes(valor);
                }
            }) 
        }
        else{
            $dificuldade_ultima_carta_adequada = "Fácil";
        }
        
        //console.log("ADEQUADAS: ",$historico_cartas_adequadas);
        $(".usuario-historico-titulo-adequadas").html("Adequadas: ("+$contador+")");
        $(".usuario-cartas-adequadas").html($historico_cartas_adequadas);
    }

    //Insere histórico de cartas adquiridas
    function Insere_historico_cartas_adquiridas(lista_cartas_adquiridas){
        $historico_cartas_adquiridas = "";
        $contador = 0;
        //se = 0, não há cartas adequadas ou em adequação para este usuario
        if(lista_cartas_adquiridas != 0){
            
            //add dificuldade de ultima carta adquirida ou em aquisicao
            $dificuldade_ultima_carta_adquirida = lista_cartas_adquiridas[0]["niveis"];

            //distribui as finalizadas e as em andamento
            lista_cartas_adquiridas.forEach(function(valor, key){

                //Pendentes referente a data e tempo cartas
                if( ( (valor["dias"] == "") && (valor["dias"] != 0) ) || (valor["tempo"] == "") ){
                    Add_lista_cartas_pendentes(valor);
                }
                
                //Historico cartas adquiridas
                if( (String(valor["termino"]).indexOf("-") > 0) && (String(valor["inicio"]).indexOf("-") > 0) ){

                    $historico_cartas_adquiridas += "<a href=\"Mi_informacoes.php?mi=" + valor["mi"] + "\"><div>" + valor["mi"] + "<p>" +
                        RetirarTime(valor["termino"]) + " "+valor["aquisicao"].toUpperCase()+"</p><br></div></a>";
                    $contador++;

                    //verifica se o status ta correto para uma carta ja adiquirida
                    if( parseFloat(valor["status"]) < 1.64 && parseFloat(valor["status"]) != 1.128 && parseFloat(valor["status"])  != 1.256 ){
                        Add_lista_cartas_pendentes(valor);
                    }
                }
                else if((String(valor["inicio"]).indexOf("-") > 0) && (String(valor["termino"]).indexOf("-") < 0) && parseFloat(valor["status"]) == 1.64 ){
                    $lista_cartas_em_aquisicao.push(valor);
                }
                else if( String(valor["inicio"]).indexOf("-") < 0 && String(valor["termino"]).indexOf("-") < 0 && 
                    parseFloat(valor["status"]) < 1.64 && parseFloat(valor["status"]) != 1.128 && parseFloat(valor["status"]) != 1.256 ){
                    $lista_cartas_reservadas_aquisicao.push(valor);
                }
                else{
                    Add_lista_cartas_pendentes(valor);
                }
            }) 
        }
        else{
            $dificuldade_ultima_carta_adquirida = "Fácil";
        }

        //console.log("em aquisição: ",$lista_cartas_em_aquisicao);
        $(".usuario-historico-titulo-adquiridas").html("Adquiridas: ("+$contador+")");
        $(".usuario-cartas-adquiridas").html($historico_cartas_adquiridas);
    }

    //Insere histórico de cartas editadas
    function Insere_historico_cartas_editadas(lista_cartas_editadas){
        $historico_cartas_editadas = "";
        $contador = 0;
        //se = 0, não há cartas editadas ou em edição para este usuario
        if(lista_cartas_editadas != 0){
            
            //add dificuldade de ultima carta editada ou em edicao
            $dificuldade_ultima_carta_editada = lista_cartas_editadas[0]["niveis"];

            //distribui as finalizadas e as em andamento
            lista_cartas_editadas.forEach(function(valor, key){

                //Add_Lista_Correcao(valor);

                //Pendentes referente a data e tempo cartas
                if( ( (valor["dias"] == "") && (valor["dias"] != 0) ) || (valor["tempo"] == "") ){
                    Add_lista_cartas_pendentes(valor);
                }
                
                //Historico cartas editadas
                if( String(valor["terminoedicao"]).indexOf("-") > 0 && String(valor["inicioedicao"]).indexOf("-") > 0 ){
                    /*
                    $corrigida = "";
                    $img_corrigida = "<img class=\"checked\" src=\"../img/checked.png\" />";
                    
                    if(String(valor["terminocorrecao2"]).indexOf("-") > 0){
                        $corrigida += $img_corrigida;
                    }

                    if(String(valor["terminocorrecao1"]).indexOf("-") > 0){
                        $corrigida += $img_corrigida;
                    }
                    */
                    $historico_cartas_editadas += "<a href=\"Mi_informacoes.php?mi=" + valor["mi"] + "\"><div>" + valor["mi"] + "<p>" +
                        RetirarTime(valor["terminoedicao"])+"</p><br></div></a>";
                        //RetirarTime(valor["terminoedicao"]) + " "+$corrigida+"</p><br></div></a>";
                    
                    $contador++;

                    //verifica se o status ta correto para uma carta ja editada
                    if(parseFloat(valor["status"]) < 3.2){
                        Add_lista_cartas_pendentes(valor);
                    }
                }
                else if( String(valor["inicioedicao"]).indexOf("-") > 0 && String(valor["terminoedicao"]).indexOf("-") < 0 && parseFloat(valor["status"]) == 3.1 ){
                    $lista_cartas_em_edicao.push(valor);
                }
                else if(String(valor["inicioedicao"]).indexOf("-") < 0 && String(valor["terminoedicao"]).indexOf("-") < 0 && parseFloat(valor["status"]) < 3.1){
                    $lista_cartas_reservadas_edicao.push(valor);
                }
                else{
                    Add_lista_cartas_pendentes(valor);
                }
            })
        }
        else{
            $dificuldade_ultima_carta_editada = "Fácil";
        }

        //console.log("EDITADAS:",$historico_cartas_editadas);
        $(".usuario-historico-titulo-editadas").html("Editadas: ("+$contador+")");
        $(".usuario-cartas-editadas").html($historico_cartas_editadas);
    }

    //Insere histórico de cartas revisadas
    function Insere_historico_cartas_revisadas(lista_cartas_revisadas){
        $historico_cartas_revisadas = "";
        $contador = 0;
         //se = 0, não há cartas revisadas ou em revisão para este usuario
        if(lista_cartas_revisadas != 0){

            //add dificuldade de ultima carta editada ou em edicao
            $dificuldade_ultima_carta_revisada = lista_cartas_revisadas[0]["niveis"];
            $editor_ultima_carta_revisada = lista_cartas_revisadas[0]["operador"];

            //verifica as que estão finalizadas e as em andamento
            lista_cartas_revisadas.forEach(function(valor, key){
                
                if((String(valor["inicio"]).indexOf("-") > 0) && (String(valor["termino"]).indexOf("-") > 0)){
                    $tipo = "(";
                    switch(valor["rev"]){
                        case "rev1":
                            $tipo += REV1;
                            break;
                        case "rev2":
                            $tipo += REV2;
                            break;
                        case "hid":
                            $tipo += REVHID;
                            break;
                        case "cq1":
                            $tipo += CQ1;
                            break;
                    }
                    $tipo += ")";
                    $historico_cartas_revisadas += "<a href=\"Mi_informacoes.php?mi="+valor["mi"]+"\"><div>"+valor["mi"]+"<p>"+ RetirarTime(valor["termino"]) +
                        " "+$tipo+"</p><br></div></a>";
                    $contador++;
                    
                    //verifica se o status ta correto para uma carta ja revisada
                    if( ( valor["rev"] == "rev2" && parseFloat(valor["status"]) < 4.0 && parseFloat(valor["status"]) != 3.16 ) || 
                        ( valor["rev"] == "rev1" && parseFloat(valor["status"]) < 3.8 && parseFloat(valor["status"]) != 3.4 && parseFloat(valor["status"]) != 3.16 ) || 
                        ( valor["rev"] == "cq1" && parseFloat(valor["status"]) < 3 ) || 
                        ( valor["rev"] == "hid" && parseFloat(valor["status"]) < 2 && parseFloat(valor["status"]) != 1.128 && parseFloat(valor["status"]) !=  1.256 ) ){
                            Add_lista_cartas_pendentes(valor);
                    }
                }
                else if((String(valor["inicio"]).indexOf("-") > 0)){
                    $lista_cartas_em_revisao.push(valor);
                }
                else if( String(valor["inicio"]).indexOf("-") < 0 && String(valor["termino"]).indexOf("-") < 0 && 
                    ( (valor["rev"] == "rev2" && parseFloat(valor["status"]) < 4 && parseFloat(valor["status"]) != 3.16) || 
                        (valor["rev"] == "rev1" && parseFloat(valor["status"]) < 3.4 && parseFloat(valor["status"]) != 3.8) || 
                        (valor["rev"] == "cq1" && parseFloat(valor["status"]) < 2.4 ) || 
                        (valor["rev"] == "hid" && parseFloat(valor["status"]) < 2 && parseFloat(valor["status"]) != 1.256) ) ){
                    $lista_cartas_reservadas_revisao.push(valor);
                }
                else {
                    Add_lista_cartas_pendentes(valor);
                }
            })
        }
        else{
            $dificuldade_ultima_carta_revisada = "Fácil";
            $editor_ultima_carta_revisada = $id;
        }

        //console.log("REVISADAS: ",$historico_cartas_revisadas);
        $(".usuario-historico-titulo-revisadas").html("Revisadas: ("+$contador+")");
        $(".usuario-cartas-revisadas").html($historico_cartas_revisadas);
    }

    //Add carta a lista de cartas correção 1
    function Add_Lista_Correcao(valor){

        if((parseFloat(valor["status"]) == 3.8)){
            $lista_cartas_reservadas_correcao1.push(valor);
        }
        //Lista cartaspara 2ª Correção
        if((parseFloat(valor["status"]) == 3.128)){
            $lista_cartas_reservadas_correcao2.push(valor);
        }
        
        //Em Correção
        if((parseFloat(valor["status"]) == 3.16)){
            $lista_cartas_em_correcao1.push(valor);
        }
        else if((parseFloat(valor["status"]) == 3.256)){
            $lista_cartas_em_correcao2.push(valor);
        }
    }

    //Add carta a lista de cartas pendentes
    function Add_lista_cartas_pendentes(carta_add){
        if($lista_cartas_pendentes.indexOf(carta_add) < 0){
            $lista_cartas_pendentes.push(carta_add);
        }
    }

    //Insere o nome do usuario e suas funções
    function Inserir_nome_e_funcoes(usuario, funcoes){

        //texto
        $(".usuario-nome").html(usuario["nome"]+"<span class=\"descricao-funcoes-titulo\"> - "+usuario["posto_graduacao"]+"</span>");
        Insere_funcoes_usuarios(usuario, funcoes);

        //css
        $altura_funcao = Converte_px_pt($(".usuario-funcao").css("height"));
        $altura_nome = Converte_px_pt($(".usuario-nome").css("height"));
        $altura_conjunto_nome_funcoes = $altura_nome + $altura_funcao;
        $(".usuario-avatar").css("height", "calc( 95% - "+$altura_conjunto_nome_funcoes+"pt)");
    }

    //Extrair funcoes usuarios
    function Insere_funcoes_usuarios(usuario, funcoes){
        $funcao_usuario = parseInt(usuario["funcao"]);
        $funcoes_nome = [];
        $funcoes_descricao = [];
        $funcoes = "";
        $primeiro = true;
        $contador = 0;
        funcoes.forEach(function(valor, key){
            if($funcao_usuario >= parseInt(valor["codigo"])){
                $funcao_usuario -= parseInt(valor["codigo"]);
                if(!$primeiro){
                    $funcoes += ", ";
                }
                else{
                    $primeiro = false;
                }

                $funcoes_nome.push(valor["nome"]);
                $funcoes_descricao.push("<span class=\"descricao-funcoes-titulo\">"+valor["nome"]+":</span><span class=\"descricao-funcoes-descricao\"> "+
                    valor["descricao"]+"</span>");
               
                $contador++;
            }
        });
        $resultado = "";
        $font_size = "";
        if($contador > 0){
            $valor = 30 * (1 - ($contador / 5));
            if($valor < 1) {
                $valor = 15;
            }
            $(".usuario-funcao").css("font-size", $valor+"pt");
        }

        $funcoes_nome.reverse();
        $funcoes_descricao.reverse();
        
        $descricao_funcoes = $funcoes_descricao.join(" | ");
        $(".usuario-funcao").html($funcoes_nome.join(", "));
    }

    //Defini imagem e configurações do layout com base na imagem
    function Configura_conteudo_central($id){
        $altura_img_avatar = Converte_px_pt($(".usuario-avatar").css("height"));
        $largura_img_avatar = 3 * ($altura_img_avatar / 4);
        $img_avatar_background =  "url('../img/usuarios/"+$id+"/avatar.jpg'), url('../img/usuarios/"+$id+"/avatar.png'), url('../img/usuario.png')";
        $(".usuario-avatar, .usuario-nome, .usuario-funcao, .usuario-conteudo-central").css("width", $largura_img_avatar+"pt");
        $(".usuario-conteudo-central").css("left","calc( 50% - "+($largura_img_avatar/2)+"pt)");
        $(".usuario-avatar").css("background-image", $img_avatar_background);
    }

    //Retirar Time
    function RetirarTime(time){
        $data = time;
        if(time.indexOf(" ") > 0){
            $tempo = time.split(" ");
            $data = $tempo[0];
        }
        return $data;
    }

});