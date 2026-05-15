document.addEventListener('DOMContentLoaded', () => {
    const emojiImg = document.getElementById('note-emoji');
    const moodButtons = document.querySelectorAll('.firstLine button, .secondLine button');
    const confirmBtn = document.getElementById('confirm-btn');

    // เปลี่ยนมาจำรหัสอารมณ์แทนตัวหนังสือภาษาไทย
    const moodMap = {
        'tired': '01-tired.svg',
        'stress': '02-stress.svg',
        'down': '03-confushion.svg', 
        'lonely': '04-alone.svg',
        'sad': '05-sad.svg',
        'need_hug': '06-motivation.svg'
    };

    moodButtons.forEach(button => {
        button.addEventListener('click', () => {
            const moodKey = button.getAttribute('data-mood');

            // สลับสถานะปุ่ม
            moodButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // ปลดล็อกปุ่มรับพลังบวก
            confirmBtn.disabled = false;

            // แอนิเมชันรูปหดวูบหาย
            emojiImg.classList.add('changing');

            setTimeout(() => {
                if(moodMap[moodKey]) {
                    emojiImg.src = `asset/Emote/${moodMap[moodKey]}`;
                }
                emojiImg.classList.remove('changing');
            }, 300); 
        });
    });

    confirmBtn.addEventListener('click', () => {
        const activeBtn = document.querySelector('.firstLine button.active, .secondLine button.active');
        if (activeBtn) {
            const moodKey = activeBtn.getAttribute('data-mood');
            localStorage.setItem('userMood', moodKey);
            localStorage.setItem('navSource', 'page1');
            
            const mainBox = document.querySelector('.main-container');
            mainBox.classList.add('slide-out-left');

            setTimeout(() => {
                window.location.href = '../page-2/index.html'; 
            }, 500);
        }
    });
});