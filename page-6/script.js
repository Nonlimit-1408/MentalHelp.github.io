document.addEventListener('DOMContentLoaded', () => {
    // 1. รอ 5 วินาที
    setTimeout(() => {
        // 2. เคลียร์ข้อมูลชั่วคราวเพื่อให้เริ่มเล่นใหม่ได้แบบคลีนๆ
        localStorage.removeItem('userMood');
        localStorage.removeItem('savedDiary');
        localStorage.removeItem('savedQuote');
        localStorage.removeItem('savedAdvice');
        localStorage.removeItem('selectedPattern');
        
        // 3. วาร์ปกลับไปหน้าแรกสุด
        window.location.href = '../page-1/index.html'; 
    }, 5000);
});