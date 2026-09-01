import HorizontalScroll from "@/components/HorizontalScroll"
import { FacebookIcon, InstagramIcon, LinkedInIcon, TiktokIcon, YoutubeIcon } from "@/components/icons"

function Home() {
    const horizontalList = [
        'Voted Best of the Best 2 Years in a row',
        'Super Duper Hard Working',
        'Coffee Addict',
        'Shopaholic',
        'Voted Most Likely To Fall Asleep On The Beach',
        'Business Owner',
        'Boss',
    ]

    const socialList = [
        InstagramIcon,
        FacebookIcon,
        LinkedInIcon,
        TiktokIcon,
        YoutubeIcon,
    ]

    return (
        <div className="flex flex-col flex-1 w-9/10 lg:w-3/4 lg:py-16 py-8">
            <div className="w-full flex justify-center items-center pb-8">
                <h1 className="text-4xl lg:text-5xl font-serif">
                    Home
                </h1>
            </div>

            <div className=" my-16">
                <HorizontalScroll items={horizontalList} duration={20} />
            </div>

            <div className=" my-16">
                <HorizontalScroll 
                    items={socialList.map((Icon, idx) => (
                        <Icon key={idx} className="size-8" />
                    ))} 
                    duration={5} 
                />
            </div>




            <div className="flex flex-col justify-center items-center w-full text-muted-foreground">
                <p>
                    This will be the landing page, should over view the offerings, and have atleast 2 'onboarding' forms
                </p>
                {(() => {
                    const list = []
                    for (let i = 0; i < 10; i++) {
                        list.push(
                            <p className="text-transparent" key={i}>
                                {i}
                            </p>
                        )
                    }

                    return list
                }) ()}
            </div>

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