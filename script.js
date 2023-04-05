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

  const firstName = firstNameEl.value.trim();

  if (!isRequired(firstName)) {
    showError(firstNameEl, "First name cannot be blank.");
  } else {
    valid = true;
  }
};

const checkLastName = function () {
  let valid = false;

  const firstName = lastNameEl.value.trim();

  if (!isRequired(firstName)) {
    showError(lastNameEl, "First name cannot be blank.");
  } else {
    valid = true;
  }
};

const checkEmail = function () {
  let valid = false;

  const email = userEmailEl.value.trim();

  if (!isRequired(email)) {
    showError(userEmailEl, "Email cannot be blank.");
  } else {
    valid = true;
  }
};

const checkDOB = function () {
  let valid = false;

  const dob = birthdayEl.value.trim();

  if (!isRequired(dob)) {
    showError(birthdayEl, "First name cannot be blank.");
  } else {
    valid = true;
  }
};

const checkCountry = function () {
  let valid = false;

  const country = userCountryEl.value.trim();

  if (!isRequired(country)) {
    showError(userCountryEl, "First name cannot be blank.");
  } else {
    valid = true;
  }
};

const checkZip = function () {
  let valid = false;

  const zip = zipCodeEl.value.trim();

  if (!isRequired(zip)) {
    showError(zipCodeEl, "Zip cannot be blank.");
  } else {
    valid = true;
  }
};

const checkPassword = function () {
  let valid = false;

  const password = passwordEl.value.trim();

  if (!isRequired(password)) {
    showError(passwordEl, "Zip cannot be blank.");
  } else {
    valid = true;
  }
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
