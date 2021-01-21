// 대한항공 크로스오버 사이트 JS - main.js //

//// 로드구역 /////////////////////////////////
/*
window.addEventListener("load",function(){
        
        var bnum = 0;
        var slider = document.querySelectorAll('.slider li');
        var Aslider = document.querySelectorAll('.Aslider li');
        var btn = document.querySelector('.btn');
        var anm = ["B787","B777","B747","B737","A380","A330","A220"];
        
        
        setInterval(function(){
            
            bnum++;
            if(bnum===7)bnum = 0;
            
            for(var x of slider){
                x.classList.remove("on");
            }
            
            slider[bnum].classList.add("on");
            
            for(var y of Aslider){
                y.classList.remove("on");
            }
            Aslider[bnum].classList.add("on");
            
            
            btn.innerText = anm[bnum];
            
        },3000);
        
        
    });///////////// load //////////////////
    */