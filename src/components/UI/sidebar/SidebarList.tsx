import {
  AdminSidebarProps,
  LinkWrapperType,
  NavBarLiType,
  NavBarULType,
  SidebarChildItem,
  SidebarListTypeEnum,
} from "@/utils/const/navbarConstant";
import Link from "next/link";
import React from "react";
import { NavbarLITag, NavbarULTag } from "./Link";
import { twMerge } from "tailwind-merge";
import Auxiliary from "@/hoc/Auxilitary/Auxilitary";

interface SidebarListType {
  label: string;
  icon?: string;
  haveChildren: boolean;
  children?: SidebarChildItem[];
  isOpenChildren?: boolean;
}

const SidebarList: React.FC<SidebarListType> = ({
  label,
  icon,
  haveChildren,
  children,
  isOpenChildren,
}) => {
  if (haveChildren) {
    return (
      <Auxiliary>
        <NavbarLITag className={NavBarLiType.Default}>
          {icon}
          {label}
        </NavbarLITag>
        <SidebarChildrenList
          childrenList={children as SidebarChildItem[]}
          isOpen={isOpenChildren as boolean}
        />
      </Auxiliary>
    );
  }
  return (
    <NavbarLITag className={NavBarLiType.Default}>
      {icon}
      {label}
    </NavbarLITag>
  );
};

interface LinkWrapperType {
  props: AdminSidebarProps;
  children: React.ReactNode;
  className: (typeof LinkWrapperType)[keyof typeof LinkWrapperType];
  additionalStyle?: string;
  onclick?: () => void;
}

const LinkWrapper: React.FC<LinkWrapperType> = ({
  children,
  className,
  additionalStyle = "",
  props,
  onclick,
}) => {
  const classNameMap: Record<
    (typeof LinkWrapperType)[keyof typeof LinkWrapperType],
    string
  > = {
    [LinkWrapperType.Default]: "text-black cursor-pointer",
    [LinkWrapperType.Modify]: "",
  };

  //hard code need to change this
  const Component = props.list.href && props.list.href !== "#" ? Link : "div";

  return (
    <Component
      href={props.list.href}
      className={twMerge([classNameMap[className], additionalStyle])}
      onClick={onclick}
    >
      {children}
    </Component>
  );
};

interface SidebarMenuProps {
  childrenList: SidebarChildItem[];
  isOpen: boolean;
}

const SidebarChildrenList: React.FC<SidebarMenuProps> = ({
  childrenList,
  isOpen,
}) => {
  if (!isOpen) return null;

  return (
    <NavbarULTag className={NavBarULType.Default}>
      {childrenList.map((child, index) => (
        <Link href={child.href} className="" key={index}>
          <NavbarLITag className={NavBarLiType.Default} key={index}>
            {child.label}
          </NavbarLITag>
        </Link>
      ))}
    </NavbarULTag>
  );
};

export { SidebarList, LinkWrapper };
