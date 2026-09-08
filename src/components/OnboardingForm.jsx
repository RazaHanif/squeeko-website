import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { NavLink } from "react-router-dom";

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
            { true ? (
                <div 
                    className="w-full flex flex-1 flex-col justify-center rounded-2xl bg-primary py-8 lg:py-16"
                >
                    <h2 className="">
                        You're all set!
                    </h2>

                    <p>
                        We've got everything we need.

                        A member of the Squeeko team will review your centre's information and reach out to you shortly.
                    </p>

                    <p>
                        In the meantime, see what Squeeko can do for your centre.
                    </p>

                    <NavLink to={"/features"}>
                        Explore Squeeko →
                    </NavLink>

                </div>
            ) : (
                <form
                    onSubmit={ handleSubmit }
                    className="w-full flex flex-1 flex-col justify-center rounded-2xl bg-primary py-8 lg:py-16"
                >
                    <div className="flex flex-col justify-center gap-4 p-4 rounded-xl border border-primary-foreground bg-primary w-3/4 lg:w-1/4">
                        <div className="flex flex-col justify-center gap-4 w-full">
                            <div className="flex flex-col gap-2 w-full justify-center">

                            </div>
                        </div>
                    </div>  
                </form>
            )}
        </div>
    )
}

export default OnboardingForm