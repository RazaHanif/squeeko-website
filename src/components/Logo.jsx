import { PencilSparkles } from "lucide-react"

function Logo(className) {
    return (
        <div className={`text-primary text-4xl`}>
            <PencilSparkles className="/>
            <h2 
                className={`text-4xl font-mono text-primary ${className}`}
            >
                squeeko 
            </h2>
        </div>
    )
}

export default Logo