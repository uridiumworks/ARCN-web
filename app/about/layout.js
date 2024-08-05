import LayoutProvider from "./layoutProvider";


export const metadata = {
  title: "About us",
};

export default function layout({ children }) {
  return <LayoutProvider>{children}</LayoutProvider>;

}