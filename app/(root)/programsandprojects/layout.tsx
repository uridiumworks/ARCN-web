import LayoutProvider from "./layoutProvider";


export const metadata = {
  title: "Programs & Projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <LayoutProvider>
      {children}
    </LayoutProvider>
  );
}