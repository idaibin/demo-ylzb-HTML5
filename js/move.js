
var MoveTo = function(){
}

MoveTo.prototype = {
	m:0,
	val:0,
	x:'',
	y:'',
	next:function(div){
		div.addEventListener('touchstart',function(e){
			move.x = e.changedTouches[0].pageX;
			move.y = e.changedTouches[0].pageY;
		})
		div.addEventListener('touchend',function(e){
			var endX = e.changedTouches[0].pageX;
			var endY = e.changedTouches[0].pageY;
			var x = move.x - endX;
			var y = move.y - endY;
			if (  Math.abs(x) < Math.abs(y) && y > 0 ) {
				div.className = "hide";
				div.nextSibling.className = "show";
				move.val += 1;
				console.log(move.val);
				$("#main>img").show();
			}
		});
	},
	move:function(div){
		div.addEventListener('touchstart',function(e){
			move.x = e.changedTouches[0].pageX;
			move.y = e.changedTouches[0].pageY;
		})
		div.addEventListener('touchmove',function(e){
			var mx = e.changedTouches[0].pageX;
			var my = e.changedTouches[0].pageY;
			var x = move.x - mx;
			var y = move.y - my;
			var yy = y / 50;
			var textHeight = document.getElementById("layerText").offsetHeight;
			var textChildHeight = document.getElementById("layerText").firstChild.offsetHeight;
			var slideH = document.getElementById("slide").offsetHeight;
			var outHeight = textChildHeight - textHeight ;
			var slide = outHeight / (textHeight - slideH);
			var step = yy / slide;
			if ( Math.abs(x) < Math.abs(y) && y > 0 ){
				console.log("bottom to top")
				if ( move.m < outHeight) {
				$("#layerText").children().css("top","-="+yy+"px");
				$("#slide").css("top","+="+step+"px");
				move.m += yy;
				}
			}else if ( Math.abs(x) < Math.abs(y) && y < 0 ){
				if ( move.m >= 0) {
				$("#layerText").children().css("top","-="+yy+"px");
				$("#slide").css("top","+="+step+"px");
				move.m += yy;
				}
			}
		})
		div.addEventListener('touchend',function(e){
			var endX = e.changedTouches[0].pageX;
			var endY = e.changedTouches[0].pageY;
			var x = move.x - endX;
			var y = move.y - endY;
			if ( Math.abs(x) > Math.abs(y) && x > 0 ) {
				console.log("left to right");
			}else if ( Math.abs(x) > Math.abs(y) && x < 0 ){
				console.log("right to left");
			}else if ( Math.abs(x) < Math.abs(y) && y > 0 ){
				console.log("bottom to top");
			}else if ( Math.abs(x) < Math.abs(y) && y < 0 ){
				console.log("top to bottom");
			}else{
				console.log("just touch");
			}
		})
	},
	MoveToLeft:function(div){
		// 从右向左滑动  新页面从右进入（下一页）
		div.addEventListener('touchstart',function(e){
			move.x = e.changedTouches[0].pageX;
			move.y = e.changedTouches[0].pageY;
		})
		div.addEventListener('touchend',function(e){
			var endX = e.changedTouches[0].pageX;
			var endY = e.changedTouches[0].pageY;
			var x = move.x - endX;
			var y = move.y - endY;
			var leave = div.classList.contains("leave");
			if ( Math.abs(x) > Math.abs(y) && x > 0  && leave == false && move.val < cfig.pages.length - 1 ) {
				div.className = "leave";
				div.nextSibling.className = "active"; 
				$("#ul").children().removeClass();
				$("#ul").children().eq(move.val+1).addClass("page-skip");
				move.val += 1;
				console.log(move.val);
			}
		});
	},
	MoveToRight:function(div){
		// 从左向右滑动  新页面从左进入（上一页）
		div.addEventListener('touchstart',function(e){
			move.x = e.changedTouches[0].pageX;
			move.y = e.changedTouches[0].pageY;
		})
		div.addEventListener('touchend',function(e){
			var endX = e.changedTouches[0].pageX;
			var endY = e.changedTouches[0].pageY;
			var x = move.x - endX;
			var y = move.y - endY
			var leave = div.classList.contains("r-leave");
			if ( Math.abs(x) > Math.abs(y) && x < 0 && leave == false && move.val > 0) {
				div.className = "r-leave";
				div.previousSibling.className = "r-active"; 
				$("#ul").children().removeClass();
				$("#ul").children().eq(move.val-1).addClass("page-skip");
				move.val -= 1;
				console.log(move.val);
			}
		})
	},
	MoveToTop:function(div){
		// 从下向上滑动  新页面从下进入（下一页）
		div.addEventListener('touchstart',function(e){
			move.x = e.changedTouches[0].pageX;
			move.y = e.changedTouches[0].pageY;
		})
		div.addEventListener('touchend',function(e){
			var endX = e.changedTouches[0].pageX;
			var endY = e.changedTouches[0].pageY;
			var x = move.x - endX;
			var y = move.y - endY
			var leave = div.classList.contains("t-leave");
			if (  Math.abs(x) < Math.abs(y) && y > 0 && leave == false && move.val < cfig.pages.length - 1 ) {
				div.className = "t-leave";
				div.nextSibling.className = "t-active"; 
				$("#ul").children().removeClass();
				$("#ul").children().eq(move.val+1).addClass("page-skip");
				move.val += 1;
				console.log(move.val);
			}
		});
	},
	MoveToBottom:function(div){
		// 从上向下滑动  新页面从上进入（上一页）
		div.addEventListener('touchstart',function(e){
			move.x = e.changedTouches[0].pageX;
			move.y = e.changedTouches[0].pageY;
		})
		div.addEventListener('touchend',function(e){
			var endX = e.changedTouches[0].pageX;
			var endY = e.changedTouches[0].pageY;
			var x = move.x - endX;
			var y = move.y - endY
			var leave = div.classList.contains("b-leave");
			if ( Math.abs(x) < Math.abs(y) && y < 0 && leave == false && move.val > 0) {
				div.className = "b-leave";
				div.previousSibling.className = "b-active"; 
				$("#ul").children().removeClass();
				$("#ul").children().eq(move.val-1).addClass("page-skip");
				move.val -= 1;
				console.log(move.val)
			}
		});
	},
	pageSkip:function(){
		// 	页面跳转
		var mainChild = document.getElementById('main').children;
		var ul = document.createElement('ul');
		ul.id = "ul";
		document.getElementById('wrap').appendChild(ul);
		for (var i = 0; i < cfig.pages.length; i++) {
			var li = document.createElement('li');
			ul.appendChild(li);
			ul.children[0].className = "page-skip";
			li.addEventListener('touchstart',function(_i){
				return function(){
					$("#ul").children().removeClass();
					ul.children[_i].className = "page-skip";
					if ( _i >  move.val) {
						mainChild[_i].className = "active";
						mainChild[move.val].className = "leave";
					}else if( _i < move.val ){
						mainChild[_i].className = "r-active";
						mainChild[move.val].className = "r-leave";
					}
					move.val = _i;
					console.log(move.val);
				}
			}(i));
		}
	}
}