# 스마트스토어·통신판매업 창업 준비 체크

> **사업자등록부터 통신판매업 신고, 소비자보호 기본사항까지 공식 출처 중심으로 확인하세요.**

[![Built with Vite](https://img.shields.io/badge/Built%20with-Vite-646cff?logo=vite)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-18-61dafb?logo=react)](https://reactjs.org)
[![정적 배포](https://img.shields.io/badge/%EB%B0%B0%ED%8F%AC-%EC%A0%95%EC%A0%81%20%ED%8E%98%EC%9D%B4%EC%A7%80-brightgreen)](https://vitejs.dev/guide/static-deploy.html)

---

## ⚠️ 법률·세무 자문 아님 고지

본 서비스는 통신판매업 및 스마트스토어 창업 준비를 돕기 위한 **정보성 안내**입니다.  
법률·세무·행정 자문이 아니며, 실제 신고·등록·운영 전에는 **정부24, 홈택스, 공정거래위원회, 소비자24, 국가법령정보센터, 스마트스토어 고객센터** 등 공식 출처의 최신 안내를 확인하시기 바랍니다.

---

## 프로젝트 개요

스마트스토어 및 온라인 쇼핑몰 창업을 준비하는 예비 판매자가 **5~10분 안에 핵심 절차를 파악**하고, 공식 사이트로 이동하기 전 준비물을 확인할 수 있도록 돕는 **원페이지 정보성 웹서비스**입니다.

### 주요 기능

| 기능 | 설명 |
|------|------|
| **5단계 창업 준비 흐름** | 판매 방식 정리 → 사업자등록 → 스마트스토어 가입 → 통신판매업 신고 → 소비자보호 점검, 단계별 공식 출처와 최종 확인일 표시 |
| **체크리스트** | 19개 항목, localStorage 자동 저장, 완료율 표시 |
| **상황별 빠른 안내** | 6가지 상황 선택 시 맞춤 안내 카드, 공식 출처, 최종 확인일 표시 |
| **공식 출처 모음** | 9개 공식 출처, 카테고리 필터, 최종 확인일 표시 |
| **주의사항 섹션** | 8개 리스크 항목 강조 표시 |
| **FAQ** | 8개 Q&A 아코디언 |
| **SEO / OG 태그** | 검색 최적화 및 소셜 공유 지원, public/og-image.svg 사용 |
| **반응형 UI** | 모바일 우선, 태블릿/데스크톱 대응 |

---

## 실행 방법

### 사전 요구사항

- Node.js 20.3 이상
- npm 10 이상

### 개발 서버 실행

```bash
# 의존성 설치
npm install

# 개발 서버 시작 (http://localhost:5173)
npm run dev
```

### 프로덕션 빌드

```bash
npm run build

# 빌드 결과 미리보기
npm run preview

# Cloudflare Workers 라우팅으로 미리보기
npm run preview:workers
```

빌드 결과물은 `dist/` 폴더에 생성됩니다.

---

## 배포 방법

### Cloudflare Workers (권장)

이 프로젝트는 루트의 `wrangler.toml` 설정을 사용해 `dist/` 정적 자산을 Cloudflare Workers에 직접 배포합니다.

```bash
npx wrangler login
npm run deploy
```

SPA 라우팅을 위해 존재하지 않는 경로는 `index.html`로 fallback 되도록 설정되어 있습니다.

### Vercel

```bash
npm i -g vercel
vercel --prod
```

또는 [vercel.com](https://vercel.com)에서 GitHub 저장소를 연결하면 자동 배포됩니다.

### Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Cloudflare Pages

정적 호스팅만 필요하면 Pages 배포도 가능합니다.

Cloudflare Pages 대시보드에서 GitHub 저장소 연결 후:
- **Build command**: `npm run build`
- **Build output directory**: `dist`

### GitHub Pages

```bash
npm run build
# dist/ 폴더를 gh-pages 브랜치에 푸시
```

---

## 프로젝트 구조

```
Online-Store-Guide/
├── public/
│   ├── favicon.svg          # 파비콘
│   └── og-image.svg         # OG 이미지
├── src/
│   ├── data/
│   │   ├── sources.js       # 공식 출처 데이터
│   │   ├── checklist.js     # 체크리스트 항목
│   │   ├── faq.js           # FAQ 데이터
│   │   ├── quickGuides.js   # 상황별 빠른 안내
│   │   ├── steps.js         # 5단계 준비 흐름
│   │   └── risks.js         # 주의사항 항목
│   ├── App.jsx              # 메인 앱 (전체 섹션 컴포넌트 포함)
│   ├── main.jsx             # React 진입점
│   └── styles.css           # 전역 스타일
├── docs/
│   ├── INTRODUCTION.md      # 작업 요청서 원문
│   ├── CONTENT-GUIDE.md     # 콘텐츠 관리 가이드
│   └── DEPLOYMENT.md        # 배포 및 운영 가이드
├── wrangler.toml            # Cloudflare Workers 정적 자산 배포 설정
├── index.html               # HTML 템플릿 (SEO/OG 태그 포함)
├── vite.config.js
├── package.json
└── README.md
```

---

## 공식 출처 관리 방법

공식 출처 데이터는 `src/data/sources.js`에서 관리합니다.

### 정기 점검 주기

- **최소 분기 1회** 공식 URL 및 안내 내용 변경 여부 확인
- 법령·고시 개정 시 **즉시** 관련 내용 업데이트

### 출처 추가 방법

`sources.js`에 아래 형식으로 항목을 추가합니다:

```js
{
  id: "unique-id",
  title: "출처 제목",
  organization: "기관명",
  category: "사업자등록 | 통신판매업 | 소비자보호 | 스마트스토어 | 법령",
  description: "출처 설명",
  url: "https://official-url.go.kr", // 정책 변경 가능, 정기 확인 필요
  lastChecked: "YYYY-MM-DD",
  caution: "주의사항 (선택)",
}
```

> **주의**: 비공식 블로그, 개인 유튜브, 카페 링크는 절대 추가하지 않습니다.

---

## 문구 업데이트 시 주의사항

### 사용해야 할 표현

- "확인하세요", "준비가 필요할 수 있습니다"
- "공식 안내를 기준으로 최종 확인하세요"
- "상황에 따라 달라질 수 있습니다"
- "관할 기관 확인을 권장합니다"

### 절대 사용하면 안 되는 표현

- "무조건 신고해야 합니다" / "신고하지 않아도 됩니다"
- "이렇게 하면 절세됩니다"
- "반품불가로 처리하면 됩니다"
- "이 서류만 있으면 끝납니다"
- "세금 문제 없습니다"

자세한 내용은 [docs/CONTENT-GUIDE.md](docs/CONTENT-GUIDE.md)를 참고하세요.

---

## 향후 개선 아이디어

- [ ] PWA (Progressive Web App) manifest 추가
- [ ] 다크모드 지원
- [ ] 공식 출처 업데이트 일정 알림 기능
- [ ] 체크리스트 PDF 내보내기
- [ ] Google AdSense 광고 영역 실제 연동
- [ ] 구글 애널리틱스 연동
- [ ] 다국어 지원 (영어 버전)
- [ ] 업종별 특화 체크리스트 (식품, 화장품, 의류 등)

---

## 기술 스택

- **프레임워크**: React 18 + Vite 6
- **스타일**: CSS Custom Properties (CSS Variables)
- **상태 저장**: localStorage (서버 없음)
- **배포**: Cloudflare Workers 정적 자산 배포 + 기타 정적 호스팅 가능
- **외부 API**: 없음 (완전 정적)

---

*최종 업데이트: 2026-04-30*
통신판매업/스마트스토어 창업 준비 가이드 원페이지 서비스
