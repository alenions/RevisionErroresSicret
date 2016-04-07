    var MenuCorpSicret2013      = "/MenuCorpSicret2013";
    var Instalaciones           = "/Instalaciones";
    var AdministradorPuertos    = "/AdministradorPuertos";
    var MantenedorSicret        = "/MantenedorSicret";
    var AtencionClientes        = "/AtencionClientes";
    var GestorActividades       = "/GestorActividades";
    var PerfilCliente           = "/PerfilCliente";
    var Contactos               = "/Contactos";
    var GestionComercial        = "/GestionComercial";
    var SVentaProducto          = "/SVentaProducto";
    
    var MenuCorpSicret2013List     =  $.grep(data, function(e){ return e.APLICACION == MenuCorpSicret2013 });
    var InstalacionesList          =  $.grep(data, function(e){ return e.APLICACION == Instalaciones });
    var AdministradorPuertosList   =  $.grep(data, function(e){ return e.APLICACION == AdministradorPuertos });
    var MantenedorSicretList       =  $.grep(data, function(e){ return e.APLICACION == MantenedorSicret });
    var AtencionClientesList       =  $.grep(data, function(e){ return e.APLICACION == AtencionClientes });
    var GestorActividadesList      =  $.grep(data, function(e){ return e.APLICACION == GestorActividades });
    var PerfilClienteList          =  $.grep(data, function(e){ return e.APLICACION == PerfilCliente });
    var ContactosList              =  $.grep(data, function(e){ return e.APLICACION == Contactos });
    var GestionComercialList       =  $.grep(data, function(e){ return e.APLICACION == GestionComercial });
    var SVentaProductoList         =  $.grep(data, function(e){ return e.APLICACION == SVentaProducto });
    
    var colNames = Object();
    var colModel = Object();

    colNames.detalleResultado = ['Acción','Problema','Necesita','Aplicación','Impacto','Paridad',''];
    colModel.detalleResultado = [
                {name: 'ACCION', width: 150,  align: 'left', index: 'ACCION', hidden: false, editable: true},
                {name: 'PROBLEMA', width: 200,  align: 'left', index: 'PROBLEMA', hidden: false, editable: true},
                {name: 'NECESITA', width: 200,  align: 'left', index: 'NECESITA', hidden: false, editable: true},
                {name: 'APLICACION', width: 75,  align: 'left', index: 'APLICACION', hidden: false, editable: true},
                {name: 'IMPACTO', width: 30,  align: 'left', index: 'IMPACTO', hidden: false, editable: true},
                {name: 'PARIDAD', width: 30,  align: 'left', index: 'PARIDAD', hidden: false, editable: true},
                {name: 'APLICACION', width: 15,  align: 'center', index: 'APLICACION', hidden: false, editable: true,
                    formatter: function(cellvalue, options, rowobject){
                        var objeto = JSON.stringify(cellvalue);
                        
                            return "<button type='button'  class='btn btn-default btn-xs' onclick='console.log(true)'"+">"+
                                        "<span class='glyphicon glyphicon-eye-open'></span>"+
                                    "</button>";  
                    }}];


    $(document).ready(function(){
        // Declacion tabs 
        $("#tabs").tabs({
            activate: function (event, ui) {
            var active = $('#tabs').tabs('option', 'active');
            }
        });
        
        // llenar grillas
        grillaDetalleDirecciones(MenuCorpSicret2013List,'MenuCorpSicret2013','',colNames.detalleResultado,colModel.detalleResultado,10,1);
        grillaDetalleDirecciones(InstalacionesList,'Instalaciones','',colNames.detalleResultado,colModel.detalleResultado,10,1);
        grillaDetalleDirecciones(AdministradorPuertosList,'AdministradorPuertos','',colNames.detalleResultado,colModel.detalleResultado,10,1);
        grillaDetalleDirecciones(MantenedorSicretList,'MantenedorSicret','',colNames.detalleResultado,colModel.detalleResultado,10,1);
        grillaDetalleDirecciones(AtencionClientesList,'AtencionClientes','',colNames.detalleResultado,colModel.detalleResultado,10,1);
        grillaDetalleDirecciones(GestorActividadesList,'GestorActividades','',colNames.detalleResultado,colModel.detalleResultado,10,1);
        grillaDetalleDirecciones(PerfilClienteList,'PerfilCliente','',colNames.detalleResultado,colModel.detalleResultado,10,1);
        grillaDetalleDirecciones(ContactosList,'Contactos','',colNames.detalleResultado,colModel.detalleResultado,10,1);
        grillaDetalleDirecciones(GestionComercialList,'GestionComercial','',colNames.detalleResultado,colModel.detalleResultado,10,1);
        grillaDetalleDirecciones(SVentaProductoList,'SVentaProducto','',colNames.detalleResultado,colModel.detalleResultado,10,1);

        $(".group3").colorbox({rel:'group3', transition:"none", width:"75%", height:"75%"});
    }); 

