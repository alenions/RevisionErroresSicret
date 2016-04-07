/********************************
 * Grilla Centrex Inmobiliario	*
 ********************************/

function grillaDetalleDirecciones(obj,dato,tituloTabla,colNamesT,colModelT,filas,pagina){
	$('#id'+dato).jqGrid("GridUnload");
	$("#id"+dato).jqGrid({ 
		     mtype: 'POST',
             datatype: 'local',
             data: obj,
             height: 'auto',
             width: 'auto', /*960*/    
             height: 'auto',
             colNames: colNamesT,
             colModel: colModelT,
             caption: tituloTabla,
             viewrecords: true,
             rowNum: filas,
             rowList: [filas],
             pager: '#pie'+dato,
             loadonce: true,
             gridview: true,
             rownumbers: true,
             autoencode: true,
             ignoreCase: true,
             autowidth: true,
             shrinkToFit: false/*,
             grouping:true,
			   	groupingView : {
			   		groupField : ['factible'],
			   		groupColumnShow : [false],
			   		groupText : ['<b>{0} - {1} Configurable(s)</b>']
			   	}*/
		});

    	/*$(window).on("resize", function () {*/
    		var newWidth2 = $("#tabs").width()*0.98;
            $("#id"+dato).jqGrid("setGridWidth", newWidth2, true);
    	/*});*/

	var pag = (pagina==null)?0:pagina;
	//$('#id'+dato).jqGrid('setGridParam', {sortname: 'fechaCreacion', sortorder: 'asc'}).trigger('reloadGrid', [{page: 9999999999}]);
	$('#id'+dato).trigger('reloadGrid', [{page: pag}]);
	/*$(window).trigger('resize');*/
}


function grillaResumen(obj,dato,tituloTabla,colNamesT,colModelT,filas,pagina){
	$('#id'+dato).jqGrid("GridUnload");
	$("#id"+dato).jqGrid({ 
		     mtype: 'POST',
             datatype: 'local',
             data: obj,
             height: 'auto',
             width: 'auto', /*960*/    
             colNames: colNamesT,
             colModel: colModelT,
             caption: tituloTabla,
             viewrecords: true,
             rowNum: filas,
             rowList: [filas],
             pager: '#pie'+dato,
             loadonce: true,
             gridview: true,
             rownumbers: true,
             autoencode: true,
             ignoreCase: true,
             autowidth: true,
             shrinkToFit: false});
    		var newWidth2 = $("#tabs").width()*0.4;
            $("#id"+dato).jqGrid("setGridWidth", newWidth2, true);
	var pag = (pagina==null)?0:pagina;
	$('#id'+dato).trigger('reloadGrid', [{page: pag}]);
}
