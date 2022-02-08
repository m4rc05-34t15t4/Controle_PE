<?php 
    if(!isset($link)) $link = "../";
    
    include_once $link."php/base.php";
?>
    <script src="<?php echo $link."js/mi_informacoes.js$Versao"; ?>"></script>

    </head>
    <body>
        
        <?php 
            include_once $link."php/Cabecalho.php";
            include_once $link."php/Rodape.php";
        ?>
        
        <div class="informacoes-mi">

            <div class="informacoes-mi-descricao">
                <div class="titulo">INFORMAÇÕES</div>
                <hr><!--
                BLOCO: C2<br>
                INOM: SC-24-V-C-I-1-SE<br>
                FUSO: 23S<br> 
                EPSG: 31983<br>
                SRV-GOTHIC: 01<br>
                DIFICULDADE: Fácil<br>
                DENSIDADE: 789<br>
                FASE: Em Edição<br>
                <hr>
                EDITOR: 3º Sgt Marcos Batista<br>
                Início Edição: 10/10/2020 SEG<br>
                Término Edição: 15/10/2020 TER<br>
                <hr>
                1º REVISOR: Sgt Alves N.<br>
                Início 1ª Rev: 20/10/2020 QUA<br>
                Término 1ª Rev: 25/10/2020 QUI<br>
                <hr>
                Início Correção 1: 10/10/2020 SEG<br>
                Término Correção 1: 15/10/2020 TER<br>
                <hr>
                2º REVISOR: ST Campos.<br>
                Início 2ª Rev: 20/10/2020 QUA<br>
                Término 2ª Rev: 25/10/2020 QUI<br>
                <hr>
                Início Correção 2: 10/10/2020 SEG<br>
                Término Correção 2: 15/10/2020 TER<br>-->
            </div>

            <div class="mi">
                <div class="div-text">
                    <!--1015-1-NE-->
                </div>
            </div>

            <table class="mi-ligacao">
                <tr>
                    <td id="mi-ligacao_no" class="mi-ligacao-individuais"><!--1015-1-NO--></td>
                    <td id="mi-ligacao_n" class="mi-ligacao-individuais"><!--1015-1-NE--></td>
                    <td id="mi-ligacao_ne" class="mi-ligacao-individuais"><!--1015-2-NO--></td>
                </tr>
                <tr>
                    <td id="mi-ligacao_o" class="mi-ligacao-individuais"><!--1015-1-SO--></td>
                    <td id="mi-ligacao_c" class="mi-ligacao-individuais"><!--1015-1-SE--></td>
                    <td id="mi-ligacao_l" class="mi-ligacao-individuais"><!--1015-2-SO--></td>
                </tr>
                <tr>
                    <td id="mi-ligacao_so" class="mi-ligacao-individuais"><!--1015-3-NO--></td>
                    <td id="mi-ligacao_s" class="mi-ligacao-individuais"><!--1015-3-NE--></td>
                    <td id="mi-ligacao_se" class="mi-ligacao-individuais"><!--1015-4-NO--></td>
                </tr>
            </table>

            <table class="conteudo-direita">
                <tr>
                    <td class="nome-mi" colspan="4">
                        Nome da Carta:
                        <div class="nome-carta">
                            <!--Veredas Carnaibas-->
                        </div>
                        <br>
                        <hr>
                    </td>
                </tr>
                <tr>
                    <td class="conteudo-direita-titulo" colspan="4">
                        <div id="todos-mi-legenda-titulo_direita"><p>Legenda:</p></div>
                        <div id="legenda_mi_informacao">

                            <?php include_once $link."php/mi_legenda.php"; ?>
                            
                        </div>
                    </td>
                </tr>
            </table>

        </div>
        
    </body>
</html>