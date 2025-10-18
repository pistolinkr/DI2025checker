// EmailJS Configuration
// Load environment variables from .env file
let EMAILJS_CONFIG = {
    PUBLIC_KEY: 'your_emailjs_public_key_here',
    SERVICE_ID: 'your_emailjs_service_id_here',
    TEMPLATE_ID: 'your_emailjs_template_id_here'
};

// Load environment variables from .env file
async function loadEnvConfig() {
    try {
        const response = await fetch('.env');
        const envText = await response.text();
        
        // Parse .env file
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
        
        // Check if configuration is complete
        if (EMAILJS_CONFIG.PUBLIC_KEY === 'your_emailjs_public_key_here') {
            console.warn('⚠️ EmailJS configuration is required. Please replace with actual values in the .env file.');
        } else {
            console.log('✅ EmailJS configuration has been loaded.');
        }
    } catch (error) {
        console.warn('⚠️ Unable to read .env file. Using default values.');
        console.warn('⚠️ EmailJS configuration is required. Please replace with actual values in the .env file.');
    }
}

// Load environment variables on page load
loadEnvConfig();

