// Class Methods
var AudioContext = AudioContext || webkitAudioContext;
PIXI.Graphics.prototype.drawArc = function(p_x, p_y, p_radius, p_startAngle, p_endAngle) { 

// https://gist.github.com/ElliotChong/6060346

    var toRad = function(p_angle) {
        return (p_angle - 90) * Math.PI / 180;
    };
    
    var anglePerSegment, index, segments, totalAngle, x, y, _j;
    totalAngle = p_endAngle - p_startAngle;
    segments = Math.ceil(Math.abs(Math.sqrt(1 - Math.pow(1 - Math.min(p_radius / 60, 1), 2)) * totalAngle * p_radius * 0.01));
    anglePerSegment = totalAngle / segments;
    for (index = _j = 1; 1 <= segments ? _j <= segments : _j >= segments; index = 1 <= segments ? ++_j : --_j) {
        x = p_x + Math.cos(toRad(p_startAngle + (anglePerSegment * index))) * p_radius;
        y = p_y + Math.sin(toRad(p_startAngle + (anglePerSegment * index))) * p_radius;
        this.lineTo(x, y);
    }
    return this;
    
};
PIXI.Container.prototype.firstChild = function () {
    if (this.children.length) {
        return this.children[0];
    }
    else {
        throw new Error('The container has no child.');
    }
};
PIXI.Container.prototype.lastChild = function () {
    if (this.children.length) {
        return this.children[this.children.length-1];
    }
    else {
        throw new Error('The container has no child.');
    }
};
Object.defineProperty(Array.prototype, "random", {
    enumerable: false,
    value: function () {
        return this[Math.floor(Math.random() * this.length)];
    }
});
Object.defineProperty(Array.prototype, "remove", {
    enumerable: false,
    value: function (itemToRemove) {
        return this.filter(function(item){
            
            if (itemToRemove instanceof RegExp && typeof item == 'string') return !item.match(itemToRemove);
            
            return item !== itemToRemove;
            
        });
    }
});
String.prototype.reverse = function() {
    return this.split("").reverse().join("");
};
Number.prototype.toRadian = function() {
    return this / 180 * Math.PI;
;}
Number.prototype.toAngle = function() {
    return this * 180 / Math.PI;
;}
Math.range = function (a, b) {
    return a + Math.random() * (b - a);
};
WorkerBlob = function(foo){
   var str = foo.toString().match(/^\s*function\s*\(\s*\)\s*\{(([\s\S](?!\}$))*[\s\S])/)[1];
   return  new Worker(window.URL.createObjectURL(new Blob([str],{type:'text/javascript'})));
};
arrayClone = function(obj) {

    var target = [];
    for (var i = 0; i < obj.length; i++) {
        if (obj.hasOwnProperty(i)) target[i] = obj[i];
    }
    return target;
    
}
objectClone = function(obj) {

    var target = {};
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) target[i] = obj[i];
    }
    return target;
}

// acgn
acgn = {};
acgn.initialize = function () {
    
    Object.defineProperty(acgn, "gameState", { set: function (value) {
    
        this.lastGameState = this.gameState;
        this._gameState = value;
        
    }, get: function() {
    
        return this._gameState;
        
    }});
    acgn.gameState = 'initializing';
    
    var param = require('./package.json');
    param = JSON.parse(JSON.stringify(param)); // Object.defineProperty does not apply to require() output, so re-create it
    
    // set dimension
    acgn.width = acgn.window.width;
    acgn.height = acgn.window.height  - (param.window.toolbar ? 34 : 0); // for debug, that toolbar is 34px (?) high
    acgn.scale = param.scale || 32; // box2d unit is metric, default ratio is 1m = 32px
    document.title = title.innerHTML = param.window.title || "acgn.js demo";
    
    // variable
    acgn.v = {
        system: {
            current: {
                fullScreen: false,
                skipUnread: false,
                skipEffect: false,
            },
            default: {
                fullScreen: false,
                skipUnread: false,
                skipEffect: false,
            },
        },
        volume: {
            current: {
                master: 50,
                bgm: 50,
                soundEffect: 80,
                voice: 100
            },
            default: {
                master: 50,
                bgm: 50,
                soundEffect: 80,
                voice: 100,
            },
        },
        text : {
            current: {
            },
            default: {
        
                speed: 250,  // 80ms / character = 12.5character/second = 250px/second
                
                size: 20,
                // lineHeight: 24, // size * 1.2
                // padding: 4,
                
                family: 'Microsoft Yahei',
                bold: true,
                italic: false,
                
                align: 'left',
                color: 0xffffff,
                stroke: 0x000000,
                strokeThickness: 0,
                dropShadow: true,
                dropShadowColor: 0x000000,
                dropShadowAngle: Math.PI / 4,
                dropShadowDistance: 2,
                
                textBaseline: 'alphabetic',
                lineJoin: 'miter',
                miterLimit: 10,
                
                layer: "message",
                
                wordWrap: false,
                wordWrapWidth: acgn.width,
                
                x: 0,
                y: 0,
                width: acgn.width,
                height: acgn.height,
                base: "",
                
                enter: 'fadeInFromLeft',
                exit: 'fadeOutToRight',
            
            },
            name: {
                speed: 0,
                x: acgn.width * 0.1 + 140,
                y: acgn.height - 148,
                width: 200,
                height: 32,
                anchor: {x: 0.5, y: 0.5},
                base: '@rectangle x=10%+40 y=100%-164 w=200 h=32 color=white alpha=0.3 anchor=0',
            },
            message: {
                x: acgn.width * 0.1 + 20,
                y: acgn.height - 107,
                width: acgn.width * 0.8 - 40,
                height: 72,
                base: '@rectangle x=10% y=100%-122 w=80% h=102 color=black alpha=0.7',
            },
                
                    
             // name                           <<----------------------- 200 px ----------------------->>    name base
             // x: 10%+115                     |--------------------------------------------------------|    x: 10%+40
             // y: 100%-148                    |                           ︽                           |    y: 100%-164
             // w: 150         <<--- 40px --->>|                          32px                          |    w: 150
             // h: 32                          |                           ︾                           |    h: 32
             // anchor: 0.5                    |--------------------------------------------------------|
                                                                              // 10 px
            // <<--- 10 % --->><<--------------------------------------------- 80% width --------------------------------------------->><<--- 10 % --->>
                            // |-------------------------------------------------------------------------------------------------------|
             // msg            |                                                 15 px                                                 |    msg base
             // x: 10%+20      |       |---------------------------------------------------------------------------------------|       |    x: 10%
             // y: 100%-107    |       |                                          ︽                                           |       |    y: 100%-122
             // w: 80%-40      |       |                                          ︽                                           |       |    w: 80%
             // h: 72          | 20 px |                             3 lineHeight = 24 * 3 = 72 px                             | 20 px |    h: 102
                            // |       |                                          ︾                                           |       |
                            // |       |                                          ︾                                           |       |
                            // |       |---------------------------------------------------------------------------------------|       |
                            // |                                                 15 px                                                 |
                            // |-------------------------------------------------------------------------------------------------------|
                                                                              // 20 px
            // <<------------------------------------------------------------------------------------------------------------------------------------->>
            
            // full screen text / history
            screen: {
            
                x: acgn.width * 0.05 + 20,
                y: 30,
                width: acgn.width * 0.9 - 40,
                height: acgn.height - 60,
                base: '@rectangle x=5% y=20 w=90% h=100%-40 color=black alpha=0.7',
            
            // <<------------------------------------------------------------------------------------------------------------------------------------->>
                                                                              // 20 px
            // <<---- 5% ---->><<--------------------------------------------- 90% width --------------------------------------------->><<---- 5% ---->>
                            // |-------------------------------------------------------------------------------------------------------|
             // screen         |                                                 10 px                                                 |    screen base
             // x: 5%+20       |       |---------------------------------------------------------------------------------------|       |    x: 5% 
             // y: 30          |       |                                                                                       |       |    y: 20      
             // w: 90%-40      |       |                                                                                       |       |    w: 90%
             // h: 100%-60     | 20 px |                                                                                       | 20 px |    h: 100%-40
                            // |       |                                                                                       |       |
                            // |       |                                                                                       |       |
                            // |       |---------------------------------------------------------------------------------------|       |
                            // |                                                 10 px                                                 |
                            // |-------------------------------------------------------------------------------------------------------|
                                                                              // 20 px
            },// <<------------------------------------------------------------------------------------------------------------------------------------->>
        
        },
    };
    
    // set time
    acgn.birth = Date.now();    // constant, value set when program start
    acgn.gameBirth = undefined; // constant, value set when game start played
    acgn.frame = 0;             // interger, increase 1 per frame
    Object.defineProperty(acgn, "now", { get: function () {                 // current time, always increasing
        
        var t = Math.round((Date.now() - acgn.birth) / 1000);
        
        var h = Math.floor(t / 3600);
        var m = Math.floor(t % 3600 / 60);          if ( m < 10 ) m = "0" + m;
        var s = Math.floor(t % 3600 % 60);          if ( s < 10 ) s = "0" + s;
        
        return [h,m,s].join(":");; 
            
    }});
    Object.defineProperty(acgn, "gameNow", { get: function () {             // current game time, always increasing when game is playing
        
        var t = Math.round((Date.now() - acgn.gameBirth) / 1000);
        
        var h = Math.floor(t / 3600) || 0;
        var m = Math.floor(t % 3600 / 60) || 0;          if ( m < 10 ) m = "0" + m;
        var s = Math.floor(t % 3600 % 60) || 0;          if ( s < 10 ) s = "0" + s;
        
        return [h,m,s].join(":"); 
            
    }});
    Object.defineProperty(acgn, "fps", { get: function () {                 // frame per second
    
        var f = acgn.frame - acgn.fpsLastFrame;       // frame
        var s = (Date.now() - acgn.fpsLast) / 1000;  // second

        acgn.fpsLastFrame = acgn.frame + 0;
        acgn.fpsLast = Date.now();
        
        return ( f/s || 60 ).toFixed(1);
        
    }});
    Object.defineProperty(acgn, "calculations", { get: function () {        // physic calculations per second
        
        var p = acgn.players.length          // collision mask bits: p, e, eb, i, w, f              p * ( p + e + eb + i + w + f)
        var e = acgn.enemies.length          // collisoin mask bits: p, e, b, i, w, f               e * ( e + b + i + w + f )
        var b = acgn.bullets.length          // collisoin mask bits: e, w, f                        b * ( w + f )
        var eb = acgn.enemyBullets.length    // collisoin mask bits: p, w, f                        eb * ( w + f )
        var i = acgn.item.length             // collisoin mask bits: p, e, w, f                     i * ( w + f )
        var w = acgn.walls.length            // collisoin mask bits: p, e, b, eb, i, w, f           w * ( w + f )
        var f = acgn.floors.length           // collisoin mask bits: p, e, b, eb, i, w              f * ( 0)
        
        return p*(p+e+eb+i+w+f) + e*(e+b+i+w+f) + (b+eb+i+w)*(w+f);
        
    }});
    
    // object references
    
        acgn.layers = {};
        
        // physics
        acgn.physics = [];
        
        acgn.players = [];          // collision mask bits: p, e, eb, i, w, f
        acgn.enemies = [];          // collisoin mask bits: p, e, b, i, w, f
        acgn.bullets = [];          // collisoin mask bits: e, w, f
        acgn.enemyBullets = [];     // collisoin mask bits: p, w, f
        acgn.items = [];            // collisoin mask bits: p, e, w, f
        acgn.walls = [];            // collisoin mask bits: p, e, b, eb, i, w, f
        acgn.floors = [];           // collisoin mask bits: p, e, b, eb, i, w
        acgn.boundaries = [];       // collision mask bits: p
                
        acgn.spriteTemplates = [];
        acgn.textures = {};
        
        acgn.player1 = null;
        acgn.player2 = null;
        acgn.player3 = null;
        acgn.player4 = null;
        
        // sprites action: text update, sprites shoot etc.
        acgn.updates = [];
        acgn.fades = [];
        
        // pool to store unused items for reuse
        acgn.sprites = [];
        acgn.texts = [];
        acgn.graphics = [];
        
        // for box2d collision group
        acgn.categoryBits = {
            player: 1,          1: 'player',
            sprite: 2,          2: 'sprite',    
            bullet: 4,          4: 'bullet',
            spriteBullet: 8,    8: 'spriteBullet',
            item: 16,           16: 'item',
            wall: 32,           32: 'wall',
            floor: 64,          64: 'floor',
            boundary: 128,      128: 'boundary',
        };

    // key setup
    acgn.key();

    // stage setup
    acgn.renderer = PIXI.autoDetectRenderer(acgn.width, acgn.height, {antialias: true});
    document.body.appendChild(acgn.renderer.view);
    var stage = acgn.stage = new PIXI.Container();
    acgn.resize();
    
    // physics setup
    acgn.world = new Box2D.b2World( new Box2D.b2Vec2(0, 0) );
    var listener = new Box2D.JSContactListener();
    listener.BeginContact = acgn.beginContact;
    listener.EndContact = acgn.endContact;
    listener.PreSolve = acgn.preSolve;
    listener.PostSolve = acgn.postSolve;
    acgn.world.SetContactListener( listener );
    
    // audios setup
    acgn.audioContext = new AudioContext();
    acgn.audioMustDecode = param.mustDecode || [];
    acgn.audioRawBuffer = {};
    acgn.audioBuffer = {};
    
    // script setup
    acgn.scriptLocation = param.scriptLocation || ['startup.gs', 0];
    acgn.scriptCaption = param.scriptCaption || "";
    acgn.callStack = [];    // callStack come in group of 4, [0] = script name, [1] = script line, [2] = script caption, [3] = macro name
    acgn.macroName = "";
    acgn.macroArguments = {};
    
    // set image cache, so "@image storage=abc" will load "./dir/abc.png"
    acgn.image.cache = {};
    var paths = [];
    var dirs = acgn.fs.readdirSync('image');
    for (var i = 0; i < dirs.length; i++) {
        
        var dir = 'image/' + dirs[i];
        if (dir.match(/^image\/[\w-_]+\.\w{2,4}$/)) {
            paths.push(dir);
            continue;
        };
        // var images = acgn.fs.readdirsync('image/'+dir);
        var images = acgn.fs.readdirSync(dir);
        for (var j = 0; j < images.length; j++) {
            var path = dir + '/' + images[j];
            paths.push(path);
        };
        
    };
    for (var i = 0; i < paths.length; i++) {
        var path = paths[i];
        var cacheName = path.replace(/^.*\/([\w-_]+)\.\w{2,4}$/,"$1");
        acgn.image.cache[cacheName] = path;
    };

    // load assets
    acgn.loadScript();
    acgn.loadSpritesheet();
    acgn.loadAudio();
    
    // start the loop
    acgn.log('animation start');
    requestAnimationFrame( acgn.animate );
    
};

// system
acgn.fs = require('fs');
acgn.window = require('nw.gui').Window.get();
// acgn.process = require('process');
acgn.exit = function() {

    // acgn.process.exit();
    acgn.window.close();
    
    return;
    

    var black = new PIXI.Graphics();
    black.beginFill('black',0.5);
    black.drawRect(0, 0, width, height);

    var style = {font: "bold 50px Microsoft Jhenghei", fill: 'white', stroke: 'black', strokeThickness: 5};

    var text = new PIXI.Text('Esc', style);
    text.position.x = width * 0.5;
    text.position.y = height * 0.35;
    text.anchor.x = text.anchor.y = 0.5;

    var buttons = acgn.button([
        {content: '✗', size: 50, strokeThickness: 5, x: 0.7, y: 0.65, next: 'cancel'},
        {content: '✓', size: 50, strokeThickness: 5, x: 0.3, y: 0.65, next: win.close},
    ],'system');

    // var line = new PIXI.Graphics();
    // line.lineStyle(1,0xffffff,1);
    // line.moveTo(0,h/2);
    // var x = 10;
    // var y = 100;
    // line.lineTo(w/2-2*x,h/2);
    // line.lineTo(w/2-1*x,h/2+y);
    // line.lineTo(w/2+1*x,h/2-y);
    // line.lineTo(w/2+2*x,h/2);
    // line.lineTo(w,h/2);

    // var container = new PIXI.DisplayObjectContainer();
    // container.mask = new PIXI.Graphics();
    // container.mask.beginFill('black');
    // container.mask.drawCircle(w/2,h/2,200);
    // container.AI = acgn.AI.container = acgn.AI.container || function() {

        // if (this.state != 'out') {

            // var item = new PIXI.Sprite.fromFrame('bullet');
            // item.type = 'loading';
            // item.alpha = 1;
            // item.position = {x: Math.random() * w, y: 0};
            // this.addChild(item);

            // for (var i=0; i < this.children.length; i++) {

                // this.children[i].position.y += 3;
                // this.children[i].rotation += Math.range(0.01,0.02);

            // }

        // }


    // };

//            var arc = new PIXI.Graphics();
//            arc.lineStyle(1, 0xffffff, 1);
//            arc.drawArc(w/2,h/2,200,-90,90);
//            arc.position = arc.pivot = {x: w/2, y: h/2};
//            arc.AI = acgn.AI.loadingArc = acgn.AI.loadingArc || function() {
//                this.rotation += 0.15;
//            };

    var exits = [black,text];
    for (var i=0; i < exits.length; i++) {
        var exit = exits[i];
        exit.type = 'exit';
        exit.alpha = 0;
        world.system.addChild(exit);
    }

    acgn.log('exit');
//      win.close();
};
acgn.fullscreen = function() {

    acgn.window.toggleFullscreen();
    acgn.resize();

};
acgn.reload = function() {
    location.reload();
};
acgn.resize = function() {

    var win = acgn.window;
    var width = acgn.width;
    var height = acgn.height;
    
    var ratio = win.width / win.height;
    var gameRatio = width / height;
    
    var canvas = acgn.renderer.view.style;

    if (Math.abs(ratio - gameRatio) < 0.1) {

        canvas.width = win.width + 'px';
        canvas.height = win.height + 'px';

    } else {

        var scale = ratio > gameRatio ? win.height / height : win.width / width;

        canvas.width = width * scale + 'px';
        canvas.height = height * scale + 'px';
        
    }
        
};

// keyboard
acgn.key = function() {

//            acgn.key.press.value = [];

    acgn.key.time = Date.now();
    acgn.key.pressed = '';

    document.addEventListener('keydown', function(event) {

        var id = acgn.key.code[event.which];
        if (!id) return;
    

        // if (acgn.key.code[id] === true) {
        
            
        
        // } else {
        
            var last = acgn.key.time;
            var now = acgn.key.time = Date.now();
            // if (now - last > 300) acgn.key.pressed = '';
        
            acgn.key.code[id] = true;
            // acgn.key.lastPressed = id;

            if (acgn.key.pressed) {acgn.key.pressed += ' ' + id;}
            else                  {acgn.key.pressed = id;}
            
        // };
        
            // if (acgn.key.input[id]) {acgn.key.input[id]();};
        // };

        return;
        
        // if (key && !acgn.key[key]) {
        
            // acgn.key[key] = true;

            // if (acgn.key.pressed) {acgn.key.pressed += ' ' + key;}
            // else                     {acgn.key.pressed = key;}

            // switch (acgn.key.pressed) {

                // case 'str':           acgn.debug(); break;
                // case 'sel':           acgn.reload(); break;

            // }
            
            // if (acgn.gameState == 'play' && acgn.reference.player1) acgn.log('hey');

        // }
    
    });
    
    document.addEventListener('keyup', function(event) {
    
        var id = acgn.key.code[event.which];
        if (id) acgn.key.code[id] = false;
            
    });
                
    var crap = function() {
    // $(document).keydown(function() {

        // var last = acgn.key.time;
        // var curr = acgn.key.time = new Date().getTime();

        // if (curr - last > 300) acgn.key.pressed = '';

        // var key = acgn.key.reference[event.which];

        // if (key && !acgn.key[key]) {
        
        

            // acgn.key[key] = true;

            // if (acgn.key.pressed) {acgn.key.pressed += ' ' + key;}
            // else                  {acgn.key.pressed = key;}

            // switch (acgn.key.pressed) {

// //                case 'start':
// //                case 'select':
// //
// //                case 'R': case 'L':
// //
// //                case 'l': case 'u': case 'd': case 'r':
// //
// //                case 'a':
// //                case 'b':
// //                case 'c':
// //                case 's':
// //
// //                case 'l u': case 'u r': case 'r d': case 'd l':
// //                case 'u l': case 'r u': case 'd r': case 'l d':
// //                case 'l l': case 'u u': case 'd d': case 'r r':
// //
// //                    break;
// //
// ////                case 'def r':       case 'def l':       case 'def u':       case 'def d':
// ////
// ////                    break;
// ////
// ////                case 'def r atk':   case 'def l atk':   case 'def u atk':   case 'def d atk':
// ////                case 'def r sht':   case 'def l sht':   case 'def u sht':   case 'def d sht':
// ////                case 'def r jmp':   case 'def l jmp':   case 'def u jmp':   case 'def d jmp':
// ////                case 'def def':
// //
// //                    break;
// //
// ////                        case 'jmp r':       case 'jmp l':       case 'jmp u':       case 'jmp d':
// ////                        case 'jmp r atk':   case 'jmp l atk':   case 'jmp u atk':   case 'jmp d atk':
// ////                        case 'jmp r sht':   case 'jmp l sht':   case 'jmp u sht':   case 'jmp d sht':
// ////                        case 'jmp r def':   case 'jmp l def':   case 'jmp u def':   case 'jmp d def':
// ////                        case 'jmp jmp':
// //
// //                    break;
// //                default:
// //                    acgn.key.pressed = key;

            // }

            // switch (acgn.key.pressed) {

                // case 'str':           acgn.debug(); break;
                // case 'sel':           acgn.reload(); break;

// //                case 'L': case 'R':
// //
// //                    break;
// //
// //                case 'l': case 'u': case 'd': case 'r':
// //                case 'l u': case 'u r': case 'r d': case 'd l':
// //                case 'u l': case 'r u': case 'd r': case 'l d':
// //                case 'l l': case 'u u': case 'd d': case 'r r':
// ////                    acgn.log(acgn.key.pressed);
// //                    break;
// //
// //                case 'atk': // acgn.log('攻'); break;
// //                case 'sht': // acgn.log('射'); break;
// //                case 'def': // acgn.log('防'); break;
// //                case 'jmp': // acgn.log('跳'); break;
// //
// //                case 'def r':       case 'def l':       case 'def u':       case 'def d':           break;
// //                case 'def r atk':   case 'def l atk':   case 'def u atk':   case 'def d atk':       // acgn.log('強攻'); break;
// //                case 'def r sht':   case 'def l sht':   case 'def u sht':   case 'def d sht':       // acgn.log('強射'); break;
// //                case 'def r jmp':   case 'def l jmp':   case 'def u jmp':   case 'def d jmp':       // acgn.log('強跳'); break;
// //                case 'def def':                                                                     // acgn.log('堅守'); break;


            // }
            
// //            acgn.log(acgn.key.pressed);

        // }

// //                acgn.key[key] = true;

// //                switch (key) {
// //                    case 'u': case 'l': case 'd': case 'r':
// //                    case 'jmp': case 'spl': case 'def': case 'atk':
// //                    case 'L': case 'R':
// //                    case 'select': case 'start':
// //
// //
// //
// //                    acgn.log(acgn.key.pressed);
// //                        
// //                        break;
// //                };
// //                
// //                var pressed = acgn.key.pressed;
// //                
// //                switch (pressed) {
// //                    
// //                    
// //                    
// //                };

    // })
    // .keyup(function() {

        // var key = acgn.key.reference[event.which];
        // acgn.key[key] = false;

    // });

//            $(document).keydown(function(e) {
//                
//                acgn.key.press(e);
////
////                var key = acgn.key[e.which];
////                
////                acgn.log(e.location);
////
////                if (typeof key === 'string') acgn.key[key] = true;
////                
////                var buttons = stage.button.children.length;
////                var players = stage.player.children.length;
////                
////                if (!acgn.loading.mode && 1 === 2) {
////            
////                    switch (key) {
////                                                                        // arrows        ZXC
////
////                                            // button/message/sprites        sel btn        goto btn
////                                            // button/message                sel btn        goto btn
////                                            // button/sprites                sel btn        goto btn
////                                            // button                        sel btn        goto btn
////                                            // sprites/message                move        shoot
////                                            // sprites                        move        shoot
////                                            // message                        move        next
////
////                        case 'a': {
////                            
////                            if (buttons)    {acgn.selectButton();}
////                            // else if (acgn.param.stg) {
////                                // // parseShoot handle
////                            // }
////                            // else if (messages.length) {
////                            
////                                // // return;
////                                // // acgn.debug(acgn.param.mode + ' mode');
////                                // for (var i = 0; i < messages.length; i++) {
////                                    // var message = messages[i];
////                                    // switch (message.state) {
////                                        // case 'in': {
////                                            // message.alpha += 0.5;
////                                            // break;
////                                        // }
////                                        // case 'text': {
////                                            // var text = message.text.text;
////                                            // message.text.setText( (text != ' ' ? text:'') + message.pendingText);
////                                            // message.pendingText = '';
////                                            // message.state = 'normal';
////                                            // break;
////                                        // }
////                                        // case 'normal': {
////                                            // var next = true;
////                                            // // acgn.debug('here');
////                                            // // acgn.next();
////                                            // break;
////                                        // }
////                                        // case 'out': {
////                                            // message.alpha -= 0.5;
////                                            // break;
////                                        // }
////                                    // }
////                                // }
////                                // if (next) { acgn.next();}
////                            // }
////                            
////                            break;
////                        }
////                        case 'b': {
////                            break;
////                        }
////                        case 'd': {
////                            acgn.debug();
////                            break;
////                        }
////                        case 't': {
////                            acgn.devTools();
////                            break;
////                        }
////                        case 'left': case 'up': case 'right': case 'down': {
////                            if (buttons) {acgn.switchButton(key)};
////                            // else if (players) {acgn.movePlayer()}
////                            break;
////                        }
////                        case 'r': case 'f5':    {
////                            acgn.reload(); break;
////                        }
////                        case 'f11': {
////                            acgn.fullscreen();break;
////                        }
////                        
////                    }
////                    
////                }
////                
////            }).keyup(function(e) {
////            
////                var key = acgn.key[e.which];
////                
////                if (typeof key === 'string') acgn.key[key] = false;
////                
////                // if (!buttons.length && !acgn.param.loading && (key=='left' || key=='up' || key=='right' || key=='down') ) acgn.key.move();
////                
////            });
//            
////            Mousetrap.bind({
////                'a': function() { acgn.log('a'); },
////                'a s': function() { acgn.log('b'); }
////            });
//
//        };
//        state: function(key) {
//            return acgn.key.state[key];

            }
            
};
acgn.key.animate = function() {

    // acgn.key.move();

    var dt = Date.now() - acgn.key.time;
    // var lastPressed = acgn.key.lastPressed;
    
    // any currently pressed key
    var keys = ['a','b','x','y','l','d','u','r','l1','l2','r1','r2','home','select','start'];
    var pressed = false;
    for (var i=0; i < keys.length; i++) {
        pressed = acgn.key.code[keys[i]] || pressed;
    };

    if (300 < dt && pressed === false) {     // ''
        acgn.key.pressed = '';
    };
    // } else if (240 < dt) {      // A+
        // if (!acgn.key.pressed.match(/\+$/)) acgn.key.pressed += '+';
    // }
    
    // possible key 'u u d d l r l r b a' 
    // 'u u' ===> true  ===> keyPressed = 'u u'
    // 'u d' ===> false ===> keyPressed = 'd'
    var possibleKey = false;
    for (key in acgn.key.input) {
        if (key.match(new RegExp('^' + acgn.key.pressed))) possibleKey = true;
    };
    if (possibleKey === false) {
        var keys = acgn.key.pressed.split(' ');
        acgn.key.pressed = keys[keys.length-1];
    };
    
    var keyPressed = acgn.key.pressed;
    if (acgn.key.input[keyPressed+'+']) {                // 'a+'
    
        var keys = keyPressed.split(' ');
        var last = keys[keys.length-1];
        if (acgn.key.code[last] === true) acgn.key.input[keyPressed+'+']();
        
    } else if (acgn.key.input[keyPressed]) {            // 'a'
        
        acgn.key.pressed = '';
        acgn.key.input[keyPressed]();
        
    };
    
    if (acgn.key.input.update) acgn.key.input.update(); // custom input

    
    
    // var presseds = acgn.key.pressed.split(' ');

    
    
    // if (lastPressed === presseds[presseds.length-1]) {
        // if (dt < 50) {
        // }
        // else if (dt < 500) {
            // acgn.key.pressed += '+';
        // }
        // else {
            // acgn.key.pressed += ' ' + lastPressed;
        // };
    // };
    
    // keydown ==> A
    // continue keydown ==> A+
    // keyup ==> no keydown ==> ''
    // keydown ==> A
    // no input ==> ''
    // keydown x 2 ==> A B
    // keydownn ==> A B+
    
    // keydown ==> '' (dt > 300)
    // keydown ==> A A (dt > 120)
    // keydown ==> A+ (dt < 120)
    // keydown ==> A (dt < 50)
    
    
    
    
};
acgn.key.default = {
    home: acgn.reload,
    select: function() {
    },
    start:  function() {
    },
    l1: function() {
    },
    l2: function() {
    },
    r1: function() {
    },
    r2: function() {
    },
    l: function() {
    },
    d: function() {
    },
    u: function() {
    },
    r: function() {
    },
    a: function() {
    },
    b: function() {
    },
    x: function() {
    },
    y: function() {
    },
};
acgn.key.input = acgn.key.default;
acgn.key.code = {
        
       // 0: "\\", 8: "backspace", 9: "tab", 12: "num",
       // 13: "enter", 16: "shift", 17: "ctrl", 18: "alt",
       // 19: "pause", 20: "caps", 27: "esc", 32: "space",
       // 33: "pageup", 34: "pagedown", 35: "end", 36: "home",
       // 37: "left", 38: "up", 39: "right", 40: "down",
       // 44: "print", 45: "insert", 46: "delete",
       // 48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9",
       // 65: "a", 66: "b", 67: "c", 68: "d", 69: "e", 70: "f", 71: "g", 72: "h", 73: "i", 74: "j", 75: "k", 76: "l", 77: "m",
       // 78: "n", 79: "o", 80: "p", 81: "q", 82: "r", 83: "s", 84: "t", 85: "u", 86: "v", 87: "w", 88: "x", 89: "y", 90: "z",
       // 91: "cmd", 92: "cmd", 93: "cmd",
       // 96: "num_0", 97: "num_1", 98: "num_2", 99: "num_3", 100: "num_4", 101: "num_5", 102: "num_6", 103: "num_7", 104: "num_8", 105: "num_9",
       // 106: "num_multiply", 107: "num_add", 108: "num_enter", 109: "num_subtract", 110: "num_decimal", 111: "num_divide",
       // 112: 'f1', 113: 'f2', 114: 'f3', 115: 'f4', 116: 'f5', 117: 'f6', 118: 'f7', 119: 'f8', 120: 'f9', 121: 'f10', 122: 'f11', 123: 'f12',
       // 124: "print", 144: "num", 145: "scroll",
       // 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "\'", 223: "`",
       // 224: "cmd", 225: "alt", 57392: "ctrl", 63289: "num",
    
    // console key
        /* l1 l2 r1 r2 */
        get 16() { /* shifts */
            return KeyboardEvent.DOM_KEY_LOCATION_LEFT === event.location ? 'l1' : 'r1';
        },
        9: 'l2', /* tab */
        79: 'r2', /* o */
        
        /* left down up right */
        65: 'l',
        83: 'd',
        87: 'u',
        68: 'r',
        
        /* a b x y */
        74: 'a',
        75: 'b',
        73: 'x',
        76: 'y',

        /* esc enter ctrl*/
        27: 'home',
        13: 'select',
        17: 'start', 
    
    
    
    a: false,   b: false,   x: false,   y: false,
    l: false,   d: false,   u: false,   r: false,
    l1: false,   l2: false,
    r1: false,   r2: false,
    home: false,
    select: false,
    start: false,
    
};
acgn.keyReset = function() {
    acgn.key.input = acgn.key.default;
};
acgn.keySTG = function() {

    acgn.key.input.update = function() {

        var player = acgn.player1;
        
        if (!player || player.state == 'dead') return;
        
        var body = player.body;
        
        var key = acgn.key.code;
        var left = key.l;
        var right = key.r;
        var down = key.d;
        var up = key.u;
        
        // moving
        
        if (up && !down && !left && !right)         {player.move = 'u';}
        else if (!up && down && !left && !right)    {player.move = 'd';}
        else if (!up && !down && left && !right)    {player.move = 'l';}
        else if (!up && !down && !left && right)    {player.move = 'r';}
        else if (up && !down && left && !right)     {player.move = 'ul';}
        else if (up && !down && !left && right)     {player.move = 'ur';}
        else if (!up && down && left && !right)     {player.move = 'dl';}
        else if (!up && down && !left && right)     {player.move = 'dr';}
        else if (!up && down && left && right)      {player.move = 'd';}
        else if (up && !down && left && right)      {player.move = 'u';}
        else if (up && down && !left && right)      {player.move = 'r';}
        else if (up && down && left && !right)      {player.move = 'l';}
        else                                        {player.move = player.last_move = player.last2_move = '';}
            
        if (player.move) {

            var last2 = player.last2_move;
            var last = player.last2_move = player.last_move;
            var curr = player.last_move = player.move;
            var move;

            if        (!last)                                                                                     {move = curr;}
            else if   ((curr != last)  && (last == 'ul'  || last == 'ur'  || last == 'dl'  || last == 'dr' ))     {move = last;}
            else if   ((last != last2) && (last2 == 'ul' || last2 == 'ur'    || last2 == 'dl' || last2 == 'dr'))  {move = last2;}
            else                                                                                                  {move = curr;}

            var v = 10 * (key.r1 ? 0.3 : 1) * 60 / acgn.scale;  // unit in meter per second
            var vr = v * 0.7071;
            
            var velocity = body.GetLinearVelocity();
            
            switch (move) {
                case 'u':   velocity.set_x(0),   velocity.set_y(-v);  body.SetTransform(body.GetPosition(), Math.PI * 1);      break;
                case 'ur':  velocity.set_x(vr),  velocity.set_y(-vr); body.SetTransform(body.GetPosition(), Math.PI * -0.75);  break;
                case 'r':   velocity.set_x(v),   velocity.set_y(0);   body.SetTransform(body.GetPosition(), Math.PI * -0.5);   break;
                case 'dr':  velocity.set_x(vr),  velocity.set_y(vr);  body.SetTransform(body.GetPosition(), Math.PI * -0.25);  break;
                case 'd':   velocity.set_x(0),   velocity.set_y(v);   body.SetTransform(body.GetPosition(), Math.PI * 0);      break;
                case 'dl':  velocity.set_x(-vr), velocity.set_y(vr);  body.SetTransform(body.GetPosition(), Math.PI * 0.25);   break;
                case 'l':   velocity.set_x(-v),  velocity.set_y(0);   body.SetTransform(body.GetPosition(), Math.PI * 0.5);    break;
                case 'ul':  velocity.set_x(-vr), velocity.set_y(-vr); body.SetTransform(body.GetPosition(), Math.PI * 0.75);   break;
            }
            
            body.SetLinearVelocity(velocity);

        } else {
        
            var velocity = body.GetLinearVelocity();
            velocity.set_x(0);
            velocity.set_y(0);
            body.SetLinearVelocity(velocity);
            
        }
    
        // shooting
    
        if (key.a) {
            
        };
    
    };

};

// eval
acgn.set = function() {

    var arg = arguments[0] || {};
    
    for (name in arg) {
    
        var names = name.split('.');

        var variable = acgn;
        var undefinedVariable = undefined;
        
        for (var i = 0; i < names.length; i++) {
            
            if (variable === undefined) {
            
                undefinedVariable = 'acgn';
                for (var j = 0; j < i; j++) {undefinedVariable += '.' + names[j];};
                acgn.log('[set] Cannot set "acgn.' + name + '" when "' + undefinedVariable + '" is undefined.');
                break;
                
            };
            
            variable = variable[names[i]]; // the 'variable' is not a reference belong to the acgn object, so the setting of acgn.a.b.c.etc is not done here.
            
        };
        
        if (undefinedVariable) continue;
        
        // well, eval is evil.... so....
        
        var n1 = names[0];
        var n2 = names[1];
        var n3 = names[2];
        var n4 = names[3];
        var n5 = names[4];
        var n6 = names[5];
        var n7 = names[6];
        var n8 = names[7];
        var n9 = names[8];
        var n10 = names[9];
        var n11 = names[10];
        var n12 = names[11];
        var n13 = names[12];
        var n14 = names[13];
        var n15 = names[14];
        var n16 = names[15];
        var n17 = names[16];
        var n18 = names[17];
        var n19 = names[18];
        var n20 = names[19];
        
        switch (names.length) {
        
            case 1:     acgn[n1] = arg[name]; break;
            case 2:     acgn[n1][n2] = arg[name]; break;
            case 3:     acgn[n1][n2][n3] = arg[name]; break;
            case 4:     acgn[n1][n2][n3][n4] = arg[name]; break;
            case 5:     acgn[n1][n2][n3][n4][n5] = arg[name]; break;
            case 6:     acgn[n1][n2][n3][n4][n5][n6] = arg[name]; break;
            case 7:     acgn[n1][n2][n3][n4][n5][n6][n7] = arg[name]; break;
            case 8:     acgn[n1][n2][n3][n4][n5][n6][n7][n8] = arg[name]; break;
            case 9:     acgn[n1][n2][n3][n4][n5][n6][n7][n8][n9] = arg[name]; break;
            case 10:    acgn[n1][n2][n3][n4][n5][n6][n7][n8][n9][n10] = arg[name]; break;
            case 11:    acgn[n1][n2][n3][n4][n5][n6][n7][n8][n9][n10][n11] = arg[name]; break;
            case 12:    acgn[n1][n2][n3][n4][n5][n6][n7][n8][n9][n10][n11][n12] = arg[name]; break;
            case 13:    acgn[n1][n2][n3][n4][n5][n6][n7][n8][n9][n10][n11][n12][n13] = arg[name]; break;
            case 14:    acgn[n1][n2][n3][n4][n5][n6][n7][n8][n9][n10][n11][n12][n13][n14] = arg[name]; break;
            case 15:    acgn[n1][n2][n3][n4][n5][n6][n7][n8][n9][n10][n11][n12][n13][n14][n15] = arg[name]; break;
            case 16:    acgn[n1][n2][n3][n4][n5][n6][n7][n8][n9][n10][n11][n12][n13][n14][n15][n16] = arg[name]; break;
            case 17:    acgn[n1][n2][n3][n4][n5][n6][n7][n8][n9][n10][n11][n12][n13][n14][n15][n16][n17] = arg[name]; break;
            case 18:    acgn[n1][n2][n3][n4][n5][n6][n7][n8][n9][n10][n11][n12][n13][n14][n15][n16][n17][n18] = arg[name]; break;
            case 19:    acgn[n1][n2][n3][n4][n5][n6][n7][n8][n9][n10][n11][n12][n13][n14][n15][n16][n17][n18][n19] = arg[name]; break;
            case 20:    acgn[n1][n2][n3][n4][n5][n6][n7][n8][n9][n10][n11][n12][n13][n14][n15][n16][n17][n18][n19][n20] = arg[name]; break;
            
        };
        
    };
    

};
acgn.iscript = function() {
    
    var storage = acgn.scriptLocation[0];
    var i = acgn.scriptLocation[1] + 0;
    var f = i + 0;
    
    while (acgn.script[storage][f] !== '@endscript') {
        f++;
    };
    
    var script = acgn.script[storage].slice(i,f).join("\r\n");
    eval(script);
    
    acgn.scriptLocation[1] = f;
    
};
acgn.endscript = function() {
    // do nothing
};

// debug
acgn.devTools = function(mode) {

    var win = acgn.window;
    var opened = win.isDevToolsOpen();

    if ( mode === true ) {
        win.showDevTools()
    } else if ( mode === false ) {
        win.closeDevTools();
    } else if ( opened === true ) {
        win.closeDevTools();
    } else if ( opened === false ) {
        win.showDevTools();
    }

};
acgn.debug = function() {

    var arg = arguments[0] || {};
    var mode = arg.mode;
    
    acgn.debug.mode = typeof mode === 'boolean' ? mode : !acgn.debug.mode;

    var nav = document.querySelector('nav');
    var log = document.querySelector('#log');

    if (acgn.debug.mode) {
        
        nav.style.visibility = log.style.visibility = 'visible';
        // acgn.devTools(true);
        acgn.call({target: 'startup.gs/*debug'});
        acgn.log('Debug Mode On.');

    } else {
        
        nav.style.visibility = log.style.visibility = 'hidden';
        acgn.devTools(false);
        acgn.clear({tag: 'debug'});
        
        // while ( log.hasChildNodes() ) {
            // log.removeChild(log.firstChild);
        // }
        
        acgn.log('Debug Mode Off.');
        
    }

};
acgn.log = function() {

    if (arguments[0] && arguments[0].eval) {
        console.log(eval(arguments[0].eval));
        return;
    };

    acgn.log.count = (acgn.log.count || 0) + 1;
    
    for (var i = arguments.length - 1; i >= 0; i--) {
        var arg = arguments[i];
        if (arg === undefined) {
            delete arguments[i];
            arguments.length--;
        };
    };
    
    console.log(arguments.length > 1 ? arguments : arguments[0]);
    
    var text = "";
    
    if (arguments.length == 1) {
        
        text = arguments[0];
        if (typeof text == 'object') text = JSON.stringify(text);
    
    } else {
    
        for (var i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            if (typeof arg == 'object') arg = JSON.stringify(arg);
            text += ', ' + arg;
        };
        text = text.slice(2);
        
    }; 

    var li = document.createElement('li');
    li.innerHTML = acgn.log.count + '. ' + acgn.now + ' ' + text;
    
    // insert @ head
    // if (log.hasChildNodes())    {log.insertBefore(li, log.childNodes[0]);}
    // else                        {log.appendChild(li);};
    // while (log.hasChildNodes() && log.childNodes.length > 25) {     log.removeChild( log.childNodes[25] );      };
    
    // insert @ tail
    log.appendChild(li);
    while (log.hasChildNodes() && log.childNodes.length > 10) {     log.removeChild( log.childNodes[0] );      };

};

// loader / misc
acgn.loading = function() {
    
    if (acgn.gameState !== 'loading') {
        
        acgn.gameState = 'loading';
        acgn.call({target: 'startup.gs/*loading'});
        
    }
        
};
acgn.loadScript = function() {

    acgn.script = acgn.script || {};
    
    var loaded = function() {
    
        acgn.scriptLoaded = true;
        acgn.log('Script Loaded.');
        acgn.next();
    
    };

    acgn.fs.readdir('script', function(err, scripts) {
    
        for (var i = 0, j = 0; i < scripts.length; i++) {
        
            var type = scripts[i].split('.').pop();
            
            switch (type) {
            
                case 'js': {
                
                    var script = document.createElement('script');
                    script.src = './script/' + scripts[i];
                    script.onload = function() {
                        
                        for (proto in acgn.template) {
                            var states = acgn.template[proto].state;
                            for (state in states) {
                                for (var k = 0; k < states[state].length; k++) {
                                    var command = states[state][k];
                                    command.t = typeof command.t == 'number' ? command.t : 0;
                                    command.repeat = typeof command.repeat == 'number' ? command.repeat : 1;
                                    command.freq = typeof command.freq == 'number' ? command.freq : 0.1;
                                };
                            };
                        };
                        
                        if (++j === scripts.length) loaded();
                        
                    };
                    document.body.insertBefore(script, document.body.lastChild);
                    break;
                
                }
                case 'ks': case 'gs': {
                
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', './script/' + scripts[i] , true);
                    xhr.script = scripts[i];
                    xhr.send();
                    xhr.onload = function(e) {
                        
                        var lines = this.response.split(/\r\n/); // split by line
                        
                        acgn.script[this.script] = acgn.next.parseScript(lines);
                        
                        if (++j === scripts.length) loaded();

                    };
                    break;
                
                }
                case 'bkup': {
                
                    if (++j === scripts.length) loaded();
                    break;
                
                }
                default: {
                
                    if (++j === scripts.length) loaded();
                    acgn.log('[loadScript] Did not load "' + scripts[i] + '", use .js or .gs file.');
                
                }

            };

        };
        
    });

};
acgn.loadSpritesheet = function() {
    
    acgn.fs.readdir('spritesheet', function(err, assets) {
        
        var loader = new PIXI.loaders.Loader('./spritesheet/');
        
        for (var i = 0; i < assets.length; i++) {

            var asset = assets[i];
            if (asset.slice(-5) === '.json')      loader.add(assets[i]);

        };
        
        loader.once('complete',function() {
            acgn.spritesheetLoaded = true;
            acgn.log('Spritesheet Loaded.');
        });
        loader.load();
        
    });

};
acgn.loadAudio = function() {
    
    acgn.fs.readdir('audio', function(err, audios) {
        
        for (var i = 0, j = 0; i < audios.length; i++) {

            var xhr = new XMLHttpRequest();
            var audio = xhr.audio = audios[i];
            xhr.open('GET', './audio/' + audio , true);
            xhr.responseType = 'arraybuffer';
            xhr.send();

            xhr.onload = function(e) {

                acgn.audioRawBuffer[this.audio] = this.response;

                if (++j == audios.length) {
                    acgn.audioLoaded = true;
                    acgn.log('Audio Loaded.');
                    acgn.decode();
                };

            };

        };
        
    });
    
};
acgn.decode = function(storage) {

    if (typeof storage === 'string' && acgn.audioMustDecode.indexOf(storage) === -1) acgn.audioMustDecode.unshift(storage);
    if (acgn.audioMustDecode.length) {acgn.loading();}
    if (acgn.decoding === true) return;
    acgn.decoding = true;
    
    if (!Object.keys(acgn.audioRawBuffer).length) {
        acgn.decoding = false;
        acgn.log('Audio Decoded.');
        return;
    };
    

    var decoding;
    while (acgn.audioMustDecode.length && !decoding) {
        if (!acgn.audioRawBuffer[acgn.audioMustDecode[0]]) { acgn.audioMustDecode = acgn.audioMustDecode.slice(1); }
        else                                               { decoding = acgn.audioMustDecode[0]; };
    };
    decoding = decoding || Object.keys(acgn.audioRawBuffer)[0];
    
    acgn.audioContext.decodeAudioData(acgn.audioRawBuffer[decoding], function(response) {

        // acgn.log('[decode] Decoded: "' + decoding + '".');
        
        acgn.audioBuffer[decoding] = response;
        

        acgn.audioMustDecode = acgn.audioMustDecode.remove(decoding);
        delete acgn.audioRawBuffer[decoding];
        acgn.decoding = false;
        // acgn.audioContext.decoding = "";
        
        // acgn.log('[decode] mustdecode: "' + acgn.audioMustDecode + '".');
        
        acgn.decode();

    });
    
};

// script flow
acgn.next = function(target) {

    if (acgn.wait.until) return;

    // if (typeof target === 'string' && target.match(/^[[@]/)) {
    
        // var lines = acgn.next.parseScript([target]);
        
    // } else {
    
        var location = acgn.next.parseTarget(target);
        if (!location) return;

        acgn.scriptLocation = location;
        
        var storage = acgn.scriptLocation[0];
        var i = acgn.scriptLocation[1];
        var line = acgn.script[storage][i+0];
        
        acgn.scriptLocation[1]++;
        
        // var lines = [line];

    // };
    
    // for (var i = 0; i < lines.length; i++) {
        // var line = lines[i];
        var parsedLine = acgn.next.parseLine(line);
        acgn.next.runLine(parsedLine);
    // };
    
    acgn.next();
    

};
acgn.next.parseScript = function(lines) {
    
    for (var k = 0; k < lines.length; k++) {
        
        var line = lines[k];
        
        // remove trailing ; comments
        // no lookbehind (?<!\\) in javascript, so reverse it and use lookahead (?!\\)
        // lookaround to make sure \; is not comment
        // line = line.reverse().replace(/^.*;(?!\\)(.*)$/, "$1").reverse();
        
        // remove trailing // comments
        line = line.reverse().replace(/^.*\/\/(?!\\)(.*)$/, "$1").reverse();
        
        // remove beginning spaces
        line = line.replace(/^\s+/,"");
        
        // remove trailing spaces
        line = line.reverse().replace(/^\s*(?!\\)/,"").reverse();
        
        lines[k] = line;
        
        // start with [
        if ( line[0] === "[" ) {                    // [] command
        
            var text = "";
            
            for (var l = 0; l < line.length; l++) {
                
                text += line[l];
                
                /* [] */    var pair = text.match(/^\[.*\]$/);
                
                /*  [ */    var open = text.match(/\[/g);               open = open ? open.length : 0;
                /*  ] */    var close = text.match(/\]/g);              close = close ? close.length : 0;
                /* \[ */    var notOpen = text.match(/\\\[/g);          notOpen = notOpen ? notOpen.length : 0;
                /* \] */    var notClose = text.match(/\\\]/g);         notClose = notClose ? notClose.length : 0;
                
                // [] match complete
                if ( pair && open - notOpen === close - notClose) {
                
                    // remove beginning spaces after [
                    line = line.replace(/^\[\s+/, "\[");
                
                    // remove trailing spaces before ]
                    line = line.reverse().replace(/^\]\s*(?!\\)/,"\]").reverse();
                    
                    // entire line 
                    if (line === text) {
                        
                        // [ .... ] ==> @ .....
                        lines[k] = text.replace(/^\[(.*)\]$/, "@$1");
                    
                    // the bracket part is only part of the line, split it to next line
                    } else {
                    
                        lines.splice(k,0, text.replace(/^\[(.*)\]$/, "@$1"));
                        lines[k+1] = line.substring(text.length);       
                        k--;
                        break;
                        
                    };
                    line = text.replace(/^\[(.*)\]$/, "@$1");
                
                // reached end of line, [] match incomplete, join next line and start over
                } else if (line === text) {
                    
                    lines[k] += lines[k+1].replace(/^\s+/, " ");
                    lines.splice(k+1,1);
                    k--;
                    
                } ;
                
            };
        
        }
        else if (line[0] === "@") {          // @function          
        
            if (line.match(/^@iscript$/) ) {  // [iscript] or @iscript
            
                if (lines[k+1].match(/\[endscript\]/)) {
                
                    var line1 = lines[k+1].replace(/^(.*)\[endscript\].*$/, "$1");
                    var line2 = '@endscript';
                    var line3 = lines[k+1].replace(/^.*\[endscript\](.*)$/, "$1");
                    
                    lines[k+1] = line1;
                    lines.splice(k+2, 0, line2);
                    lines.splice(k+3, 0, line3);

                    // remove any empty line, remove line3 first so don't mess with order
                    if (line3 === "") lines.splice(k+3,1);
                    if (line1 === "") lines.splice(k+1,1);
                
                };
                
                for (var l = k + 0; l < lines.length; l++) {

                    // skip processing anyline between @iscript and @endscript
                    if (lines[l].match(/[@|\[]endscript/)) {
                        k = l-1;
                        break;
                    };
                    
                    // if did not found @endscript, add it, goto end of lines
                    if ( l === lines.length - 1) {
                        lines.push('@endscript');
                        k = lines.length;
                        break;
                    };
                    
                };
                
            }
        
        }

        else if (line === "") {              // empty line
            
            lines.splice(k,1);
            k--;
        
        }
        else {                                // all else treat as text
        
            // non-escaped open bracket exist
            if ( line.reverse().match(/\[(?!\\)/) ) {
        
                var index = line.indexOf("["); // split position
                
                var line1 = line.substring(0,index);
                var line2 = line.substring(index);
                
                lines[k] = line1;
                lines.splice(k+1,0,line2);
                k--;
            
            }
        
        };
        
    };
    return lines;
};
acgn.next.parseLine = function(line) {

    if (line[0] === "*") {
    
            // line = '@anchor target=' + line.split('|')[0];
        var target = line.split('|')[0];
        var caption = line.split('|')[1] || "";
        line = '@anchor target=' + target + ' caption=' + caption;
    
        // acgn.anchor(line);
        // acgn.next();
        
    } else if (line[0] !== '@') {
        
        line = '@message text="' + line + '"';
        
    }
    
    line = line.reverse().split(/ +(?!\\)/).reverse();
    for (var i = 0; i < line.length; i++) {line[i] = line[i].reverse();}
    
    var fn = line[0].slice(1);
    var options = {};
    
    if (fn === 'message') {
        for (var i = 2; i < line.length; i++) {
            line[1] += ' ' + line[i];
        };
        line = line.slice(0,2);
    };
    
    if (fn === 'image') console.log(line);
    
    for (var i = 1; i < line.length; i++) {
    
        // @fn
            // bool=true
            // num=9.9
            // int=10
            // percentage=50%
            // stringA=a
            // stringB="b"
            // color=black
            // colour=ffffff
            // color=rgb(0,255,123)
            // position={x:0,y:0}
            // position=0
            // positionX=0
            // x=0
            // position=[0,2]
            
        if (line[i].match("=") ) {
        
            var index = line[i].indexOf("=");
            var name = line[i].substring(0,index);
            var orgValue = line[i].substring(index+1);
            var value = orgValue + "";
            
        }
        // else if (line[i] === '*' && acgn.macroName) {
            // if (acgn.macroArguments[acgn.macroName]) {
                // console.log('asdf');
                // console.log(line);
            // };
        // }
        else {
        
            var name = i + 0;
            var orgValue = line[i] + "";
            var value = orgValue + "";
        
        };
            
        // match pair for string, array, object or eval
        var pairs = ['""', "''", "[]", "{}", "()"];
        for (var j = 0; j < pairs.length; j++) {

            var pair = pairs[j];
            if (pair[0] !== value[0]) continue;
            
            while (true) {
            
                if ( i + 1 === line.length) break;
                
                var o = '\\' + pair[0];
                var c = '\\' + pair[1];
                
                var full = value.match(new RegExp('^' + o + '.*' + c + '$'));
                var open = value.match(new RegExp(o));                                open = open ? open.length : 0;
                var close = value.match(new RegExp(c));                               close = close ? close.length : 0;
                var notOpen = value.match(new RegExp('\\\\' + o));                    notOpen = notOpen ? notOpen.length : 0;
                var notClose = value.match(new RegExp('\\\\' + c));                   notClose = notClose ? notClose.length : 0;
                
                if (full && open - notOpen === close - notClose) break;
                
                value += ' ' + line[i+1];
                line[i] += ' ' + line[i+1];
                line.splice(i+1,1);
                
            };
            
        };
        
        if ( value.match(/^%\w+/) ) {                                  // macro arguments
        
            // Ex: %storage|bg/forest.png ==> macro: storage
            //                                orginal: bg/forest.png
            var macroValue = value.replace(/^%(\w+).*$/, "$1");
            var orgValue = value.replace(/^%\w+\|?(.*)$/, "$1");
            
            value = acgn.macroArguments[acgn.macroName][macroValue];
            
            // if the value is not given when calling macro, use the default value
            if (value === undefined) {value = orgValue + ""};
            
            orgValue = value.toString();
            value = orgValue + "";
            
        };
        
        // process based on value
        if ( value.match(/^(?:true|false)$/) ) {                         // boolean
            value = eval(value);
        }
        else if ( value.match(/^-?\d+\.?\d*$/) ) {                      // number
            value = parseFloat(value);
        }
        else if ( value.match(/^0[xX][\da-fA-F]+$/) ) {                 // hex interger
            value = eval(value);
        }
        else if ( value.match(/^-?\d+\.?\d*%$/) ) {                     // percentage
            value = parseFloat(value) / 100;
        }
        else if ( value.match(/\[.*\]$/) ) {                            // array
            value = eval(value);
        }
        else if ( value.match(/\{.*\}$/) ) {                            // object
            // value = eval(value) does not work
            eval('value = ' + value); 
        }
        else if ( value.match(/\(.*\)$/) ) {                            // eval
        
            var value = value.replace(/%(\w+)/, 'acgn.macroArguments[acgn.macroName].$1')
            value = eval(value);
            
        }
        else if ( value.match(/\'.*\'$/) || value.match(/\".*\"$/) ) { // string
            orgValue = value.slice(1, -1);
            value = value.slice(1, -1);
        }
        else if ( value.match(/^\$\w{1,4}:/) ) {                        // language $tc:abcd|$sc:efgh|$en:ijkl
        }
        
        // process based on name
        if (typeof name === 'number') {                                          // number
        
            // do nothing, number does not have match method
            
        }
        else if ( name.match(/(?:colou?r|stroke)$/i) && typeof value !== 'number' ) { // color
        
            name = name.replace(/colour/, "color");
            
            // value = orgValue + "";
        
            var cvs, ctx;
            cvs = document.createElement('canvas');
            cvs.height = 1;
            cvs.width = 1;
            ctx = cvs.getContext('2d');
            ctx.fillStyle = value;
            ctx.fillRect(0, 0, 1, 1);
            var rgba = ctx.getImageData(0, 0, 1, 1).data;
            var r = ('0' + rgba[0].toString(16)).slice(-2);
            var g = ('0' + rgba[1].toString(16)).slice(-2);
            var b = ('0' + rgba[2].toString(16)).slice(-2);
            
            value = parseInt("0x" + r + g + b);
        
        }
        else if ( name.match(/^(?:position|pos|pivot)$/i) ) {                  // position / pivot
            
            if ( name === 'pos') name = 'position';
            
            if ( !orgValue.match(/^\w+$/i) ) {  
            
                // pos = 400
                // pos = 400,500
                // pos = 10%
                // pos = 10%,20%
                // pos = 300%-500,100
                
                var x,y;
                
                if ( orgValue.match(/,/) ) {                                           // 400,500 | 10%,20% | 100%-5,200
                    x = orgValue.split(",")[0];
                    y = orgValue.split(",")[1];
                }
                else if ( orgValue.match(/%/) ) {                                     // 10% | 50%+5
                    x = orgValue + "";
                    y = orgValue + "";
                }
                else if ( typeof value === 'number' && !orgValue.match(/%/) ) {     // 300
                    x = value + 0;
                    y = value + 0;
                }
                
                if (typeof x === 'string' ) x = eval(x.replace(/(-?\d+\.?\d*)%/g, " + acgn.width * $1" + " / 100 "));
                if (typeof y === 'string' ) y = eval(y.replace(/(-?\d+\.?\d*)%/g, " + acgn.height * $1" + " / 100 "));
                
                value = {x: x, y: y};
            
            }
            
        }
        else if ( name.match(/(?:positionx|posx|x(?:\d)*|width|w|pivotx)$/i) ) {      // position / pivot horizontal
            
            if ( name === 'positionx' || name === 'posx')                      { name = 'x' }
            else if ( name === 'pivotx' )                                      { name = 'pivotX' }
            else if ( name === 'w' )                                           { name = 'width' }
            
            
            if (orgValue.match(/[%\+\-\*\/]/)) value = eval( orgValue.replace(/(-?\d+\.?\d*)%/g, " + acgn.width * $1" + " / 100 ") );
        
        }
        else if ( name.match(/(?:positiony|posy|y(?:\d)*|height|h|pivoty)$/i) ) {     // position / pivot vertical
            
            if ( name === 'positiony' || name === 'posy')                      { name = 'y' }
            else if ( name === 'pivoty' )                                      { name = 'pivotY' }
            else if ( name === 'h' )                                           { name = 'height' }
            
            if (orgValue.match(/[%\+\-\*\/]/)) value = eval( orgValue.replace(/(-?\d+\.?\d*)%/g, " + acgn.height * $1" + " / 100 ") );
            
        }
        else if ( name.match(/^anchor/i) ) {                                   // anchor
        
            if (name.match(/x$/i))        {  name = 'anchorX'; }
            else if (name.match(/y$/i))   {  name = 'anchorY'; }
            else {
                name = 'anchor';
                if (orgValue.match(/,/))    { value = { x: parseFloat(orgValue.split(',')[0]), y: parseFloat(orgValue.split(',')[1]) };}
                else                        { value = { x: value, y: value } };
                
            };
        
        }
        else if ( name.match(/^tag$/) ) {
            if (typeof options.tag === 'string') value = options[name] + '|' + value;
        };
        
        options[name] = value;
        
    };
    
    
    // for "*" argument use in macro function
    for (name in options) {
    
        if (options[name] === '*') {
        
            delete options[name];
            var macroArguments = acgn.macroArguments[acgn.macroName];
            for (mName in macroArguments) {
            
                options[mName] = options[mName] !== undefined ? options[mName] : macroArguments[mName];
            
            };
            
        };
        
    };
    
    line = ['@'+fn];
    for (name in options) {
        
        var prop = options[name];
        if (typeof prop === 'object') prop = JSON.stringify(prop);
        line.push(name+'='+prop);
        
    };
    
    acgn.log(line);
    
    return {fn: fn, options: options};
    
};
acgn.next.parseTarget = function(target) {

    //   avaiable format:
    //   undefined
    //   40
    //   "40"
    //   "*info"
    //   "system.gs"
    //   "system.gs/40"
    //   "system.gs/*info"
    
    var getLine = function(storage, target) {
        
        var storage = storage;
        var script = acgn.script[storage];
        
        for (var i = 0; i < script.length; i++) {
            var regex = new RegExp('^\\' + target + '\\|?.*$');
            if ( script[i].match(regex) ) return i;
        };
        
        return;

    };
    
    var storage, line;
    
    if (target === undefined) {                                             // undefined
        storage = acgn.scriptLocation[0];
        line = acgn.scriptLocation[1];
    }
    else if (typeof target === 'number' || target.match(/^\d+$/)) {      // 40
        storage = acgn.scriptLocation[0];
        line = parseInt(target);
    }
    else if (target.match(/^\*[\w-_]+$/)) {                                // *info
        storage = acgn.scriptLocation[0];
        line = getLine(storage, target);
    }
    else if (target.match(/^[\w\.]+$/)) {                                  // system.gs
        storage = target;
        line = 0;
    }
    else if (target.match(/^[\w\.]+\/\d+$/)) {                             // system.gs/40
        storage = target.split("/")[0];
        line = parseInt(target.split("/")[1]);
    }
    else if (target.match(/^[\w\.]+\/\*[\w-_]+$/)) {                       // system.gs/*info
        storage = target.split("/")[0];
        line = getLine( storage, target.split("/")[1] );
    };
    
    if (acgn.script[storage] && acgn.script[storage][line]) return [storage, line];
    
    return; 
    

};
acgn.next.runLine = function(parsedLine) {
    
    if (parsedLine.options.cond === undefined || parsedLine.fn.match(/^(if|elseif)$/) || parsedLine.options.cond ) {

        if (typeof acgn[parsedLine.fn] === 'function') {
            
            return acgn[parsedLine.fn](parsedLine.options);
            
        }
        else if ( acgn.macro[parsedLine.fn] ) {
        
            return acgn.callmacro(parsedLine.fn, parsedLine.options);
        
        }
        else {
        
            acgn.log('[' + parsedLine.fn + '] function does not exist.'); return;
            
        };
    
    }
    
};
acgn.call = function() {
   
    var arg = arguments[0] || {};
    var target = arg.target;
    var countpage = arg.countpage !== undefined ? arg.countpage : true;
    
    var location = acgn.next.parseTarget(target);
    
    if (target === undefined) {acgn.log('[call] Cannot call "undefined".'); return;}
    if (location === undefined) {acgn.log('[call] Did not find target "' + target + '".'); return;}
    
    var s = acgn.script[location[0]];
    var i = location[1];
    
    for (var i = 0; i < s.length; i++) {
        var line = s[i];
        if (line === '@return') break;
        if ( i+1 === s.length ) {acgn.log('[call] Did not load "' + target + '", cannot found @return.'); return;}
    };
    
    acgn.callStack.unshift(acgn.scriptLocation[0], acgn.scriptLocation[1], acgn.scriptCaption, "");
    acgn.scriptLocation = location;
    
};
acgn.return = function() {
    
    if (!acgn.callStack.length) return;
    
    acgn.scriptLocation = [acgn.callStack[0], acgn.callStack[1]];
    acgn.scriptCaption = acgn.callStack[2] || "";
    title.innerHTML = document.title + (acgn.scriptCaption ? ' | ' : "") + acgn.scriptCaption;
    
    acgn.callStack = acgn.callStack.slice(4);
    
};
acgn.if = function() {

    var arg = arguments[0] || {};
    var cond = arg.cond;
    
    if (cond === undefined) {
    
        acgn.log('[if / elseif] cond is not set.')
    
    }
    else if (cond) { // if cond === true, do nothing, just go to next line
    
    }
    else if (!cond) { // if cond === false, skip to @else or @elseif or @endif
    
        var s = acgn.scriptLocation[0];
        var start = acgn.scriptLocation[1] + 0;
    
        for (var i = start + 0; i < acgn.script[s].length; i++) {
            var line = acgn.script[s][i];
            
            if (line.match(/^@(else|elseif|endif)/)) {
            
                acgn.scriptLocation[1] = i + 0;
                break;
                
            }
            if ( i + 1 === acgn.script[s].length) {acgn.log('[if /elseif] Did not found @elseif, @else or @endif.'); return}
        };
    
    }
    
};
acgn.elseif = function() {
    acgn.if(arguments[0]);
};
acgn.else = function() {

    // do nothing

};
acgn.endif = function() {

    // do nothing

};
acgn.callmacro = function(fn, arg) {

    if (fn === acgn.macroName) {acgn.log('[' + fn + '] Nesting macro is not support (yet).'); return;}
    
    acgn.callStack.unshift(acgn.scriptLocation[0], acgn.scriptLocation[1], acgn.scriptCaption, acgn.macroName);
    
    acgn.macroName = fn;
    acgn.macroArguments[fn] = arg;
    acgn.scriptLocation = [acgn.macro[fn][0], acgn.macro[fn][1]];
    
};
acgn.macro = function() {

    var arg = arguments[0] || {};
    var name = arg.name;
    
    // when macro create, commands are not excute, skip right to @endmacro
    var s = acgn.scriptLocation[0];
    var start = acgn.scriptLocation[1] + 0;
    
    // when not found @endmacro
    for (var i = start + 0; i < acgn.script[s].length; i++) {
        var line = acgn.script[s][i];
        if (line.match(/^@endmacro$/)) {acgn.scriptLocation[1] = i + 1; break;}
        if ( i + 1 === acgn.script[s].length) {acgn.log('[macro] Did not found @endmacro.'); return}
    };
    
    // when certain condition meet, macro is not created
    if (name === undefined) {acgn.log('[macro] "' + name + '" cannot be created as macro.'); return}
    if (acgn[name] !== undefined || acgn.macro[name] !== undefined) {acgn.log('[macro] "@' + name + '" cannot be created, name space used already.'); return}
    
    // store the macro location
    acgn.macro[name] = [s, start];
    
};
acgn.endmacro = function() {
    delete acgn.macroArguments[acgn.macroName];
    acgn.macroName = acgn.callStack[3];
    acgn.return();
};
acgn.erasemacro = function() {
    var arg = arguments[0] || {};
    var name = arg.name;
    delete acgn.macro[name];
}
acgn.jump = function() {
    
    var arg = arguments[0] || {};
    var target = arg.target;                            
    var countpage = arg.countpage !== undefined ? arg.countpage : true;
    
    var location = acgn.next.parseTarget(target);
    
    if (target === undefined) {acgn.log('[jump] Cannot jump "undefined".'); return;}
    if (location === undefined) {acgn.log('[jump] Did not find target "' + target + '".'); return;}
    
    acgn.scriptLocation = location;
    
};
acgn.anchor = function() {

    var arg = arguments[0] || {};
    var caption = arg.caption || "";

    acgn.scriptCaption = caption;
    title.innerHTML = document.title + (caption ? ' | ' : "") + caption;

};
acgn.history = function(line) {

    

};
acgn.wait = function() {

    var arg = arguments[0] || {};
    var until = arg.until;
    var run = arg.run;
    
    
    if (until === 'gameLoaded') {
        
        acgn.wait.until = function() {
        
            var gameLoaded = acgn.scriptLoaded && acgn.spritesheetLoaded && acgn.audioLoaded && acgn.audioMustDecode.length === 0;
            
            if (gameLoaded) {
                acgn.clear({layer: 'loading'});
                acgn.gameState = acgn.lastGameState + "";
            };
            
            return gameLoaded;
            
        };
    }
    else if ( until === 'messageReady' ) {
    
        acgn.gameState = 'input';
    
        acgn.wait.until = function() {
        
            var ready = acgn.message.currentMessage.fullText === acgn.message.currentMessage.text;
            if (ready) {
                delete acgn.key.input.a;
                acgn.gameState = acgn.lastGameState;
            };
            return ready;
            
        }
        
        acgn.key.input.a = function() {
            var msg = acgn.message.currentMessage;
            msg.text = msg.fullText;
        };
    
    }
    else if ( until === 'pageBreak' ) {
    
        acgn.wait.until = function() {
                
            var ready = acgn.key.pressed === 'a';
            
            if (ready) {
                    
                var msg = acgn.message.currentMessage;
                if (msg && msg.tag) {
                    acgn.clear({tag: msg.tag});
                } else {
                    acgn.clear({layer: 'message'});
                };
                // msg.base.state = 'exit';
                    // for (var i = 0; i < msg.rect.length; i++) {
                        // msg.rect[i].state = 'exit';
                    // }
                // msg.state = 'exit';
                delete acgn.message.currentMessage;
                acgn.key.pressed = '';
                    
            };
            
            return ready;
        }
        
        // acgn.key.input.a = function() {
            
        // };
    
    }
    else if ( typeof until === 'function' ) {

        acgn.wait.until = until;
        
    }
    else if ( typeof until === 'number') {
    
        acgn.wait.birth = Date.now();
        acgn.wait.until = function() {
        
            var test = Date.now() - acgn.wait.birth > until;
            if (test) delete acgn.wait.birth;
            return test;
            
        };
    
    }
    else {
        acgn.wait.until = function() {
            return false;
        };
    };
    
    if (typeof run === 'function') {
        acgn.wait.run = run;
    };

};

// buttons
acgn.buttons = function() {

    var arg = arguments[0] || {};
    
    acgn.buttons.system = arg.system || false;
    acgn.buttons.tag = acgn.buttons.tag || [];
    acgn.buttons.tag.unshift(arg.tag || Math.random().toFixed(3));

}
acgn.endbuttons = function() {

    var arg = arguments[0]|| {};
    
    if (!acgn.buttons.system) acgn.wait();
    
    acgn.key.input.d = acgn.key.input.r = acgn.button.next;
    acgn.key.input.u = acgn.key.input.l = acgn.button.previous;
    acgn.key.input.a = acgn.button.select;
    
};
acgn.button = function() {

    var arg = arguments[0] || {};
    arg.layer = arg.layer || 'button';
    arg.tag = 'button' + '|' + acgn.buttons.tag + (arg.tag ? '|' + arg.tag : '');
    
    var x = arg.x !== undefined ? arg.x : 0;
    var y = arg.y !== undefined ? arg.y : 0;
    var width = arg.width !== undefined ? arg.width : 300;
    var height = arg.height !== undefined ? arg.height : 50;
    
    if (!arg.graphic) { // color
    
        var color = arg.baseColor !== undefined ? arg.baseColor : 0;           // black
        var alpha = arg.baseAlpha !== undefined ? arg.baseAlpha : 0.5;
        var hoverColor = arg.hoverColor !== undefined ? arg.hoverColor : 16777215; // white
        var hoverAlpha = arg.hoverAlpha !== undefined ? arg.hoverAlpha : 0.5;
        
        arg.base = arg.base || '@rectangle';
        arg.base += ' x=' + x;
        arg.base += ' y=' + y;
        arg.base += ' width=' + width;
        arg.base += ' height=' + height;
        arg.base += ' color=16777215';
        arg.base += ' alpha=' + alpha;
        arg.base += ' tint=' + color;
        
    };
    
    var button = acgn.text(arg);
    
    if (!arg.graphic) {
        button.baseColor = color;
        button.baseAlpha = alpha;
        button.hoverColor = hoverColor;
        button.hoverAlpha = hoverAlpha
    };
    
    return button;

};
acgn.button.next = function() {
    
    acgn.se({storage: 'button'});
    acgn.key.pressed = '';
    
    var buttons = [];
    for (var i = 0; i < acgn.stage.button.children.length; i++) {
        var maybe = acgn.stage.button.children[i];
        var tags = maybe.tag.split('|');
        if (tags.indexOf(acgn.buttons.tag[0]) > -1 && maybe instanceof PIXI.Text) buttons.push(maybe);
    };
    for (var i = 0; i < acgn.stage.system.children.length; i++) {
        var maybe = acgn.stage.system.children[i];
        var tags = maybe.tag.split('|');
        if (tags.indexOf(acgn.buttons.tag[0]) > -1 && maybe instanceof PIXI.Text) buttons.push(maybe);
    };

    var selected = buttons.length-1;
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].selected) selected = i;
    };
    selected++;
    if (selected === buttons.length) selected = 0;
    
    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        var base = button.base;
        if (selected === i) {
            button.selected = true;
            base.tint = button.hoverColor;
            base.alpha = button.hoverAlpha;
            
        } else {
            button.selected = false;
            base.tint = button.baseColor;
            base.alpha = button.baseAlpha;
        };
        ;
    };

};
acgn.button.previous = function() {
    
    acgn.se({storage: 'button'});
    
    var buttons = [];
    for (var i = 0; i < acgn.stage.button.children.length; i++) {
        var maybe = acgn.stage.button.children[i];
        var tags = maybe.tag.split('|');
        if (tags.indexOf(acgn.buttons.tag[0]) > -1 && maybe instanceof PIXI.Text) buttons.push(maybe);
    };
    for (var i = 0; i < acgn.stage.system.children.length; i++) {
        var maybe = acgn.stage.system.children[i];
        var tags = maybe.tag.split('|');
        if (tags.indexOf(acgn.buttons.tag[0]) > -1 && maybe instanceof PIXI.Text) buttons.push(maybe);
    };

    var selected = buttons.length-1;
    for (var i = 0; i < buttons.length; i++) {  
        if (buttons[i].selected) selected = i;
    };
    selected--;
    if (selected === -1) selected = buttons.length-1;
    
    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        var base = button.base;
        if (selected === i) {
            button.selected = true;
            base.tint = button.hoverColor;
            base.alpha = button.hoverAlpha;
        } else {
            button.selected = false;
            base.tint = button.baseColor;
            base.alpha = button.baseAlpha;
        };
        ;
    };

};
acgn.button.select = function() {
    
    var buttons = [];
    for (var i = 0; i < acgn.stage.button.children.length; i++) {
        var maybe = acgn.stage.button.children[i];
        var tags = maybe.tag.split('|');
        if (tags.indexOf(acgn.buttons.tag[0]) > -1 && maybe instanceof PIXI.Text) buttons.push(maybe);
    };
    for (var i = 0; i < acgn.stage.system.children.length; i++) {
        var maybe = acgn.stage.system.children[i];
        var tags = maybe.tag.split('|');
        if (tags.indexOf(acgn.buttons.tag[0]) > -1 && maybe instanceof PIXI.Text) buttons.push(maybe);
    };

    var button;
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].selected) button = buttons[i];
    };
    if (button === undefined) return;
    
    console.log(typeof button.target);
    
    if (typeof button.target === 'function') {
        button.target();
    } else if (typeof button.target === 'string') {
        delete acgn.wait.until;
        delete acgn.key.input.d;
        delete acgn.key.input.r;
        delete acgn.key.input.u;
        delete acgn.key.input.l;
        delete acgn.key.input.a;
        acgn.buttons.tag = acgn.buttons.tag.slice(1);
        acgn.next(button.target);
    };
    

};

// AVG graphics
acgn.layer = function() {

    var arg = arguments[0] || {};
    
    var name = arg.name;
    
    if (arg === 'help') {
      acgn.log('[layer] usage: @layer name="layer".');
      // acgn.log('[layer] parent layer has to be added before adding child layer.');
      // acgn.log('[layer] layer of name cannot be used twice.');
      // acgn.log('[layer] PIXI.Container internal properties cannot be used as well, sush as alpha, position, etc.');
      return;
    };
    
    // "base"             ==> passed
    // "base/test"        ==> passed
    // "demo/test2"       ==> failed ==> "acgn.stage.demo" is not a layer.
    // "demo"             ==> passed
    // "demo/test2"       ==> passed
    // "demo/base"        ==> failed ==> "acgn.stage.base" is used.
    // "demo/alpha"       ==> failed ==> "acgn.stage.alpha" is used.
                                  // ==> "acgn.stage.demo.alpha" is used.

    var layers = name.split('/');
    var parent = acgn.stage;
    var child = layers[layers.length-1];
    
    for (var i = 0; i < layers.length - 1; i++) {
        parent = parent[layers[i]];
        if (parent instanceof PIXI.Container === false) {
            acgn.log('[layer] "' + name + '" cannot be added, "acgn.stage.' + layers.slice(0,-1).join('.') + '" is undefined.');
            return;
        };
    };
    
    if (parent[child] !== undefined || acgn.stage[child] !== undefined) {
        acgn.log('[layer] "' + name + '" cannot be added, ' + (acgn.stage[child] instanceof PIXI.Container ? 'layer' : 'variable') + ' "acgn.stage.' + child + '" exist.');
        return;
    }
    
    var layer = new PIXI.Container();
    acgn.stage[child] = parent[child] = layer;
    layer.name = child;
    parent.addChild(layer);
    
    acgn.layers[child] = layer;

};
acgn.add = function(item, arg) {

    // get caller name
    for (fn in acgn) {
        if (acgn[fn] === acgn.add.caller) {var caller = fn; break;}
    };

    // add item to container
    var container = acgn.stage[arg.layer || 'base'];
    if (!container) {acgn.log('[' + caller + '] Layer "' + arg.layer + '" does not exist');return;}
    container.addChild(item);
    item.z = arg.z || 0;
    item.tag = arg.tag;

    // position
    if (item.position) {
    
        if (typeof arg.position === 'object') item.position = arg.position;
        if (typeof arg.x === 'number') item.x = arg.x;
        if (typeof arg.y === 'number') item.y = arg.y;
        
    };
    
    // pivot
    if (item.pivot) {
        if (typeof arg.pivot === 'object') item.pivot = arg.pivot;
        if (typeof arg.pivotX === 'number') item.pivot.x = arg.pivotX;
        if (typeof arg.pivotY === 'number') item.pivot.y = arg.pivotY;
        // if (item instanceof PIXI.Graphic) console.log(item);
    };
    
    // anchor
    if (item.anchor) {
        if (typeof arg.anchor === 'object') item.anchor = arg.anchor;
        if (typeof arg.anchorX === 'number') item.anchor.x = arg.anchorX;
        if (typeof arg.anchorY === 'number') item.anchor.y = arg.anchorY;
    };
    
    // position center, left, right
    if (item.position && item.anchor && (typeof arg.position == 'string') ) {
    
        var position = arg.position;
    
        var full = /^(l|lc|c|rc|r|left|leftCenter|center|rightCenter|right)$/i;
        var l = /^(l|left)$/i;
        var lc = /^(lc|leftCenter)$/i;
        var c = /^(c|center)$/i;
        var rc = /^(rc|rightCenter)$/i;
        var r = /^(r|right)$/i;
    
        if ( position.match(full) ) item.anchor = {x: 0.5, y: 1};
    
        if ( position.match(l) )  item.position = {x: acgn.width * 1/6, y: acgn.height};
        if ( position.match(lc) ) item.position = {x: acgn.width * 2/6, y: acgn.height};
        if ( position.match(c) )  item.position = {x: acgn.width * 3/6, y: acgn.height};
        if ( position.match(rc) ) item.position = {x: acgn.width * 4/6, y: acgn.height};
        if ( position.match(r) )  item.position = {x: acgn.width * 5/6, y: acgn.height};
    
    };
    
    // update
    if (typeof item.update === 'function') item.update = [item.update];
    if (arg.update) {
        item.update = item.update || [];
        item.update.push(arg.update);
    };
    if (arg.base) item.base = arg.base;
    
    Object.defineProperty(item, "state", { set: function (value) {
    
        this._state = value;
        this.stateBirth = Date.now();
        
    }, get: function() {
    
        return this._state;
        
    }});
    
    item.state = arg.state || 'enter';
    
    item.alpha = 0;
    item.birthAlpha = typeof arg.alpha === 'number'? arg.alpha : 1;
    
    item.birth = Date.now();            item.last = item.birth + 0;
    item.birthX = item.x + 0;
    item.birthY = item.y + 0;
    
    var enter = arg.enter || "";
    var exit = arg.exit || "";
    
    if (enter.match(/(?:From|To)(?:Top|Right|Bottom|Left)$/)) {
        enter = arg.enter.replace(/.*(From|To)(Top|Right|Bottom|Left)$/, "$1$2");
        item.enter = acgn.add[enter];
    };
    if (exit.match(/(?:From|To)(?:Top|Right|Bottom|Left)$/)) {
        exit = arg.exit.replace(/.*(From|To)(Top|Right|Bottom|Left)$/, "$1$2");
        item.exit = acgn.add[exit];
    };

    switch (enter) {
        case 'FromLeft': case 'ToRight': item.x -= 50; break;
        case 'FromRight': case 'ToLeft': item.x += 50; break;
        case 'FromTop': case 'ToBottom': item.y -= 50; break;
        case 'FromBottom': case 'ToTop': item.y += 50; break;
    };
    
    if (arg.tint !== undefined) item.tint = arg.tint;
    if (arg.target !== undefined) item.target = arg.target;
    
    return item;
            
};
acgn.add.FromLeft = acgn.add.ToRight = function(item) {
    item.x += 2.5;
};
acgn.add.FromRight = acgn.add.ToLeft = function(item) {
    item.x -= 2.5;
};
acgn.add.FromTop = acgn.add.ToBottom = function(item) {
    item.y += 2.5;
};
acgn.add.FromBottom = acgn.add.ToTop = function(item) {
    item.y -= 2.5;
};
acgn.weather = function(type) {

    var exist;

    for (var i=0; i < world.weather.children.length; i++) {

        var weather = world.weather.children[i];

        if (weather.type != type)  {weather.state = 'out';}
        else                       {exist = true;}

    }

    if (!exist) {
        switch (type) {

            case 'rain': {

                var rains = new PIXI.DisplayObjectContainer();

                rains.type = 'rain';
                rains.AI = acgn.AI.rains = acgn.AI.rains || function() {

                    if (this.children.length < 100) {

                        var rain = new PIXI.Graphics();
                        rain.lineStyle(1, 0xffffff, Math.range(0.25,0.75));
                        rain.moveTo(0,0);
                        rain.lineTo(3,50);
                        rain.position.x = Math.random() * width;
                        rain.position.y = -50;
                        this.addChild(rain);

                    }

                    for (var i=0; i < this.children.length; i++) {

                        var child = this.children[i];

                        child.position.x += 3/4;
                        child.position.y += 50/4;
                        if (child.position.y > height) {
                            child.position.x = Math.random() * width;
                            child.position.y = -50;
                        }

                    }

                };

                world.weather.addChild(rains);

                break;

            }
            case 'snow': {

                var snows = new PIXI.DisplayObjectContainer();

                snows.type = 'snow';
                snows.AI = acgn.AI.snows = acgn.AI.snows || function() {

                    if (this.children.length < 100 && acgn.frame % 6 === 0) {

                        var snow = new PIXI.Sprite.fromFrame('snow');

                        snow.type = 'snow';
                        snow.scale.x = snow.scale.y = Math.range(0.5,2.5);
                        snow.position.x = Math.random() * width;
                        snow.position.y = -snow.height;
                        snow.angle = 0;

                        this.addChild(snow);

                    }

                    for (var i=0; i < this.children.length; i++) {

                        var child = this.children[i];

                        child.angle += Math.range(-0.01,0.01);
                        child.position.y += 1;
                        child.position.x += Math.sin(child.angle) * 5;

                        if (child.position.y > height) {
                            child.position.x = Math.random() * width;
                            child.position.y = -child.height;
                            child.angle = 0;
                        }

                    }

                };

                world.weather.addChild(snows);

                break;

            }

        }
    }



};
acgn.image = function() {
    
    var arg = arguments[0] || {};
    arg.layer = arg.layer || 'image';
    
    var storage = arg.storage;
    var image;
    
    if (acgn.image.cache[storage]) {storage = acgn.image.cache[storage]}
    else if (!storage.match(/\.(png|jpg|bmp)$/)) {storage = 'image/' + storage + '.png';}
    else                                         {storage = 'image/' + storage;};
    
    try {
    
        // check texture
        image = PIXI.Sprite.fromFrame(storage);
        
    } catch (err) {
    
        // check undefined
        if ( storage === undefined ) {acgn.log('[image] "undefined" cannot be used as image.'); return;}
        // check image type
        if ( !storage.match(/(?:\.png|\.jpg|\.bmp)$/i) ) { acgn.log('[image] Did not load "image/' + storage + '", please use .jpg, .png or .bmp file.'); return; }
        // check image exist or not
        try { acgn.fs.lstatSync(storage);} catch (err) {acgn.log('[image] "' + storage + '" does not exist.'); return;}
        
    };
    
    image = image || PIXI.Sprite.fromImage(storage);
    
    return acgn.add(image, arg);

};
acgn.rectangle = function() {

    var arg = arguments[0] || {};
    
    var color = typeof arg.color === 'number' ? arg.color : 0xffffff;
    // var alpha = typeof arg.alpha === 'number' ? arg.alpha : 1;
    
    var width = arg.width || acgn.width;
    var height = arg.height || acgn.height;
    var anchorX = arg.anchor ? arg.anchor.x : arg.anchorX ? arg.anchorX : 0;
    var anchorY = arg.anchor ? arg.anchor.y : arg.anchorY ? arg.anchorY : 0;
    var x = -width * anchorX;
    var y = -height * anchorY;

    var rect = new PIXI.Graphics();
    rect.beginFill(color, 1);
    rect.drawRect(x, y, width, height);
    rect.endFill();
    
    return acgn.add(rect, arg);

};
acgn.arc = function() {

    var arg = arguments[0] || {};
    
    var thickness = typeof arg.thickness === 'number' ? arg.thickness : 1;
    var color = typeof arg.color === 'number' ? arg.color : 0xffffff;
    
    var r = typeof arg.r === 'number' ? arg.r : 100;
    var i = typeof arg.i === 'number' ? arg.i : 0;          i = i / 360 * 2 * Math.PI;
    var f = typeof arg.f === 'number' ? arg.f : 180;        f = f / 360 * 2 * Math.PI;

    var arc = new PIXI.Graphics();
    arc.lineStyle(thickness, color, 1);
    arc.arc(0, 0, r, i, f);
    
    return acgn.add(arc, arg);

};
acgn.clear = function() {
    
    var arg = arguments[0] || {};
    var layer = arg.layer;
    var tag = arg.tag;
    
    var stage = acgn.stage;
    var layers = [];
    
    // choose layer to be remove
    if ( layer === 'stage') {
    
        layers.push(stage);
        
    }
    else if (layer === undefined || layer === 'all') {
    
        for (var i = 0; i < stage.children.length; i++) {
        
            var l = stage.children[i];
            layers.push(l);
        
        };
    
    } 
    else if (stage[layer] instanceof PIXI.Container) {
    
        layers.push(stage[layer]);
    
    };
    
    // remove items
    for (var i = 0; i < layers.length; i++) {
        
        layer = layers[i];
        
        for (var j = 0; j < layer.children.length; j++) {
            
            var item = layer.children[j];
            if (tag === undefined || tag === item.tag) item.state = 'exit';
            
        }
        
    }
    
};
acgn.quake = function() {

    var arg = arguments[0] || {};
    var time = arg.time !== undefined ? arg.time : 500;
    
    acgn.stage.pivot = acgn.stage.position = {x: acgn.width / 2, y: acgn.height / 2};
    
    acgn.wait.birth = Date.now();
    acgn.wait({until: function() {
        
        var dt = Date.now() - acgn.wait.birth;
        var test = dt > time;
        
        if (test) {
            delete acgn.wait.birth;
        } else {
            var rotate = Math.floor(dt/100) % 2;
            if (rotate === 1) {acgn.stage.rotation = 0.1}
            else if (rotate === 0) {acgn.stage.rotation = -0.1}
        };
        return test;
        
    }, run: function() {
        acgn.stage.rotation = 0;
    }});
    
};

// AVG texts
acgn.font = function() {

    var arg = arguments[0] || {};
    
    for (parameter in arg) {
        acgn.v.text.current[parameter] = arg[parameter];
    };
    
};
acgn.deffont = function() {

    var arg = arguments[0] || {};
    
    for (parameter in arg) {
        acgn.v.text.default[parameter] = arg[parameter];
    };
    
};
acgn.resetfont = function() {

    acgn.v.text.current = {};

};
acgn.text = function() {
    
    var arg = arguments[0] || {};
    var text = arg.text || "";
    var c = acgn.v.text.current;
    var t = acgn.v.text[arg.type];
    var d = acgn.v.text.default;
    
    for (p in c) {
        if ( arg[p] === undefined && c[p] !== undefined) arg[p] = c[p];
    };
    
    if (t) {
        for (p in t) {
            if ( arg[p] === undefined && t[p] !== undefined) arg[p] = t[p];
        };
    }
    
    for (p in d) {
        if ( arg[p] === undefined && d[p] !== undefined) arg[p] = d[p];
    };
    
    
    if (arg.font) {
        arg.size = parseInt( arg.size.replace(/^.*?(\d+).*?$/, "$1") );
        arg.family = arg.font.replace(/^.*px\s(.*)$/, "$1");
        arg.bold = arg.font.match("bold") ? true : false;
        arg.italic = arg.font.match("italic") ? true : false;
    };
    
    var item = new PIXI.Text(text, {
    
        font :               arg.font || (arg.bold ? "bold " : "") + (arg.italic ? "italic " : "") + arg.size + 'px ' + arg.family,
        lineHeight :         arg.lineHeight || Math.round(arg.size * 1.2),
        padding :            arg.padding || Math.round(arg.size * 0.2),
        
        size:                arg.size,
        family:              arg.family,
        bold:                arg.bold,
        italic:              arg.italic,
        
        align :              arg.align,
        fill :               arg.color,
        stroke :             arg.stroke,
        strokeThickness :    arg.strokeThickness,
        dropShadow :         arg.dropShadow,
        dropShadowColor :    arg.dropShadowColor,
        dropShadowAngle :    arg.dropShadowAngle,
        dropShadowDistance : arg.dropShadowDistance,
        
        // textBaseline :       arg.textBaseline,
        // lineJoin :           arg.lineJoin,
        // miterLimit :         arg.miterLimit,
        
        wordWrap :           arg.wordWrap,
        wordWrapWidth :      arg.width,
        wordWrapHeight :     arg.height,
        
        speed :              arg.speed,

    });
    
    // if text variable exist and no freq define, set freq as 250ms per update, ex: "Text (variable)"
    if (typeof text === 'string' && ( text.match(/\(.*\)/) || text.reverse().match(/\|(?!\\)/) ) && !text.match(/\|\d+$/) ) text += "|250";
    
    // if update freq defined, ex: "(variable)|350"
    if (typeof text === 'string' && text.match(/\|\d+$/)) {
        
        item.texts = text.split("|").slice(0,-1);       
        item.freq = text.match(/\d+$/)[0];
        
        
        for (var i = 0; i < item.texts.length; i++) {
            
            // if variable exist, eval it, ex: "(variable)"
            if (item.texts[i].reverse().match(/\)(?!\\).*?\((?!\\)/)) {
                
                var org = item.texts[i];
                
                item.texts[i] = function() {
                    
                    var processed = '"';
                    var state = 'string';
                    var open = 0;
                    var close = 0;

                    for (var j = 0; j < org.length; j++) {
                        if (state === 'string') {
                            if (org[j] !== '(') {
                                processed += org[j];
                                if (org[j] === '\\') {processed += org[j+1]; j++}
                            }
                            else {
                                state = 'bracket';
                                processed += '" + (';
                                open++;
                            };
                        } else if (state === 'bracket') {
                            if (org[j] === '(') open++;
                            if (org[j] === ')') close++;
                            processed += org[j];
                            if (org[j] === '\\') {processed += org[j+1]; j++}
                            if (open === close) {
                                processed += ' + "';
                                state = 'string';
                                open = 0;
                                close = 0;
                            };
                        };
                    };
                    
                    processed += '"';
                    
                    return eval(processed);
                    
                    
                };
            } else if (!item.texts[i].match(/^['"].*['"]$/)) {
            
                item.texts[i] = eval('"' + item.texts[i] + '"');
                
            };
        
        };
        
        var text = item.texts[0];
        item.text = typeof text === 'function' ? text() : text;
        
        item.last = Date.now();
        item.update = function() {
        
            var now = Date.now();
            
            if (now - item.last > item.freq) {
            
                item.last = now;
                var i = item.texts.indexOf(item.text) + 1;
                if (i === item.texts.length) i = 0;
                var text = item.texts[i];
                item.text = typeof text === 'function' ? text() : text;
                
            };
            
        };
    
    } else if  (typeof text === 'function') {
    
        item.text = text();
        item.update = text;
    
    };

    if (arg.base) {
        if (arg.layer && !arg.base.match(/\blayer=/)) arg.base += ' layer=' + arg.layer;
        if (arg.tag)   arg.base += ' tag=' + arg.tag;
        if (arg.enter && !arg.base.match(/\benter=/))  arg.base += ' enter=' + arg.enter;
        if (arg.exit && !arg.base.match(/\bexit=/))   arg.base += ' exit=' + arg.exit;
        if (arg.anchor && !arg.base.match(/\banchor=/)) arg.base += ' anchor=' + arg.anchor.x + ',' + arg.anchor.y;
        var base = acgn.next.parseLine(arg.base);
        switch(base.fn) {
            case 'rectangle':
            case 'image':
                arg.base = acgn.next.runLine(base);
                break;
            default:
                acgn.log('[text] Currently only support "rectangle" or "image" type base.');
        };
    };
    arg.position = arg.position || {x: arg.x, y: arg.y};
    
    delete arg.x;
    delete arg.y;
    
    return acgn.add(item, arg);

};
acgn.message = function(text) {

    var arg = arguments[0] || {};
    arg.type = arg.type || acgn.v.text.current.type || 'message';
    
    var msgs = acgn.stage.message.children;
    arg.tag = arg.tag || msgs.length ? msgs[msgs.length-1].tag : undefined;
    
    var msg = acgn.message.currentMessage ? acgn.message.currentMessage : acgn.text(arg);

    // check text width
    
    var ctx = document.createElement('canvas').getContext('2d');
    ctx.font = msg.style.font;

    var checkTexts = (msg.fullText || "").split(/\n/);           // a temp text, the current fullText split in lines, then used for checking width
    var newText = (arg.text || "").replace(/\\n/g,"\n");          // new pending text
    var wrapWidth = msg.style.wordWrapWidth + 0;
    
    {   // Regex Variables
    
        // 半格標點: ~!@#$%^&*()-=_+[]{};'\:"|<>?,./
        // 全格標點(zxab - zxay): ，、。．·；：？！︰…‥﹐﹑﹒·﹔﹕﹖﹗｜–︱—
        // 全格標點(zxba - zxby): ︳﹏︴﹏（）︵︶｛｝︷︸〔〕︹︺【】︻︼《》︽︾〈
        // 全格標點(zxca - zxcy): 〉︿﹀「」﹁﹂『』﹃﹄﹙﹚﹛﹜﹝﹞‘’“”〝〞‵′
        // [標點] === [~!@#$%\^&*()\-=_+[\]{};'\\:"|<>?,./，、。．·；：？！︰…‥﹐﹑﹒·﹔﹕﹖﹗｜–︱—︳﹏︴﹏（）︵︶｛｝︷︸〔〕︹︺【】︻︼《》︽︾〈〉︿﹀「」﹁﹂『』﹃﹄﹙﹚﹛﹜﹝﹞‘’“”〝〞‵′]
        // 漢字 === [\u4E00-\u9FBF]
        // 日語 === [\u3040-\u31FF]
        var p = "[~!@#$%\\^&*()\\-=_+[\\]{};'\\\\:\"|<>?,./，、。．·；：？！︰…‥﹐﹑﹒·﹔﹕﹖﹗｜–︱—︳﹏︴﹏（）︵︶｛｝︷︸〔〕︹︺【】︻︼《》︽︾〈〉︿﹀「」﹁﹂『』﹃﹄﹙﹚﹛﹜﹝﹞‘’“”〝〞‵′]";
        var ckj = '[\\u4E00-\\u9FBF\\u3040-\\u31FF]';
        
        var P = new RegExp(p + '+$');                                   // 標點
        var longP = new RegExp('\\n' + p + '+$');                       // 長標點
        var longP2 = new RegExp('^' + p + '+$');                        // 長標點2
        var wordP = new RegExp('\\b\\w+\\s?' + p + '+$');               // 英數標點
        var longWordP = new RegExp('\\n\\b\\w+\\s?' + p + '+$');        // 長英數標點
        var longWordP2 = new RegExp('^\\b\\w+\\s?' + p + '+$');         // 長英數標點2
    
    }
    
    var guestDefaultNumber = checkTexts[checkTexts.length-1].length + 0;
    var guestMaxNumber = Math.floor(wrapWidth / msg.style.size);
    
    for (var i = 0; i < newText.length; i++) {
    
        if (checkTexts[checkTexts.length-1] === ' ') checkTexts[checkTexts.length-1] = '';
        checkTexts[checkTexts.length-1] += newText[i];
        
        if (i + guestDefaultNumber < guestMaxNumber) continue;
        
        var orgText = checkTexts[checkTexts.length-1] + "";
        var text = orgText + "";
        
        // PIXI.Text.width used in a loop is extremely slow, so use ctx.measureText here
        if (ctx.measureText(text).width <= wrapWidth) continue;
        
        if (text.match(/\n\b\w+$/) || text.match(/^\w+$/) ) {           // long word
        
            text = text.replace(/^([\s\S]*?)(\w)$/, "$1\n$2");
            
        }
        else if (text.match(/\w$/) ) {                                  //      word
        
            text = text.replace(/^([\s\S]*?)(\b\w+)$/, "$1\n$2");
            
        }
        else if (text.match(/[\u4E00-\u9FBF\u3040-\u31FF\s]$/)) {       // ckj or space
            
            text = text.replace(/^([\s\S]*?)(.)$/, "$1\n$2");
            
        }
        else if (text.match(longP) || text.match(longP2)) {             // long punctuation
        
            text = text.replace(/^([\s\S]*?)(.)$/, "$1\n$2");
            
        }
        else if (text.match(longWordP) || text.match(longWordP2)) {     // long word before punctuation
            
            text = text.replace(new RegExp('^([\\s\\S]*?)(\\w\\s?' + p + '+)$'), "$1\n$2");

        }
        else if (text.match(wordP)) {                                   //      word before punctuation
        
            text = text.replace(new RegExp('^([\\s\\S]*?)(\\b\\w+\\s?' + p + '+)$'), "$1\n$2");
            
        }
        else if (text.match(P)) {                                       //                  punctuation
            
            text = text.replace(new RegExp('^([\\s\\S]*?)(.\\s?' + p + '+)$'), "$1\n$2");
            
        }
        else {                                                          // other
        
            text = text.replace(/^([\s\S]*?)(.)$/, "$1\n$2");
            
        };
        
        // if still too long
        var line2 = text.split(/\n/)[1] || "";
        if (ctx.measureText(line2).width > wrapWidth) text = orgText.replace(/^([\s\S]*?)(.)$/, "$1\n$2");
        
        var line1 = text.split(/\n/)[0];
        var line2 = text.split(/\n/)[1];
        checkTexts[checkTexts.length-1] = line1;
        checkTexts.push(line2);
        
    };
    
    msg.fullText = checkTexts.join('\n');

    // check text width complete
    if (!acgn.message.currentMessage) {
    
        msg.update = msg.update || [];
        msg.update.push(function() {
            
            if (msg.state === 'normal'&& msg.text !== msg.fullText) {
                
                var t = msg.text === " " ? "" : msg.text + '';
                msg.text = t + msg.fullText[t.length];
                
            }
            
        });
        msg.text = '';
        
        acgn.message.currentMessage = msg;

        
    };

    
    
    if (msg.fullText) acgn.wait({until: 'messageReady'});
    
    return;

    // var target = player[0];

    // remove earlier message
    // for (var i = 0; i < messages.length; i++) {
        // if (messages[i].target == target) messages[i].state = 'out';
    // }
    
    var message = new PIXI.DisplayObjectContainer();
    message.target = player[0]; // have to be dynamic
    message.border = new PIXI.Graphics();
    message.text = new PIXI.Text('', { font:"16px 宋体" , fill: '#FFF', wordWrap: true, wordWrapWidth: 320});
    message.pendingText = text;
    message.target = target;
    
    message.alpha = 0;
    message.state = 'in';

    messages.push(message);
    stage.messages.addChild(message);
    message.addChild(message.border);
    message.addChild(message.text);
    
    var p = message.p = 8; // padding
    var h = message.h = 18*Math.ceil(text.length/20)+2*p;
    var w = message.w = 16*(text.length > 20 ? 20 : text.length)+2*p;
    
    message.border.beginFill(0x000000,0.5);
    message.border.lineStyle(1, 0x000000, 1);
    message.border.moveTo(p,0);
    message.border.lineTo(w-p,0);
    message.border.lineTo(w,p);
    message.border.lineTo(w,h-p);
    message.border.lineTo(w-p,h);
    message.border.lineTo(w/2+p* 1 ,h);
    message.border.lineTo(w/2+p* 2 ,h+p*2);
    message.border.lineTo(w/2+p*-1 ,h);
    message.border.lineTo(p,h);
    message.border.lineTo(0,h-p);
    message.border.lineTo(0,p);
    message.border.lineTo(p,0);
    
    message.text.position.x = p;
    message.text.position.y = p;
    
    /*/ var box = target.message;

    // if (!box) {		// !exist > add

        // box = target.message = new PIXI.DisplayObjectContainer();
        // box.border = new PIXI.Graphics();
        // box.nameBorder = new PIXI.Graphics();
        // box.pendingName = name;
        // box.pendingText = text;
        // box.target = target;

        // messages.push(box);
        // stage.messages.addChild(box);
        // box.addChild(box.border);
        // box.addChild(box.nameBorder);
        
        // var h = 18*Math.ceil(text.length/20);
        // var w = 16*20;
        
        // // box.border.beginFill(0xFFFFFF,1);
        // // box.border.lineStyle(0,0x000000,1);
        // // box.border.moveTo(0,0);
        // // box.border.lineTo(w,0);
        // // box.border.lineTo(w,h);
        // // box.border.lineTo(0,h);
        // // box.border.lineTo(0,0);
        
        
        
        
        // var c = box.c = 16;
        // var h = box.h = 18*Math.ceil(text.length/20)+c;
        // var w = box.w = 16*(text.length >= 20 ? 20 : text.length)+2*c;

        // // box.nameBorder.lineStyle(1, 0x000000, 1);
        // // box.nameBorder.moveTo(c*1.5,0);
        // // box.nameBorder.lineTo(c*1.5,12);
        // // box.nameBorder.lineTo(c*1.5+16*6+3*2,12);
        // // box.nameBorder.lineTo(c*1.5+16*6+3*2,0);
        
        // box.border.beginFill(0x000000,0.5);
        // box.border.lineStyle(1, 0x000000, 1);
        
        // var to = function(x,y) {box.border.lineTo(x,y)};
        
        // box.border.moveTo(0,0);
        // to(w,0);
        // to(w,h);
        
        // to(w/2+c* 0.5 ,h);
        // to(w/2+c* 1.0 ,h+c);
        // to(w/2+c*-0.5 ,h);
        
        // to(0,h);
        // to(0,0);
        
        // // top
        // // box.border.moveTo(c*1.5+16*6+3*2,0);
        // // box.border.lineTo(c+w,0);
        
        // // box.border.lineTo(c+c+w,0); // sharp corner
        
        // // // right
        // // box.border.lineTo(c+c+w,c);
        // // // box.border.lineTo(c+c+mw,(c+mh/2)-c);
        // // // box.border.lineTo(c+c+mw+c,(c+mh/2)+c+c);
        // // // box.border.lineTo(c+c+mw,(c+mh/2)+c);
        // // box.border.lineTo(c+c+w,c+h);
        
        // // box.border.lineTo(c+c+w,c+c+h); // sharp corner
        
        
        
        // // // down
        // // box.border.lineTo(c+w,c+c+h);
        // // box.border.lineTo(c+w-c-c,c+c+h);
        // // box.border.lineTo(c+w-c-c/2,c+c+c+h);
        // // box.border.lineTo(c+w-c-c-c,c+c+h);
        // // box.border.lineTo(c,c+c+h);
        
        // // box.border.lineTo(0,c+c+h); // sharp corner
        
        // // // left
        // // box.border.lineTo(0,c+h);
        // // box.border.lineTo(0,c);
        
        // // box.border.lineTo(0,0); // sharp corner
        
        // // // end
        // // box.border.lineTo(c,0);
        // // // box.border.lineTo(c*1.5,0);
        // // // box.border.lineTo(c*1.5,-12);
        // // // box.border.lineTo(c*1.5+16*6+3*2,-12);
        // // // box.border.lineTo(c*1.5+16*6+3*2,0);
        // // box.border.lineTo(c*1.5+16*6+3*2,0); // sharp corner
        // box.border.endFill();
        
        // box.alpha = -0.1;
        // // box.scale.x = box.scale.y = 1;
        // // box.position.x0 = target.position.x-W-c;
        // // box.position.y0 = target.position.y-target.height-H-2*c;
        // // box.position.x = box.position.x0 + (W+2*c) * (1 - box.alpha);
        // // box.position.y = box.position.y0 + (H+3*c) * (1 - box.alpha);
        // box.state = 'in';
    
    // }
    // else {				//  exist > remove > add
    
    // }
    // // else if (box.state == 'text'){

        // box.text.setText(box.text.text + box.pendingText);
        // box.pendingText = '';
        // box.state = 'ready';
    
    // }
    // else if (box.state == 'normal') {
    
        // box.text.setText('');
        // box.pendingText = text;
        // box.state = 'text';
        
        // if (box.name.text != name) {
            // box.name.setText('');
            // box.pendingName = name;
            // box.state = 'in';
        // }
        
    // } */
    
},
acgn.l = function() {   // line break

    var msg = acgn.message.currentMessage;
    
    var ctx = document.createElement('canvas').getContext('2d');
    ctx.font = msg.style.font;
    
    var texts = msg.text.split(/\n/);
    
    var x = msg.x + ctx.measureText(texts[texts.length-1]).width + 10;
    var y = msg.y + (texts.length - 0.5) * msg.style.lineHeight;
    
    var rect = acgn.rectangle({
        width: 8,
        height: 8,
        color: 0xFFCC00,
        alpha: 0.5,
        position: {x: x, y: y},
        pivot: {x: 4, y: 4},
        layer: 'message',
        update: function() {
            rect.rotation += 0.05;
        },
    });
    
    msg.rect = msg.rect || [];
    msg.rect.push(rect);
    
    acgn.wait({until: function() {
        var ready = acgn.key.pressed === 'a';
        if (ready) {
            for (var i = 0; i < msg.rect.length; i++) {
                msg.rect[i].state = 'exit';
            };
            acgn.key.pressed = '';
            
        };
        return ready;
    }});
};
acgn.p = function() {   // page break
    
    var msg = acgn.message.currentMessage;
    
    if (msg) {
    
        var ctx = document.createElement('canvas').getContext('2d');
        ctx.font = msg.style.font;
        
        var texts = msg.text.split(/\n/);
        
        var x = msg.x + ctx.measureText(texts[texts.length-1]).width + 10;
        var y = msg.y + (texts.length - 0.5) * msg.style.lineHeight;
    
    } else {
    
        var x = acgn.width - 30;
        var y = acgn.height - 30;
        
    };
    
    var rect = acgn.rectangle({
        width: 8,
        height: 8,
        color: 0xFFFF00,
        alpha: 0.5,
        position: {x: x, y: y},
        pivot: {x: 4, y: 4},
        layer: 'message',
        tag: msg ? msg.tag : '',
        update: function() {
            rect.rotation += 0.05;
        }
    });
    
    if (msg) {
    
        msg.rect = msg.rect || [];
        msg.rect.push(rect);
    
    }
    
    acgn.wait({until: 'pageBreak'});
    
};
acgn.r = function() {   // carriage return
    acgn.message.currentMessage.fullText += '\n';
};

// ACT / ARPG / STG
acgn.sprite = function() {

    var arg = arguments[0] || {};
    var type = arg.type || 'enemy';
    var template = acgn.template[arg.template || 'default'];
    var x = arg.x !== undefined ? arg.x : 0;        x /= acgn.scale;
    var y = arg.y !== undefined ? arg.y : 0;        y /= acgn.scale;
    var x2 = arg.x2 !== undefined ? arg.x2 : 0;     x2 /= acgn.scale;
    var y2 = arg.x2 !== undefined ? arg.y2 : 0;     y2 /= acgn.scale;
    
    var item = new PIXI.Sprite.fromFrame('blank');
    arg.layer = 'sprite';
    
    item.template = template;
    item.type = type;
    
    item.anchor = template.anchor || /* template.state.normal.anchor || */ {x: 0.5, y: 0.5};
    
    item.hp = template.hp;              item.mp = template.mp;                  item.atk = template.atk;                item.def = template.def;
    item.hpFinal = template.hpFinal;    item.mpFinal = template.mpFinal;
    item.hpRate = template.hpRate;      item.mpRate = template.mpRate;
    
    item.direction = 'd';
    
    item = acgn.add(item, arg);

    var bodyDef = new Box2D.b2BodyDef();
    var pos = bodyDef.get_position();
    pos.set_x(x);
    pos.set_y(y);
    
    switch (type) {
        case 'player':              
        case 'enemy':              
        case 'bullet':              
        case 'enemybullet':        
        case 'item':                
            bodyDef.set_type(Box2D.b2_dynamicBody); break;
        case 'wall':                
        case 'floor':               
        case 'boundary':            
            bodyDef.set_type(Box2D.b2_staticBody); break;
    };
    
        
    
    if (template.shape === 'edge') {
    
        var shape = new Box2D.b2EdgeShape();
        var p1 = new Box2D.b2Vec2(x, y);
        var p2 = new Box2D.b2Vec2(x2, y2);
        shape.Set(p1, p2);
        Box2D.destroy(p1);
        Box2D.destroy(p2);
        pos.set_x(0);
        pos.set_y(0);
        
    }
    else if (template.shape[0] === 'circle') {
    
        var shape = new Box2D.b2CircleShape();
        shape.set_m_radius(template.shape[1]/acgn.scale);
        
    }
    else if (template.shape[0] === 'rectangle') {
    
        var shape = new Box2D.b2PolygonShape();
        shape.SetAsBox(template.shape[1]/2/acgn.scale, template.shape[2]/2/acgn.scale);
        
    };
    
    var fixDef = new Box2D.b2FixtureDef();
    fixDef.set_shape(shape);
    fixDef.set_friction(0);
    fixDef.set_restitution(0);
    
    var filter = fixDef.get_filter();
    
    var  p = acgn.categoryBits.player;
    var  e = acgn.categoryBits.enemy;
    var  b = acgn.categoryBits.bullet;
    var eb = acgn.categoryBits.enemyBullet;
    var  i = acgn.categoryBits.item;
    var  w = acgn.categoryBits.wall;
    var  f = acgn.categoryBits.floor;
    var  bd = acgn.categoryBits.boundary;
    
    switch (type) {
        case 'player':              filter.set_categoryBits(p);       filter.set_maskBits(p | e | eb | i | w | f | bd);      break;
        case 'enemy':               filter.set_categoryBits(e);       filter.set_maskBits(p | e |  b | i | w | f);           break;
        case 'bullet':              filter.set_categoryBits(b);       filter.set_maskBits(e | w | f);                        break;
        case 'enemybullet':         filter.set_categoryBits(eb);      filter.set_maskBits(p | w | f);                        break;
        case 'item':                filter.set_categoryBits(i);       filter.set_maskBits(p | e | w | f);                    break;
        case 'wall':                filter.set_categoryBits(w);       filter.set_maskBits(p | e | b | eb | i | w | f);       break;
        case 'floor':               filter.set_categoryBits(f);       filter.set_maskBits(p | e | b | eb | i | w);           break;
        case 'boundary':            filter.set_categoryBits(f);       filter.set_maskBits(p);                                break;
    };

    // add to box2d world
    item.body = acgn.world.CreateBody(bodyDef);
    item.body.CreateFixture(fixDef);
    
    // garbage colleciton
    Box2D.destroy(bodyDef);
    Box2D.destroy(fixDef);
    Box2D.destroy(shape);
    
    acgn.physics.push(item);
    
    return item;
    
};
acgn.player = function(x,y,x2,y2) {
    
    var arg = arguments[0] || {};
    arg.type = 'player';
    
    var player = acgn.sprite(arg);
    acgn.players.push(player);
    
    switch (arg.player) {
        case 1:
        case 2:
        case 3:
        case 4:
            acgn['player' + arg.player] = player;
    };
    
    return player;
    
};
acgn.enemy = function(name,x,y,x2,y2) {
    
    var arg = arguments[0] || {};
    arg.type = 'enemy';
    
    var enemy = acgn.sprite(arg);
    acgn.enemies.push(enemy);
    
    return enemy;
    
};
acgn.bullet = function(name,x,y,x2,y2) {
    
    var arg = arguments[0] || {};
    arg.type = 'bullet';
    
    var bullet = acgn.sprite(arg);
    acgn.bullets.push(bullet);
    
    return bullet;
    
};
acgn.enemyBullet = function(name,x,y,x2,y2) {
    
    var arg = arguments[0] || {};
    arg.type = 'enemyBullet';
    
    var enemyBullet = acgn.sprite(arg);
    acgn.enemyBullets.push(enemyBullet);
    
    return enemyBullet;
    
};
acgn.item = function(name,x,y,x2,y2) {
    
    var arg = arguments[0] || {};
    arg.type = 'item';
    
    var item = acgn.sprite(arg);
    acgn.items.push(item);
    
    return item;
    
};
acgn.wall = function(name,x,y,x2,y2) {
    
    var arg = arguments[0] || {};
    arg.type = 'wall';
    
    var wall = acgn.sprite(arg);
    acgn.walls.push(wall);
    
    return wall;
    
};
acgn.floor = function(name,x,y,x2,y2) {
    
    var arg = arguments[0] || {};
    arg.type = 'floor';
    
    var floor = acgn.sprite(arg);
    acgn.floors.push(floor);
    
    return floor;
    
};
acgn.boundary = function() {

    var arg = arguments[0] || {};
    arg.type = 'boundary';
    
    var boundary = acgn.sprite(arg);
    acgn.boundaries.push(boundary);
    
    return boundary;

};

acgn.player.physic = function() {
    

};  // move
acgn.player.action = function() {      // shoot / def / atk

    if (acgn.key.a && acgn.frame % 15) {

        var arc = Math.PI * 2;
        var line = 15; //lines of bullets
        acgn.se('se');

        for (var i = 0; i < line; i++) {

            var angle = line == 1 ? this.rotation : this.rotation + -arc/2 + i * arc/(line-1);
            
            var bullet = acgn.bullet('bullet', this.position.x, this.position.y);
            
            var body = bullet.body;

            var v = 20 / scale * 60;
            var vx = -Math.sin(angle) * v;
            var vy = Math.cos(angle) * v;
            
            body.SetTransform(body.GetPosition(), angle);
            var velocity = body.GetLinearVelocity();
            velocity.set_x(vx);
            velocity.set_y(vy);
            body.SetLinearVelocity(velocity);

//                    bullet.anchor.x = bullet.anchor.y = 0.5;
//                    bullet.position.x = player[0].position.x;
//                    bullet.position.y = player[0].position.y;
//                    bullet.rotation = player[0].rotation + angle;
//                    bullet.state = 'normal';
//                    bullet.hp = 1;
//                    bullet.atk = 10;
//                    bullet.v = 25;
//                    bullet.r = 5;
//                    bullet.type = "bullets";
            


        }

    }
    
};
acgn.firstAlive = function(items) {
    
    for (var i = 0; i < items.length; i++) {
        
        if (items[i].hp > 0) return items[i];
        
    }
    
    return ;
    
};

// audio
acgn.beatsToTime = function(t) {

    var bpm = acgn.bgm.bpm || 120;
    var bpb = acgn.bgm.bpb || 4;

    return (Math.floor(t-1) * bpb  + t % 1 * 10 - 1) / (bpm / 60);

};
acgn.bgm = function() {

    var arg = arguments[0] || {};
    var storage = arg.storage;
    var bpm = acgn.bgm.bpm = arg.bpm || 120;    // beats per minute
    var bpb = acgn.bgm.bpb = arg.bpb || 4;      // beats per bar
    
    var context = acgn.audioContext;
    var buffer = acgn.audioBuffer;
    var sources = acgn.bgm.source = acgn.bgm.source || [];
    var now = acgn.bgm.start = context.currentTime;
    
    
    
    if (buffer[storage]) {        // buffer exist
    
        var fadeOut = function() {
        
            var source = sources[0];

            source.gainNode.gain.linearRampToValueAtTime(0, now + 2);
            source.stop(now + 2);
            sources.splice(0,1);

            // acgn.log('[bgm] "' + source.storage + '" stopped');

        };
        var fadeIn = function() {

            var source = context.createBufferSource();
            var gainNode = source.gainNode = context.createGain();
                
            source.connect(gainNode);
            gainNode.connect(context.destination);

            source.storage = storage;
            source.buffer = buffer[storage];
            source.loop = true;
            gainNode.gain.linearRampToValueAtTime(0, now);
            gainNode.gain.linearRampToValueAtTime(1, now + 2);

            source.start(now);
            
            sources.push(source);

            // acgn.log('[bgm] "' + storage + '" playing');

        };

        // if (sources.length) fadeOut();
        // fadeIn();

        if (!sources.length)                                                       {fadeIn()}                    // played
        else if (sources.length && buffer[storage] !== sources[0].buffer)          {fadeOut(); fadeIn()}        // removed >> played

    }
    else {                        // buffer not decode yet >> adjust priority of decode
        
        acgn.scriptLocation[1]--;
        acgn.decode(storage);
        
    }

    // acgn.debug('bgm complet');

};
acgn.se = function() {

    var arg = arguments[0] || {};
    var track = arg.storage || '';
    
    var context = acgn.audioContext;
    var buffer = acgn.audioBuffer;
    
    if (!track.match(/\.\w{1,4}$/)) track += '.ogg';
    
    if (!buffer[track]) {
        acgn.log('[se] Buffer "' + track + '" does not exist.');
        return;
    };

    var se = context.createBufferSource();
    se.buffer = buffer[track];
    se.connect(context.destination);
    se.start(context.currentTime);

};

acgn.beginContact = function(contactPtr) {
    
    var contact = Box2D.wrapPointer( contactPtr, Box2D.b2Contact );
    var fixtureA = contact.GetFixtureA();
    var fixtureB = contact.GetFixtureB();
    var bodyA = fixtureA.GetBody();
    var bodyB = fixtureB.GetBody();
    // var a = acgn.reference[bodyA.e];
    // var b = acgn.reference[bodyB.e];
    
    // var damageA = b.atk - a.def;
    // var damageB = a.atk - b.def;
    
    // if (damageA > 0) a.hp -= damageA;
    // if (damageB > 0) b.hp -= damageB;
    
    // if (a.hp <= 0) {
        // a.state = 'dead';
    // };
    
    // if (b.hp <= 0) {
        // b.state = 'dead';
    // };
    
    
    
};
acgn.endContact = function() {
};
acgn.preSolve = function() {
};
acgn.postSolve = function() {
};
acgn.animate = function() {

    requestAnimationFrame( acgn.animate );
    
    acgn.sandbox();
    
    // game time setting
    acgn.frame++;
    
    var stage = acgn.stage;
    var world = acgn.world;
    
    acgn.t0 = acgn.t1 || Date.now();
    acgn.t1 = Date.now();
    var dt = acgn.t1 - acgn.t0;
    
    acgn.key.animate();
    
    // switch (acgn.gameState) {
        // case 'initializing':
        // case 'loading':
            // // break;
        // case 'normal':
            // break;
        // case 'play':
            
        // case 'wait':
            // switch (acgn.waitState) {
                // case 'message':
                // case 'input':
                // case 'time':
                
            // };
        // case 'waitInput':
        // case 'play':
            // // the first frame of 'play' state is not rendered, need to be fixed
            // var dt = now - last;
            // var gameLast = acgn.gameLast = acgn.gameNow;
            // var gameNow = acgn.gameNow = gameLast + dt;
            // // if (gameNow - gameLast > 0.1) gameNow = gameLast + 0.1; and adjust bgm
            // world.Step(dt, 1, 1);
            // break;
    // };
    
    // any waiting
    var until = acgn.wait.until;
    
    if (typeof until === 'function' && until()) {
    
        var run = acgn.wait.run;
        if (typeof run === 'function') run();
        
        delete acgn.wait.until;
        delete acgn.wait.run;
        
        acgn.next();
        
    };
    // else if (until) {
    
        // var next = true;
        
        // for (var i = 0; i < until.length; i++) {
            // var u = until[i];
            // next = next && (typeof u === 'function' ? u() : u);
        // };
        
        // if (next) {
            // delete acgn.wait.until;
            // acgn.next();
        // };
    
    // };
    // if (acgn.now === undefined) last = now = acgn.last = acgn.now = acgn.audioContext.currentTime;
    
    
    
    
    // pre step
    for (name in acgn.layers) {
    
        var layer = acgn.layers[name];
        
        for (var j = 0; j < layer.children.length; j++) {
        
            var item = layer.children[j];
            
            // fade in fade out
            switch (item.state) {
                case 'enter': {
                    item.alpha += item.birthAlpha / 20;
                    if (typeof item.enter === 'function') item.enter(item);
                    if (item.alpha >= item.birthAlpha) {
                        item.alpha = item.birthAlpha + 0;
                        item.x = item.birthX + 0;
                        item.y = item.birthY + 0;
                        item.state = 'normal';
                    };
                    break;
                };
                case 'exit': {
                    item.alpha -= item.birthAlpha / 20;
                    if (typeof item.exit === 'function') item.exit(item);
                    if (item.alpha < 0) item.parent.removeChild(item);
                };
            };
            
            // update texture
            if (item.template && item.template.state && item.template.state[item.state] && item.template.state[item.state].texture) {
                
                var textures = item.template.state[item.state].texture;
                
                // total state time
                var t = acgn.t1 - item.stateBirth;
                
                // total frame, (8 frames per second ===> 125ms)
                var tf = Math.floor(t / 125);
                
                // frame within textures cycle
                var f = tf % textures.length;
                
                // texture name
                var name = textures[f];
                if (PIXI.utils.TextureCache[name + '_' + item.direction]) name += '_' + item.direction;
                
                // set texture
                item.texture = PIXI.Texture.fromFrame(name);
                
            };
            
            // custom update
            var update = item.update;
            if (typeof update === 'function')               {update()}
            else if (typeof update === 'string')            {eval(update.replace('this.','item.'))}
            else if (update instanceof Array) {
            
                for (var k = 0; k < update.length; k++) {
                    var update2 = update[k];
                    if (typeof update2 === 'function')      {update2()}
                    else if (typeof update2 === 'string')   {eval(update2.replace('this.','item.'))}
                };
                
            };
            
            var template = item.template;
            
            if (acgn.gameState == 'play' && template && template.state) {
                
                if (item.stateBirth === undefined) {
                    item.birth = gameNow;
                    item.stateBirth = gameNow;
                    item.state = 'default';
                    item.stateCommand = arrayClone(template.state.default);
                };
                
                var birth = item.stateBirth;
                
                for (var k = 0; k < item.stateCommand.length; k++) {
                    
                    var command = item.stateCommand[k];
                  
                    while (command.repeat && gameNow >= birth + command.t) {
                        
                        for (param in command) {
                            switch (param) {
                                case 'texture':
                                    item.setTexture(PIXI.utils.TextureCache[command[param]]);
                                    item.textures = null;
                                    break;
                                case 'textures':
                                case 'move':
                                case 'hpRate':
                                case 'mpRate':
                                case 'atkRate':
                                case 'defRate':
                                    item[param] = command[param];
                                default:
                                    break;
                            }
                        }
                        
                        command.t += command.freq;
                        if (--command.repeat === 0) item.stateCommand.splice(k,1);
                        
                    };

                };
                
                var textures = item.textures;
                if (textures) {
                    var id = Math.floor( (gameNow - birth) / 0.25 % (textures.length) );     // change frame per 0.5s
                    var texture = PIXI.utils.TextureCache[textures[id]];
                    if (item.texture != texture) item.setTexture(texture);
                };
                item.hp += dt / item.hpRate * item.hpFinal;
                item.mp += dt / item.mpRate * item.mpFinal;
                if (item.hp > item.hpFinal) item.hp = item.hpFinal;
                if (item.mp > item.mpFinal) item.mp = item.mpFinal;
                
            };
            
        };
        
        
    };
    
    // physics
    acgn.world.Step(dt/1000);
    
    for (var i = 0; i < acgn.physics.length; i++) {
    
        var item = acgn.physics[i];
        
        // position & rotation
        var body = item.body;
        var b2pos = body.GetPosition();
        
        var x = b2pos.get_x() * acgn.scale;
        var y = b2pos.get_y() * acgn.scale;
        var pos = item.position;
        
        item.position = {
            x: Math.round(x),
            y: Math.round(y)
        };
        item.rotation = body.GetAngle();
        
        if (item.state == 'dead' || 
                (
                    (item.shape == 'circle' || item.shape == 'rectangle') &&
                    x < -100 || x > world.width + 100 || y < -100 || y > world.height + 100 
                )
            ) {
            
            item.state = 'dead';
            var k = item.reference.indexOf(item);
            item.reference.splice(k, 1);
            world.DestroyBody(body);
            delete item.body;
            
        };
        
    };
    
    
    for (var i = 0; i < acgn.updates.length; i++) {
        acgn.updates[i]();
    };
    
    
    // animate
    // acgn.fadeInOut();
    // acgn.physic();        // item.physic() > a adjust v > v adjust position > world collision

    // collision
//    var item = acgn.item;
//    var players = item.player;
//    var sprites = item.sprite;
//    var walls = item.wall;
//    
//    acgn.collision(players,walls);
    
    // - collision (physic, wall);
    // acgn.collision(players, sprites);
    // - collision (player, sprite bullet);
    // - collision (sprite, bullet);

    // acgn.AI();
    // player action
    // sprite action
    // bullet action
    // sprite bullet action

    // acgn.world.viewport();
    // acgn.world.sortObject();
    
    acgn.renderer.render(stage);

};

acgn.sandbox = function() {

    if (acgn.sandbox.excuted) return;
    
    acgn.sandbox.excuted = true;
    
    
    // acgn.call({});
    // acgn.call({target: 40});
    // acgn.call({target: '40'});
    // acgn.call({target: 40000});
    // acgn.call({target: '*loading'});
    // acgn.call({target: '*sel2-1'});
    // acgn.call({target: 'system.gs'});
    // acgn.call({target: 'system.gs/40'});
    // acgn.call({target: 'system.gs/*loading'});
    // acgn.call({target: 'first.gs/*sel2-1'});
    

    
};

acgn.initialize();;