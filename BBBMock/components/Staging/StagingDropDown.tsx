import { Panel, Button, Paragraph } from "govuk-react";

type StagingDropDownProps = {
  title: string;
};

const StagingDropdown = ({ title }: StagingDropDownProps) => {
  return (
    <div>
      <Panel title="">
        <div style={{ display: "flex" }}>
          <Paragraph>{title}</Paragraph>
          <Button>Load Data</Button>
        </div>
      </Panel>
    </div>
  );
};
export default StagingDropdown;
