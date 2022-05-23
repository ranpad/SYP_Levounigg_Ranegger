const posTop = 46;
const posLeft = 32;

function myMove() {
    let id = null;
    let posT = posTop;
    let posL = posLeft;
    const elem = document.getElementById("card");
    let counter = 0;
    clearInterval(id);
    id = setInterval(frame, 25);
    function frame() {
        if (posL === 46 && posT === 64) {
            posT++;
            elem.style.top = posT + "%";
            clearInterval(id);
        } else {
            posT++;
            posL++;
            counter++;
            if(counter % 3 === 0){
                posT++;
            }
            elem.style.top = posT + "%";
            elem.style.left = posL + "%";
        }
    }
}
