const resources = {
    food: 10,
    energy: 10,
    time: 0
};

const scenarios = [
    {//0
        text: "&emsp;&emsp;你們是冒險隊的一員。昨天剛接到一個任務，需要在5天內將蒼穹之石送至隱霧村。<br>&emsp;&emsp;（任務需要在抵達隱霧村時，讓時間≦5且食物和精力≧0。最終根據任務完成度，分成：未完成、部分完成、基本完成、成功完成、完美完成。）<br><br>&emsp;&emsp;現在你們面臨兩個前往隱霧村的路線選擇，請謹慎做出選擇：",
        options: [
            { text: "冒險穿越一片未知的森林，可能遇到危險，但成功穿越可大大縮短路程。",
              consequence: "食物-2，精力-2，時間+1",
              effects: { food: -2, energy: -2, time: +1 },
              challenge: "單腳站立30秒，模擬森林困難的地形。",
              next: 1 },
            { text: "繞過森林，走一條相對安全但漫長的路徑，會消耗更多的時間和資源。",
              consequence: "食物-3，精力-3，時間+2",
              effects: { food: -3, energy: -3, time: +2 },
              challenge: "路途漫長，一起唱一首歌來打發時間吧！",
              next: 2 }
        ]

    },
    {//1
        text: "&emsp;&emsp;你們選擇穿越森林，現在面前有一條湍急的溪流。",
        options: [
            { text: "嘗試建造一個簡易木橋過河，這樣可以快速前進，但可能會有生命危險。",
              consequence: "食物-2，精力-3，時間+1",
              effects: { food: -2, energy: -3, time: +1 },
              challenge: "用紙摺出一座橋。",
              next: 3 },
            { text: "繞過急流，尋找安全的渡河點，但會消耗更多時間。",
              consequence: "食物-3，精力-2，時間+2",
              effects: { food: -3, energy: -2, time: +2 },
              challenge: "路途漫長，想出三個諧音梗來打發時間吧！",
              next: 4 }
        ]
    },
    {//2
        text: "&emsp;&emsp;你們選擇繞過森林，現在面前有一條廣而深的河流。",
        options: [
            { text: "嘗試建造一個簡易木筏，這樣可以快速前進，但可能會有生命危險。",
              consequence: "食物-2，精力-3，時間+1",
              effects: { food: -2, energy: -3, time: +1 },
              challenge: "用紙摺出一艘船。",
              next: 5 },
              { text: "沿著河流走，尋找其他的路線，但會消耗更多時間。",
              consequence: "食物-3，精力-2，時間+2",
              effects: { food: -3, energy: -2, time: +2 },
              challenge: "路途漫長，想出三個諧音梗來打發時間吧！",
              next: 6 }
        ]
    },
    {//3
        text: "&emsp;&emsp;你們成功的建造了一個簡易木橋，並安全的渡過急流，但前方的道路崎嶇陡峭。",
        options: [
            { text: "繼續前行，走這條危險但較短的山路，可能會遇到滑坡或其他自然災害。",
              consequence: "食物-3，精力-3，時間+1",
              effects: { food: -3, energy: -3, time: +1 },
              challenge: "連續做30個開合跳，模擬走陡峭山路的體力消耗。",
              next: 7 },
            { text: "原路返回，另外再尋找一條安全的路線。",
              consequence: "食物-2，精力-2，時間+1",
              effects: { food: -2, energy: -2, time: +1 },
              challenge: "路途漫長，想出三個諧音梗來打發時間吧！",
              next: 8 }
        ]
    },
    {//4
        text: "&emsp;&emsp;你們選擇繞路尋找其他渡過急流的方式，這時發現在前方不遠處有一隻山豬正注視著你們。",
        options: [
            { text: "抽出腰間的長刀將野豬擊殺，這樣可以獲得額外的食物並確保前方的道路安全。",
              consequence: "食物+5，精力-3，時間+1",
              effects: { food: +5, energy: -3, time: +1 },
              challenge: "完成野豬圖案的拼圖，代表成功擊殺野豬。",
              next: 9 },
            { text: "轉身逃跑，確保自己的安全。",
              consequence: "食物-3，精力-3，時間+1",
              effects: { food: -3, energy: -3, time: +1 },
              challenge: "完成三次折返跑，以逃離野豬的攻擊範圍。",
              next: 10 }
        ]
    },
    {//5
        text: "&emsp;&emsp;你們成功的建造了一個簡易木筏，並安全划到對岸。這時，有一位陌生人迎面走來，向你們尋求幫助。",
        options: [
            { text: "幫助他人，義不容辭。",
              consequence: "食物-0，精力-2，時間+1",
              effects: { food: +5, energy: -2, time: +1 },
              challenge: "陌生人：「我捕獵了一隻山豬，請幫我搬回我家。」並送上1/4的野豬肉做為謝禮<br>完成野豬圖案的拼圖，並獲得食物+5。",
              next: 11 },
            { text: "無緣無故，拒不相幫。",
              consequence: "食物-0，精力-0，時間+0",
              effects: { food: -0, energy: -3, time: +1 },
              challenge: "陌生人拔出一把長刀，大怒：「不願意幫忙還不早說，浪費我時間！」<br>完成三次折返跑，逃離陌生人的追殺，精力-3，時間+1。",
              next: 12 }
        ]
    },
    {//6
        text: "&emsp;&emsp;你們選擇沿著河流走，這時發現前方有一個山洞。",
        options: [
            { text: "在山洞裡休息一陣子再繼續上路，確保有足夠的精力應對後續可能的突發狀況。",
              consequence: "食物-2，精力+3，時間+2",
              effects: { food: -2, energy: +3, time: +2 },
              challenge: "休息的過程中大家相互聊天。<br>一位隊員一口氣說出其他成員的名字。",
              next: 13 },
            { text: "冒險探索這個未知的山洞，希望能找到捷徑。",
              consequence: "食物-2，精力-2，時間+1",
              effects: { food: -2, energy: -2, time: +1 },
              challenge: "完成迷宮，走出山洞。",
              next: 14 }
        ]
    },
    {//7
        text: "&emsp;&emsp;你們一路前行，歷經千辛萬苦，來到了一片野果林中。<br>&emsp;&emsp;（此為最後一個情境選擇。）",
        options: [
            { text: "摘取野果食用，補充精力，但不確定野果是否有毒。",
              consequence: "食物+2，精力+2，時間+2",
              effects: { food: +2, energy: +2, time: +2 },
              challenge: "吃下未知野果（整人糖）補充體力，並摘取些許果實準備當禮物送給隱霧村的村民們。",
              next: 17 },
            { text: "不摘取野果，保持警惕，繼續前行。",
              consequence: "食物-2，精力-2，時間+1",
              effects: { food: -2, energy: -2, time: +1 },
              challenge: "為了避免誘惑，大家一致決定不抬頭看果樹。<br>閉著眼睛原地轉5圈，成功抵擋誘惑走出野果林。",
              next: 18 }
        ]
    },
    {//8
        text: "&emsp;&emsp;你們返回原路，沿途小心翼翼，卻不料在發現前方不遠處發現一隻山豬。",
        options: [
            { text: "抽出腰間的長刀將野豬擊殺，這樣可以獲得額外的食物並確保前方的道路安全。",
              consequence: "食物+5，精力-3，時間+1",
              effects: { food: +5, energy: -3, time: +1 },
              challenge: "完成野豬圖案的拼圖，代表成功擊殺野豬。",
              next: 15 },
            { text: "轉身逃跑，確保自己的安全。",
              consequence: "食物-3，精力-3，時間+1",
              effects: { food: -3, energy: -3, time: +1 },
              challenge: "完成三次折返跑，以逃離野豬的攻擊範圍。",
              next: 16 }
        ]
    },
    {//9
        text: "&emsp;&emsp;你們成功擊殺了野豬，卻有隊員不幸在過程中受傷。<br>&emsp;&emsp;（此為最後一個情境選擇。）",
        options: [
            { text: "立即停留在原地休息，並為受傷隊員包扎，雖然會延誤行程，但可以治療受傷的隊員。",
              consequence: "食物-2，精力+1，時間+2",
              effects: { food: -2, energy: +1, time: +2 },
              challenge: "用三角巾幫受傷隊員完成一個簡易的包扎。<br>經過短暫的休息後，將剛剛獲得的戰利品（野豬）帶上，繼續前往隱霧村。",
              next: 19 },
            { text: "繼續前行，儘快到達目的地，但受傷的隊員可能無法支撐。",
              consequence: "食物-3，精力-3，時間+1",
              effects: { food: -3, energy: -3, time: +1 },
              challenge: "一位隊員背著受傷的隊員30秒。",
              next: 20 }
        ]
    },
    {//10
        text: "&emsp;&emsp;你們成功逃脫了野豬的追殺，卻發現你們已經偏離原先規劃好的路線，來到一處山壁前。<br>&emsp;&emsp;（此為最後一個情境選擇。）",
        options: [
            { text: "身手矯健的冒險隊員們表示：「小case！」。紛紛將自己的行囊綁在身上，攀越山壁。",
              consequence: "食物-2，精力-3，時間+1",
              effects: { food: -2, energy: -3, time: +1 },
              challenge: "連續做30個深蹲，模擬攀越山壁的艱辛。",
              next: 21 },
            { text: "另外尋找一條安全的路線，但這樣會消耗更多的時間。",
              consequence: "食物-2，精力-2，時間+2",
              effects: { food: -2, energy: -2, time: +2 },
              challenge: "完成迷宮，成功找到正確的路徑。",
              next: 22 }
        ]
    },
    {//11
        text: "&emsp;&emsp;你們幫助了陌生人，獲得了感激和食物補充。隨後，繼續前行，來到了一片野果林中。<br>&emsp;&emsp;（此為最後一個情境選擇。）",
        options: [
            { text: "摘取野果食用，補充精力，但不確定野果是否有毒。",
              consequence: "食物+2，精力+2，時間+2",
              effects: { food: +2, energy: +2, time: +2 },
              challenge: "吃下未知野果（整人糖）補充體力。",
              next: 23 },
            { text: "不摘取野果，保持警惕，繼續前行。",
              consequence: "食物-2，精力-2，時間+1",
              effects: { food: -2, energy: -2, time: +1 },
              challenge: "為了避免誘惑，大家一致決定不抬頭看果樹。<br>閉著眼睛原地轉5圈，成功抵擋誘惑走出野果林。",
              next: 24 }
        ]
    },
    {//12
        text: "&emsp;&emsp;你們成功逃脫了陌生人的追擊，卻有隊員不幸在逃跑的過程中受傷了。<br>&emsp;&emsp;（此為最後一個情境選擇。）",
        options: [
            { text: "立即停留在原地休息，並為受傷隊員包扎，雖然會延誤行程，但可以治療受傷的隊員。",
              consequence: "食物-2，精力+1，時間+2",
              effects: { food: -2, energy: +1, time: +2 },
              challenge: "用三角巾幫受傷隊員完成一個簡易的包扎。",
              next: 25 },
            { text: "繼續前行，儘快到達目的地，但受傷的隊員可能無法支撐。",
              consequence: "食物-3，精力-3，時間+1",
              effects: { food: -3, energy: -3, time: +1 },
              challenge: "一位隊員背著受傷的隊員30秒。",
              next: 26 }
        ]
    },
    {//13
        text: "&emsp;&emsp;你們在山洞中休息了一會兒，然後繼續前行，來到了一片野果林中。<br>&emsp;&emsp;（此為最後一個情境選擇。）",
        options: [
            { text: "摘取野果食用，補充精力，但不確定野果是否有毒。",
              consequence: "食物+2，精力+2，時間+2",
              effects: { food: +2, energy: +2, time: +2 },
              challenge: "吃下未知野果（整人糖）補充體力。",
              next: 27 },
            { text: "不摘取野果，保持警惕，繼續前行。",
              consequence: "食物-2，精力-2，時間+1",
              effects: { food: -2, energy: -2, time: +1 },
              challenge: "為了避免誘惑，大家一致決定不抬頭看果樹。<br>閉著眼睛原地轉5圈，成功抵擋誘惑走出野果林。",
              next: 28 }
        ]
    },
    {//14
        text: "&emsp;&emsp;你們決定冒險探索山洞，經過一段時間的尋找，終於找到了出口，但卻有隊員在探險山洞的過程中不幸受傷。<br>&emsp;&emsp;（此為最後一個情境選擇。）",
        options: [
            { text: "立即停留在原地休息，並為受傷隊員包扎，雖然會延誤行程，但可以治療受傷的隊員。",
              consequence: "食物-2，精力+1，時間+2",
              effects: { food: -2, energy: +1, time: +2 },
              challenge: "用三角巾幫受傷隊員完成一個簡易的包扎。",
              next: 29 },
            { text: "繼續前行，儘快到達目的地，但受傷的隊員可能無法支撐。",
              consequence: "食物-3，精力-3，時間+1",
              effects: { food: -3, energy: -3, time: +1 },
              challenge: "一位隊員背著受傷的隊員30秒。",
              next: 30 }
        ]
    },
    {//15
        text: "&emsp;&emsp;你們成功擊殺了野豬，卻有隊員不幸在過程中受傷。<br>&emsp;&emsp;（此為最後一個情境選擇。）",
        options: [
            { text: "立即停留在原地休息，並為受傷隊員包扎，雖然會延誤行程，但可以治療受傷的隊員。",
              consequence: "食物-2，精力+1，時間+2",
              effects: { food: -2, energy: +1, time: +2 },
              challenge: "用三角巾幫受傷隊員完成一個簡易的包扎。<br>經過短暫的休息後，將剛剛獲得的戰利品（野豬）帶上，繼續前往隱霧村。",
              next: 31 },
            { text: "繼續前行，儘快到達目的地，但受傷的隊員可能無法支撐。",
              consequence: "食物-3，精力-3，時間+1",
              effects: { food: -3, energy: -3, time: +1 },
              challenge: "一位隊員背著受傷的隊員30秒。",
              next: 32 }
        ]
    },
    {//16
        text: "&emsp;&emsp;你們成功逃脫了野豬的追殺，卻發現你們已經偏離原先規劃好的路線，來到一處山壁前。<br>&emsp;&emsp;（此為最後一個情境選擇。）",
        options: [
            { text: "身手矯健的冒險隊員們表示：「小case！」。紛紛將自己的行囊綁在身上，攀越山壁。",
              consequence: "食物-2，精力-3，時間+1",
              effects: { food: -2, energy: -3, time: +1 },
              challenge: "連續做30個深蹲，模擬攀越山壁的艱辛。",
              next: 33 },
            { text: "另外尋找一條安全的路線，但這樣會消耗更多的時間。",
              consequence: "食物-2，精力-2，時間+2",
              effects: { food: -2, energy: -2, time: +2 },
              challenge: "完成迷宮，成功找到正確的路徑。",
              next: 34 }
        ]
    },
    {//17
        text: "&emsp;&emsp;恭喜你們在時間內將蒼穹之石送至隱霧村！<br>&emsp;&emsp;然而，當你們將沿途摘得的野果送給村民時，卻見他們臉色驟變，隨即將你們趕出了隱霧村。",
        options: [
            { text: "重新開始",
              consequence: "任務基本完成。" }
        ]
    },
    {//18
        text: "&emsp;&emsp;恭喜你們在時間內將蒼穹之石送至隱霧村！<br>&emsp;&emsp;村民們見你們精疲力盡，便熱情地招待你們到五星級客棧休息。",
        options: [
            { text: "重新開始",
              consequence: "任務成功完成。" }
        ]
    },
    {//19
        text: "&emsp;&emsp;雖然你們未能在時間內將蒼穹之石送至隱霧村，但村民們看在你們攜帶的禮物（野豬）份上，決定不予計較。",
        options: [
            { text: "重新開始",
              consequence: "任務部分完成。" }
        ]
    },
    {//20
        text: "&emsp;&emsp;恭喜你們在時間內將蒼穹之石送至隱霧村！<br>&emsp;&emsp;村民們見你們之中有人受傷，連忙請村里最厲害的大夫緊急救治。",
        options: [
            { text: "重新開始",
              consequence: "任務成功完成。" }
        ]
    },
    {//21
        text: "&emsp;&emsp;恭喜你們在時間內將蒼穹之石送至隱霧村！<br>&emsp;&emsp;村民們見你們精疲力盡，便招待你們到五星級客棧好好休息。",
        options: [
            { text: "重新開始",
              consequence: "任務成功完成。" }
        ]
    },
    {//22
        text: "&emsp;&emsp;儘管你們已經竭盡全力趕路，仍然無法在時間內將蒼穹之石送至隱霧村。<br>&emsp;&emsp;等候已久的村民們在拿到蒼穹之石後，將你們驅逐出了村莊。",
        options: [
            { text: "重新開始",
              consequence: "任務未完成。" }
        ]
    },
    {//23
        text: "&emsp;&emsp;雖然你們未能在時間內將蒼穹之石送至隱霧村，但村民們看在你們攜帶的禮物（野豬）份上，決定不予計較。",
        options: [
            { text: "重新開始",
              consequence: "任務部分完成。" }
        ]
    },
    {//24
        text: "&emsp;&emsp;恭喜你們在時間內將蒼穹之石送至隱霧村！<br>&emsp;&emsp;村民們見你們精疲力盡，便熱情地招待你們到五星級客棧休息，並將你們帶來的野豬精心烹調，與你們一起慶祝。",
        options: [
            { text: "重新開始",
              consequence: "任務完美完成。" }
        ]
    },
    {//25
      text: "&emsp;&emsp;休整過後，你們再度趕往隱霧村。然而，由於之前花費了太多時間，最終未能在時間內將蒼穹之石送達。<br>&emsp;&emsp;等候多時的村民們在拿到石頭後，將你們趕出了村莊。",
      options: [
          { text: "重新開始",
            consequence: "任務未完成。" }
        ]
    },
    {//26
        text: "&emsp;&emsp;儘管你們在時間內抵達了隱霧村，但精力透支的你們倒在了村外。直到再度甦醒後，才將蒼穹之石送入村中。",
        options: [
            { text: "重新開始",
              consequence: "任務未完成。" }
        ]
    },
    {//27
        text: "&emsp;&emsp;儘管你們已經竭盡全力趕路，仍然無法在時間內將蒼穹之石送至隱霧村。<br>&emsp;&emsp;等候已久的村民們在拿到蒼穹之石後，將你們驅逐出了村莊。",
        options: [
            { text: "重新開始",
              consequence: "任務未完成。" }
        ]
    },
    {//28
        text: "&emsp;&emsp;儘管你們已經竭盡全力趕路，仍然無法在時間內將蒼穹之石送至隱霧村。<br>&emsp;&emsp;等候已久的村民們在拿到蒼穹之石後，將你們驅逐出了村莊。",
        options: [
            { text: "重新開始",
              consequence: "任務未完成。" }
        ]
    },
    {//29
        text: "&emsp;&emsp;儘管你們已經竭盡全力趕路，仍然無法在時間內將蒼穹之石送至隱霧村。<br>&emsp;&emsp;等候已久的村民們在拿到蒼穹之石後，將你們驅逐出了村莊。",
        options: [
            { text: "重新開始",
              consequence: "任務未完成。" }
        ]
    },
    {//30
        text: "&emsp;&emsp;然而，極度飢餓的你們在前往隱霧村的途中倒下了。<br>&emsp;&emsp;夜幕降臨，一隻無聊的野豬出現在你們身旁......",
        options: [
            { text: "重新開始",
              consequence: "任務...... 還有人在乎嗎？" }
        ]
    },
    {//31
        text: "&emsp;&emsp;雖然你們未能在時間內將蒼穹之石送至隱霧村，但村民們看在你們攜帶的禮物（野豬）份上，決定不予計較。",
        options: [
            { text: "重新開始",
              consequence: "任務部分完成。" }
        ]
    },
    {//32
        text: "&emsp;&emsp;儘管你們在時間內抵達了隱霧村，但精力透支的你們倒在了村外。直到再度甦醒後，才將蒼穹之石送入村中。",
        options: [
            { text: "重新開始",
              consequence: "任務未完成。" }
        ]
    },
    {//33
        text: "&emsp;&emsp;儘管你們在時間內抵達了隱霧村，但精力透支且極度飢餓的你們倒在了村外。直到再度甦醒後，才將蒼穹之石送入村中。",
        options: [
            { text: "重新開始",
              consequence: "任務未完成。" }
        ]
    },
    {//34
        text: "&emsp;&emsp;然而，精力透支且極度飢餓的你們在前往隱霧村的途中倒下了。<br>&emsp;&emsp;夜幕降臨，白天追趕你們的野豬再次出現在你們身旁......",
        options: [
            { text: "重新開始",
              consequence: "任務...... 還有人在乎嗎？" }
        ]
    },
];
