function crearGrafica(titulo, tipoResumen, data){
	var dataGraphic = [];
	for(var i=0 ; i< data.length; i++){
		if(parseInt(data[i].VALOR) != 0){
			dataGraphic.push([data[i].APLICACION, parseInt(data[i].VALOR)]);
		}
	}
	
$(function () {
	var chart = new Highcharts.Chart({
		colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#DF0101'],
		color: {
			 linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
			    stops: [
			        [0, '#FC062F'],
			        [1, '#CCCCCC']
			    ]
		},
        chart: {
            type: 'column',
            renderTo: 'containerGraphic' + tipoResumen,
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: titulo 
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    formatter: function() {
                        return '<b>'+ this.point.name +'</b>: '+ this.percentage.toFixed() +'%';
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Porcentaje Error '+tipoResumen+ ':',
            data: dataGraphic
        }]
    });
});
}