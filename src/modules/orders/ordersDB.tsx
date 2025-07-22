import React, { useEffect, useState } from "react";
import { Card, Row, Col, Table, Empty } from "antd";
import { DollarCircleOutlined, ShoppingCartOutlined, CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import BackHeader from "../../components/common/backHeader";
import { useParams } from "react-router-dom";
import { adminDashboardService } from "../../auth/apiService";

interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  title: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, title }) => {
  return (
    <Card
      style={{
        margin: "0",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        border: "1px solid #f0f0f0",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      styles={{
        body: {
          padding: "clamp(16px, 4vw, 24px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          minHeight: "120px",
          justifyContent: "center",
        },
      }}
      hoverable
    >
      <div
        style={{
          width: "clamp(50px, 12vw, 60px)",
          height: "clamp(50px, 12vw, 60px)",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "clamp(8px, 2vw, 12px)",
          fontSize: "clamp(20px, 5vw, 24px)",
          color: "#1890ff",
        }}
      >
        {icon}
      </div>
      <div
        style={{
          fontSize: "clamp(18px, 5vw, 24px)",
          fontWeight: "bold",
          marginBottom: "clamp(4px, 1vw, 6px)",
          color: "#262626",
          lineHeight: "1.2",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: "clamp(11px, 3vw, 14px)",
          color: "#8c8c8c",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
          fontWeight: "500",
          lineHeight: "1.3",
          textAlign: "center",
          wordBreak: "break-word",
        }}
      >
        {title}
      </div>
    </Card>
  );
};

interface Order {
  createdAt: number;
  updatedAt: number;
  id: number;
  orderDate: number;
  orderNo: string;
  totalAmount: number;
  status: string;
  canteenId: number;
  menuConfigurationId: number;
  orderCanteen: { id: number; canteenName: string };
  orderItems: Array<{
    id: number;
    quantity: number;
    price: number;
    total: number;
    itemId: number;
    menuItemItem: {
      id: number;
      name: string;
      description: string;
      type: string;
      status: string;
      quantity: number;
      quantityUnit: string;
    };
  }>;
  menuName: string;
}

interface TableData {
  key: string;
  itemName: string;
  quantity: number;
  quantityUnit: string;
}

const OrdersDashboard: React.FC = () => {
  const route = useParams();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const [selectedDate, setSelectedDate] = useState<string>(`${year}-${month}-${day}`);

  useEffect(() => {
    fetchOrders();
  }, [selectedDate]);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      let response;
      const formattedDate = selectedDate.replace(/-/g, '/'); // Convert YYYY-MM-DD to YYYY/MM/DD
      if (route?.canteenId) {
        response = await adminDashboardService.getTotalOrders(
          parseInt(route?.canteenId),
          { orderDate: formattedDate }
        );
      } else {
        response = await adminDashboardService.getTotalOrders(
          undefined,
          { orderDate: formattedDate }
        );
      }

      if (response && response?.data) {
        setOrders(response.data);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  // Date change handler
  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  // Group orders by menuName, summing quantities by itemName and collecting quantityUnit (excluding canceled orders)
  const groupedByMenu = orders.reduce((acc, order) => {
    if (order.status === "canceled") {
      return acc; // Skip canceled orders
    }
    const menuName = order.menuName; // Use menuName directly without index
    
    if (!acc[menuName]) {
      acc[menuName] = {};
    }
    
    order.orderItems.forEach(item => {
      const itemName = item.menuItemItem.name;
      const quantityUnit = item.menuItemItem.quantityUnit;
      if (!acc[menuName][itemName]) {
        acc[menuName][itemName] = { quantity: 0, quantityUnit };
      }
      acc[menuName][itemName].quantity += item.quantity;
    });
    
    return acc;
  }, {} as Record<string, Record<string, { quantity: number; quantityUnit: string }>>);

  // Prepare table data for each menuName
  const getTableData = (menuName: string) => {
    return Object.entries(groupedByMenu[menuName] || {}).map(([itemName, { quantity, quantityUnit }], index) => ({
      key: `${menuName}-${itemName}-${index}`,
      itemName,
      quantity,
      quantityUnit,
    }));
  };

  // Table columns
  const columns = [
    {
      title: "Item Name",
      dataIndex: "itemName",
      key: "itemName",
      render: (text: string) => <span style={{ fontSize: "16px" }}>{text}</span>,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (text: number) => <span style={{ fontSize: "16px" }}>{text}</span>,
    },
    {
      title: "Unit",
      dataIndex: "quantityUnit",
      key: "quantityUnit",
      render: (text: string) => <span style={{ fontSize: "16px" }}>{text}</span>,
    },
  ];

  // Calculate stats from orders
  const totalRevenue = orders.reduce((sum, order) => sum + order.totalAmount, 0);
  const totalOrders = orders.length;
  const totalDelivered = orders.filter(order => order.status === "completed").length;
  const totalCanceled = orders.filter(order => order.status === "canceled").length;

  const statCards = [
    {
      icon: <DollarCircleOutlined />,
      value: `₹ ${totalRevenue}`,
      title: "Total Revenue",
    },
    {
      icon: <ShoppingCartOutlined />,
      value: totalOrders,
      title: "Total Orders",
    },
    {
      icon: <CheckCircleOutlined />,
      value: totalDelivered,
      title: "Total Delivered",
    },
    {
      icon: <CloseCircleOutlined />,
      value: totalCanceled,
      title: "Total Canceled",
    },
  ];

  return (
    <div 
      style={{ 
        padding: "clamp(12px, 3vw, 20px)", 
        paddingTop: "2px",
        maxWidth: "100vw",
        overflow: "hidden"
      }}
    >
      <BackHeader
        path={
          route?.canteenName && route?.canteenId
            ? `/canteens-list/canteen-dashboard/${route?.canteenId}/${route?.canteenName}`
            : `/dashboard`
        }
        title={
          route?.canteenName
            ? `Orders Dashboard | ${route.canteenName}`
            : "Orders Dashboard"
        }
        styles={{ 
          marginBottom: "clamp(12px, 3vw, 20px)",
        }}
      />
      
      {/* Date Filter */}
      <Row style={{ marginBottom: "clamp(12px, 3vw, 20px)" }} justify="end">
        <Col>
          <input
            type="date"
            style={{
              alignSelf: "flex-end",
              borderRadius: "12px",
              background: "#F6F6F6",
              padding: "5px",
              color: "#1977f3",
              width: "130px",
              border: "1px solid #d9d9d9",
              marginTop: 8,
              fontSize: "14px",
            }}
            value={selectedDate}
            onChange={(e) => handleDateChange(e.target.value)}
          />
        </Col>
      </Row>

      {/* Stats Grid */}
      <Row 
        gutter={[
          { xs: 12, sm: 16, md: 20, lg: 24 }, 
          { xs: 12, sm: 16, md: 20, lg: 24 }
        ]}
        style={{ marginBottom: "clamp(20px, 5vw, 35px)" }}
      >
        {statCards.map((card, index) => (
          <Col 
            key={index}
            xs={12}
            sm={12}
            md={8}
            lg={6}
          >
            <StatCard
              icon={card.icon}
              value={card.value}
              title={card.title}
            />
          </Col>
        ))}
      </Row>

      {/* Orders Table */}
      {Object.keys(groupedByMenu).length === 0 ? (
        <Empty description={`No orders available on this date (${selectedDate})`} />
      ) : (
        <div>
          <h3 style={{ marginBottom: "16px" }}>Date: {selectedDate}</h3>
          {Object.keys(groupedByMenu).sort().map(menuName => (
            <Card key={menuName} title={menuName} style={{ marginBottom: "16px" }}>
              <Table
                columns={columns}
                dataSource={getTableData(menuName)}
                pagination={false}
                size="small"
                rowKey="key"
              />
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersDashboard;