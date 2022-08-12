// -------------------------problem number 1-------------------------
function radianToDegree(radian){

    let convertToDegree = radian * (180/Math.PI);

    if(typeof radian !== 'number'){
        return 'please provide a valid number';
    }
    
    return convertToDegree.toFixed(2);
}
//    let radianNum = radianToDegree(96);
//    console.log(radianNum);
// ----------------------------problem number 1------------------------------

// ---------------------------------problem number 2--------------------------
function isJavaScriptFile(jsFile){
    
     let isItJsFile = jsFile.endsWith('.js');

     if(typeof jsFile !== 'string'){
        return 'error';
     }

     return isItJsFile;
}
// let fileName = isJavaScriptFile('image.jpg.js');
// console.log(fileName);
// -------------------------------problem number 2-------------------------------------


// ------------------------problem number 3---------------------------

function oilPrice(Diesel, Petrol, Octan){

    let totalDiesel = 30;
    let totalPetrol = 20;
    let totalOctan = 10;

       let totalDieselLitter = Diesel * totalDiesel;
       let totalPetrolLitter = Petrol * totalPetrol;
       let totalOctanLitter = Octan * totalOctan;

    let totalCost = totalDieselLitter + totalPetrolLitter + totalOctanLitter;

    if (typeof Diesel !== 'number'){
        return 'error';
    }
    else if (typeof Petrol !== 'number'){
        return 'error';
    }
    else if (typeof Octan !== 'number'){
        return 'error';
    }
   
    return totalCost;
 }
//    let total = oilPrice(114, 130, 135);
//    console.log(total);
// -------------------------------problem num 3-----------------------------------------

// -------------------------------problem number 4----------------------------
function publicBusFare(people){
    const busCapacity = 50;
    const microCapacity = 11;
    const ticketPrice = 250;

    let peopleGoingToBus = people % busCapacity;

    let peopleGoingToMicro = peopleGoingToBus % microCapacity;

    let publicBusTicketPrice= peopleGoingToMicro * ticketPrice;

    if (typeof people !== 'number'){
        return 'error';
    }

    return publicBusTicketPrice;


// }
// let totalPeople = publicBusFare(365);
// console.log(totalPeople);
// ------------------------------problem number 4-------------------------------

// -------------------------------problem number 5----------------------------
function isBestFriend (object1, object2){
   
    if(firstObject.name == secondObject.friend && firstObject.friend == secondObject.name){
          return true;
    }
    else if (typeof object1 !== 'object'){
        return 'error';
    }
    else if (typeof object2 !== 'object'){
        return 'error';
    }
    else{
        return false;
    }
}
// let firstObject = {
    // name:"abul",
    // friend:"babul"
// };
// let secondObject ={
    // name:"babul",
    // friend:"abul"
// };

// let setPara = isBestFriend(firstObject, secondObject);
// console.log(setPara);
// ------------------------------problem number 5---------------------------------
