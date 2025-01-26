import './style.css'

document.querySelector('#app').innerHTML = `
   <div>
    <h1>Greetings from <span id="displayInput">Due</span>!</h1>
    <div class="card">
      <input id="greetingInput" type="text" placeholder="Enter your name">
      <button id="submitButton" type="button">Submit</button>
    </div>
    <div id="response" style="margin-top: 20px; font-size: 18px; color: green;"></div>
  </div>
`

document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submitButton");
  const greeting = document.getElementById("greetingInput");
  const displayInput = document.getElementById("displayInput");
  const responseDiv = document.getElementById("response");

  submitButton.addEventListener('click', async () => {
    const greet = greeting.value || "World"; // Default to "World" if no name is entered
    
    displayInput.innerText = greet;
  });
});
