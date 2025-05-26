import { schedulesDay } from "../schedules/load";

//Seleciona o input de data
const scheduleDate = document.querySelector("fieldset #form-date");

//Recarrega a lista de horários quando o input de data mudar

scheduleDate.onchange = () => schedulesDay();
