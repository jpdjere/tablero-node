function drawCharts(N){
    closeNav(); //CIERRA EL DESPLEGABLE CUANDO SE SELECCIONA UNA SERIE
    nominal = [];
    variacion = []; //LIMPIA LAS SERIES
    dataLength = dataSerie.data.length+5; //Porque dataSerie ya tiene el slice

    buildSeries(N);
    drawUltimosDatos(N);

      Highcharts.setOptions({
        lang: {
          months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
          shortMonths: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',  'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
          decimalPoint: ',',
          thousandsSep: '.'
        }
      })
        // split the data set into ohlc and volume
        var tempDate,
            dateUTC,
            // set the allowed units for data grouping
            groupingUnits = [[
                'week',                         // unit name
                [1]                             // allowed multiples
            ], [
                'month',
                [1]
            ]],

            i = 0;

        for (i=5 ; i < dataLength; i += 1) {
          tempDate = dataset[0][i].split("/");
          dateUTC = Date.UTC(tempDate[2], tempDate[1]-1, tempDate[0]); //MES -1 0=ENERO
          nominal.push([dateUTC,
            parseFloat(dataset[2*N-1][i])]);
          variacion.push([dateUTC,
            parseFloat(dataset[2*N][i])]);
        };



        if( !hayDatosVar ){ //SI NO HAY DATOS_VAR
                Highcharts.stockChart('chart-container', {
                      rangeSelector: {
                        buttons: [{
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
                          selected: 2,
                          inputEnabled: false,
                      },
        						credits: {
                      enabled: true,
                      text: "Fuente: " + dataset[2*N-1][3],  //PONER FUENTE
                      href: '',
                      style: { "cursor": "default", "color": "#999999", "fontSize": "12px" }
                    },
                    title: {
                        text: dataset[2*N-1][4] //PONER TITULO
                    },

                    yAxis: [{
                       lineWidth: 2,
                       opposite: false,
                       labels: {
                           align: 'left',
                           x: 2
                       },
                       title: {
                           text: dataset[2*N-1][0] //PONER NOMBRE DE SERIE
                       },
                       height: '100%'
                   }],

                    series: [{
                        type: 'line',
                        name: dataset[2*N-1][4],
                        data: nominal,
                        dataGrouping: {
                            units: groupingUnits
                        },
                        color: '#00b9f1',
                        tooltip: {valueSuffix: dataset[2*N-1][1]}
                    }]
                }); //AXIS SIMPLE
        } else {
        // create the chart
        Highcharts.stockChart('chart-container', {
              rangeSelector: {
                buttons: [{
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
                  selected: 2,
                  inputEnabled: false,
              },
						credits: {
              enabled: true,
              text: "Fuente: " + dataset[2*N-1][3],  //PONER FUENTE
              href: '',
              style: { "cursor": "default", "color": "#999999", "fontSize": "12px" }
            },
            title: {
                text: dataset[2*N-1][4] //PONER TITULO
            },

            yAxis: [{
               lineWidth: 2,
               opposite: false,
               labels: {
                   align: 'left',
                   x: 2
               },
               title: {
                   text: dataset[2*N-1][0] //PONER NOMBRE DE SERIE
               },
               height: '60%'
           },{
              lineWidth: 2,
              opposite: false,
              labels: {
                  align: 'left',
                  x: 2,
                  enabled: false
              },
              title: {
                  text: 'Variación anual' //CAMBIA?
              },
              top: '65%',
              height: '35%',
              offset: 0
          }],

            series: [{
                type: 'line',
                name: dataset[2*N-1][4],
                data: nominal,
                dataGrouping: {
                    units: groupingUnits
                },
                color: '#00b9f1',
                tooltip: {valueSuffix: dataset[2*N-1][1]}
            }, {
                type: 'column',
                name: 'Variación anual',
                data: variacion,
                yAxis: 1,
                dataGrouping: {
                    units: groupingUnits
                },
                color: '#00b9f1',
                negativeColor: '#767676',
                tooltip: {valueSuffix: '%'}
            }]
        });
      };
      //$('.highcharts-title')[0].setAttribute('x','100');
    };
