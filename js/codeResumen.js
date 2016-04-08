    var valorImpactos = ['Bajo', 'Medio', 'Alto', 'Total'];
    var impacto = [];
    for (var i = 0; i < valorImpactos.length; i++) {
        impacto.push($.grep(resumenData, function (e) {
            return e.IMPACTO == valorImpactos[i]
        }));
    }

    var colNamesResumen = Object();
    var colModelResumen = Object();

    colNamesResumen.detalleResultado = ['Aplicaciones', 'Cantidad de Errores'];
    colNamesResumen.detalleResultadoDetalle = ['Aplicaciones', 'Alto', 'Medio', 'Bajo'];
    colNamesResumen.detalleResultadoParidad = ['Aplicaciones', 'IE11','SI','NO'];
    colModelResumen.detalleResultado = [{
            name: 'APLICACION'
            , width: 100
            , align: 'left'
            , index: 'APLICACION'
            , hidden: false
            , editable: true
            , formatter: function (cellvalue, options, rowobject) {
                return "<span style='cursor:pointer' onclick='mostrarPagina(" + JSON.stringify(cellvalue) + ");'>" + cellvalue + "</span>";
            }
        }
        , {
            name: 'VALOR'
            , width: 35
            , align: 'center'
            , index: 'VALOR'
            , hidden: false
            , editable: true
        }];
    colModelResumen.detalleResultadoDetalle = [
        {
            name: 'APLICACION'
            , width: 35
            , align: 'center'
            , index: 'VALOR'
            , hidden: false
            , editable: true
        }
        , {
            name: 'ALTO'
            , width: 35
            , align: 'center'
            , index: 'VALOR'
            , hidden: false
            , editable: true
        }
        , {
            name: 'MEDIO'
            , width: 35
            , align: 'center'
            , index: 'VALOR'
            , hidden: false
            , editable: true
        }
        , {
            name: 'BAJO'
            , width: 35
            , align: 'center'
            , index: 'VALOR'
            , hidden: false
            , editable: true
        }
                                        ]
    colModelResumen.detalleResultadoParidad = [
        {
            name: 'APLICACION'
            , width: 35
            , align: 'center'
            , index: 'VALOR'
            , hidden: false
            , editable: true
        },
        {
            name: 'VALORIE11'
            , width: 35
            , align: 'center'
            , index: 'VALOR'
            , hidden: false
            , editable: true
        },
        {
            name: 'VALORIE8SI'
            , width: 35
            , align: 'center'
            , index: 'VALOR'
            , hidden: false
            , editable: true
        },
        {
            name: 'VALORIE8NO'
            , width: 35
            , align: 'center'
            , index: 'VALOR'
            , hidden: false
            , editable: true
        }
                                                ]


    $(document).ready(function () {
        // Declacion tabs 
        $("#tabs").tabs({
            activate: function (event, ui) {
                var active = $('#tabs').tabs('option', 'active');
            }
        });

        for (var i = 0; i < impacto.length; i++) {
            grillaResumen(impacto[i], valorImpactos[i], ' ', colNamesResumen.detalleResultado, colModelResumen.detalleResultado, 10, 1);
            crearGrafica("Impacto " + valorImpactos[i], valorImpactos[i], impacto[i], false);
        }
        irArriba();
    });

    function mostrarDetalle(nombre, filtro) {
        crearGrafica("Detalle " + nombre, filtro + "Detalle", $.grep(resumenData, function (e) {
            return e.APLICACION == nombre && e.IMPACTO != "Total"
        }), true);
        var temp = [];
        temp.push({
            'APLICACION': nombre
            , 'ALTO': $.grep(resumenData, function (e) {
                return e.IMPACTO == 'Alto' && e.APLICACION == nombre
            })[0].VALOR
            , 'MEDIO': $.grep(resumenData, function (e) {
                return e.IMPACTO == 'Medio' && e.APLICACION == nombre
            })[0].VALOR
            , 'BAJO': $.grep(resumenData, function (e) {
                return e.IMPACTO == 'Bajo' && e.APLICACION == nombre
            })[0].VALOR
        });
        grillaResumen(temp, filtro + "Detalle", 'Detalle Impacto ' + nombre, colNamesResumen.detalleResultadoDetalle, colModelResumen.detalleResultadoDetalle, 10, 1);
        
        var paridad = [];
        var totalParidad = obtenerParidad();
        var ie8si = parseInt($.grep(totalParidad, function (e) {return e.APLICACION== nombre && e.PARIDAD == 'Sí' })[0].VALOR);
        var ie8no = parseInt($.grep(totalParidad, function (e) {return e.APLICACION== nombre && e.PARIDAD == 'No' })[0].VALOR);
        paridad.push({
            APLICACION:nombre,
            VALORIE11:ie8no+ie8si,
            VALORIE8SI:ie8si,
            VALORIE8NO:ie8no
        });
        grillaResumen(paridad, filtro + "DetalleParidad", 'Detalle Impacto ' + nombre + ' Paridad', colNamesResumen.detalleResultadoParidad, colModelResumen.detalleResultadoParidad, 10, 1);
    
    }

    function mostrarPagina(nombre) {
        window.location = "tablas.html#" + nombre;
    }

    function mostrarPestana(nombre) {
        window.location = "resumen.html#" + nombre;
        crearGrafica("Impacto " + nombre, nombre, $.grep(resumenData, function (e) {
            return e.IMPACTO == nombre
        }), false);
        $('#' + nombre + ' .row').last().hide();
        irArriba()
    }

    function irArriba() {
        $('body,html').animate({scrollTop : 0}, 500);
    }

    function cerrarDetalle(nombre) {
        $('#' + nombre + ' .row').last().fadeOut('slow');
        $("html,body").animate({
            scrollTop: $("#barraMenu").offset().top
        }, 600);
    }