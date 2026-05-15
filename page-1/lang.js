const translations = {
    th: {
        "nav_about": "เกี่ยวกับเรา",
        "p1_title": "ตอนนี้<br>คุณรู้สึกอย่างไร",
        "p1_mood1": "เหนื่อยล้า<br>หมดไฟ",
        "p1_mood2": "เครียด<br>กดดัน",
        "p1_mood3": "ดิ่ง<br>สับสน",
        "p1_mood4": "โดดเดี่ยว<br>ว่างเปล่า",
        "p1_mood5": "เศร้า<br>เสียใจ",
        "p1_mood6": "ต้องการ<br>กำลังใจ",
        "p1_confirm": "รับพลังบวก"
    },
    en: {
        "nav_about": "About Us",
        "p1_title": "How are you<br>feeling right now?",
        "p1_mood1": "Tired &<br>Burnout",
        "p1_mood2": "Stressed &<br>Pressured",
        "p1_mood3": "Down &<br>Confused",
        "p1_mood4": "Lonely &<br>Empty",
        "p1_mood5": "Sad &<br>Heartbroken",
        "p1_mood6": "Need<br>Encouragement",
        "p1_confirm": "Get Positive Energy"
    }
};

function setLanguage(lang) {
    localStorage.setItem('appLang', lang); // จำภาษาที่เลือกลงเครื่อง
    
    // 🌟 1. สิ่งที่ต้องเพิ่ม: ล้างของเก่าและแปะคลาสภาษาใหม่ลงใน <body> 
    document.body.classList.remove('th', 'en');
    document.body.classList.add(lang);

    // วนหา HTML ทุกตัวที่มี data-i18n แล้วเปลี่ยนข้อความ
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    
    // สลับสีปุ่ม TH / EN
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase() === lang) btn.classList.add('active');
    });
}

// เมื่อโหลดหน้าเว็บ ให้เช็กว่าใช้ภาษาอะไรอยู่
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('appLang') || 'th';
    setLanguage(savedLang);

    // ผูกคำสั่งให้ปุ่มเปลี่ยนภาษา
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            setLanguage(e.target.innerText.toLowerCase());
        });
    });
});