const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const bateria = document.getElementById ('bateria');

function    isbateriabroken () {
    return bateria.src.indexOf  (   'desca'  ) > -1
    }


function bateriaOn () {
    if (!isbateriabroken ()){
    bateria.src = "img/metade.jpg";
}
}
function bateriaoff () {
    if (!isbateriabroken() ){
    bateria.src = "./img/carregada.jpg";
}
}
function bateriabroken () {
    bateria.src = "./img/desca.jpg";
}

turnOn.addEventListener ('click', bateriaOn);
turnOff.addEventListener ('click', bateriaoff);
bateria.addEventListener ('mouseover', bateriaOn);
bateria.addEventListener ('mouseleave', bateriaoff);
bateria.addEventListener ('dblclick', bateriabroken);
bateria.addEventListener ('dblclick', baterialertar);