import React from 'react';
import { VendorsContainer, VendorLogo, VendorTitle } from './styled/homepage.styled';

const vendors = [
  { name: "Vendor 1", logoUrl: "vendor1.png", url: "https://www.havwoods.com/us/?utm_source=google&utm_medium=pmax&utm_campaign=havwoods_flooring_usa&utm_content=assetgroup2&gclid=EAIaIQobChMItfC5wt2Y_gIVjQStBh0qIQQyEAAYASAAEgJvfPD_BwE" },
  { name: "Vendor 2", logoUrl: "vendor2.png", url: "https://elitestonegroup.com/" },
  { name: "Vendor 3", logoUrl: "vendor3.png", url: "https://www.crystalflooring.com/en/products.html" },
  { name: "Vendor 4", logoUrl: "vendor4.jpg", url: "https://elysiumtile.com/" },
  { name: "Vendor 5", logoUrl: "vendor5.jpg", url: "https://www.emser.com/" },
  { name: "Vendor 6", logoUrl: "vendor6.jpg", url: "http://masterfloors.org/" },
];

const Vendors = () => {
    return (
      <div id='Vendors'>
        <VendorTitle>Our Vendors</VendorTitle>
        <VendorsContainer>
          {vendors.map((vendor) => (
            <VendorLogo
              key={vendor.name}
              imageUrl={process.env.PUBLIC_URL + `${vendor.logoUrl}`}
              href={vendor.url}
            />
          ))}
        </VendorsContainer>
      </div>
    );
  };
  
  export default Vendors;