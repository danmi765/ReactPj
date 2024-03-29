import React from 'react';

const burgerList = {
    "kor" : {
        "special" : "스페셜",
        "premium" : "프리미엄",
        "burger" : "와퍼&버거",
        "sidemenu" : "사이드",
        "drink" : "음료&디저트",
        "morning" : "아침메뉴",
        "chicken" : "치킨&치킨버거",
    },

    "content" : {
        "special" : ["메가몬스터K","트러플통모짜팩1","트러플모짜팩2","트러플모짜팩3","트러플모짜팩4"],
        "premium" : ["비프칠리통모짜X","비프칠리통모짜와퍼","트러플통모짜X","트러플통모짜와퍼","통모짜X","통모짜와퍼","통모짜와퍼주니어","몬스터X","몬스터와퍼","트러플머쉬롬X","트러플머쉬롬와퍼","통새우스테이크버거","통새우와퍼","콰트로치즈와퍼"],
        "burger" : ["2 for 4500","와퍼","불고기와퍼","치즈와퍼","베이컨치즈와퍼","더블와퍼","트리플머쉬롬와퍼주니어","통새우와퍼주니어","콰트로치즈와퍼주니어","와퍼주니어","불고기와퍼주니어","치즈와퍼주니어","불고기버거","치즈버거"],
        "sidemenu" : ["사이드소스","너겟킹8조각 [행사]","너겟킹","21치즈스틱 [행사]","21치즈스틱","프렝치프라이[L] [1+1행사] 프렌치프라이","크리미모짜볼","코코넛쉬림프+스위트칠리소스","볼케이노칠리프라이","치즈프라이 [행사]","트러플프라이","어니언링","코올슬로[행사]","콘샐러드[행사]"],
        "drink" : ["아메리카오[행사]","핫/아이스초코[행사]","아메리카노","핫/아이스초코","카페라떼","모히또","선데","컵 아이스크림","코카콜라","코카콜라 제로","환타 오렌지","스프라이트","미닛메이드 오렌지","순수[미네랄워터]"],
        "morning" :  ["베이컨크루아상","햄크루아상","에그크루아상","해쉬브라운"],
        "chicken" : ["BLT통다리치킨버거","통다리치킨버거","바삭킹","바삭킹8조각+소스","밸런스치킨버거","BLT뉴올리언스 치킨버거","뉴올리언스치킨버거","BLT롱치킨버거","통치킨디럭스","불고기롱치킨버거","롱치킨버거"],
    },

    "content_detail" : {
        "special" : ["극강의 크기에 도전하라! 통다리살 치킨패티와 고소한 해쉬브라운에 매콤한 디아블로소스와 달콤한 불고기소스까지!"],
        "premium" : ["풍미 터지는 비프칠리와 통모짜렐라의 만남!","풍미 터지는 비프칠리와 통모짜렐라의 만남!","트러플향의 깊은 맛이 감싸는 치즈의 풍미!","트러플향의 깊은 맛이 감싸는 치즈의 풍미!","부드러움 뒤에 달려드는 화끈한 맛!","부드러움 뒤에 달려드는 화끈한 맛!","부드러움 뒤에 달려드는 화끈한 맛!","부드러운 호밀 브리오슈 번, 두툼한 스테이크 패티, 디아블로 소스의 압도적인 맛","불맛 가득 순쇠고기, 치킨, 베이컨에 화끈한 디아블로 소스의 압도적인 맛","트러플 크림소스와 네 가지 머쉬룸이 선사하는 깊고 풍부한 맛의 향연","트러플 크림소스와 네 가지 머쉬룸이 선사하는 깊고 풍부한 맛의 향연","불맛 가득 순쇠고기, 갈릭페퍼 통새우, 스파이시토마토소스가 더해진 프리미엄 버거","불맛 가득 순쇠고기, 갈릭페퍼 통새우, 스파이시토마토소스가 더해진 프리미엄 버거","진짜 불맛을 즐겨라, 4가지 고품격 치즈와 불에 직접 구운 와퍼 패티의 만남!"],
        "burger" : ["King's Choice 어떤 버거를 선택해도 4,500원","불에 직접 구운 순 쇠고기 패티에 싱싱한 야채가 한가득~ 버거킹의 대표 메뉴!","불에 직접 구운 순 쇠고기 패티가 들어간 와퍼에 달콤한 불고기 소스까지!"],
        "sidemenu" : [],
        "drink" : [],
        "morning" : [],
        "chicken" : [],
    },

    "url" : {
        "special" : ["/detail/special/001","/detail/special/002","/detail/special/003","/detail/special/004","/detail/special/005"],
        "premium" : ["/detail/premium/001","/detail/premium/002","/detail/premium/003","/detail/premium/004","/detail/premium/005","/detail/premium/006","/detail/premium/007","/detail/premium/008","/detail/premium/009","/detail/premium/010","/detail/premium/011","/detail/premium/012","/detail/premium/013","/detail/premium/014"],
        "burger" : ["/detail/burger/001","/detail/burger/002","/detail/burger/003","/detail/burger/004","/detail/burger/005","/detail/burger/006","/detail/burger/007","/detail/burger/008","/detail/burger/009","/detail/burger/010","/detail/burger/011","/detail/burger/012","/detail/burger/013","/detail/burger/014"],
        "sidemenu" : ["/detail/sidemenu/001","/detail/sidemenu/002","/detail/sidemenu/003","/detail/sidemenu/004","/detail/sidemenu/005","/detail/sidemenu/006","/detail/sidemenu/007","/detail/sidemenu/008","/detail/sidemenu/009","/detail/sidemenu/010","/detail/sidemenu/011"],
        "drink" : ["/detail/drink/001","/detail/drink/002","/detail/drink/003","/detail/drink/004","/detail/drink/005","/detail/drink/006","/detail/drink/007","/detail/drink/008","/detail/drink/009","/detail/drink/010","/detail/drink/011","/detail/drink/012","/detail/drink/013","/detail/drink/014"],
        "morning" : ["/detail/morning/001","/detail/morning/002","/detail/morning/003","/detail/morning/004","/detail/morning/005","/detail/morning/006","/detail/morning/007","/detail/morning/008","/detail/morning/009","/detail/morning/010","/detail/morning/011","/detail/morning/012","/detail/morning/013","/detail/morning/014"],
        "chicken" : ["/detail/chicken/001","/detail/chicken/002","/detail/chicken/003","/detail/chicken/004"],
    },

    

}

export default burgerList;