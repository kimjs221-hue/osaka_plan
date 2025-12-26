// State Management
let state = {
    currentSection: 'dashboard',
    tripDates: { start: '2025-12-31', end: '2026-01-04' },
    filters: {
        restaurants: { sub: 'all', area: 'all' },
        desserts: { sub: 'all', area: 'all' },
        shopping: { sub: 'all', area: 'all' },
        activities: { sub: 'all', area: 'all' },
        bars: { sub: 'all', area: 'all' },
        convenience: { sub: 'all', area: 'all' }
    },
    restaurants: [
        // --- Sushi & Kaisendon ---
        { id: 101, name: '하루코마 스시', sub: 'sushi', area: 'tenma', time: '전철 22분 (미도스지선 1회)', price: '1,000엔~', rating: 4.4, res: false, smoking: false, hours: '11:00-21:30', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=400&q=80', desc: '타베로그 3.7대, 오사카 가성비 스시 레전드', map: 'https://maps.google.com/?q=春駒寿司' },
        { id: 901, name: '스시 사카바 사시스 난바', sub: 'sushi', area: 'namba', time: '도보 12분', price: '1,500엔~', rating: 4.2, res: false, smoking: false, hours: '11:00-23:00', menu: '참치 모둠 스시', desc: '난바 가성비 스시의 정석, 항상 붐비는 인기점', map: 'https://maps.google.com/?q=スシ酒場さしす+難波' },
        { id: 902, name: '니기리즈시 스시카이 난바', sub: 'sushi', area: 'namba', time: '도보 10분', price: '1,300엔~', rating: 4.4, res: false, smoking: false, hours: '11:30-22:00', menu: '니기리 스시', desc: '도톤보리 근처에서 안정적인 평가 받는 가성비 스시', map: 'https://maps.google.com/?q=寿司海+難波' },
        { id: 909, name: '스시노스케 닛폰바시', sub: 'sushi', area: 'dendentown', time: '전철 15분 (미도스지선 난바 → 도보)', price: '1,200엔~', rating: 4.3, res: false, smoking: false, hours: '11:00-22:00', menu: '니기리 스시', desc: '덴덴타운에서 가성비로 가장 안정적인 스시집', map: 'https://maps.google.com/?q=寿司之介+日本橋' },
        { id: 910, name: '멘야 조우', sub: 'ramen', area: 'dendentown', time: '전철 18분 (미도스지선 → 사카이스지선)', price: '900엔~', rating: 4.2, res: false, smoking: false, hours: '11:30-22:00', menu: '닭 육수 라멘', desc: '덴덴타운 숨은 강자, 국물 완성도 높음', map: 'https://maps.google.com/?q=麺屋丈+日本橋' },
        { id: 911, name: '라멘 무텐카', sub: 'ramen', area: 'dendentown', time: '전철 16분 (난바 → 닛폰바시)', price: '800엔~', rating: 4.1, res: false, smoking: false, hours: '11:00-21:00', menu: '쇼유 라멘', desc: '자극적이지 않은 정통 간장 라멘', map: 'https://maps.google.com/?q=ラーメン無天家+日本橋' },
        { id: 912, name: '야키니쿠 라이크 닛폰바시', sub: 'yakiniku', area: 'dendentown', time: '전철 15분 (난바 → 도보)', price: '1,000엔~', rating: 4.0, res: false, smoking: false, hours: '11:00-23:00', menu: '혼밥 야키니쿠 세트', desc: '혼자 빠르게 먹기 좋은 가성비 야키니쿠', map: 'https://maps.google.com/?q=焼肉ライク+日本橋' },
        { id: 913, name: '쿠시카츠 요코즈나 닛폰바시', sub: 'others', area: 'dendentown', time: '전철 17분 (미도스지선)', price: '900엔~', rating: 4.2, res: false, smoking: false, hours: '11:00-22:00', menu: '쿠시카츠 모둠', desc: '덴덴타운 근처에서 무난하게 먹기 좋은 쿠시카츠', map: 'https://maps.google.com/?q=串カツ横綱+日本橋' },
        { id: 914, name: '타코야끼 타마야 닛폰바시', sub: 'others', area: 'dendentown', time: '전철 16분 (난바 → 닛폰바시)', price: '500엔~', rating: 4.1, res: false, smoking: false, hours: '10:30-20:00', menu: '타코야끼', desc: '현지인 위주, 소스 과하지 않은 스타일', map: 'https://maps.google.com/?q=たこ焼き+玉屋+日本橋' },
        { id: 102, name: '마루요시 스시', sub: 'sushi', area: 'namba', time: '도보 12분', price: '3,000엔~', rating: 4.5, res: true, hours: '06:00-13:00 (일요일 휴무)', img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=400&q=80', desc: '난바 위치, 셰프의 장인정신이 느껴지는 작은 명점' },
        { id: 103, name: '대기수산 회전초밥', sub: 'sushi', area: 'namba', time: '도보 5분', price: '1,500엔~', rating: 4.1, res: false, hours: '11:00-22:00', img: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&fit=crop&w=400&q=80', desc: '도톤보리 강변, 회전초밥 중 가장 신선한 퀄리티' },
        { id: 104, name: '스시 호시야마', sub: 'sushi', area: 'umeda', time: '전철 15분', price: '15,000엔~', rating: 4.6, res: true, hours: '17:30-23:00 (화요일 휴무)', img: 'https://images.unsplash.com/photo-1617196034183-421b4917c92d?auto=format&fit=crop&w=400&q=80', desc: '미슐랭 1스타, 우메다 지역 하이엔드 오마카세' },
        { id: 105, name: '원조 부치 초밥 어신', sub: 'sushi', area: 'shinsaibashi', time: '도보 8분', price: '2,000엔~', rating: 4.2, res: false, smoking: 'room', hours: '11:00-24:00', img: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&w=400&q=80', desc: '신사이바시 노포, 압도적인 크기의 네타가 특징 (흡연실 있음)' },

        // --- Japanese Home Cooking (Teishoku) ---
        { id: 181, name: '이치후지 식당', sub: 'teishoku', area: 'tenma', time: '전철 18분', price: '1,000엔~', rating: 4.5, res: false, hours: '11:00-19:00 (일요일 휴무)', img: 'https://images.unsplash.com/photo-1547928576-a4a33237ecd0?auto=format&fit=crop&w=400&q=80', desc: '1959년 창업 노포. 니쿠스이와 폭신한 계란말이 정식이 일품' },
        { id: 182, name: '사치후쿠야 (난바 파크스)', sub: 'teishoku', area: 'namba', time: '도보 12분', price: '1,300엔~', rating: 4.2, res: false, hours: '11:00-22:00', img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&q=80', desc: '갓 지은 솥밥과 명란 무한리필! 건강한 일본 가정식 정식' },
        { id: 183, name: '조지루시 은백 식당', sub: 'teishoku', area: 'namba', time: '도보 8분', price: '1,800엔~', rating: 4.6, res: true, hours: '11:00-21:00', img: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=400&q=80', desc: '코끼리 보온병 운영. 밥맛의 끝판왕을 보여주는 프리미엄 정식' },
        { id: 184, name: '텐고 식당', sub: 'teishoku', area: 'tenma', time: '전철 20분', price: '900엔~', rating: 4.3, res: false, hours: '11:00-22:00', img: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=400&q=80', desc: '갓 구운 생선구이와 수제 슈마이가 인기인 가성비 로컬 맛집' },
        { id: 185, name: '야요이켄 (난바점)', sub: 'teishoku', area: 'namba', time: '도보 5분', price: '800엔~', rating: 4.1, res: false, hours: '05:00-익일 03:00', img: 'https://images.unsplash.com/photo-1569058242253-92a9c71f9867?auto=format&fit=crop&w=400&q=80', desc: '일본 국민 정식 체인. 밥 무한리필이 가능하며 실패 없는 맛' },
        { id: 186, name: '오토야 고쿠라쿠가이', sub: 'teishoku', area: 'namba', time: '도보 6분', price: '1,200엔~', rating: 4.2, res: false, hours: '11:00-23:00', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80', desc: '조미료를 최소화한 건강식 중심의 정식 브랜드' },
        { id: 187, name: '니시야 본점 (Nishiya)', sub: 'teishoku', area: 'shinsaibashi', time: '도보 4분', price: '1,500엔~', rating: 4.4, res: true, hours: '11:00-22:00', img: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=400&q=80', desc: '우동 전업점에서 즐기는 정통 일본식 반상과 솥밥 정식' },
        { id: 188, name: '다이키스이산 식당', sub: 'teishoku', area: 'namba', time: '도보 8분', price: '1,400엔~', rating: 4.1, res: false, hours: '11:00-21:00', img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=400&q=80', desc: '해산물 전문 기업 운영. 신선한 생선 카츠와 정식을 합리적인 가격에' },
        { id: 189, name: '마이도 오오키니 식당', sub: 'teishoku', area: 'namba', time: '도보 10분', price: '800엔~', rating: 4.0, res: false, hours: '07:00-23:00', img: 'https://images.unsplash.com/photo-1614961908151-610129bc7807?auto=format&fit=crop&w=400&q=80', desc: '쟁반을 들고 원하는 반찬을 골라 담는 재미가 있는 자율 배식형 식당' },
        { id: 190, name: '그릴 ABC', sub: 'teishoku', area: 'tenma', time: '전철 18분', price: '1,100엔~', rating: 4.2, res: false, hours: '11:00-20:00', img: 'https://images.unsplash.com/photo-1533777324565-a04cda953412?auto=format&fit=crop&w=400&q=80', desc: '쇼와 레트로 감성 가득한 일식 양식 정식 전문점' },
        { id: 107, name: '우오이치 쇼쿠도', sub: 'sushi', area: 'namba', time: '도보 15분', price: '2,500엔~', rating: 4.4, res: false, hours: '06:00-13:00 (목요일 휴무)', img: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=400&q=80', desc: '새벽 6시 오픈! 우니와 관자가 넘쳐흐르는 인생 카이센동' },
        { id: 108, name: '슈젠야유이', sub: 'sushi', area: 'shinsaibashi', time: '도보 10분', price: '1,800엔~', rating: 4.3, res: false, hours: '11:30-15:00 / 17:30-23:30 (일요일 휴무)', img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=400&q=80', desc: '나가호리바시 핫플, "넘치는 카이센동"으로 SNS에서 화제' },
        { id: 109, name: '와카사야 난바점', sub: 'sushi', area: 'namba', time: '도보 7분', price: '1,500엔~', rating: 3.9, res: false, hours: '11:00-22:00', img: 'https://images.unsplash.com/photo-1476224483463-70364f33b1e3?auto=format&fit=crop&w=400&q=80', desc: '내 마음대로 토핑을 고르는 커스텀 카이센동 전문점' },
        { id: 601, name: '스시마사 본점', sub: 'sushi', area: 'tenma', time: '전철 20분', price: '1,500엔~', rating: 4.2, res: false, hours: '11:10-23:00 (월요일 휴무)', img: 'https://images.unsplash.com/photo-1562436260-8c9216eeb703?auto=format&fit=crop&w=400&q=80', desc: '하루코마와 쌍벽을 이루는 텐마의 가성비 스시 명점' },
        { id: 191, name: '우오야 히데조 타치노미', sub: 'sushi', area: 'namba', time: '도보 10분', price: '2,000엔~', rating: 4.4, res: false, smoking: true, hours: '17:00-24:00', img: 'https://images.unsplash.com/photo-1550966842-2b667e41f021?auto=format&fit=crop&w=400&q=80', desc: '우라난바의 서서 먹는 스시, 신선하고 저렴함 (좌석 흡연 가능)' },

        // --- Tonkatsu & Kyukatsu ---
        { id: 151, name: '규카츠 모토무라 난바', sub: 'katsu', area: 'namba', time: '도보 6분', price: '1,400엔~', rating: 4.7, res: false, hours: '11:00-22:00', img: 'https://images.unsplash.com/photo-1621919030800-474c76743936?auto=format&fit=crop&w=400&q=80', desc: '화로에 구워 먹는 규카츠' },
        { id: 152, name: '규카츠 토미타', sub: 'katsu', area: 'namba', time: '도보 8분', price: '1,300엔~', rating: 4.5, res: false, hours: '11:00-21:00', img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80', desc: '현지인 숨은 규카츠 맛집' },
        { id: 153, name: '뉴베이브 토요사키', sub: 'katsu', area: 'umeda', time: '전철 18분', price: '2,000엔~', rating: 4.6, res: false, hours: '11:00-15:00 / 17:30-19:30 (부정기 휴무)', img: 'https://images.unsplash.com/photo-1614750914812-7825488133ef?auto=format&fit=crop&w=400&q=80', desc: '육즙 폭발 핑크빛 돈카츠' },
        { id: 154, name: 'KYK 돈카츠 우메다', sub: 'katsu', area: 'umeda', time: '전철 15분', price: '1,500엔~', rating: 4.2, res: false, hours: '11:00-22:00', img: 'https://images.unsplash.com/photo-1616031024479-563630f9d92e?auto=format&fit=crop&w=400&q=80', desc: '오사카 대표 노포 돈카츠' },
        { id: 155, name: 'Epais (에페)', sub: 'katsu', area: 'umeda', time: '전철 16분', price: '1,800엔~', rating: 4.5, res: true, hours: '11:00-15:00 / 18:00-22:00 (일요일 휴무)', img: 'https://images.unsplash.com/photo-1544601284-8258ef29549f?auto=format&fit=crop&w=400&q=80', desc: '미슐랭 빕구르망 프리미엄 돈카츠' },

        // --- Udon & Soba ---
        { id: 161, name: '도톤보리 이마이', sub: 'udon', area: 'namba', time: '도보 4분', price: '800엔~', rating: 4.3, res: false, hours: '11:30-21:30 (수요일 휴무)', img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=400&q=80', desc: '오사카 우동의 상징, 담백한 육수와 유부가 일품' },
        { id: 162, name: '카마타케 우동', sub: 'udon', area: 'namba', time: '도보 8분', price: '900엔~', rating: 4.4, res: false, hours: '11:00-16:00 (화요일 휴무)', img: 'https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&w=400&q=80', desc: '국물 없는 붓카케 우동의 성지, 쫄깃한 면발' },
        { id: 163, name: '츠루톤탄 소에몬초점', sub: 'udon', area: 'namba', time: '도보 6분', price: '1,200엔~', rating: 4.1, res: false, hours: '11:00-익일 08:00', img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=400&q=80', desc: '세숫대야 우동, 명란 크림 우동 등 퓨전 메뉴가 인기' },
        { id: 164, name: '우동야 키스케', sub: 'udon', area: 'umeda', time: '전철 16분', price: '1,000엔~', rating: 4.5, res: false, hours: '12:00-16:00 / 18:00-20:00 (화요일 휴무)', img: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=400&q=80', desc: '미슐랭 빕구르망, 텐푸라와 냉우동의 조화가 환상적' },

        // --- Ramen ---
        { id: 111, name: '이치란 라멘 도톤보리', sub: 'ramen', area: 'namba', time: '도보 6분', price: '1,100엔', rating: 4.3, res: false, hours: '24시간 영업', img: 'https://images.unsplash.com/photo-1552611052-d59a0d9741bc?auto=format&fit=crop&w=400&q=80', desc: '말이 필요 없는 오사카 1순위 돈코츠 라멘' },
        { id: 112, name: '카무쿠라 라멘', sub: 'ramen', area: 'namba', time: '도보 8분', price: '900엔', rating: 4.1, res: false, hours: '10:00-익일 07:30', img: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&w=400&q=80', desc: '배추의 단맛이 우러난 깊고 깔끔한 채수 라멘' },
        { id: 113, name: '라멘 인생 JET', sub: 'ramen', area: 'umeda', time: '전철 18분', price: '1,000엔', rating: 4.4, res: false, hours: '11:00-15:00 / 18:00-23:00', img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=400&q=80', desc: '후쿠시마 격전지 1위, 진한 토리파이탄(닭백탕)의 정석' },
        { id: 114, name: '무기토 멘스케', sub: 'ramen', area: 'umeda', time: '전철 15분', price: '1,200엔', rating: 4.5, res: false, hours: '11:00-15:30 (화요일 휴무)', img: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&w=400&q=80', desc: '미슐랭 등재, 중화소바의 극치를 보여주는 우메다 명소' },
        { id: 115, name: '나니와 멘지로', sub: 'ramen', area: 'namba', time: '도보 10분', price: '1,100엔', rating: 4.2, res: false, hours: '11:00-22:00 (셋째주 화요일 휴무)', img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=400&q=80', desc: '난바역 위치, 황금 조개 육수로 깔끔한 뒷맛이 일품' },

        // --- Yakiniku ---
        { id: 121, name: '야키니쿠 만노', sub: 'yakiniku', area: 'tenma', time: '전철 20분', price: '5,000엔~', rating: 4.4, res: true, smoking: 'room', hours: '11:00-23:00', img: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=400&q=80', desc: '정육점 직영 와규 전문점 (실내 흡연실 완비)' },
        { id: 122, name: '호르몬 사카가미', sub: 'yakiniku', area: 'namba', time: '도보 12분', price: '3,500엔~', rating: 4.2, res: false, smoking: true, hours: '17:00-24:00', img: 'https://images.unsplash.com/photo-1529193591184-b1d58b3fffc9?auto=format&fit=crop&w=400&q=80', desc: '난바 뒷골목 감성, 내장 구이 맛집 (좌석 흡연 가능)' },
        { id: 123, name: '마쓰사카규 M', sub: 'yakiniku', area: 'namba', time: '도보 5분', price: '8,000엔~', rating: 4.6, res: true, smoking: 'room', hours: '12:00-15:00 / 17:00-23:00', img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80', desc: '마쓰사카규 전문점, 개별실 완비 (흡연실 있음)' },
        { id: 125, name: '야키니쿠 고리짱 우메다', sub: 'yakiniku', area: 'umeda', time: '전철 15분', price: '3,000엔~', rating: 4.9, res: true, smoking: true, hours: '17:00-익일 07:00', img: 'https://images.unsplash.com/photo-1563851508933-2895f573752e?auto=format&fit=crop&w=400&q=80', desc: '구글 평점 4.9! 가성비 와규 끝판왕 (흡연 가능)' },
        { id: 126, name: '만료 (Manryo)', sub: 'yakiniku', area: 'tenma', time: '전철 18분', price: '4,000엔~', rating: 4.5, res: true, smoking: true, hours: '16:00-24:00 (수요일 휴무)', img: 'https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?auto=format&fit=crop&w=400&q=80', desc: '오사카 현지인들이 가장 사랑하는 야키니쿠 (흡연 가능)' },
        { id: 127, name: '스미비 야키니쿠 다이칸', sub: 'yakiniku', area: 'namba', time: '도보 8분', price: '4,500엔~', rating: 4.4, res: false, smoking: 'room', hours: '12:00-23:00', img: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=400&q=80', desc: '숯불 향 가득한 와규 무제한 (흡연 전용실 있음)' },

        // --- Izakaya & Others ---
        { id: 131, name: '미즈노 오코노미야키', sub: 'okonomiyaki', area: 'namba', time: '도보 6분', price: '1,800엔~', rating: 4.3, res: false, smoking: 'room', hours: '11:00-22:00 (목요일 휴무)', img: 'https://images.unsplash.com/photo-1617343255141-754da01f2e14?auto=format&fit=crop&w=400&q=80', desc: '미슐랭 빕구르망, 마 가루 오코노미야키 (흡연실 있음)' },
        { id: 133, name: '후쿠타로 본점', sub: 'okonomiyaki', area: 'namba', time: '도보 8분', price: '1,300엔~', rating: 4.4, res: false, smoking: true, hours: '평일 17:00-23:30 / 주말 12:00-23:30', img: 'https://images.unsplash.com/photo-1551024739-78e9d60c45ca?auto=format&fit=crop&w=400&q=80', desc: '난바 현지인 줄 서는 곳, 네기야키 추천 (흡연 가능)' },
        { id: 141, name: '북극성 (Hokkyokusei)', sub: 'others', area: 'namba', time: '도보 10분', price: '1,200엔~', rating: 4.2, res: false, hours: '11:30-21:30', img: 'https://images.unsplash.com/photo-1506084868730-34232f32f057?auto=format&fit=crop&w=400&q=80', desc: '오사카 오므라이스의 원조, 일본 가옥 분위기' },
        { id: 142, name: '쿠시카츠 다루마', sub: 'others', area: 'namba', time: '도보 5분', price: '2,000엔~', rating: 4.1, res: false, smoking: 'room', hours: '11:00-22:30', img: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=400&q=80', desc: '오사카 명물 꼬치 튀김 (분점마다 흡연실 완비)' },
        { id: 903, name: '아카시야키 다코노테츠 도톤보리', sub: 'others', area: 'namba', time: '도보 10분', price: '700엔~', rating: 4.1, res: false, smoking: false, hours: '11:00-22:00', menu: '아카시야키', desc: '국물에 찍어먹는 정통 오사카식 타코야끼', map: 'https://maps.google.com/?q=たこの鉄+道頓堀' },
        { id: 904, name: '타코야끼 와나카 센니치마에', sub: 'others', area: 'namba', time: '도보 13분', price: '600엔~', rating: 4.2, res: false, smoking: false, hours: '10:00-23:00', menu: '소스 타코야끼', desc: '관광지인데도 타베로그 점수 유지하는 타코야끼', map: 'https://maps.google.com/?q=わなか+千日前' },
        { id: 144, name: '메이지켄 (Meijiken)', sub: 'others', area: 'shinsaibashi', time: '도보 4분', price: '1,300엔~', rating: 4.2, res: false, smoking: 'room', hours: '11:00-22:00 (수요일 휴무, 브레이크 15:50-17:00)', img: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=400&q=80', desc: '1925년 창업, 오므라이스 명점 (흡연실 있음)' },
        { id: 143, name: '텐동 마키노', sub: 'others', area: 'umeda', time: '전철 15분', price: '1,500엔~', rating: 4.4, res: false, hours: '10:30-23:00', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80', desc: '눈앞에서 튀겨주는 바삭한 텐동, 우메다 직장인들의 맛집' },
        { id: 176, name: '돈소쿠노 카도야', sub: 'izakaya', area: 'namba', time: '도보 10분', price: '2,000엔~', rating: 4.1, res: false, smoking: true, hours: '11:00-22:00 (화요일 휴무)', img: 'https://images.unsplash.com/photo-1529193591184-b1d58b3fffc9?auto=format&fit=crop&w=400&q=80', desc: '현지 아저씨들의 성지, 족발과 술 (흡연 매우 자유로움)' },
        { id: 134, name: '호젠지 산페이', sub: 'okonomiyaki', area: 'namba', time: '도보 8분', price: '1,500엔~', rating: 4.4, res: false, smoking: true, hours: '17:00-23:00 (화요일 휴무)', desc: '호젠지 요코초의 정취 (흡연 가능)' },
        { id: 135, name: '아지노야', sub: 'okonomiyaki', area: 'namba', time: '도보 6분', price: '1,400엔~', rating: 4.6, res: false, smoking: 'room', hours: '11:00-22:00 (월요일 휴무)', desc: '도톤보리 최고의 오코노미야키 (흡연 전용실 완비)' },
        { id: 116, name: '면야 조로쿠', sub: 'ramen', area: 'namba', time: '도보 10분', price: '1,000엔', rating: 4.5, res: false, hours: '11:30-15:00 / 18:00-21:00 (화요일 휴무)', desc: '오사카 타베로그 라면 부문 부동의 1위 명점' },
        { id: 117, name: '라멘 야시치', sub: 'ramen', area: 'umeda', time: '전철 15분', price: '1,100엔', rating: 4.7, res: false, hours: '10:30-16:00 (토/일 휴무)', desc: '평일에만 맛볼 수 있는 환상의 닭 육수 라멘' },
        { id: 136, name: '치보 (Chibo)', sub: 'okonomiyaki', area: 'namba', time: '도보 5분', price: '1,500엔~', rating: 4.1, res: false, smoking: 'room', hours: '11:00-23:00', desc: '고급스러운 분위기의 오코노미야키 (별도 흡연실 있음)' },
        { id: 128, name: '야키니쿠노 와타미 난바점', sub: 'yakiniku', area: 'namba', time: '도보 5분', price: '3,000엔~', rating: 3.8, res: false, smoking: 'room', hours: '11:30-23:00', desc: '가성비 90분 무제한 코스 (실내 흡연실 완비)' },
        { id: 129, name: '야키니쿠 코코카라 난바점', sub: 'yakiniku', area: 'namba', time: '도보 8분', price: '3,500엔~', rating: 4.2, res: false, smoking: true, hours: '17:00-익일 02:00', desc: '두툼한 안창살과 호르몬 (좌석 흡연 가능)' },
        { id: 130, name: '야키니쿠 리키마루 난바점', sub: 'yakiniku', area: 'namba', time: '도보 6분', price: '3,500엔~', rating: 4.1, res: false, smoking: 'room', hours: '11:30-23:00', desc: '냉장 숙성 고기 무제한 (개별 흡연실 완비)' },
        { id: 131, name: '쿠로노 우라난바 본점', sub: 'yakiniku', area: 'namba', time: '도보 10분', price: '4,000엔~', rating: 4.4, res: true, smoking: true, hours: '16:00-24:00', desc: '흑모 와규 파격가 제공 (좌석 흡연 가능)' },
        { id: 137, name: '야키니쿠 마이도', sub: 'yakiniku', area: 'namba', time: '도보 5분', price: '3,500엔~', rating: 4.0, res: false, smoking: true, hours: '17:00-23:00', desc: '와규 무한리필 플랜 (흡연 가능)' },

        // --- Breakfast & Late Night ---
        { id: 145, name: '마루후쿠 커피점 (본점)', sub: 'others', area: 'namba', time: '도보 10분', price: '700엔~', rating: 4.1, smoking: true, hours: '08:00-23:00', desc: '1934년 창업, 오사카를 대표하는 정통 킷사텐. 클래식한 모닝 세트 추천 (흡연 가능)' },
        { id: 146, name: '킨류 라멘 (도톤보리)', sub: 'ramen', area: 'namba', time: '도보 5분', price: '800엔~', rating: 3.8, hours: '24시간 영업', desc: '도톤보리의 마스코트. 24시간 언제든 먹을 수 있는 서서 먹는 라멘의 낭만' },
        { id: 147, name: '이치란 라면 도톤보리점', sub: 'ramen', area: 'namba', time: '도보 6분', price: '1,100엔~', rating: 4.3, hours: '24시간 영업', desc: '말이 필요 없는 명소. 취향대로 커스텀하는 나만의 라멘 (24시간)' },
        { id: 148, name: '산토리 바 원 (Suntory Bar)', sub: 'others', area: 'namba', time: '도보 8분', price: '1,000엔~', rating: 4.5, smoking: true, hours: '18:00-익일 04:00', desc: '심야에 조용히 위스키 한 잔 즐기기 좋은 정통 바 (흡연 가능)' },
        { id: 149, name: '쿠로몬 시장 (아침 먹거리)', sub: 'others', area: 'namba', time: '도보 12분', price: '500엔~', rating: 4.2, hours: '09:00-18:00', desc: '오사카의 부엌. 아침 일찍 들러 신선한 우니와 해산물을 맛볼 수 있는 곳' },
        { id: 150, name: '나카우 (Nakau) 난바점', sub: 'teishoku', area: 'namba', time: '도보 5분', price: '400엔~', rating: 3.9, hours: '24시간 영업', desc: '저렴하고 든든한 24시간 규동 및 우동 체인. 아침 식사로 최고' },
        { id: 110, name: '잇푸도 라멘 난바', sub: 'ramen', area: 'namba', time: '도보 7분', price: '1,000엔', rating: 4.2, res: false, hours: '11:00-22:00', desc: '전 세계적으로 유명한 하카타 돈코츠 라멘의 명가' },
        { id: 124, name: '아부리야 난바 다이치', sub: 'yakiniku', area: 'namba', time: '도보 5분', price: '4,000엔~', rating: 4.4, res: true, smoking: 'room', hours: '17:00-23:00', desc: '고퀄리티 와규 무한리필 (흡연 전용실 완비)' },
        { id: 132, name: '오코노미야키 키지', sub: 'okonomiyaki', area: 'umeda', time: '전철 16분', price: '1,200엔~', rating: 4.5, res: false, smoking: true, hours: '11:30-21:30 (목요일 휴무)', desc: '우메다 공중정원 근처 노포 (좌석 흡연 가능)' },
        { id: 140, name: '쿠이오레 타로 드링크', sub: 'others', area: 'namba', time: '도보 5분', price: '500엔~', rating: 4.0, res: false, hours: '10:00-22:00', desc: '도톤보리의 마스코트와 함께 즐기는 달콤한 디저트와 음료' },
        { id: 324, name: '바 아카시 레코드', sub: 'izakaya', area: 'shinsaibashi', time: '도보 6분', price: '칵테일 800엔~', rating: 4.6, hunting: false, smoking: true, hours: '18:00-02:00', desc: 'LP 감성 바 (실내 흡연 가능)' },
        { id: 328, name: 'BAR Nayuta', sub: 'izakaya', area: 'shinsaibashi', time: '도보 5분', price: '1,500엔~', rating: 4.8, hunting: false, smoking: true, hours: '19:00-03:00', desc: '비밀스러운 믹솔로지 바 (흡연 가능)' },
        { id: 342, name: '바 레드 캐년', sub: 'izakaya', area: 'umeda', time: '전철 15분', price: '4,000엔~', rating: 4.7, hunting: false, smoking: true, hours: '18:00-02:00', desc: '고택 개조 드라이플라워 바 (흡연 가능)' },
        { id: 343, name: 'KAFFE BAR NELLIE', sub: 'izakaya', area: 'umeda', time: '전철 16분', price: '1,500엔~', rating: 4.5, hunting: false, smoking: true, hours: '14:00-24:00', desc: '카페 스타일 레코드 바 (흡연 가능)' },
        { id: 361, name: 'The Northern Bar', sub: 'izakaya', area: 'umeda', time: '전철 17분', price: '3,500엔~', rating: 4.6, hunting: false, smoking: true, hours: '17:00-23:00', desc: '클래식 위스키 바 (좌석 흡연 가능)' },
        { id: 362, name: '이코이 (Ikoi)', sub: 'izakaya', area: 'shinsaibashi', time: '도보 6분', price: '2,000엔~', rating: 4.3, hunting: false, smoking: true, hours: '17:00-24:00', desc: '조용하고 아늑한 분위기의 로컬 선술집 (흡연 가능)' },
        { id: 321, name: '기후야 (Gifuya)', sub: 'izakaya', area: 'tenma', time: '전철 20분', price: '잔술 100엔~', rating: 4.1, hunting: false, smoking: true, hours: '15:00-23:00', desc: '텐마의 전설, 낮술의 성지. 레트로한 분위기에서 흡연 가능' },
        { id: 351, name: '우오야 히데조 입식', sub: 'izakaya', area: 'namba', time: '도보 10분', price: '2,000엔~', rating: 4.5, hunting: false, hours: '17:00-24:00', desc: '우라난바No.1 힙한 타치노미, 활기찬 분위기' },
        { id: 330, name: '토리진 본점', sub: 'izakaya', area: 'namba', time: '도보 12분', price: '3,500엔~', rating: 4.4, hunting: false, smoking: 'room', hours: '17:00-24:00', desc: '닭 사시미와 정통 야키토리를 즐길 수 있는 로컬 명소 (흡연실 완비)' },
        { id: 331, name: '나루토야', sub: 'izakaya', area: 'namba', time: '도보 10분', price: '4,000엔~', rating: 4.5, hunting: false, hours: '17:00-23:30', desc: '예약 필수! 야채말이 꼬치구이가 예술인 우라난바 맛집' },
        { id: 314, name: 'Public Stand 난바', sub: 'izakaya', area: 'namba', time: '도보 8분', price: '시간당 정액제', rating: 4.2, hunting: true, smoking: true, hours: '18:00-05:00', desc: '무제한 드링크와 자유로운 합석 분위기의 스탠딩 바 (흡연 가능)' },
        { id: 322, name: '텐마 타치노미 세븐', sub: 'izakaya', area: 'tenma', time: '전철 20분', price: '1,000엔~', rating: 4.1, hunting: false, smoking: true, hours: '15:00-23:00', desc: '텐마 시장의 활기찬 분위기를 느낄 수 있는 서서 마시는 술집' },
        { id: 323, name: '야키토리 마사카', sub: 'izakaya', area: 'namba', time: '도보 10분', price: '3,000엔~', rating: 4.4, hunting: false, hours: '17:00-24:00', desc: '가성비 최강! 육즙 가득한 정통 야키토리 전문점' },
        { id: 325, name: '바 나카마 (Nakama)', sub: 'izakaya', area: 'shinsaibashi', time: '도보 5분', price: '2,000엔~', rating: 4.5, hunting: false, smoking: true, hours: '19:00-03:00', desc: '현지인들과 격의 없이 어울릴 수 있는 정겨운 로컬 바' },
        { id: 326, name: '바 프라잉 팟', sub: 'izakaya', area: 'shinsaibashi', time: '도보 6분', price: '1,500엔~', rating: 4.6, hunting: false, hours: '19:00-03:00', desc: '아늑한 다락방 감성의 칵테일 전문 바' },
        { id: 327, name: '바 카오스 (Chaos)', sub: 'izakaya', area: 'namba', time: '도보 9분', price: '1,000엔~', rating: 4.3, hunting: false, hours: '19:00-03:00', desc: '개성 넘치는 인테리어와 다양한 수제 맥주가 있는 곳' },
        { id: 329, name: '아카가키야 (Akagakiya)', sub: 'izakaya', area: 'namba', time: '도보 4분', price: '2,000엔~', rating: 4.1, res: false, smoking: 'room', hours: '11:00-21:00', desc: '난바 난카이 거리를 대표하는 정통 타치노미 이자카야 (흡연 구역 분리)' },
        { id: 701, name: '한신포차 오사카점', sub: 'izakaya', area: 'shinsaibashi', time: '도보 7분', price: '3,000엔~', rating: 4.3, res: false, smoking: 'room', hours: '17:00-익일 05:00', desc: '오사카의 밤을 달구는 K-포차의 대명사 (별도 흡연실 완리)' },
        { id: 702, name: '소주한잔 오사카1호점', sub: 'izakaya', area: 'shinsaibashi', time: '도보 8분', price: '3,000엔~', rating: 4.2, res: false, smoking: 'room', hours: '17:00-익일 05:00 (일 휴무)', desc: '임창정의 소주한잔 오사카 상륙! (실내 흡연 구역 존재)' }
    ],
    desserts: [
        { id: 501, name: 'Gokan Kitahama (고칸)', sub: 'bakery', area: 'umeda', time: '전철 10분', price: '1,500엔~', rating: 3.9, res: false, hours: '09:30-20:00', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80', desc: '근대 건축물에서 즐기는 럭셔리 쌀 롤케이크와 애프터눈 티' },
        { id: 502, name: 'Parfaiteria Pal', sub: 'parfait', area: 'shinsaibashi', time: '도보 7분', price: '2,000엔~', rating: 3.5, res: false, hours: '17:00-24:00', img: 'https://images.unsplash.com/photo-1543157145-f78c636d023d?auto=format&fit=crop&w=400&q=80', desc: '밤에만 여는 어른들을 위한 럭셔리 파르페 전문점' },
        { id: 503, name: 'Acidracines (아시드라신)', sub: 'bakery', area: 'tenma', time: '전철 15분', price: '800엔~', rating: 3.9, res: false, hours: '11:00-20:00 (수,목 휴무)', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80', desc: '오사카 No.1 파티세리, 예술적인 쁘띠 갸또와 구움과자' },
        { id: 504, name: 'Chocolatier Palet D\'or', sub: 'cafe', area: 'umeda', time: '전철 15분', price: '2,500엔~', rating: 3.7, res: false, hours: '11:00-20:00', img: 'https://images.unsplash.com/photo-1548907602-02f6c6a76c1c?auto=format&fit=crop&w=400&q=80', desc: '초콜릿 장인의 숨결이 담긴 고품격 쇼콜라 디저트의 정점' },
        { id: 505, name: 'Creperie Alcyon', sub: 'cafe', area: 'namba', time: '도보 10분', price: '1,600엔~', rating: 3.7, res: false, hours: '11:30-21:30', img: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=400&q=80', desc: '난바 노포 크레이프 전문점, 타베로그 백명점 선정' },
        { id: 506, name: 'Rikuro Ojisan (리쿠로)', sub: 'bakery', area: 'namba', time: '도보 8분', price: '965엔~', rating: 3.6, res: false, hours: '09:00-20:00', img: 'https://images.unsplash.com/photo-1551404885-20af4ec8a236?auto=format&fit=crop&w=400&q=80', desc: '오사카 명물! 탱글탱글한 인생 치즈케이크 갓 구운 맛' },
        { id: 905, name: '나카타니도', sub: 'traditional', area: 'namba', time: '도보 15분', price: '200엔~', rating: 4.3, res: false, smoking: false, hours: '10:00-19:00', menu: '요모기 모치', desc: '타베로그 3.6대, 난바 필수 디저트', map: 'https://maps.google.com/?q=中谷堂' },
        { id: 906, name: '쿠로몬 미타라시 당고', sub: 'traditional', area: 'namba', time: '도보 14분', price: '300엔~', rating: 4.1, res: false, smoking: false, hours: '10:00-18:00', menu: '미타라시 당고', desc: '숯불향 강한 오사카식 당고', map: 'https://maps.google.com/?q=黒門市場+みたらし団子' },
        { id: 907, name: '가리게트 오사카', sub: 'bakery', area: 'shinsaibashi', time: '도보 6분', price: '700엔~', rating: 4.3, res: false, smoking: false, hours: '11:00-20:00', menu: '밀푀유 아이스크림', desc: '겉바속차 + 아이스크림 조합으로 인기', map: 'https://maps.google.com/?q=GARIGUETTE+大阪' },
        { id: 908, name: '홋카이도 소프트크림 신사이바시', sub: 'cafe', area: 'shinsaibashi', time: '도보 5분', price: '450엔~', rating: 4.0, res: false, smoking: false, hours: '11:00-22:00', menu: '밀크 소프트 아이스크림', desc: '진한 우유맛, 산책 중 하나 먹기 좋음', map: 'https://maps.google.com/?q=北海道ソフトクリーム+心斎橋' },
        { id: 915, name: '미타라시 당고 야마모토', sub: 'traditional', area: 'dendentown', time: '전철 17분 (난바 → 도보)', price: '300엔~', rating: 4.0, res: false, smoking: false, hours: '10:00-18:00', menu: '미타라시 당고', desc: '덴덴타운 산책 중 가볍게 먹기 좋은 당고', map: 'https://maps.google.com/?q=みたらし団子+山本+日本橋' },
        { id: 916, name: '소프트크림 스탠드 닛폰바시', sub: 'parfait', area: 'dendentown', time: '전철 16분 (난바 → 도보)', price: '400엔~', rating: 4.1, res: false, smoking: false, hours: '11:00-21:00', menu: '밀크 소프트 아이스크림', desc: '전자상가 구경하다 하나 먹기 좋은 소프트크림', map: 'https://maps.google.com/?q=ソフトクリーム+日本橋' },
        { id: 507, name: 'Cafe Annon', sub: 'cafe', area: 'namba', time: '도보 9분', price: '1,400엔~', rating: 3.8, res: false, hours: '11:00-23:00', img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?auto=format&fit=crop&w=400&q=80', desc: '폭신폭신 팬케이크와 조용한 분위기, 난바의 숨은 보석' },
        { id: 508, name: 'HARBS Daimaru Umeda', sub: 'bakery', area: 'umeda', time: '전철 15분', price: '1,000엔~', rating: 4.1, res: false, hours: '10:00-20:00', img: 'https://images.unsplash.com/photo-1535141192574-5d48bb7dbf11?auto=format&fit=crop&w=400&q=80', desc: '밀크 크레이프의 전설, 과일이 듬뿍 들어간 대형 케이크' },
        { id: 211, name: 'Saturdays NYC Surf', sub: 'cafe', area: 'shinsaibashi', time: '도보 5분', price: '600엔~', rating: 4.4, hours: '09:00-20:00', img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&q=80', desc: '세련된 무드의 서프 샵 겸 카페, 라떼가 일품' },
        { id: 212, name: '뉴 YC (New YC)', sub: 'cafe', area: 'umeda', time: '전철 15분', price: '700엔~', rating: 4.2, smoking: true, hours: '07:00-23:00', img: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&w=400&q=80', desc: '우메다역 인근 레트로 감성 킷사텐 (전 좌석 흡연 가능)' },
        { id: 213, name: '코메다 커피 (난바)', sub: 'cafe', area: 'namba', time: '도보 5분', price: '500엔~', rating: 4.3, smoking: 'room', hours: '07:00-23:00', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80', desc: '일본의 국민 카페, 모닝 세트가 유명 (흡연실 완비)' },
        { id: 214, name: '카페 M (Cafe M)', sub: 'cafe', area: 'namba', time: '도보 10분', price: '600엔~', rating: 4.1, smoking: true, hours: '08:00-20:00', img: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=400&q=80', desc: '오사카 현지인들이 즐겨 찾는 아늑한 흡연 카페' },
        { id: 215, name: '홀리스 카페 (Holly’s Cafe)', sub: 'cafe', area: 'shinsaibashi', time: '도보 3분', price: '400엔~', rating: 4.0, smoking: 'room', hours: '08:00-22:00', img: 'https://images.unsplash.com/photo-1521017432531-fbd92d744264?auto=format&fit=crop&w=400&q=80', desc: '가성비 좋은 더치커피 전문점 (분점마다 흡연실 완비)' },
        { id: 216, name: '도토루 커피 (Doutor)', sub: 'cafe', area: 'namba', time: '도보 2분', price: '300엔~', rating: 4.0, smoking: 'room', hours: '07:30-22:00', img: 'https://images.unsplash.com/photo-1442154321678-204ad7290b05?auto=format&fit=crop&w=400&q=80', desc: '일본 어디에나 있는 표준 카페 (대부분 흡연실 완비)' },
        { id: 509, name: 'Cafe La Pause', sub: 'cafe', area: 'umeda', time: '전철 16분', price: '1,500엔~', rating: 3.8, res: false, hours: '11:00-22:00', img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&q=80', desc: '루쿠아 내 위치한 프렌치 수플레 팬케이크 명소' },
        { id: 510, name: 'HANNOC', sub: 'cafe', area: 'umeda', time: '전철 18분', price: '1,800엔~', rating: 4.5, res: false, hours: '11:00-21:00', img: 'https://images.unsplash.com/photo-1559925393-8be0ec41b513?auto=format&fit=crop&w=400&q=80', desc: '파티시에들의 예술적인 디저트를 맛볼 수 있는 트렌디 카페' },
        { id: 511, name: 'Canele du Japon', sub: 'bakery', area: 'namba', time: '도보 12분', price: '1,000엔~', rating: 3.6, res: false, hours: '10:00-19:00 (수요일 휴무)', img: 'https://images.unsplash.com/photo-1629115916087-7e8c114a24ed?auto=format&fit=crop&w=400&q=80', desc: '전통과 퓨전이 만난 오사카 까눌레 전문점' },
        { id: 512, name: 'Jun Kissa American', sub: 'cafe', area: 'namba', time: '도보 5분', price: '1,000엔~', rating: 3.7, res: false, smoking: true, hours: '09:00-22:30', img: 'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&w=400&q=80', desc: '쇼와 레트로 감성 순다방 (좌석 흡연 가능)' },
        { id: 513, name: 'Masahiko Ozumi Paris', sub: 'bakery', area: 'umeda', time: '전철 15분', price: '1,200엔~', rating: 3.9, res: false, hours: '10:00-20:00', img: 'https://images.unsplash.com/photo-1532499016263-f2c3e98df9c8?auto=format&fit=crop&w=400&q=80', desc: '털실 모양 털실케이크로 유명한 파리 감성 하이엔드 파티세리' },
        { id: 514, name: 'Pancake Cafe Mog', sub: 'cafe', area: 'namba', time: '도보 5분', price: '1,200엔~', rating: 3.6, res: false, hours: '11:00-21:00', img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?auto=format&fit=crop&w=400&q=80', desc: '가장 맛있는 팬케이크 전문점, 폭신한 식감이 일품' },
        { id: 515, name: 'COLONY by EQI', sub: 'cafe', area: 'shinsaibashi', time: '도보 5분', price: '1,500엔~', rating: 4.6, res: false, hours: '11:00-23:00', desc: '아메무라의 전설적인 수플레 팬케이크 맛집' },
        { id: 516, name: '행복의 팬케이크 난바점', sub: 'cafe', area: 'namba', time: '도보 5분', price: '1,400엔~', rating: 4.4, res: false, hours: '11:00-20:00', desc: '입안에서 사르르 녹는 구름 같은 식감의 팬케이크' },
        { id: 704, name: '시아와세노 팬케이크', sub: 'cafe', area: 'shinsaibashi', time: '도보 8분', price: '1,200엔', rating: 4.5, res: true, hours: '10:00-19:30', desc: '폭신폭신한 수플레 팬케이크의 정석 (예약 필수)' },
        { id: 705, name: '카카아카카 (Kakaakaka)', sub: 'bakery', area: 'namba', time: '도보 12분', price: '300엔~', rating: 4.2, res: false, hours: '10:00-18:00', desc: '귀여운 비주얼과 달콤한 맛의 도넛 전문점' },

        // --- Tabelog High Ranking Desserts ---
        { id: 710, name: '아시드라신 (Acidracines)', sub: 'bakery', area: 'tenma', time: '전철 25분', price: '600엔~', rating: 4.8, res: false, hours: '11:00-20:00 (수목 휴무)', desc: '오사카 타베로그 1위, 예술적인 쁘띠 갸또와 케이크' },
        { id: 711, name: '살롱 드 몽쉐르 (도지마롤)', sub: 'cafe', area: 'shinsaibashi', time: '도보 5분', price: '800엔~', rating: 4.5, res: false, hours: '10:00-20:00', desc: '전설적인 도지마롤 본점, 크림의 풍미가 차원이 다름' },
        { id: 712, name: '고칸 (GOKAN) 기타하마', sub: 'cafe', area: 'umeda', time: '전철 15분', price: '1,200엔~', rating: 4.6, res: true, hours: '09:30-19:30', desc: '근대 건축 문화재에서 즐기는 쌀로 만든 고급 디저트와 브런치' },
        { id: 713, name: '모토커피 (MOTO COFFEE)', sub: 'cafe', area: 'umeda', time: '전철 15분', price: '600엔~', rating: 4.4, res: false, hours: '12:00-18:30', desc: '강변 테라스 뷰가 환상적인 기타하마의 대표 감성 카페' },
        { id: 714, name: '하브스 (HARBS) 난바 파크스', sub: 'cafe', area: 'namba', time: '도보 12분', price: '900엔~', rating: 4.3, res: false, hours: '11:00-21:00', desc: '과일이 듬뿍 들어간 거대한 밀크레이프 케이크의 성지' },
        { id: 715, name: '리쿠로 오지상 치즈케이크', sub: 'bakery', area: 'namba', time: '도보 5분', price: '900엔', rating: 4.5, res: false, hours: '09:00-20:00', desc: '갓 구워 나온 탱글탱글한 치즈케이크, 가성비 최고의 선물' },
        { id: 716, name: '그로브 (Glove Cafe)', sub: 'cafe', area: 'tenma', time: '전철 20분', price: '500엔~', rating: 4.2, res: false, hours: '11:00-18:00', desc: '텐진바시 상점가의 숨은 명소, 엔틱한 분위기의 홍차 전문점' },
        { id: 717, name: 'PABLO (파블로) 미니', sub: 'bakery', area: 'namba', time: '도보 6분', price: '300엔~', rating: 4.1, res: false, hours: '11:00-21:00', desc: '한 손에 쏙 들어오는 진한 치즈 타르트' },
        { id: 718, name: '카코 바 (Cacao Bar)', sub: 'cafe', area: 'umeda', time: '전철 18분', price: '2,000엔~', rating: 4.7, res: true, hours: '13:00-19:00', desc: '초콜릿 장인이 선사하는 최고급 디저트 코스 (예약 필수)' },
        { id: 719, name: '모찌쇼 시즈쿠', sub: 'bakery', area: 'shinsaibashi', time: '도보 10분', price: '500엔~', rating: 4.6, res: false, hours: '10:30-18:00', desc: '현대적인 감각으로 재해석한 예술 같은 떡 디저트' },
        { id: 519, name: '번사이드 스트리트 카페', sub: 'cafe', area: 'shinsaibashi', time: '도보 6분', price: '1,400엔~', rating: 4.2, res: false, hours: '11:00-20:00', desc: '화이트 & 우드 톤의 감각적인 팬케이크 맛집' },
        { id: 520, name: '에그앤띵스', sub: 'cafe', area: 'shinsaibashi', time: '도보 4분', price: '1,500엔~', rating: 4.1, res: false, hours: '09:00-21:00', desc: '하와이안 감성의 산더미 생크림 팬케이크' }
    ],
    shopping: [
        // --- Shinsaibashi ---
        { id: 202, name: '다이마루 신사이바시', sub: 'dept', area: 'shinsaibashi', time: '도보 3분', rating: 4.3, hours: '10:00-20:00', img: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=400&q=80', desc: '럭셔리 명품과 포켓몬 센터/닌텐도 오사카가 공존' },
        { id: 213, name: '아메리카무라', sub: 'street', area: 'shinsaibashi', time: '도보 5분', rating: 4.0, hours: '11:00-20:00', img: 'https://images.unsplash.com/photo-1549110462-817db4957e8f?auto=format&fit=crop&w=400&q=80', desc: '오사카의 젊은 에너지가 넘치는 빈티지 패션 거리' },
        { id: 221, name: 'Kindal 신사이바시', sub: 'vintage', area: 'shinsaibashi', time: '도보 5분', rating: 4.4, hours: '11:00-20:00', img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=400&q=80', desc: '하이엔드 명품 브랜드의 중고 제품을 취급하는 전문샵' },
        { id: 225, name: 'JAM 아메리카무라점', sub: 'vintage', area: 'shinsaibashi', time: '도보 6분', rating: 4.5, hours: '11:00-20:00', img: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&w=400&q=80', desc: '압도적인 물량을 자랑하는 일본 최대 규모 빈티지 창고' },
        { id: 223, name: '2nd Street 신사이바시', sub: 'vintage', area: 'shinsaibashi', time: '도보 4분', rating: 4.1, hours: '11:00-21:00', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&q=80', desc: '가장 대중적이고 깔끔한 중고 의류 체인 메가 스토어' },
        { id: 214, name: 'BEAMS 신사이바시', sub: 'street', area: 'shinsaibashi', time: '도보 5분', rating: 4.2, hours: '11:00-20:00', img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=400&q=80', desc: '일본 대표 편집샵, 트렌디한 아이템과 세련된 셀렉션' },
        { id: 232, name: '디즈니 스토어 신사이바시', sub: 'hobby', area: 'shinsaibashi', time: '도보 3분', rating: 4.4, hours: '10:00-20:00', img: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?auto=format&fit=crop&w=400&q=80', desc: '귀여운 디즈니 굿즈가 가득한 대형 공식 스토어' },
        { id: 217, name: '유나이티드 애로우즈', sub: 'street', area: 'shinsaibashi', time: '도보 4분', rating: 4.3, hours: '11:00-20:00', img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=400&q=80', desc: '일본 하이엔드 편집샵의 자존심, 세련된 성인 패션의 정석' },
        { id: 209, name: '신사이바시 파르코 (PARCO)', sub: 'dept', area: 'shinsaibashi', time: '도보 3분', rating: 4.5, hours: '10:00-20:00', desc: '최신 트렌드와 팝업 스토어가 가득한 신사이바시의 핫한 쇼핑몰' },
        { id: 210, name: '유니클로/GU 신사이바시', sub: 'brand', area: 'shinsaibashi', time: '도보 4분', rating: 4.3, hours: '11:00-21:00', desc: '일본 최대 규모급 매장, 다양한 콜라보 라인업 구비' },
        { id: 241, name: '스투시 오사카 (Stussy)', sub: 'brand', area: 'namba', time: '도보 12분', rating: 4.4, hours: '11:00-20:00', desc: '오렌지 스트릿의 중심, 가장 핫한 스트릿 브랜드' },
        { id: 242, name: '휴먼 메이드 (Human Made)', sub: 'brand', area: 'shinsaibashi', time: '도보 7분', rating: 4.6, hours: '11:00-20:00', desc: '니고의 감성이 담긴 전 세계적 인기 브랜드' },
        { id: 243, name: '포터 (PORTER)', sub: 'brand', area: 'umeda', time: '전철 15분', rating: 4.5, hours: '10:00-20:00', desc: '일본 가방의 자존심, 정교한 품질의 요시다 포터' },
        { id: 244, name: '오니츠카 타이거', sub: 'brand', area: 'shinsaibashi', time: '도보 5분', rating: 4.4, hours: '11:00-21:00', desc: '레트로 스니커즈의 대명사, 신사이바시 대형 매장' },
        { id: 245, name: '메종 키츠네 오사카', sub: 'brand', area: 'namba', time: '도보 14분', rating: 4.3, hours: '11:00-20:00', desc: '여우 로고로 유명한 프렌치 감성 브랜드와 카페' },
        { id: 246, name: '비비안 웨스트우드 레드라벨', sub: 'brand', area: 'umeda', time: '전철 16분', rating: 4.2, hours: '10:00-20:00', desc: '일본 한정 레드라벨 제품 추천, 선물용으로 인기' },
        { id: 247, name: '이세이 미야케 (ISSEY MIYAKE)', sub: 'brand', area: 'shinsaibashi', time: '도보 5분', rating: 4.5, hours: '11:00-20:00', desc: '바오바오 백과 플리츠 플리즈의 독특한 실루엣' },
        { id: 248, name: '니들스 / 네펜데스 (Needles)', sub: 'brand', area: 'namba', time: '도보 15분', rating: 4.7, hours: '11:00-20:00', desc: '트랙 팬츠의 원조, 힙스터들의 성지 네펜데스 오사카' },
        { id: 249, name: '아크테릭스 (ARC\'TERYX)', sub: 'brand', area: 'shinsaibashi', time: '도보 6분', rating: 4.6, hours: '11:00-20:00', desc: '고성능 아웃도어의 대명사, 신사이바시 플래그십 스토어' },
        { id: 250, name: '메종 마르지엘라', sub: 'brand', area: 'shinsaibashi', time: '도보 5분', rating: 4.4, hours: '11:00-20:00', desc: '해체주의 패션의 정점, 타비 슈즈와 넘버링 액세서리' },

        // --- Drugstore & Lifestyle ---
        { id: 271, name: '마츠모토 키요시 신사이바시', sub: 'dept', area: 'shinsaibashi', time: '도보 2분', rating: 4.2, hours: '10:00-22:00', desc: '일본 최대 드럭스토어, 코스메틱과 의약품 쇼핑의 필수 코스' },
        { id: 272, name: '다이코쿠 드럭 (난바역)', sub: 'dept', area: 'namba', time: '도보 3분', rating: 4.4, hours: '09:00-23:00', desc: '가격 경쟁력이 뛰어난 드럭스토어, 면세 쇼핑객들의 성지' },
        { id: 273, name: '우메다 로프트 (LOFT)', sub: 'dept', area: 'umeda', time: '전철 15분', rating: 4.6, hours: '10:30-21:00', desc: '아이디어 인테리어 소품부터 문구류까지 가득한 감성 잡화점' },
        { id: 274, name: '도큐 핸즈 (Hands) 우메다', sub: 'dept', area: 'umeda', time: '전철 16분', rating: 4.5, hours: '10:00-21:00', desc: 'DIY와 생활 아이디어 잡화가 가득한 만능 라이프스타일 샵' },
        { id: 275, name: '3COINS +plus 난바', sub: 'brand', area: 'namba', time: '도보 8분', rating: 4.3, hours: '11:00-21:00', desc: '세련된 감성의 300엔 샵, 가성비 최고의 생활 인테리어용품' },
        { id: 276, name: '세리아 (Seria) 난바 파크스', sub: 'brand', area: 'namba', time: '도보 12분', rating: 4.4, hours: '11:00-21:00', desc: '100엔 샵 중 가장 디자인이 예쁘고 감성적인 제품이 많은 곳' },
        { id: 277, name: '요도바시 카메라 멀티미디어', sub: 'hobby', area: 'umeda', time: '전철 15분', rating: 4.5, hours: '09:30-22:00', desc: '우메다의 랜드마크, 모든 가전과 피규어, 캠핑용품이 집결된 메가 스토어' },
        { id: 278, name: '빅카메라 난바점', sub: 'hobby', area: 'namba', time: '도보 5분', rating: 4.4, hours: '10:00-21:00', desc: '난바 한가운데 위치한 테크와 덕질의 성지, 주류 코너도 매우 충실' },
        { id: 279, name: '다이소 (DAISO) 신사이바시', sub: 'brand', area: 'shinsaibashi', time: '도보 4분', rating: 4.3, hours: '10:00-21:00', desc: '일본 국민 100엔샵, 산리오 굿즈부터 아이디어 상품까지 총망라' },
        { id: 251, name: 'GU (지유) 신사이바시', sub: 'brand', area: 'shinsaibashi', time: '도보 3분', rating: 4.5, hours: '11:00-21:00', desc: '유니클로의 자매 브랜드, 트렌디한 옷을 파격적인 가격에' },
        { id: 252, name: 'ZARA (자라) 도톤보리', sub: 'brand', area: 'namba', time: '도보 5분', rating: 4.3, hours: '11:00-21:00', desc: '글로벌 SPA 브랜드의 상징, 가장 빠른 트렌드 반영' },
        { id: 253, name: 'H&M 신사이바시', sub: 'brand', area: 'shinsaibashi', time: '도보 2분', rating: 4.2, hours: '11:00-21:00', desc: '가성비와 디자인을 모두 잡은 스웨덴 대표 SPA' },
        { id: 254, name: '몽벨 (mont-bell) 오사카', sub: 'brand', area: 'namba', time: '도보 10분', rating: 4.7, hours: '11:00-21:00', desc: '일본의 아웃도어 자존심, 실용적이고 고품질인 캠핑용품' },
        { id: 255, name: '러쉬 (LUSH) 신사이바시', sub: 'brand', area: 'shinsaibashi', time: '도보 3분', rating: 4.6, hours: '11:00-21:00', desc: '향기로운 핸드메이드 코스메틱, 일본 한정판 제품 체크 필수' },
        { id: 256, name: '무인양품 (MUJI) 난바', sub: 'brand', area: 'namba', time: '도보 8분', rating: 4.5, hours: '11:00-21:00', desc: '심플함의 미학, 의류부터 가구, 식품까지 아우르는 라이프스타일' },
        { id: 257, name: 'ABC-MART GS 신사이바시', sub: 'brand', area: 'shinsaibashi', time: '도보 4분', rating: 4.3, hours: '11:00-21:00', desc: '프리미엄 스니커즈 라인업을 갖춘 그랜드 스테이지 매장' },
        { id: 258, name: 'ABC-MART 메가스테이지 우메다', sub: 'brand', area: 'umeda', time: '전철 15분', rating: 4.4, hours: '10:00-21:00', desc: '우메다 최대 규모 신발 전문 매장' },
        { id: 259, name: '룰루레몬 (lululemon) 신사이바시', sub: 'brand', area: 'shinsaibashi', time: '도보 5분', rating: 4.8, hours: '11:00-20:00', desc: '요가복의 샤넬, 쾌적한 매장과 다양한 라인업' },
        { id: 260, name: '유나이티드 애로우즈 우메다', sub: 'brand', area: 'umeda', time: '전철 15분', rating: 4.5, hours: '10:00-21:00', desc: '세련된 성인 패션의 정석, 루쿠아 내 입점' },
        { id: 261, name: '나이키 오사카', sub: 'brand', area: 'shinsaibashi', time: '도보 5분', rating: 4.5, hours: '11:00-20:00', desc: '신사이바시 대형 플래그십 스토어, 오사카 한정 티셔츠 추천' },
        { id: 262, name: '아디다스 브랜드 센터', sub: 'brand', area: 'shinsaibashi', time: '도보 4분', rating: 4.4, hours: '11:00-20:00', desc: '최신 퍼포먼스 및 오리지널 라인업 총망라' },

        // --- Namba / Dotonbori ---
        { id: 203, name: '난바 파크스', sub: 'dept', area: 'namba', time: '도보 15분', rating: 4.2, hours: '11:00-21:00', img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=400&q=80', desc: '옥상 정원이 아름다운 복합 쇼핑몰, 트렌디한 브랜드 다수' },
        { id: 211, name: '오렌지 스트릿 (호리에)', sub: 'street', area: 'namba', time: '도보 12분', rating: 4.5, hours: '11:00-20:00', img: 'https://images.unsplash.com/photo-1473186533642-424d91739775?auto=format&fit=crop&w=400&q=80', desc: '슈프림, 스투시 등 스트릿 브랜드와 가구/카페 거리' },
        { id: 212, name: '슈프림 오사카', sub: 'street', area: 'namba', time: '도보 12분', rating: 3.9, hours: '11:00-20:00', img: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=400&q=80', desc: '오렌지 스트릿의 중심, 스트릿 패션 매니아들의 필수 방문' },
        { id: 205, name: '돈키호테 도톤보리', sub: 'dept', area: 'namba', time: '도보 5분', rating: 4.1, hours: '24시간 영업', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80', desc: '24시간 기념품 쇼핑의 성지, 관람차도 탈 수 있음' },
        { id: 218, name: '베이프(BAPE) 오사카', sub: 'street', area: 'namba', time: '도보 14분', rating: 4.0, hours: '11:00-20:00', img: 'https://images.unsplash.com/photo-1627225924765-552d44cfbcda?auto=format&fit=crop&w=400&q=80', desc: '호리에 입구 위치, 유니크한 카무플라주 패턴의 스트릿 명가' },

        // --- Umeda ---
        { id: 201, name: '한큐 백화점 우메다', sub: 'dept', area: 'umeda', time: '전철 15분', rating: 4.4, hours: '10:00-20:00', img: 'https://images.unsplash.com/photo-1542283938-68ae2277d37a?auto=format&fit=crop&w=400&q=80', desc: '일본 최대 규모 백화점, 손수건 쇼핑 및 식품관 필수' },
        { id: 204, name: '루쿠아 1100', sub: 'dept', area: 'umeda', time: '전철 15분', rating: 4.3, hours: '10:30-20:30', img: 'https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?auto=format&fit=crop&w=400&q=80', desc: '우메다 역 직결, 2030 여성들에게 가장 인기 있는 쇼핑몰' },
        { id: 226, name: 'Second Street 우메다', sub: 'vintage', area: 'umeda', time: '전철 16분', rating: 4.2, hours: '11:00-21:00', img: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=400&q=80', desc: '우메다 지역 최대 규모 중고 브랜드 샵' },
        { id: 229, name: 'HEP FIVE', sub: 'dept', area: 'umeda', time: '전철 15분', rating: 4.3, hours: '11:00-21:00', img: 'https://images.unsplash.com/photo-1428515613728-6b4607e44263?auto=format&fit=crop&w=400&q=80', desc: '레드 컬러 관람차가 달린 우메다 랜드마크 쇼핑몰' },
        { id: 236, name: '라그타그(RAGTAG)', sub: 'vintage', area: 'umeda', time: '전철 15분', rating: 4.4, hours: '11:00-20:00', img: 'https://images.unsplash.com/photo-1441986236893-3b327660993a?auto=format&fit=crop&w=400&q=80', desc: '디자이너 브랜드 중고 의류를 엄선해서 판매하는 감각적인 곳' },
        { id: 206, name: '돈키호테 센니치마에점', sub: 'dept', area: 'namba', time: '도보 7분', rating: 4.2, hours: '24시간 영업', desc: '도톤보리점보다 덜 붐비는 쾌적한 쇼핑 명소' },
        { id: 207, name: '비코카메라 난바점', sub: 'hobby', area: 'namba', time: '도보 5분', rating: 4.3, hours: '10:00-21:00', desc: '가전부터 장난감, 화장품까지 없는 게 없는 대형 양판점' },
        { id: 208, name: '요도바시 카메라 우메다', sub: 'dept', area: 'umeda', time: '전철 15분', rating: 4.5, hours: '09:30-22:00', desc: '우메다의 중심, 일본 최대 규모의 가전 매장 및 복합몰' },
        { id: 241, name: '로프트 (LOFT) 우메다', sub: 'hobby', area: 'umeda', time: '전철 16분', rating: 4.4, hours: '10:30-21:00', desc: '아기자기한 소품과 문구류의 천국' },
        { id: 242, name: '도큐핸즈 우메다', sub: 'hobby', area: 'umeda', time: '전철 17분', rating: 4.3, hours: '10:00-20:00', desc: '각종 아이디어 상품과 라이프스타일 굿즈가 가득한 곳' }
    ],
    bars: [
        // --- Shinsaibashi / Namba (Clubs & Hunting) ---
        { id: 301, name: 'BAMBI (밤비)', sub: 'club', area: 'shinsaibashi', time: '도보 5분', price: '3,000엔~', rating: 4.2, hunting: true, smoking: true, hours: '22:00-05:00', img: 'https://images.unsplash.com/photo-1566737236500-c83d80142a9e?auto=format&fit=crop&w=400&q=80', desc: '신사이바시 No.1 클럽 (실내 흡연 가능)' },
        { id: 302, name: 'The Pink', sub: 'club', area: 'shinsaibashi', time: '도보 7분', price: '2,500엔~', rating: 4.3, hunting: true, smoking: true, hours: '22:00-05:00', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80', desc: '힙합 성지 (실내 흡연 가능)' },
        { id: 303, name: 'GALA RESORT', sub: 'club', area: 'namba', time: '도보 8분', price: '3,000엔~', rating: 4.1, hunting: true, smoking: true, hours: '22:00-05:00', img: 'https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=400&q=80', desc: '초대형 테마 클럽 (실내 흡연 가능)' },
        { id: 304, name: 'GIRAFFE JAPAN (2025 NEW)', sub: 'club', area: 'namba', time: '도보 5분', price: '3,000엔~', rating: 4.0, hunting: true, smoking: true, hours: '19:00-01:00', img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80', desc: '도톤보리 랜드마크 클럽 (실내 흡연 가능)' },
        { id: 305, name: 'Ammona (암모나)', sub: 'club', area: 'shinsaibashi', time: '도보 8분', price: '3,000엔~', rating: 4.2, hunting: true, smoking: true, hours: '23:00-04:00', img: 'https://images.unsplash.com/photo-1514525253361-b83f859b71c0?auto=format&fit=crop&w=400&q=80', desc: '외국인 인기 클럽 (실내 흡연 가능)' },
        { id: 311, name: 'Oriental Lounge 신사이바시', sub: 'hunting', area: 'shinsaibashi', time: '도보 5분', price: '남성 유료 / 여성 무료', rating: 4.5, hunting: true, smoking: true, hours: '18:00-05:00', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=400&q=80', desc: '럭셔리 페어링 라운지 (좌석 흡연 가능)' },
        { id: 312, name: 'JIS Namba', sub: 'hunting', area: 'namba', time: '도보 10분', price: '남성 시간당 요금', rating: 4.4, hunting: true, smoking: 'room', hours: '18:00-06:00', img: 'https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=400&q=80', desc: '세련된 헌팅 라운지 (흡연 전용실 완비)' },
        { id: 332, name: 'Bee 난바', sub: 'izakaya', area: 'namba', time: '도보 10분', price: '2,000엔~', rating: 4.1, hunting: true, smoking: true, hours: '17:00-05:00', img: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=400&q=80', desc: '다트가 있는 소셜 펍 (흡연 가능)' },

        // --- Umeda (Adult Clubs) ---
        { id: 306, name: 'OWL OSAKA', sub: 'club', area: 'umeda', time: '전철 15분', price: '3,000엔~', rating: 4.4, hunting: true, smoking: 'room', hours: '19:00-01:00', img: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb1?auto=format&fit=crop&w=400&q=80', desc: '우메다 성인 클럽 (흡연실 완비)' },
        { id: 307, name: 'PICCADILLY PREMIUM', sub: 'club', area: 'umeda', time: '전철 15분', price: '3,500엔~', rating: 4.5, hunting: false, smoking: 'room', hours: '21:00-03:00 (금토)', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80', desc: '영화관 개조 클럽 (흡연 전용실 있음)' },

        // --- Hidden Gems & Local Bars (Non-Hunting) ---
        { id: 324, name: '바 아카시 레코드', sub: 'izakaya', area: 'shinsaibashi', time: '도보 6분', price: '칵테일 800엔~', rating: 4.6, hunting: false, smoking: true, hours: '18:00-02:00', img: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&w=400&q=80', desc: 'LP 감성 바 (실내 흡연 가능)' },
        { id: 328, name: 'BAR Nayuta', sub: 'izakaya', area: 'shinsaibashi', time: '도보 5분', price: '1,500엔~', rating: 4.8, hunting: false, smoking: true, hours: '19:00-03:00', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=400&q=80', desc: '비밀스러운 믹솔로지 바 (흡연 가능)' },
        { id: 342, name: '바 레드 캐년', sub: 'izakaya', area: 'umeda', time: '전철 15분', price: '4,000엔~', rating: 4.7, hunting: false, smoking: true, hours: '18:00-02:00', img: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=400&q=80', desc: '고택 개조 드라이플라워 바 (흡연 가능)' },
        { id: 343, name: 'KAFFE BAR NELLIE', sub: 'izakaya', area: 'umeda', time: '전철 16분', price: '1,500엔~', rating: 4.5, hunting: false, smoking: true, hours: '14:00-24:00', img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&q=80', desc: '카페 스타일 레코드 바 (흡연 가능)' },
        { id: 361, name: 'The Northern Bar', sub: 'izakaya', area: 'umeda', time: '전철 17분', price: '3,500엔~', rating: 4.6, hunting: false, smoking: true, hours: '17:00-23:00', img: 'https://images.unsplash.com/photo-1541535881962-3bb380b08458?auto=format&fit=crop&w=400&q=80', desc: '클래식 위스키 바 (좌석 흡연 가능)' },
        { id: 362, name: '이코이 (Ikoi)', sub: 'izakaya', area: 'shinsaibashi', time: '도보 6분', price: '2,000엔~', rating: 4.3, hunting: false, smoking: true, hours: '17:00-24:00', img: 'https://images.unsplash.com/photo-1550966842-2b667e41f021?auto=format&fit=crop&w=400&q=80', desc: '조용하고 아늑한 로컬 선술집 (흡연 가능)' },

        // --- Ura Namba & Tenma Local Spots ---
        { id: 321, name: '기후야 (Gifuya)', sub: 'izakaya', area: 'tenma', time: '전철 20분', price: '잔술 100엔~', rating: 4.1, hunting: false, smoking: true, hours: '15:00-23:00', img: 'https://images.unsplash.com/photo-1508615070457-7baeba4003ab?auto=format&fit=crop&w=400&q=80', desc: '텐마의 전설 노포 (좌석 흡연 가능)' },
        { id: 351, name: '우오야 히데조 입식', sub: 'izakaya', area: 'namba', time: '도보 10분', price: '2,000엔~', rating: 4.5, hunting: false, smoking: true, hours: '17:00-24:00', img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=400&q=80', desc: '우라난바 힙한 타치노미 (흡연 가능)' },
        { id: 330, name: '토리진 본점', sub: 'izakaya', area: 'namba', time: '도보 12분', price: '3,500엔~', rating: 4.4, hunting: false, smoking: 'room', hours: '17:00-24:00', img: 'https://images.unsplash.com/photo-1532634753-ff56801048ca?auto=format&fit=crop&w=400&q=80', desc: '야키토리 로컬 명소 (흡연실 완비)' },
        { id: 331, name: '나루토야', sub: 'izakaya', area: 'namba', time: '도보 10분', price: '4,000엔~', rating: 4.5, hunting: false, smoking: 'room', hours: '17:00-23:30', img: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=400&q=80', desc: '야채말이 꼬치구이 (흡연실 있음)' },
        { id: 313, name: 'SWITCH', sub: 'hunting', area: 'shinsaibashi', time: '도보 5분', price: '2,000엔~', rating: 4.4, hunting: true, smoking: true, hours: '18:00-05:00', desc: '세련된 소셜 헌팅 바 (흡연 가능)' },
        { id: 314, name: 'Public Stand 난바', sub: 'hunting', area: 'namba', time: '도보 8분', price: '시간당 정액제', rating: 4.2, hunting: true, smoking: true, hours: '18:00-05:00', desc: '무제한 드링크 스탠딩 바 (실내 흡연 가능)' },
        { id: 322, name: '텐마 타치노미 세븐', sub: 'izakaya', area: 'tenma', time: '전철 20분', price: '1,000엔~', rating: 4.1, hunting: false, smoking: true, hours: '15:00-23:00', desc: '활기찬 시장 타치노미 (흡연 가능)' },
        { id: 323, name: '야키토리 마사카', sub: 'izakaya', area: 'namba', time: '도보 10분', price: '3,000엔~', rating: 4.4, hunting: false, smoking: true, hours: '17:00-24:00', desc: '가성비 야키토리 (흡연 가능)' },
        { id: 325, name: '바 나카마 (Nakama)', sub: 'izakaya', area: 'shinsaibashi', time: '도보 5분', price: '2,000엔~', rating: 4.5, hunting: false, smoking: true, hours: '19:00-03:00', desc: '현지인 로컬 바 (흡연 가능)' },
        { id: 326, name: '바 프라잉 팟', sub: 'izakaya', area: 'shinsaibashi', time: '도보 6분', price: '1,500엔~', rating: 4.6, hunting: false, smoking: true, hours: '19:00-03:00', desc: '다락방 감성 바 (흡연 가능)' },
        { id: 327, name: '바 카오스 (Chaos)', sub: 'izakaya', area: 'namba', time: '도보 9분', price: '1,000엔~', rating: 4.3, hunting: false, smoking: true, hours: '19:00-03:00', desc: '수제 맥주 바 (흡연 가능)' },
        { id: 329, name: '아카가키야 (Akagakiya)', sub: 'izakaya', area: 'namba', time: '도보 4분', price: '2,000엔~', rating: 4.1, res: false, smoking: 'room', hours: '11:00-21:00', desc: '정통 타치노미 (흡연 전용실 완비)' },
        { id: 371, name: 'HUB 난바 에비스바시점', sub: 'social', area: 'namba', time: '도보 5분', price: '1,000엔~', rating: 4.2, hunting: true, smoking: 'room', hours: '12:00-23:30 (금토 익일 01:00)', desc: '영국식 펍 (흡연실 완비)' },
        { id: 372, name: 'ASOBIBAR 신사이바시', sub: 'social', area: 'shinsaibashi', time: '도보 6분', price: '남성 유료 / 여성 무료', rating: 4.4, hunting: true, smoking: true, hours: '18:00-05:00', desc: '시스템 바 (흡연 가능)' },
        { id: 373, name: '더 콜 바 (The Cole Bar)', sub: 'social', area: 'namba', time: '도보 8분', price: '2,000엔~', rating: 4.3, hunting: true, smoking: true, hours: '19:00-04:00', desc: '소셜 바 (흡연 가능)' },
        { id: 374, name: '쿠지라 (櫛羅) 우라난바', sub: 'izakaya', area: 'namba', time: '도보 10분', price: '2,000엔~', rating: 4.1, hunting: true, smoking: true, hours: '16:00-23:00', desc: '니혼슈 타치노미 (흡연 가능)' },
        { id: 375, name: '신 코바치 호노오 (天満)', sub: 'izakaya', area: 'tenma', time: '전철 20분', price: '2,500엔~', rating: 4.5, hunting: true, smoking: true, hours: '17:00-24:00', desc: '텐마 핫플 (흡연 가능)' },
        { id: 376, name: 'luv wine 텐마 본점', sub: 'social', area: 'tenma', time: '전철 22분', price: '2,000엔~', rating: 4.4, hunting: true, smoking: true, hours: '17:00-24:00', desc: '노상 와인바 (흡연 가능)' },
        { id: 377, name: '아즈키이로노 마커스', sub: 'izakaya', area: 'tenma', time: '전철 20분', price: '2,000엔~', rating: 4.6, hunting: true, smoking: true, hours: '15:00-23:00', desc: '텐마 1위 타치노미 (흡연 가능)' },
        { id: 378, name: '오리엔탈 라운지 텐마점', sub: 'hunting', area: 'tenma', time: '전철 20분', price: '남성 시간당 요금', rating: 4.5, hunting: true, smoking: true, hours: '18:00-05:00', desc: '프리미엄 라운지 (흡연 가능)' },
        { id: 379, name: '자 디제스트 (Bar DiJest)', sub: 'social', area: 'namba', time: '도보 7분', price: '1,500엔~', rating: 4.2, hunting: true, smoking: true, hours: '19:00-05:00', desc: '스포츠바 (흡연 가능)' },
        { id: 711, name: '한신포차 오사카 (K-Pocha)', sub: 'hunting', area: 'shinsaibashi', time: '도보 7분', price: '헌팅/주류 중심', rating: 4.5, hunting: true, smoking: 'room', hours: '17:00-05:00', desc: 'K-헌팅포차 (흡연실 완비)' },
        { id: 712, name: '소주한잔 오사카 (임창정)', sub: 'hunting', area: 'shinsaibashi', time: '도보 8분', price: '소주/안주 세트', rating: 4.4, hunting: true, smoking: 'room', hours: '17:00-05:00', desc: '소셜 포차 (흡연실 완비)' },

        // --- Nomihoudai (All-You-Can-Drink) Gems ---
        { id: 381, name: '토리키조쿠 (Torikizoku) 도톤보리', sub: 'nomihoudai', area: 'namba', time: '도보 5분', price: '3,600엔 (타베노미)', rating: 4.3, hunting: false, smoking: true, hours: '17:00-05:00', desc: '일본 국민 야키토리 체인. 가성비 최강 2시간 무제한 먹고 마시기 (흡연 가능)' },
        { id: 382, name: '0초 레몬사와 센다이 호르몬', sub: 'nomihoudai', area: 'namba', time: '도보 8분', price: '500엔/60분', rating: 4.5, hunting: false, smoking: true, hours: '17:00-23:00', desc: '테이블마다 레몬사와 수도꼭지가 설치된 0초 리필 천국. 호르몬 구이와 환상 궁합 (흡연 가능)' },
        { id: 383, name: '바 문워크 (Bar Moon Walk)', sub: 'nomihoudai', area: 'shinsaibashi', time: '도보 6분', price: '안주 200엔~', rating: 4.4, hunting: false, smoking: true, hours: '18:00-05:00', desc: '모든 칵테일 200엔대의 충격적인 가성비. 영화 밤은 짧아 걸어 아가씨야 배경지 (흡연 가능)' },
        { id: 384, name: '쿠랜드 사케 마켓 (Kurand)', sub: 'nomihoudai', area: 'umeda', time: '전철 15분', price: '3,300엔 (무제한)', rating: 4.7, hunting: false, smoking: false, hours: '17:00-23:00', desc: '100종류 이상의 프리미엄 사케, 과실주를 시간 무제한으로 마시는 꿈의 공간 (외부 음식 반입 가능)' },
        { id: 385, name: '신지다이 (Shinjidai) 오사카', sub: 'nomihoudai', area: 'namba', time: '도보 10분', price: '생맥주 190엔~', rating: 4.2, hunting: false, smoking: true, hours: '17:00-05:00', desc: '전설의 닭껍질 튀김 50엔, 생맥주 190엔의 압도적 가성비 (흡연 가능)' },
        { id: 386, name: '니혼슈 우나기다니', sub: 'nomihoudai', area: 'shinsaibashi', time: '도보 5분', price: '2,000엔 (60분)', rating: 4.6, hunting: false, smoking: true, hours: '15:00-24:00', desc: '우나기다니 골목의 숨은 사케 명소. 전국 명주 무제한 시음 (흡연 가능)' },
        { id: 387, name: '280엔 야키토리 (Niwatori)', sub: 'nomihoudai', area: 'namba', time: '도보 7분', price: '전메뉴 280엔', rating: 4.0, hunting: false, smoking: true, hours: '17:00-03:00', desc: '모든 메뉴 280엔 균일가. 지갑 걱정 없이 즐기는 로컬 술집 (흡연 가능)' },
        // --- Nomihoudai (All-You-Can-Drink) Gems ---
        { id: 381, name: '토리키조쿠 (Torikizoku) 도톤보리', sub: 'nomihoudai', area: 'namba', time: '도보 5분', price: '3,600엔 (타베노미)', rating: 4.3, hunting: false, smoking: true, hours: '17:00-05:00', desc: '일본 국민 야키토리 체인. 가성비 최강 2시간 무제한 먹고 마시기 (흡연 가능)' },
        { id: 382, name: '0초 레몬사와 센다이 호르몬', sub: 'nomihoudai', area: 'namba', time: '도보 8분', price: '500엔/60분', rating: 4.5, hunting: false, smoking: true, hours: '17:00-23:00', desc: '테이블마다 레몬사와 수도꼭지가 설치된 0초 리필 천국. 호르몬 구이와 환상 궁합 (흡연 가능)' },
        { id: 383, name: '바 문워크 (Bar Moon Walk)', sub: 'nomihoudai', area: 'shinsaibashi', time: '도보 6분', price: '안주 200엔~', rating: 4.4, hunting: false, smoking: true, hours: '18:00-05:00', desc: '모든 칵테일 200엔대의 충격적인 가성비. 영화 밤은 짧아 걸어 아가씨야 배경지 (흡연 가능)' },
        { id: 384, name: '쿠랜드 사케 마켓 (Kurand)', sub: 'nomihoudai', area: 'umeda', time: '전철 15분', price: '3,300엔 (무제한)', rating: 4.7, hunting: false, smoking: false, hours: '17:00-23:00', desc: '100종류 이상의 프리미엄 사케, 과실주를 시간 무제한으로 마시는 꿈의 공간 (외부 음식 반입 가능)' },
        { id: 385, name: '신지다이 (Shinjidai) 오사카', sub: 'nomihoudai', area: 'namba', time: '도보 10분', price: '생맥주 190엔~', rating: 4.2, hunting: false, smoking: true, hours: '17:00-05:00', desc: '전설의 닭껍질 튀김 50엔, 생맥주 190엔의 압도적 가성비 (흡연 가능)' },
        { id: 386, name: '니혼슈 우나기다니', sub: 'nomihoudai', area: 'shinsaibashi', time: '도보 5분', price: '2,000엔 (60분)', rating: 4.6, hunting: false, smoking: true, hours: '15:00-24:00', desc: '우나기다니 골목의 숨은 사케 명소. 전국 명주 무제한 시음 (흡연 가능)' },
        { id: 387, name: '280엔 야키토리 (Niwatori)', sub: 'nomihoudai', area: 'namba', time: '도보 7분', price: '전메뉴 280엔', rating: 4.0, hunting: false, smoking: true, hours: '17:00-03:00', desc: '모든 메뉴 280엔 균일가. 지갑 걱정 없이 즐기는 로컬 술집 (흡연 가능)' },
    ],
    activities: [
        // --- Shinsaibashi / Namba ---
        { id: 431, name: '오사카 고카트 체험', sub: 'others', area: 'namba', time: '도보 10분', price: '7,000엔~', rating: 4.9, hours: '10:00-21:00', img: 'https://images.unsplash.com/photo-1511994298241-608e28f14f66?auto=format&fit=crop&w=400&q=80', desc: '도로 위를 달리는 슈퍼카트, 오사카 거리를 누비는 쾌감' },
        { id: 432, name: '도톤보리 리버 크루즈', sub: 'others', area: 'namba', time: '도보 5분', price: '1,200엔~', rating: 4.3, hours: '11:00-21:00', img: 'https://images.unsplash.com/photo-1549110462-817db4957e8f?auto=format&fit=crop&w=400&q=80', desc: '강 위에서 즐기는 오사카의 화려한 네온사인과 글리코상' },
        { id: 437, name: '닌자 체험 카페', sub: 'others', area: 'namba', time: '도보 10분', price: '3,000엔~', rating: 4.7, hours: '10:00-20:00', img: 'https://images.unsplash.com/photo-1551024739-78e9d60c45ca?auto=format&fit=crop&w=400&q=80', desc: '닌자 복을 입고 수리검 던지기 체험! SNS 인증샷 명소' },
        { id: 411, name: '스파월드 세계의 대온천', sub: 'onsen', area: 'namba', time: '전철 12분', price: '1,500엔~', rating: 4.2, hours: '10:00-익일 08:45', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=400&q=80', desc: '전 세계 테마 온천이 모인 거대 휴양소, 슬라이드 완비' },
        { id: 441, name: '라운드원 센니치마에', sub: 'sports', area: 'namba', time: '도보 8분', price: '2,000엔~', rating: 4.1, hours: '24시간 영업', img: 'https://images.unsplash.com/photo-1538356111083-74819827bbbb?auto=format&fit=crop&w=400&q=80', desc: '볼링, 배팅, 다트 등 스포츠와 게임을 한번에 즐기는 곳' },

        // --- Umeda ---
        { id: 404, name: '우메다 스카이빌딩', sub: 'theme', area: 'umeda', time: '전철 18분', price: '1,500엔~', rating: 4.5, hours: '09:30-22:30', img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80', desc: '공중정원에서 바라보는 오사카 최고의 야경 명소' },
        { id: 421, name: '골드짐 오사카 우메다', sub: 'sports', area: 'umeda', time: '전철 15분', price: '1일권 2,860엔', rating: 4.5, hours: '07:00-23:30 (일요일 20:00)', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80', desc: '헬스 매니아 성지, 오사카 최고의 운동 시설' },
        { id: 422, name: '우메다 배팅 돔', sub: 'sports', area: 'umeda', time: '전철 16분', price: '400엔~', rating: 4.3, hours: '10:00-23:00', img: 'https://images.unsplash.com/photo-1505236858219-8359eb29e3a9?auto=format&fit=crop&w=400&q=80', desc: '스트레스 해소에 최고! 남녀노소 즐기는 야구 배팅 센터' },

        // --- Osaka Bay / Others ---
        { id: 401, name: '유니버설 스튜디오 재팬', sub: 'theme', area: 'osakabay', time: '전철 30분', price: '8,000엔~', rating: 4.8, hours: '09:00-21:00 (변동)', img: 'https://images.unsplash.com/photo-1513413173474-264ff97f6e29?auto=format&fit=crop&w=400&q=80', desc: '설명이 필요 없는 오사카 최고의 테마파크, 마리오 월드 필수' },
        { id: 402, name: '오사카 성', sub: 'theme', area: 'osakabay', time: '전철 20분', price: '600엔~', rating: 4.4, hours: '09:00-17:00', img: 'https://images.unsplash.com/photo-1528143105747-d58611986427?auto=format&fit=crop&w=400&q=80', desc: '오사카의 랜드마크, 밤에는 일루미네이션이 아름다움' },
        { id: 403, name: '가이유칸 수족관', sub: 'theme', area: 'osakabay', time: '전철 35분', price: '2,700엔~', rating: 4.6, hours: '10:00-20:00', img: 'https://images.unsplash.com/photo-1509721148483-4cbb3ca52914?auto=format&fit=crop&w=400&q=80', desc: '세계 최대 규모의 수족관, 거대 고래상어를 볼 수 있음' },
        { id: 412, name: '소라니와 온천', sub: 'onsen', area: 'osakabay', time: '전철 25분', price: '2,500엔~', rating: 4.3, hours: '11:00-23:00', img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80', desc: '유카타 입고 일본 정원을 걷는 체험형 온천' },
        { id: 436, name: '헬기 야경 투어', sub: 'others', area: 'osakabay', time: '전철 40분', price: '15,000엔~', rating: 4.9, hours: '16:00-20:00 (예약제)', img: 'https://images.unsplash.com/photo-1464746109310-720137a1c435?auto=format&fit=crop&w=400&q=80', desc: '오사카 시내를 상공에서 내려다보는 럭셔리 익스피리언스' },
        { id: 405, name: '헵파이브 대관람차', sub: 'theme', area: 'umeda', time: '전철 15분', price: '600엔', rating: 4.4, hours: '11:00-23:00', desc: '오사카 시내를 360도로 조망할 수 있는 정열의 레드 관람차' },
        { id: 406, name: '츠텐카쿠 타워 슬라이드', sub: 'theme', area: 'osakabay', time: '전철 22분', price: '1,000엔', rating: 4.5, hours: '10:00-20:00', desc: '츠텐카쿠 타워에서 쏟아져 내려오는 짜릿한 미끄럼틀 체험' },
        { id: 407, name: '아베노 하루카스 300', sub: 'theme', area: 'osakabay', time: '전철 18분', price: '1,500엔', rating: 4.8, hours: '09:00-22:00', desc: '일본 최고층 빌딩에서 감상하는 환상적인 스카이라인' },
        { id: 408, name: '오사카 생활의 금석관', sub: 'theme', area: 'tenma', time: '전철 20분', price: '600엔', rating: 4.3, hours: '10:00-17:00 (화요일 휴무)', desc: '에도 시대 오사카 거리를 재현한 실내 박물관 및 기모노 체험' },
        { id: 413, name: '나니와노유 온천', sub: 'onsen', area: 'tenma', time: '전철 25분', price: '800엔', rating: 4.4, hours: '08:00-01:00', desc: '빌딩 옥상에서 즐기는 시원한 노천탕과 천연 온천' },

        // --- Hobby & Lifestyle Culture ---
        { id: 441, name: '애니메이트 오사카 닛폰바시', sub: 'theme', area: 'namba', time: '도보 13분', rating: 4.5, hours: '11:00-20:00', desc: '덴덴타운의 중심, 일본 최대급 애니메이션 굿즈 전문점' },
        { id: 442, name: '만다라케 그랜드 카오스', sub: 'theme', area: 'shinsaibashi', time: '도보 6분', rating: 4.4, hours: '12:00-20:00', desc: '빈티지 장난감과 중고 피규어의 보물 창고 (아메무라 위치)' },
        { id: 443, name: '츠타야 서점 (우메다 메이)', sub: 'others', area: 'umeda', time: '전철 16분', rating: 4.7, hours: '10:30-21:00', desc: '루쿠아 1100 내 위치. 스타벅스와 결합된 세련된 독서 테마 공간' },
        { id: 444, name: '덴덴타운 거리', sub: 'theme', area: 'namba', time: '도보 15분', rating: 4.3, hours: '11:00-19:00 (상점별 상이)', desc: '오사카의 아키하바라. 전자제품부터 서브컬처까지 아우르는 덕질 로드' },
        { id: 445, name: '다이코쿠유 (동네 온천)', sub: 'onsen', area: 'namba', time: '도보 10분', price: '490엔', rating: 4.2, hours: '14:00-23:30 (월요일 휴무)', desc: '관광지 온천이 아닌 일본 현지 목욕탕 문화를 체험할 수 있는 정겨운 센토' },
        { id: 446, name: '타워 레코드 난바 파크스점', sub: 'others', area: 'namba', time: '도보 12분', rating: 4.5, hours: '11:00-21:00', desc: '일본 최대의 음반 매장, K-POP부터 J-POP까지 방대한 컬렉션' },
    ],
    convenience: [
        // --- Seven-Eleven ---
        { id: 801, name: '계란말이 샌드위치', sub: 'seven', area: 'all', time: '가까운 지점', price: '300엔', rating: 4.8, hours: '24시간', desc: '세븐일레븐 부동의 1위. 푹신한 식감의 타마고산도 (한국인 필수 추천)' },
        { id: 802, name: '바스크 치즈케이크 미니', sub: 'seven', area: 'all', time: '가까운 지점', price: '250엔', rating: 4.7, hours: '24시간', desc: 'SNS 화제의 디저트. 진한 치즈 풍미가 일품 (현지인 강력 추천)' },
        { id: 803, name: '나나치키 (후라이드 치킨)', sub: 'seven', area: 'all', time: '가까운 지점', price: '220엔', rating: 4.6, hours: '24시간', desc: '편의점 치킨 전쟁의 승자. 겉바속촉의 정석' },
        { id: 804, name: '명란마요 오니기리', sub: 'seven', area: 'all', time: '가까운 지점', price: '160엔', rating: 4.5, hours: '24시간', desc: '스테디셀러. 톡톡 터지는 명란과 마요네즈의 환상 조화' },
        { id: 805, name: '프리미엄 슈크림', sub: 'seven', area: 'all', time: '가까운 지점', price: '180엔', rating: 4.6, hours: '24시간', desc: '세븐일레븐의 자존심. 진한 커스터드 크림이 폭발함' },
        { id: 806, name: '말차 티라미수 와라비', sub: 'seven', area: 'all', time: '가까운 지점', price: '210엔', rating: 4.5, hours: '24시간', desc: '말차 덕후라면 필수. 떡과 티라미수의 오묘한 조화' },

        // --- Lawson ---
        { id: 811, name: '모찌 식감 롤 (모찌롤)', sub: 'lawson', area: 'all', time: '가까운 지점', price: '350엔', rating: 4.9, hours: '24시간', desc: '로손 = 모찌롤. 쫀득한 빵과 진한 크림의 인생 디저트' },
        { id: 812, name: '가라아게군 (레귤러/레드)', sub: 'lawson', area: 'all', time: '가까운 지점', price: '240엔', rating: 4.7, hours: '24시간', desc: '로손의 상징. 한입 크기로 먹기 편한 닭튀김 (레드맛 추천)' },
        { id: 813, name: '쟈지 우유 푸딩', sub: 'lawson', area: 'all', time: '가까운 지점', price: '180엔', rating: 4.8, hours: '24시간', desc: '인생 푸딩으로 불리는 진한 우유 맛 (한국인 여행객 원픽)' },
        { id: 814, name: '악마의 초코케이크', sub: 'lawson', area: 'all', time: '가까운 지점', price: '280엔', rating: 4.6, hours: '24시간', desc: '이름값 하는 진한 당 충전의 끝판왕' },
        { id: 815, name: '모리한 협업 말차 모찌롤', sub: 'lawson', area: 'all', time: '가까운 지점', price: '420엔', rating: 4.7, hours: '24시간', desc: '전통 찻집 모리한과 협업한 프리미엄 말차 시리즈' },
        { id: 816, name: '멜론빵', sub: 'lawson', area: 'all', time: '가까운 지점', price: '150엔', rating: 4.3, hours: '24시간', desc: '겉은 바삭하고 속은 촉촉한 일본 편의점 정석 멜론빵' },

        // --- FamilyMart ---
        { id: 821, name: '수플레 푸딩', sub: 'family', area: 'all', time: '가까운 지점', price: '290엔', rating: 4.8, hours: '24시간', desc: '부드러운 수플레와 달콤한 푸딩을 한 번에 (현지인 인기템)' },
        { id: 822, name: '패미치키', sub: 'family', area: 'all', time: '가까운 지점', price: '220엔', rating: 4.7, hours: '24시간', desc: '패밀리마트의 자존심. 육즙 가득한 순살 치킨' },
        { id: 823, name: '스팸 주먹밥', sub: 'family', area: 'all', time: '가까운 지점', price: '250엔', rating: 4.4, hours: '24시간', desc: '든든한 한 끼 식사로 최고. 짭조름한 스팸의 매력' },
        { id: 824, name: '더블 크림 슈', sub: 'family', area: 'all', time: '가까운 지점', price: '180엔', rating: 4.5, hours: '24시간', desc: '생크림과 커스터드가 꽉 찬 완성도 높은 디저트' },
        { id: 825, name: '쿠키 & 크림 슈', sub: 'family', area: 'all', time: '가까운 지점', price: '220엔', rating: 4.6, hours: '24시간', desc: '쿠키의 바삭함과 크림의 달콤함이 완벽 조화 (냉동 추천)' },
        { id: 826, name: '니쿠망 (고기만두)', sub: 'family', area: 'all', time: '가까운 지점', price: '160엔', rating: 4.4, hours: '24시간', desc: '겨울 필수템! 따끈하고 육즙 가득한 왕만두' },
        { id: 827, name: '야키소바 빵', sub: 'family', area: 'all', time: '가까운 지점', price: '180엔', rating: 4.1, hours: '24시간', desc: '탄수화물 + 탄수화물의 정석. 일본 서브컬처 필수 등장 아이템' },

        // --- Common / Others ---
        { id: 831, name: '글리코 푸칭 푸딩', sub: 'all', area: 'all', time: '가까운 지점', price: '150엔', rating: 4.5, hours: '24시간', desc: '접시에 뒤집어 푸칭! 하고 깨먹는 국민 푸딩' },
        { id: 832, name: '닛신 UFO 야끼소바', sub: 'all', area: 'all', time: '가까운 지점', price: '220엔', rating: 4.6, hours: '24시간', desc: '일본 컵라면의 대명사. 진한 소스 맛이 특징' },
        { id: 833, name: '쿠시 당고 (간장)', sub: 'all', area: 'all', time: '가까운 지점', price: '120엔', rating: 4.3, hours: '24시간', desc: '달콤 짭짤한 간장 소스가 발라진 쫀득한 떡 꼬치' },
        { id: 834, name: '아이스노미 (포도/복숭아)', sub: 'all', area: 'all', time: '가까운 지점', price: '160엔', rating: 4.7, hours: '24시간', desc: '진짜 과일을 얼린 듯한 한입 크기 아이스크림 구슬' },
        { id: 835, name: '이로하스 복숭아물', sub: 'all', area: 'all', time: '가까운 지점', price: '130엔', rating: 4.8, hours: '24시간', desc: '물인 줄 알았는데 복숭아 주스 맛? 한국인 여행객 1위 음료' },
        { id: 836, name: '아사히 생맥주 캔', sub: 'all', area: 'all', time: '가까운 지점', price: '280엔', rating: 4.9, hours: '24시간', desc: '뚜껑을 열면 거품이 올라오는 화제의 거품 맥주' }
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
    setupRecommendation();
    setupShoppingTracker();
    setupWorldCup();
    setupReservationList();
    setupSmokingInfo();
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
        convenience: { title: '편의점 털기', desc: '세븐일레븐, 로손, 패밀리마트 필수 먹거리 총정리.' },
        map: { title: '숙소 위치', desc: '안락한 휴식을 위한 숙소 정보.' }
    };

    const s = settings[sectionId] || { title: '환영합니다!', desc: '' };
    document.getElementById('section-title').textContent = s.title;
    document.getElementById('section-desc').textContent = s.desc;

    // Show/Hide totals badge based on section
    const badge = document.getElementById('place-count-badge');
    if (badge) badge.style.display = (sectionId === 'dashboard') ? 'inline-flex' : 'none';

    saveToLocalStorage();
    renderSection(sectionId);
}

function setupEventListeners() {
    document.getElementById('add-restaurant-btn')?.addEventListener('click', () => openModal('restaurants'));
    document.getElementById('add-dessert-btn')?.addEventListener('click', () => openModal('desserts'));
    document.getElementById('add-shopping-btn')?.addEventListener('click', () => openModal('shopping'));
    document.getElementById('add-activity-btn')?.addEventListener('click', () => openModal('activities'));
    document.getElementById('add-bar-btn')?.addEventListener('click', () => openModal('bars'));
    document.getElementById('add-convenience-btn')?.addEventListener('click', () => openModal('convenience'));

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
    document.body.classList.add('no-scroll'); // Lock scroll
}

function closeModal() {
    document.getElementById('modal-container').classList.add('hidden');
    document.body.classList.remove('no-scroll'); // Unlock scroll
}

function saveItem() {
    const name = document.getElementById('item-name').value;
    const menu = document.getElementById('item-menu').value;
    const price = document.getElementById('item-price').value;
    const res = document.getElementById('item-res').checked;
    const smoking = document.getElementById('item-smoking').checked;
    const map = document.getElementById('item-map').value;
    const desc = document.getElementById('item-desc').value;

    if (!name) return alert('이름을 입력해주세요!');

    const finalMap = map || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ' 오사카')}`;

    // Default values
    const defaultSub = (currentAddingType === 'restaurants') ? 'others' : (currentAddingType === 'desserts' ? 'cafe' : (currentAddingType === 'bars' ? 'izakaya' : (currentAddingType === 'convenience' ? 'seven' : 'others')));

    // Set default area to 'all' for convenience store items
    const area = (currentAddingType === 'convenience') ? 'all' : 'shinsaibashi';
    const time = (currentAddingType === 'convenience') ? '가까운 지점' : '도보 10분';

    state[currentAddingType].push({ id: Date.now(), name, menu, price, res: res || false, smoking: smoking || false, map: finalMap, desc, sub: defaultSub, area: area, time: time, rating: 4.0 });
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
    renderConvenience();
}

function renderSection(sectionId) {
    const map = { restaurants: renderRestaurants, desserts: renderDesserts, shopping: renderShopping, activities: renderActivities, bars: renderBars, convenience: renderConvenience };
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
                    ${item.res ? '<span class="card-tag-res">예약필수</span>' : (item.hunting ? '<span class="card-tag-hunting">헌팅/클럽</span>' : `<span class="card-category">${item.sub}</span>`)}
                    ${item.smoking ? `<span class="card-tag-smoking ${item.smoking === 'room' ? 'room' : 'ok'}" title="${item.smoking === 'room' ? '실내 흡연실 완비' : '전 좌석 흡연 가능'}">🚬 ${item.smoking === 'room' ? '흡연실있음' : '흡연가능'}</span>` : ''}
                    ${getRatingHtml(item.rating)}
                </div>
            </div>
            <h4>${item.name}</h4>
            ${type !== 'convenience' ? `<div class="travel-time-badge"><i data-lucide="navigation"></i> 숙소에서 ${item.time}</div>` : ''}
            
            ${item.hours ? `<div class="card-info-row"><span class="label">운영시간</span><span class="val" style="color:var(--secondary)">${item.hours}</span></div>` : ''}
            ${item.menu ? `<div class="card-info-row"><span class="label">대표메뉴</span><span class="val">${item.menu}</span></div>` : ''}
            ${item.price ? `<div class="card-info-row"><span class="label">비용/가격</span><span class="val price">${item.price}</span></div>` : ''}
            
            <p class="card-desc">${item.desc}</p>
            <div class="card-footer" style="margin-top:auto; display:flex; justify-content:space-between; align-items:center;">
                ${type !== 'convenience' ? `<span class="area-tag" style="font-size:10px; color:var(--text-dim); text-transform:uppercase">📍 ${item.area}</span>` : '<span></span>'}
                <a href="${mapUrl}" target="_blank" class="btn-map-sm" onclick="handleNativeMapClick(event, '${mapUrl}')">
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

function renderConvenience() {
    const list = document.getElementById('convenience-list');
    if (!list) return;
    list.innerHTML = getFilteredData('convenience').map(item => generateCardHtml(item, 'convenience')).join('');
    lucide.createIcons();
}

function updateDashboardUI() {
    const totalCount = state.restaurants.length + state.desserts.length + state.shopping.length + state.activities.length + state.bars.length + state.convenience.length;
    const el = document.getElementById('place-count');
    if (el) el.textContent = `${totalCount}`;
}

function saveToLocalStorage() { localStorage.setItem('osaka_free_state_v56', JSON.stringify(state)); }
function loadFromLocalStorage() {
    // Preserve initial hardcoded state for merging by creating a deep copy
    const initialData = JSON.parse(JSON.stringify(state));
    const versions = ['v56', 'v55', 'v54', 'v53', 'v52', 'v51', 'v50', 'v49', 'v48', 'v47', 'v46', 'v45', 'v44', 'v43', 'v42', 'v41', 'v40', 'v39', 'v38', 'v37', 'v36', 'v35', 'v34', 'v33', 'v32', 'v31', 'v30', 'v29', 'v28', 'v27', 'v26', 'v25'];
    for (const v of versions) {
        const saved = localStorage.getItem('osaka_free_state_' + v);
        if (saved) {
            let parsed;
            try {
                parsed = JSON.parse(saved);
            } catch (error) {
                console.warn(`Failed to parse localStorage osaka_free_state_${v}`, error);
                continue;
            }
            const hasData = (parsed.restaurants && parsed.restaurants.length > 0) ||
                (parsed.bars && parsed.bars.length > 0);
            if (hasData || v === 'v31') {
                // Merge upgraded hardcoded items with user data
                ['restaurants', 'desserts', 'shopping', 'activities', 'bars', 'convenience'].forEach(cat => {
                    const defaultItems = initialData[cat] || [];
                    if (parsed[cat]) {
                        // Update existing items from default state
                        const updatedParsed = parsed[cat].map(loadedItem => {
                            const defaultItem = defaultItems.find(i => i.id === loadedItem.id);
                            return defaultItem ? { ...loadedItem, ...defaultItem } : loadedItem;
                        });

                        // Add new items that didn't exist in the old version
                        const existingIds = new Set(updatedParsed.map(i => i.id));
                        const newItems = defaultItems.filter(i => !existingIds.has(i.id));

                        parsed[cat] = [...updatedParsed, ...newItems];
                    } else {
                        parsed[cat] = defaultItems;
                    }
                });
                // Safely merge filters
                if (parsed.filters) {
                    parsed.filters = { ...state.filters, ...parsed.filters };
                }
                state = { ...state, ...parsed };
                break;
            }
        }
    }
}

// Smart Recommendation Wizard Logic
let recommendState = {
    step: 1,
    time: '',
    area: '',
    category: '',
    theme: '',
    vibe: ''
};

function setupRecommendation() {
    const startBtn = document.getElementById('start-recommend');
    const modal = document.getElementById('recommend-modal');
    const closeBtns = document.querySelectorAll('.close-recommend');
    const prevBtn = document.getElementById('prev-step');
    const restartBtn = document.getElementById('restart-recommend');

    if (startBtn) {
        startBtn.onclick = () => {
            recommendState = { step: 1, time: '', area: '', category: '', theme: '', vibe: '' };
            updateWizardUI();
            modal.classList.remove('hidden');
            document.body.classList.add('no-scroll');
        };
    }

    const closeModal = () => {
        modal.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    };
    closeBtns.forEach(btn => btn.onclick = closeModal);
    window.onclick = (e) => { if (e.target === modal) closeModal(); };

    if (restartBtn) {
        restartBtn.onclick = () => {
            recommendState = { step: 1, time: '', area: '', category: '', theme: '', vibe: '' };
            updateWizardUI();
        };
    }

    if (prevBtn) {
        prevBtn.onclick = () => {
            if (recommendState.step > 1) {
                recommendState.step--;
                updateWizardUI();
            }
        };
    }

    document.querySelector('.wizard-body')?.addEventListener('click', (e) => {
        const choiceItem = e.target.closest('.choice-item');
        if (!choiceItem) return;

        const step = parseInt(choiceItem.closest('.wizard-step').dataset.step);
        const val = choiceItem.dataset.val;

        if (step === 1) {
            recommendState.time = val;
            recommendState.step = 2;
            updateWizardUI();
        } else if (step === 2) {
            recommendState.area = val;
            recommendState.step = 3;
            updateWizardUI();
        } else if (step === 3) {
            recommendState.category = val;
            updateThemeChoices();
            recommendState.step = 4;
            updateWizardUI();
        } else if (step === 4) {
            recommendState.theme = val;
            recommendState.step = 5;
            updateWizardUI();
        } else if (step === 5) {
            recommendState.vibe = val;
            recommendState.step = 6;
            showRecommendations();
            updateWizardUI();
        }
    });
}

function updateThemeChoices() {
    const grid = document.getElementById('theme-choice-grid');
    const title = document.getElementById('wizard-step-3-title');
    if (!grid) return;

    let choices = [];
    const cat = recommendState.category;

    if (cat === 'restaurants') {
        title.textContent = "어떤 음식이 당기시나요?";
        choices = [
            { val: 'sushi', icon: '🍣', label: '스시/관련 해산물' },
            { val: 'yakiniku', icon: '🥩', label: '고기/야키니쿠' },
            { val: 'ramen', icon: '🍜', label: '라면/우동/면류' },
            { val: 'katsu', icon: '🐽', label: '돈카츠/규카츠' },
            { val: 'okonomiyaki', icon: '🥞', label: '오코노미야키/야키소바' },
            { val: 'teishoku', icon: '🍱', label: '정갈한 일본 가정식' },
            { val: 'all', icon: '😋', label: '다 좋아! 아무거나' }
        ];
    } else if (cat === 'desserts') {
        title.textContent = "달콤한 것 중에서도?";
        choices = [
            { val: 'cafe', icon: '☕', label: '분위기 좋은 카페' },
            { val: 'bakery', icon: '🥐', label: '빵/디저트 전문점' },
            { val: 'cake', icon: '🍰', label: '케이크맛집' },
            { val: 'traditional', icon: '🍡', label: '일본 전통 디저트' },
            { val: 'all', icon: '🍦', label: '달달한 건 다 좋아' }
        ];
    } else if (cat === 'shopping') {
        title.textContent = "무엇을 사고 싶나요?";
        choices = [
            { val: 'dept', icon: '🏢', label: '백화점/쇼핑몰' },
            { val: 'vintage', icon: '🧥', label: '구제/빈티지 패션' },
            { val: 'hobby', icon: '🎮', label: '덕질/취미/피규어' },
            { val: 'street', icon: '👕', label: '스트릿 브랜드' },
            { val: 'all', icon: '🛍️', label: '쇼핑이면 다 좋아' }
        ];
    } else if (cat === 'bars') {
        title.textContent = "어떻게 마시고 싶나요?";
        choices = [
            { val: 'club', icon: '💃', label: '춤추는 클럽' },
            { val: 'hunting', icon: '🤝', label: '만남의 성지/헌팅' },
            { val: 'izakaya', icon: '🍺', label: '조용한 이자카야/바' },
            { val: 'social', icon: '🎉', label: '활발한 소셜 펍' },
            { val: 'nomihoudai', icon: '🍻', label: '무제한/가성비 술집' },
            { val: 'all', icon: '🥃', label: '술이면 됩니다' }
        ];
    } else if (cat === 'activities') {
        title.textContent = "어떤 활동이 취향인가요?";
        choices = [
            { val: 'theme', icon: '🎡', label: '테마파크/랜드마크' },
            { val: 'onsen', icon: '♨️', label: '온천/스파' },
            { val: 'sports', icon: '⚾', label: '스포츠/활동적 게임' },
            { val: 'others', icon: '🎨', label: '이색 체험/거리 구경' },
            { val: 'all', icon: '🎢', label: '즐거운 건 다 좋아' }
        ];
    } else {
        title.textContent = "특별히 관심 있는 분야는?";
        choices = [
            { val: 'food', icon: '🍱', label: '미식/먹방 투어' },
            { val: 'night', icon: '🌙', label: '화려한 밤문화' },
            { val: 'shopping', icon: '💸', label: '쇼핑 지름신' },
            { val: 'relax', icon: '🛁', label: '휴식과 힐링' },
            { val: 'all', icon: '🃏', label: '운명에 맡길게!' }
        ];
    }

    grid.innerHTML = choices.map(c => `
        <div class="choice-item" data-val="${c.val}"><i>${c.icon}</i>${c.label}</div>
    `).join('');
}

function updateWizardUI() {
    const steps = document.querySelectorAll('.wizard-step');
    const prevBtn = document.getElementById('prev-step');
    const indicator = document.querySelector('.step-indicator');
    const footer = document.querySelector('#recommend-modal .modal-footer');

    steps.forEach(s => {
        s.classList.toggle('active', parseInt(s.dataset.step) === recommendState.step);
    });

    if (prevBtn) prevBtn.classList.toggle('hidden', recommendState.step === 1 || recommendState.step === 6);
    if (indicator) indicator.textContent = `Step ${recommendState.step} / 6`;
    if (footer) footer.style.display = recommendState.step === 6 ? 'none' : 'flex';
}

function showRecommendations() {
    const list = document.getElementById('recommend-result-list');
    if (!list) return;

    let pool = [];
    if (recommendState.category === 'all') {
        pool = [...state.restaurants, ...state.desserts, ...state.shopping, ...state.bars, ...state.activities];
    } else {
        pool = state[recommendState.category] || [];
    }

    // --- Match Scoring System (More flexible than strict filtering) ---
    const rankedPool = pool.map(item => {
        let score = 0;

        // 1. Area Match (High Priority)
        if (recommendState.area === 'all' || item.area === recommendState.area) score += 50;

        // 2. Time Match
        const t = recommendState.time;
        const h = item.hours || '';
        if (t === 'morning' && (h.includes('06:') || h.includes('08:') || h.includes('09:') || h.includes('10:'))) score += 40;
        else if (t === 'afternoon' && (h.includes('11:') || h.includes('12:') || h.includes('13:') || h.includes('15:'))) score += 40;
        else if (t === 'evening' && (h.includes('17:') || h.includes('18:') || h.includes('19:'))) score += 40;
        else if (t === 'night' && (h.includes('익일') || h.includes('24시') || h.includes('05:00') || h.includes('02:00') || h.includes('01:00'))) score += 40;

        // 3. Theme/Sub-category Match
        if (recommendState.category === 'all') {
            const th = recommendState.theme;
            if (th === 'food' && (item.sub === 'sushi' || item.sub === 'yakiniku' || item.sub === 'ramen' || item.sub === 'katsu' || item.sub === 'okonomiyaki' || item.sub === 'teishoku' || item.sub === 'cafe' || item.sub === 'bakery')) score += 30;
            else if (th === 'night' && (item.sub === 'club' || item.sub === 'hunting' || item.sub === 'izakaya' || item.sub === 'social')) score += 30;
            else if (th === 'shopping') score += 30;
            else if (th === 'relax' && item.sub === 'onsen') score += 30;
        } else {
            if (recommendState.category === 'desserts') {
                const theme = recommendState.theme;
                if (item.sub === 'cafe' && theme === 'cafe') score += 50;
                if (item.sub === 'bakery' && theme === 'bakery') score += 50;
                if (theme === 'cake' && (item.desc.includes('케이크') || item.desc.includes('도지마롤') || item.desc.includes('타르트'))) score += 50;
                if (theme === 'traditional' && (item.desc.includes('모찌') || item.desc.includes('떡') || item.desc.includes('전통'))) score += 50;
                if (theme === 'all') score += 20;
            }
            if (recommendState.theme === 'all' || item.sub === recommendState.theme) score += 30;
        }

        // 4. Vibe/Special Match
        if (recommendState.vibe !== 'all') {
            if (recommendState.vibe === 'res' && item.res === true) score += 25;
            else if (recommendState.vibe === 'hunting' && item.hunting === true) score += 25;
            else if (recommendState.vibe === 'budget') {
                const p = item.price || '';
                if (p.includes('1,000') || p.includes('500') || p.includes('2,000') || p.includes('무료') || p.includes('잔술')) score += 25;
            } else if (recommendState.vibe === 'premium') {
                const p = item.price || '';
                const highPrice = p.includes('8,000') || p.includes('15,000') || p.includes('4,000') || p.includes('5,000');
                if (highPrice || (item.rating >= 4.5)) score += 25;
            }
        }

        // 5. Rating (Small bonus for quality)
        score += (item.rating || 0) * 2;

        return { ...item, matchScore: score };
    });

    // Sort by Match Score (Descending), then shuffle Top 10 to keep results fresh
    let sorted = rankedPool.sort((a, b) => b.matchScore - a.matchScore);

    // Pick Top matches (e.g., first 6) to show more variety but still quality
    const selected = sorted.slice(0, 6);

    if (selected.length === 0) {
        list.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:40px;"><p>데이터를 불러오는 데 문제가 생겼습니다.</p></div>`;
    } else {
        list.innerHTML = selected.map((item, index) => {
            const cardHtml = generateCardHtml(item, 'mixed');
            const rankingBadge = `<div class="recommend-rank">Top Choice #${index + 1}</div>`;
            // Add a small match badge to the generated HTML
            return `<div class="ranked-card-wrapper" style="position:relative;">${rankingBadge}${cardHtml}</div>`;
        }).join('');
    }
    lucide.createIcons();
}



// --- Shopping Tracker Logic ---
let stState = { step: 1, style: 'all', area: 'all' };

function setupShoppingTracker() {
    const startBtn = document.getElementById('start-shopping-tracker');
    const modal = document.getElementById('shopping-tracker-modal');
    const closeBtns = document.querySelectorAll('.close-shopping-tracker');
    const nextBtn = document.getElementById('st-next');
    const prevBtn = document.getElementById('st-prev');

    if (startBtn) {
        startBtn.onclick = () => {
            modal.classList.remove('hidden');
            stState = { step: 1, style: 'all', area: 'all' };
            updateStUI();
        };
    }

    closeBtns.forEach(btn => btn.onclick = () => modal.classList.add('hidden'));

    document.querySelectorAll('.st-style').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.st-style').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            stState.style = btn.dataset.style;
        };
    });

    document.querySelectorAll('.st-area').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.st-area').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            stState.area = btn.dataset.area;
        };
    });

    if (nextBtn) {
        nextBtn.onclick = () => {
            if (stState.step < 3) {
                stState.step++;
                updateStUI();
                if (stState.step === 3) showShoppingResults();
            } else {
                modal.classList.add('hidden');
            }
        };
    }

    if (prevBtn) {
        prevBtn.onclick = () => {
            if (stState.step > 1) {
                stState.step--;
                updateStUI();
            }
        };
    }
}

function updateStUI() {
    const steps = document.querySelectorAll('.st-step');
    const prevBtn = document.getElementById('st-prev');
    const nextBtn = document.getElementById('st-next');
    const indicator = document.querySelector('.st-indicator');

    steps.forEach(s => s.classList.toggle('hidden', parseInt(s.dataset.step) !== stState.step));
    if (prevBtn) prevBtn.classList.toggle('hidden', stState.step === 1);
    if (indicator) indicator.textContent = `Step ${stState.step} / 3`;
    if (nextBtn) nextBtn.textContent = stState.step === 3 ? '확인 완료' : '다음 단계';
}

function showShoppingResults() {
    const list = document.getElementById('st-result-list');
    if (!list) return;

    let pool = state.shopping || [];
    if (stState.style !== 'all') {
        const query = stState.style.toLowerCase();
        pool = pool.filter(i => {
            const n = i.name.toLowerCase();
            const d = i.desc.toLowerCase();
            const s = i.sub;

            if (query === 'drug') return n.includes('드럭') || n.includes('마츠모토') || n.includes('다이코쿠') || n.includes('러쉬');
            if (query === 'tech') return n.includes('카메라') || n.includes('에디온') || s === 'hobby';
            if (query === 'anime') return n.includes('애니메이트') || n.includes('만다라케') || n.includes('닌텐도') || n.includes('포켓몬') || n.includes('덴덴타운') || d.includes('덕질');
            if (query === 'life') return n.includes('로프트') || n.includes('핸즈') || n.includes('무인양품');
            if (query === '100yen') return n.includes('다이소') || n.includes('세리아') || n.includes('3coins') || n.includes('3코인즈') || n.includes('돈키호테');
            if (query === 'vintage') return s === 'vintage' || n.includes('킨들') || n.includes('2nd') || n.includes('래그태그');

            // SPA & Brands
            if (query === 'gu') return n.includes('gu') || n.includes('지유');
            if (query === 'zara') return n.includes('zara') || n.includes('자라');
            if (query === 'hnm') return n.includes('h&m');

            return n.includes(query) || d.includes(query);
        });
    }
    if (stState.area !== 'all') pool = pool.filter(i => i.area === stState.area);

    if (pool.length === 0) {
        list.innerHTML = `<p style="grid-column:1/-1; text-align:center; padding:20px;">조건에 맞는 상점이 없습니다.</p>`;
    } else {
        list.innerHTML = pool.map(item => generateCardHtml(item, 'shopping')).join('');
    }
    lucide.createIcons();
}

// --- World Cup Logic ---
let worldCupPool = [];
let worldCupMatches = [];
let currentWcIndex = 0;
let nextRoundWinners = [];

function setupWorldCup() {
    const startBtn = document.getElementById('start-worldcup');
    const modal = document.getElementById('worldcup-modal');
    const closeBtns = document.querySelectorAll('.close-worldcup');
    const startConfirmBtn = document.getElementById('wc-start-btn');
    let wcConfig = { cat: 'all', area: 'all' };

    if (startBtn) {
        startBtn.onclick = () => {
            modal.classList.remove('hidden');
            document.getElementById('wc-setup').classList.remove('hidden');
            document.getElementById('wc-game-view').classList.add('hidden');
            document.getElementById('wc-winner').classList.add('hidden');
        };
    }

    closeBtns.forEach(btn => btn.onclick = () => modal.classList.add('hidden'));

    // Option Pickers
    document.querySelectorAll('.wc-cat').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.wc-cat').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            wcConfig.cat = btn.dataset.cat;
        };
    });
    document.querySelectorAll('.wc-area').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.wc-area').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            wcConfig.area = btn.dataset.area;
        };
    });

    if (startConfirmBtn) {
        startConfirmBtn.onclick = () => {
            startWorldCup(wcConfig);
        };
    }
}

function startWorldCup(config) {
    let pool = [];
    if (config.cat === 'all') {
        pool = [...state.restaurants, ...state.bars, ...state.activities, ...state.desserts, ...state.shopping];
    } else if (config.cat === 'teishoku') {
        pool = state.restaurants.filter(i => i.sub === 'teishoku');
    } else if (config.cat === 'desserts') {
        pool = state.desserts || [];
    } else {
        pool = state[config.cat] || [];
    }

    if (config.area !== 'all') {
        pool = pool.filter(i => i.area === config.area);
    }

    // 월드컵은 고평점 위주로
    pool = pool.filter(i => i.rating >= 4.0);

    if (pool.length < 2) {
        alert('월드컵을 진행하기 위한 충분한 장소가 없습니다! (최소 2곳 이상, 평점 4.0 이상 장소 대상)');
        return;
    }

    // 2, 4, 8, 16 강 등 조절
    let sliceNum = 8;
    if (pool.length < 8) sliceNum = 4;
    if (pool.length < 4) sliceNum = 2;

    worldCupPool = pool.sort(() => 0.5 - Math.random()).slice(0, sliceNum);
    currentWcIndex = 0;
    nextRoundWinners = [];

    document.getElementById('wc-setup').classList.add('hidden');
    document.getElementById('wc-game-view').classList.remove('hidden');
    document.getElementById('wc-winner').classList.add('hidden');
    showWcMatch();
}

function showWcMatch() {
    const left = worldCupPool[currentWcIndex];
    const right = worldCupPool[currentWcIndex + 1];
    const progress = document.getElementById('worldcup-progress');
    const roundName = worldCupPool.length === 8 ? '8강' : (worldCupPool.length === 4 ? '4강' : '결승');

    progress.textContent = `${roundName} (${(currentWcIndex / 2) + 1} / ${worldCupPool.length / 2})`;

    document.getElementById('wc-left').innerHTML = generateCardHtml(left, 'mixed') + '<button class="btn-primary" style="width:100%; margin-top:10px;" onclick="pickWc(0)">선택</button>';
    document.getElementById('wc-right').innerHTML = generateCardHtml(right, 'mixed') + '<button class="btn-primary" style="width:100%; margin-top:10px;" onclick="pickWc(1)">선택</button>';
    lucide.createIcons();
}

window.pickWc = (side) => {
    const winner = worldCupPool[currentWcIndex + side];
    nextRoundWinners.push(winner);
    currentWcIndex += 2;

    if (currentWcIndex >= worldCupPool.length) {
        if (nextRoundWinners.length === 1) {
            showWcWinner(nextRoundWinners[0]);
        } else {
            worldCupPool = nextRoundWinners;
            nextRoundWinners = [];
            currentWcIndex = 0;
            showWcMatch();
        }
    } else {
        showWcMatch();
    }
};

function showWcWinner(winner) {
    document.getElementById('wc-game-view').classList.add('hidden');
    document.getElementById('wc-winner').classList.remove('hidden');
    document.getElementById('wc-winner-display').innerHTML = generateCardHtml(winner, 'mixed');
    lucide.createIcons();
}

// --- Reservation Mandatory List ---
function setupReservationList() {
    const startBtn = document.getElementById('start-reservation-list');
    const modal = document.getElementById('reservation-modal');
    const results = document.getElementById('reservation-results');
    const closeBtns = document.querySelectorAll('.close-reservation');

    if (startBtn) {
        startBtn.onclick = () => {
            modal.classList.remove('hidden');
            document.body.classList.add('no-scroll');
            const pool = [...state.restaurants, ...state.bars, ...state.activities, ...state.desserts, ...state.shopping];
            const filtered = pool.filter(i => i.res === true);

            if (filtered.length === 0) {
                results.innerHTML = `<p style="grid-column:1/-1; text-align:center; padding:20px;">현재 리스트에 예약 필수 장소가 없습니다.</p>`;
            } else {
                results.innerHTML = filtered.map(item => generateCardHtml(item, 'mixed')).join('');
            }
            lucide.createIcons();
        };
    }

    closeBtns.forEach(btn => btn.onclick = () => {
        modal.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    });
}

// --- Smoking Area Guide Logic ---
const SMOKING_AREAS = [
    // --- Namba / Dotonbori / Nipponbashi ---
    { name: "난바 스카이오 (3F)", area: "난바", desc: "난바역 연결, 조용하고 쾌적한 실내 흡연실", map: "https://www.google.com/maps/search/Namba+SkyO+Smoking+Room" },
    { name: "난바 시티 (본관 B2F)", area: "난바", desc: "지하상가 중앙 부근 위치", map: "https://www.google.com/maps/search/Namba+City+Main+B2+Smoking" },
    { name: "난바 시티 (남관 B1F)", area: "난바", desc: "남쪽 출구 방향 에스컬레이터 옆", map: "https://www.google.com/maps/search/Namba+City+South+B1+Smoking" },
    { name: "난바 파크스 (6F)", area: "난바", desc: "식당가 층, 정원 입구 인근", map: "https://www.google.com/maps/search/Namba+Parks+6F+Smoking" },
    { name: "난바 파크스 (7F/8F)", area: "난바", desc: "시네마 및 옥상 정원 인근", map: "https://www.google.com/maps/search/Namba+Parks+7F+Smoking" },
    { name: "오사카 다카시마야 (7F)", area: "난바", desc: "백화점 식당가 전용 흡연실", map: "https://www.google.com/maps/search/Osaka+Takashimaya+7F+Smoking" },
    { name: "OCAT (2F/3F)", area: "난바", desc: "난바 터미널 내부 공영 흡연 구역", map: "https://www.google.com/maps/search/OCAT+Namba+Smoking" },
    { name: "에디온 난바 본점 (9F)", area: "난바", desc: "라멘 정거장(음식점가) 층 위치", map: "https://www.google.com/maps/search/Edion+Namba+9F+Smoking" },
    { name: "난바 워크 (포레스트 공원)", area: "난바", desc: "지하상가 닛폰바시 방향 쉼터 인근", map: "https://www.google.com/maps/search/Namba+Walk+Smoking+Area" },
    { name: "도톤보리 에비스 다리", area: "난바", desc: "강변 글리코상 대각선 방향 지정 구역", map: "https://www.google.com/maps/search/Ebisubashi+Smoking+Area" },
    { name: "빅카메라 난바 (4F/7F)", area: "난바", desc: "가전 매장 중간 층 위치", map: "https://www.google.com/maps/search/Bic+Camera+Namba+Smoking" },

    // --- Umeda / Kita ---
    { name: "그랜드 프런트 (South 2F-6F)", area: "우메다", desc: "빌딩 남관 각 층 복도 끝 위치", map: "https://www.google.com/maps/search/Grand+Front+South+Smoking" },
    { name: "그랜드 프런트 (North 6F)", area: "우메다", desc: "북관 식당가 위치", map: "https://www.google.com/maps/search/Grand+Front+North+Smoking" },
    { name: "루쿠아 오사카 (9F/10F)", area: "우메다", desc: "루쿠아 백화점 위층 식당가 위치", map: "https://www.google.com/maps/search/Lucua+Osaka+Smoking" },
    { name: "링크스 우메다 (B1F/8F)", area: "우메다", desc: "요도바시 카메라 건물 내 식당가 인근", map: "https://www.google.com/maps/search/Links+Umeda+Smoking" },
    { name: "화이티 우메다 (분수 공원)", area: "우메다", desc: "지하상가 동쪽 끝 분수광장 인근", map: "https://www.google.com/maps/search/Whity+Umeda+Smoking" },
    { name: "KITTE 오사카 (4F/5F)", area: "우메다", desc: "신축 빌딩 내 고급 흡연 시설", map: "https://www.google.com/maps/search/KITTE+Osaka+Smoking" },
    { name: "우메다 스카이빌딩 (1F)", area: "우메다", desc: "야외 정원 타키미코지 입구", map: "https://www.google.com/maps/search/Sky+Building+Smoking+Area" },
    { name: "한큐 백화점 (13F)", area: "우메다", desc: "본점 식당가 옆 쾌적한 공간", map: "https://www.google.com/maps/search/Hankyu+Umeda+Smoking" },
    { name: "한신 백화점 (9F)", area: "우메다", desc: "푸드 홀 우측 위치", map: "https://www.google.com/maps/search/Hanshin+Umeda+Smoking" },
    { name: "오사카 스테이션 시티 (16F)", area: "우메다", desc: "사우스 게이트 빌딩 태양의 광장 인근", map: "https://www.google.com/maps/search/Osaka+Station+City+16F+Smoking" },

    // --- Shinsaibashi / Amerikamura ---
    { name: "파르코 Shinsaibashi (B2F)", area: "신사이바시", desc: "지하 푸드홀 인근", map: "https://www.google.com/maps/search/PARCO+Shinsaibashi+B2+Smoking" },
    { name: "파르코 Shinsaibashi (9F/13F)", area: "신사이바시", desc: "문화 전시장 및 식당가", map: "https://www.google.com/maps/search/PARCO+Shinsaibashi+9F+Smoking" },
    { name: "다이마루 신사이바시 (9F)", area: "신사이바시", desc: "본관 꼭대기 층 복도", map: "https://www.google.com/maps/search/Daimaru+Shinsaibashi+Smoking" },
    { name: "아메리카무라 삼각공원", area: "신사이바시", desc: "공원 내 지정 야외 구역", map: "https://www.google.com/maps/search/Americamura+Triangle+Park+Smoking" },
    { name: "크리스타 나가호리 (지하)", area: "신사이바시", desc: "대형 지하상가 중간 지정 장소", map: "https://www.google.com/maps/search/Crysta+Nagahori+Smoking" },

    // --- Others ---
    { name: "아베노 하루카스 (12F/13F/14F)", area: "기타", desc: "텐노지 이치반가 식당가 층", map: "https://www.google.com/maps/search/Abeno+Harukas+Smoking" },
    { name: "아베노 큐즈몰 (2F)", area: "기타", desc: "테라스 방향 안내소 인근", map: "https://www.google.com/maps/search/Q's+Mall+Smoking" },
    { name: "오사카 성 (조테라스)", area: "기타", desc: "성 입구 쇼핑 단지 내 지정 구역", map: "https://www.google.com/maps/search/Jo+Terrace+Smoking" },
    { name: "텐마역 북쪽 고가밑", area: "기타", desc: "텐마 시장 입구 지정 흡연 부스", map: "https://www.google.com/maps/search/Tenma+Station+Smoking" },
    { name: "교바시역 공영흡연소", area: "기타", desc: "게이한 교바시 역 광장 옆", map: "https://www.google.com/maps/search/Kyobashi+Station+Smoking" }
];

let smokingFilter = 'all';

function setupSmokingInfo() {
    const startBtn = document.getElementById('start-smoking');
    const modal = document.getElementById('smoking-modal');
    const list = document.getElementById('smoking-list-container');
    const closeBtn = document.querySelector('.close-smoking');

    if (startBtn) {
        startBtn.onclick = () => {
            modal.classList.remove('hidden');
            document.body.classList.add('no-scroll');
            renderSmokingList();
        };
    }

    if (closeBtn) closeBtn.onclick = () => {
        modal.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    };

    // Filter Buttons logic
    document.querySelectorAll('.smoking-filter').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.smoking-filter').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            smokingFilter = btn.dataset.area;
            renderSmokingList();
        };
    });

    function renderSmokingList() {
        if (!list) return;
        const filtered = smokingFilter === 'all'
            ? SMOKING_AREAS
            : SMOKING_AREAS.filter(s => s.area === smokingFilter);

        list.innerHTML = filtered.map((s, idx) => `
            <div class="wc-card-wrapper smoking-card" data-idx="${idx}" style="cursor:pointer;">
                <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                    <span class="card-tag-res" style="background:rgba(148,163,184,0.1); color:#94a3b8;">${s.area}</span>
                    <a href="${s.map}" target="_blank" style="color:var(--secondary); font-size:12px; text-decoration:none;" onclick="handleNativeMapClick(event, '${s.map}')"><i data-lucide="map"></i> 지도보기</a>
                </div>
                <h5 style="font-size:16px; margin-bottom:5px;">${s.name}</h5>
                <p style="font-size:12px; color:var(--text-dim);">${s.desc}</p>
            </div>
        `).join('');

        // Add click listener for smoking cards
        document.querySelectorAll('.smoking-card').forEach(card => {
            card.onclick = () => {
                card.classList.toggle('active');
            };
        });

        lucide.createIcons();
    }
}

// --- Utility: Open Map in Native App (PWA Support) ---
function handleMapClick(e, url) {
    e.stopPropagation(); // Prevent card click

    // Detect Mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) return; // Desktop: let default href work (target=_blank)

    e.preventDefault();

    let query = '';
    // Try to extract query from standard Google Maps Search URL
    if (url.includes('google.com/maps/search/')) {
        const parts = url.split('search/');
        if (parts[1]) {
            // Remove any extra parameters like ?api=1 etc manually if needed
            query = parts[1].split('?')[0];
        }
    }

    if (!query) {
        // Fallback or explicit Map link
        window.open(url, '_blank');
        return;
    }

    // Native App Schemes
    if (/Android/i.test(navigator.userAgent)) {
        // Android Intent
        window.location.href = `geo:0,0?q=${query}`;
    } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        // iOS Scheme
        window.location.href = `comgooglemaps://?q=${query}`;

        // Fallback for iOS (if App not installed)
        setTimeout(() => {
            window.open(url, '_blank');
        }, 500);
    }
}


// --- IMPROVED Utility: Open Map in Native App (PWA Support) ---
function handleNativeMapClick(e, url) {
    e.stopPropagation(); // Prevent card click

    // Detect Mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) return; // Desktop: let default href work (target=_blank)

    e.preventDefault();

    let query = '';

    // Extract query more robustly
    try {
        if (url.includes('query=')) {
            const urlObj = new URL(url);
            query = urlObj.searchParams.get('query');
        } else if (url.includes('/maps/search/')) {
            // Fallback for direct search urls
            const parts = url.split('search/');
            if (parts[1]) query = parts[1].split('?')[0];
        }
    } catch (err) {
        console.warn('Map URL parse error', err);
    }

    // Double check encoding
    if (query) {
        try {
            if (query.includes('%')) query = decodeURIComponent(query);
        } catch (e) { }
    }

    if (!query) {
        window.open(url, '_blank');
        return;
    }

    const encodedQuery = encodeURIComponent(query);

    // Native App Schemes
    if (/Android/i.test(navigator.userAgent)) {
        // Android Intent
        const intentUrl = `intent://maps.google.com/maps?q=${encodedQuery}#Intent;scheme=geo;package=com.google.android.apps.maps;end`;
        window.location.href = intentUrl;
    } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        // iOS Scheme - just try to open google maps
        // If it fails, nothing happens (which is better than opening two apps)
        // User can still use the web version on desktop/browser if they want
        window.location.href = `comgooglemaps://?q=${encodedQuery}`;
    }
}

document.addEventListener('DOMContentLoaded', init);
