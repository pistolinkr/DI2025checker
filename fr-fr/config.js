// Configuration EmailJS
// Charger les variables d'environnement depuis le fichier .env racine
let EMAILJS_CONFIG = {
    PUBLIC_KEY: 'your_emailjs_public_key_here',
    SERVICE_ID: 'your_emailjs_service_id_here',
    TEMPLATE_ID: 'your_emailjs_template_id_here'
};

// Charger les variables d'environnement depuis le fichier .env racine
async function loadEnvConfig() {
    try {
        const response = await fetch('../.env');
        const envText = await response.text();
        
        // Analyser le fichier .env
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
        
        // Vérifier si la configuration est complète
        if (EMAILJS_CONFIG.PUBLIC_KEY === 'your_emailjs_public_key_here') {
            console.warn('⚠️ Configuration EmailJS requise. Veuillez remplacer par des valeurs réelles dans le fichier .env.');
        } else {
            console.log('✅ Configuration EmailJS chargée.');
        }
    } catch (error) {
        console.warn('⚠️ Impossible de lire le fichier .env. Utilisation des valeurs par défaut.');
        console.warn('⚠️ Configuration EmailJS requise. Veuillez remplacer par des valeurs réelles dans le fichier .env.');
    }
}

// Charger les variables d'environnement au chargement de la page
loadEnvConfig();