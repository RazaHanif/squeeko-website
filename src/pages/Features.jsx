import Logo from "@/components/Logo";
import SignUpSheet from "@/components/SignUpSheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from "lucide-react";


function FeatureTabs() {
    const data = [
        {
            id: "schedule",
            trigger: "Scheduling",
            title: "Keep your day moving.",
            desc: "From the moment children arrive to the moment they head home, Squeeko helps your team keep track of who's here, where they need to be, and what needs to happen next.",
            points: [
                {
                    title: "Attendance", 
                    point: "Know who's here and keep accurate attendance records."
                },
                {
                    title: "Ratios", 
                    point: "Keep an eye on classroom ratios as your day changes."
                },
                {
                    title: "Daily Routines", 
                    point: "Give your team an easier way to keep daily tasks on track."
                },
            ],
        },
        {
            id: "billing",
            trigger: "Billing",
            title: "Get paid without the paperwork.",
            desc: "Tuition shouldn't mean spreadsheets, reminders, and manual calculations every month. Squeeko helps automate your billing so your team can spend less time chasing payments.",
            points: [
                {
                    title: "Auto Billing", 
                    point: "Set up recurring tuition and let payments run automatically."
                },
                {
                    title: "Late Fees", 
                    point: "Apply late fees automatically without keeping track manually."
                },
                {
                    title: "Rate Changes", 
                    point: "Update tuition rates without rebuilding your billing process."
                },
                {
                    title: "One-Off Charges", 
                    point: "Bill for field trips, activities, supplies and everything in between."
                },
            ],
        },
        {
            id: "compliance",
            trigger: "Compliance",
            title: "Know what's done. Know what's missing.",
            desc: "Keep the forms, signatures, and records your centre relies on organized and accessible, so compliance doesn't live in a filling cabinet.",
            points: [
                {
                    title: "Digital Forms", 
                    point: "Move away from paper forms and keep everything in one place."
                },
                {
                    title: "Signatures", 
                    point: "Collect and keep track of required signatures digitally."
                },
                {
                    title: "Record Keeping", 
                    point: "Keep important records organized and easy to access."
                },
                {
                    title: "Status Tracking", 
                    point: "See what's complete and what still needs attention."
                },
            ],
        },
        {
            id: "communication",
            trigger: "Communication",
            title: "Keep families in the loop.",
            desc: "Give parents a simple way to stay connected with their centre, while giving your team one place to manage everyday communication.",
            points: [
                {
                    title: "Parent Messaging", 
                    point: "Keep conversations between staff and families in one place."
                },
                {
                    title: "Centre Updates", 
                    point: "Share important information with the families who need it."
                },
                {
                    title: "Daily Updates", 
                    point: "Keep parents connected to what happened during the day."
                },
                {
                    title: "One Place", 
                    point: "Stop jumping between email, texts, and different apps."
                },
            ],
        },
        {
            id: "logs",
            trigger: "Daily Logs & Photos",
            title: "Capture the little moments.",
            desc: "The little things matter. Make it easy for staff to document the day and share meaningful moments with families.",
            points: [
                {
                    title: "Daily Logs", 
                    point: "Record notes and important details from the day."
                },
                {
                    title: "Photos", 
                    point: "Capture and share moments with the right families."
                },
                {
                    title: "Child Updates", 
                    point: "Keep each child's daily information organized."
                },
                {
                    title: "Family Connection", 
                    point: "Give parents a window into their child's day."
                },
            ],
        },
        {
            id: "centre",
            trigger: "Centre Management",
            title: "Run your centre in one place.",
            desc: "Squeeko connects the people, information, and everyday work behind your centre so your team can spend less time managing systems and more time caring for children.",
            points: [
                {
                    title: "Child & Family Profiles", 
                    point: "Keep important information together and easy to find."
                },
                {
                    title: "Staff Management", 
                    point: "Give your team the tools and information they need."
                },
                {
                    title: "Centre Overview", 
                    point: "Get a clearer picture of what's happening across your centre."
                },
            ],
        },
    ]

    return (
        <Tabs 
            defaultValue="schedule"
            className="w-full flex-1 p-4"
        >
            <TabsList
                className="w-full grid grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1 min-h-[8em] sm:min-h-[4em] lg:min-h-auto bg-card !rounded-2xl p-2"
                variant="line"
            >
                {data.map(({id, trigger}) => (
                    <TabsTrigger 
                        value={id} 
                        key={id} 
                        className="cursor-pointer"
                    >
                        {trigger}
                    </TabsTrigger>
                ))}
            </TabsList>
            {data.map(({id, title, desc, points}) => (
                <TabsContent 
                    value={id} 
                    key={id}
                    className="self-center flex flex-col justify-center items-center gap-16 w-9/10 px-4 pt-8 h-full min-h-full"
                >
                    <div className="flex-2 w-full flex flex-row gap-8">
                        <div className="flex flex-1 flex-col justify-center gap-16 w-full">
                            <h2 className="font-serif text-4xl font-bold">
                                {title}
                            </h2>
                            <p className="">
                                {desc}
                            </p>
                        </div>

                        <div className="w-9/10 flex-1 flex justify-center">
                            <div className="w-full lg:w-3/4 border min-h-[200px]  flex flex-col justify-center items-center bg-secondary border-secondary-foreground rounded text-2xl">
                                <Logo icon={false} className="text-secondary-foreground" />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-row justify-start gap-4 w-full bg-primary min-h-[8em]">
                        {points.map(({title, point}) => (
                            <div 
                                className="flex flex-col flex-1 gap-2"
                                key={title}
                            >
                                <h2 className="font-bold">
                                    {title}
                                </h2>
                                <p className="">
                                    {point}
                                </p>
                            </div>
                        ))}
                    </div>
                </TabsContent>
            ))}
        </Tabs>
    )
}

function Features() {
    return (
        <div className="flex-1 flex flex-col justify-center items-center w-full">
            <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-8 w-full mt-16 lg:mt-0">
                <div className="flex lg:flex-row flex-col justify-center items-center lg:items-stretch w-full gap-8 lg:gap-0">
                    <div className="flex flex-col flex-1 w-full justify-center items-center gap-6">
                        <div className="w-9/10 lg:w-3/4 flex flex-col justify-center items-center gap-6">
                            <h1 className="text-xs font-bold">
                                BUILT FOR CHILDCARE
                            </h1>
                            <h2 className="text-5xl font-serif text-center font-semibold">
                                Everything your centre needs. <br/>
                                Nothing you don't.
                            </h2>
                            <p className="w-9/10 lg:w-3/4 text-center font-light">
                                Squeeko brings the everyday work of running a childcare centre into one connected platform, from attendance and billing to compliance and family communication.
                            </p>
                        </div>

                        <div className="flex flex-row justify-center items-center gap-6 w-3/4 lg:w-1/2" >
                            <div className="w-3/4">
                                <SignUpSheet />
                            </div>
                        </div>
                    </div>


                    <div className="w-9/10 flex-1 flex justify-center items-center rounded-xl">
                        <div className="w-full lg:w-3/4 border min-h-[200px] lg:min-h-full flex flex-col justify-center items-center bg-secondary border-secondary-foreground rounded text-2xl">
                            <Logo icon={false} className="text-secondary-foreground" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="min-h-[calc(100vh-80px)] flex flex-col w-full">
                <FeatureTabs />
            </section>
            


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
