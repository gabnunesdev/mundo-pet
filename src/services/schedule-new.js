import { apiConfig } from "./api-config";

export async function scheduleNew({ tutorName, petName, description, when }) {
  try {
    //Fazendo a requisição para enviar os dados do agendamento
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tutorName, petName, description, when }),
    });

    alert("Agendamento realizado com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Não foi possível agendar. Tente novamente mais tarde");
  }
}
