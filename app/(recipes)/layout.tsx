import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextjs Recipes app",
  description: "App for our Nextjs workshop",
};

export default function RootLayout({
  children,
  header,
}: Readonly<{
  children: React.ReactNode;
  header: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        {header}
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto p-6">{children}</div>
        </main>
      </body>
    </html>
  );
}
