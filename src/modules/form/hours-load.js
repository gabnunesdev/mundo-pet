// Importa o dayjs para manipular datas
import dayjs from "dayjs";

// Função que adiciona o clique nos horários
import { hoursClick } from "../form/hours-click.js";

// Lista fixa com os horários de funcionamento
import { openingHours } from "../../utils/opening-hours.js";

// Função que busca os agendamentos no backend
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";

// Seleciona a UL onde os horários vão ser renderizados
const hours = document.getElementById("hour-list");

// Função principal que carrega os horários disponíveis
export async function hoursLoad(date) {
  // 🔸 Busca na API os agendamentos da data recebida
  const dailySchedules = await scheduleFetchByDay({ date });

  // 🔸 Limpa a lista de horários (remove o conteúdo anterior)
  hours.innerHTML = "";

  // 🔸 Mapeia os horários já agendados para comparar depois
  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm")
  );

  // 🔸 Cria um array com os horários de funcionamento
  const opening = openingHours.map((hour) => {
    // Separa a hora (ex.: de "09:00" pega só "09")
    const [scheduleHour] = hour.split(":");

    // Verifica se esse horário é no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    // Verifica se o horário está disponível
    const available = !unavailableHours.includes(hour) && !isHourPast;

    return {
      hour,       // Ex.: "09:00"
      available,  // true ou false
    };
  });

  // 🔸 Renderiza cada horário na tela
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");

    // Adiciona a classe dependendo se o horário está disponível ou não
    li.classList.add(available ? "hour-available" : "hour-unavailable");

    // Insere o texto (horário)
    li.textContent = hour;

    // Adiciona os cabeçalhos de período (Manhã, Tarde, Noite)
    if (hour === "09:00") {
      hourHeaderAdd("Manhã");
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde");
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite");
    }

    // Adiciona o horário na lista (UL)
    hours.append(li);
  });

  // 🔸 Ativa os eventos de clique nos horários disponíveis
  hoursClick();
}

// 🔧 Função que adiciona o título de cada período (Manhã, Tarde, Noite)
function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;

  hours.append(header);
}
