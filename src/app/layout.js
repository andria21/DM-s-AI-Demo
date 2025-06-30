import localFont from "next/font/local";
import "./globals.css";
import ChatWidget from "@/components/dm-overlay";
import GoogleTagManager from "@/components/gtm/gtm";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "DM's AI AUTOMATION DEMO",
  description: "DM's AI AUTOMATION",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning="true">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* <GoogleTagManager /> */}
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
