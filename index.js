const inputPassword = document.getElementById("password");
const show = document.querySelector(".show");
const hide = document.querySelector(".hide");
const button = document.querySelector(".hiding-icons");

button.addEventListener("click", () => {
  if(inputPassword.type === "password") {
    inputPassword.type = "text";
    hide.style.display = "block";
    show.style.display = "none";
  } else {
    inputPassword.type = "password";
    show.style.display = "block";
    hide.style.display = "none";
  }
});


