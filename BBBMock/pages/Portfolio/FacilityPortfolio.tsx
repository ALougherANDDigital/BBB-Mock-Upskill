import { Main, Table } from "govuk-react";

export default function FacilityPortfolio() {
  const testData = [
    {
      title: "Rejected",
      EFG: 0,
      BBLS: 0,
      CBILS: 0,
      CLBILS: 0,
      RLS: 0,
      RLS3: 11,
    },
    {
      title: "Eligible",
      EFG: 3,
      BBLS: 3,
      CBILS: 0,
      CLBILS: 4,
      RLS: 0,
      RLS3: 1,
    },
    {
      title: "Cancelled",
      EFG: 0,
      BBLS: 2,
      CBILS: 2,
      CLBILS: 2,
      RLS: 0,
      RLS3: 0,
    },
    {
      title: "Incomplete",
      EFG: 5,
      BBLS: 0,
      CBILS: 0,
      CLBILS: 1,
      RLS: 0,
      RLS3: 0,
    },
  ];

  return (
    <div>
      <Main>
        <Table caption="FACILITY PORTFOLIO">
          {testData.map((rowOfData) => {
            return (
              <Table.Row>
                <Table.CellHeader>{rowOfData.title}</Table.CellHeader>
                <Table.Cell>{rowOfData.EFG}</Table.Cell>
                <Table.Cell>{rowOfData.BBLS}</Table.Cell>
                <Table.Cell>{rowOfData.CBILS}</Table.Cell>
                <Table.Cell>{rowOfData.CLBILS}</Table.Cell>
                <Table.Cell>{rowOfData.RLS}</Table.Cell>
                <Table.Cell>{rowOfData.RLS3}</Table.Cell>
                <Table.Cell>
                  {rowOfData.EFG +
                    rowOfData.BBLS +
                    rowOfData.CBILS +
                    rowOfData.CLBILS +
                    rowOfData.RLS +
                    rowOfData.RLS3}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table>
      </Main>
    </div>
  );
}
