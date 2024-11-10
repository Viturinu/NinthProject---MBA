import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.getElementById("date");

export function schedulesDay() {
    //obtém a data do input
    const date = selectedDate.value;
    //renderiza as horas disponíveis
    hoursLoad({ date });
}