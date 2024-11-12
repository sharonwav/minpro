import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/features/global/components/ClientLayout';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import localFont from "next/font/local";
import TanstackProvider from '@/providers/TanstackProvider';
import AuthProvider from '@/providers/AuthProvider';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import 'quill/dist/quill.snow.css';

const inter = Inter({ subsets: ['latin'] });

const vsBold = localFont({
  src: "./fonts/ValueSerifBold-930826492.otf",
  variable: "--font-vs-Bold",
  weight: "100"
})

const vsBoldItalic = localFont({
  src: "./fonts/ValueSerifBoldItalic-930826495.otf",
  variable: "--font-vs-BoldItalic",
  weight: "100"
})

export const metadata: Metadata = {
  title: 'onClick(e) - Buy tickets',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body className={`${inter.className} ${vsBold.variable} ${vsBoldItalic.variable}`} >
        <TanstackProvider>
            {/* <AuthProvider> */}
              <ToastContainer />
                <ClientLayout>
                  {children}
                </ClientLayout>
            {/* </AuthProvider> */}
        </TanstackProvider>
      </body>
    </html>
  );
}
