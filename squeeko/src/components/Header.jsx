import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import './Header.css'

const Header = () => {
  return (
    <div className="header">
        <div className="container">
            <Link to={'/'} className="logo">SQUEEKO</Link>
            <nav>
                <div className="hamburger">
                    <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            <Link to={'/features'} className="links">
                                FEATURES
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link to={'/pricing'} className="links">
                                PRICING
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link to={'/about'} className="links">
                                ABOUT
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>
                </div>
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
