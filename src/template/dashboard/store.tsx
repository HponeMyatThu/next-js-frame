import React from "react";
import { createContextStore } from "@/context/ZustandProvider";
import { createStore } from "zustand/vanilla";
import { MyMutationProvider } from "./mutation";

export type DashboardState = {
  TableHeader: any;
  TableData: any;
};

export type DashboardActions = {
  setTableHeader: (header: any) => void;
  setTableData: (data: any) => void;
};

export type DashboardStore = DashboardState & DashboardActions;

const defaultDashboardState: DashboardState = {
  TableHeader: null,
  TableData: null,
};

const [DashboardStoreProvider, useDashboardStore] = createContextStore<
  DashboardStore,
  DashboardState
>((props: DashboardState) =>
  createStore<DashboardStore>()((set) => ({
    ...defaultDashboardState,
    ...props,
    setTableHeader: (header) => set(() => ({ TableHeader: header })),
    setTableData: (data) => set(() => ({ TableData: data })),
  }))
);

export { useDashboardStore };

export default function DashboardStoreProviderWithProps({
  children,
  ...props
}: React.PropsWithChildren<DashboardState>) {
  return (
    <DashboardStoreProvider {...props}>
      <MyMutationProvider>{children}</MyMutationProvider>
    </DashboardStoreProvider>
  );
}
