/************************
 * crear lista pestañas *
 ************************/

var nombres = obtenerNombres(data).nombres.unique();
var mul = $("<ul/>");
var mdivtabs = $("<div/>", {
    id: "tabs"
});
for (var i = 0; i < nombres.length; i++) {
    var mli = $("<li/>", {
        onclick: "mostrarPestana('" + nombres[i].split('/')[1] + "');"
    });
    var ma = $("<a/>"
        , {
            href: '#' + nombres[i].split('/')[1]
            , text: nombres[i].split('/')[1]
        });
    mul.append(mli);
    mli.append(ma);
}

mdivtabs.append(mul);

for (var i = 0; i < nombres.length; i++) {
    var mdv1 = $("<div/>", {
        id: nombres[i].split('/')[1]
    });
    var mdv2 = $("<div/>", {
        id: nombres[i].split('/')[1]
        , class: "jqGrid animated zoomInLeft"
    });
    var mdv3 = $("<div/>", {
        id: "pie" + nombres[i].split('/')[1]
    });
    var mtable = $("<table/>", {
        id: "id" + nombres[i].split('/')[1]
    });
    mdv1.append(mdv2);
    mdv2.append(mtable);
    mdv2.append(mdv3);
    mdivtabs.append(mdv1);
}

$(document).ready(function () {
    $('body').append(mdivtabs);
});