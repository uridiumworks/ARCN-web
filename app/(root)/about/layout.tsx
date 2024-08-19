import LayoutProvider from "./layoutProvider";


export const metadata = {
  title: "About us",
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