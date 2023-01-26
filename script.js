const adviceBtn = document.getElementById("adviceBtn");
const adviceEl = document.getElementById("advice");
const adviceId = document.getElementById("slip-id");

const API_URL = "https://api.adviceslip.com/advice";

//get advice
generateAdvice();

adviceBtn.addEventListener("click", generateAdvice);

async function generateAdvice() {
  const res = await fetch(API_URL);
  const data = await res.json();

  showAdvice(data);
}

function showAdvice(data) {
  const { id, advice } = data.slip;

  adviceId.innerText = `ADVICE #${id}`;
  adviceEl.innerText = advice;
}
