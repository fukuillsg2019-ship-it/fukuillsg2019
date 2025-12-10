    function toggleMenu() {
      const menu = document.getElementById('menu');
      const trigger = document.querySelector('.hamburger');
      menu.classList.toggle('open');
      trigger.classList.toggle('open');
    }
    var slideConts = document.querySelectorAll('.slideConts'); 
    var slideContsRect = []; 
    var slideContsTop = []; 
    var windowY = window.pageYOffset; 
    var windowH = window.innerHeight; 
    var remainder = 100; 
    for (var i = 0; i < slideConts.length; i++) {
    slideContsRect.push(slideConts[i].getBoundingClientRect());
    }
    for (var i = 0; i < slideContsRect.length; i++) {
    slideContsTop.push(slideContsRect[i].top + windowY);
    }
    window.addEventListener('resize', function () {
    windowH = window.innerHeight;
    });
    window.addEventListener('scroll', function () {
    windowY = window.pageYOffset;
    for (var i = 0; i < slideConts.length; i++) {
    if(windowY > slideContsTop[i] - windowH + remainder) {
      slideConts[i].classList.add('show');
    } else {
      slideConts[i].classList.remove('show');
    }
    }});
    var fadeConts = document.querySelectorAll('.fadeConts');
    var fadeContsRect = [];
    var fadeContsTop = [];
    var windowY = window.pageYOffset;
    var windowH = window.innerHeight;
    var remainder = 100; 
    for (var i = 0; i < fadeConts.length; i++) {
    fadeContsRect.push(fadeConts[i].getBoundingClientRect());
    }
    for (var i = 0; i < fadeContsRect.length; i++) {
    fadeContsTop.push(fadeContsRect[i].top + windowY);
    }
    window.addEventListener('resize', function () {
    windowH = window.innerHeight;
    });
    window.addEventListener('scroll', function () {
    windowY = window.pageYOffset;
    for (var i = 0; i < fadeConts.length; i++) {
    if(windowY > fadeContsTop[i] - windowH + remainder) {
      fadeConts[i].classList.add('show');
    } else {
      fadeConts[i].classList.remove('show');
    }}});
document.addEventListener('DOMContentLoaded', () => {

    // ▼1. ランダム背景色候補
    const colors = [
        { name: 'ラブライブ', value: '#ff007f' },
        { name: 'サンシャイン', value: '#00bfff' },
        { name: '虹ヶ咲', value: '#ffcc00' },
        { name: 'スーパースター', value: '#cc99ff' },
        { name: '蓮ノ空', value: '#ffc0cb' },
        { name: 'イキヅライブ', value: '#008bc2' },
        { name: 'スクミュ', value: '#d70035' }
    ];

    // ▼2. あなたが指定した文章の文字色マッピング
    const textColorMap = {
        "#ff007f": "#ffffff",
        "#00bfff": "#ffffff",
        "#ffcc00": "#000000",
        "#cc99ff": "#ffffff",
        "#ffc0cb": "#b5002c",
        "#008bc2": "#ffffff",
        "#d70035": "#ffd700"
    };

    // ▼3. あなたが指定したリンク文字色マッピング
    const linkColorMap = {
        "#ff007f": "#000000",
        "#00bfff": "#000000",
        "#ffcc00": "#ffffff",
        "#cc99ff": "#000000",
        "#ffc0cb": "#ffffff",
        "#008bc2": "#000000",
        "#d70035": "#ffffff"
    };

    // ▼4. ランダムで背景色を選択
    const randomIndex = Math.floor(Math.random() * colors.length);
    const selectedColor = colors[randomIndex];

    const bgColor = selectedColor.value;

    // ▼5. 背景色を適用
    document.body.style.backgroundColor = bgColor;

    document.querySelector('header').style.backgroundColor = bgColor;

    // ▼6. 普通の文字色 (本文)
    const textColor = textColorMap[bgColor];
    document.body.style.color = textColor;

    // ▼7. メニュー背景色も同じにする
    document.querySelector('.menu').style.backgroundColor = bgColor;

    // ▼8. メニュー内の文字色も同じにする
    document.querySelector('.menu').style.color = textColor;
    document.querySelectorAll('.menu__item .text').forEach(item => {
        item.style.color = textColor;
    });

    // ▼9. 本文中のリンク文字の色
    const linkColor = linkColorMap[bgColor];
    document.querySelectorAll('main a').forEach(a => {
        a.style.color = linkColor;
    });

    // ▼10. 色名を表示する
    document.getElementById('colorName').textContent =
        `選ばれた色: ${selectedColor.name}`;
});

    window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.classList.add('loaded');
    loader.classList.add('slide-up');
    setTimeout(() => {
        loader.style.display = 'none';
    }, 1200);
    });
