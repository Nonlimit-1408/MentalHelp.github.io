window.AudioManager = (() => {
    // =========================================
    // 🗂️ 1. กำหนดรายชื่อไฟล์เสียง
    // =========================================
    const BGM_TRACKS = ['sound/bg/1.mp3', 'sound/bg/2.mp3', 'sound/bg/3.mp3'];
    const SFX_PATH = 'sound/sfx/';
    const SFX_FILES = [
        'click', 'pop', 'woosh-1', 'random', 'woosh-book', 
        'noti-upload', 'noti-preview', 'shutter', 'noti-thanks'
    ];

    // =========================================
    // 🎛️ 2. สร้างห้องอัดเสียงดิจิทัล
    // =========================================
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();
    const bgmGain = audioCtx.createGain();
    const sfxGain = audioCtx.createGain();
    
    bgmGain.connect(audioCtx.destination);
    sfxGain.connect(audioCtx.destination);

    // =========================================
    // 💾 3. โกดังเก็บเสียงและสถานะ
    // =========================================
    const sfxBuffers = {};
    const bgmBuffers = [];
    const activeSfxSources = {}; // 🌟 โกดังเก็บ SFX ที่กำลังเล่นอยู่ (เพื่อสั่งหยุดได้)
    let isUnlocked = false;
    let activeBgmSource = null;
    let currentBgmIndex = parseInt(localStorage.getItem('currentSongIdx')) || 0;

    const loadAudio = async (url) => {
        try {
            const response = await fetch(url);
            const arrayBuffer = await response.arrayBuffer();
            return await audioCtx.decodeAudioData(arrayBuffer);
        } catch (e) {
            console.warn('โหลดเสียงไม่สำเร็จ:', url, e);
            return null;
        }
    };

    SFX_FILES.forEach(async (id) => {
        sfxBuffers[id] = await loadAudio(`${SFX_PATH}${id}.mp3`);
    });

    const loadBGM = async () => {
        for (const url of BGM_TRACKS) {
            const buffer = await loadAudio(url);
            if (buffer) bgmBuffers.push(buffer);
        }
    };
    loadBGM();

    // =========================================
    // 🎵 4. ฟังก์ชันควบคุมเสียง
    // =========================================
    const updateVolumes = () => {
        const musicVol = parseInt(localStorage.getItem('musicVolume') ?? '50') / 100;
        const sfxVol = parseInt(localStorage.getItem('sfxVolume') ?? '50') / 100;
        bgmGain.gain.value = musicVol;
        sfxGain.gain.value = sfxVol;
    };
    updateVolumes();

    // 🌟 แก้ไขให้รองรับการเล่นแบบวนลูป
    const playSFX = (id, loop = false) => {
        if (!isUnlocked || !sfxBuffers[id]) return;
        
        // ถ้ามีเสียงเก่ากำลังเล่นอยู่ให้หยุดก่อน (กันเสียงซ้อน)
        if (activeSfxSources[id]) {
            activeSfxSources[id].stop();
            delete activeSfxSources[id];
        }

        const source = audioCtx.createBufferSource();
        source.buffer = sfxBuffers[id];
        source.loop = loop; // สั่งเปิดระบบวนลูป
        source.connect(sfxGain);
        source.start();

        activeSfxSources[id] = source; // เก็บประวัติไว้ว่ามีเสียงนี้กำลังเล่นอยู่

        // ถ้าไม่ได้วนลูป พอเพลงจบให้ลบออกจาก memory
        if (!loop) {
            source.onended = () => { delete activeSfxSources[id]; };
        }
    };

    // 🌟 ฟังก์ชันใหม่: สั่งหยุด SFX ด้วยตัวเอง
    const stopSFX = (id) => {
        if (activeSfxSources[id]) {
            activeSfxSources[id].stop();
            delete activeSfxSources[id];
        }
    };

    const playBGM = () => {
        if (!isUnlocked || bgmBuffers.length === 0) return;
        
        if (activeBgmSource) {
            activeBgmSource.onended = null; 
            activeBgmSource.stop();
        }

        activeBgmSource = audioCtx.createBufferSource();
        activeBgmSource.buffer = bgmBuffers[currentBgmIndex % bgmBuffers.length];
        activeBgmSource.connect(bgmGain);

        activeBgmSource.onended = () => {
            currentBgmIndex = (currentBgmIndex + 1) % bgmBuffers.length;
            localStorage.setItem('currentSongIdx', currentBgmIndex);
            playBGM();
        };

        activeBgmSource.start();
    };

    const changeBGM = (index) => {
        currentBgmIndex = index;
        localStorage.setItem('currentSongIdx', currentBgmIndex);
        if (isUnlocked) playBGM();
    };

    const unlockAudio = () => {
        if (isUnlocked) return;
        audioCtx.resume();
        const buffer = audioCtx.createBuffer(1, 1, 22050);
        const source = audioCtx.createBufferSource();
        source.buffer = buffer;
        source.connect(audioCtx.destination);
        source.start();

        isUnlocked = true;
        playBGM(); 
    };

    // =========================================
    // 🕹️ 5. ส่งออกฟังก์ชัน
    // =========================================
    return {
        unlockAudio: unlockAudio,
        play: playSFX,
        stopSFX: stopSFX, // 🌟 ส่งออกฟังก์ชันสั่งหยุด
        playBGM: playBGM,
        stopBGM: () => { 
            if (activeBgmSource) {
                activeBgmSource.onended = null; 
                activeBgmSource.stop();
                activeBgmSource = null;
            }
        },
        updateVolumes: updateVolumes,
        changeBGM: changeBGM,
        getCurrentTrackIndex: () => currentBgmIndex
    };
})();