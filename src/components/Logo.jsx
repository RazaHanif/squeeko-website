import { PencilSparkles } from "lucide-react";

function Logo({className}) {
    return (
        <div className={`text-primary flex flex-row justify-center items-start ${className}`}>
            <h2 className="font-mono">
                SQUEEKO
            </h2>
            <PencilSparkles className="size-[0.5em] stroke-3" />
        </div>
    );
}

export default Logo;
