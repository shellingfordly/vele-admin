import { TableColumnCtx } from "element-plus/es/components/table/src/table-column/defaults";
import type { TableProps } from "element-plus/es/components/table/src/table/defaults";

export interface BasicColumnProps<T = any> extends Partial<TableColumnCtx<T>> {}

export interface BasicTableProps<T = any> extends Partial<TableProps<T>> {
  columns?: BasicColumnProps[];
}

export interface TableActionType {
  setProps: (props: any) => void;
}
