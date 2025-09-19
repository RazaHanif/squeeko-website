import {
  NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex w-[100%] mx-0 my-auto border border-solid border-red-50">
        <div className="flex justify-between items-center font-roboto bg-primary py-2 px-4 my-4 mx-2 rounded-xs w-[100%]">
            <div className="text-4xl font-bold text-background">SQUEEKO</div>
            <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                        <a href="/">
                            HOME
                        </a>
                </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
                <NavigationMenuItem>
                        <a href="/about">
                            ABOUT
                        </a>
                </NavigationMenuItem>
            </NavigationMenuList>
            </NavigationMenu>
        </div>
    </div>
  );
}

export default Header;
