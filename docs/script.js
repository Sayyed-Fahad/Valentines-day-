const app = document.getElementById("app");
document.title = CONFIG.pageTitle;

function screen(html) {
  app.innerHTML = `
    <div style="
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-family: 'Arial', sans-serif;
      background: linear-gradient(135deg, #ffafbd, #ffc3a0);
      color: #ff4757;
      padding: 20px;
    ">
      ${html}
    </div>
  `;
}

// SCREEN 1
function firstQuestion() {
  screen(`
    <h1>Hey ${CONFIG.valentineName} 💖</h1>
    <p style="font-size:20px;">${CONFIG.questions.first.text}</p>

    <button onclick="showSecret()" class="btn">
      ${CONFIG.questions.first.yesBtn}
    </button>

    <button onclick="showSecret()" class="btn light">
      ${CONFIG.questions.first.noBtn}
    </button>

    <p id="secret" style="display:none; margin-top:20px;">
      ${CONFIG.questions.first.secretAnswer}
      <br><br>
      <button onclick="secondQuestion()" class="btn">Continue ❤️</button>
    </p>
  `);
}

function showSecret() {
  document.getElementById("secret").style.display = "block";
}

// SCREEN 2
function secondQuestion() {
  screen(`
    <h2>${CONFIG.questions.second.text}</h2>
    <h1 style="font-size:48px;">💖 ∞ %</h1>
    <p>${CONFIG.questions.second.startText}</p>

    <button onclick="thirdQuestion()" class="btn">
      ${CONFIG.questions.second.nextBtn}
    </button>
  `);
}

// SCREEN 3 (THE QUESTION)
function thirdQuestion() {
  screen(`
    <h1>${CONFIG.questions.third.text}</h1>

    <button onclick="celebrate()" class="btn">
      ${CONFIG.questions.third.yesBtn}
    </button>

    <button class="btn light" style="position:absolute;" onmouseover="moveBtn(this)">
      ${CONFIG.questions.third.noBtn}
    </button>
  `);
}

function moveBtn(btn) {
  btn.style.left = Math.random() * 80 + "%";
  btn.style.top = Math.random() * 80 + "%";
}

// FINAL SCREEN
function celebrate() {
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.innerText = "💖";
      heart.style.position = "fixed";
      heart.style.left = "50%";
      heart.style.top = "50%";
      heart.style.fontSize = "30px";
      heart.style.animation = "explode 1.2s ease-out forwards";
      heart.style.pointerEvents = "none";
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 1200);
    }, i * 40);
  }

  screen(`
    <h1>${CONFIG.celebration.title}</h1>
    <p style="font-size:20px;">${CONFIG.celebration.message}</p>
    <p style="margin-top:10px; font-style:italic;">
      "I didn’t plan to fall for you… but I’m really glad I did."
    </p>
    <div style="font-size:40px; margin-top:15px;">
      ${CONFIG.celebration.emojis}
    </div>
  `);
}

// Start
firstQuestion();`;

// Button interaction
document.getElementById("yesBtn").onclick = () => {
  document.getElementById("secret").style.display = "block";
};

document.getElementById("noBtn").onclick = () => {
  document.getElementById("secret").style.display = "block";
};
function createFloatEmoji() {
  const emoji = document.createElement("div");
  const emojis = ["💖", "💝", "❤️", "💗", "🧸"];

  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.position = "fixed";
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.bottom = "-30px";
  emoji.style.fontSize = Math.random() * 18 + 22 + "px";
  emoji.style.animation = "floatUp 7s linear forwards";
  emoji.style.opacity = 0.9;
  emoji.style.pointerEvents = "none";
  emoji.style.zIndex = "999";

  document.body.appendChild(emoji);

  setTimeout(() => emoji.remove(), 7000);
}

setInterval(createFloatEmoji, 450);
