import { PencilSparkles } from "lucide-react"

function Logo(className) {
    return (
        <h2 
            className={`text-4xl font-mono font-bold text-primary ${className}`}
        >
            squeeko <PencilSparkles />
        </h2>
    )
}

export default Logo