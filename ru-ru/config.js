// Конфигурация EmailJS
// Загрузка переменных окружения из файла .env
let EMAILJS_CONFIG = {
    PUBLIC_KEY: 'your_emailjs_public_key_here',
    SERVICE_ID: 'your_emailjs_service_id_here',
    TEMPLATE_ID: 'your_emailjs_template_id_here'
};

// Загрузка переменных окружения из файла .env
async function loadEnvConfig() {
    try {
        const response = await fetch('../.env');
        const envText = await response.text();
        
        // Анализ файла .env
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
        
        // Проверить, завершена ли конфигурация
        if (EMAILJS_CONFIG.PUBLIC_KEY === 'your_emailjs_public_key_here') {
            console.warn('⚠️ Требуется конфигурация EmailJS. Пожалуйста, замените на реальные значения в файле .env.');
        } else {
            console.log('✅ Конфигурация EmailJS загружена.');
        }
    } catch (error) {
        console.warn('⚠️ Невозможно прочитать файл .env. Используются значения по умолчанию.');
        console.warn('⚠️ Требуется конфигурация EmailJS. Пожалуйста, замените на реальные значения в файле .env.');
    }
}

// Загрузка переменных окружения при загрузке страницы
loadEnvConfig();