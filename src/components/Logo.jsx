import { PencilSparkles } from "lucide-react"

function Logo(className) {
    return (
        <div className={`text-primary`}>
            <PencilSparkles />
            <h2 
                className={`text-4xl font-mono font-bold text-primary ${className}`}
            >
                squeeko 
            </h2>
        </div>
    )
}

export default Logo