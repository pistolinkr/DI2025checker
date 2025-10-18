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
    
    // 2. 로컬 스토리지 확인
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        return savedLang;
    }
    
    // 3. 위치 기반 언어 감지 (Geolocation API)
    try {
        console.log('🌍 Starting location-based language detection...');
        const countryCode = await getCountryFromLocation();
        console.log(`📍 Detected country code: ${countryCode}`);
        
        if (countryCode && countryToLanguage[countryCode]) {
            const detectedLang = countryToLanguage[countryCode];
            console.log(`✅ Location-based language detected: ${detectedLang} (${countryCode})`);
            localStorage.setItem('preferredLanguage', detectedLang);
            return detectedLang;
        } else {
            console.log(`⚠️ Country ${countryCode} not mapped to a supported language`);
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
    
    // 언어 코드만 확인 (en-us, en-gb -> en)
    const baseLang = langCode.split('-')[0];
    console.log(`🔍 Checking base language: ${baseLang}`);
    
    for (const key in translations) {
        if (key.startsWith(baseLang)) {
            console.log(`✅ Matched browser language: ${langCode} -> ${key}`);
            return key;
        }
    }
    
    // 영어 특별 처리 (en, en-US, en-GB 등)
    if (langCode.startsWith('en')) {
        console.log('🇺🇸 Detected English browser language -> en-us');
        return 'en-us';
    }
    
    // 한국어 특별 처리 (ko, ko-KR 등)
    if (langCode.startsWith('ko')) {
        console.log('🇰🇷 Detected Korean browser language -> ko-kr');
        return 'ko-kr';
    }
    
    // 5. 기본값: 영어
    console.log('🔄 No specific language detected, defaulting to en-us');
    return 'en-us';
}

// 위치 기반 국가 코드 가져오기
async function getCountryFromLocation() {
    try {
        // 여러 IP 기반 위치 서비스 시도
        const services = [
            'https://ipapi.co/json/',
            'https://ip-api.com/json/',
            'https://api.ipify.org?format=json'
        ];
        
        for (const service of services) {
            try {
                const response = await fetch(service);
                const data = await response.json();
                
                let countryCode = null;
                if (service.includes('ipapi.co') && data.country_code) {
                    countryCode = data.country_code;
                } else if (service.includes('ip-api.com') && data.countryCode) {
                    countryCode = data.countryCode;
                }
                
                if (countryCode) {
                    console.log(`Detected country: ${countryCode} (${data.country_name || 'Unknown'}) via ${service}`);
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
            
            // 시간대 기반 국가 추정
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
            } else if (timezone.includes('America/New_York') || timezone.includes('America/Los_Angeles')) {
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

