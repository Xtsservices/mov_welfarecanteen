import styled from "styled-components";
import logo from "../../assets/images/Naval.jpg";
import poweredByLogo from "../images/Worldtek.png";

const FooterContainer = styled.footer`
  background-color: #010080;
  color: #fff;
  padding: 40px 20px 20px;
  font-family: sans-serif;
  width: 100%;
  margin-top: auto; /* This helps push it to the bottom */
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.div`
  flex: 1;
  min-width: 200px;
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 10px;
`;

const PoweredByContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -0.8rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;

  img {
    width: 180px;
    height: auto;
    margin-left: 10px;
  }

  p {
    font-size: 12px;
    margin: 0;
  }
`;

const SectionTitle = styled.h4`
  color: #fff;
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 6px;
  font-size: 14px;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Section>
          <Logo src={logo} alt="Naval Logo" style={{ height: "150px", width: "250px" , marginTop: "-7px", marginBottom:"22px" }} />
        </Section>

        <Section>
          <SectionTitle>Browse</SectionTitle>
          <List>
            <ListItem><a href="#home">HOME</a></ListItem>
            <ListItem><a href="#about">ABOUT</a></ListItem>
            <ListItem><a href="#services">SERVICES</a></ListItem>
            <ListItem><a href="#gallery">GALLERY</a></ListItem>
            <ListItem><a href="#contact">CONTACT US</a></ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Other</SectionTitle>
          <List style={{ marginTop: "15px" }}>
            <ListItem><a href="/terms">Terms and Conditions</a></ListItem>
            <ListItem><a href="/privacy">Privacy Policy</a></ListItem>
          </List>
        </Section>
      </FooterContent>

      <PoweredByContainer>
        <p>Powered and Maintained by</p>
        <img src={poweredByLogo} alt="Powered By Logo"  />
      </PoweredByContainer>
    </FooterContainer>
  );
}
