var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1-2xDXIx_hdcvEETsDXm40ei-CB7x0E9nn2YCOPS1qQg/pubhtml'; //Funciona

var date = [];
var series = {date:[], exportaciones:[], exportaciones_var:[], importaciones:[], importaciones_var:[], balance:[],
              reservas:[], reservas_var:[], actividad:[], actividad_var:[],  actividad_desest:[],actividad_desest_var:[],
              precio_soja:[], precio_soja_var:[], indice_construya:[], indice_construya_var:[]
              };

//No alterar el ordern
var checkColumns = ['exportaciones','exportaciones_var','importaciones','importaciones_var',
          'reservas','reservas_var','actividad','actividad_var', 'actividad_desest','actividad_desest_var',
          'precio_soja','precio_soja_var','indice_construya','indice_construya_var','balance'];

var dataset = [];
var data1 = [];


function renderSpreadsheetData() {
  Tabletop.init( { key: public_spreadsheet_url,
                  debug:true,
                  callback: draw,
                  simpleSheet: true } )
}

function transpose(a) {
    return Object.keys(a[0]).map(function (c) {
        return a.map(function (r) {
            return r[c];
        });
    });
}

function draw(data, tabletop) {
  //$('#wrap').toggleClass('dissapear');
  // draw chart
  console.log("Data:");
  console.log(data);
  // render the table(s)
  data1 = data;
  dataset = transpose(data);

  // for(var i = 0;i<data.length;i++){
  //   Object.keys(data[i]).forEach(function(key,index) {

  //     date.push(data[i].date);
  //     tempDate = data[i].date.split("/");
  //     dateUTC = Date.UTC(tempDate[2], tempDate[1], tempDate[0]);

  //     //Chequeo si es par. Par es nominal, impar es VAR
  //     if(jQuery.inArray(key,checkColumns) % 2 === 0){
  //       if(data[i][key] != false){
  //         series[key].push([dateUTC, parseFloat(data[i][key])]);
  //         //busco el Key de la variable en var sumando 1
  //         complementaryKey = checkColumns[jQuery.inArray(key,checkColumns)+1];

  //         //agrego ese dato si hay data, si no, agrego un NaN (para que highcharts tome la fecha pero no grafique)
  //         try { //agrego un try porque en el caso de Balance, el key+1 da out of bounds
  //           if(data[i][complementaryKey] != false){
  //             series[complementaryKey].push([dateUTC, parseFloat(data[i][complementaryKey])]);
  //           }else{
  //             series[complementaryKey].push([dateUTC, NaN]);
  //           }
  //         }catch(err) {
  //             console.log(err.message);
  //         }

  //       }else{
  //         //No cargo data para Nominal ni Var
  //       };

  //     }


  //   });
  // }


  var fixTimeSeries = function(){
    // for(var i = 0;i<data.length;i++){
    //   Object.keys(data[i]).forEach(function(key,index) {

    //     date.push(data[i].date);
    //     tempDate = data[i].date.split("/");
    //     dateUTC = Date.UTC(tempDate[2], tempDate[1], tempDate[0]);

    //     //Chequeo si es par. Par es nominal, impar es VAR
    //     if(jQuery.inArray(key,checkColumns) % 2 === 0){
    //       if(data[i][key] != false){
    //         series[key].push([dateUTC, parseFloat(data[i][key])]);
    //         //busco el Key de la variable en var sumando 1
    //         complementaryKey = checkColumns[jQuery.inArray(key,checkColumns)+1];

    //         //agrego ese dato si hay data, si no, agrego un NaN (para que highcharts tome la fecha pero no grafique)
    //         try { //agrego un try porque en el caso de Balance, el key+1 da out of bounds
    //           if(data[i][complementaryKey] != false){
    //             series[complementaryKey].push([dateUTC, parseFloat(data[i][complementaryKey])]);
    //           }else{
    //             series[complementaryKey].push([dateUTC, NaN]);
    //           }
    //         }catch(err) {
    //             console.log(err.message);
    //         }

    //       }else{
    //         //No cargo data para Nominal ni Var
    //       };

    //     }


    //   });
    // }
  }

  buildSeries(1);
  //drawCharts(dataBalance, dataBalance_var, 'Exportaciones', 'Miles de USD', 'Variación anual [%]');
  drawUltimosDatos(1);

}

renderSpreadsheetData();
