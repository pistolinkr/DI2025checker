// Konfigurasi EmailJS
// Memuat variabel lingkungan dari file .env
let EMAILJS_CONFIG = {
    PUBLIC_KEY: 'your_emailjs_public_key_here',
    SERVICE_ID: 'your_emailjs_service_id_here',
    TEMPLATE_ID: 'your_emailjs_template_id_here'
};

// Memuat variabel lingkungan dari file .env
async function loadEnvConfig() {
    try {
        const response = await fetch('../.env');
        const envText = await response.text();
        
        // Menganalisis file .env
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
        
        // Periksa apakah konfigurasi lengkap
        if (EMAILJS_CONFIG.PUBLIC_KEY === 'your_emailjs_public_key_here') {
            console.warn('⚠️ Konfigurasi EmailJS diperlukan. Silakan ganti dengan nilai asli di file .env.');
        } else {
            console.log('✅ Konfigurasi EmailJS telah dimuat.');
        }
    } catch (error) {
        console.warn('⚠️ Tidak dapat membaca file .env. Menggunakan nilai default.');
        console.warn('⚠️ Konfigurasi EmailJS diperlukan. Silakan ganti dengan nilai asli di file .env.');
    }
}

// Memuat variabel lingkungan saat halaman dimuat
loadEnvConfig();