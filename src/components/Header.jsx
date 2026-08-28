import { NavLink, useNavigate } from "react-router-dom"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useEffect, useState } from "react";
import { Menu, User, X } from "lucide-react";
import { links } from "./NavigationLinks";

function LogInBtn() {
    return (
        <NavLink 
            className="cursor-pointer p-2 rounded-lg transition-all duration-200 text-primary hover:bg-muted hover:text-primary" 
            to="/log-in"
        >
            <User className="w-8 h-8"/>
        </NavLink>
    )
}

function DesktopNav() {
    const navigate = useNavigate();

    return (
        <NavigationMenu className="lg:flex hidden">
            <NavigationMenuList className="gap-2">

                {Object.entries(links)
                    .filter(([ category ]) => category !== "Company")
                    .map(([ category, items ]) => (
                        <NavigationMenuItem key={category}>
                            <NavigationMenuTrigger
                                className="cursor-pointer text-xl text-primary"
                            >
                                {category}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="">
                                {items.map(({ title, link }) => (
                                    <NavigationMenuLink 
                                        key={link}
                                        onClick={() => navigate(link)}
                                        className="cursor-pointer text-xl text-primary"
                                    >
                                        {title}
                                    </NavigationMenuLink>
                                ))}
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    )
                )}

                {links.Company
                    .filter(({ title }) => title === "About Us")
                    .map(({ title, link }) => (
                        <NavigationMenuItem key={link}>
                            <NavigationMenuLink 
                                onClick={() => navigate(link)}
                                className="cursor-pointer text-xl text-primary inline-flex h-9 w-max px-2.5 py-1.5 hover:bg-muted hover:text-primary"
                            >
                                {title}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    )
                )}
                    
                <NavigationMenuItem className="flex flex-col justify-center items-center flex-1 border-l pl-2">
                    <LogInBtn />
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function MobileNav() {
    const navigate = useNavigate()
    return (
        <Sheet>
            <div className="lg:hidden flex flex-row justify-end items-center">
                <div className="flex flex-col justify-center items-center pr-2 mr-2 border-r">
                    <LogInBtn />
                </div>
                <SheetTrigger className="cursor-pointer p-2 rounded-lg border-primary text-primary hover:bg-muted hover:text-primary transition-all duration-200">
                    <Menu className="w-8 h-8"/>
                </SheetTrigger>
            </div>
            <SheetContent 
                side="top" 
                showCloseButton={false}    
                className="data-[side=top]:h-full gap-0 bg-background"
            >
                <SheetHeader className="flex flex-row justify-between items-center w-full py-6 px-10 border-b">
                    <SheetClose
                        className="cursor-pointer"
                        onClick={() => navigate('/')}
                    >
                        <h2 className="text-4xl font-mono font-bold text-primary">
                            SQUEEKO
                        </h2>
                    </SheetClose>
                    <SheetClose className="cursor-pointer p-2 rounded-lg border-primary text-primary hover:bg-muted hover:text-primary transition-all duration-200">
                        <X className="w-8 h-8"/>
                    </SheetClose>
                </SheetHeader>

                <Accordion>
                    {Object.entries(links)
                        .filter(([category]) => category !== "Company")
                        .map(([ category, items ]) => (
                        <AccordionItem
                            key={category}
                            value={category}
                            className="border-b hover:bg-gradient-to-r from-background to-primary/40 px-10"
                        >
                            <AccordionTrigger
                                className="text-lg text-primary hover:no-underline cursor-pointer border py-4"
                            >
                                {category}
                            </AccordionTrigger>

                            <AccordionContent 
                                className="flex flex-col pl-2.5"
                            >
                                {items.map(({ title, link }) => (
                                        <SheetClose
                                            key={link}
                                            onClick={() => navigate(link)}
                                            className="py-2 cursor-pointer text-start hover:underline w-fit text-muted-foreground"
                                        >
                                            {title}
                                        </SheetClose>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    ))}

                    {links.Company
                        .filter(({ title }) => title === "About Us")
                        .map(({ title, link }) => (
                            <AccordionItem 
                                key={link}
                                value={title}
                                className="border-b hover:bg-gradient-to-r from-background to-primary/40 px-10"
                            >
                                <SheetClose
                                    onClick={() => navigate(link)}
                                    className="text-lg text-primary cursor-pointer items-start w-full border border-transparent px-2.5 py-4 text-left font-medium outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring aria-disabled:pointer-events-none aria-disabled:opacity-50"
                                >
                                    {title}
                                </SheetClose>
                            </AccordionItem>
                        ))}
                </Accordion>
            </SheetContent>
        </Sheet>
    )
}

function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0)
        }

        handleScroll()

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className={
            `sticky top-0 z-50 flex flex-row justify-between items-center w-full self-center p-6 lg:px-20 px-10 bg-background transition-all duration-100
            ${
                scrolled 
                ? 'border-b' 
                : 'border-b-0'
            }`}
        >
            <div className="flex-1 flex justify-start items-center">
                <NavLink
                    to='/'
                    end
                >
                    <h2 className="text-4xl font-mono font-bold text-primary">
                        SQUEEKO
                    </h2>
                </NavLink>
            </div>
            <div className="flex-2 flex flex-row justify-end items-center">
                <DesktopNav />
                <MobileNav />
            </div>
        </div>
    )
}

export default Header