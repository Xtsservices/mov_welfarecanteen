export interface Canteen {
    id: string;
    name: string;
    description: string;
    image: string;
    openingHours: string;
    menuItems: Array<{
      id: string;
      name: string;
      category: string;
      price: number;
      image: string;
      description: string;
    }>;
  }
  
  export const canteenData: Canteen[] = [
    {
      id: 'main',
      name: 'Main Canteen',
      description: 'Our flagship canteen offering a wide variety of cuisines including Indian, Chinese, and Continental dishes. Spacious seating with a warm ambiance.',
      image: 'https://images.pexels.com/photos/6126306/pexels-photo-6126306.jpeg',
      openingHours: '7:00 AM - 10:00 PM',
      menuItems: [
        {
          id: '1',
          name: 'Masala Dosa',
          category: 'Today Special',
          price: 80,
          image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
          description: 'Crispy South Indian dosa served with chutney and sambar',
        },
        {
          id: '2',
          name: 'Paneer Tikka',
          category: 'Veg',
          price: 160,
          image: 'https://images.pexels.com/photos/9609839/pexels-photo-9609839.jpeg',
          description: 'Marinated cottage cheese grilled to perfection with spices',
        },
        {
          id: '3',
          name: 'Chicken Biryani',
          category: 'Non-Veg',
          price: 220,
          image: 'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg',
          description: 'Aromatic rice dish with tender chicken pieces and fragrant spices',
        }
      ]
    },
    {
      id: 'staff',
      name: 'Staff Canteen',
      description: 'An exclusive canteen for staff members with premium dishes and a relaxed environment. Features comfortable seating and quick service.',
      image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg',
      openingHours: '8:00 AM - 8:00 PM',
      menuItems: [
        {
          id: '4',
          name: 'Butter Chicken',
          category: 'Non-Veg',
          price: 240,
          image: 'https://images.pexels.com/photos/7625318/pexels-photo-7625318.jpeg',
          description: 'Creamy tomato based chicken curry with a blend of spices',
        },
        {
          id: '5',
          name: 'Veg Pulao',
          category: 'Veg',
          price: 140,
          image: 'https://images.pexels.com/photos/7625211/pexels-photo-7625211.jpeg',
          description: 'Fragrant rice cooked with mixed vegetables and aromatic spices',
        },
        {
          id: '6',
          name: 'Rava Idli',
          category: 'Today Special',
          price: 60,
          image: 'https://images.pexels.com/photos/4331492/pexels-photo-4331492.jpeg',
          description: 'Soft semolina cakes served with coconut chutney and sambar',
        },
        {
          id: '7',
          name: 'Mix Veg Curry',
          category: 'Veg',
          price: 120,
          image: 'https://images.pexels.com/photos/7625057/pexels-photo-7625057.jpeg',
          description: 'Assorted vegetables cooked in a rich and flavorful gravy',
        }
      ]
    },
    {
      id: 'student',
      name: 'Student Canteen',
      description: 'Budget-friendly canteen for students with quick meals, snacks, and beverages. Offers student discounts and meal packages.',
      image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg',
      openingHours: '7:30 AM - 11:00 PM',
      menuItems: [
        {
          id: '8',
          name: 'Vada Pav',
          category: 'Today Special',
          price: 40,
          image: 'https://images.pexels.com/photos/8992923/pexels-photo-8992923.jpeg',
          description: 'Mumbai style potato patty in a bun with spicy chutneys',
        },
        {
          id: '9',
          name: 'Samosa',
          category: 'Tiffins',
          price: 25,
          image: 'https://images.pexels.com/photos/4331490/pexels-photo-4331490.jpeg',
          description: 'Crispy pastry filled with spiced potatoes and peas',
        },
        {
          id: '10',
          name: 'Aloo Paratha',
          category: 'Tiffins',
          price: 60,
          image: 'https://images.pexels.com/photos/5560760/pexels-photo-5560760.jpeg',
          description: 'Wheat flatbread stuffed with spiced potatoes, served with yogurt',
        },
        {
          id: '11',
          name: 'Mango Lassi',
          category: 'Beverages',
          price: 50,
          image: 'https://images.pexels.com/photos/3625372/pexels-photo-3625372.jpeg',
          description: 'Refreshing yogurt drink blended with mango pulp and sugar',
        },
        {
          id: '12',
          name: 'Veg Thali',
          category: 'Veg',
          price: 120,
          image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
          description: 'Complete meal with rice, two vegetables, dal, roti, and dessert',
        }
      ]
    }
  ];