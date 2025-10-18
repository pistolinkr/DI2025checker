# 💊 Drug Interaction Checker v2.1

> **Professional drug interaction analysis with AI-powered insights and intelligent search capabilities**

[🇺🇸 English](#english) | [🇰🇷 한국어](#korean) | [🇯🇵 日本語](#japanese) | [🇨🇳 中文](#chinese) | [🇪🇸 Español](#spanish) | [🇫🇷 Français](#french) | [🇩🇪 Deutsch](#german) | [🇮🇹 Italiano](#italian) | [🇵🇹 Português](#portuguese) | [🇸🇦 العربية](#arabic) | [🇮🇳 हिन्दी](#hindi) | [🇷🇺 Русский](#russian) | [🇮🇩 Bahasa Indonesia](#indonesian) | [🇻🇳 Tiếng Việt](#vietnamese) | [🇹🇷 Türkçe](#turkish) | [🇲🇽 Español MX](#mexican-spanish)

![Version](https://img.shields.io/badge/version-2.1-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Language](https://img.shields.io/badge/language-16%20Languages-orange)

---

## English

### 🌟 Overview

Drug Interaction Checker is a sophisticated web application that helps users identify potential interactions between medications. Combining FDA data with advanced AI analysis from multiple providers, it offers comprehensive drug safety information with an intuitive, modern interface.

### ✨ Key Features

#### 🔍 **Intelligent Search Engine**
- **Real-time search** with 300ms debounce
- **Typo tolerance** and fuzzy matching
- **Partial search** capabilities (e.g., "aspir" → "Aspirin")
- **Korean-English mixed usage** support
- **Relevance-based sorting** with similarity algorithms

#### 🤖 **Multi-AI Analysis**
- Support for **4 major AI services**: OpenAI, Claude, Perplexity, Gemini
- **Professional medical analysis** with structured reports
- **Risk assessment**: Low/Moderate/High/Very High
- **Clinical recommendations** and emergency signs
- **Auto-fallback** system for failed connections

#### 📊 **Comprehensive Data**
- **FDA OpenFDA API** integration
- **50+ drug database** with brand names
- **Detailed drug information** with manufacturer details
- **Interaction mechanisms** and warnings
- **Recent search history** and favorites

#### 🎨 **Modern UI/UX**
- **Glassmorphism design** with blur effects
- **Professional gray theme** with subtle gradients
- **Dark/Light mode** support
- **Responsive design** for all devices
- **Accessibility** features with ARIA labels
- **Clean footer layout** with medical resource links

### 🔧 Environment Variables Setup

**Unified Configuration Management:**
All languages use a single root `.env` file for centralized configuration:

```bash
# Copy the example file
cp env.example .env

# Edit with your actual values
nano .env
```

**Required Configuration:**
```env
# EmailJS Configuration (Universal)
EMAILJS_PUBLIC_KEY=your_emailjs_public_key_here
EMAILJS_SERVICE_ID=your_emailjs_service_id_here
EMAILJS_TEMPLATE_ID=your_emailjs_template_id_here

# AI Service API Keys (Optional)
OPENAI_API_KEY=your_openai_api_key_here
CLAUDE_API_KEY=your_claude_api_key_here
PERPLEXITY_API_KEY=your_perplexity_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here

# Country-specific Drug Database APIs
FDA_API_KEY=your_fda_api_key_here          # US
MFDS_API_KEY=your_mfds_api_key_here       # Korea
PMDA_API_KEY=your_pmda_api_key_here       # Japan
NMPA_API_KEY=your_nmpa_api_key_here        # China
# ... and more country-specific APIs
```

**Benefits of Unified Management:**
- **Single configuration file** for all 16 languages
- **Easy maintenance** - no duplicate API keys
- **Secure** - `.env` file is gitignored
- **Efficient** - one place to manage all settings


- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **APIs**: FDA OpenFDA, OpenAI, Anthropic Claude, Perplexity, Google Gemini
- **Design**: CSS Grid/Flexbox, Glassmorphism effects
- **Features**: Real-time search, AI integration, Local storage

### 🚀 Getting Started

#### 🌐 Language Support
This project is fully optimized with separate language folders:
- **Korean**: `/ko-kr/` - Korean version with localized content
- **English (Default)**: `/en-us/` - English version with localized content
- **Language Switch**: Use the footer language switcher or navigate directly to language folders
- Each language folder contains independent `config.js`, `index.html`, `scripts.js`, and `styles.css`

#### 📁 Project Structure
```
DI2025checker/
├── vercel.json          # Vercel deployment configuration
├── ko-kr/               # Korean language folder
│   ├── config.js        # Korean EmailJS configuration
│   ├── index.html       # Korean main page
│   ├── ai-test.html     # Korean AI test page
│   ├── scripts.js       # Korean localized scripts
│   └── styles.css       # Shared styles
├── en-us/               # English language folder
│   ├── config.js        # English EmailJS configuration
│   ├── index.html       # English main page
│   ├── ai-test.html     # English AI test page
│   ├── scripts.js       # English localized scripts
│   └── styles.css       # Shared styles
├── logo/                # Shared assets
│   ├── logo-dark.png
│   └── logo-light.png
└── README.md
```

#### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for API access
- At least one AI API key (optional but recommended)

#### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pistolinkr/DI2025checker.git
   cd DI2025checker
   ```

2. **Local Development**
   ```bash
   # Serve with a local server
   python3 -m http.server 8000
   
   # Then access:
   # English: http://localhost:8000/en-us/
   # Korean: http://localhost:8000/ko-kr/
   ```

3. **Deploy to Vercel (Recommended)**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   
   # The vercel.json configuration automatically redirects "/" to "/en-us/index.html"
   ```

4. **Configure AI APIs (Optional)**
   - Click the ⚙️ settings button
   - Add your API keys for desired services
   - Test connections using the 🧪 API Test button

#### API Key Setup

##### OpenAI (Recommended)
1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create an account and generate API key
3. Format: `sk-...`

##### Anthropic Claude
1. Visit [Anthropic Console](https://console.anthropic.com/)
2. Generate API key
3. Format: `sk-ant-...`

##### Perplexity AI
1. Visit [Perplexity Settings](https://www.perplexity.ai/settings/api)
2. Generate API key
3. Format: `pplx-...`

##### Google Gemini
1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Generate API key
3. Format: `AI...`

#### EmailJS Setup (for Feedback Feature)

1. **Create EmailJS Account**
   - Visit [EmailJS](https://www.emailjs.com/)
   - Create a free account

2. **Connect Email Service**
   - Add your email service (Gmail, Outlook, etc.)
   - Note down your Service ID

3. **Create Email Template**
   - Create a feedback template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{subject}}` - Feedback subject
     - `{{message}}` - Feedback message
   - Note down your Template ID

4. **Configure Environment Variables**
   - Edit `config.js` in both language folders (`ko-kr/config.js` and `en-us/config.js`)
   - Replace the placeholder values:
     ```javascript
     let EMAILJS_CONFIG = {
         PUBLIC_KEY: 'your_actual_public_key',
         SERVICE_ID: 'your_actual_service_id',
         TEMPLATE_ID: 'your_actual_template_id'
     };
     ```

### 📖 Usage

1. **Search for drugs**
   - Type drug name in the search box
   - Use partial names or even typos
   - Select from intelligent suggestions

2. **Check interactions**
   - Choose two drugs from dropdowns
   - Click "Check Interaction"
   - Review both AI analysis and FDA data

3. **View detailed information**
   - Click on any drug name for detailed info
   - Add drugs directly to interaction checker

### 🔬 AI Analysis Features

- **Risk Assessment**: Comprehensive risk level evaluation
- **Clinical Insights**: Professional medical recommendations
- **Interaction Mechanisms**: How drugs interact at molecular level
- **Emergency Signs**: When to seek immediate medical attention
- **Structured Reports**: Easy-to-read formatted analysis

### ⚠️ Important Medical Disclaimer

> **This tool is for informational purposes only and should not replace professional medical advice. Always consult with healthcare providers before making medication decisions.**

### 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### 🙏 Acknowledgments

- FDA OpenFDA for comprehensive drug data
- AI providers for advanced analysis capabilities
- Medical professionals for guidance on drug interactions
- Korean medical institutions: 식약처, 드러그인포, 심평원, 국민건강정보

### 🔗 Medical Resources

- [식약처 공식 사이트](https://www.mfds.go.kr) - 한국 식품의약품안전처
- [드러그인포](https://www.druginfo.co.kr) - 약물 정보 데이터베이스
- [심평원](https://www.hira.or.kr) - 건강보험심사평가원
- [국민건강정보](https://health.cdc.go.kr) - 질병관리청 국민건강정보

[⬆️ Back to Top](#-drug-interaction-checker-v21)

---

## Korean

### 🌟 개요

약물 상호작용 체커는 의약품 간의 잠재적 상호작용을 식별하는 데 도움을 주는 정교한 웹 애플리케이션입니다. FDA 데이터와 여러 AI 제공업체의 고급 분석을 결합하여 직관적이고 현대적인 인터페이스로 포괄적인 약물 안전 정보를 제공합니다.

### ✨ 주요 기능

#### 🔍 **지능형 검색 엔진**
- **실시간 검색** (300ms;0.3초 디바운스)
- **오타 허용** 및 퍼지 매칭
- **부분 검색** 기능 (예: "아스파" → "아스피린")
- **한국어-영어 혼용** 지원
- **관련도 기반 정렬** 및 유사도 알고리즘

#### 🤖 **다중 AI 분석**
- **4개 주요 AI 서비스** 지원: OpenAI, Claude, Perplexity, Gemini
- **전문 의료 분석** 및 구조화된 보고서
- **위험도 평가**: 낮음/보통/높음/매우 높음
- **임상 권장사항** 및 응급 징후
- 연결 실패 시 **자동 대체** 시스템

#### 📊 **포괄적 데이터**
- **FDA OpenFDA API** 통합
- **50+ 약물 데이터베이스** (브랜드명 포함)
- **상세 약물 정보** 및 제조사 정보
- **상호작용 메커니즘** 및 경고
- **최근 검색 기록** 및 즐겨찾기

#### 🎨 **모던 UI/UX**
- **글래스모피즘 디자인** (블러 효과)
- **전문가용 회색 테마** (세련된 그라데이션)
- **다크/라이트 모드** 지원
- **반응형 디자인** (모든 기기 지원)
- **접근성** 기능 (ARIA 라벨)
- **깔끔한 푸터 레이아웃** (의료 자료 링크)

### 🛠 기술 스택

- **프론트엔드**: HTML5, CSS3, JavaScript (ES6+)
- **API**: FDA OpenFDA, OpenAI, Anthropic Claude, Perplexity, Google Gemini
- **디자인**: CSS Grid/Flexbox, 글래스모피즘 효과
- **기능**: 실시간 검색, AI 통합, 로컬 스토리지

### 🔧 환경 변수 설정

**통합 설정 관리:**
모든 언어가 하나의 루트 `.env` 파일을 사용하여 중앙 집중식 설정을 관리합니다:

```bash
# 예시 파일 복사
cp env.example .env

# 실제 값으로 편집
nano .env
```

**필수 설정:**
```env
# EmailJS 설정 (범용)
EMAILJS_PUBLIC_KEY=your_emailjs_public_key_here
EMAILJS_SERVICE_ID=your_emailjs_service_id_here
EMAILJS_TEMPLATE_ID=your_emailjs_template_id_here

# AI 서비스 API 키 (선택사항)
OPENAI_API_KEY=your_openai_api_key_here
CLAUDE_API_KEY=your_claude_api_key_here
PERPLEXITY_API_KEY=your_perplexity_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here

# 국가별 약물 데이터베이스 API
FDA_API_KEY=your_fda_api_key_here          # 미국
MFDS_API_KEY=your_mfds_api_key_here       # 한국
PMDA_API_KEY=your_pmda_api_key_here       # 일본
NMPA_API_KEY=your_nmpa_api_key_here        # 중국
# ... 기타 국가별 API
```

**통합 관리의 장점:**
- **단일 설정 파일**로 16개 언어 모두 관리
- **쉬운 유지보수** - 중복 API 키 없음
- **보안** - `.env` 파일은 gitignore 처리
- **효율성** - 한 곳에서 모든 설정 관리


#### 🌐 언어 지원
- **한국어 (기본)**: `index.html` - 한국어 메인 페이지
- **영어**: `index_en.html` - 영어 버전
- **언어 전환**: 헤더의 언어 버튼을 클릭하여 한국어와 영어 간 전환

#### 사전 요구사항
- 모던 웹 브라우저 (Chrome, Firefox, Safari, Edge)
- API 접근을 위한 인터넷 연결
- 최소 하나의 AI API 키 (선택사항이지만 권장)

#### 설치

1. **저장소 복제**
   ```bash
   git clone https://github.com/pistolinkr/DI2025checker.git
   cd DI2025checker
   ```

2. **브라우저에서 열기**
   ```bash
   # 브라우저에서 index.html 열기
   open index.html
   # 또는
   python -m http.server 8000  # 로컬 서버용
   ```

3. **AI API 구성 (선택사항)**
   - ⚙️ 설정 버튼 클릭
   - 원하는 서비스의 API 키 추가
   - 🧪 API 테스트 버튼으로 연결 확인

#### API 키 설정

##### OpenAI (권장)
1. [OpenAI 플랫폼](https://platform.openai.com/api-keys) 방문
2. 계정 생성 후 API 키 생성
3. 형식: `sk-...`

##### Anthropic Claude
1. [Anthropic 콘솔](https://console.anthropic.com/) 방문
2. API 키 생성
3. 형식: `sk-ant-...`

##### Perplexity AI
1. [Perplexity 설정](https://www.perplexity.ai/settings/api) 방문
2. API 키 생성
3. 형식: `pplx-...`

##### Google Gemini
1. [Google AI Studio](https://aistudio.google.com/app/apikey) 방문
2. API 키 생성
3. 형식: `AI...`

#### EmailJS 설정 (피드백 기능용)

1. **EmailJS 계정 생성**
   - [EmailJS](https://www.emailjs.com/) 방문
   - 무료 계정 생성

2. **이메일 서비스 연결**
   - 이메일 서비스 추가 (Gmail, Outlook 등)
   - 서비스 ID 기록

3. **이메일 템플릿 생성**
   - 다음 변수들을 포함한 피드백 템플릿 생성:
     - `{{from_name}}` - 보낸 사람 이름
     - `{{from_email}}` - 보낸 사람 이메일
     - `{{subject}}` - 피드백 제목
     - `{{message}}` - 피드백 메시지
   - 템플릿 ID 기록

4. **환경변수 설정**
   - 프로젝트 루트의 `.env` 파일 편집
   - 플레이스홀더 값들을 실제 값으로 교체:
     ```
     EMAILJS_PUBLIC_KEY=실제_공개_키
     EMAILJS_SERVICE_ID=실제_서비스_ID
     EMAILJS_TEMPLATE_ID=실제_템플릿_ID
     ```

### 📖 사용법

1. **약물 검색**
   - 검색창에 약물명 입력
   - 부분 이름이나 오타도 가능
   - 지능형 제안에서 선택

2. **상호작용 확인**
   - 드롭다운에서 두 약물 선택
   - "상호작용 확인" 클릭
   - AI 분석과 FDA 데이터 모두 검토

3. **상세 정보 보기**
   - 약물명 클릭하여 상세 정보 확인
   - 상호작용 체커에 직접 약물 추가

### 🔬 AI 분석 기능

- **위험도 평가**: 포괄적인 위험 수준 평가
- **임상 통찰**: 전문 의료 권장사항
- **상호작용 메커니즘**: 분자 수준에서의 약물 상호작용
- **응급 징후**: 즉시 의료진 도움이 필요한 경우
- **구조화된 보고서**: 읽기 쉬운 형식의 분석

### ⚠️ 중요한 의료 면책조항

> **이 도구는 정보 제공 목적으로만 사용되며 전문 의료 조언을 대체할 수 없습니다. 약물 관련 결정을 내리기 전에 항상 의료진과 상담하십시오.**

### 🤝 기여하기

1. 저장소 포크
2. 기능 브랜치 생성 (`git checkout -b feature/amazing-feature`)
3. 변경사항 커밋 (`git commit -m 'Add amazing feature'`)
4. 브랜치에 푸시 (`git push origin feature/amazing-feature`)
5. Pull Request 생성

### 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

### 🙏 감사의 말

- 포괄적인 약물 데이터를 제공하는 FDA OpenFDA
- 고급 분석 기능을 제공하는 AI 서비스 제공업체들
- 약물 상호작용에 대한 지침을 제공한 의료 전문가들
- 한국 의료 기관: 식약처, 드러그인포, 심평원, 국민건강정보

### 🔗 의료 자료

- [식약처 공식 사이트](https://www.mfds.go.kr) - 한국 식품의약품안전처
- [드러그인포](https://www.druginfo.co.kr) - 약물 정보 데이터베이스
- [심평원](https://www.hira.or.kr) - 건강보험심사평가원
- [국민건강정보](https://health.cdc.go.kr) - 질병관리청 국민건강정보

[⬆️ 맨 위로 돌아가기](#-drug-interaction-checker-v21)

---

## Japanese

### 🌟 概要

薬物相互作用チェッカーは、薬物間の潜在的な相互作用を特定するのに役立つ高度なWebアプリケーションです。FDAデータと複数のプロバイダーからの高度なAI分析を組み合わせ、直感的で現代的なインターフェースで包括的な薬物安全性情報を提供します。

### ✨ 主な機能

#### 🔍 **インテリジェント検索エンジン**
- **リアルタイム検索** 300msデバウンス
- **タイプミス許容** とファジーマッチング
- **部分検索** 機能（例：「アスピ」→「アスピリン」）
- **日英混合使用** サポート
- **関連性ベースソート** 類似度アルゴリズム

#### 🤖 **マルチAI分析**
- **4つの主要AIサービス** サポート：OpenAI、Claude、Perplexity、Gemini
- **専門医療分析** 構造化レポート
- **リスク評価**：低/中/高/非常に高い
- **臨床推奨** と緊急サイン
- **自動フォールバック** システム

#### 📊 **包括的データ**
- **FDA OpenFDA API** 統合
- **50+薬物データベース** ブランド名付き
- **詳細薬物情報** 製造元詳細
- **相互作用メカニズム** と警告
- **最近の検索履歴** とお気に入り

#### 🎨 **モダンUI/UX**
- **グラスモーフィズムデザイン** ブラー効果
- **プロフェッショナルグレーテーマ** 微妙なグラデーション
- **ダーク/ライトモード** サポート
- **レスポンシブデザイン** 全デバイス対応
- **アクセシビリティ** ARIAラベル機能
- **クリーンフッターレイアウト** 医療リソースリンク

### 🔧 環境変数設定

**統合設定管理：**
すべての言語が単一のルート`.env`ファイルを使用して中央集権的設定を管理します：

```bash
# サンプルファイルをコピー
cp env.example .env

# 実際の値で編集
nano .env
```

**必須設定：**
```env
# EmailJS設定（汎用）
EMAILJS_PUBLIC_KEY=your_emailjs_public_key_here
EMAILJS_SERVICE_ID=your_emailjs_service_id_here
EMAILJS_TEMPLATE_ID=your_emailjs_template_id_here

# AIサービスAPIキー（オプション）
OPENAI_API_KEY=your_openai_api_key_here
CLAUDE_API_KEY=your_claude_api_key_here
PERPLEXITY_API_KEY=your_perplexity_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here

# 国別薬物データベースAPI
FDA_API_KEY=your_fda_api_key_here          # アメリカ
MFDS_API_KEY=your_mfds_api_key_here       # 韓国
PMDA_API_KEY=your_pmda_api_key_here       # 日本
NMPA_API_KEY=your_nmpa_api_key_here        # 中国
# ... その他の国別API
```

**統合管理の利点：**
- **単一設定ファイル** で16言語すべて管理
- **簡単メンテナンス** - 重複APIキーなし
- **セキュリティ** - `.env`ファイルはgitignore処理
- **効率性** - 一箇所ですべての設定管理

### 🚀 クイックスタート

```bash
# リポジトリをクローン
git clone https://github.com/yourusername/drug-interaction-checker.git
cd drug-interaction-checker

# 環境変数を設定
cp env.example .env
# .envファイルを編集してAPIキーを追加

# ローカルサーバーを起動
python3 -m http.server 8080

# ブラウザでアクセス
open http://localhost:8080
```

### 📁 プロジェクト構造

```
drug-interaction-checker/
├── en-us/                    # 🇺🇸 英語版
├── ko-kr/                    # 🇰🇷 韓国語版
├── ja-jp/                    # 🇯🇵 日本語版
├── zh-cn/                    # 🇨🇳 中国語版
├── es-es/                    # 🇪🇸 スペイン語版
├── fr-fr/                    # 🇫🇷 フランス語版
├── de-de/                    # 🇩🇪 ドイツ語版
├── it-it/                    # 🇮🇹 イタリア語版
├── pt-pt/                    # 🇵🇹 ポルトガル語版
├── ar-sa/                    # 🇸🇦 アラビア語版
├── hi-in/                    # 🇮🇳 ヒンディー語版
├── ru-ru/                    # 🇷🇺 ロシア語版
├── id-id/                    # 🇮🇩 インドネシア語版
├── vi-vn/                    # 🇻🇳 ベトナム語版
├── tr-tr/                    # 🇹🇷 トルコ語版
├── es-mx/                    # 🇲🇽 メキシコスペイン語版
├── i18n.js                   # 🌍 多言語サポート
├── language-selector.js      # 🔄 言語切り替え
├── vercel.json              # ⚡ Vercel設定
├── .env                     # 🔐 環境変数（統合）
└── env.example              # 📋 設定テンプレート
```

### 🌍 多言語サポート

**自動言語検出：**
- **位置ベース検出** - ユーザーのIP位置に基づく自動言語選択
- **ブラウザ言語** - ブラウザ設定に基づくフォールバック
- **URLパラメータ** - `?lang=ja-jp`で手動言語指定
- **ローカルストレージ** - ユーザー選択の記憶

**サポート言語：**
- 🇺🇸 **英語** (en-us) - アメリカ、カナダ、イギリス、オーストラリア
- 🇰🇷 **韓国語** (ko-kr) - 韓国
- 🇯🇵 **日本語** (ja-jp) - 日本
- 🇨🇳 **中国語** (zh-cn) - 中国
- 🇪🇸 **スペイン語** (es-es) - スペイン
- 🇫🇷 **フランス語** (fr-fr) - フランス、カナダ
- 🇩🇪 **ドイツ語** (de-de) - ドイツ、オーストリア
- 🇮🇹 **イタリア語** (it-it) - イタリア
- 🇵🇹 **ポルトガル語** (pt-pt) - ポルトガル、ブラジル
- 🇸🇦 **アラビア語** (ar-sa) - サウジアラビア、UAE
- 🇮🇳 **ヒンディー語** (hi-in) - インド
- 🇷🇺 **ロシア語** (ru-ru) - ロシア
- 🇮🇩 **インドネシア語** (id-id) - インドネシア
- 🇻🇳 **ベトナム語** (vi-vn) - ベトナム
- 🇹🇷 **トルコ語** (tr-tr) - トルコ
- 🇲🇽 **メキシコスペイン語** (es-mx) - メキシコ

### 🔗 医療リソース

- [PMDA公式サイト](https://www.pmda.go.jp) - 日本医薬品医療機器総合機構
- [厚生労働省](https://www.mhlw.go.jp) - 厚生労働省
- [日本薬剤師会](https://www.nichiyaku.or.jp) - 日本薬剤師会
- [医薬品医療機器レギュラトリーサイエンス財団](https://www.pmda.go.jp) - PMDA

[⬆️ トップに戻る](#-drug-interaction-checker-v21)

---

## Chinese

### 🌟 概述

药物相互作用检查器是一个先进的Web应用程序，帮助用户识别药物之间的潜在相互作用。结合FDA数据和来自多个提供商的先进AI分析，它通过直观的现代界面提供全面的药物安全信息。

### ✨ 主要功能

#### 🔍 **智能搜索引擎**
- **实时搜索** 300ms防抖
- **拼写容错** 和模糊匹配
- **部分搜索** 功能（例如："阿司"→"阿司匹林"）
- **中英混合使用** 支持
- **基于相关性排序** 相似度算法

#### 🤖 **多AI分析**
- 支持**4个主要AI服务**：OpenAI、Claude、Perplexity、Gemini
- **专业医疗分析** 结构化报告
- **风险评估**：低/中/高/极高
- **临床建议** 和紧急症状
- **自动回退** 系统

#### 📊 **综合数据**
- **FDA OpenFDA API** 集成
- **50+药物数据库** 带品牌名称
- **详细药物信息** 制造商详情
- **相互作用机制** 和警告
- **最近搜索历史** 和收藏

#### 🎨 **现代UI/UX**
- **玻璃态设计** 模糊效果
- **专业灰色主题** 微妙渐变
- **深色/浅色模式** 支持
- **响应式设计** 全设备适配
- **无障碍功能** ARIA标签
- **简洁页脚布局** 医疗资源链接

### 🔧 环境变量设置

**统一设置管理：**
所有语言使用单个根`.env`文件进行集中式设置管理：

```bash
# 复制示例文件
cp env.example .env

# 编辑实际值
nano .env
```

**必需设置：**
```env
# EmailJS设置（通用）
EMAILJS_PUBLIC_KEY=your_emailjs_public_key_here
EMAILJS_SERVICE_ID=your_emailjs_service_id_here
EMAILJS_TEMPLATE_ID=your_emailjs_template_id_here

# AI服务API密钥（可选）
OPENAI_API_KEY=your_openai_api_key_here
CLAUDE_API_KEY=your_claude_api_key_here
PERPLEXITY_API_KEY=your_perplexity_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here

# 国家药物数据库API
FDA_API_KEY=your_fda_api_key_here          # 美国
MFDS_API_KEY=your_mfds_api_key_here       # 韩国
PMDA_API_KEY=your_pmda_api_key_here       # 日本
NMPA_API_KEY=your_nmpa_api_key_here        # 中国
# ... 其他国家API
```

**统一管理的优势：**
- **单一设置文件** 管理16种语言
- **简单维护** - 无重复API密钥
- **安全性** - `.env`文件被gitignore处理
- **效率** - 一处管理所有设置

### 🚀 快速开始

```bash
# 克隆仓库
git clone https://github.com/yourusername/drug-interaction-checker.git
cd drug-interaction-checker

# 设置环境变量
cp env.example .env
# 编辑.env文件添加API密钥

# 启动本地服务器
python3 -m http.server 8080

# 浏览器访问
open http://localhost:8080
```

### 📁 项目结构

```
drug-interaction-checker/
├── en-us/                    # 🇺🇸 英语版
├── ko-kr/                    # 🇰🇷 韩语版
├── ja-jp/                    # 🇯🇵 日语版
├── zh-cn/                    # 🇨🇳 中文版
├── es-es/                    # 🇪🇸 西班牙语版
├── fr-fr/                    # 🇫🇷 法语版
├── de-de/                    # 🇩🇪 德语版
├── it-it/                    # 🇮🇹 意大利语版
├── pt-pt/                    # 🇵🇹 葡萄牙语版
├── ar-sa/                    # 🇸🇦 阿拉伯语版
├── hi-in/                    # 🇮🇳 印地语版
├── ru-ru/                    # 🇷🇺 俄语版
├── id-id/                    # 🇮🇩 印尼语版
├── vi-vn/                    # 🇻🇳 越南语版
├── tr-tr/                    # 🇹🇷 土耳其语版
├── es-mx/                    # 🇲🇽 墨西哥西班牙语版
├── i18n.js                   # 🌍 多语言支持
├── language-selector.js      # 🔄 语言切换
├── vercel.json              # ⚡ Vercel配置
├── .env                     # 🔐 环境变量（统一）
└── env.example              # 📋 设置模板
```

### 🌍 多语言支持

**自动语言检测：**
- **基于位置检测** - 根据用户IP位置自动选择语言
- **浏览器语言** - 基于浏览器设置的备用方案
- **URL参数** - `?lang=zh-cn`手动指定语言
- **本地存储** - 记住用户选择

**支持语言：**
- 🇺🇸 **英语** (en-us) - 美国、加拿大、英国、澳大利亚
- 🇰🇷 **韩语** (ko-kr) - 韩国
- 🇯🇵 **日语** (ja-jp) - 日本
- 🇨🇳 **中文** (zh-cn) - 中国
- 🇪🇸 **西班牙语** (es-es) - 西班牙
- 🇫🇷 **法语** (fr-fr) - 法国、加拿大
- 🇩🇪 **德语** (de-de) - 德国、奥地利
- 🇮🇹 **意大利语** (it-it) - 意大利
- 🇵🇹 **葡萄牙语** (pt-pt) - 葡萄牙、巴西
- 🇸🇦 **阿拉伯语** (ar-sa) - 沙特阿拉伯、阿联酋
- 🇮🇳 **印地语** (hi-in) - 印度
- 🇷🇺 **俄语** (ru-ru) - 俄罗斯
- 🇮🇩 **印尼语** (id-id) - 印度尼西亚
- 🇻🇳 **越南语** (vi-vn) - 越南
- 🇹🇷 **土耳其语** (tr-tr) - 土耳其
- 🇲🇽 **墨西哥西班牙语** (es-mx) - 墨西哥

### 🔗 医疗资源

- [国家药监局](https://www.nmpa.gov.cn) - 中国国家药品监督管理局
- [国家卫健委](https://www.nhc.gov.cn) - 中华人民共和国国家卫生健康委员会
- [中国药学会](https://www.cpa.org.cn) - 中国药学会
- [药品审评中心](https://www.cde.org.cn) - 国家药品监督管理局药品审评中心

[⬆️ 返回顶部](#-drug-interaction-checker-v21)

---

## Spanish

### 🌟 Resumen

El Verificador de Interacciones Medicamentosas es una aplicación web avanzada que ayuda a los usuarios a identificar interacciones potenciales entre medicamentos. Combinando datos de la FDA con análisis avanzado de IA de múltiples proveedores, ofrece información integral de seguridad farmacológica con una interfaz intuitiva y moderna.

### ✨ Características Principales

#### 🔍 **Motor de Búsqueda Inteligente**
- **Búsqueda en tiempo real** con debounce de 300ms
- **Tolerancia a errores tipográficos** y coincidencia difusa
- **Búsqueda parcial** (ej: "aspir" → "Aspirina")
- **Soporte para uso mixto** español-inglés
- **Ordenamiento basado en relevancia** con algoritmos de similitud

#### 🤖 **Análisis Multi-IA**
- Soporte para **4 servicios principales de IA**: OpenAI, Claude, Perplexity, Gemini
- **Análisis médico profesional** con informes estructurados
- **Evaluación de riesgo**: Bajo/Moderado/Alto/Muy Alto
- **Recomendaciones clínicas** y signos de emergencia
- **Sistema de respaldo automático** para conexiones fallidas

#### 📊 **Datos Integrales**
- Integración con **API FDA OpenFDA**
- **Base de datos de 50+ medicamentos** con nombres comerciales
- **Información detallada de medicamentos** con detalles del fabricante
- **Mecanismos de interacción** y advertencias
- **Historial de búsquedas recientes** y favoritos

#### 🎨 **UI/UX Moderna**
- **Diseño glassmorphism** con efectos de desenfoque
- **Tema gris profesional** con gradientes sutiles
- **Soporte para modo oscuro/claro**
- **Diseño responsivo** para todos los dispositivos
- **Características de accesibilidad** con etiquetas ARIA
- **Diseño de pie de página limpio** con enlaces a recursos médicos

### 🔧 Configuración de Variables de Entorno

**Gestión de configuración unificada:**
Todos los idiomas utilizan un único archivo `.env` raíz para gestión centralizada de configuración:

```bash
# Copiar archivo de ejemplo
cp env.example .env

# Editar con valores reales
nano .env
```

**Configuración requerida:**
```env
# Configuración EmailJS (universal)
EMAILJS_PUBLIC_KEY=your_emailjs_public_key_here
EMAILJS_SERVICE_ID=your_emailjs_service_id_here
EMAILJS_TEMPLATE_ID=your_emailjs_template_id_here

# Claves API de servicios de IA (opcional)
OPENAI_API_KEY=your_openai_api_key_here
CLAUDE_API_KEY=your_claude_api_key_here
PERPLEXITY_API_KEY=your_perplexity_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here

# APIs de base de datos de medicamentos por país
FDA_API_KEY=your_fda_api_key_here          # Estados Unidos
MFDS_API_KEY=your_mfds_api_key_here       # Corea del Sur
PMDA_API_KEY=your_pmda_api_key_here       # Japón
NMPA_API_KEY=your_nmpa_api_key_here        # China
# ... otras APIs por país
```

**Ventajas de la gestión unificada:**
- **Archivo de configuración único** para gestionar 16 idiomas
- **Mantenimiento simple** - sin claves API duplicadas
- **Seguridad** - archivo `.env` procesado por gitignore
- **Eficiencia** - gestión de toda la configuración en un lugar

### 🚀 Inicio Rápido

```bash
# Clonar repositorio
git clone https://github.com/yourusername/drug-interaction-checker.git
cd drug-interaction-checker

# Configurar variables de entorno
cp env.example .env
# Editar archivo .env para agregar claves API

# Iniciar servidor local
python3 -m http.server 8080

# Acceder en navegador
open http://localhost:8080
```

### 📁 Estructura del Proyecto

```
drug-interaction-checker/
├── en-us/                    # 🇺🇸 Versión en inglés
├── ko-kr/                    # 🇰🇷 Versión en coreano
├── ja-jp/                    # 🇯🇵 Versión en japonés
├── zh-cn/                    # 🇨🇳 Versión en chino
├── es-es/                    # 🇪🇸 Versión en español
├── fr-fr/                    # 🇫🇷 Versión en francés
├── de-de/                    # 🇩🇪 Versión en alemán
├── it-it/                    # 🇮🇹 Versión en italiano
├── pt-pt/                    # 🇵🇹 Versión en portugués
├── ar-sa/                    # 🇸🇦 Versión en árabe
├── hi-in/                    # 🇮🇳 Versión en hindi
├── ru-ru/                    # 🇷🇺 Versión en ruso
├── id-id/                    # 🇮🇩 Versión en indonesio
├── vi-vn/                    # 🇻🇳 Versión en vietnamita
├── tr-tr/                    # 🇹🇷 Versión en turco
├── es-mx/                    # 🇲🇽 Versión en español mexicano
├── i18n.js                   # 🌍 Soporte multiidioma
├── language-selector.js      # 🔄 Cambio de idioma
├── vercel.json              # ⚡ Configuración Vercel
├── .env                     # 🔐 Variables de entorno (unificadas)
└── env.example              # 📋 Plantilla de configuración
```

### 🌍 Soporte Multiidioma

**Detección automática de idioma:**
- **Detección basada en ubicación** - selección automática de idioma basada en IP del usuario
- **Idioma del navegador** - respaldo basado en configuración del navegador
- **Parámetro URL** - `?lang=es-es` para especificar idioma manualmente
- **Almacenamiento local** - recordar selección del usuario

**Idiomas soportados:**
- 🇺🇸 **Inglés** (en-us) - Estados Unidos, Canadá, Reino Unido, Australia
- 🇰🇷 **Coreano** (ko-kr) - Corea del Sur
- 🇯🇵 **Japonés** (ja-jp) - Japón
- 🇨🇳 **Chino** (zh-cn) - China
- 🇪🇸 **Español** (es-es) - España
- 🇫🇷 **Francés** (fr-fr) - Francia, Canadá
- 🇩🇪 **Alemán** (de-de) - Alemania, Austria
- 🇮🇹 **Italiano** (it-it) - Italia
- 🇵🇹 **Portugués** (pt-pt) - Portugal, Brasil
- 🇸🇦 **Árabe** (ar-sa) - Arabia Saudí, Emiratos Árabes Unidos
- 🇮🇳 **Hindi** (hi-in) - India
- 🇷🇺 **Ruso** (ru-ru) - Rusia
- 🇮🇩 **Indonesio** (id-id) - Indonesia
- 🇻🇳 **Vietnamita** (vi-vn) - Vietnam
- 🇹🇷 **Turco** (tr-tr) - Turquía
- 🇲🇽 **Español Mexicano** (es-mx) - México

### 🔗 Recursos Médicos

- [AEMPS](https://www.aemps.gob.es) - Agencia Española de Medicamentos y Productos Sanitarios
- [Ministerio de Sanidad](https://www.mscbs.gob.es) - Ministerio de Sanidad, Consumo y Bienestar Social
- [Colegio Oficial de Farmacéuticos](https://www.portalfarma.com) - Consejo General de Colegios Oficiales de Farmacéuticos
- [Base de Datos de Medicamentos](https://www.aemps.gob.es/cima) - Centro de Información online de Medicamentos de la AEMPS

[⬆️ Volver arriba](#-drug-interaction-checker-v21)

---

## French

### 🌟 Aperçu

Le Vérificateur d'Interactions Médicamenteuses est une application web avancée qui aide les utilisateurs à identifier les interactions potentielles entre les médicaments. En combinant les données de la FDA avec une analyse IA avancée de plusieurs fournisseurs, il offre des informations complètes sur la sécurité des médicaments avec une interface intuitive et moderne.

### ✨ Fonctionnalités Principales

- **Recherche intelligente en temps réel** avec tolérance aux fautes de frappe
- **Analyse multi-IA** : OpenAI, Claude, Perplexity, Gemini
- **Évaluation des risques** : Faible/Modéré/Élevé/Très élevé
- **Base de données de 50+ médicaments** avec noms commerciaux
- **Mode sombre/clair** avec design glassmorphism
- **Support multilingue** - 16 langues avec détection automatique

### 🔧 Configuration

```bash
# Cloner le dépôt
git clone https://github.com/yourusername/drug-interaction-checker.git
cd drug-interaction-checker

# Configurer les variables d'environnement
cp env.example .env
# Modifier le fichier .env avec vos clés API

# Démarrer le serveur local
python3 -m http.server 8080
```

### 🔗 Ressources Médicales

- [ANSM](https://www.ansm.sante.fr) - Agence Nationale de Sécurité du Médicament et des Produits de Santé
- [Ministère de la Santé](https://www.sante.gouv.fr) - Ministère de la Santé et de la Prévention
- [Ordre des Pharmaciens](https://www.ordre.pharmacien.fr) - Ordre National des Pharmaciens
- [Base Claude Bernard](https://www.resip.fr) - Base de données des médicaments

[⬆️ Retour en haut](#-drug-interaction-checker-v21)

---

## German

### 🌟 Überblick

Der Arzneimittelwechselwirkungsprüfer ist eine fortschrittliche Webanwendung, die Benutzern hilft, potenzielle Wechselwirkungen zwischen Medikamenten zu identifizieren. Durch die Kombination von FDA-Daten mit fortschrittlicher KI-Analyse mehrerer Anbieter bietet es umfassende Informationen zur Arzneimittelsicherheit mit einer intuitiven und modernen Benutzeroberfläche.

### ✨ Hauptmerkmale

- **Intelligente Echtzeitsuche** mit Tippfehlertoleranz
- **Multi-KI-Analyse**: OpenAI, Claude, Perplexity, Gemini
- **Risikobewertung**: Niedrig/Mittel/Hoch/Sehr hoch
- **Datenbank mit 50+ Medikamenten** mit Markennamen
- **Dunkler/Heller Modus** mit Glassmorphismus-Design
- **Mehrsprachige Unterstützung** - 16 Sprachen mit automatischer Erkennung

### 🔧 Konfiguration

```bash
# Repository klonen
git clone https://github.com/yourusername/drug-interaction-checker.git
cd drug-interaction-checker

# Umgebungsvariablen konfigurieren
cp env.example .env
# .env-Datei mit Ihren API-Schlüsseln bearbeiten

# Lokalen Server starten
python3 -m http.server 8080
```

### 🔗 Medizinische Ressourcen

- [BfArM](https://www.bfarm.de) - Bundesinstitut für Arzneimittel und Medizinprodukte
- [PEI](https://www.pei.de) - Paul-Ehrlich-Institut
- [ABDA](https://www.abda.de) - Bundesvereinigung Deutscher Apothekerverbände
- [Rote Liste](https://www.rote-liste.de) - Arzneimittel-Datenbank

[⬆️ Nach oben](#-drug-interaction-checker-v21)

---

## Italian

### 🌟 Panoramica

Il Verificatore di Interazioni Farmacologiche è un'applicazione web avanzata che aiuta gli utenti a identificare potenziali interazioni tra farmaci. Combinando i dati della FDA con analisi IA avanzate da più fornitori, offre informazioni complete sulla sicurezza dei farmaci con un'interfaccia intuitiva e moderna.

### ✨ Caratteristiche Principali

- **Ricerca intelligente in tempo reale** con tolleranza agli errori di battitura
- **Analisi multi-IA**: OpenAI, Claude, Perplexity, Gemini
- **Valutazione del rischio**: Basso/Moderato/Alto/Molto alto
- **Database di 50+ farmaci** con nomi commerciali
- **Modalità scura/chiara** con design glassmorphism
- **Supporto multilingue** - 16 lingue con rilevamento automatico

### 🔧 Configurazione

```bash
# Clonare il repository
git clone https://github.com/yourusername/drug-interaction-checker.git
cd drug-interaction-checker

# Configurare le variabili d'ambiente
cp env.example .env
# Modificare il file .env con le proprie chiavi API

# Avviare il server locale
python3 -m http.server 8080
```

### 🔗 Risorse Mediche

- [AIFA](https://www.aifa.gov.it) - Agenzia Italiana del Farmaco
- [Ministero della Salute](https://www.salute.gov.it) - Ministero della Salute
- [Federfarma](https://www.federfarma.it) - Federazione Nazionale Farmacisti Italiani
- [Farmadati](https://www.farmadati.it) - Banca Dati Farmaci

[⬆️ Torna su](#-drug-interaction-checker-v21)

---

## Portuguese

### 🌟 Visão Geral

O Verificador de Interações Medicamentosas é uma aplicação web avançada que ajuda os utilizadores a identificar potenciais interações entre medicamentos. Combinando dados da FDA com análise avançada de IA de múltiplos fornecedores, oferece informações abrangentes sobre segurança de medicamentos com uma interface intuitiva e moderna.

### ✨ Características Principais

- **Pesquisa inteligente em tempo real** com tolerância a erros de digitação
- **Análise multi-IA**: OpenAI, Claude, Perplexity, Gemini
- **Avaliação de risco**: Baixo/Moderado/Alto/Muito alto
- **Base de dados de 50+ medicamentos** com nomes comerciais
- **Modo escuro/claro** com design glassmorphism
- **Suporte multilíngue** - 16 idiomas com deteção automática

### 🔧 Configuração

```bash
# Clonar o repositório
git clone https://github.com/yourusername/drug-interaction-checker.git
cd drug-interaction-checker

# Configurar variáveis de ambiente
cp env.example .env
# Editar o ficheiro .env com as suas chaves API

# Iniciar o servidor local
python3 -m http.server 8080
```

### 🔗 Recursos Médicos

- [INFARMED](https://www.infarmed.pt) - Autoridade Nacional do Medicamento e Produtos de Saúde
- [DGS](https://www.dgs.pt) - Direção-Geral da Saúde
- [Ordem dos Farmacêuticos](https://www.ordemfarmaceuticos.pt) - Ordem dos Farmacêuticos
- [Infomed](https://www.infarmed.pt/infomed) - Base de Dados de Medicamentos

[⬆️ Voltar ao topo](#-drug-interaction-checker-v21)

---

## Arabic

### 🌟 نظرة عامة

فاحص تفاعل الأدوية هو تطبيق ويب متقدم يساعد المستخدمين على تحديد التفاعلات المحتملة بين الأدوية. من خلال الجمع بين بيانات FDA وتحليل الذكاء الاصطناعي المتقدم من موفرين متعددين، يقدم معلومات شاملة عن سلامة الأدوية بواجهة بديهية وحديثة.

### ✨ الميزات الرئيسية

- **بحث ذكي في الوقت الفعلي** مع التسامح مع الأخطاء الإملائية
- **تحليل متعدد الذكاء الاصطناعي**: OpenAI و Claude و Perplexity و Gemini
- **تقييم المخاطر**: منخفض / معتدل / عالي / عالي جدًا
- **قاعدة بيانات تضم أكثر من 50 دواء** بأسماء تجارية
- **الوضع الداكن/الفاتح** مع تصميم glassmorphism
- **دعم متعدد اللغات** - 16 لغة مع الكشف التلقائي

### 🔧 التكوين

```bash
# استنساخ المستودع
git clone https://github.com/yourusername/drug-interaction-checker.git
cd drug-interaction-checker

# تكوين متغيرات البيئة
cp env.example .env
# تحرير ملف .env بمفاتيح API الخاصة بك

# بدء الخادم المحلي
python3 -m http.server 8080
```

### 🔗 الموارد الطبية

- [SFDA](https://www.sfda.gov.sa) - الهيئة العامة للغذاء والدواء
- [وزارة الصحة](https://www.moh.gov.sa) - وزارة الصحة السعودية
- [الهيئة السعودية للتخصصات الصحية](https://www.scfhs.org.sa) - الهيئة السعودية للتخصصات الصحية
- [الصيدلة السعودية](https://www.saudipharmacy.sa) - الجمعية السعودية الصيدلية

[⬆️ العودة إلى الأعلى](#-drug-interaction-checker-v21)

---

## Hindi

### 🌟 अवलोकन

दवा इंटरैक्शन चेकर एक उन्नत वेब एप्लिकेशन है जो उपयोगकर्ताओं को दवाओं के बीच संभावित इंटरैक्शन की पहचान करने में मदद करता है। FDA डेटा को कई प्रदाताओं से उन्नत AI विश्लेषण के साथ जोड़कर, यह एक सहज और आधुनिक इंटरफ़ेस के साथ व्यापक दवा सुरक्षा जानकारी प्रदान करता है।

### ✨ मुख्य विशेषताएं

- **रीयल-टाइम इंटेलिजेंट खोज** टाइपिंग त्रुटियों के साथ सहनशीलता
- **मल्टी-AI विश्लेषण**: OpenAI, Claude, Perplexity, Gemini
- **जोखिम मूल्यांकन**: कम/मध्यम/उच्च/बहुत उच्च
- **50+ दवाओं का डेटाबेस** ब्रांड नामों के साथ
- **डार्क/लाइट मोड** glassmorphism डिज़ाइन के साथ
- **बहुभाषी समर्थन** - स्वचालित पहचान के साथ 16 भाषाएं

### 🔧 कॉन्फ़िगरेशन

```bash
# रिपॉजिटरी क्लोन करें
git clone https://github.com/yourusername/drug-interaction-checker.git
cd drug-interaction-checker

# पर्यावरण चर कॉन्फ़िगर करें
cp env.example .env
# अपनी API कुंजियों के साथ .env फ़ाइल संपादित करें

# स्थानीय सर्वर प्रारंभ करें
python3 -m http.server 8080
```

### 🔗 चिकित्सा संसाधन

- [CDSCO](https://cdsco.gov.in) - केंद्रीय औषधि मानक नियंत्रण संगठन
- [स्वास्थ्य मंत्रालय](https://www.mohfw.gov.in) - स्वास्थ्य और परिवार कल्याण मंत्रालय
- [IPA](https://www.ipapharma.org) - इंडियन फार्मास्यूटिकल एसोसिएशन
- [AYUSH](https://www.ayush.gov.in) - आयुष मंत्रालय

[⬆️ शीर्ष पर वापस जाएं](#-drug-interaction-checker-v21)

---

## Russian

### 🌟 Обзор

Проверка взаимодействия лекарств - это продвинутое веб-приложение, которое помогает пользователям выявлять потенциальные взаимодействия между лекарствами. Сочетая данные FDA с продвинутым ИИ-анализом от нескольких поставщиков, оно предоставляет полную информацию о безопасности лекарств с интуитивным и современным интерфейсом.

### ✨ Основные функции

- **Интеллектуальный поиск в реальном времени** с толерантностью к опечаткам
- **Мульти-ИИ анализ**: OpenAI, Claude, Perplexity, Gemini
- **Оценка риска**: Низкий/Умеренный/Высокий/Очень высокий
- **База данных из 50+ лекарств** с торговыми названиями
- **Тёмный/Светлый режим** с дизайном glassmorphism
- **Многоязычная поддержка** - 16 языков с автоматическим определением

### 🔧 Настройка

```bash
# Клонировать репозиторий
git clone https://github.com/yourusername/drug-interaction-checker.git
cd drug-interaction-checker

# Настроить переменные окружения
cp env.example .env
# Отредактировать файл .env с вашими API-ключами

# Запустить локальный сервер
python3 -m http.server 8080
```

### 🔗 Медицинские ресурсы

- [Росздравнадзор](https://roszdravnadzor.gov.ru) - Федеральная служба по надзору в сфере здравоохранения
- [Минздрав России](https://minzdrav.gov.ru) - Министерство здравоохранения Российской Федерации
- [РФА](https://www.rpharms.ru) - Российская Фармацевтическая Ассоциация
- [ГРЛС](https://grls.rosminzdrav.ru) - Государственный реестр лекарственных средств

[⬆️ Вернуться наверх](#-drug-interaction-checker-v21)

---

## Indonesian

### 🌟 Gambaran Umum

Pemeriksa Interaksi Obat adalah aplikasi web canggih yang membantu pengguna mengidentifikasi interaksi potensial antara obat-obatan. Menggabungkan data FDA dengan analisis AI canggih dari berbagai penyedia, aplikasi ini menawarkan informasi keamanan obat yang komprehensif dengan antarmuka yang intuitif dan modern.

### ✨ Fitur Utama

- **Pencarian cerdas real-time** dengan toleransi kesalahan ketik
- **Analisis Multi-AI**: OpenAI, Claude, Perplexity, Gemini
- **Penilaian risiko**: Rendah/Sedang/Tinggi/Sangat Tinggi
- **Database 50+ obat** dengan nama merek
- **Mode gelap/terang** dengan desain glassmorphism
- **Dukungan multibahasa** - 16 bahasa dengan deteksi otomatis

### 🔧 Konfigurasi

```bash
# Clone repositori
git clone https://github.com/yourusername/drug-interaction-checker.git
cd drug-interaction-checker

# Konfigurasi variabel lingkungan
cp env.example .env
# Edit file .env dengan kunci API Anda

# Jalankan server lokal
python3 -m http.server 8080
```

### 🔗 Sumber Daya Medis

- [BPOM](https://www.pom.go.id) - Badan Pengawas Obat dan Makanan
- [Kementerian Kesehatan](https://www.kemkes.go.id) - Kementerian Kesehatan Republik Indonesia
- [IAI](https://www.iaiglobal.or.id) - Ikatan Apoteker Indonesia
- [PIONAS](https://pionas.pom.go.id) - Pusat Informasi Obat Nasional

[⬆️ Kembali ke atas](#-drug-interaction-checker-v21)

---

## Vietnamese

### 🌟 Tổng Quan

Kiểm tra Tương tác Thuốc là một ứng dụng web tiên tiến giúp người dùng xác định các tương tác tiềm ẩn giữa các loại thuốc. Kết hợp dữ liệu FDA với phân tích AI tiên tiến từ nhiều nhà cung cấp, ứng dụng cung cấp thông tin toàn diện về an toàn thuốc với giao diện trực quan và hiện đại.

### ✨ Tính Năng Chính

- **Tìm kiếm thông minh thời gian thực** với khả năng chịu lỗi chính tả
- **Phân tích Đa-AI**: OpenAI, Claude, Perplexity, Gemini
- **Đánh giá rủi ro**: Thấp/Trung bình/Cao/Rất cao
- **Cơ sở dữ liệu 50+ loại thuốc** với tên thương mại
- **Chế độ tối/sáng** với thiết kế glassmorphism
- **Hỗ trợ đa ngôn ngữ** - 16 ngôn ngữ với phát hiện tự động

### 🔧 Cấu Hình

```bash
# Clone repository
git clone https://github.com/yourusername/drug-interaction-checker.git
cd drug-interaction-checker

# Cấu hình biến môi trường
cp env.example .env
# Chỉnh sửa file .env với API keys của bạn

# Khởi động server cục bộ
python3 -m http.server 8080
```

### 🔗 Tài Nguyên Y Tế

- [Bộ Y tế](https://moh.gov.vn) - Bộ Y tế Việt Nam
- [Cục Quản lý Dược](https://dav.gov.vn) - Cục Quản lý Dược
- [Hội Dược học](https://www.vps.org.vn) - Hội Dược học Việt Nam
- [Drugbank.vn](https://drugbank.vn) - Cơ sở dữ liệu thuốc Việt Nam

[⬆️ Quay lại đầu trang](#-drug-interaction-checker-v21)

---

## Turkish

### 🌟 Genel Bakış

İlaç Etkileşim Kontrolü, kullanıcıların ilaçlar arasındaki potansiyel etkileşimleri belirlemelerine yardımcı olan gelişmiş bir web uygulamasıdır. FDA verilerini birden fazla sağlayıcıdan gelişmiş yapay zeka analiziyle birleştirerek, sezgisel ve modern bir arayüzle kapsamlı ilaç güvenliği bilgisi sunar.

### ✨ Ana Özellikler

- **Gerçek zamanlı akıllı arama** yazım hatası toleransıyla
- **Çoklu-AI analizi**: OpenAI, Claude, Perplexity, Gemini
- **Risk değerlendirmesi**: Düşük/Orta/Yüksek/Çok Yüksek
- **50+ ilaç veritabanı** marka isimleriyle
- **Karanlık/Aydınlık mod** glassmorphism tasarımıyla
- **Çok dilli destek** - otomatik algılama ile 16 dil

### 🔧 Yapılandırma

```bash
# Depoyu klonla
git clone https://github.com/yourusername/drug-interaction-checker.git
cd drug-interaction-checker

# Ortam değişkenlerini yapılandır
cp env.example .env
# .env dosyasını API anahtarlarınızla düzenleyin

# Yerel sunucuyu başlat
python3 -m http.server 8080
```

### 🔗 Tıbbi Kaynaklar

- [TİTCK](https://www.titck.gov.tr) - Türkiye İlaç ve Tıbbi Cihaz Kurumu
- [Sağlık Bakanlığı](https://www.saglik.gov.tr) - Türkiye Cumhuriyeti Sağlık Bakanlığı
- [TEB](https://www.teb.org.tr) - Türk Eczacıları Birliği
- [İlaç Bilgi Bankası](https://www.titck.gov.tr/kubkt) - Kısa Ürün Bilgisi ve Kullanma Talimatı

[⬆️ Başa dön](#-drug-interaction-checker-v21)

---

## Mexican Spanish

### 🌟 Resumen

El Verificador de Interacciones Medicamentosas es una aplicación web avanzada que ayuda a los usuarios a identificar interacciones potenciales entre medicamentos. Combinando datos de la FDA con análisis avanzado de IA de múltiples proveedores, ofrece información integral de seguridad farmacológica con una interfaz intuitiva y moderna.

### ✨ Características Principales

- **Búsqueda inteligente en tiempo real** con tolerancia a errores tipográficos
- **Análisis Multi-IA**: OpenAI, Claude, Perplexity, Gemini
- **Evaluación de riesgo**: Bajo/Moderado/Alto/Muy Alto
- **Base de datos de 50+ medicamentos** con nombres comerciales
- **Modo oscuro/claro** con diseño glassmorphism
- **Soporte multiidioma** - 16 idiomas con detección automática

### 🔧 Configuración

```bash
# Clonar repositorio
git clone https://github.com/yourusername/drug-interaction-checker.git
cd drug-interaction-checker

# Configurar variables de entorno
cp env.example .env
# Editar archivo .env para agregar claves API

# Iniciar servidor local
python3 -m http.server 8080
```

### 🔗 Recursos Médicos

- [COFEPRIS](https://www.gob.mx/cofepris) - Comisión Federal para la Protección contra Riesgos Sanitarios
- [Secretaría de Salud](https://www.gob.mx/salud) - Secretaría de Salud de México
- [CONAMED](https://www.gob.mx/conamed) - Comisión Nacional de Arbitraje Médico
- [IMSS](https://www.imss.gob.mx) - Instituto Mexicano del Seguro Social

[⬆️ Volver arriba](#-drug-interaction-checker-v21)
