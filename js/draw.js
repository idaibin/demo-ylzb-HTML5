var Drawing = function(){};
Drawing.prototype = {
	img:[],
	pages:function(){
		var main = document.createElement('div');
		var wrap = document.createElement('div');
		main.id = "main";
		wrap.id = "wrap";
		document.body.appendChild(main);
		document.body.appendChild(wrap);
		for (var i = 0; i < cfig.pages.length; i++) {
			var page = document.createElement('div');
			var pageMove = cfig.pages[i].Id[0];
			page.id = cfig.pages[i].Id[0].id;
			main.appendChild(page);
			if (pageMove.class) {
				page.className = pageMove.class;
			}
			if (pageMove.move) {
				for (var m = 0; m < pageMove.move.length; m++) {
					move[pageMove.move[m]](page);
				}
			}
			var inner = document.createElement('div');
			var pageInner = document.createElement('div');
			page.appendChild(inner);
			inner.appendChild(pageInner);

			for (var j = 0; j < cfig.pages[i].dom.length; j++) {
				var item = cfig.pages[i].dom[j];
				var x = item.x / 2;
				var y = item.y / 2;
				var w = item.w / 2;
				var h = item.h / 2;
				var dom;
				switch(item.type){
					case 'div':
						dom = document.createElement('div');
						dom.style.left = x + "px";
						dom.style.top = y + "px";
						dom.style.width = w + "px";
						dom.style.height = h + "px";
						if(item.html){
							var newDiv = document.createElement('div');
							newDiv.id = item.html;
							dom.appendChild(newDiv);
						}
						break;
					case 'img':
						dom = document.createElement('img');
						dom.setAttribute('src','images/'+item.src);
						dom.style.left = x + "px";
						dom.style.top = y + "px";
						dom.style.width = w + "px";
						dom.style.height = h + "px";
						this.img.push("images/"+item.src);
						break;
					}

				pageInner.appendChild(dom);
				if (item.id) {
					dom.id = item.id;
				}
				if (item.class) {
					dom.className += item.class;
				}
				if (item.click) {
					dom.addEventListener('touchstart',act[item.click]);
				}
				if (item.move) {
					move[item.move](dom);
				}
			};
		}
	},
	layers:function(){
		var share = document.createElement('div');
		share.id = "share";
		document.getElementById('wrap').appendChild(share);

		var img = document.createElement('img');
		var img1 = document.createElement('img');
		img.setAttribute('src','images/ymq.png');
		img1.setAttribute('src','images/share.png');
		share.addEventListener('touchstart',function(){
			share.style.webkitTransition = "all 0.2s";
			share.style.zIndex = -1;
			share.style.opacity = 0;
			img.style.webkitTransition = "all 0s";
			img1.style.webkitTransition = "opacity 0s";
			img.style.left = "0px";
			img.style.top = "300px";
			img.style.opacity = 0;
			img1.style.opacity = 0;
		})
		document.getElementById('share').appendChild(img);
		document.getElementById('share').appendChild(img1);
	},
	musicControls:function(){
		//  音乐
		var audio = document.createElement('audio');
		audio.setAttribute("src","video/Maroon 5 - Sugar.mp3");
		audio.setAttribute("autoplay","autoplay");
		audio.setAttribute("loop","loop");
		document.body.appendChild(audio);
		//  音乐控制img
		var musciBg = document.createElement('img');
		var musciOn = document.createElement('img');
		var musciStop = document.createElement('img');
		musciBg.setAttribute('src','images/music.png');
		musciBg.className = "round controls";
		musciOn.setAttribute('src','images/music_on.png');
		musciOn.className ="round musicPlay";
		musciStop.setAttribute('src','images/music_stop.png');
		musciStop.className ="musicPause hide";
		document.getElementById('main').appendChild(musciStop);
		document.getElementById('main').appendChild(musciOn);
		document.getElementById('main').appendChild(musciBg);

		$("#main>img").hide();
		musciBg.addEventListener('touchstart',function(){
			if ( $(".musicPause").hasClass('hide') ) {
				$(".controls").removeClass('round');
				$(".musicPlay").removeClass('round').addClass('hide');
				$(".musicPause").removeClass('hide')
				audio.pause();
			}else{
				$(".musicPause").addClass('hide');
				$(".controls").addClass('round');
				$(".musicPlay").removeClass('hide').addClass('round');
				audio.play();
			}
		})
	},
	video:function(){
		var video = document.createElement('div');
		video.id = "video";
		document.getElementById('wrap').appendChild(video);
		var div = document.createElement('div');
		div.className = "video";
		video.appendChild(div);

		var p2Play1 = document.createElement('img');
		var p2Play2 = document.createElement('img');
		p2Play2.className = "round";
		var p2Play3 = document.createElement('img');
		var p2Play4 = document.createElement('img');
		p2Play4.className = "round-anti";
		var p2Play5 = document.createElement('img');
		p2Play1.setAttribute("src","images/r1.png");
		p2Play2.setAttribute("src","images/r2.png");
		p2Play3.setAttribute("src","images/r3.png");
		p2Play4.setAttribute("src","images/r4.png");
		p2Play5.setAttribute("src","images/r5.png");
		document.getElementById('p2_play').appendChild(p2Play1);
		document.getElementById('p2_play').appendChild(p2Play2);
		document.getElementById('p2_play').appendChild(p2Play3);
		document.getElementById('p2_play').appendChild(p2Play4);
		document.getElementById('p2_play').appendChild(p2Play5);

		var p2Btn = document.createElement('div');
		document.getElementById("p2_btn").appendChild(p2Btn);
		var p2Div = document.createElement('div');
		var p2Div1 = document.createElement('div');
		p2Div1.className ="round";
		var p2Div2 = document.createElement('div');
		var p2Div3 = document.createElement('div');
		p2Div3.className = "round-anti";
		var p2Div4 = document.createElement('div');
		var p2Div5 = document.createElement('div');
		p2Btn.appendChild(p2Div);
		p2Btn.appendChild(p2Div1);
		p2Btn.appendChild(p2Div2);
		p2Btn.appendChild(p2Div3);
		p2Btn.appendChild(p2Div4);
		p2Btn.appendChild(p2Div5);
		$("#p2_btn").hide();
	},
	html:function(){
		var strategy = document.getElementById('strategy');
		strategy.innerHTML ="本届红牛“羽林争霸”赛事将于3月26、27日，4月9、10日进行选拔赛，分别在即墨、诸城、黄岛、城阳、胶州、日照、威海、龙口、东营开展9场赛事，之后的城市赛将于5月7和5月14日分别在青岛、烟台举行，东部大区赛于6月4日至5日在南京举办，最终的总决赛将于7月2日至3日在广州举行，届时会上演一番龙争虎斗，总冠军将于8月中旬赴里约为出征奥运会的中国羽毛球队现场加油助威。红牛“羽林争霸”采用5人制混合团体赛形式，七场四胜制，每局15分。年龄在16周岁以上，符合比赛资格的羽毛球爱好者均可报名参赛。2月28日至29日，报名官网开通。领队可以在官网进行注册、申请建队、填写资料，等待报名功能正式开通。3月1日—3月16日，官网报名功能正式开通，队伍提交报名申请。"
	}
}
