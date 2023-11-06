function calculateAverage(){
    let divAverage = document.querySelector(".containerAverage");
    divAverage.classList.remove("none");
    let average = ((1*2) + (2*15) + (3*18) + (4*25) + (5*40))/100
    let pAverage = document.querySelector(".average")
    pAverage.innerHTML=average;
    console.log("A média do restaurante é:", average);
}