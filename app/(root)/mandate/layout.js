import LayoutProvider from "./layoutProvider";


export const metadata = {
  title: "Mandate",
};

export default function layout({ children }) {
  return <LayoutProvider>{children}</LayoutProvider>;

}