// Js.js
$(document).ready(function(){
	console.log(".Ready");
	var CurrentBg = 0;
	$("#Op1").mouseenter(function(){
		if (CurrentBg != 1){
			CurrentBg = 1
			$("body").css({
				"background-image":"url('Bg2.jpg')"
			})
			}
		})

	$("#Op2").mouseenter(function(){
		if (CurrentBg != 2){
			CurrentBg = 2
			$("body").css({
				"background-image":"url('Bg3.jpg')"
			})
		}
	})
	$("#Op3").mouseenter(function(){
		if (CurrentBg != 3){
			CurrentBg = 3
			$("body").css({
				"background-image":"url('Bg.jpg')"
			})
		}
	})
	$("#Op3").on("click",function(){
		
	})
})
