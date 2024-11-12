import { schedulesDay } from "./load";
import { scheduleCancel } from "../../services/schedule-cancel";

const periods = document.querySelectorAll(".period"); //ele captura as ULs (listas que temos lá)

periods.forEach((period) => {
    //captura evento de clique na lista.
    period.addEventListener("click", async (event) => { //evento de click nas ULs
        if (event.target.classList.contains("cancel-icon")) { //verifica se o target (onde cliquei dentro da UL) contém a classe cancel-icon.
            //Obtém LI pai do elemento clicado.
            const item = event.target.closest("li");
            
            const { id } = item.dataset; //o que está em tada-id="" da tag

            if (id) { //se preencher id, ele entra nessa condicional, caso contrário vai ignorar.
                const isConfirm = confirm(
                    "Tem certeza que deseja cancelar este agendamento?"
                )

                if (isConfirm) {
                    //Faz a requisição na API para cancelar
                    await scheduleCancel({id});
                    schedulesDay(); //recarregar os horários após cancelamento
                }
            }
        }
    })
})