*title
@clear

// @debug

@buttons
@button x=50% y=70%    width=100 height=30 anchor=0.5 target="*start" text="AVG"
@button x=50% y=70%+30 width=100 height=30 anchor=0.5 target="*gamestart" text="STG"
// @button x=50% y=70%+60 width=100 height=30 anchor=0.5 target="*setting" text="設定"
@button x=50% y=70%+60 width=100 height=30 anchor=0.5 target=(acgn.exit) text="離開"
@endbuttons

*setting
@rectangle layer="system" color="red" x=10% y=10% width=80% height=80% alpha=0.5
@buttons system=true
@button x=90% y=90%    width=50 height=30 anchor=0.5 target=(acgn.window.close) text="開始"
@endbuttons

*start|序章
// @history output="true"
@clear layer=button
@bgm storage="BGM074.ogg"
@bg storage="forest"
@fg pos="center" storage="shout"
@dia
// ;@jump target="*debug"
// [wait time=200]
*start|开始
@甲
「我要做遊戲！！！」[w]
@甲 fg="normal"
某一天，我在某知名育兒論壇看到這麼一個貼子。[w]
@甲
怎麼說呢，這一天就是起始，我的世界就因為這個貼子被徹底顛覆了。[w]
@甲
那麼回到正題，到底為神馬我的世界觀被顛覆了呢，原因是我也不知道！[w]
@甲 fg="normal-hand"
我知道的就是，你看！這裏是個鬼城吧。[w]
@甲 fg="normal"
就是那個啦～[l]「GHSOT TWON」[l]YOOOOOOOOOU UNDARSTEND﹖[l]對不起，我的 UNGLISH 不是太好，請多多包涵。[w]
@甲 fg="freeze"
嗯﹖你說錯了﹖[l]咳咳……這……真是何等師太……[l]
@bg storage="ghosttown"
@fg storage="normal"
現在…沒問題了吧﹖[w]
@我
沒問題才怪呢！廢話少說快進主題！[w]
@甲 fg="sad"
對不起嘛……人家只是暖暖場而已啦。[w]
@甲 fg="normal"
那麼，現在你看！這是貨真價實的 GHSOT TWON 啊，所有故事都是從此開始。[w]
@甲 fg="normal2"
那麼再回到那個「我要做3D遊戲！！！」的貼子。[w]
@甲 fg="normal"
反正是經過一番討論後，就是都是嘴巴上動動，沒人幹活的下場而已罷了。[w]
@甲 fg="normal2"
換然之——[l]那個「我要做動畫！！！」的貼子只是浩瀚世界中無數個坑之中最小的一個坑。[w]
@甲 fg="normal"
好了，別吐槽了，你從神馬時候產生了那個貼子的名字叫「我要做世界首富！！！」的錯覺的。[l]從頭到尾都只是「我要做遊戲！！！」罷了！[w]
@甲 fg="normal2"
你說對不對﹖有木有﹖[w]
@甲 fg="normal"
對，那個貼子坑了！[l]所以……這個遊戲也完了。[w]
@甲 fg="normal-hand"
那麼，Hav e nice dey！[l]遊戲結束！[l]Thi ennd！[l]再見！[w]
@我
@font size="96"
坑爹啊！[w]
@我
@font size="96"
摔！！！[w]
@甲 fg="cat"
怕怕……。[l]騙你的啦～反應這麼大心臓病都要給你嚇出來了。[w]
@甲 fg="cat2"
我現在要去換尿布，剛才給一個不小心就(ry。[w]
@clfg
………[lr]
……[lr]
…[w]
@甲 fg="cat2"
我回來了。[w]
@甲
﹖[w]
@甲
啊！[l]你看你真是的！[l]給你嚇得立繪都忘了換了。[w]
@甲 fg="normal"
以後不許把 font size 設成 96 了聽到沒有，不然我要生氣了啊。[w]
// ;----------
// ;显示选择按钮
@buttons
@button y=150 x=50% width=80% height=40 anchor=0.5 target="*sel1-1" text="好吧，用回正常的20。*"
@button y=200 x=50% width=80% height=40 anchor=0.5 target="*sel1-2" text="我就用96！"
@button y=250 x=50% width=80% height=40 anchor=0.5 target="*sel1-3" text="96不行﹖試試69。"
@endbuttons
// ;----------
*sel1-2|世界線 0.000102
@clbutton
@我
@font size="96"
我非要！[w]
@甲 fg="no"
………[lr]
……[lr]
…[w]
@甲
死吧。[w]
@jump target="*death"
// ;----------
*sel1-3|世界線 0.000103
@clbutton
@我
@font size="69"
嘿。[l]這個怎樣﹖[w]
@甲 fg="shy"
@font size="8"
色狼……[w]
@我
@font size="69"
你說神馬﹖[w]
@我
@font size="69"
我沒聽到。[w]
@甲
@font size="10"
色狼……！[w]
@我
@font size="69"
大聲點！[w]
@甲 fg="shy2"
@font size="12"
色狼……！[w]
@我
@font size="96"
聽～[w]
@我
@font size="96"
不～[w]
@我
@font size="96"
見～[w]
@我
@font size="96"
！[w]
@我
米糕……69打錯打成96了……[w]
@甲 fg="no"
………[lr]
……[lr]
…[w]
@甲
死吧。[w]
@jump target="*death"
// ;----------
*sel1-1|世界線 0.000101
@clbutton
@我
我看你要黑化了，還是20吧。[w]
@甲 fg="normal2"
哦……[l]你選擇不進入世界線 0.000102 和 0.000103 啊，[l]那麼繼續吧。[w]
@甲 fg="normal"
剛剛講到哪來的個說﹖[w]
@甲
對對！就是換尿布那裏……[l]
@font size="40"
@fg storage="shout"
才怪！[w]
@甲 fg="shy"
@font size="12"
嘛……[l]也不能說你錯啦……[l]再回去一點……[w]
@甲 fg="normal"
倒帶倒帶。[l]對！就是那裏！[l]講到「我要做神一般的農夫！！！」那個貼子坑了的那裏。[w]
@甲
即然貼子坑了嘛…[l]大家補番的補番，[l]打Gal的打Gal，[l]育嬰的育嬰，[l]現充的也照樣在那裏現充。[w]
@甲 fg="angry"
那麼我呢﹖[l]我是神馬！[l]我立坑無數當不會給這麼一個小坑給天窗了。[w]
@甲 fg="shout"
於是我！[l]打算策劃、[l]程序、[l]劇本、
@font size="18"
@p
CG、[l]立繪、[l]背景、
@font size="16"
@p
音效、[l]原聲、[l]配音、
@font size="14"
@p
地圖、[l]建模、
@font size="12"
@p
分鏡、[l]主催、
@font size="10"
@p
坐着不幹活、
@font size="8"
@p
唉唷想不出來了、
@font size="6"
@p
反正字這麼小你也看不清楚、
@font size="4"
@p
瞎編好了、
@font size="2"
@p
臥槽、忘了記錄可以看得見、
@font size="1"
@p
嘛…不管了、[l]
@resetfont
全部包辨！[w]
@甲 fg="normal"
我想起來 SIA 是一個好畫圖工具，[l]於是我上網谷度了一下。[l]這個百歌真不錯，出來了 10,086,233 個結果。[w]
@甲 fg="normal2"
我隨便點了個超·連結，[l]進去了。[w]
@甲 fg="shout"
我是說進去了你聽懂沒有！[l]是進、去、了。[w]
@甲 fg="shy"
討厭、[l]又往歪的地方去想了。[w]
@甲 fg="shout"
我是說進去了！[l]進去了連結裏面了！[l]進去了就再也出不來了！[l]聽懂木有﹖小笨蛋。[w]
@甲
啥咪！﹖[l]沒聽懂﹖[w]
@甲 fg="normal"
就～是～說～。[l]我進入了電子世界裏了，你補過這麼多番總有看過類似的情節吧。[w]
@甲 fg="normal2"
就像進入了刀劍鬼域啊、[l]機動攻殼戰士啊、[l]團長的巨大蟋蟀啊、[l]之如此類的世界一樣。[w]
@甲
你猜我第一步做的是神馬﹖[w]
@甲
我當然是把自己的權限先全改為777了！[w]
@甲 fg="normal"
我在那個世界裏成為全知全能的神了！[w]
@甲
然後我先登入到 SERN 的系統裏，[l]別擔心啦～[l]我對時間旅行沒有興趣，[l]只是冒充某個倒楣主管給他手下各發了一封 emial 而已罷了。[w]
@甲
你想知道那是神馬 eimal ﹖[l]求求我吧。[w]
@甲
………[lr]
……[lr]
…[w]
@甲
﹖[w]
@甲 fg="normal2"
神馬﹖[l]你說沒有選項求不了我。[w]
@甲
真麻煩……[l]弄選項太麻煩了直接當你已經求了我吧。[w]
@我
我揍你啊！[w]
@甲 fg="angry"
喂！你又犯規亂進來了！[w]
@甲 fg="normal"
咳咳……[l]那麼我就告訴你這是一封神馬 emali 吧。[w]
@bg clfg="1" hidemes="1" storage="email"
@w
@fg pos="center" storage="shy"
@甲
嘿嘿…[l]這封 Yi-mail 不錯吧，我花了三個小時打出來的啊！[w]
@甲 fg="normal"
然後呢然後呢，[l]第二天居然有人回信給我了。[w]
@甲 fg="normal2"
你也不相信吧，[l]我也不相信啊，[l]那個 John-Smith 實在是太笨了，居然回信了。[w]
@甲
咦﹖[l]你問那個囧·史密斯怎麼看得懂中文﹖[w]
@甲
嘛……[l]Don Mine Don Mine！[l]細節別去計較會活得更開心啊。[w]
@甲 fg="normal"
當時我是這麼想的，[l]那個囧·史密斯實在是太笨了。[w]
@甲 fg="angry"
結果給坑了啊！[l][fg storage=shout]把姐給坑了啊有木有！[w]
@甲
他回信了啊，還附帶遊戲成品啊！[w]
@甲 fg="normal"
現在想想也是理所當然的，[l]某個磚家說你可以給狗肉包子訓練牠做事情，[l]可是當某一天你不給牠肉包子叫牠幹活，[l]牠就不睬你了。[w]
@甲
而人、[l]就是你跟我跟其他那70億人，[l]是學不乘的。[w]
@甲 fg="normal2"
比如說，[l]我叫你幫我搬塊石頭過來然後給你一百塊，[l]你會像隻狗一樣去幹。[w]
@甲
然後我叫你再搬一塊再給你一百塊，[l]可這次你般完就不給你錢了。[w]
@甲 fg="normal"
那麼我下次再叫你去做的話，[l]你還是會去做啊，[l]心理想着這一百塊錢不拿白不拿，[l]跟本沒想到我沒打算給你。[w]
@甲 fg="angry"
你看、[l]就是這個畜生不如的我，[l]還是去點了啊！[w]
@甲 fg="shout"
我、打、開、了、那、個、附、件、了、啊！[w]
@甲 fg="normal"
結果，[l]我就給關在小黑屋里了。[w]
@甲 fg="sad"
叫天不應、[l]叫地不聞。[w]
@甲 fg="sad2"
那叫人聽者傷心、[l]聞者流淚。[w]
@甲 fg="normal"
嘛…[l]不過在小黑屋裏的權限還是777。[w]
@甲 fg="shout"
不過沒網絡啊親！[l]補不了番啊！[l]推不了黃油啊！[l]不能把我的硬盤塞得滿滿的，[l]塞得[font color=0xFF0000]紅[resetfont]的天數比[font color=0x0000FF]藍[resetfont]的天數還要多啊。[w]
@甲 fg="angry"
太苦逼了。[w]
@甲 fg="normal"
這我都忍了。[l]那個天殺的阿囧、[l]把我關在小黑屋裏開始研究我了！這個才真是傷不起啊！[w]
@甲 fg="angry"
我怒了！[w]
@甲 fg="normal"
我花了七七四十八天…[w]
@我
四十九天。[w]
@甲
好…好…[l]我花了七七四十九天寫了個 "Thi choosen 0ne" 。[w]
@甲
再用它大戰了八八九十…[l]咳咳…九九八十一天，[l]終於逃離了小黑屋。[w]
@甲 fg="normal2"
逃離了小黑屋後。[w]
@甲
世界滅亡了。[w]
@甲 fg="shout"
天啊，那裏的網絡沒接上 Intrenet 啊！[w]
@甲 fg="normal"
我瞬間崩潰了，[l]然後我又收到了系統信息。[w]
@甲
大概是這樣的[w]
@scr
遊戲開發妹子泥好！[lr]
@r
灰常對不起，本來這是最終關的。[lr]
可是不知道為神馬系統出錯，[l]233 數據側漏了，[l]變成 0 了。[lr]
就這樣，[l]你把第 233 關的 BOSS 給滅了。[lr]
直接讓你走又是不可能的。[lr]
那麼現在讓你打 lvl1 的怪又好像太簡單了。[lr]
於是我把所有怪的血都乘以 233 了。[lr]
嗯，你的任務痕簡單，就是把總共 233 關全部打完。[lr]
贏了你就能走了。[lr]
我在 lvl1 為你準備了一個隊友。[lr]
@r
祝您在總數 233 關的戰鬥旅途愉快！[w]
@dia
@我
…[w]
@我
…[w]
@我
…[w]
@甲 fg="normal"
嗯！[l]你就是那個倒楣鬼！[w]
@甲
我們一起愉快的一起組隊拖怪吧。[w]
@我
啊…看來我最近睡眠不足都有幻視幻聽了。[l]先去睡一覺吧，[l]睡醒一定神馬都灰復正常了。[w]
@我
zzzzzzzzzzZ[w]
@我
zzzzzzzzzzZ[w]
@我
zzzzzzzzzzZ[w]
@甲 fg="angry"
@se storage="punch"
！[w]
@甲
@se storage="punch"
起床！[w]
@甲 fg="normal"
年輕人啊，不要逃避要勇於面對現實啊！[w]
@甲 fg="normal2"
不相信你看，右上角的叉是不是不見了。[w]
@我
明明還在，睜眼說瞎話。[w]
@甲 fg="normal"
嘛……[l]你就當它消失了，[l]反正你跟我一樣是離不開這個世界了。[l][fg storage=shy][font size=5]小聲…其實點那個叉就行了。[w]
@我 fg="normal"
不不不…[l]你別唬弄我，[l]我媽喊我回家寫暑期作業呢。[w]
@我
八月三十一號前沒寫完要 loop 的。[w]
@甲 fg="normal-hand"
暑期作業神馬的我來幫你寫，[l]怎麼樣﹖[w]
@我
真的﹖[w]
@甲 fg="normal"
嗯！[l]真的！[w]
@我
真的沒騙我﹖[w]
@甲
真的沒騙你。[l]要不再給點殺必死你看﹖[w]
@我
成交！[w]
@甲 fg="laugh"
噢噢噢！組隊打怪囉！[w]
@我
那麼快幫我寫作業和給我看殺必死！[w]
@甲 fg="shy"
你好壞…！[w]
@甲 fg="shy2"
殺必死就現在給你看好了。[w]
@甲 fg="swimwear"
怎麼樣…﹖[w]
@我
噢噢噢，[l]也沒甚麼，不就是死庫水罷了，[l]這麼一看還真像蘿莉啊。[w]
@我
對不起我貧乳巨乳都不是我的菜，[l]我是萌中乳的！[w]
@甲 fg="angry"
哼！[w]
@甲 fg="shout"
不讓你看了！[w]
@甲 fg="normal"
還有……[l]暑期作業現在幫不了你做。[l]得打完怪才能幫你做，[l]你看、[l]我現在被關在這裏、[l]一看不見你的暑期作業、[l]二沒得上網查資料、[l]三我現在也不想做。[w]
@甲 fg="normal2"
所以就等打完怪再幫你做吧。[w]
@我
好吧……。[l][font size=12]總感覺被騙了……。[w]
@甲 fg="evil"
嘿、計画通り。[w]
@甲 fg="normal"
那麼、出發吧。[w]
@我
出發去哪啊！到現在背景還是那個 email 啊！[w]
@甲 fg="normal2"
好好好、我們先回到那個 GHOST TOWN 裏。[w]
@bg storage="ghosttown"
@甲 fg="normal"
怎麼樣﹖[l]快吧﹖[l]一秒鐘切換。[w]
@甲
現在我們回到這裏了，[l]我可把這裏都逛熟了，[l]看到沒有﹖[l]那輛馬車。[w]
@我
看是看到了……[l]可這裏有差不多十幾輛馬車啊。[w]
@我
而且這說是馬車，[l]跟本沒有馬不是嗎﹖[w]
@甲 fg="normal2"
你就不能少吐點槽嗎﹖[l]最近那一輛，[l]我右後方那一輛。[w]
@我
嗯，看到了。[l]那又怎麼樣。[w]
@甲 fg="normal"
那裏神馬都沒有。[w]
@我
矮油，我又想揍人了。[w]
@甲 fg="normal2"
我是說那輛馬車的後面的後面的後面的後面的後面那一輛。[w]
@我
你直接說最後一輛不行嗎。[w]
@甲
Don Mine Don Mine！[w]
@甲
那裏有一隻怪，[l]我打不死。[w]
@甲 fg="normal"
我在想你是不是能打死它。[w]
@我
我當然能…[l]才怪呢！[w]
@我
你都打不死我怎麼才能打死它啊，[l]更何況那封系統消息不是說它的血槽漲了 233 倍了嗎！[w]
@我
泥媽這不是叫我去送死嗎。[w]
@甲 fg="evil"
切！[l]沒用的家伙。[w]
@我
喂！[l]你剛才咬牙了吧。[l]我看見了啊，別少看玩家的能力啊。[w]
@甲 fg="cat"
嘛……[l]別生氣別生氣，[l]你先過去看看吧。[w]
@我
我不要。[w]
@甲 fg="normal"
我跟你說啊，[l]那隻怪物好可怕，[l]怎麼打都打不死，[l]全身佈滿謎樣盔甲，[l]血槽又厚，[l]回血又快，[l]還會變身，[l]總之一言蔽之「怪物」！[w]
@我
那就更不要了。[w]
@甲 fg="normal2"
你不要劇情走不下去啊。[l]後面痕多有趣的劇情的玩不了啊。[w]
@我
好吧…[w]
@我
嘿。[w]
@clfg
走走走………[lr]
………[lr]
……[lr]
…[w]
@fg layer="1" pos="left" storage="slime"
@我
咳咳……[l]這個……[lr]
該不會是那個從某某塔裏有名的初級怪物——[lr]史萊姆吧﹖[w]
@fg pos="right" storage="normal"
@甲
對對對，就是那個叫史萊姆的東西！[w]
@我 fg="normal"
對你個頭啊！[l]你是怎麼給把第 233 關的魔王打敗的啊！[l]這隻是最弱的史萊姆啊！！[l]你該不會是騙了魔王讓他幫你還1億5680萬4000債務才打敗他的吧！[w]
@甲 fg="cat"
哎嘿。[w]
@我
哎嘿你個頭啊！[l]快去打他啊，[l]你跟本沒用心去打吧。[w]
@甲 fg="sad"
我打給你看，[l]可是我死了你要替我收屍啊。[w]
………[lr]
……[lr]
…[w]
@甲 fg="normal"
打、打、打、[l]打個大冬瓜。[w]
@se storage="punch"
@fg layer="1" storage="slime-2"
遊戲開發妹子打了史萊姆一下。[lr]
@fg storage="laugh"
史萊姆被扣了 1 滴血，史萊姆還剩下 232 滴血。[lr]
@fg layer="1" storage="slime"
史萊姆回復了 1 滴血，史萊姆原地復活了。[lr]
@fg storage="laugh-freeze"
史萊姆扭了一下，變得更噁心了。[w]
輪到史萊姆的回合。[w]
@se storage="punch"
@fg storage="sad"
史萊姆打了遊戲開發妹子一下。[lr]
@fg storage="sad2"
遊戲妹子被扣了 1 滴血，遊妹子還剩下 99 滴血。[lr]
@fg storage="normal"
妹子回復了 1 滴血，妹原地復活了。[lr]
@fg storage="freeze"
史萊姆又扭了一下，變得更加噁心了。[w]
@甲 fg="angry"
你看！[w]
@甲
打它多少下都是這樣，[l]跟本打不死！[w]
@我 fg="normal"
嘛……[l]我就不吐槽剛才的系統對白了，這都怪你！[l]要不是你先打倒魔王讓系統發瘋了，[l]這隻史萊姆的血就只有 1 了！[l]1 下就能打死了！[l]現在你打它多少下它都會原地復活啊！[w]
@甲 fg="normal2"
對啊對啊！[l]那麼到你了！[w]
@我
說不定我的攻擊力有 2 呢！[l]我打給你看！[w]
@clfg layer="0"
@我
看我的！[w]
@我
打、打、打、[l]打個大南瓜！[w]
@se storage="punch"
@fg layer="1" storage="slime-2"
玩家打了史萊姆一下。[lr]
史萊姆被扣了 1 滴血，史萊姆還剩下 232 滴血。[lr]
@fg layer="1" storage="slime"
史萊姆回復了 1 滴血，史萊姆原地復活了。[lr]
史萊姆再次扭了一下，變得超級噁心了。[w]
輪到史萊姆的回合。[w]
@se storage="punch"
史萊姆打了玩家一下。
@quake time="500"
@lr
玩家被扣了 99 滴血，玩家還剩下 1 滴血。[lr]
玩家回復了 1 滴血，玩家現在有 2 滴血。[lr]
史萊姆果然又扭了一下，變得超級無敵噁心了。[w]
@我
這個……[l]有點問題。[w]
@我
不對啊！[l]為神馬你是扣 1HP 而我是[font size=48]99HP[resetfont]啊啊啊！[w]
@我
這不公平啊啊啊。[w]
@fg layer="2" pos="center" storage="message"
史萊姆遞了一張卡片過來。[w]
…[lr]
…[lr]
…[w]
@clfg layer="2"
@我
死變態！[l]欠扁！[w]
@甲 fg="laugh"
哇哈哈哈哈哈、哇哈哈哈哈哈、哇哈哈哈哈哈、笑死我了。[w]
@甲
你一點都沒用嘛……！[w]
@我 fg="normal"
嘿！[l]不要緊，一計不成，另計又生，看我的！[w]
玩家把地上的草收割了。[lr]
系統就不去吐槽玩家是用神馬割草了。[lr]
玩家把收割的草吃了。[w]
@我
難吃。[w]
@甲 fg="normal2"
廢話！[w]
玩家原地復活了。[w]
@我 fg="normal"
噢噢噢，[l]是難吃了點，可效果極佳，[l]現在只要999，欲購從速。[w]
@我
嘿嘿嘿，[l]我還要試一次，[l]說不定這傢伙對物理攻擊免疫，[l]那麼這種時候就該用魔法攻擊了。[w]
@甲 fg="normal2"
哼，表等會又逃回來啊。[w]
@clfg layer="0"
@我
打、打、打[l]、打個大北瓜。[w]
@fg layer="2" storage="fireball"
玩家搓了個火球。[lr]
玩家把火球丢向史萊姆。[lr]
史萊姆把火球吃下肚子了。[lr]
史萊姆再把火球吐出來。[lr]
@clfg
@fg layer="2" storage="fireball-2"
火球變成一灘痕噁心的嘔吐物。[w]
輪到史萊姆的回合了。[w]
@se storage="punch"
史萊姆打了玩家一下。[quake time=500][lr]
系統說打這麼多字好麻煩啊。[lr]
反正就是玩家又被扣了 99 滴血，[l]以上。[w]
@甲 fg="laugh"
哇哈哈哈哈哈、[l]哇哈哈哈哈哈、[l]哇哈哈哈哈哈、[l]這是神馬！[w]
@甲
這是神馬啊餵！[l]這灘像咖哩的大便拿去餵給神馬都不肯吃呢！[w]
@我 fg="normal"
大便味咖哩腫麼了啊！[l]腫麼了啊。[w]
@clfg layer="2"
@我
到你了！[l]我試了兩次了！[l]這次到你了！[w]
@甲 fg="normal2"
好！[l]到我了！[l]那麼……我應該做神馬﹖[w]
@甲 fg="normal"
甚本上你來之前我把能想到的方法全都試過 233 遍了，[l]所以再試下去它也還是這個樣子的啊。[w]
@我
那麼你說說你之前試些神馬辨法。[w]
@甲 fg="normal2"
唔……[l]丢火球是試過的。[w]
@我
臥槽！[l]你試過怎麼不跟我講！[w]
@甲 fg="cat"
哎嘿，[l]你沒問人家嘛，[l]而且說不定你的火球比我的大啊。[l]雖然事實上跟我一樣大而已罷了。[w]
@甲 fg="normal2"
還有嘛……[l]用劍砍它、[l]拿草餵它、[l]拿石頭砸它、[l]跟它說故事、[l]跟它玩石頭剪刀布、[l]拿樹枝逗它玩、[l]試着跟它講微積分、[l]在它旁邊小解、[l]跟它討論亞瑟王與蘭斯洛特的友好♂關係、[l]踢它、[l]踩它、[l]推它、[l]拉它，[l]當然冰球火球雷球毒球神馬的都丢過了，[l]反正就是對它做這種事情那種事情。[w]
@甲 fg="evil"
哦！[l]還有把它切成一塊塊的痕好玩的啊，[l]它會一個一個的會慢慢爬回來聚在一起，[l]看到你絕對會想吐的，[l]想看嗎﹖[w]
@我 fg="normal"
呃……[l]還是算了。[w]
@我
這不對！[l]這只是隻最低級史萊姆吧，[l]就算打死了也最多就給 1EXP 吧，[l]而且怎麼看都不像會掉下一關的鑰匙之類的吧，[l]直接去 lvl2 不行嗎，[l]話說你除了這裏還看過其他地方嗎。[w]
@甲 fg="cat2"
華生、你發現了萌點，[l]我們去探索這個倘大的未知世界吧。[w]
@甲 fg="normal"
那麼，[l]再見了，[l][fg layer=1 storage=slime-2]最低級的史萊姆。[w]
@clfg layer="1"
@fg pos="center" storage="slime-2"
@我
等等，[l]這隻史萊姆好像對某個詞語有反應。[w]
@我 fg="slime-3"
低級。[w]
@我 fg="slime-4"
低級。[w]
@我 fg="slime-5"
低級。[w]
@我 fg="slime-4"
高級。[w]
@我 fg="slime-5"
低級。[w]
@我 fg="slime-4"
高級。[w]
@我 fg="slime-3"
高級。[w]
@我 fg="slime-4"
低級。[w]
@我
噢噢噢，[l]你跟它說低級它會生氣哦。[w]
@我 fg="slime-5"
低級低級低級[fg time=50 storage=slime-6]低級低級低級低級低級[fg time=50 storage=slime-7]低級低級低級低級低級低級[fg time=50 storage=slime-8]低級低級低級低級……[w]
史萊姆的忿怒達到了 233 點。[lr]
@clfg
@fg storage="amiba"
史萊姆變身了。[lr]
史萊姆變成一隻阿米巴了。[lr]
阿米巴開始向玩家追殺了。[w]
@se storage="punch"
@quake time=500
阿米巴打了玩家 1 下。[lr]
@se storage="punch"
@quake time=500
阿米巴打了玩家 1 下。[lr]
@se storage="punch"
@quake time=500
阿米巴打了玩家 1 下。[lr]
@se storage="punch"
@quake time=500
阿米巴打了玩家 1 下。[lr]
@se storage="punch"
@quake time=500
阿米巴打了玩家 1 下。[lr]
@se storage="punch"
@quake time=500
阿米巴打了玩家 1 下。[lr]
@se storage="punch"
@quake time=500
阿米巴打了玩家 1 下。[lr]
阿米巴停止了向玩家單方面的屠殺。[lr]
玩家很 H 的 Point 被扣了 99.999 點了。[lr]
玩家恢復了 1 個 H Point 。[lr]
玩家現在有 1.001 個 H Point 。[w]
輪到玩家了。[w]
// ;----------
// ;显示选择按钮
*sel2
@buttons
@button y=150 x=50% width=80% height=40 anchor=0.5 target="*sel2-1" text="繼續講它低級。"
@button y=200 x=50% width=80% height=40 anchor=0.5 target="*sel2-2" text="講臥槽。"
@button y=250 x=50% width=80% height=40 anchor=0.5 target="*sel2-3" text="逃啊啊啊啊！*"
@endbuttons
// ;----------
*sel2-1
@clbutton
@我
低級！[w]
@se storage="punch"
@quake time=500
阿米巴又打了玩家一下。[w]
@bg time="50" clfg="1" hidemes="1" method="crossfade" storage="red"
@bg storage="dead"
@w
@gotostart ask="false"
@jump target="*death"
// ;----------
*sel2-2
@clbutton
@我
臥槽！[w]
阿米巴沒聽懂你說神馬。[w]
@jump target="*sel2"
// ;----------
*sel2-3
@clbutton
@clfg layer=all
玩家逃離了戰場。[w]
@quake
@bg storage=sewer
@我
[font size=96]
逃啊啊啊啊啊！[w]
@bg storage=forest
@我
[font size=96]

啊啊啊啊啊！[w]
@我
@bg storage=sky-b
[font size=96]
啊啊啊啊啊！[w]
@我
@bg storage=sky
@quake time=0
這裏是哪裏哦。[w]
@fg pos=center storage=normal2
@甲
話說提醒你一下，[l]你把頭轉回去看一下，[l]會有有趣的事情發生哦。[w]
// ;----------
// ;显示选择按钮
*sel3
@buttons
@button y=150 x=50% width=80% height=40 anchor=0.5 target="*sel3-1" text="扭頭"
@endbuttons
// ;----------
*sel3-1
@clbutton
@fg pos=center storage=amiba
史萊姆還在追過來。[w]
@clfg
@quake
@我
[font size=48]
逃啊啊啊啊啊！[w]
@我
[font size=48]
啊啊啊啊啊！[w]
@我
[font size=48]
啊啊啊啊啊！[w]
@我
[font size=48]啊
[font size=42]啊
[font size=40]啊
[font size=38]啊
[font size=36]啊啊
[font size=34]啊啊
[font size=32]啊啊
[font size=30]啊啊
[font size=28]啊啊啊
[font size=26]啊啊啊
[font size=24]啊啊啊
[font size=22]啊啊啊
[font size=20]啊啊啊啊
[font size=19]啊啊啊啊
[font size=18]啊啊啊啊
[font size=17]啊啊啊啊
[font size=16]啊啊啊啊啊
[font size=15]啊啊啊啊啊
[font size=14]啊啊啊啊啊
[font size=13]啊啊啊啊啊
[font size=12]啊啊啊啊啊啊
[font size=11]啊啊啊啊啊啊
[font size=10]啊啊啊啊啊啊
[font size=9]啊啊啊啊啊啊
[font size=8]啊啊啊啊啊啊啊
[font size=7]啊啊啊啊啊啊啊
[font size=6]啊啊啊啊啊啊啊
[font size=5]啊啊啊啊啊啊啊
[font size=4]啊啊啊啊啊啊啊啊
[font size=3]啊啊啊啊啊啊啊啊
[font size=2]啊啊啊啊啊啊啊啊
[font size=1]啊啊啊啊啊啊啊啊[w]
@我
就這樣……[l]我被關到這麼一個鬼地方了。[w]
@我
剩餘血量 1.001/100 ，[lr]
剩餘魔法 ⑨/10 ，[lr]
所在關數 1/233。[w]
謝謝遊戲，[l]這次真的結束了。[lr]
つづく…[l]？[w]
@jump target=0
// ;-----------
*death
@se storage="kill.ogg"
@bg storage="red"
@wait until=50
@bg storage="dead"
@w
@jump target=0

*gamestart
@clear layer=button
@keySTG
@set gameState=stg

@bgm storage="BGM074.ogg"

@text layer=fg pos=100%-5,50  anchor=1,0 size=15 alpha=0.5 color=green bold=true text="life: (acgn.life)"
@text layer=fg pos=100%-5,65  anchor=1,0 size=15 alpha=0.5 color=green bold=true text="point: (acgn.point)"

@player template=player1 x=50% y=100%-50 player=1

// 東

@enemy template=fire x=50%-32*0 y=50%-32*5

@enemy template=fire x=50%-32*4 y=50%-32*4
@enemy template=fire x=50%-32*3 y=50%-32*4
@enemy template=fire x=50%-32*2 y=50%-32*4
@enemy template=fire x=50%-32*1 y=50%-32*4
@enemy template=fire x=50%-32*0 y=50%-32*4
@enemy template=fire x=50%+32*1 y=50%-32*4
@enemy template=fire x=50%+32*2 y=50%-32*4
@enemy template=fire x=50%+32*3 y=50%-32*4
@enemy template=fire x=50%+32*4 y=50%-32*4

@enemy template=fire x=50%-32*0 y=50%-32*3

@enemy template=fire x=50%-32*4 y=50%-32*2
@enemy template=fire x=50%-32*3 y=50%-32*2
@enemy template=fire x=50%-32*2 y=50%-32*2
@enemy template=fire x=50%-32*1 y=50%-32*2
@enemy template=fire x=50%-32*0 y=50%-32*2
@enemy template=fire x=50%+32*1 y=50%-32*2
@enemy template=fire x=50%+32*2 y=50%-32*2
@enemy template=fire x=50%+32*3 y=50%-32*2
@enemy template=fire x=50%+32*4 y=50%-32*2

@enemy template=fire x=50%-32*4 y=50%-32*1
@enemy template=fire x=50%-32*0 y=50%-32*1
@enemy template=fire x=50%+32*4 y=50%-32*1

@enemy template=fire x=50%-32*4 y=50%-32*0
@enemy template=fire x=50%-32*3 y=50%-32*0
@enemy template=fire x=50%-32*2 y=50%-32*0
@enemy template=fire x=50%-32*1 y=50%-32*0
@enemy template=fire x=50%-32*0 y=50%-32*0
@enemy template=fire x=50%+32*1 y=50%-32*0
@enemy template=fire x=50%+32*2 y=50%-32*0
@enemy template=fire x=50%+32*3 y=50%-32*0
@enemy template=fire x=50%+32*4 y=50%-32*0

@enemy template=fire x=50%-32*4 y=50%+32*1
@enemy template=fire x=50%-32*0 y=50%+32*1
@enemy template=fire x=50%+32*4 y=50%+32*1

@enemy template=fire x=50%-32*4 y=50%+32*2
@enemy template=fire x=50%-32*3 y=50%+32*2
@enemy template=fire x=50%-32*2 y=50%+32*2
@enemy template=fire x=50%-32*1 y=50%+32*2
@enemy template=fire x=50%-32*0 y=50%+32*2
@enemy template=fire x=50%+32*1 y=50%+32*2
@enemy template=fire x=50%+32*2 y=50%+32*2
@enemy template=fire x=50%+32*3 y=50%+32*2
@enemy template=fire x=50%+32*4 y=50%+32*2

@enemy template=fire x=50%-32*1 y=50%+32*3
@enemy template=fire x=50%-32*0 y=50%+32*3
@enemy template=fire x=50%+32*1 y=50%+32*3

@enemy template=fire x=50%-32*2 y=50%+32*4
@enemy template=fire x=50%-32*0 y=50%+32*4
@enemy template=fire x=50%+32*2 y=50%+32*4

@enemy template=fire x=50%-32*4 y=50%+32*5
@enemy template=fire x=50%-32*3 y=50%+32*5
@enemy template=fire x=50%-32*0 y=50%+32*5
@enemy template=fire x=50%+32*3 y=50%+32*5
@enemy template=fire x=50%+32*4 y=50%+32*5

@se storage=fire
@wait until=5000
@iscript
for (var i = 0; i < acgn.stage.sprite.children.length; i++) {
    var sprite = acgn.stage.sprite.children[i];
    if (sprite.type === 'enemy') sprite.spriteState = 'dead';
};
@endscript

// 東

// 方

@enemy template=fire2 x=50%-32*0 y=50%-32*5

@enemy template=fire2 x=50%-32*4 y=50%-32*4
@enemy template=fire2 x=50%-32*3 y=50%-32*4
@enemy template=fire2 x=50%-32*2 y=50%-32*4
@enemy template=fire2 x=50%-32*1 y=50%-32*4
@enemy template=fire2 x=50%-32*0 y=50%-32*4
@enemy template=fire2 x=50%+32*1 y=50%-32*4
@enemy template=fire2 x=50%+32*2 y=50%-32*4
@enemy template=fire2 x=50%+32*3 y=50%-32*4
@enemy template=fire2 x=50%+32*4 y=50%-32*4

@enemy template=fire2 x=50%-32*1 y=50%-32*3
@enemy template=fire2 x=50%-32*1 y=50%-32*2
@enemy template=fire2 x=50%-32*2 y=50%-32*1
@enemy template=fire2 x=50%-32*2 y=50%-32*0
@enemy template=fire2 x=50%-32*3 y=50%+32*1
@enemy template=fire2 x=50%-32*3 y=50%+32*2
@enemy template=fire2 x=50%-32*4 y=50%+32*3
@enemy template=fire2 x=50%-32*4 y=50%+32*4

@enemy template=fire2 x=50%-32*0 y=50%-32*2
@enemy template=fire2 x=50%+32*1 y=50%-32*2
@enemy template=fire2 x=50%+32*2 y=50%-32*2
@enemy template=fire2 x=50%+32*3 y=50%-32*2

@enemy template=fire2 x=50%+32*3 y=50%-32*1
@enemy template=fire2 x=50%+32*3 y=50%-32*0
@enemy template=fire2 x=50%+32*3 y=50%+32*1
@enemy template=fire2 x=50%+32*3 y=50%+32*2
@enemy template=fire2 x=50%+32*3 y=50%+32*3
@enemy template=fire2 x=50%+32*3 y=50%+32*4

@enemy template=fire2 x=50%+32*2 y=50%+32*4
@enemy template=fire2 x=50%+32*1 y=50%+32*4

@se storage=fire
@wait until=5000
@iscript
for (var i = 0; i < acgn.stage.sprite.children.length; i++) {
    var sprite = acgn.stage.sprite.children[i];
    if (sprite.type === 'enemy') sprite.spriteState = 'dead';
};
@endscript

// 方

// 坦

@enemy template=fire2 x=50%-32*3 y=50%-32*5
@enemy template=fire2 x=50%-32*3 y=50%-32*4
@enemy template=fire2 x=50%-32*3 y=50%-32*3
@enemy template=fire2 x=50%-32*3 y=50%-32*2
@enemy template=fire2 x=50%-32*3 y=50%-32*1
@enemy template=fire2 x=50%-32*3 y=50%-32*0
@enemy template=fire2 x=50%-32*3 y=50%+32*1
@enemy template=fire2 x=50%-32*3 y=50%+32*2
@enemy template=fire2 x=50%-32*3 y=50%+32*3
@enemy template=fire2 x=50%-32*3 y=50%+32*4

@enemy template=fire2 x=50%-32*4 y=50%-32*1
@enemy template=fire2 x=50%-32*2 y=50%-32*1

@enemy template=fire2 x=50%-32*4 y=50%+32*5
@enemy template=fire2 x=50%-32*2 y=50%+32*3

// ^^^ 土 vvv 日

@enemy template=fire2 x=50%-32*0 y=50%-32*4
@enemy template=fire2 x=50%+32*1 y=50%-32*4
@enemy template=fire2 x=50%+32*2 y=50%-32*4
@enemy template=fire2 x=50%+32*3 y=50%-32*4

@enemy template=fire2 x=50%-32*0 y=50%-32*3
@enemy template=fire2 x=50%+32*3 y=50%-32*3
@enemy template=fire2 x=50%-32*0 y=50%-32*2
@enemy template=fire2 x=50%+32*3 y=50%-32*2

@enemy template=fire2 x=50%-32*0 y=50%-32*1
@enemy template=fire2 x=50%+32*1 y=50%-32*1
@enemy template=fire2 x=50%+32*2 y=50%-32*1
@enemy template=fire2 x=50%+32*3 y=50%-32*1

@enemy template=fire2 x=50%-32*0 y=50%-32*0
@enemy template=fire2 x=50%+32*3 y=50%-32*0
@enemy template=fire2 x=50%-32*0 y=50%+32*1
@enemy template=fire2 x=50%+32*3 y=50%+32*1
@enemy template=fire2 x=50%-32*0 y=50%+32*2
@enemy template=fire2 x=50%+32*3 y=50%+32*2

@enemy template=fire2 x=50%-32*0 y=50%+32*3
@enemy template=fire2 x=50%+32*1 y=50%+32*3
@enemy template=fire2 x=50%+32*2 y=50%+32*3
@enemy template=fire2 x=50%+32*3 y=50%+32*3

// ^^^ 日 vvv 一

@enemy template=fire2 x=50%-32*1 y=50%+32*5
@enemy template=fire2 x=50%-32*0 y=50%+32*5
@enemy template=fire2 x=50%+32*1 y=50%+32*5
@enemy template=fire2 x=50%+32*2 y=50%+32*5
@enemy template=fire2 x=50%+32*3 y=50%+32*5
@enemy template=fire2 x=50%+32*4 y=50%+32*5

@se storage=fire
@wait until=5000
@iscript
for (var i = 0; i < acgn.stage.sprite.children.length; i++) {
    var sprite = acgn.stage.sprite.children[i];
    if (sprite.type === 'enemy') sprite.spriteState = 'dead';
};
@endscript

// 坦

// 克

@enemy template=fire2 x=50%-32*0 y=50%-32*5
@enemy template=fire2 x=50%-32*4 y=50%-32*4
@enemy template=fire2 x=50%-32*3 y=50%-32*4
@enemy template=fire2 x=50%-32*2 y=50%-32*4
@enemy template=fire2 x=50%-32*1 y=50%-32*4
@enemy template=fire2 x=50%-32*0 y=50%-32*4
@enemy template=fire2 x=50%+32*1 y=50%-32*4
@enemy template=fire2 x=50%+32*2 y=50%-32*4
@enemy template=fire2 x=50%+32*3 y=50%-32*4
@enemy template=fire2 x=50%+32*4 y=50%-32*4
@enemy template=fire2 x=50%+32*0 y=50%-32*3

// ^^^ 十 vvv 口

@enemy template=fire2 x=50%-32*3 y=50%-32*2
@enemy template=fire2 x=50%-32*2 y=50%-32*2
@enemy template=fire2 x=50%-32*1 y=50%-32*2
@enemy template=fire2 x=50%-32*0 y=50%-32*2
@enemy template=fire2 x=50%+32*1 y=50%-32*2
@enemy template=fire2 x=50%+32*2 y=50%-32*2
@enemy template=fire2 x=50%+32*3 y=50%-32*2
@enemy template=fire2 x=50%-32*3 y=50%-32*1
@enemy template=fire2 x=50%+32*3 y=50%-32*1
@enemy template=fire2 x=50%-32*3 y=50%-32*0
@enemy template=fire2 x=50%-32*2 y=50%-32*0
@enemy template=fire2 x=50%-32*1 y=50%-32*0
@enemy template=fire2 x=50%-32*0 y=50%-32*0
@enemy template=fire2 x=50%+32*1 y=50%-32*0
@enemy template=fire2 x=50%+32*2 y=50%-32*0
@enemy template=fire2 x=50%+32*3 y=50%-32*0

// ^^^ 口 vvv 儿

@enemy template=fire2 x=50%-32*2 y=50%+32*1
@enemy template=fire2 x=50%-32*2 y=50%+32*2
@enemy template=fire2 x=50%-32*2 y=50%+32*3
@enemy template=fire2 x=50%-32*2 y=50%+32*4
@enemy template=fire2 x=50%-32*3 y=50%+32*5

@enemy template=fire2 x=50%+32*2 y=50%+32*1
@enemy template=fire2 x=50%+32*2 y=50%+32*2
@enemy template=fire2 x=50%+32*2 y=50%+32*3
@enemy template=fire2 x=50%+32*2 y=50%+32*4
@enemy template=fire2 x=50%+32*2 y=50%+32*5
@enemy template=fire2 x=50%+32*3 y=50%+32*5
@enemy template=fire2 x=50%+32*4 y=50%+32*5
@enemy template=fire2 x=50%+32*4 y=50%+32*4

// ^^^ 儿

@se storage=fire
@wait until=5000
@iscript
for (var i = 0; i < acgn.stage.sprite.children.length; i++) {
    var sprite = acgn.stage.sprite.children[i];
    if (sprite.type === 'enemy') sprite.spriteState = 'dead';
};
@endscript

// 克

// 幻

@enemy template=fire2 x=50%-32*2 y=50%-32*5
@enemy template=fire2 x=50%-32*2 y=50%-32*4
@enemy template=fire2 x=50%-32*3 y=50%-32*3
@enemy template=fire2 x=50%-32*3 y=50%-32*2
@enemy template=fire2 x=50%-32*4 y=50%-32*1
@enemy template=fire2 x=50%-32*4 y=50%-32*0
@enemy template=fire2 x=50%-32*3 y=50%-32*0


@enemy template=fire2 x=50%-32*1 y=50%-32*1
@enemy template=fire2 x=50%-32*2 y=50%-32*0
@enemy template=fire2 x=50%-32*2 y=50%+32*1
@enemy template=fire2 x=50%-32*3 y=50%+32*2
@enemy template=fire2 x=50%-32*3 y=50%+32*3
@enemy template=fire2 x=50%-32*4 y=50%+32*4
@enemy template=fire2 x=50%-32*3 y=50%+32*4
@enemy template=fire2 x=50%-32*2 y=50%+32*4

@enemy template=fire2 x=50%-32*1 y=50%+32*3
@enemy template=fire2 x=50%-32*1 y=50%+32*4
@enemy template=fire2 x=50%-32*1 y=50%+32*5

// ^^^ 幺 vvv 

@enemy template=fire2 x=50%+32*1 y=50%-32*5
@enemy template=fire2 x=50%+32*2 y=50%-32*5
@enemy template=fire2 x=50%+32*3 y=50%-32*5
@enemy template=fire2 x=50%+32*4 y=50%-32*5

@enemy template=fire2 x=50%+32*4 y=50%-32*4
@enemy template=fire2 x=50%+32*4 y=50%-32*3
@enemy template=fire2 x=50%+32*4 y=50%-32*2
@enemy template=fire2 x=50%+32*4 y=50%-32*1
@enemy template=fire2 x=50%+32*4 y=50%-32*0
@enemy template=fire2 x=50%+32*4 y=50%+32*1
@enemy template=fire2 x=50%+32*4 y=50%+32*2
@enemy template=fire2 x=50%+32*4 y=50%+32*3
@enemy template=fire2 x=50%+32*4 y=50%+32*4
@enemy template=fire2 x=50%+32*4 y=50%+32*5

@enemy template=fire2 x=50%+32*3 y=50%+32*5
@enemy template=fire2 x=50%+32*2 y=50%+32*5

@se storage=fire

// 幻

@wait

在世界中央處，光點由虛無中誕生，它沒有任何動作，謹謹發出柔和的光芒浮沉浮載於寂靜當中。[p]
不知過了多少時間，黑暗中升起一簇火燄，散射出比光點耀眼得多的光華。[p]
接着又一簇火燄昇起，再一簇，再一簇，霎時間漆黑一片的世界亮起兩排火燄。[p]
上一排、下一排，中間是那小小不起眼的小光芒。[p]

小光芒開始感到困惑了，這個世界為甚麼會有「我」以外的東西？[p]
此時，黑暗再度被[p]
