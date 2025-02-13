import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
 
};
export default function CustomContainer({ children}: Props) {
  return (
    <div className="w-full sm:max-w-[75rem] sm:mx-auto px-8">
      {children}
    </div>
  );
}
