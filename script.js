/* =============================
   ハンバーガーメニュー制御
============================= */
function toggleMenu() {
    const menu = document.getElementById('menu');
    const trigger = document.querySelector('.hamburger');
    menu.classList.toggle('open');
    trigger.classList.toggle('open');
}

/* =============================
   スクロールアニメーション
============================= */
var slideConts = document.querySelectorAll('.slideConts');
var slideContsRect = [];
var slideContsTop = [];
var windowY = window.pageYOffset;
var windowH = window.innerHeight;
var remainder = 100;

for (var i = 0; i < slideConts.length; i++) {
    slideContsRect.push(slideConts[i].getBoundingClientRect());
    slideContsTop.push(slideContsRect[i].top + windowY);
}

window.addEventListener('resize', () => windowH = window.innerHeight);

window.addEventListener('scroll', () => {
    windowY = window.pageYOffset;
    for (var i = 0; i < slideConts.length; i++) {
        if (windowY > slideContsTop[i] - windowH + remainder) {
            slideConts[i].classList.add('show');
        } else {
            slideConts[i].classList.remove('show');
        }
    }
});

document.getElementById("pagetop-btn").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* fade animation --------------------------- */

var fadeConts = document.querySelectorAll('.fadeConts');
var fadeContsRect = [];
var fadeContsTop = [];

for (var i = 0; i < fadeConts.length; i++) {
    fadeContsRect.push(fadeConts[i].getBoundingClientRect());
    fadeContsTop.push(fadeContsRect[i].top + windowY);
}

window.addEventListener('scroll', () => {
    windowY = window.pageYOffset;
    for (var i = 0; i < fadeConts.length; i++) {
        if (windowY > fadeContsTop[i] - windowH + remainder) {
            fadeConts[i].classList.add('show');
        } else {
            fadeConts[i].classList.remove('show');
        }
    }
});


/* ======================================
   背景色・本文色・リンク色・刺し色の設定
====================================== */
document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------  
    // 色設定データ
    // ----------------------------
    const colors = [
        { name: 'ラブライブ', value: '#ff007f' },
        { name: 'サンシャイン', value: '#00bfff' },
        { name: '虹ヶ咲', value: '#ffcc00' },
        { name: 'スーパースター', value: '#cc99ff' },
        { name: '蓮ノ空', value: '#ffc0cb' },
        { name: 'イキヅライブ', value: '#008bc2' },
        { name: 'スクミュ', value: '#d70035' }
    ];

    const textColorMap = {
        "#ff007f": "#ffffff",
        "#00bfff": "#ffffff",
        "#ffcc00": "#000000",
        "#cc99ff": "#ffffff",
        "#ffc0cb": "#b5002c",
        "#008bc2": "#ffffff",
        "#d70035": "#ffd700"
    };

    const linkColorMap = {
        "#ff007f": "#000000",
        "#00bfff": "#000000",
        "#ffcc00": "#ffffff",
        "#cc99ff": "#000000",
        "#ffc0cb": "#ffffff",
        "#008bc2": "#000000",
        "#d70035": "#ffffff"
    };

    const back1ColorMap = {
        "#ff007f": "#008bc2",
        "#00bfff": "#cc99ff",
        "#ffcc00": "#ffc0cb",
        "#cc99ff": "#008bc2",
        "#ffc0cb": "#00bfff",
        "#008bc2": "#cc99ff",
        "#d70035": "#00bfff"
    };

    const back2ColorMap = {
        "#ff007f": "#cc99ff",
        "#00bfff": "#ffc0cb",
        "#ffcc00": "#008bc2",
        "#cc99ff": "#00bfff",
        "#ffc0cb": "#cc99ff",
        "#008bc2": "#ffc0cb",
        "#d70035": "#008bc2"
    };

    const back3ColorMap = {
        "#ff007f": "#00bfff",
        "#00bfff": "#008bc2",
        "#ffcc00": "#cc99ff",
        "#cc99ff": "#ffc0cb",
        "#ffc0cb": "#008bc2",
        "#008bc2": "#00bfff",
        "#d70035": "#ffc0cb"
    };


    // ----------------------------  
    // ランダム背景色決定
    // ----------------------------
    const selected = colors[Math.floor(Math.random() * colors.length)];
    const bgColor = selected.value;

    // 背景色反映
    document.body.style.backgroundColor = bgColor;
    document.querySelector('header').style.backgroundColor = bgColor;
    document.querySelector('.menu').style.backgroundColor = bgColor;

    // 本文色
    const textColor = textColorMap[bgColor];
    document.body.style.color = textColor;
    document.querySelector('.menu').style.color = textColor;

    // リンク色
    const linkColor = linkColorMap[bgColor];
    document.querySelectorAll('a').forEach(a => {
        if (!a.closest('.BAN10') && !a.closest('.menu')) {
        a.style.color = linkColor;
    }
    });

    /* ------------------------------------
       back1 / back2 / back3 色の適用
    ------------------------------------ */
    const back1Color = back1ColorMap[bgColor];
    const back2Color = back2ColorMap[bgColor];
    const back3Color = back3ColorMap[bgColor];

    document.querySelectorAll('.back1color').forEach(el => {
        el.style.backgroundColor = back1Color;
    });

    document.querySelectorAll('.back2color').forEach(el => {
        el.style.backgroundColor = back2Color;
    });

    document.querySelectorAll('.back3color').forEach(el => {
        el.style.backgroundColor = back3Color;
    });

    document.querySelectorAll('.back3color').forEach(el => {
    el.style.backgroundColor = back3Color;
    });

    const backCandidates = ['#00bfff', '#ffc0cb', '#cc99ff'];


    let usableForBack4;

    if (backCandidates.includes(bgColor)) {
    usableForBack4 = backCandidates.filter(c => c !== bgColor);
    } else {
    usableForBack4 = [...backCandidates]; // 全部使う
    }

    const back4Color = usableForBack4[
    Math.floor(Math.random() * usableForBack4.length)
    ];

    document.querySelectorAll('.back4color').forEach(el => {
    el.style.backgroundColor = back4Color;
    });

    let usableForBack5 = usableForBack4.filter(c => c !== back4Color);

    let back5Color;

    if (usableForBack5.length === 1) {

    back5Color = usableForBack5[0];
    } else {

    back5Color = usableForBack5[
        Math.floor(Math.random() * usableForBack5.length)
    ];
    }

    document.querySelectorAll('.back5color').forEach(el => {
    el.style.backgroundColor = back5Color;
    });
    document.getElementById('colorName').textContent =
        `選ばれた色: ${selected.name}`;
    });



/* =============================
   ローディング演出
============================= */
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.classList.add('loaded');
    loader.classList.add('slide-up');
    setTimeout(() => { loader.style.display = 'none'; }, 1200);
});


/* =============================
   秘密ページ遷移（5回クリック）
============================= */
let tapCount = 0;
let tapTimer = null;

function secretTrigger() {
    tapCount++;

    if (tapCount >= 20) {
        window.location.href = "https://fukuillsg2019-ship-it.github.io/fukuillsg2019/fun.html";
    }

    clearTimeout(tapTimer);
    tapTimer = setTimeout(() => tapCount = 0, 1000);
}

window.addEventListener("click", secretTrigger);
window.addEventListener("touchstart", secretTrigger);

/* ページトップアイコンの色をランダムに設定 */
function setRandomPageTopColor() {
    const colors = ["blue", "green", "red"];
    const random = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("pagetop-btn").dataset.color = random;
}

window.addEventListener("DOMContentLoaded", () => {
    setRandomPageTopColor();
});




