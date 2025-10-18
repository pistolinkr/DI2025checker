// EmailJS Konfiguration
// Umgebungsvariablen aus .env-Datei laden
let EMAILJS_CONFIG = {
    PUBLIC_KEY: 'your_emailjs_public_key_here',
    SERVICE_ID: 'your_emailjs_service_id_here',
    TEMPLATE_ID: 'your_emailjs_template_id_here'
};

// Umgebungsvariablen aus .env-Datei laden
async function loadEnvConfig() {
    try {
        const response = await fetch('../.env');
        const envText = await response.text();
        
        // .env-Datei analysieren
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
        
        // Prüfen, ob Konfiguration vollständig ist
        if (EMAILJS_CONFIG.PUBLIC_KEY === 'your_emailjs_public_key_here') {
            console.warn('⚠️ EmailJS-Konfiguration erforderlich. Bitte durch echte Werte in der .env-Datei ersetzen.');
        } else {
            console.log('✅ EmailJS-Konfiguration wurde geladen.');
        }
    } catch (error) {
        console.warn('⚠️ Kann .env-Datei nicht lesen. Verwende Standardwerte.');
        console.warn('⚠️ EmailJS-Konfiguration erforderlich. Bitte durch echte Werte in der .env-Datei ersetzen.');
    }
}

// Umgebungsvariablen beim Laden der Seite laden
loadEnvConfig();