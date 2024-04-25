import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { ReactNode } from 'react';

const defaultUrl = 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Acqua Internship Test',
  description: 'Acqua Internship Test',
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
