// 큐브 트립 메인 JS - main.js

//// 전역변수구역 /////////
// 각 도시정보를 객체에 셋팅한다

// 도시정보객체
var city = {
    "서울": "대한민국의 수도인 서울을 지방자치단체인 특별시로 부르는 명칭이다. 한반도 중앙에 있으며, 한강을 사이에 두고 남북으로 펼쳐져 있다. 북쪽 끝은 도봉구 도봉동, 동쪽 끝은 강동구 상일동, 남쪽 끝은 서초구 원지동, 서쪽 끝은 강서구 오곡동이다. 시청은 중구 을지로1가(태평로1가 31)에 있다. 한반도의 0.28%(남한 면적의 0.61%)에 해당하는 넓이로, 남북간 연장거리 30.30km, 동서간 연장거리 36.78km이다.",
    "뉴욕": "미국 최대의 도시로서, 1790년 이래 수도로서의 지위는 상실했으나, 미국의 상업·금융·무역의 중심지로서, 또 공업도시로서 경제적 수도라 하기에 충분한 지위에 있으며, 또 많은 대학·연구소·박물관·극장·영화관 등 미국 문화의 중심지로도 중요한 위치를 차지하고 있다. 교외를 포함하여 1600만이 넘는 방대한 인구를 수용하는 이 거대도시는 미국 내에서도 독자적인 세계를 이루는 독특한 도시이다. 국제적으로는 대무역항으로서 대서양 항로의 서단에 위치하는 가장 중요한 항구이며, 1920년대 이후에는 런던을 대신하여 세계 금융의 중심지가 되었다.",
    "베를린": "독일 동부 저지(低地)에 있다. 슈프레강(江)이 구불구불하게 시가지를 관통하며 시가지 서부에서 하펠강과 합류한다. 뮈겔베르크산(115m), 셰퍼베르크산(103m), 하펠베르크산(97m), 크로이츠베르크산(66m)은 모두 말단퇴석(末端堆石)의 사력구(砂礫丘)이다.넓은 숲과 많은 호수를 안고 있어 ‘베를리너 루프트(베를린의 공기)’라고 노래로 부를 정도로 공기가 맑다. 북위 52.5°에 있어 겨울은 몹시 춥고, 여름도 서늘하다.",
    "런던": "잉글랜드 남동부 템스강(江) 하구에서부터 약 60km 상류에 있다. 영국의 정치·경제·문화 그리고 교통의 중심지일 뿐만 아니라, 영국연방의 사실상의 중심도시다. 뉴욕·상하이·도쿄와 더불어 세계 최대 도시의 하나다.1888년 런던주(州)가 설치되었고, 1899년 시티오브런던을 제외한 지역을 28개의 행정구로 구분하여 런던 주청(州廳)이 통할하였다. 다만 런던 경시청(스코틀랜드 야드)은 주변의 여러 주에 미치는 수도경찰관구를 관할하였다. 1963년 런던 행정법에 의해서 1965년 런던 주청이 폐쇄되고, 대신 시티오브런던을 포함한 32개의 행정구로 구성된 그레이터런던 주청이 설치되었다.",
    "파리": "교외를 포함한 ‘파리 데파르트망(Department)’은 면적 2,845㎢, 인구 약 1,240만 명(2018)이다. 오랫동안 센 데파르트망의 수도였으나 1964년부터 파리만으로 독립 데파르트망이 되었다. 프랑스의 정치·경제·교통·학술·문화의 중심지일 뿐만 아니라 세계의 문화 중심지로, ‘꽃의 도시’라고 불리며 프랑스 사람들은 스스로 ‘빛의 도시’라고 부른다.세계의 다른 나라 수도와 비교하여 몹시 좁은 편에 속하지만 둘레 36km의 환상도로(옛 성벽 자취)에 둘러싸인 부분이 1860년 이래의 파리 시가지이다. 파리 시가지(city)의 면적은 105.4㎢이며 2018년 기준 인구는 약 220만 명이다."
}; ////// city객체 ////////////

/// 로드구역 : html태그를 모두 그린 후 실행구역/////
/// load이벤트는 img, video 등의 모든 컨텐츠 로딩후 실행함(시간걸림)
/// DOMContentLoaded 이벤트는 html태그만 그리면 바로실행(시간단축)
window.addEventListener("DOMContentLoaded", function () {

    // 1. 로드구역 확인
    console.log("로딩완료!");


}); /////// 로드구역 //////////////////////////////////////
/////////////////////////////////////////////////////////

/*/////////////////////////////////////////////////
    함수명:chgCity
    기능: 클릭시 도시명에 맞게 큐브를 회전시키고 
     설명이 나오게함
*/ /////////////////////////////////////////////////
function chgCity(me) { // me - 클릭된 요소 자신

    // 0. 선택된 요소의 값담기
    var sv = me.innerText;

    // 1. 함수호출확인, 전달값 확인
    console.log("나야나!" + sv);

    // 2. 변경대상: .cube
    var tg = document.getElementsByClassName("cube")[0];
    // 클래스니까 선택후 몇번째 꼭해야함! item(순번) 또는 [순번]

    // 3. 큐브도시에 맞게 회전하기
    if(sv==="출발"){
        tg.style.transform = "translate(-50%,-50%) rotateX(0deg) rotateY(0deg)";
    }
    else if(sv==="서울"){
        tg.style.transform = "translate(-50%,-50%) rotateX(-90deg) rotateY(720deg)";
    }
    else if(sv==="런던"){
        tg.style.transform = "translate(-50%,-50%) rotateX(360deg) rotateY(-90deg)";
    }
    else if(sv==="베를린"){
        tg.style.transform = "translate(-50%,-50%) rotateX(-360deg) rotateY(90deg)";
    }
    else if(sv==="파리"){
        tg.style.transform = "translate(-50%,-50%) rotateX(720deg) rotateY(-180deg)";
    }
    else if(sv==="뉴욕"){
        tg.style.transform = "translate(-50%,-50%) rotateX(90deg) rotateY(-360deg)";
    }
    
    // 큐브 트랜지션 설정하기
    tg.style.transition = "all 1.5s ease-in-out"
    
    
    //////////////////////////////////////////////////////////
    // 도시정보 박스 변수에 할당하기!!! //////////////////////////
    // 대상: .cbox
    var cbox = document.getElementsByClassName("cbox")[0];
    
    // 만약 "출발" 메뉴를 클릭하면 위의 코드까지만 실행하여
    // 큐브 회전은 하되 도시정보는 셋팅과 보이기는
    // 하지 않아야 한다!
    if(sv === "출발"){
        // 1. 출발이면 도시정보박스 없애기
        cbox.style.opacity = "0";
        cbox.style.transition = "none";        
        // 2. 출발이면 아래 소스 실행하지 않기
        return false; // 여기서 돌아감(false는 아무것도 안함!)
        
    }///// if ////////////
    
    // 4. 도시정보 셋팅하기 //
    // (1) 도시이름 셋팅하기
    // 대상: #cname
    // 선택된 메뉴명과 같으므로 메뉴명을 넣어준다!
    var cname = document.getElementById("cname").innerHTML = sv;
    
    // (2) 도시상세정보 셋팅하기
    // 대상: #cinfo
    // 미리셋팅된 도시명 속성의 내용으로 만든 city 객체를 불러온다!
    if(sv!=="출발")
    document.getElementById("cinfo").innerHTML = city[sv];
    
    // 5. 도시정보박스 보이기(처음 이동시 바로 숨기기)
    
    // (1) 트랜지션 없이 투명하게!
    cbox.style.opacity = "0";
    cbox.style.transition = "none";
    
    // (2) 트랜지션으로 나타나기
    // setTimeout(함수,시간)
    // 일정시간 후 함수실행하기
    // 함수는 직접 코드를 저장하는 익명함수로 구현함!
    // 1500은 1.5초임
    // 1.5초후 함수를 실행함!
    setTimeout(function(){
        console.log("여기실행!!!");
        cbox.style.opacity = "1";
        cbox.style.transition = "opacity .8s ease-in-out";
    },1500); ////// 타임아웃함수 ///////////////////
    
    

    
} /////////// chgCity 함수 ////////////////////////////
///////////////////////////////////////////////////
