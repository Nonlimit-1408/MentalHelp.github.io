// 📦 พจนานุกรม (เฉพาะหน้า 4)
const translations = {
    th: {
        "nav_about": "เกี่ยวกับเรา",
        "p4_title": "เลือกรูปภาพของคุณ",
        "p4_upload": "+ คลิกเพื่ออัปโหลดรูปภาพ",
        "p4_retake": "เลือกใหม่",
        "p4_confirm": "เรียบร้อย",
        "p4_crop_title": "ปรับขนาดรูปภาพ",
        "p4_crop_cancel": "ยกเลิก",
        "p4_crop_apply": "ยืนยันการตัดรูป"
    },
    en: {
        "nav_about": "About Us",
        "p4_title": "Add Your Photo",
        "p4_upload": "+ Click to upload photo",
        "p4_retake": "Retake",
        "p4_confirm": "Done",
        "p4_crop_title": "Crop Photo",
        "p4_crop_cancel": "Cancel",
        "p4_crop_apply": "Apply"
    }
};

function setLanguage(lang) {
    localStorage.setItem('appLang', lang); 
    
    // เปลี่ยนข้อความในหน้าเว็บ
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