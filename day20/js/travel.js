// 아이템 목록
let itemList = []; // 빈 배열 생성
let addBtn = document.getElementById("add");

// 버튼 클릭시 이벤트 처리
// addBtn.onclick = addList;
addBtn.addEventListener("click", addList);

// 추가(출력)함수
function addList(){
    let item = document.getElementById("item").value;
        itemList.push(item);
        document.getElementById("item").value = "";
        document.getElementById("item").focus();

        console.log(itemList);

        showList();  // 목록조회
    }
function showList(){
    // 목록으로 표시 (ul, li 태그사용)
    let list = "<ul>";

    for(var i = 0; i < itemList.length; i++){
        // document.getElementById("itemList")
        // .innerHTML = itemList[i];
        list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>";
    }
    // 아이템 목록 출력
    list += "</ul>"
    document.getElementById("itemList").innerHTML = list;

    // 아이템 삭제
    let removeList = document.querySelectorAll(".close");
    for(var i = 0; i < removeList.length; i++){
        removeList[i].addEventListener("click", remove);
    }
}

function remove(){
    console.log(this);
    let id = this.getAttribute("id");
    itemList.splice(id, 1);
    showList();
}

// for(var i=0; i<removeList.length; i++){
//     removeList[i].addEventListener("click", remove);
// }

