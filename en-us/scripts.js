// API 설정
const FDA_API_KEY = 'y15g3aG5icGrBAWcxP7HUkQa5h9pUcBFaD8kkmjk';
const BASE_URL = 'https://api.fda.gov/drug/label.json';



// AI 서비스 설정
const AI_CONFIGS = {
    free: {
        name: 'Free AI Service',
        baseUrl: 'https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium',
        model: 'microsoft/DialoGPT-medium',
        icon: '🆓',
        isFree: true
    },
    openai: {
        name: 'OpenAI',
        baseUrl: 'https://api.openai.com/v1/chat/completions',
        model: 'gpt-4o-mini',
        icon: '🤖'
    },
    claude: {
        name: 'Claude',
        baseUrl: 'https://api.anthropic.com/v1/messages',
        model: 'claude-3-haiku-20240307',
        icon: '🧠'
    },
    perplexity: {
        name: 'Perplexity',
        baseUrl: 'https://api.perplexity.ai/chat/completions',
        model: 'llama-3.1-sonar-small-128k-online',
        icon: '🔮'
    },
    gemini: {
        name: 'Gemini',
        baseUrl: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent',
        model: 'gemini-1.5-flash',
        icon: '✨'
    }
};

// 보안 설정
const SECURITY_CONFIG = {
    maxInputLength: 100,
    rateLimit: {
        maxRequests: 10,
        timeWindow: 60000, // 1분
        requests: new Map()
    },
    csrfToken: generateCSRFToken(),
    allowedDomains: [
        'api.fda.gov',
        'api.openai.com',
        'api.anthropic.com', 
        'api.perplexity.ai',
        'generativelanguage.googleapis.com'
    ]
};

// 보안 유틸리티 함수들
const SecurityUtils = {
    // HTML 이스케이프 함수 (XSS 방지)
    escapeHtml(text) {
        if (typeof text !== 'string') return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },

    // 입력 검증 및 sanitization (한국어 지원)
    sanitizeInput(input, maxLength = SECURITY_CONFIG.maxInputLength) {
        if (typeof input !== 'string') return '';
        
        // 길이 제한
        let sanitized = input.slice(0, maxLength);
        
        // 위험한 문자 제거 (XSS 방지)
        sanitized = sanitized.replace(/[<>\"']/g, '');
        
        // SQL 인젝션 방지
        sanitized = sanitized.replace(/(\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|SCRIPT)\b)/gi, '');
        
        // 허용된 문자만 유지 (영어, 숫자, 한글, 공백, 하이픈, 점, 괄호)
        // \u3131-\u318E: 한글 자모
        // \uAC00-\uD7A3: 한글 완성형
        // \u1100-\u11FF: 한글 자모 확장
        sanitized = sanitized.replace(/[^\w\s\-\.\(\)\u3131-\u318E\uAC00-\uD7A3\u1100-\u11FF]/g, '');
        
        return sanitized.trim();
    },

    // Rate Limiting 체크
    checkRateLimit(identifier = 'global') {
        const now = Date.now();
        const config = SECURITY_CONFIG.rateLimit;
        
        if (!config.requests.has(identifier)) {
            config.requests.set(identifier, []);
        }
        
        const userRequests = config.requests.get(identifier);
        
        // 시간 윈도우 밖의 요청 제거
        const validRequests = userRequests.filter(timestamp => 
            now - timestamp < config.timeWindow
        );
        
        if (validRequests.length >= config.maxRequests) {
            this.logSecurityEvent('RATE_LIMIT_EXCEEDED', { identifier, count: validRequests.length });
            return false;
        }
        
        validRequests.push(now);
        config.requests.set(identifier, validRequests);
        return true;
    },

    // CSRF 토큰 검증
    validateCSRFToken(token) {
        return token === SECURITY_CONFIG.csrfToken;
    },

    // URL 검증
    validateURL(url) {
        try {
            const urlObj = new URL(url);
            return SECURITY_CONFIG.allowedDomains.some(domain => 
                urlObj.hostname === domain || urlObj.hostname.endsWith('.' + domain)
            );
        } catch {
            return false;
        }
    },

    // API 키 마스킹 (로깅용)
    maskApiKey(key) {
        if (!key || typeof key !== 'string') return '***';
        if (key.length <= 8) return '***';
        return key.slice(0, 4) + '***' + key.slice(-4);
    },

    // 보안 이벤트 로깅
    logSecurityEvent(event, details = {}) {
        const logEntry = {
            timestamp: new Date().toISOString(),
            event: event,
            details: details,
            userAgent: navigator.userAgent.slice(0, 100), // 제한된 정보만
            url: window.location.pathname
        };
        
        console.warn('🔒 Security Event:', logEntry);
        
        // 개발자 모드에서 콘솔에 표시
        if (typeof state !== 'undefined' && state.developerMode && typeof utils !== 'undefined' && utils.logToDevConsole) {
            utils.logToDevConsole(`🔒 Security: ${event} - ${JSON.stringify(details)}`, 'warning');
        }
    },

    // DOM 조작 보안 검사
    validateDOMOperation(element, operation) {
        if (!element || !element.nodeType) {
            this.logSecurityEvent('INVALID_DOM_OPERATION', { operation });
            return false;
        }
        
        // 스크립트 태그 삽입 방지
        if (operation === 'innerHTML' && /<script/i.test(element)) {
            this.logSecurityEvent('SCRIPT_INJECTION_ATTEMPT', { operation });
            return false;
        }
        
        return true;
    },

    // 안전한 localStorage 접근
    secureLocalStorage: {
        setItem(key, value) {
            try {
                if (typeof key !== 'string' || key.length > 50) {
                    SecurityUtils.logSecurityEvent('INVALID_STORAGE_KEY', { key: key?.slice(0, 20) });
                    return false;
                }
                
                const sanitizedValue = typeof value === 'string' ? 
                    value.slice(0, 10000) : JSON.stringify(value).slice(0, 10000);
                
                localStorage.setItem(key, sanitizedValue);
                return true;
            } catch (error) {
                SecurityUtils.logSecurityEvent('STORAGE_ERROR', { error: error.message });
                return false;
            }
        },

        getItem(key) {
            try {
                if (typeof key !== 'string') return null;
                return localStorage.getItem(key);
            } catch (error) {
                SecurityUtils.logSecurityEvent('STORAGE_READ_ERROR', { error: error.message });
                return null;
            }
        },

        removeItem(key) {
            try {
                if (typeof key !== 'string') return false;
                localStorage.removeItem(key);
                return true;
            } catch (error) {
                SecurityUtils.logSecurityEvent('STORAGE_REMOVE_ERROR', { error: error.message });
                return false;
            }
        }
    }
};

// CSRF 토큰 생성
function generateCSRFToken() {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

// 보안 초기화
function initSecurity() {
    // 콘솔 경고 메시지
    console.warn(`
    🔒 SECURITY NOTICE 🔒
    
    This application implements multiple security measures:
    - Content Security Policy (CSP)
    - XSS Protection
    - Input Sanitization
    - Rate Limiting
    - CSRF Protection
    
    Please do not attempt to bypass security measures.
    Report security issues responsibly.
    `);

    // 개발자 도구 감지 (기본적인 수준)
    let devtools = {open: false, orientation: null};
    setInterval(() => {
        if (window.outerHeight - window.innerHeight > 200 || 
            window.outerWidth - window.innerWidth > 200) {
            if (!devtools.open) {
                devtools.open = true;
                SecurityUtils.logSecurityEvent('DEVTOOLS_OPENED');
            }
        } else {
            devtools.open = false;
        }
    }, 1000);

    // 우클릭 방지 (개발자 모드가 아닐 때)
    document.addEventListener('contextmenu', (e) => {
        if (typeof state !== 'undefined' && !state.developerMode) {
            e.preventDefault();
            SecurityUtils.logSecurityEvent('CONTEXT_MENU_BLOCKED');
        }
    });

    // 키보드 단축키 보안 (F12, Ctrl+Shift+I 등)
    document.addEventListener('keydown', (e) => {
        if (typeof state !== 'undefined' && !state.developerMode) {
            if (e.key === 'F12' || 
                (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J')) ||
                (e.ctrlKey && e.key === 'U')) {
                e.preventDefault();
                SecurityUtils.logSecurityEvent('DEVTOOLS_SHORTCUT_BLOCKED', { key: e.key });
            }
        }
    });
}

// API 키 관리 (보안 강화된 localStorage 접근)
const getAPIKey = (provider) => {
    if (!provider || typeof provider !== 'string') {
        SecurityUtils.logSecurityEvent('INVALID_API_PROVIDER', { provider });
        return null;
    }
    return SecurityUtils.secureLocalStorage.getItem(`${provider}_api_key`) || null;
};

const getSelectedProvider = () => SecurityUtils.secureLocalStorage.getItem('selected_ai_provider') || 'free';
const getOpenAIKey = () => getAPIKey('openai'); // 하위 호환성

// 전역 상태 관리
const state = {
    currentDrug1: null,
    currentDrug2: null,
    searchTimeout: null,
    isLoading: false,
    recentSearches: JSON.parse(SecurityUtils.secureLocalStorage.getItem('recentDrugs') || '[]'),
    drugCache: new Map(),
    developerMode: SecurityUtils.secureLocalStorage.getItem('developer_mode') === 'true'
};

// 개발자 모드 설정
const DEVELOPER_CODES = ['dev_2024', 'developer', 'debug', 'dev_mode'];
let lastSearchTerm = '';

// 확장된 한국어-영문 약물명 매핑 (오타 및 다양한 표기법 포함)
const drugNameMapping = {
    // 기본 매핑
    '아스피린': 'Aspirin',
    '와파린': 'Warfarin', 
    '이부프로펜': 'Ibuprofen',
    '아세트아미노펜': 'Acetaminophen',
    '메토트렉세이트': 'Methotrexate',
    '심바스타틴': 'Simvastatin',
    '아토르바스타틴': 'Atorvastatin',
    '오메프라졸': 'Omeprazole',
    '프레드니솔론': 'Prednisolone',
    '암로디핀': 'Amlodipine',
    '메트포르민': 'Metformin',
    '리시노프릴': 'Lisinopril',
    '로사르탄': 'Losartan',
    '클로피도그렐': 'Clopidogrel',
    '푸로세미드': 'Furosemide',
    
    // Additionalddrugsional drugs
    '타이레놀': 'Acetaminophen',
    '부루펜': 'Ibuprofen',
    '낙센': 'Naproxen',
    '낙센프록센': 'Naproxen',
    '디클로페낙': 'Diclofenac',
    '셀레콕시브': 'Celecoxib',
    '세레브렉스': 'Celecoxib',
    '로페콕시브': 'Rofecoxib',
    '멜록시캄': 'Meloxicam',
    '프로포폴': 'Propofol',
    '미다졸람': 'Midazolam',
    '디아제팜': 'Diazepam',
    '로라제팜': 'Lorazepam',
    '클로나제팜': 'Clonazepam',
    '졸피뎀': 'Zolpidem',
    '에스조피클론': 'Eszopiclone',
    
    // Common typos/variations
    '아스파린': 'Aspirin',
    '아세타미노펜': 'Acetaminophen',
    '아세트아미노팬': 'Acetaminophen',
    '이부프로팬': 'Ibuprofen',
    '이부프로핀': 'Ibuprofen',
    '메트포민': 'Metformin',
    '메드포르민': 'Metformin',
    
    // English lowercase
    'aspirin': 'Aspirin',
    'ibuprofen': 'Ibuprofen',
    'acetaminophen': 'Acetaminophen',
    'metformin': 'Metformin',
    'omeprazole': 'Omeprazole',
    'simvastatin': 'Simvastatin',
    'atorvastatin': 'Atorvastatin',
    'warfarin': 'Warfarin',
    'lisinopril': 'Lisinopril',
    'losartan': 'Losartan',
    'amlodipine': 'Amlodipine',
    'furosemide': 'Furosemide',
    'clopidogrel': 'Clopidogrel',
    'methotrexate': 'Methotrexate',
    'prednisolone': 'Prednisolone'
};

// File detection function
function detectAvailableFiles() {
    console.log('📁 Starting file detection...');
    
    // List of files to detect
    const filesToDetect = [
        'index.html',
        'index_en.html', 
        'scripts.js',
        'scripts_en.js',
        'styles.css',
        'styles_en.css',
        'README.md',
        'Figure/Fig0.PNG',
        'Figure/Fig1.PNG',
        'Figure/Fig2.PNG',
        'Figure/Fig3.PNG',
        'Figure/Fig4.PNG',
        'Figure/Fig5.PNG',
        'Figure/Fig6.PNG'
    ];
    
    const detectedFiles = [];
    const undetectedFiles = [];
    
    // Check existence of each file in parallel
    const checkPromises = filesToDetect.map(filePath => {
        return fetch(filePath, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    detectedFiles.push(filePath);
                    console.log(`✅ Detected: ${filePath}`);
                } else {
                    undetectedFiles.push(filePath);
                    console.log(`❌ Not detected: ${filePath}`);
                }
            })
            .catch(error => {
                undetectedFiles.push(filePath);
                console.log(`❌ Detection failed: ${filePath} - ${error.message}`);
            });
    });
    
    // Output results when all checks are complete
    Promise.allSettled(checkPromises).then(() => {
        console.log('📊 File detection results:');
        console.log(`✅ Detected files (${detectedFiles.length}):`, detectedFiles);
        console.log(`❌ Undetected files (${undetectedFiles.length}):`, undetectedFiles);
        
        // Show notification to user
        if (detectedFiles.length > 0) {
            showAlert(`📁 ${detectedFiles.length} files detected.`, 'success');
        }
        
        // Display detailed information in developer console
        if (typeof window !== 'undefined' && window.console) {
            console.group('🔍 File Detection Details');
            console.table(detectedFiles.map(file => ({ 
                File: file, 
                Status: '✅ Available',
                Path: `/${file}`
            })));
            if (undetectedFiles.length > 0) {
                console.table(undetectedFiles.map(file => ({ 
                    File: file, 
                    Status: '❌ Unavailable',
                    Path: `/${file}`
                })));
            }
            console.groupEnd();
        }
    });
}

// Utility functions
const utils = {
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    showLoading(message = 'Processing...') {
        const overlay = document.getElementById('loadingOverlay');
        const text = document.getElementById('loadingText');
        text.textContent = message;
        overlay.classList.add('show');
        state.isLoading = true;
    },

    hideLoading() {
        const overlay = document.getElementById('loadingOverlay');
        overlay.classList.remove('show');
        state.isLoading = false;
    },

    showAlert(message, type = 'info') {
        const alert = document.getElementById('alertMessage');
        alert.className = `alert alert-${type} show`;
        alert.innerHTML = `<span>${message}</span>`;
        
        // 드래그 기능 추가
        this.addDragToAlert(alert);
        
        // 자동 사라지기 (3초 후)
        const autoHideTimeout = setTimeout(() => {
            this.hideAlert(alert);
        }, 3000);
        
        // 타임아웃을 알림에 저장 (드래그로 사라질 경우 취소하기 위해)
        alert.autoHideTimeout = autoHideTimeout;
    },

    addDragToAlert(alert) {
        let startY = 0;
        let currentY = 0;
        let isDragging = false;
        let initialTop = 80; // CSS에서 설정한 top 값

        // 마우스 및 터치 이벤트 핸들러
        const startDrag = (e) => {
            isDragging = true;
            startY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;
            alert.classList.add('dragging');
            
            // 자동 숨기기 타임아웃 취소
            if (alert.autoHideTimeout) {
                clearTimeout(alert.autoHideTimeout);
            }

            e.preventDefault();
        };

        const drag = (e) => {
            if (!isDragging) return;
            
            currentY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;
            const deltaY = currentY - startY;
            
            // 위쪽으로만 드래그 허용 (deltaY < 0)
            if (deltaY < 0) {
                const newTop = initialTop + deltaY;
                alert.style.top = `${Math.max(newTop, -100)}px`;
                
                // 투명도 조절 (더 위로 드래그할수록 투명해짐)
                const opacity = Math.max(1 + (deltaY / 100), 0);
                alert.style.opacity = opacity;
            }

            e.preventDefault();
        };

        const endDrag = (e) => {
            if (!isDragging) return;
            
            isDragging = false;
            alert.classList.remove('dragging');
            
            const deltaY = currentY - startY;
            
            // 50px 이상 위로 드래그했으면 사라지게 하기
            if (deltaY < -50) {
                this.hideAlert(alert);
            } else {
                // 원래 위치로 되돌리기
                alert.style.top = '';
                alert.style.opacity = '';
            }

            e.preventDefault();
        };

        // 이벤트 리스너 추가
        alert.addEventListener('mousedown', startDrag);
        alert.addEventListener('touchstart', startDrag, { passive: false });
        
        document.addEventListener('mousemove', drag);
        document.addEventListener('touchmove', drag, { passive: false });
        
        document.addEventListener('mouseup', endDrag);
        document.addEventListener('touchend', endDrag);
        
        // 알림이 사라질 때 이벤트 리스너 정리
        alert.addEventListener('transitionend', () => {
            if (!alert.classList.contains('show')) {
                document.removeEventListener('mousemove', drag);
                document.removeEventListener('touchmove', drag);
                document.removeEventListener('mouseup', endDrag);
                document.removeEventListener('touchend', endDrag);
            }
        });
    },

    hideAlert(alert) {
        alert.classList.add('dismissing');
        setTimeout(() => {
            alert.classList.remove('show', 'dismissing');
            alert.style.top = '';
            alert.style.opacity = '';
            
            // 자동 숨기기 타임아웃 정리
            if (alert.autoHideTimeout) {
                clearTimeout(alert.autoHideTimeout);
                alert.autoHideTimeout = null;
            }
        }, 600); // CSS transition 시간과 동일
    },

    // Body scroll management for modals
    disableBodyScroll() {
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = '0px'; // Prevent layout shift
    },

    enableBodyScroll() {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    },

    // 개발자 모드 관련 기능들
    checkDeveloperCode(searchTerm) {
        const term = searchTerm.trim().toLowerCase();
        if (DEVELOPER_CODES.includes(term)) {
            this.toggleDeveloperMode();
            return true;
        }
        return false;
    },

    toggleDeveloperMode() {
        state.developerMode = !state.developerMode;
        SecurityUtils.secureLocalStorage.setItem('developer_mode', state.developerMode.toString());
        
        if (state.developerMode) {
            this.showAlert('Developer Mode Activated!', 'success');
            this.createDeveloperPanel();
        } else {
            this.showAlert('Developer Mode Deactivated', 'info');
            this.removeDeveloperPanel();
        }
        
        document.getElementById('drugSearch').value = '';
    },

    createDeveloperPanel() {
        if (document.getElementById('developerPanel')) return;
        
        const panel = document.createElement('div');
        panel.id = 'developerPanel';
        panel.className = 'developer-panel scroll-slide-right';
        panel.innerHTML = `
            <div class="dev-header">
                <h3>🔧 Developer Panel</h3>
                <button onclick="utils.toggleDeveloperMode()" class="dev-close">×</button>
            </div>
            <div class="dev-content">
                <div class="dev-section">
                    <h4>📊 System Status</h4>
                    <div class="dev-stats">
                        <div class="stat-item">
                            <span>Cache Size:</span> 
                            <span id="cacheSize">${state.drugCache.size}</span>
                        </div>
                        <div class="stat-item">
                            <span>Recent Searches:</span> 
                            <span>${state.recentSearches.length}</span>
                        </div>
                        <div class="stat-item">
                            <span>Loading State:</span> 
                            <span id="loadingState">${state.isLoading ? 'Active' : 'Idle'}</span>
                        </div>
                        <div class="stat-item">
                            <span>API Keys:</span> 
                            <span id="apiKeyCount">${this.getAvailableProviders().length}</span>
                        </div>
                    </div>
                </div>
                
                <div class="dev-section">
                    <h4>🛠️ Actions</h4>
                    <div class="dev-actions">
                        <button onclick="devTools.clearCache()" class="dev-btn">Clear Cache</button>
                        <button onclick="devTools.clearStorage()" class="dev-btn">Clear Storage</button>
                        <button onclick="devTools.exportLogs()" class="dev-btn">Export Logs</button>
                        <button onclick="devTools.testAllAPIs()" class="dev-btn">Test APIs</button>
                        <button onclick="devTools.showDebugInfo()" class="dev-btn">Debug Info</button>
                        <button onclick="devTools.performanceTest()" class="dev-btn">Performance</button>
                    </div>
                </div>

                <div class="dev-section">
                    <h4>📝 Console</h4>
                    <div class="dev-console" id="devConsole">
                        <div class="console-line">Developer mode activated at ${new Date().toLocaleTimeString()}</div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(panel);
        
        // 패널 애니메이션 적용
        setTimeout(() => {
            panel.classList.add('scroll-visible');
        }, 50);
        
        // 실시간 업데이트
        setInterval(() => {
            if (state.developerMode) {
                document.getElementById('cacheSize').textContent = state.drugCache.size;
                document.getElementById('loadingState').textContent = state.isLoading ? 'Active' : 'Idle';
                document.getElementById('apiKeyCount').textContent = this.getAvailableProviders().length;
            }
        }, 1000);
    },

    removeDeveloperPanel() {
        const panel = document.getElementById('developerPanel');
        if (panel) {
            panel.classList.add('closing');
            
            setTimeout(() => {
                panel.remove();
            }, 400); // CSS transition 시간과 동일
        }
    },

    logToDevConsole(message, type = 'info') {
        if (!state.developerMode) return;
        
        const console = document.getElementById('devConsole');
        if (console) {
            const line = document.createElement('div');
            line.className = `console-line console-${type} scroll-fade`;
            line.innerHTML = `[${new Date().toLocaleTimeString()}] ${message}`;
            console.appendChild(line);
            
            // 새 로그 라인에 애니메이션 적용
            setTimeout(() => {
                line.classList.add('scroll-visible');
            }, 50);
            
            console.scrollTop = console.scrollHeight;
            
            // 최대 50줄만 유지
            while (console.children.length > 50) {
                console.removeChild(console.firstChild);
            }
        }
    },

    convertSearchTerm(term) {
        const lowerTerm = term.toLowerCase().trim();
        
        // 정확한 매치 확인
        if (drugNameMapping[lowerTerm]) {
            return drugNameMapping[lowerTerm];
        }
        
        // Partial match check (Korean → English)
        for (const [korean, english] of Object.entries(drugNameMapping)) {
            if (korean.includes(lowerTerm) || lowerTerm.includes(korean)) {
                return english;
            }
        }
        
        // Partial match check (English → English)
        const englishNames = Object.values(drugNameMapping);
        for (const englishName of englishNames) {
            if (englishName.toLowerCase().includes(lowerTerm) || 
                lowerTerm.includes(englishName.toLowerCase())) {
                return englishName;
            }
        }
        
        // If no match, return original
        return term;
    },

    saveRecentSearch(term) {
        state.recentSearches = [term, ...state.recentSearches.filter(t => t !== term)].slice(0, 5);
        SecurityUtils.secureLocalStorage.setItem('recentDrugs', JSON.stringify(state.recentSearches));
        updateRecentSearches();
    },

    async translateToKorean(text) {
        // Google translation disabled - return original text
        return text;
    },

    // Flexible search query generation
    generateFlexibleQueries(searchTerm) {
        const queries = [];
        const term = searchTerm.toLowerCase().trim();
        
        // 1. Exact match (highest priority)
        queries.push(`openfda.brand_name:"${searchTerm}"+OR+openfda.generic_name:"${searchTerm}"`);
        
        // 2. Partial substring search (case-insensitive)
        if (term.length >= 3) {
            queries.push(`openfda.brand_name:${term}+OR+openfda.generic_name:${term}`);
        }
        
        // 3. Wildcard search (allow different characters before and after)
        if (term.length >= 3) {
            queries.push(`openfda.brand_name:*${term}*+OR+openfda.generic_name:*${term}*`);
        }
        
        // 4. Word-by-word search (separated by spaces)
        const words = term.split(/\s+/).filter(word => word.length >= 2);
        if (words.length > 1) {
            const wordQuery = words.map(word => 
                `openfda.brand_name:*${word}*+OR+openfda.generic_name:*${word}*`
            ).join('+AND+');
            queries.push(wordQuery);
        }
        
        // 5. Allow typos search (similar words)
        if (term.length >= 4) {
            const fuzzyTerms = this.generateFuzzyTerms(term);
            if (fuzzyTerms.length > 0) {
                const fuzzyQuery = fuzzyTerms.map(fuzzyTerm => 
                    `openfda.brand_name:${fuzzyTerm}+OR+openfda.generic_name:${fuzzyTerm}`
                ).join('+OR+');
                queries.push(fuzzyQuery);
            }
        }
        
        return queries;
    },

    // Generate fuzzy terms for typos
    generateFuzzyTerms(term) {
        const fuzzyTerms = new Set();
        
        // Common typos patterns
        const commonMistakes = {
            'ph': 'f', 'f': 'ph',
            'th': 't', 't': 'th',
            'c': 'k', 'k': 'c',
            'z': 's', 's': 'z',
            'i': 'y', 'y': 'i'
        };
        
        Object.entries(commonMistakes).forEach(([from, to]) => {
            if (term.includes(from)) {
                fuzzyTerms.add(term.replace(new RegExp(from, 'g'), to));
            }
        });
        
        return Array.from(fuzzyTerms);
    },

    // Calculate string similarity (Levenshtein distance)
    calculateSimilarity(str1, str2) {
        const matrix = [];
        const len1 = str1.length;
        const len2 = str2.length;

        for (let i = 0; i <= len2; i++) {
            matrix[i] = [i];
        }

        for (let j = 0; j <= len1; j++) {
            matrix[0][j] = j;
        }

        for (let i = 1; i <= len2; i++) {
            for (let j = 1; j <= len1; j++) {
                if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
                }
            }
        }

        const maxLen = Math.max(len1, len2);
        return maxLen === 0 ? 1 : (maxLen - matrix[len2][len1]) / maxLen;
    },

    // Deduplicate and sort by relevance
    deduplicateAndSort(results, searchTerm) {
        if (!results.results || results.results.length === 0) {
            return results;
        }

        const uniqueDrugs = new Map();
        const searchLower = searchTerm.toLowerCase();

        results.results.forEach(drug => {
            if (!drug.openfda) return;
            
            const brandNames = drug.openfda.brand_name || [];
            const genericNames = drug.openfda.generic_name || [];
            
            [...brandNames, ...genericNames].forEach(name => {
                const nameLower = name.toLowerCase();
                
                if (!uniqueDrugs.has(nameLower)) {
                    // Calculate relevance score
                    let relevanceScore = 0;
                    
                    // Exact match
                    if (nameLower === searchLower) {
                        relevanceScore = 100;
                    }
                    // Start character match
                    else if (nameLower.startsWith(searchLower)) {
                        relevanceScore = 90;
                    }
                    // Include relationship
                    else if (nameLower.includes(searchLower)) {
                        relevanceScore = 80;
                    }
                    // Similarity-based
                    else {
                        const similarity = this.calculateSimilarity(nameLower, searchLower);
                        relevanceScore = similarity * 70;
                    }

                    uniqueDrugs.set(nameLower, {
                        name,
                        type: brandNames.includes(name) ? 'Brand' : 'Generic',
                        manufacturer: drug.openfda.manufacturer_name?.[0] || 'No info',
                        drugData: drug,
                        relevanceScore
                    });
                }
            });
        });

        // Sort by relevance
        const sortedDrugs = Array.from(uniqueDrugs.values())
            .sort((a, b) => b.relevanceScore - a.relevanceScore)
            .slice(0, 15); // Top 15 only

        return {
            results: sortedDrugs.map(item => item.drugData)
        };
    },

    // Check available AI services
    getAvailableProviders() {
        const available = [];
        for (const [provider, config] of Object.entries(AI_CONFIGS)) {
            if (config.isFree) {
                available.push(provider);
            } else {
            const apiKey = getAPIKey(provider);
            if (apiKey && apiKey !== 'your_api_key_here') {
                available.push(provider);
                }
            }
        }
        return available;
    },

    // Select the best AI service
    selectBestProvider() {
        const selected = getSelectedProvider();
        
        if (selected !== 'auto') {
            const apiKey = getAPIKey(selected);
            if (apiKey && apiKey !== 'your_api_key_here') {
                return selected;
            }
        }
        
        // Auto-select - Priority: Free > OpenAI > Claude > Perplexity > Gemini
        const priority = ['free', 'openai', 'claude', 'perplexity', 'gemini'];
        for (const provider of priority) {
            if (provider === 'free') {
                return 'free';
            }
            const apiKey = getAPIKey(provider);
            if (apiKey && apiKey !== 'your_api_key_here') {
                return provider;
            }
        }
        
        throw new Error('No available AI service found. Please set up API keys in settings or use free service.');
    },

    // OpenAI API call
    async callOpenAI(messages, options = {}) {
        const apiKey = getAPIKey('openai');
        
        if (!apiKey) {
            throw new Error('OpenAI API key is not set.');
        }

        const response = await fetch(AI_CONFIGS.openai.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: options.model || AI_CONFIGS.openai.model,
                messages: messages,
                temperature: options.temperature || 0.3,
                max_tokens: options.max_tokens || 1500,
                ...options
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(`OpenAI API error: ${error.error?.message || response.statusText}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    },

    // Claude API call
    async callClaude(messages, options = {}) {
        const apiKey = getAPIKey('claude');
        
        if (!apiKey) {
            throw new Error('Claude API 키가 설정되지 않았습니다.');
        }

        // 시스템 메시지 분리
        const systemMessage = messages.find(m => m.role === 'system');
        const userMessages = messages.filter(m => m.role !== 'system');

        const response = await fetch(AI_CONFIGS.claude.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: options.model || AI_CONFIGS.claude.model,
                system: systemMessage?.content || '',
                messages: userMessages,
                max_tokens: options.max_tokens || 1500,
                temperature: options.temperature || 0.3
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(`Claude API error: ${error.error?.message || response.statusText}`);
        }

        const data = await response.json();
        return data.content[0].text;
    },

    // Perplexity API call
    async callPerplexity(messages, options = {}) {
        const apiKey = getAPIKey('perplexity');
        
        if (!apiKey) {
            throw new Error('Perplexity API key is not set.');
        }

        const response = await fetch(AI_CONFIGS.perplexity.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: options.model || AI_CONFIGS.perplexity.model,
                messages: messages,
                temperature: options.temperature || 0.3,
                max_tokens: options.max_tokens || 1500
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(`Perplexity API error: ${error.error?.message || response.statusText}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    },

    // Gemini API call
    async callGemini(messages, options = {}) {
        const apiKey = getAPIKey('gemini');
        
        if (!apiKey) {
            throw new Error('Gemini API key is not set.');
        }

        // Gemini 형식으로 메시지 변환
        const contents = [];
        for (const message of messages) {
            if (message.role === 'system') {
                // System messages are included in the first user message
                continue;
            }
            
            const role = message.role === 'assistant' ? 'model' : 'user';
            let content = message.content;
            
            // If there is a system message, include it in the first user message
            if (role === 'user' && contents.length === 0) {
                const systemMessage = messages.find(m => m.role === 'system');
                if (systemMessage) {
                    content = `${systemMessage.content}\n\n${content}`;
                }
            }
            
            contents.push({
                role: role,
                parts: [{ text: content }]
            });
        }

        const url = `${AI_CONFIGS.gemini.baseUrl}?key=${apiKey}`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: contents,
                generationConfig: {
                    temperature: options.temperature || 0.3,
                    maxOutputTokens: options.max_tokens || 1500
                }
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(`Gemini API error: ${error.error?.message || response.statusText}`);
        }

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    },

    // Combined AI call function
    async callAI(messages, options = {}) {
        const provider = this.selectBestProvider();
        const config = AI_CONFIGS[provider];
        
        console.log(`🤖 ${config.name} AI analysis in progress...`);
        
        try {
            let result;
            switch (provider) {
                case 'free':
                    result = await this.callFreeAI(messages, options);
                    break;
                case 'openai':
                    result = await this.callOpenAI(messages, options);
                    break;
                case 'claude':
                    result = await this.callClaude(messages, options);
                    break;
                case 'perplexity':
                    result = await this.callPerplexity(messages, options);
                    break;
                case 'gemini':
                    result = await this.callGemini(messages, options);
                    break;
                default:
                    throw new Error(`Unsupported AI service: ${provider}`);
            }
            
            return { result, provider: config.name };
        } catch (error) {
            console.error(`${config.name} API error:`, error);
            throw error;
        }
    },

    // Free AI service call - Complete fallback system
    async callFreeAI(messages, options = {}) {
        try {
            // Try multiple free APIs sequentially
            const freeAPIs = [
                this.tryHuggingFaceAPI,
                this.tryGroqAPI,
                this.tryOllamaAPI
            ];

            for (const apiCall of freeAPIs) {
                try {
                    const result = await apiCall(messages, options);
                    if (result && result.trim().length > 0) {
                        return result;
                    }
                } catch (error) {
                    console.log(`API attempt failed: ${apiCall.name}`);
                    continue;
                }
            }

            // If all APIs fail, use rule-based response
            return this.generateFallbackResponse(messages);
        } catch (error) {
            console.error('Free AI service error:', error);
            return this.generateFallbackResponse(messages);
        }
    },

    // Try Hugging Face API
    async tryHuggingFaceAPI(messages, options = {}) {
        const response = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                inputs: messages[messages.length - 1].content,
                parameters: {
                    max_length: 500,
                    temperature: 0.7,
                    do_sample: true
                }
            })
        });

        if (!response.ok) {
            throw new Error(`Hugging Face API error: ${response.statusText}`);
        }

        const data = await response.json();
        
        if (Array.isArray(data) && data.length > 0) {
            return data[0].generated_text || '';
        } else if (data.error) {
            throw new Error(`Hugging Face API error: ${data.error}`);
        }
        
        return '';
    },

    // Try Groq API (free tier)
    async tryGroqAPI(messages, options = {}) {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer gsk_demo_key' // Demo key
            },
            body: JSON.stringify({
                model: 'llama3-8b-8192',
                messages: messages,
                max_tokens: 500,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            throw new Error(`Groq API error: ${response.statusText}`);
        }

        const data = await response.json();
        return data.choices?.[0]?.message?.content || '';
    },

    // Try Ollama local API
    async tryOllamaAPI(messages, options = {}) {
        const response = await fetch('http://localhost:11434/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama3.2',
                messages: messages,
                stream: false
            })
        });

        if (!response.ok) {
            throw new Error(`Ollama API error: ${response.statusText}`);
        }

        const data = await response.json();
        return data.message?.content || '';
    },

    // Fallback response generation - More useful information
    generateFallbackResponse(messages) {
        const lastMessage = messages[messages.length - 1].content;
        
        if (lastMessage.includes('interaction') || lastMessage.includes('drug')) {
            // Try to extract drug names
            const drugNames = this.extractDrugNames(lastMessage);
            
            return `## 🔍 Drug Interaction Analysis (Free AI Service)

### ⚠️ Current Situation
Free AI service is temporarily unavailable. Providing basic safety guidelines.

### 📋 Common Drug Interaction Precautions

#### 🚨 High-Risk Interactions
- **Anticoagulants + Aspirin**: Increased bleeding risk
- **ACE inhibitors + Potassium supplements**: Hyperkalemia risk
- **Digoxin + Diuretics**: Digoxin toxicity risk
- **Warfarin + Antibiotics**: Increased bleeding risk

#### ⚠️ Medium-Risk Interactions
- **Statins + Antifungals**: Muscle pain, liver damage risk
- **Metformin + Contrast agents**: Kidney damage risk
- **Lithium + Diuretics**: Lithium toxicity risk

### 🛡️ Safety Guidelines
1. **Medical consultation required**: Always consult with a doctor or pharmacist before taking new medications
2. **Medication record management**: Keep records of all medications and inform healthcare providers
3. **Side effect monitoring**: Stop taking medication immediately and contact healthcare provider if adverse effects occur
4. **Regular checkups**: Regular examinations needed for long-term medications

### 💡 Recommendations
For more accurate AI analysis, please enter API keys for OpenAI, Claude, or other AI services in settings.

### 📞 Emergency
For serious side effects or emergencies, contact **911** or **Emergency Room** immediately.`;
        }
        
        return `## 🆓 Free AI Service Information

### Current Situation
Free AI service is temporarily unavailable.

### 💡 Solutions
1. **Use personal API keys**: Enter OpenAI, Claude, Perplexity, Gemini API keys in settings
2. **Retry later**: Check network status and try again
3. **Follow basic safety rules**: Consult healthcare providers before taking medications

### 🔧 Setup Instructions
1. Click settings button in bottom right
2. Select desired AI service in AI service settings
3. Enter API key and save

We recommend using personal API keys for more stable service.`;
    },

    // Drug name extraction function
    extractDrugNames(text) {
        // Simple drug name pattern matching
        const drugPatterns = [
            /aspirin/gi,
            /acetaminophen|paracetamol|tylenol/gi,
            /ibuprofen/gi,
            /metformin/gi,
            /warfarin/gi,
            /digoxin/gi,
            /lipitor|atorvastatin/gi,
            /prednisolone/gi
        ];
        
        const foundDrugs = [];
        drugPatterns.forEach(pattern => {
            const match = text.match(pattern);
            if (match) {
                foundDrugs.push(match[0]);
            }
        });
        
        return foundDrugs;
    },

    // Drug interaction AI analysis
    async analyzeInteraction(drug1, drug2, interactions1, interactions2, drug1Info, drug2Info) {
        const prompt = `
You are a clinical pharmacy expert. Please analyze the interaction between two drugs and explain it clearly to patients.

**Drug Information:**
- Drug 1: ${drug1}
- Drug 2: ${drug2}

**Interaction information confirmed from FDA data:**
${interactions1 ? `${drug1} related: ${interactions1.substring(0, 1000)}` : `${drug1}: No interaction information`}
${interactions2 ? `${drug2} related: ${interactions2.substring(0, 1000)}` : `${drug2}: No interaction information`}

**Basic Drug Information:**
${drug1}: ${drug1Info.description?.[0]?.substring(0, 500) || 'No information'}
${drug2}: ${drug2Info.description?.[0]?.substring(0, 500) || 'No information'}

Please analyze in the following format:

## 🔍 Interaction Analysis Summary

### 📊 Risk Assessment
[Low/Moderate/High/Very High] - Brief reason

### ⚠️ Major Risk Factors
- Key risk factors 1-3 (if any)

### 💊 Mechanism of Action
- Brief explanation of how the two drugs interact

### 🏥 Recommendations
- Specific actions patients should take
- Need for medical consultation
- Monitoring points

### 🚨 Emergency Signs
- Symptoms requiring immediate hospital visit

Please write in English and use terms that are easy for general public to understand rather than medical terminology.
`;

        const messages = [
            {
                role: "system",
                content: "You are a clinical pharmacy expert who provides accurate and reliable information about drug interactions. Patient safety is your top priority, and you always recommend consulting with healthcare professionals."
            },
            {
                role: "user",
                content: prompt
            }
        ];

        const response = await this.callAI(messages, {
            temperature: 0.1, // Lower temperature for more accurate medical information
            max_tokens: 2000
        });

        return response;
    }
};

// Drug search function (flexible search)
async function searchDrug(query = null) {
    // 보안 검증
    if (!SecurityUtils.checkRateLimit('search')) {
        utils.showAlert('Too many requests. Please wait a moment.', 'warning');
        return;
    }

    let searchInput = query || document.getElementById('drugSearch').value.trim();
    if (!searchInput) {
        const searchContainer = document.getElementById('searchResults');
        document.getElementById('searchResultsContent').innerHTML = '';
        searchContainer.classList.remove('show');
        return;
    }

    // 입력값 sanitization
    searchInput = SecurityUtils.sanitizeInput(searchInput, 50);
    if (!searchInput) {
        utils.showAlert('Invalid search input detected.', 'warning');
        SecurityUtils.logSecurityEvent('INVALID_SEARCH_INPUT', { originalInput: query });
        return;
    }

    // 개발자 코드 체크
    if (utils.checkDeveloperCode(searchInput)) {
        return; // 개발자 모드 토글 후 종료
    }

    // 보안 이벤트 로깅
    SecurityUtils.logSecurityEvent('SEARCH_PERFORMED', { 
        term: SecurityUtils.escapeHtml(searchInput),
        length: searchInput.length
    });

    // 개발자 모드 로그
    if (state.developerMode) {
        utils.logToDevConsole(`🔍 Searching for: "${SecurityUtils.escapeHtml(searchInput)}"`, 'info');
    }

    const resultsDiv = document.getElementById('searchResultsContent');
    const searchContainer = document.getElementById('searchResults');
    
    // 검색 중일 때도 검색 결과 영역 표시
    searchContainer.classList.add('show');
    resultsDiv.innerHTML = '<div class="loading-spinner" style="margin: 20px auto;"></div>';

    try {
        const searchQuery = utils.convertSearchTerm(searchInput);
        const cacheKey = `search_${searchQuery}`;
        
        // Check cache
        if (state.drugCache.has(cacheKey)) {
            displaySearchResults(state.drugCache.get(cacheKey));
            return;
        }

        // Flexible search query generation
        const flexibleQueries = utils.generateFlexibleQueries(searchQuery);
        let combinedResults = { results: [] };
        
        if (state.developerMode) {
            utils.logToDevConsole(`🔄 Converted: "${SecurityUtils.escapeHtml(searchInput)}" → "${SecurityUtils.escapeHtml(searchQuery)}"`, 'info');
            utils.logToDevConsole(`📋 Generated ${flexibleQueries.length} search queries`, 'info');
        }

        // Try multiple search patterns
        for (let i = 0; i < flexibleQueries.length; i++) {
            try {
                if (state.developerMode) {
                    utils.logToDevConsole(`⚡ Trying query ${i + 1}/${flexibleQueries.length}`, 'info');
                }
                
                const apiUrl = `${BASE_URL}?api_key=${FDA_API_KEY}&search=${flexibleQueries[i]}&limit=20`;
                
                // URL 보안 검증
                if (!SecurityUtils.validateURL(apiUrl)) {
                    SecurityUtils.logSecurityEvent('INVALID_API_URL', { url: apiUrl.slice(0, 100) });
                    throw new Error('Invalid API URL detected');
                }
                
                const response = await fetch(apiUrl);
                
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }
                
                const data = await response.json();
                
                if (data.results && data.results.length > 0) {
                    combinedResults.results = [...combinedResults.results, ...data.results];
                    
                    if (state.developerMode) {
                        utils.logToDevConsole(`✅ Found ${data.results.length} results with query ${i + 1}`, 'success');
                    }
                    
                    // Stop if we have enough results from first query
                    if (i === 0 && data.results.length >= 5) break;
                }
            } catch (err) {
                if (state.developerMode) {
                    utils.logToDevConsole(`❌ Query ${i + 1} failed: ${err.message}`, 'error');
                }
                SecurityUtils.logSecurityEvent('SEARCH_QUERY_FAILED', { 
                    queryIndex: i + 1, 
                    error: err.message 
                });
                console.warn(`검색 패턴 ${i + 1} 실패:`, err);
                continue;
            }
        }
        
        // Deduplicate and sort by relevance
        combinedResults = utils.deduplicateAndSort(combinedResults, searchQuery);
        
        // Save to cache
        state.drugCache.set(cacheKey, combinedResults);
        displaySearchResults(combinedResults);
        
        utils.saveRecentSearch(searchInput);
        incrementSearchCount(); // 푸터 검색 카운트 증가
        
        if (state.developerMode) {
            const totalResults = combinedResults.results.length;
            utils.logToDevConsole(`🎯 Search completed: ${totalResults} total results`, 'success');
        }
    } catch (error) {
        console.error('Search error:', error);
        
        SecurityUtils.logSecurityEvent('SEARCH_ERROR', { 
            error: error.message,
            term: SecurityUtils.escapeHtml(searchInput)
        });
        
        if (state.developerMode) {
            utils.logToDevConsole(`💥 Search error: ${error.message}`, 'error');
        }
        
        // 에러가 발생해도 검색 결과 영역은 표시
        searchContainer.classList.add('show');
        resultsDiv.innerHTML = `
            <div style="text-align: center; color: var(--text-secondary); padding: 20px;">
                <p>An error occurred while searching.</p>
                <p style="font-size: 0.9em;">Try a different search term.</p>
            </div>
        `;
    }
}

// Real-time search handler
const realTimeSearchHandler = utils.debounce(async function() {
    const searchInput = document.getElementById('drugSearch').value.trim();
    if (searchInput.length < 2) {
        const searchContainer = document.getElementById('searchResults');
        document.getElementById('searchResultsContent').innerHTML = '';
        searchContainer.classList.remove('show');
        return;
    }
    await searchDrug(searchInput);
}, 300);

// Display search results (flexible search results included)
function displaySearchResults(data) {
    const resultsDiv = document.getElementById('searchResultsContent');
    const searchContainer = document.getElementById('searchResults');
    const searchTerm = document.getElementById('drugSearch').value.trim().toLowerCase();
    
    // 검색 결과 영역 표시
    searchContainer.classList.add('show');
    
    if (!data.results || data.results.length === 0) {
        resultsDiv.innerHTML = `
            <div class="scroll-fade" style="text-align: center; color: var(--text-secondary); padding: 20px;">
                <p>No search results found.</p>
                <p style="font-size: 0.9em;">Try a different search term or similar words.</p>
                <div style="margin-top: 12px; font-size: 0.85em;">
                    💡 Tip: Partial search is also possible (e.g., "aspir" → "Aspirin")
                </div>
            </div>
        `;
        
        // 새로 추가된 요소에 애니메이션 적용
        setTimeout(() => {
            const fadeElements = resultsDiv.querySelectorAll('.scroll-fade');
            fadeElements.forEach(el => el.classList.add('scroll-visible'));
            
            // 빈 결과일 때도 스크롤 상태 초기화
            setInitialScrollState(searchContainer);
        }, 50);
        
        return;
    }

    const uniqueDrugs = new Map();
    data.results.forEach(drug => {
        if (!drug.openfda) return;
        
        const brandNames = drug.openfda.brand_name || [];
        const genericNames = drug.openfda.generic_name || [];
        
        [...brandNames, ...genericNames].forEach(name => {
            const nameLower = name.toLowerCase();
            
            if (!uniqueDrugs.has(nameLower)) {
                // Calculate relevance score
                let relevanceScore = 0;
                let matchType = '';
                
                if (nameLower === searchTerm) {
                    relevanceScore = 100;
                    matchType = '정확한 일치';
                } else if (nameLower.startsWith(searchTerm)) {
                    relevanceScore = 90;
                    matchType = 'Start match';
                } else if (nameLower.includes(searchTerm)) {
                    relevanceScore = 80;
                    matchType = 'Partial match';
                } else {
                    const similarity = utils.calculateSimilarity(nameLower, searchTerm);
                    relevanceScore = similarity * 70;
                    matchType = 'Similar match';
                }

                uniqueDrugs.set(nameLower, {
                    name,
                    type: brandNames.includes(name) ? 'Brand' : 'Generic',
                    manufacturer: drug.openfda.manufacturer_name?.[0] || 'No info',
                    drugData: drug,
                    relevanceScore,
                    matchType
                });
            }
        });
    });

    // Sort by relevance
    const sortedDrugs = Array.from(uniqueDrugs.values())
        .sort((a, b) => b.relevanceScore - a.relevanceScore)
        .slice(0, 12);

    resultsDiv.innerHTML = sortedDrugs.map((drug, index) => {
        const isExactMatch = drug.relevanceScore >= 90;
        const matchIcon = isExactMatch ? '🎯' : drug.relevanceScore >= 80 ? '✨' : '🔍';
        
        return `
            <div class="drug-item scroll-hidden scroll-delay-${Math.min(index % 4 + 1, 4)} ${isExactMatch ? 'exact-match' : ''}" 
                 onclick="showDrugDetail('${drug.name}', this)" 
                 data-drug='${JSON.stringify(drug.drugData).replace(/'/g, "&apos;")}'>
                <div class="drug-item-name">
                    ${matchIcon} ${drug.name}
                    ${index < 3 && drug.relevanceScore >= 80 ? '<span class="top-result">TOP</span>' : ''}
                </div>
                <div class="drug-item-info">
                    ${drug.type} · ${drug.manufacturer}
                    <span class="match-type">${drug.matchType}</span>
                </div>
            </div>
        `;
    }).join('');
    
    // 새로 추가된 요소들에 애니메이션 적용
    setTimeout(() => {
        const newElements = resultsDiv.querySelectorAll('.scroll-hidden');
        newElements.forEach(el => el.classList.add('scroll-visible'));
        
        // 검색 결과 컨테이너에 스크롤 그라데이션 적용
        setTimeout(() => {
            setInitialScrollState(searchContainer);
            
            // 스크롤 이벤트 리스너가 없다면 추가
            if (!searchContainer.hasAttribute('data-scroll-listener')) {
                searchContainer.addEventListener('scroll', () => handleElementScroll(searchContainer), { passive: true });
                searchContainer.setAttribute('data-scroll-listener', 'true');
            }
            
            // 스크롤 가능 여부에 따른 그라데이션 미리보기
            if (searchContainer.scrollHeight > searchContainer.clientHeight) {
                searchContainer.classList.add('has-scroll');
                // 미리보기용 애니메이션 후 클래스 제거
                setTimeout(() => {
                    searchContainer.classList.remove('has-scroll');
                }, 3000);
            } else {
                searchContainer.classList.remove('has-scroll');
            }
        }, 100);
    }, 50);
}

// Display drug detail information
async function showDrugDetail(drugName, element = null) {
    // 보안 검증
    if (!SecurityUtils.checkRateLimit('drugDetail')) {
        utils.showAlert('Too many requests. Please wait a moment.', 'warning');
        return;
    }

    // 입력값 sanitization
    const sanitizedDrugName = SecurityUtils.sanitizeInput(drugName, 100);
    if (!sanitizedDrugName) {
        SecurityUtils.logSecurityEvent('INVALID_DRUG_NAME', { originalName: drugName });
        utils.showAlert('Invalid drug name detected.', 'warning');
        return;
    }

    const modal = document.getElementById('drugDetailModal');
    const title = document.getElementById('drugDetailTitle');
    const body = document.getElementById('drugDetailBody');
    
    // DOM 조작 보안 검사
    if (!SecurityUtils.validateDOMOperation(title, 'textContent') || 
        !SecurityUtils.validateDOMOperation(body, 'innerHTML')) {
        return;
    }
    
    // Disable body scroll when modal opens
    utils.disableBodyScroll();
    
    modal.classList.add('show');
    title.textContent = SecurityUtils.escapeHtml(sanitizedDrugName);
    body.innerHTML = '<div class="loading-spinner" style="margin: 40px auto;"></div>';
    
    // 모달 콘텐츠에 스크롤 그라데이션 적용
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) {
        setInitialScrollState(modalContent);
        
        // 스크롤 이벤트 리스너가 없다면 추가
        if (!modalContent.hasAttribute('data-scroll-listener')) {
            modalContent.addEventListener('scroll', () => handleElementScroll(modalContent), { passive: true });
            modalContent.setAttribute('data-scroll-listener', 'true');
        }
    }

    // 보안 이벤트 로깅
    SecurityUtils.logSecurityEvent('DRUG_DETAIL_VIEWED', { 
        drugName: SecurityUtils.escapeHtml(sanitizedDrugName)
    });

    try {
        let drugData;
        if (element && element.dataset.drug) {
            try {
                drugData = JSON.parse(element.dataset.drug.replace(/&apos;/g, "'"));
            } catch (parseError) {
                SecurityUtils.logSecurityEvent('INVALID_DRUG_DATA', { 
                    error: parseError.message,
                    drugName: SecurityUtils.escapeHtml(sanitizedDrugName)
                });
                throw new Error('Invalid drug data format');
            }
        } else {
            const apiUrl = `${BASE_URL}?api_key=${FDA_API_KEY}&search=openfda.brand_name:"${encodeURIComponent(sanitizedDrugName)}"+OR+openfda.generic_name:"${encodeURIComponent(sanitizedDrugName)}"&limit=1`;
            
            // URL 보안 검증
            if (!SecurityUtils.validateURL(apiUrl)) {
                SecurityUtils.logSecurityEvent('INVALID_API_URL', { url: apiUrl.slice(0, 100) });
                throw new Error('Invalid API URL detected');
            }
            
            const response = await fetch(apiUrl);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const data = await response.json();
            drugData = data.results?.[0];
        }

        if (!drugData) {
            body.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Drug information not found.</p>';
            return;
        }

        const sections = {
            description: drugData.description?.[0] || '',
            indications: drugData.indications_and_usage?.[0] || '',
            warnings: drugData.warnings?.[0] || '',
            dosage: drugData.dosage_and_administration?.[0] || '',
            interactions: drugData.drug_interactions?.[0] || ''
        };

        // Translation
        const translations = await Promise.all(
            Object.values(sections).map(text => text ? utils.translateToKorean(text) : '')
        );

        const translatedSections = {};
        Object.keys(sections).forEach((key, index) => {
            translatedSections[key] = translations[index];
        });

        // HTML 이스케이프 적용
        const safeContent = {
            manufacturer: SecurityUtils.escapeHtml(drugData.openfda?.manufacturer_name?.join(', ') || 'No info'),
            route: SecurityUtils.escapeHtml(drugData.openfda?.route?.join(', ') || 'No info'),
            description: SecurityUtils.escapeHtml(translatedSections.description || sections.description),
            indications: SecurityUtils.escapeHtml(translatedSections.indications || sections.indications),
            warnings: SecurityUtils.escapeHtml(translatedSections.warnings || sections.warnings),
            interactions: SecurityUtils.escapeHtml(translatedSections.interactions || sections.interactions),
            drugName: SecurityUtils.escapeHtml(sanitizedDrugName)
        };

        body.innerHTML = `
            <div class="drug-detail-section">
                <h4>Basic information</h4>
                <p><strong>Manufacturer:</strong> ${safeContent.manufacturer}</p>
                <p><strong>Form:</strong> ${safeContent.route}</p>
            </div>
            ${sections.description ? `
                <div class="drug-detail-section">
                    <h4>Description</h4>
                    <p>${safeContent.description}</p>
                </div>
            ` : ''}
            ${sections.indications ? `
                <div class="drug-detail-section">
                    <h4>Indications</h4>
                    <p>${safeContent.indications}</p>
                </div>
            ` : ''}
            ${sections.warnings ? `
                <div class="drug-detail-section">
                    <h4>Warnings</h4>
                    <p>${safeContent.warnings}</p>
                </div>
            ` : ''}
            ${sections.interactions ? `
                <div class="drug-detail-section">
                    <h4>Drug interactions</h4>
                    <p>${safeContent.interactions}</p>
                </div>
            ` : ''}
            <div style="text-align: center; margin-top: 24px;">
                <button class="btn btn-primary add-to-check-btn" onclick="addDrugToCheck('${safeContent.drugName}')" title="Add to interaction check">
                    <span class="btn-icon">➕</span>
                    <span class="btn-text">Add to interaction check</span>
                </button>
            </div>
        `;
    } catch (error) {
        console.error('상세 정보 로드 오류:', error);
        
        SecurityUtils.logSecurityEvent('DRUG_DETAIL_ERROR', { 
            error: error.message,
            drugName: SecurityUtils.escapeHtml(sanitizedDrugName)
        });
        
        body.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">정보를 불러오는 중 오류가 발생했습니다.</p>';
    }
}

// Add drug information input line to check
function addDrugToCheck(drugName) {
    const drug1 = document.getElementById('drug1');
    const drug2 = document.getElementById('drug2');
    
    if (!drug1.value) {
        drug1.value = drugName;
        utils.showAlert(`${drugName} has been added as the first drug.`, 'success');
    } else if (!drug2.value) {
        if (drug1.value === drugName) {
            utils.showAlert('This drug is already selected.', 'warning');
            return;
        }
        drug2.value = drugName;
        utils.showAlert(`${drugName} has been added as the second drug.`, 'success');
    } else {
        utils.showAlert('Two drugs are already selected.', 'warning');
    }
    
    closeDrugDetail();
}

// Drug selection dropdown
const drugSearchHandler = utils.debounce(async function(inputId, drugNumber) {
    const input = document.getElementById(inputId);
    const query = input.value.trim();
    const list = document.getElementById(`${inputId}List`);
    const itemsContainer = list.querySelector('.drug-items');
    
    if (query.length < 2) {
        list.classList.remove('show');
        return;
    }

    itemsContainer.innerHTML = '<div class="loading-spinner" style="margin: 20px auto;"></div>';
    list.classList.add('show');

    try {
        const searchQuery = utils.convertSearchTerm(query);
        const response = await fetch(
            `${BASE_URL}?api_key=${FDA_API_KEY}&search=openfda.brand_name:"${searchQuery}"+OR+openfda.generic_name:"${searchQuery}"&limit=10`
        );
        const data = await response.json();
        
        if (!data.results || data.results.length === 0) {
            itemsContainer.innerHTML = `
                <div style="padding: 20px; text-align: center; color: var(--text-secondary);">
                    No search results found.
                </div>
            `;
            return;
        }

        const uniqueDrugs = new Set();
        let html = '';

        data.results.forEach(drug => {
            if (!drug.openfda) return;
            
            const names = [...(drug.openfda.brand_name || []), ...(drug.openfda.generic_name || [])];
            names.forEach(name => {
                if (!uniqueDrugs.has(name)) {
                    uniqueDrugs.add(name);
                    html += `
                        <div class="drug-item scroll-hidden scroll-delay-${Math.min((uniqueDrugs.size % 4) + 1, 4)}" onclick="selectDrug('${inputId}', '${name}')">
                            <div class="drug-item-name">${name}</div>
                        </div>
                    `;
                }
            });
        });

        itemsContainer.innerHTML = html;
        
        // 드롭다운 항목들에 애니메이션 적용
        setTimeout(() => {
            const newItems = itemsContainer.querySelectorAll('.scroll-hidden');
            newItems.forEach(item => item.classList.add('scroll-visible'));
            
            // 드롭다운 리스트에 스크롤 그라데이션 적용
            setInitialScrollState(list);
            
            // 스크롤 이벤트 리스너가 없다면 추가
            if (!list.hasAttribute('data-scroll-listener')) {
                list.addEventListener('scroll', () => handleElementScroll(list), { passive: true });
                list.setAttribute('data-scroll-listener', 'true');
            }
        }, 50);
    } catch (error) {
        console.error('Search error:', error);
        itemsContainer.innerHTML = `
            <div style="padding: 20px; text-align: center; color: var(--text-secondary);">
                An error occurred while searching.
            </div>
        `;
    }
}, 300);

// Drug selection
function selectDrug(inputId, drugName) {
    document.getElementById(inputId).value = drugName;
    document.getElementById(`${inputId}List`).classList.remove('show');
}

// 약물명 유효성 검사 함수 (영문)
function isValidDrugName(drugName) {
    if (!drugName) return false;
    const lower = drugName.trim().toLowerCase();
    // 매핑에 있으면 OK, 또는 2글자 이상이면 FDA API에서 검색 가능
    return (
        Object.values(drugNameMapping).some(v => v.toLowerCase() === lower) ||
        Object.keys(drugNameMapping).some(k => k.toLowerCase() === lower) ||
        drugName.trim().length >= 2
    );
}

// 자동 상호작용 확인 기능 제거됨 - 사용자가 직접 버튼을 눌러야 함

// checkInteraction 수정: 입력값이 유효한 약물명일 때만 검사
async function checkInteraction() {
    console.log('🔍 Interaction check started');
    const drug1Element = document.getElementById('drug1');
    const drug2Element = document.getElementById('drug2');
    if (!drug1Element || !drug2Element) {
        alert('System error: Drug input fields not found.');
        return;
    }
    const drug1 = drug1Element.value.trim();
    const drug2 = drug2Element.value.trim();
    if (!drug1 && !drug2) {
        alert('Please enter both drugs.');
        drug1Element.focus();
        return;
    }
    if (!drug1) {
        alert('Please enter the first drug.');
        drug1Element.focus();
        return;
    }
    if (!drug2) {
        alert('Please enter the second drug.');
        drug2Element.focus();
        return;
    }
    // 약물명 유효성 검사
    if (!isValidDrugName(drug1)) {
        alert('The first drug name is not valid. Please enter an exact drug name.');
        drug1Element.focus();
        drug1Element.select();
        return;
    }
    if (!isValidDrugName(drug2)) {
        alert('The second drug name is not valid. Please enter an exact drug name.');
        drug2Element.focus();
        drug2Element.select();
        return;
    }
    if (drug1 === drug2) {
        alert('Please select two different drugs.');
        drug2Element.focus();
        drug2Element.select();
        return;
    }

    utils.showLoading('Checking drug interactions...');
    const resultSection = document.getElementById('resultSection');
    const resultDiv = document.getElementById('result');

    try {
        // Get information about both drugs
        const [response1, response2] = await Promise.all([
            fetch(`${BASE_URL}?api_key=${FDA_API_KEY}&search=openfda.brand_name:"${drug1}"+OR+openfda.generic_name:"${drug1}"&limit=1`),
            fetch(`${BASE_URL}?api_key=${FDA_API_KEY}&search=openfda.brand_name:"${drug2}"+OR+openfda.generic_name:"${drug2}"&limit=1`)
        ]);

        const [data1, data2] = await Promise.all([response1.json(), response2.json()]);

        if (!data1.results?.length || !data2.results?.length) {
            throw new Error('Drug information not found.');
        }

        const drug1Info = data1.results[0];
        const drug2Info = data2.results[0];

        // Check interaction
        const interactions1 = drug1Info.drug_interactions?.[0] || '';
        const interactions2 = drug2Info.drug_interactions?.[0] || '';
        
        const hasInteraction = 
            interactions1.toLowerCase().includes(drug2.toLowerCase()) ||
            interactions2.toLowerCase().includes(drug1.toLowerCase());

        // Display result
        console.log('🔍 Result section display start');
        console.log('resultSection:', resultSection);
        console.log('resultDiv:', resultDiv);
        
        if (!resultSection) {
            console.error('❌ resultSection not found');
            alert('System error: Result section not found.');
            return;
        }
        
        if (!resultDiv) {
            console.error('❌ resultDiv not found');
            alert('System error: Result area not found.');
            return;
        }
        
        resultSection.style.display = 'block';
        resultSection.style.visibility = 'visible';
        resultSection.style.opacity = '1';
        resultSection.classList.remove('scroll-visible'); // 애니메이션 리셋
        console.log('✅ Result section display setup complete');
        
        // Try AI analysis
        let aiAnalysis = null;
        let aiProvider = null;
        try {
            const availableProviders = utils.getAvailableProviders();
            if (availableProviders.length > 0) {
                const selectedProvider = utils.selectBestProvider();
                const config = AI_CONFIGS[selectedProvider];
                
                resultDiv.innerHTML = `
                    <div class="result-card scroll-fade">
                        <div class="result-header">
                            <span class="result-icon">${config.icon}</span>
                            <h3 class="result-title">${config.name} AI가 상호작용을 분석하고 있습니다...</h3>
                        </div>
                        <div class="loading-spinner" style="margin: 20px auto;"></div>
                    </div>
                `;
                
                // 로딩 카드 애니메이션 적용
                setTimeout(() => {
                    const loadingCard = resultDiv.querySelector('.scroll-fade');
                    if (loadingCard) loadingCard.classList.add('scroll-visible');
                }, 50);
                
                const response = await utils.analyzeInteraction(drug1, drug2, interactions1, interactions2, drug1Info, drug2Info);
                aiAnalysis = response.result;
                aiProvider = response.provider;
            }
        } catch (error) {
            console.error('AI analysis error:', error);
            aiAnalysis = null;
            aiProvider = null;
        }
        
        if (hasInteraction || (interactions1 || interactions2)) {
            // Translation
            const [trans1, trans2] = await Promise.all([
                interactions1 ? utils.translateToKorean(interactions1) : '',
                interactions2 ? utils.translateToKorean(interactions2) : ''
            ]);

            resultDiv.innerHTML = `
                <div class="result-card result-warning scroll-scale">
                    <div class="result-header">
                        <span class="result-icon">⚠️</span>
                        <h3 class="result-title">Attention is needed</h3>
                    </div>
                    <div class="result-content">
                        ${aiAnalysis ? `
                            <div class="ai-analysis scroll-slide-left scroll-delay-1">
                                <div class="ai-analysis-header">
                                    <span class="ai-icon">🤖</span>
                                    <h4>${aiProvider} AI Expert Analysis</h4>
                                </div>
                                <div class="ai-analysis-content">
                                    ${aiAnalysis.replace(/\n/g, '<br>')}
                                </div>
                            </div>
                        ` : ''}
                        
                        ${(interactions1 || interactions2) ? `
                            <div class="fda-toggle-section scroll-slide-right scroll-delay-2">
                                <button class="fda-toggle-btn" onclick="toggleFDAData(this)">
                                    <span class="toggle-icon">📋</span>
                                    <span class="toggle-text">View FDA Original Data</span>
                                    <span class="toggle-arrow">▼</span>
                                </button>
                                <div class="fda-data-container" style="display: none;">
                                    <div class="fda-data">
                                        <p><strong>${drug1}</strong> and <strong>${drug2}</strong> combination:</p>
                                        ${interactions1 ? `
                                            <h5>${drug1} related interactions</h5>
                                            <p>${trans1 || interactions1}</p>
                                        ` : ''}
                                        ${interactions2 ? `
                                            <h5>${drug2} related interactions</h5>
                                            <p>${trans2 || interactions2}</p>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                        ` : ''}
                        
                        <div class="scroll-fade scroll-delay-3" style="margin-top: 20px; padding: 16px; background: rgba(0,0,0,0.05); border-radius: 8px;">
                            <p style="margin: 0; font-size: 0.9em;">
                                ⚠️ This information is for reference only. Please consult with a doctor or pharmacist before taking these medications.
                            </p>
                        </div>
                    </div>
                </div>
            `;
        } else {
            resultDiv.innerHTML = `
                <div class="result-card result-safe scroll-scale">
                    <div class="result-header">
                        <span class="result-icon">✅</span>
                        <h3 class="result-title">A relatively safe combination</h3>
                    </div>
                    <div class="result-content">
                        ${aiAnalysis ? `
                            <div class="ai-analysis scroll-slide-left scroll-delay-1">
                                <div class="ai-analysis-header">
                                    <span class="ai-icon">🤖</span>
                                    <h4>${aiProvider} AI Expert Analysis</h4>
                                </div>
                                <div class="ai-analysis-content">
                                    ${aiAnalysis.replace(/\n/g, '<br>')}
                                </div>
                            </div>
                        ` : ''}
                        
                        <div class="fda-toggle-section scroll-slide-right scroll-delay-2">
                            <button class="fda-toggle-btn" onclick="toggleFDAData(this)">
                                <span class="toggle-icon">📋</span>
                                <span class="toggle-text">View FDA Basic Information</span>
                                <span class="toggle-arrow">▼</span>
                            </button>
                            <div class="fda-data-container" style="display: none;">
                                <div class="basic-info">
                                    <p><strong>${drug1}</strong> and <strong>${drug2}</strong> combination: No major interactions found in FDA data.</p>
                                    <p style="margin-top: 16px;">However, individual health conditions, dosage, and combination with other medications may vary, so it is recommended to consult with a healthcare professional before taking these medications.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // 결과 섹션 자체 애니메이션 적용
        setTimeout(() => {
            resultSection.classList.add('scroll-visible');
            // 내부 요소들 애니메이션 적용
            const animateElements = resultDiv.querySelectorAll('.scroll-scale, .scroll-slide-left, .scroll-slide-right, .scroll-fade');
            animateElements.forEach(el => el.classList.add('scroll-visible'));
            
            // 결과 섹션에 스크롤 그라데이션 적용
            setInitialScrollState(resultSection);
            
            // 스크롤 이벤트 리스너가 없다면 추가
            if (!resultSection.hasAttribute('data-scroll-listener')) {
                resultSection.addEventListener('scroll', () => handleElementScroll(resultSection), { passive: true });
                resultSection.setAttribute('data-scroll-listener', 'true');
            }
        }, 100);

        // Smooth scroll
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
    } catch (error) {
        console.error('Interaction check error:', error);
        resultSection.style.display = 'block';
        resultSection.style.visibility = 'visible';
        resultSection.style.opacity = '1';
        resultDiv.innerHTML = `
            <div class="result-card result-warning scroll-scale">
                <div class="result-header">
                    <span class="result-icon">❌</span>
                    <h3 class="result-title">Error occurred</h3>
                </div>
                <div class="result-content scroll-fade scroll-delay-1">
                    <p>An error occurred while checking the drug information.</p>
                    <p>Please try again or contact support.</p>
                </div>
            </div>
        `;
        
        // 에러 카드 애니메이션 적용
        setTimeout(() => {
            resultSection.classList.add('scroll-visible');
            const animateElements = resultDiv.querySelectorAll('.scroll-scale, .scroll-fade');
            animateElements.forEach(el => el.classList.add('scroll-visible'));
            
            // 결과 섹션에 스크롤 그라데이션 적용
            setInitialScrollState(resultSection);
            
            // 스크롤 이벤트 리스너가 없다면 추가
            if (!resultSection.hasAttribute('data-scroll-listener')) {
                resultSection.addEventListener('scroll', () => handleElementScroll(resultSection), { passive: true });
                resultSection.setAttribute('data-scroll-listener', 'true');
            }
        }, 100);
    } finally {
        utils.hideLoading();
    }
}

// Update recent searches
function updateRecentSearches() {
    const list = document.getElementById('recentSearchesList');
    list.innerHTML = state.recentSearches.map((term, index) => `
        <span class="tag scroll-hidden scroll-delay-${Math.min(index % 4 + 1, 4)}" onclick="useRecentSearch('${term}')">${term}</span>
    `).join('');
    
    // 새로 추가된 태그들에 애니메이션 적용
    setTimeout(() => {
        const newTags = list.querySelectorAll('.scroll-hidden');
        newTags.forEach(tag => tag.classList.add('scroll-visible'));
    }, 50);
}

// Use recent search
function useRecentSearch(term) {
    const searchInput = document.getElementById('drugSearch');
    searchInput.value = term;
    // Trigger input event to run real-time search
    searchInput.dispatchEvent(new Event('input'));
}

// Use example drug
function useExampleDrug(drugName) {
    const searchInput = document.getElementById('drugSearch');
    searchInput.value = drugName;
    // Trigger input event to run real-time search
    searchInput.dispatchEvent(new Event('input'));
}

// Toggle FDA data display
function toggleFDAData(button) {
    const container = button.nextElementSibling;
    const arrow = button.querySelector('.toggle-arrow');
    const text = button.querySelector('.toggle-text');
    
    if (container.style.display === 'none') {
        container.style.display = 'block';
        arrow.textContent = '▲';
        text.textContent = text.textContent.replace('View', 'Hide');
        button.classList.add('expanded');
    } else {
        container.style.display = 'none';
        arrow.textContent = '▼';
        text.textContent = text.textContent.replace('Hide', 'View');
        button.classList.remove('expanded');
    }
}

// Close modal
function closeDrugDetail() {
    const modal = document.getElementById('drugDetailModal');
    modal.classList.add('closing');
    
    setTimeout(() => {
        modal.classList.remove('show', 'closing');
        // Restore body scroll when modal closes
        utils.enableBodyScroll();
    }, 400); // CSS transition 시간과 동일
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Open settings modal
function openSettings() {
    const modal = document.getElementById('settingsModal');
    
    // Disable body scroll when modal opens
    utils.disableBodyScroll();
    
    // Load existing settings
    document.getElementById('aiProvider').value = getSelectedProvider();
    
    // Load API keys for each AI service
    Object.keys(AI_CONFIGS).forEach(provider => {
        const input = document.getElementById(`${provider}ApiKey`);
        const currentKey = getAPIKey(provider);
        if (currentKey && input) {
            input.value = currentKey;
        }
    });
    
    // Update API status
    updateAPIStatus();
    
    modal.classList.add('show');
    
    // 설정 모달 바디에 스크롤 그라데이션 적용
    setTimeout(() => {
        const settingsBody = modal.querySelector('.settings-body');
        if (settingsBody) {
            setInitialScrollState(settingsBody);
            
            // 스크롤 이벤트 리스너가 없다면 추가
            if (!settingsBody.hasAttribute('data-scroll-listener')) {
                settingsBody.addEventListener('scroll', () => handleElementScroll(settingsBody), { passive: true });
                settingsBody.setAttribute('data-scroll-listener', 'true');
            }
        }
    }, 100);
}

// Close settings modal
function closeSettings() {
    const modal = document.getElementById('settingsModal');
    modal.classList.add('closing');
    
    setTimeout(() => {
        modal.classList.remove('show', 'closing');
        // Restore body scroll when modal closes
        utils.enableBodyScroll();
    }, 400); // CSS transition 시간과 동일
}

// Save settings
function saveSettings() {
    // 보안 검증 - Rate limiting
    if (!SecurityUtils.checkRateLimit('saveSettings')) {
        utils.showAlert('Too many settings save attempts. Please wait a moment.', 'warning');
        return;
    }

    // CSRF 토큰 검증 (간소화된 버전)
    const formToken = SECURITY_CONFIG.csrfToken;
    if (!SecurityUtils.validateCSRFToken(formToken)) {
        SecurityUtils.logSecurityEvent('INVALID_CSRF_TOKEN', { action: 'saveSettings' });
        utils.showAlert('Security validation failed. Please refresh the page.', 'warning');
        return;
    }

    const aiProvider = document.getElementById('aiProvider').value;
    let savedCount = 0;
    let errors = [];
    
    // 입력값 검증
    const sanitizedProvider = SecurityUtils.sanitizeInput(aiProvider, 20);
    if (!sanitizedProvider || !AI_CONFIGS[sanitizedProvider]) {
        SecurityUtils.logSecurityEvent('INVALID_AI_PROVIDER', { provider: aiProvider });
        utils.showAlert('Invalid AI provider selected.', 'warning');
        return;
    }

    // 보안 이벤트 로깅
    SecurityUtils.logSecurityEvent('SETTINGS_SAVE_ATTEMPT', { 
        provider: sanitizedProvider 
    });
    
    // Save selected AI service (보안 강화된 저장)
    if (!SecurityUtils.secureLocalStorage.setItem('selected_ai_provider', sanitizedProvider)) {
        utils.showAlert('Failed to save AI provider selection.', 'warning');
        return;
    }
    
    // Save API keys for each AI service
    Object.keys(AI_CONFIGS).forEach(provider => {
        const input = document.getElementById(`${provider}ApiKey`);
        if (input) {
            let apiKey = input.value.trim();
            
            if (apiKey) {
                // 입력값 sanitization (API 키는 특별 처리)
                apiKey = apiKey.replace(/[^a-zA-Z0-9\-_]/g, '');
                
                if (apiKey.length < 10) {
                    errors.push(`${AI_CONFIGS[provider].name}: API key too short`);
                    SecurityUtils.logSecurityEvent('INVALID_API_KEY_LENGTH', { 
                        provider: provider,
                        length: apiKey.length 
                    });
                    return;
                }
                
                // Validate API key format
                const isValid = validateAPIKey(provider, apiKey);
                if (isValid) {
                    // 보안 강화된 저장
                    if (SecurityUtils.secureLocalStorage.setItem(`${provider}_api_key`, apiKey)) {
                        savedCount++;
                        
                        // 성공적인 API 키 저장 로깅 (마스킹된 키만 로그)
                        SecurityUtils.logSecurityEvent('API_KEY_SAVED', { 
                            provider: provider,
                            keyMask: SecurityUtils.maskApiKey(apiKey)
                        });
                        
                        // 메모리에서 민감한 데이터 제거
                        input.value = '***SAVED***';
                        setTimeout(() => {
                            if (input.value === '***SAVED***') {
                                input.value = '';
                            }
                        }, 2000);
                    } else {
                        errors.push(`${AI_CONFIGS[provider].name}: Failed to save API key`);
                    }
                } else {
                    errors.push(`${AI_CONFIGS[provider].name}: Invalid API key format`);
                    SecurityUtils.logSecurityEvent('INVALID_API_KEY_FORMAT', { 
                        provider: provider,
                        keyMask: SecurityUtils.maskApiKey(apiKey)
                    });
                }
            } else {
                // Remove existing key if empty (보안 강화된 제거)
                if (SecurityUtils.secureLocalStorage.removeItem(`${provider}_api_key`)) {
                    SecurityUtils.logSecurityEvent('API_KEY_REMOVED', { provider: provider });
                }
            }
        }
    });
    
    // Update API status
    updateAPIStatus();
    
    // 결과 알림 및 로깅
    if (errors.length > 0) {
        const errorMessage = `Some API keys have issues: ${errors.join(', ')}`;
        SecurityUtils.logSecurityEvent('SETTINGS_SAVE_ERRORS', { 
            errors: errors,
            savedCount: savedCount
        });
        utils.showAlert(errorMessage, 'warning');
    } else if (savedCount > 0) {
        SecurityUtils.logSecurityEvent('SETTINGS_SAVE_SUCCESS', { 
            savedCount: savedCount,
            provider: sanitizedProvider
        });
        utils.showAlert(`${savedCount} API keys have been saved! AI analysis features are now available.`, 'success');
        closeSettings();
    } else {
        SecurityUtils.logSecurityEvent('SETTINGS_SAVE_NO_KEYS', {});
        utils.showAlert('No API keys saved. To use AI analysis, please enter at least one API key.', 'info');
    }
}

// Validate API key format
function validateAPIKey(provider, key) {
    const patterns = {
        openai: /^sk-[a-zA-Z0-9]{20,}$/,
        claude: /^sk-ant-[a-zA-Z0-9-_]{20,}$/,
        perplexity: /^pplx-[a-zA-Z0-9]{20,}$/,
        gemini: /^AI[a-zA-Z0-9-_]{20,}$/
    };
    
    const pattern = patterns[provider];
    return pattern ? pattern.test(key) : key.length >= 20; // Default to 20 characters or more
}

// Update API status
function updateAPIStatus() {
    Object.keys(AI_CONFIGS).forEach(provider => {
        const statusElement = document.getElementById(`${provider}-status`);
        if (statusElement) {
            const apiKey = getAPIKey(provider);
            const statusIcon = statusElement.querySelector('.status-icon');
            
            statusElement.classList.remove('active', 'error');
            
            if (apiKey && validateAPIKey(provider, apiKey)) {
                statusElement.classList.add('active');
                statusIcon.textContent = '🟢';
            } else {
                statusIcon.textContent = '⚪';
            }
        }
    });
}

// Test individual API
async function testAPI(provider) {
    try {
        const config = AI_CONFIGS[provider];
        const testMessages = [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: "Hello, please respond with 'Test successful'" }
        ];
        
        let result;
        switch (provider) {
            case 'openai':
                result = await utils.callOpenAI(testMessages);
                break;
            case 'claude':
                result = await utils.callClaude(testMessages);
                break;
            case 'perplexity':
                result = await utils.callPerplexity(testMessages);
                break;
            case 'gemini':
                result = await utils.callGemini(testMessages);
                break;
            default:
                throw new Error('Unsupported AI service');
        }
        
        return { success: true, result: result };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// Test all APIs
async function testAllAPIs() {
    const availableProviders = utils.getAvailableProviders();
    
    if (availableProviders.length === 0) {
        utils.showAlert('No API keys configured. Please enter API keys first.', 'warning');
        return;
    }
    
    utils.showLoading('Testing API connections...');
    
    const results = [];
    
    for (const provider of availableProviders) {
        const config = AI_CONFIGS[provider];
        const statusElement = document.getElementById(`${provider}-status`);
        const statusIcon = statusElement.querySelector('.status-icon');
        
        // Displaying the test status
        statusIcon.textContent = '🔄';
        
        const testResult = await testAPI(provider);
        
        if (testResult.success) {
            statusElement.classList.add('active');
            statusElement.classList.remove('error');
            statusIcon.textContent = '🟢';
            results.push(`✅ ${config.name}: Connection successful`);
        } else {
            statusElement.classList.add('error');
            statusElement.classList.remove('active');
            statusIcon.textContent = '🔴';
            results.push(`❌ ${config.name}: ${testResult.error}`);
        }
    }
    
    utils.hideLoading();
    
    const successCount = results.filter(r => r.startsWith('✅')).length;
    const totalCount = results.length;
    
    const message = `API test completed: ${successCount}/${totalCount} success - ${results.join(', ')}`;
    
    if (successCount === totalCount) {
        utils.showAlert(message, 'success');
    } else if (successCount > 0) {
        utils.showAlert(message, 'warning');
    } else {
        utils.showAlert(message, 'warning');
    }
}

// Check API key status and guide
function checkAPIKeyStatus() {
    const availableProviders = utils.getAvailableProviders();
    
    if (availableProviders.length === 0) {
        // Displaying the guide message when API key is not set
        setTimeout(() => {
            utils.showAlert('To use AI analysis features, please enter API keys in settings. (Choose from OpenAI, Claude, Perplexity, Gemini)', 'info');
        }, 2000);
    } else {
        // Displaying the guide message when AI service is available
        const providerNames = availableProviders.map(p => AI_CONFIGS[p].name).join(', ');
        setTimeout(() => {
            utils.showAlert(`${providerNames} AI analysis is ready!`, 'success');
        }, 1000);
    }
}

// Developer Tools
const devTools = {
    clearCache() {
        state.drugCache.clear();
        utils.logToDevConsole('✅ Cache cleared', 'success');
        utils.showAlert('Cache cleared successfully', 'success');
    },

    clearStorage() {
        localStorage.clear();
        state.recentSearches = [];
        utils.logToDevConsole('✅ Local storage cleared', 'success');
        utils.showAlert('Local storage cleared successfully', 'success');
        updateRecentSearches();
    },

    exportLogs() {
        const logs = [];
        const consoleEl = document.getElementById('devConsole');
        if (consoleEl) {
            consoleEl.querySelectorAll('.console-line').forEach(line => {
                logs.push(line.textContent);
            });
        }
        
        const dataStr = JSON.stringify({
            timestamp: new Date().toISOString(),
            logs: logs,
            state: {
                cacheSize: state.drugCache.size,
                recentSearches: state.recentSearches.length,
                isLoading: state.isLoading,
                developerMode: state.developerMode
            }
        }, null, 2);
        
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `drug-checker-logs-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);
        
        utils.logToDevConsole('📄 Logs exported', 'success');
    },

    async testAllAPIs() {
        utils.logToDevConsole('🧪 Testing all APIs...', 'info');
        const providers = Object.keys(AI_CONFIGS);
        const results = {};
        
        for (const provider of providers) {
            try {
                const apiKey = getAPIKey(provider);
                if (!apiKey) {
                    results[provider] = 'No API key';
                    continue;
                }
                
                utils.logToDevConsole(`Testing ${provider}...`, 'info');
                await testAPI(provider);
                results[provider] = 'Success';
            } catch (error) {
                results[provider] = error.message;
                utils.logToDevConsole(`❌ ${provider} failed: ${error.message}`, 'error');
            }
        }
        
        utils.logToDevConsole(`🧪 API test results: ${JSON.stringify(results)}`, 'info');
    },

    showDebugInfo() {
        const info = {
            userAgent: navigator.userAgent,
            language: navigator.language,
            cookieEnabled: navigator.cookieEnabled,
            onLine: navigator.onLine,
            viewport: {
                width: window.innerWidth,
                height: window.innerHeight
            },
            localStorage: {
                available: typeof(Storage) !== "undefined",
                usage: JSON.stringify(localStorage).length + ' bytes'
            },
            state: {
                cacheSize: state.drugCache.size,
                recentSearches: state.recentSearches.length,
                isLoading: state.isLoading,
                developerMode: state.developerMode
            },
            apiKeys: utils.getAvailableProviders()
        };
        
        utils.logToDevConsole('🔍 Debug Info:', 'info');
        Object.entries(info).forEach(([key, value]) => {
            utils.logToDevConsole(`  ${key}: ${JSON.stringify(value)}`, 'info');
        });
    },

    async performanceTest() {
        utils.logToDevConsole('⚡ Running performance test...', 'info');
        
        const testDrugs = ['aspirin', 'ibuprofen', 'acetaminophen'];
        const startTime = performance.now();
        
        try {
            for (const drug of testDrugs) {
                const testStart = performance.now();
                await searchDrug(drug);
                const testEnd = performance.now();
                utils.logToDevConsole(`  ${drug}: ${(testEnd - testStart).toFixed(2)}ms`, 'info');
            }
            
            const totalTime = performance.now() - startTime;
            utils.logToDevConsole(`⚡ Performance test completed in ${totalTime.toFixed(2)}ms`, 'success');
        } catch (error) {
            utils.logToDevConsole(`❌ Performance test failed: ${error.message}`, 'error');
        }
    }
};

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 English page initialization started');
    
    // File detection functionality
    detectAvailableFiles();
    
    // Displaying the recent searches
    updateRecentSearches();
    
    // Check API key status
    checkAPIKeyStatus();
    
    // Initialize API status (for settings modal)
    setTimeout(() => {
        updateAPIStatus();
    }, 100);

    // Search input event
    document.getElementById('drugSearch').addEventListener('input', realTimeSearchHandler);
    
    document.getElementById('drugSearch').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchDrug();
        }
    });

    // Drug selection input event
    document.getElementById('drug1').addEventListener('input', function() {
        drugSearchHandler('drug1', 1);
    });

    document.getElementById('drug2').addEventListener('input', function() {
        drugSearchHandler('drug2', 2);
    });

    // 약물 입력 필드에서 Enter 키 처리
    document.getElementById('drug1').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const drug2Element = document.getElementById('drug2');
            if (drug2Element) {
                drug2Element.focus();
            }
        }
    });

    document.getElementById('drug2').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            // Enter 키로 상호작용 검사 버튼 클릭
            const checkButton = document.querySelector('.btn.btn-primary.btn-block');
            if (checkButton) {
                checkButton.click();
            }
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.drug-select-container')) {
            document.querySelectorAll('.drug-list').forEach(list => {
                list.classList.remove('show');
            });
        }
    });

    // Close modal when clicking outside
    document.getElementById('drugDetailModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeDrugDetail();
        }
    });

    // Close settings modal when clicking outside
    document.getElementById('settingsModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeSettings();
        }
    });

    // Close modal when pressing ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeDrugDetail();
            closeSettings();
            if (state.developerMode && e.target.closest('.developer-panel')) {
                utils.toggleDeveloperMode();
            }
        }
    });

    // Save settings when pressing Enter key
    Object.keys(AI_CONFIGS).forEach(provider => {
        const input = document.getElementById(`${provider}ApiKey`);
        if (input) {
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    saveSettings();
                }
            });
        }
    });

    // Display/hide FAB when scrolling
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const fab = document.querySelector('.fab');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 200) {
            if (scrollTop > lastScrollTop) {
                fab.style.transform = 'scale(0)';
            } else {
                fab.style.transform = 'scale(1)';
            }
        } else {
            fab.style.transform = 'scale(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // 개발자 모드가 활성화되어 있으면 패널 표시
    if (state.developerMode) {
        utils.createDeveloperPanel();
    }
    
    // 설정 버튼 드래그 기능
    initSettingsFabDrag();
    
    // 스크롤 애니메이션 초기화
    initScrollAnimations();
    
    // 향상된 스크롤 관찰자 초기화
    enhanceScrollObserver();
    
    // 스크롤 그라데이션 초기화
    initScrollGradients();
    
    // 보안 초기화
    initSecurity();
    
    // 푸터 기능 초기화
    initFooter();
    
    // 페이지 로드 완료 후 preload 클래스 제거
    setTimeout(() => {
        document.body.classList.remove('preload');
    }, 100);
});

// 설정 버튼 드래그 기능 초기화
function initSettingsFabDrag() {
    const settingsFab = document.querySelector('.settings-fab');
    if (!settingsFab) return;
    
    // 저장된 위치 불러오기
    loadSettingsFabPosition(settingsFab);
    
    let isDragging = false;
    let dragStartTime = 0;
    let startX = 0;
    let startY = 0;
    let initialX = 0;
    let initialY = 0;
    let hasMoved = false;
    
    // 터치 시작
    const handleTouchStart = (e) => {
        const touch = e.touches[0];
        isDragging = true;
        dragStartTime = Date.now();
        startX = touch.clientX;
        startY = touch.clientY;
        hasMoved = false;
        
        const rect = settingsFab.getBoundingClientRect();
        initialX = rect.left;
        initialY = rect.top;
        
        e.preventDefault();
    };
    
    // 터치 이동
    const handleTouchMove = (e) => {
        if (!isDragging) return;
        
        const touch = e.touches[0];
        const deltaX = touch.clientX - startX;
        const deltaY = touch.clientY - startY;
        
        // 최소 움직임 감지 (5px 이상 움직여야 드래그로 인식)
        if (!hasMoved && (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5)) {
            hasMoved = true;
            settingsFab.classList.add('dragging');
        }
        
        if (!hasMoved) return;
        
        let newX = initialX + deltaX;
        let newY = initialY + deltaY;
        
        // 화면 경계 제한
        const fabSize = 48;
        const padding = 10;
        
        newX = Math.max(padding, Math.min(window.innerWidth - fabSize - padding, newX));
        newY = Math.max(padding, Math.min(window.innerHeight - fabSize - padding, newY));
        
        // 위치 업데이트
        settingsFab.style.right = 'auto';
        settingsFab.style.bottom = 'auto';
        settingsFab.style.left = `${newX}px`;
        settingsFab.style.top = `${newY}px`;
        
        e.preventDefault();
    };
    
    // 터치 종료
    const handleTouchEnd = (e) => {
        if (!isDragging) return;
        
        const dragDuration = Date.now() - dragStartTime;
        
        isDragging = false;
        settingsFab.classList.remove('dragging');
        
        // 드래그가 아닌 클릭이었다면 설정 모달 열기
        if (!hasMoved && dragDuration < 200) {
            openSettings();
        } else if (hasMoved) {
            // 드래그였다면 현재 위치 저장
            saveSettingsFabPosition(settingsFab);
        }
        
        e.preventDefault();
    };
    
    // 마우스 이벤트 (데스크탑에서도 드래그 가능)
    const handleMouseStart = (e) => {
        isDragging = true;
        dragStartTime = Date.now();
        startX = e.clientX;
        startY = e.clientY;
        hasMoved = false;
        
        const rect = settingsFab.getBoundingClientRect();
        initialX = rect.left;
        initialY = rect.top;
        
        // 기본 클릭 이벤트 방지
        e.preventDefault();
    };
    
    const handleMouseMove = (e) => {
        if (!isDragging) return;
        
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        
        // 최소 움직임 감지 (5px 이상 움직여야 드래그로 인식)
        if (!hasMoved && (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5)) {
            hasMoved = true;
            settingsFab.classList.add('dragging');
        }
        
        if (!hasMoved) return;
        
        let newX = initialX + deltaX;
        let newY = initialY + deltaY;
        
        // 화면 경계 제한
        const fabSize = 48;
        const padding = 10;
        
        newX = Math.max(padding, Math.min(window.innerWidth - fabSize - padding, newX));
        newY = Math.max(padding, Math.min(window.innerHeight - fabSize - padding, newY));
        
        // 위치 업데이트
        settingsFab.style.right = 'auto';
        settingsFab.style.bottom = 'auto';
        settingsFab.style.left = `${newX}px`;
        settingsFab.style.top = `${newY}px`;
        
        e.preventDefault();
    };
    
    const handleMouseEnd = (e) => {
        if (!isDragging) return;
        
        const dragDuration = Date.now() - dragStartTime;
        
        isDragging = false;
        settingsFab.classList.remove('dragging');
        
        // 드래그가 아닌 클릭이었다면 설정 모달 열기
        if (!hasMoved && dragDuration < 200) {
            openSettings();
        } else if (hasMoved) {
            // 드래그였다면 현재 위치 저장
            saveSettingsFabPosition(settingsFab);
        }
        
        e.preventDefault();
    };
    
    // 이벤트 리스너 추가
    settingsFab.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd, { passive: false });
    
    // 마우스 이벤트 (데스크탑에서도 드래그 가능)
    settingsFab.addEventListener('mousedown', handleMouseStart);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseEnd);
    
    // 클릭 이벤트 중복 방지
    settingsFab.addEventListener('click', (e) => {
        if (hasMoved) {
            e.preventDefault();
            e.stopPropagation();
        }
    });
    
    // 화면 크기 변경 시 위치 재조정
    window.addEventListener('resize', () => {
        adjustSettingsFabPosition(settingsFab);
    });
}

// 설정 버튼 위치 저장
function saveSettingsFabPosition(fab) {
    const rect = fab.getBoundingClientRect();
    const position = {
        left: rect.left,
        top: rect.top,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight
    };
    localStorage.setItem('settings_fab_position', JSON.stringify(position));
}

// 설정 버튼 위치 불러오기
function loadSettingsFabPosition(fab) {
    const savedPosition = localStorage.getItem('settings_fab_position');
    if (savedPosition) {
        try {
            const position = JSON.parse(savedPosition);
            
            // 화면 크기가 많이 변경되었다면 기본 위치 사용
            const widthChange = Math.abs(window.innerWidth - position.screenWidth) / position.screenWidth;
            const heightChange = Math.abs(window.innerHeight - position.screenHeight) / position.screenHeight;
            
            if (widthChange > 0.3 || heightChange > 0.3) {
                return; // 기본 위치 유지
            }
            
            // 화면 경계 확인
            const fabSize = 48;
            const padding = 10;
            
            let left = Math.max(padding, Math.min(window.innerWidth - fabSize - padding, position.left));
            let top = Math.max(padding, Math.min(window.innerHeight - fabSize - padding, position.top));
            
            fab.style.right = 'auto';
            fab.style.bottom = 'auto';
            fab.style.left = `${left}px`;
            fab.style.top = `${top}px`;
        } catch (e) {
            console.log('Failed to load settings fab position:', e);
        }
    }
}

// 설정 버튼 위치 리셋 (기본 위치로)
function resetSettingsFabPosition(fab) {
    fab.style.left = 'auto';
    fab.style.top = 'auto';
    fab.style.right = '24px';
    fab.style.bottom = '90px';
    localStorage.removeItem('settings_fab_position');
}

// 설정 버튼 위치 조정 (화면 크기 변경 시)
function adjustSettingsFabPosition(fab) {
    const rect = fab.getBoundingClientRect();
    const fabSize = 48;
    const padding = 10;
    
    // 현재 위치가 커스텀 위치인지 확인 (right, bottom이 auto가 아니면 기본 위치)
    if (fab.style.left === 'auto' || fab.style.left === '') {
        return; // 기본 위치이므로 조정하지 않음
    }
    
    let left = Math.max(padding, Math.min(window.innerWidth - fabSize - padding, rect.left));
    let top = Math.max(padding, Math.min(window.innerHeight - fabSize - padding, rect.top));
    
    fab.style.left = `${left}px`;
    fab.style.top = `${top}px`;
    
    // 조정된 위치 저장
    saveSettingsFabPosition(fab);
}

// 스크롤 애니메이션 초기화
function initScrollAnimations() {
    // Intersection Observer 설정
    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -10% 0px', // 요소의 10%가 보일 때 트리거
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 요소가 보이기 시작하면 애니메이션 클래스 추가
                entry.target.classList.add('scroll-visible');
                
                // 한 번 보인 요소는 더 이상 관찰하지 않음 (성능 최적화)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // 애니메이션 대상 요소들 선택
    const animateElements = document.querySelectorAll(
        '.scroll-hidden, .scroll-slide-left, .scroll-slide-right, .scroll-fade, .scroll-scale'
    );
    
    // 각 요소를 관찰 대상에 추가
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // 동적으로 추가되는 요소들을 위한 MutationObserver
    const mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) { // Element node
                    // 새로 추가된 요소가 애니메이션 클래스를 가지고 있다면 관찰 시작
                    if (node.matches && node.matches('.scroll-hidden, .scroll-slide-left, .scroll-slide-right, .scroll-fade, .scroll-scale')) {
                        observer.observe(node);
                    }
                    
                    // 자식 요소들도 확인
                    const childAnimateElements = node.querySelectorAll 
                        ? node.querySelectorAll('.scroll-hidden, .scroll-slide-left, .scroll-slide-right, .scroll-fade, .scroll-scale')
                        : [];
                    
                    childAnimateElements.forEach(childElement => {
                        observer.observe(childElement);
                    });
                }
            });
        });
    });
    
    // DOM 변화 관찰 시작
    mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // 페이지 상단에 있는 요소들은 즉시 표시 (이미 뷰포트에 있을 경우)
    const topElements = document.querySelectorAll('.header, .container > section:first-of-type');
    topElements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('scroll-visible');
        }
    });
}

// 푸터 관련 기능들
function initFooter() {
    // 검색 카운트 업데이트
    updateFooterStats();
    
    // 실시간 검색 카운트 업데이트
    let searchCount = parseInt(SecurityUtils.secureLocalStorage.getItem('daily_search_count') || '0');
    const today = new Date().toDateString();
    const lastSearchDate = SecurityUtils.secureLocalStorage.getItem('last_search_date');
    
    // 날짜가 바뀌면 카운트 리셋
    if (lastSearchDate !== today) {
        searchCount = 0;
        SecurityUtils.secureLocalStorage.setItem('daily_search_count', '0');
        SecurityUtils.secureLocalStorage.setItem('last_search_date', today);
    }
    
    updateSearchCount(searchCount);
}

// 검색 카운트 업데이트
function updateSearchCount(count) {
    const countElement = document.getElementById('footerSearchCount');
    if (countElement) {
        // 애니메이션 효과로 카운트 업데이트
        const currentCount = parseInt(countElement.textContent) || 0;
        if (count > currentCount) {
            let current = currentCount;
            const increment = Math.max(1, Math.floor((count - currentCount) / 10));
            const timer = setInterval(() => {
                current += increment;
                if (current >= count) {
                    current = count;
                    clearInterval(timer);
                }
                countElement.textContent = current;
            }, 50);
        } else {
            countElement.textContent = count;
        }
    }
}

// 검색 수행 시 카운트 증가
function incrementSearchCount() {
    const today = new Date().toDateString();
    let searchCount = parseInt(SecurityUtils.secureLocalStorage.getItem('daily_search_count') || '0');
    searchCount++;
    
    SecurityUtils.secureLocalStorage.setItem('daily_search_count', searchCount.toString());
    SecurityUtils.secureLocalStorage.setItem('last_search_date', today);
    
    updateSearchCount(searchCount);
}

// 푸터 통계 업데이트
function updateFooterStats() {
    const searchCount = parseInt(SecurityUtils.secureLocalStorage.getItem('daily_search_count') || '0');
    updateSearchCount(searchCount);
}

// Privacy Policy 모달
function showPrivacyPolicy() {
    const modal = createInfoModal('Privacy Policy', `
        <div style="line-height: 1.6; color: var(--text-secondary);">
            <h4 style="color: var(--text); margin-bottom: 1rem;">🔒 개인정보 보호정책</h4>
            
            <h5 style="color: var(--primary); margin: 1.5rem 0 0.5rem;">데이터 수집</h5>
            <p>본 서비스는 다음 정보를 수집합니다:</p>
            <ul style="margin-left: 1rem;">
                <li>검색한 약물명 (로컬 저장소에만 저장)</li>
                <li>AI 분석을 위한 API 키 (로컬 저장소에만 저장)</li>
                <li>사용 통계 (익명화)</li>
            </ul>
            
            <h5 style="color: var(--primary); margin: 1.5rem 0 0.5rem;">데이터 보안</h5>
            <p>모든 민감한 데이터는 브라우저의 로컬 저장소에만 저장되며, 외부 서버로 전송되지 않습니다. API 키는 암호화되어 저장됩니다.</p>
            
            <h5 style="color: var(--primary); margin: 1.5rem 0 0.5rem;">쿠키 사용</h5>
            <p>본 서비스는 필수 기능을 위한 로컬 저장소만 사용하며, 추적 쿠키는 사용하지 않습니다.</p>
            
            <p style="margin-top: 1.5rem; padding: 1rem; background: rgba(var(--warning-rgb, 255, 193, 7), 0.1); border-radius: 8px; border-left: 4px solid var(--warning, #ffc107);">
                <strong>중요:</strong> 본 도구는 교육 목적으로만 사용되며, 의료진의 조언을 대체하지 않습니다.
            </p>
        </div>
    `);
}

// Terms of Service 모달
function showTermsOfService() {
    const modal = createInfoModal('Terms of Service', `
        <div style="line-height: 1.6; color: var(--text-secondary);">
            <h4 style="color: var(--text); margin-bottom: 1rem;">📋 이용약관</h4>
            
            <h5 style="color: var(--primary); margin: 1.5rem 0 0.5rem;">서비스 목적</h5>
            <p>Drug Interaction Checker는 교육 및 정보 제공 목적으로만 사용됩니다. 의료 조언, 진단 또는 치료를 목적으로 하지 않습니다.</p>
            
            <h5 style="color: var(--primary); margin: 1.5rem 0 0.5rem;">사용자 책임</h5>
            <ul style="margin-left: 1rem;">
                <li>약물 복용 전 반드시 의료진과 상담</li>
                <li>도구 결과에만 의존하지 않기</li>
                <li>응급상황 시 즉시 의료진에게 연락</li>
                <li>API 키의 안전한 관리</li>
            </ul>
            
            <h5 style="color: var(--primary); margin: 1.5rem 0 0.5rem;">책임 제한</h5>
            <p>본 서비스는 정보 제공만을 목적으로 하며, 약물 상호작용으로 인한 어떠한 문제에 대해서도 책임을 지지 않습니다.</p>
            
            <h5 style="color: var(--primary); margin: 1.5rem 0 0.5rem;">서비스 변경</h5>
            <p>서비스 내용은 사전 통지 없이 변경될 수 있습니다. 지속적인 개선을 위해 기능이 추가되거나 수정될 수 있습니다.</p>
            
            <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(var(--danger-rgb, 255, 0, 0), 0.1); border-radius: 8px; border-left: 4px solid var(--danger, #ff0000);">
                <strong>⚠️ 의료 면책 조항:</strong><br>
                본 도구는 의료 전문가의 조언을 대체할 수 없습니다. 약물 복용에 관한 모든 결정은 의료진과 상담 후 내리시기 바랍니다.
            </div>
        </div>
    `);
}

// Data Sources 모달  
function showDataSources() {
    const modal = createInfoModal('Data Sources', `
        <div style="line-height: 1.6; color: var(--text-secondary);">
            <h4 style="color: var(--text); margin-bottom: 1rem;">📊 데이터 출처</h4>
            
            <h5 style="color: var(--primary); margin: 1.5rem 0 0.5rem;">주요 데이터베이스</h5>
            <div style="margin-bottom: 1rem;">
                <strong>FDA Drug Database</strong><br>
                <span style="font-size: 0.9rem;">미국 식품의약국(FDA)의 공식 약물 데이터베이스</span><br>
                <a href="https://api.fda.gov/drug/label.json" target="_blank" rel="noopener" style="color: var(--primary);">→ API 문서 보기</a>
            </div>
            
            <h5 style="color: var(--primary); margin: 1.5rem 0 0.5rem;">AI 분석 서비스</h5>
            <ul style="margin-left: 1rem;">
                <li><strong>OpenAI GPT-4o-mini:</strong> 약물 상호작용 분석</li>
                <li><strong>Anthropic Claude:</strong> 의료 정보 해석</li>
                <li><strong>Google Gemini:</strong> 다각도 분석</li>
                <li><strong>Perplexity AI:</strong> 실시간 정보 검색</li>
            </ul>
            
            <h5 style="color: var(--primary); margin: 1.5rem 0 0.5rem;">참고 자료</h5>
            <ul style="margin-left: 1rem;">
                <li><a href="https://www.fda.gov" target="_blank" rel="noopener" style="color: var(--primary);">FDA 공식 웹사이트</a></li>
                <li><a href="https://www.drugs.com" target="_blank" rel="noopener" style="color: var(--primary);">Drugs.com 상호작용 데이터</a></li>
                <li><a href="https://medlineplus.gov" target="_blank" rel="noopener" style="color: var(--primary);">MedlinePlus 의료정보</a></li>
            </ul>
            
            <h5 style="color: var(--primary); margin: 1.5rem 0 0.5rem;">데이터 업데이트</h5>
            <p>FDA 데이터는 실시간으로 조회되며, AI 분석은 최신 의학 지식을 바탕으로 수행됩니다.</p>
            
            <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(var(--info-rgb, 0, 123, 255), 0.1); border-radius: 8px; border-left: 4px solid var(--info, #007bff);">
                <strong>ℹ️ 참고:</strong><br>
                모든 데이터는 신뢰할 수 있는 공식 소스에서 가져오지만, 개별 환자의 상황은 다를 수 있으므로 의료진과의 상담이 필수입니다.
            </div>
        </div>
    `);
}

// 정보 모달 생성 헬퍼 함수
function createInfoModal(title, content) {
    // 기존 정보 모달이 있으면 제거
    const existingModal = document.getElementById('infoModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    const modal = document.createElement('div');
    modal.id = 'infoModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <div class="modal-header">
                <h3 class="modal-title">${SecurityUtils.escapeHtml(title)}</h3>
                <button class="modal-close" onclick="closeInfoModal()" aria-label="Close">×</button>
            </div>
            <div class="modal-body" style="max-height: 70vh; overflow-y: auto;">
                ${content}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 모달 표시
    utils.disableBodyScroll();
    modal.classList.add('show');
    
    // 외부 클릭으로 닫기
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeInfoModal();
        }
    });
    
    return modal;
}

// 정보 모달 닫기
function closeInfoModal() {
    const modal = document.getElementById('infoModal');
    if (modal) {
        modal.classList.add('closing');
        
        setTimeout(() => {
            modal.remove();
            utils.enableBodyScroll();
        }, 400);
    }
}

// 스크롤 그라데이션 효과를 위한 스크롤 감지
let scrollTimer;
let isScrolling = false;
let elementScrollTimers = new Map();

// 전체 페이지 스크롤 이벤트 처리
function handleScroll() {
    if (!isScrolling) {
        document.body.classList.add('scrolling');
        isScrolling = true;
    }
    
    // 스크롤이 멈춘 후 잠시 후 클래스 제거
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
        document.body.classList.remove('scrolling');
        isScrolling = false;
    }, 200);
}

// 개별 요소 스크롤 처리 함수
function handleElementScroll(element) {
    // 스크롤이 가능한지 확인
    const isScrollable = element.scrollHeight > element.clientHeight;
    if (!isScrollable) {
        element.classList.remove('scrolling');
        return;
    }
    
    // 스크롤 위치 확인
    const scrollTop = element.scrollTop;
    const scrollBottom = element.scrollHeight - element.clientHeight - scrollTop;
    const threshold = 5; // 5px 여유
    
    // 스크롤 중 클래스 추가
    element.classList.add('scrolling');
    
    // 상단/하단 그라데이션 개별 제어를 위한 데이터 속성 설정
    if (scrollTop <= threshold) {
        element.setAttribute('data-scroll-top', 'false');
    } else {
        element.setAttribute('data-scroll-top', 'true');
    }
    
    if (scrollBottom <= threshold) {
        element.setAttribute('data-scroll-bottom', 'false');
    } else {
        element.setAttribute('data-scroll-bottom', 'true');
    }
    
    // 기존 타이머 제거
    if (elementScrollTimers.has(element)) {
        clearTimeout(elementScrollTimers.get(element));
    }
    
    // 스크롤이 멈춘 후 클래스 제거
    const timer = setTimeout(() => {
        element.classList.remove('scrolling');
        elementScrollTimers.delete(element);
    }, 300);
    
    elementScrollTimers.set(element, timer);
}

// 초기 스크롤 상태 설정
function setInitialScrollState(element) {
    const isScrollable = element.scrollHeight > element.clientHeight;
    if (!isScrollable) {
        element.setAttribute('data-scroll-top', 'false');
        element.setAttribute('data-scroll-bottom', 'false');
        return;
    }
    
    const scrollTop = element.scrollTop;
    const scrollBottom = element.scrollHeight - element.clientHeight - scrollTop;
    const threshold = 5;
    
    element.setAttribute('data-scroll-top', scrollTop > threshold ? 'true' : 'false');
    element.setAttribute('data-scroll-bottom', scrollBottom > threshold ? 'true' : 'false');
}

// 스크롤 가능한 요소들에 이벤트 리스너 추가
function initScrollGradients() {
    // 검색 결과
    const searchResults = document.getElementById('searchResults');
    if (searchResults) {
        searchResults.addEventListener('scroll', () => handleElementScroll(searchResults), { passive: true });
        searchResults.setAttribute('data-scroll-listener', 'true');
        setInitialScrollState(searchResults);
    }
    
    // 약물 리스트들
    const drugLists = document.querySelectorAll('.drug-list');
    drugLists.forEach(list => {
        list.addEventListener('scroll', () => handleElementScroll(list), { passive: true });
        setInitialScrollState(list);
    });
    
    // 설정 모달 바디
    const settingsBody = document.querySelector('.settings-body');
    if (settingsBody) {
        settingsBody.addEventListener('scroll', () => handleElementScroll(settingsBody), { passive: true });
        setInitialScrollState(settingsBody);
    }
    
    // 모달 콘텐츠
    const modalContents = document.querySelectorAll('.modal-content');
    modalContents.forEach(modal => {
        modal.addEventListener('scroll', () => handleElementScroll(modal), { passive: true });
        setInitialScrollState(modal);
    });
    
    // 개발자 패널 콘텐츠
    const devContent = document.querySelector('.dev-content');
    if (devContent) {
        devContent.addEventListener('scroll', () => handleElementScroll(devContent), { passive: true });
        setInitialScrollState(devContent);
    }
    
    // 개발자 콘솔
    const devConsole = document.querySelector('.dev-console');
    if (devConsole) {
        devConsole.addEventListener('scroll', () => handleElementScroll(devConsole), { passive: true });
        setInitialScrollState(devConsole);
    }
    
    // 동적으로 생성되는 요소들을 위한 MutationObserver
    const observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) { // Element node
                    // 약물 리스트가 새로 추가된 경우
                    if (node.classList && node.classList.contains('drug-list')) {
                        node.addEventListener('scroll', () => handleElementScroll(node), { passive: true });
                        // 약간의 지연 후 초기 상태 설정 (렌더링 완료 후)
                        setTimeout(() => setInitialScrollState(node), 50);
                    }
                    
                    // 자식 요소 중 스크롤 가능한 요소들 확인
                    const scrollableElements = node.querySelectorAll 
                        ? node.querySelectorAll('.drug-list, .modal-content, .settings-body, #searchResults, .dev-content, .dev-console')
                        : [];
                    
                    scrollableElements.forEach(element => {
                        element.addEventListener('scroll', () => handleElementScroll(element), { passive: true });
                        // 약간의 지연 후 초기 상태 설정 (렌더링 완료 후)
                        setTimeout(() => setInitialScrollState(element), 50);
                    });
                }
            });
        });
    });
    
    // DOM 변화 관찰
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// 부드러운 스크롤을 위한 Intersection Observer 강화
function enhanceScrollObserver() {
    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -10% 0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const ratio = entry.intersectionRatio;
                const element = entry.target;
                
                // 부드러운 페이드 인 효과
                if (ratio > 0.1) {
                    element.classList.add('scroll-visible');
                    
                    // 추가적인 부드러운 효과를 위한 스타일 적용
                    if (ratio > 0.5) {
                        element.style.transform = 'translateY(0)';
                        element.style.opacity = '1';
                    } else {
                        const translateY = (1 - ratio * 2) * 20;
                        element.style.transform = `translateY(${translateY}px)`;
                        element.style.opacity = ratio * 2;
                    }
                }
            } else {
                // 요소가 뷰포트를 벗어났을 때
                const element = entry.target;
                element.classList.remove('scroll-visible');
                
                // 원래 상태로 복원
                if (element.classList.contains('scroll-hidden')) {
                    element.style.transform = 'translateY(40px)';
                    element.style.opacity = '0';
                } else if (element.classList.contains('scroll-slide-left')) {
                    element.style.transform = 'translateX(-60px)';
                    element.style.opacity = '0';
                } else if (element.classList.contains('scroll-slide-right')) {
                    element.style.transform = 'translateX(60px)';
                    element.style.opacity = '0';
                } else if (element.classList.contains('scroll-scale')) {
                    element.style.transform = 'scale(0.85)';
                    element.style.opacity = '0';
                }
            }
        });
    }, observerOptions);

    // 스크롤 애니메이션 요소들을 관찰
    const scrollElements = document.querySelectorAll('.scroll-hidden, .scroll-slide-left, .scroll-slide-right, .scroll-fade, .scroll-scale');
    scrollElements.forEach(el => observer.observe(el));

    // 푸터 면책조항을 위한 별도 옵저버
    const footerDisclaimerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const footer = entry.target; // 관찰 중인 푸터 요소
            const disclaimer = document.querySelector('.footer-disclaimer');
            const footerContent = document.querySelector('.footer-content');
            const footerDivider = document.querySelector('.footer-divider');
            const footerBottom = document.querySelector('.footer-bottom');
            
            if (entry.isIntersecting) {
                // 푸터가 보이기 시작하면 모든 푸터 요소 활성화
                footer.classList.add('visible');
                if (disclaimer) {
                    disclaimer.classList.add('visible');
                }
                if (footerContent) {
                    footerContent.classList.add('visible');
                }
                if (footerDivider) {
                    footerDivider.classList.add('visible');
                }
                if (footerBottom) {
                    footerBottom.classList.add('visible');
                }
                
                // 한 번 나타난 후에는 옵저버를 중단
                footerDisclaimerObserver.unobserve(footer);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -20% 0px', // 푸터의 하단 20%가 보일 때 트리거
        threshold: 0.1
    });

    // 푸터 요소 관찰
    const footer = document.querySelector('.footer');
    if (footer) {
        footerDisclaimerObserver.observe(footer);
    }
}

// 스크롤 이벤트 리스너 등록
window.addEventListener('scroll', handleScroll, { passive: true });

 