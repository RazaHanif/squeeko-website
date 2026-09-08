import { Slider } from "@/components/ui/slider"
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
        maxChildCapacity: "0",
        numOfStaff: "",
        numOfLocations: "",
        accepting: "",
        managementType: "",
        painPoints: [],
        timeline: "",

    });

    const inputClass = "h-8 w-full min-w-0 border-0 px-2.5 py-1 outline-none placeholder:text-muted-foreground text-md"


    const [currentStep, setCurrentStep] = useState(0)
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.dob) {
            setErrorDOB("Please select a date of birth.");
            return;
        }

        setErrorDOB("")
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/submit-form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                alert("Failed to submit the form.");
            }
        } catch (e) {
            alert("Failed to submit the form.");
            console.log(e);
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="w-3/4 lg:w-1/2">
            { submitted ? (
                <div 
                    className="w-full flex flex-1 flex-col justify-center rounded-2xl text-secondary-foreground p-8 gap-4"
                >
                    <h2 className="text-2xl">
                        You're all set!
                    </h2>

                    <p className="">
                        We've got everything we need.

                        A member of the Squeeko team will review your centre's information and reach out to you shortly.

                        In the meantime, see what Squeeko can do for your centre.
                    </p>

                    <NavLink to={"/features"} end className="self-center hover:underline">
                        Explore Squeeko
                    </NavLink>
                </div>
            ) : (
                <form
                    onSubmit={ handleSubmit }
                    className="w-full flex flex-1 flex-col justify-center rounded-2xl py-8 px-8 lg:py-16 gap-1"
                >
                    <div className="bg-card w-full mb-8">
                        <div className="flex justify-between items-center mb-2">
                            <Button
                                variant="ghost"
                                onClick={() => setCurrentStep(prev => Math.max(prev - 1, 0))}
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
                        <div className="flex flex-col justify-center items-center gap-2 p-2 bg-primary border border-secondary-foreground rounded-lg">
                            <h2 className="text-xl text-center font-serif font-semibold w-full">
                                What best describes your centre?
                            </h2>
                            <div className="flex flex-col gap-4 w-full px-4">
                                {daycareType.map((type, idx) => (
                                    <Button 
                                        key={idx} 
                                        value={type}
                                        variant="secondary"
                                        onClick={() => {
                                            setFormData((prev) => ({
                                                ...prev,
                                                daycareType: type,
                                            }))
                                            console.log(type)
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
                        <div className="flex flex-col justify-center items-center gap-2 p-2 bg-primary border border-secondary-foreground rounded-lg">
                            <h2 className="text-xl text-center font-serif font-semibold w-full">
                                What is your maximum licensed capacity?
                            </h2>
                            <div className="flex flex-col justify-center items-center py-2 px-4">
                                <div className="flex flex-row justify-center items-center p-2 gap-2 rounded-lg border border-secondary-foreground bg-secondary/50">
                                    <input 
                                        type="number"
                                        id="maxChildCapacity-input"
                                        name="maxChildCapacity"
                                        className="h-8 w-full min-w-0 border border-primary rounded-lg px-0 py-1 outline-none placeholder:text-muted-foreground text-md flex-1 text-end"
                                        value={formData.maxChildCapacity}
                                        onChange={handleChange}
                                    />
                                    <p className="flex-1">
                                        Children
                                    </p>
                                </div>

                                <p className={`text-xs font-light my-1 ${formData.maxChildCapacity > 100 ? 'text-destructive' : 'text-transparent'}`}>
                                        Please enter a value less than or equal to 100.
                                </p>

                                {/* Maybe we can add numbers to the bottom of this slider to represent the scale, with the very right being 100+ */}
                                <Slider
                                    id="maxChildCapacity-slider"
                                    name="maxChildCapacity"
                                    value={formData.maxChildCapacity}
                                    onChange={handleChange}
                                    max={100}
                                    min={1}
                                    step={1}
                                />
                            </div>
                            <Button 
                                variant="secondary"
                            >
                                Continue
                            </Button>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="flex flex-col justify-center items-center gap-2 p-2 bg-primary border border-secondary-foreground rounded-lg">
                            <h2 className="text-xl text-center font-serif font-semibold w-full">
                                About how many employees work at your centre?
                            </h2>
                            <div className="flex flex-col gap-4 w-full px-4">
                                {numOfStaffType.map((type, idx) => (
                                    <Button 
                                        key={idx} 
                                        value={type} 
                                        variant="secondary"
                                        onClick={() => {
                                            setFormData((prev) => ({
                                                ...prev,
                                                numOfStaff: type,
                                            }))
                                            console.log(type)
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
                        <div className="flex flex-col justify-center items-center gap-2 p-2 bg-primary border border-secondary-foreground rounded-lg">
                            <h2 className="text-xl text-center font-serif font-semibold w-full">
                                How many locations do you operate?
                            </h2>
                            <div className="flex flex-col gap-4 w-full px-4">
                                <Button 
                                    value={"1"} 
                                    variant="secondary"
                                    onClick={() => {
                                        setFormData((prev) => ({
                                            ...prev,
                                            numOfStaff: "1",
                                        }))
                                        console.log("1")
                                    }}
                                    className="p-6 w-full"
                                >
                                    1
                                </Button>
                                <Button 
                                    value={"2 or more"} 
                                    variant="secondary"
                                    onClick={() => {
                                        setFormData((prev) => ({
                                            ...prev,
                                            numOfStaff: "2 or more",
                                        }))
                                        console.log("2 or more")
                                    }}
                                    className="p-6 w-full"
                                >
                                    2 or more
                                </Button>
                            </div>
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div className="flex flex-col justify-center items-center gap-2 p-2 bg-primary border border-secondary-foreground rounded-lg">
                            <h2 className="text-xl text-center font-serif font-semibold w-full">
                                Are you currently accepting new families?
                            </h2>
                            <div className="flex flex-col gap-4 w-full px-4">
                                {acceptingType.map((type, idx) => (
                                    <Button 
                                    key={idx} 
                                    value={type} 
                                    variant="secondary"
                                    onClick={() => {
                                        setFormData((prev) => ({
                                            ...prev,
                                            accepting: type,
                                        }))
                                        console.log(type)
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
                        <div className="flex flex-col justify-center items-center gap-2 p-2 bg-primary border border-secondary-foreground rounded-lg">
                            <h2 className="text-xl text-center font-serif font-semibold w-full">
                                How do you currently manage your centre?
                            </h2>
                            <div className="flex flex-col gap-4 w-full px-4">
                                {managementType.map((type, idx) => (
                                    <Button 
                                    key={idx} 
                                    value={type} 
                                    variant="secondary"
                                    onClick={() => {
                                        setFormData((prev) => ({
                                            ...prev,
                                            managementType: type,
                                        }))
                                        console.log(type)
                                    }}
                                    className="p-6 w-full"
                                    >
                                        {type}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col justify-center items-center gap-2 p-2 bg-primary border border-secondary-foreground rounded-lg">
                        <h2 className="text-xl text-center font-serif font-semibold w-full">
                            Whats the biggest challenge you're trying to solve?
                        </h2>
                        {/* Make this so they can choose multiple options that just add to the painPoints array */}
                        <div className="flex flex-col gap-4 w-full px-4">
                            {painPointType.map((type, idx) => (
                                <Button 
                                key={idx} 
                                value={type} 
                                variant="secondary"
                                onClick={() => {
                                    setFormData((prev) => ({
                                        ...prev,
                                        painPoints: type,
                                    }))
                                    console.log(type)
                                }}
                                className="p-6 w-full"
                                >
                                    {type}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2 p-2 bg-primary border border-secondary-foreground rounded-lg">
                        <h2 className="text-xl text-center font-serif font-semibold w-full">
                            When are you looking to make a change?
                        </h2>
                        <div className="flex flex-col gap-4 w-full px-4">
                            {timelineType.map((type, idx) => (
                                <Button 
                                key={idx} 
                                value={type} 
                                variant="secondary"
                                onClick={() => {
                                    setFormData((prev) => ({
                                        ...prev,
                                        timeline: type,
                                    }))
                                    console.log(type)
                                }}
                                className="p-6 w-full"
                                >
                                    {type}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2 p-2 bg-primary border border-secondary-foreground rounded-lg">
                        <h2 className="text-xl text-center font-serif font-semibold w-full">
                            Almost there! Let's get your centre connected with our team.
                        </h2>
                        <div className="flex flex-col gap-4 w-full px-4">
                            <div className="flex flex-col justify-center items-start p-2 rounded-lg border border-secondary-foreground bg-secondary/50">
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
                                />
                            </div>
                            <div className="flex flex-col justify-center items-start p-2 rounded-lg border border-secondary-foreground bg-secondary/50">
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
                                />
                            </div>
                            <div className="flex flex-col justify-center items-start p-2 rounded-lg border border-secondary-foreground bg-secondary/50">
                                <Label htmlFor="company" className="pl-2.5 text-xs">
                                    Company Name
                                </Label>
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    className={inputClass}
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col justify-center items-start p-2 rounded-lg border border-secondary-foreground bg-secondary/50">
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
                                />
                            </div>
                            <div className="flex flex-col justify-center items-start p-2 rounded-lg border border-secondary-foreground bg-secondary/50">
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
                                />
                            </div>
                            <Button 
                                type="submit"
                                variant="secondary"
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    )
}

export default OnboardingForm