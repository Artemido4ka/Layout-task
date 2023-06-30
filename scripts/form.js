const form = document.getElementById("form");
const nameElement = document.getElementById("name");
const emailElement = document.getElementById("email");
const textElement = document.getElementById("text");
const checkBoxElement = document.getElementById("checkbox");

const emailContainer = document.getElementById("emailContainer");
const nameContainer = document.getElementById("nameContainer");
const checkboxContainer = document.getElementById("checkboxContainer");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const name = nameElement.value;
  const email = emailElement.value;
  const text = textElement.value;
  const checkbox = checkBoxElement.checked;

  const isEmailValid = !!email.match(regEmail);
  const isNameValid = !!name;

  const handleValidation = (isValid, obj, error) => {
    isValid ? obj.classList.remove(error) : obj.classList.add(error);
  };

  handleValidation(isEmailValid, emailContainer, "input__error");
  handleValidation(isNameValid, nameContainer, "input__error");
  handleValidation(checkbox, checkboxContainer, "checkbox__error");

  if (isEmailValid && isNameValid && checkbox) {
    const url = "example.com";
    const data = { name, email, checkbox, text };
    const params = {
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      body: data,
      method: "POST",
    };
    // fetch(url, params);
    window.alert(JSON.stringify(data));
    form.reset();
  }
});
