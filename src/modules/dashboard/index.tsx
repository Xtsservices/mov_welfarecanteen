import React, { useState } from "react";
import { Input, Row, Col, Card, Typography} from "antd";
import { SearchOutlined, InboxOutlined } from "@ant-design/icons";
import { HeaderProps, FoodItem } from "./types";
import { headerStyles } from "../../modules/dashboard/styles";
import CanteenSelector from "./canteenSelector";
import CategoryFilters from "./categoryFilters";
import CanteenDetail from "../canteens/canteenDetail";

const { Meta } = Card;
const { Text } = Typography;

const foodItems: FoodItem[] = [
  {
    id: "1",
    name: "Masala Dosa",
    category: "Today Special",
    price: 80,
    image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg",
    description: "Crispy South Indian dosa served with chutney and sambar",
  },
  {
    id: "2",
    name: "Idli Sambar",
    category: "Tiffins",
    price: 60,
    image: "https://images.pexels.com/photos/4331491/pexels-photo-4331491.jpeg",
    description: "Soft steamed rice cakes served with sambar and chutney",
  },
  {
    id: "3",
    name: "Paneer Butter Masala",
    category: "Veg",
    price: 180,
    image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg",
    description: "Rich and creamy paneer curry",
  },
  {
    id: "4",
    name: "Chicken Biryani",
    category: "Non-Veg",
    price: 220,
    image:
      "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg",
    description: "Aromatic rice dish with tender chicken pieces",
  },
  {
    id: "5",
    name: "Vada Pav",
    category: "Today Special",
    price: 40,
    image: "https://images.pexels.com/photos/8992923/pexels-photo-8992923.jpeg",
    description: "Mumbai style potato patty in a bun",
  },
  {
    id: "6",
    name: "Butter Chicken",
    category: "Non-Veg",
    price: 240,
    image: "https://images.pexels.com/photos/7625318/pexels-photo-7625318.jpeg",
    description: "Creamy tomato based chicken curry",
  },
];

const UserDashboard: React.FC<HeaderProps> = ({
  canteenOptions = [],
  categories = ["All", "Today Special", "Tiffins", "Veg", "Non-Veg"],
}) => {
  const [selectedCanteen, setSelectedCanteen] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredItems = foodItems.filter((item: any) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderNoItems = () => (
    <div style={headerStyles.noItems}>
      <InboxOutlined style={headerStyles.noItemsIcon} />
      <Typography.Title level={4}>No Items Found</Typography.Title>
      <Text type="secondary">
        {searchQuery
          ? "Try adjusting your search terms"
          : "No items available in this category"}
      </Text>
    </div>
  );

  // Custom styles for the search and selector layout
  const searchFieldStyle = {
    ...headerStyles.searchInput,
    width: "100%",
  };

  const canteenSelectorStyle = {
    width: "100%",
  };

  return (
    <>
      <div style={headerStyles.subHeader}>
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} sm={24} md={12} lg={12}>
            <Input
              size="large"
              placeholder="Search food items..."
              prefix={<SearchOutlined />}
              style={searchFieldStyle}
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <CanteenSelector
                options={canteenOptions}
                selectedCanteen={selectedCanteen}
                onSelect={setSelectedCanteen}
                style={canteenSelectorStyle}
              />
            </div>
          </Col>
        </Row>
      </div>

      {!selectedCanteen && (
        <CategoryFilters
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      )}

      <div style={headerStyles.foodGrid}>
        {selectedCanteen ? (
          <CanteenDetail canteenId={selectedCanteen} />
        ) : (
          <Row gutter={[16, 16]}>
            {filteredItems?.map((item: FoodItem) => (
              <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt={item.name}
                      src={item.image}
                      style={{ height: 200, objectFit: "cover" }}
                    />
                  }
                >
                  <Meta
                    title={item.name}
                    description={
                      <>
                        <Text>{item.description}</Text>
                        <div style={{ marginTop: 8 }}>
                          <Text strong>₹{item.price}</Text>
                        </div>
                      </>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
        )}
        {filteredItems.length === 0 && renderNoItems()}
      </div>
    </>
  );
};

export default UserDashboard;
