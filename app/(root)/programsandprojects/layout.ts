import LayoutProvider from "./layoutProvider";


export const metadata = {
  title: "Programs & Projects",
};

export default function layout({ children }) {
  return <LayoutProvider>{children}</LayoutProvider>;

}