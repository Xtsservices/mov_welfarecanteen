import React from "react";
import { Layout } from "antd";
import FooterLogo from "../../assets/images/footerLogo.png";
const { Footer: AntFooter } = Layout;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      {/* <WorldtekLogo /> */}
      <AntFooter
        style={{
          flexShrink: 0,
          textAlign: "center",
          background: "#fff",
          borderTop: "1px solid #e8e8e8",
          padding: "12px 0",
          fontSize: "14px",
          color: "#666",
          display:"flex",
          alignItems:"center",
          justifyContent:'center'
        }}
      >
        <div>
          © {currentYear}  MOV WelfareCanteen. All rights reserved. | Powered by{" "}
        </div>

        <img
          src={FooterLogo}
          alt="logo"
          style={{ width: "87px", height: "43px", objectFit:"cover" }}
        />
      </AntFooter>
    </div>
  );
};
{
  /* <strong>WorldTek</strong> */
}
export default Footer;
