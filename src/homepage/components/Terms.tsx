import React from "react";
import styled from "styled-components";
// import Footer from "./Footer";
import Header from "./Header";

// Wrapper for the entire page
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full height of the viewport */
`;

// Main content container
const Container = styled.div`
  padding: 40px 20px;
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

const Paragraph = styled.p`
  margin-bottom: 15px;
  line-height: 1.6;
`;

const Terms: React.FC = () => {
  return (
    <PageWrapper>
      <Header />
      <Container>
        <Title>Terms and Conditions</Title>
        <h2>Welfare Canteen – Welfare Facility</h2>
        <br />
        <Paragraph>
          Welcome to the Welfare Canteen under the Welfare Facility. To ensure
          smooth, hygienic, and efficient operations, all personnel and users
          must adhere to the following rules and guidelines:
        </Paragraph>

        <h3>1. Booking Limits</h3>
        <Paragraph>
          • Each individual is allowed to book up to 3 food items (meals,
          snacks, or breakfast) per day.
        </Paragraph>

        <h3>2. Payment Policy</h3>
        <Paragraph>
          • Only digital payments are accepted (UPI, debit/credit cards,
          authorized govt. platforms).
        </Paragraph>
        <Paragraph>
          • No credit or postpaid transactions are permitted. Full payment must
          be made at the time of booking.
        </Paragraph>

        <h3>3. Product Availability</h3>
        <Paragraph>
          • Food items are subject to availability based on stock and
          ingredients.
        </Paragraph>
        <Paragraph>
          • Early bookings are encouraged to avoid unavailability.
        </Paragraph>

        <h3>4. Conduct Guidelines</h3>
        <Paragraph>
          • Users must maintain discipline, cleanliness, and respectful behavior
          on the premises.
        </Paragraph>
        <Paragraph>
          • Misconduct, abuse, or policy violations will lead to disciplinary
          action.
        </Paragraph>

        <h3>5. Booking & Cancellation Timings</h3>
        <Paragraph>
          • <strong>Breakfast:</strong> Booking closes at 11:00 AM (previous
          day)
        </Paragraph>
        <Paragraph>
          • <strong>Snacks:</strong> Booking closes at 09:00 AM (same day)
        </Paragraph>
        <Paragraph>
          • <strong>Lunch:</strong> Booking closes at 10:00 AM (same day)
        </Paragraph>
        <Paragraph>
          • <strong>Cancellations:</strong> Allowed 1–2 days in advance, within
          defined time windows.
        </Paragraph>

        <h3>6. Entry Restrictions</h3>
        <Paragraph>
          • Only authorized personnel with valid ID/access will be allowed
          inside canteen premises.
        </Paragraph>

        <h3>7. Hygiene Compliance</h3>
        <Paragraph>
          • Users must maintain personal hygiene. Hand sanitization is
          encouraged before and after meals.
        </Paragraph>

        <h3>8. Dress Code</h3>
        <Paragraph>
          • Proper dress code must be followed. Entry with soiled or
          inappropriate attire may be restricted.
        </Paragraph>

        <h3>9. Waste Management</h3>
        <Paragraph>
          • Dispose of waste in designated bins. Littering will be penalized.
        </Paragraph>

        <h3>10. Queue Etiquette</h3>
        <Paragraph>
          • Follow queue discipline. Jumping lines or reserving spots is
          prohibited.
        </Paragraph>

        <h3>11. Serving Timings</h3>
        <Paragraph>
          • Food will be served only during designated hours. No exceptions will
          be made.
        </Paragraph>

        <h3>12. Portion Control</h3>
        <Paragraph>
          • Meal portions are predefined. Requests for extra servings may not be
          accommodated.
        </Paragraph>

        <h3>13. Mobile Phone Usage</h3>
        <Paragraph>
          • Loud phone conversations inside the canteen are discouraged to
          maintain decorum.
        </Paragraph>

        <h3>14. Lost & Found</h3>
        <Paragraph>
          • Any lost belongings must be reported immediately to the canteen
          supervisor.
        </Paragraph>

        <h3>15. Unauthorized Selling</h3>
        <Paragraph>
          • No unauthorized selling, distribution, or promotional activity is
          allowed inside the canteen.
        </Paragraph>

        <h3>16. Maintenance Windows</h3>
        <Paragraph>
          • Canteen operations may be temporarily paused for cleaning,
          fumigation, or maintenance without prior notice.
        </Paragraph>

        <h3>17. Health & Safety Protocols</h3>
        <Paragraph>
          • Temperature checks and health screenings may be conducted during
          outbreaks or special circumstances.
        </Paragraph>

        <h3>18. Allergen Information</h3>
        <Paragraph>
          • Individuals with food allergies must verify ingredients before
          consuming. The canteen is not liable for allergic reactions.
        </Paragraph>

        <h3>19. Misuse of Booking System</h3>
        <Paragraph>
          • Use of fake IDs, duplicate accounts, or bulk booking for resale
          purposes is strictly prohibited.
        </Paragraph>

        <h3>20. Feedback & Complaints</h3>
        <Paragraph>
          • Feedback must be submitted through the official portal or complaint
          box. Verbal complaints alone will not be entertained.
        </Paragraph>

        <h3>21. Visitors & Guests</h3>
        <Paragraph>
          • Guests are not allowed unless explicitly permitted by canteen
          authorities.
        </Paragraph>

        <h3>22. Emergency Protocols</h3>
        <Paragraph>
          • In case of emergency (fire, accidents, etc.), follow the
          instructions of safety personnel immediately.
        </Paragraph>

        <h3>23. Policy Updates</h3>
        <Paragraph>
          • ⚠️{" "}
          <em>
            Management reserves the right to revise or update these terms at any
            time without prior notice.
          </em>
        </Paragraph>
      </Container>
      {/* <Footer /> */}
    </PageWrapper>
  );
};

export default Terms;
