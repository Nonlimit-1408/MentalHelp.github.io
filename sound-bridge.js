// =========================================
// 🌉 สะพานเชื่อมเสียง (Sound Bridge สำหรับ MentalHelp+)
// =========================================
const AudioManager = window.parent.AudioManager;

// 1. ดักการคลิกครั้งแรกในหน้าลูก (Iframe) เพื่อปลดล็อกเสียงหน้าแม่
document.addEventListener('click', () => {
    if (AudioManager && typeof AudioManager.unlockAudio === 'function') {
        AudioManager.unlockAudio();
    }
}, { once: true });

// 2. ฟังก์ชันตัวช่วยเล่นเสียง 🌟 (อัปเดตให้รองรับ Loop)
window.playSound = (soundId, loop = false) => {
    if (AudioManager) AudioManager.play(soundId, loop);
};

// 🌟 เพิ่มฟังก์ชันช่วยหยุดเสียง
window.stopSound = (soundId) => {
    if (AudioManager && AudioManager.stopSFX) AudioManager.stopSFX(soundId);
};

// 3. ดักเสียงปุ่มกดอัตโนมัติแบบแยกประเภท
document.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    
    if (btn) {
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes('saveImage')) {
            window.playSound('shutter');
        }
        else if (btn.classList.contains('arrow-btn')) {
            window.playSound('woosh-book');
        } 
        else if (btn.classList.contains('apply-btn')) {
            window.playSound('noti-upload');
        }
        else if (btn.closest('.firstLine') || btn.closest('.secondLine')) {
            window.playSound('woosh-1');
        }
        else {
            // ปุ่มรีด้อมจะมาตกตรงนี้ ทำให้เล่นแค่เสียง click ทั่วไป
            window.playSound('click');
        }
    }
});

// 4. ดักเสียงตอนโหลดหน้าเสร็จ
window.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    if (path.includes('page-6')) {
        setTimeout(() => window.playSound('noti-thanks'), 300);
    } 
    else if (path.includes('page-5')) {
        setTimeout(() => window.playSound('noti-preview'), 300);
    }
    else {
        setTimeout(() => window.playSound('pop'), 150);
    }
});