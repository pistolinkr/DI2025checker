// Configurazione EmailJS
// Carica variabili d'ambiente dal file .env
let EMAILJS_CONFIG = {
    PUBLIC_KEY: 'your_emailjs_public_key_here',
    SERVICE_ID: 'your_emailjs_service_id_here',
    TEMPLATE_ID: 'your_emailjs_template_id_here'
};

// Carica variabili d'ambiente dal file .env
async function loadEnvConfig() {
    try {
        const response = await fetch('../.env');
        const envText = await response.text();
        
        // Analizza file .env
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
        
        // Verifica se la configurazione è completa
        if (EMAILJS_CONFIG.PUBLIC_KEY === 'your_emailjs_public_key_here') {
            console.warn('⚠️ È richiesta la configurazione EmailJS. Si prega di sostituire con valori reali nel file .env.');
        } else {
            console.log('✅ La configurazione EmailJS è stata caricata.');
        }
    } catch (error) {
        console.warn('⚠️ Impossibile leggere il file .env. Utilizzo dei valori predefiniti.');
        console.warn('⚠️ È richiesta la configurazione EmailJS. Si prega di sostituire con valori reali nel file .env.');
    }
}

// Carica variabili d'ambiente al caricamento della pagina
loadEnvConfig();