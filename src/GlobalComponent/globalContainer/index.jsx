import React from "react";

const GlobalContainer = ({ className, children }) => {
  return <div className={`container mx-auto ${className}`}>{children}</div>;
};

export default GlobalContainer;
