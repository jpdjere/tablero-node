var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1mCPA8c2TQUCQ6ZVzYMazEXeI303P-wsn6i_ojD1Mf7c/pubhtml'; //Funciona

var filledColumns = ['periodo', 'valor','variacion_ia', 'val_2016'];
var firstAndLastColumns = ['indicador','var_16_15']

function renderSpreadsheetData() {
  Tabletop.init( { key: public_spreadsheet_url,
                  debug:true,
                  callback: draw,
                  simpleSheet: true } )
}

function draw(dataTablero, tabletop) {
  $('#wrap').toggleClass('dissapear');
	// draw chart
	console.log("Data Tablero:");
	console.log(dataTablero);

  function tabulate(data, selection, columns,tipoDeTabla) {
    /*Argumentos: data: data a incluir. Cortar la data necesaria, como se ve en los llamados abajo.
                  selection: elemento adonde meter la tabla
                  columnas: elegir columnas a graficar
                  tipoDeTabla: true para tabla grande, false para tabla comprimida
    */

    if(tipoDeTabla){
      var table = selection.append('table').attr("style","width:100%");
    }else{
      var table = selection.append('table')
                      .attr("id","collapsed-table")
                      .attr("data-mode","reflow")
                      .attr("class","ui-responsive ui-table-reflow table-stroke")
    }

    var thead = table.append('thead')
    var tbody = table.append('tbody');

    // // append the header row
    // thead.append('tr')
    //   .selectAll('th')
    //   .data(columns).enter()
    //   .append('th')
    //     .text(function (column) { return column; });

    // create a row for each object in the data
    var rows = tbody.selectAll('tr')
      .data(data)
      .enter()
      .append('tr');

    // create a cell in each row for each column
    var cells = rows.selectAll('td')
      .data(function (row) {

        return columns.map(function (column) {

          //Las columnas que estn en filledColumns
          if(jQuery.inArray(column,filledColumns) !== -1){
            //return {column: column, value: Number(row[column]).toLocaleString()};
            return {column: column, value: row[column]};
          }//Las columnas first and last
          else if(jQuery.inArray(column,firstAndLastColumns) !== -1){
            return {column: column, value: row[column]};
          }else //Las demas (son las que tiene valores fijos)
          {
            return {column: column, value: "free space",id:"unidad"};
          }
        });
      })
      .enter()
      .append('td')
        .text(function (d) { return d.value; })
        .attr("class",function (d,i) {

            return "number"+i;

        })
        .attr("id",function (d,i) {
          if(d.id !== undefined){
            return d.id+""+i;
          }
        });

    return table;
  }

  // render the table(s)
  //las columnas las tengo que incluir para guardar el espacio para ellas, incluso a las que no les paso data
  dataSectorExt = dataTablero.slice(0,6);
  selection = d3.select('#sectorExterno');
  tabulate(dataSectorExt, selection, ['indicador', 'unidad','periodo', 'valor','variacion_ia', 'periodo2','val_2016','var_16_15'],true); // 2 column table

  dataInversion = dataTablero.slice(6,12);
  selection = d3.select('#inversion');
  tabulate(dataInversion, selection, ['indicador', 'unidad','periodo', 'valor','variacion_ia', 'periodo2','val_2016','var_16_15'],true); // 2 column table

  dataConsumo = dataTablero.slice(12,17);
  selection = d3.select('#consumo');
  tabulate(dataConsumo, selection,  ['indicador', 'unidad','periodo', 'valor','variacion_ia', 'periodo2','val_2016','var_16_15'],true); // 2 column table

  dataPrecios = dataTablero.slice(17,23);
  selection = d3.select('#precios');
  tabulate(dataPrecios, selection,  ['indicador', 'unidad','periodo', 'valor','variacion_ia', 'periodo2','val_2016','var_16_15'],true); // 2 column table

  dataSectorReal = dataTablero.slice(23,33);
  selection = d3.select('#sectorReal');
  tabulate(dataSectorReal,  selection, ['indicador', 'unidad','periodo', 'valor','variacion_ia', 'periodo2','val_2016','var_16_15'],true); // 2 column table

  dataMonetario = dataTablero.slice(33,36);
  selection = d3.select('#monetario');
  tabulate(dataMonetario,  selection, ['indicador', 'unidad','periodo', 'valor','variacion_ia', 'periodo2','val_2016','var_16_15'],true); // 2 column table

  dataFiscal = dataTablero.slice(36,40);
  selection = d3.select('#fiscal');
  tabulate(dataFiscal, selection,  ['indicador', 'unidad','periodo', 'valor','variacion_ia', 'periodo2','val_2016','var_16_15'],true); // 2 column table

  /*-----Data para tablero comprimido ----------------*/
  dataTotal = dataTablero.slice(0,40);
  selection = d3.select('#collapsedTableroContainer');
  tabulate(dataTotal, selection,  ['indicador', 'unidad','periodo', 'valor','variacion_ia', 'periodo2','val_2016','var_16_15'],false); // 2 column table

  /*-----------------------Sector externo-------------------*/
  $('#sectorExterno #unidad1').html('Millones de USD');
  $('#sectorExterno #unidad5').html('Anual');
  $('#sectorExterno tr:nth-child(2) td#unidad1 ').html('Variación anual [%]');
  $('#sectorExterno tr:nth-child(4) td#unidad1 ').html('Variación anual [%]');
  $('#sectorExterno tr:nth-child(6) td#unidad1 ').html('USD/Ton');
  for(var i = 1;i<7;i++){
    $('#collapsed-table tr:nth-child('+i+') #unidad1').html('Millones de USD');
    $('#collapsed-table tr:nth-child('+i+') #unidad5').html('Anual');
  }
  $('#collapsed-table tr:nth-child(2) td#unidad1 ').html('Variación anual [%]');
  $('#collapsed-table tr:nth-child(4) td#unidad1 ').html('Variación anual [%]');
  $('#collapsed-table tr:nth-child(6) td#unidad1').html('USD/Ton');


  /*-----------------------Inversion-------------------*/
  $('#inversion #unidad1').html('Millones de USD');
  $('#inversion #unidad5').html('Anual');
  $('#inversion tr:nth-child(3) td#unidad1 ').html('Variación anual [%]');
  $('#inversion tr:nth-child(4) td#unidad1 ').html('Índice (Ene&#8209;2015=100)');
  $('#inversion tr:nth-child(5) td#unidad1 ').html('Millones de USD de 2004');
  for(var i = 7;i<13;i++){
    $('#collapsed-table tr:nth-child('+i+') #unidad1').html('Millones de USD');
    $('#collapsed-table tr:nth-child('+i+') #unidad5').html('Anual');
  }
  $('#collapsed-table tr:nth-child(9) td#unidad1').html('Variación anual [%]');
  $('#collapsed-table tr:nth-child(10) td#unidad1').html('Índice Ene&#8209;2015=100');
  $('#collapsed-table tr:nth-child(11) td#unidad1').html('Millones de USD de 2004');

  /*-----------------------Consumo-------------------*/
  $('#consumo #unidad1').html('Millones de $ Dic-2014');
  $('#consumo tr:nth-child(3) td#unidad1 ').html('Unidades');
  $('#consumo tr:nth-child(4) td#unidad1 ').html('Millones de Pesos');
  $('#consumo tr:nth-child(5) td#unidad1 ').html('Tasa [%]');
  $('#consumo #unidad5').html('');
  for(var i = 13;i<18;i++){
    $('#collapsed-table tr:nth-child('+i+') #unidad1').html('Millones de $ Dic-2014');
    $('#collapsed-table tr:nth-child('+i+') #unidad5').html('Anual');
  }
  $('#collapsed-table tr:nth-child(15) td#unidad1').html('Unidades');
  $('#collapsed-table tr:nth-child(16) td#unidad1').html('Millones de pesos');
  $('#collapsed-table tr:nth-child(17) td#unidad1').html('Tasa [%]');

  /*-----------------------Precios-------------------*/
  $('#precios #unidad1').html('Índice (Ene&#8209;2001=1)');
  $('#precios tr:nth-child(1) td#unidad1 ').html('Pesos');
  $('#precios tr:nth-child(2) td#unidad1 ').html('Variación mensual [%]');
  $('#precios tr:nth-child(3) td#unidad1 ').html('$/USD');
  $('#precios #unidad5').html('Anual');
  for(var i = 18;i<24;i++){
    $('#collapsed-table tr:nth-child('+i+') #unidad1').html('Índice (Ene&#8209;2001=1)');
    $('#collapsed-table tr:nth-child('+i+') #unidad5').html('Anual');
  }
  $('#collapsed-table tr:nth-child(18) td#unidad1').html('Pesos');
  $('#collapsed-table tr:nth-child(19) td#unidad1').html('Variación mensual [%]');
  $('#collapsed-table tr:nth-child(20) td#unidad1').html('$/USD');

  /*-----------------------Sector Real-------------------*/
  $('#sectorReal #unidad1').html('Variación anual [%]');
  $('#sectorReal #unidad5').html('Anual');
  $('#sectorReal tr:nth-child(4) td#unidad1 ').html('Unidades');
  $('#sectorReal tr:nth-child(5) td#unidad1 ').html('Miles de Ton.');
  $('#sectorReal tr:nth-child(6) td#unidad1 ').html('Miles de Ton.');
  $('#sectorReal tr:nth-child(7) td#unidad1 ').html('Miles de metros cúbicos');
  $('#sectorReal tr:nth-child(8) td#unidad1 ').html('Metros cúbicos');
  $('#sectorReal tr:nth-child(9) td#unidad1 ').html('Unidades');
  for(var i = 24;i<34;i++){
    $('#collapsed-table tr:nth-child('+i+') #unidad1').html('Variación anual [%]');
    $('#collapsed-table tr:nth-child('+i+') #unidad5').html('Anual');
  }
  $('#collapsed-table tr:nth-child(27) td#unidad1').html('Unidades');
  $('#collapsed-table tr:nth-child(28) td#unidad1').html('Miles de Ton');
  $('#collapsed-table tr:nth-child(29) td#unidad1').html('Miles de Ton');
  $('#collapsed-table tr:nth-child(30) td#unidad1').html('Miles de m3');
  $('#collapsed-table tr:nth-child(31) td#unidad1').html('Metros cúbicos');
  $('#collapsed-table tr:nth-child(32) td#unidad1').html('Unidades');

  /*-----------------------Monetario-------------------*/
  $('#monetario tr:nth-child(1) td#unidad1 ').html('Tasa nominal anual [%]');
  $('#monetario tr:nth-child(2) td#unidad1 ').html('Millones de $');
  $('#monetario tr:nth-child(3) td#unidad1 ').html('Millones de USD');
  $('#monetario #unidad5').html('Acum.');
  for(var i = 34;i<37;i++){
    $('#collapsed-table tr:nth-child('+i+') #unidad1').html('Millones de USD');
    $('#collapsed-table tr:nth-child('+i+') #unidad5').html('Acum');
  }
  $('#collapsed-table tr:nth-child(34) td#unidad1').html('Tasa nominal anual [%]');
  $('#collapsed-table tr:nth-child(35) td#unidad1').html('Millones de $');
  $('#collapsed-table tr:nth-child(36) td#unidad1').html('Millones de USD');

  /*-----------------------Fiscal-------------------*/
  $('#fiscal #unidad1').html('Millones de $');
  $('#fiscal #unidad5').html('Anual');
  for(var i = 37;i<41;i++){
    $('#collapsed-table tr:nth-child('+i+') #unidad1').html('Millones de $');
    $('#collapsed-table tr:nth-child('+i+') #unidad5').html('Anual');
  }



  // Agrego separadores de "Ultimo dato disponible" y "Acumulado" en CollapsedTable
  $('#collapsedTableroContainer #collapsed-table td.number2').before('<td class="udd">Último dato disponible</td>')
  $('#collapsedTableroContainer #collapsed-table td.number5').before('<td class="acumulado">Acumulado</td>')

  flechitas();
}

$(document).on('click touch', '#collapsed-table tr',function() {
	$(this).toggleClass('spreadedTableRow');
});
renderSpreadsheetData();
