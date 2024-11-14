import Logo from '@/app/_components/Logo';
import Navigation from '@/app/_components/Navigation';

import '@/app/_styles/globals.css';

export const metadata = {
  // title: 'The Wild Oasis',
  title: {
    template: '%s / The Wild Oasis',
    default: 'Welcome / The Wild Oasis',
  },
  description:
    'Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests',
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-primary-100 min-h-screen bg-primary-950">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by the wild oasis</footer>
      </body>
    </html>
  );
}

export default RootLayout;
