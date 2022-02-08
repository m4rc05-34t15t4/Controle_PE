<?php 
    if(!isset($link)) $link = "../";
    
    include_once $link."php/base.php";
?>
<script src="<?php echo $link."js/Usuario_informacoes.js$Versao"; ?>"></script>
</head>
    <body>
        
        <?php 
            include_once $link."php/Cabecalho.php";
            include_once $link."php/Rodape.php";

            $permissao = intval($_SESSION['funcao']);
            if($permissao >= 4096) $permissao -= 4096;//OUTROS
            if($permissao >= 2048) $permissao -= 2048;//CARREGADOR BDGEX
            if($permissao >= 1024) $permissao -= 1024;//CORRETOR
            if($permissao >= 512) $permissao -= 512;//REVISOR
            if($permissao >= 256) $permissao -= 256;//EDITOR
            if($permissao >= 128) $permissao -= 128;//AD HID
            if($permissao >= 64) $permissao -= 64;//AD TRA
            if($permissao >= 32) $permissao -= 32;//AD LOC
            if($permissao >= 16) $permissao -= 16;//PREPARADOR
            if(!isset($_GET["id"]) OR ((strval($_SESSION['codigo']) != strval($_GET["id"])) && ($permissao == 0)) ){
                header('location:Usuario_informacoes.php?id='.$_SESSION['codigo']);
            }

        ?>

        <div class="informacoes-usuario">

            <div class="usuario-conteudo-esquerdo">   
                <div class="usuario-trabalho-titulo">Trabalho Atual:<hr></div>
                <div class="usuario-trabalho-informacoes"><!-- 0000-0-AA ( Em Edição )--></div>
                <table class="usuario-conteudo-esquerdo-botoes">
                    <tr><td>
                            <div class="usuario-trabalho-pendentes"></div>
                        </td>
                        <td>
                            <div id="botao_finalizar_iniciar_aquisicao" class="usuario-botao-iniciar-finalizar"><div>Finalizar</div></div>
                            <br>
                            <div id="botao_finalizar_iniciar_adequacao" class="usuario-botao-iniciar-finalizar"><div>Finalizar</div></div>
                            <br>
                            <div id="botao_finalizar_iniciar_edicao" class="usuario-botao-iniciar-finalizar"><div>Finalizar</div></div>
                            <br>
                            <div id="botao_finalizar_iniciar_revisao" class="usuario-botao-iniciar-finalizar"><div>Finalizar</div></div>
                    </td></tr>
                </table>
                
            </div>

            <div class="usuario-conteudo-central">
                <div class="usuario-avatar"></div>
                <div class="usuario-nome"><!--0º Sgt AAAAA Batista--></div>
                <div class="usuario-funcao"><!--AAAAAA--></div>
            </div>

            <div class="usuario-conteudo-direita">
                <div class="usuario-historico-titulo">Histórico</div>
                <div id="historico-cartas-div">
                    <div class="historico-cartas">
                        <div class="usuario-historico-titulo-adequadas">Adequadas: <!--(10)--></div> 
                        <div class="usuario-cartas-adequadas"><!--
                            <div> 1654-1-SO (1ª) <p>21/06/2020 TER</p> <br></div>-->
                        </div>
                    </div>
                    <div class="historico-cartas">
                        <div class="usuario-historico-titulo-revisadas">Revisadas:<!-- (10)--></div>
                        <div class="usuario-cartas-revisadas"><!--
                            <div> 1654-1-SO (1ª) <p>21/06/2020 TER</p> <br></div>-->
                        </div>
                    </div>
                    <div class="historico-cartas">
                        <div class="usuario-historico-titulo-editadas">Editadas: <!--(10)--></div>
                        <div class="usuario-cartas-editadas"><!--
                            <div> 1654-1-SO <p>14/03/2020 SEG</p> <br></div>-->
                        </div>
                    </div>
                    <div class="historico-cartas">
                        <div class="usuario-historico-titulo-adquiridas">Adquiridas: <!--(10)--></div>
                        <div class="usuario-cartas-adquiridas"><!--
                            <div> 1654-1-SO <p>14/03/2020 SEG</p> <br></div>-->
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </body>
</html>