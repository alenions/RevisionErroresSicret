/***************************************
 * crear lista pestañas en tablas html *
 ***************************************/

var nombres = obtenerNombres(data).nombres.unique();
var mul = $("<ul/>");
var mdivtabs = $("<div/>", {
    id: "tabs"
});
for (var i = 0; i < nombres.length; i++) {
    var mli = $("<li/>", {
        onclick: "mostrarPestana('" + nombres[i].split('/')[1] + "');"
    });
    var ma = $("<a/>", {
        href: '#' + nombres[i].split('/')[1],
        text: nombres[i].split('/')[1]
    });
    mul.append(mli);
    mli.append(ma);
}

mdivtabs.append(mul);

/***************************
 * Crea tablas para jqgrid *
 ***************************/

for (var i = 0; i < nombres.length; i++) {
    var mdv1 = $("<div/>", {
        id: nombres[i].split('/')[1]
    });
    var mdv2 = $("<div/>", {
        id: nombres[i].split('/')[1],
        class: "jqGrid animated zoomInLeft"
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


/**********************
 * Crea Barra de Menu *
 **********************/

var menuDiv1 = $("<div/>", {
    class: "menu navbar navbar-default navbar-fixed-top",
    id: "barraMenu"
});
var menuDiv2 = $("<div/>", {
    class: "container"
});
var menuTitulo = $("<a/>", {
    class: "navbar-brand animated bounceInLeft"
}).text("Revisión FuncionamientoSicret IE11");
var menuDiv3 = $("<div/>", {
    class: "navbar-header"
});
var menuButton = $("<button/>", {
    type: "button",
    class: "navbar-toggle",
    'data-toggle': "collapse",
    'data-target': ".navbar-collapse"
});
var menuIcon = $("<span/>", {
    class: "sr-only"
});
var menuDiv4 = $("<div/>", {
    class: "navbar-collapse collapse"
});
var menuUl = $("<ul/>", {
    class: "nav navbar-nav"
});

menuDiv1.append(menuDiv2);
menuDiv2.append(menuTitulo).append(menuDiv3);
menuDiv3.append(menuButton);
menuButton.append(menuIcon);

for (var i = 0; i < 3; i++) {
    var menuIconBar = $("<span/>", {
        class: "icon-bar"
    });
    menuButton.append(menuIconBar);
}

var items = [{
    nombre: 'Resumen',
    direccion: 'resumen.html'
}, {
    nombre: 'Tablas',
    direccion: 'tablas.html'
}];
menuDiv2.append(menuUl);
for (var i = 0; i < items.length; i++) {
    var menuLi = $("<li/>");
    var menuItems = $("<a/>", {
        href: items[i].direccion,
        class: "animated bounceInRight"
    }).text(items[i].nombre);;

    menuLi.append(menuItems);
    menuUl.append(menuLi);
}
