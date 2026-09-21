function Features() {
    return (
        <div className="flex flex-col flex-1 w-9/10 lg:w-3/4 lg:py-16 py-8">
                        <section className="min-h-[calc(100vh-80px)] flex flex-col justify-around items-center gap-8 w-full bg-[url('/home-hero.svg')] bg-cover bg-center mt-16 lg:mt-0">
                            <div className="flex lg:flex-row flex-col justify-center items-center lg:items-stretch w-full gap-8 lg:gap-0">
                                <div className="flex flex-col flex-1 w-full justify-center items-center gap-6">
                                    <div className="w-9/10 lg:w-3/4 flex flex-col justify-center items-center gap-6">
                                        <h1 className="text-xs font-bold">
                                            hero eyebrow
                                        </h1>
                                        <h2 className="text-5xl font-serif text-center font-semibold">
                                            hero title
                                        </h2>
                                        <p className="w-9/10 lg:w-3/4 text-center font-light">
hero 
                                        </p>
                                    </div>
            
                                    <div className="flex flex-row justify-center items-center gap-6 w-3/4 lg:w-1/2" >
                                        <div className="flex-1">
                                            <Button 
                                                onClick={() => navigate("/features")}
                                                variant="default"
                                                className="w-full cursor-pointer p-6 border border-primary-foreground"
                                            >
                                                Learn More
                                            </Button>
                                        </div>
                                        <div className="flex-1">
                                            <HomeSheet />
                                        </div>
                                    </div>
                                </div>
            
            
                                <div className="w-9/10 flex-1 flex justify-center items-center rounded-xl">
                                    <div className="w-full lg:w-3/4 border min-h-[200px] lg:min-h-full flex flex-col justify-center items-center bg-secondary border-secondary-foreground rounded text-2xl">
                                        <Logo icon={false} className="text-secondary-foreground" />
                                        {/* <img
                                            src="/media/1.jpg"
                                            alt="something"
                                            loading="lazy"
                                            className="w-xl rounded-lg border-2 border-secondary" 
                                        /> */}
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
            <div className="w-full flex justify-center items-center pb-8">
                <h1 className="text-4xl lg:text-5xl font-serif">Features</h1>
            </div>

            <div className="flex flex-col justify-center items-center w-full text-muted-foreground">
                <p>
                    Overview of all the features offered by the program, focus on SEO
                </p>
            </div>

            {/* 
            
            <StructData schema={localBusinessSchema} />
            <StructData schema={organizationSchema} />
            <StructData schema={websiteSchema} /> 
            
            */}

            <title>Child Care Management Software | SQUEEKO</title>

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
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.squeeko.ca/" />
            <meta
                property="og:image"
                content="https://www.squeeko.ca/media/og-image.jpg"
            />
            <meta
                property="og:image:alt"
                content="SQUEEKO Child Care Management Software Logo"
            />
        </div>
    );
}

export default Features;
