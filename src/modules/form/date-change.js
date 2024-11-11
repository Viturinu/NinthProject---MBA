import {schedulesDay} from "../schedules/load.js"

//selecione o input de data
const selectedDate = document.getElementById("date");

//Recarregar a lista de horário quando o input de data mudar.
selectedDate.onchange = () => schedulesDay();