let remainingQuotes = {};
let remainingAdvices = {};
let currentQuoteObj = null; // เก็บอ็อบเจกต์คำคมที่สุ่มได้ล่าสุด
let currentAdviceObj = null; // เก็บอ็อบเจกต์คำแนะนำที่สุ่มได้ล่าสุด

document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.querySelector('.main-container');
    const quoteEl = document.querySelector('.randomQuote');
    const encourEl = document.querySelector('.randomEncour');
    const btnReRandom = document.querySelector('.re-random');

    function syncFontSizes(el1, text1, el2, text2) {
        let fontSize = 28; // เริ่มต้นที่ 28px
        el1.style.fontSize = fontSize + "px";
        el2.style.fontSize = fontSize + "px";
        
        // 🌟 เปลี่ยนมาใช้ innerHTML เพื่อให้รองรับแท็ก <br>
        el1.innerHTML = text1;
        el2.innerHTML = text2;
        
        const safetyPadding = 70;
        
        while ((el1.scrollHeight > el1.clientHeight || el1.scrollWidth > (el1.clientWidth - safetyPadding) ||
                el2.scrollHeight > el2.clientHeight || el2.scrollWidth > (el2.clientWidth - safetyPadding))
            && fontSize > 16) {
            fontSize--;
            el1.style.fontSize = fontSize + "px";
            el2.style.fontSize = fontSize + "px";
        }
    }

    async function startLuckyDraw() {
        btnReRandom.disabled = true;
        quoteEl.style.color = "#d5a170";
        encourEl.style.color = "#d5a170";

        // 🌟 1. เริ่มเล่นเสียงสุ่มแบบวนลูป (Loop = true) ทันทีที่เริ่มหมุน!
        if (window.playSound) window.playSound('random', true);

        // 💡 รับรหัสอารมณ์จากหน้า 1 (เช่น 'stress', 'tired')
        const moodKey = localStorage.getItem('userMood') || 'stress';

        if (!remainingQuotes[moodKey] || remainingQuotes[moodKey].length === 0) { remainingQuotes[moodKey] = [...QUOTE_POOL[moodKey]]; }
        if (!remainingAdvices[moodKey] || remainingAdvices[moodKey].length === 0) { remainingAdvices[moodKey] = [...ADVICE_POOL[moodKey]]; }

        const qIdx = Math.floor(Math.random() * remainingQuotes[moodKey].length);
        const aIdx = Math.floor(Math.random() * remainingAdvices[moodKey].length);
        
        currentQuoteObj = remainingQuotes[moodKey].splice(qIdx, 1)[0];
        currentAdviceObj = remainingAdvices[moodKey].splice(aIdx, 1)[0];

        const duration = 1200; const interval = 80; let elapsed = 0;
        
        const spinTimer = setInterval(() => {
            if (elapsed < duration) {
                const tempQ = QUOTE_POOL[moodKey][Math.floor(Math.random() * QUOTE_POOL[moodKey].length)];
                const tempA = ADVICE_POOL[moodKey][Math.floor(Math.random() * ADVICE_POOL[moodKey].length)];
                
                // แอนิเมชันสุ่ม เอาภาษาที่เลือกมาโชว์
                const lang = localStorage.getItem('appLang') || 'th';
                syncFontSizes(quoteEl, tempQ[lang], encourEl, tempA[lang]);
                elapsed += interval;
            } else {
                clearInterval(spinTimer);
                
                // 🌟 2. สั่งหยุดเสียงสุ่มทันทีเมื่อแอนิเมชันจบ!
                if (window.stopSound) window.stopSound('random');
                
                // เสร็จสิ้นการสุ่ม
                const lang = localStorage.getItem('appLang') || 'th';
                syncFontSizes(quoteEl, currentQuoteObj[lang], encourEl, currentAdviceObj[lang]);
                quoteEl.style.color = "#745232"; encourEl.style.color = "#745232";
                btnReRandom.disabled = false;
                
                // บันทึกคำคมทั้ง 2 ภาษาลงเครื่อง เผื่อเอาไปใช้หน้าอื่น
                localStorage.setItem('savedQuote_th', currentQuoteObj.th);
                localStorage.setItem('savedQuote_en', currentQuoteObj.en);
                localStorage.setItem('savedAdvice_th', currentAdviceObj.th);
                localStorage.setItem('savedAdvice_en', currentAdviceObj.en);
            }
        }, interval);
    }

    // 💡 ระบบดักฟังการเปลี่ยนภาษาแบบ Real-time!
    window.addEventListener('langChanged', (e) => {
        const newLang = e.detail.lang;
        if (currentQuoteObj && currentAdviceObj) {
            // อัปเดตข้อความในกล่องทันทีโดยไม่ต้องสุ่มใหม่
            syncFontSizes(quoteEl, currentQuoteObj[newLang], encourEl, currentAdviceObj[newLang]);
        }
    });

    const savedDiary = localStorage.getItem('savedDiary');
    if (savedDiary) document.getElementById('diary-input').value = savedDiary;

    const navSource = localStorage.getItem('navSource');
    const isFromPage3 = (navSource === 'page3');

    if (isFromPage3 && localStorage.getItem('savedQuote_th')) {
        mainContainer.classList.add('slide-in-left');
        
        // ดึงของเก่ากลับมาโชว์
        currentQuoteObj = { th: localStorage.getItem('savedQuote_th'), en: localStorage.getItem('savedQuote_en') };
        currentAdviceObj = { th: localStorage.getItem('savedAdvice_th'), en: localStorage.getItem('savedAdvice_en') };
        
        const lang = localStorage.getItem('appLang') || 'th';
        syncFontSizes(quoteEl, currentQuoteObj[lang], encourEl, currentAdviceObj[lang]);
        quoteEl.style.color = "#745232"; encourEl.style.color = "#745232";
    } else {
        mainContainer.classList.add('slide-in-right');
        setTimeout(() => { startLuckyDraw(); }, 600);
    }

    btnReRandom.addEventListener('click', startLuckyDraw);
    document.querySelector('.finish').addEventListener('click', () => {
        const diaryContent = document.getElementById('diary-input').value.trim();
        localStorage.setItem('savedDiary', diaryContent);
        window.location.href = '../page-3/index.html'; 
    });

    // ==========================================
    // 🌟 ระบบตัดเสียงสุ่มแบบครอบจักรวาล (รวมทุกกรณีการออกจากหน้า)
    // ==========================================
    const killRandomSound = () => {
        if (window.stopSound) window.stopSound('random');
        if (window.parent && window.parent.stopSound) window.parent.stopSound('random'); 
    };

    // ดักไว้ทุกประตู: เปลี่ยนหน้า, กด Back, ปิดแท็บ, หรือพับแอปหน้าจอดับ
    window.addEventListener('pagehide', killRandomSound);
    window.addEventListener('beforeunload', killRandomSound);
    window.addEventListener('unload', killRandomSound);
    window.addEventListener('popstate', killRandomSound);
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') killRandomSound();
    });

}); // ปิด DOMContentLoaded

// ==========================================
    // 🌟 แอบโหลดรูปหน้า 3 ล่วงหน้า (Preload)
    // ==========================================
    const preloadPage3Images = () => {
        const lang = localStorage.getItem('appLang') || 'th';
        // โหลดรูปลายกระดาษทั้ง 5 ลายตามภาษาที่เลือก
        for(let i = 1; i <= 5; i++){
            const img = new Image();
            img.src = `../page-3/asset/${lang}/${i}.png`;
        }
    };
    
    // สั่งทำงานทันทีที่เปิดหน้า 2
    preloadPage3Images();