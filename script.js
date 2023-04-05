const form = document.querySelector(".form-reg");
const firstNameEl = document.querySelector("#first_name");
const lastNameEl = document.querySelector("#last_name");
const userEmailEl = document.querySelector("#user_email");
const birthdayEl = document.querySelector("#birthday");
const userCountryEl = document.querySelector("#country");
const zipCodeEl = document.querySelector("#zip");
const passwordEl = document.querySelector("#password");
const confirmPasswordEl = document.querySelector("#confirm-password");
// yes/no and check box inputs?

const btn = document.querySelector(".submit");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  checkFirstName();
  checkLastName();
  checkEmail();
  checkDOB();
  checkCountry();
  checkZip();
  checkPassword();
  confirmPassword();
});

const isRequired = (value) => (value === "" ? false : true);
const validation = function (variable, element, message) {
  if (!isRequired(variable)) {
    showError(element, message);
  } else {
    valid = true;
  }
};

const showError = function (input, message) {
  // gets the form-field element
  const formField = input.parentElement;

  // add the error class

  formField.classList.add("error");

  const error = formField.querySelector("small");
  error.textContent = message;
};

const checkFirstName = function () {
  let valid = false;
  const message = "First name cannot be blank.";
  const firstName = firstNameEl.value.trim();
  validation(firstName, firstNameEl, message);
};

const checkLastName = function () {
  let valid = false;
  const message = "Last name cannot be blank.";
  const lastName = lastNameEl.value.trim();
  validation(lastName, lastNameEl, message);
};

const checkEmail = function () {
  let valid = false;
  const message = "Email cannot be blank.";
  const email = userEmailEl.value.trim();
  validation(email, userEmailEl, message);
};

const checkDOB = function () {
  let valid = false;
  const message = "Date of birth cannot be blank.";
  const dob = birthdayEl.value.trim();
  validation(dob, birthdayEl, message);
};

const checkCountry = function () {
  let valid = false;
  const message = "Country cannot be blank.";
  const country = userCountryEl.value.trim();
  validation(country, userCountryEl, message);
};

const checkZip = function () {
  let valid = false;
  const message = "Zip code cannot be blank.";
  const zip = zipCodeEl.value.trim();
  validation(zip, zipCodeEl, message);
};

const checkPassword = function () {
  let valid = false;
  const message = "Password cannot be blank.";
  const password = passwordEl.value.trim();
  validation(password, passwordEl, message);
};

const confirmPassword = function () {
  const password = passwordEl.value.trim();
  const confirmPassword = confirmPasswordEl.value.trim();
  if (password === confirmPassword) {
    console.log(`YOU'RE IN`);
  } else {
    console.log("PASSWORDS DO NOT MATCH");
  }
};
