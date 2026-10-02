import { useNavigate } from "react-router-dom";
import {
    Heart,
    Lightbulb,
    PencilSparkles,
    Sparkles,
    Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

function About() {
    const navigate = useNavigate();

    return (
        <div className="w-full overflow-hidden">
            <section className="min-h-[calc(100vh-80px)] w-full flex items-center">
                <div className="w-full lg:w-9/10 mx-auto px-6 lg:px-12 py-24 lg:py-36 flex flex-col">
                    <div className="w-full flex flex-col lg:flex-row gap-8">
                        <div className="flex-2 flex flex-col justify-center items-center text-center">
                            <div className="mb-6 flex-1 flex flex-col justify-center items-center">
                                <p className="text-xs font-bold">
                                    ABOUT SQUEEKO.
                                </p>
                                <h1 className="mt-6 max-w-3xl font-serif text-5xl font-semibold">
                                    Helping the people <br />
                                    who nurture the little ones.
                                </h1>
                            </div>
                            
                            <div className="max-w-2xl w-full flex flex-col justify-center items-center">
                                <p className="font-light">
                                    Running a childcare centre means wearing a dozen hats at once: teacher, manager, administrator and role model. We're here to lighten that load.
                                </p>
                            </div>
                        </div>

                        <div className="hidden lg:flex flex-col justify-center items-center flex-1 w-9/10">
                            <div className="bg-primary text-secondary-foreground p-10 items-end justify-center rounded-xl border border-secondary-foreground w-3/4">
                                <PencilSparkles className="size-10 mb-8" />
                                <p className="text-xl">
                                    Built specifically for Ontario childcare teams
                                    who deserve tools as caring as they are.
                                </p>        
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden mt-20 grid grid-cols-1 gap-6">
                        <div className="w-full flex flex-col justify-center items-center">
                            <img
                                src="/media/aboutImage1.jpg"
                                alt="Childcare goodbyes"
                                loading="lazy"
                                className="border border-secondary-foreground rounded lg:max-w-3/4 max-w-9/10"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="hidden lg:flex w-full">
                <div className="w-3/4 mx-auto flex flex-col">
                    <div className="grid grid-cols-1 gap-6">
                        <div className="w-full flex flex-col justify-center items-center">
                            <img
                                src="/media/aboutImage1.jpg"
                                alt="Childcare goodbyes"
                                loading="lazy"
                                className="border border-secondary-foreground rounded lg:max-w-3/4 max-w-9/10"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="min-h-[calc(100vh-80px)] w-full bg-[url('/about-mission.svg')] bg-cover bg-center">
                <div className="w-full lg:w-9/10 mx-auto px-6 lg:px-12 py-24 lg:py-36 flex flex-col">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                        <div className="flex-1">
                            <p className="text-xs font-bold">A LITTLE ABOUT US</p>

                            <h2 className="mt-6 max-w-3xl font-serif text-4xl">
                                Childcare is complicated enough.
                            </h2>
                        </div>
                        <div className="flex-2 flex flex-col gap-8">
                            <div className="flex flex-col gap-6 font-light">
                                <p>
                                    Between maintaining strict room ratios,
                                    keeping track of Ministry of Education
                                    requirements, managing wait lists, and
                                    updating parents, your day is already packed
                                    before you even open the doors.
                                </p>
                                <p>
                                    Your management software shouldn't feel like
                                    another job on your to-do list.
                                </p>
                                <p>
                                    That's why we created Squeeko; to give
                                    Ontario childcare directors and educators a
                                    single, intuitive place to handle
                                    compliance, daily logs, and centre logistics
                                    without the usual headache.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-9/10 mx-auto px-6 lg:px-12 pb-24 lg:pb-36 flex flex-col">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                        <div className="flex-1">
                            <p className="text-xs font-bold">OUR MISSION.</p>

                            <h2 className="mt-6 max-w-3xl font-serif text-4xl">
                                Give educators back their time.
                            </h2>
                        </div>
                        <div className="flex-2 flex flex-col gap-8">
                            <div className="flex flex-col gap-6 font-light">
                                <p>
                                    You don't need more complex software with
                                    fifty buttons you'll never press. You need
                                    simple, thoughtful tools that work quietly
                                    in the background.
                                </p>
                                <p>
                                    Squeeko brings attendance, Ministry
                                    compliance checks, fee structures, and
                                    family communication into one smooth system,
                                    so you can focus on building a safe, happy
                                    environment for kids to grow.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="min-h-[calc(100vh-80px)] w-full bg-primary flex">
                <div className="w-full lg:w-9/10 mx-auto px-6 lg:px-12 py-24 lg:py-36 flex justify-center">
                    <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-32">
                        <div className="flex-1 flex flex-col justify-center lg:justify-start ">
                            <div className="flex-1 lg:flex-0">
                                <p className="text-xs font-bold">OUR VISION.</p>

                                <h2 className="mt-6 max-w-3xl font-serif text-4xl">
                                    Smoother operations. <br />
                                    Supported educators. <br />
                                    Thriving centres.
                                </h2>
                            </div>
                        </div>
                        <div className="w-full flex-1 flex flex-col justify-center items-center">
                            <div className="w-full flex flex-col justify-center items-center">
                                <img
                                    src="/media/aboutImage2.jpg"
                                    alt="Childcare playtime"
                                    loading="lazy"
                                    className="border border-secondary-foreground rounded w-9/10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="min-h-[calc(100vh-80px)] w-full border-y">
                <div className="w-full lg:w-9/10 mx-auto px-6 lg:px-12 py-24 lg:py-36 flex justify-center flex-col">
                    <div className="mb-16 lg:mb-24">
                        <p className="text-xs font-bold">WHAT WE BELIEVE.</p>

                        <h2 className="mt-6 max-w-3xl font-serif text-4xl">
                            Software should feel like an extra set of hands.
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
                        <div className="border-t py-12">
                            <div className="flex items-start justify-between gap-8">
                                <div className="w-full">
                                    <Heart className="size-7 mb-8" />
                                    <h3 className="font-serif text-3xl">
                                        Rooted in local reality.
                                    </h3>
                                    <p className="mt-5 font-light">
                                        Ontario has a variety of unique polices and procedures. Generic software built for generic businesses just doesn't cut it when you're managing provincial standards, subsidy reporting, and daily attendance logs.
                                    </p>
                                    <p className="mt-5 font-light">
                                        We design specifically around your actual daily regulations.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t py-12">
                            <div className="flex items-start justify-between gap-8">
                                <div className="w-full">
                                    <Lightbulb className="size-7 mb-8" />
                                    <h3 className="font-serif text-3xl">
                                        Delightfully uncomplicated.
                                    </h3>
                                    <p className="mt-5 font-light">
                                        If a tool requires a 40-page manual or
                                        hours of staff training, it's missing
                                        the point.
                                    </p>
                                    <p className="mt-5 font-light">
                                        We test every workflow to ensure your
                                        team can log in, get what they need done
                                        in seconds, and get right back to the
                                        children.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t py-12">
                            <div className="flex items-start justify-between gap-8">
                                <div className="w-full">
                                    <Users className="size-7 mb-8" />
                                    <h3 className="font-serif text-3xl">
                                        Relationships over records.
                                    </h3>
                                    <p className="mt-5 font-light">
                                        At its core, early childhood education
                                        is about trust between families and
                                        educators.
                                    </p>
                                    <p className="mt-5 font-light">
                                        Squeeko handles the administrative
                                        clutter so you have more brain space for
                                        clear communication, warm updates, and
                                        meaningful connections.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t py-12">
                            <div className="flex items-start justify-between gap-8">
                                <div className="w-full">
                                    <Sparkles className="size-7 mb-8" />
                                    <h3 className="font-serif text-3xl">
                                        Always learning, always listening.
                                    </h3>
                                    <p className="mt-5 font-light">
                                        Regulations change, technology shifts,
                                        and your centre's needs evolve over
                                        time.
                                    </p>
                                    <p className="mt-5 font-light">
                                        We regularly collaborate with real
                                        Ontario directors to refine our
                                        platform, because the best features come
                                        straight from the classroom floor.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="min-h-[calc(100vh-80px)] w-full bg-primary">
                <div className="w-full lg:w-9/10 mx-auto px-6 lg:px-12 py-24 lg:py-36 flex justify-center">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                        <div className="flex-1">
                            <p className="text-xs font-bold">WHY SQUEEKO?</p>
                        </div>
                        <div className="flex-2 flex flex-col gap-8">
                            <h2 className="font-serif text-4xl">
                                Software designed for how centres actually run.
                            </h2>

                            <div className="flex flex-col gap-6 font-light">
                                <p>
                                    Most administrative tools are built to
                                    handle general business tasks: invoicing
                                    here, spreadsheets there, messaging
                                    somewhere else.
                                </p>
                                <p>
                                    Childcare is different. It's fluid, human,
                                    and heavily regulated.
                                </p>
                                <p>
                                    We built Squeeko from the ground up
                                    specifically for childcare
                                    environments, connecting daily attendance,
                                    Ministry compliance, reporting, and parent
                                    communication into one effortless workflow.
                                </p>
                                <p>
                                    One intuitive place. <br />
                                    Built with care in Ontario.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:min-h-[calc(100vh-80px)] w-full bg-primary flex">
                <div className="w-full lg:w-9/10 mx-auto px-6 lg:px-12 self-center">
                    <div className="relative aspect-video overflow-hidden flex justify-center items-center flex-col flex-1 bg-[url('/media/aboutImage3.jpg')] bg-cover bg-center p-10 rounded-xl w-full border border-secondary-foreground ">
                        <div className="absolute inset-0 hidden lg:flex items-end p-8 lg:p-16 bg-gradient-to-t from-primary/75 to-transparent">
                            <p className="max-w-2xl text-primary-foreground font-serif text-3xl lg:text-4xl">
                                Because your 2:00 PM shouldn't be spent
                                wrestling with compliance paperwork.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="min-h-[calc(100vh-80px)] w-full bg-[url('/about-cta.svg')] bg-cover bg-center flex flex-col justify-center">
                <div className="w-full lg:w-9/10 mx-auto px-6 lg:px-12 py-24 lg:py-36 flex flex-col">
                    <div className="flex-2 flex flex-col gap-8">
                        <h2 className="font-serif text-4xl">
                            Let's simplify <br />
                            childcare.
                        </h2>

                        <div className="flex flex-col gap-6 font-light">
                            <p>
                                Squeeko is being built with real childcare
                                centres, real educators, and real feedback.
                            </p>
                            <p>
                                We're not trying to build the biggest
                                software company in the world.
                            </p>
                            <p>
                                We're trying to build something really
                                useful.
                            </p>
                            <div className="flex flex-row justify-center items-center gap-6 w-1/2 lg:w-1/4">
                                <Button
                                    variant="default"
                                    className="w-full cursor-pointer p-6 border border-primary-foreground"
                                    onClick={() =>
                                        navigate("/features")
                                    }
                                >
                                    Explore Squeeko
                                </Button>
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
                content="https://www.squeeko.ca/og-image.png"
            />
            <meta
                property="og:image:alt"
                content="SQUEEKO Child Care Management Software Logo"
            />
        </div>
    );
}

export default About