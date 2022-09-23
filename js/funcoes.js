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

//Converte px -> pt
function Converte_px_pt(valor){
    $tipo = (typeof valor);
    if($tipo == "string"){
        if(valor.indexOf("px")){
            valor = valor.replace('px', '');
        }
        valor = parseInt(valor);
    }
    valor = valor * 0.752929;
    return valor;
}

//recarrega_pagina
function recarregarPagina(){
    // Sem redimencionamento à 100ms!
    location.reload();
}

//recarrega a pagina 
function Recarregar_pagina_resize(){
    var time;
    window.onresize = function(){
    clearTimeout(time);
    time = setTimeout(recarregarPagina, 10);
    };
}

//Verifica se arquivo existe passando a url com nome e extenção
function Existe(url) {
    $http = new XMLHttpRequest();
    $http.open('HEAD', url, false);
    $http.send();
    return $http.status != 404;
}

//calcular diferença de time
function diff(start, end = "NOW") {
    start = start.split(" ");
    start[0] = String(start[0]).split("-");
    start[1] = String(start[1]).split(":");
    var startDate = new Date(start[0][0], parseInt(start[0][1]) - 1, start[0][2], start[1][0], start[1][1], start[1][2]);
    var endDate = new Date();
    if(end != "NOW"){
        end = end.split(" ");
        end[0] = String(end[0]).split("-");
        end[1] = String(end[1]).split(":");
        endDate = new Date(end[0][0], parseInt(end[0][1]) - 1, end[0][2], end[1][0], end[1][1], end[1][2]);
    }
    //console.log(startDate, endDate);
    var diff = endDate.getTime() - startDate.getTime();
    var days = Math.floor(diff / 1000 / 60 / 60 / 24);
    diff -= (days * 1000 * 60 * 60 * 24); 
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= (hours * 1000 * 60 * 60);
    var minutes = Math.floor(diff / 1000 / 60);
    diff -= (minutes * 1000 * 60);
    var seconds = Math.floor(diff / 1000);

    // If using time pickers with 24 hours format, add the below line get exact hours
    //if (hours < 0)
       //hours = hours + 24;

    return days + " " + (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes + ":" + (seconds <= 9 ? "0" : "") + seconds;
}

//soma tempo
function calc_time(time_1, time_2) {
    $d1 = parseInt(time_1.split(" ")[0]);
    $a1 = time_1.split(" ")[1].split(":");
    $s1 = (parseInt($a1[0]) * 60 * 60) + (parseInt($a1[1]) * 60) + parseInt($a1[2]);
    $d2 = parseInt(time_2.split(" ")[0]);
    $a2 = time_2.split(" ")[1].split(":");
    $s2 = (parseInt($a2[0]) * 60 * 60) + (parseInt($a2[1]) * 60) + parseInt($a2[2]);

    $s = $s1 + $s2;
    $h = Math.floor($s / 60 / 60);
    $s -= ($h * 60 * 60);
    $m = Math.floor($s / 60);
    $s -= ($m * 60);

    return ($d1 + $d2)+ " " + ($h <= 9 ? "0" : "") + $h + ":" + ($m <= 9 ? "0" : "") + $m + ":" + ($s <= 9 ? "0" : "") + $s;

}

//array_funcoes
function Array_to_dicionario_post_grad(post_grd_array){
    $dicionario_post_grad = {};
    post_grd_array.forEach(function(v){
        $dicionario_post_grad[v["codigo"]] = v;
    });
    return $dicionario_post_grad;
}

//retorna o nr da semana
function getYearlyWeekNumber( date ){
    let splitedDate = date.split(" ")[0].split("-");
    let dateObj = new Date(+splitedDate[0], +splitedDate[1]-1, +splitedDate[2], 0,0,0,0 );
    let firstDayYear = new Date(+splitedDate[0],0,1,0,0,0,0 );
    let yearDay = ((dateObj - firstDayYear) / 86400000)+1;
    let weekInYear = +(String((yearDay + firstDayYear.getDay()+1) / 7).split(".")[0]);
    return { date, yearDay, weekInYear };
}

//retorna datatime atual como texto
function agora(){
    $now = new Date();
    $m = ($now.getMonth()+1) < 10 ? "0"+($now.getMonth()+1) : ($now.getMonth()+1);
    $d = $now.getDate() < 10 ? "0"+$now.getDate() : $now.getDate();
    $hh = $now.getHours() < 10 ? "0"+$now.getHours() : $now.getHours();
    $mm = $now.getMinutes() < 10 ? "0"+$now.getMinutes() : $now.getMinutes();
    $ss = $now.getSeconds() < 10 ? "0"+$now.getSeconds() : $now.getSeconds();
    $agora = $now.getFullYear()+"-"+$m+"-"+$d+" "+$hh+":"+$mm+":"+$ss;
    return $agora;
}