import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new";

const form = document.querySelector("form");
const filterDate = document.querySelector("#input-date");
const scheduleDate = document.querySelector("fieldset #form-date");
const today = dayjs(new Date()).format("YYYY-MM-DD");

//Selecionando os inputs
const tutor = document.getElementById("tutor-name");
const pet = document.getElementById("pet-name");
const service = document.getElementById("service-description");

filterDate.value = today;

scheduleDate.value = today;

//Define a data mínima como a data atual.
filterDate.min = today;
scheduleDate.min = today;

form.onsubmit = (event) => {
  //Previne o comportamento padrão do formulário
  event.preventDefault();
  try {
    //Recupera o nome do tutor eliminando espaços
    const tutorName = tutor.value.trim();
    if (!tutorName) {
      return alert("Informe o nome do cliente!");
    }

    const petName = pet.value.trim();
    if (!petName) {
      return alert("Informe o nome do pet!");
    }

    const description = service.value.trim();
    if (!description) {
      return alert("Informe o tipo de serviço");
    }

    //Recupera o horário selecionado
    const hourSelected = document.querySelector(".hour-selected");
    if (!hourSelected) {
      return alert("Selecione a hora.");
    }

    //Recupera somente a hora
    const [hour] = hourSelected.innerText.split(":");

    //Insere a hora na data
    const when = dayjs(scheduleDate.value).add(hour, "hour");
    console.log(when);

    //Gera um ID
    const id = new Date().getTime();

    return {
      id,
      tutorName,
      petName,
      description,
      when,
    };
  } catch (error) {
    console.log(error);
  }
};
