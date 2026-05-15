const translations = {
    th: {
        "nav_about": "เกี่ยวกับเรา",
        "p3_title": "เลือก Pattern<br>ที่ต้องการ",
        "p3_confirm": "เลือก"
    },
    en: {
        "nav_about": "About Us",
        "p3_title": "Select Your<br>Pattern",
        "p3_confirm": "Select"
    }
};

function setLanguage(lang) {
    localStorage.setItem('appLang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase() === lang) {
            btn.classList.add('active');
        }
    });

    // 🔗 สั่งให้ Carousel อัปเดตรูปภาพใหม่ทันทีเมื่อเปลี่ยนภาษา
    if (typeof window.updateCarouselImages === 'function') {
        window.updateCarouselImages();
    }
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