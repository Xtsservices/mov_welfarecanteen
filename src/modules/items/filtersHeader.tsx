import React, { useState } from 'react';
import { Input, Select, DatePicker, InputNumber, Button, Row, Col, Space } from 'antd';
import { SearchOutlined, ArrowLeftOutlined, ClearOutlined } from '@ant-design/icons';
import { ItemFilters, FilterOption } from './types';

const { RangePicker } = DatePicker;
const { Option } = Select;

interface FilterHeaderProps {
  onFilter: (filters: ItemFilters) => void;
  onBack?: () => void;
  statusOptions: FilterOption[];
  showBackButton?: boolean;
}

const FilterHeader: React.FC<FilterHeaderProps> = ({ 
  onFilter, 
  onBack, 
  statusOptions, 
  showBackButton = true 
}) => {
  const [filters, setFilters] = useState<ItemFilters>({
    search: '',
    priceRange: { min: null, max: null },
    status: [],
    foodType: [],
    dateRange: { startDate: null, endDate: null }
  });

  const handleSearch = (value: string) => {
    const updatedFilters = { ...filters, search: value };
    setFilters(updatedFilters);
    onFilter(updatedFilters);
  };

  const handlePriceChange = (type: 'min' | 'max', value: number | null) => {
    const updatedFilters = {
      ...filters,
      priceRange: { ...filters.priceRange, [type]: value }
    };
    setFilters(updatedFilters);
    onFilter(updatedFilters);
  };

  const handleStatusChange = (value: string[]) => {
    const updatedFilters = { ...filters, status: value };
    setFilters(updatedFilters);
    onFilter(updatedFilters);
  };

  const handleFoodTypeChange = (value: string[]) => {
    const updatedFilters = { ...filters, foodType: value };
    setFilters(updatedFilters);
    onFilter(updatedFilters);
  };

  const handleDateChange = (dates: any) => {
    const startDate = dates?.[0]?.format('YYYY-MM-DD') || null;
    const endDate = dates?.[1]?.format('YYYY-MM-DD') || null;
    
    const updatedFilters = {
      ...filters,
      dateRange: { startDate, endDate }
    };
    setFilters(updatedFilters);
    onFilter(updatedFilters);
  };

  const handleClearFilters = () => {
    const resetFilters: ItemFilters = {
      search: '',
      priceRange: { min: null, max: null },
      status: [],
      foodType: [],
      dateRange: { startDate: null, endDate: null }
    };
    setFilters(resetFilters);
    onFilter(resetFilters);
  };

  return (
    <div style={{ 
      padding: '16px',
      backgroundColor: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <Row gutter={[16, 16]} align="middle">
        {showBackButton && (
          <Col flex="none">
            <Button 
              type="text" 
              icon={<ArrowLeftOutlined />} 
              onClick={onBack}
            />
          </Col>
        )}
        
        <Col flex="auto">
          <Input
            placeholder="Search items..."
            prefix={<SearchOutlined />}
            value={filters.search}
            onChange={(e) => handleSearch(e.target.value)}
            style={{ width: '100%' }}
          />
        </Col>
        
        <Col flex="none">
          <Space>
            <InputNumber
              placeholder="Min ₹"
              style={{ width: 100 }}
              value={filters.priceRange.min}
              onChange={(val) => handlePriceChange('min', val)}
              prefix="₹"
            />
            <InputNumber
              placeholder="Max ₹"
              style={{ width: 100 }}
              value={filters.priceRange.max}
              onChange={(val) => handlePriceChange('max', val)}
              prefix="₹"
            />
          </Space>
        </Col>
        
        <Col flex="none">
          <Select
            mode="multiple"
            style={{ width: 150 }}
            placeholder="Status"
            value={filters.status}
            onChange={handleStatusChange}
            maxTagCount={1}
          >
            {statusOptions.map(option => (
              <Option key={option.value.toString()} value={option.value.toString()}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Col>
        
        <Col flex="none">
          <Select
            mode="multiple"
            style={{ width: 150 }}
            placeholder="Food Type"
            value={filters.foodType}
            onChange={handleFoodTypeChange}
            maxTagCount={1}
          >
            <Option value="veg">Veg</Option>
            <Option value="non-veg">Non-Veg</Option>
          </Select>
        </Col>
        
        <Col flex="none">
          <RangePicker
            style={{ width: 250 }}
            onChange={handleDateChange}
          />
        </Col>
        
        <Col flex="none">
          <Button 
            onClick={handleClearFilters} 
            icon={<ClearOutlined />}
          >
            Clear
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default FilterHeader;