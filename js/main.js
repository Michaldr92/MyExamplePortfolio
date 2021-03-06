$( document ).ready(function() { 
	
	//Timer - czas
	var myVar = setInterval(myTimer ,1000);
	
	function myTimer() {
		var d = new Date();
			document.getElementById("current_time").innerHTML = d.toLocaleTimeString();
			document.getElementById("current_date").innerHTML = d.toLocaleDateString();
	}
	
	buttons_action();
	canvas_background();	
	
});

// Animacje obrazów

	document.addEventListener('DOMContentLoaded', function() {
	  setTimeout(function() {
		document.getElementById('center_bar').className = 'slideLeft';
	  }, 8000);
	}, false);
	
	
	document.addEventListener('DOMContentLoaded', function() {
	  setTimeout(function() {
		document.getElementById('logo').className = 'slideDown';
	  }, 3000);
	}, false);
	
	document.addEventListener('DOMContentLoaded', function() {
	  setTimeout(function() {
		document.getElementById('footer').className = 'slideUp';
	  }, 3000);
	}, false);
	
	setTimeout(function(){
		$("#time").show();
	},5500);
	
	setTimeout(function(){
		$("#date").show();
	},5500);
	
	setTimeout(function(){
		$("#welcome").show();
	},8500);
	
	document.addEventListener('DOMContentLoaded', function() {
	  setTimeout(function() {
		document.getElementById('left_bar').className = 'slideLeft';
	  }, 2000);
	}, false);
	
	document.addEventListener('DOMContentLoaded', function() {
	  setTimeout(function() {
		document.getElementById('right_bar').className = 'slideRight';
	  }, 4000);
	}, false);

	
	document.addEventListener('DOMContentLoaded', function() {
	  setTimeout(function() {
		document.getElementById('button-about').className = 'slideLeft';
	  }, 5000);
	}, false);

	document.addEventListener('DOMContentLoaded', function() {
	  setTimeout(function() {
		document.getElementById('button-skills').className = 'slideUp';
	  }, 5500);
	}, false);
	
	document.addEventListener('DOMContentLoaded', function() {
	  setTimeout(function() {
		document.getElementById('button-projects').className = 'slideUp';
	  }, 6000);
	}, false);	
	
	
	document.addEventListener('DOMContentLoaded', function() {
	  setTimeout(function() {
		document.getElementById('button-social').className = 'slideUp';
	  }, 6500);
	}, false);	
	
	document.addEventListener('DOMContentLoaded', function() {
	  setTimeout(function() {
		document.getElementById('button-contact').className = 'slideRight';
	  }, 7000);
	}, false);	
	
// Pokaz - Ukryj informacje
function buttons_action(){

       $(".buttons_group").each(function(){
           var $this = $(this);
           $(this).click(function(){
				var effect = 'slide';
				var options = { direction: $('.mySelect').val() };
				var duration = 200;
				$($this.attr('href')).toggle(effect, options, duration);
				$('.information').not($this.attr('href')).hide();
          });
       });
}
	
// Dopasowanie tła
function canvas_background() {
	
      var canvas;
      var canvasWidth;
      var ctx;
 
      function init() {
        canvas = document.getElementById('myCanvas');
        if (canvas.getContext) {
          ctx = canvas.getContext("2d");
 
          window.addEventListener('resize', resizeCanvas, false);
          window.addEventListener('orientationchange', resizeCanvas, false);
          resizeCanvas();
        }
      }

	
	
if (!window.requestAnimationFrame) {
	window.requestAnimationFrame = (window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {
		return window.setTimeout(callback, 1000 / 60);
	});
}

var stats = new Stats();
stats.setMode(0);

/*!
 * Mantis.js / jQuery / Zepto.js plugin for Constellation
 */
(function ($, window) {
	/**
	 * Makes a nice constellation on canvas
	 * @constructor Constellation
	 */
	function Constellation (canvas, options) {
		var $canvas = $(canvas),
			context = canvas.getContext('2d'),

			defaults = {
				star: {
					color: 'rgba(2, 254, 255, .8)',
					width: 1,
					randomWidth: true
				},
				line: {
					color: 'rgba(2, 254, 255, .8)',
					width: 0.2
				},
				position: {
					x: 0, // This value will be overwritten at startup
					y: 0 // This value will be overwritten at startup
				},
				width: window.innerWidth,
				height: window.innerHeight,
				velocity: 0.1,
				length: 230,
				distance: 150,
				radius: 150,
				stars: []
			},
			config = $.extend(true, {}, defaults, options);
			
		
		function resizeCanvas() {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}
		
		function Star () {
			this.x = Math.random() * canvas.width;
			this.y = Math.random() * canvas.height;

			this.vx = (config.velocity - (Math.random() * 0.4));
			this.vy = (config.velocity - (Math.random() * 0.4));

			this.radius = config.star.randomWidth ? (Math.random() * config.star.width) : config.star.width;
		}

		Star.prototype = {
			create: function(){
				context.beginPath();
				context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
				context.fill();
			},
		
			animate: function(){
				var i;
				for (i = 0; i < config.length; i++) {

					var star = config.stars[i];

					if (star.y < 0 || star.y > canvas.height) {
						star.vx = star.vx;
						star.vy = - star.vy;
					} else if (star.x < 0 || star.x > canvas.width) {
						star.vx = - star.vx;
						star.vy = star.vy;
					}

					star.x += star.vx;
					star.y += star.vy;
				}
			},

			line: function(){
				var length = config.length,
					iStar,
					jStar,
					i,
					j;

				for (i = 0; i < length; i++) {
					for (j = 0; j < length; j++) {
						iStar = config.stars[i];
						jStar = config.stars[j];

						if (
							(iStar.x - jStar.x) < config.distance &&
							(iStar.y - jStar.y) < config.distance &&
							(iStar.x - jStar.x) > - config.distance &&
							(iStar.y - jStar.y) > - config.distance
						) {
							if (
								(iStar.x - config.position.x) < config.radius &&
								(iStar.y - config.position.y) < config.radius &&
								(iStar.x - config.position.x) > - config.radius &&
								(iStar.y - config.position.y) > - config.radius
							) {
								context.beginPath();
								context.moveTo(iStar.x, iStar.y);
								context.lineTo(jStar.x, jStar.y);
								context.stroke();
								context.closePath();
							}
						}
					}
				}
			}
		};
		
		this.createStars = function () {
			var length = config.length,
				star,
				i;

			context.clearRect(0, 0, canvas.width, canvas.height);

			for (i = 0; i < length; i++) {
				config.stars.push(new Star());
				star = config.stars[i];

				star.create();
			}

			star.line();
			star.animate();
		};

		this.setCanvas = function () {
			canvas.width = config.width;
			canvas.height = config.height;
		};

		this.setContext = function () {
			context.fillStyle = config.star.color;
			context.strokeStyle = config.line.color;
			context.lineWidth = config.line.width;
		};

		this.setInitialPosition = function () {
			if (!options || !options.hasOwnProperty('position')) {
				config.position = {
					x: canvas.width * 0.4,
					y: canvas.height * 0.4
				};
			}
		};

		this.loop = function (callback) {
			callback();

			window.requestAnimationFrame(function () {
				stats.begin(); // Only for Stats
				this.loop(callback);
				stats.end(); // Only for Stats
			}.bind(this));
		};

		this.bind = function () {
			$canvas.on('mousemove', function(e){
				config.position.x = e.pageX - $canvas.offset().left;
				config.position.y = e.pageY - $canvas.offset().top;
			});
		};

		this.init = function () {
			this.setCanvas();
			this.setContext();
			this.setInitialPosition();
			this.loop(this.createStars);
			this.bind();
		};
	}

	$.fn.constellation = function (options) {
		return this.each(function () {
			var c = new Constellation(this, options);
			c.init();
		});
	};
})($, window);

	// Inicjacja Pluginu
	$('canvas').constellation({
		star: {
			width: 3
		},
		line: {
			color: 'rgba(2, 254, 255, .2)'
		},
		radius: 300
		
	});
}