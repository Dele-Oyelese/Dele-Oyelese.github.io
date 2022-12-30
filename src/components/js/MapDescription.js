
import React from 'react';
import '../css/MapDescription.css'
import "../../App.css"

function MapDescription() {


    return (
        

        <div className="mapdescription-container">
        <h1 > Rocket Map </h1>
        <p>
            This project shows the upcoming rocket launches all around the globe! 
        </p> 
        <p>
            The project map is created using <a href="https://leafletjs.com/">leaflet</a> and the launch information is provided by <a href="https://thespacedevs.com/llapi">thespacedevs.com</a>
        </p>
        </div>

    )

}

export default MapDescription;

