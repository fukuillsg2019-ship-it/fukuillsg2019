/* -----------------------------
   デジタル風カウントアップ（年まで）
-------------------------------- */
function startCountUpFromNow() {
    const startDate = new Date(); // サイトを開いた瞬間の時刻

    function updateTimer() {
        const now = new Date();
        let diff = now - startDate;

        // 年の計算（365.25 日で概算）
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        diff -= years * (1000 * 60 * 60 * 24 * 365.25);

        // 日・時・分・秒
        const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours   = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        // デジタル風にするためゼロ埋め
        const yy = String(years).padStart(2, '0');
        const dd = String(days).padStart(3, '0');
        const h  = String(hours).padStart(2, '0');
        const m  = String(minutes).padStart(2, '0');
        const s  = String(seconds).padStart(2, '0');

        // 表示形式：YY:DDD:HH:MM:SS
        const el = document.getElementById("countup-timer");
        el.textContent = `${yy}:${dd}:${h}:${m}:${s}`;
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}

/* -----------------------------
   サイトが開いた瞬間にスタート
-------------------------------- */
window.onload = function () {
    startCountUpFromNow();
};
