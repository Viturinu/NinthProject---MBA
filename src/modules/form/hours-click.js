export function hoursClick(){
    const hours = document.querySelectorAll(".hour-available");
    
    hours.forEach((available) => {

            available.addEventListener("click", (selected) => {

            //Remove a hour-selected de todas as li não selecionadas, para posteriormente aplicar apenas na LI selecionada. Como abaixo, com a propriedade target do evento.
            hours.forEach((hour) => {
                hour.classList.remove("hour-selected");
            })

            //Adiciona classe na LI clicada
            selected.target.classList.add("hour-selected"); //target é uma propriedadedo objeto de evento que indica o elemento no qual a interação ocorreu.
        })
    })
}