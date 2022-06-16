

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

var checks=["1","1","1","1",
            "2","2","2","2",
            "3","3","3","3",
            "4","4","4","4",
            "5","5","5","5",
            "6","6","6","6",
            "7","7","7","7",
            "8","8","8","8",
            "9","9","9","9",
            "10","10","10","10",
            "11","11","11","11",
            "12","12","12","12",
            "13","13","13","13"];

var inhalt=[];
var flush=[];
function showcard() {

    document.getElementById("pair").style.background="transparent";
    document.getElementById("twoPair").style.background="transparent";
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("card").src = myPix[randomNum];
    myPix.splice(randomNum,1);
    inhalt.push(checks[randomNum]);
    flush.push(randomNum);
    checks.splice(randomNum,1);

    randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("card2").src = myPix[randomNum];
    myPix.splice(randomNum,1);
    inhalt.push(checks[randomNum]);
    flush.push(randomNum);
    checks.splice(randomNum,1);

    randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("tableCard1").src = myPix[randomNum];
    myPix.splice(randomNum,1);
    inhalt.push(checks[randomNum]);
    flush.push(randomNum);
    checks.splice(randomNum,1);

    randomNum4 = Math.floor(Math.random() * myPix.length);
    document.getElementById("tableCard2").src = myPix[randomNum];
    myPix.splice(randomNum,1);
    inhalt.push(checks[randomNum]);
    flush.push(randomNum);
    checks.splice(randomNum,1);

    randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("tableCard3").src = myPix[randomNum];
    myPix.splice(randomNum,1);
    inhalt.push(checks[randomNum]);
    flush.push(randomNum);
    console.log(inhalt);
    checks.splice(randomNum,1);

    document.getElementById("theeOfaKind").style.background="transparent";
    document.getElementById("pair").style.background="transparent";
    document.getElementById("twoPair").style.background="transparent";

    var abfrage=threeOfaKind();
    flush1();
    if(straightFlush()==true){
        console.log(inhalt);
        document.getElementById("straightFlush").style.background="rgb(255, 0, 0)";
    }
    if(straight()==true){
        console.log(inhalt);
        document.getElementById("straight").style.background="rgb(255, 0, 0)";
    }
    if(abfrage==true){
        console.log(inhalt);
        document.getElementById("theeOfaKind").style.background="rgb(255, 0, 0)";
    }
   if(pair()==true&&abfrage!=true){
        console.log(inhalt);
        document.getElementById("pair").style.background="rgb(255, 0, 0)";

    }
    if(DoublePair() == true&&abfrage!=true){
        console.log(inhalt);
        document.getElementById("twoPair").style.background="rgb(255, 0, 0)";

    }
    flush=[];
    inhalt=[];
        //check(randomNum,randomNum2,randomNum3,randomNum4,randomNum5);

}
function straightFlush(){
    flush.sort((a, b) => a - b);
    console.log(flush);
    let  check1;
    let check2;
    let i=0;
    let c=0;
    let check3=1;
    while(i<=flush.length){
        c=i;
        check1=flush[i]
        while(c<=flush.length){
            check2=flush[c+1]
            if(check2==check1+4){
                check3++;
                if(check3==5){
                    return true;
                }
            }
            c++;
        }
        i++;


    }
    return false;

}
function flush1(){
    flush.sort((a, b) => a - b);
    console.log(flush);
    flush=[12,36,72,144,288];
    let c=0;
    let mod;
    let i;
    let check=1;
    while(c<=flush.length){
        i=c;
        if(flush[c]%2==0){
            mod=2;
        }
        else if(flush[c]%3==0){
            mod=3;
        }
        else if(flush[c]%4==0){
            mod=4;
        }else{
            mod=1
        }
        while(i<=flush.length){
            if(flush[i+1]%mod==0){
                check++;
                console.log(check,mod)
                if(check==5){
                    return true;
                }
            }
            i++;
        }
        c++;
        check=1;

    }
    return false;
}
function straight(){
    inhalt.sort((a, b) => a - b);
    let  check1;
    let check2;
    let i=0;
    let c=0;
    let check3=1;
    while(i<=inhalt.length){
        c=i;
        check1=inhalt[i]
        while(c<=inhalt.length){
            check2=inhalt[c+1]
            if(check2==check1+1){
                check3++;
                if(check3==5){
                    return true;
                }
            }
            c++;
        }
        i++;


    }
    return false;

}
function threeOfaKind(){
    console.log(inhalt);
    let i=0;
    let c=1;
    let c2=1;
    while(i<=inhalt.length){
        while(c<=inhalt.length){
            if(inhalt[i]===inhalt[c]){
                c2++;
                console.log(c2);
                if(c2==3){
                    return true;
                }
            }
            c++;
        }
        i++;
    }
    return false;
}
function DoublePair(){
    var valuesSoFar = Object.create(null);
    for (let i = 0; i < inhalt.length; ++i) {
        var value = inhalt[i];
        if (value in valuesSoFar) {
            return true;
        }
        valuesSoFar[value] = true;
    }
    return false;
}
function pair(){
    var valuesSoFar = Object.create(null);
    for (let i = 0; i < inhalt.length; ++i) {
        var value = inhalt[i];
        if (value in valuesSoFar) {
            inhalt.splice(i,1);
            DoublePair();
            return true;
        }
        valuesSoFar[value] = true;
    }
    return false;
}
function check(check,check2,check3,check4,check5){

    console.log(check,check2);


    const s=[0,1,2,3,4,5,6,7,8,9];
    let c=0;

    for (const inputValues of checks.from(checkEmailValues)) {

        if(inputValues == value) {
            console.log("matches");
        } else {
            console.log("doesnt match");
        }
    }
    while(c<=s.length){
        if(myPix[check].includes(s[c])==myPix[check2].includes(s[c])&&check<=40&&check2<=40&&myPix[check].includes(s[c])!=false&&myPix[check2].includes(s[c])!=false){
            document.getElementById("pair").style.background="rgb(255, 0, 0)";
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
    myPix.splice(check,1);
    myPix.splice(check2,1);

    exports.myPix2=myPix;
}

function chooseCard(){

}
