<?php 

$status_destino = '2';
$funcao = "caaaa";
$usuario = "marcos";
$data_inicio = "20200101";

$sql = "
            UPDATE public.cartas SET status = '$status_destino', \"$funcao\" = '$usuario', \"inicio$funcao\" = '$data_inicio' WHERE id =  
                CASE
                    WHEN 
                        --retorna se há cartas reservadas 
                        SELECT id FROM public.cartas WHERE status >= '2' AND status < 2.63 AND \"$funcao\" = $usuario AND (\"inicio$funcao\" isnull OR length(\"inicio$funcao\") < 1) ORDER BY bloco LIMIT 1 > 0
                    THEN
                        SELECT id FROM public.cartas WHERE status >= '2' AND status < 2.63 AND \"$funcao\" = $usuario AND (\"inicio$funcao\" isnull OR length(\"inicio$funcao\") < 1) ORDER BY bloco LIMIT 1
                    WHEN 
                        --retorna se há cartas disponiveis 
                        SELECT id FROM public.cartas WHERE status >= '2' AND status < 2.63 AND \"$funcao\" isnull AND (\"inicio$funcao\" isnull OR length(\"inicio$funcao\") < 1) ORDER BY bloco LIMIT 1 > 0
                    THEN
                        SELECT id FROM public.cartas WHERE status >= '2' AND status < 2.63 AND \"$funcao\" isnull AND (\"inicio$funcao\" isnull OR length(\"inicio$funcao\") < 1) ORDER BY bloco LIMIT 1
                    ELSE 
                        --Retorna id carta inválido para nada ser atualizado e retornar vazio<br>
                        -1
                END
            --Faz o retorno da linha atualizada pela query<br>
            RETURNING id, \"$funcao\";
        ";
echo $sql;

/*
if("casa" == "ka" ){
    echo "ok";
}

    if(!isset($link)) $link = "../../";
    
    include_once $link."php/base.php";
    include_once $link."php/conexao.php";

    $sql = "
        SELECT mi, inicio2rev AS data, bloco FROM public.cartas WHERE revisor2 = '24' AND inicio2rev IS NOT null
        UNION 
        SELECT mi, termino2rev AS data, bloco FROM public.cartas WHERE revisor2 = '24' AND termino2rev IS NOT null
        UNION
        SELECT mi, inicio1rev AS data, bloco FROM public.cartas WHERE revisor1 = '24' AND inicio1rev IS NOT null
        UNION
        SELECT mi, termino1rev AS data, bloco FROM public.cartas WHERE revisor1 = '24' AND termino1rev IS NOT null
        UNION
        SELECT mi, inicioedicao AS data, bloco FROM public.cartas WHERE editor = '24' AND inicioedicao IS NOT null
        UNION
        SELECT mi, terminoedicao AS data, bloco FROM public.cartas WHERE editor = '24'  AND terminoedicao IS NOT null
        GROUP BY mi, data, bloco ORDER BY data DESC, bloco DESC, mi LIMIT 1;
    ";
    $query = pg_query($conexao,$sql);
    if($query) { 

        if(pg_fetch_row($query, 0)){
            $row = pg_fetch_row($query, 0);
            echo $row[0];//mi
        }
    }

    // Variável com a senha guardada 
    $senha = "mypassword"; 
    $criptografada = base64_encode($senha); 
    echo $criptografada; // Exibe: bXlwYXNzd29yZA==
    echo "<br>" . base64_decode($criptografada); // Exibe: "mypassword"
    $arr = end(explode("/", $_SERVER['REQUEST_URI']));
    echo end($arr);
    
    if(!strpos($_GET["mi"], "-") > 0){
        echo "nada";
    }
    else{
        
        echo strpos($_GET["mi"], "-");
    }

    

date_default_timezone_set('America/Recife');
    echo date('Y') . "-" . date('m') . "-" . date('d');

$a = array();
    $a[0] = 'a';
    $a[1] = 'b';
    $a[456] = 'c';
    var_dump($a);
    echo array_key_last(($a)); echo "<br>";
    var_dump($a);

    echo "1506-2-SO: " . strlen("1506-2-SO") . "<br>1506-2: " . strlen("1506-2") . "<br>";
    $f = 1;
    echo -1 . ", " . 1 . ", " . 0 . "<br>" . (-1*$f) . ", " . (1*$f) . ", " . (0*$f) . "<br>";
    $f = 2;
    echo -1 . ", " . 1 . ", " . 0 . "<br>" . (-1*$f) . ", " . (1*$f) . ", " . (0*$f) . "<br>";

    $lista_formatada = array();
    $lista_formatada["123456"]["regiao"] = "casa";
    $lista_formatada["123456"]["linha"] = 10;
    $lista_formatada["123456"]["coluna"] = 15;

    $lista_formatada["456"]["regiao"] = "casa2";
    $lista_formatada["456"]["linha"] = 102;
    $lista_formatada["456"]["coluna"] = 152;

    $lista_formatada["123"]["regiao"] = "casa3";
    $lista_formatada["123"]["linha"] = 103;
    $lista_formatada["123"]["coluna"] = 153;

    $a = $lista_formatada;

    $objeto = array_shift($a);
    $objeto = array_shift($a);
    var_dump($a);
    echo "<br><br>";
    var_dump($objeto);
    echo "<br>";
    echo $objeto["regiao"];
    echo "<br><br>";
    var_dump($a);

    //conecta ao banco de dados
    $sql = "SELECT 
    TRUNC(AVG(ligacao.linha), 0) AS linha_media, 
    TRUNC(AVG(ligacao.coluna), 0) AS coluna_media, cartas.bloco 
    FROM \"public\".\"ligacao_mi\" as ligacao 
    LEFT JOIN \"public\".\"cartas\" ON ligacao.mi = cartas.mi 
    GROUP BY cartas.bloco
    ORDER BY cartas.bloco;";
    $query = Fazer_conexao($sql);
    $row = pg_fetch_all($query);
    var_dump($row);

    //escrevendo o css
    $css_bloco_posicao = "\/* CSS Blocos Posicao \n";
    /*#bloco_A1 {
        left: calc( var(--padding) + (var(--largura-mi-25k) * 40));
        top: calc( var(--padding) + (var(--largura-mi-25k) * 7));
    }
    
    for($b=0; $b < count($row); $b++){
        $div_bloco_conteudo .= "#bloco_" . $row[$b]["bloco"] . " {\n&emsp;left: calc( var(--padding) + (var(--largura-mi-25k) * " . $row[$b]["coluna_media"]  . "));\n" . 
            "&emsp;top: calc( var(--padding) + (var(--largura-mi-25k) * " . $row[$b]["linha_media"] . "));\n}\n\n";
    }

    //faz consulta sql nos bancos edicao e ligacao_mi
    function Fazer_conexao($sql){
            
        global $conexao;

        return pg_query($conexao, $sql);
    }*/
?>