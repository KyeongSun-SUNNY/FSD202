// VOGUE PJ 메인 페이지 JS - main.js

$(function(){ // jQB /////////////////
    
    console.log("로딩완료!");
    
    // 햄버거 버튼 클릭시 모바일 메뉴 보이기
    // 이벤트 대상: #ham
    // 변경 대상: .moshow
    $("#ham").click(function(){
        
        // 상태구분하기: .moshow가 높이값 0일때와 아닐때
        var sts = $(".moshow").height();
        //console.log("메뉴박스높이값"+sts);
        
        // 높이값 설정하기
        var hv = 0; // 기본값 0
        // 만약 아래 if문에 해당안되면 높이값은 0이다!
        
        if(sts===0){ // 높이값 0이므로 열어줘야함!
            hv = $(".mognb").height();
        } /////// if ///////////
        
        // height() 메서드는 선택요소의 높이값을 리턴함
        // console.log("현재높이값:"+hv);
        
        // 높이값 변경하기
        $(".moshow").css({
            height: hv+"px"
        }); ///// css //////
        
    }); //////// click ///////////////
    
    // 검색버튼 클릭시 검색보이기/숨기기
    // 검색박스는 현재 display:none 처리됨
    // 제이쿼리 슬라이드 다운 애니메이션은 
    // slideToggle(시간) -> 현재 상태를 판단해서
    // display:none 인 여부를 기준으로 슬라이드
    // 업/다운을 변경해주는 메서드
    // -> 원본의 높이값을 알 필요가 없음!!!
    // -> slide 메서드가 이것을 체크해줌!!
    
    // 이벤트 대상: #magni 
    // 변경대상: .mos
    $("#magni").click(function(){
        $(".mos").slideToggle(500);
    }); ////// click ///////////////
    
    
    
    
    
    
    
    
}); ///////// jQB ////////////////////
//////////////////////////////////////