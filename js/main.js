

function calcAmount () {
    let price = 1000;
    let mennyiseg = document.querySelector("#mennyiseg");
    let mennyisegNumber = parseInt(mennyiseg.value);

    if (mennyisegNumber<0) {
        alert("Mínusz darab nem kérhető")
    } else if (mennyisegNumber>5){
        alert("Sajnos ennyi mennyiséget nem tudunk vállalni.")
    } 
    else {
    let fizetendo = price * mennyisegNumber;
    document.querySelector("#szumma").innerHTML = fizetendo;
    }
}

    
