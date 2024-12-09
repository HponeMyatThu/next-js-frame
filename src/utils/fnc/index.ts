const checkActiveSidebar = (pathName: string, listsProps: string) => {
  if (pathName !== "/" && listsProps === "/") {
    return false;
  }
  return pathName.includes(listsProps);
};

export { checkActiveSidebar };
