const struggleBus = [];

const addPassenger = (name, wallet, isStruggling, seat) => {
    //make a passenger object
    //add it on the bus
    const passenger = {
        name: name,
        wallet: wallet,
        isStruggling: isStruggling
    };

    if (seat === 'back'){
        struggleBus.push(passenger);
    }
    else if (seat === 'front') {
        struggleBus.unshift(passenger);
    }
};

const unloadPassenger = (bus, seat) =>{
    //remove a passenger
    // return the passenger object
    if(seat === 'front'){
        //shift returns the element at the first index
        return bus.shift();
    }
    else if(seat === 'back'){
        // pop returns the element at the last index
        return bus.pop();
    }
};

const allAboard =(bus) =>{
    //loop over the passenger
    //give the bus cost $5
    //ig the passenger can affird it charge them
    //esle kick the off
    const busFare = 5;
    const validPassenger = [];

    bus.forEach((passenger) =>{
        if (passenger.wallet >=busFare){
            passenger.wallet -= busFare;
            validPassenger.push(passenger);
        }
    });
    return validPassenger;
};

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const busBuilder = (bus) => {
    let domString = '';
    for(let i =0; i < bus.length; i++){
        domString += `<div class = "bus-seat">`;
        domString +=    `<h4> ${bus[i].name}</h4>`;
        domString +=    `<p> ${bus[i].wallet}</p>`;
        domString +=    `<p> ${bus[i].isStruggling}</p>`;
        domString += `</div>`;
    };
    printToDom('the-bus', domString);
   
};
const init = () => {
    addPassenger ('mark',100, false, 'front');
    addPassenger ('matt',1000, true, 'back');
    addPassenger ('zoe',10, false, 'back');
    addPassenger ('michael',1, false, 'front');
    addPassenger ('emily', 3, false,'back');
    
    //console.log(struggleBus);

    const firstPassenger = unloadPassenger(struggleBus, 'front');
    //console.log(firstPassenger);
    const busPeople = allAboard(struggleBus);
    busBuilder(busPeople);
};

init();