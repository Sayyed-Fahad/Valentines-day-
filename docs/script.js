const app = document.getElementById("app");

// Set page title from config
document.title = CONFIG.pageTitle;

// First screen
app.innerHTML = `
  <div style="
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #ffafbd, #ffc3a0);
    color: #ff4757;
    padding: 20px;
  ">
    <h1>Hey ${CONFIG.valentineName} 💖</h1>
    <p style="font-size: 20px; margin: 20px 0;">
      ${CONFIG.questions.first.text}
    </p>

    <button id="yesBtn" style="margin: 10px; padding: 12px 20px; font-size: 18px; border-radius: 8px; border: none; background: #ff6b6b; color: white;">
      ${CONFIG.questions.first.yesBtn}
    </button>

    <button id="noBtn" style="margin: 10px; padding: 12px 20px; font-size: 18px; border-radius: 8px; border: none; background: #ffd6d6;">
      ${CONFIG.questions.first.noBtn}
    </button>

    <p id="secret" style="margin-top: 25px; font-size: 18px; display: none;">
      ${CONFIG.questions.first.secretAnswer}
    </p>
  </div>
`;

// Button interaction
document.getElementById("yesBtn").onclick = () => {
  document.getElementById("secret").style.display = "block";
};

document.getElementById("noBtn").onclick = () => {
  document.getElementById("secret").style.display = "block";
};
