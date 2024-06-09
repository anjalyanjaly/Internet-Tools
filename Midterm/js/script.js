document.getElementById("calculate-btn").addEventListener("click", function () {
  const input = parseInt(document.getElementById("factorial-input").value);
  let result = 1;
  for (let i = 1; i <= input; i++) {
    result *= i;
  }
  document.getElementById("result").innerText = `${input}! = ${result}`;
});

document.getElementById("dark-mode").addEventListener("click", function () {
  document.body.classList.add("bg-dark", "text-white");
});

document.getElementById("light-mode").addEventListener("click", function () {
  document.body.classList.remove("bg-dark", "text-white");
});
