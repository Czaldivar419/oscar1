import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { 
  AboutUsSection,
  AboutUsDescription,
} from './styled/homepage.styled';

const center = {
  lat: 34.0999062,
  lng: -117.3708811
};

const Map = () => {
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
          <Marker position={center} />
        </GoogleMap>
      </div>
    </AboutUsSection>
  );
};

export default Map;