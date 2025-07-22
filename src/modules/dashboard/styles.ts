import { CSSProperties } from 'react';

export const headerStyles: Record<string, CSSProperties> = {
  header: {
    background: 'linear-gradient(to right, #1a237e, #4a67c7)',
    padding: '0 20px',
    height: 'auto',
    lineHeight: '64px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
  },
  headerRow: {
    width: '100%',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logo: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    background: '#f0f2f5',
    overflow: 'hidden',
  },
  brandTitle: {
    color: 'white',
    margin: 0,
    display: 'none',
    // '@media (min-width: 768px)': {
    //   display: 'block',
    // },
  },
  centerContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  brandTitleCentered: {
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  rightContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '16px',
  },
  menu: {
    background: 'transparent',
    border: 'none',
    color: 'white',
  },
  menuItem: {
    color: 'white',
  },
  avatar: {
    cursor: 'pointer',
    background: '#f0f2f5',
  },
  subHeader: {
    padding: '16px 20px',
    background: '#f0f2f5',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)',
  },
  searchInput: {
    borderRadius: '4px',
    width: '100%',
  },
  canteenSelect: {
    width: '100%',
    maxWidth: '300px',
    float: 'right',
  },
  categoryFilters: {
    padding: '10px 20px',
    display: 'flex',
    overflowX: 'auto',
    background: 'white',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)',
  },
  categoryButton: {
    margin: '0 5px',
    minWidth: '80px',
  },
  categoryActiveButton: {
    margin: '0 5px',
    minWidth: '80px',
    background: '#1a237e',
    borderColor: '#1a237e',
  },
  mobileMenuButton: {
    color: 'white',
    fontSize: '20px',
  },
  drawerMenu: {
    border: 'none',
  },
  avatarIcon:{
    color:"black",
  },
  foodGrid: {
    padding: '20px',
    paddingTop: "25px",
    paddingLeft: "25px",
    paddingRight: "25px",

  },
  noItems: {
    textAlign: 'center',
    padding: '40px 20px',
    background: '#fff',
    borderRadius: '8px',
    margin: '20px',
  },
  noItemsIcon: {
    fontSize: '48px',
    color: '#bfbfbf',
    marginBottom: '16px',
  },
  removeCanteenButton: {
    position: 'absolute',
    top: '3px',
    right: '21px',
  }
};