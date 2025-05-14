const modal = document.querySelector("dialog");
const btnNew = document.getElementById("btn-newschedule");
const btnSchedule = document.getElementById("btn-schedule");
const form = document.querySelector("form");

btnNew.addEventListener("click", () => {
  modal.showModal();
});

form.onsubmit = (event) => {
  event.preventDefault();
};

btnSchedule.addEventListener("click", () => {
  console.log("O botão funciona")
  setTimeout(() => {
    modal.close();
  }, 1000);
});
