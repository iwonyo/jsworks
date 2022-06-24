// 유효성 검사 (체크)
let id = document.getElementById("user-id");
let pw1 = document.getElementById("pwd1");
let pw2 = document.getElementById("pwd2");

// onchange
id.onchange = checkId; // 함수호출 (괄호생략해서 이벤트 발생시에만 호출)
pw1.onchange = checkPw;
pw2.onchange = comparePw;

function checkId(){
    if(id.Value.length < 4 || id.Value.length > 15){
        alert("아이디는 4자 이상 15자 이하로 입력하세요.");
        id.Select();
    }
}
function checkPw(){
    if(pw1.Value.length < 8){
        alert("비밀번호는 8자 이상 입력하세요.");
        pw1.Select();
    }
}
function comparePw(){
    if(pw1.Value != pw2.Value){
        alert("비밀번호가 일치하지 않습니다.");
        pw2.Value = "";  // 비밀번호 초기화
        pw2.focus();  // 커서위치
    }
}

// 문자열 및 글자수 일치여부 (정규 표현식)
let id = "a123"
let regEx =  /[0-9A-Za-z]{5}/
console.log(regEx.test(id))
