// Функция для добавления эффектов
function addEffect(effectName) {
  const typedEl = document.querySelector("#typed");
  if (!typedEl.classList.contains(effectName)) {
    typedEl.classList.add(effectName);
  }
}

// Инициализация Typed.js
var typed = new Typed("#typed", {
  strings: [
    "Да ЕБИСЬ ОНО КОНЕМ",
    "Да ЕБИСЬ ОНО СВЕТОМ",
    "Да ЕБИСЬ ОНО ЗАМЕТНО",
    "Да ЕБИСЬ ОНО СИЛАМИ",
    "Да ЕБИСЬ ОНО ВСЕМИ",
    "Да ЕБИСЬ ОНО ГЛАВНОЙ",
  ],
  typeSpeed: 80,
  startDelay: 500,
  backDelay: 1500,
  smartBackspace: true,
  loop: true,
  cursorChar: "_",
  fadeOut: true,
  fadeOutClass: "rotate-out",
  fadeInClass: "rotate-in",
});

// Вызываем функции для добавления эффектов
addEffect("pulse"); // Пульсация
addEffect("colorChange"); // Смена цвета
addEffect("shadowGradient"); // Тени и градиенты
addEffect("interactive"); // Интерактивность при наведении

// Остальные эффекты уже заданы в styles.css и применяются автоматически
