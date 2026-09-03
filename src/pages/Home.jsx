import FadeUp from "@/components/gsap/FadeUp"
import ScrollSnap from "@/components/gsap/ScrollSnap"
import HorizontalScroll from "@/components/HorizontalScroll"
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/icons"

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
            <section className="snap-section min-h-[calc(100vh-80px)] flex flex-col justify-center items-center w-full bg-card text-muted-foreground">
            <div className="w-full flex justify-center items-center pb-8">
                <h1 className="text-4xl lg:text-5xl font-serif text-center">
                    Home
                </h1>
            </div>
                <p className="w-3/4 text-center text-2xl">
                    This should have a CTA btn that opens the form, or something
                </p>
            </section>
            <div>
                <HorizontalScroll items={horizontalList} className="text-primary" speed={80}/>
            </div>
            <section className="snap-section min-h-[calc(100vh-80px)] flex flex-col justify-center items-center w-full bg-card text-muted-foreground">
                <p className="w-3/4 text-center text-2xl">
                    This will be the landing page, should over view the offerings, and have atleast 2 'onboarding' forms
                </p>
                <p className="w-3/4 text-center text-2xl">
                    This should have a form
                </p>
            </section>

            <section className="snap-section min-h-[calc(100vh-80px)] flex flex-col justify-center items-center w-full bg-card text-muted-foreground">
                <p className="w-3/4 text-center text-2xl">
                    Overview of the features
                </p>
            </section>

            <section className="snap-section min-h-[calc(100vh-80px)] flex flex-col justify-center items-center w-full bg-card text-muted-foreground">
                <p className="w-3/4 text-center text-2xl">
                    Why Squeeko (copy jane)
                </p>
            </section>

            <section className="snap-section min-h-[calc(100vh-80px)] flex flex-col justify-center items-center w-full bg-card text-muted-foreground">
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