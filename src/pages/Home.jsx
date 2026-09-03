import FadeUp from "@/components/gsap/FadeUp"
import ScrollSnap from "@/components/gsap/ScrollSnap"
import HorizontalScroll from "@/components/HorizontalScroll"
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"

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
        <div className="flex flex-col flex-1 w-9/10 lg:w-3/4 lg:py-16 py-8">
            <section className="snap-section min-h-[calc(100vh-80px)] w-full flex flex-col justify-start items-center gap-8">
                <div className="w-full flex flex-col justify-center items-center gap-4">
                    <p className="text-xs font-bold">
                        CHILD CARE MANAGEMENT SOFTWARE  
                    </p>
                    <h1 className="text-5xl font-serif text-center font-semibold">
                        Your children have you,<br/>
                        your center has SQUEEKO
                    </h1>
                    <p className="w-full text-center font-light">
                        SQUEEKO brings scheduling, billing, payments, parent communication, and more into one connected system, helping you reduce admin, support your team and focus on child care.
                    </p>
                </div>

                <div className="w-full flex flex-row justify-center items-center border gap-6">
                    <Button 
                        variant="default"
                        className="cursor-pointer p-6"
                    >
                        Sign Up
                    </Button>
                    <Button 
                        variant="outline"
                        className="cursor-pointer p-6 outline-primary"
                    >
                        Book a demo
                    </Button>
                </div>

                <div className="w-full flex flex-1 flex-col justify-center items-center border">
                    <div className="w-full flex-1 flex justify-center items-center bg-primary text-primary-foreground">
                        Some sort of pictures here of the app? Demos and shit
                    </div>
                </div>
            </section>

            <div>
                <HorizontalScroll items={horizontalList} className="text-primary" speed={80}/>
            </div>
            
            <section className="snap-section min-h-[calc(100vh-80px)] flex flex-col justify-center items-center w-full border border-primary text-muted-foreground">
                <p className="w-3/4 text-center text-2xl">
                    This will be the landing page, should over view the offerings, and have atleast 2 'onboarding' forms
                </p>
                <p className="w-3/4 text-center text-2xl">
                    This should have a form
                </p>
            </section>

            <section className="snap-section min-h-[calc(100vh-80px)] flex flex-col justify-center items-center w-full border border-primary text-muted-foreground">
                <p className="w-3/4 text-center text-2xl">
                    Overview of the features
                </p>
            </section>

            <section className="snap-section min-h-[calc(100vh-80px)] flex flex-col justify-center items-center w-full border border-primary text-muted-foreground">
                <p className="w-3/4 text-center text-2xl">
                    Why Squeeko (copy jane)
                </p>
            </section>

            <section className="snap-section min-h-[calc(100vh-80px)] flex flex-col justify-center items-center w-full border border-primary text-muted-foreground">
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