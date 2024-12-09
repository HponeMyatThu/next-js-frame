import React, { PropsWithChildren } from "react";

interface AuxiliaryWithStyleProps extends PropsWithChildren {
  className?: string;
}

const AuxiliaryWithStyle: React.FC<AuxiliaryWithStyleProps> = ({
  className = "",
  children,
}) => {
  return <div className={`${className}`}>{children}</div>;
};

export default AuxiliaryWithStyle;
