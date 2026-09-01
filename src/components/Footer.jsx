import { NavLink } from "react-router-dom"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { legalLinks, links, socialLinks } from "./NavigationLinks"
import { useState } from "react"
import { Copyright } from "lucide-react"

function FooterAccordion() {
    const [open, setOpen] = useState("")

    return (
        <Accordion 
            className="lg:hidden flex"
            value={open}
            onValueChange={setOpen}
            >
            {Object.entries(links).map(([ category, items ]) => (
                <AccordionItem
                    key={category}
                    value={category}
                    className="border-b"
                >
                    <AccordionTrigger
                        className="text-lg text-primary hover:no-underline cursor-pointer"
                    >
                        {category}
                    </AccordionTrigger>

                    <AccordionContent 
                        className="flex flex-col [&_a]:no-underline [&_a]:hover:text-primary [&_a]:hover:underline [&_a]:w-fit text-muted-foreground pl-3"
                    >
                        {items.map(({ title, link }) => (
                                <NavLink
                                    key={link}
                                    to={link}
                                    end
                                    className="py-2"
                                    onClick={() => setOpen("")}
                                >
                                    {title}
                                </NavLink>
                        ))}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

function FooterLinks() {
    return (
        <div className="hidden lg:flex flex-row w-full justify-around items-center bg-red-500">
            {Object.entries(links).map(([ category, items ]) => (
                <div
                    key={category}
                    value={category}
                >
                    <h2 className="text-xl text-primary mb-4">
                        {category}
                    </h2>

                    <div
                        className="flex flex-col [&_a]:no-underline [&_a]:hover:text-primary [&_a]:hover:underline [&_a]:w-fit text-muted-foreground gap-2"
                    >
                        {items.map(({ title, link }) => (
                                <NavLink
                                    key={link}
                                    to={link}
                                    end
                                    className=""
                                >
                                    {title}
                                </NavLink>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

function Footer() {
    return (
        <div className="flex flex-col justify-center items-center w-full border-t bg-background">
            <div className="flex-1 flex lg:flex-row flex-col w-9/10 lg:py-8 py-4">
                <div className="lg:hidden flex px-4">
                    <FooterAccordion />
                </div>
                <div className="flex-1 flex flex-col justify-start items-start w-9/10 p-4 gap-4 text-muted-foreground">
                    <h2 className="text-2xl font-mono font-bold text-primary">
                        SQUEEKO
                    </h2>
                    <p className="font-light w-full lg:w-2/3">
                        Manage your center with beautifully designed software and a team who cares about your success.
                    </p>
                    <div className="flex flex-row justify-start lg:justify-center items-center">
                        {socialLinks.map(({ icon: Icon, link }) => (
                            <a href={link} key={link}>
                                <Icon className="size-8 lg:size-9" />
                            </a>
                        ))}
                    </div>
                </div>
                
                <div className="flex-1 lg:flex hidden flex-col items-center justify-start gap-2 p-4">
                    <FooterLinks />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center w-9/10 gap-2 border-t lg:py-8 py-4">
                <div className="flex flex-row gap-2 lg:gap-6 text-xs w-full lg:justify-start justify-around flex-wrap text-muted-foreground">
                    {legalLinks.map(({ title, link }) => (
                        <NavLink 
                            key={link}
                            to={link}
                            end
                            className="hover:underline text-nowrap"
                        >
                            {title}
                        </NavLink>
                    ))}
                </div>
                <div className="flex flex-row flex-2">
                    <h2 
                        className="text-xs font-semibold text-nowrap text-muted-foreground font-mono flex flex-row justify-center items-center text-center gap-2"
                    >
                        <Copyright className="size-2.5"/> 2026 SQUEEKO - All Rights Reserved.
                    </h2>
                </div>
            </div>

        </div>
    )
}

export default Footer