import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";

import { hoursLoad } from "../form/hours-load.js";

import { schedulesShow } from "../schedules/show.js";

export async function schedulesDay(date) {
  //Busca na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date });

  //Exibe os agendamentos
  schedulesShow({ dailySchedules });

  //Renderiza as horas disponíveis.
  hoursLoad(date);
}
