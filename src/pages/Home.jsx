import HorizontalScroll from "@/components/HorizontalScroll"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { NavLink, useNavigate } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/icons"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import OnboardingForm from "@/components/OnboardingForm"
import Image from "@/components/Image"
import Logo from "@/components/Logo"


/* 
Main feature overview - 

Scheduling - attendance, ratio, 

Billing - auto payments, penalties, accounting, add on charges

Communication - Messaging, Pictures, Insta feed, Forms (inicdent etc)

Compliance - 


*/


function HomeFeatureAccordion() {
    const data = [
        {
            trigger: "Scheduling",
            header: "Stay on track",
            desc: "This will be a small description of what the scheduling feature does within the app, including attendance, ratio, and other helpful stuff.",
            links: [
                {title: "Attendance", link: "#"},
                {title: "Ratio", link: "#"},
                {title: "Late Fees", link: "#"},
            ],
            image: <Logo words={false} />
        },
        {
            trigger: "Billing",
            header: "Get paid",
            desc: "This will overview how you can collect payments within the app, including automating late fees, field trips, rate increases etc.",
            links: [
                {title: "Auto Billing", link: "#"},
                {title: "Late Fees", link: "#"},
                {title: "Pizza Party", link: "#"},
            ],
            image: <Logo words={false} />
        },
        {
            trigger: "Communication",
            header: "Stay in touch",
            desc: "This will highlight the in app insta style feed, the in app messaging, and the ability to send forms to the parents directly",
            links: [
                {title: "Insta Style Feed", link: "#"},
                {title: "Messaging", link: "#"},
                {title: "Forms", link: "#"},
            ],
            image: <Logo words={false} />
        },
        {
            trigger: "Compliance",
            header: "Get in Compliance",
            desc: "This will overview the compliance aspect of the app, and how much overhead it saves in mental space and admin time.",
            links: [
                {title: "Forms", link: "#"},
                {title: "OnBoarding", link: "#"},
                {title: "Customizability", link: "#"},
            ],
            image: <Logo words={false} />
        },
        {
            trigger: "Extra?",
            header: "Secret Feature?",
            desc: "idk if anything is gonna go here yet, this section is gonna be if i remember any other feature to highlight later or ill just delete this section",
            links: [
                {title: "Link 1", link: "#"},
                {title: "Link 2", link: "#"},
                {title: "Link 3", link: "#"},
            ],
            image: <Logo words={false} />
        },
    ]


    return (
        <Accordion
            defaultValue={[data[0].trigger]}
            className="w-full rounded-lg bg-secondary text-secondary-foreground p-6 border border-secondary-foreground"
        >
            {data.map(({trigger, header, desc, links, image}) => (
                <AccordionItem 
                    key={trigger}
                    value={trigger}
                    className="border-secondary-foreground"
                >
                    <AccordionTrigger 
                        className="cursor-pointer hover:no-underline"
                    >
                        {trigger}
                    </AccordionTrigger>
                    <AccordionContent 
                        className="flex flex-col [&_a]:no-underline [&_a]:hover:text-primary [&_a]:hover:underline [&_a]:w-fit my-6 lg:my-12 lg:gap-6 gap-4"
                    >
                        <h2 className="text-4xl lg:text-5xl font-serif font-semibold">
                            {header}
                        </h2>
                        <div className="">
                            <p>
                                {desc}
                            </p>
                        </div>
                        <div className="flex flex-col items-start">
                            {links.map(({ title, link }) => (
                                    // <NavLink 
                                    //     key={link}
                                    //     to={link}
                                    //     end
                                    //     className="flex flex-row justify-center items-center text-lg"
                                    // >
                                    //     <ChevronRight className="size-6"/>
                                    //     {title}
                                    // </NavLink>
                                    <p 
                                        key={title}
                                        className="flex flex-row justify-center items-center text-lg"
                                    >
                                        <ChevronRight className="size-6"/>
                                        {title}
                                    </p>
                            ))}
                        </div>

                        {/* <div className="flex-1 flex flex-col justify-center items-center p-20 rounded-xl bg-primary text-primary-foreground border-primary-foreground border">
                            <div className="text-lg font-bold font-mono">
                                {image}
                            </div>
                        </div> */}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

function HomeCards() {
    const data = [
        {
            image: <Logo words={false} />,
            header: "Stay on track",
            desc: "This will be a small description of what the scheduling feature does within the app, including attendance, ratio, and other helpful stuff.",
        },
        {
            image: <Logo words={false} />,
            header: "Get paid",
            desc: "This will overview how you can collect payments within the app, including automating late fees, field trips, rate increases etc.",
        },
        {
            image: <Logo words={false} />,
            header: "Stay in touch",
            desc: "This will highlight the in app insta style feed, the in app messaging, and the ability to send forms to the parents directly",
        },
        {
            image: <Logo words={false} />,
            header: "Stay in touch",
            desc: "This will highlight the in app insta style feed, the in app messaging, and the ability to send forms to the parents directly",
        },
    ]

    return (
        <div className="flex-1 shrink-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center p-8 lg:p-16">
            {data.map(({ image, header, desc }, idx) => (
                <Card
                    key={idx}
                    className="flex bg-primary border border-secondary-foreground text-secondary-foreground"
                >
                    <CardContent className="flex flex-col justify-center items-center gap-4">
                        <div className="w-20 h-20 border-secondary-foreground bg-secondary border flex justify-center items-center rounded-full">
                            {image}
                        </div>
                        <h2 className="text-2xl font-serif font-bold">
                            {header}
                        </h2>
                        <p className="text-sm font-light">
                            {desc}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

function Home() {
    const navigate = useNavigate()

    const horizontalList = [
        'Spend more time with the children',
        'Less paperwork. more childcare',
        'never miss another payment',
        'stay connected with families',
        'Built for childcare, by childcare experts',
        'Goodbye paperwork. Hello Squeeko',
        'Run your centre with confidence',
        'The smarter way to manage childcare',
    ]

    const iconList = [
        {icon: InstagramIcon},
        {icon: FacebookIcon},
        {icon: YoutubeIcon},
    ]

    return (
        <div className="flex-1 flex flex-col justify-center items-center w-full">
            <section className="min-h-[calc(100vh-80px)] flex flex-col justify-around items-center gap-8 w-full bg-[url('/home-hero.svg')] bg-cover bg-center mt-16 lg:mt-0">
                <div className="flex lg:flex-row flex-col justify-center items-center lg:items-stretch w-full gap-8 lg:gap-0">
                    <div className="flex flex-col flex-1 w-full justify-center items-center gap-6">
                        <div className="w-9/10 lg:w-3/4 flex flex-col justify-center items-center gap-6">
                            <h1 className="text-xs font-bold">
                                CHILD CARE MANAGEMENT SOFTWARE  
                            </h1>
                            <h2 className="text-5xl font-serif text-center font-semibold">
                                Your children have you,<br/>
                                your center has Squeeko
                            </h2>
                            <p className="w-9/10 lg:w-3/4 text-center font-light">
                                Squeeko brings scheduling, billing, payments, parent communication, and more into one connected system, helping you reduce admin, support your team and focus on child care.
                            </p>
                        </div>

                        <div className="flex flex-row justify-center items-center gap-6 w-3/4 lg:w-1/4">
                            <Button 
                                onClick={() => navigate("/features")}
                                variant="default"
                                className="flex-1 cursor-pointer p-6 border border-primary-foreground"
                                >
                                Learn More
                            </Button>
                            <Button 
                                variant="secondary"
                                className="flex-1 cursor-pointer p-6 border border-secondary-foreground"
                            >
                                Sign Up
                            </Button>
                        </div>
                    </div>


                    <div className="w-9/10 flex-1 flex justify-center items-center rounded-xl">
                        {/* <img
                            src="/media/1.jpg"
                            alt="something"
                            loading="lazy"
                            className="w-xl rounded-lg border-2 border-secondary" 
                        /> */}
                        <div className="w-full lg:w-3/4 border min-h-[200px] lg:min-h-full flex flex-col justify-center items-center bg-secondary border-secondary-foreground rounded text-2xl">
                            <Logo icon={false} className="text-secondary-foreground" />
                        </div>
                    </div>
                </div>

                <div className="w-full mb-4">
                    <HorizontalScroll items={horizontalList} className="text-primary-foreground" speed={80}/>
                    {/* <HorizontalScroll 
                        items={iconList.map(({icon: Icon}, idx) => (
                            <Icon key={idx} className="size-8 text-primary-foreground"/>
                        ))} 
                        speed={80}
                    /> */}
                </div>
            </section>

            
            <section className="flex flex-col justify-start items-center w-full bg-primary text-primary-foreground pb-40 lg:pt-0 pt-40">
                <div className="p-8 lg:p-16 flex flex-col justify-center items-center gap-2">
                    <p className="text-center text-sm">
                        FEATURES
                    </p>
                    <h2 className="text-4xl font-serif text-center font-semibold">
                        The tools your centre needs, all in one place
                    </h2>
                </div>

                <div className="w-9/10 flex flex-col gap-2">
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

            <section className="flex flex-col justify-center items-center gap-8 w-full -mt-0.5 bg-[url('/home-why.svg')] bg-cover bg-center pb-16" id="home-form">
                <h2 className="text-4xl lg:text-5xl font-serif text-center font-semibold">
                    Wanna see Squeeko in your centre?
                </h2>

                <div className="w-full flex flex-col justify-center items-center">
                    <p className="font-bold">
                        Tell us about yourself?
                    </p>
                    <OnboardingForm />
                </div>
            </section>

            <section className="flex flex-col justify-center items-center gap-8 w-full py-40">
                <div className="w-9/10 text-center text-2xl border-2 border-secondary-foreground bg-secondary rounded-2xl flex-1 flex">
                    <HomeCards />
                </div>
            </section>

            <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-8 w-full py-8 lg:py-16 bg-gradient-to-b from-background to-primary">
                <div className="flex flex-1 flex-col lg:flex-row gap-4 w-9/10 p-2">
                    <div className="flex lg:flex-1 flex-col justify-start lg:justify-center gap-4">
                        <p className="text-xs lg:text-sm font-bold">
                            GET STARTED
                        </p>
                        <h2 className="text-4xl lg:text-5xl font-serif text-start font-semibold">
                            See Squeeko run your center
                        </h2>
                        <p className="w-9/10 lg:w-3/4 text-start font-light">
                             With Squeeko's powerful technology and expert human support, you can keep your busy days running smoothly.
                        </p>
                        <div className="flex flex-row justify-start items-center gap-6 w-3/4 lg:w-1/4">
                            <Button 
                                onClick={() => navigate("/features")}
                                variant="default"
                                className="flex-1 cursor-pointer p-6 border border-primary-foreground"
                            >
                                Learn More
                            </Button>
                            <Button 
                                variant="secondary"
                                className="flex-1 cursor-pointer p-6 border border-secondary-foreground"
                            >
                                Sign Up
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-1 w-full">
                        <div className="border-2 border-secondary w-full flex justify-center items-center rounded-xl overflow-hidden max-h-[75vh]">
                            {/* <img
                                src="/media/5.jpg"
                                alt="something"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            /> */}
                            <div className="w-full flex-1 min-h-[200px] flex justify-center items-center text-2xl">
                                <Logo icon={false} className="text-secondary-foreground" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 
            
            <StructData schema={localBusinessSchema} />
            <StructData schema={organizationSchema} />
            <StructData schema={websiteSchema} /> 
            
            */}

            <title>
                Child Care Management Software | Squeeko
            </title>

            <meta
                name="description"
                content="Squeeko is childcare management software built to help centers stay organized, stay compliant, connect with families, and get paid in one simple platform."
            />

            <meta 
                property="og:title"
                content="Child Care Management Software | Squeeko"
            />
            <meta
                property="og:description"
                content="Squeeko is childcare management software built to help centers stay organized, stay compliant, connect with families, and get paid in one simple platform."
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
                content="Squeeko Child Care Management Software Logo"
            />
        </div>
    )
}

export default Home