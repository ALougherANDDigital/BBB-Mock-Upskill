import { Link as GOVLink, Paragraph, SearchBox } from "govuk-react";
import Link from "next/link";

const BBBNavBar = () => {
  return (
    <div style={{ display: "flex" }}>
      <GOVLink as={Link} href="">
        Facility Portfolio
      </GOVLink>
      <GOVLink as={Link} href="">
        New Facility
      </GOVLink>
      <GOVLink as={Link} href="">
        SLF
      </GOVLink>
      <GOVLink as={Link} href="">
        Claims
      </GOVLink>
      <GOVLink as={Link} href="">
        Recoveries
      </GOVLink>
      <GOVLink as={Link} href="">
        Reports
      </GOVLink>

      <SearchBox>
        <SearchBox.Input placeholder="Quick Lookup" />
        <SearchBox.Button />
      </SearchBox>
    </div>
  );
};
export default BBBNavBar;
