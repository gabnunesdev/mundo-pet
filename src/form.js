const modal = document.querySelector("dialog");
const btnNew = document.getElementById("btn-newschedule");
const btnSchedule = document.getElementById("btn-schedule");
const form = document.querySelector("form");
const mainContainer = document.querySelector(".main-container");

btnNew.addEventListener("click", () => {
  modal.showModal();
  mainContainer.classList.toggle("blur");
});

btnSchedule.addEventListener("click", () => {
  setTimeout(() => {
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
