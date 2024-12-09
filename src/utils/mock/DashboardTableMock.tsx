interface RowData {
  id: number;
  name: string;
  age: number;
  email: string;
}

interface ColumnData {
  key: string;
  label: string;
  render?: (value: any) => React.ReactNode;
}

export const columns: ColumnData[] = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "age", label: "Age" },
  {
    key: "email",
    label: "Email",
    render: (value: string) => <a href={`mailto:${value}`}>{value}</a>,
  },
];

export const data: RowData[] = [
  { id: 1, name: "John Doe", age: 28, email: "john@example.com" },
  { id: 2, name: "Jane Smith", age: 34, email: "jane@example.com" },
];
