import React, { useEffect } from 'react';
import MapDescription from '../js/MapDescription';
import RocketMap from "../js/RocketMap";


function MapProject() {

    useEffect(() => {
        // Scroll to MapDescription component when component is mounted
        window.scrollTo(0, document.getElementById('map-description'));
      }, []);
    return (    
        <>
        <MapDescription id= 'map-description'/>
        <RocketMap/>
        
    
        </> );
}
export default MapProject;