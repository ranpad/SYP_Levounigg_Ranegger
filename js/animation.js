let posTop = 46;
let posLeft = 32;

function myMove() {
    let id = null;
    const elem = document.getElementById("card");
    let counter = 0;
    clearInterval(id);
    id = setInterval(frame, 25);
    function frame() {
        if (posLeft === 46 && posTop === 64) {
            posTop++;
            elem.style.top = posTop + "%";
            clearInterval(id);
        } else {
            posTop++;
            posLeft++;
            counter++;
            if(counter % 3 === 0){
                posTop++;
            }
            elem.style.top = posTop + "%";
            elem.style.left = posLeft + "%";
        }
    }
}