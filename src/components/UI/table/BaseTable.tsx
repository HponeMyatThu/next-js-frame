import Auxiliary from "@/hoc/Auxilitary/Auxilitary";
import React, { useState, useMemo, ReactNode } from "react";
import InputBox from "../input/InputBox";
import AuxiliaryWithStyle from "@/hoc/Auxilitary/AuxilitaryWithStyle";
import { ButtonFilled, HasAdvancedSearch } from "../button/Button";
import {
  TableBodyRowColType,
  TableBodyRowType,
  TableBodyType,
  TableHeaderRowColType,
  TableHeaderRowType,
  TableHeaderType,
  TableType,
} from "@/utils/const/tableConstant";
import {
  Table,
  TableBody,
  TableBodyRow,
  TableBodyRowCol,
  TableHeader,
  TableHeaderRow,
  TableHeaderRowCol,
} from ".";

interface Column<T> {
  key: keyof T;
  label: string;
  render?: (value: T[keyof T], row: T) => ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  onAdvancedSearch?: () => void;
  rowsPerPageOptions?: number[];
}

interface SortConfig<T> {
  key: keyof T;
  direction: "asc" | "desc";
}

const BaseTable = <T extends Record<string, unknown>>({
  columns,
  data,
  onAdvancedSearch,
  rowsPerPageOptions = [5, 10, 20, 50],
}: TableProps<T>) => {
  console.log(data);

  return (
    <Table className={TableType.Default}>
      <TableHeader className={TableHeaderType.Default}>
        <TableHeaderRow className={TableHeaderRowType.Default}>
          {columns.map((data, index) => {
            return (
              <TableHeaderRowCol
                className={TableHeaderRowColType.Default}
                key={index + data.label}
              >
                {data.label}
              </TableHeaderRowCol>
            );
          })}
        </TableHeaderRow>
      </TableHeader>
      <TableBody className={TableBodyType.Default}>
        {data.map((data, index) => {
          return (
            <TableBodyRow className={TableBodyRowType.Default} key={index}>
              {columns.map((column, index) => {
                return (
                  <TableBodyRowCol
                    className={TableBodyRowColType.Default}
                    key={index}
                  >
                    {data[column.key] as never}
                  </TableBodyRowCol>
                );
              })}
            </TableBodyRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default BaseTable;
