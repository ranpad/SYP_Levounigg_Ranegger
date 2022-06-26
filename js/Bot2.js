var flushBot2=[];
var inhaltBot2=[];
var inhalteBot2=[];
var flusheBot2=[];
var move;
let cardscounter4=0;
let cardscounter5=0;
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
    }
    if(fourOfaKind3()==true){
        console.log("four of a kind");
    }
    else if(straight3()==true){
        console.log("straight");
    }



    let abfrage=threeOfaKind3();
    let pairC=pair3();
    if(abfrage==true && pairC==true){
        console.log("Full house");
    }
    else if(straightFlush3()==true){
        console.log("straight Flush");
    }
    else if(abfrage==true){
        console.log("threeofakind");
    }
    if(pairC==true&&abfrage!=true){
        console.log("pair");

    }
    if(DoublePair3() == true&&abfrage!=true){
        console.log("two pair");

    }
        abfrageBot3()

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