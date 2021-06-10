//materilize
document.addEventListener('DOMContentLoaded', function () {
    // menu responsive
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    // inicio de seccion
    var elems = document.querySelectorAll('.pushpin');
    var instances = M.Pushpin.init(elems, {
        offset: -500,
        top: 0
    })

    // buscador
    var elems = document.querySelectorAll('.autocomplete');
    var instances = M.Autocomplete.init(elems, {
        data: {
            "Html": null,
            "Css": null,
            "Javascript": null,
            "Php": null,
            "Python": null,
            "java": null,
            "angular": null,
            "react": null,
            "vue": null,
            "c++": null,
            "adobe xd": null,
            "sketch": null,
            "photoshop": null,
            "ilistrator": null,
            "sass": null,
            "bootstrap": null,
            "mongodb": null,
            "fundamento del diseño": null

        },
        limit: 3,
    });

    // Parallax
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);

    // tabs
    var elems = document.querySelectorAll('.tabs');
    var instance = M.Tabs.init(elems);

    // modal
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);

    
});

//carga
window.addEventListener('load', () => {
    document.getElementById('oculto').className = 'hide';
});


// reseteo de formulario al hacer click
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (reiniciar) => {
    reiniciar.preventDefault();
    formulario.reset();
});