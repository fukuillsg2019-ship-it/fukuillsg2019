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
        if(windowY > slideContsTop[i] - windowH + remainder) {
            slideConts[i].classList.add('show');
        } else {
            slideConts[i].classList.remove('show');
        }
    }
});

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
        if(windowY > fadeContsTop[i] - windowH + remainder) {
            fadeConts[i].classList.add('show');
        } else {
            fadeConts[i].classList.remove('show');
        }
    }
});

/* ======================================
   アイコンを本文色と完全一致で染める
====================================== */
function generateAccurateFilter(hex) {
    const r = parseInt(hex.substr(1,2),16);
    const g = parseInt(hex.substr(3,2),16);
    const b = parseInt(hex.substr(5,2),16);
    return `brightness(0) invert(1) drop-shadow(0 0 0 rgb(${r}, ${g}, ${b}))`;
}

/* ======================================
   背景色・本文色・アイコン色の統一処理
====================================== */
document.addEventListener('DOMContentLoaded', () => {

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

    const selected = colors[Math.floor(Math.random() * colors.length)];
    const bgColor = selected.value;

    document.body.style.backgroundColor = bgColor;
    document.querySelector('header').style.backgroundColor = bgColor;
    document.querySelector('.menu').style.backgroundColor = bgColor;

    const textColor = textColorMap[bgColor];
    document.body.style.color = textColor;
    document.querySelector('.menu').style.color = textColor;

    document.querySelectorAll('.menu__item .text').forEach(t => t.style.color = textColor);

    const iconFilter = generateAccurateFilter(textColor);
    document.querySelectorAll('.colorize').forEach(img => {
        img.style.filter = iconFilter;
    });

    const linkColor = linkColorMap[bgColor];
    document.querySelectorAll('a').forEach(a => {
        if (a.querySelector('img')) return;
        a.style.color = linkColor;
    });

    document.getElementById('colorName').textContent = `選ばれた色: ${selected.name}`;
});

/* ======================================
   ローディング演出
====================================== */
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.classList.add('loaded');
    loader.classList.add('slide-up');
    setTimeout(() => { loader.style.display = 'none'; }, 1200);
});

let tapCount = 0;
let tapTimer = null;

function secretTrigger() {
    // 5回タップ／クリックで秘密ページへ
    tapCount++;
    
    if (tapCount >= 5) {
        window.location.href = "fun.html";  // ← あなたの秘密ページ
    }

    // タップ間隔が長い場合はリセット（1秒以内）
    clearTimeout(tapTimer);
    tapTimer = setTimeout(() => tapCount = 0, 1000);
}

// PCクリック & スマホタップ両対応
window.addEventListener("click", secretTrigger);
window.addEventListener("touchstart", secretTrigger);