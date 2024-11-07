document.getElementById("registrationForm")?.addEventListener("submit", function (event) {
    event.preventDefault();
  
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
  
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
  
    nameError.textContent = name ? "" : "Поле 'Имя' не может быть пустым";
    emailError.textContent = email.includes("@") && email.includes(".") ? "" : "Некорректный Email";
    passwordError.textContent = password.length >= 8 ? "" : "Пароль должен содержать минимум 8 символов";
  });
  
  document.getElementById("calculatorForm")?.addEventListener("submit", function (event) {
    event.preventDefault();
  
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;
  
    let result;
    switch (operation) {
      case "+": result = num1 + num2; break;
      case "-": result = num1 - num2; break;
      case "*": result = num1 * num2; break;
      case "/": result = num2 ? num1 / num2 : "Деление на ноль"; break;
    }
    document.getElementById("result").textContent = `Результат: ${result}`;
  });
  
const gallery = document.getElementById("gallery");
const fullView = document.getElementById("fullView");
const fullViewImage = document.getElementById("fullViewImage");
const fullViewButtonClose = document.getElementById("fullViewButtonClose");

const images = [
    "images/friren.png",
    "images/Maomao.png",
    "images/Rikka.png"
];

images.forEach((imgSrc) => {
    const image = document.createElement("img");
    image.className = "gallery__image";
    image.src = imgSrc;
    
    image.addEventListener("click", () => {
        fullViewImage.src = imgSrc;
        fullView.style.display = "flex";
    });
    
    gallery.appendChild(image);
});

fullViewButtonClose.addEventListener("click", () => {
    fullView.style.display = "none";
});

  