import RegisterModal from './components/Modals/RegisterModal';
import NavBar from './components/navbar/NavBar';
import './globals.css'
import { Nunito } from 'next/font/google'
import ToasterProvider from './providers/ToasterProvider';

const nunito = Nunito({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone developed by Chetan Sharma',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ToasterProvider />
        <RegisterModal />
        <NavBar />
        {children}
      </body>
    </html>
  )
}
