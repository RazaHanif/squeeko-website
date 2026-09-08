import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { AlertCircle, ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import FormLayout from "../FormLayout";

const CampForm = ({ campType }) => {
    const sessionTypes = {
        "march": "March Break",
        "pa": "PA Day",
        "summer": "Summer Break",
        "winter": "Winter Break"
    }

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        dob: "",
        session: campType ? sessionTypes[campType] : "",
        message: "",
        type: "camp",
    });

    const currentYear = new Date().getFullYear();

    const minDOB = new Date(currentYear - 13, 0, 1);
    const maxDOB = new Date(currentYear - 4, 11, 31);

    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [openDOB, setOpenDOB] = useState(false);
    const [errorDOB, setErrorDOB] = useState(false)

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
            const response = await fetch("/api/send-email", {
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
        <FormLayout
            handleSubmit={handleSubmit}
            submitted={submitted}
            form={
                <>
                    <div className="grid items-center gap-2 w-4/5 p-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            type="text"
                            placeholder="Lightning McQueen"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="grid items-center gap-2 w-4/5 p-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            placeholder="mcqueen@kachow.com"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="grid items-center gap-2 w-4/5 p-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            type="tel"
                            placeholder="905-878-4697"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="grid items-center gap-2 w-4/5 p-2">
                        <Label htmlFor="dob">Date of birth</Label>
                        {errorDOB && (
                            <Alert variant="destructive" className="w-4/5">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Missing information</AlertTitle>
                                <AlertDescription>
                                    Please select a date of birth before submitting the form.
                                </AlertDescription>
                            </Alert>
                        )}
                        <Popover open={openDOB} onOpenChange={setOpenDOB}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    id="dob"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    className="w-full justify-between font-normal"
                                >
                                    {formData.dob
                                        ? formData.dob
                                        : "Select date"}
                                    <ChevronDownIcon />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent
                                className="w-full p-0"
                                side="bottom"
                                align="start"
                                avoidCollisions={false}
                                forceMount
                            >
                                <Calendar
                                    mode="single"
                                    name="dob"
                                    selected={
                                        formData.dob
                                            ? new Date(formData.dob)
                                            : undefined
                                    }
                                    disabled={{
                                        before: minDOB,
                                        after: maxDOB
                                    }}
                                    defaultMonth={maxDOB}
                                    onSelect={(date) => {
                                        if (
                                            date instanceof Date &&
                                            !isNaN(date.getTime())
                                        ) {
                                            setFormData((prev) => ({
                                                ...prev,
                                                dob: date
                                                    .toISOString()
                                                    .split("T")[0],
                                            }));
                                            setOpenDOB(false);
                                        }
                                    }}
                                    captionLayout="dropdown"
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    {campType ? (
                        <div className="grid gap-2 w-4/5 p-2">
                            <Label>Session</Label>
                            <Input
                                value={sessionTypes[campType]}
                                disabled
                            />
                        </div>
                        ) : (
                        <div className="grid gap-2 w-4/5 p-2">
                            <Label>Session</Label>

                            <RadioGroup
                                value={formData.session}
                                onValueChange={(value) =>
                                    setFormData((prev) => ({
                                    ...prev,
                                    session: value,
                                    }))
                                }
                            >
                            {Object.entries(sessionTypes).map(([key, value]) => (
                                <div className="flex items-center gap-3" key={key}>
                                <RadioGroupItem
                                    value={value}
                                    id={`radio-${key}`}
                                />
                                <Label htmlFor={`radio-${key}`}>
                                    {value}
                                </Label>
                                </div>
                            ))}
                            </RadioGroup>
                        </div>
                    )}

                    <div className="grid items-center gap-2 w-4/5 p-2">
                        <Label htmlFor="message">Tell us more...</Label>
                        <Input
                            type="text"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>

                    <Button
                        type="submit"
                        variant="outline"
                        disabled={isSubmitting}
                        className="mb-4"
                    >
                        Submit
                    </Button>
                </>
            }
        />
    );
};


const OnboardingForm = () => {
    const daycareType = {
        "standalone": "Standalone daycare / childcare centre",
        "inSchool": "Daycare within a school",
        "home": "Home daycare",
        "nursery": "Preschool / nursery"
    }

    const acceptingType = {
        "now": "Yes, we're actively enrolling",
        "in6Months": "Not right now, but within 6 months",
        "after6Months": "Not for at least 6 months",
    }

    const manageType = {
        "paper": "Paper / Binders",
        "spreadsheets": "Spreadsheets / Excel",
        "software": "Childcare Software",
        "combo": "A Combination of Tools",
        "other": "Other"
    }

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



    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        type: "",
        maxChildren: "",
        staff: "",
        locations: "",
        accepting: "",

    });

    const currentYear = new Date().getFullYear();

    const minDOB = new Date(currentYear - 13, 0, 1);
    const maxDOB = new Date(currentYear - 4, 11, 31);

    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [openDOB, setOpenDOB] = useState(false);
    const [errorDOB, setErrorDOB] = useState(false)

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
            const response = await fetch("/api/send-email", {
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
       <div className="flex flex-col justify-center gap-4 p-4 rounded-xl border border-primary-foreground bg-primary w-3/4 lg:w-1/4">
            <div className="flex flex-col justify-center gap-4 w-full">
                <div className="flex flex-col gap-2 w-full justify-center">
                    <Label htmlFor="max-capacity" className="px-2">
                        Whats your max child capacity
                    </Label>
                    <div className="flex flex-row gap-4 justify-center items-center p-2 bg-secondary rounded-xl px-4">
                        <Slider 
                            className="flex-5"
                            value={value}
                            onValueChange={(value) => setValue(value)}
                            id="max-capacity"
                            min={0}
                            max={100} 
                            step={1} 
                        />
                        <p className="flex-1 text-end text-primary">{value}</p> 
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OnboardingForm