/* 학점 계산 프로그램
    90점 ~ 100점 - A학점
    80점 ~ 89점 - B학점
    70점 ~ 79점 - C학점
    60점 ~ 69점 - D학점
    60점 미만 - F학점
*/

//입력(변수 선언 및 값 저장)
let score = Number(prompt("점수를 입력하세요"));
let grade = "";   //문자형 변수 초기화

//연산(if 조건문) 및 출력
if(score >= 90 && score <= 100){
    grade = "A";
}
else if(score >= 80 && score < 90){
    grade = "B";
}
else if(score >= 70 && score < 80){
    grade = "C";
}
else if(score >= 60 && score < 70){
    grade = "D";
}else{
    grade = "F";
}
document.write("학점은 <span class='access'>" + 
            grade + "</span>입니다.")