var totalPot = 0;
var currentTotalBet = 0;
var currentBet = 0;
var balancePlayer = 500;
var balanceBot1 = 500;
var balanceBot2 = 500;
var balanceBot3 = 500;
var round = 0;
var isFold = false;

function main(){
    round++;
    updateBetButtons();
    if(round==1){
        showcard();
    }
    if (round==2){
        table123();
    }
    if (round==3){
        table4();
    }
    if (round==4){
        round=0;
        table5();
    }
}

function allIn(){
    totalPot += balancePlayer;
    balancePlayer = 0;
    document.getElementById("balance").textContent="Balance:" + balancePlayer + " $";
    document.getElementById("totalPot").textContent="Total Pot: " + totalPot + " $";
}

function bet(){
    balanceBot1-=currentTotalBet;
    balanceBot2-=currentTotalBet;
    balanceBot3-=currentTotalBet;
    totalPot += currentTotalBet * 3;
    document.getElementById("statusBot1").textContent=balanceBot1 + "$ - " + currentTotalBet + "$";
    document.getElementById("statusBot2").textContent=balanceBot1 + "$ - " + currentTotalBet + "$";
    document.getElementById("statusBot3").textContent=balanceBot1 + "$ - " + currentTotalBet + "$";
    document.getElementById("totalPot").textContent="Total Pot: " + totalPot + " $";
    enableButtons();
    return true;
}

function fold(){

}

function check(){

}

function updateBetButtons(){
    document.getElementById("bet").textContent="Bet: " + currentTotalBet + " $";
    document.getElementById("bet1").textContent= currentTotalBet + 10 + " $";
    document.getElementById("bet2").textContent= currentTotalBet + 20 + " $";
    document.getElementById("bet3").textContent= currentTotalBet + 50 + " $";
    document.getElementById("bet4").textContent= currentTotalBet + 80 + " $";
    document.getElementById("bet5").textContent= currentTotalBet + 100 + " $";
}

function getBet(element, id){
    document.getElementById("bet").onclick = function (){balancePlayer -= currentTotalBet; totalPot += currentTotalBet;}

    if (id === 'bet1'){
        currentBet = document.getElementById(id).innerHTML.substring(0, 3);
        currentBet = parseInt(currentBet);
        totalPot += currentBet;
        balancePlayer-=currentBet;
        updateBalanceAndPot(totalPot, balancePlayer);
    }

    if (id === 'bet2'){
        currentBet = document.getElementById(id).innerHTML.substring(0, 3);
        currentBet = parseInt(currentBet);
        totalPot += currentBet;
        balancePlayer-=currentBet;
        updateBalanceAndPot(totalPot, balancePlayer);
    }

    if (id === 'bet3'){
        currentBet = document.getElementById(id).innerHTML.substring(0, 3);
        currentBet = parseInt(currentBet);
        totalPot += currentBet;
        balancePlayer-=currentBet;
        updateBalanceAndPot(totalPot, balancePlayer);
    }

    if (id === 'bet4'){
        currentBet = document.getElementById(id).innerHTML.substring(0, 3);
        currentBet = parseInt(currentBet);
        totalPot += currentBet;
        balancePlayer-=currentBet;
        updateBalanceAndPot(totalPot, balancePlayer);
    }

    if (id === 'bet5'){
        currentBet = document.getElementById(id).innerHTML.substring(0, 3);
        currentBet = parseInt(currentBet);
        totalPot += currentBet;
        balancePlayer-=currentBet;
        updateBalanceAndPot(totalPot, balancePlayer);
    }
    currentTotalBet = currentBet;
    alert(currentTotalBet);
    disableButtons();
    bet();
}


function updateCurrentBalance(){

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
