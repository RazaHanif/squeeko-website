import { PencilSparkles } from "lucide-react";

function Logo(className) {
    return (
        <div className={`text-primary text-4xl flex flex-row justify-center items-start text-5xl`}>
            <h2 className="font-mono">
                squeeko
            </h2>
            <PencilSparkles className="size-[0.5em] stroke-3" />
        </div>
    );
}

export default Logo;
