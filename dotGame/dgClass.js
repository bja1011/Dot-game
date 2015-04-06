DotGame.GameObject = (function(){
	
	function GameObject(name) {
        this.name = name;
    }
	
    GameObject.prototype = {
        constructor: GameObject,
		
		collision: function(){
			
		},
		size:1,
		position:{
				x:0,
				y:0
			}
		
	}
		
	
	function Hero(name) {		
		this.update = function() {
			c('update');
			window.heroEl.style.width = "20px";
			window.heroEl.style.height = "20px";
			window.heroEl.style.left = mouse.x+'px';
			window.heroEl.style.top = mouse.y+'px';
			
		}
		GameObject.call(this,name);
	}
	
	function Enemy(name) {
		
		GameObject.call(this,name);
		this.direction = {
			x:0,
			y:0
		}
	}
	Enemy.prototype = new GameObject();
	Enemy.prototype.constructor = Enemy;
	
	Hero.prototype = new GameObject();
	Hero.prototype.constructor = Hero;
	
	
	
	return {
        hero:Hero,
		enemy:Enemy
    };
	
	
	
})();


DotGame.Screen = (function(){
	
	function Screen(id) {
        this.id = id;
    }
	
    Screen.prototype = {
        constructor: Screen,
		show: function(){
			var activeScreen = $(".active")[0];
			cScreen = $("#" + this.id)[0];
			
			if (activeScreen) {
				$$.removeClass(activeScreen, "active");
			}       
			$$.addClass(cScreen, "active");
		},
		
	}
	
	function LoadingScreen(id) {
		Screen.call(this,id);
	}
	
	function StartScreen(id) {
		Screen.call(this,id);
	}
	
	function PlayScreen(id) {
		Screen.call(this,id);
	}
	
	LoadingScreen.prototype = new Screen();
	LoadingScreen.prototype.contructor = LoadingScreen;
	
	StartScreen.prototype = new Screen();
	StartScreen.prototype.constructor = StartScreen;
	
	PlayScreen.prototype = new Screen();
	PlayScreen.prototype.constructor = PlayScreen;
	
	return {
		loadingScreen:LoadingScreen,
		startScreen:StartScreen,
		playScreen:PlayScreen
	}

})();











