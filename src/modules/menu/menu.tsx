import React, { useState } from "react";
import Tiffin from "./tiffin";
import Lunch from "./lunch";
import Dinner from "./dinner";
import WorldtekLogo from "../../components/common/worldTekLogo";

type MenuType = "TIFFIN" | "LUNCH" | "DINNER";

const Menu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<MenuType>("TIFFIN");

  return (
    <div
      style={{
        maxWidth: "100%",
        margin: "0 auto",
        padding: "20px",
        paddingLeft: "28px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "-7px",
          marginTop: "10px",
          gap: "20px",
          paddingLeft: "6px",
          paddingRight: "6px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            flex: 1,
          }}
        >
          <TabButton
            label="TIFFIN"
            isActive={activeMenu === "TIFFIN"}
            onClick={() => setActiveMenu("TIFFIN")}
          />
          <TabButton
            label="LUNCH"
            isActive={activeMenu === "LUNCH"}
            onClick={() => setActiveMenu("LUNCH")}
          />
          <TabButton
            label="DINNER"
            isActive={activeMenu === "DINNER"}
            onClick={() => setActiveMenu("DINNER")}
          />
        </div>
        <div
          style={{
            backgroundColor: "#FFD700",
            borderRadius: "4px",
            padding: "10px 8px",
            fontSize: "12px",
            fontWeight: "bold",
            whiteSpace: "nowrap",
          }}
        >
          EDIT MENU
        </div>
      </div>

      <div>
        {activeMenu === "TIFFIN" && <Tiffin />}
        {activeMenu === "LUNCH" && <Lunch />}
        {activeMenu === "DINNER" && <Dinner />}
      </div>

      <WorldtekLogo />
    </div>
  );
};

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        marginRight: label === "TIFFIN" ? "35px" : "0",
        marginLeft: label === "DINNER" ? "35px" : "0",
        flex: "1",
        // color: isActive ? "black" : "white",
        color: "black",
        padding: "10px",
        // paddingLeft:"28px",
        maxWidth: "100%",
        textAlign: "center",
        // backgroundColor: isActive ? "rgb(1, 0, 128)" : "white",
        backgroundColor: isActive ? "#FFD700" : "white",
        borderRadius: "4px",
        border: "1px solid #e8e8e8",
        cursor: "pointer",
        fontWeight: "bold",
        transition: "background-color 0.3s",
      }}
    >
      {label}
    </button>
  );
};

export default Menu;
