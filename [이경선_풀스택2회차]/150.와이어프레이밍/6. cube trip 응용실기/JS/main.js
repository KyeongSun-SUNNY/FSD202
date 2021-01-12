// 블랙핑크 메인 JS - main.js //

////  전역변수구역 ///////
// 각 곡정보를 객체에 셋팅한다

// 곡정보객체
var bmv = {
    "붐바야": "도입부는 유니크한 신스 사운드가 주축이 되고 리드미컬한 래핑이 인상적이며, 대세 장르인 댄스홀과 일렉트로닉 하우스가 결합된 EDM 곡(크로스오버) 이다.에너지가 넘치는 파워풀한 후렴구 드랍 부분은 곡의 키가 전조 되어 반전을 주고 강렬한 드럼비트와 독특한 신스 사운드로 꽉 채워준다. 후크는 귀에 착 감기며 더욱 흥을 돋게 한다. 당당하고 카리스마 있는 나를 표현하며 오늘 하루 모든 걸 잊고 너와 춤추고 싶다는 마음을 가사에 담았다.",
    "불장난": "강렬한 드럼 비트가 주축이 되어 리드미컬한 피아노 패턴과 독특한 신스의 반복으로 사운드를 풍부하게 채워주며 후렴구는 불타오르는듯한 느낌을 강렬한 연주로 아낌없이 보여준다. 각 멤버들의 유니크한 보이스가 돋보이는 EDM곡으로 멈출 수 없는 떨림과 끌림, 그리고 걷잡을 수 없는 사랑의 불장난을 가사로 담아냈다.",
    "마지막처럼": "도입부터 중독성 있는 리드 신스가 귀를 사로잡는 댄스곡으로 다양한 장르의 요소가 적절하게 어우러졌다. 리드미컬한 벌스 편곡과 상반되는 후렴구의 멜로디를 따라 연주되는 청명한 신스 라인과 사운드 소스의 화려한 멜로디가 적재적소에 사용되었다. 마치 이번이 마지막 사랑인 것처럼 모든 힘을 다해 열심히 사랑해달라는 로맨틱한 내용을 담고 있다.",
    "뚜두 뚜두": "강력한 트랩 비트위에 가미된 동양적인 퍼커션 리듬과 독창적인 휘슬 리드 사운드는 블랙핑크만의 독특한 색깔을 강조한다. 호소력있는 벌스 파트와 프리드랍에서의 훅라인, 그리고 2절의 랩은 그녀들의 보컬에 탄성을 자아내기 충분하다. 직설적인 가사와 함께 트랙에서 느껴지는 에너지로 흉내 낼 수 없는 블랙핑크만의 새로운 카리스마를 제시한다.",
    "Love Sick": "레트로한 사운드 위에 블랙핑크의 파워풀한 보컬이 더해져 노래를 고조 시킨다. 인간은 왜 사랑에 상처받고 아파하면서도 또 다른 사랑을 찾아가는지에 대한 궁극적인 질문을 던지는 가사가 돋보이는 곡으로, 멤버 지수와 제니가 작사 작곡에 각각 참여하여 팬들의 기대감을 더욱 배가시킨다."
}; ////// bmv객체 //////

/// 로드구역 : html태그를 모두 그린 후 실행구역 /////
/// load이벤트는 img, video 등의 모든 컨텐츠 로딩후 실행함(시간걸림)
/// DOMContentLoaded 이벤트는 html태그만 그리면 바로실행(시간단축)
window.addEventListener("DOMContentLoaded", function () {

    // 1. 로드구역 확인
    console.log("로딩완료!");


}); ///////// 로드구역 //////////////////////////////////
//////////////////////////////////////////////////////

/*///////////////////////////////////////////
    함수명:chgbmv
    기능:메뉴 클릭시 곡명에 맞게 큐브를 회전시키고 
         설명이 나오게함
*/ ///////////////////////////////////////////
function chgbmv(me) { // me - 클릭된 요소 자신

    // 0. 선택된 요소의 값담기
    var sv = me.innerText;

    // 1.함수호출확인, 전달값 확인
    console.log("나야나!" + sv);

    // 2.변경대상: .cube
    var tg = document.getElementsByClassName("cube")[0];
    // 클래스니까 선택후 몇번째 꼭해야함! .item(순번) 또는 [순번]

    // 3. 큐브에 맞게 회전하기
    if (sv === "HOME") {
        tg.style.transform = "translate(-50%,-50%) rotateX(0deg) rotateY(0deg)";
    } else if (sv === "붐바야") {
        tg.style.transform = "translate(-50%,-50%) rotateX(-90deg) rotateY(720deg)";
    } else if (sv === "불장난") {
        tg.style.transform = "translate(-50%,-50%) rotateX(360deg) rotateY(-90deg)";
    } else if (sv === "마지막처럼") {
        tg.style.transform = "translate(-50%,-50%) rotateX(-360deg) rotateY(90deg)";
    } else if (sv === "뚜두 뚜두") {
        tg.style.transform = "translate(-50%,-50%) rotateX(720deg) rotateY(-180deg)";
    } else if (sv === "Love Sick") {
        tg.style.transform = "translate(-50%,-50%) rotateX(90deg) rotateY(-360deg)";
    }

    // 큐브 트랜지션 설정하기
    tg.style.transition = "all 1.5s ease-in-out";


    ///////////////////////////////////////////////
    // 곡정보 박스 변수에 할당하기!!! ///////////////
    // 대상: .mvbox
    var mvbox = document.getElementsByClassName("mvbox")[0];

    // 만약 "HOME"메뉴를 클릭하면 위의 코드까지만 실행하여
    // 큐브 회전은 하되 곡정보 셋팅과 보이는기는 
    // 하지 않아야 한다!
    if (sv === "HOME") {
        //1. HOME이면 곡정보박스 없애기
        mvbox.style.opacity = "0";
        mvbox.style.transition = "none";
        //2. HOME이면 아래 소스 실행하지 않기
        return false; //여기서 돌아감(false는 아무것도 안함!)
    } ///// if ///////////////

    // 4. 곡정보 셋팅하기 //
    // (1). 곡이름 셋팅하기
    // 대상: #mvcname
    // 선택된 메뉴명과 같으므로 메뉴명을 넣어준다!
    document.getElementById("mvname").innerHTML = sv;

    // (2). 곡상세정보 셋팅하기
    // 대상: #mvinfo
    // 미리셋팅된 곡명 속성의 내용으로 만든 bmv객체를 불러온다!
    document.getElementById("mvinfo").innerHTML = bmv[sv];

    // 5. 곡정보박스 보이기(처음 이동시 바로 숨기기)

    // (1) 트랜지션 없이 투명하게!
    mvbox.style.opacity = "0";
    mvbox.style.transition = "none";

    // (2) 트랜지션으로 나타나기
    //setTimeout(함수,시간)
    //일정시간 후 함수실행하기
    // 함수는 직접 코드를 저장하는 익명함수로 구현함!
    // 1500은 1.5초임
    // 1.5초후 함수를 실행함!
    setTimeout(function () {
        console.log("여기실행!!!");
        mvbox.style.opacity = "1";
        mvbox.style.transition = "opacity .8s ease-in-out";
    }, 1500); //// 타임아웃함수 /////


} //////// chgbmv 함수 ////////////////////////
////////////////////////////////////////////
