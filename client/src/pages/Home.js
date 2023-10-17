import logo from '../assets/images/logo.svg';
import '../assets/css/Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          VX - Auto Deploy Test, Hello world!!
        </p>
      </header>
    </div>
  );
}

export default Home;