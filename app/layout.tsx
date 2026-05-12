import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Nick Dashboard',
    default: 'Nick the cat Dashboard',
  },
  description: 'Nick the cat Dashboard next js test app hgfdjkhbgjhfdbsjghbdfs',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  keywords: ['nick', 'Dashboard', 'next', 'cat', 'hgfdjkhbgjhfdbsjghbdfs']
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
