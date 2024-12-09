import {
  Table,
  TableBody,
  TableBodyRow,
  TableBodyRowCol,
  TableHeader,
  TableHeaderRow,
  TableHeaderRowCol,
} from "@/components/UI/table";
import {
  TableBodyRowColType,
  TableBodyRowType,
  TableBodyType,
  TableHeaderRowColType,
  TableHeaderRowType,
  TableHeaderType,
  TableType,
} from "@/utils/const/tableConstant";

const ProductPage = () => {
  return (
    <Table className={TableType.Default}>
      <TableHeader className={TableHeaderType.Default}>
        <TableHeaderRow className={TableHeaderRowType.Default}>
          <TableHeaderRowCol className={TableHeaderRowColType.Default}>
            Name
          </TableHeaderRowCol>
          <TableHeaderRowCol className={TableHeaderRowColType.Default}>
            Age
          </TableHeaderRowCol>
        </TableHeaderRow>
      </TableHeader>
      <TableBody className={TableBodyType.Default}>
        <TableBodyRow className={TableBodyRowType.Default}>
          <TableBodyRowCol className={TableBodyRowColType.Default}>
            John Doe
          </TableBodyRowCol>
          <TableBodyRowCol className={TableBodyRowColType.Default}>
            30
          </TableBodyRowCol>
        </TableBodyRow>
        <TableBodyRow className={TableBodyRowType.Default}>
          <TableBodyRowCol className={TableBodyRowColType.Default}>
            John Doe
          </TableBodyRowCol>
          <TableBodyRowCol className={TableBodyRowColType.Default}>
            30
          </TableBodyRowCol>
        </TableBodyRow>
      </TableBody>
    </Table>
  );
};

const ProductTemplate = () => {
  return <ProductPage />;
};

export default ProductTemplate;
