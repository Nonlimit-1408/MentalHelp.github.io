// 📦 พจนานุกรม (เฉพาะหน้า 6)
const translations = {
    th: {
        "nav_about": "เกี่ยวกับเรา",
        "p6_title": "ขอบคุณ<br>ที่ให้เรา<br>ดูแลจิตใจคุณ<br>ในวันนี้","p6_title": "ขอบคุณ<br class='br-portrait'>ที่ให้เรา<br class='br-portrait'>ดูแลจิตใจคุณ<br class='br-portrait'>ในวันนี้",
        "p6_sub": "กำลังพากลับสู่หน้าหลัก..."
    },
    en: {
        "nav_about": "About Us",
        "p6_title": "Thank you<br class='br-portrait'> for letting us<br class='br-portrait'> care for your mind<br class='br-portrait'> today.",
        "p6_sub": "Returning to homepage..."
    }
};

function setLanguage(lang) {
    localStorage.setItem('appLang', lang); 
    
    // เปลี่ยนข้อความในหน้าเว็บ
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    
    // สลับสีปุ่ม TH / EN
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase() === lang) {
            btn.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // โหลดภาษาที่ผู้ใช้เลือกไว้จากหน้าก่อนๆ
    const savedLang = localStorage.getItem('appLang') || 'th';
    setLanguage(savedLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            setLanguage(e.target.innerText.toLowerCase());
        });
    });
});