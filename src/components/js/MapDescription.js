
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
                The project dynamically pulls the upcoming rocket launches in the next 2 months using <a style={{color: '#6d0000'}} href="https://thespacedevs.com/llapi">thespacedevs.com</a> API the launch information can be viewed by clicking the <img title="SpaceShip" src='/space-shuttle.svg' width="30px"/>
                icon<br />
            </p>
            <p>
                The project map is created using <a style={{color: '#6d0000'}} href="https://leafletjs.com/">leaflet</a><br />
                and the launch information is provided by <a  style={{color: '#6d0000'}} href="https://thespacedevs.com/llapi">thespacedevs.com</a><br />
                The background art was created using <a  style={{color: '#6d0000'}} href="https://www.midjourney.com/">MidJourney</a>
            </p>
        </div>

    )

}

export default MapDescription;

