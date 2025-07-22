import styled from "styled-components";
import image from "../images/image 1.png";
import { useNavigate } from "react-router-dom";

const Overview = styled.section`
    padding: 5rem 2rem;
    background-color: white;
`;

const OverviewContainer = styled.div`
    max-width: 1200px;
    margin: auto;
    display: grid;
    gap: 3rem;
    grid-template-columns: 1fr;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const OverviewText = styled.div`
    h3 {
        color: #010080;
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    p {
        color: #374151;
        margin-bottom: 1.5rem;
    }
`;

const OverviewImg = styled.img`
    width: 100%;
    border-radius: 1rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    object-fit: cover;
`;

const CtaButton = styled.button`
    background-color: #010080;
    color: white;
    padding: 0.5rem 1.5rem;
    font-weight: 600;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        background-color: #010080;
    }
`;

export default function OverviewSection() {
    const navigate = useNavigate();

    return (
        <section id="Overview">
            <div id="Overview">
                <Overview>
                    <OverviewContainer>
                        <div>
                            <OverviewImg src={image} alt="Overview" />
                        </div>
                        <OverviewText>
                            <h3>Overview</h3>
                            <h2>Mission and Purpose
                            </h2>
                            <p>
                            The primary mission of the Welfare Canteen is to offer high-quality products at concessional rates, ensuring convenience, affordability, and timely access to household necessities for officers, employees, and their dependents.
                            </p>
                            <CtaButton onClick={() => navigate("/Overview")}>View More</CtaButton>
                        </OverviewText>
                    </OverviewContainer>
                </Overview>
            </div>
        </section>
    );
}
