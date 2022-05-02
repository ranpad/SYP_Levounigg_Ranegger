let i=0;
var myPix = ["img/cards/2_of_clubs.png",        "img/cards/2_of_diamonds.png",     "img/cards/2_of_hearts.png",     "img/cards/2_of_spades.png",
    "img/cards/3_of_clubs.png",        "img/cards/3_of_diamonds.png",     "img/cards/3_of_spades.png",     "img/cards/3_of_spades.png",
    "img/cards/4_of_clubs.png",        "img/cards/4_of_diamonds.png",     "img/cards/4_of_hearts.png",     "img/cards/4_of_spades.png",
    "img/cards/5_of_clubs.png",        "img/cards/5_of_diamonds.png",     "img/cards/5_of_hearts.png",     "img/cards/5_of_spades.png",
    "img/cards/6_of_clubs.png",        "img/cards/6_of_diamonds.png",     "img/cards/6_of_hearts.png",     "img/cards/6_of_spades.png",
    "img/cards/7_of_clubs.png",        "img/cards/7_of_diamonds.png",     "img/cards/7_of_hearts.png",     "img/cards/7_of_spades.png",
    "img/cards/8_of_clubs.png",        "img/cards/8_of_diamonds.png",     "img/cards/8_of_hearts.png",     "img/cards/8_of_spades.png",
    "img/cards/9_of_clubs.png",        "img/cards/9_of_diamonds.png",     "img/cards/9_of_hearts.png",     "img/cards/9_of_spades.png",
    "img/cards/10_of_clubs.png",       "img/cards/10_of_diamonds.png",    "img/cards/10_of_hearts.png",    "img/cards/10_of_spades.png",
    "img/cards/ace_of_clubs.png",      "img/cards/ace_of_diamonds.png",   "img/cards/ace_of_hearts.png",   "img/cards/ace_of_spades.png",
    "img/cards/jack_of_clubs.png",     "img/cards/jack_of_diamonds.png",  "img/cards/jack_of_hearts.png",  "img/cards/jack_of_spades.png",
    "img/cards/king_of_clubs.png",     "img/cards/king_of_diamonds.png",  "img/cards/king_of_hearts.png",  "img/cards/king_of_spades.png",
    "img/cards/queen_of_clubs.png",    "img/cards/queen_of_diamonds.png", "img/cards/queen_of_hearts.png", "img/cards/queen_of_spades.png"];
function NewCards(){
    i=0;
}

function showcard() {

    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("card").src = myPix[randomNum];

    var randomNum2 = Math.floor(Math.random() * myPix.length);
    document.getElementById("card2").src = myPix[randomNum2];
    //console.log(myPix);

    if(randomNum==randomNum2){
        schowcard();
    }else{
        check(randomNum,randomNum2);
    }


}
function check(check,check2){

    console.log(check,check2);

    document.getElementById("pair").style.background="rgba(255, 255, 255, 0.0)";
    const s=[0,1,2,3,4,5,6,7,8,9];
    let c=0;
    while(c<=s.length){
        if(myPix[check].includes(s[c])==myPix[check2].includes(s[c])&&check<=40&&check2<=40&&myPix[check].includes(s[c])!=false&&myPix[check2].includes(s[c])!=false){
            document.getElementById("pair").style.background="rgb(255, 0, 0)";
            myPix.splice(check,1);
            myPix.splice(check2,1);
        }
        c++;
    }
    if(myPix[check].includes('ace')==myPix[check2].includes('ace')&&myPix[check].includes('ace')!=false&&myPix[check2].includes('ace')!=false){
        document.getElementById("pair").style.background="rgb(255, 0, 0)";
    }
    if(myPix[check].includes('jack')==myPix[check2].includes('jack')&&myPix[check].includes('jack')!=false&&myPix[check2].includes('jack')!=false){
        document.getElementById("pair").style.background="rgb(255, 0, 0)";
    }
    if(myPix[check].includes('king')==myPix[check2].includes('king')&&myPix[check].includes('king')!=false&&myPix[check2].includes('king')!=false){
        document.getElementById("pair").style.background="rgb(255, 0, 0)";
    }
    if(myPix[check].includes('queen')==myPix[check2].includes('queen')&&myPix[check].includes('queen')!=false&&myPix[check2].includes('queen')!=false){
        document.getElementById("pair").style.background="rgb(255, 0, 0)";
    }
}

function chooseCard(){

}
