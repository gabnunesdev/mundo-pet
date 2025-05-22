import dayjs from "dayjs";
import {hoursClick} from "../form/hours-click.js";
import { openingHours } from "../../utils/opening-hours.js";

const hours = document.getElementById("hour-list");

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    //Recupera a hora
    const [scheduleHour] = hour.split(":");

    //Adiciona a hora na data e verifica se está no passado.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    //Define se o horário está disponível
    return {
      hour,
      available: isHourPast,
    };
  });

  //Renderiza os horários
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");
    li.classList.add(available ? "hour-available" : "hour-unavailable");
    li.textContent = hour;

    if (hour === "09:00") {
      hourHeaderAdd("Manhã");
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde");
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite");
    }
    hours.append(li);
  });

  //Adiciona o evento de clique nos horários disponíveis.
  hoursClick();
}

function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;

  hours.append(header);
}
