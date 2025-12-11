/* ------------------------------------
   初回訪問からのカウントアップタイマー
------------------------------------- */
function startPersistentCountUp() {
    let startDate = localStorage.getItem("siteStartDate");

    if (!startDate) {
        startDate = new Date().toISOString();
        localStorage.setItem("siteStartDate", startDate);
    }

    startDate = new Date(startDate);

    function updateTimer() {
        const now = new Date();
        let diff = now - startDate;

        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        diff -= years * (1000 * 60 * 60 * 24 * 365.25);

        const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours   = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        const yy = String(years).padStart(2, '0');
        const dd = String(days).padStart(3, '0');
        const h  = String(hours).padStart(2, '0');
        const m  = String(minutes).padStart(2, '0');
        const s  = String(seconds).padStart(2, '0');

        document.getElementById("countup-timer").textContent =
            `${yy}:${dd}:${h}:${m}:${s}`;
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}


/* ============================================================
    ▼ ここから追加：砂時計アニメの進行位置を再現する処理
   ============================================================ */
function syncHourglassAnimation() {

    const startIso = localStorage.getItem("siteStartDate");
    if (!startIso) return; // カウントタイマーが作ってくれるので基本ここには来ない

    const start = new Date(startIso).getTime();
    const now = Date.now();
    const elapsedSec = Math.floor((now - start) / 1000);

    // 砂時計の1サイクル（往復）＝ 3時間 + 3時間 = 6時間 = 21600秒
    const cycle = 21600;

    const phase = elapsedSec % cycle; // 今周期の進行位置

    // CSSのアニメーション対象
    const container = document.querySelector('.hourglass-container');
    const maskTop = document.querySelector('.mask-top');
    const maskBottom = document.querySelector('.mask-bottom');

    if (container)   container.style.animationDelay = `-${phase}s`;
    if (maskTop)     maskTop.style.animationDelay = `-${phase}s`;
    if (maskBottom)  maskBottom.style.animationDelay = `-${phase}s`;
}


/* ------------------------------------
   ページを開いた瞬間にカウント開始 + 砂時計同期
------------------------------------- */
window.onload = function () {
    startPersistentCountUp();   // ← いつものカウントアップ
    syncHourglassAnimation();   // ← 追加：砂時計のアニメ位置を再現
};

window.onload = function () {
    startPersistentCountUp();
    syncHourglassAnimation();

    const btn = document.getElementById("back-btn");
    const icon = document.getElementById("swing-icon");
    const perfect = document.getElementById("perfect-text");

    btn.addEventListener("click", function () {

        /* --- アイコンを縮小しながら消す --- */
        icon.style.opacity = 0;
        icon.style.transform = "scale(0.4)";

        /* --- PERFECT を中央へフェードイン --- */
        setTimeout(() => {
            perfect.style.opacity = 1;
            perfect.style.transform = "translate(-50%, -50%) scale(1)";
        }, 150);

        /* --- 少し遅らせてページ遷移 --- */
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1100);
    });
};
