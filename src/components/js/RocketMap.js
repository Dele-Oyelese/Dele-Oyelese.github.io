import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import { useState, useEffect } from "react";
import '../css/RocketMap.css';





export default function RocketMap() {

  //Import Space Shuttle Icon
    const spaceShuttle = new Icon({
        iconUrl: "/space-shuttle.svg",
        iconSize: [25,25]
        })  
  //Base API CALL URL
    const baseURL = "https://lldev.thespacedevs.com/2.2.0/launch/upcoming/"
    const [launchData, setLaunchData] = useState(null)
    const now = new Date();
    
    // Date in the next 2 months in the future
    const future = new Date();
    future.setMonth(now.getMonth()+2);
    const nowJSON = now.toJSON();
    const futureJSON =  future.toJSON();

    console.log(nowJSON)
    console.log(futureJSON)
    const apiRequest = baseURL+"?net__gte:"+{nowJSON}+"&net__lt:"+{futureJSON};
    
    //Center the map to this location
    const [mapCenter, setMapCenter] = useState([57.430673, -152.353077])

  //Get API Data
  useEffect(() =>{
    fetch(apiRequest).then(res =>{
      return res.json()
    }).then(data => {
      console.log(data)
      setLaunchData(data)
    })
  },[]);
  return(


//Render the Map
<MapContainer center={mapCenter} zoom={3} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

{/* Arrow Function to map all locations given */}
  {launchData && launchData.results.map(site => (
        console.log(site.pad.location.name),
        <Marker
          key={site.id}
          position={[
            site.pad.latitude,
            site.pad.longitude
          ]}
          icon = {spaceShuttle}
          >
          
        <Popup
          position={[
            site.pad.latitude,
            site.pad.longitude
          ]}
        >
          <div>
            <h2>{site.pad.location.name}</h2>
            <p>Launch Pad Name:{site.pad.name}</p>
            <p>Launch Start Window: {site.window_start}</p>
          </div>
        </Popup>
    
      </Marker>
        ))
      }

</MapContainer>

// TODO Code so multiple launches same location can be seen
// TODO Window and Formatt to have explaination
// TODO Make it locked on the one Map not the others
);}
