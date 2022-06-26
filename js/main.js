myPix = [
            "img/cards/2_of_clubs.png",        "img/cards/2_of_diamonds.png",     "img/cards/2_of_hearts.png",     "img/cards/2_of_spades.png",
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
 var refill=[
     "img/cards/2_of_clubs.png",        "img/cards/2_of_diamonds.png",     "img/cards/2_of_hearts.png",     "img/cards/2_of_spades.png",
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
 checks=[
     "1","1","1","1",
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
 name;
 inhalt2=[];
 flush2=[];
moveNumberPlayer=0;
function showcard() {
    inhalt=[];
    flush=[];
    flush2=[];
    inhalt2=[];

    myPix=refill;

    for (var i of flusheBot1) {
        flushBot1.push(i);
    }
    document.getElementById("pair").style.background="transparent";
    document.getElementById("twoPair").style.background="transparent";

    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("card").src = myPix[randomNum];
    inhalt.push(checks[randomNum]);
    flush.push(randomNum);
    myPix.splice(randomNum,1);

    checks.splice(randomNum,1);

    randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("card2").src = myPix[randomNum];
    inhalt.push(checks[randomNum]);
    flush.push(randomNum);
    myPix.splice(randomNum,1);
    checks.splice(randomNum,1);
    abfrage();
}


function abfrage(){
    console.log(inhalt);
    if(RoyalFlush()==true){
        moveNumberPlayer=9;
        name="RoyalFlush";
    }
    if(fourOfaKind()==true){
        moveNumberPlayer=7;
        name="fourofakind";
    }
    else if(straight()==true){
        moveNumberPlayer=4;
        name="straight";
    }
    abfrage1=threeOfaKind();
    pairC=pair();

    if(abfrage1===true && pairC===true){
        moveNumberPlayer=6;
        name="FullHouse";
    }
    if(straightFlush()===true){
        moveNumberPlayer=8;
        name="straightFlush";
    }
    if(abfrage1===true){
        moveNumberPlayer=3;
        name="ThreeOfaKind";
    }
    if(pairC===true&&abfrage1!==true){
        moveNumberPlayer=1;
        name="Pair";

    }
    if(DoublePair()===true){
        moveNumberPlayer=2;
        name="DoublePair";

    }
    abfrageBot1();

}
function table123(){
    randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("tableCard1").src = myPix[randomNum];
    inhalt.push(checks[randomNum]);
    flush.push(randomNum);
    inhalt2.push(checks[randomNum]);
    flush2.push(randomNum);
    myPix.splice(randomNum,1);
    checks.splice(randomNum,1);

    randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("tableCard2").src = myPix[randomNum];
    inhalt.push(checks[randomNum]);
    flush.push(randomNum);
    inhalt2.push(checks[randomNum]);
    flush2.push(randomNum);
    myPix.splice(randomNum,1);
    checks.splice(randomNum,1);

    randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("tableCard3").src = myPix[randomNum];
    inhalt.push(checks[randomNum]);
    flush.push(randomNum);
    inhalt2.push(checks[randomNum]);
    flush2.push(randomNum);
    myPix.splice(randomNum,1);
    checks.splice(randomNum,1);
    abfrage();
}

function table4(){
    randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("tableCard4").src = myPix[randomNum];
    inhalt.push(checks[randomNum]);
    flush.push(randomNum);
    inhalt2.push(checks[randomNum]);
    flush2.push(randomNum);
    checks.splice(randomNum,1);
    myPix.splice(randomNum,1);
    abfrage();
}

function table5(){
    randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("tableCard5").src = myPix[randomNum];
    inhalt.push(checks[randomNum]);
    flush.push(randomNum);
    inhalt2.push(checks[randomNum]);
    flush2.push(randomNum);
    checks.splice(randomNum,1);
    myPix.splice(randomNum,1);
    checks.splice(randomNum,1);
    abfrage();
}

function RoyalFlush(){
    flush.sort((a, b) => a - b);
    inhalt.sort((a, b) => a - b);
    let i=0;
    let c=0;
    let check=0;
    let check2=0;
    let check3=1;
    while(i<=inhalt.length){
        c=i;
        if(inhalt[i]==9){
            check= flush[i];
            while(c<=flush.length){
                check2= flush[c+i];
                if(check==check2+4){
                    check3++;
                    if(check3==5){
                        return true;
                    }
                }
                c++;

            }
        }
        i++;
    }

    return false
}

function fourOfaKind(){
    let i=0;
    let c=1;
    let c2=1;
    while(i<=inhalt.length){
        while(c<=inhalt.length){
            if(inhalt[i]===inhalt[c]){
                c2++;
                if(c2==4){
                    i=1;
                    while(i<=4){
                        i++;
                    }
                    return true;
                }
            }
            c++;
        }
        i++;
    }
    return false;
}

function straightFlush(){
    flush.sort((a, b) => a - b);
    let  check1;
    let check2;
    let i=0;
    let c=0;
    let check3=0;
    while(i<=flush.length){
        c=i;
        check1=flush[i];
        while(c<flush.length){
            check2=flush[c+1];
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

function flushfunc(){
    flush.sort((a, b) => a - b);
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
        }
        while(i<=flush.length){
            if(flush[i+1]%mod==0&&flush[i+1]!=flush[i]){
                check++;
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
    let i=0;
    let c=1;
    let c2=1;
    var safe=[];
    while(i<=inhalt.length){
        while(c<=inhalt.length){
            if(inhalt[i]===inhalt[c]){
                c2++;
                safe.push(c);
                if(c2==3){
                    i=1;
                    while(i<=3){
                        inhalt.splice(safe[i],1);
                        i++;
                    }
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
    console.log(inhalt);
    var valuesSoFar = Object.create(null);
    for (let i = 0; i < inhalt.length; ++i) {
        var value = inhalt[i];
        if (value in valuesSoFar) {
            console.log("double")
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
