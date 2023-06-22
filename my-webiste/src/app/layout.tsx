import { Inter, Saira, Saira_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const saira = Saira({ subsets: ["latin"], weight: "500" });
const sairaCondensed = Saira_Condensed({ subsets: ["latin", "latin-ext", "vietnamese"], weight: "500" });

export const metadata = {
  title: "My website",
  description: "Konrad Zawodnik - Front-end Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${saira.className} ${sairaCondensed.className}`}>{children}</body>
    </html>
  );
}
