import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function PageShell({ children }) {
  return (
    <>
      <Navbar />
      <main id="bc-main" role="main" className="sp-main">{children}</main>
      <Footer />
    </>
  );
}
