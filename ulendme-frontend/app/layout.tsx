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
          <div className="mt-4 flex grow items-center justify-center flex-col gap-4 md:flex-col">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
