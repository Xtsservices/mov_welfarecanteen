import React, { useEffect, useState } from "react";
import { Card, Row, Col, Typography, Spin, message, Button } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserHeader from "./userComponents/UserHeader";
import { BASE_URL } from "../constants/api";
import ndylogo from "../assets/images/navy_image.png"
import movlogo from "../assets/images/movlogo.jpg"


const { Title, Text } = Typography;

interface Unit {
  id: number;
  unitName: string;
  unitImage: string;
}

interface Canteen {
  id: number;
  canteenName: string;
  canteenCode: string;
  canteenImage: string;
}

const API_URL = "/user/getAllCanteens";

// Static units data (replace with API call if needed)
const units: Unit[] = [
  { id: 1, unitName: "NDV", unitImage: ndylogo },
  { id: 2, unitName: "MO(V)", unitImage: movlogo},
];

const UserSelectCanteen: React.FC = () => {
  const [canteens, setCanteens] = useState<Canteen[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedUnit) {
      const fetchCanteens = async () => {
        setLoading(true);
        try {
          const token = localStorage.getItem("Token");
          if (!token) {
            message.error("No token found. Please login.");
            return;
          }
          const res = await axios.get(`${BASE_URL}${API_URL}`, {
            headers: { Authorization: token },
          });
          setCanteens(res.data.data || []);
        } catch (err) {
          message.error("Failed to fetch canteens.");
        } finally {
          setLoading(false);
        }
      };
      fetchCanteens();
    }
  }, [selectedUnit]);

  const handleSelectUnit = (unit: Unit) => {
    setSelectedUnit(unit);
    message.success(`Selected ${unit.unitName}`);
  };

  const handleSelectCanteen = (canteen: Canteen) => {
    localStorage.setItem("canteenId", JSON.stringify(canteen.id));
    message.success(`Selected ${canteen.canteenName}`);
    navigate("/user/select-menu");
  };

  const handleBack = () => {
    setSelectedUnit(null);
    setCanteens([]);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      }}
    >
      <UserHeader />
      <div
        style={{
          maxWidth: 960,
          margin: "24px auto",
          background: "rgba(255,255,255,0.95)",
          borderRadius: 24,
          boxShadow: "0 8px 32px rgba(60,60,120,0.10)",
          padding: 32,
        }}
      >
        {!selectedUnit ? (
          <>
            <Title
              level={2}
              style={{
                textAlign: "center",
                marginBottom: 32,
                fontWeight: 700,
                letterSpacing: 1,
                color: "#2d3748",
              }}
            >
              🏢 Select Your Unit
            </Title>
            <Row gutter={[24, 24]} justify="center">
              {units.map((unit) => (
                <Col
                  key={unit.id}
                  xs={24}
                  sm={12}
                  md={8}
                  lg={6}
                  xl={6}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Card
                    hoverable
                    style={{
                      borderRadius: 20,
                      boxShadow: "0 4px 16px rgb(224, 224, 224)",
                      textAlign: "center",
                      border: "none",
                      background:
                        "linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)",
                      width: "100%",
                      maxWidth: 280,
                      display: "flex",
                      flexDirection: "column",
                    }}
                    bodyStyle={{
                      padding: 18,
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                    onClick={() => handleSelectUnit(unit)}
                    cover={
                      <img
                        alt={unit.unitName}
                        src={unit.unitImage}
                        style={{
                          width: "100%",
                          height: 180,
                          // objectFit: "cover",
                          borderRadius: "20px 20px 0 0",
                          background: "#f6f6f6",
                          borderBottom: "2px solid #e0e7ff",
                        }}
                      />
                    }
                  >
                    <div>
                      <Title
                        level={5}
                        style={{
                          marginBottom: 4,
                          fontWeight: 600,
                          color: "#374151",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                        title={unit.unitName}
                      >
                        {unit.unitName}
                      </Title>
                    </div>
                    <Button
                      type="primary"
                      shape="round"
                      size="middle"
                      style={{
                        marginTop: 20,
                        width: "100%",
                        background:
                          "linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)",
                        border: "none",
                        fontWeight: 600,
                        letterSpacing: 1,
                        boxShadow: "0 2px 8px #c7d2fe",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectUnit(unit);
                      }}
                    >
                      Select
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        ) : (
          <>
            <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
              <Button
                type="link"
                onClick={handleBack}
                style={{ marginRight: 16, fontWeight: 600 }}
              >
                ← Back to Units
              </Button>
              <Title
                level={2}
                style={{
                  textAlign: "center",
                  marginBottom: 0,
                  fontWeight: 700,
                  letterSpacing: 1,
                  color: "#2d3748",
                  flexGrow: 1,
                }}
              >
                🍽️ Select Your Canteen
              </Title>
            </div>
            {loading ? (
              <Spin
                size="large"
                style={{ display: "block", margin: "40px auto" }}
              />
            ) : (
              <Row gutter={[24, 24]} justify="center">
                {canteens.map((canteen) => (
                  <Col
                    key={canteen.id}
                    xs={24}
                    sm={12}
                    md={8}
                    lg={6}
                    xl={6}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Card
                      hoverable
                      style={{
                        borderRadius: 20,
                        boxShadow: "0 4px 16px rgb(224, 224, 224)",
                        textAlign: "center",
                        border: "none",
                        background:
                          "linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)",
                        width: "100%",
                        maxWidth: 280,
                        display: "flex",
                        flexDirection: "column",
                      }}
                      bodyStyle={{
                        padding: 18,
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                      onClick={() => handleSelectCanteen(canteen)}
                      cover={
                        <img
                          alt={canteen.canteenName}
                          src={canteen.canteenImage}
                          style={{
                            width: "100%",
                            height: 140,
                            objectFit: "cover",
                            borderRadius: "20px 20px 0 0",
                            background: "#f6f6f6",
                            borderBottom: "2px solid #e0e7ff",
                          }}
                        />
                      }
                    >
                      <div>
                        <Title
                          level={5}
                          style={{
                            marginBottom: 4,
                            fontWeight: 600,
                            color: "#374151",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                          title={canteen.canteenName}
                        >
                          {canteen.canteenName}
                        </Title>
                        <Text
                          type="secondary"
                          style={{
                            fontSize: 14,
                            color: "#6366f1",
                            fontWeight: 500,
                            letterSpacing: 0.5,
                          }}
                        >
                          Code: {canteen.canteenCode}
                        </Text>
                      </div>
                      <Button
                        type="primary"
                        shape="round"
                        size="middle"
                        style={{
                          marginTop: 20,
                          width: "100%",
                          background:
                            "linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)",
                          border: "none",
                          fontWeight: 600,
                          letterSpacing: 1,
                          boxShadow: "0 2px 8px #c7d2fe",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectCanteen(canteen);
                        }}
                      >
                        Select
                      </Button>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default UserSelectCanteen;