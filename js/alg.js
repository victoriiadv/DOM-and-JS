function verify(){
    console.log("a, d")
    let a = parseInt(elementA.innerText);
    let d = parseInt(elementD.innerText);
    console.log(a, d)

    if((Math.pow(a, 2)*2) >= Math.pow(d, 2)){
        result = "Можно выпилить квадратный брус шириной A."
        document.getElementById("result").innerText =  result;
    } else{
        result = "Нельзя выпилить квадратный брус шириной A."
        document.getElementById("result").innerText =  result;
    }
}

const elementA = document.getElementById("a");
const elementD = document.getElementById("d");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);
