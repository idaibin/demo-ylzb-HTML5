
var Action = function(){
}

Action.prototype = {
	arrLeft:function(e){
		$("#changeDiv").animate({"backgroundPosition":"-=320px"},500);
	},
	arrRight:function(e){
		$("#changeDiv").animate({"backgroundPosition":"+=320px"},500);
	},
	layer1:function(){
		$("#layer1").css({"opacity":1,"zIndex":1000});
	},
	layer1Hide:function(){
		$("#layer1").css({"opacity":0,"zIndex":-1});
	},
	layer2:function(){
		$("#layer2").css({"opacity":1,"zIndex":1000});
	},
	layer2Hide:function(){
		$("#layer2").css({"opacity":0,"zIndex":-1});
	},
	layer3:function(){
		$("#layer3").css({"opacity":1,"zIndex":1000});
	},
	layer3Hide:function(){
		$("#layer3").css({"opacity":0,"zIndex":-1});
	},
	video:function(){
		var mainChild = document.getElementById('main').children;
		$("#video").css({"opacity":1,"zIndex":1000});
		setTimeout(function(){
			$("#video").css({"opacity":0,"zIndex":-1});
			mainChild[move.val].className = "hide";
			mainChild[move.val+1].className = "show";
			move.val += 1;
		},2000)
	},
	hide:function(){
		var mainChild = document.getElementById('main').children;
		mainChild[move.val].className = "hide";
		mainChild[move.val+1].className = "show";
		move.val += 1;
		console.log(move.val);
	},
	p2:function(){
		var p2Inner = document.getElementById("page2").firstChild.firstChild;
		var p2 = p2Inner.children;
		p2[2].style.opacity = "0";
		p2[5].style.opacity = "1";
		p2[5].style.top = "-90px";
		p2[6].style.opacity = "1";
		p2[6].style.top = "342px";
		p2[7].style.height = "180px";
		p2[7].style.opacity = "1";
		p2[11].style.opacity = "0";
		
		$(".twoArr").css("display","block");
		$("#p2_btn").show();
	},
	share:function(){
		var share = document.getElementById('share');
		share.style.webkitTransition = "all 0.5s 0.2s";
		share.style.zIndex =1000;
		share.style.opacity = 1;

		var img = document.getElementById('share').firstChild;
		var img1 = document.getElementById('share').firstChild.nextSibling;
		img.style.webkitTransition = "all 1.5s";
		img1.style.webkitTransition = "opacity 1.5s";
		img.style.left = "285px";
		img.style.top = "15px";
		img.style.opacity = 1;
		img1.style.opacity = 1;
	},
	toLeft:function(){
		// 当前页面向左 新页面从右方进入
		var mainChild = document.getElementById('main').children;
		mainChild[move.val].className = "leave";
		mainChild[move.val+1].className = "active";
		$("#ul").children().removeClass();
		$("#ul").children().eq(move.val+1).addClass("page-skip");
		move.val += 1;
		console.log(move.val);
	},
	toRight:function(){
		// 当前页面向右 新页面从左方进入
		var mainChild = document.getElementById('main').children; 
		mainChild[move.val].className = "r-leave";
		mainChild[move.val-1].className = "r-active";
		$("#ul").children().removeClass();
		$("#ul").children().eq(move.val-1).addClass("page-skip");
		move.val -= 1;
		console.log(move.val);
	},
	toTop:function(){
		// 当前页面向上 新页面从下方进入
		var mainChild = document.getElementById('main').children; 
		mainChild[move.val].className = "t-leave";
		mainChild[move.val+1].className = "t-active";
		$("#ul").children().removeClass();
		$("#ul").children().eq(move.val+1).addClass("page-skip");
		move.val += 1;
		console.log(move.val);
	},
	toBottom:function(){
		// 当前页面向下 新页面从上方进入
		var mainChild = document.getElementById('main').children; 
		mainChild[move.val].className = "b-leave";
		mainChild[move.val-1].className = "b-active";
		$("#ul").children().removeClass();
		$("#ul").children().eq(move.val-1).addClass("page-skip");
		move.val -= 1;
		console.log(move.val);
	}
};
