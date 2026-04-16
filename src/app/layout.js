import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Stats from "@/components/Stats/Stats";
import "./globals.css";
import ContextProvider from "@/Context/ContextProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <ContextProvider>
          <Header />
          {children}
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}