import { Typography, Row, Col, Image } from "antd";
import image from "../images/image 1.png"; 
import image1 from "../images/image 1.png"; 
import image2 from "../images/image 1.png"; 
import image3 from "../images/image 1.png"; 

const { Paragraph } = Typography;

const galleryImages = [image, image1, image2, image3]; // reuse or import others similarly

export default function GallerySection() {
  return (
    <section
      id="gallery"
      style={{
        marginTop: "-100px",
        padding: "5rem 1rem", // Reduced padding
        maxWidth: "1200px",
        margin: "0 auto",
        fontFamily: "sans-serif",
        textAlign: "center",
      }}
    >
      <Paragraph
        style={{
          color: "#010080",
          fontStyle: "italic",
          fontWeight: "bold",
          marginBottom: "2.5rem",
          fontSize: "1.5rem",
          
        }}
      >
        Gallery
      </Paragraph>
    
      <Row gutter={[16, 16]}>
        {galleryImages.map((src, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Image
              src={src}
              alt={`Gallery ${index + 1}`}
              style={{
                borderRadius: "8px",
                objectFit: "cover",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            />
          </Col>
        ))}
      </Row>
    </section>
  );
}
