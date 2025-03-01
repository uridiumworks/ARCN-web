import LayoutProvider from "./layoutProvider";

export const metadata = {
  title: "Mandate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutProvider>{children}</LayoutProvider>;
}
