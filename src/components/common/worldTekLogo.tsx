import React from "react";
import { Typography, Space } from "antd";
import footerLogo from "../../assets/images/footerLogo.png";

const WorldtekLogo: React.FC = () => {
  return (
    <div
      style={{ textAlign: "center", marginTop: "27px", marginBottom: "0px" }}
    >
      <Space align="center">
        <div style={{ marginTop: "10px" }}>
          <Typography.Text
            style={{
              color: "#333",
              fontSize: "15px",
              fontWeight: 400,
              marginTop: "50px",
            }}
          >
            Powered by
          </Typography.Text>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "120px",
              // height: "50px",
              marginTop: "10px",
              // marginBottom: "25px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src={footerLogo}
              alt="logo"
              style={{
                // width: "100%",
                width:"69%",
                height:"75%",
                // marginTop: "30px",
                // marginLeft: "32px",
                // marginRight: "35px",
                // height: "420%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </Space>
    </div>
  );
};

export default WorldtekLogo;
