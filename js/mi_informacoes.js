$(document).ready(function(){
    $link = "../";
    
    $mi = Get_url_variaveis();
    if( $mi == -1){
        alert("A página precisa de um valor de MI, add no final da url ex: ?mi=1513-2-NE");
    }
    else{
        $mi = $mi.get("mi");
        Mi_informacoes();

        //Ajusta altura da legenda lateral
        $(".div_legenda").css("height", "28pt");
    }

    //FUNÇÕES

    //Insere todas informações do MI na pagina Mi_informacoes
    function Mi_informacoes(){
        $.get($link+'php/conexao_mi.php', {
            mi: $mi
            }, 
            function(carta){
                console.log('carta:', carta);
                if(carta == 0){
                    alert("Erro ao consultar carta!");
                }
                else if(carta == 1){
                    alert("Carta fora do projeto, escolha outra carta!");
                }
                else{

                    //apaga dados antigos dos campos para serem preenchidos os novos dados.
                    $(".informacoes-mi-descricao, .div-text, .mi-ligacao-individuais, .nome-carta").text("");

                    Inserir_dados_div_info_mi_descricao(carta);

                    Add_nome_mi_ligacao_no_html(carta);

                    //nome mi
                    $(".nome-carta").append(carta["nome_carta"]);
                
                }
            }
        )
    }

    //Insere so dados na DIV info_mi_descricao
    function Inserir_dados_div_info_mi_descricao(carta){

        Object.keys(carta).forEach(function(item){
            if(carta[item] == null){
                carta[item] = "";
            }
        });
  
        $fuso = carta["inom"].substring(3, 5);
        $epsg = '';
        $mc = ''
        if($fuso == '23'){
            $epsg = '31983';
            $mc = '-45'
        }
        else if($fuso == '24'){
            $epsg = '31984';
            $mc = '-39'
        }

        $info_mi_desc = 
            '<div class="titulo"><span>INFORMAÇÕES</span></div>'+
            '<hr><div class="titulo-dados"><ul>'+
            '<li><span>ID:</span> ' + carta["id"] + '</li>'+
            '<li><span>Bloco:</span> ' + carta["bloco"] + '</li>'+
            '<li><span>INOM:</span> ' + carta["inom"] + '</li>'+
            '<li><span>Fuso:</span> ' + $fuso + 'S</li>'+
            '<li><span>EPSG:</span> ' + $epsg + '</li>'+
            '<li><span>MC:</span> ' + $mc + '</li>'+
            '<li><span>Servidor:</span> ' + carta["servidor"] + '</li>'+
            '<li><span>Dificuldade:</span> ' + carta["niveis"] + '</li>'+
            '<li><span>Densidade:</span> ' + carta["densidade"] + '</li>'+
            '<li><span>Fase:</span> ' + carta["status"] + '</li>'+
            '</ul><hr><ul>'+
            '<li><span>Resp. Ajt. Hid:</span> <a class="link" href="Usuario_informacoes.php?id='+carta["id_AjtHid"]+'">' + carta["AjtHid"] + '</a></li>'+
            '<li><span>Início Ajt. Hid:</span> ' + carta["inicioAjtHid"] + '</li>'+
            '<li><span>Término Ajt. Hid:</span> ' + carta["terminoAjtHid"] + '</li>'+
            '</ul><hr><ul>'+
            '<li><span>Resp. Rev. Hidro:</span> <a class="link" href="Usuario_informacoes.php?id='+carta["id_RevHid"]+'">' + carta["RevHid"] + '</a></li>'+
            '<li><span>Início Rev. Hid:</span> ' + carta["inicioRevHid"] + '</li>'+
            '<li><span>Término Rev. Hid:</span> ' + carta["terminoRevHid"] + '</li>'+
            '</ul><hr><ul>'+
            //'<li><span>Resp. Ad. Vetorial:</span> <a class="link" href="Usuario_informacoes.php?id='+carta["id_AdVet"]+'">' + carta["AdVet"] + '</a></li>'+
            //'<li><span>Início Ad. Vet:</span> ' + carta["inicioAdVet"] + '</li>'+
            //'<li><span>Término Ad. Vet:</span> ' + carta["terminoAdVet"] + '</li>'+
            //'</ul><hr><ul>'+
            '<li><span>Resp. Aq. Hid:</span> <a class="link" href="Usuario_informacoes.php?id='+carta["id_AqHid"]+'">' + carta["AqHid"] + '</a></li>'+
            '<li><span>Início Aq. Hid:</span> ' + carta["inicioAqHid"] + '</li>'+
            '<li><span>Término Aq. Hid:</span> ' + carta["terminoAqHid"] + '</li>'+
            '</ul><hr><ul>'+
            '<li><span>Resp. Aq. Plan:</span> <a class="link" href="Usuario_informacoes.php?id='+carta["id_AqPlan"]+'">' + carta["AqPlan"] + '</a></li>'+
            '<li><span>Início Aq. Plan:</span> ' + carta["inicioAqPlan"] + '</li>'+
            '<li><span>Término Aq. Plan:</span> ' + carta["terminoAqPlan"] + '</li>'+
            '</ul><hr><ul>'+
            '<li><span>Resp. CQ 1:</span> <a class="link" href="Usuario_informacoes.php?id='+carta["id_CQ1"]+'">' + carta["CQ1"] + '</a></li>'+
            '<li><span>Início 1º CQ:</span> ' + carta["inicioCQ1"] + '</li>'+
            '<li><span>Término 1º CQ:</span> ' + carta["terminoCQ1"] + '</li>'+
            '</ul><hr><ul>'+
            '<li><span>Editor:</span> <a class="link" href="Usuario_informacoes.php?id='+carta["id_editor"]+'">' + carta["editor"] + '</a></li>'+
            '<li><span>Início Edição:</span> ' + carta["inicioEdicao"] + '</li>'+
            '<li><span>Término Edição:</span> ' + carta["terminoEdicao"] + '</li>'+
            '</ul><hr><ul>'+
            '<li><span>1º Revisor:</span> <a class="link" href="Usuario_informacoes.php?id='+carta["id_revisor1"]+'">' + carta["revisor1"] + '</a></li>'+
            '<li><span>Início 1ª Rev:</span> ' + carta["inicio1rev"] + '</li>'+
            '<li><span>Término 1ª Rev:</span> ' + carta["termino1rev"] + '</li>'+
            '</ul><hr><ul>'+
            '<li><span>2º Revisor:</span> <a class="link" href="Usuario_informacoes.php?id='+carta["id_revisor2"]+'">' + carta["revisor2"] + '</a></li>'+
            '<li><span>Início 2ª Rev:</span> ' + carta["inicio2rev"] + '</li>'+
            '<li><span>Término 2ª Rev:</span> ' + carta["termino2rev"] + '</li>'+
            '</ul></div>'
            
        $(".informacoes-mi-descricao").append($info_mi_desc);
    }

    //Função  Booleana retorn Sim ou Não
    function Sim_Nao(valor){
        $val = String(valor).toLowerCase();
        if( ($val == 't') || ($val == 'true') || ($val == '1') || ($val == 'sim')){
            return "Sim";
        }
        return "Não";
    }

    //Add o nome dos MI que fazem a lgacao na tabela do HTML
    function Add_nome_mi_ligacao_no_html(carta){

        $(".div-text, #mi-ligacao_c").html(carta["mi"]);
        $("#mi-ligacao_o").html(Mi_ligação_manipula_dados(carta["ligacao_o"], "o"));
        $("#mi-ligacao_s").html(Mi_ligação_manipula_dados(carta["ligacao_s"], "s"));
        $("#mi-ligacao_se").html(Mi_ligação_manipula_dados(carta["ligacao_se"], "se"));
        $("#mi-ligacao_so").html(Mi_ligação_manipula_dados(carta["ligacao_so"], "so"));
        $("#mi-ligacao_l").html(Mi_ligação_manipula_dados(carta["ligacao_l"], "l"));
        $("#mi-ligacao_n").html(Mi_ligação_manipula_dados(carta["ligacao_n"], "n"));
        $("#mi-ligacao_no").html(Mi_ligação_manipula_dados(carta["ligacao_no"], "no"));
        $("#mi-ligacao_ne").html(Mi_ligação_manipula_dados(carta["ligacao_ne"], "ne"));
        
        Verifica_merge_mi_ligacao_add_cor_status(carta);

    }

    //verifica mi ligacao com valores iguais, por conta da diferença de escala, e faz merge
    function Verifica_merge_mi_ligacao_add_cor_status(carta){
        $map = new Map();
        $map.set("no", carta["ligacao_no"]);
        $map.set("n", carta["ligacao_n"]);
        $map.set("ne", carta["ligacao_ne"]);
        $map.set("o", carta["ligacao_o"]);
        $map.set("c", carta["mi"]);
        $map.set("l", carta["ligacao_l"]);
        $map.set("so", carta["ligacao_so"]);
        $map.set("s", carta["ligacao_s"]);
        $map.set("se", carta["ligacao_se"]);

        $map.forEach(function(valor, key, map){
            
            //cor status
            $bg_color = $("#fase_"+String(carta["status_"+key])[0]).css("background-color");
            $("#mi-ligacao_"+key).css("background", $bg_color);

            //Mergear ligacao
            map.forEach(function(valor_2, key_2){
                if((valor == valor_2) && (key != key_2)){
                    $switch = key+"_"+key_2;
                    switch($switch){
                        case "no_o":
                        case "o_so":
                        case "l_se":
                        case "ne_l":
                            Merge_mi_ligacao(key, key_2, false);
                            break;
                        case "no_n":
                        case "n_ne":
                        case "so_s":
                        case "s_se":
                            Merge_mi_ligacao(key, key_2, true);
                        break;
                    }
                }
            });
        });
    }

    //Merge mi de ligação iguais colspan boolean
    function Merge_mi_ligacao(ligacao_permanecera, ligacao_sumira, colspan){
        $("#mi-ligacao_"+ligacao_sumira).css("display","none");
        $span = "rowspan";
        if(colspan){
            $span = "colspan";
        }
        $("#mi-ligacao_"+ligacao_permanecera).attr($span, 2);
    }

    //trata a informação quando o MI liga com mais de um carta na mesma direção, quando ha mudança de escala (50k <-> 25k)
    function Mi_ligação_manipula_dados(mi_ligacao, direcao){
        $retorno = "<span><a href=\"Mi_informacoes.php?mi="+mi_ligacao+"\">"+mi_ligacao+"</a></span>";
        if(mi_ligacao.indexOf(",") > 0){
            $array = mi_ligacao.split(",");
            $array.sort();
            switch(direcao){
                case "l":
                case "o":
                    $retorno = "<span><a href=\"Mi_informacoes.php?mi="+$array[0]+"\">"+$array[0]+"</a></span><hr><span><a href=\"Mi_informacoes.php?mi="+$array[1]+
                        "\">"+$array[1]+"</a></span>";
                    break;
                case "s":
                case "n":
                    $retorno = "<div class=\"mi-ligacao-individuais-rotacao\"><span><a href=\"Mi_informacoes.php?mi="+$array[1]+"\">"+$array[1]+
                        "</a></span><hr><span><a href=\"Mi_informacoes.php?mi="+$array[0]+"\">"+$array[0]+"</a></span></div>";
                    break;
            }
        }
        return $retorno;
    }

    //Pegar variaveis get na url -> retorna um MAP -> se sem variaveis retorna -1
    function Get_url_variaveis(){
        if(String(location).indexOf("?") > 0){
            $url = location.search.slice(1);
            $url_map = new Map();
            if($url.indexOf("&") > 0){
                $get_urls = $url.split('&');
                $get_urls.forEach(function(valor, $key){
                    $array = valor.split('=');
                    $url_map.set($array[0], $array[1]);
                })
            }
            else{
                $array = $url.split('=');
                $url_map.set($array[0], $array[1]);
            }
            return $url_map;
        }
        return -1;
    }
});