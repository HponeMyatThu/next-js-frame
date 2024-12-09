"use client";

import { useAuth } from "@/context/AuthContext";
import Auxiliary from "@/hoc/Auxilitary/Auxilitary";
import Link from "next/link";
import React, { useMemo } from "react";
import { NavbarTag, NavbarULTag } from "./Link";
import {
  NavBarType,
  NavBarULType,
  SidebarItem,
} from "@/utils/const/navbarConstant";
import AdminSidebar from "./AdminSidebar";

const Sidebar: React.FC = () => {
  const { token } = useAuth();

  if (!token) {
    return null;
  }

  const SidebarLinkLists = [
    {
      id: "1",
      href: "/",
      label: "overview",
      icon: "OverviewIcon",
      type: "link",
      childrenList: [],
    },
    {
      id: "2",
      href: "/members",
      label: "members",
      icon: "MembersIcon",
      type: "link",
      childrenList: [],
    },
    {
      id: "3",
      href: "",
      label: "schemes",
      icon: "SchemeIcon",
      type: "dropdown",
      childrenList: [
        {
          href: "/schemes",
          label: "lbl_sh_overview",
        },
        {
          href: "/schemes-upload",
          label: "lbl_sh_upload",
        },
      ],
    },
    {
      id: "4",
      href: "#",
      label: "user_manual",
      icon: "UserManualIcon",
      type: "link",
      childrenList: [],
    },
  ];

  return (
    <Auxiliary>
      <div>
        <h1>LOGO</h1>
      </div>
      <NavbarTag className={NavBarType.Default}>
        <NavbarULTag className={NavBarULType.Default}>
          {SidebarLinkLists.map((link) => {
            return <AdminSidebar list={link as SidebarItem} key={link.id} />;
          })}
        </NavbarULTag>
      </NavbarTag>
    </Auxiliary>
  );
};

export default Sidebar;
