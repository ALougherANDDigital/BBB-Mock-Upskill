import Head from "next/head";
import Link from "next/link";
import {
  H1,
  Paragraph,
  Link as GOVLink,
  Main,
  TopNav,
  Panel,
  Button,
} from "govuk-react";
import BBBNavBar from "../components/Navigation/BBBNavBar";
import StagingDropdown from "../components/Staging/StagingDropDown";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BBB TEST SITE</title>
        <GOVLink as={Link} rel="icon" href="/favicon.ico" />
      </Head>

      <TopNav
        company={
          <TopNav.NavLink>
            <TopNav.IconTitle>Guarantees Portal - Staging</TopNav.IconTitle>
          </TopNav.NavLink>
        }
      >
        <TopNav.NavLink>Search</TopNav.NavLink>
        <TopNav.NavLink>Help</TopNav.NavLink>
        <TopNav.NavLink>Change Password</TopNav.NavLink>
        <TopNav.NavLink>Logout</TopNav.NavLink>
      </TopNav>
      <BBBNavBar />
      <Main>
        <div style={{ display: "flex" }}>
          <H1>Welcome back, Richard</H1>
          <Button>Start New Facility Application</Button>
        </div>

        <div style={{ display: "flex" }}>
          <Paragraph>Your last visit was 4 days ago.</Paragraph>
          <Button>View Facility Portfolio</Button>
        </div>

        <div>
          <Panel title="">
            <Paragraph>Facility Alerts For The Next 60 Days</Paragraph>
          </Panel>

          <StagingDropdown title="Eligible facilities which will be removed if not provessed" />

          <StagingDropdown title="Facilities which will have the guarantee removed if not drawn" />

          <StagingDropdown title="Facilities assumed to have been Repaid due to lack of updates" />

          <StagingDropdown title="Agreed tranche drawdown to be recorded" />

          <StagingDropdown title="Facilities which will have the Guarantee removed if not Claimed" />

          <div style={{ display: "flex" }}>
            <StagingDropdown title="Lending Limit Utilisation" />

            <StagingDropdown title="Claim Limits" />
          </div>
        </div>
      </Main>
      <footer>
        <div style={{ display: "flex" }}>
          <GOVLink as={Link} href="">
            Privacy Policy
          </GOVLink>
          <GOVLink as={Link} href="">
            Cookie Usage
          </GOVLink>
        </div>
        <Paragraph>(C) Copyright BBB</Paragraph>
      </footer>
    </div>
  );
}
