var flushBot2=[];
var inhaltBot2=[];
var inhalteBot2=[];
var flusheBot2=[];
var move = "nichts";
let cardscounter4=0;
let cardscounter5=0;
var bot2 = 'bot2';
var foldedBot2 = false;

function cardsBot2(){
    inhalte=[];
    flushe=[];
    flushBot2=[];
    inhaltBot2=[]
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("card1Bot2").src = myPix[randomNum];
    myPix.splice(randomNum,1);
    inhalteBot2.push(checks[randomNum]);
    flusheBot2.push(randomNum);
    checks.splice(randomNum,1);

    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("card2Bot2").src = myPix[randomNum];
    myPix.splice(randomNum,1);
    inhalteBot2.push(checks[randomNum]);
    flusheBot2.push(randomNum);
    checks.splice(randomNum,1);
    (flushBot2,inhaltBot2);
    abfrageBot2();



}
function abfrageBot2() {
    if(cardscounter4===0){
        cardscounter4++;
        cardsBot2();
    }
    flushBot2=[];
    inhaltBot2=[];
    for (var i of flusheBot2) {
        flushBot2.push(i);
    }
    for (var i of inhalteBot2) {
        inhaltBot2.push(i);
    }

    flushBot2.push.apply(flushBot2, flush2);
    inhaltBot2.push.apply(inhaltBot2, inhalt2);
    console.log(inhaltBot2);
    if(RoyalFlush3()==true){
        console.log("royalFlush");
        move2="RoyalFlush";
    }
    if(fourOfaKind3()==true){
        console.log("four of a kind");
        move2="fourOfaKind";
    }
    else if(straight3()==true){
        console.log("straight");
        move2="straight";
    }



    abfrage3=threeOfaKind3();
    pairC3=pair3();
    if(abfrage==true && pairC3==true){
        console.log("Full house");
        move2="Fullhouse";
    }
    else if(straightFlush3()==true){
        console.log("straight Flush");
        move2="straightFlush";
    }
    else if(abfrage3==true){
        console.log("threeofakind");
        move2="threeofakind";
    }
    if(pairC3==true&&abfrage3!=true){
        console.log("pair");
        move2="pair";

    }
    if(DoublePair3() == true&&abfrage3!=true){
        console.log("two pair");
        move2="doublepair";

    }
    abfrageBot3()

}

function moves2(){

    if(foldedBot2){
        return;
    }

    randomNum=Math.floor(Math.random() * 10);
    if(move=="RoyalFlush"){
        if(randomNum<=9){
            allInBot(bot2);
        }
        else{
            check(bot2);
        }
    }

    if(move=="straightFlush"){
        if(randomNum<=8){
            allInBot(bot2);
        }
        else{
            check(bot2);
        }
    }

    if(move=="fourOfaKind"){
        if(randomNum<=7){
            allInBot(bot2);
        }
        else{
            check(bot2);
        }
    }

    if(move=="Fullhouse"){
        if(randomNum<=6){
            allInBot(bot2);
        }
        else{
            check(bot2);
        }
    }

    if(move=="flush"){
        if(randomNum<=5){
            allInBot(bot2);
        }
        else{
            check(bot2);
        }
    }

    if(move=="straight"){
        if(randomNum<=4){
            allInBot(bot2);
        }
        else{
            check(bot2);
        }
    }

    if(move=="threeofakind"){
        if(randomNum<=3){
            allInBot(bot2);
        }
        else{
            if(randomNum<=9){
                check(bot2);
            }
            else{
                foldedBot2 = true;
                fold(bot2);
                return;
            }
        }
    }

    if(move=="twopairs"){
        if(randomNum<=1){
            allInBot(bot2);
        }
        else{
            if(randomNum<=8){
                check(bot2);
            }
            else{
                foldedBot2 = true;
                fold(bot2);
                return;
            }
        }
    }

    if(move=="pair"){
        if(randomNum<=1){
            allInBot(bot2);
        }
        else{
            if(randomNum<=8){
                check(bot2);
            }
            else{
                foldedBot2 = true;
                fold(bot2);
                return;
            }
        }
    }

    if(move=="nichts"){
        if (randomNum <= 8){
            check(bot2);
        }else{
            foldedBot2 = true;
            fold(bot2);
            return;
        }
    }
}

function foldOrAllIn2(){
    randomNum=Math.floor(Math.random() * 10);
    if (randomNum <= 8){
        foldedBot2 = true;
        fold(bot2);
        return;
    }else{
        allInBot(bot2);
    }
}

function RoyalFlush3(){
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
function fourOfaKind3(){
    let i=0;
    let c=1;
    let c2=1;
    while(i<=inhaltBot2.length){
        while(c<=inhaltBot2.length){
            if(inhaltBot2[i]===inhaltBot2[c]){
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
function straightFlush3(){
    flushBot2.sort((a, b) => a - b);
    let  check1;
    let check2;
    let i=0;
    let c=0;
    let check3=0;
    while(i<=flushBot2.length){
        c=i;
        check1=flushBot2[i];
        while(c<flushBot2.length){
            check2=flushBot2[c+1];
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
function flushBot213(){
    flushBot2.sort((a, b) => a - b);
    let c=0;
    let mod;
    let i;
    let check=1;
    while(c<=flushBot2.length){
        i=c;
        if(flushBot2[c]%2==0){
            mod=2;
        }
        else if(flushBot2[c]%3==0){
            mod=3;
        }
        else if(flushBot2[c]%4==0){
            mod=4;
        }
        while(i<=flushBot2.length){
            if(flushBot2[i+1]%mod==0&&flushBot2[i+1]!=flushBot2[i]){
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
function straight3(){
    inhaltBot2.sort((a, b) => a - b);
    let  check1;
    let check2;
    let i=0;
    let c=0;
    let check3=1;
    while(i<=inhaltBot2.length){
        c=i;
        check1=inhaltBot2[i]
        while(c<=inhaltBot2.length){
            check2=inhaltBot2[c+1]
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
function threeOfaKind3(){
    let i=0;
    let c=1;
    let c2=1;
    var safe2=[];
    while(i<=inhaltBot2.length){
        while(c<=inhaltBot2.length){
            if(inhaltBot2[i]===inhaltBot2[c]){
                c2++;
                safe2.push(c);
                if(c2==3){
                    i=1;
                    while(i<=3){
                        inhaltBot2.splice(safe2[i],1);
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
function DoublePair3(){
    var valuesSoFar = Object.create(null);
    for (let i = 0; i < inhaltBot2.length; ++i) {
        var value = inhaltBot2[i];
        if (value in valuesSoFar) {
            return true;
        }
        valuesSoFar[value] = true;
    }
    return false;
}
function pair3(){
    var valuesSoFar = Object.create(null);
    for (let i = 0; i < inhaltBot2.length; ++i) {
        var value = inhaltBot2[i];
        if (value in valuesSoFar) {
            inhaltBot2.splice(i,1);
            DoublePair2();
            return true;
        }
        valuesSoFar[value] = true;
    }
    return false;
}