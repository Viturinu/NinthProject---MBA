const periods = document.querySelectorAll(".period"); //ele captura as ULs (listas que temos lá)

periods.forEach((periods) => {
    //captura evento de clique na lista.
    period.addEventListener("click", (event) => {
        if (event.target.classList.contains("cancel-icon")) { //verifica se o target (onde cliquei contém a classe cancel-icon
            //Obtém LI pai do elemento clicado.
            const item = event.target.closest("li");
            const { id } = item.dataset; //o que está em tada-id="" da tag

            if (id) {
                const isConfirm = confirm(
                    "Tem certeza que deseja cancelar este agendamento?"
                )

                if (isConfirm) {
                    console.log("REMOVER!")
                }
            }
        }
    })
})