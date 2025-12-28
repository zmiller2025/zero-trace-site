import "./globals.css";

export const metadata = {
  title: "Zero Trace Pro Cleaning",
  description: "Commercial • Residential • New Builds — Serving the Indianapolis area",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
