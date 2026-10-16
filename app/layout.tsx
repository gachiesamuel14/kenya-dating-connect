import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kenya Dating Connect',
  description: 'Location-based dating for Kenya',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
