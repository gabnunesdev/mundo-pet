const modal = document.querySelector("dialog");
const btnNew = document.getElementById("btn-newschedule");
const btnSchedule = document.getElementById("btn-schedule");
const form = document.querySelector("form");
const mainContainer = document.querySelector(".main-container");

const hourBtn = document.querySelector("#hour-btn");
const closeBtn = document.querySelector(".close-btn");

btnNew.addEventListener("click", () => {
  modal.showModal();
  mainContainer.classList.toggle("blur");
});

btnSchedule.addEventListener("click", () => {
  setTimeout(() => {
    alert("Agendamento realizado com sucesso!");
    modal.close();
    mainContainer.classList.toggle("blur");
  }, 1000);
});

document.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    modal.close();
    mainContainer.classList.remove("blur");
  }
});

const list = document.querySelector(".hidden");

hourBtn.addEventListener("click", () => {
  if (list.style.display === "none") {
    list.style.display = "block"; // Mostrar a lista
  } else {
    list.style.display = "none"; // Ocultar a lista
  }
});

closeBtn.addEventListener("click", () => {
  modal.close();
  mainContainer.classList.toggle("blur");
});
