import React from "react";
import styled from "styled-components";
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

const Privacy: React.FC = () => {
  return (
    <PageWrapper>
      <Header />
      <Container>
        <Title>Privacy Policy</Title>
        <h2>Industrial Wet Canteen  Welfare Canteen</h2>
        <br />
        <Paragraph>
          The Industrial Wet Canteen under the Welfare Canteen Program is
          committed to protecting the privacy of all users interacting with our
          booking and service platforms. This Privacy Policy outlines how we
          collect, use, store, and protect your personal information.
        </Paragraph>

        <h3>1. Information We Collect</h3>
        <Paragraph>
          • Full name and employee/service ID
          <br />
          • Contact information (phone number, email)
          <br />
          • Digital payment information (e.g., UPI ID, transaction details)
          <br />• Food booking and consumption history
        </Paragraph>

        <h3>2. Purpose of Data Collection</h3>
        <Paragraph>
          • To process and confirm food orders
          <br />
          • To facilitate digital payments
          <br />
          • To maintain order history and manage booking limits
          <br />
          • To communicate booking confirmations or cancellations
          <br />• To ensure compliance with canteen policies
        </Paragraph>

        <h3>3. Data Sharing</h3>
        <Paragraph>
          • We do not share your personal data with third parties, except:
          <br />
          &nbsp;&nbsp;- With authorized government platforms for digital
          transactions
          <br />
          &nbsp;&nbsp;- When required by law, regulation, or legal process
          <br />
          &nbsp;&nbsp;- With internal administrative or audit teams managing the
          Welfare Canteen
        </Paragraph>

        <h3>4. Data Security</h3>
        <Paragraph>
          • We employ appropriate technical and administrative measures to
          safeguard your personal data from unauthorized access, disclosure, or
          misuse. Payment-related data is handled through secure and
          government-authorized platforms.
        </Paragraph>

        <h3>5. User Rights</h3>
        <Paragraph>
          • You have the right to:
          <br />
          &nbsp;&nbsp;- Request access to your stored personal information
          <br />
          &nbsp;&nbsp;- Correct any inaccurate or outdated information
          <br />
          &nbsp;&nbsp;- Withdraw your consent for data usage (with service
          limitations)
        </Paragraph>

        <h3>6. Data Retention</h3>
        <Paragraph>
          • We retain your booking and transaction data for a limited period,
          solely for administrative and audit purposes. Once this period lapses,
          your data will be securely deleted or anonymized.
        </Paragraph>

        <h3>7. Policy Updates</h3>
        <Paragraph>
          • The canteen management reserves the right to update this Privacy
          Policy as required. Updates will be effective immediately upon
          publication on the official booking platform or notice board.
        </Paragraph>

        <h3>8. Use of Cookies and Tracking</h3>
        <Paragraph>
          • We do not use cookies or any form of tracking technologies on our
          booking platform. If this changes in the future, users will be
          informed accordingly.
        </Paragraph>

        <h3>9. Third-Party Services</h3>
        <Paragraph>
          • Only government-approved and authorized digital payment gateways are
          used. These platforms have their own privacy policies, which users are
          encouraged to review.
        </Paragraph>

        <h3>10. User Verification</h3>
        <Paragraph>
          • To prevent misuse, identity verification through employee/service ID
          may be conducted at the time of booking or food collection.
        </Paragraph>

        <h3>11. Data Accuracy Responsibility</h3>
        <Paragraph>
          • Users are responsible for providing accurate and up-to-date personal
          and payment information. The canteen is not liable for errors
          resulting from incorrect user input.
        </Paragraph>

        <h3>12. Service Access Restrictions</h3>
        <Paragraph>
          • Access to the booking system may be monitored to prevent misuse,
          fraudulent activity, or violation of booking limits.
        </Paragraph>

        <h3>13. Children’s Privacy</h3>
        <Paragraph>
          • Our services are not intended for use by individuals under the age
          of 18 unless authorized and accompanied by a valid service ID holder.
        </Paragraph>

        <h3>14. Data Backup and Recovery</h3>
        <Paragraph>
          • Booking and payment data are periodically backed up using secure
          methods to prevent data loss due to technical failure.
        </Paragraph>

        <h3>15. Breach Notification Protocol</h3>
        <Paragraph>
          • In the unlikely event of a data breach, affected users will be
          notified in accordance with applicable regulations and internal
          security procedures.
        </Paragraph>

        <h3>16. Data Transfer and Storage Location</h3>
        <Paragraph>
          • All data is stored securely on servers located within India and is
          not transferred internationally.
        </Paragraph>

        <h3>17. Policy Interpretation</h3>
        <Paragraph>
          • In case of disputes regarding interpretation of this Privacy Policy,
          the decision of the Welfare Canteen Administration shall be final and
          binding.
        </Paragraph>
      </Container>
      {/* <Footer /> */}
    </PageWrapper>
  );
};

export default Privacy;
