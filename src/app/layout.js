import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata = {
  title: "Bleach Questions FR",
  description: "Archive des Q&A du Klub Outside",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-white text-slate-900 antialiased overflow-x-hidden">
        <header className="bg-black pt-20 pb-16 px-4 border-b-3 border-red-600">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className={`${oswald.className} text-6xl md:text-7xl text-white uppercase tracking-widest leading-none`}
            >
              Bleach <span className="text-red-600">Questions</span>
              <span className="text-2xl md:text-4xl ml-2 align-baseline text-slate-400">
                FR
              </span>
            </h1>

            <div className="mt-9">
              <span
                className={`${inter.className} inline-block bg-white text-black px-8 py-3 text-2xl md:text-3xl shadow-[3px_3px_0px_0px_#e7000b]`}
              >
                Archive des Q&A du Klub Outside
              </span>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;