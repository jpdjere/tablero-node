var ultimosDatos = [0];
var ultimosDatosArray = [0];
var tituloDatos = [0];
var ultimosDatos_var = [0];
var hayDatosVar = false;
var month = new Array(12);
month[0] = "Ene";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Abr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Ago";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dic";

function drawUltimosDatos(N){
$('#ultimosDatosTable').empty();
//Empty ultimosDatosTable
ultimosDatos.length = 0;
ultimosDatosArray.length = 0;
tituloDatos.length = 0;
ultimosDatos_var.length = 0;
hayDatosVar = false;
dataset.forEach(cropArrays);
ultimosDatos = ultimosDatosArray[2*N-1]
ultimosDatos_var = dataset[2*N].slice(-12);

for (row = 0; row < 12; row++) {
  if (ultimosDatos_var[row] > 0 || ultimosDatos_var[row] < 0 ){
    hayDatosVar = true;
  }
};


//Set titulo + unidades
$('#ultimosDatosSubtitle').html("Últimos datos "+dataset[2*N-1][4]); //CHART TITLE
$('#ultimosDatosUnidades').html(dataset[2*N-1][0]); //YAXIS

rowTitulos = "<tr><td>Período</td>";
//AGREGAR IF
rowTitulos += "<td>"+dataset[2*N-1][4]+"</td>";
if( hayDatosVar ) {rowTitulos += "<td>V. anual [%]</td>"};
rowTitulos += "</tr>"; //TITULOS
$('#ultimosDatosTable').append( rowTitulos );
//Carga la fila de titulos y la despliega en la table

for (row = 0; row < 12; row++) {
    var periodo = dataset[0].slice(-12)[row];
      tempDate = periodo.split("/");
//    var periodo = new Date(dataset[0].slice(-12)[row]);
//    rowDatos = "<tr><td>"+month[periodo.getUTCMonth()]+"-"+periodo.getUTCFullYear()+"</td>";
    if(!(ultimosDatos[row] == "#N/A" || ultimosDatos[row] == "")){
    rowDatos = "<tr><td>"+month[tempDate[1] - 1] +" "+ tempDate[2]+"</td>";
    rowDatos += "<td>"+ Number(ultimosDatos[row]).toLocaleString() + "</td>";
    if( hayDatosVar ) {rowDatos += "<td>"+ Number(ultimosDatos_var[row]).toLocaleString() + "</td>"};

    rowDatos += "</tr>";
    $('#ultimosDatosTable').append( rowDatos );
};}
}

function cropArrays(value,index,obj){
    ultimosDatosArray[index] = value.slice(-12);
    tituloDatos[index] = value.name;
};
