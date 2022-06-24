//이미지 슬라이드 구현

let num = 0;    //이미지 번호
let slidingAuto = null;  //슬라이드 작동

//일정시간 간격으로 작동 
slidingAuto = setTimeout("play('right')", 3000);   

function play(direct) {	
	if(direct=="right"){
		num++;
	}else if(direct=="left"){
		num--;
	}else {
		num = direct;
	}

	if(num == 0){
		$(".viewImgList li.imglist1").animate({"opacity" : 0}, 1000);
		$(".viewImgList li.imglist2").animate({"opacity" : 0}, 1000);
		$(".viewImgList li.imglist0").animate({"opacity" : 1}, 1000);
	}


	slidingAuto = setTimeout("play('right')", 3000); //콜백	
}