DotGame.game = (function(){
	window.$ = DotGame.dom.$;
	window.$$ = DotGame.dom;
	
	var updateInterval;
	window.mouse = {x: 0, y: 0};
	var settings = {
			enemiesCount:50
		};
	window.heroEl;
	window.enemies;
	window.hero;
	window.ctx;
	
	
	
	
	
	
	

	var init = function(){
		
		var ctx = window.ctx;

		document.addEventListener('mousemove', function(e){ 
			mouse.x = e.clientX || e.pageX; 
			mouse.y = e.clientY || e.pageY 
			
			mouse.x-=$('#dotGame')[0].getBoundingClientRect().left;
			mouse.y-=$('#dotGame')[0].getBoundingClientRect().top;
			
		}, false);
		
		$('#dotGame')[0].innerHTML = '<div class="screen active" id="loadingScreen"><p>Loading</p></div><div class="screen" id="startScreen"><button id="playGame" onClick="DotGame.game.play()">PLAY GAME</button></div><div class="screen" id="playScreen"><canvas id="playArea"></canvas><button id="playGame" onClick="DotGame.game.stop()">STOP</button></div>'
		
		startScreen = new DotGame.Screen.startScreen('startScreen');
		startScreen.show();
		
		playScreen = new DotGame.Screen.playScreen('playScreen');
		
		window.gameAspectRatio = $('#dotGame')[0].offsetWidth/$('#dotGame')[0].offsetHeight;
		var playArea = $("#playArea")[0];
		window.ctx = playArea.getContext("2d");
		
	
				
		
		hero = new DotGame.GameObject.hero('adam');
		
		
		
		

	}
	
	var play = function(){
		
		updateInterval = setInterval(updateLoop,16);
		//$('#playArea')[0].innerHTML = '<div id="hero"></div>';
		
		enemies = new Array();
		for(var i=0;i<settings.enemiesCount;i++) enemies['enemy-'+i] = new DotGame.GameObject.enemy('enemy-'+i);
		
		/*for(e in enemies) {
			$('#playArea')[0].innerHTML+= '<div id="'+enemies[e].name+'" class="enemy"></div>';
		}*/

		hero.size = hero.startSize;
				
		heroEl = $('#hero')[0];
		playScreen.show();		
	}
	
	var stop = function(){
		clearInterval(updateInterval);
		enemies = null;
		startScreen.show();		
	}
	
	function updateLoop() {
		

		ctx.clearRect(0, 0, ctx.width, ctx.height);
		
		hero.update();
		for(e in enemies) {
			enemies[e].update();
		}


		

		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	return {
		init:init,
		play:play,
		stop:stop
	}
	
})();

