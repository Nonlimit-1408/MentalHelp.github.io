// 📦 พจนานุกรม (อัปเดตข้อมูลโปรเจกต์และรายชื่อสมาชิก)
const translations = {
    th: {
        "nav_about": "เกี่ยวกับเรา",
        "about_title": "เกี่ยวกับ MentalHelp+",
        "about_text": "แอปพลิเคชันสุ่มข้อความให้กำลังใจและคำแนะนำดีๆ<br>สำหรับวัยรุ่นและนักศึกษาที่ต้องการพลังบวก<br>ในวันที่เหนื่อยล้า เผชิญความเครียดและความกดดัน<br><br>เป็นส่วนหนึ่งของ<br>รายวิชา 804106 การโปรแกรมสําหรับสื่อดิจิทัล<br>(Programming for Digital Media)<br>ภาคเรียนที่ 2 ปีการศึกษา 2568<br>สาขาวิชาเทคโนโลยีสื่อสร้างสรรค์<br>คณะเทคโนโลยีสารสนเทศและการสื่อสาร<br>มหาวิทยาลัยศิลปากร<br>วิทยาเขตพระราชวังสนามจันทร์<br><br>จัดทำโดย<br>681310376 นายชนัตนนท์ บวรโภคิน<br>681310715 นางสาวญาณิศา คงสุวรรณ์",
        "about_back": "กลับ"
    },
    en: {
        "nav_about": "About Us",
        "about_title": "About MentalHelp+",
        "about_text": "An application that randomly provides encouraging messages and good advice<br>for teenagers and university students seeking positive energy<br>on exhausting days or when facing stress and pressure.<br><br>This project is a part of<br>Course 804106 Programming for Digital Media<br>Semester 2, Academic Year 2025<br>Creative Media Technology Program<br>Faculty of Information and Communication Technology<br>Silpakorn University<br>Sanam Chandra Palace Campus<br><br>Developed by<br>681310376 Mr. Chanatnon Bowornpokin<br>681310715 Ms. Yanisa Kongsuwan",
        "about_back": "Return"
    }
};

function setLanguage(lang) {
    localStorage.setItem('appLang', lang); 
    document.body.setAttribute('data-lang', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        // ตรวจสอบว่าปุ่มตรงกับภาษาปัจจุบันหรือไม่ (Case-insensitive)
        if (btn.innerText.trim().toLowerCase() === lang) {
            btn.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // ดึงภาษาที่บันทึกไว้ หรือใช้ภาษาไทยเป็นค่าเริ่มต้น
    const savedLang = localStorage.getItem('appLang') || 'th';
    setLanguage(savedLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            setLanguage(e.target.innerText.trim().toLowerCase());
        });
    });
});