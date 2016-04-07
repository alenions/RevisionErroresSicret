function crearGrafica(titulo, tipoResumen, data, tipo) {

    var dataGraphic = [];
    for (var i = 0; i < data.length; i++) {
        if (parseInt(data[i].VALOR) != 0) {
            dataGraphic.push([data[i].APLICACION, parseInt(data[i].VALOR)]);
        }
    }

    $(function () {
        var chart = new Highcharts.Chart({
            colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#DF0101'],
            color: {
                linearGradient: {
                    x1: 0,
                    x2: 0,
                    y1: 0,
                    y2: 1
                },
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
                        useHTML: true,
                        formatter: function () {
                            var estado = "";
                            var valor = this.y;
                            if (tipo) {
                                var estadoTemp = $.grep(data, function (e) {
                                    return e.VALOR == valor.toString()
                                });
                                estado = estadoTemp[0].IMPACTO;
                            }
                            if (tipo) {
                                return '<b>' + estado + '</b>: ' + this.percentage.toFixed() + '%';
                            } else {
                                return '<b>' + this.point.name + estado + '</b>: ' + this.percentage.toFixed() + '%';
                            }

                        }
                    }
                },
                series: {
                    cursor: 'pointer',
                    point: {
                        events: {
                            click: function () {
                                if (!tipo) {
                                    
                                    $('#'+tipoResumen+' .row').last().fadeIn("slow");
                                    $("html,body").animate({
                                        scrollTop: $(".topeAbajo"+tipoResumen).offset().top
                                    }, 1000);
                                   
                                    mostrarDetalle(this.name, tipoResumen);
                                } else {
                                    var resumen = tipoResumen.split("Detalle")
                                    $("html,body").animate({
                                        scrollTop: $("#containerGraphic" + resumen[0]).offset().top
                                    }, 1000);
                                }
                            }
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Porcentaje Error ' + tipoResumen + ':',
                data: dataGraphic
        }]
        });
    });

}