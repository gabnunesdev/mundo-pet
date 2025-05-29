import { scheduleCancel } from "../../services/schedule-cancel.js";

import { schedulesDay } from "./load.js";

const periods = document.querySelectorAll(".period");

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("remove-btn")) {
      //Obtém a li pai do elemento clicado.
      const item = event.target.closest("li");

      //Pega o id do agendamento
      const { id } = item.dataset;

      //Confirma que o id foi selecionado
      if (id) {
        //Confirma se o usuário quer cancelar
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento?"
        );

        if (isConfirm) {
          //Faz a requisição na API para cancelar.
          await scheduleCancel({ id });

          //Recarrega os agendamentos.
          schedulesDay();
        }
      }
    }
  });
});
