



// function About() {
//     return (
//         <div className="flex flex-col justify-center items-center flex-1 gap-4 font-serif w-9/10 lg:w-3/4 lg:pb-16 pb-8">
//             <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center w-full bg-gradient-to-r from-background to-primary text-muted-foreground">
//                 <h1 className="text-4xl lg:text-5xl font-serif text-center">
//                     About
//                 </h1>
//             </section>

//             <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center w-full bg-gradient-to-l from-background to-primary text-muted-foreground">
//                 <p className="w-3/4 text-center text-2xl">
//                     This should have some contact info, mission, vision, and values format for a base. 
//                 </p>
//             </section>

//             <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center w-full bg-gradient-to-r from-background to-primary text-muted-foreground">
//                 <p className="w-3/4 text-center text-2xl">
//                     Features
//                 </p>
//             </section>

//             <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center w-full bg-gradient-to-l from-background to-primary text-muted-foreground">
//                 <p className="w-3/4 text-center text-2xl">
//                     CTA
//                 </p>
//             </section>

//             {/* 
            
//             <StructData schema={localBusinessSchema} />
//             <StructData schema={organizationSchema} />
//             <StructData schema={websiteSchema} /> 
            
//             */}

//             <title>
//                 Child Care Management Software | SQUEEKO
//             </title>

//             <meta
//                 name="description"
//                 content="SQUEEKO is childcare management software built to help centers stay organized, stay compliant, connect with families, and get paid in one simple platform."
//             />

//             <meta 
//                 property="og:title"
//                 content="Child Care Management Software | SQUEEKO"
//             />
//             <meta
//                 property="og:description"
//                 content="SQUEEKO is childcare management software built to help centers stay organized, stay compliant, connect with families, and get paid in one simple platform."
//             />
//             <meta 
//                 property="og:type"
//                 content="website"
//             />
//             <meta
//                 property="og:url"
//                 content="https://www.squeeko.ca/"
//             />
//             <meta
//                 property="og:image"
//                 content="https://www.squeeko.ca/media/og-image.jpg"
//             />
//             <meta
//                 property="og:image:alt"
//                 content="SQUEEKO Child Care Management Software Logo"
//             />
//         </div>
//     )
// }

// export default About

import { Link } from "react-router-dom";
import {
    ArrowRight,
    Heart,
    Lightbulb,
    Sparkles,
    Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Logo from "@/components/Logo";

export default function About() {
    return (
        <div className="w-full overflow-hidden">
            <section className="min-h-[calc(100vh-80px)] flex items-center border-b">
                <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 bg-accent">
                    <div className="max-w-5xl bg-accent">
                        <p className="mb-8 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            About Squeeko
                        </p>

                        <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] tracking-tight">
                            We're here to make <br/>
                            childcare a little easier.
                        </h1>

                        <div className="mt-12 max-w-2xl">
                            <p className="text-xl lg:text-2xl leading-relaxed text-muted-foreground">
                                Running a childcare centre means taking care of
                                a lot of people. The children. The families.
                                Your educators. And, somehow, the business too.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 aspect-[16/9] rounded-3xl overflow-hidden bg-secondary flex justify-center items-center">
                            <Logo icon={false} className="text-secondary-foreground text-4xl" />
                        </div>

                        <div className="hidden lg:flex rounded-3xl bg-primary p-10 items-end">
                            <div>
                                <Sparkles className="size-10 mb-8" />

                                <p className="text-2xl font-medium leading-snug">
                                    Built for the people who make childcare
                                    happen every day.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* INTRO */}
            <section className="border-b">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-36">

                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">

                        <div>
                            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                                A little about us
                            </p>
                        </div>

                        <div className="space-y-8">
                            <h2 className="font-serif text-4xl lg:text-6xl leading-tight">
                                Childcare is complicated enough.
                            </h2>

                            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                                <p>
                                    There are attendance records to keep,
                                    forms to collect, ratios to manage,
                                    families to communicate with, payments to
                                    track, and regulations to stay on top of.
                                </p>

                                <p>
                                    The software shouldn't add to that.
                                </p>

                                <p>
                                    That's why we're building Squeeko
                                    specifically for childcare centres —
                                    bringing the everyday pieces of running a
                                    centre together in one connected place.
                                </p>

                                <p className="text-foreground text-xl">
                                    We want Squeeko to feel less like another
                                    piece of software and more like another
                                    member of your team.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* MISSION */}
            <section className="border-b">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-36">

                    <div className="grid lg:grid-cols-12 gap-12">

                        <div className="lg:col-span-4">
                            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                                Our mission
                            </p>
                        </div>

                        <div className="lg:col-span-8">
                            <h2 className="font-serif text-5xl lg:text-7xl leading-[0.95] tracking-tight">
                                Make childcare
                                <span className="block text-muted-foreground">
                                    easier to run.
                                </span>
                            </h2>

                            <p className="mt-12 max-w-2xl text-xl leading-relaxed text-muted-foreground">
                                We believe childcare operators should have
                                better tools. Not more tools — better ones.
                            </p>

                            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                                Squeeko brings scheduling, attendance,
                                compliance, communication, and billing into
                                one connected place, giving centre owners and
                                their teams more time to focus on the children
                                and families who depend on them.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* VISION */}
            <section className="border-b bg-secondary">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-36">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        <div>
                            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                                Our vision
                            </p>

                            <h2 className="mt-8 font-serif text-5xl lg:text-7xl leading-[0.95]">
                                Better centres.
                                <br />
                                Happier teams.
                                <br />
                                Stronger communities.
                            </h2>
                        </div>

                        <div className="lg:pl-12">
                            <div className="aspect-square rounded-full overflow-hidden">
                                <img
                                    src="/media/about-vision.jpg"
                                    alt="Children playing together"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* VALUES */}
            <section className="border-b">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-36">

                    <div className="mb-16 lg:mb-24">
                        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                            What we believe
                        </p>

                        <h2 className="mt-6 max-w-3xl font-serif text-5xl lg:text-7xl leading-tight">
                            Build things people
                            <span className="text-muted-foreground">
                                {" "}actually want to use.
                            </span>
                        </h2>
                    </div>


                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">

                        {/* VALUE 01 */}
                        <div className="border-t py-12">
                            <div className="flex items-start justify-between gap-8">
                                <span className="text-sm text-muted-foreground">
                                    01
                                </span>

                                <div className="max-w-xl">
                                    <Heart className="size-7 mb-8" />

                                    <h3 className="font-serif text-3xl lg:text-4xl">
                                        Built for childcare.
                                    </h3>

                                    <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                                        Childcare isn't just another industry
                                        with a calendar and a payment system.
                                        There are ratios, licensing
                                        requirements, daily logs, parent
                                        communication, forms, and a hundred
                                        little things that make running a
                                        centre different.
                                    </p>

                                    <p className="mt-5 text-lg leading-relaxed">
                                        Your software should understand that.
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* VALUE 02 */}
                        <div className="border-t py-12">
                            <div className="flex items-start justify-between gap-8">
                                <span className="text-sm text-muted-foreground">
                                    02
                                </span>

                                <div className="max-w-xl">
                                    <Lightbulb className="size-7 mb-8" />

                                    <h3 className="font-serif text-3xl lg:text-4xl">
                                        Keep it simple.
                                    </h3>

                                    <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                                        Running a centre is already
                                        complicated. Your software shouldn't
                                        be.
                                    </p>

                                    <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                                        We believe the best tools are the ones
                                        your team can pick up and understand
                                        without a manual, a training course,
                                        or three different tabs open.
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* VALUE 03 */}
                        <div className="border-t py-12">
                            <div className="flex items-start justify-between gap-8">
                                <span className="text-sm text-muted-foreground">
                                    03
                                </span>

                                <div className="max-w-xl">
                                    <Users className="size-7 mb-8" />

                                    <h3 className="font-serif text-3xl lg:text-4xl">
                                        People come first.
                                    </h3>

                                    <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                                        Technology is only useful when it
                                        makes people's lives better.
                                    </p>

                                    <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                                        Squeeko exists to support the people
                                        behind childcare — owners, directors,
                                        educators, and families.
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* VALUE 04 */}
                        <div className="border-t py-12">
                            <div className="flex items-start justify-between gap-8">
                                <span className="text-sm text-muted-foreground">
                                    04
                                </span>

                                <div className="max-w-xl">
                                    <Sparkles className="size-7 mb-8" />

                                    <h3 className="font-serif text-3xl lg:text-4xl">
                                        Keep getting better.
                                    </h3>

                                    <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                                        Squeeko isn't finished. And we don't
                                        think it ever should be.
                                    </p>

                                    <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                                        We're building alongside childcare
                                        operators, listening to what works,
                                        paying attention to what doesn't, and
                                        continuously improving the product.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* LARGE IMAGE / STORY BREAK */}
            <section className="border-b">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">

                    <div className="relative aspect-[16/8] rounded-3xl overflow-hidden bg-secondary">
                        <div className="w-full lg:w-3/4 border min-h-[200px] lg:min-h-full flex flex-col justify-center items-center bg-secondary border-secondary-foreground rounded text-2xl">
                            <Logo icon={false} className="text-secondary-foreground" />
                        </div>

                        <div className="absolute inset-0 flex items-end p-8 lg:p-16 bg-gradient-to-t from-black/50 to-transparent">
                            <p className="max-w-2xl text-white font-serif text-3xl lg:text-5xl leading-tight">
                                Good software should give people more time for
                                the things that matter.
                            </p>
                        </div>
                    </div>

                </div>
            </section>


            {/* WHY SQUEEKO */}
            <section className="border-b">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-36">

                    <div className="grid lg:grid-cols-12 gap-12">

                        <div className="lg:col-span-4">
                            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                                Why Squeeko?
                            </p>
                        </div>

                        <div className="lg:col-span-8">

                            <h2 className="font-serif text-5xl lg:text-7xl leading-[0.95]">
                                Because childcare deserves
                                <span className="text-muted-foreground">
                                    {" "}better software.
                                </span>
                            </h2>

                            <div className="mt-12 space-y-6 max-w-2xl text-lg lg:text-xl leading-relaxed text-muted-foreground">
                                <p>
                                    There are plenty of platforms that can
                                    help you run a business.
                                </p>

                                <p>
                                    We wanted to build one that understands
                                    <span className="text-foreground">
                                        {" "}your business.
                                    </span>
                                </p>

                                <p>
                                    Squeeko is made specifically for
                                    childcare — from the way attendance works
                                    to the way families communicate, forms get
                                    signed, and payments get collected.
                                </p>
                            </div>

                            <div className="mt-12 flex items-center gap-3 text-lg">
                                <span>
                                    One place.
                                </span>

                                <span className="text-muted-foreground">
                                    One connected system.
                                </span>
                            </div>

                        </div>

                    </div>
                </div>
            </section>


            {/* GETTING STARTED */}
            <section>
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-40">

                    <div className="grid lg:grid-cols-2 gap-16 items-end">

                        <div>
                            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                                And we're just getting started.
                            </p>

                            <h2 className="mt-8 font-serif text-6xl lg:text-8xl leading-[0.9] tracking-tight">
                                Let's build
                                <span className="block text-muted-foreground">
                                    something better.
                                </span>
                            </h2>
                        </div>

                        <div className="lg:pb-2 lg:pl-12">

                            <p className="text-xl leading-relaxed text-muted-foreground">
                                Squeeko is being built with real childcare
                                centres, real educators, and real feedback.
                            </p>

                            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
                                We're not trying to build the biggest
                                software company in the world.
                            </p>

                            <p className="mt-6 text-xl leading-relaxed">
                                We're trying to build something really useful.
                            </p>

                            <div className="mt-10 flex flex-col sm:flex-row gap-4">

                                <Button
                                    asChild
                                    size="lg"
                                    className="rounded-full px-8"
                                >
                                    <Link to="/contact">
                                        Let's talk
                                        <ArrowRight className="ml-2 size-4" />
                                    </Link>
                                </Button>

                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="rounded-full px-8"
                                >
                                    <Link to="/features">
                                        Explore Squeeko
                                    </Link>
                                </Button>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}