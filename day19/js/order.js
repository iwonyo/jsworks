//체크박스에 이벤트 처리
let check = document.querySelector("#shippingInfo");

//클릭했을때 이벤트 처리
check.addEventListener("click", doCheck)

function doCheck(){
    //name 속성으로 처리
    if(check.checked == true){
       shippingName.value = billingName.value;
       shippingTel.value = billingTel.value;
       shippingAddr.value = billingAddr.value;
    }else{//check.checked == false
        shippingName.value = "";
        shippingTel.value = "";
        shippingAddr.value = "";
    }
}