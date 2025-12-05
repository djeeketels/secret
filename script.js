/* ====== ZET HIER JOUW EINDDATUM ====== */
const unlockTime = new Date("2026-01-09T20:00:00").getTime();

const timerText = document.getElementById("timer");
const unlockBtn = document.getElementById("unlockBtn");

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = unlockTime - now;

    if (distance <= 0) {
        clearInterval(countdown);
        timerText.innerHTML = "00:00:00:00";
        unlockBtn.disabled = false;
        unlockBtn.classList.remove("btn-primary");
        unlockBtn.classList.add("btn-success");
        unlockBtn.innerHTML = "Press to open 💕";
        return;
    }

    // Tijd berekenen
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Formatting
    days = days.toString().padStart(2, "0");
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    timerText.innerHTML = `${days}d ${hours}u ${minutes}m ${seconds}s`;
}, 1000);

/* ====== PAGINA DIE MOET OPENEN ====== */
unlockBtn.addEventListener("click", () => {
    window.location.href = "main.html";
});
