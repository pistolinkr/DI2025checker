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

### 🚀 はじめに

#### 🌐 言語サポート
このプロジェクトは独立した言語フォルダで完全に最適化されています：
- **日本語**: `/ja-jp/` - ローカライズされたコンテンツの日本語版
- **英語（デフォルト）**: `/en-us/` - ローカライズされたコンテンツの英語版
- **言語切り替え**: フッターの言語スイッチャーを使用するか、言語フォルダに直接移動
- 各言語フォルダには独立した `config.js`、`index.html`、`scripts.js`、`styles.css` が含まれています

#### 📁 プロジェクト構造

```
DI2025checker/
├── vercel.json          # Vercelデプロイ設定
├── ja-jp/               # 日本語フォルダ
│   ├── config.js        # 日本語EmailJS設定
│   ├── index.html       # 日本語メインページ
│   ├── ai-test.html     # 日本語AIテストページ
│   ├── scripts.js       # 日本語ローカライズスクリプト
│   └── styles.css       # 共有スタイル
├── en-us/               # 英語フォルダ
│   ├── config.js        # 英語EmailJS設定
│   ├── index.html       # 英語メインページ
│   ├── ai-test.html     # 英語AIテストページ
│   ├── scripts.js       # 英語ローカライズスクリプト
│   └── styles.css       # 共有スタイル
├── i18n.js              # 多言語サポート
├── language-selector.js # 言語切り替え
├── logo/                # 共有アセット
│   ├── logo-dark.png
│   └── logo-light.png
└── README.md
```

#### 前提条件
- モダンなWebブラウザ（Chrome、Firefox、Safari、Edge）
- APIアクセス用のインターネット接続
- 少なくとも1つのAI APIキー（オプションですが推奨）

#### インストール

1. **リポジトリのクローン**
   ```bash
   git clone https://github.com/pistolinkr/DI2025checker.git
   cd DI2025checker
   ```

2. **ローカル開発**
   ```bash
   # ローカルサーバーで提供
   python3 -m http.server 8000
   
   # 次にアクセス：
   # 日本語: http://localhost:8000/ja-jp/
   # 英語: http://localhost:8000/en-us/
   ```

3. **Vercelへのデプロイ（推奨）**
   ```bash
   # Vercel CLIのインストール
   npm i -g vercel
   
   # デプロイ
   vercel
   
   # vercel.json設定により"/"が自動的に"/en-us/index.html"にリダイレクトされます
   ```

4. **AI APIの設定（オプション）**
   - ⚙️ 設定ボタンをクリック
   - 希望するサービスのAPIキーを追加
   - 🧪 APIテストボタンで接続をテスト

#### APIキーのセットアップ

##### OpenAI（推奨）
1. [OpenAI Platform](https://platform.openai.com/api-keys) にアクセス
2. アカウントを作成してAPIキーを生成
3. 形式：`sk-...`

##### Anthropic Claude
1. [Anthropic Console](https://console.anthropic.com/) にアクセス
2. APIキーを生成
3. 形式：`sk-ant-...`

##### Perplexity AI
1. [Perplexity Settings](https://www.perplexity.ai/settings/api) にアクセス
2. APIキーを生成
3. 形式：`pplx-...`

##### Google Gemini
1. [Google AI Studio](https://aistudio.google.com/app/apikey) にアクセス
2. APIキーを生成
3. 形式：`AI...`

#### EmailJSセットアップ（フィードバック機能用）

1. **EmailJSアカウントの作成**
   - [EmailJS](https://www.emailjs.com/) にアクセス
   - 無料アカウントを作成

2. **メールサービスの接続**
   - メールサービス（Gmail、Outlookなど）を追加
   - サービスIDをメモ

3. **メールテンプレートの作成**
   - これらの変数を含むフィードバックテンプレートを作成：
     - `{{from_name}}` - 送信者の名前
     - `{{from_email}}` - 送信者のメール
     - `{{subject}}` - フィードバックの件名
     - `{{message}}` - フィードバックメッセージ
   - テンプレートIDをメモ

4. **環境変数の設定**
   - ルートの `.env` ファイルを編集
   - プレースホルダー値を置き換え：
     ```env
     EMAILJS_PUBLIC_KEY=your_actual_public_key
     EMAILJS_SERVICE_ID=your_actual_service_id
     EMAILJS_TEMPLATE_ID=your_actual_template_id
     ```

### 📖 使い方

1. **薬物の検索**
   - 検索ボックスに薬物名を入力
   - 部分名やタイプミスでも使用可能
   - インテリジェントな提案から選択

2. **相互作用のチェック**
   - ドロップダウンから2つの薬物を選択
   - 「相互作用をチェック」をクリック
   - AI分析とFDAデータの両方を確認

3. **詳細情報の表示**
   - 任意の薬物名をクリックして詳細情報を表示
   - 薬物を相互作用チェッカーに直接追加

### 🔬 AI分析機能

- **リスク評価**: 包括的なリスクレベル評価
- **臨床的洞察**: 専門的な医療推奨事項
- **相互作用メカニズム**: 分子レベルでの薬物相互作用
- **緊急サイン**: 即座に医療を受けるべき時
- **構造化レポート**: 読みやすい形式の分析

### ⚠️ 重要な医療免責事項

> **このツールは情報提供のみを目的としており、専門的な医療アドバイスに代わるものではありません。薬物に関する決定を行う前に、必ず医療提供者に相談してください。**

### 🤝 貢献

1. リポジトリをフォーク
2. 機能ブランチを作成（`git checkout -b feature/amazing-feature`）
3. 変更をコミット（`git commit -m 'Add amazing feature'`）
4. ブランチにプッシュ（`git push origin feature/amazing-feature`）
5. プルリクエストを開く

### 📄 ライセンス

このプロジェクトはMITライセンスの下でライセンスされています - 詳細は [LICENSE](LICENSE) ファイルを参照してください。

### 🙏 謝辞

- 包括的な薬物データを提供するFDA OpenFDA
- 高度な分析機能を提供するAIプロバイダー
- 薬物相互作用に関するガイダンスを提供する医療専門家
- 日本の医療機関：PMDA、厚生労働省、日本薬剤師会

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

#### 🌐 语言支持
本项目通过独立的语言文件夹进行完全优化：
- **中文**: `/zh-cn/` - 中文本地化内容
- **英语（默认）**: `/en-us/` - 英语本地化内容
- **语言切换**: 使用页脚语言切换器或直接导航到语言文件夹
- 每个语言文件夹包含独立的 `config.js`、`index.html`、`scripts.js` 和 `styles.css`

#### 📁 项目结构

```
DI2025checker/
├── vercel.json          # Vercel部署配置
├── zh-cn/               # 中文文件夹
│   ├── config.js        # 中文EmailJS配置
│   ├── index.html       # 中文主页
│   ├── ai-test.html     # 中文AI测试页
│   ├── scripts.js       # 中文本地化脚本
│   └── styles.css       # 共享样式
├── en-us/               # 英语文件夹
│   ├── config.js        # 英语EmailJS配置
│   ├── index.html       # 英语主页
│   ├── ai-test.html     # 英语AI测试页
│   ├── scripts.js       # 英语本地化脚本
│   └── styles.css       # 共享样式
├── i18n.js              # 多语言支持
├── language-selector.js # 语言切换
├── logo/                # 共享资源
│   ├── logo-dark.png
│   └── logo-light.png
└── README.md
```

#### 前提条件
- 现代Web浏览器（Chrome、Firefox、Safari、Edge）
- 用于API访问的互联网连接
- 至少一个AI API密钥（可选但推荐）

#### 安装步骤

1. **克隆仓库**
   ```bash
   git clone https://github.com/pistolinkr/DI2025checker.git
   cd DI2025checker
   ```

2. **本地开发**
   ```bash
   # 使用本地服务器提供服务
   python3 -m http.server 8000
   
   # 然后访问：
   # 中文: http://localhost:8000/zh-cn/
   # 英语: http://localhost:8000/en-us/
   ```

3. **部署到Vercel（推荐）**
   ```bash
   # 安装Vercel CLI
   npm i -g vercel
   
   # 部署
   vercel
   
   # vercel.json配置会自动将"/"重定向到"/en-us/index.html"
   ```

4. **配置AI API（可选）**
   - 点击⚙️设置按钮
   - 为所需服务添加API密钥
   - 使用🧪 API测试按钮测试连接

#### API密钥设置

##### OpenAI（推荐）
1. 访问 [OpenAI Platform](https://platform.openai.com/api-keys)
2. 创建账户并生成API密钥
3. 格式：`sk-...`

##### Anthropic Claude
1. 访问 [Anthropic Console](https://console.anthropic.com/)
2. 生成API密钥
3. 格式：`sk-ant-...`

##### Perplexity AI
1. 访问 [Perplexity Settings](https://www.perplexity.ai/settings/api)
2. 生成API密钥
3. 格式：`pplx-...`

##### Google Gemini
1. 访问 [Google AI Studio](https://aistudio.google.com/app/apikey)
2. 生成API密钥
3. 格式：`AI...`

#### EmailJS设置（用于反馈功能）

1. **创建EmailJS账户**
   - 访问 [EmailJS](https://www.emailjs.com/)
   - 创建免费账户

2. **连接邮件服务**
   - 添加您的邮件服务（Gmail、Outlook等）
   - 记下您的服务ID

3. **创建邮件模板**
   - 创建包含以下变量的反馈模板：
     - `{{from_name}}` - 发送者姓名
     - `{{from_email}}` - 发送者邮箱
     - `{{subject}}` - 反馈主题
     - `{{message}}` - 反馈消息
   - 记下您的模板ID

4. **配置环境变量**
   - 编辑根目录的 `.env` 文件
   - 替换占位符值：
     ```env
     EMAILJS_PUBLIC_KEY=your_actual_public_key
     EMAILJS_SERVICE_ID=your_actual_service_id
     EMAILJS_TEMPLATE_ID=your_actual_template_id
     ```

### 📖 使用方法

1. **搜索药物**
   - 在搜索框中输入药物名称
   - 使用部分名称甚至拼写错误
   - 从智能建议中选择

2. **检查相互作用**
   - 从下拉菜单中选择两种药物
   - 点击"检查相互作用"
   - 查看AI分析和FDA数据

3. **查看详细信息**
   - 点击任何药物名称查看详细信息
   - 直接将药物添加到相互作用检查器

### 🔬 AI分析功能

- **风险评估**: 全面的风险级别评估
- **临床见解**: 专业医疗建议
- **相互作用机制**: 分子级别的药物相互作用
- **紧急迹象**: 何时需要立即就医
- **结构化报告**: 易于阅读的格式化分析

### ⚠️ 重要医疗免责声明

> **此工具仅供参考，不应替代专业医疗建议。在做出用药决定之前，请务必咨询医疗保健提供者。**

### 🤝 贡献

1. Fork本仓库
2. 创建功能分支（`git checkout -b feature/amazing-feature`）
3. 提交更改（`git commit -m 'Add amazing feature'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 打开Pull Request

### 📄 许可证

本项目根据MIT许可证授权 - 详见 [LICENSE](LICENSE) 文件。

### 🙏 致谢

- FDA OpenFDA提供的全面药物数据
- AI提供商提供的高级分析功能
- 医疗专业人士提供的药物相互作用指导
- 中国医疗机构：国家药监局、国家卫健委、中国药学会

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

### 🚀 Comenzando

#### 🌐 Soporte de Idiomas
Este proyecto está completamente optimizado con carpetas de idiomas independientes:
- **Español**: `/es-es/` - Versión en español con contenido localizado
- **Inglés (Predeterminado)**: `/en-us/` - Versión en inglés con contenido localizado
- **Cambio de idioma**: Use el selector de idioma del pie de página o navegue directamente a las carpetas de idioma
- Cada carpeta de idioma contiene `config.js`, `index.html`, `scripts.js` y `styles.css` independientes

#### 📁 Estructura del Proyecto

```
DI2025checker/
├── vercel.json          # Configuración de despliegue Vercel
├── es-es/               # Carpeta de español
│   ├── config.js        # Configuración EmailJS en español
│   ├── index.html       # Página principal en español
│   ├── ai-test.html     # Página de prueba AI en español
│   ├── scripts.js       # Scripts localizados en español
│   └── styles.css       # Estilos compartidos
├── en-us/               # Carpeta de inglés
│   ├── config.js        # Configuración EmailJS en inglés
│   ├── index.html       # Página principal en inglés
│   ├── ai-test.html     # Página de prueba AI en inglés
│   ├── scripts.js       # Scripts localizados en inglés
│   └── styles.css       # Estilos compartidos
├── i18n.js              # Soporte multiidioma
├── language-selector.js # Selector de idioma
├── logo/                # Recursos compartidos
│   ├── logo-dark.png
│   └── logo-light.png
└── README.md
```

#### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a Internet para acceso a API
- Al menos una clave API de IA (opcional pero recomendado)

#### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/pistolinkr/DI2025checker.git
   cd DI2025checker
   ```

2. **Desarrollo Local**
   ```bash
   # Servir con un servidor local
   python3 -m http.server 8000
   
   # Luego acceder:
   # Español: http://localhost:8000/es-es/
   # Inglés: http://localhost:8000/en-us/
   ```

3. **Desplegar en Vercel (Recomendado)**
   ```bash
   # Instalar Vercel CLI
   npm i -g vercel
   
   # Desplegar
   vercel
   
   # La configuración vercel.json redirige automáticamente "/" a "/en-us/index.html"
   ```

4. **Configurar APIs de IA (Opcional)**
   - Haga clic en el botón de configuración ⚙️
   - Agregue sus claves API para los servicios deseados
   - Pruebe las conexiones usando el botón de prueba API 🧪

#### Configuración de Claves API

##### OpenAI (Recomendado)
1. Visite [OpenAI Platform](https://platform.openai.com/api-keys)
2. Cree una cuenta y genere una clave API
3. Formato: `sk-...`

##### Anthropic Claude
1. Visite [Anthropic Console](https://console.anthropic.com/)
2. Genere una clave API
3. Formato: `sk-ant-...`

##### Perplexity AI
1. Visite [Perplexity Settings](https://www.perplexity.ai/settings/api)
2. Genere una clave API
3. Formato: `pplx-...`

##### Google Gemini
1. Visite [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Genere una clave API
3. Formato: `AI...`

#### Configuración de EmailJS (para Función de Comentarios)

1. **Crear Cuenta de EmailJS**
   - Visite [EmailJS](https://www.emailjs.com/)
   - Cree una cuenta gratuita

2. **Conectar Servicio de Email**
   - Agregue su servicio de correo (Gmail, Outlook, etc.)
   - Anote su ID de servicio

3. **Crear Plantilla de Email**
   - Cree una plantilla de comentarios con estas variables:
     - `{{from_name}}` - Nombre del remitente
     - `{{from_email}}` - Email del remitente
     - `{{subject}}` - Asunto del comentario
     - `{{message}}` - Mensaje del comentario
   - Anote su ID de plantilla

4. **Configurar Variables de Entorno**
   - Edite el archivo `.env` en la raíz
   - Reemplace los valores de marcador:
     ```env
     EMAILJS_PUBLIC_KEY=your_actual_public_key
     EMAILJS_SERVICE_ID=your_actual_service_id
     EMAILJS_TEMPLATE_ID=your_actual_template_id
     ```

### 📖 Uso

1. **Buscar medicamentos**
   - Escriba el nombre del medicamento en el cuadro de búsqueda
   - Use nombres parciales o incluso errores tipográficos
   - Seleccione de las sugerencias inteligentes

2. **Verificar interacciones**
   - Elija dos medicamentos de los menús desplegables
   - Haga clic en "Verificar Interacción"
   - Revise tanto el análisis de IA como los datos de la FDA

3. **Ver información detallada**
   - Haga clic en cualquier nombre de medicamento para información detallada
   - Agregue medicamentos directamente al verificador de interacciones

### 🔬 Funciones de Análisis de IA

- **Evaluación de Riesgo**: Evaluación integral del nivel de riesgo
- **Perspectivas Clínicas**: Recomendaciones médicas profesionales
- **Mecanismos de Interacción**: Cómo interactúan los medicamentos a nivel molecular
- **Signos de Emergencia**: Cuándo buscar atención médica inmediata
- **Informes Estructurados**: Análisis formateado y fácil de leer

### ⚠️ Descargo de Responsabilidad Médica Importante

> **Esta herramienta es solo para fines informativos y no debe reemplazar el consejo médico profesional. Siempre consulte con proveedores de atención médica antes de tomar decisiones sobre medicamentos.**

### 🤝 Contribuir

1. Haga fork del repositorio
2. Cree una rama de funcionalidad (`git checkout -b feature/amazing-feature`)
3. Confirme los cambios (`git commit -m 'Add amazing feature'`)
4. Empuje a la rama (`git push origin feature/amazing-feature`)
5. Abra un Pull Request

### 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - vea el archivo [LICENSE](LICENSE) para más detalles.

### 🙏 Agradecimientos

- FDA OpenFDA por datos completos de medicamentos
- Proveedores de IA por capacidades de análisis avanzado
- Profesionales médicos por orientación sobre interacciones medicamentosas
- Instituciones médicas españolas: AEMPS, Ministerio de Sanidad, Colegios de Farmacéuticos

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

#### 🔍 **Moteur de Recherche Intelligent**
- **Recherche en temps réel** avec débounce de 300ms
- **Tolérance aux fautes de frappe** et correspondance floue
- **Recherche partielle** (ex: "aspir" → "Aspirine")
- **Support usage mixte** français-anglais
- **Tri par pertinence** avec algorithmes de similarité

#### 🤖 **Analyse Multi-IA**
- Support de **4 services IA majeurs**: OpenAI, Claude, Perplexity, Gemini
- **Analyse médicale professionnelle** avec rapports structurés
- **Évaluation des risques**: Faible/Modéré/Élevé/Très élevé
- **Recommandations cliniques** et signes d'urgence
- **Système de secours automatique** pour connexions échouées

#### 📊 **Données Complètes**
- Intégration **API FDA OpenFDA**
- **Base de données de 50+ médicaments** avec noms commerciaux
- **Informations détaillées** sur les médicaments avec détails du fabricant
- **Mécanismes d'interaction** et avertissements
- **Historique des recherches récentes** et favoris

#### 🎨 **UI/UX Moderne**
- **Design glassmorphism** avec effets de flou
- **Thème gris professionnel** avec dégradés subtils
- **Support mode sombre/clair**
- **Design responsive** pour tous les appareils
- **Fonctionnalités d'accessibilité** avec étiquettes ARIA
- **Mise en page de pied de page propre** avec liens vers ressources médicales

### 🔧 Configuration des Variables d'Environnement

**Gestion de Configuration Unifiée:**
Toutes les langues utilisent un seul fichier `.env` racine pour une configuration centralisée:

```bash
# Copier le fichier d'exemple
cp env.example .env

# Modifier avec vos valeurs réelles
nano .env
```

**Configuration Requise:**
```env
# Configuration EmailJS (Universel)
EMAILJS_PUBLIC_KEY=your_emailjs_public_key_here
EMAILJS_SERVICE_ID=your_emailjs_service_id_here
EMAILJS_TEMPLATE_ID=your_emailjs_template_id_here

# Clés API des Services IA (Optionnel)
OPENAI_API_KEY=your_openai_api_key_here
CLAUDE_API_KEY=your_claude_api_key_here
PERPLEXITY_API_KEY=your_perplexity_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here

# APIs de Base de Données de Médicaments par Pays
FDA_API_KEY=your_fda_api_key_here          # États-Unis
MFDS_API_KEY=your_mfds_api_key_here       # Corée du Sud
PMDA_API_KEY=your_pmda_api_key_here       # Japon
NMPA_API_KEY=your_nmpa_api_key_here        # Chine
# ... autres APIs par pays
```

**Avantages de la Gestion Unifiée:**
- **Fichier de configuration unique** pour gérer 16 langues
- **Maintenance simple** - pas de clés API dupliquées
- **Sécurité** - fichier `.env` traité par gitignore
- **Efficacité** - un seul endroit pour gérer tous les paramètres

### 🚀 Démarrage

#### 🌐 Support Linguistique
Ce projet est entièrement optimisé avec des dossiers de langues indépendants:
- **Français**: `/fr-fr/` - Version française avec contenu localisé
- **Anglais (Par défaut)**: `/en-us/` - Version anglaise avec contenu localisé
- **Changement de langue**: Utilisez le sélecteur de langue du pied de page ou naviguez directement vers les dossiers de langue
- Chaque dossier de langue contient des fichiers `config.js`, `index.html`, `scripts.js` et `styles.css` indépendants

#### 📁 Structure du Projet

```
DI2025checker/
├── vercel.json          # Configuration de déploiement Vercel
├── fr-fr/               # Dossier français
│   ├── config.js        # Configuration EmailJS française
│   ├── index.html       # Page principale française
│   ├── ai-test.html     # Page de test IA française
│   ├── scripts.js       # Scripts localisés français
│   └── styles.css       # Styles partagés
├── en-us/               # Dossier anglais
│   ├── config.js        # Configuration EmailJS anglaise
│   ├── index.html       # Page principale anglaise
│   ├── ai-test.html     # Page de test IA anglaise
│   ├── scripts.js       # Scripts localisés anglais
│   └── styles.css       # Styles partagés
├── i18n.js              # Support multilingue
├── language-selector.js # Sélecteur de langue
├── logo/                # Ressources partagées
│   ├── logo-dark.png
│   └── logo-light.png
└── README.md
```

#### Prérequis
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Connexion Internet pour l'accès aux API
- Au moins une clé API IA (optionnel mais recommandé)

#### Installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/pistolinkr/DI2025checker.git
   cd DI2025checker
   ```

2. **Développement Local**
   ```bash
   # Servir avec un serveur local
   python3 -m http.server 8000
   
   # Puis accéder:
   # Français: http://localhost:8000/fr-fr/
   # Anglais: http://localhost:8000/en-us/
   ```

3. **Déployer sur Vercel (Recommandé)**
   ```bash
   # Installer Vercel CLI
   npm i -g vercel
   
   # Déployer
   vercel
   
   # La configuration vercel.json redirige automatiquement "/" vers "/en-us/index.html"
   ```

4. **Configurer les API IA (Optionnel)**
   - Cliquez sur le bouton de paramètres ⚙️
   - Ajoutez vos clés API pour les services souhaités
   - Testez les connexions en utilisant le bouton de test API 🧪

#### Configuration des Clés API

##### OpenAI (Recommandé)
1. Visitez [OpenAI Platform](https://platform.openai.com/api-keys)
2. Créez un compte et générez une clé API
3. Format: `sk-...`

##### Anthropic Claude
1. Visitez [Anthropic Console](https://console.anthropic.com/)
2. Générez une clé API
3. Format: `sk-ant-...`

##### Perplexity AI
1. Visitez [Perplexity Settings](https://www.perplexity.ai/settings/api)
2. Générez une clé API
3. Format: `pplx-...`

##### Google Gemini
1. Visitez [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Générez une clé API
3. Format: `AI...`

#### Configuration EmailJS (pour la Fonction de Commentaires)

1. **Créer un Compte EmailJS**
   - Visitez [EmailJS](https://www.emailjs.com/)
   - Créez un compte gratuit

2. **Connecter le Service Email**
   - Ajoutez votre service de messagerie (Gmail, Outlook, etc.)
   - Notez votre ID de service

3. **Créer un Modèle d'Email**
   - Créez un modèle de commentaires avec ces variables:
     - `{{from_name}}` - Nom de l'expéditeur
     - `{{from_email}}` - Email de l'expéditeur
     - `{{subject}}` - Sujet du commentaire
     - `{{message}}` - Message du commentaire
   - Notez votre ID de modèle

4. **Configurer les Variables d'Environnement**
   - Modifiez le fichier `.env` à la racine
   - Remplacez les valeurs de remplissage:
     ```env
     EMAILJS_PUBLIC_KEY=your_actual_public_key
     EMAILJS_SERVICE_ID=your_actual_service_id
     EMAILJS_TEMPLATE_ID=your_actual_template_id
     ```

### 📖 Utilisation

1. **Rechercher des médicaments**
   - Tapez le nom du médicament dans la boîte de recherche
   - Utilisez des noms partiels ou même des fautes de frappe
   - Sélectionnez parmi les suggestions intelligentes

2. **Vérifier les interactions**
   - Choisissez deux médicaments dans les menus déroulants
   - Cliquez sur "Vérifier l'Interaction"
   - Examinez l'analyse IA et les données FDA

3. **Voir les informations détaillées**
   - Cliquez sur n'importe quel nom de médicament pour des informations détaillées
   - Ajoutez des médicaments directement au vérificateur d'interactions

### 🔬 Fonctionnalités d'Analyse IA

- **Évaluation des Risques**: Évaluation complète du niveau de risque
- **Perspectives Cliniques**: Recommandations médicales professionnelles
- **Mécanismes d'Interaction**: Comment les médicaments interagissent au niveau moléculaire
- **Signes d'Urgence**: Quand consulter immédiatement un médecin
- **Rapports Structurés**: Analyse formatée facile à lire

### ⚠️ Avertissement Médical Important

> **Cet outil est à titre informatif uniquement et ne doit pas remplacer les conseils médicaux professionnels. Consultez toujours des professionnels de santé avant de prendre des décisions concernant les médicaments.**

### 🤝 Contribuer

1. Forkez le dépôt
2. Créez une branche de fonctionnalité (`git checkout -b feature/amazing-feature`)
3. Validez les changements (`git commit -m 'Add amazing feature'`)
4. Poussez vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrez une Pull Request

### 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

### 🙏 Remerciements

- FDA OpenFDA pour les données complètes sur les médicaments
- Fournisseurs d'IA pour les capacités d'analyse avancées
- Professionnels de santé pour les conseils sur les interactions médicamenteuses
- Institutions médicales françaises: ANSM, Ministère de la Santé, Ordre des Pharmaciens

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

#### 🔍 **Intelligente Suchmaschine**
- **Echtzeitsuche** mit 300ms Debounce
- **Tippfehlertoleranz** und Fuzzy-Matching
- **Teilsuche** (z.B.: "Aspir" → "Aspirin")
- **Gemischte Nutzung** Deutsch-Englisch Unterstützung
- **Relevanzbasierte Sortierung** mit Ähnlichkeitsalgorithmen

#### 🤖 **Multi-KI-Analyse**
- Unterstützung für **4 große KI-Dienste**: OpenAI, Claude, Perplexity, Gemini
- **Professionelle medizinische Analyse** mit strukturierten Berichten
- **Risikobewertung**: Niedrig/Mittel/Hoch/Sehr hoch
- **Klinische Empfehlungen** und Notfallzeichen
- **Automatisches Fallback-System** bei fehlgeschlagenen Verbindungen

#### 📊 **Umfassende Daten**
- **FDA OpenFDA API** Integration
- **50+ Arzneimitteldatenbank** mit Markennamen
- **Detaillierte Arzneimittelinformationen** mit Herstellerdetails
- **Wechselwirkungsmechanismen** und Warnungen
- **Kürzliche Suchhistorie** und Favoriten

#### 🎨 **Moderne UI/UX**
- **Glassmorphismus-Design** mit Blur-Effekten
- **Professionelles graues Theme** mit subtilen Verläufen
- **Dunkler/Heller Modus** Unterstützung
- **Responsives Design** für alle Geräte
- **Barrierefreiheitsfunktionen** mit ARIA-Labels
- **Sauberes Footer-Layout** mit Links zu medizinischen Ressourcen

### 🔧 Umgebungsvariablen-Konfiguration

**Einheitliches Konfigurationsmanagement:**
Alle Sprachen verwenden eine einzige `.env`-Datei im Stammverzeichnis für zentrale Konfiguration:

```bash
# Beispieldatei kopieren
cp env.example .env

# Mit Ihren tatsächlichen Werten bearbeiten
nano .env
```

**Erforderliche Konfiguration:**
```env
# EmailJS-Konfiguration (Universal)
EMAILJS_PUBLIC_KEY=your_emailjs_public_key_here
EMAILJS_SERVICE_ID=your_emailjs_service_id_here
EMAILJS_TEMPLATE_ID=your_emailjs_template_id_here

# KI-Dienst-API-Schlüssel (Optional)
OPENAI_API_KEY=your_openai_api_key_here
CLAUDE_API_KEY=your_claude_api_key_here
PERPLEXITY_API_KEY=your_perplexity_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here

# Länderspezifische Arzneimitteldatenbank-APIs
FDA_API_KEY=your_fda_api_key_here          # USA
MFDS_API_KEY=your_mfds_api_key_here       # Südkorea
PMDA_API_KEY=your_pmda_api_key_here       # Japan
NMPA_API_KEY=your_nmpa_api_key_here        # China
# ... weitere länderspezifische APIs
```

**Vorteile des einheitlichen Managements:**
- **Einzelne Konfigurationsdatei** für alle 16 Sprachen
- **Einfache Wartung** - keine doppelten API-Schlüssel
- **Sicherheit** - `.env`-Datei wird von gitignore verarbeitet
- **Effizienz** - ein Ort für alle Einstellungen

### 🚀 Erste Schritte

#### 🌐 Sprachunterstützung
Dieses Projekt ist vollständig mit unabhängigen Sprachordnern optimiert:
- **Deutsch**: `/de-de/` - Deutsche Version mit lokalisierten Inhalten
- **Englisch (Standard)**: `/en-us/` - Englische Version mit lokalisierten Inhalten
- **Sprachwechsel**: Verwenden Sie den Sprachumschalter in der Fußzeile oder navigieren Sie direkt zu den Sprachordnern
- Jeder Sprachordner enthält unabhängige `config.js`, `index.html`, `scripts.js` und `styles.css` Dateien

#### 📁 Projektstruktur

```
DI2025checker/
├── vercel.json          # Vercel-Bereitstellungskonfiguration
├── de-de/               # Deutscher Ordner
│   ├── config.js        # Deutsche EmailJS-Konfiguration
│   ├── index.html       # Deutsche Hauptseite
│   ├── ai-test.html     # Deutsche KI-Testseite
│   ├── scripts.js       # Lokalisierte deutsche Skripte
│   └── styles.css       # Gemeinsame Styles
├── en-us/               # Englischer Ordner
│   ├── config.js        # Englische EmailJS-Konfiguration
│   ├── index.html       # Englische Hauptseite
│   ├── ai-test.html     # Englische KI-Testseite
│   ├── scripts.js       # Lokalisierte englische Skripte
│   └── styles.css       # Gemeinsame Styles
├── i18n.js              # Mehrsprachige Unterstützung
├── language-selector.js # Sprachumschalter
├── logo/                # Gemeinsame Ressourcen
│   ├── logo-dark.png
│   └── logo-light.png
└── README.md
```

#### Voraussetzungen
- Moderner Webbrowser (Chrome, Firefox, Safari, Edge)
- Internetverbindung für API-Zugriff
- Mindestens ein KI-API-Schlüssel (optional, aber empfohlen)

#### Installation

1. **Repository klonen**
   ```bash
   git clone https://github.com/pistolinkr/DI2025checker.git
   cd DI2025checker
   ```

2. **Lokale Entwicklung**
   ```bash
   # Mit lokalem Server bereitstellen
   python3 -m http.server 8000
   
   # Dann zugreifen:
   # Deutsch: http://localhost:8000/de-de/
   # Englisch: http://localhost:8000/en-us/
   ```

3. **Auf Vercel bereitstellen (Empfohlen)**
   ```bash
   # Vercel CLI installieren
   npm i -g vercel
   
   # Bereitstellen
   vercel
   
   # Die vercel.json-Konfiguration leitet "/" automatisch zu "/en-us/index.html" um
   ```

4. **KI-APIs konfigurieren (Optional)**
   - Klicken Sie auf die Einstellungsschaltfläche ⚙️
   - Fügen Sie Ihre API-Schlüssel für gewünschte Dienste hinzu
   - Testen Sie Verbindungen mit der API-Test-Schaltfläche 🧪

#### API-Schlüssel-Einrichtung

##### OpenAI (Empfohlen)
1. Besuchen Sie [OpenAI Platform](https://platform.openai.com/api-keys)
2. Erstellen Sie ein Konto und generieren Sie einen API-Schlüssel
3. Format: `sk-...`

##### Anthropic Claude
1. Besuchen Sie [Anthropic Console](https://console.anthropic.com/)
2. Generieren Sie einen API-Schlüssel
3. Format: `sk-ant-...`

##### Perplexity AI
1. Besuchen Sie [Perplexity Settings](https://www.perplexity.ai/settings/api)
2. Generieren Sie einen API-Schlüssel
3. Format: `pplx-...`

##### Google Gemini
1. Besuchen Sie [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Generieren Sie einen API-Schlüssel
3. Format: `AI...`

#### EmailJS-Einrichtung (für Feedback-Funktion)

1. **EmailJS-Konto erstellen**
   - Besuchen Sie [EmailJS](https://www.emailjs.com/)
   - Erstellen Sie ein kostenloses Konto

2. **E-Mail-Dienst verbinden**
   - Fügen Sie Ihren E-Mail-Dienst hinzu (Gmail, Outlook, etc.)
   - Notieren Sie Ihre Service-ID

3. **E-Mail-Vorlage erstellen**
   - Erstellen Sie eine Feedback-Vorlage mit diesen Variablen:
     - `{{from_name}}` - Name des Absenders
     - `{{from_email}}` - E-Mail des Absenders
     - `{{subject}}` - Feedback-Betreff
     - `{{message}}` - Feedback-Nachricht
   - Notieren Sie Ihre Template-ID

4. **Umgebungsvariablen konfigurieren**
   - Bearbeiten Sie die `.env`-Datei im Stammverzeichnis
   - Ersetzen Sie die Platzhalterwerte:
     ```env
     EMAILJS_PUBLIC_KEY=your_actual_public_key
     EMAILJS_SERVICE_ID=your_actual_service_id
     EMAILJS_TEMPLATE_ID=your_actual_template_id
     ```

### 📖 Verwendung

1. **Medikamente suchen**
   - Geben Sie den Medikamentennamen in das Suchfeld ein
   - Verwenden Sie Teilnamen oder sogar Tippfehler
   - Wählen Sie aus intelligenten Vorschlägen

2. **Wechselwirkungen prüfen**
   - Wählen Sie zwei Medikamente aus den Dropdown-Menüs
   - Klicken Sie auf "Wechselwirkung prüfen"
   - Überprüfen Sie sowohl KI-Analyse als auch FDA-Daten

3. **Detaillierte Informationen anzeigen**
   - Klicken Sie auf einen Medikamentennamen für detaillierte Informationen
   - Fügen Sie Medikamente direkt zum Wechselwirkungsprüfer hinzu

### 🔬 KI-Analysefunktionen

- **Risikobewertung**: Umfassende Risikostufenbewertung
- **Klinische Erkenntnisse**: Professionelle medizinische Empfehlungen
- **Wechselwirkungsmechanismen**: Wie Medikamente auf molekularer Ebene interagieren
- **Notfallzeichen**: Wann sofortige medizinische Hilfe erforderlich ist
- **Strukturierte Berichte**: Leicht lesbare formatierte Analyse

### ⚠️ Wichtiger medizinischer Haftungsausschluss

> **Dieses Tool dient nur zu Informationszwecken und sollte keine professionelle medizinische Beratung ersetzen. Konsultieren Sie immer Gesundheitsdienstleister, bevor Sie Entscheidungen über Medikamente treffen.**

### 🤝 Mitwirken

1. Forken Sie das Repository
2. Erstellen Sie einen Feature-Branch (`git checkout -b feature/amazing-feature`)
3. Committen Sie Ihre Änderungen (`git commit -m 'Add amazing feature'`)
4. Pushen Sie zum Branch (`git push origin feature/amazing-feature`)
5. Öffnen Sie einen Pull Request

### 📄 Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert - siehe die [LICENSE](LICENSE)-Datei für Details.

### 🙏 Danksagungen

- FDA OpenFDA für umfassende Arzneimitteldaten
- KI-Anbieter für fortgeschrittene Analysefähigkeiten
- Medizinische Fachkräfte für Anleitung zu Arzneimittelwechselwirkungen
- Deutsche medizinische Einrichtungen: BfArM, PEI, ABDA

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

#### 🔍 **Motore di Ricerca Intelligente**
- **Ricerca in tempo reale** con debounce di 300ms
- **Tolleranza agli errori di battitura** e corrispondenza fuzzy
- **Ricerca parziale** (es: "aspir" → "Aspirina")
- **Supporto uso misto** italiano-inglese
- **Ordinamento basato sulla rilevanza** con algoritmi di similarità

#### 🤖 **Analisi Multi-IA**
- Supporto per **4 servizi IA principali**: OpenAI, Claude, Perplexity, Gemini
- **Analisi medica professionale** con report strutturati
- **Valutazione del rischio**: Basso/Moderato/Alto/Molto alto
- **Raccomandazioni cliniche** e segni di emergenza
- **Sistema di fallback automatico** per connessioni fallite

#### 📊 **Dati Completi**
- Integrazione **API FDA OpenFDA**
- **Database di 50+ farmaci** con nomi commerciali
- **Informazioni dettagliate sui farmaci** con dettagli del produttore
- **Meccanismi di interazione** e avvertenze
- **Cronologia ricerche recenti** e preferiti

#### 🎨 **UI/UX Moderna**
- **Design glassmorphism** con effetti blur
- **Tema grigio professionale** con gradienti sottili
- **Supporto modalità scura/chiara**
- **Design responsive** per tutti i dispositivi
- **Funzionalità di accessibilità** con etichette ARIA
- **Layout footer pulito** con link a risorse mediche

### 🔧 Configurazione Variabili d'Ambiente

**Gestione Configurazione Unificata:**
Tutte le lingue utilizzano un unico file `.env` root per la configurazione centralizzata:

```bash
# Copiare il file di esempio
cp env.example .env

# Modificare con i propri valori reali
nano .env
```

**Configurazione Richiesta:**
```env
# Configurazione EmailJS (Universale)
EMAILJS_PUBLIC_KEY=your_emailjs_public_key_here
EMAILJS_SERVICE_ID=your_emailjs_service_id_here
EMAILJS_TEMPLATE_ID=your_emailjs_template_id_here

# Chiavi API Servizi IA (Opzionale)
OPENAI_API_KEY=your_openai_api_key_here
CLAUDE_API_KEY=your_claude_api_key_here
PERPLEXITY_API_KEY=your_perplexity_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here

# API Database Farmaci per Paese
FDA_API_KEY=your_fda_api_key_here          # Stati Uniti
MFDS_API_KEY=your_mfds_api_key_here       # Corea del Sud
PMDA_API_KEY=your_pmda_api_key_here       # Giappone
NMPA_API_KEY=your_nmpa_api_key_here        # Cina
# ... altre API per paese
```

**Vantaggi della Gestione Unificata:**
- **File di configurazione singolo** per gestire 16 lingue
- **Manutenzione semplice** - nessuna chiave API duplicata
- **Sicurezza** - file `.env` gestito da gitignore
- **Efficienza** - un unico posto per gestire tutte le impostazioni

### 🚀 Per Iniziare

#### 🌐 Supporto Linguistico
Questo progetto è completamente ottimizzato con cartelle linguistiche indipendenti:
- **Italiano**: `/it-it/` - Versione italiana con contenuti localizzati
- **Inglese (Predefinito)**: `/en-us/` - Versione inglese con contenuti localizzati
- **Cambio lingua**: Usa il selettore lingua nel footer o naviga direttamente alle cartelle linguistiche
- Ogni cartella linguistica contiene file `config.js`, `index.html`, `scripts.js` e `styles.css` indipendenti

#### 📁 Struttura del Progetto

```
DI2025checker/
├── vercel.json          # Configurazione deployment Vercel
├── it-it/               # Cartella italiana
│   ├── config.js        # Configurazione EmailJS italiana
│   ├── index.html       # Pagina principale italiana
│   ├── ai-test.html     # Pagina test IA italiana
│   ├── scripts.js       # Script localizzati italiani
│   └── styles.css       # Stili condivisi
├── en-us/               # Cartella inglese
│   ├── config.js        # Configurazione EmailJS inglese
│   ├── index.html       # Pagina principale inglese
│   ├── ai-test.html     # Pagina test IA inglese
│   ├── scripts.js       # Script localizzati inglesi
│   └── styles.css       # Stili condivisi
├── i18n.js              # Supporto multilingua
├── language-selector.js # Selettore lingua
├── logo/                # Risorse condivise
│   ├── logo-dark.png
│   └── logo-light.png
└── README.md
```

#### Prerequisiti
- Browser web moderno (Chrome, Firefox, Safari, Edge)
- Connessione Internet per accesso API
- Almeno una chiave API IA (opzionale ma consigliato)

#### Installazione

1. **Clonare il repository**
   ```bash
   git clone https://github.com/pistolinkr/DI2025checker.git
   cd DI2025checker
   ```

2. **Sviluppo Locale**
   ```bash
   # Servire con un server locale
   python3 -m http.server 8000
   
   # Quindi accedere:
   # Italiano: http://localhost:8000/it-it/
   # Inglese: http://localhost:8000/en-us/
   ```

3. **Deploy su Vercel (Consigliato)**
   ```bash
   # Installare Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   
   # La configurazione vercel.json reindirizza automaticamente "/" a "/en-us/index.html"
   ```

4. **Configurare API IA (Opzionale)**
   - Cliccare sul pulsante impostazioni ⚙️
   - Aggiungere le proprie chiavi API per i servizi desiderati
   - Testare le connessioni usando il pulsante test API 🧪

#### Configurazione Chiavi API

##### OpenAI (Consigliato)
1. Visitare [OpenAI Platform](https://platform.openai.com/api-keys)
2. Creare un account e generare una chiave API
3. Formato: `sk-...`

##### Anthropic Claude
1. Visitare [Anthropic Console](https://console.anthropic.com/)
2. Generare una chiave API
3. Formato: `sk-ant-...`

##### Perplexity AI
1. Visitare [Perplexity Settings](https://www.perplexity.ai/settings/api)
2. Generare una chiave API
3. Formato: `pplx-...`

##### Google Gemini
1. Visitare [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Generare una chiave API
3. Formato: `AI...`

#### Configurazione EmailJS (per Funzione Feedback)

1. **Creare Account EmailJS**
   - Visitare [EmailJS](https://www.emailjs.com/)
   - Creare un account gratuito

2. **Connettere Servizio Email**
   - Aggiungere il proprio servizio email (Gmail, Outlook, etc.)
   - Annotare il proprio Service ID

3. **Creare Template Email**
   - Creare un template feedback con queste variabili:
     - `{{from_name}}` - Nome del mittente
     - `{{from_email}}` - Email del mittente
     - `{{subject}}` - Oggetto del feedback
     - `{{message}}` - Messaggio del feedback
   - Annotare il proprio Template ID

4. **Configurare Variabili d'Ambiente**
   - Modificare il file `.env` nella root
   - Sostituire i valori placeholder:
     ```env
     EMAILJS_PUBLIC_KEY=your_actual_public_key
     EMAILJS_SERVICE_ID=your_actual_service_id
     EMAILJS_TEMPLATE_ID=your_actual_template_id
     ```

### 📖 Utilizzo

1. **Cercare farmaci**
   - Digitare il nome del farmaco nella casella di ricerca
   - Usare nomi parziali o anche errori di battitura
   - Selezionare dai suggerimenti intelligenti

2. **Verificare interazioni**
   - Scegliere due farmaci dai menu a tendina
   - Cliccare su "Verifica Interazione"
   - Rivedere sia l'analisi IA che i dati FDA

3. **Visualizzare informazioni dettagliate**
   - Cliccare su qualsiasi nome di farmaco per informazioni dettagliate
   - Aggiungere farmaci direttamente al verificatore di interazioni

### 🔬 Funzionalità Analisi IA

- **Valutazione del Rischio**: Valutazione completa del livello di rischio
- **Approfondimenti Clinici**: Raccomandazioni mediche professionali
- **Meccanismi di Interazione**: Come i farmaci interagiscono a livello molecolare
- **Segni di Emergenza**: Quando cercare assistenza medica immediata
- **Report Strutturati**: Analisi formattata facile da leggere

### ⚠️ Importante Disclaimer Medico

> **Questo strumento è solo a scopo informativo e non deve sostituire il consiglio medico professionale. Consultare sempre gli operatori sanitari prima di prendere decisioni sui farmaci.**

### 🤝 Contribuire

1. Forkare il repository
2. Creare un branch feature (`git checkout -b feature/amazing-feature`)
3. Committare le modifiche (`git commit -m 'Add amazing feature'`)
4. Pushare al branch (`git push origin feature/amazing-feature`)
5. Aprire una Pull Request

### 📄 Licenza

Questo progetto è concesso in licenza sotto la Licenza MIT - vedere il file [LICENSE](LICENSE) per i dettagli.

### 🙏 Ringraziamenti

- FDA OpenFDA per dati completi sui farmaci
- Provider IA per capacità di analisi avanzate
- Professionisti medici per la guida sulle interazioni farmacologiche
- Istituzioni mediche italiane: AIFA, Ministero della Salute, Federfarma

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

#### 🔍 **Motor de Pesquisa Inteligente**
- **Pesquisa em tempo real** com debounce de 300ms
- **Tolerância a erros de digitação** e correspondência difusa
- **Pesquisa parcial** (ex: "aspir" → "Aspirina")
- **Suporte uso misto** português-inglês
- **Ordenação baseada em relevância** com algoritmos de similaridade

#### 🤖 **Análise Multi-IA**
- Suporte para **4 serviços IA principais**: OpenAI, Claude, Perplexity, Gemini
- **Análise médica profissional** com relatórios estruturados
- **Avaliação de risco**: Baixo/Moderado/Alto/Muito alto
- **Recomendações clínicas** e sinais de emergência
- **Sistema de fallback automático** para conexões falhadas

#### 📊 **Dados Abrangentes**
- Integração **API FDA OpenFDA**
- **Base de dados de 50+ medicamentos** com nomes comerciais
- **Informações detalhadas sobre medicamentos** com detalhes do fabricante
- **Mecanismos de interação** e avisos
- **Histórico de pesquisas recentes** e favoritos

#### 🎨 **UI/UX Moderna**
- **Design glassmorphism** com efeitos de desfoque
- **Tema cinza profissional** com gradientes subtis
- **Suporte modo escuro/claro**
- **Design responsivo** para todos os dispositivos
- **Funcionalidades de acessibilidade** com etiquetas ARIA
- **Layout de rodapé limpo** com links para recursos médicos

### 🔧 Configuração de Variáveis de Ambiente

**Gestão de Configuração Unificada:**
Todos os idiomas utilizam um único ficheiro `.env` root para configuração centralizada:

```bash
# Copiar o ficheiro de exemplo
cp env.example .env

# Editar com os seus valores reais
nano .env
```

**Configuração Necessária:**
```env
# Configuração EmailJS (Universal)
EMAILJS_PUBLIC_KEY=your_emailjs_public_key_here
EMAILJS_SERVICE_ID=your_emailjs_service_id_here
EMAILJS_TEMPLATE_ID=your_emailjs_template_id_here

# Chaves API Serviços IA (Opcional)
OPENAI_API_KEY=your_openai_api_key_here
CLAUDE_API_KEY=your_claude_api_key_here
PERPLEXITY_API_KEY=your_perplexity_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here

# APIs Base de Dados de Medicamentos por País
FDA_API_KEY=your_fda_api_key_here          # Estados Unidos
MFDS_API_KEY=your_mfds_api_key_here       # Coreia do Sul
PMDA_API_KEY=your_pmda_api_key_here       # Japão
NMPA_API_KEY=your_nmpa_api_key_here        # China
# ... outras APIs por país
```

**Vantagens da Gestão Unificada:**
- **Ficheiro de configuração único** para gerir 16 idiomas
- **Manutenção simples** - sem chaves API duplicadas
- **Segurança** - ficheiro `.env` gerido por gitignore
- **Eficiência** - um único local para gerir todas as configurações

### 🚀 Começar

#### 🌐 Suporte Linguístico
Este projeto está completamente otimizado com pastas de idiomas independentes:
- **Português**: `/pt-pt/` - Versão portuguesa com conteúdo localizado
- **Inglês (Padrão)**: `/en-us/` - Versão inglesa com conteúdo localizado
- **Mudança de idioma**: Use o seletor de idioma no rodapé ou navegue diretamente para as pastas de idioma
- Cada pasta de idioma contém ficheiros `config.js`, `index.html`, `scripts.js` e `styles.css` independentes

#### 📁 Estrutura do Projeto

```
DI2025checker/
├── vercel.json          # Configuração de deployment Vercel
├── pt-pt/               # Pasta portuguesa
│   ├── config.js        # Configuração EmailJS portuguesa
│   ├── index.html       # Página principal portuguesa
│   ├── ai-test.html     # Página de teste IA portuguesa
│   ├── scripts.js       # Scripts localizados portugueses
│   └── styles.css       # Estilos partilhados
├── en-us/               # Pasta inglesa
│   ├── config.js        # Configuração EmailJS inglesa
│   ├── index.html       # Página principal inglesa
│   ├── ai-test.html     # Página de teste IA inglesa
│   ├── scripts.js       # Scripts localizados ingleses
│   └── styles.css       # Estilos partilhados
├── i18n.js              # Suporte multilingue
├── language-selector.js # Seletor de idioma
├── logo/                # Recursos partilhados
│   ├── logo-dark.png
│   └── logo-light.png
└── README.md
```

#### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Ligação à Internet para acesso API
- Pelo menos uma chave API IA (opcional mas recomendado)

#### Instalação

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/pistolinkr/DI2025checker.git
   cd DI2025checker
   ```

2. **Desenvolvimento Local**
   ```bash
   # Servir com um servidor local
   python3 -m http.server 8000
   
   # Depois aceder:
   # Português: http://localhost:8000/pt-pt/
   # Inglês: http://localhost:8000/en-us/
   ```

3. **Deploy no Vercel (Recomendado)**
   ```bash
   # Instalar Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   
   # A configuração vercel.json redireciona automaticamente "/" para "/en-us/index.html"
   ```

4. **Configurar APIs IA (Opcional)**
   - Clicar no botão de configurações ⚙️
   - Adicionar as suas chaves API para os serviços desejados
   - Testar as conexões usando o botão de teste API 🧪

#### Configuração de Chaves API

##### OpenAI (Recomendado)
1. Visitar [OpenAI Platform](https://platform.openai.com/api-keys)
2. Criar uma conta e gerar uma chave API
3. Formato: `sk-...`

##### Anthropic Claude
1. Visitar [Anthropic Console](https://console.anthropic.com/)
2. Gerar uma chave API
3. Formato: `sk-ant-...`

##### Perplexity AI
1. Visitar [Perplexity Settings](https://www.perplexity.ai/settings/api)
2. Gerar uma chave API
3. Formato: `pplx-...`

##### Google Gemini
1. Visitar [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Gerar uma chave API
3. Formato: `AI...`

#### Configuração EmailJS (para Função de Feedback)

1. **Criar Conta EmailJS**
   - Visitar [EmailJS](https://www.emailjs.com/)
   - Criar uma conta gratuita

2. **Conectar Serviço de Email**
   - Adicionar o seu serviço de email (Gmail, Outlook, etc.)
   - Anotar o seu Service ID

3. **Criar Template de Email**
   - Criar um template de feedback com estas variáveis:
     - `{{from_name}}` - Nome do remetente
     - `{{from_email}}` - Email do remetente
     - `{{subject}}` - Assunto do feedback
     - `{{message}}` - Mensagem do feedback
   - Anotar o seu Template ID

4. **Configurar Variáveis de Ambiente**
   - Editar o ficheiro `.env` na raiz
   - Substituir os valores placeholder:
     ```env
     EMAILJS_PUBLIC_KEY=your_actual_public_key
     EMAILJS_SERVICE_ID=your_actual_service_id
     EMAILJS_TEMPLATE_ID=your_actual_template_id
     ```

### 📖 Utilização

1. **Pesquisar medicamentos**
   - Escrever o nome do medicamento na caixa de pesquisa
   - Usar nomes parciais ou até erros de digitação
   - Selecionar das sugestões inteligentes

2. **Verificar interações**
   - Escolher dois medicamentos dos menus suspensos
   - Clicar em "Verificar Interação"
   - Rever tanto a análise IA como os dados FDA

3. **Ver informações detalhadas**
   - Clicar em qualquer nome de medicamento para informações detalhadas
   - Adicionar medicamentos diretamente ao verificador de interações

### 🔬 Funcionalidades de Análise IA

- **Avaliação de Risco**: Avaliação abrangente do nível de risco
- **Perspetivas Clínicas**: Recomendações médicas profissionais
- **Mecanismos de Interação**: Como os medicamentos interagem a nível molecular
- **Sinais de Emergência**: Quando procurar atenção médica imediata
- **Relatórios Estruturados**: Análise formatada e fácil de ler

### ⚠️ Importante Aviso Médico

> **Esta ferramenta é apenas para fins informativos e não deve substituir aconselhamento médico profissional. Consulte sempre profissionais de saúde antes de tomar decisões sobre medicamentos.**

### 🤝 Contribuir

1. Fazer fork do repositório
2. Criar um branch de funcionalidade (`git checkout -b feature/amazing-feature`)
3. Fazer commit das alterações (`git commit -m 'Add amazing feature'`)
4. Fazer push para o branch (`git push origin feature/amazing-feature`)
5. Abrir um Pull Request

### 📄 Licença

Este projeto está licenciado sob a Licença MIT - ver o ficheiro [LICENSE](LICENSE) para detalhes.

### 🙏 Agradecimentos

- FDA OpenFDA pelos dados abrangentes sobre medicamentos
- Fornecedores de IA pelas capacidades de análise avançada
- Profissionais médicos pela orientação sobre interações medicamentosas
- Instituições médicas portuguesas: INFARMED, DGS, Ordem dos Farmacêuticos

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
