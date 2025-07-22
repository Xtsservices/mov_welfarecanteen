import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

// Wrapper for the entire page
const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh; /* Full height of the viewport */
`;

// Main content container
const Container = styled.div`
    padding: 10px 20px;
    max-width: 900px;
    margin: auto;
    font-family: sans-serif;
    color: #333;
    margin-top: 100px;
    flex: 1; /* Allows this to take up remaining space */
    overflow-y: auto; /* Makes the content scrollable */
`;

const Title = styled.h1`
    color: #010080;
    margin-bottom: 20px;
`;

const SubTitle = styled.h2`
    color: #333;
    font-size: 1.5rem;
    margin-bottom: 15px;
`;

const Paragraph = styled.p`
    margin-bottom: 15px;
    line-height: 1.6;
`;

const List = styled.ul`
    margin-bottom: 15px;
    padding-left: 20px;
    list-style-type: disc;
`;

const OrderedList = styled.ol`
    margin-bottom: 15px;
    padding-left: 20px;
    list-style-type: decimal;
`;

const NavalDockyardCanteen: React.FC = () => {
    return (
        <PageWrapper>
            <Header />
            <Container>
                <Title>Welfare Canteen Overview</Title>
                <Paragraph>
                    The Welfare Canteen is a dedicated welfare facility serving employees and their families.
                    Strategically located within premises in Visakhapatnam, it provides easy access to both
                    serving and retired staff. It plays a crucial role in improving quality of life by offering daily
                    essentials, groceries, and select luxury goods at subsidized rates.
                </Paragraph>

                <SubTitle>Mission and Purpose</SubTitle>
                <List>
                    <li>Provide high-quality products at concessional rates</li>
                    <li>Support the welfare and morale of the community</li>
                    <li>Ensure operational efficiency through inventory and vendor management</li>
                </List>

                <SubTitle>Key Features</SubTitle>
                <OrderedList>
                    <li>
                        <strong>Wide Range of Products:</strong> Groceries, personal care items, packaged food, electronics, and seasonal offers
                    </li>
                    <li>
                        <strong>Cashless & Digital Payment Options:</strong> UPI, debit/credit cards, secure payment gateways
                    </li>
                    <li>
                        <strong>Inventory and Stock Management:</strong> Digital systems with vendor audits and quality checks
                    </li>
                    <li>
                        <strong>Access Control:</strong> Entry restricted to authorized personnel with valid Naval IDs
                    </li>
                </OrderedList>

                <SubTitle>Technology Integration (Optional)</SubTitle>
                <List>
                    <li>QR-based billing and Point-of-Sale (POS) systems</li>
                    <li>Self-checkout kiosks for convenience</li>
                    <li>ERP integration for real-time reporting and compliance</li>
                    <li>Admin dashboards for canteen management</li>
                </List>

                <SubTitle>Support and Compliance</SubTitle>
                <List>
                    <li>Operates under welfare policies</li>
                    <li>Works with the Canteen Stores Department (CSD)</li>
                    <li>Ensures transparency with internal audits and logistics partners</li>
                </List>

                <SubTitle>Conclusion</SubTitle>
                <Paragraph>
                    The Welfare Canteen is View More than a shopping center — it is a vital support system for those who serve the nation.
                    With modern infrastructure, digital transformation, and a customer-first approach, it stands as a benchmark for defense canteen operations.
                </Paragraph>
            </Container>
            <Footer />
        </PageWrapper>
    );
};

export default NavalDockyardCanteen;
