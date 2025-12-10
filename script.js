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
    document.addEventListener('DOMContentLoaded', (event) => {
    const colors = [
    { name: 'ラブライブ', value: '#ff007f' },
    { name: 'サンシャイン', value: '#00bfff' },
    { name: '虹ヶ咲', value: '#ffcc00' },
    { name: 'スーパースター', value: '#cc99ff' },
    { name: '蓮ノ空', value: '#ffc0cb' },
    { name: 'イキヅライブ', value: '#008bc2' },
    { name: 'スクミュ', value: '#d70035' }
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const selectedColor = colors[randomIndex];
    document.body.style.backgroundColor = selectedColor.value;
    document.getElementById('colorName').textContent = `選ばれた色: ${selectedColor.name}`;
        });
    window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.classList.add('loaded');
    loader.classList.add('slide-up');
    setTimeout(() => {
        loader.style.display = 'none';
    }, 1200);
        });
