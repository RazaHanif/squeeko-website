import Logo from "@/components/Logo";
import SignUpSheet from "@/components/SignUpSheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
                                hero para
                            </p>
                        </div>

                        <div className="flex flex-row justify-center items-center gap-6 w-3/4 lg:w-1/2" >
                            <div className="flex-1">
                                <SignUpSheet />
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
            </section>
            <div className="w-full flex justify-center items-center pb-8">
                <h1 className="text-4xl lg:text-5xl font-serif">Features</h1>
            </div>

            <div className="flex flex-col justify-center items-center w-full text-muted-foreground">
                <p>
                    Overview of all the features offered by the program, focus on SEO
                </p>
            </div>


            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="account">
                        Account
                    </TabsTrigger>
                    <TabsTrigger value="password">
                        Password
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    Make changes to your account here.
                </TabsContent>
                <TabsContent value="password">
                    Change your password here.
                </TabsContent>
            </Tabs>

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
