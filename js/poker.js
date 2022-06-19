var balancePlayer = 500;
var totalPot = 0;
var balancePlayer = 500;
var balanceBot1 = 500;
var balanceBot2 = 500;
var balanceBot3 = 500;

function allIn(){
    totalPot += balancePlayer;
    balancePlayer = 0;
    document.getElementById("balance").textContent="Balance:" + balancePlayer + " $";
    document.getElementById("totalPot").textContent="Total Pot: " + totalPot + " $"
}