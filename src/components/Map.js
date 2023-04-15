import React, { useState } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { 
  AboutUsSection,
  AboutUsDescription,
} from './styled/homepage.styled';

const center = {
  lat: 34.0999062,
  lng: -117.3708811
};

const Map = () => {
  const [infoOpen, setInfoOpen] = useState(false);

  const handleMarkerClick = () => {
    setInfoOpen(true);
  };

  const handleInfoClose = () => {
    setInfoOpen(false);
  };

  return (
    <AboutUsSection id="info">
      <div>
        <AboutUsDescription>
          Looking to revamp your home or office space? Look no further than Rialto Flooring! We offer a wide range of flooring and general construction services to meet all of your needs. Contact us today to learn more about how we can help transform your space.
        </AboutUsDescription>
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={center}
          zoom={11}
          apiKey="YOUR_API_KEY"
        >
          <Marker position={center} onClick={handleMarkerClick}>
            {infoOpen && (
              <InfoWindow onCloseClick={handleInfoClose}>
                <div>
                  <h3>Rialto Flooring</h3>
                  <p>128 S Riverside Ave. Rialto, CA</p>
                  <p>(909) 258-2905</p>
                </div>
              </InfoWindow>
            )}
          </Marker>
        </GoogleMap>
      </div>
    </AboutUsSection>
  );
};

export default Map;