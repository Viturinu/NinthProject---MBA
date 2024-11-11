import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function scheduleFetchByDay({date}){
    try {
        //faz requisição para envio de dados do agendamento
        const response = await fetch(`${apiConfig.baseURL}/schedules`);

        const data = await response.json(); //response.json() é um método da API Response que lida diretamente com o corpo da resposta e converte a string JSON em um objeto JavaScript. SON.parse() é um método global que converte uma string JSON em um objeto, mas você não pode usá-lo diretamente em um objeto Response (que não é uma string).
    
        console.log(data);

        const dailySchedules = data.filter((schedule) => 
            dayjs(date).isSame(schedule.when, "day")); //dailySchedules terá todas as datas que passar no filtro, ou seja, que a data passada no argumento for igual a data elecionada no input, pelo usuário.
            
        return dailySchedules;

    } catch (error) {
        console.log(error);
        alert("Não foi possível buscar os agendamentos do dia selecionado.");
    }
}