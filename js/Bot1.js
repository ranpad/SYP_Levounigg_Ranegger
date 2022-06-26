var flush=[];
var inhalt=[];
var inhalte=[];
var flushe=[];
var move;
function cardsBot1(){
    randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("card1Bot1").src = myPix[randomNum];
    myPix.splice(randomNum,1);
    inhalte.push(checks[randomNum]);
    flushe.push(randomNum);
    checks.splice(randomNum,1);

    randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("card2Bot1").src = myPix[randomNum];
    myPix.splice(randomNum,1);
    inhalte.push(checks[randomNum]);
    flushe.push(randomNum);
    checks.splice(randomNum,1);
    console.log(flush);
    abfrageBot1();
    cardsBot2();

}
function abfrageBot1(){
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

    if(RoyalFlush2==true){
        console.log("royalFlush");
        move="RoyalFlush";
    }
    if(fourOfaKind2==true){
        console.log("four of a kind");
        move="fourOfaKind";
    }
    else if(flush12()==true){
        console.log("Flush");
        move="flush";
    }
    else if(straight2()==true){
        console.log("straight");
        move="straight";
    }



    let abfrage=threeOfaKind2();
    let pairC=pair2();
    if(abfrage==true && pairC==true){
        console.log("Full house");
        move="Fullhouse";
    }
    else if(straightFlush2()==true){
        console.log("straight Flush");
        move="straightFlush";
    }
    else if(abfrage==true){
        console.log("threeofakind");
        move="threeofakind";
    }
    if(pairC==true&&abfrage!=true){
        console.log("pair");
        move="pair";

    }
    if(DoublePair2() == true&&abfrage!=true){
        console.log("two pair");
        move="doublepair";

    }
    abfrageBot2();

}
function moves(){
    randomNum=Math.floor(Math.random() * 10);
    if(move=="RoyalFlush"){
        if(randomNum<=9){
            Allin;
        }
        else{
            check;
        }
    }
    if(move=="straightFlush"){
        if(randomNum<=8){
            ALLin;
        }
        else{
            check;
        }
    }
    if(move=="fourOfaKind"){
        if(randomNum<=7){
            ALLin;
        }
        else{
            check;
        }
    }
    if(move=="Fullhouse"){
        if(randomNum<=6){
            ALLin;
        }
        else{
            check;
        }
    }
    if(move=="flush"){
        if(randomNum<=5){
            ALLin;
        }
        else{
            check;
        }
    }
    if(move=="straight"){
        if(randomNum<=4){
            ALLin;
        }
        else{
            check;
        }
    }
    if(move=="threeofakind"){
        if(randomNum<=3){
            ALLin;
        }
        else{
            if(randomNum<=7){
                check;
            }
            else{
                fold;
            }
        }
    }
    if(move=="twopairs"){
        if(randomNum<=2){
            ALLin;
        }
        else{
            if(randomNum<=5){
                check;
            }
            else{
                fold;
            }
        }
    }
    if(move=="pair"){
        if(randomNum<=2){
            ALLin;
        }
        else{
            if(randomNum<=3){
                check;
            }
            else{
                fold;
            }
        }
    }

}
function RoyalFlush2(){
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
function fourOfaKind2(){
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
function straightFlush2(){
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
function flush12(){
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
function straight2(){
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
function threeOfaKind2(){
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
function DoublePair2(){
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
function pair2(){
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