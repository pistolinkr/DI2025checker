// EmailJS 配置
// 从根目录 .env 文件加载环境变量
let EMAILJS_CONFIG = {
    PUBLIC_KEY: 'your_emailjs_public_key_here',
    SERVICE_ID: 'your_emailjs_service_id_here',
    TEMPLATE_ID: 'your_emailjs_template_id_here'
};

// 从根目录 .env 文件加载环境变量
async function loadEnvConfig() {
    try {
        const response = await fetch('../.env');
        const envText = await response.text();
        
        // 解析 .env 文件
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
        
        // 检查配置是否完整
        if (EMAILJS_CONFIG.PUBLIC_KEY === 'your_emailjs_public_key_here') {
            console.warn('⚠️ 需要 EmailJS 配置。请在 .env 文件中替换为实际值。');
        } else {
            console.log('✅ EmailJS 配置已加载。');
        }
    } catch (error) {
        console.warn('⚠️ 无法读取 .env 文件。使用默认值。');
        console.warn('⚠️ 需要 EmailJS 配置。请在 .env 文件中替换为实际值。');
    }
}

// 页面加载时加载环境变量
loadEnvConfig();