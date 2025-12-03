import { Outlet } from "react-router-dom";
import Header from "../../Header/index.tsx";
import Footer from "../../Footer/index.tsx";

const PageTitle = () => {
  return (
    <div>
      <h1>Welcome to Cinema</h1>
    </div>
  );
};

export const Layout = () => (
  <div>
    <Header />
    <Outlet />
 <Footer footerTitle="" image="	https://pixelgrade.com/wp-content/uploads/2020/03/footer-featured.png"> </Footer>
  </div>
);

export default PageTitle;
