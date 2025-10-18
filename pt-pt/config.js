// Configuração EmailJS
// Carregar variáveis de ambiente do arquivo .env raiz
let EMAILJS_CONFIG = {
    PUBLIC_KEY: 'your_emailjs_public_key_here',
    SERVICE_ID: 'your_emailjs_service_id_here',
    TEMPLATE_ID: 'your_emailjs_template_id_here'
};

// Carregar variáveis de ambiente do arquivo .env raiz
async function loadEnvConfig() {
    try {
        const response = await fetch('../.env');
        const envText = await response.text();
        
        // Analisar arquivo .env
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
        
        // Verificar se a configuração está completa
        if (EMAILJS_CONFIG.PUBLIC_KEY === 'your_emailjs_public_key_here') {
            console.warn('⚠️ Configuração EmailJS necessária. Por favor, substitua por valores reais no arquivo .env.');
        } else {
            console.log('✅ Configuração EmailJS foi carregada.');
        }
    } catch (error) {
        console.warn('⚠️ Não é possível ler o arquivo .env. Usando valores padrão.');
        console.warn('⚠️ Configuração EmailJS necessária. Por favor, substitua por valores reais no arquivo .env.');
    }
}

// Carregar variáveis de ambiente ao carregar a página
loadEnvConfig();