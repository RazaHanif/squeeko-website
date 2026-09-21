import { PencilSparkles } from "lucide-react";

function Logo(className) {
    return (
        <div className={`text-primary flex flex-row gap-2 justify-center items-center text-5xl`}>
            <h2 className={`font-mono text-primary ${className}`}>
                squeeko
            </h2>
            <PencilSparkles className="size-[0.5em]" />
        </div>
    );
}

export default Logo;
