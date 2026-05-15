// 📦 พจนานุกรม (เฉพาะหน้า 5)
const translations = {
    th: {
        "nav_about": "เกี่ยวกับเรา",
        "p5_title": "บันทึกของคุณ<br>พร้อมแล้ว",
        "p5_sub": "เรื่องราวของคุณ<br>ถูกรวบรวมไว้เรียบร้อยแล้ว",
        "p5_save": "บันทึกรูปภาพ",
        "p5_next": "ถัดไป" // 💡 เพิ่มบรรทัดนี้
    },
    en: {
        "p5_title": "Your Diary is Ready",
        "p5_sub": "Your story has been fully compiled.",
        "p5_save": "Save Image",
        "p5_next": "Next" // 💡 เพิ่มบรรทัดนี้
    }
};

function setLanguage(lang) {
    localStorage.setItem('appLang', lang); 
    
    // เปลี่ยนข้อความ UI
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    
    // สลับสีปุ่ม TH / EN
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase() === lang) btn.classList.add('active');
    });

    // 🌟 สัญญาณบอก script.js ให้เปลี่ยนตัวหนังสือในรูปภาพด้วย!
    window.dispatchEvent(new CustomEvent('langChanged', { detail: { lang: lang } }));
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('appLang') || 'th';
    setLanguage(savedLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            setLanguage(e.target.innerText.toLowerCase());
        });
    });
});