// 📦 พจนานุกรม (เฉพาะหน้า 2)
const translations = {
    th: {
        "nav_about": "เกี่ยวกับเรา",
        "p2_quote_title": "พลังบวกถึงคุณ",
        "p2_advice_title": "คำแนะนำเล็กๆ จากเรา",
        "p2_diary_title": "บันทึกของคุณ",
        "p2_diary_placeholder": "วันนี้คุณอยากระบายอะไร...",
        "p2_btn_random": "สุ่มใหม่",
        "p2_btn_done": "เรียบร้อย"
    },
    en: {
        "nav_about": "About Us",
        "p2_quote_title": "Positive Energy For You",
        "p2_advice_title": "A Little Advice",
        "p2_diary_title": "Your Diary",
        "p2_diary_placeholder": "What's on your mind today...",
        "p2_btn_random": "Re-random",
        "p2_btn_done": "Done"
    }
};

function setLanguage(lang) {
    localStorage.setItem('appLang', lang); 

    // เปลี่ยนข้อความปกติ
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });

    // เปลี่ยนข้อความ Placeholder ในช่องพิมพ์ไดอารี่
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) el.setAttribute('placeholder', translations[lang][key]);
    });

    // สลับสีปุ่ม TH / EN
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase() === lang) btn.classList.add('active');
    });

    // 🌟 สัญญาณลับ: ตะโกนบอก script.js หน้า 2 ว่า "เปลี่ยนภาษาแล้วนะ! สลับคำคมให้ด้วย!"
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