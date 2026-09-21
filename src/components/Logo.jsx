import { PencilSparkles } from "lucide-react";

function Logo({className="text-primary text-4xl"}) {
    return (
        <div className={`flex flex-row justify-center items-start ${className}`}>
            <h2 className="font-mono">
                squeeko
            </h2>
            <PencilSparkles className="size-[0.5em] stroke-3" />
        </div>
    );
}

export default Logo;
