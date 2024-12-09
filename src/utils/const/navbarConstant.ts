export const NavBarLayoutType = {
  Layout: "Layout",
  Sidebar: "Sidebar",
  Children: "Children",
} as const;

export const NavBarType = {
  Default: "default-nav",
  Modify: "modify-nav",
} as const;

export const NavBarULType = {
  Default: "default-ul",
  SubMenu: "submenu-ul",
  Modify: "modify-ul",
} as const;

export const NavBarLiType = {
  Default: "default-li",
  SubMenu: "submenu-li",
  Active: "active-li",
  Modify: "modify-li",
} as const;

export const LinkWrapperType = {
  Default: "default-link-wrapper",
  Modify: "modify-link-wrapper",
} as const;

export const SidebarListTypeEnum = {
  Default: "default-sidebar-list",
  Modify: "modify-sidebar-list",
};

export interface SidebarChildItem {
  href: string;
  label: string;
}

export interface SidebarItem {
  id: string;
  href: string;
  label: string;
  icon: string;
  type: "link" | "dropdown";
  childrenList: SidebarChildItem[];
}

export interface AdminSidebarProps {
  list: SidebarItem;
}
