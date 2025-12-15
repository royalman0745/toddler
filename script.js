function revealSurprise() {
  document.getElementById("surprise").classList.remove("hidden");
  startHearts();
  startPaperBlast();
}

function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💝💕";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 300);
}

function startPaperBlast() {
  setInterval(() => {
    const paper = document.createElement("div");
    paper.className = "paper";
    paper.style.left = Math.random() * 100 + "vw";
    paper.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 90%)`;
    document.body.appendChild(paper);

    setTimeout(() => paper.remove(), 5000);
  }, 200);
}
