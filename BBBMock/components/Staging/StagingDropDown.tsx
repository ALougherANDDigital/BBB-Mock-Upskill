import { Panel, Button, Paragraph } from "govuk-react";

type StagingDropDownProps = {
  title: string;
};

const StagingDropdown = ({ title }: StagingDropDownProps) => {
  return (
    <div>
      <Panel title="">
        <Paragraph>{title}</Paragraph>
        <Button>Load Data</Button>
      </Panel>
    </div>
  );
};
export default StagingDropdown;
