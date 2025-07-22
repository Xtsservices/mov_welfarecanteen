import React from "react";
import { Carousel, Typography, Row, Col, Avatar, Card } from "antd";
import {
  FaHospital,
  FaUniversity,
  FaIndustry,
  FaBuilding,
  FaTheaterMasks,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";

const { Title, Text } = Typography;

interface Sector {
  label: string;
  icon: React.ReactNode;
}

interface Testimonial {
  name: string;
  text: string;
  avatar: string;
}

const ReachAndTestimonials: React.FC = () => {
  const sectors: Sector[] = [
    { label: "Healthcare", icon: <FaHospital /> },
    { label: "Institutional", icon: <FaUniversity /> },
    { label: "Industrial", icon: <FaIndustry /> },
    { label: "Corporate", icon: <FaBuilding /> },
    { label: "Social Events", icon: <FaTheaterMasks /> },
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Purvi",
      text: "I can’t stop thinking about how amazing the food and the staff was. And my guests can’t stop talking about it as well!!!",
      avatar: "https://cdn-icons-png.flaticon.com/512/4128/4128176.png",
    },
    {
      name: "Rahul",
      text: "Professional and punctual, the service was top-notch. Our event went flawlessly thanks to the team.",
      avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
    },
    {
      name: "Anjali",
      text: "Delicious food, courteous staff, and great presentation. Everyone loved it!",
      avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
    },
  ];

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      {/* Sector Reach Section */}
      <div style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <Title level={4} style={{ color: "#dc2626", fontStyle: "italic", marginBottom: "0.5rem" }}>
          Our reach spanning across sectors
        </Title>
        <Title level={2} style={{ fontWeight: 700, marginBottom: "1rem" }}>
          The catering with the royal touch
        </Title>
        <Text style={{ maxWidth: "800px", margin: "0 auto", display: "block", color: "#333" }}>
          As one of the leading companies in the food services space in the country, we have a wide
          reach across sectors including healthcare, corporate, educational institutions, and View More.
        </Text>
        <Row gutter={[16, 16]} justify="center" style={{ marginTop: "2rem" }}>
          {sectors.map((sector, index) => (
            <Col key={index} xs={12} sm={8} md={6} lg={4} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", color: "green" }}>{sector.icon}</div>
              <Text strong style={{ marginTop: "0.5rem", display: "block", color: "#dc2626" }}>
                {sector.label}
              </Text>
            </Col>
          ))}
        </Row>
      </div>

      {/* Testimonial Carousel Section */}
      <div
        style={{
          padding: "3rem 1rem",
          backgroundImage: `url('https://www.tamau.in/Images/buffet-bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#fff",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(82, 101, 0, 0.7)",
            padding: "3rem 1rem",
            textAlign: "center",
          }}
        >
          <Title level={5} style={{ fontStyle: "italic", color: "#fff", marginBottom: "0.5rem" }}>
            Testimonial
          </Title>
          <Title level={2} style={{ fontWeight: 700, marginBottom: "2rem" }}>
            The catering with the royal touch
          </Title>
          <Carousel autoplay autoplaySpeed={4000} dots>
            {testimonials.map((item, index) => (
              <div key={index}>
                <Card
                  style={{
                    background: "#dc2626",
                    borderRadius: "40px",
                    padding: "2rem",
                    maxWidth: "600px",
                    margin: "0 auto",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                    border: "6px solid #a3e635",
                  }}
                >
                  <Row align="middle" gutter={16}>
                    <Col>
                      <Avatar
                        size={120}
                        src={item.avatar}
                        style={{
                          border: "8px solid #a3e635",
                          backgroundColor: "#fff",
                        }}
                      />
                    </Col>
                    <Col flex="auto">
                      <Title level={4} style={{ fontWeight: 700, marginBottom: "1rem" }}>
                        {item.name.toUpperCase()}
                      </Title>
                      <Text style={{ fontSize: "1rem", lineHeight: "1.5", color: "#fff" }}>
                        <FaQuoteLeft style={{ color: "#a3e635", marginRight: "0.5rem" }} />
                        {item.text}
                        <FaQuoteRight style={{ color: "#a3e635", marginLeft: "0.5rem" }} />
                      </Text>
                    </Col>
                  </Row>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ReachAndTestimonials;
