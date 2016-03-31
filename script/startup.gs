*initialize
@clear

*setupLayer
@layer name=base                // base    ==> background
@layer name=bg                  // bg      ==> house, windmill, tree, etc
@layer name=game                //              ------------------------------------
@layer name=game/floor          //             |  floor  ==> bottom of game world   |     use for rpg / slg,
@layer name=game/sprite         // game    ==> |  sprite ==> objects of game world  | ==> within physic projective screen,
@layer name=game/ceil           //             |  ceil   ==> top of game world      |     alpha mask may be use
                                //              ------------------------------------
@layer name=image               // image   ==> avatar, character images, etc
@layer name=message             // message ==> text dialog, history, etc
@layer name=button              // button  ==> buttons
@layer name=fg                  // fg      ==> leaves, tree branch, blurry table, weather effect, etc
@layer name=system              // system  ==> system buttons or messages or images
@layer name=loading             // loading ==> special loading screen
@return

*setupMacro
@call         target=macro.gs
@return

*loading
@rectangle    layer=loading    alpha=0.5      color=black    pos=0      width=100%    height=100%
@text         layer=loading    anchor=0.5                    pos=50%                  text="讀取資料中.\ \ |讀取資料中..\ |讀取資料中..."
@arc          layer=loading    thickness=2    color=white    x=50%      y=50%         r=150         i=0    f=180    update=item.rotation+=0.2
@wait         until=gameLoaded
@return

@set          gameState=normal
@jump         target=001.gs

*debug
// physics
@set test='test'
@text layer=system tag=debug pos=100%-5,50%  anchor=1,0.5 size=30 alpha=0.5 color=green bold=true text="(acgn.test)"
@text layer=system tag=debug pos=100%-5,100%-195 anchor=1 size=12 alpha=0.5 text="Game State: (acgn.gameState)"
@text layer=system tag=debug pos=100%-5,100%-180 anchor=1 size=12 alpha=0.5 text="Players: (acgn.players)"
@text layer=system tag=debug pos=100%-5,100%-165 anchor=1 size=12 alpha=0.5 text="Enemies: (acgn.enemies)"
@text layer=system tag=debug pos=100%-5,100%-150 anchor=1 size=12 alpha=0.5 text="Bullets: (acgn.bullets)"
@text layer=system tag=debug pos=100%-5,100%-135 anchor=1 size=12 alpha=0.5 text="Enemy Bullets: (acgn.enemyBullets)"
@text layer=system tag=debug pos=100%-5,100%-120 anchor=1 size=12 alpha=0.5 text="Items: (acgn.items)"
@text layer=system tag=debug pos=100%-5,100%-105 anchor=1 size=12 alpha=0.5 text="Walls: (acgn.walls)"
@text layer=system tag=debug pos=100%-5,100%-90  anchor=1 size=12 alpha=0.5 text="Floors: (acgn.floors)"
@text layer=system tag=debug pos=100%-5,100%-72  anchor=1 size=15 alpha=0.5 color=yellow bold=true text="Physic Calculations: (acgn.calculations)"
// time
@text layer=system tag=debug pos=100%-5,100%-50 anchor=1 size=12 alpha=0.5 text="Audio Context Time: (acgn.audioContext.currentTime.toFixed(1))"
@text layer=system tag=debug pos=100%-5,100%-35 anchor=1 size=12 alpha=0.5 text="Game Time: (acgn.gameNow)"
@text layer=system tag=debug pos=100%-5,100%-20 anchor=1 size=12 alpha=0.5 text="Total Time: (acgn.now)"
@text layer=system tag=debug pos=100%-5,100%-2  anchor=1 size=15 alpha=0.5 color=red bold=true text="FPS: (acgn.fps)"
@text layer=system tag=debug pos=10,100%-30  anchor=0,1 size=20 alpha=0.5 color=red bold=true text="Key dt: (Date.now() - acgn.key.time)|100"
@text layer=system tag=debug pos=10,100%-5  anchor=0,1 size=20 alpha=0.5 color=red bold=true text="Key pressed: (acgn.key.pressed)|0"
@return

*exit
@bg       layer=system     id=exit   fill=black         alpha=0.5
@sprite   layer=system     id=exit   x=0.5    y=0.4     scr=exit
@button   layer=sysButton  id=exit   text=✓   size=50   strokeThickness=5     x=30%   y=65%      target=*exit-ok
@button   layer=sysButton  id=exit   text=✗  size=50   strokeThickness=5     x=70%   y=65%      target=*exit-cancel    hover=true

*exit-ok
@AI layer=system id=exit vx=1
@quicksave
@close

*exit-cancel
@clear      id=exit
@goback



@macro name=yoyoyo
    @bg
    @arc
    @text
@endmacro
;hey
;yo
;yoyoyyoyoyoyoyoyo
@iscript
heyheyhey
@endscript

*play
@clear      id=loading
@return