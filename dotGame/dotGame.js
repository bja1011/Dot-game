DotGame.game = (function(){
	window.$ = DotGame.dom.$;
	window.$$ = DotGame.dom;
	var updateInterval;
	window.mouse = {x: 0, y: 0};
	var settings = {
			enemiesCount:10
		};
	window.heroEl;
	var enemies;
	var hero;
	
	
	
	
	
	
	

	var init = function(){
		
		

		document.addEventListener('mousemove', function(e){ 
			mouse.x = e.clientX || e.pageX; 
			mouse.y = e.clientY || e.pageY 
			
			mouse.x-=$('#dotGame')[0].getBoundingClientRect().left;
			mouse.y-=$('#dotGame')[0].getBoundingClientRect().top;
			
		}, false);
		
		$('#dotGame')[0].innerHTML = '<div class="screen active" id="loadingScreen"><p>Loading</p></div><div class="screen" id="startScreen"><button id="playGame" onClick="DotGame.game.play()">PLAY GAME</button></div><div class="screen" id="playScreen"><div id="playArea"></div><button id="playGame" onClick="DotGame.game.stop()">STOP</button></div>'
		
		startScreen = new DotGame.Screen.loadingScreen('startScreen');
		startScreen.show();
		
		playScreen = new DotGame.Screen.loadingScreen('playScreen');
		
				
		enemies = new Array();
		hero = new DotGame.GameObject.hero('adam');
		
		for(var i=0;i<settings.enemiesCount;i++) enemies[i] = new DotGame.GameObject.enemy('enemy '+i);
		
		for(e in enemies) {
			//c(enemies[e].update());
		}
		
		//c(hero);
		//c(enemies);

	}
	
	var play = function(){
		playScreen.show();
		updateInterval = setInterval(updateLoop,16);
		$('#playArea')[0].innerHTML = '<div id="hero"></div>';
		heroEl = $('#hero')[0];
		
		c(hero);
		
		
	}
	
	
	var stop = function(){
		startScreen.show();
		clearInterval(updateInterval);
		
	}
	
	function updateLoop() {
		
		
		hero.update();
		for(e in enemies) {
			//c(e);
		}
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	return {
		init:init,
		play:play,
		stop:stop
	}
	
})();

