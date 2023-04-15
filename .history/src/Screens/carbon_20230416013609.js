
import './carbon.css'
import { useState } from 'react';
export function Carbon(){
    let [totalFootprint,setTotalFootprint]=useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        let carKmperYear= e.target.carKmPerYear.value;
        let kmPerLitre = e.target.kmPerLitre.value;
        let electricKmPerYear = e.target.electricKmPerYear.value;
        let busKmPerYear = e.target.busKmPerYear.value;
        let trainKmPerYear = e.target.trainKmPerYear.value;
        let transportationFootprint = ((carKmperYear/kmPerLitre)*2.33 + electricKmPerYear*0.12 + busKmPerYear*0.04 + trainKmPerYear*0.06)/1000;
        let electricityUsage =  e.target.electricityUsage.value;
        let electricityFootprint = electricityUsage*0.000608;

        let meatConsumption =  e.target.meatConsumption.value;
        let dairyConsumption = e.target.dairyConsumption.value;
        let plantConsumption =  e.target.plantConsumption.value;

        let dietFootprint = (meatConsumption*30.0 + dairyConsumption*10.6 + plantConsumption*5.9)/1000;
        totalFootprint = transportationFootprint + electricityFootprint + dietFootprint;
        setTotalFootprint(totalFootprint);
    }
    return(
        <div id='carbon'>
            <div className='sections'>
                <div className='carbon-section'>
                    <h1>Carbon Footprint Calculator</h1>
                    <p>Check your carbon footprint: estimate the amount of carbon generated by your actions by taking this simple test.</p>
                </div>
                <div className='carbon-section' id='input'>
                    <form onSubmit={handleSubmit}>
                        <div className='question'>
                            How many kilometers do you drive per year?
                            <input type='number' id='carKmPerYear' defaultValue={0} min={0}/>
                        </div> <br></br>
                        <div className='question'>
                            What is the fuel efficiency of your car (in kilometers per litre)?
                            <input type='number' id='kmPerLitre' defaultValue={0} min={0}/>
                        </div> <br></br>
                        <div className='question'>
                            How many kilometers do you drive an electric vehicle per year?
                            <input type='number' id='electricKmPerYear' defaultValue={0} min={0}/>
                        </div> <br></br>
                        <div className='question'>
                            How many kilometers do you take the train per year?
                            <input type='number' id='busKmPerYear' defaultValue={0} min={0}/>
                        </div> <br></br>
                        <div className='question' >
                            How many kilowatt-hours of electricity do you use per year?
                            <input type='number' id='trainKmPerYear' defaultValue={0} min={0}/>
                        </div> <br></br>
                        <div className='question'>
                            How many kilowatt-hours of electricity do you use per year?
                            <input type='number' id='electricityUsage' defaultValue={0} min={0}/>
                        </div> <br></br>
                        <div className='question'>
                            How many kilograms of meat do you eat per year?
                            <input type='number' id='meatConsumption' defaultValue={0} min={0}/>
                        </div> <br></br>
                        <div className='question'>
                            How many kilograms of dairy do you eat per year?
                            <input type='number' id='dairyConsumption' defaultValue={0} min={0}/>
                        </div><br></br>
                        <div className='question'>
                            How many kilograms of plants do you eat per year?
                            <input type='number' id='plantConsumption' defaultValue={0} min={0}/>
                        </div>
                        <br/>
                        <button type='submit'>Submit</button>
                        Your annual carbon footprint is {totalFootprint.toFixed(2)} metric tonnes of CO2 equivalent.
                    </form>
                </div>
            </div>
        </div>
    )
}


