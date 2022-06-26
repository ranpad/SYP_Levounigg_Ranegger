var totalPot = 0;
var currentTotalBet = 0;

var bot1Alive = true;
var bot2Alive = true;
var bot3Alive = true;

var bot1isAllIn = false;
var bot2isAllIn = false;
var bot3isAllIn = false;

var endGame = false;
var currentBetPlayer = 0;
var currentBetBot1 = 0;
var currentBetBot2 = 0;
var currentBetBot3 = 0;

var balancePlayer = 500;
var balanceBot1 = 500;
var balanceBot2 = 500;
var balanceBot3 = 500;
var round = 0;
var isFold = false;

function main(){
    round++;
    updateBetButtons();
    alert(round);
    if (balanceBot1 === 0){
        return bot1Alive = false;
    }
    if (balanceBot2 === 0){
        return bot2Alive = false;
    }
    if (balanceBot3 === 0){
        return bot3Alive = false;
    }

    if (foldedBot1 && foldedBot2 && foldedBot3){
        alert("in if");
        showTableCards();
        balancePlayer = balancePlayer + totalPot;
        totalPot = 0;
        document.getElementById("totalPot").textContent = "Total Pot: " + totalPot;
        document.getElementById("balance").textContent = "Balance: " + balancePlayer;
        alert("Sie haben gewonnen!");
    }

    if(balanceBot1===0&&balanceBot2===0&&balanceBot3===0){
        alert("in if");
        showTableCards();
        balancePlayer =+ totalPot;
        totalPot = 0;
        alert("SIE HABEN GEWONNEN!");
    }

    if(round===1){
        showcard();
    }
    if (round===2){
        table123();
    }
    if (round===3){
        table4();
    }
    if (round===4){
        table5();
    }
    if (round===5){
        alert("In round 5");
        whoWon();
    }

    if (balancePlayer <= 0){
        //whoWon()
        return bot1Alive = true;
    }
}



function check(botId){

    if (botId === 'bot1'){
        balanceBot1-=currentBet;
        currentBetBot1 += currentTotalBet;
        totalPot += currentBet;
        document.getElementById("statusBot1").textContent=balanceBot1 + "$ - " + currentBetBot1 + "$";
    }

    if (botId === 'bot2'){
        balanceBot2-=currentBet;
        currentBetBot2 += currentTotalBet;
        totalPot += currentBet;
        document.getElementById("statusBot2").textContent=balanceBot2 + "$ - " + currentBetBot2 + "$";
    }

    if (botId === 'bot3'){
        balanceBot3-=currentBet;
        currentBetBot3 += currentTotalBet;
        totalPot += currentBet;
        document.getElementById("statusBot3").textContent=balanceBot3 + "$ - " + currentBetBot3 + "$";
    }

    document.getElementById("totalPot").textContent="Total Pot: " + totalPot + " $";
}

function fold(botId){
    if (botId === 'bot1'){
        document.getElementById('statusBot1').textContent = balanceBot1 + "$ - Folded";
    }
    if (botId === 'bot2'){
        document.getElementById('statusBot2').textContent = balanceBot2 + "$ - Folded";
    }
    if (botId === 'bot3'){
        document.getElementById('statusBot3').textContent = balanceBot3 + "$ - Folded";
    }
}

function allInPlayer(){
    totalPot += balancePlayer;
    balancePlayer = 0;
    document.getElementById("balance").textContent="Balance:" + balancePlayer + " $";
    document.getElementById("totalPot").textContent="Total Pot: " + totalPot + " $";

    showTableCards();

    if (!bot1isAllIn){
        foldOrAllIn1();
    }
    if (!bot2isAllIn){
        foldOrAllIn2();
    }
    if (!bot3isAllIn){
        foldOrAllIn3();
    }

    document.getElementById('statusBot1').textContent = balanceBot1 + "$ - Folded";
    document.getElementById('statusBot2').textContent = balanceBot2 + "$ - Folded";
    document.getElementById('statusBot3').textContent = balanceBot3 + "$ - Folded";
    alert("You won!");
}

function allInBot(botId){


    if (botId === 'bot1'){
        bot1isAllIn = true;
        enableOnlyAllIn();
        alert("ALL IN BOT1");
        totalPot += balanceBot1;
        currentTotalBet = balanceBot1;
        currentBetBot1 += balanceBot1;
        balanceBot1 = 0;
        document.getElementById("statusBot1").textContent=balanceBot1 + "$ - " + currentBetBot1 + "$";
        document.getElementById("totalPot").textContent="Total Pot: " + totalPot + " $";
        foldOrAllIn2();
        foldOrAllIn3();
    }
    if (botId === 'bot2'){
        bot2isAllIn = true;
        enableOnlyAllIn();
        alert("ALL IN BOT2");
        totalPot += balanceBot2;
        currentTotalBet = balanceBot2;
        currentBetBot2 += balanceBot2;
        balanceBot2 = 0;
        document.getElementById("statusBot2").textContent=balanceBot2 + "$ - " + currentBetBot2 + "$";
        document.getElementById("totalPot").textContent="Total Pot: " + totalPot + " $";
        foldOrAllIn1();
        foldOrAllIn3();
    }
    if (botId === 'bot3'){
        bot3isAllIn = true;
        enableOnlyAllIn();
        alert("ALL IN BOT3");
        totalPot += balanceBot3;
        currentTotalBet = balanceBot3;
        currentBetBot3 += balanceBot3;
        balanceBot3 = 0;
        document.getElementById("statusBot3").textContent=balanceBot3 + "$ - " + currentBetBot3 + "$";
        document.getElementById("totalPot").textContent="Total Pot: " + totalPot + " $";
        foldOrAllIn1();
        foldOrAllIn2();
    }
    showTableCards();
}

function getBet(element, id){
    currentBet = document.getElementById(id).innerHTML.substring(0, 3);
    currentBet = parseInt(currentBet);

    if (balancePlayer - currentBet >= 0){
        totalPot += currentBet;
        balancePlayer-=currentBet;
        updateBalanceAndPot(totalPot, balancePlayer);
        currentTotalBet = currentBet;
    }else{
        alert("You can't bet more Money than you have!");
    }

    moves1();
    moves2();
    moves3();
    main();
}

function updateBetButtons(){
    document.getElementById("bet").textContent=currentTotalBet + " $";
    document.getElementById("bet1").textContent= currentTotalBet + 10 + " $";
    document.getElementById("bet2").textContent= currentTotalBet + 20 + " $";
    document.getElementById("bet3").textContent= currentTotalBet + 50 + " $";
    document.getElementById("bet4").textContent= currentTotalBet + 80 + " $";
    document.getElementById("bet5").textContent= currentTotalBet + 100 + " $";
}

function updateBalanceAndPot(totalPot, balancePlayer){
    document.getElementById("balance").textContent="Balance:" + balancePlayer + " $";
    document.getElementById("totalPot").textContent="Total Pot: " + totalPot + " $";
}

function disableButtons(){
    document.getElementById('fold').disabled = true;
    document.getElementById('check').disabled = true;
    document.getElementById('bet').disabled = true;
    document.getElementById('bet1').disabled = true;
    document.getElementById('bet2').disabled = true;
    document.getElementById('bet3').disabled = true;
    document.getElementById('bet4').disabled = true;
    document.getElementById('bet5').disabled = true;
    document.getElementById('allIn').disabled = true;
}

function enableButtons(){
    document.getElementById('fold').disabled = false;
    document.getElementById('check').disabled = false;
    document.getElementById('bet').disabled = false;
    document.getElementById('bet1').disabled = false;
    document.getElementById('bet2').disabled = false;
    document.getElementById('bet3').disabled = false;
    document.getElementById('bet4').disabled = false;
    document.getElementById('bet5').disabled = false;
    document.getElementById('allIn').disabled = false;
}

function enableOnlyAllIn(){
    document.getElementById('fold').disabled = true;
    document.getElementById('check').disabled = true;
    document.getElementById('bet').disabled = true;
    document.getElementById('bet1').disabled = true;
    document.getElementById('bet2').disabled = true;
    document.getElementById('bet3').disabled = true;
    document.getElementById('bet4').disabled = true;
    document.getElementById('bet5').disabled = true;
}

function showTableCards(){
    if (round === 1){
        table123();
        table4();
        table5();
    }

    if (round === 2){
        table4();
        table5();
    }

    if (round === 3){
        table5();
    }
}

function whoWon(){

    if (moveNumberPlayer > moveNumber1 && moveNumberPlayer > moveNumber2 && moveNumberPlayer > moveNumber3){
        alert("You Won!");
        return;
    }
    if (moveNumber1 > moveNumberPlayer && moveNumber1 > moveNumber2 && moveNumber1 > moveNumber3){
        alert("Bot 1 Won! | Card Combination: " + move);
        return;
    }
    if (moveNumber2 > moveNumberPlayer && moveNumber2 > moveNumber1 && moveNumber2 > moveNumber3){
        alert("Bot 2 Won! | Card Combination: " + move2);
        return;
    }
    if (moveNumber3 > moveNumberPlayer && moveNumber3 > moveNumber2 && moveNumber3 > moveNumber1){
        alert("Bot 3 Won! | Card Combination: " + move3);
        return;
    }
    if (moveNumberPlayer === moveNumber1 && moveNumber1 === moveNumber2 && moveNumber2 === moveNumber3){
        alert("Everyone got the same Combination!");
        return;
    }
    if (moveNumberPlayer === moveNumber1){
        if (foldedBot1){
            alert("You Won!");
        }else{
            alert("Player and Bot1 Won!");
        }
        return;
    }
    if (moveNumberPlayer === moveNumber2){
        if (foldedBot2){
            alert("You Won!");
        }else{
            alert("Player and Bot2 Won!");
        }
        return;
    }
    if (moveNumberPlayer === moveNumber3){
        if (foldedBot3){
            alert("You Won!");
        }else{
            alert("Player and Bot3 Won!");
        }
        return;
    }
    if (moveNumberPlayer === moveNumber1 && moveNumberPlayer === moveNumber2){
        alert("Player, Bot1 and Bot 2 Won!");
        return;
    }
    if (moveNumberPlayer === moveNumber1 && moveNumberPlayer === moveNumber3){
        alert("Player, Bot1 and Bot3 Won!");
        return;
    }
    if (moveNumberPlayer === moveNumber2 && moveNumberPlayer === moveNumber3){
        alert("Player, Bot2 and Bot3 Won!");
        return;
    }
}

function updateCurrentBalance(){

}