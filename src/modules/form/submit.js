import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js";

import { schedulesDay } from "../schedules/load.js";

import { clearForm } from "../../form.js";

const form = document.querySelector("form");
const filterDate = document.getElementById("filter-date");
const scheduleDate = document.getElementById("form-date");
const today = dayjs(new Date()).format("YYYY-MM-DD");

//Selecionando os inputs
const tutor = document.getElementById("tutor-name");
const pet = document.getElementById("pet-name");
const service = document.getElementById("service-description");
const phone = document.getElementById("phone");

filterDate.value = today;

//Define a data mínima como a data atual.
filterDate.min = today;
scheduleDate.min = today;

form.onsubmit = async (event) => {
  //Previne o comportamento padrão do formulário
  event.preventDefault();
  try {
    //Recupera o nome do tutor eliminando espaços
    const tutorName = tutor.value.trim();
    if (!tutorName) {
      return alert("Informe o nome do tutor!");
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
    console.log(tutorName);

    //Gera um ID

    await scheduleNew({
      tutorName,
      petName,
      description,
      when,
    });

    await schedulesDay();

    //Limpa os inputs
    clearForm(tutor, pet, service, phone);
    const list = document.querySelector(".hidden");
    list.style.display = "none";
  } catch (error) {
    console.log(error);
  }
};
