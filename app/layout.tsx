import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDPR Email Cleanup Scanner",
  description: "Scan email lists for GDPR compliance violations. Identify subscribers without proper consent documentation."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="222fd5eb-34c0-4a17-88f0-3578d4a507b9"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
