import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ModeToggle } from "../components/mode-toggle";

const Header = () => {
  return (
    <div className="flex w-[100%] mx-0 my-auto border border-solid border-red-50">
        <div className="flex justify-between items-center font-roboto bg-primary py-2 px-4 my-4 mx-2 rounded w-[100%]">
            <div className="text-4xl font-bold text-background">SQUEEKO</div>
            <ul className="list-none flex items-center justify-end m-0">
                <li className="ml-5">
                    <Link to={'/features'} className="text-background hover:underline">
                        FEATURES
                    </Link>
                </li>
                <li className="ml-5">
                    <Link to={'/pricing'} className="text-background hover:underline">
                        PRICING
                    </Link>
                </li>
                <li className="ml-5">
                    <Link to={'/about'} className="text-background hover:underline">
                        ABOUT
                    </Link>
                </li>
                <li className="ml-5">
                    <Button variant="outline">
                        Start Today
                    </Button>
                </li>
                <li className="ml-5">
                    <ModeToggle />
                </li>
            </ul>

        </div>
    </div>
  );
}

export default Header;
