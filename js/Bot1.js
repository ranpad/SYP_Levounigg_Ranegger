var flushBot1=[];
var inhaltBot1=[];
var inhalteBot1=[];
var flusheBot1=[];
var move = 'nichts';
let cardscounter1=0;
let cardscounter2=0;
var bot1 = 'bot1';
var foldedBot1 = false;

function cardsBot1(){
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("card1Bot1").src = myPix[randomNum];
    myPix.splice(randomNum,1);
    inhalteBot1.push(checks[randomNum]);
    flusheBot1.push(randomNum);
    checks.splice(randomNum,1);

    randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("card2Bot1").src = myPix[randomNum];
    myPix.splice(randomNum,1);
    inhalteBot1.push(checks[randomNum]);
    flusheBot1.push(randomNum);
    checks.splice(randomNum,1);
    abfrageBot1();

}
function abfrageBot1(){
    if(cardscounter1===0){
        cardscounter1++;
        cardsBot1();

    }
    flushBot1=[];
    inhaltBot1=[];
    for (var i of flusheBot1) {
        flushBot1.push(i);
    }
    for (var i of inhalteBot1) {
        inhaltBot1.push(i);
    }

    flushBot1.push.apply(flushBot1, flush2);
    inhaltBot1.push.apply(inhaltBot1, inhalt2);
    console.log(inhaltBot1);

    if(RoyalFlush2()==true){
        console.log("royalFlush");
        move="RoyalFlush";
    }
    if(fourOfaKind2()==true){
        console.log("four of a kind");
        move="fourOfaKind";
    }
    else if(straight2()==true){
        console.log("straight");
        move="straight";
    }



    abfrage2=threeOfaKind2();
    pairC2=pair2();
    if(abfrage2==true && pairC2==true){
        console.log("Full house");
        move="Fullhouse";
    }
    else if(straightFlush2()==true){
        console.log("straight Flush");
        move="straightFlush";
    }
    else if(abfrage2==true){
        console.log("threeofakind");
        move="threeofakind";
    }
    if(pairC2==true&&abfrage2!=true){
        console.log("pair");
        move="pair";

    }
    if(DoublePair2() == true&&abfrage2!=true){
        console.log("two pair");
        move="doublepair";

    }
    abfrageBot2()

}

function moves1(){

    if(foldedBot1){
        return;
    }

    randomNum=Math.floor(Math.random() * 10);
    if(move=="RoyalFlush"){
        if(randomNum<=9){
            allInBot(bot1);
        }
        else{
            check(bot1);
        }
    }

    if(move=="straightFlush"){
        if(randomNum<=8){
            allInBot(bot1);
        }
        else{
            check(bot1);
        }
    }

    if(move=="fourOfaKind"){
        if(randomNum<=7){
            allInBot(bot1);
        }
        else{
            check(bot1);
        }
    }

    if(move=="Fullhouse"){
        if(randomNum<=6){
            allInBot(bot1);
        }
        else{
            check(bot1);
        }
    }

    if(move=="flush"){
        if(randomNum<=5){
            allInBot(bot1);
        }
        else{
            check(bot1);
        }
    }

    if(move=="straight"){
        if(randomNum<=4){
            allInBot(bot1);
        }
        else{
            check(bot1);
        }
    }

    if(move=="threeofakind"){
        if(randomNum<=3){
            allInBot(bot1);
        }
        else{
            if(randomNum<=9){
                check(bot1);
            }
            else{
                foldedBot1 = true;
                fold(bot1);
                return;
            }
        }
    }

    if(move=="twopairs"){
        if(randomNum<=1){
            allInBot(bot1);
        }
        else{
            if(randomNum<=5){
                check(bot1);
            }
            else{
                foldedBot1 = true;
                fold(bot1);
                return;
            }
        }
    }

    if(move=="pair"){
        if(randomNum<=1){
            allInBot(bot1);
        }
        else{
            if(randomNum<=3){
                check(bot1);
            }
            else{
                foldedBot1 = true;
                fold(bot1);
                return;
            }
        }
    }

    if(move=="nichts"){
        if (randomNum <= 8){
            check(bot1);
        }else{
            foldedBot1 = true;
            fold(bot1);
            return;
        }
    }
}

function foldOrAllIn1(){
    randomNum=Math.floor(Math.random() * 10);
    if (randomNum <= 8){
        foldedBot1 = true;
        fold(bot1);
        return;
    }else{
        allInBot(bot1);
    }
}


function RoyalFlush2(){
    flushBot1.sort((a, b) => a - b);
    inhaltBot1.sort((a, b) => a - b);
    let i=0;
    let c=0;
    let check=0;
    let check2=0;
    let check3=1;
    while(i<=inhaltBot1.length){
        c=i;
        if(inhaltBot1[i]==9){
            check=flushBot1[i];
            while(c<=flushBot1.length){
                check2=flushBot1[c+i];
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

function fourOfaKind2(){
    let i=0;
    let c=1;
    let c2=1;
    while(i<=inhaltBot1.length){
        while(c<=inhaltBot1.length){
            if(inhaltBot1[i]===inhaltBot1[c]){
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

function straightFlush2(){
    flushBot1.sort((a, b) => a - b);
    let  check1;
    let check2;
    let i=0;
    let c=0;
    let check3=0;
    while(i<=flushBot1.length){
        c=i;
        check1=flushBot1[i];
        while(c<flushBot1.length){
            check2=flushBot1[c+1];
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

function flushBot112(){
    flushBot1.sort((a, b) => a - b);
    let c=0;
    let mod;
    let i;
    let check=1;
    while(c<=flushBot1.length){
        i=c;
        if(flushBot1[c]%2==0){
            mod=2;
        }
        else if(flushBot1[c]%3==0){
            mod=3;
        }
        else if(flushBot1[c]%4==0){
            mod=4;
        }
        while(i<=flushBot1.length){
            if(flushBot1[i+1]%mod==0&&flushBot1[i+1]!=flushBot1[i]){
                check++;
                (check,mod)
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
function straight2(){
    inhaltBot1.sort((a, b) => a - b);
    let  check1;
    let check2;
    let i=0;
    let c=0;
    let check3=1;
    while(i<=inhaltBot1.length){
        c=i;
        check1=inhaltBot1[i]
        while(c<=inhaltBot1.length){
            check2=inhaltBot1[c+1]
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
function threeOfaKind2(){

    let i=0;
    let c=1;
    let c2=1;
    var safe1=[];
    while(i<=inhaltBot1.length){
        while(c<=inhaltBot1.length){
            if(inhaltBot1[i]===inhaltBot1[c]){
                c2++;
                safe1.push(c);
                (c2,inhaltBot1);
                if(c2==3){
                    i=1;
                    while(i<=3){
                        inhaltBot1.splice(safe1[i],1);
                        i++;
                    }
                    (inhaltBot1);
                    return true;
                }
            }
            c++;
        }
        i++;
    }
    return false;
}
function DoublePair2(){
    var valuesSoFar = Object.create(null);
    for (let i = 0; i < inhaltBot1.length; ++i) {
        var value = inhaltBot1[i];
        if (value in valuesSoFar) {
            return true;
        }
        valuesSoFar[value] = true;
    }
    return false;
}
function pair2(){
    var valuesSoFar = Object.create(null);
    for (let i = 0; i < inhaltBot1.length; ++i) {
        var value = inhaltBot1[i];
        if (value in valuesSoFar) {
            inhaltBot1.splice(i,1);
            DoublePair2();
            return true;
        }
        valuesSoFar[value] = true;
    }
    return false;
}