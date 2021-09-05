const winH = window.innerHeight //viewport 높이
const winTop = window.scrollY // 스크롤한 현재위치


const hometextContent = "Seongwon's Portfolio :)"; // 입력할 텍스트
const hometext = document.querySelector('.hometext');
let textNum = 0;

// 텍스트 내용이 textNum 보다 작으면 하나씩 출력 
// textNum을 1씩 증가 해서 순서도 1씩 증가
function typing(){
    if( textNum < hometextContent.length){
        let txt = hometextContent.charAt(textNum);
        hometext.innerHTML += txt;
        textNum++;
    }
}
setInterval(typing, 150)



//================ 메뉴 이벤트 =====================


//햄버거 메뉴 이벤트
//누를 때 토글기능으로 클래스 추가제거
const menu = document.querySelector('.hamburger');
const menuText = document.querySelector('.menuText');
menu.addEventListener('click',function(){
    menu.classList.toggle('hamburgerOn')
    menuText.classList.toggle('menuTextOn')
})


//menu 안에있는 리스트들 
const menuHome = document.querySelector('.menuHome') 
const menuAbout = document.querySelector('.menuAbout')
const menuWork = document.querySelector('.menuWork')
const menuContact = document.querySelector('.menuContact')

//각 섹션들
const home = document.querySelector('.home')
const about = document.querySelector('.about')
const work = document.querySelector('.work')
const contact = document.querySelector('.contact')

//각 섹션의 현재위치로부터 해당요소의 top 값
var homePos = home.getBoundingClientRect().top
var aboutPos = about.getBoundingClientRect().top
var workPos = work.getBoundingClientRect().top
var contactPos = contact.getBoundingClientRect().top

//스크롤한 top 값 + 현재위치에서 해당요소의 top값 = 각 섹션의 절대좌표
const abPosHome = winTop + home.getBoundingClientRect().top;
const abPosAbout = winTop + about.getBoundingClientRect().top;
const abPosWork = winTop + work.getBoundingClientRect().top;
const abPosContact = winTop + contact.getBoundingClientRect().top;

//메뉴리스트들 눌렀을 때 해당하는 위치로 이동 + smooth 효과
menuHome.addEventListener('click', () => window.scrollTo({top:abPosHome, left:0, behavior:'smooth'}) )
menuAbout.addEventListener('click', () => window.scrollTo({top:abPosAbout, left:0, behavior:'smooth'}) )
menuWork.addEventListener('click', () => window.scrollTo({top:abPosWork, left:0, behavior:'smooth'}) )
menuContact.addEventListener('click', () => window.scrollTo({top:abPosContact,behavior:'smooth'}) )

//=====================================================

const aboutAnimation = document.querySelector('.aboutAnimation')
const workAnimation = document.querySelector('.workAnimation')
const contactAnimation = document.querySelector('.contactAnimation')



window.addEventListener('scroll',function(){

    
    //================== About Page ========================
    
    var aboutPos = about.getBoundingClientRect().top

    if(aboutPos >-200 && aboutPos <200){
        aboutAnimation.classList.add('aboutAnimationOn')
    }

    //exp부분 위치값에 따라 스타일 변경
    const expList = document.querySelectorAll('.expList')
    expList.forEach( i => {
        let expPos = i.getBoundingClientRect().top
        if( expPos < 700){
            i.style.opacity = '1'
            i.style.transform = 'translateX(0)'
        }
    })

    //======================================================



    //================== Work Page ========================

    var workPos = work.getBoundingClientRect().top

    if(workPos >-200 && workPos < 200){
        workAnimation.classList.add('workAnimationOn')
        
    }


    //======================================================



    //================== Contact Page ========================

    var contactPos = contact.getBoundingClientRect().top

    if(contactPos >-200 && contactPos <100){
        contactAnimation.classList.add('contactAnimationOn')
 
    }


    //======================================================

})










