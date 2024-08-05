import LayoutProvider from "./layoutProvider";


export const metadata = {
  title: "Research",
};

export default function layout({ children }) {
  return <LayoutProvider>{children}</LayoutProvider>;

}