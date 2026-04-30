import { useState, useEffect, useCallback } from "react";
import { sources, sourceCategories } from "./data/sources";
import { checklistData } from "./data/checklist";
import { faqs } from "./data/faq";
import { quickGuides } from "./data/quickGuides";
import { steps } from "./data/steps";
import { risks } from "./data/risks";

/* ================================================================
   NAV BAR
   ================================================================ */
function NavBar({ progress, checkedCount, totalItems }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#steps", label: "준비 흐름" },
    { href: "#checklist", label: "체크리스트" },
    { href: "#quick-guide", label: "빠른 안내" },
    { href: "#sources", label: "공식 출처" },
    { href: "#risks", label: "주의사항" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav
      className={`navbar${scrolled ? " navbar--scrolled" : ""}`}
      role="navigation"
      aria-label="주 메뉴"
    >
      <div className="navbar__inner container">
        <a href="#top" className="navbar__brand">
          <span className="navbar__brand-icon">✓</span>
          창업 준비 체크
        </a>

        {/* Desktop links */}
        <ul className="navbar__links" role="list">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="navbar__link">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Progress badge */}
        <div
          className="navbar__progress-wrap"
          aria-label={`체크리스트 완료율 ${progress}%`}
          title={`${checkedCount}/${totalItems} 완료`}
        >
          <svg className="navbar__progress-ring" viewBox="0 0 36 36" aria-hidden="true">
            <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e2e8f0" strokeWidth="2.5" />
            <circle
              cx="18"
              cy="18"
              r="15.9"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2.5"
              strokeDasharray={`${progress} ${100 - progress}`}
              strokeDashoffset="25"
              strokeLinecap="round"
              style={{ transition: "stroke-dasharray 0.4s ease" }}
            />
          </svg>
          <span className="navbar__progress-pct">{progress}%</span>
        </div>

        {/* Mobile hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label="메뉴 열기/닫기"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="navbar__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      {/* Top progress bar */}
      <div
        className="navbar__top-bar"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="navbar__top-bar-fill" style={{ width: `${progress}%` }} />
      </div>
    </nav>
  );
}

/* ================================================================
   HERO SECTION
   ================================================================ */
function HeroSection() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__badge">공식 출처 기반 정보 안내</div>
        <h1 id="hero-title" className="hero__title">
          스마트스토어·통신판매업
          <br />
          창업 준비 체크
        </h1>
        <p className="hero__subtitle">
          사업자등록부터 통신판매업 신고, 소비자보호 기본사항까지
          <br className="hero__br" />
          공식 출처 중심으로 확인하세요.
        </p>
        <div className="hero__cta-group">
          <a href="#checklist" className="btn btn--primary btn--lg">
            체크리스트 시작하기
          </a>
          <a href="#sources" className="btn btn--outline btn--lg">
            공식 출처 모아보기
          </a>
        </div>
        <aside className="hero__notice" role="note" aria-label="서비스 안내">
          <span className="hero__notice-icon" aria-hidden="true">⚠️</span>
          <p>
            본 서비스는 공식 자료 확인을 돕는 <strong>정보성 안내</strong>입니다.
            법률·세무 자문이 아니며, 실제 신고 전에는 관할 기관의 최신 안내를 반드시
            확인하세요.
          </p>
        </aside>
      </div>
    </section>
  );
}

/* ================================================================
   AD BANNER (Placeholder)
   ================================================================ */
function AdBanner({ position }) {
  return (
    <div
      className={`ad-banner ad-banner--${position}`}
      role="complementary"
      aria-label="광고 영역"
    >
      <div className="container">
        <div className="ad-banner__box">
          <span className="ad-banner__label">광고</span>
          <p className="ad-banner__text">광고 영역 (광고 스크립트 삽입 위치)</p>
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   STEPS SECTION — 5단계 창업 준비 흐름
   ================================================================ */
function StepsSection() {
  const [completedSteps, setCompletedSteps] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("completedSteps");
    if (saved) {
      try {
        setCompletedSteps(JSON.parse(saved));
      } catch {
        /* ignore */
      }
    }
  }, []);

  const toggleStep = (id) => {
    setCompletedSteps((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      localStorage.setItem("completedSteps", JSON.stringify(next));
      return next;
    });
  };

  return (
    <section id="steps" className="section" aria-labelledby="steps-title">
      <div className="container">
        <header className="section__header">
          <h2 id="steps-title" className="section__title">
            5단계 창업 준비 흐름
          </h2>
          <p className="section__desc">
            창업 전 확인해야 할 핵심 단계를 순서대로 살펴보세요.
          </p>
        </header>

        <div className="steps-grid">
          {steps.map((step) => (
            <article
              key={step.id}
              className={`step-card${completedSteps[step.id] ? " step-card--done" : ""}`}
              aria-label={`${step.number}단계: ${step.title}`}
            >
              <div className="step-card__head">
                <div className="step-card__num" aria-hidden="true">
                  {step.number}
                </div>
                <span className="step-card__icon" aria-hidden="true">
                  {step.icon}
                </span>
                <h3 className="step-card__title">{step.title}</h3>
              </div>
              <p className="step-card__desc">{step.description}</p>

              <ul className="step-card__checks" aria-label="확인할 항목">
                {step.checkItems.map((item, i) => (
                  <li key={i} className="step-card__check">
                    <span className="step-card__check-mark" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="step-card__sources">
                {step.officialSources.map((src, i) => (
                  <a
                    key={i}
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--sm btn--ghost-blue"
                  >
                    🔗 {src.label}
                  </a>
                ))}
              </div>

              <p className="step-card__meta">최종 확인일: {step.lastChecked}</p>

              <label className="step-card__checkbox-label">
                <input
                  type="checkbox"
                  className="step-card__checkbox-input"
                  checked={!!completedSteps[step.id]}
                  onChange={() => toggleStep(step.id)}
                  aria-label={`${step.title} 확인 완료`}
                />
                <span className="step-card__checkbox-box" aria-hidden="true" />
                <span className="step-card__checkbox-text">확인 완료</span>
              </label>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   CHECKLIST SECTION
   ================================================================ */
function ChecklistSection({ checkedItems, onToggle, onReset, progress, checkedCount, totalItems }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredData =
    activeCategory === "all"
      ? checklistData
      : checklistData.filter((c) => c.id === activeCategory);

  const handleReset = () => {
    if (window.confirm("모든 체크리스트를 초기화할까요?")) {
      onReset();
    }
  };

  return (
    <section id="checklist" className="section section--alt" aria-labelledby="checklist-title">
      <div className="container">
        <header className="section__header">
          <h2 id="checklist-title" className="section__title">
            창업 전 체크리스트
          </h2>
          <p className="section__desc">
            항목을 하나씩 확인하며 체크하세요. 진행 상태는 자동으로 저장됩니다.
          </p>
        </header>

        {/* Progress */}
        <div
          className="checklist-progress"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`체크리스트 완료율 ${progress}%`}
        >
          <div className="checklist-progress__meta">
            <span className="checklist-progress__label">전체 완료율</span>
            <span className="checklist-progress__value">
              {checkedCount}/{totalItems}
              <strong>&nbsp;({progress}%)</strong>
            </span>
          </div>
          <div className="checklist-progress__track">
            <div
              className="checklist-progress__fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          {progress === 100 && (
            <p className="checklist-progress__done" role="status">
              🎉 모든 항목 확인 완료! 실제 신고 전에 공식 사이트에서 최신 내용을 한 번 더
              확인하세요.
            </p>
          )}
        </div>

        {/* Category tabs */}
        <div className="filter-tabs" role="tablist" aria-label="체크리스트 카테고리">
          <button
            role="tab"
            className={`filter-btn${activeCategory === "all" ? " filter-btn--active" : ""}`}
            onClick={() => setActiveCategory("all")}
            aria-selected={activeCategory === "all"}
          >
            전체
          </button>
          {checklistData.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              className={`filter-btn${activeCategory === cat.id ? " filter-btn--active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
              aria-selected={activeCategory === cat.id}
            >
              {cat.icon} {cat.category}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="checklist-groups">
          {filteredData.map((cat) => {
            const catChecked = cat.items.filter((i) => checkedItems[i.id]).length;
            return (
              <div key={cat.id} className="checklist-group">
                <h3 className="checklist-group__title">
                  <span aria-hidden="true">{cat.icon}</span>
                  {cat.category}
                  <span className="checklist-group__count">
                    {catChecked}/{cat.items.length}
                  </span>
                </h3>
                <ul className="checklist-list" role="list">
                  {cat.items.map((item) => (
                    <li
                      key={item.id}
                      className={`checklist-item${checkedItems[item.id] ? " checklist-item--checked" : ""}`}
                    >
                      <label className="checklist-item__label">
                        <input
                          type="checkbox"
                          className="checklist-item__input"
                          checked={!!checkedItems[item.id]}
                          onChange={() => onToggle(item.id)}
                          aria-label={item.text}
                        />
                        <span className="checklist-item__box" aria-hidden="true">
                          {checkedItems[item.id] && (
                            <svg viewBox="0 0 12 10" aria-hidden="true">
                              <polyline
                                points="1.5,5 4.5,8.5 10.5,1.5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </span>
                        <span className="checklist-item__text">{item.text}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="checklist-footer">
          <button onClick={handleReset} className="btn btn--sm btn--danger-ghost">
            초기화
          </button>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   QUICK GUIDE SECTION — 상황별 빠른 안내
   ================================================================ */
function QuickGuideSection() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (guide) => {
    setSelected((prev) => (prev?.id === guide.id ? null : guide));
  };

  return (
    <section id="quick-guide" className="section" aria-labelledby="quick-guide-title">
      <div className="container">
        <header className="section__header">
          <h2 id="quick-guide-title" className="section__title">
            내 상황별 빠른 안내
          </h2>
          <p className="section__desc">
            현재 상황에 해당하는 항목을 선택하면 맞춤 안내를 확인할 수 있습니다.
          </p>
        </header>

        <div className="quick-btn-grid">
          {quickGuides.map((guide) => (
            <button
              key={guide.id}
              className={`quick-btn${selected?.id === guide.id ? " quick-btn--active" : ""}`}
              onClick={() => handleSelect(guide)}
              aria-expanded={selected?.id === guide.id}
              aria-controls={`qg-detail-${guide.id}`}
            >
              <span className="quick-btn__icon" aria-hidden="true">
                {guide.icon}
              </span>
              <span className="quick-btn__text">{guide.label}</span>
            </button>
          ))}
        </div>

        {selected && (
          <div
            id={`qg-detail-${selected.id}`}
            className="quick-detail"
            role="region"
            aria-label={selected.title}
          >
            <h3 className="quick-detail__title">
              <span aria-hidden="true">{selected.icon}</span> {selected.title}
            </h3>
            <p className="quick-detail__content">{selected.content}</p>

            <ol className="quick-detail__steps" aria-label="단계별 확인 사항">
              {selected.steps.map((step, i) => (
                <li key={i} className="quick-detail__step">
                  <span className="quick-detail__step-num" aria-hidden="true">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>

            {selected.sources.length > 0 && (
              <div className="quick-detail__sources">
                {selected.sources.map((src, i) => (
                  <a
                    key={i}
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--sm btn--ghost-blue"
                  >
                    🔗 {src.label}
                  </a>
                ))}
              </div>
            )}

            <p className="quick-detail__meta">최종 확인일: {selected.lastChecked}</p>

            {selected.caution && (
              <div className="caution-box" role="note">
                <span className="caution-box__icon" aria-hidden="true">⚠️</span>
                <p>{selected.caution}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

/* ================================================================
   SOURCES SECTION — 공식 출처 모음
   ================================================================ */
function SourcesSection() {
  const [activeFilter, setActiveFilter] = useState("전체");

  const filtered =
    activeFilter === "전체" ? sources : sources.filter((s) => s.category === activeFilter);

  return (
    <section id="sources" className="section section--alt" aria-labelledby="sources-title">
      <div className="container">
        <header className="section__header">
          <h2 id="sources-title" className="section__title">
            공식 출처 모음
          </h2>
          <p className="section__desc">
            아래 공식 출처에서 직접 최신 정보를 확인하세요.
          </p>
        </header>

        {/* Category filter */}
        <div className="filter-tabs" role="tablist" aria-label="출처 카테고리 필터">
          {sourceCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              className={`filter-btn${activeFilter === cat ? " filter-btn--active" : ""}`}
              onClick={() => setActiveFilter(cat)}
              aria-selected={activeFilter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Source cards */}
        <div className="sources-grid">
          {filtered.map((source) => (
            <article key={source.id} className="source-card" aria-label={source.title}>
              <div className="source-card__head">
                <span className="source-card__org">{source.organization}</span>
                <span className="source-card__cat">{source.category}</span>
              </div>
              <h3 className="source-card__title">{source.title}</h3>
              <p className="source-card__desc">{source.description}</p>
              {source.caution && (
                <p className="source-card__caution">
                  <span aria-hidden="true">⚠️ </span>
                  {source.caution}
                </p>
              )}
              <div className="source-card__foot">
                <span className="source-card__date">
                  최종 확인일: {source.lastChecked}
                </span>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--sm btn--primary"
                >
                  공식 출처 확인하기 →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   RISKS SECTION — 온라인 판매 전 특히 조심할 것
   ================================================================ */
function RisksSection() {
  return (
    <section id="risks" className="section" aria-labelledby="risks-title">
      <div className="container">
        <header className="section__header">
          <h2 id="risks-title" className="section__title section__title--warn">
            ⚠️ 온라인 판매 전 특히 조심할 것
          </h2>
          <p className="section__desc">
            다음 사항들은 반드시 공식 출처에서 사전에 확인하세요.
          </p>
        </header>

        <ul className="risks-grid" role="list" aria-label="주의 사항 목록">
          {risks.map((risk) => (
            <li
              key={risk.id}
              className={`risk-card risk-card--${risk.level}`}
              aria-label={`${risk.level === "high" ? "높은 위험" : "주의"}: ${risk.text}`}
            >
              <span className="risk-card__icon" aria-hidden="true">
                {risk.level === "high" ? "🔴" : "🟡"}
              </span>
              <p className="risk-card__text">{risk.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ================================================================
   FAQ SECTION
   ================================================================ */
function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="faq" className="section section--alt" aria-labelledby="faq-title">
      <div className="container">
        <header className="section__header">
          <h2 id="faq-title" className="section__title">
            자주 묻는 질문 (FAQ)
          </h2>
          <p className="section__desc">
            창업 준비 중 자주 헷갈리는 내용을 정리했습니다.
          </p>
        </header>

        <div className="faq-list">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className={`faq-item${isOpen ? " faq-item--open" : ""}`}>
                <button
                  className="faq-item__q"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="faq-item__q-badge" aria-hidden="true">
                    Q
                  </span>
                  <span className="faq-item__q-text">{faq.question}</span>
                  <span className="faq-item__arrow" aria-hidden="true">
                    {isOpen ? "▲" : "▼"}
                  </span>
                </button>
                {isOpen && (
                  <div
                    className="faq-item__a"
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                  >
                    <span className="faq-item__a-badge" aria-hidden="true">
                      A
                    </span>
                    <p className="faq-item__a-text">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   FOOTER
   ================================================================ */
function Footer() {
  const footerLinks = [
    { label: "정부24", url: "https://www.gov.kr" },
    { label: "홈택스", url: "https://www.hometax.go.kr" },
    { label: "공정거래위원회", url: "https://www.ftc.go.kr" },
    { label: "소비자24", url: "https://www.consumer.go.kr" },
    { label: "국가법령정보센터", url: "https://www.law.go.kr" },
    { label: "스마트스토어", url: "https://sell.smartstore.naver.com" },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__disclaimer">
          <p>
            본 페이지는 통신판매업 및 스마트스토어 창업 준비를 돕기 위한{" "}
            <strong>정보성 안내</strong>입니다. 법률·세무·행정 자문이 아니며, 실제
            신고·등록·운영 전에는 <strong>정부24, 홈택스, 공정거래위원회, 소비자24,
            국가법령정보센터, 스마트스토어 고객센터</strong> 등 공식 출처의 최신 안내를
            확인하시기 바랍니다.
          </p>
        </div>

        <nav className="footer__links" aria-label="공식 출처 바로가기">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="footer__copy">
          © 2026 스마트스토어·통신판매업 창업 준비 체크 &nbsp;|&nbsp; 본 서비스는 광고
          수익으로 운영될 수 있습니다.
        </p>
      </div>
    </footer>
  );
}

/* ================================================================
   SCROLL TO TOP
   ================================================================ */
function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      className="scroll-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="맨 위로 이동"
    >
      ▲
    </button>
  );
}

/* ================================================================
   ROOT APP
   ================================================================ */
export default function App() {
  const [checkedItems, setCheckedItems] = useState({});

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("checklistState");
    if (saved) {
      try {
        setCheckedItems(JSON.parse(saved));
      } catch {
        /* ignore invalid JSON */
      }
    }
  }, []);

  const handleToggle = useCallback((id) => {
    setCheckedItems((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      localStorage.setItem("checklistState", JSON.stringify(next));
      return next;
    });
  }, []);

  const handleReset = useCallback(() => {
    setCheckedItems({});
    localStorage.removeItem("checklistState");
  }, []);

  const totalItems = checklistData.reduce((acc, cat) => acc + cat.items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

  return (
    <div className="app">
      <a href="#main-content" className="skip-link">
        본문으로 바로가기
      </a>
      <NavBar progress={progress} checkedCount={checkedCount} totalItems={totalItems} />

      <main id="main-content">
        <HeroSection />
        <AdBanner position="top" />
        <StepsSection />
        <ChecklistSection
          checkedItems={checkedItems}
          onToggle={handleToggle}
          onReset={handleReset}
          progress={progress}
          checkedCount={checkedCount}
          totalItems={totalItems}
        />
        <QuickGuideSection />
        <SourcesSection />
        <RisksSection />
        <AdBanner position="mid" />
        <FAQSection />
        <Footer />
      </main>

      <ScrollToTop />
    </div>
  );
}
