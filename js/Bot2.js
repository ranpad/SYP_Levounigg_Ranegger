var flush=[];
var inhalt=[];
var inhalte=[];
var flushe=[];
var move;
function cardsBot2(){
    inhalte=[];
    flushe=[];
    flush=[];
    inhalt=[]
    randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("card1Bot2").src = myPix[randomNum];
    myPix.splice(randomNum,1);
    inhalte.push(checks[randomNum]);
    flushe.push(randomNum);
    checks.splice(randomNum,1);

    randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("card2Bot2").src = myPix[randomNum];
    myPix.splice(randomNum,1);
    inhalte.push(checks[randomNum]);
    flushe.push(randomNum);
    checks.splice(randomNum,1);
    console.log(flush,inhalt);
    abfrageBot2();
    cardsBot3()


}
function abfrageBot2() {
    flush=[];
    inhalt=[];
    for (var i of flushe) {
        flush.push(i);
    }
    for (var i of inhalte) {
        inhalt.push(i);
    }

    flush.push.apply(flush, flush2);
    inhalt.push.apply(inhalt, inhalt2);
    console.log(flush);

    if(RoyalFlush3==true){
        console.log("royalFlush");
    }
    if(fourOfaKind3==true){
        console.log("four of a kind");
    }
    else if(flush13()==true){
        console.log("Flush");
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
    abfrageBot3();

}


function RoyalFlush3(){
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
function fourOfaKind3(){
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
function straightFlush3(){
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
function flush13(){
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
function straight3(){
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
function threeOfaKind3(){
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
function DoublePair3(){
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
function pair3(){
    var valuesSoFar = Object.create(null);
    for (let i = 0; i < inhalt.length; ++i) {
        var value = inhalt[i];
        if (value in valuesSoFar) {
            inhalt.splice(i,1);
            DoublePair2();
            return true;
        }
        valuesSoFar[value] = true;
    }
    return false;
}