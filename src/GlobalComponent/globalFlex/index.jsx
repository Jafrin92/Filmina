import React from "react";

const GlobalFlex = ({ className, children }) => {
  return <div className={`flex ${className}`}>{children}</div>;
};

export default GlobalFlex;
