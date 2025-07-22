export interface FilterOption {
    label: string;
    value: string | number;
  }
  
  export interface PriceRangeFilter {
    min: number | null;
    max: number | null;
  }
  
  export interface DateRangeFilter {
    startDate: string | null;
    endDate: string | null;
  }
  
  export interface ItemFilters {
    search: string;
    priceRange: PriceRangeFilter;
    status: string[];
    foodType: string[];
    dateRange: DateRangeFilter;
  }