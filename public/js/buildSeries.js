function buildSeries(N){
//SERIE N
dataSerie = {
    name: dataset[2*N-1][4],
    data: dataset[2*N-1].slice(5),
    type: "line",
    valueDecimals: 2
};
dataSerie_var = {
    name: "Variación anual [%]",
    data: dataset[2*N].slice(5),
    type: "column",
    valueDecimals: 2,
    tooltip: {valueSuffix: '%'}
};
}
