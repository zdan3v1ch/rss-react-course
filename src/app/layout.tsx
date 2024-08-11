import type { Metadata } from 'next';
import '../App.css';
import '../index.css';
import { Providers } from './provider';

export const metadata: Metadata = {
  title: 'My first Next.js App',
  description: 'the best next.js App'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
