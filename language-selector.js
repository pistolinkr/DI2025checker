// 언어 선택 위젯
(function() {
    'use strict';
    
    // 언어 선택 드롭다운 생성
    function createLanguageSelector() {
        const selector = document.createElement('div');
        selector.id = 'languageSelector';
        selector.className = 'language-selector';
        
        // 현재 경로에서 언어 코드 추출
        const pathParts = window.location.pathname.split('/');
        const currentLang = pathParts[1] || 'en-us';
        
        // i18n이 로드되지 않았으면 기본 언어 목록 사용
        const languages = window.i18n ? window.i18n.translations : {
            'en-us': { name: 'English', flag: '🇺🇸' },
            'ko-kr': { name: '한국어', flag: '🇰🇷' }
        };
        
        const currentLangInfo = languages[currentLang] || languages['en-us'];
        
        selector.innerHTML = `
            <button class="lang-selector-btn" id="langSelectorBtn" aria-label="Select Language">
                <span class="lang-flag">${currentLangInfo.flag}</span>
                <span class="lang-name">${currentLangInfo.name}</span>
                <span class="lang-arrow">▼</span>
            </button>
            <div class="lang-dropdown" id="langDropdown">
                <div class="lang-dropdown-content">
                    ${Object.entries(languages).map(([code, lang]) => `
                        <a href="/${code}/index.html" class="lang-option ${code === currentLang ? 'active' : ''}" data-lang="${code}">
                            <span class="lang-flag">${lang.flag}</span>
                            <span class="lang-name">${lang.name}</span>
                        </a>
                    `).join('')}
                </div>
            </div>
        `;
        
        return selector;
    }
    
    // CSS 스타일 추가
    function addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .language-selector {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 10000;
                font-family: inherit;
            }
            
            .lang-selector-btn {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                padding: 0.5rem 1rem;
                background: var(--surface);
                border: 2px solid var(--border);
                border-radius: var(--radius);
                cursor: pointer;
                font-size: 0.9rem;
                font-weight: 500;
                color: var(--text);
                transition: var(--transition);
                box-shadow: var(--shadow-md);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
            }
            
            .lang-selector-btn:hover {
                background: var(--bg);
                border-color: var(--primary);
                color: var(--primary);
                transform: translateY(-1px);
                box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.15);
            }
            
            .lang-flag {
                font-size: 1.2rem;
                line-height: 1;
            }
            
            .lang-name {
                min-width: 80px;
                text-align: left;
            }
            
            .lang-arrow {
                font-size: 0.7rem;
                opacity: 0.6;
                transition: transform 0.3s ease;
            }
            
            .lang-selector-btn.open .lang-arrow {
                transform: rotate(180deg);
            }
            
            .lang-dropdown {
                position: absolute;
                top: calc(100% + 0.5rem);
                right: 0;
                background: var(--surface);
                border: 2px solid var(--border);
                border-radius: var(--radius);
                box-shadow: var(--shadow-lg);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                opacity: 0;
                visibility: hidden;
                transform: translateY(-10px);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                min-width: 200px;
                max-height: 400px;
                overflow-y: auto;
                z-index: 1000;
            }
            
            .lang-dropdown.show {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }
            
            .lang-dropdown-content {
                padding: 0.5rem;
            }
            
            .lang-option {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                padding: 0.75rem 1rem;
                border-radius: 6px;
                text-decoration: none;
                color: var(--text);
                transition: var(--transition);
                cursor: pointer;
            }
            
            .lang-option:hover {
                background: rgba(var(--primary-rgb), 0.1);
                color: var(--primary);
                transform: translateX(4px);
            }
            
            .lang-option.active {
                background: rgba(var(--primary-rgb), 0.15);
                color: var(--primary);
                font-weight: 600;
            }
            
            .lang-option .lang-flag {
                font-size: 1.3rem;
            }
            
            .lang-option .lang-name {
                flex: 1;
            }
            
            /* 모바일 최적화 */
            @media (max-width: 768px) {
                .language-selector {
                    top: 10px;
                    right: 10px;
                }
                
                .lang-selector-btn {
                    padding: 0.4rem 0.8rem;
                    font-size: 0.85rem;
                }
                
                .lang-name {
                    min-width: 60px;
                }
                
                .lang-dropdown {
                    right: 0;
                    min-width: 180px;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // 드롭다운 토글
    function toggleDropdown() {
        const btn = document.getElementById('langSelectorBtn');
        const dropdown = document.getElementById('langDropdown');
        
        btn.classList.toggle('open');
        dropdown.classList.toggle('show');
    }
    
    // 외부 클릭 시 드롭다운 닫기
    function handleClickOutside(event) {
        const selector = document.getElementById('languageSelector');
        if (selector && !selector.contains(event.target)) {
            const btn = document.getElementById('langSelectorBtn');
            const dropdown = document.getElementById('langDropdown');
            if (btn && dropdown) {
                btn.classList.remove('open');
                dropdown.classList.remove('show');
            }
        }
    }
    
    // 초기화
    function init() {
        // 스타일 추가
        addStyles();
        
        // 선택자 생성 및 추가
        const selector = createLanguageSelector();
        document.body.appendChild(selector);
        
        // 이벤트 리스너
        const btn = document.getElementById('langSelectorBtn');
        if (btn) {
            btn.addEventListener('click', toggleDropdown);
        }
        
        document.addEventListener('click', handleClickOutside);
        
        // ESC 키로 닫기
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const dropdown = document.getElementById('langDropdown');
                if (dropdown && dropdown.classList.contains('show')) {
                    toggleDropdown();
                }
            }
        });
    }
    
    // DOM이 준비되면 초기화
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

