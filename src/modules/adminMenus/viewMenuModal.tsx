import React, { useEffect, useState } from "react";
import {
  Modal,
  Button,
  Spin,
  Card,
  Row,
  Col,
  Typography,
  Divider,
  Tag,
  Space,
} from "antd";
import dayjs from "dayjs";
import { Menu, Item, MenuConfiguration } from "./types";
import {
  itemService,
  menuConfigService,
  canteenService,
} from "../../auth/apiService";

interface ViewMenuModalProps {
  visible: boolean;
  menu: Menu;
  onCancel: () => void;
}

const { Text, Title } = Typography;

const ViewMenuModal: React.FC<ViewMenuModalProps> = ({
  visible,
  menu,
  onCancel,
}) => {
  const [items, setItems] = useState<Item[]>([]);
  const [, setMenuConfiguration] =
    useState<MenuConfiguration | null>(null);
  const [, setCanteen] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (visible && menu) {
      fetchData();
    }
  }, [visible, menu]);

  const fetchData = async () => {
    try {
      setLoading(true);

      // Fetch all needed data in parallel
      const [itemsResponse, menuConfigResponse, canteensResponse] =
        await Promise.all([
          itemService.getAllItems(),
          menuConfigService.getAllMenuConfigurations(),
          canteenService.getAllCanteens(),
        ]);

      if (itemsResponse?.data) {
        setItems(itemsResponse.data);
      }

      if (menuConfigResponse?.data) {
        const menuConfig = menuConfigResponse.data.find(
          (config: MenuConfiguration) => config.id === menu.menuConfigurationId
        );
        setMenuConfiguration(menuConfig || null);
      }

      if (canteensResponse?.data) {
        const selectedCanteen = canteensResponse.data.find(
          (c: any) => c.id === menu.canteenId
        );
        setCanteen(selectedCanteen || null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!menu) return null;

  const getMenuItemById = (itemId: number): Item | undefined => {
    return items.find((item) => item.id === itemId);
  };

  const renderDateRange = () => {
    const startDate = dayjs(
      (menu?.menuMenuConfiguration?.defaultStartTime ?? 0) * 1000 // Convert to milliseconds
    ).format("HH:mm A");
    const endDate = dayjs(
      (menu?.menuMenuConfiguration?.defaultEndTime ?? 0) * 1000 // Convert to milliseconds
    ).format("HH:mm A");
    return `${startDate} - ${endDate}`;
  };

  const modalFooter = [
    <Button key="close" onClick={onCancel}>
      Close
    </Button>,
  ];

  return (
    <Modal
      title="Menu Details"
      open={visible}
      width={800}
      onCancel={onCancel}
      footer={modalFooter}
      styles={{
        body: { padding: "24px", maxHeight: "80vh", overflow: "auto" },
      }}
    >
      {loading ? (
        <div
          style={{ display: "flex", justifyContent: "center", padding: "40px" }}
        >
          <Spin size="large" />
        </div>
      ) : (
        <>
          <div style={{ marginBottom: "24px" }}>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={16}>
                <Title level={4} style={{ marginTop: 0, marginBottom: "8px" }}>
                  {menu.menuMenuConfiguration?.name}
                </Title>
                <Space>
                  <Tag color="green">{menu?.canteenMenu?.canteenName}</Tag>
                </Space>
              </Col>
              <Col xs={24} md={8}>
                <Card
                  size="small"
                  style={{
                    backgroundColor: "#f5f5f5",
                    borderRadius: "8px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Text type="secondary">Available</Text>
                    <Text strong>{renderDateRange()}</Text>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>

          <Divider style={{ margin: "16px 0" }} />

          <div>
            <Title level={5} style={{ marginTop: 0, marginBottom: "16px" }}>
              Menu Items 
            </Title>
            <Row gutter={[16, 16]}>
              {menu?.menuItems?.map((menuItem) => {
                const item = getMenuItemById(menuItem.itemId);
                if (!item) return null;

                return (
                  <Col xs={24} sm={12} key={menuItem.itemId}>
                    <Card
                      size="small"
                      styles={{ body: { padding: "16px" } }}
                      style={{ height: "100%" }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text strong>{item.name}</Text>
                        <Text type="secondary">₹{item?.pricing?.price}</Text>
                      </div>
                      <Text
                        type="secondary"
                        style={{
                          fontSize: "12px",
                          marginTop: "4px",
                          display: "block",
                        }}
                      >
                        {item.description}
                      </Text>
                      <div
                        style={{
                          marginTop: "12px",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text type="secondary" style={{ fontSize: "12px" }}>
                          Quantity: {menuItem.minQuantity} -{" "}
                          {menuItem.maxQuantity}
                        </Text>
                      </div>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        </>
      )}
    </Modal>
  );
};

export default ViewMenuModal;
