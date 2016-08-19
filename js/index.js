
var Index = function(){
}
Index.prototype = {
	scale:function(){
		// 	页面缩放
		var H = window.innerHeight; 
		if ( H > 504 ) {
			var size = H / 504;
			var main = document.getElementById('main');
			main.style.webkitTransform = "scale("+size+")";
		}
	},
	skip:function(){
		// 	页面跳转
		move.pageSkip();
	},
	init:function(){
		//	页面绘制 
		draw.pages();
		draw.layers();
		draw.video();
		draw.html();
		draw.musicControls();
		ind.scale();   
	}
};

// 继承
var cfig = new Config();
var act = new Action();
var draw = new Drawing();
var move = new MoveTo();
var ind = new Index();