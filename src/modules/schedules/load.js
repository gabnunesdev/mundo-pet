import { hoursLoad } from "../form/hours-load.js";

//Seleciona o input de data
const scheduleDate = document.getElementById("form-date");
export function schedulesDay() {
  //Obtém a data do input
  const date = scheduleDate.value;
  //Renderiza as horas disponíveis.
  hoursLoad({ date });
}
