import "./globals.css";

export const metadata = {
  title: "Hello World",
  description: "A minimal Hello World Next.js page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
