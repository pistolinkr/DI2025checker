// Configuración de EmailJS
// Cargar variables de entorno desde el archivo .env raíz
let EMAILJS_CONFIG = {
    PUBLIC_KEY: 'your_emailjs_public_key_here',
    SERVICE_ID: 'your_emailjs_service_id_here',
    TEMPLATE_ID: 'your_emailjs_template_id_here'
};

// Cargar variables de entorno desde el archivo .env raíz
async function loadEnvConfig() {
    try {
        const response = await fetch('../.env');
        const envText = await response.text();
        
        // Analizar archivo .env
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
        
        // Verificar si la configuración está completa
        if (EMAILJS_CONFIG.PUBLIC_KEY === 'your_emailjs_public_key_here') {
            console.warn('⚠️ Se requiere configuración de EmailJS. Por favor, reemplace con valores reales en el archivo .env.');
        } else {
            console.log('✅ La configuración de EmailJS ha sido cargada.');
        }
    } catch (error) {
        console.warn('⚠️ No se puede leer el archivo .env. Usando valores por defecto.');
        console.warn('⚠️ Se requiere configuración de EmailJS. Por favor, reemplace con valores reales en el archivo .env.');
    }
}

// Cargar variables de entorno al cargar la página
loadEnvConfig();