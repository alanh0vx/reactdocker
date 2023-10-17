import { Outlet, Link } from "react-router-dom";
import '../assets/css/style.css';

const Layout = () => {
  return (
    <>
      <div class="header_nav">
        
            <Link to="/">Home</Link>&nbsp;|&nbsp;
        
            <Link to="/vulns?username=hello">Vulns</Link>&nbsp;|&nbsp;

            <Link to="/404">404</Link>
         
      </div>

      <Outlet />
    </>
  )
};

export default Layout;