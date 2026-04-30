# 배포 및 운영 가이드

> 스마트스토어·통신판매업 창업 준비 체크 서비스의 배포, 운영, 유지보수 가이드입니다.

---

## 1. 기술 스택 요약

| 항목 | 기술 |
|------|------|
| 프레임워크 | React 18 + Vite 5 |
| 스타일링 | CSS Custom Properties (CSS Variables) |
| 상태 관리 | React useState / useEffect / useCallback |
| 데이터 저장 | localStorage (체크리스트 진행 상태) |
| 외부 API | 없음 (완전 정적) |
| 배포 대상 | 정적 호스팅 (Vercel / Netlify / Cloudflare Pages 등) |

---

## 2. 개발 환경 세팅

### 요구사항

- Node.js 18.x 이상
- npm 9.x 이상

### 초기 설치

```bash
git clone <repository-url>
cd Online-Store-Guide
npm install
```

### 개발 서버 실행

```bash
npm run dev
# → http://localhost:5173 에서 확인
```

### 빌드

```bash
npm run build
# → dist/ 폴더에 정적 파일 생성
```

### 빌드 미리보기

```bash
npm run preview
# → http://localhost:4173 에서 빌드 결과 확인
```

---

## 3. 배포 방법

### Vercel (권장)

**방법 1: CLI**
```bash
npm i -g vercel
vercel login
vercel --prod
```

**방법 2: GitHub 연동 (자동 배포)**
1. [vercel.com](https://vercel.com) 접속
2. "Import Project" → GitHub 저장소 선택
3. Framework: **Vite** 선택
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Deploy 클릭

### Netlify

**방법 1: CLI**
```bash
npm i -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

**방법 2: Drag & Drop**
1. `npm run build` 실행
2. [app.netlify.com](https://app.netlify.com) 접속
3. `dist/` 폴더를 드래그 앤 드롭

**방법 3: GitHub 연동**
- Build command: `npm run build`
- Publish directory: `dist`

### Cloudflare Pages

1. Cloudflare Dashboard → Pages → Create a project
2. GitHub 저장소 연결
3. Build command: `npm run build`
4. Build output directory: `dist`

### GitHub Pages

```bash
npm run build

# gh-pages 패키지 사용
npm install --save-dev gh-pages

# package.json에 추가:
# "homepage": "https://<username>.github.io/<repo-name>",
# "scripts": {
#   "deploy": "gh-pages -d dist"
# }

npm run deploy
```

---

## 4. 도메인 연결 및 OG 태그 업데이트

배포 후 실제 도메인이 결정되면 `index.html`의 OG 태그를 업데이트하세요:

```html
<!-- index.html -->
<meta property="og:url" content="https://실제도메인.com" />
<meta property="og:image" content="https://실제도메인.com/og-image.svg" />
<meta name="twitter:image" content="https://실제도메인.com/og-image.svg" />
```

---

## 5. 환경별 설정

### 기본 경로 설정

배포 경로가 루트(`/`)가 아닌 하위 경로인 경우 `vite.config.js`를 수정합니다:

```js
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/하위경로/', // 예: '/online-store-guide/'
})
```

---

## 6. 유지보수 작업

### 정기 업데이트 작업

#### 공식 출처 URL 점검 (분기 1회)

1. `src/data/sources.js` 열기
2. 각 URL 접속하여 유효성 확인
3. URL 변경 시 업데이트 후 `lastChecked` 날짜 갱신
4. `npm run build`로 빌드 성공 확인
5. 배포

#### 법령·고시 변경 반영 (변경 발생 시)

1. 변경된 내용에 해당하는 데이터 파일 수정
2. FAQ, 체크리스트, 빠른 안내 내용 검토
3. 단정적 표현이 포함되지 않았는지 재확인
4. 빌드 및 배포

### 의존성 업데이트

```bash
# 의존성 현황 확인
npm outdated

# 보안 취약점 확인
npm audit

# 안전한 업데이트
npm update

# 주요 버전 업데이트 (신중히)
npm install react@latest react-dom@latest
npm install vite@latest @vitejs/plugin-react@latest
```

---

## 7. 성능 최적화

### 현재 빌드 크기 (2026-04-30 기준)

| 파일 | 크기 | gzip |
|------|------|------|
| CSS | 23.26 KB | 4.46 KB |
| JS | 168.74 KB | 55.09 KB |
| HTML | 2.08 KB | 0.99 KB |

### 최적화 방향

- Google Fonts 로딩 최적화: `font-display: swap` 기본 적용됨
- 이미지 최적화: SVG 사용으로 최소화
- 코드 스플리팅: 현재 단일 번들 (추후 필요 시 분리)

---

## 8. SEO 관리

### 메타태그 위치

`index.html`에서 다음 항목을 관리합니다:

```html
<title>스마트스토어·통신판매업 창업 준비 체크</title>
<meta name="description" content="..." />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
```

### OG 이미지

`public/og-image.svg`를 수정하여 OG 이미지를 업데이트합니다.  
현재 `index.html`의 OG/Twitter 메타태그는 `/og-image.svg`를 참조합니다.  
실제 운영 시 PNG로 변환하는 것을 권장합니다 (1200×630px). PNG로 교체할 경우 메타태그 경로도 함께 수정하세요.

---

## 9. 로컬 데이터 저장 구조

사용자의 체크리스트 진행 상태는 브라우저 localStorage에 저장됩니다:

```
localStorage keys:
  - "checklistState"  : 체크리스트 항목 완료 상태 { [id]: boolean }
  - "completedSteps"  : 5단계 카드 확인 완료 상태 { [stepId]: boolean }
```

서버 저장이 없으므로 브라우저 데이터 삭제 시 초기화됩니다. 이는 의도된 설계입니다.

---

## 10. 트러블슈팅

### 빌드 오류

```bash
# macOS / Linux
rm -rf node_modules dist
npm install
npm run build
```

```powershell
# Windows PowerShell
Remove-Item -Recurse -Force node_modules, dist
npm install
npm run build
```

### 개발 서버 포트 충돌

```bash
# 포트 지정 실행
npm run dev -- --port 3000
```

### localStorage 초기화 (개발 테스트 시)

브라우저 개발자 도구 → Application → Local Storage → 해당 도메인 → 항목 삭제

---

*최종 업데이트: 2026-04-30*
