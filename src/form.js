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

function insertHour() {
  const hourList = document.querySelector("#hour-list");

  hourList.addEventListener("click", (event) => {
    const hour = event.target.innerText;
    if (event.target.classList.contains("hour-available")) {
      const inputHour = document.getElementById("input-hour");
      inputHour.value = hour;
    }
  });
}

insertHour();

function maskPhone(value) {
  return value
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/g, "($1) $2")
    .replace(/(\d)(\d{4})$/, "$1-$2");
}

const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", (e) => {
  e.target.value = maskPhone(e.target.value);
});

export function clearForm(...items) {
  items.forEach((item) => {
    if (item && item.value !== undefined) {
      item.value = "";
    }
  });
}
