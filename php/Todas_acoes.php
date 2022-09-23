<?php 
    if(!isset($link)) $link = "../";
    
    include_once $link."php/base.php";
?>
<script src="<?php echo $link."js/Todas_acoes.js$Versao"; ?>"></script>
</head>
    <body>
        
        <?php 
            include_once $link."php/Cabecalho.php";
            include_once $link."php/Rodape.php";
            include_once $link."php/funcoes.php";

            Valida_usu_permissao_pagina($pagina);

        ?>

        <div id="mini-menu-config-acoes" attr_id="">
            <div id="bt-editar">Editar</div>
            <div id="bt-excluir">Excluir</div>
        </div>

        <div id="informacoes-acoes">

            <div id="acoes-conteudo-esquerdo">

                <div id="acoes-conteudo-identificacao"></div>

                <table id="acoes-conteudo-lista">
                    <!--
                    <tr id="head-acao-id_0" class="item-acao-id">
                        <td class="head-lista-acao-data">Data</td>
                        <td class="head-lista-acao-tipo">Tipo</td>
                        <td class="head-lista-acao-dtime"></td>
                        <td class="head-lista-acao-desc">Descição</td>
                    </tr>
                    <tr id="item-acao-id_0" class="item-acao-id">
                        <td class="item-lista-acao-data">Data</td>
                        <td class="item-lista-acao-tipo">Tipo</td>
                        <td class="item-lista-acao-dtime">Time</td>
                        <td class="item-lista-acao-desc">Descição</td>
                    </tr>
                    -->
                </table>
                
            </div>

            <div id="acoes-conteudo-direito">

                <div id="acoes-conteudo-direito-superior">
                    <select id="acoes-usuarios-select">
                        <!--<option value="17">Marcos Batista - 2º Sgt</option>-->
                    </select>

                    <div id="bt-add-acoes-historico">+</div>

                </div>

                <div id="acoes-conteudo-tipos">
                    <div id="acoes-tipo-grupos-start" class="acoes-tipo-grupos"><span>Trabalho</span><div class="dados-acoes-grupos-time"></div></div>
                    <div id="acoes-tipo-grupos-serviço" class="acoes-tipo-grupos"><span>Serviço</span><div class="dados-acoes-grupos-time"></div></div>
                    <div id="acoes-tipo-grupos-almoço" class="acoes-tipo-grupos"><span>Almoço</span><div class="dados-acoes-grupos-time"></div></div>
                    <div id="acoes-tipo-grupos-missões" class="acoes-tipo-grupos"><span>Missões</span><div class="dados-acoes-grupos-time"></div></div>
                    <div id="acoes-tipo-grupos-outros" class="acoes-tipo-grupos"><span>Outros</span><div class="dados-acoes-grupos-time"></div></div>
                    <div id="acoes-tipo-grupos-tfm" class="acoes-tipo-grupos"><span>TFM</span><div class="dados-acoes-grupos-time"></div></div>
                    <div id="acoes-tipo-grupos-adm" class="acoes-tipo-grupos"><span>ADM</span><div class="dados-acoes-grupos-time"></div></div>
                    <div id="acoes-tipo-grupos-finish" class="acoes-tipo-grupos"><span>Sem Exp.</span><div class="dados-acoes-grupos-time"></div></div>
                    <div id="acoes-tipo-grupos-expediente" class="acoes-tipo-grupos"><span>Expediante</span><div class="dados-acoes-grupos-time"></div></div>
                </div>

                <div id="acoes-conteudo-calendario"></div>
                
            </div>

        </div>

    </body>
</html>