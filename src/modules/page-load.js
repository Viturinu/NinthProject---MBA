import {schedulesDay} from "./schedules/load.js"

document.addEventListener("DOMContentLoaded", function () { //quando tudo estiver carregado, esse evento é disparado (Esse é o evento que dispara a sequência de eventos - estava em dúvida neste ponto)
    schedulesDay();
})