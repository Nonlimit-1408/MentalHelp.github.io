document.addEventListener('DOMContentLoaded', () => {
    // 1. ดึง Pattern ที่เลือก และเช็ก Template
    const selectedPattern = localStorage.getItem('selectedPattern') || '1';
    const template = document.getElementById(`template-${selectedPattern}`);
    if (!template) return;

    // 2. โคลนโครงสร้างและเช็กภาษา
    const clone = template.content.cloneNode(true);
    const canvasElement = clone.querySelector('.canvas');
    const currentLang = localStorage.getItem('appLang') || 'th';

    if (currentLang === 'en') {
        canvasElement.classList.add('lang-en');
    }

    // 🌟 จุดที่เพิ่มเข้ามา: ดึงรูปเฟรมจากตัวแปร patternBase64 ในไฟล์ assetbase64.js มาใส่กรอบ
    const frameEl = clone.querySelector('.layer-frame');
    if (frameEl && typeof patternBase64 !== 'undefined') {
        frameEl.src = patternBase64[selectedPattern];
    }

    // 3. ดึงข้อมูลจาก LocalStorage
    const userImg = localStorage.getItem('userCroppedImage');
    const quote = localStorage.getItem(`savedQuote_${currentLang}`) || localStorage.getItem('savedQuote') || "Keep going!";
    const advice = localStorage.getItem(`savedAdvice_${currentLang}`) || localStorage.getItem('savedAdvice') || "ลองพักผ่อนบ้างนะ";
    const diary = localStorage.getItem('savedDiary') || "";

    // ระบบวันเวลา
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

    const safeThai = (text) => text ? text.replace(/คนอื่น/g, '<span class="no-wrap">คนอื่น</span>') : "...";

    // 4. เติมข้อความหัวข้อตามภาษา
    const STATIC_TEXT = {
        adv_hdr: { th: "คำแนะนำเล็กๆจากเรา", en: "A Little Advice for You" },
        diary_hdr: { th: "บันทึกของคุณ", en: "Your Diary" }
    };

    const advHdrEl = clone.querySelector('.advice-header');
    const diaryHdrEl = clone.querySelector('.diary-header');
    if (advHdrEl) advHdrEl.innerHTML = STATIC_TEXT.adv_hdr[currentLang];
    if (diaryHdrEl) diaryHdrEl.innerHTML = STATIC_TEXT.diary_hdr[currentLang];

    // 5. เติมข้อมูลรูปภาพและเนื้อหาลงใน Layer
    const imgEl = clone.querySelector('#user-photo');
    if (imgEl && userImg) imgEl.src = userImg;

    const quoteEl = clone.querySelector('.vibe-content');
    if (quoteEl) quoteEl.innerHTML = quote;

    const adviceEl = clone.querySelector('.advice-content');
    if (adviceEl) adviceEl.innerHTML = advice;

    const diaryEl = clone.querySelector('.diary-content');
    if (diaryEl) diaryEl.innerHTML = safeThai(diary);

    const timeEl = clone.querySelector('#time');
    const dateEl = clone.querySelector('#date');
    if (timeEl) timeEl.innerHTML = timeStr;
    if (dateEl) dateEl.innerHTML = dateStr;

    // 6. นำขึ้นหน้าจอ
    const mountPoint = document.getElementById('zoom-wrapper');
    mountPoint.appendChild(clone);

    // 🌟 7. รันระบบ Smart Scale เพื่อให้ Full Responsive
    applySmartScale();

    setTimeout(() => {
        const spinner = document.getElementById('loading-spinner');
        if (spinner) {
            spinner.classList.add('spinner-hidden');
            // ลบทิ้งออกจาก HTML ไปเลยหลังจากเฟดหายไปแล้ว (ลดการกินสเปค)
            setTimeout(() => spinner.remove(), 500); 
        }
    }, 800);
});

/**
 * 🌟 ฟังก์ชันคำนวณสเกลรูปภาพให้พอดีกับกรอบในทุก Device
 */
function applySmartScale() {
    const container = document.querySelector('.artwork-canvas');
    const wrapper = document.getElementById('zoom-wrapper');

    if (!container || !wrapper) return;

    const observer = new ResizeObserver(entries => {
        for (let entry of entries) {
            const containerW = entry.contentRect.width;
            
            // 🌟 ย่อตามความกว้างเป๊ะๆ ไม่ต้องบวกเผื่อขอบ ไม่ต้องเลื่อนพิกัด
            const exactScale = containerW / 1080;
            
            wrapper.style.transform = `scale(${exactScale})`;
        }
    });

    observer.observe(container);
}

/**
 * ฟังก์ชันบันทึกภาพด้วย html2canvas
 */
async function saveImage() {
    const btn = document.querySelector('.btn-primary');
    const originalText = btn.innerText;
    const appLang = localStorage.getItem('appLang') || 'th';
    
    btn.innerText = appLang === 'en' ? "Saving image..." : "กำลังบันทึกภาพ...";
    btn.disabled = true;

    const target = document.getElementById('assembly-canvas');
    if (!target) {
        btn.innerText = originalText;
        btn.disabled = false;
        return;
    }

    try {
        const canvas = await html2canvas(target, {
            useCORS: true,
            scale: 2, // เพิ่มความชัดตอนบันทึก
            backgroundColor: null,
            onclone: (clonedDoc) => {
                const wrapper = clonedDoc.getElementById('zoom-wrapper');
                if (wrapper) {
                    wrapper.style.transform = 'scale(1)';
                }
            }
        });

        const link = document.createElement('a');
        link.download = `MentalHelp-Diary-${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png', 1.0);
        link.click();

        setTimeout(() => {
            window.location.href = '../page-6/index.html';
        }, 1500);

    } catch (err) {
        console.error("Error saving image:", err);
        btn.innerText = originalText;
        btn.disabled = false;
    }
}

function nextPage() {
    window.location.href = '../page-6/index.html';
}