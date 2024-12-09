import React from "react";
import { TableLayoutType } from "@/utils/const/tableConstant";
import BaseTable from "@/components/UI/table/BaseTable";
import AuxiliaryWithStyle from "../Auxilitary/AuxilitaryWithStyle";
import Pagination from "@/components/UI/paginate";

interface TableLayoutProps<TData extends object, THeader extends object> {
  children: React.ReactNode;
  className: (typeof TableLayoutType)[keyof typeof TableLayoutType];
  TableHeader: THeader[];
  TableData: TData[];
}

const TableLayout = <TData extends object, THeader extends object>({
  children,
  className,
  TableHeader,
  TableData,
}: TableLayoutProps<TData, THeader>) => {
  const classNameMap: Record<
    (typeof TableLayoutType)[keyof typeof TableLayoutType],
    string
  > = {
    [TableLayoutType.Default]: "",
    [TableLayoutType.Modify]: "",
  };

  return (
    <AuxiliaryWithStyle className={classNameMap[className]}>
      <div>{children}</div>
      <div>
        <BaseTable columns={TableHeader as never} data={TableData as never} />
      </div>
      <div>
        <Pagination />
      </div>
    </AuxiliaryWithStyle>
  );
};

export default TableLayout;
