import dayjs from "dayjs";

//Seleciona as sessões manhã, tarde e noite.
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }) {
  try {
    //Limpa as listas.
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    //Renderiza os agendamentos por período.
    dailySchedules.forEach((schedule) => {
      // Criar os elementos
      const li = document.createElement("li");
      li.setAttribute("data-id", schedule.id);

      const divPetInfo = document.createElement("div");
      divPetInfo.classList.add("pet-info");

      const strongHour = document.createElement("strong");
      strongHour.textContent = dayjs(schedule.when).format("HH:mm");

      const divPetNames = document.createElement("div");
      divPetNames.classList.add("pet-names");

      const strongPet = document.createElement("strong");
      strongPet.textContent = schedule.petName;

      const spanBar = document.createElement("span");
      spanBar.textContent = "/";

      const pClient = document.createElement("p");
      pClient.textContent = schedule.tutorName;

      const pService = document.createElement("p");
      pService.textContent = schedule.description;

      const spanRemove = document.createElement("span");
      spanRemove.classList.add("remove-btn");
      spanRemove.textContent = "Remover agendamento";

      // Montar a hierarquia
      divPetNames.appendChild(strongPet);
      divPetNames.appendChild(spanBar);
      divPetNames.appendChild(pClient);

      divPetInfo.appendChild(strongHour);
      divPetInfo.appendChild(divPetNames);

      li.appendChild(divPetInfo);
      li.appendChild(pService);
      li.appendChild(spanRemove);

      // (Opcional) Adicionar em algum lugar na página
      const ul = document.querySelector("ul"); // Alvo onde vai inserir
      ul.appendChild(li);

      //Obtém somente a hora
      const hour = dayjs(schedule.when).hour();

      //Renderiza o agendamento na sessão (manhã, tarde ou noite)

      if (hour <= 12) {
        periodMorning.appendChild(li);
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(li);
      } else {
        periodNight.appendChild(li);
      }
    });
  } catch (error) {
    alert("Não foi possível exibir os agendamentos");
    console.log(error);
  }
}
