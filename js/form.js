const masks = {
  phone(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1')
  }
}

const input = document.getElementById('idPhone');
const field = input.dataset.js;

input.addEventListener('input', (e) => {
  e.target.value = masks[field](e.target.value);
}, false);
const button = document.getElementById('enviar');

button.addEventListener('click', (event) => {
  event.preventDefault();

  const name = document.getElementById("idName");
  const nameError = document.getElementById("nameError");
  const phone = document.getElementById("idPhone");
  const phoneError = document.getElementById("phoneError");
  const phoneInvalid = document.getElementById("phoneInvalid");
  const email = document.getElementById("idEmail");
  const emailError = document.getElementById("emailError");
  const emailInvalid = document.getElementById("emailInvalid")
  const subject = document.getElementById("idSubject");
  const subjectError = document.getElementById("subjectError");
  const text = document.getElementById("idText");
  const textError = document.getElementById("textError");

  /* Validação do campo nome com valor */
  if (name.value == "") {
    name.classList.add("errorInput");
    nameError.classList.add("visible");
  }
  else {
    name.classList.remove("errorInput");
    nameError.classList.remove("visible");
  }

  /* Validação do campo telefone com valor */
  if (phone.value == "") {
    phone.classList.add("errorInput");
    phoneError.classList.add("visible");
    phoneInvalid.classList.remove("visible");
  }
  else if (phone.value.length <= 13) {
    phone.classList.add("errorInput");
    phoneError.classList.remove("visible");
    phoneInvalid.classList.add("visible");
  }
  else {
    phone.classList.remove("errorInput");
    phoneError.classList.remove("visible");
    phoneInvalid.classList.remove("visible");
  }

  /* Validação do campo email com valor */
  if (email.value == "") {
    email.classList.add("errorInput");
    emailError.classList.add("visible");
    emailInvalid.classList.remove("visible");
  }
  else if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)) {
    email.classList.add("errorInput");
    emailError.classList.remove("visible");
    emailInvalid.classList.add("visible");
  }
  else {
    email.classList.remove("errorInput");
    emailError.classList.remove("visible");
    emailInvalid.classList.remove("visible");
  }

  /* Validação do campo assunto com valor */
  if (!subject.value) {
    subject.classList.add("errorInput");
    subjectError.classList.add("visible");
  }
  else {
    subject.classList.remove("errorInput");
    subjectError.classList.remove("visible");
  }

  /* Validação do campo mensagem com valor */
  if (!text.value) {
    text.classList.add("errorInput");
    textError.classList.add("visible");
  }
  else {
    text.classList.remove("errorInput");
    textError.classList.remove("visible");
  }
});