

$(document).ready(function(){
	console.log(".Ready");
	var CurrentBg = 0;
	$("#Op1").mouseenter(function(){
		if (CurrentBg != 1){
			CurrentBg = 1
			$("body").fadeOut(1000, function(){
				$("body").css({
					"background":"url('Bg2.jpg')",
					"background-size": "100% auto",
					"background-position": "center",
					"background-repeat": "no-repeat"
				})
			})
			$("body").fadeIn(1000);
			}

			
		})

	$("#Op2").mouseenter(function(){
		if (CurrentBg != 2){
			CurrentBg = 2
		$("body").fadeOut(1000, function(){
			$("body").css({
				"background":"url('Bg3.jpg')",
				"background-size": "100% auto",
				"background-position": "center",
				"background-repeat": "no-repeat"
			})
		})
		$("body").fadeIn(1000);
		}
	})
	$("#Op3").mouseenter(function(){
		if (CurrentBg != 3){
			CurrentBg = 3
		$("body").fadeOut(1000, function(){
			$("body").css({
				"background":"url('Bg.jpg')",
				"background-size": "100% auto",
				"background-position": "center",
				"background-repeat": "no-repeat"
			})
		})
		$("body").fadeIn(1000);
		}
	})
	$("#Op3").on("click",function(){
		
	})




	})
	/*
	$("#Op1").on("click", function(){
		$("#Op2").css({
			"display":"block"
		});
		$("#Op3").css({
			"display":"block"
		});
		$("#Op6").animate({
			height: "10%"
		});
		$("#Op5").css({
			"display":"block"
		});
		$("#Op4").css({
			"display":"block"
		});
		$("#Op1").animate({
			width: "30%",
			height: "30%"
		})
	})
});
*/

