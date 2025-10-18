// إعدادات EmailJS
// تحميل متغيرات البيئة من ملف .env الجذر
let EMAILJS_CONFIG = {
    PUBLIC_KEY: 'your_emailjs_public_key_here',
    SERVICE_ID: 'your_emailjs_service_id_here',
    TEMPLATE_ID: 'your_emailjs_template_id_here'
};

// تحميل متغيرات البيئة من ملف .env الجذر
async function loadEnvConfig() {
    try {
        const response = await fetch('../.env');
        const envText = await response.text();
        
        // تحليل ملف .env
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
        
        // التحقق من اكتمال الإعدادات
        if (EMAILJS_CONFIG.PUBLIC_KEY === 'your_emailjs_public_key_here') {
            console.warn('⚠️ إعدادات EmailJS مطلوبة. يرجى استبدالها بقيم حقيقية في ملف .env.');
        } else {
            console.log('✅ تم تحميل إعدادات EmailJS.');
        }
    } catch (error) {
        console.warn('⚠️ لا يمكن قراءة ملف .env. استخدام القيم الافتراضية.');
        console.warn('⚠️ إعدادات EmailJS مطلوبة. يرجى استبدالها بقيم حقيقية في ملف .env.');
    }
}

// تحميل متغيرات البيئة عند تحميل الصفحة
loadEnvConfig();