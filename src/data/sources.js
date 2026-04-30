/**
 * 공식 출처 데이터
 * ⚠️ 정책 변경 가능 — 정기적으로 공식 사이트에서 URL 및 내용을 확인하세요.
 * 최종 확인일: 2026-04-30
 */

export const sources = [
  {
    id: "hometax",
    title: "사업자등록 신청",
    organization: "국세청 홈택스",
    category: "사업자등록",
    description: "개인사업자등록 신청, 필요서류, 업종코드 확인. 온라인 신청 또는 세무서 방문 신청 안내.",
    url: "https://www.hometax.go.kr", // 정책 변경 가능, 정기 확인 필요
    lastChecked: "2026-04-30",
    caution: "사업자등록 요건 및 필요서류는 변경될 수 있으므로 공식 사이트에서 최신 내용을 확인하세요.",
  },
  {
    id: "sontax",
    title: "모바일 사업자등록 (손택스)",
    organization: "국세청 손택스",
    category: "사업자등록",
    description: "모바일 앱을 통한 사업자등록 신청 및 조회. 스마트폰으로 세금 관련 업무 처리.",
    url: "https://m.hometax.go.kr", // 정책 변경 가능, 정기 확인 필요
    lastChecked: "2026-04-30",
    caution: "모바일 앱 기능 및 UI는 업데이트될 수 있습니다. 최신 버전에서 확인하세요.",
  },
  {
    id: "gov24-mail-order",
    title: "통신판매업 신고·변경·폐업 신고",
    organization: "정부24",
    category: "통신판매업",
    description: "통신판매업 신고, 변경신고, 휴업·폐업·영업재개 신고 민원 안내 및 온라인 신청.",
    url: "https://www.gov.kr", // 정책 변경 가능, 정기 확인 필요
    lastChecked: "2026-04-30",
    caution: "관할 지자체 및 신청자 상황에 따라 필요서류가 달라질 수 있습니다.",
  },
  {
    id: "ftc-main",
    title: "전자상거래 소비자보호 안내",
    organization: "공정거래위원회",
    category: "소비자보호",
    description: "전자상거래 소비자보호 관련 안내, 지침, 고시 확인. 통신판매사업자 조회 포함.",
    url: "https://www.ftc.go.kr", // 정책 변경 가능, 정기 확인 필요
    lastChecked: "2026-04-30",
    caution: "관련 고시 및 규정은 수시로 변경될 수 있습니다. 최신 고시를 확인하세요.",
  },
  {
    id: "ftc-seller-search",
    title: "통신판매사업자 조회",
    organization: "공정거래위원회",
    category: "통신판매업",
    description: "통신판매업 신고 현황 및 사업자 정보 조회. 신고번호 확인 가능.",
    url: "https://www.ftc.go.kr", // 정책 변경 가능, 정기 확인 필요
    lastChecked: "2026-04-30",
    caution: "조회 결과는 신고 기관 데이터 반영 시점에 따라 다를 수 있습니다.",
  },
  {
    id: "consumer24",
    title: "청약철회 및 소비자 피해구제",
    organization: "소비자24",
    category: "소비자보호",
    description: "청약철회 기준, 반품·환불 관련 안내, 소비자 분쟁 사례 확인.",
    url: "https://www.consumer.go.kr", // 정책 변경 가능, 정기 확인 필요
    lastChecked: "2026-04-30",
    caution: "소비자 분쟁 해결 기준은 변경될 수 있으니 최신 내용을 확인하세요.",
  },
  {
    id: "law-ecommerce",
    title: "전자상거래 등에서의 소비자보호에 관한 법률",
    organization: "국가법령정보센터",
    category: "법령",
    description: "전자상거래법 전문, 시행령, 시행규칙 확인. 법령 개정 이력 포함.",
    url: "https://www.law.go.kr", // 정책 변경 가능, 정기 확인 필요
    lastChecked: "2026-04-30",
    caution: "법령 개정 내용을 정기적으로 확인하세요. 시행령·고시 변경 주의.",
  },
  {
    id: "smartstore-seller",
    title: "네이버 스마트스토어 판매자 가입 안내",
    organization: "네이버 스마트스토어",
    category: "스마트스토어",
    description: "판매자 유형별 가입 서류, 통신판매업 신고번호 입력 기준, 구매안전서비스 이용확인증 안내.",
    url: "https://sell.smartstore.naver.com", // 정책 변경 가능, 정기 확인 필요
    lastChecked: "2026-04-30",
    caution: "스마트스토어 정책 및 가입 절차는 수시로 변경될 수 있습니다. 공식 고객센터를 확인하세요.",
  },
  {
    id: "smartstore-help",
    title: "스마트스토어 공식 고객센터",
    organization: "네이버 스마트스토어",
    category: "스마트스토어",
    description: "판매자 가입, 정산, 배송, 통신판매업 관련 공식 고객센터 안내.",
    url: "https://help.sell.smartstore.naver.com", // 정책 변경 가능, 정기 확인 필요
    lastChecked: "2026-04-30",
    caution: "고객센터 URL 및 메뉴 구성은 변경될 수 있습니다.",
  },
];

export const sourceCategories = [
  "전체",
  "사업자등록",
  "통신판매업",
  "소비자보호",
  "스마트스토어",
  "법령",
];
