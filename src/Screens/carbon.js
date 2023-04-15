import {Navbar} from '../Components/Navbar';
export function Carbon(){
    // let carKmPerYear = parseFloat(prompt("How many kilometers do you drive per year?"));
    // let kmPerLitre = parseFloat(prompt("What is the fuel efficiency of your car (in kilometers per litre)?"));
    // let electricKmPerYear = parseFloat(prompt("How many kilometers do you drive an electric vehicle per year?"));
    // let busKmPerYear = parseFloat(prompt("How many kilometers do you take the bus per year?"));
    // let trainKmPerYear = parseFloat(prompt("How many kilometers do you take the train per year?"));
    // let transportationFootprint = ((carKmPerYear/kmPerLitre)*2.33 + electricKmPerYear*0.12 + busKmPerYear*0.04 + trainKmPerYear*0.06)/1000;
    // let electricityUsage = parseFloat(prompt("How many kilowatt-hours of electricity do you use per year?"));
    // let electricityFootprint = electricityUsage*0.000608;

    // // Ask the user for their diet habits
    // let meatConsumption = parseFloat(prompt("How many kilograms of meat do you eat per year?"));
    // let dairyConsumption = parseFloat(prompt("How many kilograms of dairy do you eat per year?"));
    // let plantConsumption = parseFloat(prompt("How many kilograms of plants do you eat per year?"));

    // // Calculate the carbon footprint of diet
    // let dietFootprint = (meatConsumption*30.0 + dairyConsumption*10.6 + plantConsumption*5.9)/1000;

    // // Calculate the total carbon footprint
    // let totalFootprint = transportationFootprint + electricityFootprint + dietFootprint;

    return(
        <div id='carbon'>
            <Navbar/>
        </div>
    )
}


