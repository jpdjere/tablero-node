function flechitas(){
/*BARRE TODOS LOS TD N4*/
$('.number4').each(function(){
  console.log($(this).innerHTML);
  if (parseFloat($(this)[0].innerHTML)<0){
    $(this).addClass('downValue');
  } else if (parseFloat($(this)[0].innerHTML)>0){
    $(this).addClass('upValue');
  }
 });

/*BORRA LAS CLASES DE TD MONETARIO Y FISCAL*/

$('#monetario').find('.number4').each(function(){
   $(this).removeClass('downValue upValue');
 }
);
$('#fiscal').find('.number4').each(function(){
    $(this).removeClass('downValue upValue');
  }
 );
 for(var i = 34;i<41;i++){
   $('#collapsed-table tr:nth-child('+i+') .number4').removeClass('downValue upValue');
 }

/* AÑADIR INVERSOS: Costos y Desempleo */

if ($('#consumo tr:nth-child(5) td.number4').hasClass('downValue')){
  //$('#consumo tr:nth-child(5) td.number4').removeClass('downValue');
  $('#consumo tr:nth-child(5) td.number4').addClass('verde');
  //$('#collapsed-table tr:nth-child(17) td.number4').removeClass('downValue');
  $('#collapsed-table tr:nth-child(17) td.number4').addClass('verde');
}
else if ($('#consumo tr:nth-child(5) td.number4').hasClass('upValue')) {
  //$('#consumo tr:nth-child(5) td.number4').removeClass('upValue');
  $('#consumo tr:nth-child(5) td.number4').addClass('rojo');
  //$('#collapsed-table tr:nth-child(17) td.number4').removeClass('upValue');
  $('#collapsed-table tr:nth-child(17) td.number4').addClass('rojo');
}

if ($('#precios tr:nth-child(2) td.number4').hasClass('downValue')){
  //$('#precios tr:nth-child(2) td.number4').removeClass('downValue');
  $('#precios tr:nth-child(2) td.number4').addClass('verde');
  //$('#collapsed-table tr:nth-child(19) td.number4').removeClass('downValue');
  $('#collapsed-table tr:nth-child(19) td.number4').addClass('verde');
}
else if ($('#precios tr:nth-child(2) td.number4').hasClass('upValue')) {
  //$('#precios tr:nth-child(2) td.number4').removeClass('upValue');
  $('#precios tr:nth-child(2) td.number4').addClass('rojo');
  //$('#collapsed-table tr:nth-child(19) td.number4').removeClass('upValue');
  $('#collapsed-table tr:nth-child(19) td.number4').addClass('rojo');
}
/*FIN EXCEPCION*/
};
