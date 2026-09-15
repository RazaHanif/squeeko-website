import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

const OnboardingForm = () => {
    const daycareType = [
        "Standalone daycare / childcare centre",
        "Daycare within a school",
        "Home daycare",
        "Preschool / nursery"
    ]

    const acceptingType = [
        "Yes, we're actively enrolling",
        "Not right now, but within 6 months",
        "Not for at least 6 months",
    ]

    const managementType = [
        "Paper / Binders",
        "Spreadsheets / Excel",
        "Childcare Software",
        "A Combination of Tools",
        "Other"
    ]

    const maxCapacityType = [
        "1-10",
        "11-20",
        "21-30",
        "31-40",
        "41-50",
        "51-60",
        "61-70",
        "71-80",
        "81-90",
        "91-100",
        "100+"
    ]
    
    const numOfStaffType = [
        "1-5",
        "6-10",
        "11-20",
        "21-50",
        "50+"
    ]

    const painPointType = [
        "Keeping records organized",
        "Staying compliant",
        "Communicating with families",
        "Attendance & daily logs",
        "Invoicing & payments",
        "Managing forms & paperwork",
        "Staff management",
        "Other"
    ]

    const timelineType = [
        "Just exploring",
        "Within the next 3 months",
        "Within 6 months",
        "As Soon As Possible"
    ]

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        daycareType: "",
        maxChildCapacity: "",
        numOfStaff: "",
        numOfLocations: "",
        accepting: "",
        managementType: "",
        painPoints: [],
        timeline: "",
    });

    const inputClass = "h-8 w-full min-w-0 border-0 px-2.5 py-1 outline-none placeholder:text-muted-foreground text-md"


    const [currentStep, setCurrentStep] = useState(0)
    const [direction, setDirection] = useState(1)
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const nextStep = () => {
        setDirection(1)
        setCurrentStep(prev => prev + 1)
    }

    const prevStep = () => {
        setDirection(-1)
        setCurrentStep(prev => Math.max(prev -1, 0))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        console.log(formData)
        setSubmitted(true)

        // try {
        //     const response = await fetch("/api/lead", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(formData),
        //     });

        //     const result = await response.json()

        //     if (result.success) {
        //         setSubmitted(true);
        //     } else {
        //         alert("Failed to submit the form.");
        //     }
        // } catch (e) {
        //     alert("Failed to submit the form.");
        //     console.log(e);
        // } finally {
        //     setIsSubmitting(false);
        // }
    };


    return (
        <div className="w-9/10 lg:w-1/2">
            { submitted ? (
                <div 
                    className="bg-muted border border-secondary-foreground w-full flex flex-1 flex-col justify-around rounded-2xl py-8 px-8 lg:py-16 min-h-[600px]"
                >
                    <h2 className="text-3xl font-bold font-serif text-center">
                        You're all set!
                    </h2>

                    <div className="flex flex-col gap-4">
                        <p className="">
                            We've got everything we need.
                        </p>
                        <p className="">
                            A member of the SQUEEKO team will review your centre's information and reach out to you shortly.
                        </p>
                        <p className="">
                            In the meantime, see what SQUEEKO can do for your centre.
                        </p>
                    </div>


                    <NavLink 
                        className="self-center hover:underline font-semibold"
                        to={"/features"} 
                        end 
                    >
                        Explore SQUEEKO &rarr;
                    </NavLink>
                </div>
            ) : (
                <form
                    onSubmit={ handleSubmit }
                    className="bg-muted border border-secondary-foreground w-full flex flex-1 flex-col justify-center rounded-2xl py-8 px-8 lg:py-16 min-h-[600px]"

                >
                    <div className="w-full mb-8">
                        <div className="flex justify-between items-center mb-2">
                            <Button
                                variant="ghost"
                                onClick={() => prevStep()}
                                disabled={currentStep === 0}
                            >
                                Back
                            </Button>

                            <div className="text-sm text-muted-foreground">
                                {currentStep + 1} of 9
                            </div>
                        </div>

                        <Progress 
                            value={((currentStep + 1) / 9) * 100} 
                            className="h-2"
                        />

                    </div>

                    {currentStep === 0 && (
                        <div 
                            key={currentStep}
                            className={`min-h-[400px] flex-1 flex flex-col justify-center items-center gap-4 question-container ${direction === 1 ? "slide-left" : "slide-right"}`}>
                            <h2 className="text-2xl text-center font-serif font-semibold w-full border border-primary min-h-16">
                                What best describes your centre?
                            </h2>
                            <div className="flex flex-col justify-start items-center w-full gap-4 p-4 border border-primary flex-1">
                                {daycareType.map((type, idx) => (
                                    <Button 
                                        type="button"
                                        key={idx} 
                                        value={type}
                                        variant="default"
                                        onClick={() => {
                                            setFormData((prev) => ({
                                                ...prev,
                                                daycareType: type,
                                            }))
                                            nextStep()
                                        }}                            
                                        className="p-6 w-full"
                                    >
                                        {type}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}

                    {currentStep === 1 && (
                        <div 
                            key={currentStep}
                            className={`min-h-[400px] flex-1 flex flex-col justify-center items-center gap-4 question-container ${direction === 1 ? "slide-left" : "slide-right"}`}>
                            <h2 className="text-2xl text-center font-serif font-semibold w-full border border-primary min-h-16">
                                What is your maximum licensed capacity?
                            </h2>
                            <div className="w-full grid grid-cols-2 justify-items-center gap-4 p-4 [&>*:last-child:nth-child(odd)]:col-span-2 border border-primary flex-1">
                                {maxCapacityType.map((type, idx) => (
                                    <Button 
                                        type="button"
                                        key={idx} 
                                        value={type}
                                        variant="default"
                                        onClick={() => {
                                            setFormData((prev) => ({
                                                ...prev,
                                                maxChildCapacity: type,
                                            }))
                                            nextStep()
                                        }}                            
                                        className="p-6 w-full"
                                    >
                                        {type}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div 
                            key={currentStep}
                            className={`min-h-[400px] flex-1 flex flex-col justify-center items-center gap-4 question-container ${direction === 1 ? "slide-left" : "slide-right"}`}>
                            <h2 className="text-2xl text-center font-serif font-semibold w-full border border-primary min-h-16">
                                About how many employees work at your centre?
                            </h2>
                            <div className="flex flex-col justify-start items-center w-full gap-4 p-4 border border-primary flex-1 p-4">
                                {numOfStaffType.map((type, idx) => (
                                    <Button 
                                        type="button"
                                        key={idx} 
                                        value={type} 
                                        variant="default"
                                        onClick={() => {
                                            setFormData((prev) => ({
                                                ...prev,
                                                numOfStaff: type,
                                            }))
                                            nextStep();
                                        }}
                                        className="p-6 w-full"
                                    >
                                        {type}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div 
                            key={currentStep}
                            className={`min-h-[400px] flex-1 flex flex-col justify-center items-center gap-4 question-container ${direction === 1 ? "slide-left" : "slide-right"}`}>
                            <h2 className="text-2xl text-center font-serif font-semibold w-full border border-primary min-h-16">
                                How many locations do you operate?
                            </h2>
                            <div className="flex flex-col justify-start items-center w-full gap-4 p-4 border border-primary flex-1 p-4">
                                <Button 
                                    type="button"
                                    value={"1"} 
                                    variant="default"
                                    onClick={() => {
                                        setFormData((prev) => ({
                                            ...prev,
                                            numOfLocations: "1",
                                        }))
                                        console.log("1")
                                        nextStep();
                                    }}
                                    className="p-6 w-full"
                                >
                                    1
                                </Button>
                                <Button 
                                    type="button"
                                    value={"2 or more"} 
                                    variant="default"
                                    onClick={() => {
                                        setFormData((prev) => ({
                                            ...prev,
                                            numOfLocations: "2 or more",
                                        }))
                                        console.log("2 or more")
                                        nextStep();
                                    }}
                                    className="p-6 w-full"
                                >
                                    2 or more
                                </Button>
                            </div>
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div 
                            key={currentStep}
                            className={`min-h-[400px] flex-1 flex flex-col justify-center items-center gap-4 question-container ${direction === 1 ? "slide-left" : "slide-right"}`}>
                            <h2 className="text-2xl text-center font-serif font-semibold w-full border border-primary min-h-16">
                                Are you currently accepting new families?
                            </h2>
                            <div className="flex flex-col justify-start items-center w-full gap-4 p-4 border border-primary flex-1 p-4">
                                {acceptingType.map((type, idx) => (
                                    <Button 
                                        type="button"
                                        key={idx} 
                                        value={type} 
                                        variant="default"
                                        onClick={() => {
                                            setFormData((prev) => ({
                                                ...prev,
                                                accepting: type,
                                            }))
                                            nextStep();
                                        }}
                                        className="p-6 w-full"
                                    >
                                        {type}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}

                    {currentStep === 5 && (
                        <div 
                            key={currentStep}
                            className={`min-h-[400px] flex-1 flex flex-col justify-center items-center gap-4 question-container ${direction === 1 ? "slide-left" : "slide-right"}`}>
                            <h2 className="text-2xl text-center font-serif font-semibold w-full border border-primary min-h-16">
                                How do you currently manage your centre?
                            </h2>
                            <div className="flex flex-col justify-start items-center w-full gap-4 p-4 border border-primary flex-1 p-4">
                                {managementType.map((type, idx) => (
                                    <Button 
                                        type="button"
                                        key={idx} 
                                        value={type} 
                                        variant="default"
                                        onClick={() => {
                                            setFormData((prev) => ({
                                                ...prev,
                                                managementType: type,
                                            }))
                                            nextStep();
                                        }}
                                        className="p-6 w-full"
                                    >
                                        {type}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}

                    {currentStep === 6 && (
                        <div 
                            key={currentStep}
                            className={`min-h-[400px] flex-1 flex flex-col justify-center items-center gap-4 question-container ${direction === 1 ? "slide-left" : "slide-right"}`}>
                            <h2 className="text-2xl text-center font-serif font-semibold w-full border border-primary min-h-16">
                                Whats the biggest challenge you're trying to solve?
                            </h2>
                            <div className="w-full flex flex-col justify-center items-center gap-4 px-4 border border-primary flex-1 p-4">
                                <div className="w-full grid grid-cols-2 justify-items-center gap-4">
                                    {painPointType.map((type, idx) => (
                                        <Button 
                                            type="button"
                                            key={idx} 
                                            value={type} 
                                            variant={formData.painPoints.includes(type) ? "outline" : "default"}
                                            onClick={() => {
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    painPoints: prev.painPoints.includes(type)
                                                        ? prev.painPoints.filter(item => item !== type)
                                                        : [...prev.painPoints, type],
                                                }))
                                            }}
                                            className="p-6 w-full whitespace-normal break-words"
                                        >
                                            {type}
                                        </Button>
                                    ))}
                                </div>
                                <Button 
                                    type="button"
                                    variant="default"
                                    onClick={() => {
                                        nextStep();
                                    }}
                                    className="py-6 w-1/2"
                                >
                                    Continue
                                </Button>
                            </div>
                        </div>
                    )}

                    {currentStep === 7 && (
                        <div 
                            key={currentStep}
                            className={`min-h-[400px] flex-1 flex flex-col justify-center items-center gap-4 question-container ${direction === 1 ? "slide-left" : "slide-right"}`}>
                            <h2 className="text-2xl text-center font-serif font-semibold w-full border border-primary min-h-16">
                                When are you looking to make a change?
                            </h2>
                            <div className="flex flex-col justify-start items-center w-full gap-4 p-4 border border-primary flex-1 p-4">
                                {timelineType.map((type, idx) => (
                                    <Button 
                                        type="button"
                                        key={idx} 
                                        value={type} 
                                        variant="default"
                                        onClick={() => {
                                            setFormData((prev) => ({
                                                ...prev,
                                                timeline: type,
                                            }))
                                            nextStep();
                                        }}
                                        className="p-6 w-full"
                                    >
                                        {type}
                                    </Button>
                                ))}
                            </div>
                        </div>

                    )}

                    {currentStep === 8 && (
                        <div 
                            key={currentStep}
                            className={`min-h-[400px] flex-1 flex flex-col justify-center items-center gap-4 question-container ${direction === 1 ? "slide-left" : "slide-right"}`}>
                            <h2 className="text-2xl text-center font-serif font-semibold w-full border border-primary min-h-16">
                                Almost there! Let's get your centre connected with our team.
                            </h2>
                            <div className="flex flex-col justify-start items-center w-full gap-4 p-4 border border-primary flex-1 p-4">
                                <div className="flex flex-row gap-4 w-full">
                                    <div className="flex flex-col justify-center items-start p-2 rounded-lg border border-primary-foreground bg-primary/50 text-primary-foreground flex-1">
                                        <Label htmlFor="firstName" className="pl-2.5 text-xs">
                                            First Name
                                        </Label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            className={inputClass}
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center items-start p-2 rounded-lg border border-primary-foreground bg-primary/50 text-primary-foreground flex-1">
                                        <Label htmlFor="lastName" className="pl-2.5 text-xs">
                                            Last Name
                                        </Label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            className={inputClass}
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="w-full flex flex-col justify-center items-start p-2 rounded-lg border border-primary-foreground bg-primary/50 text-primary-foreground">
                                    <Label htmlFor="email" className="pl-2.5 text-xs">
                                        Email
                                    </Label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className={inputClass}
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="w-full flex flex-col justify-center items-start p-2 rounded-lg border border-primary-foreground bg-primary/50 text-primary-foreground">
                                    <Label htmlFor="phone" className="pl-2.5 text-xs">
                                        Phone
                                    </Label>
                                    <input
                                        type="phone"
                                        name="phone"
                                        id="phone"
                                        className={inputClass}
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="w-full flex flex-col justify-center items-start p-2 rounded-lg border border-primary-foreground bg-primary/50 text-primary-foreground">
                                    <Label htmlFor="company" className="pl-2.5 text-xs">
                                        Company
                                    </Label>
                                    <input
                                        type="text"
                                        name="company"
                                        id="company"
                                        className={inputClass}
                                        value={formData.company}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <Button 
                                    className="py-6 w-1/2"
                                    type="submit"
                                    variant="default"
                                >
                                    Submit
                                </Button>
                            </div>
                        </div>
                    )}
                </form>
            )}
        </div>
    )
}

export default OnboardingForm