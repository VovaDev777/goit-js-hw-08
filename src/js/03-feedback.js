import throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const storageKey = "feedback-form-state";



// Функція для збереження стану форми в локальному сховищі
function saveFormState() {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(state));
  
}

// Функція для завантаження збереженого стану форми під час завантаження сторінки
function loadFormState() {
  const savedState = localStorage.getItem(storageKey);
  if (savedState) {
    const state = JSON.parse(savedState);
    emailInput.value = state.email;
    messageInput.value = state.message;
  }
}

// Функція для очищення сховища та полів форми при сабміті
function handleSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(storageKey);
  console.log("Form submitted with data:", {
    email: emailInput.value,
    message: messageInput.value,
  });
  form.reset();
}

// Додамо обробники подій
form.addEventListener('input', throttle(saveFormState, 500));
form.addEventListener('submit', handleSubmit);

// Викликаємо функцію для завантаження збереженого стану форми під час завантаження сторінки
loadFormState();