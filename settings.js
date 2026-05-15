// shared/settings.js

document.addEventListener('DOMContentLoaded', () => {
    // =========================================
    // 🎨 1. เสก CSS ให้เหมือนภาพต้นฉบับ พร้อมฟอนต์ Mali และระบบ Slider
    // =========================================
    const style = document.createElement('style');
    style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Mali:wght@300;400;500;600;700&display=swap');

        .set-popup-overlay {
            position: fixed !important; top: 0 !important; left: 0 !important; 
            width: 100% !important; height: 100% !important;
            background-color: rgba(0, 0, 0, 0.4) !important; z-index: 999999 !important;
            display: none; justify-content: center !important; align-items: center !important;
            font-family: 'Mali', cursive, sans-serif !important;
        }

        /* พื้นหลังสีเหลืองอ่อนด้านนอก (เพิ่มการรองรับ Smart Scale) */
        .set-master-popup {
            width: 340px !important; max-width: 90% !important;
            background-color: #FFF9C4 !important;
            border-radius: 30px !important; padding: 15px !important;
            position: relative !important;
            box-shadow: 0 8px 20px rgba(0,0,0,0.1) !important;
            transform-origin: center center !important; /* 💡 เตรียมไว้สำหรับการย่อส่วน */
        }

        /* กล่องสีขาวด้านในพร้อมเส้นประ */
        .set-popup-content {
            background-color: #ffffff !important; 
            border: 4px dashed #795548 !important;
            border-radius: 25px !important; 
            padding: 30px 20px 20px 20px !important; 
            display: flex !important; flex-direction: column !important; 
            align-items: center !important;
            text-align: center !important;
        }

        /* ปุ่มปิด (X) สีแดง - ปรับให้อยู่กึ่งกลางเป๊ะ */
        .set-close-btn {
            position: absolute !important; top: -10px !important; right: -10px !important;
            width: 50px !important; height: 50px !important;
            background-color: #F06292 !important;
            color: white !important; border: 4px solid #ffffff !important;
            border-radius: 50% !important; font-size: 32px !important; font-weight: bold !important;
            cursor: pointer !important; display: flex !important; justify-content: center !important; 
            align-items: center !important; box-shadow: 0 4px 10px rgba(0,0,0,0.2) !important;
            z-index: 10 !important; 
            line-height: 1 !important; /* 💡 ปรับกึ่งกลาง */
            padding: 0 0 4px 0 !important; 
        }

        .set-title-h2 { 
            font-size: 2.2rem !important; font-weight: 700 !important; 
            color: #5D4037 !important; margin: 0 0 15px 0 !important; 
        }

        .set-item-group { width: 100% !important; margin-bottom: 20px !important; }
        .set-item-label { 
            display: block !important; font-size: 1.2rem !important; 
            font-weight: 600 !important; color: #5D4037 !important; 
            margin-bottom: 8px !important; 
        }

        .set-control-row { 
            display: flex !important; align-items: center !important; 
            justify-content: center !important; gap: 10px !important; 
            position: relative !important;
            height: 40px !important;
        }

        .circle-btn {
            width: 32px !important; height: 32px !important;
            background-color: #000000 !important; color: #ffffff !important;
            border: none !important; border-radius: 50% !important;
            display: flex !important; justify-content: center !important; align-items: center !important;
            cursor: pointer !important; font-size: 1.2rem !important; font-weight: bold !important;
            flex-shrink: 0 !important;
        }

        /* 🎚️ ระบบ Slider แบบ "กลมเรียว" */
        .slider-container {
            position: relative !important;
            width: 180px !important;
            height: 12px !important;
            background: #D7CCC8 !important;
            border-radius: 20px !important;
            display: flex !important;
            align-items: center !important;
            overflow: visible !important;
        }

        .slider-fill-bar {
            position: absolute !important;
            left: 0 !important; top: 0 !important;
            height: 100% !important;
            background: #795548 !important;
            border-radius: 20px !important;
            pointer-events: none !important;
            width: 50%;
        }

        .set-range-input {
            position: absolute !important;
            width: 100% !important;
            height: 40px !important;
            background: transparent !important;
            -webkit-appearance: none !important;
            appearance: none !important;
            cursor: pointer !important;
            z-index: 5 !important;
            margin: 0 !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
        }

        .set-range-input::-webkit-slider-thumb {
            -webkit-appearance: none !important;
            width: 22px !important; height: 22px !important;
            background: #5D4037 !important;
            border: 3px solid #FFF !important;
            border-radius: 50% !important;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3) !important;
            cursor: pointer !important;
        }
        
        .set-range-input::-moz-range-thumb {
            width: 22px !important; height: 22px !important;
            background: #5D4037 !important;
            border: 3px solid #FFF !important;
            border-radius: 50% !important;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3) !important;
            cursor: pointer !important;
        }

        /* 💬 ระบบ Tooltip */
        .set-tooltip {
            position: absolute !important;
            top: -38px !important;
            background-color: #795548 !important;
            color: #ffffff !important;
            padding: 2px 10px !important;
            border-radius: 8px !important;
            font-size: 0.9rem !important;
            font-weight: 600 !important;
            font-family: 'Mali', cursive !important;
            transform: translateX(-50%) !important;
            pointer-events: none !important;
            opacity: 0;
            transition: opacity 0.2s ease, top 0.2s ease !important;
            white-space: nowrap !important;
            z-index: 10 !important;
            box-shadow: 0 4px 8px rgba(0,0,0,0.15) !important;
        }
        .slider-container:active .set-tooltip, 
        .slider-container:hover .set-tooltip {
            opacity: 1 !important;
            top: -42px !important;
        }
        .set-tooltip::after {
            content: '' !important;
            position: absolute !important;
            bottom: -6px !important; left: 50% !important;
            transform: translateX(-50%) !important;
            border-left: 6px solid transparent !important;
            border-right: 6px solid transparent !important;
            border-top: 6px solid #795548 !important;
        }

        .display-text {
            width: 160px !important; font-size: 1.1rem !important;
            font-weight: 600 !important; color: #5D4037 !important;
            font-family: 'Mali', cursive !important;
        }

        .set-home-btn {
            background-color: #F8BBD0 !important;
            border: none !important; color: #5D4037 !important; 
            border-radius: 30px !important; padding: 12px 40px !important;
            font-size: 1.5rem !important; font-weight: 700 !important; 
            cursor: pointer !important; margin-top: 10px !important;
            box-shadow: 0 4px 0px #E1BEE7 !important;
            transition: transform 0.1s !important;
            font-family: 'Mali', cursive !important;
        }
        .set-home-btn:active { transform: translateY(3px) !important; box-shadow: none !important; }

        .footer-link {
            margin-top: 15px !important; color: #5D4037 !important;
            font-size: 1rem !important; text-decoration: underline !important;
            font-weight: 600 !important; display: block !important;
            font-family: 'Mali', cursive !important;
        }

        /* 🌟 แก้ไข: ปุ่มฟันเฟือง (เปลี่ยนเป็น Absolute ให้เกาะ Navbar) */
        .set-gear-icon-btn {
            position: absolute !important; 
            top: 50% !important; /* จัดให้อยู่กึ่งกลางแนวตั้งของ Navbar */
            transform: translateY(-50%) !important; 
            right: 20px !important; 
            width: 50px !important; 
            height: 50px !important;
            background-color: #FFD54F !important;
            border: 4px solid #FFE082 !important;
            border-radius: 50% !important; 
            cursor: pointer !important; 
            display: flex !important; 
            justify-content: center !important; 
            align-items: center !important;
            box-shadow: 0 4px 8px rgba(0,0,0,0.15) !important;
            transition: transform 0.3s ease !important;
            z-index: 1000000 !important; 
            padding: 0 !important;  
        }
        
        .set-gear-icon-btn:hover { 
            /* 🌟 สำคัญ: ต้องใส่ translateY(-50%) ไว้ด้วย ไม่งั้นปุ่มจะกระโดดตอนชี้ */
            transform: translateY(-50%) scale(1.1) !important; 
        }
        
        .set-gear-icon-btn svg {
            width: 65% !important; height: 65% !important;
            fill: #FFA000 !important;
            transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important; 
        }
        .set-gear-icon-btn:hover svg {
            transform: rotate(90deg) !important; /* หมุนแค่ 90 องศาตอนโฮเวอร์ */
        }

        /* 🌟 เพิ่มกฎให้ Navbar เป็นกล่องอ้างอิงของ Absolute */
        .navbar {
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            position: relative !important; 
            width: 100% !important;
        }
    `;
    document.head.appendChild(style);

    // =========================================
    // 🧱 2. เสก HTML Popup พร้อม Slider & Tooltip
    // =========================================
    const settingsHTML = `
    <div id="settings-module-overlay" class="set-popup-overlay">
        <div class="set-master-popup">
            <button class="set-close-btn" id="closeSettingsModule">×</button>
            <div class="set-popup-content">
                <h2 class="set-title-h2" id="set-ui-title-1">ตั้งค่า</h2>
                
                <div class="set-item-group">
                    <label class="set-item-label" id="set-ui-music">เสียงเพลง</label>
                    <div class="set-control-row">
                        <div class="slider-container">
                            <span id="musicTooltip" class="set-tooltip">50</span>
                            <div id="musicFill" class="slider-fill-bar"></div>
                            <input type="range" id="musicSlider" min="0" max="100" value="50" class="set-range-input">
                        </div>
                    </div>
                </div>

                <div class="set-item-group">
                    <label class="set-item-label" id="set-ui-sfx">เสียงเอฟเฟกต์</label>
                    <div class="set-control-row">
                        <div class="slider-container">
                            <span id="sfxTooltip" class="set-tooltip">50</span>
                            <div id="sfxFill" class="slider-fill-bar"></div>
                            <input type="range" id="sfxSlider" min="0" max="100" value="50" class="set-range-input">
                        </div>
                    </div>
                </div>

                <div class="set-item-group">
                    <label class="set-item-label" id="set-ui-song">เพลง</label>
                    <div class="set-control-row">
                        <button class="circle-btn" id="prevSong">＜</button>
                        <div class="display-text" id="currentSongDisplay">Track 1</div>
                        <button class="circle-btn" id="nextSong">＞</button>
                    </div>
                </div>

                <div class="set-item-group">
                    <label class="set-item-label" id="set-ui-lang">ภาษา / Language</label>
                    <div class="set-control-row">
                        <button class="circle-btn" id="prevLang">＜</button>
                        <div class="display-text" id="currentLangDisplay">ภาษาไทย</div>
                        <button class="circle-btn" id="nextLang">＞</button>
                    </div>
                </div>

                <button class="set-home-btn" id="set-btn-home" onclick="goToMainMenu()">กลับหน้าหลัก</button>
                <a href="../page-aboutUs/index.html" class="footer-link" id="set-ui-about">เกี่ยวกับเรา</a>
            </div>
        </div>
    </div>
    `;

    const appContainer = document.querySelector('.app-container') || document.body;
    appContainer.insertAdjacentHTML('beforeend', settingsHTML);

    // ⚙️ เสกปุ่มฟันเฟือง
    const gearBtnHTML = `
    <button class="set-gear-icon-btn" id="openSettingsBtn" onclick="openSettingsModule()">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.13,5.91,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.81,11.69,4.81,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
        </svg>
    </button>
    `;

    // 🌟 แก้ไข: ฉีดปุ่มเข้า Navbar ที่เดียวเท่านั้น (ลบของเดิมที่ฉีดใส่ body ซ้ำซ้อน)
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.insertAdjacentHTML('beforeend', gearBtnHTML);
    } else {
        // สำหรับหน้าไหนที่ไม่มี .navbar จริงๆ จะสร้างกล่อง Fixed เสมือน Navbar ขึ้นมารองรับ
        const fallbackBtn = `<div style="position:fixed; top:20px; right:20px; z-index:999999;">
            ${gearBtnHTML.replace('class="set-gear-icon-btn"', 'class="set-gear-icon-btn" style="position:relative !important; transform:none !important; top:0 !important; right:0 !important;"')}
        </div>`;
        document.body.insertAdjacentHTML('beforeend', fallbackBtn);
    }

    // =========================================
    // 🧠 3. ระบบควบคุม และ Persistence
    // =========================================
    const songs = ['Track 1', 'Track 2', 'Track 3'];
    const langs = [{ code: 'th', text: 'ภาษาไทย' }, { code: 'en', text: 'English' }];

    let musicVol = parseInt(localStorage.getItem('musicVolume')) || 50;
    let sfxVol = parseInt(localStorage.getItem('sfxVolume')) || 50;
    let songIdx = parseInt(localStorage.getItem('currentSongIdx')) || 0;
    let langCode = localStorage.getItem('appLang') || localStorage.getItem('currentLang') || 'th';
    let langIdx = langs.findIndex(l => l.code === langCode);
    if (langIdx === -1) langIdx = 0;

    const updateSliderUI = (sliderId, fillId, tooltipId, value) => {
        const fill = document.getElementById(fillId);
        const tooltip = document.getElementById(tooltipId);
        const slider = document.getElementById(sliderId);

        if (fill) fill.style.width = value + '%';
        if (tooltip) {
            tooltip.innerText = value;
            tooltip.style.left = value + '%';
        }
        if (slider) slider.value = value;
    };

    const updateVisuals = () => {
        updateSliderUI('musicSlider', 'musicFill', 'musicTooltip', musicVol);
        updateSliderUI('sfxSlider', 'sfxFill', 'sfxTooltip', sfxVol);

        const songDisp = document.getElementById('currentSongDisplay');
        const langDisp = document.getElementById('currentLangDisplay');
        if (songDisp) songDisp.innerText = songs[songIdx];
        if (langDisp) langDisp.innerText = langs[langIdx].text;

        if (window.parent && window.parent.AudioManager) {
            if (typeof window.parent.AudioManager.updateVolumes === 'function') window.parent.AudioManager.updateVolumes();
        }
    };

    const musicSlider = document.getElementById('musicSlider');
    const sfxSlider = document.getElementById('sfxSlider');

    if (musicSlider) {
        musicSlider.oninput = (e) => {
            musicVol = parseInt(e.target.value);
            localStorage.setItem('musicVolume', musicVol);
            updateVisuals();
        };
    }

    if (sfxSlider) {
        sfxSlider.oninput = (e) => {
            sfxVol = parseInt(e.target.value);
            localStorage.setItem('sfxVolume', sfxVol);
            updateVisuals();
        }
    }

    document.getElementById('prevSong').onclick = () => {
        songIdx = (songIdx - 1 + songs.length) % songs.length;
        localStorage.setItem('currentSongIdx', songIdx);
        updateVisuals();
        if (window.parent && window.parent.AudioManager?.changeBGM) window.parent.AudioManager.changeBGM(songIdx);
    };
    document.getElementById('nextSong').onclick = () => {
        songIdx = (songIdx + 1) % songs.length;
        localStorage.setItem('currentSongIdx', songIdx);
        updateVisuals();
        if (window.parent && window.parent.AudioManager?.changeBGM) window.parent.AudioManager.changeBGM(songIdx);
    };

    const updateLang = (idx) => {
        langIdx = (idx + langs.length) % langs.length;
        const newLang = langs[langIdx];
        localStorage.setItem('appLang', newLang.code);
        localStorage.setItem('currentLang', newLang.code);
        applySetLangUI(newLang.code);
        updateVisuals();
        if (typeof window.setLanguage === 'function') window.setLanguage(newLang.code);
        if (typeof window.applyPageLanguage === 'function') window.applyPageLanguage(newLang.code);
    };
    document.getElementById('prevLang').onclick = () => updateLang(langIdx - 1);
    document.getElementById('nextLang').onclick = () => updateLang(langIdx + 1);

    const applySetLangUI = (code) => {
        const dict = {
            th: { t1: "ตั้งค่า", music: "เสียงเพลง", sfx: "เสียงเอฟเฟกต์", song: "เพลง", lang: "ภาษา / Language", home: "กลับหน้าหลัก", about: "เกี่ยวกับเรา" },
            en: { t1: "Settings", music: "Music", sfx: "SFX", song: "Song", lang: "Language", home: "Main Menu", about: "About Us" }
        };
        const ui = dict[code] || dict.th;
        const ids = { 'set-ui-title-1': ui.t1, 'set-ui-music': ui.music, 'set-ui-sfx': ui.sfx, 'set-ui-song': ui.song, 'set-ui-lang': ui.lang, 'set-btn-home': ui.home, 'set-ui-about': ui.about };
        for (let id in ids) {
            const el = document.getElementById(id);
            if (el) el.innerText = ids[id];
        }
    };

    const overlay = document.getElementById('settings-module-overlay');

    // 💡 ฟังก์ชันคำนวณการย่อส่วนให้อยู่ใน 90% ของหน้าจอ
    const adjustPopupScale = () => {
        const popup = document.querySelector('.set-master-popup');
        if (!popup) return;

        const viewportH = window.innerHeight;
        // สมมติว่าความสูงปกติของกล่องคือประมาณ 600px
        if (viewportH < 620) {
            // ถ้าย่อจอเตี้ยกว่า 620px ให้สเกลหดลงมาเหลือแค่ 90% ของจอ
            const scaleVal = (viewportH * 0.9) / 600;
            popup.style.transform = `scale(${scaleVal})`;
        } else {
            popup.style.transform = 'scale(1)'; // จอปกติ ไม่ต้องย่อ
        }
    };

    window.openSettingsModule = () => {
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // 🔒 ล็อกหน้าเว็บด้านหลังไม่ให้เลื่อนเวลาเปิด Setting
        adjustPopupScale(); // 🔍 คำนวณและย่อส่วนทันทีที่เปิด
        if (window.parent && window.parent.AudioManager) window.parent.AudioManager.play('pop');
    };

    const closePopup = () => {
        overlay.style.display = 'none';
        document.body.style.overflow = ''; // 🔓 ปลดล็อกหน้าเว็บให้กลับมาเลื่อนได้ปกติ
    };

    document.getElementById('closeSettingsModule').onclick = closePopup;
    overlay.onclick = (e) => { if (e.target === overlay) closePopup(); };

    // 💡 ปรับขนาดทันทีถ้ามีการหมุนจอ
    window.addEventListener('resize', () => {
        if (overlay.style.display === 'flex') adjustPopupScale();
    });

    window.goToMainMenu = () => {
        document.body.style.overflow = ''; // ปลดล็อกก่อนไปหน้าอื่น
        window.location.href = '../page-1/index.html';
    };

    // 💡 จัดการการกดลิงก์ About Us ไม่ให้จอค้าง (ปลดล็อกจอ)
    const aboutLink = document.getElementById('set-ui-about');
    if (aboutLink) {
        aboutLink.onclick = (e) => {
            e.preventDefault();
            document.body.style.overflow = '';
            window.location.href = '../page-aboutUs/index.html';
        };
    }

    applySetLangUI(langCode);
    updateVisuals();
});

// =========================================
// 🎵 ระบบเสียงและการแสดงผลเพลง (เสริมจากโค้ดเดิม)
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    const AudioManager = window.parent.AudioManager;
    let lastPopTime = 0;

    // 🌟 1. เสียง "แต๊กๆ" (Pop) ตอนลาก Slider
    const sliders = document.querySelectorAll('input[type="range"]');
    sliders.forEach(s => {
        s.addEventListener('input', () => {
            const now = Date.now();
            if (now - lastPopTime > 100) { // หน่วงเวลาไม่ให้เสียงรัวเกิน
                if (AudioManager) AudioManager.play('pop');
                lastPopTime = now;
            }
            if (AudioManager) AudioManager.updateVolumes(); // อัปเดตความดังทันที
        });
    });

    // 🌟 2. อัปเดตชื่อเพลงในหน้า Setting
    const updateBgmName = () => {
        // หา Element ที่แสดงชื่อเพลง (แก้ ID ให้ตรงกับ HTML ของคุณถ้าจำเป็น)
        const display = document.getElementById('bgmNameDisplay');
        if (display && AudioManager) {
            const currentIdx = AudioManager.getCurrentTrackIndex();
            display.innerText = `Track ${currentIdx + 1}`;
        }
    };

    // แทรกคำสั่งอัปเดตชื่อเพลงเข้าไปตอนเปิด Popup
    if (typeof window.openSettingsModule === 'function') {
        const originalOpen = window.openSettingsModule;
        window.openSettingsModule = () => {
            originalOpen();
            updateBgmName();
        };
    }

    // 🌟 3. จัดการปุ่มลูกศรเปลี่ยนเพลง (แก้ ID ให้ตรงกับ HTML ของคุณถ้าจำเป็น)
    const prevBtn = document.getElementById('bgmPrev');
    const nextBtn = document.getElementById('bgmNext');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (!AudioManager) return;
            let idx = AudioManager.getCurrentTrackIndex();
            idx = (idx - 1 + 3) % 3; // ถอยหลังวนลูป (สมมติว่ามี 3 เพลง)
            AudioManager.changeBGM(idx);
            updateBgmName();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (!AudioManager) return;
            let idx = AudioManager.getCurrentTrackIndex();
            idx = (idx + 1) % 3; // เดินหน้าวนลูป
            AudioManager.changeBGM(idx);
            updateBgmName();
        });
    }
});