acgn = acgn || {};

acgn.template = {
    player1: {
        name: 'player1',
        hp: 1024,
        atk: 1024,
        def: 0,
        shape: ['circle', 1], // collision shape: [circle, raidus], [rectangle, x radius, y radius]
        appearanceShape: ['circle', 16], // shape shown on screen
        anchor: {x: 0.5, y: 0.5}, // center point
        velocity: 10,   // only for control player
        point: 0, // add to point when die
        state: {
            normal: [
                {t: 0, f: 1000, r: 1, fn: function(item) {
                    item.textures = ['tank'];
                    item.vx = 0; item.vy = 0;
                }}
            ],
            shoot: [
                {t: 0, f: 200, r: 0, fn: function(item) {  // repeat 0 == infinite loop
                    var b = acgn.bullet({template: 'bullet', x: item.x, y: item.y});
                    b.rotation = item.rotation;
                    b.vx = 0;
                    b.vy = 4;
                }}, 
            ],
            defense: [
                {t: 0, f: 200, r: 0, fn: function(item) {}},
            ],
            bomb: [
                {t: 0, f: 200, r: 0, fn: function(item) {}},
            ],
            dead: [
                {t: 0, f: 1000, r: 1, fn: function(item) {
                    item.vx = 0; item.vy = 0;     
                    item.state = 'exit';
                }}
            ],                
        },
            
    },
    fire: {
        name: 'fire',
        hp: 64, 
        atk: 128,
        def: 0,
        shape: ['circle', 16],
        appearanceShape: ['circle', 16],
        anchor: {x: 0.5, y: 0.5},
        velocity: 10,
        point: 500,
        state: {
            normal: [
                {t: 0, f: 1000, r: 1, fn: function(item) {
                    item.textures = ['fire','fire','fire','fire','fire2','fire2','fire2','fire2'];
                    item.vx = 0; item.vy = 0;
                }}
            ],
            shoot: [
                {t: 0, f: 200, r: 0, fn: function(item) {}}, // repeat 0 == infinite loop
            ],
            defense: [
                {t: 0, f: 200, r: 0, fn: function(item) {}},
            ],
            bomb: [
                {t: 0, f: 200, r: 0, fn: function(item) {}},
            ],
            dead: [
                {t: 0, f: 1000, r: 1, fn: function(item) {
                    item.vx = 0; item.vy = 0;     
                    item.state = 'exit';
                }}
            ],                
        },
            
    },
    fire2: {
        name: 'fire2',
        hp: 64, 
        atk: 128,
        def: 0,
        shape: ['circle', 16],
        appearanceShape: ['circle', 16],
        anchor: {x: 0.5, y: 0.5},
        velocity: 10,
        point: 500,
        state: {
            normal: [
                {t: 0, f: 1000, r: 1, fn: function(item) {
                    item.textures = ['fire','fire','fire','fire','fire2','fire2','fire2','fire2'];
                    item.vx = 0; item.vy = 0;
                }},
                {t: 0, f: 200, r: 3, fn: function(item) {
                    var b = acgn.enemyBullet({template: 'bullet', x: item.x, y: item.y});
                    b.rotation = acgn.getAngle(item,acgn.player1);
                    b.vy = 3;
                    b.vx = 0;
                }},
            ],
            dead: [
                {t: 0, f: 1000, r: 1, fn: function(item) {
                    item.vx = 0; item.vy = 0;     
                    item.state = 'exit';
                }}
            ],                
        },
            
    },
    fire3: {
        name: 'fire3',
        hp: 64, 
        atk: 128,
        def: 0,
        shape: ['circle', 16],
        appearanceShape: ['circle', 16],
        anchor: {x: 0.5, y: 0.5},
        velocity: 10,
        point: 500,
        state: {
            normal: [
                {t: 0, f: 1000, r: 1, fn: function(item) {
                    item.textures = ['fire','fire','fire','fire','fire2','fire2','fire2','fire2'];
                    item.vx = 0; item.vy = 0;
                }},
                {t: 0, f: 100, r: 5, fn: function(item) {
                    var b = acgn.enemyBullet({template: 'bullet', x: item.x, y: item.y});
                    b.rotation = acgn.getAngle(item,acgn.player1);
                    b.vy = 3;
                    b.vx = 0;
                }},
            ],
            dead: [
                {t: 0, f: 1000, r: 1, fn: function(item) {
                    item.vx = 0; item.vy = 0;     
                    item.state = 'exit';
                }}
            ],                
        },
            
    },
    fire4: {
        name: 'fire4',
        hp: 64, 
        atk: 128,
        def: 0,
        shape: ['circle', 16],
        appearanceShape: ['circle', 16],
        anchor: {x: 0.5, y: 0.5},
        velocity: 10,
        point: 500,
        state: {
            normal: [
                {t: 0, f: 1000, r: 1, fn: function(item) {
                    item.textures = ['fire','fire','fire','fire','fire2','fire2','fire2','fire2'];
                    item.vx = 0; item.vy = 0;
                }},
                {t: 0, f: 100, r: 5, fn: function(item) {
                    var b = acgn.enemyBullet({template: 'bullet', x: item.x, y: item.y});
                    b.rotation = acgn.getAngle(item,acgn.player1);
                    b.vy = 3;
                    b.vx = 0;
                }},
                {t: 1000, f: 1000, r: 1, fn: function(item) {
                    var b = acgn.enemyBullet({template: 'bgm38', x: item.x, y: item.y});
                    b.rotation = acgn.getAngle(item,acgn.player1);
                    b.vy = 1;
                    b.vx = 0;
                }},
            ],
            dead: [
                {t: 0, f: 1000, r: 1, fn: function(item) {
                    item.vx = 0; item.vy = 0;     
                    item.state = 'exit';
                }}
            ],                
        },
            
    },
    fire5: {
        name: 'fire4',
        hp: 64, 
        atk: 128,
        def: 0,
        shape: ['circle', 16],
        appearanceShape: ['circle', 16],
        anchor: {x: 0.5, y: 0.5},
        velocity: 10,
        point: 500,
        state: {
            normal: [
                {t: 0, f: 1000, r: 1, fn: function(item) {
                    item.textures = ['fire','fire','fire','fire','fire2','fire2','fire2','fire2'];
                    item.vx = 0; item.vy = 0;
                }},
                {t: 0, f: 500, r: 3, fn: function(item) {
                    var b = acgn.enemyBullet({template: 'bgm38', x: item.x, y: item.y});
                    b.rotation = acgn.getAngle(item,acgn.player1);
                    b.vy = 1;
                    b.vx = 0;
                }},
            ],
            dead: [
                {t: 0, f: 1000, r: 1, fn: function(item) {
                    item.vx = 0; item.vy = 0;     
                    item.state = 'exit';
                }}
            ],                
        },
            
    },
    
    bullet: {
        name: 'bullet',
        hp: 1,
        atk: 16,
        def: 0,
        shape: ['circle', 1], // collision shape: [circle, raidus], [rectangle, x radius, y radius]
        appearanceShape: ['circle', 1], // shape shown on screen
        anchor: {x: 0.5, y: 0.5}, // center point
        velocity: 30,
        point: 0,
        state: {
            normal: [
                {t: 0, f: 1000, r: 1, fn: function(item) {
                    item.textures = ['bullet4'];
                }}
            ],
            dead: [
                {t: 0, f: 1000, r: 1, fn: function(item) {
                    item.vx = 0; item.vy = 0;     
                    item.state = 'exit';
                }}
            ],                
        },
            
    },
    bgm38: {
        name: 'bgm38',
        hp: 1,
        atk: 16,
        def: 0,
        shape: ['circle', 8], // collision shape: [circle, raidus], [rectangle, x radius, y radius]
        appearanceShape: ['circle', 8], // shape shown on screen
        anchor: {x: 0.5, y: 0.5}, // center point
        velocity: 30,
        point: 0,
        state: {
            normal: [
                {t: 0, f: 1000, r: 1, fn: function(item) {
                    item.textures = ['bgm38'];
                }}
            ],
            dead: [
                {t: 0, f: 1000, r: 1, fn: function(item) {
                    item.vx = 0; item.vy = 0;     
                    item.state = 'exit';
                }}
            ],                
        },
            
    },
};

// acgn.script.start = function() {
    
    // acgn.debug();
    
    // acgn.mustDecodeAudio = ['se','button','sand','fur_Elise_WoO59'];

    // acgn.script.loading();
    // acgn.script.system();
	// acgn.script.stage1();
    

// };
// acgn.script.debug = function() {
    
	// var count = new PIXI.Text('bullet: ' + acgn.reference.bullet.length,{font: 'normal 12px Arial', fill: 'white'});
	// count.anchor = {x: 0, y: 1};
	// count.position = {x: 10, y: height - 35};
    // count.last = acgn.now;
	// count.update = function() {
    
        // if (acgn.now - this.last > 0.25) {
        
            // this.last = acgn.now;
			// this.setText('bullet: ' + acgn.reference.bullet.length);
        
        // };
        
	// };
    
    // stage.system.addChild(count);
    
        // // acgn.text(function() {
            // // return 'audio time: ' + acgn.audioContext.currentTime;
        // // },10,h-5,      {layer: stage.system, id: 'debug',      anchor: [0,1],     color: 'white'});     // now
        // // acgn.text(function() {
                // // return 'wall: ' + acgn.item.wall.length;
        // // },10,h-25,     {layer: stage.system, id: 'debug',      anchor: [0,1],     color: 'white'});     // wall
        // // acgn.text(function() {
                // // return 'player: ' + acgn.item.player.length;
        // // },10,h-45,     {layer: stage.system, id: 'debug',      anchor: [0,1],     color: 'white'});     // player
        // // acgn.text(function() {
                // // return 'bullets: ' + acgn.item.bullet.length;
        // // },10,h-65,     {layer: stage.system, id: 'debug',      anchor: [0,1],     color: 'white'});     // bullet
        // // acgn.text(function() {
                // // return 'sprites: ' + acgn.item.sprite.length;
        // // },10,h-85,     {layer: stage.system, id: 'debug',      anchor: [0,1],     color: 'white'});     // sprite
        // // acgn.text(function() {
                // // return 'sprite bullets: ' + acgn.item.spriteBullet.length; // world.spriteBullet.children.length;
        // // },10,h-105,    {layer: stage.system, id: 'debug',      anchor: [0,1],     color: 'white'});     // sprite bullet
        // // acgn.text(function() {
            
            // // var item = acgn.item;

            // // var wall = item.wall.length;
            // // var player = item.player.length;
            // // var bullet = item.bullet.length;
            // // var sprite = item.sprite.length;
            // // var spriteBullet = item.spriteBullet.length;

            // // return 'calc: ' + ( wall * (player + bullet + sprite + spriteBullet) + player * (sprite + spriteBullet) + bullet * sprite );

    // // },10,h-125,    {layer: stage.system, id: 'debug',      anchor: [0,1],     color: 'yellow'});    // calc
        // // // acgn.devTools();
        
// };
// acgn.script.loading2 = function() {

    // acgn.log('loading animation here');

    // var width = acgn.gameWidth;
    // var height = acgn.gameHeight;

    // var rect = new PIXI.Graphics();
    // rect.beginFill(0x00ff00,0.1);
    // rect.drawRect(0, 0, width, height);
    // rect.i = 0;
    // rect.update = function() {
    
        // rect.alpha = Math.sin(this.i); 
        // this.i += 0.1;
        
    // };
    
    // var text = new PIXI.Text('This is a pixi text',{font : '24px Arial', fill : 0xff1010, align : 'center'});
    // text.anchor = {x: 0.5, y: 0.5};
    // text.position = {x: 300, y: 300};
    // text.i = 0;
    // text.update = function() {
        // this.alpha = Math.sin(this.i); 
        // this.i += 0.1;
    // };
    
    // acgn.stage.loading.addChild(text);
    
    

    
    // // var arc = new PIXI.Graphics();
    // // arc.lineStyle(1,0xffffff,1);
    // // arc.drawArc(width/2,height/2,200,90,-90);
    // // arc.position = {x: width/2, y: height/2};
    // // arc.pivot = {x: width/2, y: height/2};
    // // arc.last = acgn.now;
    // // arc.update = function() {
        // // this.rotation += (acgn.now - this.last) * Math.PI * 4;
        // // this.last = acgn.now;
    // // };
    
    // acgn.stage.loading.addChild(rect);
    // // stage.loading.addChild(arc);
    
// }
// acgn.script.system = function() {

	// var now = new PIXI.Text('',{font: 'normal 12px Arial', fill: 'white'});
	// now.anchor = {x: 0, y: 1};
	// now.position = {x: 10, y: height - 20};
    // now.last = acgn.now;
	// now.update = function() {
    
		// if (acgn.now - this.last > 0.25) {
            // this.last = acgn.now;
			// this.setText('now: ' + acgn.now.toFixed(2) + ', gameNow: ' + acgn.gameNow.toFixed(2));
		// };
        
	// };
	
	// var fps = new PIXI.Text('FPS: 60.0', {font: 'normal 12px Arial', fill: 'white'});
	// fps.anchor = {x: 0, y: 1};
	// fps.position = {x: 10, y: height - 5};
    // fps.last = acgn.now;
    // fps.lastFrame = 0;
    // fps.frame = 0;
	// fps.update = function() {
    
        // this.frame++;
	
		// if (acgn.now - this.last > 0.5) {
        
            // var f = this.frame - this.lastFrame;
            // var s = acgn.now - this.last;
		
			// this.setText('FPS: ' + (f/s).toFixed(1));
            
            // this.lastFrame = this.frame;
            // this.last = acgn.now;
		
		// };
	
	// };
	
	// stage.system.addChild(now);
	// stage.system.addChild(fps);
    
// };

// acgn.script.stage1 = function() {

    // acgn.log('stage1 start');

	// acgn.worldSize(960, 540);
	// // // acgn.bgm('fur_Elise_WoO59');
	
    // // // acgn.wall('line',1,1)
	// var player = acgn.player(400, 300);
    // acgn.reference.player1 = player;
    
	// // acgn.sprite('tank', 300, 300);
    // // acgn.sprite('tank', 250, 300);
        // // line.update = function() {
        // // if (acgn.frame < 5) {
            // // var body = line.body;
            // // var pos = body.GetPosition();
            // // console.log(pos.get_x() * scale, pos.get_y() * scale, body);
        // // };
    // // };
	// // acgn.sprite('player',350,350);
    
// };
