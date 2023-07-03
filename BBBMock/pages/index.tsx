import Head from "next/head";
import Link from "next/link";
import { H1, Paragraph, Link as GOVLink, H3, Main, TopNav } from "govuk-react";
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
        <H1>Welcome back, Richard</H1>

        <Paragraph>Your last visit was 4 days ago.</Paragraph>

        <div>
          <GOVLink as={Link} href="">
            <H3>Facility Alerts For The Next 60 Days</H3>
          </GOVLink>

          <StagingDropdown title="Eligible facilities which will be removed if not provessed" />

          <StagingDropdown title="Facilities which will have the guarantee removed if not drawn" />

          <StagingDropdown title="Facilities assumed to have been Repaid due to lack of updates" />

          <StagingDropdown title="Agreed tranche drawdown to be recorded" />

          <StagingDropdown title="Facilities which will have the Guarantee removed if not Claimed" />

          <StagingDropdown title="Lending Limit Utilisation" />

          <StagingDropdown title="Claim Limits" />
        </div>
      </Main>
      <footer>
        <Paragraph>(C) Copyright BBB</Paragraph>
      </footer>
    </div>
  );
}
