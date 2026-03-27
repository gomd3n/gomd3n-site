const form = document.getElementById("accountForm");
const formNote = document.getElementById("formNote");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent =
    "Thanks. This is a placeholder for now. We can connect it to a real backend next.";
  form.reset();
});
