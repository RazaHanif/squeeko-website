import FadeUp from "@/components/gsap/FadeUp"
import ScrollSnap from "@/components/gsap/ScrollSnap"
import HorizontalScroll from "@/components/HorizontalScroll"
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { NavLink } from "react-router-dom"
import { ChevronRight } from "lucide-react"


function HomeFeatureAccordion() {
    const data = [
        {
            trigger: "Scheduling",
            header: "Heading",
            desc: "Description",
            links: [
                {title: "Link 1", link: "#"},
                {title: "Link 2", link: "#"},
                {title: "Link 3", link: "#"},
            ],
            image: "IMAGE"
        },
        {
            trigger: "Billing",
            header: "Heading",
            desc: "Description",
            links: [
                {title: "Link 1", link: "#"},
                {title: "Link 2", link: "#"},
                {title: "Link 3", link: "#"},
            ],
            image: "IMAGE"
        },
        {
            trigger: "Communication",
            header: "Heading",
            desc: "Description",
            links: [
                {title: "Link 1", link: "#"},
                {title: "Link 2", link: "#"},
                {title: "Link 3", link: "#"},
            ],
            image: "IMAGE"
        },
        {
            trigger: "Compliance",
            header: "Heading",
            desc: "Description",
            links: [
                {title: "Link 1", link: "#"},
                {title: "Link 2", link: "#"},
                {title: "Link 3", link: "#"},
            ],
            image: "IMAGE"
        },
        {
            trigger: "On Boarding",
            header: "Heading",
            desc: "Description",
            links: [
                {title: "Link 1", link: "#"},
                {title: "Link 2", link: "#"},
                {title: "Link 3", link: "#"},
            ],
            image: "IMAGE"
        },
    ]


    return (
        <Accordion
            defaultValue={[data[0].trigger]}
            className="w-full rounded-lg bg-primary p-6"
        >
            {data.map(({trigger, header, desc, links, image}) => (
                <>
                <AccordionItem>
                    <AccordionTrigger></AccordionTrigger>

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
            <AccordionItem 
                key={trigger}
                value={trigger}
                className="border-primary-foreground"
            >
                <AccordionTrigger 
                    className="cursor-pointer hover:no-underline"
                >
                    {trigger}
                </AccordionTrigger>
                <AccordionContent 
                    className="flex flex-col [&_a]:no-underline [&_a]:hover:text-secondary [&_a]:hover:underline [&_a]:w-fit my-8 lg:my-16 gap-4"
                >
                    <h2 className="text-4xl lg:text-5xl font-serif font-semibold">
                        {header}
                    </h2>
                    <div className="">
                        <p>
                            Description
                        </p>
                    </div>
                    <div className="flex flex-col items-start my-8">
                        <NavLink 
                            to="#" 
                            end 
                            className="flex flex-row justify-center items-center text-lg"
                        >
                            <ChevronRight className="size-6"/>
                            Link
                        </NavLink>
                        <NavLink 
                            to="#" 
                            end 
                            className="flex flex-row justify-center items-center text-lg"
                        >
                            <ChevronRight className="size-6"/>
                            Link
                        </NavLink>
                        <NavLink 
                            to="#" 
                            end 
                            className="flex flex-row justify-center items-center text-lg"
                        >
                            <ChevronRight className="size-6"/>
                            Link
                        </NavLink>
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-center p-20 rounded-xl bg-secondary text-secondary-foreground border-secondary-foreground border">
                        <div className="text-lg font-bold font-mono">
                            IMAGE
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
            </>
            ))}
            <AccordionItem 
                value="1"
                className="border-primary-foreground"
            >
                <AccordionTrigger 
                    className="cursor-pointer hover:no-underline"
                >
                    Scheduling
                </AccordionTrigger>
                <AccordionContent 
                    className="flex flex-col [&_a]:no-underline [&_a]:hover:text-secondary [&_a]:hover:underline [&_a]:w-fit my-8 lg:my-16 gap-4"
                >
                    <h2 className="text-4xl lg:text-5xl font-serif font-semibold">
                        Heading
                    </h2>
                    <div className="">
                        <p>
                            Description
                        </p>
                    </div>
                    <div className="flex flex-col items-start my-8">
                        <NavLink 
                            to="#" 
                            end 
                            className="flex flex-row justify-center items-center text-lg"
                        >
                            <ChevronRight className="size-6"/>
                            Link
                        </NavLink>
                        <NavLink 
                            to="#" 
                            end 
                            className="flex flex-row justify-center items-center text-lg"
                        >
                            <ChevronRight className="size-6"/>
                            Link
                        </NavLink>
                        <NavLink 
                            to="#" 
                            end 
                            className="flex flex-row justify-center items-center text-lg"
                        >
                            <ChevronRight className="size-6"/>
                            Link
                        </NavLink>
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-center p-20 rounded-xl bg-secondary text-secondary-foreground border-secondary-foreground border">
                        <div className="text-lg font-bold font-mono">
                            IMAGE
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem 
                value="2"
                className="border-primary-foreground"
            >
                <AccordionTrigger 
                    className="hover:no-underline cursor-pointer"
                >
                    Charting & Care
                </AccordionTrigger>
                <AccordionContent 
                    className="flex flex-col [&_a]:no-underline [&_a]:hover:text-secondary [&_a]:hover:underline [&_a]:w-fit my-8 lg:my-16 gap-4"
                >
                    <h2 className="text-4xl lg:text-5xl font-serif font-semibold">
                        Heading
                    </h2>
                    <div className="">
                        <p>
                            Description
                        </p>
                    </div>
                    <div className="flex flex-col items-start my-8">
                        <NavLink 
                            to="#" 
                            end 
                            className="flex flex-row justify-center items-center text-lg"
                        >
                            <ChevronRight className="size-6"/>
                            Link
                        </NavLink>
                        <NavLink 
                            to="#" 
                            end 
                            className="flex flex-row justify-center items-center text-lg"
                        >
                            <ChevronRight className="size-6"/>
                            Link
                        </NavLink>
                        <NavLink 
                            to="#" 
                            end 
                            className="flex flex-row justify-center items-center text-lg"
                        >
                            <ChevronRight className="size-6"/>
                            Link
                        </NavLink>
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-center p-20 rounded-xl bg-secondary text-secondary-foreground border-secondary-foreground border">
                        <div className="text-lg font-bold font-mono">
                            IMAGE
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem 
                value="3"
                className="border-primary-foreground"
            >
                <AccordionTrigger 
                    className="hover:no-underline cursor-pointer"
                >
                    Clinic
                </AccordionTrigger>
                <AccordionContent 
                    className="flex flex-col [&_a]:no-underline [&_a]:hover:text-secondary [&_a]:hover:underline [&_a]:w-fit my-8 lg:my-16 gap-4"
                >
                    <h2 className="text-4xl lg:text-5xl font-serif font-semibold">
                        Heading
                    </h2>
                    <div className="">
                        <p>
                            Description
                        </p>
                    </div>
                    <div className="flex flex-col items-start my-8">
                        <NavLink 
                            to="#" 
                            end 
                            className="flex flex-row justify-center items-center text-lg"
                        >
                            <ChevronRight className="size-6"/>
                            Link
                        </NavLink>
                        <NavLink 
                            to="#" 
                            end 
                            className="flex flex-row justify-center items-center text-lg"
                        >
                            <ChevronRight className="size-6"/>
                            Link
                        </NavLink>
                        <NavLink 
                            to="#" 
                            end 
                            className="flex flex-row justify-center items-center text-lg"
                        >
                            <ChevronRight className="size-6"/>
                            Link
                        </NavLink>
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-center p-20 rounded-xl bg-secondary text-secondary-foreground border-secondary-foreground border">
                        <div className="text-lg font-bold font-mono">
                            IMAGE
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem 
                value="4"
                className="border-primary-foreground"
            >
                <AccordionTrigger 
                    className="hover:no-underline cursor-pointer"
                >
                    Marketing
                </AccordionTrigger>
                <AccordionContent 
                    className="flex flex-col [&_a]:no-underline [&_a]:hover:text-secondary [&_a]:hover:underline [&_a]:w-fit my-8 lg:my-16 gap-4"
                >
                    <h2 className="text-4xl lg:text-5xl font-serif font-semibold">
                        Heading
                    </h2>
                    <div className="">
                        <p>
                            Description
                        </p>
                    </div>
                    <div className="flex flex-col items-start my-8">
                        <NavLink 
                            to="#" 
                            end 
                            className="flex flex-row justify-center items-center text-lg"
                        >
                            <ChevronRight className="size-6"/>
                            Link
                        </NavLink>
                        <NavLink 
                            to="#" 
                            end 
                            className="flex flex-row justify-center items-center text-lg"
                        >
                            <ChevronRight className="size-6"/>
                            Link
                        </NavLink>
                        <NavLink 
                            to="#" 
                            end 
                            className="flex flex-row justify-center items-center text-lg"
                        >
                            <ChevronRight className="size-6"/>
                            Link
                        </NavLink>
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-center p-20 rounded-xl bg-secondary text-secondary-foreground border-secondary-foreground border">
                        <div className="text-lg font-bold font-mono">
                            IMAGE
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem 
                value="5"
                className="border-primary-foreground"
            >
                <AccordionTrigger 
                    className="hover:no-underline cursor-pointer"
                >
                    Integration
                </AccordionTrigger>
                <AccordionContent 
                    className="flex flex-col [&_a]:no-underline [&_a]:hover:text-secondary [&_a]:hover:underline [&_a]:w-fit my-8 lg:my-16 gap-4"
                >
                    <h2 className="text-4xl lg:text-5xl font-serif font-semibold">
                        Heading
                    </h2>
                    <div className="">
                        <p>
                            Description
                        </p>
                    </div>
                    <div className="flex flex-col items-start my-8">
                        <NavLink 
                            to="#" 
                            end 
                            className="flex flex-row justify-center items-center text-lg"
                        >
                            <ChevronRight className="size-6"/>
                            Link
                        </NavLink>
                        <NavLink 
                            to="#" 
                            end 
                            className="flex flex-row justify-center items-center text-lg"
                        >
                            <ChevronRight className="size-6"/>
                            Link
                        </NavLink>
                        <NavLink 
                            to="#" 
                            end 
                            className="flex flex-row justify-center items-center text-lg"
                        >
                            <ChevronRight className="size-6"/>
                            Link
                        </NavLink>
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-center p-20 rounded-xl bg-secondary text-secondary-foreground border-secondary-foreground border">
                        <div className="text-lg font-bold font-mono">
                            IMAGE
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

function Home() {
    const horizontalList = [
        'Spend more time with the children',
        'Less paperwork. more childcare',
        'never miss another payment',
        'stay connected with families',
        'Built for childcare, by childcare experts',
        'Goodbye paperwork. Hello SQUEEKO',
        'Run your centre with confidence',
        'The smarter way to manage childcare',
    ]

    return (
        <div className="flex-1 flex flex-col justify-center items-center w-full lg:py-16 py-8">
            <section className="snap-section min-h-[calc(100vh-80px)] flex flex-col justify-start items-center gap-8 w-9/10 lg:w-3/4">
                <div className="w-full flex flex-col justify-center items-center gap-4">
                    <h1 className="text-xs font-bold">
                        CHILD CARE MANAGEMENT SOFTWARE  
                    </h1>
                    <h2 className="text-5xl font-serif text-center font-semibold">
                        Your children have you,<br/>
                        your center has SQUEEKO
                    </h2>
                    <p className="w-full text-center font-light">
                        SQUEEKO brings scheduling, billing, payments, parent communication, and more into one connected system, helping you reduce admin, support your team and focus on child care.
                    </p>
                </div>

                <div className="w-full flex flex-row justify-center items-center gap-6">
                    <Button 
                        variant="default"
                        className="cursor-pointer p-6"
                    >
                        Sign Up
                    </Button>
                    <Button 
                        variant="secondary"
                        className="cursor-pointer p-6"
                    >
                        Book a demo
                    </Button>
                </div>

                <div className="w-full flex flex-1 flex-row border rounded-lg bg-primary text-primary-foreground overflow-hidden">
                    <div className="bg-secondary text-secondary-foreground flex-1 w-full flex justify-center items-center">
                        IMAGE
                    </div>
                    <div className="flex-1 w-full flex flex-col">
                        <div className="border-b border-secondary flex-1 w-full flex justify-center items-center">
                            IMAGE
                        </div>
                        <div className="flex-1 w-full flex justify-center items-center">
                            IMAGE
                        </div> 
                    </div>
                </div>
            </section>

            <div className="w-full py-16">
                <HorizontalScroll items={horizontalList} className="text-primary" speed={80}/>
            </div>
            
            <section className="snap-section flex flex-col justify-start items-center w-full bg-primary/50 text-primary-foreground">
                <div className="p-8 lg:p-16 flex flex-col justify-center items-center gap-2">
                    <p className="text-center text-sm">
                        FEATURES
                    </p>
                    <h2 className="text-4xl font-serif text-center font-semibold">
                        The tools your centre needs, all in one place
                    </h2>
                </div>

                <div className="w-9/10 lg:w-3/4 mb-8 lg:mb-16">
                    <div className="text-center">
                        <NavLink
                            to="/features"
                            end
                            className="cursor-pointer hover:underline" 
                        >
                            see all features &rarr;
                        </NavLink>
                    </div>
                    <HomeFeatureAccordion />
                </div>

            </section>

            <section className="snap-section min-h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-8 w-9/10 lg:w-3/4 bg-primary/50 border border-primary">
                <p className="w-3/4 text-center text-2xl">
                    Overview of the features
                </p>
            </section>

            <section className="snap-section min-h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-8 w-9/10 lg:w-3/4 bg-primary/50 border border-primary">
                <p className="w-3/4 text-center text-2xl">
                    Why Squeeko (copy jane)
                </p>
            </section>

            <section className="snap-section min-h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-8 w-9/10 lg:w-3/4 bg-primary/50 border border-primary">
                <p className="w-3/4 text-center text-2xl">
                    CTA Get Started (Copy Jane)
                </p>
            </section>

            {/* 
            
            <StructData schema={localBusinessSchema} />
            <StructData schema={organizationSchema} />
            <StructData schema={websiteSchema} /> 
            
            */}

            <title>
                Child Care Management Software | SQUEEKO
            </title>

            <meta
                name="description"
                content="SQUEEKO is childcare management software built to help centers stay organized, stay compliant, connect with families, and get paid in one simple platform."
            />

            <meta 
                property="og:title"
                content="Child Care Management Software | SQUEEKO"
            />
            <meta
                property="og:description"
                content="SQUEEKO is childcare management software built to help centers stay organized, stay compliant, connect with families, and get paid in one simple platform."
            />
            <meta 
                property="og:type"
                content="website"
            />
            <meta
                property="og:url"
                content="https://www.squeeko.ca/"
            />
            <meta
                property="og:image"
                content="https://www.squeeko.ca/media/og-image.jpg"
            />
            <meta
                property="og:image:alt"
                content="SQUEEKO Child Care Management Software Logo"
            />
        </div>
    )
}

export default Home