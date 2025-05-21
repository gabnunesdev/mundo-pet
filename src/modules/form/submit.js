import dayjs from "dayjs";

const form = document.querySelector("form");
const filterDate = document.querySelector("#input-date");
const scheduleDate = document.querySelector("fieldset #form-date");
const today = dayjs(new Date()).format("YYYY-MM-DD");

filterDate.value = today;

scheduleDate.value = today;

//Define a data mínima como a data atual.
filterDate.min = today;
scheduleDate.min = today;

form.onsubmit = (event) => {
  //Previne o comportamento padrão do formulário
  event.preventDefault();
  console.log("Enviado");
};
