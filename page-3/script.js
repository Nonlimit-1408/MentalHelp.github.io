// 🖼️ 1. ฟังก์ชันสำหรับอัปเดตรูปภาพใน Carousel ตามภาษาปัจจุบัน
function updateCarouselImages() {
    const lang = localStorage.getItem('appLang') || 'th';
    const images = document.querySelectorAll('.pattern-item');

    images.forEach(img => {
        const patternNum = img.getAttribute('data-pattern');
        if (patternNum) {
            img.src = `asset/${lang}/${patternNum}.png`;
        }
    });
}

window.addEventListener('langChanged', () => {
    updateCarouselImages();
});

// 💡 2. ฟังก์ชันแยก UI แนวตั้ง-แนวนอน อย่างเด็ดขาด
function checkOrientation() {
    if (window.innerWidth > window.innerHeight) {
        document.body.classList.add('is-landscape');
        document.body.classList.remove('is-portrait');
    } else {
        document.body.classList.add('is-portrait');
        document.body.classList.remove('is-landscape');
    }
}
// ตรวจจับตอนโหลดหน้าและตอนหมุนจอ
window.addEventListener('resize', checkOrientation);

document.addEventListener('DOMContentLoaded', () => {
    checkOrientation(); // รันแยก UI ทันที
    updateCarouselImages();

 // === 3. ระบบ Carousel เลื่อนรูป (รองรับ Click & Swipe) ===
    const items = document.querySelectorAll('.pattern-item');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const patternDisplay = document.getElementById('pattern-display'); // 🌟 จับกล่องรูปภาพเพื่อดักจับการปัด

    let currentIndex = 0;
    const totalItems = items.length;

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.remove('active', 'prev', 'next', 'hidden');

            if (index === currentIndex) {
                item.classList.add('active');
            } else if (index === (currentIndex - 1 + totalItems) % totalItems) {
                item.classList.add('prev');
            } else if (index === (currentIndex + 1) % totalItems) {
                item.classList.add('next');
            } else {
                item.classList.add('hidden');
            }
        });
    }

    // 🌟 ผูกคำสั่งเสียงไว้ในฟังก์ชันย้ายรูปเลย (สั่งเปลี่ยนวิธีไหน เสียงก็ดัง!)
    const movePrev = () => {
        if (window.playSound) window.playSound('woosh-book'); 
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    };

    const moveNext = () => {
        if (window.playSound) window.playSound('woosh-book');
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    };

    // [ฟีเจอร์เดิม] 1. กดปุ่มลูกศร
    btnPrev.addEventListener('click', movePrev);
    btnNext.addEventListener('click', moveNext);

    // [ฟีเจอร์เดิม] 2. กดที่รูปด้านข้าง
    items.forEach((item) => {
        item.addEventListener('click', () => {
            if (item.classList.contains('prev')) {
                movePrev();
            } else if (item.classList.contains('next')) {
                moveNext();
            }
        });
    });

    // 🌟 [ฟีเจอร์ใหม่] 3. ระบบ Swipe ปัดหน้าจอ (สำหรับมือถือ / iPad)
    let touchStartX = 0;
    let touchEndX = 0;
    const swipeThreshold = 50; // ระยะปัดขั้นต่ำ (พิกเซล) เพื่อป้องกันการแตะพลาด

    patternDisplay.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    patternDisplay.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const diffX = touchStartX - touchEndX;
        
        // ถ้าปัดยาวเกิน Threshold ให้เปลี่ยนรูป
        if (Math.abs(diffX) > swipeThreshold) {
            if (diffX > 0) {
                moveNext(); // ปัดซ้าย (ดึงจากขวามาซ้าย) -> รูปถัดไป
            } else {
                movePrev(); // ปัดขวา (ดึงจากซ้ายมาขวา) -> รูปก่อนหน้า
            }
        }
    }

    updateCarousel(); // รัน Carousel ครั้งแรก

    // === 4. ระบบปุ่มเลือก / ไปหน้าถัดไป ===
    const btnConfirm = document.getElementById('btn-confirm');

    btnConfirm.addEventListener('click', () => {
        const selectedPattern = currentIndex + 1;
        localStorage.setItem('selectedPattern', selectedPattern);

        const mainContainer = document.querySelector('.main-container');
        mainContainer.classList.add('slide-out-left');
        localStorage.setItem('navSource', 'page3');

        setTimeout(() => {
            window.location.href = '../page-4/index.html'; 
        }, 500);
    });
});