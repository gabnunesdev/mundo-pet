import { apiConfig } from "./api-config";

export async function scheduleCancel({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    });

    alert("Agendamento cancelado!");
  } catch (error) {
    console.log(error);
    alert("Não foi possível cancelar o agendamento!");
  }
}
