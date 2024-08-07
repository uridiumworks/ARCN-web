import LayoutProvider from "./layoutProvider";


export const metadata = {
  title: "News & Events",
};

export default function layout({ children }) {
  return <LayoutProvider>{children}</LayoutProvider>;

}