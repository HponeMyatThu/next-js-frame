import BaseTable from "@/components/UI/table/BaseTable";
import Auxiliary from "@/hoc/Auxilitary/Auxilitary";
import TableLayout from "@/hoc/layout/TableLayout";
import { TableLayoutType } from "@/utils/const/tableConstant";
import React from "react";
import DashboardStoreProviderWithProps from "./store";
import { columns, data } from "@/utils/mock/DashboardTableMock";

const DashboardPage = () => {
  return (
    <Auxiliary>
      <p>reusable table</p>
      <input type="text" />
      <button>Search</button>
    </Auxiliary>
  );
};

const DashboardTemplate = () => {
  return (
    <DashboardStoreProviderWithProps TableHeader={columns} TableData={data}>
      <TableLayout
        className={TableLayoutType.Default}
        TableHeader={columns}
        TableData={data}
      >
        <DashboardPage />
      </TableLayout>
    </DashboardStoreProviderWithProps>
  );
};

export default DashboardTemplate;
