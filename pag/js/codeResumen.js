    var valorImpactos = ['Bajo','Medio','Alto','Total'];
    var impacto = [];
    for(var i=0; i<valorImpactos.length; i++){
    	impacto.push($.grep(resumenData, function(e){ return e.IMPACTO == valorImpactos[i]}));
    }

    var colNamesResumen = Object();
    var colModelResumen = Object();
    
    colNamesResumen.detalleResultado = ['Aplicaciones','Cantidad de Errores'];
    colModelResumen.detalleResultado = [ {name: 'APLICACION', width: 100,  align: 'left', index: 'APLICACION', hidden: false, editable: true},
                                  {name: 'VALOR', width: 100,  align: 'left', index: 'VALOR', hidden: false, editable: true}];

    $(document).ready(function(){
        // Declacion tabs 
        $("#tabs").tabs({
            activate: function (event, ui) {
            var active = $('#tabs').tabs('option', 'active');
            }
        });
        
        for(var i=0;i<impacto.length;i++){
        	grillaResumen(impacto[i],valorImpactos[i],'',colNamesResumen.detalleResultado,colModelResumen.detalleResultado,10,1);
        	crearGrafica("Impacto " + valorImpactos[i], valorImpactos[i], impacto[i]);
        }    
        $(".group3").colorbox({rel:'group3', transition:"none", width:"75%", height:"75%"});
    }); 

