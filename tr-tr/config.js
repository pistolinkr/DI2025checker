// EmailJS Yapılandırması
// Kök .env dosyasından ortam değişkenlerini yükle
let EMAILJS_CONFIG = {
    PUBLIC_KEY: 'your_emailjs_public_key_here',
    SERVICE_ID: 'your_emailjs_service_id_here',
    TEMPLATE_ID: 'your_emailjs_template_id_here'
};

// Kök .env dosyasından ortam değişkenlerini yükle
async function loadEnvConfig() {
    try {
        const response = await fetch('../.env');
        const envText = await response.text();
        
        // .env dosyasını analiz et
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
                    }
                }
            }
        });
        
        // Yapılandırmanın tamamlanıp tamamlanmadığını kontrol et
        if (EMAILJS_CONFIG.PUBLIC_KEY === 'your_emailjs_public_key_here') {
            console.warn('⚠️ EmailJS yapılandırması gerekli. Lütfen .env dosyasında gerçek değerlerle değiştirin.');
        } else {
            console.log('✅ EmailJS yapılandırması yüklendi.');
        }
    } catch (error) {
        console.warn('⚠️ .env dosyası okunamıyor. Varsayılan değerler kullanılıyor.');
        console.warn('⚠️ EmailJS yapılandırması gerekli. Lütfen .env dosyasında gerçek değerlerle değiştirin.');
    }
}

// Sayfa yüklendiğinde ortam değişkenlerini yükle
loadEnvConfig();