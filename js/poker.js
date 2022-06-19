var totalPot = 0;
var currentTotalBet = 0;
var currentBet = 0;
var balancePlayer = 500;
var balanceBot1 = 500;
var balanceBot2 = 500;
var balanceBot3 = 500;

function main(){
    updateBetButtons();
    getBet();
}

function allIn(){
    totalPot += balancePlayer;
    balancePlayer = 0;
    document.getElementById("balance").textContent="Balance:" + balancePlayer + " $";
    document.getElementById("totalPot").textContent="Total Pot: " + totalPot + " $"
}

function bet(){

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

function getBet(){
    document.getElementById("bet").onclick = function (){balancePlayer -= currentTotalBet; totalPot += currentTotalBet;}
    document.getElementById("bet1").onclick = function (){currentBet = document.getElementById("bet1").innerHTML.substring(0, 3); totalPot += currentBet; balancePlayer-=currentBet; updateBalanceAndPot(totalPot, balancePlayer)}
    document.getElementById("bet2").onclick = function (){currentBet = document.getElementById("bet2").innerHTML.substring(0, 3); totalPot += currentBet; balancePlayer-=currentBet; updateBalanceAndPot(totalPot, balancePlayer)}
    document.getElementById("bet3").onclick = function (){currentBet = document.getElementById("bet3").innerHTML.substring(0, 3); totalPot += currentBet; balancePlayer-=currentBet; updateBalanceAndPot(totalPot, balancePlayer)}
    document.getElementById("bet4").onclick = function (){currentBet = document.getElementById("bet4").innerHTML.substring(0, 3); totalPot += currentBet; balancePlayer-=currentBet; updateBalanceAndPot(totalPot, balancePlayer)}
    document.getElementById("bet5").onclick = function (){currentBet = document.getElementById("bet5").innerHTML.substring(0, 3); totalPot += currentBet; balancePlayer-=currentBet; updateBalanceAndPot(totalPot, balancePlayer)}
}

function updateCurrentBalance(){

}

function updateBalanceAndPot(totalPot, balancePlayer){
    document.getElementById("balance").textContent="Balance:" + balancePlayer + " $";
    document.getElementById("totalPot").textContent="Total Pot: " + totalPot + " $"
}
