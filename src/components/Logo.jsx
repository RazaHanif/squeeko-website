import { PencilSparkles } from "lucide-react";

function Logo({className, stacked=false, caps=false, icon=true, words=true}) {
    const logo = caps ? "SQUEEKO" : "squeeko"
    return stacked ? (
        <div 
            className={`text-primary flex flex-col gap-1 justify-center items-center ${className}`}
        >
            {icon && <PencilSparkles className="size-[1.25em] stroke-3" />}
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
            {icon && <PencilSparkles className="size-[0.5em] stroke-3" />}
        </div>
    )
}

export default Logo;
