var DotGame = {};
window.addEventListener('load',function(){
	
	Modernizr.load([
		{
			load: [
				"dotGame/include/sizzle.min.js",
				"dotGame/include/dom.js",
				"dotGame/dgClass.js",
				"dotGame/dotGame.js"
			],
			complete: function(){
				DotGame.game.init();
			}
		
		}
	]);
});



function c(l) {
	console.log(l);
}