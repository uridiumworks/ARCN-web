import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
 
};
export default function CustomContainer({ children}: Props) {
  return (
    <div className="w-full sm:max-w-[77.5rem] sm:mx-auto px-10">
      {children}
    </div>
  );
}
