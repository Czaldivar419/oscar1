import React from "react";

import { TestimonialsSection, TestimonialsTitle, TestimonialsList, TestimonialItem,
TestimonialText, TestimonialAuthor } from "./styled/homepage.styled";

function Testimonials() {
    return (
      <TestimonialsSection>
<TestimonialsTitle>What Our Customers Say</TestimonialsTitle>
<TestimonialsList>
<TestimonialItem>
<TestimonialText>"Rialto Flooring did an amazing job installing our new hardwood floors. The team was professional and efficient, and the end result was beyond our expectations."</TestimonialText>
<TestimonialAuthor>- John Smith</TestimonialAuthor>
</TestimonialItem>
<TestimonialItem>
<TestimonialText>"We had Rialto Flooring install new tile flooring in our kitchen and it looks fantastic. We're so happy with the quality of work and attention to detail."</TestimonialText>
<TestimonialAuthor>- Jane Doe</TestimonialAuthor>
</TestimonialItem>
<TestimonialItem>
<TestimonialText>"I highly recommend Rialto Flooring for anyone looking for a reliable and affordable flooring company. They made the process easy and stress-free."</TestimonialText>
<TestimonialAuthor>- Bob Johnson</TestimonialAuthor>
</TestimonialItem>
</TestimonialsList>
      </TestimonialsSection>
    );
  }

  export default Testimonials;