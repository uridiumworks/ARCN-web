import "./globals.css";

export const metadata = {
  title: {
    template: "%s | ACRN Web ",
    default: "ACRN Web | Official Website",
  },
  description: "The Official ACRN Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>{children}</body>
    </html>
  );
}