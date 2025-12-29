// State Management
let state = {
    currentSection: 'dashboard',
    tripDates: { start: '2025-12-31', end: '2026-01-04' },
    search: [], // Placeholder for search results
    filters: {
        restaurants: { sub: 'all', area: 'all', sorts: [] },
        desserts: { sub: 'all', area: 'all', sorts: [] },
        shopping: { sub: 'all', area: 'all', sorts: [] },
        activities: { sub: 'all', area: 'all', sorts: [] },
        bars: { sub: 'all', area: 'all', sorts: [] },
        convenience: { sub: 'all', area: 'all', sorts: [] }
    },
    userLocation: null,
    restaurants: [
        // --- Sushi & Kaisendon ---
        { id: 101, name: '하루코마 스시', sub: 'sushi', area: 'tenma', time: '전철 20분', price: '2,000엔~', rating: 4.3, res: false, smoking: 'room', waitLevel: 'high', hours: '11:00-21:30 (화요일 휴무)', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=400&q=80', desc: '텐마 시장 가성비 No.1 스시 (흡연실 있음)' },
        { id: 102, name: '마루요시 스시', sub: 'sushi', area: 'namba', time: '도보 12분', price: '3,000엔~', rating: 4.5, res: true, hours: '06:00-13:00 (일요일 휴무)', img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=400&q=80', desc: '난바 위치, 셰프의 장인정신이 느껴지는 작은 명점' },
        { id: 103, name: '대기수산 회전초밥', sub: 'sushi', area: 'namba', time: '도보 5분', price: '1,500엔~', rating: 4.1, res: false, waitLevel: 'medium', hours: '11:00-22:00', img: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&fit=crop&w=400&q=80', desc: '도톤보리 강변, 회전초밥 중 가장 신선한 퀄리티' },
        { id: 104, name: '스시 호시야마', sub: 'sushi', area: 'kitashinchi', time: '전철 15분', price: '15,000엔~', rating: 4.6, res: true, localPick: true, waitLevel: 'high', hours: '17:30-23:00 (화요일 휴무)', img: 'https://images.unsplash.com/photo-1617196034183-421b4917c92d?auto=format&fit=crop&w=400&q=80', desc: '미슐랭 1스타, 기타신치 지역 하이엔드 오마카세' },
        { id: 105, name: '원조 부치 초밥 어신', sub: 'sushi', area: 'shinsaibashi', time: '도보 8분', price: '2,000엔~', rating: 4.2, res: false, smoking: 'room', waitLevel: 'medium', hours: '11:00-24:00', img: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&w=400&q=80', desc: '신사이바시 노포, 압도적인 크기의 네타가 특징 (흡연실 있음)' },

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
        { id: 151, name: '규카츠 모토무라 난바', sub: 'katsu', area: 'namba', time: '도보 6분', price: '1,400엔~', rating: 4.7, res: false, waitLevel: 'high', hours: '11:00-22:00', img: 'https://images.unsplash.com/photo-1621919030800-474c76743936?auto=format&fit=crop&w=400&q=80', desc: '화로에 구워 먹는 규카츠' },
        { id: 152, name: '규카츠 토미타', sub: 'katsu', area: 'namba', time: '도보 8분', price: '1,300엔~', rating: 4.5, res: false, hours: '11:00-21:00', img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80', desc: '현지인 숨은 규카츠 맛집' },
        { id: 153, name: '뉴베이브 토요사키', sub: 'katsu', area: 'umeda', time: '전철 18분', price: '2,000엔~', rating: 4.6, res: false, hours: '11:00-15:00 / 17:30-19:30 (부정기 휴무)', img: 'https://images.unsplash.com/photo-1614750914812-7825488133ef?auto=format&fit=crop&w=400&q=80', desc: '육즙 폭발 핑크빛 돈카츠' },
        { id: 154, name: 'KYK 돈카츠 우메다', sub: 'katsu', area: 'umeda', time: '전철 15분', price: '1,500엔~', rating: 4.2, res: false, hours: '11:00-22:00', img: 'https://images.unsplash.com/photo-1616031024479-563630f9d92e?auto=format&fit=crop&w=400&q=80', desc: '오사카 대표 노포 돈카츠' },
        { id: 155, name: 'Epais (에페)', sub: 'katsu', area: 'umeda', time: '전철 16분', price: '1,800엔~', rating: 4.5, res: true, hours: '11:00-15:00 / 18:00-22:00 (일요일 휴무)', img: 'https://images.unsplash.com/photo-1544601284-8258ef29549f?auto=format&fit=crop&w=400&q=80', desc: '미슐랭 빕구르망 프리미엄 돈카츠' },

        // --- Udon & Soba ---
        { id: 161, name: '도톤보리 이마이', sub: 'udon', area: 'namba', time: '도보 4분', price: '800엔~', rating: 4.3, res: false, waitLevel: 'medium', hours: '11:30-21:30 (수요일 휴무)', img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=400&q=80', desc: '오사카 우동의 상징, 담백한 육수와 유부가 일품' },
        { id: 162, name: '카마타케 우동', sub: 'udon', area: 'namba', time: '도보 8분', price: '900엔~', rating: 4.4, res: false, waitLevel: 'medium', hours: '11:00-16:00 (화요일 휴무)', img: 'https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&w=400&q=80', desc: '국물 없는 붓카케 우동의 성지, 쫄깃한 면발' },
        { id: 163, name: '츠루톤탄 소에몬초점', sub: 'udon', area: 'namba', time: '도보 6분', price: '1,200엔~', rating: 4.1, res: false, waitLevel: 'high', hours: '11:00-익일 08:00', img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=400&q=80', desc: '세숫대야 우동, 명란 크림 우동 등 퓨전 메뉴가 인기' },
        { id: 164, name: '우동야 키스케', sub: 'udon', area: 'umeda', time: '전철 16분', price: '1,000엔~', rating: 4.5, res: false, hours: '12:00-16:00 / 18:00-20:00 (화요일 휴무)', img: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=400&q=80', desc: '미슐랭 빕구르망, 텐푸라와 냉우동의 조화가 환상적' },

        // --- Ramen ---
        { id: 111, name: '이치란 라멘 도톤보리', sub: 'ramen', area: 'namba', time: '도보 6분', price: '1,100엔', rating: 4.3, res: false, waitLevel: 'high', hours: '24시간 영업', map: 'https://www.google.com/maps/search/?api=1&query=Ichiran+Ramen+Dotonbori+Annex', img: 'https://images.unsplash.com/photo-1552611052-d59a0d9741bc?auto=format&fit=crop&w=400&q=80', desc: '말이 필요 없는 오사카 1순위 돈코츠 라멘' },
        { id: 112, name: '카무쿠라 라멘', sub: 'ramen', area: 'namba', time: '도보 8분', price: '900엔', rating: 4.1, res: false, hours: '10:00-익일 07:30', map: 'https://maps.app.goo.gl/3516yK7f1XkQ5N7Q8', img: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&w=400&q=80', desc: '배추의 단맛이 우러난 깊고 깔끔한 채수 라멘' },
        { id: 113, name: '라멘 인생 JET', sub: 'ramen', area: 'umeda', time: '전철 18분', price: '1,000엔', rating: 4.4, res: false, hours: '11:00-15:00 / 18:00-23:00', img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=400&q=80', desc: '후쿠시마 격전지 1위, 진한 토리파이탄(닭백탕)의 정석' },
        { id: 114, name: '무기토 멘스케', sub: 'ramen', area: 'umeda', time: '전철 15분', price: '1,200엔', rating: 4.5, res: false, hours: '11:00-15:30 (화요일 휴무)', img: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&w=400&q=80', desc: '미슐랭 등재, 중화소바의 극치를 보여주는 우메다 명소' },
        { id: 115, name: '나니와 멘지로', sub: 'ramen', area: 'namba', time: '도보 10분', price: '1,100엔', rating: 4.2, res: false, hours: '11:00-22:00 (셋째주 화요일 휴무)', img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=400&q=80', desc: '난바역 위치, 황금 조개 육수로 깔끔한 뒷맛이 일품' },

        // --- Yakiniku ---
        { id: 121, name: '야키니쿠 만노', sub: 'yakiniku', area: 'tenma', time: '전철 20분', price: '5,000엔~', rating: 4.4, res: true, smoking: 'room', hours: '11:00-23:00', map: 'https://www.google.com/maps/search/?api=1&query=Yakiniku+Manno+Tenma', img: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=400&q=80', desc: '정육점 직영 와규 전문점 (실내 흡연실 완비)' },
        { id: 122, name: '호르몬 사카가미', sub: 'yakiniku', area: 'namba', time: '도보 12분', price: '3,500엔~', rating: 4.2, res: false, smoking: true, hours: '17:00-24:00', img: 'https://images.unsplash.com/photo-1529193591184-b1d58b3fffc9?auto=format&fit=crop&w=400&q=80', desc: '난바 뒷골목 감성, 내장 구이 맛집 (좌석 흡연 가능)' },
        { id: 123, name: '마쓰사카규 M', sub: 'yakiniku', area: 'namba', time: '도보 5분', price: '8,000엔~', rating: 4.6, res: true, smoking: 'room', hours: '12:00-15:00 / 17:00-23:00', map: 'https://www.google.com/maps/search/?api=1&query=Matsusakagyu+M+Hozenji+Yokocho', img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80', desc: '마쓰사카규 전문점, 개별실 완비 (흡연실 있음)' },
        { id: 125, name: '야키니쿠 고리짱 우메다', sub: 'yakiniku', area: 'umeda', time: '전철 15분', price: '3,000엔~', rating: 4.9, res: true, smoking: true, hours: '17:00-익일 07:00', img: 'https://images.unsplash.com/photo-1563851508933-2895f573752e?auto=format&fit=crop&w=400&q=80', desc: '구글 평점 4.9! 가성비 와규 끝판왕 (흡연 가능)' },
        { id: 126, name: '만료 (Manryo)', sub: 'yakiniku', area: 'tenma', time: '전철 18분', price: '4,000엔~', rating: 4.5, res: true, smoking: true, hours: '16:00-24:00 (수요일 휴무)', map: 'https://www.google.com/maps/search/?api=1&query=Manryo+Yakiniku+Tenma', img: 'https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?auto=format&fit=crop&w=400&q=80', desc: '오사카 현지인들이 가장 사랑하는 야키니쿠 (흡연 가능)' },
        { id: 127, name: '스미비 야키니쿠 다이칸', sub: 'yakiniku', area: 'namba', time: '도보 8분', price: '4,500엔~', rating: 4.4, res: false, smoking: 'room', hours: '12:00-23:00', img: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=400&q=80', desc: '숯불 향 가득한 와규 무제한 (흡연 전용실 있음)' },

        { id: 1210, name: '소라 (Sora) 도톤보리', sub: 'yakiniku', area: 'namba', time: '도보 8분', price: '3,000엔~', rating: 4.1, res: false, smoking: true, hours: '17:00-24:00', desc: '츠루하시의 전설적인 호르몬 야키니쿠 분점 (흡연 가능)' },
        { id: 1211, name: '타지마야 (Tajimaya) E-ma', sub: 'yakiniku', area: 'umeda', time: '전철 15분', price: '6,000엔~', rating: 4.3, res: true, smoking: 'room', hours: '11:00-23:00', desc: '숙성 와규의 깊은 맛, 프라이빗 룸 완비 고급 야키니쿠' },
        { id: 1212, name: '야키니쿠 키타하마', sub: 'yakiniku', area: 'umeda', time: '전철 12분', price: '8,000엔~', rating: 4.5, res: true, smoking: 'room', hours: '17:00-23:00', desc: '기타하마의 뷰와 함께 즐기는 최상급 흑우 코스' },

        // --- Unagi (Eel) & Special ---
        { id: 1220, name: '이즈모 (Izumo) 루쿠아', sub: 'eel', area: 'umeda', time: '전철 15분', price: '2,500엔~', rating: 4.2, res: false, hours: '11:00-23:00', desc: '압도적인 비주얼의 산더미 장어덮밥, 루쿠아 지하 맛집' },
        { id: 1221, name: '혼케 시바토 (Shibato)', sub: 'eel', area: 'umeda', time: '전철 13분', price: '5,000엔~', rating: 4.4, res: true, hours: '11:00-21:00', desc: '300년 전통, 오사카에서 가장 오래된 장어 요리 명가' },
        { id: 1222, name: '요시토라 (Yoshitora)', sub: 'eel', area: 'shinsaibashi', time: '도보 15분 (혼마치)', price: '6,000엔~', rating: 4.6, res: true, hours: '11:00-20:00', desc: '미슐랭 가이드 등재, 에도 시대 방식의 부드러운 장어' },
        { id: 1223, name: '우나토토 (Una-Toto) 난바', sub: 'eel', area: 'namba', time: '도보 6분', price: '1,100엔', rating: 3.9, res: false, hours: '11:00-22:00', desc: '장어덮밥을 1,100엔에? 가성비 최강의 장어 패스트푸드' },

        // --- Deep Horumon ---
        { id: 1230, name: '류노스 (Ryu no Su) 신사이바시', sub: 'yakiniku', area: 'shinsaibashi', time: '도보 5분', price: '1,500엔~', rating: 4.3, res: false, smoking: true, hours: '11:00-06:00', desc: '오사카 명물 아부라카스(튀긴 곱창) 우동과 호르몬 구이 (24시급 운영)' },
        { id: 1231, name: '쇼와 타이슈 호르몬', sub: 'yakiniku', area: 'namba', time: '도보 4분', price: '3,000엔~', rating: 4.0, res: false, smoking: true, hours: '17:00-24:00', desc: '도톤보리 한복판, 쇼와 시대 레트로 감성의 호르몬 전문점' },

        // --- Izakaya & Others ---
        { id: 131, name: '미즈노 오코노미야키', sub: 'okonomiyaki', area: 'namba', time: '도보 6분', price: '1,800엔~', rating: 4.3, res: false, smoking: 'room', waitLevel: 'high', hours: '11:00-22:00 (목요일 휴무)', map: 'https://maps.app.goo.gl/uX3QdGgH95u3yV7w6', img: 'https://images.unsplash.com/photo-1617343255141-754da01f2e14?auto=format&fit=crop&w=400&q=80', desc: '미슐랭 빕구르망, 마 가루 오코노미야키 (흡연실 있음)' },
        { id: 133, name: '후쿠타로 본점', sub: 'okonomiyaki', area: 'namba', time: '도보 8분', price: '1,300엔~', rating: 4.4, res: false, smoking: true, waitLevel: 'high', hours: '평일 17:00-23:30 / 주말 12:00-23:30', map: 'https://www.google.com/maps/search/?api=1&query=Fukutaro+Okonomiyaki+Namba', img: 'https://images.unsplash.com/photo-1551024739-78e9d60c45ca?auto=format&fit=crop&w=400&q=80', desc: '난바 현지인 줄 서는 곳, 네기야키 추천 (흡연 가능)' },
        { id: 141, name: '북극성 (Hokkyokusei)', sub: 'western', area: 'namba', time: '도보 10분', price: '1,200엔~', rating: 4.2, res: false, hours: '11:30-21:30', map: 'https://www.google.com/maps/search/?api=1&query=Hokkyokusei+Shinsaibashi+Main+Store', img: 'https://images.unsplash.com/photo-1506084868730-34232f32f057?auto=format&fit=crop&w=400&q=80', desc: '오사카 오므라이스의 원조, 일본 가옥 분위기' },
        { id: 142, name: '쿠시카츠 다루마', sub: 'kushikatsu', area: 'namba', time: '도보 5분', price: '2,000엔~', rating: 4.1, res: false, smoking: 'room', hours: '11:00-22:30', map: 'https://www.google.com/maps/search/?api=1&query=Kushikatsu+Daruma+Namba', img: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=400&q=80', desc: '오사카 명물 꼬치 튀김 (분점마다 흡연실 완비)' },
        { id: 144, name: '메이지켄 (Meijiken)', sub: 'western', area: 'shinsaibashi', time: '도보 4분', price: '1,300엔~', rating: 4.2, res: false, smoking: 'room', hours: '11:00-22:00 (수요일 휴무, 브레이크 15:50-17:00)', img: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=400&q=80', desc: '1925년 창업, 오므라이스 명점 (흡연실 있음)' },
        { id: 143, name: '텐동 마키노', sub: 'others', area: 'umeda', time: '전철 15분', price: '1,500엔~', rating: 4.4, res: false, hours: '10:30-23:00', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80', desc: '눈앞에서 튀겨주는 바삭한 텐동, 우메다 직장인들의 맛집' },
        { id: 176, name: '돈소쿠노 카도야', sub: 'izakaya', area: 'namba', time: '도보 10분', price: '2,000엔~', rating: 4.1, res: false, smoking: true, hours: '11:00-22:00 (화요일 휴무)', img: 'https://images.unsplash.com/photo-1529193591184-b1d58b3fffc9?auto=format&fit=crop&w=400&q=80', desc: '현지 아저씨들의 성지, 족발과 술 (흡연 매우 자유로움)' },
        { id: 134, name: '호젠지 산페이', sub: 'okonomiyaki', area: 'namba', time: '도보 8분', price: '1,500엔~', rating: 4.4, res: false, smoking: true, waitLevel: 'high', hours: '17:00-23:00 (화요일 휴무)', desc: '호젠지 요코초의 정취 (흡연 가능)' },
        { id: 135, name: '아지노야', sub: 'okonomiyaki', area: 'namba', time: '도보 6분', price: '1,400엔~', rating: 4.6, res: false, smoking: 'room', waitLevel: 'high', hours: '11:00-22:00 (월요일 휴무)', map: 'https://www.google.com/maps/search/?api=1&query=Ajinoya+Okonomiyaki+Namba', desc: '도톤보리의 마스코트. 24시간 언제든 먹을 수 있는 서서 먹는 라멘의 낭만' },
        { id: 116, name: '면야 조로쿠', sub: 'ramen', area: 'namba', time: '도보 10분', price: '1,000엔', rating: 4.5, res: false, hours: '11:30-15:00 / 18:00-21:00 (화요일 휴무)', desc: '오사카 타베로그 라면 부문 부동의 1위 명점' },
        { id: 117, name: '라멘 야시치', sub: 'ramen', area: 'umeda', time: '전철 15분', price: '1,100엔', rating: 4.7, res: false, hours: '10:30-16:00 (토/일 휴무)', desc: '평일에만 맛볼 수 있는 환상의 닭 육수 라멘' },
        { id: 136, name: '치보 (Chibo)', sub: 'okonomiyaki', area: 'namba', time: '도보 5분', price: '1,500엔~', rating: 4.1, res: false, smoking: 'room', waitLevel: 'medium', hours: '11:00-23:00', map: 'https://www.google.com/maps/search/?api=1&query=Chibo+Okonomiyaki+Dotonbori', desc: '고급스러운 분위기의 오코노미야키 (별도 흡연실 있음)' },
        { id: 128, name: '야키니쿠노 와타미 난바점', sub: 'yakiniku', area: 'namba', time: '도보 5분', price: '3,000엔~', rating: 3.8, res: false, smoking: 'room', hours: '11:30-23:00', desc: '가성비 90분 무제한 코스 (실내 흡연실 완비)' },
        { id: 129, name: '야키니쿠 코코카라 난바점', sub: 'yakiniku', area: 'namba', time: '도보 8분', price: '3,500엔~', rating: 4.2, res: false, smoking: true, hours: '17:00-익일 02:00', desc: '두툼한 안창살과 호르몬 (좌석 흡연 가능)' },
        { id: 130, name: '야키니쿠 리키마루 난바점', sub: 'yakiniku', area: 'namba', time: '도보 6분', price: '3,500엔~', rating: 4.1, res: false, smoking: 'room', hours: '11:30-23:00', map: 'https://maps.app.goo.gl/9P82b1rX2xL8P7yJ7', desc: '냉장 숙성 고기 무제한 (개별 흡연실 완비)' },
        { id: 131, name: '쿠로노 우라난바 본점', sub: 'yakiniku', area: 'namba', time: '도보 10분', price: '4,000엔~', rating: 4.4, res: true, smoking: true, hours: '16:00-24:00', desc: '흑모 와규 파격가 제공 (좌석 흡연 가능)' },
        { id: 137, name: '야키니쿠 마이도', sub: 'yakiniku', area: 'namba', time: '도보 5분', price: '3,500엔~', rating: 4.0, res: false, smoking: true, hours: '17:00-23:00', desc: '와규 무한리필 플랜 (흡연 가능)' },

        // --- Kitashinchi & High-end ---
        { id: 1501, name: '기타신치 산도 (Kitashinchi Sando)', sub: 'others', area: 'kitashinchi', time: '전철 15분', price: '3,000엔~', rating: 4.8, localPick: true, waitLevel: 'medium', hours: '18:00-04:00', desc: '심야에 즐기는 프리미엄 가츠산도와 타마고산도. 기타신치 대표 명물' },
        { id: 1502, name: '스테이크 미소노 (Misono)', sub: 'teppanyaki', area: 'kitashinchi', time: '전철 16분', price: '15,000엔~', rating: 4.7, localPick: true, waitLevel: 'high', hours: '11:30-22:00', desc: '철판구이의 원조. 최상급 고베규를 눈앞에서 구워주는 럭셔리 다이닝' },
        { id: 1503, name: '하나타코 (Hanatako)', sub: 'oden', area: 'umeda', time: '전철 15분', price: '1,000엔~', rating: 4.6, waitLevel: 'high', hours: '10:00-22:00', desc: '우메다 신우메다 식당가 위치. 타코야키도 유명하지만 겨울철 오뎅도 필수' },
        { id: 1504, name: '타코우메 (Takoume)', sub: 'oden', area: 'namba', time: '도보 5분', price: '2,000엔~', rating: 4.5, localPick: true, waitLevel: 'medium', hours: '16:00-23:00', desc: '1844년 창업, 일본에서 가장 오래된 오뎅집. 도톤보리의 전설적인 노포' },

        // --- Breakfast & Late Night ---
        { id: 145, name: '마루후쿠 커피점 (본점)', sub: 'others', area: 'namba', time: '도보 10분', price: '700엔~', rating: 4.1, smoking: true, hours: '08:00-23:00', desc: '1934년 창업, 오사카를 대표하는 정통 킷사텐. 클래식한 모닝 세트 추천 (흡연 가능)' },
        { id: 146, name: '킨류 라멘 (도톤보리)', sub: 'ramen', area: 'namba', time: '도보 5분', price: '800엔~', rating: 3.8, waitLevel: 'medium', hours: '24시간 영업', map: 'https://www.google.com/maps/search/?api=1&query=Kinryu+Ramen+Dotonbori', desc: '도톤보리의 마스코트. 24시간 언제든 먹을 수 있는 서서 먹는 라멘의 낭만' },
        { id: 147, name: '이치란 라면 도톤보리점', sub: 'ramen', area: 'namba', time: '도보 6분', price: '1,100엔~', rating: 4.3, waitLevel: 'high', hours: '24시간 영업', map: 'https://www.google.com/maps/search/?api=1&query=Ichiran+Ramen+Dotonbori+Annex', desc: '말이 필요 없는 명소. 취향대로 커스텀하는 나만의 라멘 (24시간)' },
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
        { id: 702, name: '소주한잔 오사카1호점', sub: 'izakaya', area: 'shinsaibashi', time: '도보 8분', price: '3,000엔~', rating: 4.2, res: false, smoking: 'room', hours: '17:00-익일 05:00 (일 휴무)', desc: '임창정의 소주한잔 오사카 상륙! (실내 흡연 구역 존재)' },

        // --- Added: Takoyaki & Snacks (Tabelog High Rating) ---
        { id: 901, name: '타코야키 도라쿠 와나카', sub: 'snack', area: 'namba', time: '도보 5분', price: '500엔~', rating: 4.4, waitLevel: 'high', hours: '10:00-22:00', desc: '오사카 타코야키의 표준! 겉은 바삭하고 속은 폭신한 정석의 맛 (타베로그 3.6+)' },
        { id: 902, name: '아베노 타코야키 야마찬', sub: 'snack', area: 'others', time: '전철 15분', price: '500엔~', rating: 4.5, waitLevel: 'high', hours: '11:00-23:00', desc: '반죽에 진한 육수 맛이 배어있어 소금만 뿌려 먹어도 맛있는 명점 (타베로그 3.7+)' },
        { id: 903, name: '타코야키 코가류', sub: 'snack', area: 'shinsaibashi', time: '도보 5분', price: '500엔~', rating: 4.3, waitLevel: 'high', hours: '11:00-20:00', desc: '아메리카무라의 상징, 과일 소스와 특제 마요네즈의 환상 궁합 (타베로그 3.5+)' },
        { id: 904, name: '하나다코', sub: 'snack', area: 'umeda', time: '전철 15분', price: '600엔~', rating: 4.7, waitLevel: 'high', hours: '10:00-22:00', desc: '우메다 줄 서는 맛집, 산더미처럼 쌓아주는 파(네기마요)가 일품 (타베로그 3.7+)' },
        { id: 905, name: '타코야키 아이즈야', sub: 'snack', area: 'namba', time: '도보 10분', price: '500엔~', rating: 4.2, waitLevel: 'medium', hours: '10:00-22:00', desc: '타코야키의 원조! 소스 없이 한입에 쏙 들어가는 깊은 감칠맛 (타베로그 3.5+)' },

        // --- Added: Nipponbashi Area Gems ---
        { id: 906, name: '텐치진 니혼바시점', sub: 'ramen', area: 'nipponbashi', time: '도보 3분', price: '1,000엔~', rating: 4.3, waitLevel: 'medium', hours: '11:00-03:00', desc: '숯불 향 가득한 돼지고기 덮밥(부타동)과 진한 라멘의 환상 조화' },
        { id: 907, name: '텐푸라 타로지로', sub: 'others', area: 'nipponbashi', time: '도보 5분', price: '1,500엔~', rating: 4.4, hours: '11:00-21:00', desc: '눈앞에서 튀겨주는 바삭하고 깔끔한 가성비 텐푸라 정식' },
        { id: 908, name: '중화소바 마사니', sub: 'ramen', area: 'nipponbashi', time: '도보 4분', price: '1,000엔~', rating: 4.5, hours: '11:00-22:00', desc: '깔끔하고 깊은 간장 육수로 사랑받는 구로몬 시장 인근 라멘 맛집' },
        { id: 909, name: '야키니쿠 츠루규', sub: 'yakiniku', area: 'nipponbashi', time: '도보 6분', price: '4,000엔~', rating: 4.4, res: true, hours: '17:00-24:00', desc: '닛폰바시 현지인들이 아끼는 고퀄리티 가성비 와규 야키니쿠' },
        { id: 910, name: '스시도코로 신', sub: 'sushi', area: 'nipponbashi', time: '도보 2분', price: '3,000엔~', rating: 4.5, res: true, hours: '17:30-23:00', desc: '닛폰바시에서 합리적인 가격으로 즐기는 정통 에도마에 스시' },
        { id: 916, name: '쿠로몬 산페이', sub: 'sushi', area: 'nipponbashi', time: '도보 5분', price: '2,000엔~', rating: 4.5, hours: '09:00-18:00', desc: '구로몬 시장 안에서 즐기는 신선한 카이센동과 관자 구이 명점' },
        { id: 917, name: '닛폰바시 츠루코', sub: 'okonomiyaki', area: 'nipponbashi', time: '도보 7분', price: '1,500엔~', rating: 4.4, smoking: true, hours: '17:00-24:00', desc: '닛폰바시 뒷골목의 숨은 오코노미야키 강자 (흡연 가능)' },

        // --- Added: Affordable & High-Quality Sushi ---
        { id: 911, name: '카메스시 총본점', sub: 'sushi', area: 'umeda', time: '전철 15분', price: '2,000엔~', rating: 4.7, hours: '11:30-22:30', map: 'https://www.google.com/maps/search/?api=1&query=Kame+Sushi+Total+Head+Office+Osaka', desc: '우메다의 전설! 두툼한 네타와 최고의 가성비로 줄 서서 먹는 곳' },
        { id: 912, name: '스시마사 총본점', sub: 'sushi', area: 'tenma', time: '전철 20분', price: '2,000엔~', rating: 4.4, waitLevel: 'medium', hours: '11:10-23:00', desc: '텐마 시장의 터줏대감, 저렴한 가격에 맛보는 고퀄리티 스시 정식' },
        { id: 913, name: '토키스시 난바점', sub: 'sushi', area: 'namba', time: '도보 8분', price: '1,000엔~', rating: 4.3, waitLevel: 'medium', hours: '11:00-22:30', desc: '우라난바 가성비 제왕! 800엔대 런치 세트로 입소문 난 보석 같은 곳' },

        // --- Added: Kushikatsu Greats ---
        { id: 1240, name: '야에카츠 (Yaekatsu)', sub: 'kushikatsu', area: 'others', time: '전철 15분', price: '2,000엔~', rating: 4.6, res: false, waitLevel: 'high', hours: '10:30-21:00', desc: '신세카이 3대 천왕, 부드러운 튀김옷과 특제 도테야키가 일품 (타베로그 3.7+)' },
        { id: 1241, name: '텐구 (Tengu)', sub: 'kushikatsu', area: 'others', time: '전철 15분', price: '2,000엔~', rating: 4.5, res: false, waitLevel: 'high', hours: '10:30-21:00', desc: '신세카이의 전설, 바삭한 튀김과 깊은 맛의 소스' },
        { id: 1242, name: '시치복신 (Shichifukujin)', sub: 'kushikatsu', area: 'tenma', time: '전철 20분', price: '1,500엔~', rating: 4.4, res: false, hours: '11:30-22:30', desc: '텐마의 낮술 성지, 맥주와 환상 궁합인 가벼운 튀김' },
        { id: 1243, name: '요네야 (Yoneya) 우메다 본점', sub: 'kushikatsu', area: 'umeda', time: '전철 15분', price: '1,500엔~', rating: 4.2, res: false, hours: '09:00-22:30', desc: '우메다 지하상가의 명물, 퇴근길 직장인들의 참새 방앗간' },

        // --- Added: Western & Curry ---
        { id: 1250, name: '지유켄 (Jiyuken) 난바 본점', sub: 'western', area: 'namba', time: '도보 5분', price: '800엔~', rating: 3.9, res: false, waitLevel: 'medium', hours: '11:00-21:00 (월 휴무)', desc: '100년 전통, 밥과 카레를 섞어서 날계란을 올린 "명물 카레"의 원조' },
        { id: 1251, name: '마두라 (Madura) 커피', sub: 'western', area: 'umeda', time: '전철 16분', price: '600엔~', rating: 4.3, res: false, smoking: true, hours: '08:30-21:00', desc: '오사카 제1빌딩의 타임머신 카페, 레트로한 공간에서 즐기는 깊은 맛의 카레' },
        { id: 1252, name: '보타니 커리 (Botani Curry)', sub: 'western', area: 'shinsaibashi', time: '도보 15분 (혼마치)', price: '1,200엔~', rating: 4.7, res: false, hours: '11:00-16:00 (일 휴무)', map: 'https://www.google.co.kr/maps/place/%EB%B3%B4%ED%83%80%EB%8B%88:%EC%BB%A4%EB%A6%AC/@34.7012247,135.4983775,17z/data=!3m1!4b1!4m6!3m5!1s0x6000e7b1feb67ba1:0xa4d4dc954fd280c8!8m2!3d34.7012247!4d135.4983775!16s%2Fg%2F11p60rp4tw?authuser=0&hl=ko&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D', desc: '오사카 스파이스 카레의 정점, 미슐랭 빕구르망 등재 (줄 서는 맛집)' },
        { id: 1253, name: '하리쥬 (Hariju) 도톤보리', sub: 'western', area: 'namba', time: '도보 5분', price: '2,000엔~', rating: 4.5, res: true, waitLevel: 'medium', hours: '11:30-21:30', desc: '1919년 창업, 최고급 와규를 사용한 비프 커틀릿과 카레' },

        // --- Added: 551 & Chinese/Gyoza ---
        { id: 1260, name: '551 호라이 본점', sub: 'chinese', area: 'namba', time: '도보 4분', price: '500엔~', rating: 4.6, res: false, waitLevel: 'high', hours: '10:00-21:30', desc: '오사카 명물 부타만(고기만두), 안 먹고 가면 유죄 (포장/식사 모두 가능)' },
        { id: 1261, name: '텐페이 (Tenpei) 키타신치', sub: 'chinese', area: 'umeda', time: '전철 12분', price: '2,000엔~', rating: 4.5, res: false, hours: '17:00-02:00 (일 휴무)', desc: '오사카 히토쿠치(한입) 교자의 발상지, 얇은 피와 바삭함이 예술' },
        { id: 1262, name: '오사카 오쇼 도톤보리', sub: 'chinese', area: 'namba', time: '도보 6분', price: '1,000엔~', rating: 4.1, res: false, hours: '11:00-23:00', desc: '일본 국민 교자, 저렴하고 맛있는 교자와 볶음밥 세트' },

        // --- Added: Fugu (Blowfish) ---
        { id: 1270, name: '현품 복어 (Genpin) 난바', sub: 'fugu', area: 'namba', time: '도보 8분', price: '5,000엔~', rating: 4.4, res: true, waitLevel: 'medium', hours: '12:00-22:00', desc: '복어요리 대중화의 선두주자, 합리적인 코스로 즐기는 사시미와 탕' },
        { id: 1271, name: '타코야스 (Takoyasu)', sub: 'fugu', area: 'osakabay', time: '전철 25분', price: '20,000엔~', rating: 4.8, res: true, hours: '12:00-21:00', desc: '미슐랭 2스타, 80년 전통의 최고급 자연산 복어 요리 전문점' },
        { id: 914, name: '에비스쵸 엔도스시', sub: 'others', area: 'others', time: '전철 25분', price: '2,500엔~', rating: 4.6, hours: '06:00-14:00', map: 'https://www.google.com/maps/search/?api=1&query=Endo+Sushi+Osaka+Central+Market', desc: '오사카 시장 스타일의 츠카미 스시, 입안에서 사르르 녹는 신선함' },
        { id: 915, name: '스시한 난바점', sub: 'sushi', area: 'namba', time: '도보 10분', price: '2,500엔~', rating: 4.4, hours: '11:30-22:00', desc: '정갈한 분위기에서 즐기는 신선한 제철 생선 전문 스시집' },

        // --- Tennoji / Shinsekai (Deep Osaka) ---
        { id: 1001, name: '야에카츠 (Yaekatsu)', sub: 'katsu', area: 'tennoji', time: '전철 15분', price: '1,500엔~', rating: 4.6, hours: '10:30-20:30 (목요일 휴무)', desc: '신세카이 쿠시카츠의 제왕. 얇은 튀김옷과 마 분말의 쫀득함' },
        { id: 1002, name: '스시센터 우라텐노지', sub: 'sushi', area: 'tennoji', time: '전철 15분', price: '2,000엔~', rating: 4.5, res: true, hours: '14:00-23:00', desc: '줄 서서 먹는 가성비 최강 스시. 네타가 크고 신선함' },
        { id: 1003, name: '그릴 본 (Grill Bon)', sub: 'katsu', area: 'tennoji', time: '전철 16분', price: '2,000엔~', rating: 4.4, hours: '11:30-20:00', desc: '100년 전통의 경양식. 입에서 살살 녹는 비프카츠 샌드위치' },
        { id: 1004, name: '텐구 (Tengu)', sub: 'katsu', area: 'tennoji', time: '전철 15분', price: '1,200엔~', rating: 4.3, hours: '10:30-21:00', desc: '야에카츠 옆집, 바삭한 튀김과 도테야키(미소 조림)가 일품' },
        { id: 1005, name: '스탠드 후지 본점', sub: 'izakaya', area: 'tennoji', time: '전철 15분', price: '2,000엔~', rating: 4.2, hours: '11:00-22:00', desc: '오전부터 낮술 하기 좋은 수산물 중심의 가성비 식당' },
        { id: 1006, name: '야키니쿠 헤이와', sub: 'yakiniku', area: 'tennoji', time: '전철 17분', price: '3,000엔~', rating: 4.1, smoking: true, hours: '17:00-23:00', desc: '츠루하시 스타일의 복고풍 야키니쿠, 호르몬이 맛있음 (흡연 가능)' },
        { id: 1007, name: '아베노 타코야키 야마짱 본점', sub: 'snack', area: 'tennoji', time: '전철 15분', price: '600엔~', rating: 4.7, hours: '11:00-22:00', desc: '미슐랭 빕구르망 등재, 육수 반죽의 깊은 맛 (소스 없이 추천)' },
        { id: 1008, name: '쿠시카츠 다루마 신세카이 총본점', sub: 'katsu', area: 'tennoji', time: '전철 16분', price: '2,000엔~', rating: 4.0, hours: '11:00-22:00', desc: '오사카 쿠시카츠의 원조, "소스 두 번 찍기 금지"의 본거지' },
        { id: 1009, name: '무테포 라멘', sub: 'ramen', area: 'tennoji', time: '전철 20분', price: '1,100엔', rating: 4.3, hours: '11:00-15:00 / 18:00-23:00', desc: '지방과 콜라겐이 농축된 초-농후 돈코츠 라멘 매니아 성지' },

        // --- Fukushima / Others (Hidden Gems) ---
        { id: 1101, name: '모에요 멘스케', sub: 'ramen', area: 'umeda', time: '전철 18분', price: '1,200엔', rating: 4.6, hours: '11:30-15:00 / 18:00-21:00', desc: '후쿠시마 라멘 격전지 1대장. 오리 육수와 조개 육수의 조화' },
        { id: 1102, name: '산쿠 라멘', sub: 'ramen', area: 'umeda', time: '전철 18분', price: '1,000엔', rating: 4.5, hours: '11:00-23:00', desc: '멸치(니보시) 육수의 진수를 보여주는 깔끔한 맛' },
        { id: 1103, name: '레츠 시쿠멘', sub: 'ramen', area: 'umeda', time: '전철 20분 (후쿠시마)', price: '1,000엔', rating: 4.6, hours: '11:00-15:00', desc: '후쿠시마 라멘 격전지, 맑은 간장 베이스의 중화소바' },
        { id: 1105, name: '만제 (Manger)', sub: 'katsu', area: 'others', time: '전철 30분 (야오)', price: '2,500엔~', rating: 4.9, res: true, hours: '11:00-14:00', desc: '일본 전국 돈카츠 1위의 위엄. 예약 필수' },

        // --- Nipponbashi Gems ---
        { id: 1110, name: '이치미젠 (Ichimizen)', sub: 'teishoku', area: 'nipponbashi', time: '도보 10분', price: '1,000엔', rating: 4.4, hours: '11:00-20:00', desc: '마법의 덮밥 그랑프리 금상 수상, 놀라운 양의 텐동' },
        { id: 1111, name: '지유켄 (Jiyuken)', sub: 'teishoku', area: 'namba', time: '도보 8분', price: '800엔', rating: 4.2, hours: '11:00-21:00', desc: '100년 전통, 밥과 카레를 비벼서 날계란을 올린 명물 카레' },
        { id: 1112, name: '텐지노 (Tenjin-no)', sub: 'ramen', area: 'nipponbashi', time: '도보 5분', price: '900엔', rating: 4.3, hours: '11:00-23:00', desc: '닛폰바시 라멘 로드, 진한 닭백탕 국물의 정수' },

        // --- Massive Expansion: Restaurants (High Rated) ---
        { id: 1601, name: '멘야 죠로쿠 (Joroku)', sub: 'ramen', area: 'namba', time: '도보 10분', price: '1,000엔', rating: 3.9, hours: '11:30-15:00 / 18:00-21:00', desc: '타베로그 오사카 라멘 최상위권. 진한 간장 베이스 중화소바 (줄 서야 함)' },
        { id: 1602, name: '카만자 (Kamanza)', sub: 'teishoku', area: 'nipponbashi', time: '도보 8분', price: '1,200엔', rating: 4.2, hours: '11:30-20:00', desc: '현지인들이 줄 서는 닛폰바시 카레 찐맛집' },
        { id: 1603, name: '소바요시 (Sobayoshi)', sub: 'teishoku', area: 'namba', time: '도보 15분 (다이코쿠초)', price: '1,000엔', rating: 4.1, hours: '11:00-21:00', desc: '에도 시대부터 이어온 소바 명가, 메밀 향이 일품' },
        { id: 1604, name: '홋쿄쿠세이 신사이바시', sub: 'teishoku', area: 'shinsaibashi', time: '도보 6분', price: '1,500엔', rating: 4.3, hours: '11:30-22:00', desc: '일본 오므라이스의 원조, 전통 가옥에서 즐기는 클래식한 맛' },
        { id: 1605, name: '미즈노 (Mizuno)', sub: 'teishoku', area: 'namba', time: '도보 5분', price: '1,800엔~', rating: 4.0, waitLevel: 'high', hours: '11:00-22:00', desc: '미슐랭 빕구르망, 도톤보리 오코노미야키 3대장 중 하나' },
        { id: 1606, name: '카메스시 총본점', sub: 'sushi', area: 'umeda', time: '전철 17분', price: '3,000엔~', rating: 4.4, waitLevel: 'high', hours: '11:30-22:30', map: 'https://www.google.com/maps/search/?api=1&query=Kame+Sushi+Total+Head+Office+Osaka', desc: '한국인에게 가장 사랑받는 우메다 가성비 스시, 두툼한 네타' },
        { id: 1607, name: '하나다코 (Hanadako)', sub: 'snack', area: 'umeda', time: '전철 15분', price: '800엔', rating: 4.2, hours: '10:00-22:00', desc: '파(네기)가 산처럼 쌓인 네기마요 타코야키가 명물' },
        { id: 1608, name: '우동야 키스케', sub: 'udon', area: 'umeda', time: '전철 20분 (나카츠)', price: '1,000엔', rating: 4.6, hours: '12:00-21:00', desc: '오사카 최고의 붓카케 우동, 쫄깃한 면발과 도미어묵튀김' },
        { id: 1609, name: '규카츠 모토무라 난바', sub: 'katsu', area: 'namba', time: '도보 5분', price: '1,800엔~', rating: 4.0, waitLevel: 'high', hours: '11:00-22:00', desc: '돌판에 구워 먹는 규카츠 열풍의 주역 (웨이팅 주의)' },
        { id: 1610, name: '하리쥬 (Harijyu)', sub: 'teishoku', area: 'namba', time: '도보 5분', price: '6,000엔~', rating: 4.5, res: true, hours: '11:30-21:30', desc: '100년 전통의 스키야키 명가, 특별한 날을 위한 최고급 식사' }
    ],
    desserts: [
        { id: 501, name: 'Gokan Kitahama (고칸)', sub: 'bakery', area: 'umeda', time: '전철 10분', price: '1,500엔~', rating: 3.9, res: false, hours: '09:30-20:00', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80', desc: '근대 건축물에서 즐기는 럭셔리 쌀 롤케이크와 애프터눈 티' },
        { id: 502, name: 'Parfaiteria Pal', sub: 'parfait', area: 'shinsaibashi', time: '도보 7분', price: '2,000엔~', rating: 3.5, res: false, hours: '17:00-24:00', img: 'https://images.unsplash.com/photo-1543157145-f78c636d023d?auto=format&fit=crop&w=400&q=80', desc: '밤에만 여는 어른들을 위한 럭셔리 파르페 전문점' },
        { id: 503, name: 'Acidracines (아시드라신)', sub: 'bakery', area: 'tenma', time: '전철 15분', price: '800엔~', rating: 3.9, res: false, hours: '11:00-20:00 (수,목 휴무)', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80', desc: '오사카 No.1 파티세리, 예술적인 쁘띠 갸또와 구움과자' },
        { id: 504, name: 'Chocolatier Palet D\'or', sub: 'cafe', area: 'umeda', time: '전철 15분', price: '2,500엔~', rating: 3.7, res: false, hours: '11:00-20:00', img: 'https://images.unsplash.com/photo-1548907602-02f6c6a76c1c?auto=format&fit=crop&w=400&q=80', desc: '초콜릿 장인의 숨결이 담긴 고품격 쇼콜라 디저트의 정점' },
        { id: 505, name: 'Creperie Alcyon', sub: 'cafe', area: 'namba', time: '도보 10분', price: '1,600엔~', rating: 3.7, res: false, hours: '11:30-21:30', img: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=400&q=80', desc: '난바 노포 크레이프 전문점, 타베로그 백명점 선정' },
        { id: 506, name: 'Rikuro Ojisan (리쿠로)', sub: 'bakery', area: 'namba', time: '도보 8분', price: '965엔~', rating: 3.6, res: false, waitLevel: 'medium', hours: '09:00-20:00', img: 'https://images.unsplash.com/photo-1551404885-20af4ec8a236?auto=format&fit=crop&w=400&q=80', desc: '오사카 명물! 탱글탱글한 인생 치즈케이크 갓 구운 맛' },
        { id: 507, name: 'Cafe Annon', sub: 'cafe', area: 'namba', time: '도보 9분', price: '1,400엔~', rating: 3.8, res: false, hours: '11:00-23:00', img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?auto=format&fit=crop&w=400&q=80', desc: '폭신폭신 팬케이크와 조용한 분위기, 난바의 숨은 보석' },
        { id: 508, name: 'HARBS Daimaru Umeda', sub: 'bakery', area: 'umeda', time: '전철 15분', price: '1,000엔~', rating: 4.1, res: false, waitLevel: 'high', hours: '10:00-20:00', img: 'https://images.unsplash.com/photo-1535141192574-5d48bb7dbf11?auto=format&fit=crop&w=400&q=80', desc: '밀크 크레이프의 전설, 과일이 듬뿍 들어간 대형 케이크' },
        { id: 211, name: 'Saturdays NYC Surf', sub: 'cafe', area: 'shinsaibashi', time: '도보 5분', price: '600엔~', rating: 4.4, hours: '09:00-20:00', img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&q=80', desc: '세련된 무드의 서프 샵 겸 카페, 라떼가 일품' },
        { id: 212, name: '뉴 YC (New YC)', sub: 'kissaten', area: 'umeda', time: '전철 15분', price: '700엔~', rating: 4.2, smoking: true, hours: '07:00-23:00', img: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&w=400&q=80', desc: '우메다역 인근 레트로 감성 킷사텐 (전 좌석 흡연 가능)' },
        { id: 213, name: '코메다 커피 (난바)', sub: 'cafe', area: 'namba', time: '도보 5분', price: '500엔~', rating: 4.3, smoking: 'room', hours: '07:00-23:00', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80', desc: '일본의 국민 카페, 모닝 세트가 유명 (흡연실 완비)' },
        { id: 214, name: '카페 M (Cafe M)', sub: 'cafe', area: 'namba', time: '도보 10분', price: '600엔~', rating: 4.1, smoking: true, hours: '08:00-20:00', img: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=400&q=80', desc: '오사카 현지인들이 즐겨 찾는 아늑한 흡연 카페' },
        { id: 215, name: '홀리스 카페 (Holly’s Cafe)', sub: 'cafe', area: 'shinsaibashi', time: '도보 3분', price: '400엔~', rating: 4.0, smoking: 'room', hours: '08:00-22:00', img: 'https://images.unsplash.com/photo-1521017432531-fbd92d744264?auto=format&fit=crop&w=400&q=80', desc: '가성비 좋은 더치커피 전문점 (분점마다 흡연실 완비)' },
        { id: 216, name: '도토루 커피 (Doutor)', sub: 'cafe', area: 'namba', time: '도보 2분', price: '300엔~', rating: 4.0, smoking: 'room', hours: '07:30-22:00', img: 'https://images.unsplash.com/photo-1442154321678-204ad7290b05?auto=format&fit=crop&w=400&q=80', desc: '일본 어디에나 있는 표준 카페 (대부분 흡연실 완비)' },
        { id: 509, name: 'Cafe La Pause', sub: 'cafe', area: 'umeda', time: '전철 16분', price: '1,500엔~', rating: 3.8, res: false, hours: '11:00-22:00', img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&q=80', desc: '루쿠아 내 위치한 프렌치 수플레 팬케이크 명소' },
        { id: 510, name: 'HANNOC', sub: 'cafe', area: 'umeda', time: '전철 18분', price: '1,800엔~', rating: 4.5, res: false, hours: '11:00-21:00', img: 'https://images.unsplash.com/photo-1559925393-8be0ec41b513?auto=format&fit=crop&w=400&q=80', desc: '파티시에들의 예술적인 디저트를 맛볼 수 있는 트렌디 카페' },
        { id: 511, name: 'Canele du Japon', sub: 'bakery', area: 'namba', time: '도보 12분', price: '1,000엔~', rating: 3.6, res: false, hours: '10:00-19:00 (수요일 휴무)', img: 'https://images.unsplash.com/photo-1629115916087-7e8c114a24ed?auto=format&fit=crop&w=400&q=80', desc: '전통과 퓨전이 만난 오사카 까눌레 전문점' },
        { id: 512, name: 'Jun Kissa American', sub: 'kissaten', area: 'namba', time: '도보 5분', price: '1,000엔~', rating: 3.7, res: false, smoking: true, hours: '09:00-22:30', img: 'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&w=400&q=80', desc: '쇼와 레트로 감성 순다방 (좌석 흡연 가능)' },
        { id: 513, name: 'Masahiko Ozumi Paris', sub: 'bakery', area: 'umeda', time: '전철 15분', price: '1,200엔~', rating: 3.9, res: false, hours: '10:00-20:00', img: 'https://images.unsplash.com/photo-1532499016263-f2c3e98df9c8?auto=format&fit=crop&w=400&q=80', desc: '털실 모양 털실케이크로 유명한 파리 감성 하이엔드 파티세리' },
        { id: 514, name: 'Pancake Cafe Mog', sub: 'cafe', area: 'namba', time: '도보 5분', price: '1,200엔~', rating: 3.6, res: false, hours: '11:00-21:00', img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?auto=format&fit=crop&w=400&q=80', desc: '가장 맛있는 팬케이크 전문점, 폭신한 식감이 일품' },
        { id: 515, name: 'COLONY by EQI', sub: 'cafe', area: 'shinsaibashi', time: '도보 5분', price: '1,500엔~', rating: 4.6, res: false, hours: '11:00-23:00', desc: '아메무라의 전설적인 수플레 팬케이크 맛집' },
        { id: 516, name: '행복의 팬케이크 난바점', sub: 'cafe', area: 'namba', time: '도보 5분', price: '1,400엔~', rating: 4.4, res: false, waitLevel: 'high', hours: '11:00-20:00', desc: '입안에서 사르르 녹는 구름 같은 식감의 팬케이크' },
        { id: 704, name: '시아와세노 팬케이크', sub: 'cafe', area: 'shinsaibashi', time: '도보 8분', price: '1,200엔', rating: 4.5, res: true, waitLevel: 'high', hours: '10:00-19:30', desc: '폭신폭신한 수플레 팬케이크의 정석 (예약 필수)' },
        { id: 705, name: '카카아카카 (Kakaakaka)', sub: 'bakery', area: 'namba', time: '도보 12분', price: '300엔~', rating: 4.2, res: false, hours: '10:00-18:00', desc: '귀여운 비주얼과 달콤한 맛의 도넛 전문점' },

        // --- Tabelog High Ranking Desserts ---
        { id: 710, name: '아시드라신 (Acidracines)', sub: 'bakery', area: 'tenma', time: '전철 25분', price: '600엔~', rating: 4.8, res: false, hours: '11:00-20:00 (수목 휴무)', desc: '오사카 타베로그 1위, 예술적인 쁘띠 갸또와 케이크' },
        { id: 711, name: '살롱 드 몽쉐르 (도지마롤)', sub: 'cafe', area: 'shinsaibashi', time: '도보 5분', price: '800엔~', rating: 4.5, res: false, waitLevel: 'medium', hours: '10:00-20:00', desc: '전설적인 도지마롤 본점, 크림의 풍미가 차원이 다름' },
        { id: 712, name: '고칸 (GOKAN) 기타하마', sub: 'cafe', area: 'umeda', time: '전철 15분', price: '1,200엔~', rating: 4.6, res: true, waitLevel: 'medium', hours: '09:30-19:30', desc: '근대 건축 문화재에서 즐기는 쌀로 만든 고급 디저트와 브런치' },
        { id: 713, name: '모토커피 (MOTO COFFEE)', sub: 'cafe', area: 'umeda', time: '전철 15분', price: '600엔~', rating: 4.4, res: false, waitLevel: 'high', hours: '12:00-18:30', desc: '강변 테라스 뷰가 환상적인 기타하마의 대표 감성 카페' },
        { id: 714, name: '하브스 (HARBS) 난바 파크스', sub: 'cafe', area: 'namba', time: '도보 12분', price: '900엔~', rating: 4.3, res: false, waitLevel: 'high', hours: '11:00-21:00', desc: '과일이 듬뿍 들어간 거대한 밀크레이프 케이크의 성지' },
        { id: 715, name: '리쿠로 오지상 치즈케이크', sub: 'bakery', area: 'namba', time: '도보 5분', price: '900엔', rating: 4.5, res: false, waitLevel: 'medium', hours: '09:00-20:00', desc: '갓 구워 나온 탱글탱글한 치즈케이크, 가성비 최고의 선물' },
        { id: 716, name: '그로브 (Glove Cafe)', sub: 'cafe', area: 'tenma', time: '전철 20분', price: '500엔~', rating: 4.2, res: false, hours: '11:00-18:00', desc: '텐진바시 상점가의 숨은 명소, 엔틱한 분위기의 홍차 전문점' },
        { id: 717, name: 'PABLO (파블로) 미니', sub: 'bakery', area: 'namba', time: '도보 6분', price: '300엔~', rating: 4.1, res: false, hours: '11:00-21:00', desc: '한 손에 쏙 들어오는 진한 치즈 타르트' },
        { id: 718, name: '카코 바 (Cacao Bar)', sub: 'cafe', area: 'umeda', time: '전철 18분', price: '2,000엔~', rating: 4.7, res: true, hours: '13:00-19:00', desc: '초콜릿 장인이 선사하는 최고급 디저트 코스 (예약 필수)' },
        { id: 719, name: '모찌쇼 시즈쿠', sub: 'matcha', area: 'shinsaibashi', time: '도보 10분', price: '500엔~', rating: 4.6, res: false, hours: '10:30-18:00', desc: '현대적인 감각으로 재해석한 예술 같은 떡 디저트' },
        { id: 519, name: '번사이드 스트리트 카페', sub: 'cafe', area: 'shinsaibashi', time: '도보 6분', price: '1,400엔~', rating: 4.2, res: false, hours: '11:00-20:00', desc: '화이트 & 우드 톤의 감각적인 팬케이크 맛집' },
        { id: 520, name: '에그앤띵스', sub: 'cafe', area: 'shinsaibashi', time: '도보 4분', price: '1,500엔~', rating: 4.1, res: false, hours: '09:00-21:00', desc: '하와이안 감성의 산더미 생크림 팬케이크' },

        // --- Added: Retro Kissaten & Matcha ---
        { id: 730, name: '아라비야 커피 (Arabiya)', sub: 'kissaten', area: 'namba', time: '도보 6분', price: '700엔~', rating: 4.4, hours: '10:00-18:00 (수요일 휴무)', desc: '1951년 창업, 목조 인테리어가 멋진 정통 킷사텐 (흡연 가능)' },
        { id: 731, name: '킷사텐 카가리 (Kagari)', sub: 'kissaten', area: 'umeda', time: '전철 15분', price: '600엔~', rating: 4.3, hours: '08:00-22:00', desc: '치즈케이크와 진한 커피가 맛있는 전형적인 쇼와 레트로 다방' },
        { id: 732, name: '나카무라 토키치 (Tokichi)', sub: 'matcha', area: 'umeda', time: '전철 15분', price: '1,500엔~', rating: 4.7, hours: '11:00-20:00', desc: '교토 우지의 전설적인 말차 전문점. 인생 말차 파르페' },
        { id: 733, name: '우지엔 (Ujien) 본점', sub: 'matcha', area: 'shinsaibashi', time: '도보 5분', price: '1,000엔~', rating: 4.5, hours: '10:00-20:00', desc: '오사카 한복판에서 즐기는 고급 말차 몬블랑과 빙수' },

        // --- Tennoji Sweets ---
        { id: 1501, name: '하브스 텐노지 미오', sub: 'bakery', area: 'tennoji', time: '전철 15분', price: '1,000엔~', rating: 4.3, res: false, hours: '11:00-21:00', desc: '텐노지에서도 맛보는 과일 밀크레이프, 뷰가 좋음' },
        { id: 1502, name: '야드 커피 & 크래프트 초콜릿', sub: 'cafe', area: 'tennoji', time: '전철 18분', price: '1,200엔~', rating: 4.5, res: false, hours: '10:00-18:00', desc: '우에혼마치 인근, 나카타니테이 출신의 최고급 초콜릿 카페' },
        { id: 1504, name: '잇신도 (Isshindo)', sub: 'bakery', area: 'tennoji', time: '전철 20분', price: '400엔~', rating: 4.5, res: false, hours: '09:00-19:00', desc: '과즙이 터지는 명품 과일 찹쌀떡(다이후쿠) 전문점' },

        // --- Nipponbashi Cafe ---
        { id: 1510, name: '메이드리밍 닛폰바시', sub: 'theme', area: 'nipponbashi', time: '도보 10분', price: '2,500엔~', rating: 4.2, res: false, hours: '11:30-23:00', desc: '닛폰바시 입문 코스, 모에모에 큥! 메이드 카페 체험' },
        { id: 1511, name: '멜론 드 멜론', sub: 'bakery', area: 'nipponbashi', time: '도보 8분', price: '300엔', rating: 4.3, res: false, hours: '10:00-20:00', desc: '갓 구운 프리미엄 멜론빵 전문점, 겉바속촉의 정석' },

        // --- Massive Expansion: Desserts ---
        { id: 1621, name: '마루후쿠 커피점 센니치마에', sub: 'cafe', area: 'namba', time: '도보 6분', price: '800엔~', rating: 4.1, smoking: true, hours: '08:00-23:00', desc: '쇼와 시대부터 이어온 진한 커피와 핫케이크 (흡연 가능)' },
        { id: 1622, name: '그라머시 뉴욕 (다카시마야)', sub: 'bakery', area: 'namba', time: '도보 5분', price: '2,000엔~', rating: 4.2, hours: '10:00-20:00', desc: '뉴욕 스타일 치즈케이크, 선물용으로 최고 인기' },
        { id: 1623, name: '가토 페스타 하라다 (한신)', sub: 'bakery', area: 'umeda', time: '전철 16분', price: '1,000엔~', rating: 4.5, hours: '10:00-20:00', desc: '일본 국민 러스크 "구떼 데 로와", 고급스러운 선물' },
        { id: 1624, name: '애니메이트 카페 닛폰바시', sub: 'theme', area: 'nipponbashi', time: '도보 12분', price: '1,000엔~', rating: 4.0, hours: '11:00-21:00', desc: '인기 애니메이션 콜라보 메뉴와 한정 굿즈' },
        { id: 1625, name: '카페 그램 (Gram) 신사이바시', sub: 'cafe', area: 'shinsaibashi', time: '도보 5분', price: '1,200엔~', rating: 3.9, res: false, hours: '11:00-20:00', desc: '하루 3번, 20개 한정 판매하는 프리미엄 팬케이크' },

        // --- ICE CREAM & DANGO & SWEETS ---
        { id: 801, name: 'Gufo Groovy Ice Cream', sub: 'icecream', area: 'shinsaibashi', time: '도보 10분', price: '500엔~', rating: 3.8, hours: '11:00-19:00 (수 휴무)', desc: '호리에의 힙한 소프트 아이스크림, SNS 핫플레이스' },
        { id: 802, name: '키야스 소본포 (Kiyasu)', sub: 'traditional', area: 'umeda', time: '전철 15분 (주소역)', price: '200엔~', rating: 3.8, hours: '10:00-20:00', desc: '주문 즉시 구워주는 오사카 최고의 미타라시 당고 (주소 명물)' },
        { id: 803, name: '와드 (Wad Omotenashi Cafe)', sub: 'icecream', area: 'shinsaibashi', time: '도보 8분', price: '1,200엔~', rating: 3.9, hours: '12:00-19:00', desc: '다도 전문가가 내려주는 일본 차와 빙수(카키고리), 고급스러운 휴식' },
        { id: 804, name: '키르훼봉 그랜드 프론트', sub: 'bakery', area: 'umeda', time: '전철 16분', price: '1,000엔~', rating: 3.8, hours: '11:00-21:00', desc: '형형색색의 제철 과일이 듬뿍 올라간 프리미엄 과일 타르트' },
        { id: 805, name: '홋쿄쿠 (The Arctic) 난바', sub: 'icecream', area: 'namba', time: '도보 6분', price: '200엔~', rating: 3.5, hours: '10:00-20:00', desc: '오사카의 명물 수제 아이스캔디(하드), 깔끔하고 추억 돋는 맛' },
        { id: 806, name: '메오토 젠자이 (부부단팥죽)', sub: 'traditional', area: 'namba', time: '도보 5분', price: '800엔', rating: 3.6, hours: '10:00-22:00', desc: '호젠지 요코초의 명물, 하나를 시키면 두 그릇에 나눠 나오는 단팥죽' },
        { id: 807, name: '카키고리 연구소', sub: 'icecream', area: 'shinsaibashi', time: '도보 10분', price: '1,200엔~', rating: 3.7, hours: '11:00-19:00', desc: '독창적인 시럽과 토핑의 연구소 스타일 빙수, 비주얼 최강' },
        { id: 808, name: '카카오 삼파카 (Cacao Sampaka)', sub: 'icecream', area: 'umeda', time: '전철 15분', price: '800엔~', rating: 3.9, hours: '09:00-20:00', desc: '스페인 왕실 초콜릿 브랜드의 진한 초코 소프트 아이스크림' },
        { id: 809, name: '교쿠세이야 (Gyokuseiya)', sub: 'traditional', area: 'nipponbashi', time: '도보 8분', price: '300엔~', rating: 3.8, hours: '14:00-22:00', desc: '150년 전통의 화과자점, 선물용으로 좋은 고급 양갱과 화과자' },
        { id: 810, name: '다루마 (튀김 꼬치 아님)', sub: 'bakery', area: 'tennoji', time: '전철 18분', price: '300엔~', rating: 3.7, hours: '10:00-19:00', desc: '오사카의 숨은 명물 과자, 튀김 꼬치 다루마와 이름이 같은 제과점' },
        { id: 811, name: '551 호라이 아이스캔디', sub: 'icecream', area: 'namba', time: '도보 5분', price: '140엔~', rating: 4.0, hours: '10:00-21:00', desc: '만두만큼 유명한 551의 아이스캔디. 과일 맛이 살아있는 여름 필수품' },
        { id: 812, name: '나루토 타이야키 본점', sub: 'traditional', area: 'namba', time: '도보 8분', price: '280엔~', rating: 4.2, hours: '11:00-23:00', desc: '천연 방식(한 마리씩 굽는)으로 구워낸 겉바속촉 프리미엄 붕어빵' },
        { id: 813, name: '스웨덴 (Sweden) 소프트크림', sub: 'icecream', area: 'umeda', time: '전철 15분', price: '500엔~', rating: 4.3, hours: '11:00-21:00', desc: '한큐 삼번가의 전설적인 소프트 아이스크림, 진한 우유의 풍미' }
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
        { id: 242, name: '도큐핸즈 우메다', sub: 'hobby', area: 'umeda', time: '전철 17분', rating: 4.3, hours: '10:00-20:00', desc: '각종 아이디어 상품과 라이프스타일 굿즈가 가득한 곳' },

        // --- Tennoji Shopping ---
        { id: 1201, name: '텐노지 미오 (MIO)', sub: 'dept', area: 'tennoji', time: '전철 15분', rating: 4.3, hours: '11:00-21:00', desc: '2030 여성 패션 브랜드가 집결된 텐노지 역 직결 쇼핑몰' },
        { id: 1202, name: '아베노 큐즈몰 (Q\'s Mall)', sub: 'dept', area: 'tennoji', time: '전철 16분', rating: 4.4, hours: '10:00-21:00', desc: '도큐핸즈, 이토요카도, 유니클로 등 대형 매장이 모인 복합몰' },
        { id: 1203, name: '긴테츠 백화점 본점', sub: 'dept', area: 'tennoji', time: '전철 15분', rating: 4.5, hours: '10:00-20:00', desc: '아베노 하루카스 내 위치, 압도적 규모의 식품관과 디저트' },

        // --- Nipponbashi Shopping ---
        { id: 1210, name: '조신(Joshin) 슈퍼 키즈 랜드', sub: 'hobby', area: 'nipponbashi', time: '도보 12분', rating: 4.6, hours: '10:00-20:00', desc: '프라모델, 타미야, 철도 모형의 성지. 덕후들의 필수 코스' },
        { id: 1211, name: '정글 (Jungle) 오사카', sub: 'hobby', area: 'nipponbashi', time: '도보 10분', rating: 4.5, hours: '11:00-20:00', desc: '희귀 피규어와 특촬물 굿즈가 가득한 중고 샵' },
        { id: 1212, name: '옐로우 서브마린', sub: 'hobby', area: 'nipponbashi', time: '도보 11분', rating: 4.4, hours: '11:00-20:00', desc: '보드게임과 카드 게임, 각종 트레이딩 피규어 전문점' },

        // --- Massive Expansion: Shopping ---
        { id: 1641, name: '라신반 (Lashinbank) 닛폰바시', sub: 'hobby', area: 'nipponbashi', time: '도보 11분', rating: 4.2, hours: '11:00-20:00', desc: '중고 애니 굿즈, 동인지, 피규어 매입/판매 대형 체인' },
        { id: 1642, name: 'K-BOOKS 오사카 난바', sub: 'hobby', area: 'nipponbashi', time: '도보 10분', rating: 4.3, hours: '11:00-20:00', desc: '여성향 굿즈가 특히 강한 애니메이션 샵' },
        { id: 1643, name: '한큐 맨즈 오사카', sub: 'dept', area: 'umeda', time: '전철 15분', rating: 4.6, hours: '11:00-20:00', desc: '남성을 위한 모든 명품이 모인 일본 최대급 맨즈 백화점' },
        { id: 1644, name: '그랜드 프론트 오사카', sub: 'dept', area: 'umeda', time: '전철 16분', rating: 4.7, hours: '10:00-21:00', desc: '우메다 북쪽의 거대 복합 타운, 세련된 라이프스타일 샵 다수' },
        { id: 1645, name: '난바 시티 (NAMBA CITY)', sub: 'dept', area: 'namba', time: '도보 3분', rating: 4.1, hours: '11:00-21:00', desc: '난바역과 바로 연결된 지하상가 및 쇼핑몰, 캐주얼 브랜드 중심' },

        // --- Expanded Vintage & General Shopping ---
        { id: 1801, name: 'NUTTY Vintage', sub: 'vintage', area: 'namba', time: '도보 12분', rating: 4.6, hours: '12:00-20:00', desc: '오렌지 스트릿의 보석 같은 빈티지 샵, 유니크한 50년대 스타일' },
        { id: 1802, name: 'LARA VINTAGE', sub: 'vintage', area: 'shinsaibashi', time: '도보 8분', rating: 4.4, hours: '13:00-20:00', desc: '여성스럽고 우아한 라인업이 돋보이는 큐레이션 빈티지' },
        { id: 1803, name: 'Elulu by JAM Umeda', sub: 'vintage', area: 'umeda', time: '전철 16분', rating: 4.5, hours: '11:00-21:00', desc: '여성 전용 대형 빈티지 스토어, 나카자키초 인근' },
        { id: 1804, name: 'Grizzly Amemura', sub: 'vintage', area: 'shinsaibashi', time: '도보 5분', rating: 4.3, hours: '12:00-20:00', desc: '아메무라의 힙한 분위기, 합리적인 가격대의 유즈드 의류' },
        { id: 1805, name: 'Green Pepe', sub: 'vintage', area: 'umeda', time: '전철 18분', rating: 4.7, hours: '12:00-19:00 (화 휴무)', desc: '나카자키초의 레트로 그 자체, 7080 감성 소품과 의류' },
        { id: 1806, name: 'Standard Bookstore', sub: 'hobby', area: 'tennoji', time: '전철 15분', rating: 4.5, hours: '11:00-20:00', desc: '책과 커피, 잡화가 어우러진 감각적인 서점' },
        { id: 1807, name: 'Flying Tiger Copenhagen', sub: 'hobby', area: 'shinsaibashi', time: '도보 5분', rating: 4.2, hours: '11:00-20:00', desc: '덴마크의 다이소, 컬러풀하고 유머러스한 파티 용품' },
        { id: 1808, name: 'Village Vanguard (Americamura)', sub: 'hobby', area: 'shinsaibashi', time: '도보 5분', rating: 4.4, hours: '11:00-21:00', desc: '놀 수 있는 서점, 기상천외한 잡화와 서브컬처 굿즈' },
        { id: 1809, name: 'D&Department Osaka', sub: 'hobby', area: 'namba', time: '도보 15분', rating: 4.6, hours: '11:30-19:00 (수 휴무)', desc: '롱 라이프 디자인을 추구하는 편집샵, 오사카 감성 가득' },
        { id: 1810, name: 'BIOTOP Osaka', sub: 'street', area: 'namba', time: '도보 12분', rating: 4.5, hours: '11:00-20:00', desc: '식물원 같은 분위기의 럭셔리 라이프스타일 편집샵' },

        // --- Additional Spots (UX Upgrade) ---
        { id: 1811, name: '루쿠아 1100 (LUCUA 1100)', sub: 'dept', area: 'umeda', time: '전철 15분', rating: 4.7, hours: '10:30-20:30', desc: '트렌디한 2030 여성을 위한 쇼핑몰! 츠타야 서점과 무인양품 입점' },
        { id: 1812, name: '닌텐도 오사카 (Nintendo)', sub: 'hobby', area: 'umeda', time: '전철 16분', rating: 4.9, hours: '10:00-20:00', desc: '다이마루 우메다 13층, 슈퍼마리오와 젤다 굿즈의 천국' },
        { id: 1813, name: '점프샵 오사카 (JUMP SHOP)', sub: 'hobby', area: 'umeda', time: '전철 16분', rating: 4.6, hours: '10:30-20:30', desc: '햅파이브 인근, 원피스/주술회전 등 소년점프 공식 굿즈샵' },
        { id: 1814, name: '디즈니 스토어 (Disney)', sub: 'hobby', area: 'umeda', time: '전철 16분', rating: 4.8, hours: '11:00-21:00', desc: '루쿠아 1100 근처, 오사카 한정판 인형과 굿즈 가득' },
        { id: 1815, name: '포터 스탠드 (PORTER STAND)', sub: 'street', area: 'namba', time: '도보 4분', rating: 4.5, hours: '11:00-21:00', desc: '난바 파크스 내 위치, 요시다 포터의 가방 전문 컨셉 스토어' },
        { id: 1816, name: '오사카 다카시마야', sub: 'dept', area: 'namba', time: '도보 1분', rating: 4.4, hours: '10:00-20:00', desc: '난바역 직결 정통 백화점, 지하 식품관 디저트가 유명' },
        { id: 1817, name: '키디랜드 (Kiddy Land)', sub: 'hobby', area: 'umeda', time: '전철 15분', rating: 4.7, hours: '10:00-21:00', desc: '한큐 삼번가, 리락쿠마/스누피/미피 등 캐릭터 굿즈 총집합' }
    ],
    bars: [
        // --- Shinsaibashi / Namba (Clubs & Hunting) ---
        { id: 301, name: 'BAMBI (밤비)', sub: 'club', area: 'shinsaibashi', time: '도보 5분', price: '3,000엔~', rating: 4.2, hunting: true, smoking: true, waitLevel: 'high', hours: '22:00-05:00', img: 'https://images.unsplash.com/photo-1566737236500-c83d80142a9e?auto=format&fit=crop&w=400&q=80', desc: '신사이바시 No.1 클럽 (실내 흡연 가능)' },
        { id: 302, name: 'The Pink', sub: 'club', area: 'shinsaibashi', time: '도보 7분', price: '2,500엔~', rating: 4.3, hunting: true, smoking: true, hours: '22:00-05:00', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80', desc: '힙합 성지 (실내 흡연 가능)' },
        { id: 303, name: 'GALA RESORT', sub: 'club', area: 'namba', time: '도보 8분', price: '3,000엔~', rating: 4.1, hunting: true, smoking: true, hours: '22:00-05:00', img: 'https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=400&q=80', desc: '초대형 테마 클럽 (실내 흡연 가능)' },
        { id: 304, name: 'GIRAFFE JAPAN (2025 NEW)', sub: 'club', area: 'namba', time: '도보 5분', price: '3,000엔~', rating: 4.0, hunting: true, smoking: true, hours: '19:00-01:00', img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=400&q=80', desc: '도톤보리 랜드마크 클럽 (실내 흡연 가능)' },
        { id: 305, name: 'Ammona (암모나)', sub: 'club', area: 'shinsaibashi', time: '도보 8분', price: '3,000엔~', rating: 4.2, hunting: true, smoking: true, hours: '23:00-04:00', img: 'https://images.unsplash.com/photo-1514525253361-b83f859b71c0?auto=format&fit=crop&w=400&q=80', desc: '외국인 인기 클럽 (실내 흡연 가능)' },
        { id: 311, name: 'Oriental Lounge 신사이바시', sub: 'hunting', area: 'shinsaibashi', time: '도보 5분', price: '남성 유료 / 여성 무료', rating: 4.5, hunting: true, smoking: true, hours: '18:00-05:00', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=400&q=80', desc: '럭셔리 페어링 라운지 (좌석 흡연 가능)' },
        { id: 312, name: 'JIS Namba', sub: 'hunting', area: 'namba', time: '도보 10분', price: '남성 시간당 요금', rating: 4.4, hunting: true, smoking: 'room', hours: '18:00-06:00', img: 'https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=400&q=80', desc: '세련된 헌팅 라운지 (흡연 전용실 완비)' },
        { id: 332, name: 'Bee 난바', sub: 'izakaya', area: 'namba', time: '도보 10분', price: '2,000엔~', rating: 4.1, hunting: true, smoking: true, hours: '17:00-05:00', img: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=400&q=80', desc: '다트가 있는 소셜 펍 (흡연 가능)' },

        // --- Umeda (Adult Clubs) ---
        { id: 306, name: 'OWL OSAKA', sub: 'club', area: 'umeda', time: '전철 15분', price: '3,000엔~', rating: 4.4, hunting: true, smoking: 'room', waitLevel: 'high', hours: '19:00-01:00', img: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb1?auto=format&fit=crop&w=400&q=80', desc: '우메다 성인 클럽 (흡연실 완비)' },
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
        { id: 381, name: '토리키조쿠 (Torikizoku) 도톤보리', sub: 'nomihoudai', area: 'namba', time: '도보 5분', price: '3,600엔 (타베노미)', rating: 4.3, hunting: false, smoking: true, waitLevel: 'medium', hours: '17:00-05:00', desc: '일본 국민 야키토리 체인. 가성비 최강 2시간 무제한 먹고 마시기 (흡연 가능)' },
        { id: 382, name: '0초 레몬사와 센다이 호르몬', sub: 'nomihoudai', area: 'namba', time: '도보 8분', price: '500엔/60분', rating: 4.5, hunting: false, smoking: true, waitLevel: 'medium', hours: '17:00-23:00', desc: '테이블마다 레몬사와 수도꼭지가 설치된 0초 리필 천국. 호르몬 구이와 환상 궁합 (흡연 가능)' },
        { id: 383, name: '바 문워크 (Bar Moon Walk)', sub: 'nomihoudai', area: 'shinsaibashi', time: '도보 6분', price: '안주 200엔~', rating: 4.4, hunting: false, smoking: true, hours: '18:00-05:00', desc: '모든 칵테일 200엔대의 충격적인 가성비. 영화 밤은 짧아 걸어 아가씨야 배경지 (흡연 가능)' },
        { id: 384, name: '쿠랜드 사케 마켓 (Kurand)', sub: 'nomihoudai', area: 'umeda', time: '전철 15분', price: '3,300엔 (무제한)', rating: 4.7, hunting: false, smoking: false, hours: '17:00-23:00', desc: '100종류 이상의 프리미엄 사케, 과실주를 시간 무제한으로 마시는 꿈의 공간 (외부 음식 반입 가능)' },
        { id: 385, name: '신지다이 (Shinjidai) 오사카', sub: 'nomihoudai', area: 'namba', time: '도보 10분', price: '생맥주 190엔~', rating: 4.2, hunting: false, smoking: true, waitLevel: 'medium', hours: '17:00-05:00', desc: '전설의 닭껍질 튀김 50엔, 생맥주 190엔의 압도적 가성비 (흡연 가능)' },
        { id: 386, name: '니혼슈 우나기다니', sub: 'nomihoudai', area: 'shinsaibashi', time: '도보 5분', price: '2,000엔 (60분)', rating: 4.6, hunting: false, smoking: true, hours: '15:00-24:00', desc: '우나기다니 골목의 숨은 사케 명소. 전국 명주 무제한 시음 (흡연 가능)' },
        { id: 387, name: '280엔 야키토리 (Niwatori)', sub: 'nomihoudai', area: 'namba', time: '도보 7분', price: '전메뉴 280엔', rating: 4.0, hunting: false, smoking: true, hours: '17:00-03:00', desc: '모든 메뉴 280엔 균일가. 지갑 걱정 없이 즐기는 로컬 술집 (흡연 가능)' },

        // --- Tennoji / Shinsekai Bars ---
        { id: 1301, name: '타네보니 (Taneboni)', sub: 'izakaya', area: 'tennoji', time: '전철 16분', price: '1,500엔~', rating: 4.4, hunting: false, smoking: true, hours: '16:00-23:00', desc: '아베노의 숨은 타치노미, 제철 안주와 니혼슈 (흡연 가능)' },
        { id: 1302, name: '반샤쿠 (Banshaku)', sub: 'izakaya', area: 'tennoji', time: '전철 15분', price: '2,000엔~', rating: 4.3, hunting: false, smoking: true, hours: '17:00-24:00', desc: '텐노지 뒷골목 이자카야, 오뎅과 하이볼이 맛있는 곳 (흡연 가능)' },
        { id: 1303, name: 'HUB 텐노지 아베노점', sub: 'social', area: 'tennoji', time: '전철 15분', price: '1,000엔~', rating: 4.1, hunting: true, smoking: 'room', hours: '12:00-24:00', desc: '외국인과 현지인이 어우러지는 브리티시 펍 (흡연실 완비)' },
        { id: 1304, name: '사카바 토요 (Toyo)', sub: 'izakaya', area: 'tennoji', time: '전철 25분 (교바시)', price: '2,000엔~', rating: 4.6, hunting: false, hours: '13:00-19:00 (월/목/일 휴무)', desc: '넷플릭스 길거리 셰프들 출연! 성격 좋은 사장님의 불쇼와 참치 (교바시역)' },

        // --- Massive Expansion: Bars ---
        { id: 1631, name: 'Bar Guild', sub: 'social', area: 'nipponbashi', time: '도보 12분', price: '2,000엔~', rating: 4.0, hunting: false, smoking: true, hours: '18:00-24:00', desc: '서브컬처/게임 테마의 독특한 바 (동호회 느낌)' },
        { id: 1632, name: 'Bar K', sub: 'izakaya', area: 'kitashinchi', time: '전철 18분', price: '4,000엔~', rating: 4.8, localPick: true, smoking: true, hours: '18:00-02:00', desc: '세계적인 바텐더가 있는 오센틱 바, 위스키 마니아 추천 (기타신치 명소)' },
        { id: 1636, name: 'The Bar Elixir', sub: 'izakaya', area: 'kitashinchi', time: '전철 16분', price: '칵테일 2,000엔~', rating: 4.9, localPick: true, waitLevel: 'low', smoking: true, hours: '19:00-03:00', desc: '기타신치의 숨겨진 보석 같은 바. 계절 과일 칵테일이 일품' },
        { id: 1633, name: 'Bar Speakeasy', sub: 'izakaya', area: 'tenma', time: '전철 20분', price: '칵테일 1,000엔~', rating: 4.7, hunting: false, smoking: true, hours: '18:00-01:00', desc: '텐마의 전설적인 오센틱 바. 영어가 통하며 분위기가 매우 좋음' },
        { id: 1634, name: 'Beer Belly (Minoh Beer)', sub: 'izakaya', area: 'tenma', time: '전철 18분', price: '맥주 800엔~', rating: 4.6, hunting: false, smoking: false, hours: '17:00-23:00', desc: '오사카 대표 수제맥주 미노오 맥주 직영점. 신선한 탭 맥주를 즐길 수 있음' },
        { id: 1635, name: '타치노미 진성 (Jinsei)', sub: 'izakaya', area: 'tenma', time: '전철 20분', price: '1,500엔~', rating: 4.4, hunting: false, smoking: true, hours: '15:00-23:00', desc: '텐마 시장의 활기찬 분위기 속에서 즐기는 가성비 최강 타치노미' }
    ],
    activities: [
        // --- Shinsaibashi / Namba ---
        { id: 431, name: '오사카 고카트 체험', sub: 'others', area: 'namba', time: '도보 10분', price: '7,000엔~', rating: 4.9, hours: '10:00-21:00', img: 'https://images.unsplash.com/photo-1511994298241-608e28f14f66?auto=format&fit=crop&w=400&q=80', desc: '도로 위를 달리는 슈퍼카트, 오사카 거리를 누비는 쾌감' },
        { id: 432, name: '도톤보리 리버 크루즈', sub: 'others', area: 'namba', time: '도보 5분', price: '1,200엔~', rating: 4.3, hours: '11:00-21:00', img: 'https://images.unsplash.com/photo-1549110462-817db4957e8f?auto=format&fit=crop&w=400&q=80', desc: '강 위에서 즐기는 오사카의 화려한 네온사인과 글리코상' },
        { id: 437, name: '닌자 체험 카페', sub: 'others', area: 'namba', time: '도보 10분', price: '3,000엔~', rating: 4.7, hours: '10:00-20:00', img: 'https://images.unsplash.com/photo-1551024739-78e9d60c45ca?auto=format&fit=crop&w=400&q=80', desc: '닌자 복을 입고 수리검 던지기 체험! SNS 인증샷 명소' },
        { id: 411, name: '스파월드 세계의 대온천', sub: 'onsen', area: 'namba', time: '전철 12분', price: '1,500엔~', rating: 4.2, waitLevel: 'medium', hours: '10:00-익일 08:45', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=400&q=80', desc: '전 세계 테마 온천이 모인 거대 휴양소, 슬라이드 완비' },
        { id: 441, name: '라운드원 센니치마에', sub: 'sports', area: 'namba', time: '도보 8분', price: '2,000엔~', rating: 4.1, hours: '24시간 영업', img: 'https://images.unsplash.com/photo-1538356111083-74819827bbbb?auto=format&fit=crop&w=400&q=80', desc: '볼링, 배팅, 다트 등 스포츠와 게임을 한번에 즐기는 곳' },

        // --- Umeda ---
        { id: 404, name: '우메다 스카이빌딩', sub: 'theme', area: 'umeda', time: '전철 18분', price: '1,500엔~', rating: 4.5, waitLevel: 'medium', hours: '09:30-22:30', img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80', desc: '공중정원에서 바라보는 오사카 최고의 야경 명소' },
        { id: 421, name: '골드짐 오사카 우메다', sub: 'sports', area: 'umeda', time: '전철 15분', price: '1일권 2,860엔', rating: 4.5, hours: '07:00-23:30 (일요일 20:00)', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80', desc: '헬스 매니아 성지, 오사카 최고의 운동 시설' },
        { id: 422, name: '우메다 배팅 돔', sub: 'sports', area: 'umeda', time: '전철 16분', price: '400엔~', rating: 4.3, hours: '10:00-23:00', img: 'https://images.unsplash.com/photo-1505236858219-8359eb29e3a9?auto=format&fit=crop&w=400&q=80', desc: '스트레스 해소에 최고! 남녀노소 즐기는 야구 배팅 센터' },

        // --- Osaka Bay / Others ---
        { id: 401, name: '유니버설 스튜디오 재팬', sub: 'theme', area: 'osakabay', time: '전철 30분', price: '8,000엔~', rating: 4.8, waitLevel: 'high', hours: '09:00-21:00 (변동)', img: 'https://images.unsplash.com/photo-1513413173474-264ff97f6e29?auto=format&fit=crop&w=400&q=80', desc: '설명이 필요 없는 오사카 최고의 테마파크, 마리오 월드 필수' },
        { id: 402, name: '오사카 성', sub: 'theme', area: 'osakabay', time: '전철 20분', price: '600엔~', rating: 4.4, waitLevel: 'medium', hours: '09:00-17:00', img: 'https://images.unsplash.com/photo-1528143105747-d58611986427?auto=format&fit=crop&w=400&q=80', desc: '오사카의 랜드마크, 밤에는 일루미네이션이 아름다움' },
        { id: 403, name: '가이유칸 수족관', sub: 'theme', area: 'osakabay', time: '전철 35분', price: '2,700엔~', rating: 4.6, waitLevel: 'medium', hours: '10:00-20:00', img: 'https://images.unsplash.com/photo-1509721148483-4cbb3ca52914?auto=format&fit=crop&w=400&q=80', desc: '세계 최대 규모의 수족관, 거대 고래상어를 볼 수 있음' },
        { id: 412, name: '소라니와 온천', sub: 'onsen', area: 'osakabay', time: '전철 25분', price: '2,500엔~', rating: 4.3, waitLevel: 'medium', hours: '11:00-23:00', img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80', desc: '유카타 입고 일본 정원을 걷는 체험형 온천' },
        { id: 436, name: '헬기 야경 투어', sub: 'others', area: 'osakabay', time: '전철 40분', price: '15,000엔~', rating: 4.9, hours: '16:00-20:00 (예약제)', img: 'https://images.unsplash.com/photo-1464746109310-720137a1c435?auto=format&fit=crop&w=400&q=80', desc: '오사카 시내를 상공에서 내려다보는 럭셔리 익스피리언스' },
        { id: 405, name: '헵파이브 대관람차', sub: 'theme', area: 'umeda', time: '전철 15분', price: '600엔', rating: 4.4, waitLevel: 'low', hours: '11:00-23:00', desc: '오사카 시내를 360도로 조망할 수 있는 정열의 레드 관람차' },
        { id: 406, name: '츠텐카쿠 타워 슬라이드', sub: 'theme', area: 'osakabay', time: '전철 22분', price: '1,000엔', rating: 4.5, waitLevel: 'high', hours: '10:00-20:00', desc: '츠텐카쿠 타워에서 쏟아져 내려오는 짜릿한 미끄럼틀 체험' },
        { id: 407, name: '아베노 하루카스 300', sub: 'theme', area: 'osakabay', time: '전철 18분', price: '1,500엔', rating: 4.8, waitLevel: 'medium', hours: '09:00-22:00', desc: '일본 최고층 빌딩에서 감상하는 환상적인 스카이라인' },
        { id: 408, name: '오사카 생활의 금석관', sub: 'theme', area: 'tenma', time: '전철 20분', price: '600엔', rating: 4.3, hours: '10:00-17:00 (화요일 휴무)', desc: '에도 시대 오사카 거리를 재현한 실내 박물관 및 기모노 체험' },
        { id: 413, name: '나니와노유 온천', sub: 'onsen', area: 'tenma', time: '전철 25분', price: '800엔', rating: 4.4, hours: '08:00-01:00', desc: '빌딩 옥상에서 즐기는 시원한 노천탕과 천연 온천' },

        // --- Hobby & Lifestyle Culture ---
        { id: 441, name: '애니메이트 오사카 닛폰바시', sub: 'theme', area: 'namba', time: '도보 13분', rating: 4.5, hours: '11:00-20:00', desc: '덴덴타운의 중심, 일본 최대급 애니메이션 굿즈 전문점' },
        { id: 442, name: '만다라케 그랜드 카오스', sub: 'theme', area: 'shinsaibashi', time: '도보 6분', rating: 4.4, hours: '12:00-20:00', desc: '빈티지 장난감과 중고 피규어의 보물 창고 (아메무라 위치)' },
        { id: 443, name: '츠타야 서점 (우메다 메이)', sub: 'others', area: 'umeda', time: '전철 16분', rating: 4.7, hours: '10:30-21:00', desc: '루쿠아 1100 내 위치. 스타벅스와 결합된 세련된 독서 테마 공간' },
        { id: 444, name: '덴덴타운 거리', sub: 'theme', area: 'namba', time: '도보 15분', rating: 4.3, hours: '11:00-19:00 (상점별 상이)', desc: '오사카의 아키하바라. 전자제품부터 서브컬처까지 아우르는 덕질 로드' },
        { id: 445, name: '다이코쿠유 (동네 온천)', sub: 'onsen', area: 'namba', time: '도보 10분', price: '490엔', rating: 4.2, hours: '14:00-23:30 (월요일 휴무)', desc: '관광지 온천이 아닌 일본 현지 목욕탕 문화를 체험할 수 있는 정겨운 센토' },
        { id: 446, name: '타워 레코드 난바 파크스점', sub: 'others', area: 'namba', time: '도보 12분', rating: 4.5, hours: '11:00-21:00', desc: '일본 최대의 음반 매장, K-POP부터 J-POP까지 방대한 컬렉션' },

        // --- Tennoji & Sports Activities ---
        { id: 1401, name: '텐노지 동물원', sub: 'theme', area: 'tennoji', time: '전철 15분', price: '500엔', rating: 4.1, hours: '09:30-17:00 (월요일 휴무)', desc: '도심 속에서 사자와 기린을 만나는 100년 역사의 동물원' },
        { id: 1402, name: '텐시바 (Tenshiba)', sub: 'others', area: 'tennoji', time: '전철 15분', price: '무료', rating: 4.6, hours: '24시간', desc: '텐노지 공원의 넓은 잔디밭, 피크닉과 카페를 즐기는 힐링 공간' },
        { id: 1403, name: 'VS PARK 라라포트', sub: 'sports', area: 'osakabay', time: '전철 40분', price: '2,800엔~', rating: 4.7, hours: '10:00-21:00', desc: 'TV 예능 같은 이색 스포츠 체험 테마파크 (달리기, 점프 등 액티비티)' },
        { id: 1404, name: '그래비티 리서치 (볼더링)', sub: 'sports', area: 'umeda', time: '전철 15분', price: '2,000엔~', rating: 4.4, hours: '10:00-22:00', desc: '그랑프론트 오사카 내 위치한 도심형 클라이밍/볼더링 짐' },
        { id: 1405, name: '캡틴 츠바사 스타디움', sub: 'sports', area: 'tennoji', time: '전철 15분', price: '예약제', rating: 4.3, hours: '10:00-23:00', desc: '텐노지 공원 내 위치한 풋살장, 러닝 스테이션 이용 가능' },
        { id: 1406, name: '마이시마 인피니티 서킷', sub: 'sports', area: 'osakabay', time: '전철 45분', price: '3,000엔~', rating: 4.8, hours: '11:00-21:00', desc: '면허 없이 즐기는 본격 레이싱 카트, 스피드 매니아 추천' },
        { id: 1407, name: '스포차 (Round1) 센니치마에', sub: 'sports', area: 'namba', time: '도보 8분', price: '2,500엔~', rating: 4.5, hours: '24시간', desc: '롤러스케이트, 양궁, 농구 등 수십 가지 스포츠 무제한 이용' },

        // --- Nipponbashi Activities ---
        { id: 1410, name: 'Taito Station 닛폰바시', sub: 'others', area: 'nipponbashi', time: '도보 12분', price: '100엔~', rating: 4.2, hours: '10:00-24:00', desc: '5층 규모의 대형 게임 센터, 인형뽑기와 리듬게임의 성지' },
        { id: 1411, name: '레트로 게임 센터 자리 (Zari)', sub: 'others', area: 'nipponbashi', time: '도보 13분', price: '100엔~', rating: 4.5, hours: '11:00-23:00', desc: '추억의 고전 아케이드 게임이 가득한 숨은 명소' },

        // --- Cultural & Unique Experiences ---
        { id: 1420, name: '컵라면 박물관 (이케다)', sub: 'others', area: 'others', time: '전철 40분', price: '500엔 (체험비)', rating: 4.7, hours: '09:30-16:30 (화 휴무)', desc: '나만의 오리지널 컵라면 만들기 체험! (예약 권장)' },
        { id: 1421, name: '팀랩 보태니컬 가든 (나가이)', sub: 'theme', area: 'tennoji', time: '전철 25분', price: '1,800엔', rating: 4.6, hours: '18:00-21:30', desc: '밤의 식물원이 빛의 질감으로 살아나는 환상적인 아트 전시' },
        { id: 1422, name: '니프렐 (Nifrel) 엑스포시티', sub: 'theme', area: 'others', time: '전철 50분', price: '2,000엔', rating: 4.5, hours: '10:00-20:00', desc: '살아있는 뮤지엄, 동물과 예술이 결합된 감각적인 공간' },
        { id: 1423, name: '나카노시마 미술관', sub: 'others', area: 'umeda', time: '전철 15분', price: '전시별 상이', rating: 4.4, hours: '10:00-17:00', desc: '오사카의 새로운 랜드마크, 모던한 건축과 수준 높은 전시' },
        { id: 1424, name: '오사카 텐만구 (신사)', sub: 'others', area: 'tenma', time: '전철 18분', price: '무료', rating: 4.3, hours: '09:00-17:00', desc: '학문의 신을 모시는 신사, 합격 기원과 일본 전통 문화 체험' },

        // --- Gyms (Visitor Friendly) ---
        { id: 1451, name: '어반 핏 24 (Urban Fit) 난바', sub: 'sports', area: 'namba', time: '도보 8분', price: '1일 2,500엔', rating: 4.5, hours: '11:00-21:00 (1일권)', desc: '난바역 인근 쾌적한 24시 헬스장 (1일권 이용 가능)' },
        { id: 1452, name: '골드짐 신사이바시', sub: 'sports', area: 'shinsaibashi', time: '도보 5분', price: '1일 2,860엔', rating: 4.6, hours: '07:00-23:30', desc: '신사이바시역 직결, 운동 매니아를 위한 오사카 최고의 시설' },
        { id: 1453, name: '토크 짐 (Torque Gym)', sub: 'sports', area: 'shinsaibashi', time: '도보 6분', price: '1일 2,970엔', rating: 4.4, hours: '09:00-23:00', desc: '문신(타투) 허용 짐! 관광객 친화적이고 프리웨이트 존이 넓음' },
        { id: 1454, name: '나니와 스포츠 센터', sub: 'sports', area: 'namba', time: '도보 12분', price: '1일 700엔', rating: 4.3, hours: '09:00-20:30', desc: '오사카 시립 체육관, 압도적인 가성비의 1일 이용 (실내화 필수)' },
        { id: 1455, name: '라이픽스 짐 (Lifix)', sub: 'sports', area: 'nipponbashi', time: '도보 10분', price: '1일 2,600엔', rating: 4.2, hours: '09:00-21:00', desc: '닛폰바시역 인근, 붐비지 않고 깔끔한 운동 공간' }
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
        { id: 836, name: '아사히 생맥주 캔', sub: 'all', area: 'all', time: '가까운 지점', price: '280엔', rating: 4.9, hours: '24시간', desc: '뚜껑을 열면 거품이 올라오는 화제의 거품 맥주' },

        // --- Massive Expansion: Convenience ---
        { id: 1651, name: '자가리코 (사라다맛)', sub: 'all', area: 'all', time: '가까운 지점', price: '160엔', rating: 4.5, desc: '오독오독 씹히는 일본 국민 감자 스낵' },
        { id: 1652, name: '푸칭 푸딩 (Big)', sub: 'all', area: 'all', time: '가까운 지점', price: '160엔', rating: 4.6, desc: '탱글탱글한 커스터드 푸딩의 정석, 편의점 필수템' },
        { id: 1653, name: '이카텐 (레몬맛)', sub: 'all', area: 'all', time: '가까운 지점', price: '300엔', rating: 4.7, desc: '맥주 안주로 최고인 중독성 강한 오징어 튀김 과자' },
        { id: 1654, name: '부르봉 알포트 초콜릿', sub: 'all', area: 'all', time: '가까운 지점', price: '120엔', rating: 4.8, desc: '통밀 비스킷과 깊은 초콜릿의 조화, 선물용으로도 굿' },

        // --- Kaldi Coffee Farm ---
        { id: 1701, name: '메론빵 스프레드', sub: 'kaldi', area: 'all', time: '가까운 지점', price: '332엔', rating: 4.9, hours: '10:00-21:00', desc: '식빵에 발라 굽기만 하면 메론빵으로 변신하는 마법의 잼' },
        { id: 1702, name: '판다 안닌두부', sub: 'kaldi', area: 'all', time: '가까운 지점', price: '194엔', rating: 4.7, hours: '10:00-21:00', desc: '귀여운 판다 패키지에 담긴 탱글탱글하고 진한 우유 푸딩' },
        { id: 1703, name: '커피 젤리', sub: 'kaldi', area: 'all', time: '가까운 지점', price: '297엔', rating: 4.6, hours: '10:00-21:00', desc: '칼디의 오리지널 로스팅 원두를 사용한 깊은 향의 커피 젤리' },
        { id: 1704, name: '명란 마요네즈', sub: 'kaldi', area: 'all', time: '가까운 지점', price: '429엔', rating: 4.8, hours: '10:00-21:00', desc: '밥이나 빵 어디에나 잘 어울리는 만능 소스' },
        { id: 1705, name: '카레빵 스프레드', sub: 'kaldi', area: 'all', time: '가까운 지점', price: '332엔', rating: 4.5, hours: '10:00-21:00', desc: '집에서 갓 튀긴 카레빵 맛을 낼 수 있는 인기 아이템' },
        { id: 1706, name: '트러플 소금', sub: 'kaldi', area: 'all', time: '가까운 지점', price: '248엔', rating: 4.8, hours: '10:00-21:00', desc: '고기, 계란 요리에 뿌리면 고급스러운 풍미가 폭발하는 마법의 가루' },
        { id: 1707, name: '살라다의 취지 (Salad no Omune)', sub: 'kaldi', area: 'all', time: '가까운 지점', price: '313엔', rating: 4.6, hours: '10:00-21:00', desc: '샐러드에 뿌려먹는 고소하고 짭짤한 특제 드레싱 소스' },
        { id: 1708, name: '마라 완두콩', sub: 'kaldi', area: 'all', time: '가까운 지점', price: '180엔', rating: 4.4, hours: '10:00-21:00', desc: '맥주 안주로 딱! 알싸한 마라 맛이 중독적인 바삭한 완두콩 스낵' },
        { id: 1709, name: '시칠리아 레몬 레모네이드 베이스', sub: 'kaldi', area: 'all', time: '가까운 지점', price: '398엔', rating: 4.9, hours: '10:00-21:00', desc: '물이나 탄산수에 섞기만 하면 홈카페 완성! 상큼한 리얼 레몬 과즙' },
        { id: 1710, name: '로수 햄 칩스', sub: 'kaldi', area: 'all', time: '가까운 지점', price: '278엔', rating: 4.7, hours: '10:00-21:00', desc: '와인 안주로 강력 추천하는 짭조름하고 바삭한 햄 칩' },

        // --- Massive Expansion: Vintage (Americamura/Nakazakicho) ---
        { id: 1801, name: '킨지 (Kinji) 빅스텝점', sub: 'vintage', area: 'shinsaibashi', time: '도보 5분', price: '1,000엔~', rating: 4.3, hours: '11:00-20:00', desc: '오사카 구제의 성지 빅스텝에 위치한 초대형 매장. 초보자도 쇼핑하기 쉬움' },
        { id: 1802, name: '후루기야 JAM (Horier)', sub: 'vintage', area: 'namba', time: '도보 8분', price: '3,000엔~', rating: 4.5, hours: '11:00-20:00', desc: '간사이 최대 규모 빈티지 샵. 상태 좋은 브랜드 구제가 가득함' },
        { id: 1803, name: '피그스티 (Pigsty) 아메무라', sub: 'vintage', area: 'shinsaibashi', time: '도보 4분', price: '2,500엔~', rating: 4.4, hours: '11:00-20:00', desc: '미국 빈티지의 정석. 스카잔, 데님, 밀리터리 마니아의 천국' },
        { id: 1804, name: '엘룰루 반 JAM (Elulu)', sub: 'vintage', area: 'umeda', time: '전철 15분 (나카자키초)', price: '3,000엔~', rating: 4.6, hours: '11:00-20:00', desc: '여성 빈티지 전문. 러블리하고 유니크한 원피스와 블라우스가 가득' },
        { id: 1805, name: '칼리코 (Calico)', sub: 'vintage', area: 'umeda', time: '전철 16분 (나카자키초)', price: '5,000엔~', rating: 4.5, hours: '12:00-19:00', desc: '진짜 빈티지를 아는 사람들을 위한 고퀄리티 셀렉트 샵' },

        // --- Massive Expansion: Otaku & Character ---
        { id: 1810, name: '닌텐도 오사카 (Daimaru)', sub: 'hobby', area: 'umeda', time: '전철 15분', price: '굿즈 다양', rating: 4.9, hours: '10:00-20:00', desc: '다이마루 13층. 닌텐도 덕후들의 성지! 마리오, 젤다 굿즈 총집합 (오픈런 추천)' },
        { id: 1811, name: '포켓몬 센터 오사카', sub: 'hobby', area: 'umeda', time: '전철 15분', price: '굿즈 다양', rating: 4.8, hours: '10:00-20:00', desc: '닌텐도 바로 옆. 귀여운 피카츄와 한정판 포켓몬 인형을 만날 수 있는 곳' },
        { id: 1812, name: '만다라케 그랜드 카오스', sub: 'hobby', area: 'nipponbashi', time: '도보 12분', price: '희귀템 고가', rating: 4.6, hours: '12:00-20:00', desc: '서브컬처의 모든 것. 피규어, 동인지, 고전 완구까지 없는 게 없는 보물창고' },
        { id: 1813, name: '슈퍼 포테이토 (Super Potato)', sub: 'hobby', area: 'nipponbashi', time: '도보 10분', price: '레트로 게임 다양', rating: 4.7, hours: '10:00-20:00', desc: '레트로 게임의 박물관. 어릴 적 추억의 팩 게임과 게임기를 실물로 영접' },
        { id: 1814, name: '애니메이트 (Animate) 닛폰바시', sub: 'hobby', area: 'nipponbashi', time: '도보 10분', price: '굿즈 다양', rating: 4.5, hours: '10:00-21:00', desc: '일본 애니메이션 굿즈의 중심. 최신 애니 굿즈는 여기서 쇼핑' },
        { id: 1815, name: '점프샵 (Jump Shop) 신사이바시', sub: 'hobby', area: 'shinsaibashi', time: '도보 3분 (파르코)', price: '굿즈 다양', rating: 4.4, hours: '10:00-20:00', desc: '원피스, 하이큐, 주술회전 등 소년 점프 인기 만화 공식 굿즈샵' },

        // --- Massive Expansion: Mega Malls & Lifestyle ---
        { id: 1820, name: '그랜드 프론트 오사카', sub: 'dept', area: 'umeda', time: '전철 16분', price: '다양', rating: 4.7, hours: '11:00-21:00', desc: '우메다의 랜드마크. 고급스러운 라이프스타일 샵과 맛집이 모인 복합 문화 공간' },
        { id: 1821, name: '루쿠아 (LUCUA) / 1100', sub: 'dept', area: 'umeda', time: '전철 15분', price: '다양', rating: 4.6, hours: '10:30-20:30', desc: '일본 2030 여성들의 패션 트렌드를 한눈에. 트렌디한 잡화와 의류 가득' },
        { id: 1822, name: '신사이바시 파르코 (PARCO)', sub: 'dept', area: 'shinsaibashi', time: '도보 3분', price: '다양', rating: 4.5, hours: '10:00-20:00', desc: '패션뿐만 아니라 캐릭터 샵(지브리, 짱구)과 힙한 브랜드가 모인 핫플레이스' },
        { id: 1823, name: '로프트 (Loft) 난바', sub: 'dept', area: 'namba', time: '도보 5분', price: '다양', rating: 4.4, hours: '11:00-21:00', desc: '문구, 화장품, 생활잡화 덕후들의 개미지옥. 센스 있는 선물 사기 좋은 곳' },
        { id: 1824, name: '도큐핸즈 (Tokyu Hands)', sub: 'dept', area: 'shinsaibashi', time: '도보 6분', price: '다양', rating: 4.3, hours: '10:00-20:00', desc: 'DIY, 여행용품, 아이디어 상품 등 "손으로 만드는 모든 것"이 있는 곳' }
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
    setupAlcoholGuide();
    setupTravelTips();
    setupPhrasebook();
    setupInstaPick();
    setupNewYearGuide();
    setupSearch(); // Initialize Search
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
    // Save scroll position of the current section before switching
    if (!state.scrollPositions) state.scrollPositions = {};
    if (state.currentSection) {
        state.scrollPositions[state.currentSection] = window.scrollY;
    }

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

    // Show/Hide totals badge and trip dates based on section
    const badge = document.getElementById('place-count-badge');
    // const headerRight = document.querySelector('.header-right'); // No longer hiding the whole container
    const tripDates = document.querySelector('.trip-dates');

    if (badge) badge.style.display = (sectionId === 'dashboard') ? 'inline-flex' : 'none';
    // if (headerRight) headerRight.style.display = (sectionId === 'dashboard') ? 'block' : 'none';
    if (tripDates) tripDates.style.display = (sectionId === 'dashboard') ? 'flex' : 'none';

    saveToLocalStorage();
    renderSection(sectionId);

    // Restore scroll position for the new section
    const savedScrollY = state.scrollPositions[sectionId] || 0;
    // Use setTimeout to ensure DOM render/style application before scrolling
    setTimeout(() => {
        window.scrollTo(0, savedScrollY);
    }, 0);
}

function setupEventListeners() {
    // Mobile Hub Events
    const hubTrigger = document.getElementById('mobile-hub-trigger');
    const hubOverlay = document.getElementById('mobile-hub-overlay');
    const closeHub = document.getElementById('close-hub');
    const hubItems = document.querySelectorAll('.hub-item');

    if (hubTrigger) {
        hubTrigger.addEventListener('click', () => {
            hubOverlay.classList.remove('hidden');
            document.body.classList.add('no-scroll');
        });
    }

    if (closeHub) {
        closeHub.addEventListener('click', () => {
            hubOverlay.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        });
    }

    hubItems.forEach(item => {
        item.addEventListener('click', () => {
            const section = item.getAttribute('data-section');
            if (section) {
                switchSection(section);
                hubOverlay.classList.add('hidden');
                document.body.classList.remove('no-scroll');

                // Update mobile active state
                hubItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
            }
        });
    });


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

    // Sort Filter Events
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.sort-btn');
        if (!btn) return;

        const bar = btn.closest('.sort-filter-bar');
        if (!bar) return;

        e.preventDefault();
        e.stopPropagation();

        const section = bar.getAttribute('data-for');
        const sortVal = btn.getAttribute('data-sort');

        if (!state.filters[section].sorts) state.filters[section].sorts = [];

        btn.classList.toggle('active');

        if (btn.classList.contains('active')) {
            if (!state.filters[section].sorts.includes(sortVal)) {
                state.filters[section].sorts.push(sortVal);

                // If sorting by distance, try to get current location
                if (sortVal === 'distance' && !state.userLocation) {
                    updateUserLocation(() => renderSection(section));
                }
            }
        } else {
            state.filters[section].sorts = state.filters[section].sorts.filter(s => s !== sortVal);
        }

        renderSection(section);
    }, true);
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

function getPriceValue(str) {
    if (!str) return 15000;
    const m = String(str).match(/[\d,]+/);
    return m ? parseInt(m[0].replace(/,/g, '')) : 15000;
}

function getTimeMinutes(str) {
    if (!str) return 999;
    const m = String(str).match(/\d+/);
    const val = m ? parseInt(m[0]) : 999;
    if (String(str).includes('전철')) return val + 15;
    return val;
}

const AREA_COORDS = {
    shinsaibashi: { lat: 34.6738, lng: 135.5015 },
    namba: { lat: 34.6670, lng: 135.5003 },
    umeda: { lat: 34.7024, lng: 135.4959 },
    tenma: { lat: 34.7042, lng: 135.5126 },
    nipponbashi: { lat: 34.6655, lng: 135.5058 },
    tennoji: { lat: 34.6472, lng: 135.5133 },
    kitashinchi: { lat: 34.6967, lng: 135.5005 },
    osakabay: { lat: 34.6558, lng: 135.4326 },
    others: { lat: 34.6850, lng: 135.5170 }
};

function updateUserLocation(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                state.userLocation = {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                };
                console.log('User location updated:', state.userLocation);
                if (callback) callback();
            },
            (err) => {
                console.warn('Geolocation error:', err.message, err.code);
                let msg = '현재 위치를 가져올 수 없어 숙소 기준으로 정렬됩니다.';
                if (err.code === 1) msg = '위치 정보 권한이 거부되었습니다. 브라우저 설정에서 권한을 허용해주세요.';
                else if (err.code === 2) msg = '위치 정보를 사용할 수 없습니다. GPS 신호를 확인해주세요.';
                else if (err.code === 3) msg = '위치 정보 요청 시간이 초과되었습니다.';

                alert(msg);
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        );
    } else {
        alert('이 브라우저는 위치 서비스를 지원하지 않습니다.');
    }
}

function getFilteredData(type) {
    const f = state.filters[type];
    let data = state[type].filter(item => {
        const matchSub = f.sub === 'all' || item.sub === f.sub;
        const matchArea = f.area === 'all' || item.area === f.area;
        return matchSub && matchArea;
    });

    if (f.sorts && f.sorts.length > 0) {
        data.sort((a, b) => {
            let scoreA = 0;
            let scoreB = 0;

            f.sorts.forEach(s => {
                if (s === 'rating') {
                    scoreA += (a.rating || 0) * 200;
                    scoreB += (b.rating || 0) * 200;
                }
                if (s === 'value') {
                    const pA = getPriceValue(a.price);
                    const pB = getPriceValue(b.price);
                    scoreA += Math.max(0, 10000 - pA) / 20;
                    scoreB += Math.max(0, 10000 - pB) / 20;
                }
                if (s === 'distance') {
                    if (state.userLocation) {
                        const cA = AREA_COORDS[a.area] || AREA_COORDS.others;
                        const cB = AREA_COORDS[b.area] || AREA_COORDS.others;
                        const dA = getDistance(state.userLocation.lat, state.userLocation.lng, cA.lat, cA.lng);
                        const dB = getDistance(state.userLocation.lat, state.userLocation.lng, cB.lat, cB.lng);
                        // Changed from bonus-based (clamped at 10km) to penalty-based
                        // This ensures sorting works even if you are far away (e.g. testing from Korea)
                        scoreA -= dA * 1000;
                        scoreB -= dB * 1000;
                    } else {
                        const tA = getTimeMinutes(a.time);
                        const tB = getTimeMinutes(b.time);
                        scoreA += Math.max(0, 120 - tA) * 2;
                        scoreB += Math.max(0, 120 - tB) * 2;
                    }
                }
            });

            return scoreB - scoreA;
        });
    }

    return data;
}

function generateCardHtml(item, type) {
    const mapUrl = (item.map && item.map.startsWith('http')) ? item.map : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name + ' 오사카')}`;
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(item.name + ' 오사카')}`;

    const localPickBadge = item.localPick ? `<div class="local-pick-badge"><i data-lucide="crown"></i> Local Pick</div>` : '';
    const waitConfig = {
        low: { label: '대기 적음', title: '빠른 입장이 가능합니다' },
        medium: { label: '대기 보통', title: '20~40분 내외의 대기가 있을 수 있습니다' },
        high: { label: '대기 많음', title: '1시간 이상의 대기가 예상됩니다 (오픈런 권장)' }
    };

    const waitIndicator = item.waitLevel ? `
        <div class="wait-indicator" title="${waitConfig[item.waitLevel].title}">
            <span class="wait-dot ${item.waitLevel}"></span> ${waitConfig[item.waitLevel].label}
        </div>
    ` : '';

    return `
        <div class="info-card-item clickable-card" onclick="window.open('${searchUrl}', '_blank')">
            <div class="card-header">
                <div class="tags">
                    ${localPickBadge}
                    ${item.res ? '<span class="card-tag-res">예약필수</span>' : (item.hunting ? '<span class="card-tag-hunting">헌팅/클럽</span>' : `<span class="card-category">${item.sub}</span>`)}
                    ${item.smoking ? `<span class="card-tag-smoking ${item.smoking === 'room' ? 'room' : 'ok'}" title="${item.smoking === 'room' ? '실내 흡연실 완비' : '전 좌석 흡연 가능'}">🚬 ${item.smoking === 'room' ? '흡연실있음' : '흡연가능'}</span>` : ''}
                    ${getRatingHtml(item.rating)}
                </div>
            </div>
            <h4>${item.name}</h4>
            ${type !== 'convenience' ? `<div class="travel-time-badge"><i data-lucide="navigation"></i> 숙소에서 ${item.time}</div>` : ''}
            ${waitIndicator}
            
            ${item.hours ? `<div class="card-info-row"><span class="label">운영시간</span><span class="val" style="color:var(--secondary)">${item.hours}</span></div>` : ''}
            ${item.menu ? `<div class="card-info-row"><span class="label">대표메뉴</span><span class="val">${item.menu}</span></div>` : ''}
            ${item.price ? `<div class="card-info-row"><span class="label">비용/가격</span><span class="val price">${item.price}</span></div>` : ''}
            
            <p class="card-desc">${item.desc}</p>
            <div class="card-footer" style="margin-top:auto; display:flex; justify-content:space-between; align-items:center;">
                ${type !== 'convenience' ? `<span class="area-tag ${item.area === 'kitashinchi' ? 'kitashinchi-tag' : ''}" style="font-size:10px; color:var(--text-dim); text-transform:uppercase">📍 ${item.area}</span>` : '<span></span>'}
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
    if (el) el.textContent = `${totalCount}곳`;
    const existing = localStorage.getItem('osaka_custom_items');
    if (existing) {
        state.customItems = JSON.parse(existing);
    }
}

function saveToLocalStorage() {
    localStorage.setItem('osaka_free_state_v56', JSON.stringify(state));
    localStorage.setItem('osaka_custom_items', JSON.stringify(state.customItems));
}
function loadFromLocalStorage() {
    // Preserve initial hardcoded state for merging by creating a deep copy
    const initialData = JSON.parse(JSON.stringify(state));
    const versions = ['v56', 'v55', 'v54', 'v53', 'v52', 'v51', 'v50', 'v49', 'v48', 'v47', 'v46', 'v45', 'v44', 'v43', 'v42', 'v41', 'v40', 'v39', 'v38', 'v37', 'v36', 'v35', 'v34', 'v33', 'v32', 'v31', 'v30', 'v29', 'v28', 'v27', 'v26', 'v25'];
    for (const v of versions) {
        const saved = localStorage.getItem('osaka_free_state_' + v);
        if (saved) {
            const parsed = JSON.parse(saved);
            const hasData = (parsed.restaurants && parsed.restaurants.length > 0) ||
                (parsed.bars && parsed.bars.length > 0);
            if (hasData || v === 'v31') {
                // Merge upgraded hardcoded items with user data
                ['restaurants', 'desserts', 'shopping', 'activities', 'bars', 'convenience'].forEach(cat => {
                    const defaultItems = initialData[cat] || [];
                    if (parsed[cat]) {
                        // Update existing items from default state or mark for removal
                        const updatedParsed = parsed[cat].map(loadedItem => {
                            const defaultItem = defaultItems.find(i => i.id === loadedItem.id);
                            if (defaultItem) return { ...loadedItem, ...defaultItem };
                            // If not in default state, keep only if it's a user-added custom item (id > 10000)
                            return (loadedItem.id > 10000) ? loadedItem : null;
                        }).filter(i => i !== null);

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
                    Object.keys(initialData.filters).forEach(cat => {
                        if (parsed.filters[cat]) {
                            parsed.filters[cat] = { ...initialData.filters[cat], ...parsed.filters[cat] };
                        } else {
                            parsed.filters[cat] = { ...initialData.filters[cat] };
                        }
                    });
                } else {
                    parsed.filters = { ...initialData.filters };
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
    // Removed closeBtns listener
    // Simplified close logic
    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };
    closeBtns.forEach(btn => btn.onclick = closeModal);

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
            { val: 'yakiniku', icon: '🥩', label: '고기/야키니쿠/호르몬' },
            { val: 'ramen', icon: '🍜', label: '라면/우동/면류' },
            { val: 'katsu', icon: '🐽', label: '돈카츠/규카츠' },
            { val: 'eel', icon: '🍱', label: '장어/덮밥' },
            { val: 'kushikatsu', icon: '🍢', label: '쿠시카츠/튀김' },
            { val: 'western', icon: '🍛', label: '경양식/카레' },
            { val: 'chinese', icon: '🥟', label: '교자/만두 (551)' },
            { val: 'fugu', icon: '🐡', label: '복어/파인다이닝' },
            { val: 'okonomiyaki', icon: '🥞', label: '오코노미야키/야키소바' },
            { val: 'teishoku', icon: '🍚', label: '일본 가정식' },
            { val: 'snack', icon: '🐙', label: '타코야키/간식' },
            { val: 'all', icon: '😋', label: '다 좋아! 아무거나' }
        ];
    } else if (cat === 'desserts') {
        title.textContent = "달콤한 것 중에서도?";
        choices = [
            { val: 'cafe', icon: '☕', label: '분위기 좋은 카페' },
            { val: 'bakery', icon: '🥐', label: '빵/디저트 전문점' },
            { val: 'icecream', icon: '🍦', label: '아이스크림/빙수' },
            { val: 'parfait', icon: '🍨', label: '파르페' },
            { val: 'kissaten', icon: '☕', label: '레트로 킷사텐' },
            { val: 'matcha', icon: '🍵', label: '말차/화과자' },
            { val: 'all', icon: '🍰', label: '달달한 건 다 좋아' }
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
                if (theme === 'cafe' && item.sub === 'cafe') score += 50;
                if (theme === 'bakery' && item.sub === 'bakery') score += 50;
                if (theme === 'icecream' && (item.sub === 'icecream' || item.desc.includes('아이스') || item.desc.includes('빙수'))) score += 50;
                if (theme === 'parfait' && (item.sub === 'parfait' || item.desc.includes('파르페'))) score += 50;
                if (theme === 'kissaten' && (item.sub === 'kissaten' || item.desc.includes('킷사텐') || item.desc.includes('다방') || item.desc.includes('레트로'))) score += 50;
                if (theme === 'matcha' && (item.sub === 'matcha' || item.desc.includes('말차') || item.desc.includes('녹차') || item.desc.includes('화과자') || item.desc.includes('떡'))) score += 50;
                if (theme === 'all') score += 20;
            } else if (recommendState.category === 'restaurants') {
                const theme = recommendState.theme;
                // Basic Sub Match
                if (item.sub === theme) score += 30;

                // Keyword Bonus for specialized items
                if (theme === 'teishoku' && (item.desc.includes('가정식') || item.sub === 'teishoku')) score += 20;
                if (theme === 'eel' && (item.sub === 'eel' || item.desc.includes('장어'))) score += 50;
                if (theme === 'kushikatsu' && (item.sub === 'kushikatsu' || item.desc.includes('쿠시카츠') || item.desc.includes('튀김'))) score += 50;
                if (theme === 'western' && (item.sub === 'western' || item.desc.includes('카레') || item.desc.includes('함박') || item.desc.includes('오므라이스'))) score += 50;
                if (theme === 'chinese' && (item.sub === 'chinese' || item.desc.includes('만두') || item.desc.includes('교자') || item.desc.includes('551'))) score += 50;
                if (theme === 'fugu' && (item.sub === 'fugu' || item.desc.includes('복어'))) score += 50;

                if (theme === 'yakiniku' && (item.desc.includes('호르몬') || item.desc.includes('곱창') || item.desc.includes('와규'))) score += 20;
                if (theme === 'snack' && (item.desc.includes('타코야키'))) score += 20;
            } else if (recommendState.category === 'shopping') {
                const theme = recommendState.theme;
                if (theme === 'vintage' && (item.sub === 'vintage' || item.desc.includes('구제'))) score += 50;
                if (theme === 'hobby' && (item.sub === 'hobby' || item.desc.includes('피규어') || item.desc.includes('게임'))) score += 50;
                if (theme === 'dept' && (item.sub === 'dept' || item.desc.includes('백화점'))) score += 50;
                if (theme === 'street' && item.sub === 'street') score += 50;
                if (theme === 'all') score += 20;
            }

            // Fallback for other categories (Bars, etc.)
            if (recommendState.theme === 'all' || item.sub === recommendState.theme) score += 10;
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
            document.body.classList.add('no-scroll');
            stState = { step: 1, style: 'all', area: 'all' };
            updateStUI();
        };
    }

    // Close on background click
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        }
    };
    closeBtns.forEach(btn => btn.onclick = () => {
        modal.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    });

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
            const area = btn.dataset.area;

            if (area === 'current') {
                btn.textContent = '📍 위치 확인 중...';
                updateUserLocation(() => {
                    stState.area = 'current';
                    btn.textContent = '📍 내 위치 (확인 완료)';
                });
            } else {
                stState.area = area;
            }
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
                document.body.classList.remove('no-scroll');
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
    if (stState.area !== 'all' && stState.area !== 'current') {
        pool = pool.filter(i => i.area === stState.area);
    }

    // Sort by Distance if 'current' is selected
    if (stState.area === 'current' && state.userLocation) {
        pool.sort((a, b) => {
            const cA = AREA_COORDS[a.area] || AREA_COORDS.others;
            const cB = AREA_COORDS[b.area] || AREA_COORDS.others;
            const distA = getDistance(state.userLocation.lat, state.userLocation.lng, cA.lat, cA.lng);
            const distB = getDistance(state.userLocation.lat, state.userLocation.lng, cB.lat, cB.lng);
            return distA - distB; // Closest first
        });
    }

    if (pool.length === 0) {
        list.innerHTML = `<p style="grid-column:1/-1; text-align:center; padding:20px;">조건에 맞는 상점이 없습니다.</p>`;
    } else {
        // Render Best Match (First Item) + Rest
        list.innerHTML = pool.map((item, index) => {
            const isBestMatch = index === 0;
            const cardHtml = generateCardHtml(item, 'shopping');

            if (isBestMatch) {
                const badge = `<div class="best-match-badge">👑 Best Match</div>`;
                return `<div class="best-match-card">${badge}${cardHtml}</div>`;
            } else {
                return cardHtml;
            }
        }).join('');
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
            document.body.classList.add('no-scroll');
            document.getElementById('wc-setup').classList.remove('hidden');
            document.getElementById('wc-game-view').classList.add('hidden');
            document.getElementById('wc-winner').classList.add('hidden');
        };
    }

    // Close on background click
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        }
    };
    closeBtns.forEach(btn => btn.onclick = () => {
        modal.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    });

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

// --- Korean Chosung Search Utility ---
function getChosung(str) {
    const cho = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
    let result = "";
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i) - 44032;
        if (code > -1 && code < 11172) {
            result += cho[Math.floor(code / 588)];
        } else {
            result += str.charAt(i);
        }
    }
    return result;
}

// --- Global Spotlight Search Logic ---
function setupSearch() {
    const trigger = document.getElementById('search-trigger');
    const container = document.getElementById('search-container');
    const modal = document.getElementById('search-modal');
    const closeBtn = document.getElementById('close-search-modal');
    const input = document.getElementById('global-search-input');

    if (!trigger || !container) return;

    trigger.addEventListener('click', () => {
        container.classList.remove('hidden');
        document.body.classList.add('no-scroll');
        input.value = ''; // Clear input on open
        document.getElementById('search-results').innerHTML = '';
        document.getElementById('search-placeholder').classList.remove('hidden');
        setTimeout(() => input.focus(), 100); // Auto focus
    });

    closeBtn.addEventListener('click', () => {
        container.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    });

    // Close on background click (click on container, not modal)
    container.addEventListener('click', (e) => {
        if (e.target === container) {
            container.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        }
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !container.classList.contains('hidden')) {
            container.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        }
    });

    input.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (query.length > 0) {
            const results = searchAll(query);
            renderSearchResults(results);
        } else {
            document.getElementById('search-results').innerHTML = '';
            document.getElementById('search-placeholder').classList.remove('hidden');
        }
    });
}

function searchAll(query) {
    // Normalize query: remove spaces, lowercase
    const qRaw = query.toLowerCase();
    const qNoSpace = qRaw.replace(/\s/g, '');

    const allItems = [
        ...state.restaurants,
        ...state.desserts,
        ...state.shopping,
        ...state.bars,
        ...state.activities
    ];

    const matched = allItems.filter(item => {
        // Normalize target strings
        const name = item.name.toLowerCase();
        const nameNoSpace = name.replace(/\s/g, '');
        const desc = (item.desc || "").toLowerCase().replace(/\s/g, '');
        const sub = (item.sub || "").toLowerCase().replace(/\s/g, '');
        const area = (item.area || "").toLowerCase().replace(/\s/g, '');

        // Chosung check for name
        const nameCho = getChosung(nameNoSpace);

        const nameMatch = nameNoSpace.includes(qNoSpace) || nameCho.includes(qNoSpace);
        const descMatch = desc.includes(qNoSpace);
        const subMatch = sub.includes(qNoSpace);
        const areaMatch = area.includes(qNoSpace);

        return nameMatch || descMatch || subMatch || areaMatch;
    });

    return matched.sort((a, b) => {
        const aName = a.name.toLowerCase().replace(/\s/g, '');
        const bName = b.name.toLowerCase().replace(/\s/g, '');

        // Exact name match or start with priority
        const aStarts = aName.startsWith(qNoSpace);
        const bStarts = bName.startsWith(qNoSpace);

        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;

        // Name match priority
        if (aName.includes(qNoSpace) && !bName.includes(qNoSpace)) return -1;
        if (!aName.includes(qNoSpace) && bName.includes(qNoSpace)) return 1;

        return 0;
    });
}

function renderSearchResults(items) {
    const list = document.getElementById('search-results');
    const placeholder = document.getElementById('search-placeholder');

    if (items.length === 0) {
        list.innerHTML = `<p style="text-align:center; padding:20px; color:var(--text-muted);">검색 결과가 없습니다.</p>`;
        placeholder.classList.add('hidden');
        return;
    }

    placeholder.classList.add('hidden');
    // Simplified structure for Spotlight search results
    list.innerHTML = items.map(item => `
        <div class="spotlight-result-item" onclick="window.open('https://www.google.com/search?q=${encodeURIComponent(item.name + ' 오사카')}', '_blank')">
            <div class="result-icon">
                <i data-lucide="${item.sub === 'ramen' ? 'soup' : (item.sub === 'sushi' ? 'fish' : 'map-pin')}"></i>
            </div>
            <div class="result-info">
                <div class="result-title-row">
                    <span class="result-name">${item.name}</span>
                    <span class="result-meta">${item.area} · ${item.sub}</span>
                </div>
                <p class="result-desc">${item.desc}</p>
            </div>
            <div class="result-chevron">
                <i data-lucide="chevron-right"></i>
            </div>
        </div>
    `).join('');
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

    // Close on background click
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        }
    };
    closeBtns.forEach(btn => btn.onclick = () => {
        modal.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    });
}

// --- Smoking Area Guide Logic ---
const SMOKING_AREAS = [
    // --- Namba / Dotonbori / Nipponbashi ---
    { name: "난바 스카이오 (3F)", area: "난바", lat: 34.6653, lng: 135.5002, desc: "난바역 연결, 조용하고 쾌적한 실내 흡연실", map: "https://www.google.com/maps/search/Namba+SkyO+Smoking+Room" },
    { name: "난바 시티 (본관 B2F)", area: "난바", lat: 34.6644, lng: 135.5015, desc: "지하상가 중앙 부근 위치", map: "https://www.google.com/maps/search/Namba+City+Main+B2+Smoking" },
    { name: "난바 시티 (남관 B1F)", area: "난바", lat: 34.6631, lng: 135.5020, desc: "남쪽 출구 방향 에스컬레이터 옆", map: "https://www.google.com/maps/search/Namba+City+South+B1+Smoking" },
    { name: "난바 파크스 (6F)", area: "난바", lat: 34.6616, lng: 135.5019, desc: "식당가 층, 정원 입구 인근", map: "https://www.google.com/maps/search/Namba+Parks+6F+Smoking" },
    { name: "오사카 다카시마야 (7F)", area: "난바", lat: 34.6648, lng: 135.5011, desc: "백화점 식당가 전용 흡연실", map: "https://www.google.com/maps/search/Osaka+Takashimaya+7F+Smoking" },
    { name: "에디온 난바 본점 (9F)", area: "난바", lat: 34.6658, lng: 135.5005, desc: "라멘 정거장(음식점가) 층 위치", map: "https://www.google.com/maps/search/Edion+Namba+9F+Smoking" },
    { name: "도톤보리 에비스 다리", area: "난바", lat: 34.6691, lng: 135.5013, desc: "강변 글리코상 대각선 방향 지정 구역", map: "https://www.google.com/maps/search/Ebisubashi+Smoking+Area" },

    // --- Nipponbashi ---
    { name: "Taito Station 닛폰바시 정문", area: "닛폰바시", lat: 34.6615, lng: 135.5061, desc: "게임센터 입구 지정 흡연 구역", map: "https://www.google.com/maps/search/Taito+Station+Nipponbashi" },
    { name: "남코 (Namco) 닛폰바시점", area: "닛폰바시", lat: 34.6602, lng: 135.5065, desc: "매장 앞 재떨이 비치 구역", map: "https://www.google.com/maps/search/Namco+Nipponbashi" },
    { name: "FamilyMart 닛폰바시 3초메", area: "닛폰바시", lat: 34.6600, lng: 135.5070, desc: "편의점 앞 재떨이 (확인 필요)", map: "https://www.google.com/maps/search/FamilyMart+Nipponbashi+3-chome" },

    // --- Umeda / Kita ---
    { name: "그랜드 프런트 (South 2F-6F)", area: "우메다", lat: 34.7042, lng: 135.4948, desc: "빌딩 남관 각 층 복도 끝 위치", map: "https://www.google.com/maps/search/Grand+Front+South+Smoking" },
    { name: "루쿠아 오사카 (9F/10F)", area: "우메다", lat: 34.7032, lng: 135.4950, desc: "루쿠아 백화점 위층 식당가 위치", map: "https://www.google.com/maps/search/Lucua+Osaka+Smoking" },
    { name: "링크스 우메다 (B1F/8F)", area: "우메다", lat: 34.7045, lng: 135.4965, desc: "요도바시 카메라 건물 내 식당가 인근", map: "https://www.google.com/maps/search/Links+Umeda+Smoking" },
    { name: "화이티 우메다 (분수 공원)", area: "우메다", lat: 34.7025, lng: 135.5005, desc: "지하상가 동쪽 끝 분수광장 인근", map: "https://www.google.com/maps/search/Whity+Umeda+Smoking" },
    { name: "KITTE 오사카 (4F/5F)", area: "우메다", lat: 34.7015, lng: 135.4945, desc: "신축 빌딩 내 고급 흡연 시설", map: "https://www.google.com/maps/search/KITTE+Osaka+Smoking" },

    // --- Shinsaibashi / Amerikamura ---
    { name: "파르코 Shinsaibashi (B2F)", area: "신사이바시", lat: 34.6745, lng: 135.5005, desc: "지하 푸드홀 인근", map: "https://www.google.com/maps/search/PARCO+Shinsaibashi+B2+Smoking" },
    { name: "다이마루 신사이바시 (9F)", area: "신사이바시", lat: 34.6740, lng: 135.5010, desc: "본관 꼭대기 층 복도", map: "https://www.google.com/maps/search/Daimaru+Shinsaibashi+Smoking" },
    { name: "아메리카무라 삼각공원", area: "신사이바시", lat: 34.6720, lng: 135.4985, desc: "공원 내 지정 야외 구역", map: "https://www.google.com/maps/search/Americamura+Triangle+Park+Smoking" },

    // --- Others ---
    { name: "아베노 하루카스 (12-14F)", area: "텐노지", lat: 34.6458, lng: 135.5139, desc: "텐노지 이치반가 식당가 층", map: "https://www.google.com/maps/search/Abeno+Harukas+Smoking" },
    { name: "오사카 성 (조테라스)", area: "기타", lat: 34.6890, lng: 135.5305, desc: "성 입구 쇼핑 단지 내 지정 구역", map: "https://www.google.com/maps/search/Jo+Terrace+Smoking" },
    { name: "텐마역 북쪽 고가밑", area: "기타", lat: 34.7050, lng: 135.5125, desc: "텐마 시장 입구 지정 흡연 부스", map: "https://www.google.com/maps/search/Tenma+Station+Smoking" },

    // --- Tennoji ---
    { name: "텐노지 미오 (Mio) 본관 (10F)", area: "텐노지", lat: 34.6475, lng: 135.5143, desc: "미오 본관 식당가 층", map: "https://www.google.com/maps/search/Tennoji+Mio+Smoking" },
    { name: "아베노 큐즈몰 (3F/4F)", area: "텐노지", lat: 34.6455, lng: 135.5115, desc: "푸드코트 및 식당가 옆", map: "https://www.google.com/maps/search/Abeno+Qs+Mall+Smoking" },
    { name: "신세카이 스파월드 앞", area: "텐노지", lat: 34.6495, lng: 135.5065, desc: "스파월드 입구 계단 아래 지정 구역", map: "https://www.google.com/maps/search/Shinsekai+Smoking+Area" }
];

function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
}

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

    // Geolocation - Find near me (In-app sorting)
    document.getElementById('search-near-smoking')?.addEventListener('click', () => {
        updateUserLocation(() => {
            const userLat = state.userLocation.lat;
            const userLng = state.userLocation.lng;

            // Calculate distance for all and sort
            const sortedByDistance = [...SMOKING_AREAS].map(area => ({
                ...area,
                distance: getDistance(userLat, userLng, area.lat, area.lng)
            })).sort((a, b) => a.distance - b.distance);

            renderSmokingList(sortedByDistance);
            alert('현재 위치에서 가장 가까운 순서대로 정렬되었습니다.');
        });
    });

    // Close on background click
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        }
    };
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

    function renderSmokingList(dataOverride = null) {
        if (!list) return;
        const baseData = dataOverride ||
            (smokingFilter === 'all' ? SMOKING_AREAS : SMOKING_AREAS.filter(s => s.area === smokingFilter));

        list.innerHTML = baseData.map((s, idx) => `
            <div class="smoking-card" data-idx="${idx}" style="cursor:pointer;">
                <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                    <span class="card-tag-res" style="background:rgba(148,163,184,0.1); color:#94a3b8;">${s.area} ${s.distance ? ` · ${s.distance.toFixed(1)}km` : ''}</span>
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

// --- Alcohol Guide Logic ---
function setupAlcoholGuide() {
    const startBtn = document.getElementById('start-alcohol-guide');
    const modal = document.getElementById('alcohol-modal');

    const hubOverlay = document.getElementById('mobile-hub-overlay');

    if (startBtn) {
        startBtn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            modal.classList.remove('hidden');
            document.body.classList.add('no-scroll');
            if (hubOverlay) hubOverlay.classList.add('hidden');
        };
    }



    // Close on background click
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        }
    };
}

const TIPS_DATA = [
    // --- Etiquette & Manner ---
    { title: "오사카 에스컬레이터 매너", category: "manner", icon: "arrow-up-right", desc: "도쿄와 달리 오사카는 오른쪽에 서서 가고 왼쪽을 비워둡니다. 바쁜 현지인들을 위해 왼쪽을 비워주는 센스를 발휘해보세요." },
    { title: "스시 먹는 순서의 미학", category: "manner", icon: "fish", desc: "담백한 흰살 생선에서 시작해 붉은 살, 기름진 생선, 달달한 장어나 계란 순으로 먹어야 맛의 변화를 제대로 느낄 수 있습니다. 초생강은 중간에 입안을 헹구는 용도로 사용하세요." },
    { title: "스시 간장 찍기", category: "manner", icon: "droplet", desc: "밥이 아닌 생선 쪽에 간장을 살짝 찍는 것이 정석입니다. 밥을 찍으면 쌀알이 풀리거나 간장이 너무 많이 흡수되어 짤 수 있습니다." },
    { title: "전철 내 통화 금지", category: "manner", icon: "phone-off", desc: "일본 전철에서는 매너 모드가 기본이며 통화는 매너 위반입니다. 급한 연락은 문자나 메신저를 이용하세요." },
    { title: "계산할 때는 트레이에", category: "manner", icon: "hand-metal", desc: "돈을 직접 손으로 건네기보다 카운터에 놓인 작은 트레이(카르톤)에 놓는 것이 일본식 예절입니다. 거스름돈을 받을 때도 트레이를 통해 받는 경우가 많습니다." },

    // --- Shopping & Brands ---
    { title: "러쉬(LUSH) 가격 메리트", category: "money", icon: "gem", desc: "일본 러쉬는 한국보다 대략 30~50% 정도 저렴합니다. 특히 슈렉팩이나 입욕제는 일본 여행 필수 쇼핑템입니다." },
    { title: "유니클로/GU 가격 비교", category: "money", icon: "shopping-bag", desc: "한국보다 정가가 20~30% 저렴하며, 금요일~월요일 사이 '기간 한정 세일'을 노리면 한국 가격의 절반 수준에 득템 가능합니다." },
    { title: "빔즈(BEAMS) & 스투시", category: "money", icon: "shirt", desc: "한국에서 구하기 힘든 일본 한정판 라인이 많으며, 한국 리셀가 대비 훨씬 저렴하게 구입할 수 있습니다. 10% 면세까지 받으면 체감가 차이가 큽니다." },
    { title: "면세(Tax-Free) 필수 지참", category: "money", icon: "receipt", desc: "여권 원본이 없으면 면세를 받을 수 없습니다. 복사본은 안 되니 쇼핑하러 나갈 때는 반드시 여권을 챙기세요. (5,000엔 이상 구매 시)" },
    { title: "편의점 인출기 팁", category: "money", icon: "atm-card", desc: "트래블로그나 트래블월렛 카드는 세븐일레븐(세븐뱅크) ATM에서 수수료 없이 엔화 현금을 즉시 인출할 수 있어 매우 편리합니다." },

    // --- Food & Dining ---
    { title: "오토시(자리세)의 진실", category: "food", icon: "utensils", desc: "대부분의 이자카야는 '오토시'라는 기본 안주값을 인당 300~600엔 정도 받습니다. 일종의 자리세 개념이므로 당황하지 마세요." },
    { title: "음식점 좋은 자리 선정", category: "food", icon: "log-in", desc: "스시집이나 야키토리집은 카운터석(카운타 세키)이 명당입니다. 셰프가 요리하는 모습을 직관할 수 있고, 서비스 안주를 받을 확률도 높아집니다." },
    { title: "식당 입구에서 대기", category: "food", icon: "users", desc: "빈 자리가 보여도 무작정 들어가지 말고 점원이 올 때까지 기다리세요. '난닌데스카?'(몇 분이세요?)라고 물어보면 인원수를 말하면 됩니다." },
    { title: "라스트 오더 주의사항", category: "food", icon: "clock-3", desc: "구글맵 영업시간 종료 30분~1시간 전이 라스트 오더인 경우가 많습니다. 특히 늦은 밤 방문 시 주방 마감 여부를 먼저 확인하세요." },

    // --- Transport & Safety ---
    { title: "구글맵 플랫폼 번호", category: "transport", icon: "navigation", desc: "오사카의 복잡한 전철역에서 구글맵을 보면 몇 번 플랫폼에서 타야 하는지 숫자가 나옵니다. 전광판의 행선지보다 플랫폼 번호를 보는 게 훨씬 정확합니다." },
    { title: "아이폰 애플페이 스이카", category: "transport", icon: "smartphone", desc: "아이폰 사용자라면 현대카드가 없어도 지갑 앱에서 파스모나 스이카를 즉시 발급받아 충전 가능합니다. 실물 카드 없이 폰만 찍고 전철을 탈 수 있습니다." },
    { title: "택시 문 자동 열림", category: "transport", icon: "car", desc: "일본 택시는 뒷문이 자동으로 열리고 닫힙니다. 손으로 직접 열거나 닫으려 하지 마세요. 문에 부딪힐 수 있습니다." },
    { title: "소지품 분실 시", category: "safety", icon: "help-circle", desc: "일본은 분실물을 찾을 확률이 매우 높습니다. 당황하지 말고 근처 파출소(코반, 交番)에 가서 유실물 신고를 하세요." }
];

const INSTA_PICK_DATA = [
    // --- [NEW] Trending Items & Local Favorites ---
    {
        name: "사보리노 메가샷 나이트 마스크",
        category: "shopping",
        icon: "sparkles",
        desc: "드럭스토어 1위 올인원 마스크팩. 인스타에서 '시라타마 피부' 비밀템으로 화제!",
        instagram: "#사보리노",
        address: "Don Quijote / Matsumoto Kiyoshi"
    },
    {
        name: "로토 멜라노 CC 에센스",
        category: "shopping",
        icon: "droplet",
        desc: "일본 여행 쇼핑 리스트 부동의 1위. 잡티와 모공 케어에 탁월한 고농축 비타민 에센스.",
        instagram: "#멜라노CC",
        address: "Major Drugstores"
    },
    {
        name: "모리나가 베이크 치즈 크리미",
        category: "shopping",
        icon: "cookie",
        desc: "입안에서 녹는 진한 치즈케이크 맛 초콜릿. 인스타 인플루언서들이 강력 추천하는 중독템.",
        instagram: "#베이크치즈",
        address: "Don Quijote / Convenience Stores"
    },
    {
        name: "지역 한정 '킷캣' 일본술맛",
        category: "shopping",
        icon: "box",
        desc: "선물용 1위. 일본 전국 각지의 특산물로 만든 독특한 맛의 킷캣을 수집해보세요!",
        instagram: "#킷캣한정판",
        address: "Major Souvenir Shops"
    },
    {
        name: "코바야시 에티켓 탈취제",
        category: "shopping",
        icon: "wind",
        desc: "한 방울로 냄새를 잡아주는 마법! 작고 귀여워 파우치 필수템으로 꼽히는 아이디어 상품.",
        instagram: "#에티켓방울",
        address: "Matsumoto Kiyoshi / Don Quijote"
    },
    {
        name: "겨울 한정 '호로요이' 딸기",
        category: "shopping",
        icon: "glass-water",
        desc: "매년 이맘때만 나오는 프리미엄 딸기맛 호로요이. 지금 아니면 못 마시는 시즌 한정판!",
        instagram: "#호로요이신상",
        address: "Any Convenience Stores"
    },
    {
        name: "산리오/치이카와 럭키박스",
        category: "shopping",
        icon: "gift",
        desc: "캐릭터 굿즈의 성지. 신년 한정 복주머니(후쿠부쿠로) 테마의 랜덤 박스 개봉이 대유행!",
        instagram: "#치이카와쇼핑",
        address: "HEP FIVE / Umeda Yodobashi 5F"
    },
    {
        name: "큐피 간장계란밥 비법 소스",
        category: "shopping",
        icon: "egg",
        desc: "계란 없이도 계란밥 완성! 자취생들 사이에서 인생 소스로 불리는 드럭스토어 꿀템.",
        instagram: "#간장계란밥소스",
        address: "Don Quijote Food Section"
    },
    {
        name: "시루콧토 화장솜",
        category: "shopping",
        icon: "cloud",
        desc: "스킨 사용량을 절반으로 줄여주는 혁명템. 뷰티 인플루언서들의 화장대 필수품입니다.",
        instagram: "#시루콧토",
        address: "Don Quijote / Matsumoto Kiyoshi"
    },
    {
        name: "이치방쿠지 제비뽑기",
        category: "shopping",
        icon: "ticket",
        desc: "단돈 800엔으로 고퀄리티 피규어를! 일본 현지 서점이나 편의점에서 즐기는 짜릿한 뽑기.",
        instagram: "#이치방쿠지",
        address: "Lawson / Book-off / Animate"
    },
    {
        name: "클럽 슈발 (CHEVAL)",
        category: "night",
        icon: "music",
        desc: "오사카 하이엔드 클럽의 정점. 깔끔한 복장 필수! 세련된 현지인들이 모이는 럭셔리한 분위기.",
        instagram: "@chevalosaka",
        address: "〒542-0085 Osaka, Chuo Ward, Shinsaibashisuji, 1 Chome−5−30",
        map: "https://www.google.com/maps/search/?api=1&query=Cheval+Osaka"
    },
    {
        name: "클럽 암모나 (Ammona)",
        category: "night",
        icon: "zap",
        desc: "현지 젊은 일본인들이 가장 선호하는 클럽. EDM과 힙합이 공존하는 열정적인 밤!",
        instagram: "@ammonaosaka",
        address: "〒542-0083 Osaka, Chuo Ward, Higashishinsaibashi, 2 Chome-3-22",
        map: "https://www.google.com/maps/search/?api=1&query=Club+Ammona+Osaka"
    },
    {
        name: "우라난바 타치노미 '사이 (最)'",
        category: "night",
        icon: "glass-water",
        desc: "세련된 안주와 희귀 사케를 와인잔에! 현지 2030 세대가 퇴근 후 모이는 스타일리시한 바.",
        instagram: "@tachinomi_sai",
        address: "〒542-0075 Osaka, Chuo Ward, Nanbasennichimae, 14−18",
        map: "https://www.google.com/maps/search/?api=1&query=Tachinomi+Sai+Osaka"
    },
    {
        name: "클럽 피카딜리 우메다",
        category: "night",
        icon: "drum",
        desc: "우메다 최대 규모! 영화관을 개조한 압도적 층고. 세계 100대 클럽에 선정된 명소입니다.",
        instagram: "@clubpiccadilly",
        address: "〒530-0051 Osaka, Kita Ward, Taiyujicho, 8−17",
        map: "https://www.google.com/maps/search/?api=1&query=Club+Piccadilly+Umeda"
    },
    {
        name: "클럽 밤비 (Bambi)",
        category: "night",
        icon: "disco",
        desc: "젊고 에너제틱한 분위기. 일본 오사카 젊은 층 사이의 넘버원 몬스터 클럽으로 불립니다.",
        instagram: "@bambi_osaka",
        address: "〒542-0083 Osaka, Chuo Ward, Higashishinsaibashi, 1 Chome−17−27",
        map: "https://www.google.com/maps/search/?api=1&query=Club+Bambi+Osaka"
    },
    {
        name: "히가시우메다 '리버티 (LIBERTY)'",
        category: "night",
        icon: "martini",
        desc: "우메다 직장인들의 비밀 아지트. 세련된 분위기의 타치노미(서서 마시는 술집).",
        instagram: "@liberty_umeda",
        address: "〒530-0027 Osaka, Kita Ward, Doyamacho, 10−7",
        map: "https://www.google.com/maps/search/?api=1&query=Tachinomi+Liberty+Umeda"
    },
    {
        name: "오사카성 일루미나쥬 (겨울 한정)",
        category: "spot",
        icon: "castle",
        desc: "오사카성과 화려한 조명이 만나는 환상적인 밤. 겨울밤 최고의 데이트 및 사진 명소입니다.",
        instagram: "#오사카성일루미나쥬",
        address: "〒540-0002 Osaka, Chuo Ward, Osakajo, 1-1",
        map: "https://www.google.com/maps/search/?api=1&query=Osaka+Castle+Illuminage"
    },
    {
        name: "한신 백화점 '스낵 파크'",
        category: "food",
        icon: "utensils",
        desc: "우메다 직장인들의 성지! 저렴하고 맛있는 서서 먹는 푸드코트. 현지 로컬 감성 가득.",
        instagram: "#阪神スナックパーク",
        address: "〒530-8224 Osaka, Kita Ward, Umeda, 1 Chome−13−13 B1F",
        map: "https://www.google.com/maps/search/?api=1&query=Hanshin+Snack+Park"
    },
    // --- [EXISTING] ---
    {
        name: "그랜드 그린 오사카 (그린 플레이스)",
        category: "spot",
        icon: "trees",
        desc: "2024년 9월 개장! 우메다역과 직결된 세계 최대 도심 공원. 안도 타다오의 캐노피 아래서 인생샷!",
        instagram: "@grand.green.osaka",
        address: "〒530-0011 Osaka, Kita Ward, Ofukacho",
        map: "https://www.google.com/maps/search/?api=1&query=Grand+Green+Osaka"
    },
    {
        name: "미도스지 일루미네이션 2024",
        category: "spot",
        icon: "sparkles",
        desc: "오사카의 메인 스트리트가 빛의 바다로! 1월 중순까지 매일 밤 펼쳐지는 화려한 빛의 축제.",
        instagram: "#御堂筋イルミネーション",
        address: "Midosuji Ave, Osaka",
        map: "https://www.google.com/maps/search/?api=1&query=Midosuji+Illumination"
    },
    {
        name: "난바 파크스 '히카리 타비'",
        category: "event",
        icon: "camera",
        desc: "2024.11.08 ~ 2025.02.16. 100만 개의 전구가 만드는 빛의 폭포. 난바 지역 최고의 겨울 포토존.",
        instagram: "@nambaparks_official",
        address: "〒556-0011 Osaka, Naniwa Ward, Nanbanaka, 2 Chome−10−70",
        map: "https://www.google.com/maps/search/?api=1&query=Namba+Parks"
    },
    {
        name: "오사카성 일루미나쥬",
        category: "event",
        icon: "castle",
        desc: "오사카성과 화려한 조명이 만나는 환상적인 밤. 전국시대를 테마로 한 화려한 라이트업!",
        instagram: "#大阪城イルミナージュ",
        address: "〒540-0002 Osaka, Chuo Ward, Osakajo, 1-1",
        map: "https://www.google.com/maps/search/?api=1&query=Osaka+Castle+Illuminage"
    },
    {
        name: "카페 노렝 (Cafe No.86)",
        category: "food",
        icon: "coffee",
        desc: "나카자키초의 클래식한 감성 카페. 구름 소다와 계절 한정 디저트로 인스타에서 꾸준히 핫함!",
        instagram: "@cafe_no_86",
        address: "〒530-0016 Osaka, Kita Ward, Nakazaki, 1 Chome−6−16",
        map: "https://www.google.com/maps/search/?api=1&query=Cafe+No.86+Osaka"
    },
    {
        name: "우라난바 토라메 요코초",
        category: "night",
        icon: "beer",
        desc: "실내 포장마차 감성의 끝판왕. 현지인들 사이의 헌팅 핫플이자 가성비 안주 맛집.",
        instagram: "@torame_yokocho",
        address: "〒542-0074 Osaka, Chuo Ward, Sennichimae, 2 Chome-3-15",
        map: "https://www.google.com/maps/search/?api=1&query=Torame+Yokocho"
    },
    {
        name: "클럽 지라프 오사카",
        category: "night",
        icon: "music",
        desc: "도톤보리 강변의 상징적인 클럽. 최근 리뉴얼로 더욱 핫해진 분위기!",
        instagram: "@giraffe_osaka",
        address: "〒542-0084 Osaka, Chuo Ward, Souemoncho, 7−9",
        map: "https://www.google.com/maps/search/?api=1&query=Giraffe+Osaka"
    },
    {
        name: "팀랩 보타니컬 가든",
        category: "spot",
        icon: "moon",
        desc: "밤의 식물원이 환상적인 디지털 아트로 변신. 겨울밤 최고의 데이트 및 사진 스팟.",
        instagram: "@teamlab_botanical",
        address: "〒546-0034 Osaka, Higashisumiyoshi Ward, Nagaikoen, 1−1",
        map: "https://www.google.com/maps/search/?api=1&query=teamLab+Botanical+Garden+Osaka"
    },
    {
        name: "와타메로 카페 (Watamero)",
        category: "food",
        icon: "lollipop",
        desc: "솜사탕과 과일의 환상적 만남! 비주얼 쇼크 디저트로 틱톡과 인스타 릴스 장악 중.",
        instagram: "@watamero_osaka",
        address: "〒542-0086 Osaka, Chuo Ward, Nishishinsaibashi, 1 Chome−16−11",
        map: "https://www.google.com/maps/search/?api=1&query=Watamero+Osaka"
    },
    {
        name: "나카자키초 고양이 거리",
        category: "spot",
        icon: "cat",
        desc: "빈티지한 골목길 사이로 숨은 고양이 카페와 편집샵들이 가득. 골목 자체가 거대한 포토존!",
        instagram: "#中崎町巡り",
        address: "〒530-0016 Osaka, Kita Ward, Nakazaki",
        map: "https://www.google.com/maps/search/?api=1&query=Nakazakicho+Osaka"
    }
];

const QUICK_PHRASES_DATA = [
    { id: 'pay', ko: "계산해 주세요", jp: "お会計お願いします", pronunciation: "오카이케이 오네가이시마스", icon: "wallet" },
    { id: 'taxfree', ko: "면세 되나요?", jp: "免税できますか？", pronunciation: "멘제- 데키마스카?", icon: "badge-percent" },
    { id: 'card', ko: "카드 되나요?", jp: "カード使えますか？", pronunciation: "카-도 츠카에마스카?", icon: "credit-card" },
    { id: 'nowasabi', ko: "와사비 빼주세요", jp: "わさび抜きでお願いします", pronunciation: "와사비 누키데 오네가이시마스", icon: "ban" },
    { id: 'recommend', ko: "추천해 주세요", jp: "おすすめをお願いします", pronunciation: "오스스메오 오네가이시마스", icon: "thumbs-up" },
    { id: 'photo', ko: "사진 찍어주세요", jp: "写真を撮っていただけませんか？", pronunciation: "샤신오 톳테 이타다케마센카?", icon: "camera" }
];

function setupQuickBoard() {
    renderQuickBoard();

    const showClerkModal = document.getElementById('show-clerk-modal');
    const closeBtn = document.querySelector('.close-clerk-btn');

    if (closeBtn) {
        closeBtn.onclick = () => {
            showClerkModal.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        };
    }

    showClerkModal.onclick = (e) => {
        if (e.target === showClerkModal) {
            showClerkModal.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        }
    };
}

function renderQuickBoard() {
    const container = document.getElementById('quick-phrases-grid');
    if (!container) return;

    container.innerHTML = QUICK_PHRASES_DATA.map(phrase => `
        <div class="quick-phrase-card" onclick="showSurvivalPhrase('${phrase.id}')">
            <span class="phrase-ko">${phrase.ko}</span>
            <span class="phrase-jp">${phrase.jp}</span>
            <div class="show-clerk-btn">
                <i data-lucide="maximize-2" style="width:14px; height:14px;"></i>
            </div>
        </div>
    `).join('');

    lucide.createIcons();
}

function showSurvivalPhrase(id) {
    const phrase = QUICK_PHRASES_DATA.find(p => p.id === id);
    if (!phrase) return;

    const modal = document.getElementById('show-clerk-modal');
    const jpText = document.getElementById('clerk-text-jp');
    const koText = document.getElementById('clerk-text-ko');

    jpText.innerText = phrase.jp;
    koText.innerText = `${phrase.ko} (${phrase.pronunciation})`;

    modal.classList.remove('hidden');
    document.body.classList.add('no-scroll');
}

function setupInstaPick() {
    const startBtn = document.getElementById('start-instapick');
    const modal = document.getElementById('instapick-modal');
    const filterContainer = document.getElementById('instapick-filter');
    const closeBtn = document.querySelector('.close-instapick');

    if (startBtn) {
        startBtn.onclick = (e) => {
            e.preventDefault();
            modal.classList.remove('hidden');
            document.body.classList.add('no-scroll');
            renderInstaPick('all');
        };
    }

    if (filterContainer) {
        filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
            btn.onclick = () => {
                filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderInstaPick(btn.dataset.category);
            };
        });
    }

    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        }
    };

    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        };
    }
}

function renderInstaPick(category = 'all') {
    const container = document.getElementById('instapick-container');
    if (!container) return;

    const filtered = category === 'all' ? INSTA_PICK_DATA : INSTA_PICK_DATA.filter(item => item.category === category);

    container.innerHTML = filtered.map(item => `
        <div class="tip-card animate-in">
            <div class="tip-icon-header" style="display:flex; justify-content:space-between; align-items:center;">
                <div style="width:40px; height:40px; border-radius:10px; background:rgba(244,114,182,0.1); display:flex; align-items:center; justify-content:center; color:#f472b6;">
                    <i data-lucide="${item.icon}"></i>
                </div>
                <span style="font-size:10px; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.05); padding:4px 8px; border-radius:6px; color:var(--text-dim);">${item.category}</span>
            </div>
            <h5 style="font-size:16px; margin:0; color:#fff;">${item.name}</h5>
            <p style="font-size:12px; color:var(--text-dim); margin: 5px 0 10px 0;">
                <i data-lucide="map-pin" style="width:12px; height:12px; display:inline; vertical-align:middle; margin-right:4px;"></i>
                ${item.address}
            </p>
            <p style="font-size:13px; margin:0; color:var(--text-main); line-height:1.5;">${item.desc}</p>
            <div style="margin-top:10px; padding-top:10px; border-top:1px solid rgba(255,255,255,0.05); display:flex; flex-direction:column; gap:8px;">
                <div style="display:flex; align-items:center; gap:5px; color:#f472b6; font-size:12px; font-weight:600;">
                    <i data-lucide="instagram" style="width:14px; height:14px;"></i> ${item.instagram}
                </div>
                ${item.map ? `
                <a href="${item.map}" target="_blank" onclick="handleNativeMapClick(event, '${item.map}')" style="display:flex; align-items:center; gap:5px; color:var(--secondary); font-size:12px; text-decoration:none;">
                    <i data-lucide="external-link" style="width:14px; height:14px;"></i> 구글맵으로 보기
                </a>` : ''}
            </div>
        </div>
    `).join('');

    lucide.createIcons();
}

const PHRASES_DATA = [
    // --- Basic 인사/기본 ---
    { kr: "안녕하세요 (낮)", jp: "こんにちは", pronunciation: "곤니치와", category: "basic" },
    { kr: "안녕하세요 (저녁)", jp: "こんばんは", pronunciation: "곤반와", category: "basic" },
    { kr: "감사합니다", jp: "ありがとうございます", pronunciation: "아리가토- 고자이마스", category: "basic" },
    { kr: "죄송합니다 / 실례합니다", jp: "すみません", pronunciation: "스미마센", category: "basic" },
    { kr: "네 / 아니요", jp: "はい / いいえ", pronunciation: "하이 / 이이에", category: "basic" },
    { kr: "부탁합니다", jp: "お願いします", pronunciation: "오네가이시마스", category: "basic" },
    { kr: "일본어 못해요", jp: "日本語、できません", pronunciation: "니혼고, 데키마센", category: "basic" },

    // --- Dining 식당/카페 ---
    { kr: "메뉴판 주세요", jp: "メニューください", pronunciation: "메뉴- 쿠다사이", category: "dining" },
    { kr: "추천 메뉴는 무엇인가요?", jp: "おすすめはなんですか？", pronunciation: "오스스메와 난데스카?", category: "dining" },
    { kr: "이거 하나 주세요", jp: "これ一つください", pronunciation: "코레 히토츠 쿠다사이", category: "dining" },
    { kr: "생맥주 한 잔 주세요", jp: "生ビール一つください", pronunciation: "나마비-루 히토츠 쿠다사이", category: "dining" },
    { kr: "맛있어요!", jp: "おいしいです！", pronunciation: "오이시- 데스!", category: "dining" },
    { kr: "계산 부탁드립니다", jp: "お会計お願いします", pronunciation: "오카이케이 오네가이시마스", category: "dining" },
    { kr: "잘 먹었습니다", jp: "ごちそうさまでした", pronunciation: "고치소-사마 데시타", category: "dining" },
    { kr: "영문 메뉴판 있나요?", jp: "英語のメニューありますか？", pronunciation: "에-고노 메뉴- 아리마스카?", category: "dining" },
    { kr: "와이파이 되나요?", jp: "Wi-Fiありますか？", pronunciation: "와이파이 아리마스카?", category: "dining" },

    // --- Social/Hunting 친목/헌팅 ---
    { kr: "같이 마실래요?", jp: "一緒に飲みませんか？", pronunciation: "잇쇼니 노미마센카?", category: "social" },
    { kr: "옆자리 비어있나요?", jp: "隣、空いてますか？", pronunciation: "토나리, 아이테마스카?", category: "social" },
    { kr: "어디서 오셨어요?", jp: "どこから来ましたか？", pronunciation: "도코카라 키마시타카?", category: "social" },
    { kr: "한국인인가요?", jp: "韓国人ですか？", pronunciation: "칸코쿠진 데스카?", category: "social" },
    { kr: "몇 살이에요?", jp: "何歳ですか？", pronunciation: "난사이 데스카?", category: "social" },
    { kr: "직업이 뭐예요?", jp: "お仕事は何ですか？", pronunciation: "오시고토와 난데스카?", category: "social" },
    { kr: "대박! / 진짜요?", jp: "すごい！ / 本当に？", pronunciation: "스고이! / 혼토-니?", category: "social" },
    { kr: "건배!", jp: "乾杯！", pronunciation: "칸파이!", category: "social" },
    { kr: "LINE 아이디 알려주세요", jp: "LINE交換しませんか？", pronunciation: "라인 코-칸 시마센카?", category: "social" },
    { kr: "내일 뭐 하세요?", jp: "明日、何しますか？", pronunciation: "아시타, 나니시마스카?", category: "social" },
    { kr: "오늘 즐거웠어요", jp: "今日は楽しかったです", pronunciation: "쿄-와 타노시캇타 데스", category: "social" },
    { kr: "술 마시는 거 좋아해요?", jp: "お酒飲むの好きですか？", pronunciation: "오사케 노무노 스키 데스카?", category: "social" },
    { kr: "오사카 처음 왔어요", jp: "大阪은初めてです", pronunciation: "오사카와 하지메테 데스", category: "social" },

    // --- Travel 이동/길찾기 ---
    { kr: "~역은 어디인가요?", jp: "〜駅はどこですか？", pronunciation: "~에키와 도코데스카?", category: "travel" },
    { kr: "화장실은 어디인가요?", jp: "お手洗いはどこですか？", pronunciation: "오테아라이와 도코데스카?", category: "travel" },
    { kr: "편의점은 어디인가요?", jp: "コンビニは 어디ですか？", pronunciation: "콘비니와 도코데스카?", category: "travel" },
    { kr: "얼마인가요?", jp: "いくらですか？", pronunciation: "이쿠라 데스카?", category: "travel" },
    { kr: "가장 가까운 역은 어디죠?", jp: "一番近い駅はどこですか？", pronunciation: "이치반 치카이 에키와 도코데스카?", category: "travel" },
    { kr: "여기서 멀어요?", jp: "ここから遠いですか？", pronunciation: "코코카라 토-이 데스카?", category: "travel" },

    // --- Emergency 위급상황 ---
    { kr: "도와주세요!", jp: "助けてください！", pronunciation: "타스케테 쿠다사이!", category: "emergency" },
    { kr: "길을 잃었어요", jp: "道に迷いました", pronunciation: "미치니 마요이마시타", category: "emergency" },
    { kr: "지갑을 잃어버렸어요", jp: "財布をなくしました", pronunciation: "사이후오 나쿠시마시타", category: "emergency" },
    { kr: "경찰서가 어디죠?", jp: "交番はどこですか？", pronunciation: "코-반와 도코데스카?", category: "emergency" },
    { kr: "한국어 할 수 있는 사람 있나요?", jp: "韓国語話せる人いますか？", pronunciation: "칸코쿠고 하나세루 히토 이마스카?", category: "emergency" },
    { kr: "아파요 (병원 가고 싶어요)", jp: "気分が悪いです (病院行きたい)", pronunciation: "키분가 와루이 데스 (뵤-인 이키타이)", category: "emergency" }
];


function setupTravelTips() {
    const startBtn = document.getElementById('start-travel-tips');
    const modal = document.getElementById('tips-modal');

    const hubOverlay = document.getElementById('mobile-hub-overlay');
    const filterContainer = document.getElementById('tips-filter');

    if (startBtn) {
        startBtn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            modal.classList.remove('hidden');
            document.body.classList.add('no-scroll');
            if (hubOverlay) hubOverlay.classList.add('hidden');
            renderTravelTips('all');
        };
    }



    if (filterContainer) {
        filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
            btn.onclick = () => {
                filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderTravelTips(btn.dataset.category);
            };
        });
    }

    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        }
    };
}

function renderTravelTips(category = 'all') {
    const container = document.getElementById('tips-container');
    if (!container) return;

    const filtered = category === 'all' ? TIPS_DATA : TIPS_DATA.filter(t => t.category === category);

    container.innerHTML = filtered.map(tip => `
        <div class="tip-card animate-in">
            <div class="tip-icon-header" style="display:flex; justify-content:space-between; align-items:center;">
                <div style="width:40px; height:40px; border-radius:10px; background:rgba(251,191,36,0.1); display:flex; align-items:center; justify-content:center; color:#fbbf24;">
                    <i data-lucide="${tip.icon}"></i>
                </div>
                <span style="font-size:10px; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.05); padding:4px 8px; border-radius:6px; color:var(--text-dim);">${tip.category}</span>
            </div>
            <h5 style="font-size:16px; margin:0; color:#fff;">${tip.title}</h5>
            <p style="font-size:13px; margin:0; color:var(--text-dim); line-height:1.5;">${tip.desc}</p>
        </div>
    `).join('');


    lucide.createIcons();
}

function setupPhrasebook() {
    const startBtn = document.getElementById('start-phrasebook');
    const modal = document.getElementById('phrasebook-modal');

    const hubOverlay = document.getElementById('mobile-hub-overlay');
    const filterContainer = document.getElementById('phrase-filter');

    if (startBtn) {
        startBtn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            modal.classList.remove('hidden');
            document.body.classList.add('no-scroll');
            if (hubOverlay) hubOverlay.classList.add('hidden');
            renderPhrasebook('all');
        };
    }



    if (filterContainer) {
        filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
            btn.onclick = () => {
                filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderPhrasebook(btn.dataset.category);
            };
        });
    }

    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        }
    };
}

const NEW_YEAR_DATA = [
    // --- Survival / Tips (생존 & 필수 정보) ---
    {
        name: "1/1 백화점/몰 전 점포 휴무",
        category: "survival",
        icon: "shopping-bag",
        desc: "한큐, 한신, 다이마루, 루쿠아, 파르코 등 모든 대형 쇼핑몰은 1월 1일 문을 닫습니다. 1월 2일 오전 9~10시경부터 '하츠우리(첫 세일)'가 시작됩니다.",
        address: "Umeda / Namba / Shinsaibashi Area"
    },
    {
        name: "12/31 철도 연장/철야 운행",
        category: "survival",
        icon: "train-front",
        desc: "JR 칸쥬선(24시간), 오사카 메트로 미도스지선(새벽까지) 등 주요 노선이 연장 운행합니다. 평소보다 배차 간격이 기니 미리 시간표를 확인하세요.",
        address: "Major Train Stations in Osaka"
    },
    {
        name: "코인락커 대란 해결 팁",
        category: "survival",
        icon: "tally-5",
        desc: "새해 여행객으로 지하철 역 락커가 100% 꽉 찹니다. 'Ecbo Cloak' 앱을 사용하여 식당이나 상점에 짐을 보관하는 서비스를 미리 예약하세요.",
        address: "Namba / Umeda / Tennoji"
    },
    {
        name: "연말연시 ATM 이용 제한",
        category: "survival",
        icon: "banknote",
        desc: "12/31~1/3 사이 일부 은행 ATM 서비스가 중단됩니다. 편의점 ATM은 작동하지만 수수료가 비싸지니 미리 현금을 넉넉히 준비하세요.",
        address: "Anywhere in Osaka City"
    },
    {
        name: "연휴 응급 의료 (119)",
        category: "survival",
        icon: "ambulance",
        desc: "많은 개인 병원이 쉽니다. 긴급 상황 시 '오사카 구급 의료 정보 센터'에 연락하거나 24시간 드럭스토어(돈키호테 등)에서 비상약을 구비하세요.",
        address: "General Hospitals near Chuo-ku"
    },
    {
        name: "택시 심야 할증 (22:00~05:00)",
        category: "survival",
        icon: "car-taxi",
        desc: "심야 시간대 요금의 20%가 할증됩니다. 12/31 카운트다운 후에는 택시 잡기가 매우 어렵니 'GO' 택시 앱을 미리 설치해두세요.",
        address: "Osaka Citywide"
    },
    {
        name: "식당 영업 여부 사전 확인",
        category: "survival",
        icon: "calendar-check",
        desc: "개인 운영 식당은 1/1~1/5까지 길게 쉬는 경우가 많습니다. 구글 맵 정보만 믿지 말고 가능하다면 인스타그램 DM이나 전화로 확인하세요.",
        address: "Local Gourmet Spots"
    },
    {
        name: "신년 쓰레기 수거 휴무",
        category: "survival",
        icon: "trash-2",
        desc: "12/31~1/3은 시의 쓰레기 수거가 중단됩니다. 에어비앤비 등 독채 숙소 이용 시 쓰레기가 쌓이지 않도록 배출 규정을 엄수해야 합니다.",
        address: "Residential Areas"
    },

    // --- Event / Temple (이벤트 & 하츠모데) ---
    {
        name: "USJ NO LIMIT! 카운트다운",
        category: "event",
        icon: "party-popper",
        desc: "12/31 저녁~1/1 새벽까지 열리는 축제! 4천 발의 불꽃놀이와 26시간 무제한 어트랙션 이용 패스가 매년 완판됩니다.",
        address: "2 Chome-1-33 Sakurajima, Konohana Ward, Osaka",
        map: "https://www.google.com/maps/search/?api=1&query=Universal+Studios+Japan"
    },
    {
        name: "산타마리아 카운트다운 크루즈",
        category: "event",
        icon: "ship",
        desc: "오사카 바다 위에서 맞이하는 신년! 라이브 공연과 함께 선상 카운트다운 불꽃놀이를 즐길 수 있는 특별한 경험입니다.",
        address: "1 Chome-1-10 Kaigandori, Minato Ward, Osaka",
        map: "https://www.google.com/maps/search/?api=1&query=Santa+Maria+Cruise"
    },
    {
        name: "시텐노지 제야의 종 (108번)",
        category: "event",
        icon: "bell",
        desc: "12/31 밤 자정, 일본 전통 종소리로 새해를 시작하세요. 선착순으로 직접 종을 쳐서 번뇌를 씻어내는 행사에 참여할 수 있습니다.",
        address: "1-11-18 Shitennoji, Tennoji Ward, Osaka",
        map: "https://www.google.com/maps/search/?api=1&query=Shitennoji+Temple"
    },
    {
        name: "스미요시 타이샤 (참배 1위)",
        category: "event",
        icon: "shrine",
        desc: "오사카 최고의 하츠모데 명소! 엄청난 인파와 함께 늘어선 야타이(포장마차)에서 아마자케 등을 즐기며 일본 문화를 체험하세요.",
        address: "2 Chome-9-89 Sumiyoshi, Sumiyoshi Ward, Osaka",
        map: "https://www.google.com/maps/search/?api=1&query=Sumiyoshi+Taisha"
    },
    {
        name: "츠유노텐 신사 (연인의 성지)",
        category: "event",
        icon: "heart",
        desc: "우메다 한복판의 인연 맺기 신사. 새해에 좋은 인연을 기원하는 참배객들이 많으며, 밤에는 조명이 매우 아름답습니다.",
        address: "2 Chome-5-2 Sonezaki, Kita Ward, Osaka",
        map: "https://www.google.com/maps/search/?api=1&query=Tsuyu-no-ten+Shrine"
    },
    {
        name: "난바 야사카 신사 (사자 머리)",
        category: "event",
        icon: "skull",
        desc: "거대한 사자 머리가 행운을 삼켜준다는 곳! 새해 액운을 쫓기 위해 방문하는 현지인이 많으며 기념사진 찍기에 최고입니다.",
        address: "2 Chome-9-19 Motomachi, Naniwa Ward, Osaka",
        map: "https://www.google.com/maps/search/?api=1&query=Namba+Yasaka+Shrine"
    },
    {
        name: "우메다 스카이빌딩 첫 일출",
        category: "event",
        icon: "sunrise",
        desc: "1월 1일 새벽 6시경 특별 입장! 지상 173m 공중정원에서 맞이하는 장엄한 새해 첫 해돋이는 평생 잊지 못할 추억이 됩니다.",
        address: "1 Chome-1-88 Oyodonaka, Kita Ward, Osaka",
        map: "https://www.google.com/maps/search/?api=1&query=Umeda+Sky+Building"
    },
    {
        name: "오사카 텐만구 (합격 기원)",
        category: "event",
        icon: "graduation-cap",
        desc: "학문의 신을 모시는 곳. 1/1~1/3 사이에는 특별 참배 행사와 다채로운 축제 분위기가 이어져 방문 가치가 충분합니다.",
        address: "2 Chome-1-8 Tenjinbashi, Kita Ward, Osaka",
        map: "https://www.google.com/maps/search/?api=1&query=Osaka+Tenmangu"
    },
    {
        name: "호리코시 신사 (숨은 명소)",
        category: "event",
        icon: "sparkles",
        desc: "'일생에 한 번의 소원은 들어준다'는 전설! 유명 신사의 인파를 피해 조금 조용히 참배하고 싶은 여행자에게 추천합니다.",
        address: "1-8 Chausuyamacho, Tennoji Ward, Osaka",
        map: "https://www.google.com/maps/search/?api=1&query=Horikoshi+Shrine"
    },

    // --- Limited / Shopping (한정판 & 쇼핑) ---
    {
        name: "빅카메라 '새해 첫 세일'",
        category: "limited",
        icon: "camera",
        desc: "가전제품, IT 기기를 상상 초월 가격에! 1/2~1/3 선착순 혹은 추첨식 복주머니(후쿠부쿠로) 판매가 진행되니 도전해보세요.",
        address: "Namba / Abeno Bic Camera",
        map: "https://www.google.com/maps/search/?api=1&query=Bic+Camera+Namba"
    },
    {
        name: "애플 신사바시 '하츠유리'",
        category: "limited",
        icon: "smartphone",
        desc: "1/2부터 시작! 제품 구매 시 고액의 기프트 카드와 함께 한정판 다루마 에어태그(선착순)를 받을 수 있는 연중 최대 혜택입니다.",
        address: "1-5-5 Nishishinsaibashi, Chuo Ward, Osaka",
        map: "https://www.google.com/maps/search/?api=1&query=Apple+Shinsaibashi"
    },
    {
        name: "무인양품 '복캔 (福缶)'",
        category: "limited",
        icon: "egg",
        desc: "당해 연도의 십이지신 민예품과 기프트 카드가 담긴 시그니처 한정판. 깔끔한 디자인으로 선물용으로 인기가 높습니다.",
        address: "Grand Front Osaka / Namba Muji",
        map: "https://www.google.com/maps/search/?api=1&query=MUJI+Grand+Front+Osaka"
    },
    {
        name: "요도바시 우메다 '복주머니'",
        category: "limited",
        icon: "monitor",
        desc: "'꿈의 오토시다마 상자'라는 이름의 알찬 복주머니! 1/1 아침 일찍부터 거대한 대기 행렬이 생기는 오사카의 명물 풍경입니다.",
        address: "1-1 Ofukacho, Kita Ward, Osaka",
        map: "https://www.google.com/maps/search/?api=1&query=Yodobashi+Camera+Multimedia+Umeda"
    },
    {
        name: "스타벅스 신년 MD & 럭키백",
        category: "limited",
        icon: "coffee",
        desc: "일본 한정 신년 디자인 머그와 텀블러 시리즈. 럭키백은 경쟁이 매우 치열하니 매장에 진열된 시즌 한정 제품들을 노려보세요.",
        address: "Major Starbucks Stores in Osaka"
    },
    {
        name: "편의점 신년 '오세치' 시리즈",
        category: "limited",
        icon: "sandwich",
        desc: "일본 설 전통 요리를 샌드위치나 미니 도시락으로! 1/1 전후로만 반짝 판매되는 편의점 한정판 메뉴들을 즐겨보세요.",
        address: "7-Eleven / Lawson / Family Mart"
    },
    {
        name: "로손 'Uchi Cafe' 신년 디저트",
        category: "limited",
        icon: "cookie",
        desc: "로손의 고퀄리티 디저트 브랜드! 신년 한정으로 나오는 떡케이크나 딸기 롤케이크는 이 시기에 꼭 먹어봐야 합니다.",
        address: "Any Lawson Stores"
    },
    {
        name: "이치고 다이후쿠 (딸기 찹쌀떡)",
        category: "limited",
        icon: "strawberry",
        desc: "겨울~연초에만 만날 수 있는 고퀄리티 디저트! 편의점 냉장 코너나 쿠로몬 시장의 떡집에서 파는 크고 달콤한 딸기 떡은 필수입니다.",
        address: "Convenience Stores / Kuromon Market"
    },
    {
        name: "신년 한정 '산토리 호로요이'",
        category: "limited",
        icon: "glass-water",
        desc: "겨울 한정 '프리미엄 딸기' 맛 등 이 시기에만 생산되는 호로요이 캔들을 숙소에서 즐기며 한해를 마무리하세요.",
        address: "Supermarkets / Convenience Stores"
    },
    {
        name: "후쿠부쿠로 (브랜드 복주머니)",
        category: "limited",
        icon: "shirt",
        desc: "유니클로, 무인양품, 조던 등 인기 브랜드들이 1/2부터 복주머니를 내놓습니다. 50% 이상 저렴하게 득템할 기회!",
        address: "Shinsaibashi / Umeda Shops"
    }
];

function setupNewYearGuide() {
    const startBtn = document.getElementById('start-newyear');
    const modal = document.getElementById('newyear-modal');
    const filterContainer = document.getElementById('newyear-filter');
    const closeBtn = document.querySelector('.close-newyear');

    if (startBtn) {
        startBtn.onclick = (e) => {
            e.preventDefault();
            modal.classList.remove('hidden');
            document.body.classList.add('no-scroll');
            renderNewYearGuide('survival');
        };
    }

    if (filterContainer) {
        filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
            btn.onclick = () => {
                filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderNewYearGuide(btn.dataset.category);
            };
        });
    }

    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        }
    };

    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        };
    }
}

function renderNewYearGuide(category = 'all') {
    const container = document.getElementById('newyear-container');
    if (!container) return;

    const filtered = category === 'all' ? NEW_YEAR_DATA : NEW_YEAR_DATA.filter(item => item.category === category);

    container.innerHTML = filtered.map(item => `
        <div class="tip-card animate-in">
            <div class="tip-icon-header" style="display:flex; justify-content:space-between; align-items:center;">
                <div style="width:40px; height:40px; border-radius:10px; background:rgba(251,191,36,0.1); display:flex; align-items:center; justify-content:center; color:#fbbf24;">
                    <i data-lucide="${item.icon}"></i>
                </div>
                <span style="font-size:10px; text-transform:uppercase; letter-spacing:1px; background:rgba(255,255,255,0.05); padding:4px 8px; border-radius:6px; color:var(--text-dim);">${item.category}</span>
            </div>
            <h5 style="font-size:16px; margin:0; color:#fff;">${item.name}</h5>
            ${item.address ? `
            <p style="font-size:12px; color:var(--text-dim); margin: 5px 0 10px 0;">
                <i data-lucide="map-pin" style="width:12px; height:12px; display:inline; vertical-align:middle; margin-right:4px;"></i>
                ${item.address}
            </p>` : ''}
            <p style="font-size:13px; margin:0; color:var(--text-main); line-height:1.5;">${item.desc}</p>
            ${item.map ? `
            <div style="margin-top:10px; padding-top:10px; border-top:1px solid rgba(255,255,255,0.05);">
                <a href="${item.map}" target="_blank" onclick="handleNativeMapClick(event, '${item.map}')" style="display:flex; align-items:center; gap:5px; color:var(--secondary); font-size:12px; text-decoration:none;">
                    <i data-lucide="external-link" style="width:14px; height:14px;"></i> 구글맵으로 보기
                </a>
            </div>` : ''}
        </div>
    `).join('');

    lucide.createIcons();
}

function renderPhrasebook(category = 'all') {
    const container = document.getElementById('phrases-container');
    if (!container) return;

    const filtered = category === 'all' ? PHRASES_DATA : PHRASES_DATA.filter(p => p.category === category);

    container.innerHTML = filtered.map(p => `
        <div class="phrase-card animate-in">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                <span style="font-size:14px; font-weight:600; color:var(--secondary);">${p.kr}</span>
                <span style="font-size:10px; background:rgba(96,165,250,0.1); color:#60a5fa; padding:2px 8px; border-radius:5px; text-transform:uppercase;">${p.category}</span>
            </div>
            <div style="background:rgba(0,0,0,0.2); padding:15px; border-radius:12px; border:1px solid rgba(255,255,255,0.02);">
                <h4 style="font-size:22px; margin:0 0 5px 0; color:#fff; font-family:'Noto Sans JP', sans-serif;">${p.jp}</h4>
                <p style="font-size:14px; margin:0; color:var(--text-dim); font-style:italic;">${p.pronunciation}</p>
            </div>
            <button onclick="copyPhrase('${p.jp}')" style="background:rgba(255,255,255,0.05); border:none; color:#fff; padding:8px; border-radius:8px; display:flex; align-items:center; justify-content:center; gap:8px; cursor:pointer; font-size:12px; transition:all 0.2s;">
                <i data-lucide="copy" style="width:14px; height:14px;"></i> 복사하기
            </button>
        </div>
    `).join('');


    lucide.createIcons();
}

window.copyPhrase = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        // Simple toast or alert
        const toast = document.createElement('div');
        toast.style.cssText = 'position:fixed; bottom:100px; left:50%; transform:translateX(-50%); background:var(--primary); color:white; padding:10px 20px; border-radius:20px; z-index:10000; font-size:14px; font-weight:bold; box-shadow:0 10px 30px rgba(0,0,0,0.5); animate: fadeIn 0.3s;';
        toast.textContent = '클립보드에 복사되었습니다!';
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2000);
    });
};


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
