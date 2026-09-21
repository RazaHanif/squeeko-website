import { PencilSparkles } from "lucide-react";

function Logo({className, stacked=false}) {
    const logo = caps ? "SQUEEKO" : "squeeko"
    return stacked ? (
        <div 
            className={`text-primary flex flex-col justify-center items-center ${className}`}
        >
            <PencilSparkles className="size-[1.5em] stroke-2" />
            <h2 className="font-mono">
                {logo}
            </h2>
        </div>
    ) : (
        <div 
            className={`text-primary flex flex-row justify-center items-start ${className}`}
        >
            <h2 className="font-mono">
                {logo}
            </h2>
            <PencilSparkles className="size-[0.5em] stroke-3" />
        </div>
    )
}

export default Logo;
