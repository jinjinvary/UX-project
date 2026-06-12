// 2026-06-11
const flex = document.querySelector('.exhibit-flex');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const items = document.querySelectorAll('.exhibit-item');

let currentIndex = 0;
const totalOriginalItems = 3; // 실제 아이템 개수 (Item 1~3)
const visibleItems = 3; // 한 화면에 보이는 개수

// 초기 상태 설정
updateSlider();

// Next 버튼 클릭
nextBtn.addEventListener('click', () => {
    currentIndex++;
    flex.style.transition = 'transform 0.4s ease-out';
    updateSlider();

    // 마지막 클론의 위치에 도달하면 순식간에 진짜 처음으로 점프
    if (currentIndex === totalOriginalItems) {
        setTimeout(() => {
            // 슬라이더 자체의 애니메이션 끔
            flex.style.transition = 'none';
            // 아이템들의 크기/블러 애니메이션도 일시적으로 끔
            items.forEach(item => item.style.transition = 'none');
            
            currentIndex = 0;
            updateSlider();

            // 다음 프레임에서 애니메이션 다시 활성화
            setTimeout(() => {
                items.forEach(item => item.style.transition = '');
            }, 50);
        }, 400); 
    }
});

// Prev 버튼 클릭
prevBtn.addEventListener('click', () => {
    if (currentIndex === 0) {
        // 처음에서 이전을 누르면 순식간에 클론 위치로 점프
        flex.style.transition = 'none';
        items.forEach(item => item.style.transition = 'none');
        
        currentIndex = totalOriginalItems;
        updateSlider();
        
        // 점프 후 다시 애니메이션 켜고 이동
        setTimeout(() => {
            flex.style.transition = 'transform 0.4s ease-out';
            items.forEach(item => item.style.transition = '');
            currentIndex--;
            updateSlider();
        }, 10);
    } else {
        currentIndex--;
        flex.style.transition = 'transform 0.4s ease-out';
        updateSlider();
    }
});

function updateSlider() {
    const movePercentage = (100 / visibleItems) * currentIndex;
    flex.style.transform = `translateX(-${movePercentage}%)`;

    // 가운데 아이템에 active 클래스 추가
    items.forEach((item, index) => {
        if (index === currentIndex + 1) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}
