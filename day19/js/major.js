//선택한 옵션 항목 찾아내기
//select 태그 이름(name)에 폼이름으로 접근
let selectMenu = document.testForm.major;

function displaySelect(){
    //select option 속성의 value로 선택 - archi
    // let selectText = document.getElementById("subj").value;
    // alert(selectText + "가 선택되었습니다.");

    //태그의 text - 건축공학과
    //document.testForm.major.options[1].innerText
    let selectText = selectMenu.options[selectMenu.selectedIndex]
                               .innerText;
    alert(selectText + "가 선택되었습니다.");
                                
}
