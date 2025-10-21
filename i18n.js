// 다국어 번역 시스템 (Internationalization - i18n)

const translations = {
    'en-us': {
        name: 'English',
        flag: '🇺🇸',
        dir: 'ltr',
        drugDatabase: 'FDA OpenFDA API',
        drugDatabaseUrl: 'https://api.fda.gov/drug/',
        
        // 헤더
        pageTitle: 'Drug Interaction Checker',
        pageSubtitle: 'Check the interaction between<br>drugs for safe medication',
        
        // 검색
        searchPlaceholder: 'Search for a drug (e.g., Aspirin)',
        searchButton: 'Search',
        recentSearches: 'Recent Searches',
        
        // 약물 선택
        drug1Placeholder: 'First Drug',
        drug2Placeholder: 'Second Drug',
        checkInteraction: 'Check Interaction',
        
        // 결과
        loading: 'Processing...',
        noResults: 'No results found',
        riskLevel: 'Risk Level',
        mechanism: 'Mechanism',
        recommendations: 'Recommendations',
        emergencySigns: 'Emergency Signs',
        
        // 설정
        settings: 'AI Settings',
        aiProvider: 'AI Service to Use',
        freeAI: 'Free AI Service (Default)',
        autoSelect: 'Auto Select (Available)',
        saveSettings: 'Save',
        cancelSettings: 'Cancel',
        testAPI: 'API Test',
        
        // AI 설정 모달
        aiSettingsTitle: 'AI Analysis Settings',
        aiProviderLabel: 'AI Service to Use',
        freeAIOption: 'Free AI Service (Default)',
        freeAIServiceTitle: 'Free AI Service',
        freeAIServiceDesc: 'This service uses the following free AI APIs:',
        freeAIHelp: 'Free AI service is provided by default. For higher quality analysis, enter your personal API keys.',
        huggingFaceAPI: 'Hugging Face Inference API - Open source models',
        ollamaAPI: 'Ollama API - Local execution models',
        groqAPI: 'Groq API - Fast inference service',
        licenseInfoTitle: 'License Information',
        licenseInfoDesc: 'Free AI service is provided under the following conditions:',
        dailyLimit: 'Daily usage limit: 100 requests',
        responseTimeLimit: 'Response time limit: 30 seconds',
        commercialRestriction: 'Commercial use restrictions',
        dataSecurity: 'Data security: Input data is encrypted during processing',
        openaiAPIKey: 'OpenAI API Key',
        claudeAPIKey: 'Anthropic Claude API Key',
        perplexityAPIKey: 'Perplexity API Key',
        geminiAPIKey: 'Google Gemini API Key',
        getAPIKeyOpenAI: 'Get OpenAI API Key from OpenAI Site',
        getAPIKeyClaude: 'Get Anthropic API Key from Anthropic Console',
        getAPIKeyPerplexity: 'Get Perplexity API Key from Perplexity Settings',
        getAPIKeyGemini: 'Get Gemini API Key from Google AI Studio',
        apiKeyStatus: 'API Key Status',
        
        // 푸터
        disclaimer: 'Important Medical Disclaimer',
        disclaimerText: 'This tool is for educational and informational purposes only. It is not intended as medical advice, diagnosis, or treatment. Always consult with a qualified healthcare professional before making any decisions about medications or medical treatments.',
        similarSites: 'Similar Sites',
        medicalResources: 'Medical Resources',
        contactUs: 'Contact us',
        privacyPolicy: 'Privacy Policy',
        termsOfService: 'Terms of Service',
        dataSources: 'Data Sources',
        copyright: '© 2025 GongSaeng - DIchecker. All rights reserved.',
        
        // 피드백
        feedback: 'Feedback',
        feedbackTitle: 'Send Feedback',
        feedbackName: 'Name',
        feedbackEmail: 'Email',
        feedbackSubject: 'Subject',
        feedbackMessage: 'Message',
        sendFeedback: 'Send',
        
        // 버튼
        export: 'Export',
        share: 'Share',
        close: 'Close',
        scrollToTop: 'Scroll to Top'
    },
    
    'ko-kr': {
        name: '한국어',
        flag: '🇰🇷',
        dir: 'ltr',
        drugDatabase: '식약처 의약품안전나라',
        drugDatabaseUrl: 'https://nedrug.mfds.go.kr/api/',
        
        pageTitle: '약물 상호작용 검사기',
        pageSubtitle: '안전한 복용을 위한 약물 간의<br>상호작용을 확인하세요',
        
        searchPlaceholder: '약물을 검색하세요 (예: 아스피린)',
        searchButton: '검색',
        recentSearches: '최근 검색',
        
        drug1Placeholder: '첫 번째 약물',
        drug2Placeholder: '두 번째 약물',
        checkInteraction: '상호작용 검사하기',
        
        loading: '처리 중...',
        noResults: '검색 결과가 없습니다',
        riskLevel: '위험도',
        mechanism: '메커니즘',
        recommendations: '권장사항',
        emergencySigns: '응급 징후',
        
        settings: 'AI 분석 설정',
        aiProvider: '사용할 AI 서비스',
        freeAI: '무료 AI 서비스 (기본 제공)',
        autoSelect: '자동 선택 (사용 가능한 것)',
        saveSettings: '저장',
        cancelSettings: '취소',
        testAPI: 'API 테스트',
        
        // AI 설정 모달
        aiSettingsTitle: 'AI 분석 설정',
        aiProviderLabel: '사용할 AI 서비스',
        freeAIOption: '무료 AI 서비스 (기본 제공)',
        freeAIServiceTitle: '무료 AI 서비스',
        freeAIServiceDesc: '이 서비스는 다음과 같은 무료 AI API를 사용합니다:',
        freeAIHelp: '무료 AI 서비스를 기본으로 제공합니다. 더 높은 품질의 분석을 원하시면 개인 API 키를 입력하세요.',
        huggingFaceAPI: 'Hugging Face Inference API - 오픈소스 모델',
        ollamaAPI: 'Ollama API - 로컬 실행 모델',
        groqAPI: 'Groq API - 빠른 추론 서비스',
        licenseInfoTitle: '라이센스 정보',
        licenseInfoDesc: '무료 AI 서비스는 다음 조건으로 제공됩니다:',
        dailyLimit: '일일 사용량 제한: 100회',
        responseTimeLimit: '응답 시간 제한: 30초',
        commercialRestriction: '상업적 사용 제한',
        dataSecurity: '데이터 보안: 입력 데이터는 암호화되어 처리됩니다',
        openaiAPIKey: 'OpenAI API 키',
        claudeAPIKey: 'Anthropic Claude API 키',
        perplexityAPIKey: 'Perplexity API 키',
        geminiAPIKey: 'Google Gemini API 키',
        getAPIKeyOpenAI: 'OpenAI 사이트에서 API 키 받기',
        getAPIKeyClaude: 'Anthropic 콘솔에서 API 키 받기',
        getAPIKeyPerplexity: 'Perplexity 설정에서 API 키 받기',
        getAPIKeyGemini: 'Google AI Studio에서 Gemini API 키 받기',
        apiKeyStatus: 'API 키 상태',
        
        disclaimer: '중요한 의료 면책조항',
        disclaimerText: '이 도구는 교육 및 정보 제공 목적으로만 사용됩니다. 의료 조언, 진단 또는 치료를 대체할 수 없습니다. 약물 또는 의료 치료에 대한 결정을 내리기 전에 항상 자격을 갖춘 의료 전문가와 상담하시기 바랍니다.',
        similarSites: '유사 사이트',
        medicalResources: '의료 자료',
        contactUs: '문의하기',
        privacyPolicy: '개인정보처리방침',
        termsOfService: '이용약관',
        dataSources: '데이터 출처',
        copyright: '© 2025 GongSaeng - DIchecker. All rights reserved.',
        
        feedback: '피드백',
        feedbackTitle: '피드백 보내기',
        feedbackName: '이름',
        feedbackEmail: '이메일',
        feedbackSubject: '제목',
        feedbackMessage: '메시지',
        sendFeedback: '전송',
        
        export: '내보내기',
        share: '공유',
        close: '닫기',
        scrollToTop: '맨 위로'
    },
    
    'ja-jp': {
        name: '日本語',
        flag: '🇯🇵',
        dir: 'ltr',
        drugDatabase: 'PMDA 医薬品医療機器情報',
        drugDatabaseUrl: 'https://www.pmda.go.jp/api/',
        
        pageTitle: '薬物相互作用チェッカー',
        pageSubtitle: '安全な服用のための<br>薬物間の相互作用を確認',
        
        searchPlaceholder: '薬を検索 (例: アスピリン)',
        searchButton: '検索',
        recentSearches: '最近の検索',
        
        drug1Placeholder: '最初の薬',
        drug2Placeholder: '2番目の薬',
        checkInteraction: '相互作用をチェック',
        
        loading: '処理中...',
        noResults: '検索結果がありません',
        riskLevel: 'リスクレベル',
        mechanism: 'メカニズム',
        recommendations: '推奨事項',
        emergencySigns: '緊急兆候',
        
        settings: 'AI分析設定',
        aiProvider: '使用するAIサービス',
        freeAI: '無料AIサービス（デフォルト）',
        autoSelect: '自動選択（利用可能）',
        saveSettings: '保存',
        cancelSettings: 'キャンセル',
        testAPI: 'APIテスト',
        
        // AI 設定 モーダル
        aiSettingsTitle: 'AI分析設定',
        aiProviderLabel: '使用するAIサービス',
        freeAIOption: '無料AIサービス（デフォルト）',
        freeAIServiceTitle: '無料AIサービス',
        freeAIServiceDesc: 'このサービスは以下の無料AI APIを使用します:',
        freeAIHelp: '無料AIサービスがデフォルトで提供されます。より高品質な分析をご希望の場合は、個人APIキーを入力してください。',
        huggingFaceAPI: 'Hugging Face Inference API - オープンソースモデル',
        ollamaAPI: 'Ollama API - ローカル実行モデル',
        groqAPI: 'Groq API - 高速推論サービス',
        licenseInfoTitle: 'ライセンス情報',
        licenseInfoDesc: '無料AIサービスは以下の条件で提供されます:',
        dailyLimit: '1日の使用制限: 100回',
        responseTimeLimit: '応答時間制限: 30秒',
        commercialRestriction: '商用利用制限',
        dataSecurity: 'データセキュリティ: 入力データは暗号化されて処理されます',
        openaiAPIKey: 'OpenAI APIキー',
        claudeAPIKey: 'Anthropic Claude APIキー',
        perplexityAPIKey: 'Perplexity APIキー',
        geminiAPIKey: 'Google Gemini APIキー',
        getAPIKeyOpenAI: 'OpenAIサイトからAPIキーを取得',
        getAPIKeyClaude: 'AnthropicコンソールからAPIキーを取得',
        getAPIKeyPerplexity: 'Perplexity設定からAPIキーを取得',
        getAPIKeyGemini: 'Google AI StudioからGemini APIキーを取得',
        apiKeyStatus: 'APIキーのステータス',
        
        disclaimer: '重要な医療免責事項',
        disclaimerText: 'このツールは教育および情報提供のみを目的としています。医療アドバイス、診断、または治療を意図したものではありません。薬や医療処置に関する決定を下す前に、必ず資格のある医療専門家にご相談ください。',
        similarSites: '類似サイト',
        medicalResources: '医療リソース',
        contactUs: 'お問い合わせ',
        privacyPolicy: 'プライバシーポリシー',
        termsOfService: '利用規約',
        dataSources: 'データソース',
        copyright: '© 2025 GongSaeng - DIchecker. All rights reserved.',
        
        feedback: 'フィードバック',
        feedbackTitle: 'フィードバックを送信',
        feedbackName: '名前',
        feedbackEmail: 'メール',
        feedbackSubject: '件名',
        feedbackMessage: 'メッセージ',
        sendFeedback: '送信',
        
        export: 'エクスポート',
        share: '共有',
        close: '閉じる',
        scrollToTop: 'トップへ'
    },
    
    'zh-cn': {
        name: '中文',
        flag: '🇨🇳',
        dir: 'ltr',
        drugDatabase: 'NMPA 国家药品监督管理局',
        drugDatabaseUrl: 'https://www.nmpa.gov.cn/api/',
        
        pageTitle: '药物相互作用检查器',
        pageSubtitle: '检查药物之间的相互作用<br>以确保安全用药',
        
        searchPlaceholder: '搜索药物 (例如: 阿司匹林)',
        searchButton: '搜索',
        recentSearches: '最近搜索',
        
        drug1Placeholder: '第一种药物',
        drug2Placeholder: '第二种药物',
        checkInteraction: '检查相互作用',
        
        loading: '处理中...',
        noResults: '未找到结果',
        riskLevel: '风险等级',
        mechanism: '机制',
        recommendations: '建议',
        emergencySigns: '紧急症状',
        
        settings: 'AI分析设置',
        aiProvider: '使用的AI服务',
        freeAI: '免费AI服务（默认）',
        autoSelect: '自动选择（可用）',
        saveSettings: '保存',
        cancelSettings: '取消',
        testAPI: 'API测试',
        
        // AI 设置 模态框
        aiSettingsTitle: 'AI分析设置',
        aiProviderLabel: '使用的AI服务',
        freeAIOption: '免费AI服务（默认）',
        freeAIServiceTitle: '免费AI服务',
        freeAIServiceDesc: '此服务使用以下免费AI API:',
        freeAIHelp: '默认提供免费AI服务。如需更高质量的分析，请输入您的个人API密钥。',
        huggingFaceAPI: 'Hugging Face Inference API - 开源模型',
        ollamaAPI: 'Ollama API - 本地执行模型',
        groqAPI: 'Groq API - 快速推理服务',
        licenseInfoTitle: '许可信息',
        licenseInfoDesc: '免费AI服务在以下条件下提供:',
        dailyLimit: '每日使用限制: 100次请求',
        responseTimeLimit: '响应时间限制: 30秒',
        commercialRestriction: '商业使用限制',
        dataSecurity: '数据安全: 输入数据在处理期间加密',
        openaiAPIKey: 'OpenAI API密钥',
        claudeAPIKey: 'Anthropic Claude API密钥',
        perplexityAPIKey: 'Perplexity API密钥',
        geminiAPIKey: 'Google Gemini API密钥',
        getAPIKeyOpenAI: '从OpenAI网站获取API密钥',
        getAPIKeyClaude: '从Anthropic控制台获取API密钥',
        getAPIKeyPerplexity: '从Perplexity设置获取API密钥',
        getAPIKeyGemini: '从Google AI Studio获取Gemini API密钥',
        apiKeyStatus: 'API密钥状态',
        
        disclaimer: '重要医疗免责声明',
        disclaimerText: '此工具仅用于教育和信息目的。它不作为医疗建议、诊断或治疗。在做出任何药物或医疗决定之前，请务必咨询合格的医疗专业人员。',
        similarSites: '类似网站',
        medicalResources: '医疗资源',
        contactUs: '联系我们',
        privacyPolicy: '隐私政策',
        termsOfService: '服务条款',
        dataSources: '数据来源',
        copyright: '© 2025 GongSaeng - DIchecker. All rights reserved.',
        
        feedback: '反馈',
        feedbackTitle: '发送反馈',
        feedbackName: '姓名',
        feedbackEmail: '电子邮件',
        feedbackSubject: '主题',
        feedbackMessage: '消息',
        sendFeedback: '发送',
        
        export: '导出',
        share: '分享',
        close: '关闭',
        scrollToTop: '返回顶部'
    },
    
    'es-es': {
        name: 'Español',
        flag: '🇪🇸',
        dir: 'ltr',
        drugDatabase: 'AEMPS Agencia Española de Medicamentos',
        drugDatabaseUrl: 'https://www.aemps.gob.es/api/',
        
        pageTitle: 'Verificador de Interacciones de Medicamentos',
        pageSubtitle: 'Verifica las interacciones entre<br>medicamentos para un uso seguro',
        
        searchPlaceholder: 'Buscar medicamento (ej: Aspirina)',
        searchButton: 'Buscar',
        recentSearches: 'Búsquedas Recientes',
        
        drug1Placeholder: 'Primer Medicamento',
        drug2Placeholder: 'Segundo Medicamento',
        checkInteraction: 'Verificar Interacción',
        
        loading: 'Procesando...',
        noResults: 'No se encontraron resultados',
        riskLevel: 'Nivel de Riesgo',
        mechanism: 'Mecanismo',
        recommendations: 'Recomendaciones',
        emergencySigns: 'Signos de Emergencia',
        
        settings: 'Configuración de IA',
        aiProvider: 'Servicio de IA a usar',
        freeAI: 'Servicio de IA Gratis (Predeterminado)',
        autoSelect: 'Selección Automática (Disponible)',
        saveSettings: 'Guardar',
        cancelSettings: 'Cancelar',
        testAPI: 'Prueba de API',
        
        // Modal de configuración de IA
        aiSettingsTitle: 'Configuración de Análisis de IA',
        aiProviderLabel: 'Servicio de IA a usar',
        freeAIOption: 'Servicio de IA Gratis (Predeterminado)',
        freeAIServiceTitle: 'Servicio de IA Gratis',
        freeAIServiceDesc: 'Este servicio utiliza las siguientes APIs de IA gratuitas:',
        freeAIHelp: 'El servicio de IA gratuito se proporciona de forma predeterminada. Para análisis de mayor calidad, ingrese sus claves API personales.',
        huggingFaceAPI: 'Hugging Face Inference API - Modelos de código abierto',
        ollamaAPI: 'Ollama API - Modelos de ejecución local',
        groqAPI: 'Groq API - Servicio de inferencia rápida',
        licenseInfoTitle: 'Información de Licencia',
        licenseInfoDesc: 'El servicio de IA gratuito se proporciona bajo las siguientes condiciones:',
        dailyLimit: 'Límite de uso diario: 100 solicitudes',
        responseTimeLimit: 'Límite de tiempo de respuesta: 30 segundos',
        commercialRestriction: 'Restricciones de uso comercial',
        dataSecurity: 'Seguridad de datos: Los datos de entrada se cifran durante el procesamiento',
        openaiAPIKey: 'Clave API de OpenAI',
        claudeAPIKey: 'Clave API de Anthropic Claude',
        perplexityAPIKey: 'Clave API de Perplexity',
        geminiAPIKey: 'Clave API de Google Gemini',
        getAPIKeyOpenAI: 'Obtener clave API de OpenAI desde el sitio de OpenAI',
        getAPIKeyClaude: 'Obtener clave API de Anthropic desde la consola de Anthropic',
        getAPIKeyPerplexity: 'Obtener clave API de Perplexity desde la configuración de Perplexity',
        getAPIKeyGemini: 'Obtener clave API de Gemini desde Google AI Studio',
        apiKeyStatus: 'Estado de Clave API',
        
        disclaimer: 'Importante Descargo de Responsabilidad Médica',
        disclaimerText: 'Esta herramienta es solo con fines educativos e informativos. No pretende ser un consejo médico, diagnóstico o tratamiento. Siempre consulte con un profesional de la salud calificado antes de tomar decisiones sobre medicamentos o tratamientos médicos.',
        similarSites: 'Sitios Similares',
        medicalResources: 'Recursos Médicos',
        contactUs: 'Contáctenos',
        privacyPolicy: 'Política de Privacidad',
        termsOfService: 'Términos de Servicio',
        dataSources: 'Fuentes de Datos',
        copyright: '© 2025 GongSaeng - DIchecker. Todos los derechos reservados.',
        
        feedback: 'Comentarios',
        feedbackTitle: 'Enviar Comentarios',
        feedbackName: 'Nombre',
        feedbackEmail: 'Correo Electrónico',
        feedbackSubject: 'Asunto',
        feedbackMessage: 'Mensaje',
        sendFeedback: 'Enviar',
        
        export: 'Exportar',
        share: 'Compartir',
        close: 'Cerrar',
        scrollToTop: 'Volver Arriba'
    },
    
    'it-it': {
        name: 'Italiano',
        flag: '🇮🇹',
        dir: 'ltr',
        drugDatabase: 'AIFA Agenzia Italiana del Farmaco',
        drugDatabaseUrl: 'https://www.aifa.gov.it/api/',
        
        pageTitle: 'Verificatore di Interazioni Farmacologiche',
        pageSubtitle: 'Verifica le interazioni tra<br>farmaci per un uso sicuro',
        
        searchPlaceholder: 'Cerca farmaco (es: Aspirina)',
        searchButton: 'Cerca',
        recentSearches: 'Ricerche Recenti',
        
        drug1Placeholder: 'Primo Farmaco',
        drug2Placeholder: 'Secondo Farmaco',
        checkInteraction: 'Verifica Interazione',
        
        loading: 'Elaborazione...',
        noResults: 'Nessun risultato trovato',
        riskLevel: 'Livello di Rischio',
        mechanism: 'Meccanismo',
        recommendations: 'Raccomandazioni',
        emergencySigns: 'Segni di Emergenza',
        
        settings: 'Impostazioni IA',
        aiProvider: 'Servizio IA da utilizzare',
        freeAI: 'Servizio IA Gratuito (Predefinito)',
        autoSelect: 'Selezione Automatica (Disponibile)',
        saveSettings: 'Salva',
        cancelSettings: 'Annulla',
        testAPI: 'Test API',
        
        // Modale impostazioni IA
        aiSettingsTitle: 'Impostazioni di Analisi IA',
        aiProviderLabel: 'Servizio IA da utilizzare',
        freeAIOption: 'Servizio IA Gratuito (Predefinito)',
        freeAIServiceTitle: 'Servizio IA Gratuito',
        freeAIServiceDesc: 'Questo servizio utilizza le seguenti API IA gratuite:',
        freeAIHelp: 'Il servizio IA gratuito è fornito di default. Per analisi di qualità superiore, inserisci le tue chiavi API personali.',
        huggingFaceAPI: 'Hugging Face Inference API - Modelli open source',
        ollamaAPI: 'Ollama API - Modelli a esecuzione locale',
        groqAPI: 'Groq API - Servizio di inferenza veloce',
        licenseInfoTitle: 'Informazioni sulla Licenza',
        licenseInfoDesc: 'Il servizio IA gratuito è fornito nelle seguenti condizioni:',
        dailyLimit: 'Limite di utilizzo giornaliero: 100 richieste',
        responseTimeLimit: 'Limite di tempo di risposta: 30 secondi',
        commercialRestriction: 'Restrizioni d\'uso commerciale',
        dataSecurity: 'Sicurezza dei dati: I dati di input sono crittografati durante l\'elaborazione',
        openaiAPIKey: 'Chiave API OpenAI',
        claudeAPIKey: 'Chiave API Anthropic Claude',
        perplexityAPIKey: 'Chiave API Perplexity',
        geminiAPIKey: 'Chiave API Google Gemini',
        getAPIKeyOpenAI: 'Ottieni chiave API OpenAI dal sito OpenAI',
        getAPIKeyClaude: 'Ottieni chiave API Anthropic dalla console Anthropic',
        getAPIKeyPerplexity: 'Ottieni chiave API Perplexity dalle impostazioni di Perplexity',
        getAPIKeyGemini: 'Ottieni chiave API Gemini da Google AI Studio',
        apiKeyStatus: 'Stato Chiave API',
        
        disclaimer: 'Importante Dichiarazione di Non Responsabilità Medica',
        disclaimerText: 'Questo strumento è solo a scopo educativo e informativo. Non è inteso come consulenza medica, diagnosi o trattamento. Consultare sempre un professionista sanitario qualificato prima di prendere decisioni su farmaci o trattamenti medici.',
        similarSites: 'Siti Simili',
        medicalResources: 'Risorse Mediche',
        contactUs: 'Contattaci',
        privacyPolicy: 'Informativa sulla Privacy',
        termsOfService: 'Termini di Servizio',
        dataSources: 'Fonti di Dati',
        copyright: '© 2025 GongSaeng - DIchecker. Tutti i diritti riservati.',
        
        feedback: 'Feedback',
        feedbackTitle: 'Invia Feedback',
        feedbackName: 'Nome',
        feedbackEmail: 'Email',
        feedbackSubject: 'Oggetto',
        feedbackMessage: 'Messaggio',
        sendFeedback: 'Invia',
        
        export: 'Esporta',
        share: 'Condividi',
        close: 'Chiudi',
        scrollToTop: 'Torna su'
    },
    
    'fr-fr': {
        name: 'Français',
        flag: '🇫🇷',
        dir: 'ltr',
        drugDatabase: 'ANSM Agence Nationale de Sécurité du Médicament',
        drugDatabaseUrl: 'https://www.ansm.sante.fr/api/',
        
        pageTitle: 'Vérificateur d\'Interactions Médicamenteuses',
        pageSubtitle: 'Vérifiez les interactions entre<br>médicaments pour une utilisation sûre',
        
        searchPlaceholder: 'Rechercher un médicament (ex: Aspirine)',
        searchButton: 'Rechercher',
        recentSearches: 'Recherches Récentes',
        
        drug1Placeholder: 'Premier Médicament',
        drug2Placeholder: 'Deuxième Médicament',
        checkInteraction: 'Vérifier l\'Interaction',
        
        loading: 'Traitement...',
        noResults: 'Aucun résultat trouvé',
        riskLevel: 'Niveau de Risque',
        mechanism: 'Mécanisme',
        recommendations: 'Recommandations',
        emergencySigns: 'Signes d\'Urgence',
        
        settings: 'Paramètres IA',
        aiProvider: 'Service IA à utiliser',
        freeAI: 'Service IA Gratuit (Par Défaut)',
        autoSelect: 'Sélection Automatique (Disponible)',
        saveSettings: 'Enregistrer',
        cancelSettings: 'Annuler',
        testAPI: 'Test API',
        
        // Fenêtre de paramètres IA
        aiSettingsTitle: 'Paramètres d\'Analyse IA',
        aiProviderLabel: 'Service IA à utiliser',
        freeAIOption: 'Service IA Gratuit (Par Défaut)',
        freeAIServiceTitle: 'Service IA Gratuit',
        freeAIServiceDesc: 'Ce service utilise les API IA gratuites suivantes:',
        freeAIHelp: 'Le service IA gratuit est fourni par défaut. Pour une analyse de qualité supérieure, entrez vos clés API personnelles.',
        huggingFaceAPI: 'Hugging Face Inference API - Modèles open source',
        ollamaAPI: 'Ollama API - Modèles d\'exécution locale',
        groqAPI: 'Groq API - Service d\'inférence rapide',
        licenseInfoTitle: 'Informations de Licence',
        licenseInfoDesc: 'Le service IA gratuit est fourni sous les conditions suivantes:',
        dailyLimit: 'Limite d\'utilisation quotidienne: 100 requêtes',
        responseTimeLimit: 'Limite de temps de réponse: 30 secondes',
        commercialRestriction: 'Restrictions d\'utilisation commerciale',
        dataSecurity: 'Sécurité des données: Les données d\'entrée sont cryptées pendant le traitement',
        openaiAPIKey: 'Clé API OpenAI',
        claudeAPIKey: 'Clé API Anthropic Claude',
        perplexityAPIKey: 'Clé API Perplexity',
        geminiAPIKey: 'Clé API Google Gemini',
        getAPIKeyOpenAI: 'Obtenir la clé API OpenAI depuis le site OpenAI',
        getAPIKeyClaude: 'Obtenir la clé API Anthropic depuis la console Anthropic',
        getAPIKeyPerplexity: 'Obtenir la clé API Perplexity depuis les paramètres de Perplexity',
        getAPIKeyGemini: 'Obtenir la clé API Gemini depuis Google AI Studio',
        apiKeyStatus: 'Statut de la Clé API',
        
        disclaimer: 'Important Avertissement Médical',
        disclaimerText: 'Cet outil est à des fins éducatives et informatives uniquement. Il n\'est pas destiné à être un conseil médical, un diagnostic ou un traitement. Consultez toujours un professionnel de la santé qualifié avant de prendre des décisions concernant les médicaments ou les traitements médicaux.',
        similarSites: 'Sites Similaires',
        medicalResources: 'Ressources Médicales',
        contactUs: 'Nous Contacter',
        privacyPolicy: 'Politique de Confidentialité',
        termsOfService: 'Conditions d\'Utilisation',
        dataSources: 'Sources de Données',
        copyright: '© 2025 GongSaeng - DIchecker. Tous droits réservés.',
        
        feedback: 'Commentaires',
        feedbackTitle: 'Envoyer des Commentaires',
        feedbackName: 'Nom',
        feedbackEmail: 'Email',
        feedbackSubject: 'Sujet',
        feedbackMessage: 'Message',
        sendFeedback: 'Envoyer',
        
        export: 'Exporter',
        share: 'Partager',
        close: 'Fermer',
        scrollToTop: 'Retour en Haut'
    },
    
    'de-de': {
        name: 'Deutsch',
        flag: '🇩🇪',
        dir: 'ltr',
        drugDatabase: 'BfArM Bundesinstitut für Arzneimittel',
        drugDatabaseUrl: 'https://www.bfarm.de/api/',
        
        pageTitle: 'Arzneimittelwechselwirkungs-Prüfer',
        pageSubtitle: 'Überprüfen Sie Wechselwirkungen<br>zwischen Medikamenten für sichere Anwendung',
        
        searchPlaceholder: 'Medikament suchen (z.B. Aspirin)',
        searchButton: 'Suchen',
        recentSearches: 'Letzte Suchen',
        
        drug1Placeholder: 'Erstes Medikament',
        drug2Placeholder: 'Zweites Medikament',
        checkInteraction: 'Wechselwirkung Prüfen',
        
        loading: 'Verarbeitung...',
        noResults: 'Keine Ergebnisse gefunden',
        riskLevel: 'Risikostufe',
        mechanism: 'Mechanismus',
        recommendations: 'Empfehlungen',
        emergencySigns: 'Notfallzeichen',
        
        settings: 'KI-Einstellungen',
        aiProvider: 'Zu verwendender KI-Dienst',
        freeAI: 'Kostenloser KI-Dienst (Standard)',
        autoSelect: 'Automatische Auswahl (Verfügbar)',
        saveSettings: 'Speichern',
        cancelSettings: 'Abbrechen',
        testAPI: 'API-Test',
        
        // KI-Einstellungen Modal
        aiSettingsTitle: 'KI-Analyse-Einstellungen',
        aiProviderLabel: 'Zu verwendender KI-Dienst',
        freeAIOption: 'Kostenloser KI-Dienst (Standard)',
        freeAIServiceTitle: 'Kostenloser KI-Dienst',
        freeAIServiceDesc: 'Dieser Dienst verwendet die folgenden kostenlosen KI-APIs:',
        freeAIHelp: 'Der kostenlose KI-Dienst wird standardmäßig bereitgestellt. Für eine höhere Analysequalität geben Sie Ihre persönlichen API-Schlüssel ein.',
        huggingFaceAPI: 'Hugging Face Inference API - Open-Source-Modelle',
        ollamaAPI: 'Ollama API - Lokal ausgeführte Modelle',
        groqAPI: 'Groq API - Schneller Inferenzdienst',
        licenseInfoTitle: 'Lizenzinformationen',
        licenseInfoDesc: 'Der kostenlose KI-Dienst wird unter folgenden Bedingungen bereitgestellt:',
        dailyLimit: 'Tägliches Nutzungslimit: 100 Anfragen',
        responseTimeLimit: 'Antwortzeitlimit: 30 Sekunden',
        commercialRestriction: 'Einschränkungen für kommerzielle Nutzung',
        dataSecurity: 'Datensicherheit: Eingabedaten werden während der Verarbeitung verschlüsselt',
        openaiAPIKey: 'OpenAI API-Schlüssel',
        claudeAPIKey: 'Anthropic Claude API-Schlüssel',
        perplexityAPIKey: 'Perplexity API-Schlüssel',
        geminiAPIKey: 'Google Gemini API-Schlüssel',
        getAPIKeyOpenAI: 'OpenAI API-Schlüssel von der OpenAI-Website erhalten',
        getAPIKeyClaude: 'Anthropic API-Schlüssel von der Anthropic-Konsole erhalten',
        getAPIKeyPerplexity: 'Perplexity API-Schlüssel von den Perplexity-Einstellungen erhalten',
        getAPIKeyGemini: 'Gemini API-Schlüssel von Google AI Studio erhalten',
        apiKeyStatus: 'API-Schlüssel-Status',
        
        disclaimer: 'Wichtiger Medizinischer Haftungsausschluss',
        disclaimerText: 'Dieses Tool dient nur zu Bildungs- und Informationszwecken. Es ist nicht als medizinischer Rat, Diagnose oder Behandlung gedacht. Konsultieren Sie immer einen qualifizierten Arzt, bevor Sie Entscheidungen über Medikamente oder medizinische Behandlungen treffen.',
        similarSites: 'Ähnliche Websites',
        medicalResources: 'Medizinische Ressourcen',
        contactUs: 'Kontaktieren Sie uns',
        privacyPolicy: 'Datenschutzrichtlinie',
        termsOfService: 'Nutzungsbedingungen',
        dataSources: 'Datenquellen',
        copyright: '© 2025 GongSaeng - DIchecker. Alle Rechte vorbehalten.',
        
        feedback: 'Feedback',
        feedbackTitle: 'Feedback Senden',
        feedbackName: 'Name',
        feedbackEmail: 'E-Mail',
        feedbackSubject: 'Betreff',
        feedbackMessage: 'Nachricht',
        sendFeedback: 'Senden',
        
        export: 'Exportieren',
        share: 'Teilen',
        close: 'Schließen',
        scrollToTop: 'Nach Oben'
    },
    
    'pt-pt': {
        name: 'Português',
        flag: '🇵🇹',
        dir: 'ltr',
        drugDatabase: 'INFARMED Autoridade Nacional do Medicamento',
        drugDatabaseUrl: 'https://www.infarmed.pt/api/',
        
        pageTitle: 'Verificador de Interações Medicamentosas',
        pageSubtitle: 'Verifique as interações entre<br>medicamentos para uso seguro',
        
        searchPlaceholder: 'Pesquisar medicamento (ex: Aspirina)',
        searchButton: 'Pesquisar',
        recentSearches: 'Pesquisas Recentes',
        
        drug1Placeholder: 'Primeiro Medicamento',
        drug2Placeholder: 'Segundo Medicamento',
        checkInteraction: 'Verificar Interação',
        
        loading: 'Processando...',
        noResults: 'Nenhum resultado encontrado',
        riskLevel: 'Nível de Risco',
        mechanism: 'Mecanismo',
        recommendations: 'Recomendações',
        emergencySigns: 'Sinais de Emergência',
        
        settings: 'Configurações de IA',
        aiProvider: 'Serviço de IA a usar',
        freeAI: 'Serviço de IA Gratuito (Padrão)',
        autoSelect: 'Seleção Automática (Disponível)',
        saveSettings: 'Salvar',
        cancelSettings: 'Cancelar',
        testAPI: 'Teste de API',
        
        // Modal de configurações de IA
        aiSettingsTitle: 'Configurações de Análise de IA',
        aiProviderLabel: 'Serviço de IA a usar',
        freeAIOption: 'Serviço de IA Gratuito (Padrão)',
        freeAIServiceTitle: 'Serviço de IA Gratuito',
        freeAIServiceDesc: 'Este serviço usa as seguintes APIs de IA gratuitas:',
        freeAIHelp: 'O serviço de IA gratuito é fornecido por padrão. Para análises de maior qualidade, insira suas chaves de API pessoais.',
        huggingFaceAPI: 'Hugging Face Inference API - Modelos de código aberto',
        ollamaAPI: 'Ollama API - Modelos de execução local',
        groqAPI: 'Groq API - Serviço de inferência rápida',
        licenseInfoTitle: 'Informações de Licença',
        licenseInfoDesc: 'O serviço de IA gratuito é fornecido nas seguintes condições:',
        dailyLimit: 'Limite de uso diário: 100 solicitações',
        responseTimeLimit: 'Limite de tempo de resposta: 30 segundos',
        commercialRestriction: 'Restrições de uso comercial',
        dataSecurity: 'Segurança de dados: Os dados de entrada são criptografados durante o processamento',
        openaiAPIKey: 'Chave API OpenAI',
        claudeAPIKey: 'Chave API Anthropic Claude',
        perplexityAPIKey: 'Chave API Perplexity',
        geminiAPIKey: 'Chave API Google Gemini',
        getAPIKeyOpenAI: 'Obter chave API OpenAI do site OpenAI',
        getAPIKeyClaude: 'Obter chave API Anthropic do console Anthropic',
        getAPIKeyPerplexity: 'Obter chave API Perplexity das configurações do Perplexity',
        getAPIKeyGemini: 'Obter chave API Gemini do Google AI Studio',
        apiKeyStatus: 'Status da Chave API',
        
        disclaimer: 'Importante Aviso Médico',
        disclaimerText: 'Esta ferramenta é apenas para fins educacionais e informativos. Não se destina a ser aconselhamento médico, diagnóstico ou tratamento. Sempre consulte um profissional de saúde qualificado antes de tomar decisões sobre medicamentos ou tratamentos médicos.',
        similarSites: 'Sites Semelhantes',
        medicalResources: 'Recursos Médicos',
        contactUs: 'Contate-nos',
        privacyPolicy: 'Política de Privacidade',
        termsOfService: 'Termos de Serviço',
        dataSources: 'Fontes de Dados',
        copyright: '© 2025 GongSaeng - DIchecker. Todos os direitos reservados.',
        
        feedback: 'Feedback',
        feedbackTitle: 'Enviar Feedback',
        feedbackName: 'Nome',
        feedbackEmail: 'Email',
        feedbackSubject: 'Assunto',
        feedbackMessage: 'Mensagem',
        sendFeedback: 'Enviar',
        
        export: 'Exportar',
        share: 'Compartilhar',
        close: 'Fechar',
        scrollToTop: 'Voltar ao Topo'
    },
    
    'ar-sa': {
        name: 'العربية',
        flag: '🇸🇦',
        dir: 'rtl',
        drugDatabase: 'SFDA الهيئة العامة للغذاء والدواء',
        drugDatabaseUrl: 'https://www.sfda.gov.sa/api/',
        
        pageTitle: 'فاحص التفاعلات الدوائية',
        pageSubtitle: 'تحقق من التفاعلات بين<br>الأدوية للاستخدام الآمن',
        
        searchPlaceholder: 'ابحث عن دواء (مثال: الأسبرين)',
        searchButton: 'بحث',
        recentSearches: 'عمليات البحث الأخيرة',
        
        drug1Placeholder: 'الدواء الأول',
        drug2Placeholder: 'الدواء الثاني',
        checkInteraction: 'فحص التفاعل',
        
        loading: 'جارٍ المعالجة...',
        noResults: 'لم يتم العثور على نتائج',
        riskLevel: 'مستوى الخطر',
        mechanism: 'الآلية',
        recommendations: 'التوصيات',
        emergencySigns: 'علامات الطوارئ',
        
        settings: 'إعدادات الذكاء الاصطناعي',
        aiProvider: 'خدمة الذكاء الاصطناعي المستخدمة',
        freeAI: 'خدمة الذكاء الاصطناعي المجانية (افتراضي)',
        autoSelect: 'اختيار تلقائي (متاح)',
        saveSettings: 'حفظ',
        cancelSettings: 'إلغاء',
        testAPI: 'اختبار API',
        
        // نافذة إعدادات الذكاء الاصطناعي
        aiSettingsTitle: 'إعدادات تحليل الذكاء الاصطناعي',
        aiProviderLabel: 'خدمة الذكاء الاصطناعي المستخدمة',
        freeAIOption: 'خدمة الذكاء الاصطناعي المجانية (افتراضي)',
        freeAIServiceTitle: 'خدمة الذكاء الاصطناعي المجانية',
        freeAIServiceDesc: 'تستخدم هذه الخدمة واجهات برمجة التطبيقات المجانية التالية للذكاء الاصطناعي:',
        freeAIHelp: 'يتم توفير خدمة الذكاء الاصطناعي المجانية بشكل افتراضي. لتحليل عالي الجودة، أدخل مفاتيح API الشخصية الخاصة بك.',
        huggingFaceAPI: 'Hugging Face Inference API - نماذج مفتوحة المصدر',
        ollamaAPI: 'Ollama API - نماذج التنفيذ المحلية',
        groqAPI: 'Groq API - خدمة الاستدلال السريع',
        licenseInfoTitle: 'معلومات الترخيص',
        licenseInfoDesc: 'يتم توفير خدمة الذكاء الاصطناعي المجانية بالشروط التالية:',
        dailyLimit: 'حد الاستخدام اليومي: 100 طلب',
        responseTimeLimit: 'حد وقت الاستجابة: 30 ثانية',
        commercialRestriction: 'قيود الاستخدام التجاري',
        dataSecurity: 'أمان البيانات: يتم تشفير بيانات الإدخال أثناء المعالجة',
        openaiAPIKey: 'مفتاح API OpenAI',
        claudeAPIKey: 'مفتاح API Anthropic Claude',
        perplexityAPIKey: 'مفتاح API Perplexity',
        geminiAPIKey: 'مفتاح API Google Gemini',
        getAPIKeyOpenAI: 'احصل على مفتاح API OpenAI من موقع OpenAI',
        getAPIKeyClaude: 'احصل على مفتاح API Anthropic من وحدة التحكم Anthropic',
        getAPIKeyPerplexity: 'احصل على مفتاح API Perplexity من إعدادات Perplexity',
        getAPIKeyGemini: 'احصل على مفتاح API Gemini من Google AI Studio',
        apiKeyStatus: 'حالة مفتاح API',
        
        disclaimer: 'إخلاء مسؤولية طبية مهم',
        disclaimerText: 'هذه الأداة للأغراض التعليمية والمعلوماتية فقط. وهي ليست مخصصة كنصيحة طبية أو تشخيص أو علاج. استشر دائمًا أخصائي رعاية صحية مؤهل قبل اتخاذ أي قرارات بشأن الأدوية أو العلاجات الطبية.',
        similarSites: 'مواقع مماثلة',
        medicalResources: 'الموارد الطبية',
        contactUs: 'اتصل بنا',
        privacyPolicy: 'سياسة الخصوصية',
        termsOfService: 'شروط الخدمة',
        dataSources: 'مصادر البيانات',
        copyright: '© 2025 GongSaeng - DIchecker. جميع الحقوق محفوظة.',
        
        feedback: 'ملاحظات',
        feedbackTitle: 'إرسال ملاحظات',
        feedbackName: 'الاسم',
        feedbackEmail: 'البريد الإلكتروني',
        feedbackSubject: 'الموضوع',
        feedbackMessage: 'الرسالة',
        sendFeedback: 'إرسال',
        
        export: 'تصدير',
        share: 'مشاركة',
        close: 'إغلاق',
        scrollToTop: 'العودة للأعلى'
    },
    
    'hi-in': {
        name: 'हिन्दी',
        flag: '🇮🇳',
        dir: 'ltr',
        drugDatabase: 'CDSCO भारतीय औषधि नियंत्रक',
        drugDatabaseUrl: 'https://cdsco.gov.in/api/',
        
        pageTitle: 'दवा इंटरैक्शन जांचकर्ता',
        pageSubtitle: 'सुरक्षित उपयोग के लिए<br>दवाओं के बीच इंटरैक्शन जांचें',
        
        searchPlaceholder: 'दवा खोजें (उदा: एस्पिरिन)',
        searchButton: 'खोजें',
        recentSearches: 'हाल की खोजें',
        
        drug1Placeholder: 'पहली दवा',
        drug2Placeholder: 'दूसरी दवा',
        checkInteraction: 'इंटरैक्शन जांचें',
        
        loading: 'प्रोसेस हो रहा है...',
        noResults: 'कोई परिणाम नहीं मिला',
        riskLevel: 'जोखिम स्तर',
        mechanism: 'तंत्र',
        recommendations: 'सिफारिशें',
        emergencySigns: 'आपातकालीन संकेत',
        
        settings: 'AI सेटिंग्स',
        aiProvider: 'उपयोग करने के लिए AI सेवा',
        freeAI: 'मुफ्त AI सेवा (डिफ़ॉल्ट)',
        autoSelect: 'स्वचालित चयन (उपलब्ध)',
        saveSettings: 'सहेजें',
        cancelSettings: 'रद्द करें',
        testAPI: 'API परीक्षण',
        
        // AI सेटिंग्स मोडल
        aiSettingsTitle: 'AI विश्लेषण सेटिंग्स',
        aiProviderLabel: 'उपयोग करने के लिए AI सेवा',
        freeAIOption: 'मुफ्त AI सेवा (डिफ़ॉल्ट)',
        freeAIServiceTitle: 'मुफ्त AI सेवा',
        freeAIServiceDesc: 'यह सेवा निम्नलिखित मुफ्त AI API का उपयोग करती है:',
        freeAIHelp: 'मुफ्त AI सेवा डिफ़ॉल्ट रूप से प्रदान की जाती है। उच्च गुणवत्ता विश्लेषण के लिए, अपनी व्यक्तिगत API कुंजियाँ दर्ज करें।',
        huggingFaceAPI: 'Hugging Face Inference API - ओपन सोर्स मॉडल',
        ollamaAPI: 'Ollama API - स्थानीय निष्पादन मॉडल',
        groqAPI: 'Groq API - तेज़ अनुमान सेवा',
        licenseInfoTitle: 'लाइसेंस जानकारी',
        licenseInfoDesc: 'मुफ्त AI सेवा निम्नलिखित शर्तों के तहत प्रदान की जाती है:',
        dailyLimit: 'दैनिक उपयोग सीमा: 100 अनुरोध',
        responseTimeLimit: 'प्रतिक्रिया समय सीमा: 30 सेकंड',
        commercialRestriction: 'वाणिज्यिक उपयोग प्रतिबंध',
        dataSecurity: 'डेटा सुरक्षा: प्रसंस्करण के दौरान इनपुट डेटा एन्क्रिप्ट किया जाता है',
        openaiAPIKey: 'OpenAI API कुंजी',
        claudeAPIKey: 'Anthropic Claude API कुंजी',
        perplexityAPIKey: 'Perplexity API कुंजी',
        geminiAPIKey: 'Google Gemini API कुंजी',
        getAPIKeyOpenAI: 'OpenAI साइट से OpenAI API कुंजी प्राप्त करें',
        getAPIKeyClaude: 'Anthropic कंसोल से Anthropic API कुंजी प्राप्त करें',
        getAPIKeyPerplexity: 'Perplexity सेटिंग्स से Perplexity API कुंजी प्राप्त करें',
        getAPIKeyGemini: 'Google AI Studio से Gemini API कुंजी प्राप्त करें',
        apiKeyStatus: 'API कुंजी स्थिति',
        
        disclaimer: 'महत्वपूर्ण चिकित्सा अस्वीकरण',
        disclaimerText: 'यह उपकरण केवल शैक्षिक और सूचनात्मक उद्देश्यों के लिए है। यह चिकित्सा सलाह, निदान या उपचार के रूप में नहीं है। दवाओं या चिकित्सा उपचारों के बारे में कोई भी निर्णय लेने से पहले हमेशा एक योग्य स्वास्थ्य पेशेवर से परामर्श करें।',
        similarSites: 'समान साइटें',
        medicalResources: 'चिकित्सा संसाधन',
        contactUs: 'हमसे संपर्क करें',
        privacyPolicy: 'गोपनीयता नीति',
        termsOfService: 'सेवा की शर्तें',
        dataSources: 'डेटा स्रोत',
        copyright: '© 2025 GongSaeng - DIchecker. सर्वाधिकार सुरक्षित।',
        
        feedback: 'प्रतिक्रिया',
        feedbackTitle: 'प्रतिक्रिया भेजें',
        feedbackName: 'नाम',
        feedbackEmail: 'ईमेल',
        feedbackSubject: 'विषय',
        feedbackMessage: 'संदेश',
        sendFeedback: 'भेजें',
        
        export: 'निर्यात',
        share: 'साझा करें',
        close: 'बंद करें',
        scrollToTop: 'शीर्ष पर जाएं'
    },
    
    'ru-ru': {
        name: 'Русский',
        flag: '🇷🇺',
        dir: 'ltr',
        drugDatabase: 'Росздравнадзор',
        drugDatabaseUrl: 'https://roszdravnadzor.gov.ru/api/',
        
        pageTitle: 'Проверка Лекарственных Взаимодействий',
        pageSubtitle: 'Проверьте взаимодействия между<br>лекарствами для безопасного применения',
        
        searchPlaceholder: 'Поиск лекарства (напр: Аспирин)',
        searchButton: 'Поиск',
        recentSearches: 'Недавние Поиски',
        
        drug1Placeholder: 'Первое Лекарство',
        drug2Placeholder: 'Второе Лекарство',
        checkInteraction: 'Проверить Взаимодействие',
        
        loading: 'Обработка...',
        noResults: 'Результаты не найдены',
        riskLevel: 'Уровень Риска',
        mechanism: 'Механизм',
        recommendations: 'Рекомендации',
        emergencySigns: 'Признаки Экстренной Ситуации',
        
        settings: 'Настройки ИИ',
        aiProvider: 'Используемый сервис ИИ',
        freeAI: 'Бесплатный сервис ИИ (по умолчанию)',
        autoSelect: 'Автоматический Выбор (доступно)',
        saveSettings: 'Сохранить',
        cancelSettings: 'Отмена',
        testAPI: 'Тест API',
        
        // Модальное окно настроек ИИ
        aiSettingsTitle: 'Настройки анализа ИИ',
        aiProviderLabel: 'Используемый сервис ИИ',
        freeAIOption: 'Бесплатный сервис ИИ (по умолчанию)',
        freeAIServiceTitle: 'Бесплатный сервис ИИ',
        freeAIServiceDesc: 'Этот сервис использует следующие бесплатные API ИИ:',
        freeAIHelp: 'Бесплатный сервис ИИ предоставляется по умолчанию. Для более качественного анализа введите свои личные ключи API.',
        huggingFaceAPI: 'Hugging Face Inference API - Модели с открытым исходным кодом',
        ollamaAPI: 'Ollama API - Модели локального выполнения',
        groqAPI: 'Groq API - Сервис быстрого вывода',
        licenseInfoTitle: 'Информация о лицензии',
        licenseInfoDesc: 'Бесплатный сервис ИИ предоставляется на следующих условиях:',
        dailyLimit: 'Дневной лимит использования: 100 запросов',
        responseTimeLimit: 'Ограничение времени ответа: 30 секунд',
        commercialRestriction: 'Ограничения коммерческого использования',
        dataSecurity: 'Безопасность данных: Входные данные шифруются во время обработки',
        openaiAPIKey: 'API-ключ OpenAI',
        claudeAPIKey: 'API-ключ Anthropic Claude',
        perplexityAPIKey: 'API-ключ Perplexity',
        geminiAPIKey: 'API-ключ Google Gemini',
        getAPIKeyOpenAI: 'Получить API-ключ OpenAI с сайта OpenAI',
        getAPIKeyClaude: 'Получить API-ключ Anthropic из консоли Anthropic',
        getAPIKeyPerplexity: 'Получить API-ключ Perplexity из настроек Perplexity',
        getAPIKeyGemini: 'Получить API-ключ Gemini из Google AI Studio',
        apiKeyStatus: 'Статус API-ключа',
        
        disclaimer: 'Важный Медицинский Отказ от Ответственности',
        disclaimerText: 'Этот инструмент предназначен только для образовательных и информационных целей. Он не предназначен в качестве медицинской консультации, диагностики или лечения. Всегда консультируйтесь с квалифицированным медицинским работником, прежде чем принимать какие-либо решения о лекарствах или медицинском лечении.',
        similarSites: 'Похожие Сайты',
        medicalResources: 'Медицинские Ресурсы',
        contactUs: 'Свяжитесь с Нами',
        privacyPolicy: 'Политика Конфиденциальности',
        termsOfService: 'Условия Использования',
        dataSources: 'Источники Данных',
        copyright: '© 2025 GongSaeng - DIchecker. Все права защищены.',
        
        feedback: 'Обратная Связь',
        feedbackTitle: 'Отправить Отзыв',
        feedbackName: 'Имя',
        feedbackEmail: 'Эл. почта',
        feedbackSubject: 'Тема',
        feedbackMessage: 'Сообщение',
        sendFeedback: 'Отправить',
        
        export: 'Экспорт',
        share: 'Поделиться',
        close: 'Закрыть',
        scrollToTop: 'Наверх'
    },
    
    'id-id': {
        name: 'Indonesia',
        flag: '🇮🇩',
        dir: 'ltr',
        drugDatabase: 'BPOM Badan Pengawas Obat dan Makanan',
        drugDatabaseUrl: 'https://www.pom.go.id/api/',
        
        pageTitle: 'Pemeriksa Interaksi Obat',
        pageSubtitle: 'Periksa interaksi antara<br>obat untuk penggunaan yang aman',
        
        searchPlaceholder: 'Cari obat (mis: Aspirin)',
        searchButton: 'Cari',
        recentSearches: 'Pencarian Terkini',
        
        drug1Placeholder: 'Obat Pertama',
        drug2Placeholder: 'Obat Kedua',
        checkInteraction: 'Periksa Interaksi',
        
        loading: 'Memproses...',
        noResults: 'Tidak ada hasil ditemukan',
        riskLevel: 'Tingkat Risiko',
        mechanism: 'Mekanisme',
        recommendations: 'Rekomendasi',
        emergencySigns: 'Tanda-tanda Darurat',
        
        settings: 'Pengaturan AI',
        aiProvider: 'Layanan AI yang digunakan',
        freeAI: 'Layanan AI Gratis (Default)',
        autoSelect: 'Pilih Otomatis (Tersedia)',
        saveSettings: 'Simpan',
        cancelSettings: 'Batal',
        testAPI: 'Tes API',
        
        // Modal pengaturan AI
        aiSettingsTitle: 'Pengaturan Analisis AI',
        aiProviderLabel: 'Layanan AI yang digunakan',
        freeAIOption: 'Layanan AI Gratis (Default)',
        freeAIServiceTitle: 'Layanan AI Gratis',
        freeAIServiceDesc: 'Layanan ini menggunakan API AI gratis berikut:',
        freeAIHelp: 'Layanan AI gratis disediakan secara default. Untuk analisis berkualitas lebih tinggi, masukkan kunci API pribadi Anda.',
        huggingFaceAPI: 'Hugging Face Inference API - Model sumber terbuka',
        ollamaAPI: 'Ollama API - Model eksekusi lokal',
        groqAPI: 'Groq API - Layanan inferensi cepat',
        licenseInfoTitle: 'Informasi Lisensi',
        licenseInfoDesc: 'Layanan AI gratis disediakan dengan ketentuan berikut:',
        dailyLimit: 'Batas penggunaan harian: 100 permintaan',
        responseTimeLimit: 'Batas waktu respons: 30 detik',
        commercialRestriction: 'Pembatasan penggunaan komersial',
        dataSecurity: 'Keamanan data: Data input dienkripsi selama pemrosesan',
        openaiAPIKey: 'Kunci API OpenAI',
        claudeAPIKey: 'Kunci API Anthropic Claude',
        perplexityAPIKey: 'Kunci API Perplexity',
        geminiAPIKey: 'Kunci API Google Gemini',
        getAPIKeyOpenAI: 'Dapatkan kunci API OpenAI dari situs OpenAI',
        getAPIKeyClaude: 'Dapatkan kunci API Anthropic dari konsol Anthropic',
        getAPIKeyPerplexity: 'Dapatkan kunci API Perplexity dari pengaturan Perplexity',
        getAPIKeyGemini: 'Dapatkan kunci API Gemini dari Google AI Studio',
        apiKeyStatus: 'Status Kunci API',
        
        disclaimer: 'Penafian Medis Penting',
        disclaimerText: 'Alat ini hanya untuk tujuan pendidikan dan informasi. Ini tidak dimaksudkan sebagai nasihat medis, diagnosis, atau pengobatan. Selalu konsultasikan dengan profesional kesehatan yang berkualitas sebelum membuat keputusan tentang obat atau perawatan medis.',
        similarSites: 'Situs Serupa',
        medicalResources: 'Sumber Daya Medis',
        contactUs: 'Hubungi Kami',
        privacyPolicy: 'Kebijakan Privasi',
        termsOfService: 'Ketentuan Layanan',
        dataSources: 'Sumber Data',
        copyright: '© 2025 GongSaeng - DIchecker. Hak cipta dilindungi.',
        
        feedback: 'Umpan Balik',
        feedbackTitle: 'Kirim Umpan Balik',
        feedbackName: 'Nama',
        feedbackEmail: 'Email',
        feedbackSubject: 'Subjek',
        feedbackMessage: 'Pesan',
        sendFeedback: 'Kirim',
        
        export: 'Ekspor',
        share: 'Bagikan',
        close: 'Tutup',
        scrollToTop: 'Kembali ke Atas'
    },
    
    'vi-vn': {
        name: 'Tiếng Việt',
        flag: '🇻🇳',
        dir: 'ltr',
        drugDatabase: 'Bộ Y tế Việt Nam',
        drugDatabaseUrl: 'https://moh.gov.vn/api/',
        
        pageTitle: 'Kiểm Tra Tương Tác Thuốc',
        pageSubtitle: 'Kiểm tra tương tác giữa<br>các loại thuốc để sử dụng an toàn',
        
        searchPlaceholder: 'Tìm thuốc (ví dụ: Aspirin)',
        searchButton: 'Tìm kiếm',
        recentSearches: 'Tìm kiếm Gần đây',
        
        drug1Placeholder: 'Thuốc Thứ Nhất',
        drug2Placeholder: 'Thuốc Thứ Hai',
        checkInteraction: 'Kiểm Tra Tương Tác',
        
        loading: 'Đang xử lý...',
        noResults: 'Không tìm thấy kết quả',
        riskLevel: 'Mức Độ Rủi Ro',
        mechanism: 'Cơ Chế',
        recommendations: 'Khuyến Nghị',
        emergencySigns: 'Dấu Hiệu Khẩn Cấp',
        
        settings: 'Cài Đặt AI',
        aiProvider: 'Dịch vụ AI sử dụng',
        freeAI: 'Dịch vụ AI Miễn phí (Mặc định)',
        autoSelect: 'Tự Động Chọn (Có sẵn)',
        saveSettings: 'Lưu',
        cancelSettings: 'Hủy',
        testAPI: 'Kiểm Tra API',
        
        // Modal cài đặt AI
        aiSettingsTitle: 'Cài Đặt Phân Tích AI',
        aiProviderLabel: 'Dịch vụ AI sử dụng',
        freeAIOption: 'Dịch vụ AI Miễn phí (Mặc định)',
        freeAIServiceTitle: 'Dịch vụ AI Miễn phí',
        freeAIServiceDesc: 'Dịch vụ này sử dụng các API AI miễn phí sau:',
        freeAIHelp: 'Dịch vụ AI miễn phí được cung cấp theo mặc định. Để phân tích chất lượng cao hơn, nhập khóa API cá nhân của bạn.',
        huggingFaceAPI: 'Hugging Face Inference API - Mô hình nguồn mở',
        ollamaAPI: 'Ollama API - Mô hình thực thi cục bộ',
        groqAPI: 'Groq API - Dịch vụ suy luận nhanh',
        licenseInfoTitle: 'Thông Tin Giấy Phép',
        licenseInfoDesc: 'Dịch vụ AI miễn phí được cung cấp theo các điều kiện sau:',
        dailyLimit: 'Giới hạn sử dụng hàng ngày: 100 yêu cầu',
        responseTimeLimit: 'Giới hạn thời gian phản hồi: 30 giây',
        commercialRestriction: 'Hạn chế sử dụng thương mại',
        dataSecurity: 'Bảo mật dữ liệu: Dữ liệu đầu vào được mã hóa trong quá trình xử lý',
        openaiAPIKey: 'Khóa API OpenAI',
        claudeAPIKey: 'Khóa API Anthropic Claude',
        perplexityAPIKey: 'Khóa API Perplexity',
        geminiAPIKey: 'Khóa API Google Gemini',
        getAPIKeyOpenAI: 'Lấy khóa API OpenAI từ trang web OpenAI',
        getAPIKeyClaude: 'Lấy khóa API Anthropic từ bảng điều khiển Anthropic',
        getAPIKeyPerplexity: 'Lấy khóa API Perplexity từ cài đặt Perplexity',
        getAPIKeyGemini: 'Lấy khóa API Gemini từ Google AI Studio',
        apiKeyStatus: 'Trạng Thái Khóa API',
        
        disclaimer: 'Tuyên Bố Từ Chối Trách Nhiệm Y Tế Quan Trọng',
        disclaimerText: 'Công cụ này chỉ dành cho mục đích giáo dục và thông tin. Nó không nhằm mục đích làm lời khuyên y tế, chẩn đoán hoặc điều trị. Luôn tham khảo ý kiến chuyên gia y tế có trình độ trước khi đưa ra bất kỳ quyết định nào về thuốc hoặc điều trị y tế.',
        similarSites: 'Trang Web Tương Tự',
        medicalResources: 'Tài Nguyên Y Tế',
        contactUs: 'Liên Hệ',
        privacyPolicy: 'Chính Sách Bảo Mật',
        termsOfService: 'Điều Khoản Dịch Vụ',
        dataSources: 'Nguồn Dữ Liệu',
        copyright: '© 2025 GongSaeng - DIchecker. Tất cả quyền được bảo lưu.',
        
        feedback: 'Phản Hồi',
        feedbackTitle: 'Gửi Phản Hồi',
        feedbackName: 'Tên',
        feedbackEmail: 'Email',
        feedbackSubject: 'Chủ Đề',
        feedbackMessage: 'Tin Nhắn',
        sendFeedback: 'Gửi',
        
        export: 'Xuất',
        share: 'Chia Sẻ',
        close: 'Đóng',
        scrollToTop: 'Lên Đầu Trang'
    },
    
    'tr-tr': {
        name: 'Türkçe',
        flag: '🇹🇷',
        dir: 'ltr',
        drugDatabase: 'Türkiye İlaç ve Tıbbi Cihaz Kurumu',
        drugDatabaseUrl: 'https://www.titck.gov.tr/api/',
        
        pageTitle: 'İlaç Etkileşim Denetleyicisi',
        pageSubtitle: 'Güvenli kullanım için<br>ilaçlar arasındaki etkileşimi kontrol edin',
        
        searchPlaceholder: 'İlaç ara (örn: Aspirin)',
        searchButton: 'Ara',
        recentSearches: 'Son Aramalar',
        
        drug1Placeholder: 'Birinci İlaç',
        drug2Placeholder: 'İkinci İlaç',
        checkInteraction: 'Etkileşimi Kontrol Et',
        
        loading: 'İşleniyor...',
        noResults: 'Sonuç bulunamadı',
        riskLevel: 'Risk Seviyesi',
        mechanism: 'Mekanizma',
        recommendations: 'Öneriler',
        emergencySigns: 'Acil Durumlar',
        
        settings: 'AI Ayarları',
        aiProvider: 'Kullanılacak AI Hizmeti',
        freeAI: 'Ücretsiz AI Hizmeti (Varsayılan)',
        autoSelect: 'Otomatik Seçim (Mevcut)',
        saveSettings: 'Kaydet',
        cancelSettings: 'İptal',
        testAPI: 'API Testi',
        
        // AI ayarları modal
        aiSettingsTitle: 'AI Analiz Ayarları',
        aiProviderLabel: 'Kullanılacak AI Hizmeti',
        freeAIOption: 'Ücretsiz AI Hizmeti (Varsayılan)',
        freeAIServiceTitle: 'Ücretsiz AI Hizmeti',
        freeAIServiceDesc: 'Bu hizmet aşağıdaki ücretsiz AI API\'lerini kullanır:',
        freeAIHelp: 'Ücretsiz AI hizmeti varsayılan olarak sağlanır. Daha yüksek kaliteli analiz için kişisel API anahtarlarınızı girin.',
        huggingFaceAPI: 'Hugging Face Inference API - Açık kaynak modelleri',
        ollamaAPI: 'Ollama API - Yerel yürütme modelleri',
        groqAPI: 'Groq API - Hızlı çıkarım hizmeti',
        licenseInfoTitle: 'Lisans Bilgileri',
        licenseInfoDesc: 'Ücretsiz AI hizmeti aşağıdaki koşullar altında sağlanır:',
        dailyLimit: 'Günlük kullanım limiti: 100 istek',
        responseTimeLimit: 'Yanıt süresi limiti: 30 saniye',
        commercialRestriction: 'Ticari kullanım kısıtlamaları',
        dataSecurity: 'Veri güvenliği: Giriş verileri işleme sırasında şifrelenir',
        openaiAPIKey: 'OpenAI API Anahtarı',
        claudeAPIKey: 'Anthropic Claude API Anahtarı',
        perplexityAPIKey: 'Perplexity API Anahtarı',
        geminiAPIKey: 'Google Gemini API Anahtarı',
        getAPIKeyOpenAI: 'OpenAI sitesinden OpenAI API Anahtarı alın',
        getAPIKeyClaude: 'Anthropic konsolundan Anthropic API Anahtarı alın',
        getAPIKeyPerplexity: 'Perplexity ayarlarından Perplexity API Anahtarı alın',
        getAPIKeyGemini: 'Google AI Studio\'dan Gemini API Anahtarı alın',
        apiKeyStatus: 'API Anahtarı Durumu',
        
        disclaimer: 'Önemli Tıbbi Sorumluluk Reddi',
        disclaimerText: 'Bu araç sadece eğitim ve bilgi amaçlıdır. Tıbbi tavsiye, teşhis veya tedavi amaçlı değildir. İlaçlar veya tıbbi tedaviler hakkında herhangi bir karar vermeden önce her zaman kalifiye bir sağlık uzmanına danışın.',
        similarSites: 'Benzer Siteler',
        medicalResources: 'Tıbbi Kaynaklar',
        contactUs: 'Bize Ulaşın',
        privacyPolicy: 'Gizlilik Politikası',
        termsOfService: 'Hizmet Şartları',
        dataSources: 'Veri Kaynakları',
        copyright: '© 2025 GongSaeng - DIchecker. Tüm hakları saklıdır.',
        
        feedback: 'Geri Bildirim',
        feedbackTitle: 'Geri Bildirim Gönder',
        feedbackName: 'Ad',
        feedbackEmail: 'E-posta',
        feedbackSubject: 'Konu',
        feedbackMessage: 'Mesaj',
        sendFeedback: 'Gönder',
        
        export: 'Dışa Aktar',
        share: 'Paylaş',
        close: 'Kapat',
        scrollToTop: 'Başa Dön'
    },
    
    'es-mx': {
        name: 'Español (MX)',
        flag: '🇲🇽',
        dir: 'ltr',
        drugDatabase: 'COFEPRIS Comisión Federal de Protección',
        drugDatabaseUrl: 'https://www.gob.mx/cofepris/api/',
        
        pageTitle: 'Verificador de Interacciones de Medicamentos',
        pageSubtitle: 'Verifica las interacciones entre<br>medicamentos para un uso seguro',
        
        searchPlaceholder: 'Buscar medicamento (ej: Aspirina)',
        searchButton: 'Buscar',
        recentSearches: 'Búsquedas Recientes',
        
        drug1Placeholder: 'Primer Medicamento',
        drug2Placeholder: 'Segundo Medicamento',
        checkInteraction: 'Verificar Interacción',
        
        loading: 'Procesando...',
        noResults: 'No se encontraron resultados',
        riskLevel: 'Nivel de Riesgo',
        mechanism: 'Mecanismo',
        recommendations: 'Recomendaciones',
        emergencySigns: 'Señales de Emergencia',
        
        settings: 'Configuración de IA',
        aiProvider: 'Servicio de IA a usar',
        freeAI: 'Servicio de IA Gratis (Predeterminado)',
        autoSelect: 'Selección Automática (Disponible)',
        saveSettings: 'Guardar',
        cancelSettings: 'Cancelar',
        testAPI: 'Prueba de API',
        
        disclaimer: 'Importante Descargo de Responsabilidad Médica',
        disclaimerText: 'Esta herramienta es solo con fines educativos e informativos. No pretende ser un consejo médico, diagnóstico o tratamiento. Siempre consulte con un profesional de la salud calificado antes de tomar decisiones sobre medicamentos o tratamientos médicos.',
        similarSites: 'Sitios Similares',
        medicalResources: 'Recursos Médicos',
        contactUs: 'Contáctanos',
        privacyPolicy: 'Política de Privacidad',
        termsOfService: 'Términos de Servicio',
        dataSources: 'Fuentes de Datos',
        copyright: '© 2025 GongSaeng - DIchecker. Todos los derechos reservados.',
        
        feedback: 'Comentarios',
        feedbackTitle: 'Enviar Comentarios',
        feedbackName: 'Nombre',
        feedbackEmail: 'Correo Electrónico',
        feedbackSubject: 'Asunto',
        feedbackMessage: 'Mensaje',
        sendFeedback: 'Enviar',
        
        export: 'Exportar',
        share: 'Compartir',
        close: 'Cerrar',
        scrollToTop: 'Volver Arriba'
    }
};

// 국가 코드와 언어 매핑
const countryToLanguage = {
    'US': 'en-us', 'GB': 'en-us', 'CA': 'en-us', 'AU': 'en-us', 'NZ': 'en-us',
    'KR': 'ko-kr',
    'JP': 'ja-jp',
    'CN': 'zh-cn', 'TW': 'zh-cn', 'HK': 'zh-cn',
    'ES': 'es-es',
    'IT': 'it-it',
    'FR': 'fr-fr', 'BE': 'fr-fr', 'CH': 'fr-fr',
    'DE': 'de-de', 'AT': 'de-de',
    'PT': 'pt-pt', 'BR': 'pt-pt',
    'SA': 'ar-sa', 'AE': 'ar-sa', 'EG': 'ar-sa', 'IQ': 'ar-sa',
    'IN': 'hi-in',
    'RU': 'ru-ru',
    'ID': 'id-id',
    'VN': 'vi-vn',
    'TR': 'tr-tr',
    'MX': 'es-mx'
};

// 각 나라의 주요 도시 정보
const majorCities = {
    'US': ['New York', 'Los Angeles', 'Chicago', 'Houston', 'San Francisco', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Charlotte', 'San Jose', 'Indianapolis', 'Seattle', 'Denver', 'Washington', 'Boston', 'El Paso', 'Nashville', 'Detroit', 'Oklahoma City', 'Portland', 'Las Vegas', 'Memphis', 'Louisville', 'Baltimore', 'Milwaukee', 'Albuquerque', 'Tucson', 'Fresno', 'Sacramento', 'Mesa', 'Kansas City', 'Atlanta', 'Long Beach', 'Colorado Springs', 'Raleigh', 'Miami', 'Virginia Beach', 'Omaha', 'Oakland', 'Minneapolis', 'Tulsa', 'Arlington', 'Tampa', 'New Orleans', 'Santa Clara', 'San Jose', 'Fremont', 'Hayward', 'Sunnyvale', 'Santa Ana', 'Anaheim', 'Riverside', 'Stockton', 'Irvine', 'Chula Vista', 'Fremont', 'San Bernardino', 'Modesto', 'Fontana', 'Oxnard', 'Moreno Valley', 'Huntington Beach', 'Glendale', 'Santa Clarita', 'Garden Grove', 'Oceanside', 'Rancho Cucamonga', 'Santa Rosa', 'Ontario', 'Lancaster', 'Elk Grove', 'Corona', 'Palmdale', 'Salinas', 'Pomona', 'Torrance', 'Hayward', 'Escondido', 'Sunnyvale', 'Pasadena', 'Orange', 'Fullerton', 'Thousand Oaks', 'Visalia', 'Simi Valley', 'Concord', 'Roseville', 'Vallejo', 'Santa Clara', 'Victorville', 'El Cajon', 'Berkeley', 'Downey', 'Costa Mesa', 'Inglewood', 'Ventura', 'West Covina', 'Norwalk', 'Carlsbad', 'Fairfield', 'Richmond', 'Murrieta', 'Antioch', 'Temecula', 'Daly City', 'Santa Monica', 'El Monte', 'Clovis', 'Compton', 'Jurupa Valley', 'Vista', 'South Gate', 'Mission Viejo', 'Vacaville', 'Carson', 'Hesperia', 'Santa Barbara', 'Redding', 'Santa Cruz', 'Chico', 'Newport Beach', 'San Leandro', 'Hawthorne', 'Citrus Heights', 'Tracy', 'Alhambra', 'Livermore', 'Buena Park', 'Lakewood', 'Merced', 'Hemet', 'Chino', 'Menifee', 'Lake Forest', 'Napa', 'Redwood City', 'Bellflower', 'Indio', 'Whittier', 'Newman', 'San Marcos', 'Dublin', 'Madera', 'Chino Hills', 'Turlock', 'Baldwin Park', 'Chico', 'Redlands', 'Mountain View', 'Alameda', 'Folsom', 'La Habra', 'San Ramon', 'Pleasanton', 'Union City', 'Perris', 'Manteca', 'Lynwood', 'Apple Valley', 'Redondo Beach', 'Tustin', 'Lake Elsinore', 'Milpitas', 'Colton', 'Yucaipa', 'Pacifica', 'Huntington Park', 'San Rafael', 'La Mesa', 'Arcadia', 'Monrovia', 'Maywood', 'Culver City', 'Martinez', 'San Gabriel', 'Cypress', 'La Mirada', 'Pittsburg', 'Hollister', 'Lomita', 'La Puente', 'Covina', 'Glendora', 'Placentia', 'Calexico', 'Bell Gardens', 'Norco', 'Cudahy', 'San Dimas', 'La Verne', 'Montebello', 'San Fernando', 'South Pasadena', 'La Canada', 'Beverly Hills', 'San Marino', 'Rolling Hills', 'Rolling Hills Estates', 'Hidden Hills', 'Industry', 'Vernon', 'Commerce', 'Cudahy', 'Bell', 'Maywood', 'Huntington Park', 'South Gate', 'Lynwood', 'Compton', 'Carson', 'Gardena', 'Hawthorne', 'Inglewood', 'Westchester', 'Playa del Rey', 'Marina del Rey', 'Venice', 'Santa Monica', 'Pacific Palisades', 'Brentwood', 'Westwood', 'Bel Air', 'Beverly Glen', 'Sherman Oaks', 'Studio City', 'Toluca Lake', 'North Hollywood', 'Valley Village', 'Van Nuys', 'Reseda', 'Tarzana', 'Woodland Hills', 'Canoga Park', 'Chatsworth', 'Northridge', 'Granada Hills', 'Mission Hills', 'Sylmar', 'Pacoima', 'Sun Valley', 'Sunland', 'Tujunga', 'La Crescenta', 'Montrose', 'La Canada Flintridge', 'Altadena', 'Pasadena', 'South Pasadena', 'San Marino', 'Alhambra', 'San Gabriel', 'Monterey Park', 'Rosemead', 'Temple City', 'Arcadia', 'Sierra Madre', 'Duarte', 'Monrovia', 'Bradbury', 'Azusa', 'Glendora', 'San Dimas', 'La Verne', 'Claremont', 'Pomona', 'Diamond Bar', 'Walnut', 'Rowland Heights', 'Hacienda Heights', 'La Puente', 'City of Industry', 'West Covina', 'Covina', 'Irwindale', 'Baldwin Park', 'El Monte', 'South El Monte', 'Temple City', 'Arcadia', 'Sierra Madre', 'Duarte', 'Monrovia', 'Bradbury', 'Azusa', 'Glendora', 'San Dimas', 'La Verne', 'Claremont', 'Pomona', 'Diamond Bar', 'Walnut', 'Rowland Heights', 'Hacienda Heights', 'La Puente', 'City of Industry', 'West Covina', 'Covina', 'Irwindale', 'Baldwin Park', 'El Monte', 'South El Monte'],
    'KR': ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon', 'Gwangju', 'Ulsan', 'Sejong', 'Suwon', 'Yongin', 'Goyang', 'Seongnam', 'Bucheon', 'Ansan', 'Anyang', 'Namyangju', 'Hwaseong', 'Cheongju', 'Jeonju', 'Cheonan', 'Gimhae', 'Jeju', 'Gangneung', 'Wonju', 'Chuncheon', 'Mokpo', 'Yeosu', 'Gunsan', 'Iksan', 'Jeongeup'],
    'JP': ['Tokyo', 'Osaka', 'Yokohama', 'Nagoya', 'Sapporo', 'Fukuoka', 'Kobe', 'Kyoto', 'Kawasaki', 'Saitama', 'Hiroshima', 'Sendai', 'Kitakyushu', 'Chiba', 'Sakai', 'Niigata', 'Hamamatsu', 'Okayama', 'Kumamoto', 'Shizuoka', 'Sagamihara', 'Kagoshima', 'Funabashi', 'Hachioji', 'Matsudo', 'Matsuyama', 'Kashiwa', 'Nishinomiya', 'Kawaguchi', 'Ichikawa'],
    'CN': ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu', 'Hangzhou', 'Wuhan', 'Xi\'an', 'Nanjing', 'Tianjin', 'Suzhou', 'Zhengzhou', 'Changsha', 'Dongguan', 'Qingdao', 'Shenyang', 'Dalian', 'Ningbo', 'Xiamen', 'Fuzhou', 'Hefei', 'Kunming', 'Shijiazhuang', 'Taiyuan', 'Nanning', 'Haikou', 'Guiyang', 'Lanzhou', 'Urumqi', 'Hohhot'],
    'ES': ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza', 'Málaga', 'Murcia', 'Palma', 'Las Palmas', 'Bilbao', 'Alicante', 'Córdoba', 'Valladolid', 'Vigo', 'Gijón', 'Hospitalet', 'A Coruña', 'Vitoria', 'Granada', 'Elche', 'Santa Cruz', 'Oviedo', 'Badalona', 'Cartagena', 'Terrassa', 'Jerez', 'Sabadell', 'Móstoles', 'Alcalá', 'Pamplona'],
    'MX': ['Mexico City', 'Guadalajara', 'Monterrey', 'Puebla', 'Tijuana', 'León', 'Juárez', 'Torreón', 'Querétaro', 'San Luis Potosí', 'Mérida', 'Mexicali', 'Aguascalientes', 'Acapulco', 'Saltillo', 'Hermosillo', 'Morelia', 'Cancún', 'Villahermosa', 'Chihuahua', 'Durango', 'Toluca', 'Cuernavaca', 'Reynosa', 'Tuxtla', 'Culiacán', 'Veracruz', 'Mazatlán', 'Irapuato', 'Nuevo Laredo'],
    'IT': ['Rome', 'Milan', 'Naples', 'Turin', 'Florence', 'Bologna', 'Genoa', 'Bari', 'Catania', 'Venice', 'Verona', 'Messina', 'Padua', 'Trieste', 'Brescia', 'Parma', 'Taranto', 'Prato', 'Reggio', 'Modena', 'Ravenna', 'Livorno', 'Cagliari', 'Foggia', 'Rimini', 'Salerno', 'Ferrara', 'Sassari', 'Monza', 'Bergamo'],
    'FR': ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier', 'Bordeaux', 'Lille', 'Rennes', 'Reims', 'Le Havre', 'Saint-Étienne', 'Toulon', 'Grenoble', 'Dijon', 'Angers', 'Nîmes', 'Villeurbanne', 'Saint-Denis', 'Le Mans', 'Aix-en-Provence', 'Clermont-Ferrand', 'Brest', 'Tours', 'Amiens', 'Limoges', 'Annecy', 'Perpignan'],
    'DE': ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Dortmund', 'Essen', 'Leipzig', 'Bremen', 'Dresden', 'Hannover', 'Nuremberg', 'Duisburg', 'Bochum', 'Wuppertal', 'Bielefeld', 'Bonn', 'Münster', 'Karlsruhe', 'Mannheim', 'Augsburg', 'Wiesbaden', 'Gelsenkirchen', 'Mönchengladbach', 'Braunschweig', 'Chemnitz', 'Kiel', 'Aachen'],
    'PT': ['Lisbon', 'Porto', 'Braga', 'Coimbra', 'Funchal', 'Setúbal', 'Aveiro', 'Évora', 'Faro', 'Leiria', 'Viseu', 'Vila Nova', 'Amadora', 'Almada', 'Barreiro', 'Fafe', 'Guimarães', 'Póvoa', 'Sintra', 'Viana', 'Cascais', 'Loures', 'Oeiras', 'Odivelas', 'Seixal', 'Gondomar', 'Matosinhos', 'Valongo', 'Vila Nova', 'Maia'],
    'SA': ['Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Dammam', 'Khobar', 'Dhahran', 'Taif', 'Buraidah', 'Tabuk', 'Khamis', 'Hail', 'Hafar', 'Jubail', 'Yanbu', 'Abha', 'Najran', 'Sakaka', 'Arar', 'Qatif', 'Al-Kharj', 'Al-Hofuf', 'Al-Mubarraz', 'Al-Qunfudhah', 'Al-Baha', 'Al-Jouf', 'Al-Qurayyat', 'Al-Wajh', 'Al-Ula', 'Al-Dawadmi'],
    'IN': ['New Delhi', 'Mumbai', 'Bangalore', 'Kolkata', 'Chennai', 'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Surat', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam', 'Pimpri', 'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra', 'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Kalyan', 'Vasai', 'Varanasi'],
    'RU': ['Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg', 'Kazan', 'Nizhny Novgorod', 'Chelyabinsk', 'Samara', 'Omsk', 'Rostov-on-Don', 'Ufa', 'Krasnoyarsk', 'Perm', 'Voronezh', 'Volgograd', 'Krasnodar', 'Saratov', 'Tyumen', 'Tolyatti', 'Izhevsk', 'Barnaul', 'Ulyanovsk', 'Irkutsk', 'Vladivostok', 'Yaroslavl', 'Makhachkala', 'Tomsk', 'Orenburg', 'Kemerovo', 'Ryazan'],
    'ID': ['Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Semarang', 'Makassar', 'Palembang', 'Tangerang', 'Depok', 'Bekasi', 'Padang', 'Malang', 'Surakarta', 'Yogyakarta', 'Banjarmasin', 'Pontianak', 'Manado', 'Balikpapan', 'Jambi', 'Denpasar', 'Mataram', 'Kupang', 'Jayapura', 'Manokwari', 'Sorong', 'Ambon', 'Kendari', 'Palu', 'Mamuju', 'Gorontalo'],
    'VN': ['Hanoi', 'Ho Chi Minh', 'Da Nang', 'Hai Phong', 'Can Tho', 'Bien Hoa', 'Hue', 'Nha Trang', 'Buon Ma Thuot', 'Qui Nhon', 'Vung Tau', 'Thai Nguyen', 'Nam Dinh', 'Thanh Hoa', 'Vinh', 'Ha Long', 'Pleiku', 'My Tho', 'Rach Gia', 'Long Xuyen', 'Ca Mau', 'Tra Vinh', 'Soc Trang', 'Bac Lieu', 'Dong Hoi', 'Tam Ky', 'Kon Tum', 'Dong Ha', 'Lao Cai', 'Son La'],
    'TR': ['Istanbul', 'Ankara', 'Izmir', 'Bursa', 'Antalya', 'Adana', 'Konya', 'Gaziantep', 'Mersin', 'Diyarbakir', 'Kayseri', 'Eskisehir', 'Urfa', 'Malatya', 'Erzurum', 'Van', 'Batman', 'Elazig', 'Isparta', 'Trabzon', 'Ordu', 'Afyon', 'Denizli', 'Samsun', 'Kahramanmaras', 'Erzincan', 'Sivas', 'Tokat', 'Zonguldak', 'Balikesir']
};

// 현재 언어
let currentLanguage = 'en-us';

// 언어 감지 함수
async function detectUserLanguage() {
    // 1. URL 파라미터 확인
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang && translations[urlLang]) {
        return urlLang;
    }
    
    // 2. 로컬 스토리지 확인 (위치 기반 감지를 위해 비활성화)
    // const savedLang = localStorage.getItem('preferredLanguage');
    // if (savedLang && translations[savedLang]) {
    //     return savedLang;
    // }
    
    // 3. 위치 기반 언어 감지 (Geolocation API) - 최우선!
    let detectedCountryCode = null;
    try {
        console.log('🌍 Starting location-based language detection...');
        detectedCountryCode = await getCountryFromLocation();
        console.log(`📍 Detected country code: ${detectedCountryCode}`);
        
        if (detectedCountryCode && countryToLanguage[detectedCountryCode]) {
            const detectedLang = countryToLanguage[detectedCountryCode];
            console.log(`✅ Location-based language detected: ${detectedLang} (${detectedCountryCode})`);
            localStorage.setItem('preferredLanguage', detectedLang);
            return detectedLang;
        } else {
            console.log(`⚠️ Country ${detectedCountryCode} not mapped to a supported language`);
        }
    } catch (error) {
        console.log('❌ Geolocation language detection failed:', error);
    }
    
    // 4. 브라우저 언어 설정
    console.log('🌐 Starting browser language detection...');
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.toLowerCase();
    
    console.log(`🌐 Browser language: ${browserLang} -> ${langCode}`);
    
    // 정확한 매칭 확인
    if (translations[langCode]) {
        console.log(`✅ Exact browser language match: ${langCode}`);
        return langCode;
    }
    
    // 영어 특별 처리 (en, en-US, en-GB 등) - 최우선
    if (langCode.startsWith('en')) {
        console.log('🇺🇸 Detected English browser language -> en-us');
        return 'en-us';
    }
    
    // 한국어 특별 처리 (ko, ko-KR 등)
    if (langCode.startsWith('ko')) {
        console.log('🇰🇷 Detected Korean browser language -> ko-kr');
        return 'ko-kr';
    }
    
    // 스페인어 특별 처리 - 멕시코 우선 (es-MX)
    if (langCode === 'es-mx' || langCode === 'es_mx') {
        console.log('🇲🇽 Detected Mexican Spanish browser language -> es-mx');
        return 'es-mx';
    }
    
    // 스페인 스페인어
    if (langCode === 'es-es' || langCode === 'es_es') {
        console.log('🇪🇸 Detected Spanish browser language -> es-es');
        return 'es-es';
    }
    
    // 언어 코드만 확인 (en-us, en-gb -> en)
    const baseLang = langCode.split('-')[0];
    console.log(`🔍 Checking base language: ${baseLang}`);
    
    // 스페인어(es)인 경우 위치를 확인하여 멕시코인지 판단
    if (baseLang === 'es') {
        console.log('🔍 Spanish detected, checking location to determine Spanish variant...');
        
        // 이미 감지된 국가 코드가 있으면 재사용
        if (detectedCountryCode) {
            console.log(`🔄 Reusing detected country code: ${detectedCountryCode}`);
            if (detectedCountryCode === 'MX') {
                console.log('🇲🇽 Location is Mexico -> es-mx');
                return 'es-mx';
            } else if (detectedCountryCode === 'ES') {
                console.log('🇪🇸 Location is Spain -> es-es');
                return 'es-es';
            }
        }
        
        // 국가 코드가 없으면 다시 시도
        try {
            const countryCode = await getCountryFromLocation();
            if (countryCode === 'MX') {
                console.log('🇲🇽 Location is Mexico -> es-mx');
                return 'es-mx';
            } else if (countryCode === 'ES') {
                console.log('🇪🇸 Location is Spain -> es-es');
                return 'es-es';
            }
        } catch (err) {
            console.log('⚠️ Location check failed for Spanish, defaulting to es-es');
        }
        // 위치 확인 실패 시 스페인 스페인어로 기본 설정
        console.log('🇪🇸 Defaulting to Spain Spanish -> es-es');
        return 'es-es';
    }
    
    for (const key in translations) {
        if (key.startsWith(baseLang)) {
            console.log(`✅ Matched browser language: ${langCode} -> ${key}`);
            return key;
        }
    }
    
    // 5. 기본값: 영어
    console.log('🔄 No specific language detected, defaulting to en-us');
    return 'en-us';
}

// 도시명으로 국가 코드 감지
function detectCountryFromCity(cityName) {
    if (!cityName) return null;
    
    const normalizedCity = cityName.toLowerCase().trim();
    
    for (const [countryCode, cities] of Object.entries(majorCities)) {
        for (const city of cities) {
            if (city.toLowerCase() === normalizedCity || 
                city.toLowerCase().includes(normalizedCity) ||
                normalizedCity.includes(city.toLowerCase())) {
                console.log(`🏙️ City detected: ${city} -> ${countryCode}`);
                return countryCode;
            }
        }
    }
    
    return null;
}

// 위치 기반 국가 코드 가져오기
async function getCountryFromLocation() {
    // JSON 파싱 안전 헬퍼 (HTML/텍스트 응답 시 무시)
    async function safeJson(response) {
        try {
            const contentType = response.headers.get('content-type') || '';
            if (!contentType.includes('application/json')) {
                // JSON이 아니면 파싱 시도 대신 텍스트만 소모하고 스킵
                await response.text().catch(() => {});
                throw new Error('Non-JSON response');
            }
            return await response.json();
        } catch (err) {
            throw new Error('Invalid JSON');
        }
    }
    try {
        // 여러 IP 기반 위치 서비스 시도
        const services = [
            'https://ipapi.co/json/',
            'https://ip-api.com/json/',
            'https://api.ipify.org?format=json'
        ];
        
        for (const service of services) {
            try {
                const response = await fetch(service, { credentials: 'omit', mode: 'cors' });
                const data = await safeJson(response);
                
                let countryCode = null;
                if (service.includes('ipapi.co') && data.country_code) {
                    countryCode = data.country_code;
                } else if (service.includes('ip-api.com') && data.countryCode) {
                    countryCode = data.countryCode;
                }
                
                if (countryCode) {
                    console.log(`Detected country: ${countryCode} (${data.country_name || 'Unknown'}) via ${service}`);
                    
                    // 도시 정보도 확인 (추가 검증)
                    if (data.city) {
                        const cityCountry = detectCountryFromCity(data.city);
                        if (cityCountry && cityCountry === countryCode) {
                            console.log(`✅ City verification successful: ${data.city} -> ${countryCode}`);
                        } else if (cityCountry) {
                            console.log(`⚠️ City-country mismatch: ${data.city} suggests ${cityCountry}, but IP suggests ${countryCode}`);
                        }
                    }
                    
                    return countryCode;
                }
            } catch (serviceError) {
                console.log(`Service ${service} failed:`, serviceError);
                continue;
            }
        }
        
        throw new Error('All IP services failed');
    } catch (error) {
        console.log('IP-based location detection failed:', error);
        
        // 백업: 브라우저 시간대 기반 추정
        try {
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            console.log(`Using timezone: ${timezone}`);
            
            // 시간대에서 도시명 추출하여 감지
            const timezoneParts = timezone.split('/');
            if (timezoneParts.length > 1) {
                const cityFromTimezone = timezoneParts[timezoneParts.length - 1].replace(/_/g, ' ');
                console.log(`🌍 Extracted city from timezone: ${cityFromTimezone}`);
                
                const detectedCountry = detectCountryFromCity(cityFromTimezone);
                if (detectedCountry) {
                    console.log(`✅ Timezone-based city detection: ${cityFromTimezone} -> ${detectedCountry}`);
                    return detectedCountry;
                }
            }
            
            // 기존 시간대 기반 국가 추정 (백업)
            if (timezone.includes('Seoul') || timezone.includes('Asia/Seoul')) {
                return 'KR';
            } else if (timezone.includes('Tokyo') || timezone.includes('Asia/Tokyo')) {
                return 'JP';
            } else if (timezone.includes('Shanghai') || timezone.includes('Beijing')) {
                return 'CN';
            } else if (timezone.includes('Madrid') || timezone.includes('Europe/Madrid')) {
                return 'ES';
            } else if (timezone.includes('Rome') || timezone.includes('Europe/Rome')) {
                return 'IT';
            } else if (timezone.includes('Paris') || timezone.includes('Europe/Paris')) {
                return 'FR';
            } else if (timezone.includes('Berlin') || timezone.includes('Europe/Berlin')) {
                return 'DE';
            } else if (timezone.includes('Lisbon') || timezone.includes('Europe/Lisbon')) {
                return 'PT';
            } else if (timezone.includes('America/Mexico') || timezone.includes('Mexico_City') || timezone.includes('America/Cancun') || timezone.includes('America/Monterrey') || timezone.includes('America/Tijuana')) {
                return 'MX';
            } else if (timezone.includes('America/New_York') || timezone.includes('America/Los_Angeles') || timezone.includes('America/Chicago') || timezone.includes('America/Denver')) {
                return 'US';
            }
        } catch (tzError) {
            console.log('Timezone detection failed:', tzError);
        }
        
        throw new Error('All location detection methods failed');
    }
}

// 언어 변경 함수
function changeLanguage(langCode) {
    if (!translations[langCode]) {
        console.error('Language not supported:', langCode);
        return;
    }
    
    currentLanguage = langCode;
    localStorage.setItem('preferredLanguage', langCode);
    
    // HTML 문서 언어 및 방향 설정
    document.documentElement.lang = langCode;
    document.documentElement.dir = translations[langCode].dir;
    
    // 페이지 텍스트 업데이트
    updatePageText();
    
    // 이벤트 발생
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: langCode } }));
}

// 전역 객체로 노출 (루트 index.html에서 사용)
window.i18n = {
    detectUserLanguage,
    changeLanguage,
    translations,
    countryToLanguage,
    majorCities,
    detectCountryFromCity,
    getCountryFromLocation,
    currentLanguage: () => currentLanguage
};

// 페이지 텍스트 업데이트
function updatePageText() {
    const t = translations[currentLanguage];
    
    // data-i18n 속성을 가진 모든 요소 업데이트
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = t[key];
            } else {
                element.innerHTML = t[key];
            }
        }
    });
}

// 번역 텍스트 가져오기
function t(key) {
    return translations[currentLanguage][key] || key;
}

// 초기화
async function initI18n() {
    const detectedLang = await detectUserLanguage();
    changeLanguage(detectedLang);
    console.log(`Language detected: ${detectedLang} (${translations[detectedLang].name})`);
}

// 페이지 로드 시 초기화
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}

// Export for use in other files
window.i18n = {
    translations,
    currentLanguage: () => currentLanguage,
    changeLanguage,
    t,
    detectUserLanguage,
    availableLanguages: Object.keys(translations)
};

