var flushBot3=[];
var inhaltBot3=[];
var inhalteBot3=[];
var flusheBot3=[];
let cardscounter3=0;
var move;
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
    }
    if(fourOfaKind4()==true){
        console.log("four of a kind");
    }
    else if(straight4()==true){
        console.log("straight");
    }


    let abfrage=threeOfaKind4();
    let pairC=pair4();
    if(abfrage==true && pairC==true){
        console.log("Full house");
    }
    else if(straightFlush4()==true){
        console.log("straight Flush");
    }
    else if(abfrage==true){
        console.log("threeofakind");
    }
    if(pairC==true&&abfrage!=true){
        console.log("pair");

    }
    if(DoublePair4() == true&&abfrage!=true){
        console.log("two pair");

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