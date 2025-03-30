import { useEffect } from "react";
import Logo from "../Logo/Logo";
import './Header.css';

function Header() {
  useEffect(() => {
    
  }, []);

  return (
    <div className="header-container">
      <Logo />
    </div>
  )
}

export default Header