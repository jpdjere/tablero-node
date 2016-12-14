$(function () {
  /*
    closeNav(); //CIERRA EL DESPLEGABLE CUANDO SE SELECCIONA UNA SERIE
    nominal = [];
    variacion = []; //LIMPIA LAS SERIES

    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-ohlcv.json&callback=?', function (data) {
      Highcharts.setOptions({
      lang: {
        months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        shortMonths: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',  'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
      }
    })

        // split the data set into ohlc and volume
        var nominal = [],
            variacion = [],
            dataLength = data.length,
            // set the allowed units for data grouping
            groupingUnits = [[
                'week',                         // unit name
                [1]                             // allowed multiples
            ], [
                'month',
                [1]
            ]],

            i = 0;

        for (i; i < dataLength; i += 1) {
            nominal.push([
                data[i][0], // the date
                data[i][1], //CAMBIAR 1 POR PARAMETRO 2N-1
            ]);

            variacion.push([
                data[i][0], // the date
                data[i][2] // CAMBIAR 2 POR PARAMETRO 2N
            ]);
        }

        //AGREGAR UN IF (NO HAY DATA VAR) {GRAFICAR CON AXIS SIMPLE}

        if( variacion[1][1] = 0 ){
                Highcharts.stockChart('chart-container', {
                      rangeSelector: {
                        buttons: [
                          {
                        	type: 'month',
                        	count: 3,
                        	text: '3m'
                        }, {
                        	type: 'month',
                        	count: 6,
                        	text: '6m'
                        },
                        {
                        	type: 'year',
                        	count: 1,
                        	text: '1y'
                        },
                        {
                        	type: 'year',
                        	count: 2,
                        	text: '2y'
                        },
                        {
                        	type: 'all',
                        	text: 'All'
                        }],
                          selected: 3,
                          inputEnabled: false,
                      },
        						credits: {
                      enabled: true,
                      text: "INDEC",  //PONER FUETE
                      href: '',
                    },
                    title: {
                        text: 'EXPORTACIONES' //PONER TITULO
                    },

                    yAxis: [{
                       lineWidth: 2,
                       opposite: false,
                       labels: {
                           align: 'left',
                           x: 2
                       },
                       title: {
                           text: 'SERIE' //PONER NOMBRE DE SERIE
                       },
                       height: '100%'
                   }],

                    series: [{
                        type: 'line',
                        name: 'AAPL',
                        data: nominal,
                        dataGrouping: {
                            units: groupingUnits
                        }
                    }]
                }); //AXIS SIMPLE
        } else {
        // create the chart
        Highcharts.stockChart('chart-container', {
              rangeSelector: {
                buttons: [
                  {
                	type: 'month',
                	count: 3,
                	text: '3m'
                }, {
                	type: 'month',
                	count: 6,
                	text: '6m'
                },
                {
                	type: 'year',
                	count: 1,
                	text: '1y'
                },
                {
                	type: 'year',
                	count: 2,
                	text: '2y'
                },
                {
                	type: 'all',
                	text: 'All'
                }],
                  selected: 3,
                  inputEnabled: false,
              },
						credits: {
              enabled: true,
              text: "INDEC",  //PONER FUETE
              href: '',
            },
            title: {
                text: 'EXPORTACIONES' //PONER TITULO
            },

            yAxis: [{
               lineWidth: 2,
               opposite: false,
               labels: {
                   align: 'left',
                   x: 2
               },
               title: {
                   text: 'SERIE' //PONER NOMBRE DE SERIE
               },
               height: '60%'
           },{
              lineWidth: 2,
              opposite: false,
              labels: {
                  align: 'left',
                  x: 2
              },
              title: {
                  text: 'VARIACION ANUAL [%]' //CAMBIA?
              },
              top: '65%',
              height: '35%',
              offset: 0
          }],

            series: [{
                type: 'line',
                name: 'AAPL',
                data: nominal,
                dataGrouping: {
                    units: groupingUnits
                }
            }, {
                type: 'column',
                name: 'Volume',
                data: variacion,
                yAxis: 1,
                dataGrouping: {
                    units: groupingUnits
                }
            }]
        });
        }
    });*/
});
