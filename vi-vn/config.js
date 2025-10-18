// Cấu hình EmailJS
// Tải biến môi trường từ file .env
let EMAILJS_CONFIG = {
    PUBLIC_KEY: 'your_emailjs_public_key_here',
    SERVICE_ID: 'your_emailjs_service_id_here',
    TEMPLATE_ID: 'your_emailjs_template_id_here'
};

// Tải biến môi trường từ file .env
async function loadEnvConfig() {
    try {
        const response = await fetch('../.env');
        const envText = await response.text();
        
        // Phân tích file .env
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
        
        // Kiểm tra xem cấu hình có hoàn chỉnh không
        if (EMAILJS_CONFIG.PUBLIC_KEY === 'your_emailjs_public_key_here') {
            console.warn('⚠️ Cần cấu hình EmailJS. Vui lòng thay thế bằng giá trị thực trong file .env.');
        } else {
            console.log('✅ Cấu hình EmailJS đã được tải.');
        }
    } catch (error) {
        console.warn('⚠️ Không thể đọc file .env. Sử dụng giá trị mặc định.');
        console.warn('⚠️ Cần cấu hình EmailJS. Vui lòng thay thế bằng giá trị thực trong file .env.');
    }
}

// Tải biến môi trường khi tải trang
loadEnvConfig();