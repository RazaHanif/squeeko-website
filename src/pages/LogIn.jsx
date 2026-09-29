import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)
        setError("")

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                setError(data.message || "User not found")
                return
            }
        } catch (err) {
            setError("Something went wrong. Please try again.",  err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full max-w-sm"
        >
            <div className="flex flex-col gap-2">
                <Label htmlFor="username">
                    Username
                </Label>

                <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>

            <div className="flex flex-col gap-2">
                <Label htmlFor="password">
                    Password
                </Label>

                <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <p className="text-sm text-destructive min-h-5">
                {error}
            </p>

            <Button
                type="submit"
                className="w-full"
                disabled={loading}
            >
                {loading ? "Logging in..." : "Log In"}
            </Button>
        </form>
    )
}

function LogIn() {
    return (
        <div className="flex-1 flex flex-col justify-center items-center w-full background bg-background overflow-hidden lg:py-16 py-8 min-h-[calc(100vh-80px)]">

            <div className="flex justify-center items-center gap-4 flex-1 flex-col w-9/10 lg:w-3/4 lg:py-16 py-8 z-10">
                <div className="flex flex-col justify-center items-center w-full">
                    <Card className="bg-primary/50 ring-primary p-8 gg w-md">
                        <CardContent className="flex justify-center items-center">
                            <LoginForm />
                        </CardContent>
                    </Card>
                </div>
            </div>

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
                content="https://www.squeeko.ca/media/og-image.jpg"
            />
            <meta
                property="og:image:alt"
                content="SQUEEKO Child Care Management Software Logo"
            />
        </div>
    );
}

export default LogIn;
