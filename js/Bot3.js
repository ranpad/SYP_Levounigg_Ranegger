var flushBot3=[];
var inhaltBot3=[];
var inhalteBot3=[];
var flusheBot3=[];
let cardscounter3=0;
var move = "nichts";
var bot3 = 'bot3';
var foldedBot3 = false;

function cardsBot3(){
    inhalte=[];
    flushe=[];
    flushBot3=[];
    inhaltBot3=[]
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("card1Bot3").src = myPix[randomNum];
    myPix.splice(randomNum,1);
    inhalteBot3.push(checks[randomNum]);
    flusheBot3.push(randomNum);
    checks.splice(randomNum,1);

    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("card2Bot3").src = myPix[randomNum];
    myPix.splice(randomNum,1);
    inhalteBot3.push(checks[randomNum]);
    flusheBot3.push(randomNum);
    checks.splice(randomNum,1);
    abfrageBot3();
}
function abfrageBot3(){
    if(cardscounter3===0){
        cardscounter3++;
        cardsBot3();
    }
    flushBot3=[];
    inhaltBot3=[];
    for (var i of flusheBot3) {
        flushBot3.push(i);
    }
    for (var i of inhalteBot3) {
        inhaltBot3.push(i);
    }

    flushBot3.push.apply(flushBot3, flush2);
    inhaltBot3.push.apply(inhaltBot3, inhalt2);
    console.log(inhaltBot3);

    if(RoyalFlush4()==true){
        console.log("royalFlush");
        move3="RoyalFlush";
    }
    if(fourOfaKind4()==true){
        console.log("four of a kind");
        move3="fourOfaKind";
    }
    else if(straight4()==true){
        console.log("straight");
        move3="straight";
    }



    abfrage4=threeOfaKind4();
    pairC4=pair4();
    if(abfrage4==true && pairC4==true){
        console.log("Full house");
        move3="Fullhouse";
    }
    else if(straightFlush4()==true){
        console.log("straight Flush");
        move3="straightFlush";
    }
    else if(abfrage4==true){
        console.log("threeofakind");
        move3="threeofakind";
    }
    if(pairC4==true&&abfrage4!=true){
        console.log("pair");
        move3="pair";

    }
    if(DoublePair4() == true&&abfrage4!=true){
        console.log("two pair");
        move3="doublepair";

    }

}

function moves3(){

    if(foldedBot3){
        return;
    }

    randomNum=Math.floor(Math.random() * 10);
    if(move=="RoyalFlush"){
        if(randomNum<=9){
            allInBot(bot3);
        }
        else{
            check(bot3);
        }
    }

    if(move=="straightFlush"){
        if(randomNum<=8){
            allInBot(bot3);
        }
        else{
            check(bot3);
        }
    }

    if(move=="fourOfaKind"){
        if(randomNum<=7){
            allInBot(bot3);
        }
        else{
            check(bot3);
        }
    }

    if(move=="Fullhouse"){
        if(randomNum<=6){
            allInBot(bot3);
        }
        else{
            check(bot3);
        }
    }

    if(move=="flush"){
        if(randomNum<=5){
            allInBot(bot3);
        }
        else{
            check(bot3);
        }
    }

    if(move=="straight"){
        if(randomNum<=4){
            allInBot(bot3);
        }
        else{
            check(bot3);
        }
    }

    if(move=="threeofakind"){
        if(randomNum<=3){
            allInBot(bot3);
        }
        else{
            if(randomNum<=9){
                check(bot3);
            }
            else{
                foldedBot3 = true;
                fold(bot3);
                return;
            }
        }
    }

    if(move=="twopairs"){
        if(randomNum<=1){
            allInBot(bot3);
        }
        else{
            if(randomNum<=8){
                check(bot3);
            }
            else{
                foldedBot3 = true;
                fold(bot3);
                return;
            }
        }
    }

    if(move=="pair"){
        if(randomNum<=1){
            allInBot(bot3);
        }
        else{
            if(randomNum<=8){
                check(bot3);
            }
            else{
                foldedBot3 = true;
                fold(bot3);
                return;
            }
        }
    }

    if(move=="nichts"){
        if (randomNum <= 8){
            check(bot3);
        }else{
            foldedBot3 = true;
            fold(bot3);
            return;
        }
    }
}

function foldOrAllIn3(){
    randomNum=Math.floor(Math.random() * 10);
    if (randomNum <= 8){
        foldedBot3 = true;
        fold(bot3);
        return;
    }else{
        allInBot(bot3);
    }
}


function RoyalFlush4(){
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
function fourOfaKind4(){
    let i=0;
    let c=1;
    let c2=1;
    while(i<=inhaltBot3.length){
        while(c<=inhaltBot3.length){
            if(inhaltBot3[i]===inhaltBot3[c]){
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
function straightFlush4(){
    flushBot3.sort((a, b) => a - b);
    let  check1;
    let check2;
    let i=0;
    let c=0;
    let check3=0;
    while(i<=flushBot3.length){
        c=i;
        check1=flushBot3[i];
        while(c<flushBot3.length){
            check2=flushBot3[c+1];
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
function flushBot314(){
    flushBot3.sort((a, b) => a - b);
    let c=0;
    let mod;
    let i;
    let check=1;
    while(c<=flushBot3.length){
        i=c;
        if(flushBot3[c]%2==0){
            mod=2;
        }
        else if(flushBot3[c]%3==0){
            mod=3;
        }
        else if(flushBot3[c]%4==0){
            mod=4;
        }
        while(i<=flushBot3.length){
            if(flushBot3[i+1]%mod==0&&flushBot3[i+1]!=flushBot3[i]){
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
function straight4(){
    inhaltBot3.sort((a, b) => a - b);
    let  check1;
    let check2;
    let i=0;
    let c=0;
    let check3=1;
    while(i<=inhaltBot3.length){
        c=i;
        check1=inhaltBot3[i]
        while(c<=inhaltBot3.length){
            check2=inhaltBot3[c+1]
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
function threeOfaKind4(){
    let i=0;
    let c=1;
    let c2=1;
    var safe3=[];
    while(i<=inhaltBot3.length){
        while(c<=inhaltBot3.length){
            if(inhaltBot3[i]===inhaltBot3[c]){
                c2++;
                safe3.push(c);
                if(c2==3){
                    i=1;
                    while(i<=3){
                        inhaltBot3.splice(safe3[i],1);
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
function DoublePair4(){
    var valuesSoFar = Object.create(null);
    for (let i = 0; i < inhaltBot3.length; ++i) {
        var value = inhaltBot3[i];
        if (value in valuesSoFar) {
            return true;
        }
        valuesSoFar[value] = true;
    }
    return false;
}
function pair4(){
    var valuesSoFar = Object.create(null);
    for (let i = 0; i < inhaltBot3.length; ++i) {
        var value = inhaltBot3[i];
        if (value in valuesSoFar) {
            inhaltBot3.splice(i,1);
            DoublePair2();
            return true;
        }
        valuesSoFar[value] = true;
    }
    return false;
}