import React from "react";
import { Form, Input, Button, Typography, Row, Col, Card } from "antd";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const { Title, Text } = Typography;
const { TextArea } = Input;

const ContactAndEnquiry: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <section
      id="contact"
      style={{
        fontFamily: "sans-serif",
        padding: "2rem 1rem",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Row
        gutter={[16, 16]}
        style={{
          maxWidth: "1000px",
          width: "100%",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* Left Column */}
        <Col xs={24} md={12}>
          <Card
            style={{
              backgroundColor: "#010080",
              color: "#fff",
              padding: "2rem",
              minHeight: "100%",
            }}
            bordered={false}
          >
            <Title level={5} style={{ fontStyle: "italic", color: "#fff" }}>
              Contact Us
            </Title>
            <br />
            <div style={{ marginBottom: "1.5rem" }}>
              <Text strong style={{ color: "#86efac" }}>
                <FaWhatsapp style={{ marginRight: "8px" }} />
                Whatsapp
              </Text>
              <p
                style={{
                  marginLeft: "1.5rem",
                  fontSize: "0.9rem",
                  color: "#fff",
                }}
              >
                +91 9900990099 | +91 9900990099 | <br />
                +91 9900990099
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <Text strong style={{ color: "#86efac" }}>
                <FaEnvelope style={{ marginRight: "8px" }} />
                Our Mail
              </Text>
              <p
                style={{
                  marginLeft: "1.5rem",
                  fontSize: "0.9rem",
                  color: "#fff",
                }}
              >
                lkjhgfdsa@gmail.com
              </p>
            </div>

            <div>
              <Text strong style={{ color: "#86efac" }}>
                <FaMapMarkerAlt style={{ marginRight: "8px" }} />
                Address
              </Text>
              <p
                style={{
                  marginLeft: "1.5rem",
                  fontSize: "0.9rem",
                  color: "#fff",
                }}
              >
                Welfare Canteens
                <br />
                Welfare department
                <br />
                Visakhapatnam -530014
              </p>
            </div>
          </Card>
        </Col>

        {/* Right Column */}
        <Col xs={24} md={12}>
          <Card
            style={{
              backgroundColor: "#fff",
              padding: "2rem",
              minHeight: "100%",
            }}
          >
            <Title level={5} style={{ fontStyle: "italic", color: "#010080" }}>
              Enquire Now
            </Title>
            <br />

            <Form
              form={form}
              layout="vertical"
              onFinish={(values) => {
                console.log("Form Submitted:", values);
                // Reset form fields after submission
                form.resetFields();
              }}
              onFinishFailed={(errorInfo) => {
                console.log("Form Submission Failed:", errorInfo);
              }}
            >
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="name"
                    rules={[
                      { required: true, message: "Please enter your name" },
                      {
                        min: 3,
                        message: "Name must be at least 3 characters long",
                      },
                    ]}
                  >
                    <Input placeholder="Name *" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="mobile"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your mobile number",
                      },
                      {
                        pattern: /^[6-9]\d{9}$/,
                        message: "Please enter a valid 10-digit mobile number",
                      },
                    ]}
                  >
                    <Input placeholder="Mobile *" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[16, 16]}>
                <Col xs={24} sm={24}>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                        message: "Please enter a valid email",
                      },
                    ]}
                  >
                    <Input placeholder="Email *" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Please describe your requirements",
                  },
                  {
                    min: 10,
                    message: "Description must be at least 10 characters long",
                  },
                ]}
              >
                <TextArea
                  rows={4}
                  placeholder="Please describe what you need. *"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    backgroundColor: "#010080",
                    borderColor: "#010080",
                    float: "right",
                  }}
                >
                  Enquire Now
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default ContactAndEnquiry;
