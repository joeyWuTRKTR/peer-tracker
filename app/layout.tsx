import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { NavigationBar } from '@/components/navigation-bar';
import { GoalsProvider } from '@/contexts/GoalsContext';
import { UserProvider } from '@/contexts/UserContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <UserProvider>
            <GoalsProvider>
              <NavigationBar />
              {children}
              <Toaster />
            </GoalsProvider>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}