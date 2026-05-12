import "./globals.css";

export const metadata = {
  title: "Bleach Questions FR",
  description: "Toutes les réponses aux questions sur Bleach en français !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
