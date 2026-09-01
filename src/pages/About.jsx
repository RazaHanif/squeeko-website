import ScrollSnap from "@/components/gsap/ScrollSnap"

function About() {
    return (
        <ScrollSnap className="flex flex-col justify-center items-center flex-1 gap-4 font-serif w-9/10 lg:w-3/4">
            <section className="snap-section min-h-[calc(100vh-80px)] border-2 flex flex-col justify-center items-center w-full bg-muted text-muted-foreground">
                <h1 className="text-4xl lg:text-5xl font-serif text-center">
                    About
                </h1>
            </section>

            <section className="snap-section min-h-[calc(100vh-80px)] border-2 flex flex-col justify-center items-center w-full bg-muted text-muted-foreground">
                <p className="w-3/4 text-center text-2xl">
                    This should have some contact info, copy Jane.app mission, vision, and values format for a base. 
                </p>
            </section>

            <section className="snap-section min-h-[calc(100vh-80px)] border-2 flex flex-col justify-center items-center w-full bg-muted text-muted-foreground">
                <p className="w-3/4 text-center text-2xl">
                    Features
                </p>
            </section>

            <section className="snap-section min-h-[calc(100vh-80px)] border-2 flex flex-col justify-center items-center w-full bg-muted text-muted-foreground">
                <p className="w-3/4 text-center">
                    CTA
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
        </ScrollSnap>
    )
}

export default About