const toggleButton = document.querySelector(".move");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light_mode");
});

function calculate() {
  let container = document.querySelector(".input_field");
  let result = eval(container.innerHTML);
  container.innerHTML = result;
}

function appendOperatoin(operation) {
  document.querySelector(".input_field").innerHTML += operation;
}

function resetResult() {
  let container = document.querySelector(".input_field");
  container.innerHTML = "";
}

function delteLast() {
  let container = document.querySelector(".input_field");
  if (container.innerHTML.endsWith(" ")) {
    container.innerHTML = container.innerHTML.slice(0, -3);
  } else {
    container.innerHTML = container.innerHTML.slice(0, -1);
  }
}
