import OnboardingForm from "@/components/OnboardingForm"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

function SignUpSheet() {
    return (
        <Sheet className="w-full">
            <SheetTrigger className="cursor-pointer rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground flex-1 w-full p-3.5 ">
                Sign Up
            </SheetTrigger>
            <SheetContent 
                side="top"
                className="data-[side=top]:h-full bg-background flex flex-col justify-center items-center p-6"
            >
                <OnboardingForm />
            </SheetContent>
        </Sheet>
    )
}

export default SignUpSheet