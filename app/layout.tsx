import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Logins AMZ",
  description: "Amazon logins management application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Logins AMZ</title>
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
