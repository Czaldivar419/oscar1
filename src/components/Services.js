import React from 'react';

import { ServicesSection, ServiceTitle, ServiceItem, ServiceIcon,
ServicesTitle, ServicesList } from './styled/homepage.styled';


function Services() {
    return (
      <ServicesSection id='Services'>
<ServicesTitle>Our Services</ServicesTitle>
<ServicesList>
<ServiceItem>
<ServiceIcon src="realhardwood.jpg" alt="Service 1" />
<ServiceTitle>Hardwood Flooring</ServiceTitle>
<p>Experience the timeless beauty of natural hardwood floors with our premium quality flooring services.</p>
</ServiceItem>
<ServiceItem>
<ServiceIcon src="reallaminate.jpg" alt="Service 2" />
<ServiceTitle>Laminate Flooring</ServiceTitle>
<p>A budget-friendly alternative that captures the charm and elegance of hardwood.</p>
</ServiceItem>
<ServiceItem>
<ServiceIcon src="realtile.jpg" alt="Service 3" />
<ServiceTitle>Tile Flooring</ServiceTitle>
<p>Durable, stylish, easy to maintain, tile is perfect for high traffic areas.</p>
</ServiceItem>
<ServiceItem>
<ServiceIcon src="realrealshutters.png" alt="Service 4" />
<ServiceTitle>Windows/Shutters</ServiceTitle>
<p>Add style and function to any room with our custom-fit window treatments.</p>
</ServiceItem>
<ServiceItem>
<ServiceIcon src="realrealrealgeneral.png" alt="Service 5" />
<ServiceTitle>General Contracting</ServiceTitle>
<p>Our team of experts can handle all of your home improvement needs.</p>
</ServiceItem>
<ServiceItem>
<ServiceIcon src="realcarpeting.png" alt="Service 6" />
<ServiceTitle>Carpeting</ServiceTitle>
<p>Familar, soft, and comfortable, with endless colors and styles to choose from.</p>
</ServiceItem>
</ServicesList>
    </ServicesSection>
    );
  }
  
  export default Services;