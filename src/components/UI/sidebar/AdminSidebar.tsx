import React, { useState } from "react";
import { LinkWrapper, SidebarList } from "./SidebarList";
import { AdminSidebarProps, LinkWrapperType } from "@/utils/const/navbarConstant";

const AdminSidebar: React.FC<AdminSidebarProps> = (props) => {
  const [childSidebarOpen, setChildSidebarOpen] = useState<boolean>(false);

  if (props.list.type === "dropdown" && props.list.childrenList.length > 0) {
    return (
      <LinkWrapper
        props={props}
        className={LinkWrapperType.Default}
        onclick={() => setChildSidebarOpen(!childSidebarOpen)}
      >
        <SidebarList
          label={props.list.label}
          haveChildren={props.list.childrenList.length > 0}
          icon={props.list.icon}
          children={props.list.childrenList}
          isOpenChildren={childSidebarOpen}
        />
      </LinkWrapper>
    );
  }

  return (
    <LinkWrapper props={props} className={LinkWrapperType.Default}>
      <SidebarList
        label={props.list.label}
        haveChildren={props.list.childrenList.length > 0}
        icon={props.list.icon}
      />
    </LinkWrapper>
  );
};

export default AdminSidebar;
