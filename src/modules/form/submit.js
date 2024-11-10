import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

const inputToday = dayjs(new Date()).format("YYY-MM-DD");

selectedDate.value = inputToday;

selectedDate.min = inputToday;

form.onsubmit = (event) => {
    event.preventDefault();

    console.log("Enviado");
}