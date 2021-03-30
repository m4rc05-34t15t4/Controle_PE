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
                        <table id="legenda_mi_informacao">
                            <tr>
                                <td colspan="4"><p>Legenda:</p></td>
                            </tr>
                            <tr>
                                <td id="fase_0" class="mi-fases fase_0">0</td><td class="mi-fases-descricao">Fora do Projeto</td>
                                <td id="fase_3.1" class="mi-fases fase_3">3.1</td><td class="mi-fases-descricao">EmEdição</td>
                            </tr>
                            <tr>
                                <td id="fase_1" class="mi-fases fase_1">1.0</td><td class="mi-fases-descricao">Preparo</td>
                                <td id="fase_3.2" class="mi-fases fase_3">3.2</td><td class="mi-fases-descricao">Editada</td>
                            </tr>
                            <tr>
                                <td id="fase_1.1" class="mi-fases fase_1">1.1</td><td class="mi-fases-descricao"><u>Coletar Raster</u></td>
                                <td id="fase_3.4" class="mi-fases fase_3">3.4</td><td class="mi-fases-descricao">Em 1ª Revisão</td>
                            </tr>
                            <tr>
                                <td id="fase_1.2" class="mi-fases fase_1">1.2</td><td class="mi-fases-descricao">Raster Coletado</td>
                                <td id="fase_3.8" class="mi-fases fase_3">3.8</td><td class="mi-fases-descricao">1ª Rev Pronta</td>
                            </tr>
                            <tr>
                                <td id="fase_1.4" class="mi-fases fase_1">1.4</td><td class="mi-fases-descricao"><u>Coletar Vetores</u></td>
                                <td id="fase_3.16" class="mi-fases fase_3">3.16</td><td class="mi-fases-descricao">Em 1ª Correção</td>
                            </tr>
                            <tr>
                                <td id="fase_1.8" class="mi-fases fase_1">1.8</td><td class="mi-fases-descricao">Vetores coletado</td>
                                <td id="fase_3.32" class="mi-fases fase_3">3.32</td><td class="mi-fases-descricao">1ª Correção Concluída</td>
                            </tr>
                            <tr>
                                <td id="fase_1.16" class="mi-fases fase_1">1.16</td><td class="mi-fases-descricao">Processar Imagem</td>
                                <td id="fase_3.64" class="mi-fases fase_3">3.64</td><td class="mi-fases-descricao">Em 2ª Revisão</td>
                            </tr>
                            <tr>
                                <td id="fase_1.32" class="mi-fases fase_1">1.32</td><td class="mi-fases-descricao">Imagem Processada</td> 
                                <td id="fase_3.128" class="mi-fases fase_3">3.128</td><td class="mi-fases-descricao">2ª Revisão Concluída</td>
                            </tr>
                            <tr>
                                <td id="fase_1.64" class="mi-fases fase_1">1.64</td><td class="mi-fases-descricao">Verificar Insumos</td>
                                <td id="fase_3.256" class="mi-fases fase_3">3.256</td><td class="mi-fases-descricao">Em 2ª Correção</td>
                            </tr>
                            <tr>
                                <td id="fase_2" class="mi-fases fase_2">2.0</td><td class="mi-fases-descricao">Adequação Vetorial</td>
                                <td id="fase_3.512" class="mi-fases fase_3">3.512</td><td class="mi-fases-descricao">2ª Correção Concluída</td>
                            </tr>
                            <tr>
                                <td id="fase_2.1" class="mi-fases fase_2">2.1</td><td class="mi-fases-descricao"><u>Localidades</u></td>
                                <td id="fase_3.1024" class="mi-fases fase_3">3.1024</td><td class="mi-fases-descricao">Controle de Qualidade</td>
                            </tr>
                            <tr>
                                <td id="fase_2.2" class="mi-fases fase_2">2.2</td><td class="mi-fases-descricao">Localidades Prontas</td>
                                <td id="fase_4" class="mi-fases fase_4">4.0</td><td class="mi-fases-descricao">Em Carga BDGEx</td>
                            </tr>
                            <tr>
                                <td id="fase_2.4" class="mi-fases fase_2">2.4</td><td class="mi-fases-descricao"><u>Transportes</u></td>
                                <td id="fase_4.1" class="mi-fases fase_4">4.1</td><td class="mi-fases-descricao"><u>MDT Carregado</u></td>
                            </tr>
                            <tr>
                                <td id="fase_2.8" class="mi-fases fase_2">2.8</td><td class="mi-fases-descricao">Transportes Prontos</td>
                                <td id="fase_4.2" class="mi-fases fase_4">4.2</td><td class="mi-fases-descricao"><u>MDS Carregado</u></td>
                            </tr>
                            <tr>
                                <td id="fase_2.16" class="mi-fases fase_2">2.16</td><td class="mi-fases-descricao"><u>Hidrografias</u></td>
                                <td id="fase_4.4" class="mi-fases fase_4">4.4</td><td class="mi-fases-descricao"><u>Orto Img Carregada</u></td>
                            </tr>
                            <tr>
                                <td id="fase_2.32" class="mi-fases fase_2">2.32</td><td class="mi-fases-descricao">Hidrografias Prontas</td> 
                                <td id="fase_4.8" class="mi-fases fase_4">4.8</td><td class="mi-fases-descricao"><u>CDGV Carregados</u></td>
                            </tr>
                            <tr>
                                <td id="fase_2.64" class="mi-fases fase_2">2.64</td><td class="mi-fases-descricao">Controle de Qualidade</td>
                                <td id="fase_4.16" class="mi-fases fase_4">4.16</td><td class="mi-fases-descricao"><u>Carta Orto Imagem</u></td>
                            </tr>
                            <tr>
                                <td id="fase_3" class="mi-fases fase_3">3.0</td><td class="mi-fases-descricao">Edição</td>
                                <td id="fase_5" class="mi-fases fase_5">5.0</td><td class="mi-fases-descricao">Carregada no BDGEx</td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>

        </div>
        
    </body>
</html>