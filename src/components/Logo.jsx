import { PencilSparkles } from "lucide-react";

function Logo({className, stacked=false, caps=false, icon=true, words=true}) {
    const logo = caps ? "SQUEEKO" : "squeeko"
    return stacked ? (
        <div 
            className={`text-primary flex flex-col gap-1 justify-center items-center ${className}`}
        >
            {icon && <PencilSparkles className={`stroke-3 ${words ? "size-[1.25em]" : "size-[1.5em]"}`}/>}
            {words && <h2 className="font-logo">{logo}</h2>}
        </div>
    ) : (
        <div 
            className={`text-primary flex flex-row justify-center items-start ${className}`}
        >
            {words && <h2 className="font-logo">{logo}</h2>}
            {icon && <PencilSparkles className={`stroke-3 ${words ? "size-[0.5em]" : "size-[1.5em]"}`}/>}
        </div>
    )
}

export default Logo;
