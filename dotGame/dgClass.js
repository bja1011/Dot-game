DotGame.GameObject = (function(){
	
	function GameObject(name) {
        this.name = name;
		
    }
	
    GameObject.prototype = {
        constructor: GameObject,
		
		collision: function(){
			
		},
		
		
		
	}
		
	
	function Hero(name) {
		this.startSize = 2;		
		this.size = this.startSize;
		this.update = function() {
			
			window.heroEl.style.width = this.size+'%';
			window.heroEl.style.height = this.size*window.gameAspectRatio+'%';
			window.heroEl.style.left = mouse.x+'px';
			window.heroEl.style.top = mouse.y+'px';
			
		}
		GameObject.call(this,name);
	}
	
	function Enemy(name) {
		this.update = function(){
			var el = $('#'+name)[0];
			el.style.width = this.size+'%';
			el.style.height = this.size*window.gameAspectRatio+'%';
			el.style.left = this.position.x+'%';
			el.style.top = this.position.y+'%';
			
			this.position.x+=this.direction.x*this.speed;
			this.position.y+=this.direction.y*this.speed;
			
			heroCenterX = heroEl.offsetLeft+heroEl.offsetWidth/2;
			heroCenterY = heroEl.offsetTop+heroEl.offsetHeight/2;
			
			elCenterX = el.offsetLeft+el.offsetWidth/2;
			elCenterY = el.offsetTop+el.offsetHeight/2;
						
			
			distance = Math.sqrt( ((elCenterX - heroCenterX) * (elCenterX - heroCenterX)) + ((elCenterY - heroCenterY) * (elCenterY - heroCenterY))  );
			
			if(distance < (el.offsetWidth+heroEl.offsetWidth)/2) {
				this.collision(el,this.name);
			}
		}
		
		Enemy.prototype.collision = function(el,name){
			if(enemies[name].size>hero.size) {
				DotGame.game.stop();
			} else {				
				$('#playArea')[0].removeChild(el);				
				hero.size+=0.3;
				delete window.enemies[name];
			}
			
		}
		
		GameObject.call(this,name);
		this.size = (Math.random()+0.2)*5;
		this.direction = {
			x:Math.random()*2-1,
			y:Math.random()*2-1
		};
		this.speed = Math.random()*0.2;
		this.position = {
				x:Math.random()*100,
				y:Math.random()*100
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











