
import Home from "./components/Home";
import Footer from "./components/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePage() {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        overflowX: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      <div style={{ marginBottom: 0, paddingBottom: 0 }}>
        <Home />
      </div>
      <div style={{ marginTop: 0, paddingTop: 0 }}>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
