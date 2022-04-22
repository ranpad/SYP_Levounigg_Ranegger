let i=0;
function NewCards(){
    i=0;
}
var myPix = ["img/cards/2_of_clubs.png",        "img/cards/2_of_diamonds.png",     "img/cards/2_of_hearts.png",
             "img/cards/2_of_spades.png",       "img/cards/3_of_clubs.png",        "img/cards/3_of_diamonds.png",
             "img/cards/3_of_spades.png",       "img/cards/4_of_clubs.png",        "img/cards/4_of_diamonds.png",
             "img/cards/4_of_hearts.png",       "img/cards/4_of_spades.png",       "img/cards/5_of_clubs.png",
             "img/cards/5_of_diamonds.png",     "img/cards/5_of_hearts.png",       "img/cards/5_of_spades.png",
             "img/cards/6_of_clubs.png",        "img/cards/6_of_diamonds.png",     "img/cards/6_of_hearts.png",
             "img/cards/6_of_spades.png",       "img/cards/7_of_clubs.png",        "img/cards/7_of_diamonds.png",
             "img/cards/7_of_hearts.png",       "img/cards/7_of_spades.png",       "img/cards/8_of_clubs.png",
             "img/cards/8_of_clubs.png",        "img/cards/8_of_diamonds.png",     "img/cards/8_of_hearts.png",
             "img/cards/8_of_spades.png",       "img/cards/9_of_clubs.png",        "img/cards/9_of_diamonds.png",
             "img/cards/9_of_hearts.png",       "img/cards/9_of_spades.png",       "img/cards/10_of_clubs.png",
             "img/cards/10_of_diamonds.png",    "img/cards/10_of_hearts.png",      "img/cards/10_of_spades.png",
             "img/cards/ace_of_clubs.png",      "img/cards/ace_of_diamonds.png",   "img/cards/ace_of_hearts.png",
             "img/cards/ace_of_spades.png",     "img/cards/ace_of_spades2.png",    "img/cards/black_joker.png",
             "img/cards/jack_of_clubs.png",     "img/cards/jack_of_clubs2.png",    "img/cards/jack_of_diamonds.png",
             "img/cards/jack_of_diamonds2.png", "img/cards/jack_of_hearts.png",    "img/cards/jack_of_hearts2.png",
             "img/cards/jack_of_spades.png",    "img/cards/jack_of_spades2.png",   "img/cards/jack_of_diamonds.png",
             "img/cards/jack_of_diamonds2.png", "img/cards/jack_of_hearts.png",    "img/cards/jack_of_hearts2.png",
             "img/cards/jack_of_spades.png",    "img/cards/jack_of_spades2.png",   "img/cards/king_of_clubs.png",
             "img/cards/king_of_clubs2.png",    "img/cards/king_of_diamonds.png",  "img/cards/king_of_diamonds2.png",
             "img/cards/king_of_hearts.png",    "img/cards/king_of_hearts2.png",   "img/cards/", //"cards/",
             //"img/cards/","cards/",   "img/cards/","cards/",     "img/cards/","cards/",
             "img/cards/king_of_spades.png",    "img/cards/king_of_spades2.png",   "img/cards/queen_of_clubs.png",
             "img/cards/queen_of_clubs2.png",   "img/cards/queen_of_diamonds.png", "img/cards/queen_of_diamonds2.png",
             "img/cards/queen_of_hearts.png",   "img/cards/queen_of_hearts2.png",  "img/cards/queen_of_spades.png",
             "img/cards/queen_of_spades2.png",  "img/cards/red_joker.png"];


function showcard() {


    if(i==0){
        var randomNum = Math.floor(Math.random() * myPix.length);
        document.getElementById("card").src = myPix[randomNum];

        i++;
    }
    if(i==1){
        var randomNum2 = Math.floor(Math.random() * myPix.length);
        document.getElementById("card2").src = myPix[randomNum2];
        console.log(myPix);
        i++;
    }
    if(randomNum==randomNum2){
        showcard();
    }
    else{
        check(randomNum,randomNum2);
    }


}
function check(check,check2){

    console.log(check,check2);

    document.getElementById("pair").style.background="rgb(255, 255, 255)";
    const s=[0,1,2,3,4,5,6,7,8,9];
    let c=0;
    while(c<=s.length){
        if(myPix[check].includes(s[c])==myPix[check2].includes(s[c])&&check<=40&&check2<=40&&myPix[check].includes(s[c])!=false&&myPix[check2].includes(s[c])!=false){
            document.getElementById("pair").style.background="rgb(255, 0, 0)";
        }
        c++;
    }
    if(myPix[check].includes('ace')==myPix[check2].includes('ace')&&myPix[check].includes(s[c])!=false&&myPix[check2].includes(s[c])!=false){
        document.getElementById("pair").style.background="rgb(255, 0, 0)";
    }
    myPix.splice(check,1);
    myPix.splice(check2,1);
}
function showcard2(){
    number = Math.floor(Math.random() * 66);
    switch(number){
        case 0:
            document.getElementById("card").src = "cards/2_of_clubs.png";
            break;
        case 1:
            document.getElementById("card").src = "cards/2_of_diamonds.png";
            break;
        case 2:
            document.getElementById("card").src = "cards/2_of_hearts.png";
            break;
        case 3:
            document.getElementById("card").src = "cards/2_of_spades.png";
            break;
        case 4:
            document.getElementById("card").src = "cards/3_of_clubs.png";
            break;
        case 5:
            document.getElementById("card").src = "cards/3_of_diamonds.png";
            break;
        case 6:
            document.getElementById("card").src = "cards/3_of_hearts.png";
            break;
        case 7:
            document.getElementById("card").src = "cards/3_of_spades.png";
            break;
        case 8:
            document.getElementById("card").src = "cards/4_of_clubs.png";
            break;
        case 9:
            document.getElementById("card").src = "cards/4_of_diamonds.png";
            break;
        case 10:
            document.getElementById("card").src = "cards/4_of_hearts.png";
            break;
        case 11:
            document.getElementById("card").src = "cards/4_of_spades.png";
            break;
        case 12:
            document.getElementById("card").src = "cards/5_of_clubs.png";
            break;
        case 13:
            document.getElementById("card").src = "cards/5_of_diamonds.png";
            break;
        case 14:
            document.getElementById("card").src = "cards/5_of_hearts.png";
            break;
        case 15:
            document.getElementById("card").src = "cards/5_of_spades.png";
            break;
        case 16:
            document.getElementById("card").src = "cards/6_of_clubs.png";
            break;
        case 17:
            document.getElementById("card").src = "cards/6_of_diamonds.png";
            break;
        case 18:
            document.getElementById("card").src = "cards/6_of_hearts.png";
            break;
        case 19:
            document.getElementById("card").src = "cards/6_of_spades.png";
            break;
        case 20:
            document.getElementById("card").src = "cards/7_of_clubs.png";
            break;
        case 21:
            document.getElementById("card").src = "cards/7_of_diamonds.png";
            break;
        case 22:
            document.getElementById("card").src = "cards/7_of_hearts.png";
            break;
        case 23:
            document.getElementById("card").src = "cards/7_of_spades.png";
            break;
        case 24:
            document.getElementById("card").src = "cards/8_of_clubs.png";
            break;
        case 25:
            document.getElementById("card").src = "cards/8_of_diamonds.png";
            break;
        case 26:
            document.getElementById("card").src = "cards/8_of_hearts.png";
            break;
        case 27:
            document.getElementById("card").src = "cards/8_of_spades.png";
            break;
        case 28:
            document.getElementById("card").src = "cards/9_of_clubs.png";
            break;
        case 29:
            document.getElementById("card").src = "cards/9_of_diamonds.png";
            break;
        case 30:
            document.getElementById("card").src = "cards/9_of_hearts.png";
            break;
        case 31:
            document.getElementById("card").src = "cards/9_of_spades.png";
            break;
        case 32:
            document.getElementById("card").src = "cards/10_of_clubs.png";
            break;
        case 33:
            document.getElementById("card").src = "cards/10_of_diamonds.png";
            break;
        case 34:
            document.getElementById("card").src = "cards/10_of_hearts.png";
            break;
        case 35:
            document.getElementById("card").src = "cards/10_of_spades.png";
            break;
        case 36:
            document.getElementById("card").src = "cards/ace_of_clubs.png";
            break;
        case 37:
            document.getElementById("card").src = "cards/ace_of_diamonds.png";
            break;
        case 38:
            document.getElementById("card").src = "cards/ace_of_hearts.png";
            break;
        case 39:
            document.getElementById("card").src = "cards/ace_of_spades.png";
            break;
        case 40:
            document.getElementById("card").src = "cards/ace_of_spades2.png";
            break;
        case 41:
            document.getElementById("card").src = "cards/jack_of_clubs.png";
            break;
        case 42:
            document.getElementById("card").src = "cards/jack_of_clubs2.png";
            break;
        case 43:
            document.getElementById("card").src = "cards/jack_of_diamonds.png";
            break;
        case 44:
            document.getElementById("card").src = "cards/jack_of_diamonds2.png";
            break;
        case 45:
            document.getElementById("card").src = "cards/jack_of_hearts.png";
            break;
        case 46:
            document.getElementById("card").src = "cards/jack_of_hearts2.png";
            break;
        case 47:
            document.getElementById("card").src = "cards/jack_of_spades.png";
            break;
        case 48:
            document.getElementById("card").src = "cards/jack_of_spades2.png";
            break;
        case 49:
            document.getElementById("card").src = "cards/king_of_clubs.png";
            break;
        case 50:
            document.getElementById("card").src = "cards/king_of_clubs2.png";
            break;
        case 51:
            document.getElementById("card").src = "cards/king_of_diamonds.png";
            break;
        case 52:
            document.getElementById("card").src = "cards/king_of_diamonds2.png";
            break;
        case 53:
            document.getElementById("card").src = "cards/king_of_hearts.png";
            break;
        case 54:
            document.getElementById("card").src = "cards/king_of_hearts2.png";
            break;
        case 55:
            document.getElementById("card").src = "cards/king_of_spades.png";
            break;
        case 56:
            document.getElementById("card").src = "cards/king_of_spades2.png";
            break;
        case 57:
            document.getElementById("card").src = "cards/queen_of_clubs.png";
            break;
        case 58:
            document.getElementById("card").src = "cards/queen_of_clubs2.png";
            break;
        case 59:
            document.getElementById("card").src = "cards/queen_of_diamonds.png";
            break;
        case 60:
            document.getElementById("card").src = "cards/queen_of_diamonds2.png";
            break;
        case 61:
            document.getElementById("card").src = "cards/queen_of_hearts.png";
            break;
        case 62:
            document.getElementById("card").src = "cards/queen_of_hearts2.png";
            break;
        case 63:
            document.getElementById("card").src = "cards/queen_of_spades.png";
            break;
        case 64:
            document.getElementById("card").src = "cards/queen_of_spades2.png";
            break;
        case 65:
            document.getElementById("card").src = "cards/red_joker.png";
            break;
    }
}
function chooseCard(){


}
