import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";
import { scheduleShow } from "../schedules/show.js"

const selectedDate = document.getElementById("date");

export async function schedulesDay() {
    //obtém a data do input
    const date = selectedDate.value;

    //Busca na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({ date });

    //exibe os agendamentos
    scheduleShow({ dailySchedules });

    //renderiza as horas disponíveis
    hoursLoad({ date, dailySchedules });
}