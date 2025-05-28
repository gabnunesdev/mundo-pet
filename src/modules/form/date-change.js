import { schedulesDay } from "../schedules/load.js";
import { hoursLoad } from "../form/hours-load.js";

const filterDate = document.querySelector("#filter-date");
const formDate = document.querySelector("#form-date");

// Atualiza a lista de agendamentos
filterDate.onchange = () => schedulesDay(filterDate.value);

// Atualiza as horas disponíveis no formulário
formDate.onchange = () => hoursLoad(formDate.value);
