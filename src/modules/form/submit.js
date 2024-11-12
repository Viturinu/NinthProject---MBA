import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

selectedDate.value = inputToday;

selectedDate.min = inputToday;

form.onsubmit = async (event) => {
    event.preventDefault();
    try {
        //recuperando o nome do cliente
        const name = clientName.value.trim();

        if (!name) {
            return alert("Informe o nome do cliente!")
        }

        //recupera o horário selecionado.
        const hourSelected = document.querySelector(".hour-selected"); //buscando a hora selecionada pelo usuário

        if (!hourSelected) {
            return alert("Selecione a hora.");
        }

        const [hour] = hourSelected.innerText.split(":"); //innerText leva em consideração o css (o que é visivel), logo se tiver um display: none;  ele não vai achar nada; já o textContent não leva em consideração o css, logo qualquer texto que tiver, invisivel ou não, ele vai buscar; A propriedade value já é mais usada para texto de formulário, como input, textarea, etc; 

        //insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour"); //criando a data (object) com o valor selecionado pelo usuário  (seleção feita com string normal, dentro de uma 'li')

        //Gera um ID
        const id = new Date().getTime(); //tempo em milisegundos passados desde meia noite do 01/041/1970

        await scheduleNew({
            id,
            name,
            when,
        });

        await schedulesDay();

        clientName.value = ""

    } catch (error) {
        alert("Não foi possível realizar o agendamento.");
        console.log(error);
    }
}