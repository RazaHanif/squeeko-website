import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

const Temp = ({ children }) => {
    const [hasAccess, setHasAccess] = useState(() => {
        const hasAccess = localStorage.getItem("s-p-a") === "true"
        const expiresAt = localStorage.getItem("s-p-a-exp")

        if (
            hasAccess && expiresAt && Date.now() < Number(expiresAt)
        ) {
            return true
        }

        localStorage.removeItem('s-p-a')
        localStorage.removeItem('s-p-a-exp')

        return false
    })

    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()


        if (
            password === import.meta.env.VITE_T || 
            password === import.meta.env.VITE_G || 
            password === import.meta.env.VITE_R
        ) {
            const expiresAt = Date.now() +  5 * 1000

            localStorage.setItem('s-p-a', 'true')
            localStorage.setItem('s-p-a-exp', expiresAt.toString())
            setHasAccess(true)
        } else {
            setError("nuh uh")
        }
    }

    if (hasAccess) {
        return children
    }

    const inputClass = `!bg-primary/50 text-background border-primary  transition-all duration-200 ease-in-out ${error ? "border-destructive focus-visible:border-destructive" : "" }`

    return (
        <div className="flex-1 flex flex-col justify-center items-center w-full background bg-background overflow-hidden">
    
            <span className="ball" />
            <span className="ball" />
            <span className="ball" />
            <span className="ball" />
            <span className="ball" />
            <span className="ball" />
            <span className="ball" />

            <div className="flex justify-center items-center gap-4 flex-1 flex-col w-9/10 lg:w-3/4 lg:py-16 py-8 z-50">
                <div className="w-full flex flex-col justify-end items-center gap-2">
                    <h1 className="text-5xl font-mono font-bold text-primary text-shadow-md">
                        SQUEEKO
                    </h1>
                    <p className="text-muted-foreground">
                        under construction
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center w-full">
                    <Card className="bg-primary/50 ring-primary p-8 gg">
                        <CardContent>
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col justify-center items-center gap-4"
                            >
                                <Input
                                    id='password'
                                    type='password'
                                    value={password}
                                    className={inputClass}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <Button 
                                    type="submit" 
                                    variant="outline" 
                                    className="w-2/3 cursor-pointer !bg-primary/50 !border-primary text-background hover:!bg-primary/75 hover:!text-background"
                                >
                                    Enter
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Temp