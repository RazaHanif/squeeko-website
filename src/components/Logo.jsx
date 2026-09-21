import { PencilSparkles } from "lucide-react";

function Logo(className) {
    return (
        <div className={`text-primary flex flex-row gap-2 justify-center items-center`}>
            <h2 className={`font-mono text-primary ${className}`}>
                squeeko
            </h2>
            <PencilSparkles className="size-[1em]" />
        </div>
    );
}

export default Logo;
