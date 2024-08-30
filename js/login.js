const users = [
  { name: "Roy", password: "12345" },
  { name: "Nde", password: "00000" },
  { name: "Marie", password: "zelefack" },
  { name: "Rayan", password: "yooman" },
];

// Getting the login form by id
const loginForm = document.getElementById("loginForm");
const name = document.getElementById("name");
const password = document.getElementById("password");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Submitting form");
  console.log(name.value, password.value);
});

console.log(users);
