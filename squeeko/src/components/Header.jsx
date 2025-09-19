import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import './Header.css'

const Header = () => {
  return (
    <div className="header">
        <div className="container">
            <div className="logo">
                SQUEEKO
            </div>
            <nav>
                <ul className="nav-links">
                    <li className="link-items">
                        <Link to={'/features'} className="links">
                            FEATURES
                        </Link>
                    </li>
                    <li className="link-items">
                        <Link to={'/pricing'} className="links">
                            PRICING
                        </Link>
                    </li>
                    <li className="link-items">
                        <Link to={'/about'} className="links">
                            ABOUT
                        </Link>
                    </li>
                    <li className="link-items">
                        <Button variant="outline">
                            Start Today
                        </Button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  );
}

export default Header;
