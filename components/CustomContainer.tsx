import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
 
};
export default function CustomContainer({ children}: Props) {
  return (
    <div className="w-full sm:max-w-[71.25rem] sm:mx-auto px-3.5 md:px-10">
      {children}
    </div>
  );
}
