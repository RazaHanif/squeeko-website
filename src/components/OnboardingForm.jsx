import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

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
        <div className="w-3/4 lg:w-1/4">
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
                    </p>

                    <p className="">
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
                    <div className="flex flex-col justify-center items-center gap-2 border-2 border-primary-foreground">
                        <h2 className="text-xl">
                            What best describes your centre?
                        </h2>

                        <div className="flex flex-col gap-4 w-full">
                            {daycareType.map((type, idx) => (
                                <Button 
                                    key={idx} 
                                    value={type} 
                                    onClick={() => console.log(type)}
                                    className="p-6 w-full"
                                >
                                    {type}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2 border-2 border-primary-foreground">
                        <h2 className="text-xl">
                            What is your maximum licensed capacity?
                        </h2>
                        <div>
                            <Input 
                                type="number" 
                                value={formData.maxChildCapacity}
                                on
                            />
                        </div>

                    </div>

                    <div className="flex flex-col justify-center items-center gap-2 border-2 border-primary-foreground">
                        <h2 className="text-xl">
                            About how many employees work at your centre?
                        </h2>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2 border-2 border-primary-foreground">
                        <h2 className="text-xl">
                            How many locations do you operate?
                        </h2>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2 border-2 border-primary-foreground">
                        <h2 className="text-xl">
                            Are you currently accepting new families?
                        </h2>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2 border-2 border-primary-foreground">
                        <h2 className="text-xl">
                            How do you currently manage your centre?
                        </h2>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2 border-2 border-primary-foreground">
                        <h2 className="text-xl">
                         Whats the biggest challenge you're trying to solve? (choose multiple)
                        </h2>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2 border-2 border-primary-foreground">
                        <h2 className="text-xl">
                            When are you looking to make a change?
                        </h2>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2 border-2 border-primary-foreground">
                        <h2 className="text-xl">
                            Almost there! Let's get your centre connected with our team.
                        </h2>
                    </div>
                </form>
            )}
        </div>
    )
}

export default OnboardingForm