(function(){
//span 요소 노드 가져오기
const spanEl = document.querySelector("main h2 span");
//화면에 표시할 문장 배열
const txtArr = ['Web Publisher', 'Front-End Developer', 
'Web UI Designer', 'UX Designer', 'Back-End Developer']
//배열의 인덱스 초깃값
let index = 0;
// 화면에 표시할 문장 배열에서 요소를 하나 가져온 뒤 배열로 만들기
let currentTxt = txtArr[index].split("");

function writeTxt(){
    spanEl.textContent += currentTxt.shift();
    if(currentTxt.length !== 0){
        setTimeout(writeTxt, Math.floor(Math.random()*100));
    }else{
        currentTxt = spanEl.textContent.split("");
        setTimeout(deleteTxt,3000);
    }
}

function deleteTxt(){
    currentTxt.pop();
    spanEl.textContent = currentTxt.join("");
    if(currentTxt.length !== 0 ){
        setTimeout(deleteTxt, Math.floor(Math.random() * 100));
    }else{
        index = (index +1) % txtArr.length;
        currentTxt = txtArr[index].split("");
        writeTxt();
    }
}
writeTxt();
})();
//텍스트 타이핑 효과 개선하기
// writeTxt();
//스크롤 내려갔는지 확인 후 active 클래스 추가 및 삭제
const headerEl = document.querySelector('header');
// window.addEventListener('scroll', function(){
//     const browerScrollY = window.scrollY;
//     if(browerScrollY > 0){
//         headerEl.classList.add('active');
//     }else{
//         headerEl.classList.remove('active');
//     }
// });
window.addEventListener('scroll', function(){
    this.requestAnimationFrame(scrollCheck);
});
function scrollCheck(){
    let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if(browerScrollY > 0){
        headerEl.classList.add("active");
    }else{
        headerEl.classList.remove("active");
    }
}

//부드러운 이동 애니메이션 효과 구성하기
// 애니메이션 스크롤 이동
const animationMove = function(selector){
    const targetEl = document.querySelector(selector);
    const browserScrollY = window.scrollY
    const targetScrollY = targetEl.getBoundingClientRect().top + browserScrollY;
    window.scrollTo({ top: targetScrollY, behavior: 'smooth'});
};

//스크롤 이벤트 연결하기
const scollMoveEl = document.querySelectorAll("[data-animation-scroll = 'true']");
for(let i =0; i < scollMoveEl.length; i++){
    scollMoveEl[i].addEventListener('click',function(e){
        const target = this.dataset.target;
        animationMove(target);
    })
}
