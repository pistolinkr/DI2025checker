// EmailJS कॉन्फ़िगरेशन
// रूट .env फ़ाइल से पर्यावरण चर लोड करें
let EMAILJS_CONFIG = {
    PUBLIC_KEY: 'your_emailjs_public_key_here',
    SERVICE_ID: 'your_emailjs_service_id_here',
    TEMPLATE_ID: 'your_emailjs_template_id_here'
};

// रूट .env फ़ाइल से पर्यावरण चर लोड करें
async function loadEnvConfig() {
    try {
        const response = await fetch('../.env');
        const envText = await response.text();
        
        // .env फ़ाइल का विश्लेषण करें
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
        
        // जांचें कि कॉन्फ़िगरेशन पूर्ण है
        if (EMAILJS_CONFIG.PUBLIC_KEY === 'your_emailjs_public_key_here') {
            console.warn('⚠️ EmailJS कॉन्फ़िगरेशन आवश्यक है। कृपया .env फ़ाइल में वास्तविक मानों के साथ प्रतिस्थापित करें।');
        } else {
            console.log('✅ EmailJS कॉन्फ़िगरेशन लोड हो गया है।');
        }
    } catch (error) {
        console.warn('⚠️ .env फ़ाइल पढ़ने में असमर्थ। डिफ़ॉल्ट मानों का उपयोग कर रहे हैं।');
        console.warn('⚠️ EmailJS कॉन्फ़िगरेशन आवश्यक है। कृपया .env फ़ाइल में वास्तविक मानों के साथ प्रतिस्थापित करें।');
    }
}

// पेज लोड होने पर पर्यावरण चर लोड करें
loadEnvConfig();