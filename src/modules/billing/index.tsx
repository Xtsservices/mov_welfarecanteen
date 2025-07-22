import React from "react";
import { Card, Typography, Button, Divider, Space } from "antd";
import PaymentMethod from "./paymentMethod";
import BillItemRow from "./billitem";
import FoodItems from "./foodItems";
import WorldtekLogo from "../../components/common/worldTekLogo";

const { Title } = Typography;
interface PaymentIconProps {
  icon: string;
  alt: string;
}

const PaymentIcon: React.FC<PaymentIconProps> = ({ icon, alt }) => {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        background: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
      }}
    >
      <img src={icon} alt={alt} style={{ height: "25px" }} />
    </div>
  );
};

const PaymentIcons: React.FC = () => {
  return (
    <Space size={16}>
      <PaymentIcon
        icon="https://www.phonepe.com/webstatic/static/favicon-c7659cce.ico"
        alt="PhonePe"
      />
      <PaymentIcon
        icon="https://pay.google.com/about/static/images/social/knowledge_graph_logo.png"
        alt="Google Pay"
      />
      <PaymentIcon
        icon="https://pbs.twimg.com/profile_images/1285931393847500801/xgLTt1i7_400x400.jpg"
        alt="Paytm"
      />
    </Space>
  );
};

const Billing: React.FC = () => {
  // Responsive styles for different screen sizes
  const containerStyle: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  };

  const cardsContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    flexWrap: "wrap",
  };

  const billCardStyle: React.CSSProperties = {
    borderRadius: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    flex: 1,
    minWidth: "300px",
  };

  const paymentCardStyle: React.CSSProperties = {
    borderRadius: "20px",
    background: "#000080",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    flex: 1,
    minWidth: "300px",
    maxWidth: "450px",
  };

  const billHeadingStyle: React.CSSProperties = {
    fontSize: "22px",
    fontWeight: 600,
    color: "#2657BC",
    marginBottom: "24px",
  };

  const paymentHeadingStyle: React.CSSProperties = {
    fontSize: "18px",
    fontWeight: 600,
    color: "white",
    marginBottom: "24px",
    textAlign: "center",
  };

  const proceedButtonStyle: React.CSSProperties = {
    height: "40px",
    borderRadius: "8px",
    background: "white",
    color: "#2657BC",
    border: "none",
    fontWeight: 500,
    marginTop: "20px",
    width: "100%",
  };

  return (
    <div style={containerStyle}>
      <div style={cardsContainerStyle}>
        <Card style={billCardStyle}  styles={{body : {padding : "30px"}}}>
          <Title level={4} style={billHeadingStyle}>
            Bill Summary
          </Title>

          <FoodItems />

          <Divider style={{ margin: "24px 0", backgroundColor: "#eee" }} />

          <div style={{ margin: "24px 0" }}>
            <BillItemRow
              label="Grilled Chicken Burger"
              amount={129}
              quantity={1}
            />
            <BillItemRow label="Pasta Alfredo" amount={159} quantity={1} />
            <BillItemRow label="Greek Salad" amount={89} quantity={1} />
            <BillItemRow label="Garlic Bread" amount={22} quantity={1} />
            <Divider style={{ margin: "16px 0", backgroundColor: "#eee" }} />
            <BillItemRow label="GST And Restaurant Charges" amount={29} />
            <BillItemRow label="Platform Fee" amount={10} />
            <BillItemRow label="Total Amount" amount={438} isTotal />
          </div>
        </Card>

        <Card
          style={paymentCardStyle}
          styles={{body:{
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}}
        >
          <div>
            <Title level={4} style={paymentHeadingStyle}>
              Payment Method
            </Title>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "30px",
              }}
            >
              <PaymentIcons />
            </div>

            <div>
              <PaymentMethod title="Credit/Debit Card" />
              <PaymentMethod title="Net Banking" />
              <PaymentMethod title="Cash" />
            </div>
          </div>

          <Button style={proceedButtonStyle}>Proceed To Pay</Button>
        </Card>
      </div>

      <WorldtekLogo />
    </div>
  );
};

export default Billing;
