import './globals.css';
import Friend from '@/app/ui/shared/Friend.tsx';
import NavigationDesktop from '@/app/ui/shared/Navigation.tsx';
import Footer from '@/app/ui/shared/mobile/Footer.tsx';
import Header from '@/app/ui/shared/mobile/Header.tsx';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Aha',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="en">
      <body>
        <main className="flex h-screen flex-col justify-between sm:flex-row">
          <Header />
          <NavigationDesktop />
          {children}
          <Friend />
          <Footer />
        </main>
      </body>
    </html>
  );
}
