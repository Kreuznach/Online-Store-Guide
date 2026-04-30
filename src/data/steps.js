/**
 * 5단계 창업 준비 흐름 데이터
 * ⚠️ URL 및 절차는 정책 변경 가능 — 공식 사이트에서 최신 내용을 확인하세요.
 */

const CONTENT_LAST_CHECKED = "2026-04-30";

export const steps = [
  {
    id: "step-1",
    number: 1,
    title: "판매 방식 정리",
    icon: "🎯",
    description:
      "판매 방식을 결정하고, 판매하려는 상품의 제한 여부를 미리 파악하세요.",
    checkItems: [
      "개인 판매인지, 사업자 판매인지 결정",
      "판매 품목이 인허가·제한 품목인지 확인",
      "재고 보유·위탁·해외구매대행 여부 결정",
    ],
    officialSources: [
      {
        label: "공정거래위원회 공식 안내",
        url: "https://www.ftc.go.kr", // 정책 변경 가능, 정기 확인 필요
      },
      {
        label: "스마트스토어 판매자 안내",
        url: "https://sell.smartstore.naver.com", // 정책 변경 가능, 정기 확인 필요
      },
    ],
    lastChecked: CONTENT_LAST_CHECKED,
  },
  {
    id: "step-2",
    number: 2,
    title: "사업자등록 확인",
    icon: "📋",
    description:
      "홈택스·손택스 또는 세무서 방문을 통해 사업자등록 요건을 확인하세요.",
    checkItems: [
      "홈택스·손택스 또는 세무서에서 사업자등록 신청 안내 확인",
      "사업장 주소·임대차 여부·업종·업태 확인",
      "필요서류(임대차계약서 등) 사전 확인",
    ],
    officialSources: [
      {
        label: "홈택스 공식 사이트",
        url: "https://www.hometax.go.kr", // 정책 변경 가능, 정기 확인 필요
      },
    ],
    lastChecked: CONTENT_LAST_CHECKED,
  },
  {
    id: "step-3",
    number: 3,
    title: "스마트스토어 가입/사업자 전환",
    icon: "🏪",
    description:
      "스마트스토어 판매자 유형을 확인하고 가입 절차와 서류를 준비하세요.",
    checkItems: [
      "네이버 스마트스토어 판매자 유형 확인 (개인·간이·개인사업자·법인)",
      "판매자 유형별 제출 서류 확인",
      "사업자 전환 여부 및 절차 확인",
    ],
    officialSources: [
      {
        label: "스마트스토어 공식 고객센터",
        url: "https://sell.smartstore.naver.com", // 정책 변경 가능, 정기 확인 필요
      },
    ],
    lastChecked: CONTENT_LAST_CHECKED,
  },
  {
    id: "step-4",
    number: 4,
    title: "통신판매업 신고 준비",
    icon: "📦",
    description:
      "통신판매업 신고 의무 여부를 공식 출처에서 확인하고, 필요서류를 준비하세요.",
    checkItems: [
      "정부24 또는 관할 시·군·구에서 신고 절차 확인",
      "구매안전서비스 이용확인증 준비",
      "신고번호 입력·관리 기준 확인",
    ],
    officialSources: [
      {
        label: "정부24 통신판매업 신고",
        url: "https://www.gov.kr", // 정책 변경 가능, 정기 확인 필요
      },
      {
        label: "공정거래위원회",
        url: "https://www.ftc.go.kr", // 정책 변경 가능, 정기 확인 필요
      },
    ],
    lastChecked: CONTENT_LAST_CHECKED,
  },
  {
    id: "step-5",
    number: 5,
    title: "운영 전 소비자보호 점검",
    icon: "🛡️",
    description:
      "판매 시작 전 소비자보호 기본 원칙을 점검하고 정책 문구를 준비하세요.",
    checkItems: [
      "교환·반품·환불 안내 및 청약철회 기준 확인",
      "판매자 정보·상품정보·배송비·반품비 표시 방식 점검",
      "허위·과장·기만 광고 금지 원칙 확인",
      "주문·배송·CS 대응 기준 정리",
    ],
    officialSources: [
      {
        label: "소비자24",
        url: "https://www.consumer.go.kr", // 정책 변경 가능, 정기 확인 필요
      },
      {
        label: "국가법령정보센터",
        url: "https://www.law.go.kr", // 정책 변경 가능, 정기 확인 필요
      },
    ],
    lastChecked: CONTENT_LAST_CHECKED,
  },
];
