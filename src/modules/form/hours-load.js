import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours"); //esse elemento é a UL que contém os LIs

export function hoursLoad({ date }) {
    //limpa a lista de horários
    hours.innerHTML = " ";
    const opening = openingHours.map((hour) => {
        //recupera somente a hora
        const [scheduleHour] = hour.split(":"); //splitando o horário 09 e 00 (por exemplo), e colocando o nome da primeira posíção do array (ou seja, as horas propriamente ditas)(se eu colocar outro parâmetro ali, ele vai nomear o segundo elemento do array - desestrututando - como fiz com o primeiro)
        //console.log(scheduleHour)

        //Adiciona a hora na date e verifica se está no passado.
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs()); //verifica data também, não apenas a hora, pois estamos criando um dayjs que contém todas as informações
        //console.log(isHourPast)
        //console.log(dayjs(date).add(scheduleHour, "hour"))

        return {
            hour,
            available: isHourPast,
        }
    })

    opening.forEach(({hour, available}) => {
        const li = document.createElement("li");
        li.classList.add("hour");
        li.classList.add(available ? "hour-available" : "hour-unavailable");
        li.textContent = hour;
        if(hour === "9:00"){
            hourHeaderAdd("Manhã");
        } else if (hour === "13:00"){
            hourHeaderAdd("Tarde");
        } else if (hour === "18:00"){
            hourHeaderAdd("Noite");
        }

        hours.append(li);
    })

    hoursClick(); //chama uma função que contém o evento de click lá dentro (pra mim não faz muito sentido, por que não colcoar ele aqui?)
}

function hourHeaderAdd(title){
    const header = document.createElement("li");
    header.classList.add("hour-period");
    header.textContent = title;

    hours.append(header);
}