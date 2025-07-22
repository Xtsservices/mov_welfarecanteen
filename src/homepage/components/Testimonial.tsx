import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const Testimonial: React.FC = () => {
  return (
    <div>
      <Title level={2}>What Our Clients Say</Title>
      <Paragraph>Client feedback and testimonials go here.</Paragraph>
    </div>
  );
};

export default Testimonial;
