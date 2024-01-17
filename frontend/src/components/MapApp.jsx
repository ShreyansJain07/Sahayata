import React from 'react'

export default function MapApp() {
    
const markers = [
    {
      title: "Marker 1",
      description: "This is marker 1",
      latitude: 51.505,
      longitude: -0.09,
    },
    {
      title: "Marker 2",
      description: "This is marker 2",
      latitude: 51.51,
      longitude: -0.1,
    },
    // Add more markers as needed
  ];
  
    return (
        <div>
          <h1>Map with Markers</h1>
          <MapComponent markers={markers} />
        </div>
      );
}


  