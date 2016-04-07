    var MenuCorpSicret2013 = "/MenuCorpSicret2013";
    var Instalaciones = "/Instalaciones";
    var AdministradorPuertos = "/AdministradorPuertos";
    var MantenedorSicret = "/MantenedorSicret";
    var AtencionClientes = "/AtencionClientes";
    var GestorActividades = "/GestorActividades";
    var PerfilCliente = "/PerfilCliente";
    var Contactos = "/Contactos";
    var GestionComercial = "/GestionComercial";
    var SVentaProducto = "/SVentaProducto";

    var MenuCorpSicret2013List = $.grep(data, function (e) {
        return e.APLICACION == MenuCorpSicret2013
    });
    var InstalacionesList = $.grep(data, function (e) {
        return e.APLICACION == Instalaciones
    });
    var AdministradorPuertosList = $.grep(data, function (e) {
        return e.APLICACION == AdministradorPuertos
    });
    var MantenedorSicretList = $.grep(data, function (e) {
        return e.APLICACION == MantenedorSicret
    });
    var AtencionClientesList = $.grep(data, function (e) {
        return e.APLICACION == AtencionClientes
    });
    var GestorActividadesList = $.grep(data, function (e) {
        return e.APLICACION == GestorActividades
    });
    var PerfilClienteList = $.grep(data, function (e) {
        return e.APLICACION == PerfilCliente
    });
    var ContactosList = $.grep(data, function (e) {
        return e.APLICACION == Contactos
    });
    var GestionComercialList = $.grep(data, function (e) {
        return e.APLICACION == GestionComercial
    });
    var SVentaProductoList = $.grep(data, function (e) {
        return e.APLICACION == SVentaProducto
    });

    var colNames = Object();
    var colModel = Object();

    colNames.detalleResultado = ['Id', 'Acción', 'Problema', 'Necesita', 'Aplicación', 'Impacto', 'Paridad', '', ''];
    colModel.detalleResultado = [
        {
            name: 'ID_ERROR',
            width: 15,
            align: 'center',
            index: 'ID_ERROR',
            hidden: false,
            editable: true
        },
        {
            name: 'ACCION',
            width: 150,
            align: 'left',
            index: 'ACCION',
            hidden: false,
            editable: true,
            formatter: function (cellvalue, options, rowobject) {
                return "<span style='cursor:pointer' onclick='mostrar(" + JSON.stringify(cellvalue) + "," + JSON.stringify('Acción realizada') + ");'>" + cellvalue + "</span>";
            }
        },
        {
            name: 'PROBLEMA',
            width: 200,
            align: 'left',
            index: 'PROBLEMA',
            hidden: false,
            editable: true,
            formatter: function (cellvalue, options, rowobject) {
                return "<span style='cursor:pointer' onclick='mostrar(" + JSON.stringify(cellvalue) + "," + JSON.stringify('Problema Encontrado') + ");'>" + cellvalue + "</span>";
            }
        },
        {
            name: 'NECESITA',
            width: 200,
            align: 'left',
            index: 'NECESITA',
            hidden: false,
            editable: true,
            formatter: function (cellvalue, options, rowobject) {
                return "<span style='cursor:pointer' onclick='mostrar(" + JSON.stringify(cellvalue) + "," + JSON.stringify('Se Necesita') + ");'>" + cellvalue + "</span>";
            }
        },
        {
            name: 'APLICACION',
            width: 75,
            align: 'left',
            index: 'APLICACION',
            hidden: false,
            editable: true
        },
        {
            name: 'IMPACTO',
            width: 30,
            align: 'center',
            index: 'IMPACTO',
            hidden: false,
            editable: true,
            formatter: function (cellvalue, options, rowobject) {
                return "<span class='" + rowobject.IMPACTO + "' >" + rowobject.IMPACTO + "</span>";
            }
        },
        {
            name: 'PARIDAD',
            width: 30,
            align: 'center',
            index: 'PARIDAD',
            hidden: false,
            editable: true
        },
        {
            name: 'ID_GRUPO',
            width: 30,
            align: 'left',
            index: 'ID_GRUPO',
            hidden: true,
            editable: true
        },
        {
            name: 'ID_ERROR',
            width: 18,
            align: 'center',
            index: 'ID_ERROR',
            hidden: false,
            editable: true,
            formatter: function (cellvalue, options, rowobject) {
                var rutaImagen = "imagenes";
                var nombreAplicacion = rowobject.APLICACION;
                var idError = rowobject.ID_ERROR;
                var idGrupo = rowobject.ID_GRUPO
                var rutaCompleta = rutaImagen + nombreAplicacion + "_Error_" + idError + ".PNG";
                var objeto = JSON.stringify(rutaCompleta);

                return "<a class='group" + idGrupo + " btn btn-default btn-xs' title='" + rowobject.PROBLEMA + "' href='" + rutaCompleta + "'" + ">" +
                    "<span class='glyphicon glyphicon-eye-open'></span>" +
                    "</a>";
            }
        }];

    function mostrar(datos, titulo) {
        modalMensajes(titulo, datos);
    }

    //---- funcion de mensajes estandar ----//
    function modalMensajes(titulo, info, tiempo) {
        $('#btnMensajeSimple').attr('onclick', '');
        $('#modalMensajes').css('z-index', '3000');
        $('#tituloMensaje').html(titulo);
        $('#infoMensaje').html(info);
        $('#modalMensajes').modal('show');
        if (tiempo != null) {
            setTimeout(function () {
                $('#tituloMensaje,#infoMensaje').html('');
                $('#modalMensajes').modal('hide');
            }, tiempo);
        }
        var largo = $('#infoMensaje').text();
        if (largo.charAt(largo.length - 1) != ".") {
            $('#infoMensaje').append(".");
        }
    }

    function mostrarPestana(nombre) {
        window.location = "tablas.html#" + nombre;
        irArriba();
    }

    function irArriba() {
        $("html,body").animate({
            scrollTop: $("#barraMenu").offset().top
        }, 1000);
    }

    $(document).ready(function () {
        // Declacion tabs 
        $("#tabs").tabs({
            activate: function (event, ui) {
                var active = $('#tabs').tabs('option', 'active');
            }
        });

        // llenar grillas
        grillaDetalleDirecciones(MenuCorpSicret2013List, 'MenuCorpSicret2013', '', colNames.detalleResultado, colModel.detalleResultado, 20, 1);
        grillaDetalleDirecciones(InstalacionesList, 'Instalaciones', '', colNames.detalleResultado, colModel.detalleResultado, 20, 1);
        grillaDetalleDirecciones(AdministradorPuertosList, 'AdministradorPuertos', '', colNames.detalleResultado, colModel.detalleResultado, 20, 1);
        grillaDetalleDirecciones(MantenedorSicretList, 'MantenedorSicret', '', colNames.detalleResultado, colModel.detalleResultado, 20, 1);
        grillaDetalleDirecciones(AtencionClientesList, 'AtencionClientes', '', colNames.detalleResultado, colModel.detalleResultado, 20, 1);
        grillaDetalleDirecciones(GestorActividadesList, 'GestorActividades', '', colNames.detalleResultado, colModel.detalleResultado, 20, 1);
        grillaDetalleDirecciones(PerfilClienteList, 'PerfilCliente', '', colNames.detalleResultado, colModel.detalleResultado, 20, 1);
        grillaDetalleDirecciones(ContactosList, 'Contactos', '', colNames.detalleResultado, colModel.detalleResultado, 20, 1);
        grillaDetalleDirecciones(GestionComercialList, 'GestionComercial', '', colNames.detalleResultado, colModel.detalleResultado, 20, 1);
        grillaDetalleDirecciones(SVentaProductoList, 'SVentaProducto', '', colNames.detalleResultado, colModel.detalleResultado, 20, 1);

        //declarar grupos de imagenes
        $(".group1").colorbox({
            rel: 'group1',
            transition: "none",
            width: "95%",
            height: "95%"
        });
        $(".group2").colorbox({
            rel: 'group2',
            transition: "none",
            width: "95%",
            height: "95%"
        });
        $(".group3").colorbox({
            rel: 'group3',
            transition: "none",
            width: "95%",
            height: "95%"
        });
        $(".group4").colorbox({
            rel: 'group4',
            transition: "none",
            width: "95%",
            height: "95%"
        });
        $(".group5").colorbox({
            rel: 'group5',
            transition: "none",
            width: "95%",
            height: "95%"
        });
        $(".group6").colorbox({
            rel: 'group6',
            transition: "none",
            width: "95%",
            height: "95%"
        });
        $(".group7").colorbox({
            rel: 'group7',
            transition: "none",
            width: "95%",
            height: "95%"
        });
        $(".group8").colorbox({
            rel: 'group8',
            transition: "none",
            width: "95%",
            height: "95%"
        });
        $(".group9").colorbox({
            rel: 'group9',
            transition: "none",
            width: "95%",
            height: "95%"
        });
        $(".group10").colorbox({
            rel: 'group10',
            transition: "none",
            width: "95%",
            height: "95%"
        });
        $(".inline").colorbox({
            inline: true,
            width: "50%"
        });
    });

    $(document).bind('cbox_complete', function () {
        $('#cboxContent').css('margin-top', '60px');
        $('#cboxTitle').css('margin-top', '-40px');
    });