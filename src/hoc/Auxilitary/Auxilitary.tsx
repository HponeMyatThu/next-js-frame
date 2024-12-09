import React, { ReactNode } from "react";

interface AuxiliaryProps {
  children: ReactNode;
}

const Auxiliary: React.FC<AuxiliaryProps> = ({ children }) => {
  return <>{children}</>;
};

export default Auxiliary;
