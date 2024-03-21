import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import HomeBar from './ui/homebar';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <main className="flex min-h-screen flex-col">
          {<HomeBar />}
          <div className="flex justify-center items-center h-screen">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
