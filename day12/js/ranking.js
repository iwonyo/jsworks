//순위에 따른 메달 정하기
let ranking = 2;

switch(ranking){
    case 1:   //ranking = 1
        document.write("금메달<br>");
        break;
    case 2:
        document.write("은메달<br>");
        break;
    case 3:
        document.write("동메달<br>");
        break;
    default:
        document.write("메달 없음<br>");
        break;
}

/*
초기값 변수
switch(조건식 or 값){
case 조건1 or 값:
    실행문
    break;
case 조건2 or 값:
    실행문
    break;
case 조건3 or 값:
    실행문
    break;
default:
    실행문
    break;
}
*/
