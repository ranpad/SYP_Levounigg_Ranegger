let i=0;
function NewCards(){
    i=0;
}
var myPix = ["img/PNG-cards-1.3/2_of_clubs.png",        "img/PNG-cards-1.3/2_of_diamonds.png",     "img/PNG-cards-1.3/2_of_hearts.png",
             "img/PNG-cards-1.3/2_of_spades.png",       "img/PNG-cards-1.3/3_of_clubs.png",        "img/PNG-cards-1.3/3_of_diamonds.png",
             "img/PNG-cards-1.3/3_of_spades.png",       "img/PNG-cards-1.3/4_of_clubs.png",        "img/PNG-cards-1.3/4_of_diamonds.png",
             "img/PNG-cards-1.3/4_of_hearts.png",       "img/PNG-cards-1.3/4_of_spades.png",       "img/PNG-cards-1.3/5_of_clubs.png",
             "img/PNG-cards-1.3/5_of_diamonds.png",     "img/PNG-cards-1.3/5_of_hearts.png",       "img/PNG-cards-1.3/5_of_spades.png",
             "img/PNG-cards-1.3/6_of_clubs.png",        "img/PNG-cards-1.3/6_of_diamonds.png",     "img/PNG-cards-1.3/6_of_hearts.png",
             "img/PNG-cards-1.3/6_of_spades.png",       "img/PNG-cards-1.3/7_of_clubs.png",        "img/PNG-cards-1.3/7_of_diamonds.png",
             "img/PNG-cards-1.3/7_of_hearts.png",       "img/PNG-cards-1.3/7_of_spades.png",       "img/PNG-cards-1.3/8_of_clubs.png",
             "img/PNG-cards-1.3/8_of_clubs.png",        "img/PNG-cards-1.3/8_of_diamonds.png",     "img/PNG-cards-1.3/8_of_hearts.png",
             "img/PNG-cards-1.3/8_of_spades.png",       "img/PNG-cards-1.3/9_of_clubs.png",        "img/PNG-cards-1.3/9_of_diamonds.png",
             "img/PNG-cards-1.3/9_of_hearts.png",       "img/PNG-cards-1.3/9_of_spades.png",       "img/PNG-cards-1.3/10_of_clubs.png",
             "img/PNG-cards-1.3/10_of_diamonds.png",    "img/PNG-cards-1.3/10_of_hearts.png",      "img/PNG-cards-1.3/10_of_spades.png",
             "img/PNG-cards-1.3/ace_of_clubs.png",      "img/PNG-cards-1.3/ace_of_diamonds.png",   "img/PNG-cards-1.3/ace_of_hearts.png",
             "img/PNG-cards-1.3/ace_of_spades.png",     "img/PNG-cards-1.3/ace_of_spades2.png",    "img/PNG-cards-1.3/black_joker.png",
             "img/PNG-cards-1.3/jack_of_clubs.png",     "img/PNG-cards-1.3/jack_of_clubs2.png",    "img/PNG-cards-1.3/jack_of_diamonds.png",
             "img/PNG-cards-1.3/jack_of_diamonds2.png", "img/PNG-cards-1.3/jack_of_hearts.png",    "img/PNG-cards-1.3/jack_of_hearts2.png",
             "img/PNG-cards-1.3/jack_of_spades.png",    "img/PNG-cards-1.3/jack_of_spades2.png",   "img/PNG-cards-1.3/jack_of_diamonds.png",
             "img/PNG-cards-1.3/jack_of_diamonds2.png", "img/PNG-cards-1.3/jack_of_hearts.png",    "img/PNG-cards-1.3/jack_of_hearts2.png",
             "img/PNG-cards-1.3/jack_of_spades.png",    "img/PNG-cards-1.3/jack_of_spades2.png",   "img/PNG-cards-1.3/king_of_clubs.png",
             "img/PNG-cards-1.3/king_of_clubs2.png",    "img/PNG-cards-1.3/king_of_diamonds.png",  "img/PNG-cards-1.3/king_of_diamonds2.png",
             "img/PNG-cards-1.3/king_of_hearts.png",    "img/PNG-cards-1.3/king_of_hearts2.png",   "img/PNG-cards-1.3/", //"PNG-cards-1.3/",
             //"img/PNG-cards-1.3/","PNG-cards-1.3/",   "img/PNG-cards-1.3/","PNG-cards-1.3/",     "img/PNG-cards-1.3/","PNG-cards-1.3/",
             "img/PNG-cards-1.3/king_of_spades.png",    "img/PNG-cards-1.3/king_of_spades2.png",   "img/PNG-cards-1.3/queen_of_clubs.png",
             "img/PNG-cards-1.3/queen_of_clubs2.png",   "img/PNG-cards-1.3/queen_of_diamonds.png", "img/PNG-cards-1.3/queen_of_diamonds2.png",
             "img/PNG-cards-1.3/queen_of_hearts.png",   "img/PNG-cards-1.3/queen_of_hearts2.png",  "img/PNG-cards-1.3/queen_of_spades.png",
             "img/PNG-cards-1.3/queen_of_spades2.png",  "img/PNG-cards-1.3/red_joker.png"];


function showcard() {


    if(i==0){
        var randomNum = Math.floor(Math.random() * myPix.length);
        document.getElementById("card").src = myPix[randomNum];
        myPix.splice(randomNum,1);
        console.log(myPix);
        i++;
    }
    if(i==1){
        var randomNum = Math.floor(Math.random() * myPix.length);
        document.getElementById("card2").src = myPix[randomNum];
        myPix.splice(randomNum,1);
        console.log(myPix);
        i++;
    }


}
function showcard2(){
    number = Math.floor(Math.random() * 66);
    switch(number){
        case 0:
            document.getElementById("card").src = "PNG-cards-1.3/2_of_clubs.png";
            break;
        case 1:
            document.getElementById("card").src = "PNG-cards-1.3/2_of_diamonds.png";
            break;
        case 2:
            document.getElementById("card").src = "PNG-cards-1.3/2_of_hearts.png";
            break;
        case 3:
            document.getElementById("card").src = "PNG-cards-1.3/2_of_spades.png";
            break;
        case 4:
            document.getElementById("card").src = "PNG-cards-1.3/3_of_clubs.png";
            break;
        case 5:
            document.getElementById("card").src = "PNG-cards-1.3/3_of_diamonds.png";
            break;
        case 6:
            document.getElementById("card").src = "PNG-cards-1.3/3_of_hearts.png";
            break;
        case 7:
            document.getElementById("card").src = "PNG-cards-1.3/3_of_spades.png";
            break;
        case 8:
            document.getElementById("card").src = "PNG-cards-1.3/4_of_clubs.png";
            break;
        case 9:
            document.getElementById("card").src = "PNG-cards-1.3/4_of_diamonds.png";
            break;
        case 10:
            document.getElementById("card").src = "PNG-cards-1.3/4_of_hearts.png";
            break;
        case 11:
            document.getElementById("card").src = "PNG-cards-1.3/4_of_spades.png";
            break;
        case 12:
            document.getElementById("card").src = "PNG-cards-1.3/5_of_clubs.png";
            break;
        case 13:
            document.getElementById("card").src = "PNG-cards-1.3/5_of_diamonds.png";
            break;
        case 14:
            document.getElementById("card").src = "PNG-cards-1.3/5_of_hearts.png";
            break;
        case 15:
            document.getElementById("card").src = "PNG-cards-1.3/5_of_spades.png";
            break;
        case 16:
            document.getElementById("card").src = "PNG-cards-1.3/6_of_clubs.png";
            break;
        case 17:
            document.getElementById("card").src = "PNG-cards-1.3/6_of_diamonds.png";
            break;
        case 18:
            document.getElementById("card").src = "PNG-cards-1.3/6_of_hearts.png";
            break;
        case 19:
            document.getElementById("card").src = "PNG-cards-1.3/6_of_spades.png";
            break;
        case 20:
            document.getElementById("card").src = "PNG-cards-1.3/7_of_clubs.png";
            break;
        case 21:
            document.getElementById("card").src = "PNG-cards-1.3/7_of_diamonds.png";
            break;
        case 22:
            document.getElementById("card").src = "PNG-cards-1.3/7_of_hearts.png";
            break;
        case 23:
            document.getElementById("card").src = "PNG-cards-1.3/7_of_spades.png";
            break;
        case 24:
            document.getElementById("card").src = "PNG-cards-1.3/8_of_clubs.png";
            break;
        case 25:
            document.getElementById("card").src = "PNG-cards-1.3/8_of_diamonds.png";
            break;
        case 26:
            document.getElementById("card").src = "PNG-cards-1.3/8_of_hearts.png";
            break;
        case 27:
            document.getElementById("card").src = "PNG-cards-1.3/8_of_spades.png";
            break;
        case 28:
            document.getElementById("card").src = "PNG-cards-1.3/9_of_clubs.png";
            break;
        case 29:
            document.getElementById("card").src = "PNG-cards-1.3/9_of_diamonds.png";
            break;
        case 30:
            document.getElementById("card").src = "PNG-cards-1.3/9_of_hearts.png";
            break;
        case 31:
            document.getElementById("card").src = "PNG-cards-1.3/9_of_spades.png";
            break;
        case 32:
            document.getElementById("card").src = "PNG-cards-1.3/10_of_clubs.png";
            break;
        case 33:
            document.getElementById("card").src = "PNG-cards-1.3/10_of_diamonds.png";
            break;
        case 34:
            document.getElementById("card").src = "PNG-cards-1.3/10_of_hearts.png";
            break;
        case 35:
            document.getElementById("card").src = "PNG-cards-1.3/10_of_spades.png";
            break;
        case 36:
            document.getElementById("card").src = "PNG-cards-1.3/ace_of_clubs.png";
            break;
        case 37:
            document.getElementById("card").src = "PNG-cards-1.3/ace_of_diamonds.png";
            break;
        case 38:
            document.getElementById("card").src = "PNG-cards-1.3/ace_of_hearts.png";
            break;
        case 39:
            document.getElementById("card").src = "PNG-cards-1.3/ace_of_spades.png";
            break;
        case 40:
            document.getElementById("card").src = "PNG-cards-1.3/ace_of_spades2.png";
            break;
        case 41:
            document.getElementById("card").src = "PNG-cards-1.3/jack_of_clubs.png";
            break;
        case 42:
            document.getElementById("card").src = "PNG-cards-1.3/jack_of_clubs2.png";
            break;
        case 43:
            document.getElementById("card").src = "PNG-cards-1.3/jack_of_diamonds.png";
            break;
        case 44:
            document.getElementById("card").src = "PNG-cards-1.3/jack_of_diamonds2.png";
            break;
        case 45:
            document.getElementById("card").src = "PNG-cards-1.3/jack_of_hearts.png";
            break;
        case 46:
            document.getElementById("card").src = "PNG-cards-1.3/jack_of_hearts2.png";
            break;
        case 47:
            document.getElementById("card").src = "PNG-cards-1.3/jack_of_spades.png";
            break;
        case 48:
            document.getElementById("card").src = "PNG-cards-1.3/jack_of_spades2.png";
            break;
        case 49:
            document.getElementById("card").src = "PNG-cards-1.3/king_of_clubs.png";
            break;
        case 50:
            document.getElementById("card").src = "PNG-cards-1.3/king_of_clubs2.png";
            break;
        case 51:
            document.getElementById("card").src = "PNG-cards-1.3/king_of_diamonds.png";
            break;
        case 52:
            document.getElementById("card").src = "PNG-cards-1.3/king_of_diamonds2.png";
            break;
        case 53:
            document.getElementById("card").src = "PNG-cards-1.3/king_of_hearts.png";
            break;
        case 54:
            document.getElementById("card").src = "PNG-cards-1.3/king_of_hearts2.png";
            break;
        case 55:
            document.getElementById("card").src = "PNG-cards-1.3/king_of_spades.png";
            break;
        case 56:
            document.getElementById("card").src = "PNG-cards-1.3/king_of_spades2.png";
            break;
        case 57:
            document.getElementById("card").src = "PNG-cards-1.3/queen_of_clubs.png";
            break;
        case 58:
            document.getElementById("card").src = "PNG-cards-1.3/queen_of_clubs2.png";
            break;
        case 59:
            document.getElementById("card").src = "PNG-cards-1.3/queen_of_diamonds.png";
            break;
        case 60:
            document.getElementById("card").src = "PNG-cards-1.3/queen_of_diamonds2.png";
            break;
        case 61:
            document.getElementById("card").src = "PNG-cards-1.3/queen_of_hearts.png";
            break;
        case 62:
            document.getElementById("card").src = "PNG-cards-1.3/queen_of_hearts2.png";
            break;
        case 63:
            document.getElementById("card").src = "PNG-cards-1.3/queen_of_spades.png";
            break;
        case 64:
            document.getElementById("card").src = "PNG-cards-1.3/queen_of_spades2.png";
            break;
        case 65:
            document.getElementById("card").src = "PNG-cards-1.3/red_joker.png";
            break;
    }
}
function chooseCard(){


}
