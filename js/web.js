(function(){
	
//鼠标滚轮事件，滑动滚轮的时候让header;
var on = null;
var numHeader = 0;
var header = document.getElementById("header");
var headHeight = parseInt(header.offsetHeight);
window.onresize = function() {
	headHeight = parseInt(header.offsetHeight);
	on = true;
	fnScroll(on);
}
window.addEventListener('scroll', function() {
	on = false;
	fnScroll(on);
});
var spanColor = header.getElementsByTagName('span')[0];
spanColor.addEventListener('click', function() {
	on = true;
	fnScroll(on);
})

function fnScroll(on) {
	var headerTop = document.getElementById("headerTop");
	var nav = document.getElementById("nav");
	var t1 = null;
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	if(scrollT > 10 || on == true) {
		header.style.top = -headHeight + 'px';
		headerTop.style.top = -parseInt(headerTop.offsetHeight) + 'px';
		nav.style.top = -parseInt(headerTop.offsetHeight) + 'px';
		if(on) {
			window.scrollTo(0, 30);
		}
	} else {
		header.style.top = 0;
		headerTop.style.top = 0;
		nav.style.top = 0;
	}
}
//背景倾斜 ---------------------------------------------------------------------------------------------------------------------
var mainTeam = document.getElementById('mainTeam');
mainTeam.addEventListener('mousemove', fnMove);

function fnMove(ev) {
	var img1 = document.getElementsByClassName('mainTeam')[0];
	var h2 = mainTeam.getElementsByTagName('h2')[0];
	var disX = ev.pageX;
	var disY = ev.pageY - mainTeam.offsetTop;
	var scale = disX / mainTeam.offsetWidth;
	var scale1 = disY / mainTeam.offsetHeight;

	img1.style.transform = 'rotateY(' + (10 * scale - 5) + 'deg) rotateX(' + (-10 * scale1 + 5) + 'deg)';

	h2.style.left = (300 - 20 * scale + 10) + 'px';
	console.log(scale)
}
//刷新--------------------------------------------------------------------------------------------------------------
var leftReload = document.getElementsByClassName('leftReload')[0];
var quan = leftReload.getElementsByClassName('quan')[0];
var html = '';
for(var i = 0; i < 30; i++) {
	html += "<span style='-webkit-transform:rotate(" + i * 12 + "deg)'></span>";
}
quan.innerHTML = html;
var quanSpans = quan.getElementsByTagName('span');
var quanNum = -1;
var tQ = setInterval(function() {
	quanNum++;
	if(quanNum < 30) {
		quanSpans[quanNum].style.background = '#000';
	} else {
		quanNum = -1;
		trigger(reload, 'onclick');
		for(var i = 0; i < quanSpans.length; i++) {
			quanSpans[i].style.background = '#D8D3D3';
		}
	}
}, 300)
function addEvent(obj, evName, fn) {
	obj.Ev = obj.Ev || {};
	obj.Ev[evName] = obj.Ev[evName] || [];
	obj.Ev[evName].push(fn);
	obj[evName] = function() {
		trigger(obj, evName);
	}
}
function trigger(obj, evName) {
	if(obj.Ev[evName]) {
		for(var i = 0; i < obj.Ev[evName].length; i++) {
			obj.Ev[evName][i]();
		}
	}
}

//---------
var reload = document.getElementsByClassName('zhuan')[0];
var numReload = 0;
var divsOnOff = true;

function page(inner0, inner1, inner2) {
	var work = document.getElementsByClassName('work');
	var workDivs = document.getElementsByClassName('workDiv');
	for(var i = 0; i < workDivs.length; i++) {
		var Height = getComputedStyle(work[i]).height
		workDivs[i].style.height = Height;
	}

	var t2 = setTimeout(function() {
		var newDiv = document.getElementsByClassName('newDiv');
		newDiv[0].innerHTML = inner0;
		newDiv[1].innerHTML = inner1;
		newDiv[2].innerHTML = inner2;

	}, 2000)
	var t1 = setTimeout(function() {
		for(var i = 0; i < workDivs.length; i++) {
			workDivs[i].style.height = '0';
			divsOnOff = true;
		}
	}, 3000)
}
addEvent(reload, 'onclick', function() {
	if(divsOnOff) {
		divsOnOff = false;
		quanNum = -1;
		for(var i = 0; i < quanSpans.length; i++) {
			quanSpans[i].style.background = '#D8D3D3';
		}
		numReload++;
		numReload %= 3;
		if(numReload == 1) {
			page("<img class='imgWork1' src='img/set2pic1.jpg'>",
				"<video class='videoWork2' preload='auto' autoplay='autoplay' loop='' muted='' >" +
				"<source src='videos/main-weplay.webm' type='video/webm'>" +
				"<source src='videos./main-weplay.ogv' type='video/ogg' codecs='theora,vorbis'></source>" +
				"<source src='videos/main-weplay.mp4' type='video/mp4'></video>",
				"<img class='imgWork4' src='img/set2pic3.jpg'>");
			return;
		}
		if(numReload == 2) {
			page("<img class='imgWork1' src='img/set3pic1.jpg'>",
				"<video class='videoWork2' preload='auto' autoplay='autoplay' loop='' muted='' >" +
				"<source src='videos/artdesuisse.webm' type='video/webm'>" +
				"<source src='videos./artdesuisse.ogv' type='video/ogg' codecs='theora,vorbis'></source>" +
				"<source src='videos/artdesuisse.mp4' type='video/mp4'></video>",
				"<img class='imgWork4' src='img/set3pic2.jpg'>");
			return;
		}
		if(numReload == 0) {
			page("<video class='videoWork1' preload='auto' autoplay='autoplay' loop='' muted='' >" +
				"<source src='videos/awatch.webm' type='video/webm'>" +
				"<source src='videos./awatch.ogv' type='video/ogg' codecs='theora,vorbis'></source>" +
				"<source src='videos/awatch.mp4' type='video/mp4'></video>",
				"<img class='imgWork2' src='img/set1pic1.jpg'>",
				"<img class='imgWork4' src='img/set1pic2.jpg'>");
			return;
		}
	}
})

//.mainTeam 

window.addEventListener('scroll', function() {
	var mainTeam = document.getElementsByClassName('mainTeam')[0];
	var mainTeamH2 = mainTeam.getElementsByTagName('h2')[0];
	var mainTeamUl = mainTeam.getElementsByTagName('ul')[0];
	var viewHeight = document.documentElement.clientHeight;
	if(mainTeamH2.getBoundingClientRect().top < viewHeight) {
		mainTeamH2.style.top = "-20px";
		mainTeamUl.style.top = "250px";
	} else {
		mainTeamH2.style.top = "50px";
		mainTeamUl.style.top = "310px";
	}
})

// .mainTeam 3d轮播图--------------------------------------------------------------------------------------------------------
//var mainFeedback = document.getElementsByClassName('mainFeedback');
function Page(obj) {
	this.obj = document.getElementsByClassName(obj)[0];
	this.as = this.obj.getElementsByTagName('a');
	this.Index = null;
	this.num = 0;
	this.view = document.body.clientWidth || document.documentElement.clientWidth;
	this.t1 = null;
	this.settings = [{
		d1: ["translate3d(0,0,0)"],
		d2: ["translate3d(-300px,0,-100px)"],
		d3: ["translate3d(-500px,0,-150px)"],
		d4: ["translate3d(500px,0,-150px)"],
		d5: ["translate3d(300px,0,-100px)"]
	}]
}
Page.prototype.init = function() {
	var that = this;
	for(var i = 0; i < this.as.length; i++) {
		this.as[i].index = i;
		this.as[i].addEventListener('click', function(ev) {
			if(ev.pageX > that.view / 2) {
				that.play(1);
			} else {
				that.play1(1);
			}
			ev.preventDefault();
		})
		
	}

}
Page.prototype.play = function(index) {
	var that = this;
	//点击第二个，第二个用第一个坐标，第3个用第二个坐标 ,第1个用第三个坐标，
	this.as[index - 1].style.transform = this.settings[0].d5;
	this.as[index].style.transform = this.settings[0].d1;
	this.as[index + 1].style.transform = this.settings[0].d2;
	this.as[index + 2].style.transform = this.settings[0].d3;
	this.as[index + 3].style.transform = this.settings[0].d4;
	//执行完毕 一次动作后，让初始配置坐标等于当前的坐标
	this.settings[0].d1 = this.as[index - 1].style.transform;
	this.settings[0].d2 = this.as[index].style.transform;
	this.settings[0].d3 = this.as[index + 1].style.transform;
	this.settings[0].d4 = this.as[index + 2].style.transform;
	this.settings[0].d5 = this.as[index + 3].style.transform;
	this.Index = index;
}
Page.prototype.play1 = function(index) {
	var that = this;
	//点击第5个，第5个用第一个坐标，第4个用第5个坐标 ,第3个用第4个坐标，
	this.as[index - 1].style.transform = this.settings[0].d2;
	this.as[index].style.transform = this.settings[0].d3;
	this.as[index + 1].style.transform = this.settings[0].d4;
	this.as[index + 2].style.transform = this.settings[0].d5;
	this.as[index + 3].style.transform = this.settings[0].d1;
	//执行完毕 一次动作后，让初始配置坐标等于当前的坐标
	this.settings[0].d1 = this.as[index - 1].style.transform;
	this.settings[0].d2 = this.as[index].style.transform;
	this.settings[0].d3 = this.as[index + 1].style.transform;
	this.settings[0].d4 = this.as[index + 2].style.transform;
	this.settings[0].d5 = this.as[index + 3].style.transform;
}
Page.prototype.autoPlay = function() {
	var that = this;
	this.t1 = setInterval(function() {
		that.play(1);
	}, 3000)
}
var d1 = new Page('mainFeedback');
d1.init();
d1.autoPlay();
//mainCanvas 三个div移入事件		---------------------------------------------------------------------------------------

var sides = document.getElementsByClassName('mainCanvasSide');
var sideSpan, sideStrong, sideH3, sideA, sideUl;

function sideAct(i) {

	sideSpan = sides[i].getElementsByTagName('span')[0];
	sideStrong = sides[i].getElementsByTagName('strong')[0];
	sideH3 = sides[i].getElementsByTagName('h3')[0];
	sideA = sides[i].getElementsByTagName('a')[1];
	sideUl = sides[i].getElementsByTagName('ul')[0];
	sideSpan.style.top = '80px';
	sideStrong.style.top = '80px';
	sideH3.style.top = '80px';
	sideA.style.top = '250px';
	sideUl.style.opacity = '1';
}

function sideOut(i) {
	sideSpan = sides[i].getElementsByTagName('span')[0];
	sideStrong = sides[i].getElementsByTagName('strong')[0];
	sideH3 = sides[i].getElementsByTagName('h3')[0];
	sideA = sides[i].getElementsByTagName('a')[1];
	sideUl = sides[i].getElementsByTagName('ul')[0];
	sideSpan.style.top = '150px';
	sideStrong.style.top = '160px';
	sideH3.style.top = '180px';
	sideA.style.top = '200px';
	sideUl.style.opacity = '0';
}

var mainCanvas = document.getElementsByClassName('mainCanvas')[0];
mainCanvas.addEventListener('mousemove', function(ev) {
	var viewWidth = document.documentElement.clientWidth;
	var i;
	if(ev.pageX < viewWidth / 3 && ev.pageX > 0) {
		i = 0;
		sideOut(1);
		sideOut(2);
	} else if(ev.pageX < viewWidth / 3 * 2 && ev.pageX > viewWidth / 3) {
		i = 1;
		sideOut(0);
		sideOut(2);
	} else if(ev.pageX < viewWidth && ev.pageX > viewWidth / 3 * 2) {
		i = 2;
		sideOut(1);
		sideOut(0);
	} else {

	}
	sideAct(i)

})
mainCanvas.addEventListener('mouseout', function() {
	sideOut(0);
	sideOut(1);
	sideOut(2);
})

//照片墙----------------------------------------------------------------------------------------------------------------
//当照片墙 进入可视区的时候，然后照片开始变换
// 第一步 获取照片墙所有的图片，然后让图片透明度 全部变为0；
var mainPhotoWallUl = document.getElementsByClassName('mainPhotoWallUl')[0];
var html = '';
for(var i = 0; i < imgsData.length; i++) {
	html += '<li><img src=' + imgsData[i].src + '></li>'
}
mainPhotoWallUl.innerHTML = html;

function motion(obj, time, doFn, callBack) {
	obj.style.transition = time;
	doFn.call(obj);

	var motOnOff = false;

	obj.addEventListener('transitionend', function() {
		if(!motOnOff) {
			callBack && callBack.call(obj);
			motOnOff = true;
		}
	})
}

//	console.log(mainPhotoImgs.length)

var mainOn = true;
var mainPhotoImgs = mainPhotoWallUl.querySelectorAll('img');
document.addEventListener('scroll', function() {

	var mainPhoto = document.querySelector('.main_photoWall');
	var viewHeight = document.documentElement.clientHeight;
	if(mainPhoto.getBoundingClientRect().top < viewHeight) {
		if(mainOn) {
			mainOn = false;
			var motNum = 0;
			for(var i = 0; i < mainPhotoImgs.length; i++) {
				(function(i) {
					setTimeout(function() {
						motion(mainPhotoImgs[i], '1s', function() {
							this.style.transform = 'scale(0)';
						}, function() {
							motion(this, '1s', function() {
								this.style.transform = 'scale(1)';
								this.style.opacity = '0';
							}, function() {
								motNum++;
								if(motNum == mainPhotoImgs.length) {
									toBig();
								}
							})

						})
					}, Math.random() * 1000)
				})(i)
			}
		}
	}

})

function toBig() {
	for(var i = 0; i < mainPhotoImgs.length; i++) {
		mainPhotoImgs[i].style.transition = '';
		mainPhotoImgs[i].style.transform = 'rotateY(0deg) translateZ(-' + Math.random() * 500 + 'px)';
		(function(i) {
			setTimeout(function() {
				motion(mainPhotoImgs[i], '2s', function() {
					this.style.opacity = '1';
					this.style.transform = 'rotateY(-360deg) translateZ(0)';
				})
			}, Math.random() * 1000)
		})(i)
	}
}
//-------------------------------------------------------------------------------------------------------------------
//粒子变化
/* default dom id (particles-js) */
//particlesJS();

/* config dom id */
//particlesJS('dom-id');

/* config dom id (optional) + config particles params */
particlesJS('particles-js', {
	particles: {
		color: '#fff',
		shape: 'circle', // "circle", "edge" or "triangle"
		opacity: 1,
		size: 4,
		size_random: true,
		nb: 150,
		line_linked: {
			enable_auto: true,
			distance: 100,
			color: '#fff',
			opacity: 1,
			width: 1,
			condensed_mode: {
				enable: false,
				rotateX: 600,
				rotateY: 600
			}
		},
		anim: {
			enable: true,
			speed: 1
		}
	},
	interactivity: {
		enable: true,
		mouse: {
			distance: 300
		},
		detect_on: 'canvas', // "canvas" or "window"
		mode: 'grab',
		line_linked: {
			opacity: .5
		},
		events: {
			onclick: {
				enable: true,
				mode: 'push', // "push" or "remove"
				nb: 4
			}
		}
	},
	/* Retina Display Support */
	retina_detect: true
});
//---------------------------------------------------------------------------------------------------------
//canvas
var canvas = document.getElementById('canvas2');
var ctx = canvas.getContext("2d");
var cheight = canvas.height;
try {
	var audioContext = new window.AudioContext();
} catch(e) {
	Console.log('!Your browser does not support AudioContext');
}
var musicCon = document.getElementsByClassName('musicCon')[0];
var musicBg = document.getElementById("musicBg");
var musOn = true;
var musicEnd = true;
var music = document.getElementById("music");
	var musicSpan = music.getElementsByTagName('span')[0];
	var t1M = null;
function spanMove(){
	
	var num = 0;
	t1M = setInterval(function(){
		num+=1;
		if(num<=60){
			musicSpan.style.left = num+'px';
		}else{
			num=0;
		}
	},50)
	
}
musicCon.onclick = function() {
	clearInterval(t1M)

	if(musOn) {
			musicBg.style.display = 'block';
			musicCon.style.background = '#10c28a url(img/musicJian1.png) no-repeat 43px 40px';
			spanMove()
			musOn = false;
		} else {
			musicBg.style.display = 'none';
			musicCon.style.background = '#10c28a url(img/musicJian.png) no-repeat 43px 40px';
			musOn = true;
			musicSpan.style.left = '40px';
		}
			if(musicEnd) {
			loadSound("videos/faded.mp3");
		};
		
	}
	// 定义加载音频文件的函数
function loadSound(url) {
	musicEnd = false;
	var request = new XMLHttpRequest(); //建立一个请求
	request.open('GET', url, true); //配置好请求类型，文件路径等
	request.responseType = 'arraybuffer'; //配置数据返回类型
	// 一旦获取完成，对音频进行进一步操作，比如解码
	request.onload = function() {
		var arraybuffer = request.response;
		var context = new AudioContext();
		//对音频数据进行解码。
		context.decodeAudioData(
			arraybuffer,
			function(buffer) { //解码成功做的操作。
				//创建音频节点。
				var source = context.createBufferSource();
				//创建频谱解析的节点。
				var analyser = context.createAnalyser();

				source.connect(analyser);
				//链接播放器节点。
				analyser.connect(context.destination)
					//添加音频数据
				source.buffer = buffer;
				//播放
				source.start(0);
				//创建Uint8Array数组
				var array = new Uint8Array(analyser.frequencyBinCount);
				//我们的画布即Canvas宽800px,同时我们设定柱条宽10px , 柱与柱间间隔为2px，所以得到meterNum为总共可以画的柱条数。
				//再用数组总长度除以这个数目就得到采样的步长，即在遍历array时每隔step这么长一段我们从数组中取一个值出来画，
				//这个值为array[i*step]。这样就均匀地取出meterNum个值，从而正确地反应了原来频谱图的形状。
				var meterWidth = 10; //能量条的宽度
				var capHeight = 2;
				var gap = 2; //能量条间的间距
				//计算当前画布上能画多少条
				var meterNum = 800 / (10 + 2);
				var step = Math.round(array.length / meterNum); //计算从analyser中的采样步长
				var arrColor = ['green', 'red', 'pink', 'blue', 'yellow', 'oringe'];
				var capYPositionArray = []; //将上一画面各帽头的位置保存到这个数组
				(function() {
					//把每段音频频率数据更新入数组。
					analyser.getByteFrequencyData(array);
					//清除画布。
					ctx.clearRect(0, 0, 800, 500);
					//绘制长条。
					for(var i = 0; i < meterNum; i++) {
						var value = array[i * step];
						if(capYPositionArray.length < Math.round(meterNum)) {
							capYPositionArray.push(value); //初始化保存帽头位置的数组，将第一个画面的数据压入其中
						};
						ctx.fillStyle = arrColor[Math.round(Math.random() * 10)];
						//开始绘制帽头
						if(value < capYPositionArray[i]) { //如果当前值小于之前值
							ctx.fillRect(i * 12, cheight - (--capYPositionArray[i]), meterWidth, capHeight); //则使用前一次保存的值来绘制帽头
						} else {
							ctx.fillRect(i * 12, cheight - value, meterWidth, capHeight); //否则使用当前值直接绘制
							capYPositionArray[i] = value;
						};
						ctx.fillRect(i * 12, cheight - value + capHeight, meterWidth, cheight);
					}
					requestAnimationFrame(arguments.callee);
				})();
			},
			function(error) { //解码失败做的操作。
				console.log(error);
			}
		);
	}
	request.send();
}
//---------------------------------------------------------------------------------------------------------------
window.addEventListener('scroll', function() {
	var mainOurBlog = document.getElementById('mainOurBlog');
	var blog = mainOurBlog.getElementsByClassName('blog');
	var viewHeight = document.documentElement.clientHeight;
	if(mainOurBlog.getBoundingClientRect().top<viewHeight){
		for(var i=0;i<blog.length;i++){
			blog[i].style.transitionDelay = i+'s';
			blog[i].style.top = '-40px';
		}	
	}
})

//------------------------------------------------------------------
//var yu = document.getElementById("yu");
//yu.style.height = headHeight+'px';
//yu.style.width = '100%';
////预加载
//function rotate(obj){
//		var t1=setTimeout(function(){
//				obj.style.transform='rotateY(-135deg)';
//		},500)
//		var t2=setTimeout(function(){
//				obj.style.transform='rotateX(135deg)';
//		},1000)
//			var t3=setTimeout(function(){
//				obj.style.transform='rotateZ(-185deg)';
//		},1500)
//		var t4=setTimeout(function(){
//				obj.style.transform='rotateX(185deg)';
//		},2000)
//	}
//	var box = document.getElementById('yuWrap');
//	rotate(box)
//	var tt1 ;
//	 
//	var Allimgs = document.getElementsByTagName('img');
//	var arrImg = [];
//	for(var i=0;i<Allimgs.length;i++){
//		arrImg.push(Allimgs[i].getAttribute('src'))
//	}
//	var num = 0;
//	
//	for(var i=0;i<arrImg.length;i++){
//		var newImg =  document.createElement('img');
//		newImg.src = arrImg[i];
//		newImg.onload = function(){
//				clearInterval(tt1);
//				tt1 = setInterval(function(){
//					rotate(box)
//			},3000)
//			num++;
//			if(num == arrImg.length/5){
//				clearInterval(tt1);
//				var yu = document.getElementById("yu");
//				yu.style.display = 'none';
//			}
//		}
//	}
})()
