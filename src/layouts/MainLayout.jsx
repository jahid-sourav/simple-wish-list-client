import { Outlet } from "react-router-dom";
import "../commonStyles/CommonStyles.css";
import Footer from "../components/footer/Footer";

function MainLayout() {
  return (
    <>
      <main className="min-h-[calc(100vh-60px)]">
        <Outlet />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default MainLayout;
