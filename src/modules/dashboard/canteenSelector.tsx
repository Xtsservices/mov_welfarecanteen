import React from "react";
import { Select, Button } from "antd";
import { CloseCircleOutlined, DownOutlined } from "@ant-design/icons";
import { CanteenSelectorProps } from "./types";
import { headerStyles } from "./styles";

const CanteenSelector: React.FC<CanteenSelectorProps> = ({
  options,
  selectedCanteen,
  onSelect,
}) => {
  const defaultOptions = [
    { value: "main", label: "Main Canteen" },
    { value: "staff", label: "Staff Canteen" },
    { value: "student", label: "Student Canteen" },
  ];

  const canteenOptions = options.length > 0 ? options : defaultOptions;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "42%",
        position: "relative",
      }}
    >
      <Select
        placeholder="Select your Canteen"
        style={headerStyles.canteenSelect}
        onChange={onSelect}
        value={selectedCanteen}
        suffixIcon={<DownOutlined />}
        options={canteenOptions}
        size="large"
        removeIcon
      />
      {selectedCanteen && (
        <Button
          type="text"
          icon={<CloseCircleOutlined style={{ color: "grey" }} />}
          onClick={() => onSelect(null)}
          aria-label="Remove selected canteen"
          style={headerStyles.removeCanteenButton}
        />
      )}
    </div>
  );
};

export default CanteenSelector;
