// EmailJS 설정
// 루트 .env 파일에서 환경 변수 로드
let EMAILJS_CONFIG = {
    PUBLIC_KEY: 'your_emailjs_public_key_here',
    SERVICE_ID: 'your_emailjs_service_id_here',
    TEMPLATE_ID: 'your_emailjs_template_id_here'
};

// .env 파일에서 환경 변수 로드
async function loadEnvConfig() {
    try {
        const response = await fetch('../.env');
        const envText = await response.text();
        
        // .env 파일 파싱
        const envLines = envText.split('\n');
        envLines.forEach(line => {
            if (line.trim() && !line.startsWith('#')) {
                const [key, value] = line.split('=');
                if (key && value) {
                    switch(key.trim()) {
                        case 'EMAILJS_PUBLIC_KEY':
                            EMAILJS_CONFIG.PUBLIC_KEY = value.trim();
                            break;
                        case 'EMAILJS_SERVICE_ID':
                            EMAILJS_CONFIG.SERVICE_ID = value.trim();
                            break;
                        case 'EMAILJS_TEMPLATE_ID':
                            EMAILJS_CONFIG.TEMPLATE_ID = value.trim();
                            break;
                        case 'HF_API_KEY':
                            window.HF_API_KEY = value.trim();
                            break;
                    }
                }
            }
        });
        
        // 설정 완료 여부 확인
        if (EMAILJS_CONFIG.PUBLIC_KEY === 'your_emailjs_public_key_here') {
            console.warn('⚠️ EmailJS 설정이 필요합니다. .env 파일에서 실제 값으로 교체해주세요.');
        } else {
            console.log('✅ EmailJS 설정이 로드되었습니다.');
        }
    } catch (error) {
        console.warn('⚠️ .env 파일을 읽을 수 없습니다. 기본값을 사용합니다.');
        console.warn('⚠️ EmailJS 설정이 필요합니다. .env 파일에서 실제 값으로 교체해주세요.');
    }
}

// 페이지 로드 시 환경 변수 로드
loadEnvConfig();