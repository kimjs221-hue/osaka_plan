// State Management
let state = {
    currentSection: 'dashboard',
    tripDates: { start: '2025-12-31', end: '2026-01-04' },
    filters: {
        restaurants: { sub: 'all', area: 'all' },
        desserts: { sub: 'all', area: 'all' },
        shopping: { sub: 'all', area: 'all' },
        activities: { sub: 'all', area: 'all' },
        bars: { sub: 'all', area: 'all' }
    },
    restaurants: [
        // --- Sushi & Kaisendon ---
        { id: 101, name: '하루코마 스시', sub: 'sushi', area: 'tenma', time: '전철 20분', price: '2,000엔~', rating: 4.3, res: false, desc: '텐마 시장 내 줄 서서 먹는 가성비 No.1 스시' },
        { id: 102, name: '마루요시 스시', sub: 'sushi', area: 'namba', time: '도보 12분', price: '3,000엔~', rating: 4.5, res: true, desc: '난바 위치, 셰프의 장인정신이 느껴지는 작은 명점' },
        { id: 103, name: '대기수산 회전초밥', sub: 'sushi', area: 'namba', time: '도보 5분', price: '1,500엔~', rating: 4.1, res: false, desc: '도톤보리 강변, 회전초밥 중 가장 신선한 퀄리티' },
        { id: 104, name: '스시 호시야마', sub: 'sushi', area: 'umeda', time: '전철 15분', price: '15,000엔~', rating: 4.6, res: true, desc: '미슐랭 1스타, 우메다 지역 하이엔드 오마카세' },
        { id: 105, name: '원조 부치 초밥 어신', sub: 'sushi', area: 'shinsaibashi', time: '도보 8분', price: '2,000엔~', rating: 4.2, res: false, desc: '신사이바시 노포, 압도적인 크기의 네타가 특징' },
        { id: 107, name: '우오이치 쇼쿠도', sub: 'sushi', area: 'namba', time: '도보 15분', price: '2,500엔~', rating: 4.4, res: false, desc: '새벽 6시 오픈! 우니와 관자가 넘쳐흐르는 인생 카이센동' },
        { id: 108, name: '슈젠야유이', sub: 'sushi', area: 'shinsaibashi', time: '도보 10분', price: '1,800엔~', rating: 4.3, res: false, desc: '나가호리바시 핫플, "넘치는 카이센동"으로 SNS에서 화제' },
        { id: 109, name: '와카사야 난바점', sub: 'sushi', area: 'namba', time: '도보 7분', price: '1,500엔~', rating: 3.9, res: false, desc: '내 마음대로 토핑을 고르는 커스텀 카이센동 전문점' },
        { id: 601, name: '스시마사 본점', sub: 'sushi', area: 'tenma', time: '전철 20분', price: '1,500엔~', rating: 4.2, res: false, desc: '하루코마와 쌍벽을 이루는 텐마의 가성비 스시 명점' },
        { id: 191, name: '우오야 히데조 타치노미', sub: 'sushi', area: 'namba', time: '도보 10분', price: '2,000엔~', rating: 4.4, res: false, desc: '우라난바의 서서 먹는 스시, 신선하고 저렴함' },

        // --- Tonkatsu & Kyukatsu ---
        { id: 151, name: '규카츠 모토무라 난바', sub: 'katsu', area: 'namba', time: '도보 6분', price: '1,400엔~', rating: 4.7, res: false, desc: '화로에 살짝 구워 먹는 규카츠의 정석, 웨이팅 필수' },
        { id: 152, name: '규카츠 토미타', sub: 'katsu', area: 'namba', time: '도보 8분', price: '1,300엔~', rating: 4.5, res: false, desc: '현지인이 더 많이 찾는 숨은 규카츠 맛집' },
        { id: 153, name: '뉴베이브 토요사키', sub: 'katsu', area: 'umeda', time: '전철 18분', price: '2,000엔~', rating: 4.6, res: false, desc: '육즙이 폭발하는 핑크빛 히레카츠, 인생 돈카츠' },
        { id: 154, name: 'KYK 돈카츠 우메다', sub: 'katsu', area: 'umeda', time: '전철 15분', price: '1,500엔~', rating: 4.2, res: false, desc: '난바/우메다 곳곳에 있는 믿고 먹는 오사카 노포 돈카츠' },
        { id: 155, name: 'Epais (에페)', sub: 'katsu', area: 'umeda', time: '전철 16분', price: '1,800엔~', rating: 4.5, res: true, desc: '미슐랭 빕구르망, 소금에 찍어 먹는 프리미엄 돈카츠' },

        // --- Udon & Soba ---
        { id: 161, name: '도톤보리 이마이', sub: 'udon', area: 'namba', time: '도보 4분', price: '800엔~', rating: 4.3, res: false, desc: '오사카 우동의 상징, 담백한 육수와 유부가 일품' },
        { id: 162, name: '카마타케 우동', sub: 'udon', area: 'namba', time: '도보 8분', price: '900엔~', rating: 4.4, res: false, desc: '국물 없는 붓카케 우동의 성지, 쫄깃한 면발' },
        { id: 163, name: '츠루톤탄 소에몬초점', sub: 'udon', area: 'namba', time: '도보 6분', price: '1,200엔~', rating: 4.1, res: false, desc: '세숫대야 우동, 명란 크림 우동 등 퓨전 메뉴가 인기' },
        { id: 164, name: '우동야 키스케', sub: 'udon', area: 'umeda', time: '전철 16분', price: '1,000엔~', rating: 4.5, res: false, desc: '미슐랭 빕구르망, 텐푸라와 냉우동의 조화가 환상적' },
        { id: 165, name: '하가쿠레 우동', sub: 'udon', area: 'umeda', time: '전철 15분', price: '900엔~', rating: 4.4, res: false, desc: '간장에 비벼 먹는 생장유 우동의 원조, 셰프님이 직접 비벼줌' },

        // --- Ramen ---
        { id: 111, name: '이치란 라멘 도톤보리', sub: 'ramen', area: 'namba', time: '도보 6분', price: '1,100엔', rating: 4.3, res: false, desc: '말이 필요 없는 오사카 1순위 돈코츠 라멘' },
        { id: 112, name: '카무쿠라 라멘', sub: 'ramen', area: 'namba', time: '도보 8분', price: '900엔', rating: 4.1, res: false, desc: '배추의 단맛이 우러난 깊고 깔끔한 채수 라멘' },
        { id: 113, name: '라멘 인생 JET', sub: 'ramen', area: 'umeda', time: '전철 18분', price: '1,000엔', rating: 4.4, res: false, desc: '후쿠시마 격전지 1위, 진한 토리파이탄(닭백탕)의 정석' },
        { id: 114, name: '무기토 멘스케', sub: 'ramen', area: 'umeda', time: '전철 15분', price: '1,200엔', rating: 4.5, res: false, desc: '미슐랭 등재, 중화소바의 극치를 보여주는 우메다 명소' },
        { id: 115, name: '나니와 멘지로', sub: 'ramen', area: 'namba', time: '도보 10분', price: '1,100엔', rating: 4.2, res: false, desc: '난바역 위치, 황금 조개 육수로 깔끔한 뒷맛이 일품' },
        { id: 145, name: '인생 JET 우메다역점', sub: 'ramen', area: 'umeda', time: '전철 15분', price: '1,000엔~', rating: 4.4, res: false, desc: '깊고 진한 닭 육수 육수의 감칠맛이 폭발하는 라멘' },

        // --- Yakiniku ---
        { id: 121, name: '야키니쿠 만노', sub: 'yakiniku', area: 'tenma', time: '전철 20분', price: '5,000엔~', rating: 4.4, res: true, desc: '정육점 직영, 최고급 와규를 합리적으로 즐기는 곳' },
        { id: 122, name: '호르몬 사카가미', sub: 'yakiniku', area: 'namba', time: '도보 12분', price: '3,500엔~', rating: 4.2, res: false, desc: '난바 뒷골목 감성, 생맥주와 내장 구이의 환상 조합' },
        { id: 123, name: '마쓰사카규 M', sub: 'yakiniku', area: 'namba', time: '도보 5분', price: '8,000엔~', rating: 4.6, res: true, desc: '일본 3대 와규 마쓰사카규 전문점, 개별실 완비' },
        { id: 125, name: '야키니쿠 고리짱 우메다', sub: 'yakiniku', area: 'umeda', time: '전철 15분', price: '3,000엔~', rating: 4.9, res: true, desc: '구글 평점 4.9! 신선한 우설과 가성비 와규의 끝판왕' },
        { id: 126, name: '만료 (Manryo)', sub: 'yakiniku', area: 'tenma', time: '전철 18분', price: '4,000엔~', rating: 4.5, res: true, desc: '오사카 현지인들이 가장 사랑하는 야키니쿠 1위' },
        { id: 127, name: '스미비 야키니쿠 다이칸', sub: 'yakiniku', area: 'namba', time: '도보 8분', price: '4,500엔~', rating: 4.4, res: false, desc: '숯불 향이 가득한 와규 무제한 코스로 배불리 즐기기' },
        { id: 128, name: '하나덴 우메다', sub: 'yakiniku', area: 'umeda', time: '전철 15분', price: '6,000엔~', rating: 4.3, res: true, desc: '시가현 직송 오미규 명품 소고기와 고급스러운 개인실' },
        { id: 129, name: '잇신 신사이바시', sub: 'yakiniku', area: 'shinsaibashi', time: '도보 5분', price: '5,000엔~', rating: 4.5, res: true, desc: '최상급 와규와 호르몬을 개인실에서 즐기는 럭셔리 구이' },
        { id: 602, name: '야키니쿠 우시다', sub: 'yakiniku', area: 'tenma', time: '전철 20분', price: '3,000엔~', rating: 4.5, res: false, desc: '정육점 직영, 흑우를 가장 저렴하게 즐길 수 있는 로컬 맛집' },
        { id: 605, name: '덴게키 호르몬 쓰기', sub: 'yakiniku', area: 'tenma', time: '전철 20분', price: '2,500엔~', rating: 4.4, res: false, desc: '서서 먹는 감성! 신선한 내장 구이 전수자들의 성지' },

        // --- Izakaya & Others ---
        { id: 131, name: '미즈노 오코노미야키', sub: 'okonomiyaki', area: 'namba', time: '도보 6분', price: '1,800엔~', rating: 4.3, res: false, desc: '미슐랭 빕구르망, 마 가루로 만든 부드러운 오코노미야키' },
        { id: 133, name: '후쿠타로 본점', sub: 'okonomiyaki', area: 'namba', time: '도보 8분', price: '1,300엔~', rating: 4.4, res: false, desc: '난바 현지인들이 줄 서는 곳, 네기야키(파구이) 추천' },
        { id: 134, name: '치구사 오코노미야키', sub: 'okonomiyaki', area: 'tenma', time: '전철 20분', price: '1,200엔~', rating: 4.5, res: false, desc: '텐마 지역 노포, 마요네즈 아트가 즐거운 곳' },
        { id: 141, name: '북극성 (Hokkyokusei)', sub: 'others', area: 'namba', time: '도보 10분', price: '1,200엔~', rating: 4.2, res: false, desc: '오사카 오므라이스의 원조, 예스러운 일본 가옥 분위기' },
        { id: 142, name: '쿠시카츠 다루마', sub: 'others', area: 'namba', time: '도보 5분', price: '2,000엔~', rating: 4.1, res: false, desc: '오사카 명물 꼬치 튀김, 소스는 꼭 한 번만!' },
        { id: 144, name: '메이지켄 (Meijiken)', sub: 'others', area: 'shinsaibashi', time: '도보 4분', price: '1,300엔~', rating: 4.2, res: false, desc: '1925년 창업, 오사카 오므라이스와 쿠시카츠의 정석' },
        { id: 143, name: '텐동 마키노', sub: 'others', area: 'umeda', time: '전철 15분', price: '1,500엔~', rating: 4.4, res: false, desc: '눈앞에서 튀겨주는 바삭한 텐동, 우메다 직장인들의 맛집' },
        { id: 604, name: '시치후쿠진 쿠시카츠', sub: 'others', area: 'tenma', time: '전철 20분', price: '1,500엔~', rating: 4.3, res: false, desc: '텐진바시스지 상점가 최고의 꼬치 튀김 전문점' },

        // --- New Local Izakayas ---
        { id: 171, name: '나루토야 (Narutoya)', sub: 'izakaya', area: 'namba', time: '도보 9분', price: '3,500엔~', rating: 4.5, res: true, desc: '우라난바 핫플, 야채말이 꼬치와 과일 츄하이가 유명' },
        { id: 172, name: '토리진 본점', sub: 'izakaya', area: 'namba', time: '도보 10분', price: '3,000엔~', rating: 4.4, res: false, desc: '신선한 닭 사시미와 숯불 야키토리를 즐길 수 있는 곳' },
        { id: 173, name: '대중술집 텐진대홀', sub: 'izakaya', area: 'umeda', time: '전철 15분', price: '2,000엔~', rating: 4.2, res: false, desc: '우메다 직장인들의 성지, 가성비 최고의 대중 주점' },
        { id: 174, name: '니혼슈 우나기 다니', sub: 'izakaya', area: 'shinsaibashi', time: '도보 7분', price: '4,000엔~', rating: 4.3, res: true, desc: '100종류 사케와 장어 요리의 완벽한 페어링' },
        { id: 175, name: '이자카야 짐베 (Jinbei)', sub: 'izakaya', area: 'namba', time: '도보 11분', price: '2,500엔~', rating: 4.3, res: false, desc: '우라난바 숨은 맛집, 진한 육수의 오뎅과 소바가 일품' },
        { id: 176, name: '돈소쿠노 카도야', sub: 'izakaya', area: 'namba', time: '도보 10분', price: '2,000엔~', rating: 4.1, res: false, desc: '현지 아저씨들의 성지, 족발과 술이 무한정 들어가는 곳' },
        { id: 177, name: '야키톤 부타몬', sub: 'izakaya', area: 'tenma', time: '전철 20분', price: '2,500엔~', rating: 4.4, res: false, desc: '텐마의 돼지꼬치 전문점, 냄새 없는 레바테키(간) 강추' }
    ],
    desserts: [
        { id: 501, name: 'COLONY by EQI', sub: 'cafe', area: 'shinsaibashi', time: '도보 5분', price: '1,500엔~', rating: 4.6, res: false, desc: '아메무라의 전설적인 수플레 팬케이크 맛집' },
        { id: 502, name: '파르페테리아 팔', sub: 'parfait', area: 'shinsaibashi', time: '도보 7분', price: '2,000엔~', rating: 4.2, res: false, desc: '밤에만 여는 어른들을 위한 럭셔리 파르페 전문점' },
        { id: 503, name: '우지엔 킷사', sub: 'traditional', area: 'shinsaibashi', time: '도보 3분', price: '1,200엔~', rating: 4.4, res: false, desc: '신사이바시 상점가 내 정통 일본식 말차 디저트 카페' },
        { id: 504, name: 'PABLO 본점', sub: 'bakery', area: 'shinsaibashi', time: '도보 5분', price: '1,000엔~', rating: 4.1, res: false, desc: '갓 구운 흘러내리는 레어 치즈 타르트의 성지' },
        { id: 505, name: '크레프리 알시온', sub: 'cafe', area: 'namba', time: '도보 10분', price: '1,600엔~', rating: 4.5, res: false, desc: '난바 노포 크레이프 전문점, 타베로그 3.7점의 위엄' },
        { id: 506, name: '리쿠로 오지상 치즈케이크', sub: 'bakery', area: 'namba', time: '도보 8분', price: '965엔~', rating: 4.6, res: false, desc: '오사카 명물! 탱글탱글한 인생 치즈케이크 갓 구운 맛' },
        { id: 507, name: '카페 안논', sub: 'cafe', area: 'namba', time: '도보 9분', price: '1,400엔~', rating: 4.3, res: false, desc: '폭신폭신 팬케이크와 조용한 분위기, 난바의 숨은 보석' },
        { id: 508, name: '허브스(HARBS) 다이마루', sub: 'bakery', area: 'umeda', time: '전철 15분', price: '1,000엔~', rating: 4.4, res: false, desc: '밀크 크레이프의 전설, 과일이 듬뿍 들어간 대형 케이크' },
        { id: 509, name: '카페 라 포즈', sub: 'cafe', area: 'umeda', time: '전철 16분', price: '1,500엔~', rating: 4.3, res: false, desc: '루쿠아 내 위치한 프렌치 수플레 팬케이크 명소' },
        { id: 510, name: 'HANNOC', sub: 'cafe', area: 'umeda', time: '전철 18분', price: '1,800엔~', rating: 4.5, res: false, desc: '파티시에들의 예술적인 디저트를 맛볼 수 있는 트렌디 카페' },
        { id: 603, name: 'R J CAFE', sub: 'cafe', area: 'tenma', time: '전철 22분', price: '1,200엔~', rating: 4.1, res: false, desc: '먹을 수 있는 쿠키 컵 에스프레소(에코프레소)로 유명한 곳' },
        { id: 511, name: '까눌레 뒤 자퐁', sub: 'bakery', area: 'namba', time: '도보 12분', price: '1,000엔~', rating: 4.4, res: false, desc: '전통과 퓨전이 만난 오사카 까눌레 전문점' },
        { id: 512, name: '모토무라 푸딩', sub: 'parfait', area: 'namba', time: '도보 5분', price: '500엔~', rating: 4.3, res: false, desc: '입안에서 녹아내리는 부드러운 수제 푸딩' },
        { id: 513, name: '피스 오브 베이크', sub: 'bakery', area: 'umeda', time: '전철 15분', price: '400엔~', rating: 4.2, res: false, desc: '한큐 산반가이의 줄 서는 생도넛 맛집' },
        { id: 514, name: '야스이치로 두유 카페', sub: 'cafe', area: 'umeda', time: '전철 16분', price: '800엔~', rating: 4.3, res: false, desc: '신선한 두유로 만든 건강하고 고소한 디저트' }
    ],
    shopping: [
        // --- Shinsaibashi ---
        { id: 202, name: '다이마루 신사이바시', sub: 'dept', area: 'shinsaibashi', time: '도보 3분', rating: 4.3, desc: '럭셔리 명품과 포켓몬 센터/닌텐도 오사카가 공존' },
        { id: 213, name: '아메리카무라', sub: 'street', area: 'shinsaibashi', time: '도보 5분', rating: 4.0, desc: '오사카의 젊은 에너지가 넘치는 빈티지 패션 거리' },
        { id: 221, name: 'Kindal 신사이바시', sub: 'vintage', area: 'shinsaibashi', time: '도보 5분', rating: 4.4, desc: '하이엔드 명품 브랜드의 중고 제품을 취급하는 전문샵' },
        { id: 225, name: 'JAM 아메리카무라점', sub: 'vintage', area: 'shinsaibashi', time: '도보 6분', rating: 4.5, desc: '압도적인 물량을 자랑하는 일본 최대 규모 빈티지 창고' },
        { id: 223, name: '2nd Street 신사이바시', sub: 'vintage', area: 'shinsaibashi', time: '도보 4분', rating: 4.1, desc: '가장 대중적이고 깔끔한 중고 의류 체인 메가 스토어' },
        { id: 214, name: 'BEAMS 신사이바시', sub: 'street', area: 'shinsaibashi', time: '도보 5분', rating: 4.2, desc: '일본 대표 편집샵, 트렌디한 아이템과 세련된 셀렉션' },
        { id: 232, name: '디즈니 스토어 신사이바시', sub: 'hobby', area: 'shinsaibashi', time: '도보 3분', rating: 4.4, desc: '귀여운 디즈니 굿즈가 가득한 대형 공식 스토어' },
        { id: 235, name: 'ONSPOTZ 신사이바시', sub: 'street', area: 'shinsaibashi', time: '도보 5분', rating: 4.4, desc: '일본 한정판 뉴에라 모자가 가득한 모자 매니아의 성지' },
        { id: 217, name: '유나이티드 애로우즈', sub: 'street', area: 'shinsaibashi', time: '도보 4분', rating: 4.3, desc: '일본 하이엔드 편집샵의 자존심, 세련된 성인 패션의 정석' },

        // --- Namba / Dotonbori ---
        { id: 203, name: '난바 파크스', sub: 'dept', area: 'namba', time: '도보 15분', rating: 4.2, desc: '옥상 정원이 아름다운 복합 쇼핑몰, 트렌디한 브랜드 다수' },
        { id: 211, name: '오렌지 스트릿 (호리에)', sub: 'street', area: 'namba', time: '도보 12분', rating: 4.5, desc: '슈프림, 스투시 등 스트릿 브랜드와 가구/카페 거리' },
        { id: 212, name: '슈프림 오사카', sub: 'street', area: 'namba', time: '도보 12분', rating: 3.9, desc: '오렌지 스트릿의 중심, 스트릿 패션 매니아들의 필수 방문' },
        { id: 215, name: 'BIOTOP 오사카', sub: 'street', area: 'namba', time: '도보 13분', rating: 4.4, desc: '감각적인 셀렉트 샵이자 가드닝 카페, 패션 피플들의 성지' },
        { id: 205, name: '돈키호테 도톤보리', sub: 'dept', area: 'namba', time: '도보 5분', rating: 4.1, desc: '24시간 기념품 쇼핑의 성지, 관람차도 탈 수 있음' },
        { id: 218, name: '베이프(BAPE) 오사카', sub: 'street', area: 'namba', time: '도보 14분', rating: 4.0, desc: '호리에 입구 위치, 유니크한 카무플라주 패턴의 스트릿 명가' },
        { id: 219, name: '칼하트 WIP 오사카', sub: 'street', area: 'namba', time: '도보 13분', rating: 4.2, desc: '오렌지 스트릿의 워크웨어 감성, 세련된 스타일링 추천' },
        { id: 220, name: '스투시(STUSSY) 미나미', sub: 'street', area: 'namba', time: '도보 12분', rating: 4.1, desc: '월드 투어 티셔츠와 오사카 한정판 굿즈를 만날 수 있는 곳' },

        // --- Umeda ---
        { id: 201, name: '한큐 백화점 우메다', sub: 'dept', area: 'umeda', time: '전철 15분', rating: 4.4, desc: '일본 최대 규모 백화점, 손수건 쇼핑 및 식품관 필수' },
        { id: 204, name: '루쿠아 1100', sub: 'dept', area: 'umeda', time: '전철 15분', rating: 4.3, desc: '우메다 역 직결, 2030 여성들에게 가장 인기 있는 쇼핑몰' },
        { id: 226, name: 'Second Street 우메다', sub: 'vintage', area: 'umeda', time: '전철 16분', rating: 4.2, desc: '우메다 지역 최대 규모 중고 브랜드 샵' },
        { id: 227, name: 'Loftman Coop 우메다', sub: 'street', area: 'umeda', time: '전철 17분', rating: 4.5, desc: '아웃도어와 아메리칸 헤리티지가 결합된 우메다 최고의 편집샵' },
        { id: 228, name: 'Bow & Arrow', sub: 'vintage', area: 'umeda', time: '전철 18분', rating: 4.6, desc: '진정한 매니아를 위한 고가의 아메리칸 빈티지 전문점' },
        { id: 229, name: 'HEP FIVE', sub: 'dept', area: 'umeda', time: '전철 15분', rating: 4.3, desc: '레드 컬러 관람차가 달린 우메다 랜드마크 쇼핑몰' },
        { id: 236, name: '라그타그(RAGTAG)', sub: 'vintage', area: 'umeda', time: '전철 15분', rating: 4.4, desc: '디자이너 브랜드 중고 의류를 엄선해서 판매하는 감각적인 곳' }
    ],
    bars: [
        // --- Shinsaibashi / Namba (Clubs & Hunting) ---
        { id: 301, name: 'BAMBI (밤비)', sub: 'club', area: 'shinsaibashi', time: '도보 5분', price: '3,000엔~', rating: 4.2, hunting: true, desc: '신사이바시 No.1 클럽, "몬스터 클럽"이라 불리는 최고의 핫플' },
        { id: 302, name: 'The Pink', sub: 'club', area: 'shinsaibashi', time: '도보 7분', price: '2,500엔~', rating: 4.3, hunting: true, desc: '온통 핑크빛! 힙합 매니아들과 인싸들이 모이는 SNS 성지' },
        { id: 303, name: 'GALA RESORT', sub: 'club', area: 'namba', time: '도보 8분', price: '3,000엔~', rating: 4.1, hunting: true, desc: '4개 층마다 다른 장르, 음악 테마파크 같은 초대형 클럽' },
        { id: 304, name: 'GIRAFFE JAPAN (2025 NEW)', sub: 'club', area: 'namba', time: '도보 5분', price: '3,000엔~', rating: 4.0, hunting: true, desc: '전설의 귀환! 도톤보리 강변을 호령하는 거대 클럽의 부활' },
        { id: 305, name: 'Ammona (암모나)', sub: 'club', area: 'shinsaibashi', time: '도보 8분', price: '3,000엔~', rating: 4.2, hunting: true, desc: '럭셔리한 분위기, K-POP과 글로벌 믹스로 외국인에게 인기' },
        { id: 311, name: 'Oriental Lounge 신사이바시', sub: 'hunting', area: 'shinsaibashi', time: '도보 5분', price: '남성 유료 / 여성 무료', rating: 4.5, hunting: true, desc: '럭셔리한 라운지에서 자연스러운 합석 주선(부킹)' },
        { id: 312, name: 'JIS Namba', sub: 'hunting', area: 'namba', time: '도보 10분', price: '남성 시간당 요금', rating: 4.4, hunting: true, desc: '난바 최고의 매칭률, 세련된 대화 위주의 헌팅 공간' },
        { id: 332, name: 'Bee 난바', sub: 'izakaya', area: 'namba', time: '도보 10분', price: '2,000엔~', rating: 4.1, hunting: true, desc: '다트와 술을 함께 즐기는 소셜 펍, 현지 헌팅 포인트' },

        // --- Umeda (Adult Clubs) ---
        { id: 306, name: 'OWL OSAKA', sub: 'club', area: 'umeda', time: '전철 15분', price: '3,000엔~', rating: 4.4, hunting: true, desc: '우메다 성인들의 놀이터, 깔끔하고 쾌적한 서일본 최대급 클럽' },
        { id: 307, name: 'PICCADILLY PREMIUM', sub: 'club', area: 'umeda', time: '전철 15분', price: '3,500엔~', rating: 4.5, hunting: false, desc: '영화관을 개조한 압도적 스케일, 세계적 수준의 DJ 공연' },

        // --- Hidden Gems & Local Bars (Non-Hunting) ---
        { id: 324, name: '바 아카시 레코드', sub: 'izakaya', area: 'shinsaibashi', time: '도보 6분', price: '칵테일 800엔~', rating: 4.6, hunting: false, desc: 'LP 음악이 흐르는 감성 바, 혼술하기도 좋은 차분한 공간' },
        { id: 328, name: 'BAR Nayuta', sub: 'izakaya', area: 'shinsaibashi', time: '도보 5분', price: '1,500엔~', rating: 4.8, hunting: false, desc: '간판 없는 비밀의 문, 취향대로 즉석 제조해주는 믹솔로지 바' },
        { id: 341, name: 'R-623', sub: 'izakaya', area: 'unknown', time: '확인 필요', price: '2,000엔~', rating: 4.9, hunting: false, desc: '비밀번호를 눌러야 열리는 완벽한 은신처, 특별한 밤을 위한 곳' },
        { id: 342, name: '바 레드 캐년', sub: 'izakaya', area: 'umeda', time: '전철 15분', price: '4,000엔~', rating: 4.7, hunting: false, desc: '후쿠시마 고택을 개조한 드라이플라워 바, 붉은 시소 칵테일' },
        { id: 343, name: 'KAFFE BAR NELLIE', sub: 'izakaya', area: 'umeda', time: '전철 16분', price: '1,500엔~', rating: 4.5, hunting: false, desc: '카페 같은 편안함, 엄선된 BGM과 함께 즐기는 늦은 밤의 여유' },
        { id: 344, name: '사케 바 와슈', sub: 'izakaya', area: 'umeda', time: '전철 17분', price: '2,500엔~', rating: 4.3, hunting: false, desc: '츠카모토의 숨은 보석, 고급진 분위기에서 즐기는 가성비 사케' },
        { id: 361, name: 'The Northern Bar', sub: 'izakaya', area: 'umeda', time: '전철 17분', price: '3,500엔~', rating: 4.6, hunting: false, desc: '세계 각국의 맥주와 위스키를 즐길 수 있는 클래식 바' },
        { id: 362, name: '이코이 (Ikoi)', sub: 'izakaya', area: 'shinsaibashi', time: '도보 6분', price: '2,000엔~', rating: 4.3, hunting: false, desc: '조용하고 아늑한 분위기의 로컬 선술집' },

        // --- Ura Namba & Tenma Local Spots ---
        { id: 321, name: '기후야 (Gifuya)', sub: 'izakaya', area: 'tenma', time: '전철 20분', price: '잔술 100엔~', rating: 4.1, hunting: false, desc: '텐마의 전설, 낮술의 성지. 믿을 수 없는 가격의 레트로 술집' },
        { id: 333, name: '츄토로와 톤소쿠', sub: 'izakaya', area: 'tenma', time: '전철 20분', price: '1,000엔~', rating: 4.2, hunting: false, desc: '사케 한 잔에 300엔? 주당들이 사랑하는 텐마 가성비 끝판왕' },
        { id: 334, name: '핫센 (八銭)', sub: 'izakaya', area: 'tenma', time: '전철 21분', price: '500엔~', rating: 4.0, hunting: false, desc: '연중무휴 24시간! 생맥주가 정말 싼 텐마의 대중 주점' },
        { id: 351, name: '우오야 히데조 입식', sub: 'izakaya', area: 'namba', time: '도보 10분', price: '2,000엔~', rating: 4.5, hunting: false, desc: '우라난바No.1 힙한 타치노미, 퀄리티 높은 안주와 활기찬 분위기' },
        { id: 352, name: '스탠드 산고쿠', sub: 'izakaya', area: 'namba', time: '도보 11분', price: '1,500엔~', rating: 4.2, hunting: false, desc: '퇴근길 현지인들 틈에 섞여 즐기는 제철 해산물과 사케' },
        { id: 353, name: '우시도라', sub: 'izakaya', area: 'namba', time: '도보 10분', price: '1,500엔~', rating: 4.5, hunting: false, desc: '좁은 골목 속 현지인들의 퇴근길 스탠딩 바(타치노미)' },
        { id: 322, name: '우오신 이자카야', sub: 'izakaya', area: 'namba', time: '도보 12분', price: '생맥주 500엔~', rating: 4.2, hunting: false, desc: '신선한 해산물을 안주로 즐기는 우라난바의 핫플레이스' },
        { id: 329, name: 'Namba Yakitori Porc', sub: 'izakaya', area: 'namba', time: '도보 11분', price: '3,000엔~', rating: 4.3, hunting: false, desc: '우라난바의 핫한 야키토리, 현지 맥주와 궁합이 최고' },
        { id: 330, name: '토리진 본점', sub: 'izakaya', area: 'namba', time: '도보 12분', price: '3,500엔~', rating: 4.4, hunting: false, desc: '닭 사시미와 정통 야키토리를 즐길 수 있는 로컬 명소' },
        { id: 331, name: '나루토야', sub: 'izakaya', area: 'namba', time: '도보 10분', price: '4,000엔~', rating: 4.5, hunting: false, desc: '예약 필수! 야채말이 꼬치구이가 예술인 우라난바 맛집' }
    ],
    activities: [
        // --- Shinsaibashi / Namba ---
        { id: 431, name: '오사카 고카트 체험', sub: 'others', area: 'namba', time: '도보 10분', price: '7,000엔~', rating: 4.9, desc: '도로 위를 달리는 슈퍼카트, 오사카 거리를 누비는 쾌감' },
        { id: 432, name: '도톤보리 리버 크루즈', sub: 'others', area: 'namba', time: '도보 5분', price: '1,200엔~', rating: 4.3, desc: '강 위에서 즐기는 오사카의 화려한 네온사인과 글리코상' },
        { id: 437, name: '닌자 체험 카페', sub: 'others', area: 'namba', time: '도보 10분', price: '3,000엔~', rating: 4.7, desc: '닌자 복을 입고 수리검 던지기 체험! SNS 인증샷 명소' },
        { id: 411, name: '스파월드 세계의 대온천', sub: 'onsen', area: 'namba', time: '전철 12분', price: '1,500엔~', rating: 4.2, desc: '전 세계 테마 온천이 모인 거대 휴양소, 슬라이드 완비' },
        { id: 441, name: '라운드원 센니치마에', sub: 'sports', area: 'namba', time: '도보 8분', price: '2,000엔~', rating: 4.1, desc: '볼링, 배팅, 다트 등 스포츠와 게임을 한번에 즐기는 곳' },

        // --- Umeda ---
        { id: 404, name: '우메다 스카이빌딩', sub: 'theme', area: 'umeda', time: '전철 18분', price: '1,500엔~', rating: 4.5, desc: '공중정원에서 바라보는 오사카 최고의 야경 명소' },
        { id: 421, name: '골드짐 오사카 우메다', sub: 'sports', area: 'umeda', time: '전철 15분', price: '1일권 2,860엔', rating: 4.5, desc: '헬스 매니아 성지, 오사카 최고의 운동 시설' },
        { id: 422, name: '우메다 배팅 돔', sub: 'sports', area: 'umeda', time: '전철 16분', price: '400엔~', rating: 4.3, desc: '스트레스 해소에 최고! 남녀노소 즐기는 야구 배팅 센터' },

        // --- Osaka Bay / Others ---
        { id: 401, name: '유니버설 스튜디오 재팬', sub: 'theme', area: 'osakabay', time: '전철 30분', price: '8,000엔~', rating: 4.8, desc: '설명이 필요 없는 오사카 최고의 테마파크, 마리오 월드 필수' },
        { id: 402, name: '오사카 성', sub: 'theme', area: 'osakabay', time: '전철 20분', price: '600엔~', rating: 4.4, desc: '오사카의 랜드마크, 밤에는 일루미네이션이 아름다움' },
        { id: 403, name: '가이유칸 수족관', sub: 'theme', area: 'osakabay', time: '전철 35분', price: '2,700엔~', rating: 4.6, desc: '세계 최대 규모의 수족관, 거대 고래상어를 볼 수 있음' },
        { id: 412, name: '소라니와 온천', sub: 'onsen', area: 'osakabay', time: '전철 25분', price: '2,500엔~', rating: 4.3, desc: '유카타 입고 일본 정원을 걷는 체험형 온천' },
        { id: 436, name: '헬기 야경 투어', sub: 'others', area: 'osakabay', time: '전철 40분', price: '15,000엔~', rating: 4.9, desc: '오사카 시내를 상공에서 내려다보는 럭셔리 익스피리언스' }
    ]
};

// Functions remain the same...
function getRatingHtml(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '⭐'.repeat(fullStars);
    if (hasHalfStar) stars += '✨';
    return `<span class="rating-badge">${stars} ${rating}</span>`;
}

function init() {
    loadFromLocalStorage();
    setupNavigation();
    setupEventListeners();
    updateDashboardUI();
    renderAll();
}

function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-links li');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-section');
            switchSection(target);
        });
    });
}

function switchSection(sectionId) {
    state.currentSection = sectionId;
    document.querySelectorAll('.nav-links li').forEach(li => li.classList.toggle('active', li.getAttribute('data-section') === sectionId));
    document.querySelectorAll('section').forEach(sec => sec.classList.toggle('active', sec.id === sectionId));

    const settings = {
        dashboard: { title: '대시보드', desc: '항공 정보와 이동 경로를 확인하세요.' },
        restaurants: { title: '맛집 리스트', desc: '돈카츠, 우동, 이자카야까지 더 풍성해진 미식 여행.' },
        desserts: { title: '디저트 & 카페', desc: '달콤한 휴식을 위한 완벽한 공간.' },
        shopping: { title: '쇼핑 스팟', desc: '가까운 신사이바시부터 빈티지의 성지 텐마까지.' },
        bars: { title: '술집 & 클럽', desc: '불타는 오사카의 밤을 책임질 특별 가이드.' },
        activities: { title: '놀거리 & 활동', desc: '잊지 못할 추억을 선사할 이색 체험들.' },
        map: { title: '숙소 위치', desc: '안락한 휴식을 위한 숙소 정보.' }
    };

    const s = settings[sectionId] || { title: '환영합니다!', desc: '' };
    document.getElementById('section-title').textContent = s.title;
    document.getElementById('section-desc').textContent = s.desc;

    saveToLocalStorage();
    renderSection(sectionId);
}

function setupEventListeners() {
    document.getElementById('add-restaurant-btn')?.addEventListener('click', () => openModal('restaurants'));
    document.getElementById('add-dessert-btn')?.addEventListener('click', () => openModal('desserts'));
    document.getElementById('add-shopping-btn')?.addEventListener('click', () => openModal('shopping'));
    document.getElementById('add-activity-btn')?.addEventListener('click', () => openModal('activities'));
    document.getElementById('add-bar-btn')?.addEventListener('click', () => openModal('bars'));

    document.getElementById('close-modal').addEventListener('click', closeModal);
    document.getElementById('save-item').addEventListener('click', saveItem);

    document.addEventListener('click', (e) => {
        const bar = e.target.closest('.filter-bar, .area-filter-bar');
        if (!bar || !e.target.classList.contains('filter-btn')) return;

        const section = bar.getAttribute('data-for');
        const isArea = bar.classList.contains('area-filter-bar');
        const value = isArea ? e.target.getAttribute('data-area') : e.target.getAttribute('data-filter');

        bar.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        if (isArea) state.filters[section].area = value;
        else state.filters[section].sub = value;

        renderSection(section);
    });
}

function openModal(type) {
    currentAddingType = type;
    document.getElementById('modal-container').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal-container').classList.add('hidden');
}

function saveItem() {
    const name = document.getElementById('item-name').value;
    const menu = document.getElementById('item-menu').value;
    const price = document.getElementById('item-price').value;
    const res = document.getElementById('item-res').checked;
    const map = document.getElementById('item-map').value;
    const desc = document.getElementById('item-desc').value;

    if (!name) return alert('이름을 입력해주세요!');

    const finalMap = map || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ' 오사카')}`;

    // Default values
    const defaultSub = (currentAddingType === 'restaurants') ? 'others' : (currentAddingType === 'desserts' ? 'cafe' : (currentAddingType === 'bars' ? 'izakaya' : 'others'));

    state[currentAddingType].push({ id: Date.now(), name, menu, price, res: res || false, map: finalMap, desc, sub: defaultSub, area: 'shinsaibashi', time: '도보 10분', rating: 4.0 });
    saveToLocalStorage();
    renderSection(currentAddingType);
    updateDashboardUI();
    closeModal();
}

function renderAll() {
    renderRestaurants();
    renderDesserts();
    renderShopping();
    renderActivities();
    renderBars();
}

function renderSection(sectionId) {
    const map = { restaurants: renderRestaurants, desserts: renderDesserts, shopping: renderShopping, activities: renderActivities, bars: renderBars };
    if (map[sectionId]) map[sectionId]();
}

function getFilteredData(type) {
    const f = state.filters[type];
    return state[type].filter(item => {
        const matchSub = f.sub === 'all' || item.sub === f.sub;
        const matchArea = f.area === 'all' || item.area === f.area;
        return matchSub && matchArea;
    });
}

function generateCardHtml(item, type) {
    const mapUrl = (item.map && item.map.startsWith('http')) ? item.map : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name + ' 오사카')}`;
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(item.name + ' 오사카')}`;

    return `
        <div class="info-card-item clickable-card" onclick="window.open('${searchUrl}', '_blank')">
            <div class="card-header">
                <div class="tags">
                    ${item.res ? '<span class="card-tag-res">예약필수</span>' : (type === 'bars' && item.hunting ? '<span class="card-tag-hunting">헌팅/클럽</span>' : `<span class="card-category">${item.sub}</span>`)}
                    ${getRatingHtml(item.rating)}
                </div>
            </div>
            <h4>${item.name}</h4>
            <div class="travel-time-badge"><i data-lucide="navigation"></i> 숙소에서 ${item.time}</div>
            ${item.menu ? `<div class="card-info-row"><span class="label">대표메뉴</span><span class="val">${item.menu}</span></div>` : ''}
            ${item.price ? `<div class="card-info-row"><span class="label">비용/가격</span><span class="val price">${item.price}</span></div>` : ''}
            <p class="card-desc">${item.desc}</p>
            <div class="card-footer" style="margin-top:auto; display:flex; justify-content:space-between; align-items:center;">
                <span class="area-tag" style="font-size:10px; color:var(--text-dim); text-transform:uppercase">📍 ${item.area}</span>
                <a href="${mapUrl}" target="_blank" class="btn-map-sm" onclick="event.stopPropagation()">
                    <i data-lucide="map"></i> 구글맵
                </a>
            </div>
        </div>
    `;
}

function renderRestaurants() {
    const list = document.getElementById('restaurant-list');
    if (!list) return;
    list.innerHTML = getFilteredData('restaurants').map(item => generateCardHtml(item, 'restaurants')).join('');
    lucide.createIcons();
}

function renderDesserts() {
    const list = document.getElementById('dessert-list');
    if (!list) return;
    list.innerHTML = getFilteredData('desserts').map(item => generateCardHtml(item, 'desserts')).join('');
    lucide.createIcons();
}

function renderShopping() {
    const list = document.getElementById('shopping-list');
    if (!list) return;
    list.innerHTML = getFilteredData('shopping').map(item => generateCardHtml(item, 'shopping')).join('');
    lucide.createIcons();
}

function renderActivities() {
    const list = document.getElementById('activity-list');
    if (!list) return;
    list.innerHTML = getFilteredData('activities').map(item => generateCardHtml(item, 'activities')).join('');
    lucide.createIcons();
}

function renderBars() {
    const list = document.getElementById('bar-list');
    if (!list) return;
    list.innerHTML = getFilteredData('bars').map(item => generateCardHtml(item, 'bars')).join('');
    lucide.createIcons();
}

function updateDashboardUI() {
    const totalCount = state.restaurants.length + state.desserts.length + state.shopping.length + state.activities.length + state.bars.length;
    const el = document.getElementById('place-count');
    if (el) el.textContent = `${totalCount}곳`;
}

function saveToLocalStorage() { localStorage.setItem('osaka_free_state_v14', JSON.stringify(state)); }
function loadFromLocalStorage() {
    const saved = localStorage.getItem('osaka_free_state_v14');
    if (saved) state = { ...state, ...JSON.parse(saved) };
}

document.addEventListener('DOMContentLoaded', init);
