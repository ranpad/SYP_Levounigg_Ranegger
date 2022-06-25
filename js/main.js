

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
 refill=[];
refill=myPix;
 checks=["1","1","1","1",
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
 inhalt2=[];
 flush2=[];

function showcard() {
    flush2=[];
    inhalt2=[];

    if(myPix.length<=6){
        console.log(myPix.length);
        myPix=refill;
    }

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

    function table123(){
        randomNum = Math.floor(Math.random() * myPix.length);
        document.getElementById("tableCard1").src = myPix[randomNum];
        myPix.splice(randomNum,1);
        inhalt.push(checks[randomNum]);
        flush.push(randomNum);
        inhalt2.push(checks[randomNum]);
        flush2.push(randomNum);
        checks.splice(randomNum,1);

        randomNum = Math.floor(Math.random() * myPix.length);
        document.getElementById("tableCard2").src = myPix[randomNum];
        myPix.splice(randomNum,1);
        inhalt.push(checks[randomNum]);
        flush.push(randomNum);
        inhalt2.push(checks[randomNum]);
        flush2.push(randomNum);
        checks.splice(randomNum,1);

        randomNum = Math.floor(Math.random() * myPix.length);
        document.getElementById("tableCard3").src = myPix[randomNum];
        myPix.splice(randomNum,1);
        inhalt.push(checks[randomNum]);
        flush.push(randomNum);
        console.log(inhalt);
        inhalt2.push(checks[randomNum]);
        flush2.push(randomNum);
        checks.splice(randomNum,1);
    }

     function table4(){
        randomNum = Math.floor(Math.random() * myPix.length);
        document.getElementById("tableCard4").src = myPix[randomNum];
        myPix.splice(randomNum,1);
        inhalt.push(checks[randomNum]);
        flush.push(randomNum);
        console.log(inhalt);
        inhalt2.push(checks[randomNum]);
        flush2.push(randomNum);
        checks.splice(randomNum,1);
    }

    function table5(){
        randomNum = Math.floor(Math.random() * myPix.length);
        document.getElementById("tableCard5").src = myPix[randomNum];
        myPix.splice(randomNum,1);
        inhalt.push(checks[randomNum]);
        flush.push(randomNum);
        console.log(inhalt);
        inhalt2.push(checks[randomNum]);
        flush2.push(randomNum);
        checks.splice(randomNum,1);
    }

    document.getElementById("theeOfaKind").style.background="transparent";
    document.getElementById("pair").style.background="transparent";
    document.getElementById("twoPair").style.background="transparent";
    document.getElementById("flush").style.background="transparent";
    if(RoyalFlush==true){
        document.getElementById("royalFlush").style.background="rgb(255, 0, 0)";
    }
    if(fourOfaKind()==true){
        document.getElementById("fourOfaKind").style.background="rgb(255, 0, 0)";
    }
    else if(flushfunc()==true){
        document.getElementById("flush").style.background="rgb(255, 0, 0)";
    }
    else if(straight()==true){
        document.getElementById("straight").style.background="rgb(255, 0, 0)";
    }

    let abfrage=threeOfaKind();
    let pairC=pair();
    if(abfrage==true && pairC==true){
        document.getElementById("fullHouse").style.background="rgb(255, 0, 0)";
    }
    if(straightFlush()==true){
        document.getElementById("straightFlush").style.background="rgb(255, 0, 0)";
    }
    if(abfrage==true){
        document.getElementById("theeOfaKind").style.background="rgb(255, 0, 0)";
    }
    if(pairC==true&&abfrage!=true){
        document.getElementById("pair").style.background="rgb(255, 0, 0)";

    }
    if(DoublePair() == true&&abfrage!=true){
        document.getElementById("twoPair").style.background="rgb(255, 0, 0)";

    }
    flush=[];
    inhalt=[];

    Bot1();

    //check(randomNum,randomNum2,randomNum3,randomNum4,randomNum5);
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
            check=flush[i];
            while(c<=flush.length){
                check2=flush[c+i];
                if(check==check2+4){
                    check3++;
                    if(check3==5){
                        return true;
                    }
                }
            }
        }
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
                console.log(c2,inhalt);
                if(c2==4){
                    i=1;
                    while(i<=4){
                        i++;
                    }
                    console.log(inhalt);
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
    console.log(flush);
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
    console.log(flush);
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
    let i=0;
    let c=1;
    let c2=1;
    var safe=[];
    while(i<=inhalt.length){
        while(c<=inhalt.length){
            if(inhalt[i]===inhalt[c]){
                c2++;
                safe.push(c);
                console.log(c2,inhalt);
                if(c2==3){
                    i=1;
                    while(i<=3){
                        inhalt.splice(safe[i],1);
                        i++;
                    }
                    console.log(inhalt);
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