import React from "react";

const sizeClasses = {
  txtRobotoRegular13WhiteA700: "font-normal font-roboto",
  txtRobotoRegular14WhiteA700: "font-normal font-roboto",
  txtRobotoRegular16DeeppurpleA200: "font-normal font-roboto",
  txtRobotoRegular9: "font-normal font-roboto",
  txtRobotoRegular32WhiteA700: "font-normal font-roboto",
  txtRobotoRegular12: "font-normal font-roboto",
  txtRobotoRegular18Gray900: "font-normal font-roboto",
  txtRobotoRegular13: "font-normal font-roboto",
  txtRobotoRegular47: "font-normal font-roboto",
  txtRobotoRegular14: "font-normal font-roboto",
  txtRobotoRegular15: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtRobotoRegular18: "font-normal font-roboto",
  txtRobotoRegular19: "font-normal font-roboto",
  txtRobotoRegular15Bluegray500: "font-normal font-roboto",
  txtRobotoRegular16Yellow900: "font-normal font-roboto",
  txtRobotoRegular16WhiteA700: "font-normal font-roboto",
  txtRobotoRegular13Bluegray500: "font-normal font-roboto",
  txtRobotoRegular20: "font-normal font-roboto",
  txtRobotoRegular31: "font-normal font-roboto",
  txtRobotoRegular32: "font-normal font-roboto",
  txtRobotoRegular21: "font-normal font-roboto",
  txtRobotoRegular11: "font-normal font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
