const adviceBtn = document.getElementById("adviceBtn");
const adviceEl = document.getElementById("advice");
const adviceId = document.getElementById("slip-id");

const API_URL = "https://api.adviceslip.com/advice";

//get advice
generateAdvice();

adviceBtn.addEventListener("click", generateAdvice);

async function generateAdvice() {
  const response = await fetch(API_URL);
  
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`
    throw new Error(message)
  }
  
  const data = await response.json();

  showAdvice(data);

}

generateAdvice().catch(error => {
  error.message;
})


function showAdvice(data) {
  const { id, advice } = data.slip;

  adviceId.innerText = `ADVICE #${id}`;
  adviceEl.innerText = `"${advice}"`;
}
