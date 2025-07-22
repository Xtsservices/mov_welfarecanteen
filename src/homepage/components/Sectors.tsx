import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const Sectors: React.FC = () => {
  return (
    <div>
      <Title level={2}>Our Sectors</Title>
      <Paragraph>This is where we showcase the different sectors we serve.</Paragraph>
    </div>
  );
};

export default Sectors;
