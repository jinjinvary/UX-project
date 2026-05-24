import { animate, scroll } from 'https://cdn.jsdelivr.net/npm/motion@12.39.0/+esm';

const container = document.querySelector(".start-container");
const title = document.querySelector("h1");
const startPage = document.querySelector(".start-page");

// 1. 초기 상태 설정 (JS에서 제어하여 CSS 충돌 방지)
if (title && startPage) {
    title.style.width = "0px";
    title.style.overflow = "hidden";
    title.style.whiteSpace = "nowrap";
    title.style.opacity = "0";
    startPage.style.gap = "0px";
}

// 2. 통합 스크롤 애니메이션 (0% ~ 30% 구간: 이미지 밀어내기)
scroll(
    animate(title, { 
        width: ["0px", "714px", "714px"] 
    }, { 
        offset: [0, 0.3, 1] 
    }),
    { target: container }
);

scroll(
    animate(startPage, { 
        gap: ["0px", "55.39px", "55.39px"],
        x: ["150px", "0px", "0px"] 
    }, { 
        offset: [0, 0.3, 1] 
    }),
    { target: container }
);

// 3. 제목 등장 애니메이션 (30% ~ 60% 구간: 페이드인 및 위로 이동)
scroll(
    animate(title, { 
        opacity: [0, 0, 1, 1],
        y: ["30px", "30px", "0px", "0px"]
    }, { 
        offset: [0, 0.3, 0.6, 1] 
    }),
    { target: container }
);
