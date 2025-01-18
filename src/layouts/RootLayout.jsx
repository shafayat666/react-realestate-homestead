import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* NavBar always on top */}
      <header className="z-50">
        <NavBar />
      </header>

      {/* Outlet to grow and fill the remaining space */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer always at the bottom */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
