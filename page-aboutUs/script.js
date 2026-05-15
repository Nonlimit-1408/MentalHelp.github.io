document.addEventListener('DOMContentLoaded', () => {
    const btnBack = document.querySelector('.btn-back');

    if (btnBack) {
        btnBack.addEventListener('click', () => {
            // ดึง URL ของหน้าก่อนหน้า
            const prevPage = document.referrer;

            /**
             * ตรวจสอบเส้นทาง:
             * 1. มีข้อมูลหน้าก่อนหน้า (prevPage)
             * 2. มาจากหน้าในโปรเจกต์ (มีคำว่า 'page-' ใน URL)
             * 3. ไม่ใช่หน้าตัวเอง (ป้องกันลูปเวลา Refresh)
             */
            if (prevPage && prevPage.includes('page-') && !prevPage.includes('page-aboutUs')) {
                window.location.href = prevPage;
            } else {
                // ถ้าไม่พบประวัติการเข้าชม ให้กลับไปหน้า 1 เป็นค่าเริ่มต้น
                window.location.href = '../page-1/index.html';
            }
        });
    }
});