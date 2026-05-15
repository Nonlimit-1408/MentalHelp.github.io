document.addEventListener('DOMContentLoaded', () => {
    const selectedPattern = localStorage.getItem('selectedPattern') || '1';
    
    const patternConfig = {
        '1': { ratio: 4 / 3, shape: 'rect' },     
        '2': { ratio: 1 / 1, shape: 'circle' },   
        '3': { ratio: 4 / 3, shape: 'rect' },     
        '4': { ratio: 4 / 3, shape: 'rect' },     
        '5': { ratio: 3 / 4, shape: 'rect' }      
    };
    const currentConfig = patternConfig[selectedPattern];

    const uploadZone = document.getElementById('upload-zone');
    const fileInput = document.getElementById('file-input');
    const uploadText = document.getElementById('upload-text');
    const imageWorkspace = document.getElementById('image-workspace');
    
    const btnConfirm = document.getElementById('btn-confirm');
    const btnRetake = document.getElementById('btn-retake');

    const cropModal = document.getElementById('crop-modal');
    const imageToCrop = document.getElementById('image-to-crop');
    const btnApplyCrop = document.getElementById('btn-apply-crop');
    const btnCancelCrop = document.getElementById('btn-cancel-crop');

    let cropper = null;
    let finalCroppedImage = null; 

    uploadZone.addEventListener('click', () => {
        fileInput.click();
    });

    btnRetake.addEventListener('click', () => {
        fileInput.click(); 
    });

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                imageToCrop.src = event.target.result;
                cropModal.style.display = 'flex'; 

                if (cropper) { cropper.destroy(); }
                
                cropper = new Cropper(imageToCrop, {
                    aspectRatio: currentConfig.ratio,
                    viewMode: 1, 
                    dragMode: 'move',
                    background: false,
                    autoCropArea: 1, 
                    ready() {
                        if (currentConfig.shape === 'circle') {
                            document.querySelector('.cropper-view-box').classList.add('circle-crop');
                            document.querySelector('.cropper-face').classList.add('circle-crop');
                        }
                    }
                });
                
                fileInput.value = ''; 
            };
            reader.readAsDataURL(file);
        }
    });

    btnCancelCrop.addEventListener('click', () => {
        cropModal.style.display = 'none';
        if (cropper) {
            cropper.destroy();
            cropper = null;
        }
    });

    btnApplyCrop.addEventListener('click', () => {
        if (!cropper) return;

        const croppedCanvas = cropper.getCroppedCanvas({
            width: 1080,
            height: 1080 * (1 / currentConfig.ratio)
        });
        
        finalCroppedImage = croppedCanvas.toDataURL('image/png');
        
        imageWorkspace.src = finalCroppedImage;
        imageWorkspace.style.display = 'block';
        uploadText.style.display = 'none'; 
        
        /* 🌟 UX FIX (ฉบับคุณ): เอาโค้ดที่ลบพื้นหลังและเส้นประออกไป เพื่อให้มันคงกรอบสีขาวและเส้นประสีน้ำตาลไว้เป็นกรอบรูปสวยๆ */
        
        cropModal.style.display = 'none';
        btnConfirm.disabled = false;
        btnRetake.disabled = false;
        
        cropper.destroy();
        cropper = null;
    });

    btnConfirm.addEventListener('click', () => {
        if (!finalCroppedImage) return;

        localStorage.setItem('userCroppedImage', finalCroppedImage);

        const mainContainer = document.querySelector('.main-container');
        mainContainer.classList.add('slide-out-left');
        
        setTimeout(() => {
            window.location.href = '../page-5/index.html'; 
        }, 500);
    });
});