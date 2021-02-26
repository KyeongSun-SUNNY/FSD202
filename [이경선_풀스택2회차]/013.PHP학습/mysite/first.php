<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>나의 첫번째 PHP!</title>
</head>

<body>
    <h1>나는 풀스택개발자 입니다!</h1>
    <!--
    서버측 코드는 오직 서버만 해석하므로
    로컬에서 백엔드코드는 결코 절대로 볼 수 없다!
    ????? 로컬에선 모름
    php코드 블록을 물음표로 만들었음!-->
    <?php 
    //주석1
    /*주석2*/
    #주석3
    
    echo ("<h1>첫번째 PHP 출력을 축하합니다~!!!</h1>");
    echo "<h1>두번째 줄도 아름답게~!!!</h1>";
    
    // 문법1: echo
    // 에코~!!! echo (메시지) 또는 echo 메시지
    // 웹 페이지의 특정부분에 정보를 출력해주는 메서드
    
    // 문법2: print
    // 프린트~!!! print (메시지) 또는 print 메시지
    // 웹 페이지의 출력용 메서드(메시지는 태그포함가능)
    print ("<h1>이거슨 print 명령어다!</h1>");
    print "<h1>이거슨 print 명령어다!</h1>";
    
    // echo와 print의 차이점
    // echo는 그냥 명령문뿐이라서 함수처럼 사용불가(리터없음)
    // 반면 print 메서드는 함수처럼 사용할 수 있고 1을 리턴함
    // 그러나 처리 속도는 echo가 빠름!
    // 단순 출력은 echo를 주로 사용함!
    /*
    문법3: PHP의 변수
        1) $를 첫문자로 만들고 따옴표로 안싸면 변수다!
        2) 별도로 선언하지 않고 값을 할당하면 데이터형이 결정됨!
        3) 대소문자 구분함
        4) 따옴표 안에 출력하는 변수는 그대로 사용할 수 있다!
          (따옴표 변수 갈라내기 안해도됨!)
        5) 변수명을 그대로 출력하려면 홑따옴표 사용!
            변수의 값을 출력하려면 쌍따옴표 사용!
    */
    $first = 15;
    $second = 40;
    $sum = $first + $second;
    // 출력하기
    echo "<h2>계산식: $first + $second = $sum</h2>";
    
    //문법4: php문자 마무리는 반드시 세미콜론(;)을 해야함!
    /*
    문법5: 문자나 변수를 더하는 방법
        1) 더할 문자나 변수 사이에 점(.)을 찍는다(문자연산)
        2) 더할 문자나 변수 사이에 콤마(,)를 찍는다(그룹용)
        3) 더하기 기호(+)는 수학적 계산을 수행함!
    */
    
    // 점(.)은 단순 문자열 더하기를 한다
    echo "<h1>".$first."세가 되면".$second."층되는 빌딩의 주인이 되리!</h1>";
    // 콤마(,) 영역화를 해서 소괄호를 묶은 것과 동일함!
    echo "<h1>내가 ",$sum."세에 ","사장이 되었으면","좋겠다!</h1>";
    // .연산자로 숫자를 더할경우-> 문자로 더하기가됨
    echo "<h1>".$first.$second."</h1>";
    // 변수끼리 더하고자 할때-> 플러스(+)는 계산용!
    // 만약 여기에 소괄호로 숫자변수를 묶지 않으면 에러남!
    echo "<h1>".($first+$second)."</h1>";
    // 괄호대신 콤마(,)를 사용할 수 있다!
    echo "<h1>",$first+$second,"</h1>";
    
    //랜덤수 출력
    // 문법6: rand(시작수,끝수) 랜덤숫자
    // 소괄호는 함수형식임!
    $rdn = rand(1,10);
    echo "<h1>랜덤수: $rdn</h1>";
    
    //변수의 홑따옴표, 쌍따옴표 출력
    $saram = "나는 인간인가?";
    echo '<h1>$saram</h1>';
    echo "<h1>$saram</h1>";
    
    
    
    
    ?>

</body>

</html>