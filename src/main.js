"use strict"

//CSS
import "./styles/global.css";
import "./styles/form.css";
import "./styles/schedule.css";

//Configuração do dayjs
import "./libs/dayjs.js";

//js
import "./modules/form/submit.js"; //faz sentido este vir primeiro, pois ele quem está definindo a data/hora do input do form; embaixo precisa dessa hora.
import "./modules/form/date-change.js";
import "./modules/page-load.js";
import "./modules/schedules/cancel.js"