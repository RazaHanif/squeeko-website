import OnboardingForm from "@/components/OnboardingForm"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

function SignUpSheet() {
    return (
        <Sheet className="w-full">
            <SheetTrigger asChild className="w-full">
                <Button 
                    variant="secondary"
                    className="flex-1 w-full cursor-pointer p-6 border border-secondary-foreground"
                >
                    Sign Up
                </Button>
            </SheetTrigger>
            <SheetContent 
                side="top"
                className="data-[side=top]:h-full bg-background flex flex-col justify-start items-center"
            >
                <SheetHeader className="self-start">
                    <SheetTitle>Lets get started?</SheetTitle>
                    <SheetDescription>Tell us a little about your centre.</SheetDescription>
                </SheetHeader>
                <OnboardingForm />
            </SheetContent>
        </Sheet>
    )
}

export default SignUpSheet