const API_BASE_URL = "http://localhost:5000"; // Change after backend deployment

async function getGreeting() {
  const name = document.getElementById("nameInput").value.trim();
  const resultElement = document.getElementById("result");

  if (!name) {
    resultElement.textContent = "⚠️ Please enter your name.";
    return;
  }

  try {
    const response = await fetch(
      `${API_BASE_URL}/api/greet?name=${encodeURIComponent(name)}`,
    );
    const data = await response.json();
    resultElement.textContent = data.message || data.error;
  } catch (error) {
    resultElement.textContent = "❌ Error connecting to the server.";
  }
}
